#!/usr/bin/env node

/**
 * This script runs after the standard build to fix the exports for proper ESM/CJS support
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { execSync } = require('child_process');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Enhancing Build for ESM/CJS Compatibility ===${RESET}\n`);

const distDir = path.resolve(__dirname, '../dist');
const componentsDir = path.resolve(distDir, 'components');

// First, run the standard build
try {
  console.log(`${YELLOW}Running standard build...${RESET}`);
  execSync('node scripts/build-structured.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Build failed: ${err.message}${RESET}`);
  process.exit(1);
}

// Now enhance the build output
console.log(`\n${YELLOW}Upgrading exports structure...${RESET}`);

// 1. Update dist/package.json for dual-package support
const packageJson = {
  "type": "module",
  "main": "./index.js",
  "module": "./index.mjs",
  "exports": {
    ".": {
      "import": "./index.mjs",
      "require": "./index.js",
      "types": "./index.d.ts"
    },
    "./styles": "./styles/index.css",
    "./components/*": {
      "import": "./components/*/index.mjs",
      "require": "./components/*/index.js",
      "types": "./components/*/index.d.ts"
    }
  },
  "sideEffects": [
    "**/*.css"
  ]
};

fs.writeFileSync(
  path.join(distDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);
console.log(`${GREEN}✓${RESET} Updated dist/package.json for dual package support`);

// 2. Create ESM entry point (index.mjs)
// Get a list of all components
const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let indexMjsContent = `// ESM barrel exports for @tagaddod-design/react\n\n`;

// Add import statements for each component
componentDirs.forEach(component => {
  indexMjsContent += `import * as ${component}Module from './components/${component}/${component}.js';\n`;
});

// Add export statements
indexMjsContent += `\n// Component exports\n`;
componentDirs.forEach(component => {
  indexMjsContent += `export const ${component} = ${component}Module.${component};\n`;
  // Also export any other known exports like variants
  if (component === 'Button') {
    indexMjsContent += `export const buttonVariants = ${component}Module.buttonVariants;\n`;
    indexMjsContent += `export const buttonTones = ${component}Module.buttonTones;\n`;
    indexMjsContent += `export const buttonSizes = ${component}Module.buttonSizes;\n`;
  }
});

// Add provider exports
indexMjsContent += `\n// Provider exports\nexport { ThemeProvider, useTheme } from './providers/ThemeProvider.js';\n`;

fs.writeFileSync(path.join(distDir, 'index.mjs'), indexMjsContent);
console.log(`${GREEN}✓${RESET} Created ESM barrel export`);

// 3. Add component-level package.json files with proper exports
console.log(`${YELLOW}Creating component-level package.json files...${RESET}`);

componentDirs.forEach(component => {
  const componentDir = path.join(componentsDir, component);
  const componentPackageJson = {
    "type": "module", 
    "main": "./index.js",
    "module": "./index.mjs",
    "types": "./index.d.ts",
    "exports": {
      ".": {
        "import": "./index.mjs",
        "require": "./index.js",
        "types": "./index.d.ts"
      }
    },
    "sideEffects": ["**/*.css"]
  };
  
  fs.writeFileSync(
    path.join(componentDir, 'package.json'),
    JSON.stringify(componentPackageJson, null, 2)
  );
  
  // Create ESM index.mjs
  fs.writeFileSync(
    path.join(componentDir, 'index.mjs'),
    `export * from './${component}.js';\n`
  );
  
  console.log(`${GREEN}✓${RESET} Enhanced ${component} component exports`);
});

console.log(`\n${GREEN}=== ESM/CJS Enhancement Completed Successfully ===${RESET}`);
console.log(`\n${BLUE}Your library now correctly supports both ESM and CommonJS imports:${RESET}`);
console.log(`import { Button } from '@tagaddod-design/react';            // ESM import`);
console.log(`const { Button } = require('@tagaddod-design/react');       // CommonJS import`);
console.log(`import { Button } from '@tagaddod-design/react/components/Button'; // Direct import`);
