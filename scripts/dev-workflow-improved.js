#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting development workflow...');

// Step 0: Clean build artifacts (optional but recommended)
console.log('🧹 Cleaning build artifacts...');
try {
  execSync('yarn clean', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
  console.log('✅ Clean completed!');
} catch (error) {
  console.error('❌ Failed to clean:', error.message);
  // Non-critical, continue anyway
}

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

// Step 2: Build React package (includes TypeScript types)
console.log('⚛️ Building React package...');
try {
  execSync('yarn workspace @tagaddod/react build', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
  console.log('✅ React package built successfully!');
} catch (error) {
  console.error('❌ Failed to build React package:', error.message);
  process.exit(1);
}

// Step 3: Type check all packages
console.log('📝 Running type checks...');
try {
  execSync('yarn type-check', { 
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });
  console.log('✅ Type check passed!');
} catch (error) {
  console.error('❌ Type check failed:', error.message);
  // Non-critical for development, continue anyway
  console.warn('⚠️ Type check failed, but continuing...');
}

// Step 4: Start all dev servers in parallel
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
