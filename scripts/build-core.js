#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Building core packages (tokens + react)...');

const projectRoot = path.resolve(__dirname, '..');

// Build tokens first (since React depends on tokens)
console.log('📦 Building tokens...');
try {
  execSync('yarn workspace @tagaddod/tokens build', { 
    stdio: 'inherit',
    cwd: projectRoot
  });
  console.log('✅ Tokens built successfully!');
} catch (error) {
  console.error('❌ Failed to build tokens:', error.message);
  process.exit(1);
}

// Build React
console.log('⚛️ Building React components...');
try {
  execSync('yarn workspace @tagaddod/react build', { 
    stdio: 'inherit',
    cwd: projectRoot
  });
  console.log('✅ React components built successfully!');
} catch (error) {
  console.error('❌ Failed to build React components:', error.message);
  process.exit(1);
}

console.log('✨ Core packages built successfully!');
