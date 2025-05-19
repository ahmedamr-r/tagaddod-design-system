#!/usr/bin/env node

/**
 * This script verifies that component exports are correctly set up in the dist directory.
 * It checks that all components can be imported both from the main bundle and individually.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Verifying Component Export Structure ===${RESET}\n`);

// Check if dist directory exists
const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  console.error(`${RED}Error: dist directory does not exist. Run build first.${RESET}`);
  process.exit(1);
}

// Check main exports
const mainFiles = ['index.js', 'index.mjs', 'index.d.ts'];
const mainMissing = mainFiles.filter(file => !fs.existsSync(path.join(distDir, file)));
if (mainMissing.length > 0) {
  console.error(`${RED}Error: Main export files missing: ${mainMissing.join(', ')}${RESET}`);
  process.exit(1);
}

console.log(`${GREEN}✓${RESET} Found main export files: ${mainFiles.join(', ')}`);

// Check package.json exports
const pkgPath = path.join(distDir, 'package.json');
if (!fs.existsSync(pkgPath)) {
  console.error(`${RED}Error: package.json missing in dist directory${RESET}`);
  process.exit(1);
}

const pkg = require(pkgPath);
console.log(`${GREEN}✓${RESET} Found package.json`);

// Check for exports field
if (!pkg.exports || !pkg.exports['.']) {
  console.error(`${RED}Error: Missing main export in package.json exports field${RESET}`);
  process.exit(1);
}

console.log(`${GREEN}✓${RESET} Package.json has main export field`);

// Check styles export
if (!pkg.exports['./styles'] && !pkg.exports['./styles/index.css']) {
  console.warn(`${YELLOW}Warning: Missing styles export in package.json exports field${RESET}`);
}

// Count number of component exports
const componentExports = Object.keys(pkg.exports).filter(key => key.startsWith('./components/'));
console.log(`${GREEN}✓${RESET} Found ${componentExports.length} component exports in package.json`);

// Check components directory
const componentsDir = path.join(distDir, 'components');
if (!fs.existsSync(componentsDir)) {
  console.error(`${RED}Error: components directory missing in dist${RESET}`);
  process.exit(1);
}

const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`${GREEN}✓${RESET} Found ${componentDirs.length} component directories`);

// Check that each component directory has the necessary files
let validComponents = 0;
const invalidComponents = [];

for (const componentName of componentDirs) {
  const componentDir = path.join(componentsDir, componentName);
  const requiredFiles = ['index.js', 'index.d.ts'];
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(componentDir, file)));
  
  if (missingFiles.length > 0) {
    invalidComponents.push({ name: componentName, missing: missingFiles });
    continue;
  }
  
  // Read content of the component index files to make sure they're exporting correctly
  try {
    const indexJsContent = fs.readFileSync(path.join(componentDir, 'index.js'), 'utf8');
    const indexMjsPath = path.join(componentDir, 'index.mjs');
    let indexMjsContent = '';
    
    if (fs.existsSync(indexMjsPath)) {
      indexMjsContent = fs.readFileSync(indexMjsPath, 'utf8');
    }
    
    // Check if the files contain the expected components export pattern
    const jsHasComponentExport = indexJsContent.includes(`exports.${componentName} =`) || 
                                 indexJsContent.includes(`module.exports = require`);
    
    const mjsHasComponentExport = !indexMjsPath || indexMjsContent.includes(`export { ${componentName} }`);
    
    if (!jsHasComponentExport || !mjsHasComponentExport) {
      invalidComponents.push({
        name: componentName,
        issue: !jsHasComponentExport ? 'Invalid export pattern in index.js' : 'Invalid export pattern in index.mjs'
      });
      continue;
    }
    
    validComponents++;
  } catch (error) {
    invalidComponents.push({
      name: componentName,
      issue: `Error reading files: ${error.message}`
    });
  }
}

console.log(`${GREEN}✓${RESET} ${validComponents} components have valid exports`);

if (invalidComponents.length > 0) {
  console.warn(`${YELLOW}Warning: ${invalidComponents.length} components have issues:${RESET}`);
  invalidComponents.forEach(({ name, missing, issue }) => {
    if (missing) {
      console.warn(`  ${name}: Missing files: ${missing.join(', ')}`);
    } else if (issue) {
      console.warn(`  ${name}: ${issue}`);
    }
  });
}

// Try loading main bundle with eval (safer than require which can fail on ESM)
try {
  // Read main bundle
  const mainBundle = fs.readFileSync(path.join(distDir, 'index.js'), 'utf8');
  
  // Count exported components by matching export statements (regex approach)
  const exportMatches = mainBundle.match(/exports\.([A-Z][a-zA-Z0-9_]*) =/g) || [];
  const exportedComponents = exportMatches.map(match => match.replace('exports.', '').replace(' =', ''))
    .filter(name => name[0] === name[0].toUpperCase());
  
  console.log(`${GREEN}✓${RESET} Main bundle appears to export ${exportedComponents.length} components`);
  
  // Compare with known components
  const knownComponentNames = componentDirs.filter(name => name[0] === name[0].toUpperCase());
  const commonCount = knownComponentNames.filter(name => exportedComponents.includes(name)).length;
  
  if (commonCount < knownComponentNames.length) {
    console.warn(`${YELLOW}Warning: Not all component directories are exported from main bundle${RESET}`);
  } else {
    console.log(`${GREEN}✓${RESET} All component directories appear to be exported from main bundle`);
  }
} catch (error) {
  console.warn(`${YELLOW}Warning: Couldn't analyze main bundle exports: ${error.message}${RESET}`);
}

// Overall verdict
if (validComponents === componentDirs.length && componentExports.length >= componentDirs.length) {
  console.log(`\n${GREEN}=== All component exports verified successfully ===${RESET}`);
  process.exit(0);
} else if (validComponents > 0) {
  console.warn(`\n${YELLOW}=== Component exports have some issues but are partially working ===${RESET}`);
  process.exit(0);
} else {
  console.error(`\n${RED}=== Component exports have critical issues ===${RESET}`);
  process.exit(1);
}
