#!/usr/bin/env node

/**
 * This script runs after Vite build to ensure proper export structure
 * for both ESM and CommonJS compatibility
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// ANSI colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Running Post-Build Processing ===${RESET}\n`);

const distDir = path.resolve(__dirname, '../dist');

// 1. Ensure each component has proper index files
function ensureComponentIndexFiles() {
  const componentDirs = glob.sync(`${distDir}/components/*`, { onlyDirectories: true });
  const providerDirs = glob.sync(`${distDir}/providers/*`, { onlyDirectories: true });
  
  const dirs = [...componentDirs, ...providerDirs];
  
  // Process each directory
  for (const dir of dirs) {
    const dirName = path.basename(dir);
    const mainFile = fs.existsSync(path.join(dir, `${dirName}.mjs`)) 
      ? path.join(dir, `${dirName}.mjs`)
      : null;
      
    if (!mainFile) {
      console.log(`${YELLOW}Warning: No main file found for ${dirName}${RESET}`);
      continue;
    }
    
    // Create ESM index
    const esmIndex = `// Re-export from component file
export * from './${dirName}.mjs';
`;
    fs.writeFileSync(path.join(dir, 'index.mjs'), esmIndex);
    
    // Create CJS index
    const cjsIndex = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Re-export everything from component
const component = require('./${dirName}.cjs');
Object.keys(component).forEach(key => {
  exports[key] = component[key];
});
`;
    fs.writeFileSync(path.join(dir, 'index.cjs'), cjsIndex);
    
    // Create TypeScript declaration index if it doesn't exist
    const dtsPath = path.join(dir, 'index.d.ts');
    if (!fs.existsSync(dtsPath)) {
      const dtsContent = `// Type declarations
export * from './${dirName}';
`;
      fs.writeFileSync(dtsPath, dtsContent);
    }
    
    console.log(`${GREEN}✓${RESET} Created index files for ${dirName}`);
  }
  
  console.log(`${GREEN}✓${RESET} Component index files created`);
}

// 2. Verify main exports are properly set up
function verifyMainExports() {
  const mainExports = ['index.mjs', 'index.cjs', 'index.d.ts'];
  let allExist = true;
  
  for (const file of mainExports) {
    const filePath = path.join(distDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`${RED}Error: Missing ${file} in dist directory${RESET}`);
      allExist = false;
    }
  }
  
  if (allExist) {
    console.log(`${GREEN}✓${RESET} Main exports verified`);
  } else {
    console.log(`${RED}Main exports verification failed${RESET}`);
  }
}

// 3. Add package.json to each component directory
function addComponentPackageJsons() {
  const componentDirs = glob.sync(`${distDir}/components/*`, { onlyDirectories: true });
  const providerDirs = glob.sync(`${distDir}/providers/*`, { onlyDirectories: true });
  
  const dirs = [...componentDirs, ...providerDirs];
  
  for (const dir of dirs) {
    const dirName = path.basename(dir);
    const packageJson = {
      "type": "module",
      "main": "./index.cjs",
      "module": "./index.mjs",
      "types": "./index.d.ts",
      "exports": {
        ".": {
          "types": "./index.d.ts",
          "import": "./index.mjs",
          "require": "./index.cjs"
        }
      },
      "sideEffects": ["**/*.css"]
    };
    
    fs.writeFileSync(
      path.join(dir, 'package.json'), 
      JSON.stringify(packageJson, null, 2)
    );
  }
  
  console.log(`${GREEN}✓${RESET} Added package.json to component directories`);
}

// 4. Create root package.json for dist
function createDistPackageJson() {
  const packageJson = {
    "type": "module",
    "main": "./index.cjs",
    "module": "./index.mjs",
    "types": "./index.d.ts"
  };
  
  fs.writeFileSync(
    path.join(distDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  console.log(`${GREEN}✓${RESET} Created dist/package.json`);
}

// Run all the tasks
try {
  ensureComponentIndexFiles();
  verifyMainExports();
  addComponentPackageJsons();
  createDistPackageJson();
  console.log(`\n${GREEN}=== Post-Build Processing Completed Successfully ===${RESET}`);
} catch (error) {
  console.error(`\n${RED}Error during post-build processing: ${error.message}${RESET}`);
  process.exit(1);
}
