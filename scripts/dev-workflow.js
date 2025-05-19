#!/usr/bin/env node
/**
 * Consolidated Development Workflow Script
 * Handles build tasks and starts development environment
 */
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Tagaddod Design System development workflow...');

const projectRoot = path.resolve(__dirname, '..');

/**
 * Run a command with proper error handling
 * @param {string} command Command to execute
 * @param {string} description Description of what's being done
 * @param {boolean} critical Whether failure should stop the script
 */
function runCommand(command, description, critical = true) {
  console.log(`🔄 ${description}...`);
  try {
    execSync(command, { 
      stdio: 'inherit',
      cwd: projectRoot
    });
    console.log(`✅ ${description} succeeded!`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    if (critical) {
      process.exit(1);
    }
    return false;
  }
}

/**
 * Verify a file exists
 * @param {string} filePath Path to check
 * @param {string} description Description of the file
 * @param {boolean} critical Whether failure should stop the script
 */
function verifyFile(filePath, description, critical = true) {
  const fullPath = path.join(projectRoot, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${description} verified at: ${filePath}`);
    return true;
  } 
  
  console.error(`❌ ${description} not found at: ${filePath}`);
  if (critical) {
    process.exit(1);
  }
  return false;
}

// Step 0: Clean build artifacts
runCommand('yarn clean', 'Cleaning build artifacts', false);

// Step 1: Build tokens
runCommand('yarn workspace @tagaddod-design/tokens build', 'Building tokens');
verifyFile('packages/tokens/dist/css/tokens.css', 'Tokens CSS');

// Step 2: Build React package
runCommand('yarn workspace @tagaddod-design/react build', 'Building React package');

// Verify React CSS exists, build it separately if needed
if (!verifyFile('packages/react/dist/styles/index.css', 'React CSS', false)) {
  console.log('📝 Creating React CSS directory...');
  fs.mkdirSync(path.join(projectRoot, 'packages/react/dist/styles'), { recursive: true });
  
  runCommand('yarn workspace @tagaddod-design/react build:css', 'Building React CSS separately');
}

// Step 3: Type check packages (non-critical)
runCommand('yarn type-check', 'Running type checks', false);

// Step 4: Start development environment
const startMode = process.argv[2] || 'storybook';

if (startMode === 'storybook') {
  // Check if port is already in use
  const checkPort = require('child_process').spawnSync('lsof', ['-i', ':6006']);
  if (checkPort.status === 0) {
    console.warn('⚠️ Port 6006 is already in use. Killing existing process...');
    execSync('lsof -ti:6006 | xargs kill -9', { stdio: 'ignore' });
    // Wait a moment for the port to be released
    require('child_process').execSync('sleep 1');
  }

  console.log('🎭 Starting Storybook...');
  const storybookProcess = spawn('yarn', ['workspace', '@tagaddod-design/storybook', 'storybook'], {
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
🎉 Storybook starting successfully!
📚 Open http://localhost:6006 in your browser
`);
} else if (startMode === 'dev') {
  console.log('🔥 Starting all development servers in parallel...');
  const devProcess = spawn('yarn', ['dev'], {
    stdio: 'inherit',
    cwd: projectRoot,
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

  console.log(`
🎉 Dev workflow started successfully!
📱 All packages are running in watch mode
`);
} else if (startMode === 'admin') {
  console.log('🔧 Starting Token Admin app...');
  const adminProcess = spawn('yarn', ['workspace', 'token-admin', 'dev'], {
    stdio: 'inherit',
    cwd: projectRoot,
    shell: true
  });

  adminProcess.on('error', (error) => {
    console.error('❌ Failed to start Token Admin:', error);
    process.exit(1);
  });

  adminProcess.on('exit', (code) => {
    if (code !== 0) {
      console.error(`❌ Token Admin exited with code ${code}`);
      process.exit(code);
    }
  });

  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down Token Admin...');
    adminProcess.kill('SIGINT');
    process.exit(0);
  });

  console.log(`
🎉 Token Admin started successfully!
🔧 Open http://localhost:3000 in your browser
`);
} else {
  console.error(`❌ Unknown start mode: ${startMode}`);
  console.log('Valid modes: storybook, dev, admin');
  process.exit(1);
}
