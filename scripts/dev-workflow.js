#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting development workflow...');

// Step 1: Build tokens first
console.log('📦 Building tokens...');
try {
  execSync('yarn workspace @tagaddod/tokens build', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
  console.log('✅ Tokens built successfully!');
} catch (error) {
  console.error('❌ Failed to build tokens:', error.message);
  process.exit(1);
}

// Step 2: Build React CSS
console.log('🎨 Building React CSS...');
try {
  execSync('yarn workspace @tagaddod/react build:css', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
  console.log('✅ React CSS built successfully!');
} catch (error) {
  console.error('❌ Failed to build React CSS:', error.message);
  process.exit(1);
}

// Step 3: Start all dev servers in parallel
console.log('🔥 Starting development servers...');
const devProcess = spawn('yarn', ['dev'], {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '..'),
  shell: true
});

devProcess.on('error', (error) => {
  console.error('❌ Failed to start dev servers:', error);
  process.exit(1);
});

devProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Dev servers exited with code ${code}`);
    process.exit(code);
  }
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down dev servers...');
  devProcess.kill('SIGINT');
  process.exit(0);
});
