#!/usr/bin/env node

/**
 * This script adds modern ESM and CJS compatibility to the existing build
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

console.log(`${BLUE}=== Adding Modern Package Exports to Existing Build ===${RESET}\n`);

// First, run the standard build to get the existing structure
try {
  console.log(`${YELLOW}Running standard build process...${RESET}`);
  // We'll use the existing build script that's proven to work
  execSync('node scripts/build-structured.js', { stdio: 'inherit' });
} catch (err) {
  console.error(`${RED}Standard build failed: ${err.message}${RESET}`);
  process.exit(1);
}

console.log(`\n${YELLOW}Enhancing build with modern package exports...${RESET}`);

const distDir = path.resolve(__dirname, '../dist');
const componentsDir = path.resolve(distDir, 'components');

// 1. Add ESM module extension files (.mjs) in the dist root for main exports
try {
  const indexJsPath = path.join(distDir, 'index.js');
  const indexMjsPath = path.join(distDir, 'index.mjs');
  
  if (fs.existsSync(indexJsPath)) {
    // Create a module version that re-exports from the CommonJS version
    const indexMjsContent = `// ESM re-export of main bundle
export * from './index.js';
`;
    fs.writeFileSync(indexMjsPath, indexMjsContent);
    console.log(`${GREEN}✓${RESET} Created ESM main entry point (index.mjs)`);
  } else {
    console.error(`${RED}Error: Main index.js not found${RESET}`);
  }
} catch (err) {
  console.error(`${RED}Failed to create ESM main entry: ${err.message}${RESET}`);
}

// 2. Add ESM module extension files (.mjs) for each component
try {
  const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const component of componentDirs) {
    const componentDir = path.join(componentsDir, component);
    const componentIndexPath = path.join(componentDir, 'index.js');
    const componentMjsPath = path.join(componentDir, 'index.mjs');
    
    if (fs.existsSync(componentIndexPath)) {
      // Create ESM version that re-exports from the CommonJS version
      const componentMjsContent = `// ESM re-export of ${component} component
export * from './index.js';
`;
      fs.writeFileSync(componentMjsPath, componentMjsContent);
      console.log(`${GREEN}✓${RESET} Added ESM support for ${component}`);
    }
  }
} catch (err) {
  console.error(`${RED}Failed to add ESM support to components: ${err.message}${RESET}`);
}

// 3. Update the package.json with modern exports field
try {
  const packageJsonPath = path.resolve(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Enhanced exports field with conditional imports
  packageJson.exports = {
    '.': {
      'types': './dist/index.d.ts',
      'import': './dist/index.mjs',
      'require': './dist/index.js'
    },
    './styles': './dist/styles/index.css',
    './styles/index.css': './dist/styles/index.css',
    './components/*': {
      'types': './dist/components/*/index.d.ts',
      'import': './dist/components/*/index.mjs',
      'require': './dist/components/*/index.js'
    }
  };
  
  // Add sideEffects for CSS
  packageJson.sideEffects = ['**/*.css'];
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log(`${GREEN}✓${RESET} Updated package.json with modern exports field`);
} catch (err) {
  console.error(`${RED}Failed to update package.json: ${err.message}${RESET}`);
}

// 4. Add package.json to dist directory for proper module resolution
try {
  const distPackageJson = {
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
  };
  
  fs.writeFileSync(
    path.join(distDir, 'package.json'),
    JSON.stringify(distPackageJson, null, 2)
  );
  console.log(`${GREEN}✓${RESET} Added package.json to dist directory`);
} catch (err) {
  console.error(`${RED}Failed to add dist package.json: ${err.message}${RESET}`);
}

// 5. Add package.json to each component directory
try {
  const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const component of componentDirs) {
    const componentDir = path.join(componentsDir, component);
    const componentPackageJson = {
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
    };
    
    fs.writeFileSync(
      path.join(componentDir, 'package.json'),
      JSON.stringify(componentPackageJson, null, 2)
    );
  }
  console.log(`${GREEN}✓${RESET} Added package.json to component directories`);
} catch (err) {
  console.error(`${RED}Failed to add component package.json files: ${err.message}${RESET}`);
}

console.log(`\n${GREEN}=== Modern Package Exports Added Successfully ===${RESET}`);
console.log(`\n${BLUE}Your library now correctly supports both ESM and CommonJS imports:${RESET}`);
console.log(`import { Button } from '@tagaddod-design/react';            // ESM import`);
console.log(`const { Button } = require('@tagaddod-design/react');       // CommonJS import`);
console.log(`import { Button } from '@tagaddod-design/react/components/Button'; // Direct import`);
