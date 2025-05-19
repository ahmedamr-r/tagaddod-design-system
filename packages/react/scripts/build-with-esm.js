#!/usr/bin/env node

/**
 * This script enhances the existing build output with proper ESM support
 * for compatibility with modern module systems
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

console.log(`${BLUE}=== Enhancing Build With ESM Compatibility ===${RESET}\n`);

// Step 1: Run the existing build process
try {
  // First build the CSS since the Vite build won't clear dist
  console.log(`${YELLOW}Building CSS...${RESET}`);
  execSync('yarn build:css', { stdio: 'inherit' });

  // Then run Vite to build the JS entry point
  console.log(`${YELLOW}Building JS with Vite...${RESET}`);
  execSync('vite build', { stdio: 'inherit' });
  
  // Finally, run the standard component processing
  console.log(`${YELLOW}Creating component exports...${RESET}`);
  execSync('node scripts/create-full-components.js', { stdio: 'inherit' });
  
  // Update exports in package.json
  console.log(`${YELLOW}Updating package exports...${RESET}`);
  execSync('node scripts/update-package-exports.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Build process failed: ${err.message}${RESET}`);
  process.exit(1);
}

// Step 2: Enhance the build with modern ESM exports
try {
  const distDir = path.resolve(__dirname, '../dist');
  const componentsDir = path.join(distDir, 'components');
  
  // Add component-level .mjs files that re-export from .js
  console.log(`${YELLOW}Adding ESM module files to components...${RESET}`);
  
  const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const component of componentDirs) {
    const componentDir = path.join(componentsDir, component);
    const indexJsPath = path.join(componentDir, 'index.js');
    const indexMjsPath = path.join(componentDir, 'index.mjs');
    
    if (fs.existsSync(indexJsPath)) {
      // Create .mjs that re-exports from .js
      fs.writeFileSync(
        indexMjsPath,
        `// ESM version of ${component} component
export * from './index.js';
`
      );
      
      // Add package.json to each component directory
      fs.writeFileSync(
        path.join(componentDir, 'package.json'),
        JSON.stringify({
          "type": "module",
          "main": "./index.js",
          "module": "./index.mjs",
          "types": "./index.d.ts",
          "exports": {
            ".": {
              "types": "./index.d.ts",
              "import": "./index.mjs",
              "require": "./index.js"
            }
          },
          "sideEffects": ["**/*.css"]
        }, null, 2)
      );
      
      console.log(`${GREEN}✓${RESET} Added ESM support for ${component}`);
    }
  }
  
  // Update the root package.json
  console.log(`${YELLOW}Updating package.json...${RESET}`);
  const packageJsonPath = path.resolve(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add sideEffects for CSS
  packageJson.sideEffects = ['**/*.css'];
  
  // Update exports field with conditional exports
  packageJson.exports = {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs", 
      "require": "./dist/index.js"
    },
    "./styles": "./dist/styles/index.css",
    "./styles/index.css": "./dist/styles/index.css",
    "./components/*": {
      "types": "./dist/components/*/index.d.ts",
      "import": "./dist/components/*/index.mjs",
      "require": "./dist/components/*/index.js"
    }
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`${GREEN}✓${RESET} Updated package.json with modern exports`);
  
  // Add package.json to dist directory
  fs.writeFileSync(
    path.join(distDir, 'package.json'),
    JSON.stringify({
      "type": "module",
      "main": "./index.js",
      "module": "./index.mjs",
      "types": "./index.d.ts"
    }, null, 2)
  );
  console.log(`${GREEN}✓${RESET} Added package.json to dist directory`);
  
} catch (err) {
  console.error(`${RED}Failed to enhance build: ${err.message}${RESET}`);
  process.exit(1);
}

console.log(`\n${GREEN}=== Build Successfully Enhanced With ESM Compatibility ===${RESET}`);
console.log(`\n${BLUE}Your library now supports both ESM and CommonJS imports:${RESET}`);
console.log(`import { Button } from '@tagaddod-design/react';            // ESM import`);
console.log(`const { Button } = require('@tagaddod-design/react');       // CommonJS import`);
console.log(`import { Button } from '@tagaddod-design/react/components/Button'; // Direct import`);
