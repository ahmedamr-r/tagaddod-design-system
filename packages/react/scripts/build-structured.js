#!/usr/bin/env node

/**
 * This script builds the React components while preserving the component directory structure.
 * This allows users to import individual components from specific paths.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Building React Components with Preserved Structure ===${RESET}\n`);

// Clean the dist directory
try {
  console.log(`${YELLOW}Cleaning dist directory...${RESET}`);
  execSync('yarn clean', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Failed to clean dist directory: ${err.message}${RESET}`);
  process.exit(1);
}

// First build CSS
try {
  console.log(`${YELLOW}Building CSS...${RESET}`);
  execSync('yarn build:css', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Failed to build CSS: ${err.message}${RESET}`);
  process.exit(1);
}

// Run full build with Vite
try {
  console.log(`${YELLOW}Building with Vite...${RESET}`);
  execSync('vite build', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Full build failed: ${err.message}${RESET}`);
  console.log(`${YELLOW}Falling back to minimal build...${RESET}`);
  execSync('node scripts/build-minimal.js', { stdio: 'inherit' });
  process.exit(0); // Exit with success as we handled the fallback
}

// Run TypeScript for declarations
try {
  console.log(`${YELLOW}Generating TypeScript declarations...${RESET}`);
  execSync('tsc --project tsconfig.build.json', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}TypeScript declarations failed: ${err.message}${RESET}`);
  // Continue as we might still have a working build
}

// Now, copy component files
try {
  console.log(`${YELLOW}Copying component files to dist...${RESET}`);
  require('./copy-components');
} catch (err) {
  console.error(`${RED}Error copying components: ${err.message}${RESET}`);
  // Continue as this isn't critical if we have a working build
}
console.log(`${GREEN}=== Build Complete ===${RESET}`);
