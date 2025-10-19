#!/usr/bin/env node

/**
 * Publish Tagaddod Design System packages to local Verdaccio registry
 * with automatic version bumping and documentation sync
 *
 * This script automates:
 * 1. Auto-bumping local version (0.1.29-local.X)
 * 2. Building tokens and react packages
 * 3. Syncing .mdx documentation to template-test
 * 4. Publishing to local Verdaccio registry (http://localhost:4873)
 * 5. Optionally updating template-test package
 *
 * Usage:
 *   node scripts/publish-local.js [options]
 *
 * Options:
 *   --skip-build      Skip build step (use existing dist/)
 *   --skip-bump       Skip version bump
 *   --skip-docs       Skip documentation sync
 *   --skip-tokens     Skip tokens package
 *   --skip-react      Skip react package
 *   --auto-update     Auto-update template-test after publish
 */

import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const VERDACCIO_REGISTRY = 'http://localhost:4873';
const PACKAGES_TO_PUBLISH = [
  { name: '@tagaddod-design/tokens', path: 'packages/tokens' },
  { name: '@tagaddod-design/react', path: 'packages/react' }
];

// Parse command line arguments
const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
const skipBump = args.includes('--skip-bump');
const skipDocs = args.includes('--skip-docs');
const skipTokens = args.includes('--skip-tokens');
const skipReact = args.includes('--skip-react');
const autoUpdate = args.includes('--auto-update');

/**
 * Execute command with error handling
 */
function execCommand(command, options = {}) {
  console.log(`\n🔧 ${command}`);
  try {
    execSync(command, {
      stdio: 'inherit',
      cwd: ROOT_DIR,
      ...options
    });
    return true;
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    return false;
  }
}

/**
 * Execute command silently (for checks)
 */
function execSilent(command) {
  try {
    execSync(command, { stdio: 'ignore', cwd: ROOT_DIR });
    return true;
  } catch {
    return false;
  }
}

/**
 * Get package version from package.json
 */
function getPackageVersion(packagePath) {
  try {
    const pkgJsonPath = path.join(ROOT_DIR, packagePath, 'package.json');
    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));
    return pkgJson.version;
  } catch (error) {
    console.error(`❌ Could not read package.json for ${packagePath}`);
    return null;
  }
}

/**
 * Check if Verdaccio is running
 */
function checkVerdaccioRunning() {
  return execSilent(`curl -s ${VERDACCIO_REGISTRY} > /dev/null`);
}

/**
 * Check if package exists in Verdaccio at specific version
 */
function packageExistsInVerdaccio(packageName, version) {
  try {
    execSync(
      `npm view ${packageName}@${version} version --registry ${VERDACCIO_REGISTRY}`,
      { stdio: 'ignore' }
    );
    return true;
  } catch {
    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║  Tagaddod Design System - Local Publishing Script             ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  // Step 0: Check if Verdaccio is running
  if (!checkVerdaccioRunning()) {
    console.error('❌ Verdaccio is not running!');
    console.error('\nPlease start Verdaccio first:');
    console.error('  npm install -g verdaccio  (if not installed)');
    console.error('  yarn registry:start\n');
    process.exit(1);
  }

  console.log('✅ Verdaccio is running at', VERDACCIO_REGISTRY);

  // Step 1: Bump local version (unless skipped)
  if (!skipBump) {
    console.log('\n📦 Step 1: Bumping local version...\n');

    if (!execCommand('node scripts/bump-local-version.js')) {
      console.error('❌ Failed to bump version');
      process.exit(1);
    }
  } else {
    console.log('\n⏭️  Skipping version bump (--skip-bump flag)\n');
  }

  // Step 2: Build packages (unless skipped)
  if (!skipBuild) {
    console.log('\n📦 Step 2: Building packages...');

    if (!skipTokens) {
      console.log('\n→ Building @tagaddod-design/tokens...');
      if (!execCommand('yarn build:tokens')) {
        console.error('❌ Failed to build tokens package');
        process.exit(1);
      }
    }

    if (!skipReact) {
      console.log('\n→ Building @tagaddod-design/react...');
      if (!execCommand('yarn build:react')) {
        console.error('❌ Failed to build react package');
        process.exit(1);
      }
    }
  } else {
    console.log('\n⏭️  Skipping build step (--skip-build flag)');
  }

  // Step 3: Sync documentation (unless skipped)
  if (!skipDocs && !skipReact) {
    console.log('\n📚 Step 3: Syncing documentation to template-test...');

    const copyDocsScript = path.join(ROOT_DIR, 'packages/react/scripts/copy-docs.js');
    if (existsSync(copyDocsScript)) {
      if (!execCommand(`node ${copyDocsScript}`)) {
        console.warn('⚠️  Documentation sync failed, continuing...');
      }
    } else {
      console.log('⚠️  copy-docs.js not found, skipping documentation sync');
    }
  } else if (skipDocs) {
    console.log('\n⏭️  Skipping documentation sync (--skip-docs flag)');
  }

  // Step 4: Publish packages to Verdaccio
  console.log('\n📤 Step 4: Publishing packages to Verdaccio...');

  let publishedPackages = [];

  for (const pkg of PACKAGES_TO_PUBLISH) {
    // Skip if requested
    if ((pkg.name.includes('tokens') && skipTokens) ||
        (pkg.name.includes('react') && skipReact)) {
      console.log(`\n⏭️  Skipping ${pkg.name}`);
      continue;
    }

    const version = getPackageVersion(pkg.path);
    if (!version) {
      console.error(`❌ Could not determine version for ${pkg.name}`);
      continue;
    }

    console.log(`\n→ Publishing ${pkg.name}@${version}...`);

    // Check if already published
    if (packageExistsInVerdaccio(pkg.name, version)) {
      console.log(`⚠️  ${pkg.name}@${version} already exists in Verdaccio`);
      console.log(`   Unpublishing first...`);
      execSilent(`cd ${pkg.path} && npm unpublish ${pkg.name}@${version} --registry ${VERDACCIO_REGISTRY} --force`);
    }

    const publishCommand = `cd ${pkg.path} && npm publish --registry ${VERDACCIO_REGISTRY}`;

    if (execCommand(publishCommand)) {
      console.log(`✅ Successfully published ${pkg.name}@${version}`);
      publishedPackages.push({ name: pkg.name, version });
    } else {
      console.error(`❌ Failed to publish ${pkg.name}`);
    }
  }

  // Step 5: Auto-update template-test (if requested)
  if (autoUpdate && publishedPackages.length > 0) {
    console.log('\n🔄 Step 5: Updating template-test dependencies...');

    const templateTestPath = path.join(ROOT_DIR, 'apps/template-test');
    if (existsSync(templateTestPath)) {
      const updateCommand = `cd apps/template-test && npm install @tagaddod-design/react@latest @tagaddod-design/tokens@latest --registry ${VERDACCIO_REGISTRY}`;
      if (!execCommand(updateCommand)) {
        console.warn('⚠️  Failed to update template-test, you can update manually');
      }
    } else {
      console.log('⚠️  template-test not found, skipping update');
    }
  }

  // Summary
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║  Publishing Summary                                            ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  if (publishedPackages.length > 0) {
    console.log('✅ Published packages:');
    publishedPackages.forEach(pkg => {
      console.log(`   • ${pkg.name}@${pkg.version}`);
    });

    console.log('\n📋 Next steps:');

    if (!autoUpdate) {
      console.log('   1. Update template-test package:');
      console.log('      cd apps/template-test && npm run update:design-system\n');
      console.log('   2. Or run publish with auto-update:');
      console.log('      yarn publish:local --auto-update\n');
    } else {
      console.log('   ✅ template-test updated automatically\n');
    }

    console.log('   📊 View packages in Verdaccio UI:');
    console.log('      http://localhost:4873\n');

    console.log('   🚀 Start template-test:');
    console.log('      cd apps/template-test && npm run dev\n');
  } else {
    console.log('⚠️  No packages were published');
    console.log('   This may be because they already exist at the current version');
    console.log('   or there was an error during publishing.\n');
  }

  console.log('✨ Done!\n');
}

// Run the script
main().catch(error => {
  console.error('\n❌ Unexpected error:', error);
  process.exit(1);
});
