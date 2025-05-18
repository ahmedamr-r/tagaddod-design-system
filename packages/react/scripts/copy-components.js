#!/usr/bin/env node

/**
 * This script directly copies the component source files to the dist directory
 * to ensure they're included in the published package.
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

console.log(`${BLUE}=== Copying Component Files to Dist Directory ===${RESET}\n`);

// Source component directory
const srcComponentsDir = path.resolve(__dirname, '../src/components');
// Destination component directory
const distComponentsDir = path.resolve(__dirname, '../dist/components');

// Create the components directory in dist if it doesn't exist
if (!fs.existsSync(distComponentsDir)) {
  fs.mkdirSync(distComponentsDir, { recursive: true });
  console.log(`${GREEN}✓${RESET} Created dist/components directory`);
}

// Get all component directories
const componentDirs = fs.readdirSync(srcComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} components to copy`);

// Copy each component directory
componentDirs.forEach(componentName => {
  const srcDir = path.join(srcComponentsDir, componentName);
  const destDir = path.join(distComponentsDir, componentName);
  
  // Create component directory in dist if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Create index.js that re-exports the component
  const indexJs = `// Re-export ${componentName} component from main bundle
export { ${componentName} } from '../../index.mjs';
`;
  fs.writeFileSync(path.join(destDir, 'index.js'), indexJs);
  
  // Create index.d.ts file with type declarations
  const indexDts = `// Type declarations for ${componentName}
export { ${componentName} } from '../../index';
`;
  fs.writeFileSync(path.join(destDir, 'index.d.ts'), indexDts);
  
  console.log(`${GREEN}✓${RESET} Copied ${componentName} component`);
});

console.log(`\n${GREEN}✓${RESET} All components copied to dist directory`);
