#!/usr/bin/env node

/**
 * This script fixes the ESM and CJS barrel exports for the package.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Fixing Barrel Exports ===${RESET}\n`);

// Paths
const distDir = path.resolve(__dirname, '../dist');
const distComponentsDir = path.resolve(distDir, 'components');

// Get all component directories
const componentDirs = fs.readdirSync(distComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} components to export`);

// Create direct imports for all components
const importStatements = componentDirs.map(component => 
  `import * as ${component}Module from './components/${component}/${component}.js';`
).join('\n');

// Create export statements that pull the component from the module
const exportStatements = componentDirs.map(component => 
  `export const ${component} = ${component}Module.${component};`
).join('\n');

// Create the ESM module file
const esmContent = `// ESM barrel exports for @tagaddod-design/react
${importStatements}

${exportStatements}

// Provider exports
export { ThemeProvider, useTheme } from './providers/ThemeProvider.js';
`;

// Write ESM module
const indexMjsPath = path.resolve(distDir, 'index.mjs');
fs.writeFileSync(indexMjsPath, esmContent);
console.log(`${GREEN}✓${RESET} Fixed ESM exports with ${componentDirs.length} components`);

// Create CJS module file that just re-exports from component files
const cjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

${componentDirs.map(component => 
  `const ${component}Module = require('./components/${component}/${component}.js');\nexports.${component} = ${component}Module.${component};`
).join('\n\n')}

// Provider exports
const provider = require('./providers/ThemeProvider.js');
exports.ThemeProvider = provider.ThemeProvider;
exports.useTheme = provider.useTheme;
`;

// Write CJS module
const indexJsPath = path.resolve(distDir, 'index.js');
fs.writeFileSync(indexJsPath, cjsContent);
console.log(`${GREEN}✓${RESET} Fixed CommonJS exports`);

// Create TypeScript declaration file
const dtsContent = `// TypeScript declarations for @tagaddod-design/react

${componentDirs.map(component => 
  `export { ${component} } from './components/${component}/${component}';`
).join('\n')}

// Provider exports
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
`;

// Write TypeScript declarations
const indexDtsPath = path.resolve(distDir, 'index.d.ts');
fs.writeFileSync(indexDtsPath, dtsContent);
console.log(`${GREEN}✓${RESET} Fixed TypeScript declarations`);

console.log(`\n${GREEN}=== Export fixes completed successfully ===${RESET}`);
