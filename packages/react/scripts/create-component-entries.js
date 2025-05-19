#!/usr/bin/env node

/**
 * This script creates proper individual component exports after the Vite build.
 * It ensures each component is properly exported and importable directly.
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

console.log(`${BLUE}=== Creating Component Entry Points ===${RESET}\n`);

// Source component directory
const srcComponentsDir = path.resolve(__dirname, '../src/components');
// Destination directory
const distDir = path.resolve(__dirname, '../dist');

// Get all component directories
const componentDirs = fs.readdirSync(srcComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} components to process`);

// Prepare package.json exports field
const packageJson = require('../package.json');
if (!packageJson.exports) {
  packageJson.exports = {};
}

// Ensure main exports are correct
packageJson.exports['.'] = {
  import: './index.mjs',
  require: './index.js',
  types: './index.d.ts'
};

// Add styles export
packageJson.exports['./styles'] = './styles/index.css';
packageJson.exports['./styles/index.css'] = './styles/index.css';

// Process each component
for (const componentName of componentDirs) {
  const srcDir = path.join(srcComponentsDir, componentName);
  const distComponentDir = path.join(distDir, 'components', componentName);
  
  // Create component directory in dist if it doesn't exist
  if (!fs.existsSync(distComponentDir)) {
    fs.mkdirSync(distComponentDir, { recursive: true });
  }
  
  // Check if a Component.tsx file exists
  const componentFiles = fs.readdirSync(srcDir).filter(file => 
    file.startsWith(componentName) && file.endsWith('.tsx') && !file.includes('.test.') && !file.includes('.stories.')
  );
  
  if (componentFiles.length === 0) {
    console.log(`${YELLOW}⚠${RESET} No main component file found for ${componentName}`);
    continue;
  }
  
  const componentFile = componentFiles[0];
  const componentPath = path.join(srcDir, componentFile);
  
  // First, generate a component-specific entry point
  // This will import from the main index.mjs to ensure code reuse
  const indexJs = `// Entry point for ${componentName} component
import { ${componentName} } from '../../index.mjs';
export { ${componentName} };
`;
  fs.writeFileSync(path.join(distComponentDir, 'index.js'), indexJs);
  
  // Create the ESM version
  const indexMjs = `// Entry point for ${componentName} component
import { ${componentName} } from '../../index.mjs';
export { ${componentName} };
`;
  fs.writeFileSync(path.join(distComponentDir, 'index.mjs'), indexMjs);
  
  // Create index.d.ts file with type declarations
  const indexDts = `// Type declarations for ${componentName} component
export { ${componentName}, ${componentName}Props } from '../../index';
`;
  fs.writeFileSync(path.join(distComponentDir, 'index.d.ts'), indexDts);
  
  // Add component path to package.json exports
  packageJson.exports[`./components/${componentName}`] = {
    import: `./components/${componentName}/index.mjs`,
    require: `./components/${componentName}/index.js`,
    types: `./components/${componentName}/index.d.ts`
  };
  
  console.log(`${GREEN}✓${RESET} Created exports for ${componentName}`);
}

// Write updated package.json to dist
fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(packageJson, null, 2));
console.log(`${GREEN}✓${RESET} Updated package.json exports`);

console.log(`\n${GREEN}✓${RESET} All component entry points created`);
