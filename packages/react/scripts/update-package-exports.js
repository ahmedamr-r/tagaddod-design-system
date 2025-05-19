#!/usr/bin/env node

/**
 * This script updates the package.json exports field to include all components
 * with their full implementations.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Updating Package Exports ===${RESET}\n`);

// Paths
const distDir = path.resolve(__dirname, '../dist');
const distComponentsDir = path.resolve(distDir, 'components');
const packageJsonPath = path.resolve(distDir, 'package.json');

// Check if package.json exists
if (!fs.existsSync(packageJsonPath)) {
  // Get the original package.json
  const srcPackageJson = require(path.resolve(__dirname, '../package.json'));
  
  // Create a minimal package.json for dist
  const distPackageJson = {
    name: srcPackageJson.name,
    version: srcPackageJson.version,
    license: srcPackageJson.license || 'MIT',
    main: 'index.js',
    module: 'index.mjs',
    types: 'index.d.ts',
    style: 'styles/index.css',
    files: [
      "**/*"
    ],
    exports: {
      '.': {
        types: './index.d.ts',
        import: './index.mjs',
        require: './index.js'
      },
      './styles': './styles/index.css',
      './styles/index.css': './styles/index.css'
    },
    peerDependencies: srcPackageJson.peerDependencies || {
      react: ">=17.0.0",
      "react-dom": ">=17.0.0"
    },
    dependencies: srcPackageJson.dependencies,
    sideEffects: ["./styles/index.css"]
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(distPackageJson, null, 2));
  console.log(`${GREEN}✓${RESET} Created package.json for distribution`);
}

// Read the package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Ensure exports field exists
if (!packageJson.exports) {
  packageJson.exports = {
    '.': {
      types: './index.d.ts',
      import: './index.mjs',
      require: './index.js'
    },
    './styles': './styles/index.css',
    './styles/index.css': './styles/index.css'
  };
}

// Get all component directories
const componentDirs = fs.readdirSync(distComponentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${componentDirs.length} components to add to exports`);

// Add each component to the exports field
for (const componentName of componentDirs) {
  const exportPath = `./components/${componentName}`;
  
  packageJson.exports[exportPath] = {
    types: `${exportPath}/index.d.ts`,
    import: `${exportPath}/index.mjs`,
    require: `${exportPath}/index.js`
  };
}

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`${GREEN}✓${RESET} Updated package.json exports with ${componentDirs.length} components`);

// Update the ESM index file if needed
const indexMjsPath = path.resolve(distDir, 'index.mjs');
if (!fs.existsSync(indexMjsPath)) {
  // Create minimal ESM index
  const indexContent = componentDirs.map(componentName => {
    const importPath = `./components/${componentName}/${componentName}.js`;
    return `export { ${componentName} } from '${importPath}';`;
  }).join('\n');
  
  fs.writeFileSync(indexMjsPath, indexContent);
  console.log(`${GREEN}✓${RESET} Created ESM index file`);
}

console.log(`\n${GREEN}=== Package exports updated successfully ===${RESET}`);
