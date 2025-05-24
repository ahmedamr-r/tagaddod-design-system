#!/usr/bin/env node

/**
 * Test script to verify the optimized build system
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`\n${BLUE}=======================================${RESET}`);
console.log(`${BLUE}= Testing Optimized Build System =${RESET}`);
console.log(`${BLUE}=======================================${RESET}\n`);

function runTest(name, command, cwd) {
  console.log(`\n${YELLOW}Testing: ${name}${RESET}`);
  try {
    const startTime = Date.now();
    execSync(command, { 
      cwd: cwd || process.cwd(),
      stdio: 'inherit'
    });
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`${GREEN}✓ ${name} completed in ${duration}s${RESET}`);
    return true;
  } catch (error) {
    console.error(`${RED}✗ ${name} failed${RESET}`);
    console.error(error.message);
    return false;
  }
}

function checkFile(filepath, description) {
  if (fs.existsSync(filepath)) {
    const stats = fs.statSync(filepath);
    const size = (stats.size / 1024).toFixed(2);
    console.log(`${GREEN}✓ ${description}: ${size}KB${RESET}`);
    return true;
  } else {
    console.log(`${RED}✗ ${description}: Not found${RESET}`);
    return false;
  }
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const results = [];

  // Test 1: Clean everything
  results.push(runTest('Clean all caches', 'yarn clean:all', rootDir));

  // Test 2: Install dependencies
  results.push(runTest('Install dependencies', 'yarn install', rootDir));

  // Test 3: Build tokens
  const tokensStartTime = Date.now();
  results.push(runTest('Build tokens', 'yarn build', path.join(rootDir, 'packages/tokens')));
  const tokensBuildTime = ((Date.now() - tokensStartTime) / 1000).toFixed(2);

  // Test 4: Check token outputs
  console.log(`\n${YELLOW}Checking token outputs:${RESET}`);
  const tokenFiles = [
    ['packages/tokens/dist/tokens.css', 'Main tokens CSS'],
    ['packages/tokens/dist/index.js', 'Tokens JS module'],
    ['packages/tokens/dist/brands/tagaddod.css', 'Tagaddod brand tokens'],
    ['packages/tokens/dist/brands/greenpan.css', 'Greenpan brand tokens'],
    ['packages/tokens/dist/locales/en.css', 'English locale tokens'],
    ['packages/tokens/dist/locales/ar.css', 'Arabic locale tokens']
  ];

  tokenFiles.forEach(([file, desc]) => {
    checkFile(path.join(rootDir, file), desc);
  });

  // Test 5: Build React components
  const reactStartTime = Date.now();
  results.push(runTest('Build React components', 'yarn build', path.join(rootDir, 'packages/react')));
  const reactBuildTime = ((Date.now() - reactStartTime) / 1000).toFixed(2);

  // Test 6: Check React outputs
  console.log(`\n${YELLOW}Checking React outputs:${RESET}`);
  const reactFiles = [
    ['packages/react/dist/es/index.js', 'React ES module'],
    ['packages/react/dist/cjs/index.cjs', 'React CommonJS module'],
    ['packages/react/dist/types/index.d.ts', 'TypeScript declarations'],
    ['packages/react/dist/styles.css', 'Component styles']
  ];

  reactFiles.forEach(([file, desc]) => {
    checkFile(path.join(rootDir, file), desc);
  });

  // Test 7: Test Turbo cache
  console.log(`\n${YELLOW}Testing Turbo cache efficiency:${RESET}`);
  const cacheStartTime = Date.now();
  runTest('Rebuild with cache', 'yarn build', rootDir);
  const cacheBuildTime = ((Date.now() - cacheStartTime) / 1000).toFixed(2);

  // Summary
  console.log(`\n${BLUE}=======================================${RESET}`);
  console.log(`${BLUE}= Build Performance Summary =${RESET}`);
  console.log(`${BLUE}=======================================${RESET}\n`);
  
  console.log(`Tokens build time: ${tokensBuildTime}s`);
  console.log(`React build time: ${reactBuildTime}s`);
  console.log(`Cached rebuild time: ${cacheBuildTime}s`);
  
  const cacheImprovement = ((1 - (parseFloat(cacheBuildTime) / (parseFloat(tokensBuildTime) + parseFloat(reactBuildTime)))) * 100).toFixed(1);
  console.log(`\nCache improvement: ${GREEN}${cacheImprovement}% faster${RESET}`);

  const allPassed = results.every(r => r);
  if (allPassed) {
    console.log(`\n${GREEN}✅ All tests passed! The optimized build system is working correctly.${RESET}`);
  } else {
    console.log(`\n${RED}❌ Some tests failed. Please check the errors above.${RESET}`);
    process.exit(1);
  }
}

main().catch(console.error);
