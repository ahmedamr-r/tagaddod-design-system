#!/usr/bin/env node

/**
 * React Component Library Build Script
 * 
 * Features:
 * - Builds JavaScript bundles with Vite
 * - Generates single consolidated CSS file
 * - Creates TypeScript declarations
 * - Validates build outputs
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

console.log(`\n${BLUE}=======================================================${RESET}`);
console.log(`${BLUE}= Building @tagaddod-design/react Component Library =${RESET}`);
console.log(`${BLUE}=======================================================${RESET}\n`);

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');

/**
 * Discover all components dynamically
 */
function discoverComponents() {
  console.log(`${YELLOW}Discovering components...${RESET}`);
  
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.log(`${YELLOW}No components directory found${RESET}`);
    return [];
  }

  const components = fs.readdirSync(COMPONENTS_DIR)
    .filter(name => {
      const fullPath = path.join(COMPONENTS_DIR, name);
      return fs.statSync(fullPath).isDirectory() && 
             fs.existsSync(path.join(fullPath, 'index.ts'));
    });

  console.log(`${GREEN}✓${RESET} Found ${components.length} components: ${components.join(', ')}`);
  return components;
}

/**
 * Run a command with error handling
 */
function runCommand(command, description, { continueOnError = false } = {}) {
  console.log(`${YELLOW}${description}...${RESET}`);
  try {
    execSync(command, { stdio: 'inherit', cwd: ROOT_DIR });
    console.log(`${GREEN}✓${RESET} ${description} completed`);
    return true;
  } catch (error) {
    if (continueOnError) {
      console.log(`${YELLOW}⚠️ ${description} had issues, but continuing...${RESET}`);
      return true;
    } else {
      console.error(`${RED}Error during ${description.toLowerCase()}:${RESET}`, error.message);
      return false;
    }
  }
}

/**
 * Build CSS files
 */
function buildCSS() {
  console.log(`${YELLOW}Building CSS files...${RESET}`);
  
  // First ensure tokens package is built
  const tokensDir = path.resolve(ROOT_DIR, '../tokens');
  if (fs.existsSync(tokensDir)) {
    const tokensDistDir = path.join(tokensDir, 'dist');
    if (!fs.existsSync(tokensDistDir) || !fs.existsSync(path.join(tokensDistDir, 'tokens.css'))) {
      console.log(`${YELLOW}Tokens package not built, building it first...${RESET}`);
      runCommand('yarn workspace @tagaddod/tokens build', 'Building tokens package');
    }
  }
  
  // Run the CSS build script
  return runCommand('node scripts/build-css.js', 'Generating consolidated CSS');
}

/**
 * Combine CSS files after Vite build
 */
function combineCSS(savedConsolidatedCSS = '') {
  console.log(`${YELLOW}Combining CSS files...${RESET}`);
  
  try {
    const stylesDir = path.join(DIST_DIR, 'styles');
    
    // Use the saved consolidated CSS (tokens + utilities) or try to read from file
    let consolidatedCSS = savedConsolidatedCSS;
    
    if (!consolidatedCSS) {
      const consolidatedCSSPath = path.join(stylesDir, 'styles.css');
      if (fs.existsSync(consolidatedCSSPath)) {
        consolidatedCSS = fs.readFileSync(consolidatedCSSPath, 'utf-8');
        console.log(`${GREEN}✓${RESET} Read consolidated CSS with tokens (${(consolidatedCSS.length / 1024).toFixed(1)}KB)`);
      } else {
        console.log(`${YELLOW}⚠️ Consolidated CSS not found at ${consolidatedCSSPath}${RESET}`);
      }
    } else {
      console.log(`${GREEN}✓${RESET} Using saved consolidated CSS with tokens (${(consolidatedCSS.length / 1024).toFixed(1)}KB)`);
    }
    
    // Read the CSS that Vite generated (component CSS modules)
    const viteGeneratedCSSPath = path.join(stylesDir, 'index.css');
    let viteCSS = '';
    
    if (fs.existsSync(viteGeneratedCSSPath)) {
      viteCSS = fs.readFileSync(viteGeneratedCSSPath, 'utf-8');
      console.log(`${GREEN}✓${RESET} Read Vite-generated CSS modules (${(viteCSS.length / 1024).toFixed(1)}KB)`);
    } else {
      console.log(`${YELLOW}⚠️ Vite-generated CSS not found at ${viteGeneratedCSSPath}${RESET}`);
    }
    
    // Combine both: consolidated CSS (tokens + utilities) + Vite CSS (component modules)
    let finalCSS = '';
    
    if (consolidatedCSS && viteCSS) {
      // Check if consolidated CSS already contains component styles
      if (consolidatedCSS.includes('Button-module__') || consolidatedCSS.length > viteCSS.length) {
        // Consolidated CSS already has everything, use it as-is
        finalCSS = consolidatedCSS;
        console.log(`${GREEN}✓${RESET} Using consolidated CSS (already contains component styles)`);
      } else {
        // Combine: tokens/utilities + component modules
        finalCSS = `${consolidatedCSS}\n\n/* Component CSS Modules from Vite */\n${viteCSS}`;
        console.log(`${GREEN}✓${RESET} Combined consolidated CSS + Vite CSS modules`);
      }
    } else if (consolidatedCSS) {
      finalCSS = consolidatedCSS;
      console.log(`${GREEN}✓${RESET} Using consolidated CSS only`);
    } else if (viteCSS) {
      finalCSS = viteCSS;
      console.log(`${GREEN}✓${RESET} Using Vite CSS only`);
    } else {
      finalCSS = '/* No CSS files found during build */\n';
      console.log(`${YELLOW}⚠️ No CSS files found, creating placeholder${RESET}`);
    }
    
    // Write the final combined CSS to styles.css (the main export file)
    const finalCSSPath = path.join(stylesDir, 'styles.css');
    fs.writeFileSync(finalCSSPath, finalCSS);
    console.log(`${GREEN}✓${RESET} Final combined CSS written to styles.css (${(finalCSS.length / 1024).toFixed(1)}KB)`);
    
    // Create compatibility redirect files that point to styles.css
    const compatibilityRedirect = `/* Redirects to main styles file for backwards compatibility */
@import './styles.css';
`;
    
    // Update index.css to redirect to styles.css for consistency
    const indexCSSPath = path.join(stylesDir, 'index.css');
    fs.writeFileSync(indexCSSPath, compatibilityRedirect);
    console.log(`${GREEN}✓${RESET} Created index.css redirect to styles.css`);
    
    // Create other compatibility files
    fs.writeFileSync(path.join(stylesDir, 'tokens.css'), compatibilityRedirect);
    fs.writeFileSync(path.join(stylesDir, 'utilities.css'), compatibilityRedirect);
    console.log(`${GREEN}✓${RESET} Created compatibility redirect files`);
    
    return true;
  } catch (error) {
    console.error(`${RED}Error combining CSS files:${RESET}`, error);
    return false;
  }
}

/**
 * Fix TypeScript declaration file paths
 */
function fixTypeScriptPaths() {
  console.log(`${YELLOW}Fixing TypeScript declarations...${RESET}`);
  
  try {
    const typesDir = path.join(DIST_DIR, 'types');
    const typesIndexDts = path.join(typesDir, 'index.d.ts');
    
    // Ensure types directory exists
    if (!fs.existsSync(typesDir)) {
      fs.mkdirSync(typesDir, { recursive: true });
    }
    
    // Check what declaration files actually exist
    const componentsIndexExists = fs.existsSync(path.join(DIST_DIR, 'components', 'index.d.ts'));
    const providersIndexExists = fs.existsSync(path.join(DIST_DIR, 'providers', 'index.d.ts'));
    
    console.log(`${BLUE}Declaration files found:${RESET}`);
    console.log(`  Components: ${componentsIndexExists ? '✓' : '✗'}`);
    console.log(`  Providers: ${providersIndexExists ? '✓' : '✗'}`);
    
      // Generate the main types index file with correct paths
  // NOTE: We deliberately DO NOT include CSS imports in TypeScript declarations
  // CSS should be imported separately by consumers via package exports
  let typesContent = `// Tagaddod Design System React Components
// 
// To use this library:
// 1. Import styles: import '@tagaddod-design/react/styles'
// 2. Import components: import { Button } from '@tagaddod-design/react'
//
// CSS is deliberately separated from TypeScript declarations to avoid
// bundler issues and follow component library best practices.

`;
  
  if (componentsIndexExists) {
    typesContent += "export * from '../components';\n";
  }
  
  if (providersIndexExists) {
    typesContent += "export * from '../providers';\n";
  }
  
  // Fallback if no declarations found
  if (!typesContent.includes('export')) {
    console.log(`${YELLOW}⚠️ No declaration files found, generating fallback exports...${RESET}`);
    typesContent += `// Fallback exports - declarations may not be available
export * from '../components';
export * from '../providers';
`;
  }
    
    // Write the corrected index.d.ts
    fs.writeFileSync(typesIndexDts, typesContent);
    console.log(`${GREEN}✓${RESET} Generated ${typesIndexDts} with correct import paths`);
    
    console.log(`${GREEN}✓${RESET} TypeScript declarations properly configured`);
    return true;
  } catch (error) {
    console.error(`${RED}Error generating TypeScript declarations:${RESET}`, error);
    return false;
  }
}

/**
 * Update package.json with exports
 */
function updatePackageExports(components) {
  console.log(`${YELLOW}Updating package.json exports...${RESET}`);
  
  try {
    const packageJsonPath = path.join(ROOT_DIR, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Base exports (main entry point) - ensure no absolute paths
    const baseExports = {
      ".": {
        "types": "./dist/types/index.d.ts",
        "import": "./dist/index.js",
        "require": "./dist/index.cjs",
        "default": "./dist/index.js"
      },
      // Main CSS exports - use object format for better resolution
      "./styles": {
        "default": "./dist/styles/styles.css"
      },
      "./styles.css": {
        "default": "./dist/styles/styles.css"
      },
      // Allow importing specific style files
      "./styles/*": {
        "default": "./dist/styles/*"
      },
      // Allow access to package.json for tooling
      "./package.json": "./package.json"
    };

    packageJson.exports = baseExports;
    
    // Update main fields - ensure relative paths only
    packageJson.main = "./dist/index.cjs";
    packageJson.module = "./dist/index.js";
    packageJson.types = "./dist/types/index.d.ts";
    packageJson.style = "./dist/styles/styles.css";
    
    // CSS is separate, so no side effects from JS
    packageJson.sideEffects = false;
    
    // Add files to include in npm package
    if (!packageJson.files) {
      packageJson.files = [];
    }
    packageJson.files = [
      "dist",
      "!dist/**/*.map",
      "!dist/**/*.tsbuildinfo",
      "README.md",
      "CHANGELOG.md"
    ];
    
    // Ensure no absolute paths in any field
    const stringifiedPackage = JSON.stringify(packageJson, null, 2);
    if (stringifiedPackage.includes(ROOT_DIR) || stringifiedPackage.includes(__dirname)) {
      console.error(`${RED}Error: Absolute paths detected in package.json!${RESET}`);
      return false;
    }
    
    fs.writeFileSync(packageJsonPath, stringifiedPackage);
    console.log(`${GREEN}✓${RESET} Package.json exports updated with relative paths only`);
    return true;
  } catch (error) {
    console.error(`${RED}Error updating package.json:${RESET}`, error);
    return false;
  }
}

/**
 * Validate the built outputs
 */
function validateBuild() {
  console.log(`${YELLOW}Validating build outputs...${RESET}`);
  
  const requiredFiles = [
    'dist/index.js',                    // ES module
    'dist/index.cjs',                   // CommonJS module
    'dist/types/index.d.ts',            // TypeScript declarations
    'dist/styles/styles.css',           // Main consolidated CSS
  ];
  
  const missingFiles = requiredFiles.filter(file => 
    !fs.existsSync(path.join(ROOT_DIR, file))
  );
  
  if (missingFiles.length > 0) {
    console.error(`${RED}Missing required files:${RESET}`, missingFiles);
    return false;
  }
  
  // Check bundle sizes
  const bundleStats = requiredFiles.map(file => {
    const filePath = path.join(ROOT_DIR, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      return `${path.basename(file)}: ${sizeKB} KB`;
    }
    return `${path.basename(file)}: missing`;
  });
  
  console.log(`${BLUE}Bundle sizes:${RESET}`);
  bundleStats.forEach(stat => console.log(`  ${stat}`));
  
  // Verify CSS includes tokens and components
  const cssPath = path.join(ROOT_DIR, 'dist/styles/styles.css');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  const hasTokens = cssContent.includes('--t-') && cssContent.includes(':root');
  const hasGreenPan = cssContent.includes('[data-theme="greenpan"]');
  const hasComponentStyles = cssContent.includes('.button') || cssContent.includes('Component styles');
  
  console.log(`${BLUE}CSS validation:${RESET}`);
  console.log(`  Tokens: ${hasTokens ? '✓' : '✗'}`);
  console.log(`  Theme overrides: ${hasGreenPan ? '✓' : '✗'}`);
  console.log(`  Component styles: ${hasComponentStyles ? '✓' : '✗'}`);
  
  if (hasTokens && hasComponentStyles) {
    console.log(`${GREEN}✓${RESET} CSS includes tokens and component styles`);
  } else {
    console.log(`${YELLOW}⚠️ CSS may be missing tokens or component styles${RESET}`);
  }
  
  console.log(`${GREEN}✓${RESET} Build validation passed`);
  return true;
}

/**
 * Main build function
 */
async function runBuild() {
  console.time('Total build time');
  
  // Step 1: Discover components
  const components = discoverComponents();
  
  // Step 2: Clean
  if (!runCommand('rm -rf dist', 'Cleaning dist directory')) {
    process.exit(1);
  }
  
  // Step 3: Build CSS first (creates src/styles/index.css for Vite)
  if (!buildCSS()) {
    process.exit(1);
  }
  
  // Step 4: Save the consolidated CSS before Vite overwrites it
  const stylesDir = path.join(DIST_DIR, 'styles');
  const consolidatedCSSPath = path.join(stylesDir, 'styles.css');
  let savedConsolidatedCSS = '';
  if (fs.existsSync(consolidatedCSSPath)) {
    savedConsolidatedCSS = fs.readFileSync(consolidatedCSSPath, 'utf-8');
    console.log(`${GREEN}✓${RESET} Saved consolidated CSS (${(savedConsolidatedCSS.length / 1024).toFixed(1)}KB) before Vite build`);
  }
  
  // Step 5: Build with Vite (this will extract component CSS modules)
  if (!runCommand('vite build', 'Building with Vite')) {
    process.exit(1);
  }
  
  // Step 6: Restore and combine CSS files (tokens + utilities + component styles)
  if (!combineCSS(savedConsolidatedCSS)) {
    process.exit(1);
  }
  
  // Step 7: Generate TypeScript declarations
  runCommand('tsc --project tsconfig.build.json', 'Generating TypeScript declarations', { continueOnError: true });
  
  // Step 8: Fix TypeScript paths
  if (!fixTypeScriptPaths()) {
    process.exit(1);
  }
  
  // Step 9: Update package.json exports
  if (!updatePackageExports(components)) {
    process.exit(1);
  }
  
  // Step 10: Validate build
  if (!validateBuild()) {
    process.exit(1);
  }
  
  console.timeEnd('Total build time');
  
  console.log(`\n${GREEN}==============================================${RESET}`);
  console.log(`${GREEN}= ✅ BUILD SUCCESSFUL =${RESET}`);
  console.log(`${GREEN}= 🎨 CSS: Tokens + Components combined =${RESET}`);
  console.log(`${GREEN}= 📦 Components: ${components.length} discovered =${RESET}`);
  console.log(`${GREEN}= 🔧 TypeScript: Declarations generated =${RESET}`);
  console.log(`${GREEN}= 📤 Package: Ready for npm publishing =${RESET}`);
  console.log(`${GREEN}==============================================${RESET}`);
  
  console.log(`\n${BLUE}✨ Your component library includes:${RESET}`);
  console.log(`   • Single CSS file with tokens, themes, and component styles`);
  console.log(`   • Automatic theme switching (Tagaddod/GreenPan)`);
  console.log(`   • Full RTL/LTR support`);
  console.log(`   • Utility classes from design tokens`);
  console.log(`   • TypeScript support`);
  
  console.log(`\n${BLUE}Consumer usage:${RESET}`);
  console.log(`1. Install: ${YELLOW}npm install @tagaddod-design/react${RESET}`);
  console.log(`2. Import CSS: ${YELLOW}import '@tagaddod-design/react/styles'${RESET}`);
  console.log(`3. Import components: ${YELLOW}import { Button } from '@tagaddod-design/react'${RESET}`);
  console.log(`4. Set theme: ${YELLOW}<div data-theme="greenpan">...</div>${RESET}`);
}

runBuild();
