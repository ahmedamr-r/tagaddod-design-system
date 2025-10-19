#!/usr/bin/env node

/**
 * Auto-increment local version for Verdaccio testing
 *
 * This script manages local package versions for testing without affecting
 * the production version controlled by Changesets.
 *
 * Version format: <base-version>-local.<counter>
 * Example: 0.1.29 → 0.1.29-local.1 → 0.1.29-local.2 → ...
 *
 * When base version changes (via Changesets), counter resets to 1.
 *
 * Usage:
 *   node scripts/bump-local-version.js [--package=<name>] [--reset]
 *
 * Options:
 *   --package=<name>  Bump specific package only (default: all)
 *   --reset           Reset counter to 1
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const COUNTER_FILE = path.join(ROOT_DIR, '.local-version-counter');

const PACKAGES = [
  { name: '@tagaddod-design/tokens', path: 'packages/tokens' },
  { name: '@tagaddod-design/react', path: 'packages/react' }
];

// Parse command line arguments
const args = process.argv.slice(2);
const targetPackage = args.find(arg => arg.startsWith('--package='))?.split('=')[1];
const shouldReset = args.includes('--reset');

/**
 * Read current version from package.json
 */
function readPackageVersion(packagePath) {
  const pkgPath = path.join(ROOT_DIR, packagePath, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  return pkg.version;
}

/**
 * Write new version to package.json
 */
function writePackageVersion(packagePath, newVersion) {
  const pkgPath = path.join(ROOT_DIR, packagePath, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  pkg.version = newVersion;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
}

/**
 * Read local version counter state
 * Format: { baseVersion: "0.1.29", counter: 5 }
 */
function readCounter() {
  if (!existsSync(COUNTER_FILE)) {
    return null;
  }

  try {
    const data = JSON.parse(readFileSync(COUNTER_FILE, 'utf-8'));
    return data;
  } catch (error) {
    console.warn('⚠️  Could not read counter file, starting fresh');
    return null;
  }
}

/**
 * Write counter state
 */
function writeCounter(baseVersion, counter) {
  const data = { baseVersion, counter, lastUpdated: new Date().toISOString() };
  writeFileSync(COUNTER_FILE, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

/**
 * Extract base version (remove -local.X suffix if present)
 */
function getBaseVersion(version) {
  return version.replace(/-local\.\d+$/, '');
}

/**
 * Bump version for a package
 */
function bumpPackageVersion(pkg) {
  const currentVersion = readPackageVersion(pkg.path);
  const baseVersion = getBaseVersion(currentVersion);

  // Read current counter state
  let counterState = readCounter();
  let counter = 1;

  if (shouldReset) {
    console.log(`🔄 Resetting counter for ${pkg.name}`);
    counter = 1;
  } else if (counterState && counterState.baseVersion === baseVersion) {
    // Base version hasn't changed, increment counter
    counter = counterState.counter + 1;
  } else {
    // Base version changed (via Changesets), reset counter
    if (counterState) {
      console.log(`📦 Base version changed: ${counterState.baseVersion} → ${baseVersion}`);
      console.log(`🔄 Resetting counter to 1`);
    }
    counter = 1;
  }

  // Create new local version
  const newVersion = `${baseVersion}-local.${counter}`;

  // Update package.json
  writePackageVersion(pkg.path, newVersion);

  // Save counter state
  writeCounter(baseVersion, counter);

  return {
    package: pkg.name,
    previousVersion: currentVersion,
    newVersion,
    baseVersion,
    counter
  };
}

/**
 * Main execution
 */
function main() {
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║  Tagaddod Design System - Local Version Bumper               ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  // Filter packages if specific package requested
  const packagesToProcess = targetPackage
    ? PACKAGES.filter(pkg => pkg.name === targetPackage || pkg.name.includes(targetPackage))
    : PACKAGES;

  if (packagesToProcess.length === 0) {
    console.error(`❌ Package not found: ${targetPackage}`);
    console.error(`\nAvailable packages:`);
    PACKAGES.forEach(pkg => console.error(`  - ${pkg.name}`));
    process.exit(1);
  }

  const results = [];

  for (const pkg of packagesToProcess) {
    console.log(`📦 Processing ${pkg.name}...`);
    const result = bumpPackageVersion(pkg);
    results.push(result);

    console.log(`   ${result.previousVersion} → ${result.newVersion}`);
    console.log(`   Base: ${result.baseVersion} | Counter: ${result.counter}\n`);
  }

  // Summary
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║  Version Bump Summary                                         ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  results.forEach(result => {
    console.log(`✅ ${result.package}`);
    console.log(`   Version: ${result.newVersion}`);
  });

  console.log(`\n📝 Counter state saved to: ${path.basename(COUNTER_FILE)}`);
  console.log('\n🎯 Next steps:');
  console.log('   1. Build packages: yarn build');
  console.log('   2. Publish to Verdaccio: yarn publish:local');
  console.log('   OR use: yarn dev:local (watch mode with auto-publish)\n');

  console.log('✨ Done!\n');
}

// Run the script
main();
