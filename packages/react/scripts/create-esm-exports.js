#!/usr/bin/env node

/**
 * This script creates ESM barrel exports for the package.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Creating ESM Barrel Exports ===${RESET}\n`);

// Paths
const distDir = path.resolve(__dirname, '../dist');
const distComponentsDir = path.resolve(distDir, 'components');
const indexMjsPath = path.resolve(distDir, 'index.mjs');

// Get all component directories
const componentDirs = fs.readdirSync(distComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Get exports map from source index.ts
const srcIndexPath = path.resolve(__dirname, '../src/index.ts');
const srcIndexContent = fs.readFileSync(srcIndexPath, 'utf8');

// Extract named exports and types
const namedExports = new Set();
const typeExports = new Set();

// Parse export statements
const exportLines = srcIndexContent.split('\n');
for (const line of exportLines) {
  // Match export { X } from './path'
  const namedMatch = line.match(/export\s+{\s+([^}]+)\s+}\s+from/);
  if (namedMatch) {
    const exports = namedMatch[1]
      .split(',')
      .map(e => e.trim())
      .filter(e => e.length > 0);
    
    exports.forEach(e => namedExports.add(e));
  }
  
  // Match export type { X } from './path'
  const typeMatch = line.match(/export\s+type\s+{\s+([^}]+)\s+}\s+from/);
  if (typeMatch) {
    const types = typeMatch[1]
      .split(',')
      .map(e => e.trim())
      .filter(e => e.length > 0);
    
    types.forEach(t => typeExports.add(t));
  }
}

console.log(`Found ${namedExports.size} named exports and ${typeExports.size} type exports in source`);

// Build component export map
const componentExports = {};
for (const componentName of componentDirs) {
  // Find all exports related to this component
  const componentExportsList = Array.from(namedExports)
    .filter(e => e === componentName || e.startsWith(`${componentName}`));
  
  if (componentExportsList.length > 0) {
    componentExports[componentName] = componentExportsList;
  }
}

// Create ESM barrel file
let indexMjsContent = `// ESM barrel exports for @tagaddod-design/react

`;

// Add component imports and exports
for (const [componentName, exports] of Object.entries(componentExports)) {
  const importPath = `./components/${componentName}/${componentName}.js`;
  const exportsList = exports.join(', ');
  indexMjsContent += `export { ${exportsList} } from '${importPath}';\n`;
}

// Add provider exports
indexMjsContent += `\n// Provider exports\nexport { ThemeProvider, useTheme } from './providers/ThemeProvider.js';\n`;

// Write the file
fs.writeFileSync(indexMjsPath, indexMjsContent);
console.log(`${GREEN}✓${RESET} Created ESM barrel export file`);

// Create CommonJS barrel file if it doesn't exist
const indexJsPath = path.resolve(distDir, 'index.js');
if (!fs.existsSync(indexJsPath)) {
  // Create simplified CJS export
  const indexJsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Re-export from ESM
const esm = require('./index.mjs');
Object.keys(esm).forEach(key => {
  exports[key] = esm[key];
});
`;
  
  fs.writeFileSync(indexJsPath, indexJsContent);
  console.log(`${GREEN}✓${RESET} Created CommonJS barrel export file`);
}

console.log(`\n${GREEN}=== Barrel exports created successfully ===${RESET}`);
