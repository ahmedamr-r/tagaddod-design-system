#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Storybook directly...');

const projectRoot = path.resolve(__dirname, '..');

// First ensure dependencies are built
console.log('🔍 Checking dependencies...');

// Check tokens
const tokensCssPath = path.join(projectRoot, 'packages/tokens/dist/css/tokens.css');
if (!fs.existsSync(tokensCssPath)) {
  console.log('📦 Building tokens first...');
  execSync('yarn workspace @tagaddod/tokens build', { 
    stdio: 'inherit',
    cwd: projectRoot
  });
}

// Check React CSS
const reactCssPath = path.join(projectRoot, 'packages/react/dist/styles/index.css');
if (!fs.existsSync(reactCssPath)) {
  console.log('⚛️ Building React CSS first...');
  try {
    fs.mkdirSync(path.join(projectRoot, 'packages/react/dist/styles'), { recursive: true });
    execSync('yarn workspace @tagaddod/react build', { 
      stdio: 'inherit',
      cwd: projectRoot
    });
  } catch (error) {
    console.error('Failed to build React:', error.message);
    // Try building just CSS
    execSync('yarn workspace @tagaddod/react build:css', { 
      stdio: 'inherit',
      cwd: projectRoot
    });
  }
}

// Kill any existing process on port 6006
try {
  execSync('lsof -ti:6006 | xargs kill -9', { stdio: 'ignore' });
  console.log('Cleared port 6006');
} catch {
  // Port was already free
}

// Start Storybook with better error handling
console.log('🎭 Starting Storybook...');
const storybookProcess = spawn('yarn', ['workspace', '@tagaddod/storybook', 'storybook'], {
  stdio: 'inherit',
  cwd: projectRoot,
  shell: true,
  env: {
    ...process.env,
    NODE_OPTIONS: '--max-old-space-size=4096',
  }
});

storybookProcess.on('error', (error) => {
  console.error('❌ Failed to start Storybook:', error);
  process.exit(1);
});

storybookProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Storybook exited with code ${code}`);
    console.log('\nTroubleshooting tips:');
    console.log('1. Run: yarn workspace @tagaddod/tokens build');
    console.log('2. Run: yarn workspace @tagaddod/react build');
    console.log('3. Check that node_modules is up to date: yarn install');
    console.log('4. Try clearing cache: yarn clean');
    process.exit(code);
  }
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down Storybook...');
  storybookProcess.kill('SIGINT');
  process.exit(0);
});
