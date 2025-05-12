#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const tokensDistPath = path.resolve(__dirname, '../../tokens/dist');

console.log('Watching for token changes...');

// Watch the tokens dist directory
fs.watch(tokensDistPath, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.css')) {
    console.log(`Token file changed: ${filename}`);
    console.log('Rebuilding React CSS...');
    
    try {
      execSync('node scripts/build-css.js', { 
        cwd: path.resolve(__dirname, '..'),
        stdio: 'inherit'
      });
    } catch (error) {
      console.error('Failed to rebuild CSS:', error);
    }
  }
});
