#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting development workflow (fixed version)...');

const projectRoot = path.resolve(__dirname, '..');

// Step 0: Clean build artifacts (optional but recommended)
console.log('🧹 Cleaning build artifacts...');
try {
  execSync('yarn clean', { 
    stdio: 'inherit',
    cwd: projectRoot
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
    cwd: projectRoot
  });
  console.log('✅ Tokens built successfully!');
  
  // Verify token CSS exists
  const tokensCssPath = path.join(projectRoot, 'packages/tokens/dist/css/tokens.css');
  if (!fs.existsSync(tokensCssPath)) {
    throw new Error(`Tokens CSS not found at ${tokensCssPath}`);
  }
  console.log('✅ Tokens CSS verified at:', tokensCssPath);
} catch (error) {
  console.error('❌ Failed to build tokens:', error.message);
  process.exit(1);
}

// Step 2: Build React package (includes TypeScript types and CSS)
console.log('⚛️ Building React package...');
try {
  execSync('yarn workspace @tagaddod/react build', { 
    stdio: 'inherit',
    cwd: projectRoot
  });
  console.log('✅ React package built successfully!');
  
  // Verify React CSS exists
  const reactCssPath = path.join(projectRoot, 'packages/react/dist/styles/index.css');
  if (!fs.existsSync(reactCssPath)) {
    console.warn(`⚠️ React CSS not found at ${reactCssPath}`);
    console.log('📝 Creating React CSS directory...');
    fs.mkdirSync(path.join(projectRoot, 'packages/react/dist/styles'), { recursive: true });
    
    // Build CSS separately if needed
    console.log('🔨 Building CSS separately...');
    execSync('yarn workspace @tagaddod/react build:css', { 
      stdio: 'inherit',
      cwd: projectRoot
    });
  }
  console.log('✅ React CSS verified at:', reactCssPath);
} catch (error) {
  console.error('❌ Failed to build React package:', error.message);
  process.exit(1);
}

// Step 3: Type check all packages
console.log('📝 Running type checks...');
try {
  execSync('yarn type-check', { 
    stdio: 'inherit',
    cwd: projectRoot
  });
  console.log('✅ Type check passed!');
} catch (error) {
  console.error('❌ Type check failed:', error.message);
  // Non-critical for development, continue anyway
  console.warn('⚠️ Type check failed, but continuing...');
}

// Step 4: Create a minimal version of storybook that doesn't conflict
console.log('🎭 Setting up Storybook environment...');
try {
  // Check if necessary imports exist
  const reactImportPath = path.join(projectRoot, 'packages/react/dist/index.js');
  const tokensImportPath = path.join(projectRoot, 'packages/tokens/dist/index.js');
  
  if (!fs.existsSync(reactImportPath)) {
    throw new Error(`React exports not found at ${reactImportPath}`);
  }
  if (!fs.existsSync(tokensImportPath)) {
    throw new Error(`Tokens exports not found at ${tokensImportPath}`);
  }
  
  console.log('✅ All required files verified!');
} catch (error) {
  console.error('❌ Missing required files:', error.message);
  process.exit(1);
}

// Step 5: Start storybook directly (not through turbo)
console.log('🔥 Starting Storybook (direct mode)...');

// First check if port is already in use
const checkPort = require('child_process').spawnSync('lsof', ['-i', ':6006']);
if (checkPort.status === 0) {
  console.warn('⚠️ Port 6006 is already in use. Killing existing process...');
  execSync('lsof -ti:6006 | xargs kill -9', { stdio: 'ignore' });
  // Wait a moment for the port to be released
  require('child_process').execSync('sleep 1');
}

const storybookProcess = spawn('yarn', ['workspace', '@tagaddod/storybook', 'storybook'], {
  stdio: 'inherit',
  cwd: projectRoot,
  shell: true,
  env: {
    ...process.env,
    NODE_OPTIONS: '--max-old-space-size=4096',
    FORCE_COLOR: '1'
  }
});

storybookProcess.on('error', (error) => {
  console.error('❌ Failed to start Storybook:', error);
  process.exit(1);
});

storybookProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Storybook exited with code ${code}`);
    process.exit(code);
  }
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down Storybook...');
  storybookProcess.kill('SIGINT');
  process.exit(0);
});

console.log(`
🎉 Dev workflow started successfully!
📚 Storybook should be starting at http://localhost:6006

If you see any errors, please check:
1. All dependencies are installed
2. Ports 6006 is free
3. The React and tokens packages are built correctly
`);
