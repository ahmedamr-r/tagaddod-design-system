#!/usr/bin/env node

/**
 * This script creates full component implementations in each component directory
 * rather than just references to the main bundle.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Creating Full Component Implementations ===${RESET}\n`);

// Paths
const srcComponentsDir = path.resolve(__dirname, '../src/components');
const distDir = path.resolve(__dirname, '../dist');
const distComponentsDir = path.resolve(distDir, 'components');

// Ensure components directory exists
if (!fs.existsSync(distComponentsDir)) {
  fs.mkdirSync(distComponentsDir, { recursive: true });
  console.log(`${GREEN}✓${RESET} Created dist/components directory`);
}

// Get all component directories
const componentDirs = fs.readdirSync(srcComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} components to process`);

// Process each component
for (const componentName of componentDirs) {
  const srcDir = path.join(srcComponentsDir, componentName);
  const distComponentDir = path.join(distComponentsDir, componentName);
  
  // Create component directory if it doesn't exist
  if (!fs.existsSync(distComponentDir)) {
    fs.mkdirSync(distComponentDir, { recursive: true });
  }
  
  // Find the implementation files in dist
  const implementationFile = path.join(distDir, 'components', componentName, `${componentName}.js`);
  const implementationDtsFile = path.join(distDir, 'components', componentName, `${componentName}.d.ts`);
  
  if (!fs.existsSync(implementationFile)) {
    console.warn(`${YELLOW}⚠${RESET} Implementation file not found for ${componentName}, using reference`);
    continue;
  }
  
  // Create ESM (mjs) index file pointing to the implementation
  const indexMjs = `// Export ${componentName} implementation
export * from './${componentName}.js';
`;
  
  // Create CJS (js) index file pointing to the implementation
  const indexJs = `// Export ${componentName} implementation
module.exports = require('./${componentName}.js');
`;

  // Create TypeScript declaration index
  const indexDts = `// Type declarations for ${componentName}
export * from './${componentName}';
`;
  
  // Write the files
  fs.writeFileSync(path.join(distComponentDir, 'index.mjs'), indexMjs);
  fs.writeFileSync(path.join(distComponentDir, 'index.js'), indexJs);
  fs.writeFileSync(path.join(distComponentDir, 'index.d.ts'), indexDts);
  
  console.log(`${GREEN}✓${RESET} Created full implementation export for ${componentName}`);
}

console.log(`\n${GREEN}✓${RESET} All component implementations exported`);
