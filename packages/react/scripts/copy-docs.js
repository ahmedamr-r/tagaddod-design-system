#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const SOURCE_DIR = path.resolve(__dirname, '../src/components');

// Multiple target directories for documentation sync
const TARGET_DIRS = [
  // External template (original)
  '/Users/me-mac/a-amr/work/tagaddod/tagaddod-startert-template-main/.component-documentation',
  // Internal monorepo test package
  path.resolve(__dirname, '../../../apps/template-test/.component-documentation')
];

async function copyMdxFiles() {
  try {
    console.log('🚀 Starting MDX documentation copy...');
    console.log(`📂 Source: ${SOURCE_DIR}`);
    console.log(`📂 Targets: ${TARGET_DIRS.length} directories`);

    // Ensure all target directories exist
    for (const targetDir of TARGET_DIRS) {
      try {
        await fs.access(targetDir);
      } catch {
        console.log(`📁 Creating target directory: ${targetDir}`);
        await fs.mkdir(targetDir, { recursive: true });
      }
    }

    // Find all MDX files in components directory
    const pattern = path.join(SOURCE_DIR, '**/*.mdx');
    const mdxFiles = await glob(pattern);

    if (mdxFiles.length === 0) {
      console.log('⚠️  No MDX files found in components directory');
      return;
    }

    console.log(`📄 Found ${mdxFiles.length} MDX files to copy`);

    // Copy each MDX file to all target directories
    let totalCopied = 0;
    const errors = [];

    for (const sourcePath of mdxFiles) {
      const filename = path.basename(sourcePath);
      let fileCopiedCount = 0;

      for (const targetDir of TARGET_DIRS) {
        try {
          const targetPath = path.join(targetDir, filename);
          await fs.copyFile(sourcePath, targetPath);
          fileCopiedCount++;
          totalCopied++;
        } catch (error) {
          console.error(`  ❌ Failed to copy ${filename} to ${targetDir}: ${error.message}`);
          errors.push({ file: filename, target: targetDir, error: error.message });
        }
      }

      if (fileCopiedCount === TARGET_DIRS.length) {
        console.log(`  ✅ ${filename} → ${fileCopiedCount} locations`);
      } else {
        console.log(`  ⚠️  ${filename} → ${fileCopiedCount}/${TARGET_DIRS.length} locations`);
      }
    }

    // Summary
    console.log('\n📊 Copy Summary:');
    console.log(`  ✅ Total copies: ${totalCopied} (${mdxFiles.length} files × ${TARGET_DIRS.length} locations)`);
    if (errors.length > 0) {
      console.log(`  ❌ Failed copies: ${errors.length}`);
      errors.forEach(({ file, target, error }) => {
        console.error(`     - ${file} → ${path.basename(target)}: ${error}`);
      });
      // Don't exit with error if at least one target succeeded
      if (totalCopied === 0) {
        process.exit(1);
      }
    }

    console.log(`\n✨ Documentation copied to ${TARGET_DIRS.length} locations successfully!`);
  } catch (error) {
    console.error('❌ Error during copy operation:', error.message);
    process.exit(1);
  }
}

// Run the copy operation
copyMdxFiles().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});