#!/usr/bin/env node

/**
 * This script helps diagnose React build issues that might occur in CI environments.
 * Run this before the main build to check for potential problems.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

console.log(`${YELLOW}=== React Build Environment Check ====${RESET}\n`);

// Check if we're in CI
const isCI = process.env.CI === 'true';
console.log(`Running in CI environment: ${isCI ? `${GREEN}Yes${RESET}` : `${YELLOW}No${RESET}`}`);

// Check Node.js version
const nodeVersion = process.version;
console.log(`Node.js version: ${nodeVersion}`);

// Check for critical files
const checkFile = (filePath, critical = true) => {
  const fullPath = path.resolve(__dirname, '..', filePath);
  try {
    fs.accessSync(fullPath, fs.constants.F_OK);
    console.log(`${GREEN}✓${RESET} Found: ${filePath}`);
    return true;
  } catch (err) {
    if (critical) {
      console.log(`${RED}✗ MISSING CRITICAL FILE${RESET}: ${filePath}`);
    } else {
      console.log(`${YELLOW}⚠ Missing optional file${RESET}: ${filePath}`);
    }
    return false;
  }
};

// Check dependencies
console.log('\nChecking critical files:');
checkFile('vite.config.ts');
checkFile('tsconfig.json');
checkFile('src/index.ts');
checkFile('package.json');
checkFile('package-lock.json', false);
checkFile('yarn.lock', false);

// Check tokens package
console.log('\nChecking tokens package:');
const tokensPath = path.resolve(__dirname, '../../tokens/dist/css/tokens.css');
if (fs.existsSync(tokensPath)) {
  console.log(`${GREEN}✓${RESET} Tokens package built and available`);
  
  // Check tokens content (just length as a simple check)
  const tokensContent = fs.readFileSync(tokensPath, 'utf8');
  console.log(`  Tokens file size: ${tokensContent.length} bytes`);
  
  if (tokensContent.length < 100) {
    console.log(`${RED}⚠ Tokens file seems too small!${RESET}`);
  }
} else {
  console.log(`${RED}✗ Tokens package not built!${RESET}`);
  console.log(`  Run "cd ../../tokens && yarn build" first`);
}

// Check for Vite compat issues
console.log('\nChecking Vite compatibility:');
try {
  const packageJson = require('../package.json');
  const viteVersion = packageJson.devDependencies.vite;
  console.log(`Vite version: ${viteVersion}`);
  
  // Check for known problematic plugins
  if (packageJson.devDependencies['vite-plugin-css-injected-by-js']) {
    console.log(`${YELLOW}⚠ Using vite-plugin-css-injected-by-js which may have CI issues${RESET}`);
  }
  
} catch (err) {
  console.log(`${RED}✗ Error checking package.json: ${err.message}${RESET}`);
}

// Check for problematic CSS imports
console.log('\nChecking CSS imports:');
try {
  const mainCssPath = path.resolve(__dirname, '../src/styles/main.css');
  if (fs.existsSync(mainCssPath)) {
    const cssContent = fs.readFileSync(mainCssPath, 'utf8');
    if (cssContent.includes('@import \'@tagaddod/tokens')) {
      console.log(`${YELLOW}⚠ Using outdated package name in CSS imports: @tagaddod/tokens${RESET}`);
      console.log('  Should be: @tagaddod-design/tokens');
    } else if (cssContent.includes('@import \'@tagaddod-design/tokens')) {
      console.log(`${GREEN}✓${RESET} CSS imports use correct package name`);
    }
  }
} catch (err) {
  console.log(`Error checking CSS imports: ${err.message}`);
}

// Ensure Node modules are correctly installed
console.log('\nChecking node_modules:');
try {
  fs.accessSync(path.resolve(__dirname, '../node_modules'), fs.constants.F_OK);
  console.log(`${GREEN}✓${RESET} node_modules directory exists`);
} catch (err) {
  console.log(`${RED}✗ node_modules not found! Run yarn install first.${RESET}`);
}

// Print some build guidance
console.log('\nTo debug build issues:');
console.log('1. Make sure tokens are built first: cd ../tokens && yarn build');
console.log('2. Try building with Vite debug: DEBUG=vite:* yarn build');
console.log('3. Check CSS handling: node scripts/build-css.js');
console.log('4. Try skipping TypeScript: SKIP_TS=true yarn build');

console.log(`\n${YELLOW}=== Environment Check Complete ===${RESET}`);
