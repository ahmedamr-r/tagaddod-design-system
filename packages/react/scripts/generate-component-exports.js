#!/usr/bin/env node

/**
 * This script generates proper component exports that include the actual implementation
 * rather than just re-exporting from the main bundle.
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

console.log(`${BLUE}=== Generating Component Exports ===${RESET}\n`);

// Source component directory
const srcComponentsDir = path.resolve(__dirname, '../src/components');
// Destination component directory
const distComponentsDir = path.resolve(__dirname, '../dist/components');

// Create the components directory in dist if it doesn't exist
if (!fs.existsSync(distComponentsDir)) {
  fs.mkdirSync(distComponentsDir, { recursive: true });
  console.log(`${GREEN}✓${RESET} Created dist/components directory`);
}

// Read the main component index file to get all exports
const componentIndexPath = path.resolve(__dirname, '../src/components/index.ts');
const componentIndexContent = fs.readFileSync(componentIndexPath, 'utf8');

// Parse the exports to find all components and their source files
const exportLines = componentIndexContent.split('\n').filter(line => line.startsWith('export '));

// Map to store component names and their source files
const componentExports = {};

// Process each export line
exportLines.forEach(line => {
  // Match named exports like: export { Button } from './Button/Button';
  const namedExportMatch = line.match(/export\s+\{\s*([A-Za-z0-9_]+)(?:\s*,\s*[A-Za-z0-9_]+)*\s*\}\s+from\s+['"](.+)['"]/);
  
  if (namedExportMatch) {
    // Extract component name and source path
    const componentName = namedExportMatch[1];
    const sourcePath = namedExportMatch[2];
    
    // Skip non-component exports (constants, types, etc.)
    if (componentName[0] === componentName[0].toUpperCase()) {
      componentExports[componentName] = sourcePath;
    }
  }
  
  // Match type exports like: export type { ButtonProps } from './Button/Button';
  const typeExportMatch = line.match(/export\s+type\s+\{\s*([A-Za-z0-9_]+)(?:\s*,\s*[A-Za-z0-9_]+)*\s*\}\s+from\s+['"](.+)['"]/);
  
  if (typeExportMatch) {
    const typeName = typeExportMatch[1];
    const sourcePath = typeExportMatch[2];
    
    // Add the type to our component exports (will be needed for .d.ts files)
    componentExports[typeName + 'Type'] = sourcePath;
  }
});

console.log(`Found ${Object.keys(componentExports).filter(k => !k.endsWith('Type')).length} components to process`);

// Get all component directories
const componentDirs = fs.readdirSync(srcComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Process each component directory
componentDirs.forEach(componentName => {
  const srcDir = path.join(srcComponentsDir, componentName);
  const destDir = path.join(distComponentsDir, componentName);
  
  // Create component directory in dist if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Get the component source file
  const componentFiles = fs.readdirSync(srcDir).filter(file => 
    file.startsWith(componentName) && file.endsWith('.tsx') && !file.includes('.test.')
  );
  
  if (componentFiles.length === 0) {
    console.log(`${YELLOW}⚠${RESET} No main component file found for ${componentName}`);
    return;
  }
  
  const componentFile = componentFiles[0];
  const componentPath = path.join(srcDir, componentFile);
  
  // Read the component source
  const componentSource = fs.readFileSync(componentPath, 'utf8');
  
  // Copy CSS module if exists
  const cssModulePath = path.join(srcDir, `${componentName}.module.css`);
  if (fs.existsSync(cssModulePath)) {
    fs.copyFileSync(cssModulePath, path.join(destDir, `${componentName}.module.css`));
    console.log(`${GREEN}✓${RESET} Copied CSS module for ${componentName}`);
  }
  
  // Generate a proper index.js that implements the component
  // Create index.js that directly exports the implementation
  const indexJs = `// Export ${componentName} component
import { ${componentName} } from '../../components/${componentName}/${componentName}';
export { ${componentName} };
`;
  fs.writeFileSync(path.join(destDir, 'index.js'), indexJs);
  
  // Create index.d.ts file with type declarations
  const indexDts = `// Type declarations for ${componentName}
export { ${componentName}, ${componentName}Props } from '../../index';
`;
  fs.writeFileSync(path.join(destDir, 'index.d.ts'), indexDts);
  
  console.log(`${GREEN}✓${RESET} Created exports for ${componentName}`);
});

console.log(`\n${GREEN}✓${RESET} All component exports generated`);

// Create a verification file to check if exports work correctly
const verificationJs = `// Verification file to check exports
import React from 'react';

// Try importing each component
const components = {};

${componentDirs.map(name => `
try {
  const { ${name} } = require('../dist/components/${name}');
  components.${name} = ${name} ? 'OK' : 'Missing';
} catch (err) {
  components.${name} = 'ERROR: ' + err.message;
}`).join('\n')}

console.log('Component Export Verification:');
console.log(JSON.stringify(components, null, 2));
`;

const verificationPath = path.resolve(__dirname, '../scripts/verify-exports.js');
fs.writeFileSync(verificationPath, verificationJs);
console.log(`${GREEN}✓${RESET} Created export verification script at verify-exports.js`);
