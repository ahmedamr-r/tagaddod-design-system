#!/usr/bin/env node

/**
 * This script builds the React components and ensures each component folder 
 * contains the complete implementation, not just references.
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

console.log(`${BLUE}=== Building React Components with Full Implementations ===${RESET}\n`);

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

// Run diagnostics to ensure environment is ready
try {
  console.log(`${YELLOW}Running build diagnostics...${RESET}`);
  execSync('node scripts/diagnose-build.js', { stdio: 'inherit' });
} catch (err) {
  console.log(`${YELLOW}Diagnostics completed with warnings. Continuing...${RESET}`);
}

// Run Vite build
try {
  console.log(`${YELLOW}Building with Vite...${RESET}`);
  execSync('vite build', { stdio: 'inherit' });
  console.log(`${GREEN}✓${RESET} Vite build completed successfully`);
} catch (err) {
  console.error(`${RED}Build failed: ${err.message}${RESET}`);
  process.exit(1);
}

// Create component export files with proper paths
try {
  console.log(`${YELLOW}Creating component exports with full implementations...${RESET}`);
  execSync('node scripts/create-full-components.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Failed to create component exports: ${err.message}${RESET}`);
  process.exit(1);
}

// Update package.json exports field
try {
  console.log(`${YELLOW}Updating package.json exports...${RESET}`);
  execSync('node scripts/update-package-exports.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Failed to update package.json: ${err.message}${RESET}`);
}

// Create ESM barrel exports
try {
  console.log(`${YELLOW}Creating ESM barrel exports...${RESET}`);
  execSync('node scripts/create-esm-exports.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Failed to create ESM exports: ${err.message}${RESET}`);
}

console.log(`\n${GREEN}=== Build Completed Successfully ===${RESET}`);

// Output import examples
console.log(`\n${BLUE}Import Examples:${RESET}`);
console.log(`import { Button } from '@tagaddod-design/react';            // Main bundle`);
console.log(`import { Button } from '@tagaddod-design/react/components/Button'; // Direct component`);
console.log(`import '@tagaddod-design/react/styles';                    // Styles import`);
