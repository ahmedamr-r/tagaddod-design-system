#!/usr/bin/env node

/**
 * This script creates a simplified build for environments where
 * the full Vite build might fail. It generates a bare-minimum package
 * with functional components that re-export types.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`${BLUE}=== Creating Improved Minimal React Package Build ===${RESET}\n`);

// Ensure the dist directory exists
const distDir = path.resolve(__dirname, '../dist');
const stylesDir = path.resolve(distDir, 'styles');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log(`${GREEN}✓${RESET} Created dist directory`);
}

if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
  console.log(`${GREEN}✓${RESET} Created styles directory`);
}

// Step 1: Build CSS (this should work even if React build fails)
console.log(`\n${BLUE}Building CSS from tokens...${RESET}`);
try {
  execSync('node scripts/build-css.js', { stdio: 'inherit' });
  console.log(`${GREEN}✓${RESET} CSS built successfully`);
} catch (err) {
  console.log(`${RED}✗ CSS build failed:${RESET} ${err.message}`);
  console.log('Creating fallback CSS file...');
  
  // Create minimal CSS file
  const cssContent = `/* Fallback CSS for @tagaddod-design/react
   * This is a minimal build created due to build failures in CI
   * Import the tokens package directly for styling:
   * @import '@tagaddod-design/tokens/css/tokens.css';
   */
  
  :root {
    /* Fallback styles */
  }
  `;
  
  fs.writeFileSync(path.join(stylesDir, 'index.css'), cssContent);
  console.log(`${YELLOW}⚠${RESET} Created fallback CSS file`);
}

// Analyze the components to extract proper types
console.log(`\n${BLUE}Analyzing component types...${RESET}`);
const componentsDir = path.resolve(__dirname, '../src/components');
const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Extract component exports and props from index.ts
const componentIndexPath = path.resolve(componentsDir, 'index.ts');
const componentIndexContent = fs.readFileSync(componentIndexPath, 'utf8');

// Extract component name and prop types
const componentInfo = {};
const exportRegex = /export\s+{\s*([A-Za-z0-9_]+)\s*}/g;
const typeRegex = /export\s+type\s+{\s*([A-Za-z0-9_]+Props)\s*}/g;

let match;
while ((match = exportRegex.exec(componentIndexContent)) !== null) {
  const componentName = match[1];
  if (componentName[0] === componentName[0].toUpperCase()) {
    componentInfo[componentName] = { hasProps: false };
  }
}

while ((match = typeRegex.exec(componentIndexContent)) !== null) {
  const propTypeName = match[1];
  const componentName = propTypeName.replace('Props', '');
  if (componentInfo[componentName]) {
    componentInfo[componentName].hasProps = true;
    componentInfo[componentName].propType = propTypeName;
  }
}

console.log(`Analyzed ${Object.keys(componentInfo).length} components`);

// Generate the code for ESM exports
let esmExports = `// @tagaddod-design/react ESM build
// This is an improved minimal build with proper types
import React from 'react';

`;

// Generate component implementations
Object.entries(componentInfo).forEach(([componentName, info]) => {
  const hasProps = info.hasProps;
  
  esmExports += `export const ${componentName} = function ${componentName}(props${hasProps ? `: ${componentName}Props` : ''}) {
  // This is a minimal implementation
  const { children, ...rest } = props || {};
  return null;
};\n\n`;
});

// Generate type definitions
let dtsContent = `// @tagaddod-design/react TypeScript declarations
// This is an improved minimal build with proper types
import * as React from 'react';\n\n`;

// Read component props from original files if possible
Object.entries(componentInfo).forEach(([componentName, info]) => {
  if (info.hasProps) {
    // Try to read the component file to extract prop definitions
    const componentDir = path.join(componentsDir, componentName);
    const componentFiles = fs.readdirSync(componentDir).filter(f => 
      f.endsWith('.tsx') && !f.includes('.test.') && !f.includes('.stories.')
    );
    
    if (componentFiles.length > 0) {
      const componentFile = path.join(componentDir, componentFiles[0]);
      const componentCode = fs.readFileSync(componentFile, 'utf8');
      
      // Extract the prop interface
      const propRegex = /export\s+interface\s+([A-Za-z0-9_]+Props)[^{]*{([^}]*)}/s;
      const propMatch = propRegex.exec(componentCode);
      
      if (propMatch) {
        dtsContent += `export interface ${propMatch[1]} extends React.${componentName.includes('Input') ? 'InputHTMLAttributes' : 'HTMLAttributes'}<HTML${componentName.includes('Button') ? 'Button' : 'Div'}Element> {
${propMatch[2]}
}\n\n`;
      } else {
        // Fallback simple props
        dtsContent += `export interface ${componentName}Props extends React.${componentName.includes('Button') ? 'ButtonHTMLAttributes' : 'HTMLAttributes'}<HTML${componentName.includes('Button') ? 'Button' : 'Div'}Element> {
  children?: React.ReactNode;
}\n\n`;
      }
    } else {
      // Fallback simple props
      dtsContent += `export interface ${componentName}Props extends React.${componentName.includes('Button') ? 'ButtonHTMLAttributes' : 'HTMLAttributes'}<HTML${componentName.includes('Button') ? 'Button' : 'Div'}Element> {
  children?: React.ReactNode;
}\n\n`;
    }
  }
  
  // Add the component declaration
  dtsContent += `export declare const ${componentName}: React.FC<${info.hasProps ? `${componentName}Props` : 'any'}>;\n\n`;
});

// Add ThemeProvider declaration
dtsContent += `export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: 'tagaddod' | 'greenpan';
  direction?: 'ltr' | 'rtl';
}

export declare const ThemeProvider: React.FC<ThemeProviderProps>;
`;

// Write the output files
const esmPath = path.join(distDir, 'index.mjs');
const cjsPath = path.join(distDir, 'index.js');
const dtsPath = path.join(distDir, 'index.d.ts');

// Write ESM version
fs.writeFileSync(esmPath, esmExports);
console.log(`${GREEN}✓${RESET} Created ESM module (index.mjs)`);

// Write CommonJS version - using the same code since it's a simple implementation
fs.writeFileSync(cjsPath, esmExports.replace('export const', 'exports.') + '\nmodule.exports = exports;');
console.log(`${GREEN}✓${RESET} Created CommonJS module (index.js)`);

// Write TypeScript declarations
fs.writeFileSync(dtsPath, dtsContent);
console.log(`${GREEN}✓${RESET} Created TypeScript declarations (index.d.ts)`);

// Create a package.json for the dist folder
const packageJson = require('../package.json');
const distPackageJson = {
  "name": packageJson.name,
  "version": packageJson.version,
  "license": "MIT",
  "main": "index.js",
  "module": "index.mjs",
  "types": "index.d.ts",
  "style": "styles/index.css",
  "dependencies": {
    "@tagaddod-design/tokens": packageJson.dependencies["@tagaddod-design/tokens"]
  },
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-dom": ">=17.0.0"
  },
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./index.mjs",
      "require": "./index.js"
    },
    "./styles/index.css": "./styles/index.css",
    "./styles": "./styles/index.css"
  },
  "sideEffects": ["./styles/index.css"]
};

// Add component exports
componentDirs.forEach(componentName => {
  const distComponentDir = path.join(distDir, 'components', componentName);
  
  // Create component directory in dist
  if (!fs.existsSync(distComponentDir)) {
    fs.mkdirSync(distComponentDir, { recursive: true });
  }
  
  // Add component export to package.json
  distPackageJson.exports[`./components/${componentName}`] = {
    "types": `./components/${componentName}/index.d.ts`,
    "import": `./components/${componentName}/index.mjs`,
    "require": `./components/${componentName}/index.js`
  };
  
  // Create minimal component entry points
  const indexJs = `// Minimal component export - ${componentName}
module.exports = require('../../index.js').${componentName};
`;
  
  const indexMjs = `// Minimal component export - ${componentName}
export { ${componentName} } from '../../index.mjs';
`;
  
  const indexDts = `// Type declarations for ${componentName}
export { ${componentName}, ${componentName}Props } from '../../index';
`;
  
  fs.writeFileSync(path.join(distComponentDir, 'index.js'), indexJs);
  fs.writeFileSync(path.join(distComponentDir, 'index.mjs'), indexMjs);
  fs.writeFileSync(path.join(distComponentDir, 'index.d.ts'), indexDts);
  
  console.log(`${GREEN}✓${RESET} Created entry point for ${componentName}`);
});

fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(distPackageJson, null, 2));
console.log(`${GREEN}✓${RESET} Created package.json for distribution`);

console.log(`\n${GREEN}=== Improved minimal package build complete ===${RESET}`);
console.log(`\n${YELLOW}NOTE:${RESET} This is a lightweight package with minimal implementation.`);
console.log(`Components will not render anything, but they export the correct types and structure.`);
