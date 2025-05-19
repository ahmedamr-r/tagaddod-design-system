#!/usr/bin/env node
/**
 * Fix Storybook dependencies by ensuring core packages are built correctly
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Storybook dependencies...');

const projectRoot = path.resolve(__dirname, '..');

// Step 1: Ensure all packages are installed
console.log('📦 Installing dependencies...');
execSync('yarn install', { stdio: 'inherit', cwd: projectRoot });

// Step 2: Clean and rebuild tokens
console.log('🧹 Cleaning and rebuilding tokens...');
execSync('yarn workspace @tagaddod-design/tokens clean', { stdio: 'inherit', cwd: projectRoot });
execSync('yarn workspace @tagaddod-design/tokens build', { stdio: 'inherit', cwd: projectRoot });

// Step 3: Clean and rebuild React (with CSS)
console.log('⚛️ Cleaning and rebuilding React package...');
execSync('yarn workspace @tagaddod-design/react clean', { stdio: 'inherit', cwd: projectRoot });

// Create the dist/styles directory if it doesn't exist
const stylesDir = path.join(projectRoot, 'packages/react/dist/styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

// Build React package
execSync('yarn workspace @tagaddod-design/react build', { stdio: 'inherit', cwd: projectRoot });

// Verify CSS was created
const reactCssPath = path.join(projectRoot, 'packages/react/dist/styles/index.css');
if (!fs.existsSync(reactCssPath)) {
  console.log('🚨 CSS not created by build, trying separate CSS build...');
  execSync('yarn workspace @tagaddod-design/react build:css', { stdio: 'inherit', cwd: projectRoot });
}

// Step 4: Clear Storybook cache
console.log('🗑️ Clearing Storybook cache...');
const storybookCacheDir = path.join(projectRoot, 'packages/storybook/node_modules/.cache');
if (fs.existsSync(storybookCacheDir)) {
  fs.rmSync(storybookCacheDir, { recursive: true, force: true });
}

// Step 5: Verify all required files exist
console.log('✅ Verifying required files...');

const requiredFiles = [
  'packages/tokens/dist/css/tokens.css',
  'packages/react/dist/styles/index.css',
  'packages/react/dist/index.js',
  'packages/tokens/dist/index.js'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  const fullPath = path.join(projectRoot, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('\n✅ All dependencies fixed! You can now run Storybook.');
  console.log('\nRun one of these commands:');
  console.log('  yarn workspace @tagaddod-design/storybook storybook');
  console.log('  yarn storybook');
} else {
  console.log('\n❌ Some files are still missing. Please check the build output above.');
  process.exit(1);
}
