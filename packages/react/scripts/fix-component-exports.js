#!/usr/bin/env node

/**
 * This script creates proper individual component exports for the minimal build.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Fixing Component Export Structure ===${RESET}\n`);

// Source component directory
const distComponentsDir = path.resolve(__dirname, '../dist/components');
if (!fs.existsSync(distComponentsDir)) {
  console.error(`${RED}Error: dist/components directory does not exist. Run build first.${RESET}`);
  process.exit(1);
}

// Get component directories
const componentDirs = fs.readdirSync(distComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} component directories to fix`);

// Fix each component directory
for (const componentName of componentDirs) {
  const componentDir = path.join(distComponentsDir, componentName);
  
  // Fix index.js - for CommonJS
  const indexJsPath = path.join(componentDir, 'index.js');
  const newIndexJs = `// Export ${componentName} component
const { ${componentName} } = require('../../index.js');
exports.${componentName} = ${componentName};
`;
  fs.writeFileSync(indexJsPath, newIndexJs);
  
  // Fix/create index.mjs - for ESM
  const indexMjsPath = path.join(componentDir, 'index.mjs');
  const newIndexMjs = `// Export ${componentName} component
export { ${componentName} } from '../../index.mjs';
`;
  fs.writeFileSync(indexMjsPath, newIndexMjs);
  
  console.log(`${GREEN}✓${RESET} Fixed exports for ${componentName}`);
}

console.log(`\n${GREEN}=== Component exports fixed successfully ===${RESET}`);
