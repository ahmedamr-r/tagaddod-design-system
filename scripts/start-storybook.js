#!/usr/bin/env node
/**
 * Consolidated Storybook starter with port auto-detection
 * Handles dependency checks and port management
 */
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const net = require('net');
const path = require('path');

console.log('🚀 Starting Tagaddod Design System Storybook...');

const projectRoot = path.resolve(__dirname, '..');

/**
 * Check if a port is available
 * @param {number} port Port to check
 * @returns {Promise<boolean>} Whether the port is available
 */
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.on('error', () => resolve(false));
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
  });
}

/**
 * Find an available port starting from the given port
 * @param {number} startPort Starting port to check
 * @returns {Promise<number>} Available port
 */
async function findAvailablePort(startPort = 6006) {
  for (let port = startPort; port < startPort + 100; port++) {
    if (await checkPort(port)) {
      return port;
    }
  }
  throw new Error('No available ports found');
}

/**
 * Ensure dependencies are built
 */
function checkDependencies() {
  console.log('🔍 Checking dependencies...');

  // Check tokens
  const tokensCssPath = path.join(projectRoot, 'packages/tokens/dist/css/tokens.css');
  if (!fs.existsSync(tokensCssPath)) {
    console.log('📦 Building tokens first...');
    execSync('yarn workspace @tagaddod-design/tokens build', { 
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
      execSync('yarn workspace @tagaddod-design/react build', { 
        stdio: 'inherit',
        cwd: projectRoot
      });
    } catch (error) {
      console.error('Failed to build React:', error.message);
      // Try building just CSS
      execSync('yarn workspace @tagaddod-design/react build:css', { 
        stdio: 'inherit',
        cwd: projectRoot
      });
    }
  }

  console.log('✅ Dependencies check complete');
}

/**
 * Start Storybook with the specified port
 * @param {number} port Port to start Storybook on
 */
function startStorybook(port) {
  console.log(`🎭 Starting Storybook on port ${port}...`);
  
  const storybookProcess = spawn('yarn', ['workspace', '@tagaddod-design/storybook', 'storybook', '--', '-p', port.toString()], {
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
      console.log('1. Run: yarn workspace @tagaddod-design/tokens build');
      console.log('2. Run: yarn workspace @tagaddod-design/react build');
      console.log('3. Check that node_modules is up to date: yarn install');
      console.log('4. Try clearing cache: yarn clean');
      console.log('5. Try running: yarn fix:deps');
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
🎉 Storybook starting on port ${port}!
📚 Open http://localhost:${port} in your browser
  `);
}

/**
 * Main function
 */
async function main() {
  try {
    // Parse arguments
    const args = process.argv.slice(2);
    let port = 6006; // Default port
    let fixPort = false;
    
    // Parse port from arguments
    const portArgIndex = args.indexOf('-p');
    if (portArgIndex !== -1 && args.length > portArgIndex + 1) {
      port = parseInt(args[portArgIndex + 1], 10);
    } else if (args.includes('--autoport')) {
      fixPort = true;
    }

    // Ensure dependencies are built
    checkDependencies();

    // Find available port if needed
    if (fixPort) {
      port = await findAvailablePort(port);
      console.log(`✅ Found available port: ${port}`);
    }

    // Start Storybook
    startStorybook(port);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();
