#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const net = require('net');
const path = require('path');

console.log('🚀 Starting Storybook with automatic port selection...');

const projectRoot = path.resolve(__dirname, '..');

// Function to check if a port is available
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

// Find an available port starting from 6006
async function findAvailablePort(startPort = 6006) {
  for (let port = startPort; port < startPort + 100; port++) {
    if (await checkPort(port)) {
      return port;
    }
  }
  throw new Error('No available ports found');
}

async function main() {
  try {
    // Find an available port
    const port = await findAvailablePort();
    console.log(`✅ Found available port: ${port}`);

    // Start Storybook with the available port
    console.log('🎭 Starting Storybook...');
    const storybookProcess = spawn('yarn', ['workspace', '@tagaddod/storybook', 'storybook', '--', '-p', port.toString()], {
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
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
