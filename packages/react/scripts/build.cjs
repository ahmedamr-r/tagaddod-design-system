#!/usr/bin/env node

/**
 * Simplified React Component Library Build Script
 * 
 * This script orchestrates the build process using Vite's built-in library mode
 * with proper TypeScript declarations and package.json exports.
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
 * Step 1: Clean the dist directory
 */
function cleanDistDir() {
  console.log(`${YELLOW}Cleaning dist directory...${RESET}`);
  try {
    if (fs.existsSync(DIST_DIR)) {
      execSync('rm -rf dist', { cwd: ROOT_DIR });
    }
    console.log(`${GREEN}✓${RESET} Cleaned dist directory`);
    return true;
  } catch (error) {
    console.error(`${RED}Error cleaning dist directory:${RESET}`, error);
    return false;
  }
}

/**
 * Step 2: Build with Vite
 */
function buildVite() {
  console.log(`${YELLOW}Building with Vite...${RESET}`);
  try {
    execSync('vite build', { stdio: 'inherit', cwd: ROOT_DIR });
    console.log(`${GREEN}✓${RESET} Vite build completed`);
    return true;
  } catch (error) {
    console.error(`${RED}Error during Vite build:${RESET}`, error);
    return false;
  }
}

/**
 * Step 3: Generate TypeScript declarations
 */
function generateTypes() {
  console.log(`${YELLOW}Generating TypeScript declarations...${RESET}`);
  try {
    execSync('tsc --emitDeclarationOnly --outDir dist/types', { 
      stdio: 'inherit', 
      cwd: ROOT_DIR 
    });
    console.log(`${GREEN}✓${RESET} TypeScript declarations generated`);
    return true;
  } catch (error) {
    console.error(`${RED}Error generating TypeScript declarations:${RESET}`, error);
    console.log(`${YELLOW}⚠️ Continuing despite TypeScript errors${RESET}`);
    return true;
  }
}

/**
 * Step 4: Process CSS with PostCSS
 */
async function buildCSS() {
  console.log(`${YELLOW}Processing CSS...${RESET}`);
  try {
    const postcss = require('postcss');
    const postcssImport = require('postcss-import');
    const postcssNested = require('postcss-nested');
    
    const mainCssPath = path.join(SRC_DIR, 'styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf-8');

    const result = await postcss([
      postcssImport({
        resolve: (id) => {
          if (id.includes('@tagaddod-design/tokens')) {
            // Handle different token import patterns
            if (id === '@tagaddod-design/tokens/tokens.css') {
              return path.resolve(ROOT_DIR, '../tokens/dist/tokens.css');
            }
            if (id.includes('/brands/')) {
              const brand = id.split('/brands/')[1].replace('.css', '');
              return path.resolve(ROOT_DIR, `../tokens/dist/brands/${brand}.css`);
            }
            if (id.includes('/locales/')) {
              const locale = id.split('/locales/')[1].replace('.css', '');
              return path.resolve(ROOT_DIR, `../tokens/dist/locales/${locale}.css`);
            }
            if (id.includes('/directions/')) {
              const direction = id.split('/directions/')[1].replace('.css', '');
              return path.resolve(ROOT_DIR, `../tokens/dist/directions/${direction}.css`);
            }
          }
          return id;
        }
      }),
      postcssNested()
    ]).process(mainCss, {
      from: mainCssPath,
      to: path.join(DIST_DIR, 'styles.css')
    });

    fs.mkdirSync(path.dirname(path.join(DIST_DIR, 'styles.css')), { recursive: true });
    fs.writeFileSync(path.join(DIST_DIR, 'styles.css'), result.css);
    
    console.log(`${GREEN}✓${RESET} CSS processed successfully`);
    return true;
  } catch (error) {
    console.error(`${RED}Error building CSS:${RESET}`, error);
    return false;
  }
}

/**
 * Step 5: Generate package.json exports
 */
function generateExports() {
  console.log(`${YELLOW}Generating package.json exports...${RESET}`);
  try {
    const packageJsonPath = path.join(ROOT_DIR, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Get all components
    const components = fs.readdirSync(COMPONENTS_DIR)
      .filter(name => {
        const fullPath = path.join(COMPONENTS_DIR, name);
        return fs.statSync(fullPath).isDirectory() && 
               fs.existsSync(path.join(fullPath, 'index.ts'));
      });
    
    // Update exports field
    packageJson.exports = {
      ".": {
        "types": "./dist/types/index.d.ts",
        "import": "./dist/es/index.js",
        "require": "./dist/cjs/index.cjs"
      },
      "./styles": "./dist/styles.css"
    };
    
    // Add component exports
    components.forEach(component => {
      packageJson.exports[`./${component}`] = {
        "types": `./dist/types/components/${component}/index.d.ts`,
        "import": `./dist/es/components/${component}/index.js`,
        "require": `./dist/cjs/components/${component}/index.cjs`
      };
    });
    
    // Update other fields
    packageJson.main = "./dist/cjs/index.cjs";
    packageJson.module = "./dist/es/index.js";
    packageJson.types = "./dist/types/index.d.ts";
    packageJson.sideEffects = ["**/*.css"];
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`${GREEN}✓${RESET} Package.json exports updated`);
    return true;
  } catch (error) {
    console.error(`${RED}Error updating package.json:${RESET}`, error);
    return false;
  }
}

/**
 * Main build function
 */
async function runBuild() {
  console.time('Total build time');
  
  if (!cleanDistDir()) process.exit(1);
  if (!buildVite()) process.exit(1);
  if (!generateTypes()) process.exit(1);
  if (!await buildCSS()) process.exit(1);
  if (!generateExports()) process.exit(1);
  
  console.timeEnd('Total build time');
  
  console.log(`\n${GREEN}==============================================${RESET}`);
  console.log(`${GREEN}= Build Completed Successfully =${RESET}`);
  console.log(`${GREEN}==============================================${RESET}`);
}

// Run the build
runBuild();
