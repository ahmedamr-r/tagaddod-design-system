#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Watch for changes in token files
const tokensCSSPath = path.resolve(__dirname, '../../tokens/dist/css/tokens.css');

console.log('Watching for token changes...');

// Watch for changes
fs.watch(path.dirname(tokensCSSPath), (eventType, filename) => {
  if (filename === 'tokens.css') {
    console.log('Tokens changed, rebuilding CSS...');
    spawn('node', ['scripts/build-css.js'], {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'inherit'
    });
  }
});
