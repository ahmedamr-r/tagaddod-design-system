#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Copies all CSS module files to the dist directory with the correct structure
 */
function copyCSSModules() {
  try {
    // Get all CSS module files from components
    const cssModuleFiles = glob.sync('src/components/**/*.module.css', {
      cwd: path.resolve(__dirname, '..'),
      absolute: true
    });

    console.log(`Found ${cssModuleFiles.length} CSS module files to copy`);

    // Copy each CSS module file to dist with the correct path
    cssModuleFiles.forEach(filePath => {
      // Get the relative path from src
      const relativePath = path.relative(
        path.resolve(__dirname, '../src'),
        filePath
      );

      // Create the output directory in dist
      const outputDir = path.dirname(path.resolve(__dirname, '../dist', relativePath));
      fs.mkdirSync(outputDir, { recursive: true });

      // Copy the file
      const outputPath = path.resolve(__dirname, '../dist', relativePath);
      fs.copyFileSync(filePath, outputPath);

      console.log(`Copied: ${relativePath} -> dist/${relativePath}`);
    });

    console.log('✅ Successfully copied CSS module files to dist');
  } catch (error) {
    console.error('Error copying CSS modules:', error);
    process.exit(1);
  }
}

copyCSSModules();
