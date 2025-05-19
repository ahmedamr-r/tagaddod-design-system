#!/usr/bin/env node

/**
 * Simplified build script to get us working
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Clean dist
console.log('Cleaning dist directory...');
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  execSync('rm -rf dist', { cwd: path.resolve(__dirname, '..') });
}

// Build with Vite
console.log('Building with Vite...');
execSync('vite build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

// Create a placeholder index.js
console.log('Creating placeholder index.js...');
fs.writeFileSync(
  path.resolve(__dirname, '../dist/index.js'),
  `'use strict';
  
Object.defineProperty(exports, '__esModule', { value: true });

// Re-export everything from ESM
var main = require('./esm/index.js');

// Re-export all named exports
Object.keys(main).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () { return main[key]; }
  });
});

// Re-export default if exists
if (main.default) {
  exports.default = main.default;
}
`
);

console.log('Build completed!');
