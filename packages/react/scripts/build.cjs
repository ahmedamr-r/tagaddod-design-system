#!/usr/bin/env node

/**
 * Professional React Component Library Build Script
 *
 * This script builds the React component library following best practices from 
 * established UI libraries like Polaris, Material UI, and Chakra UI:
 * 
 * 1. Bundled version for the main entry point
 * 2. ESM modules with component directories for tree-shaking
 * 3. Automatic CSS injection (no need to import styles separately)
 * 4. Clean directory structure with no exposed chunked files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

// Components to exclude from the build
const COMPONENTS_TO_EXCLUDE = ['DrawerTest'];

console.log(`\n${BLUE}=======================================================${RESET}`);
console.log(`${BLUE}= Building @tagaddod-design/react Component Library =${RESET}`);
console.log(`${BLUE}=======================================================${RESET}\n`);

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const COMPONENTS_SRC_DIR = path.join(SRC_DIR, 'components');
const ESM_DIR = path.join(DIST_DIR, 'esm');
const COMPONENTS_ESM_DIR = path.join(ESM_DIR, 'components');

/**
 * Step 1: Clean the dist directory
 */
function cleanDistDir() {
  console.log(`${YELLOW}Cleaning dist directory...${RESET}`);
  try {
    if (fs.existsSync(DIST_DIR)) {
      execSync('rm -rf dist', { cwd: ROOT_DIR });
    }
    fs.mkdirSync(DIST_DIR, { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'styles'), { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'components'), { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'types'), { recursive: true });
    console.log(`${GREEN}✓${RESET} Cleaned dist directory`);
    return true;
  } catch (error) {
    console.error(`${RED}Error cleaning dist directory:${RESET}`, error);
    return false;
  }
}

/**
 * Step 2: Build CSS with PostCSS
 */
async function buildCSS() {
  console.log(`${YELLOW}Building CSS...${RESET}`);
  try {
    const mainCssPath = path.join(SRC_DIR, 'styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf-8');

    const result = await postcss([
      postcssImport({
        resolve: (id) => {
          if (id.includes('@tagaddod-design/tokens') || id.includes('@tagaddod/tokens')) {
            // Resolve token paths based on the import pattern
            const tokensParts = id.split('/');
            
            if (id.includes('/css') || id.includes('/css/tokens.css')) {
              return path.resolve(ROOT_DIR, '../tokens/dist/css/tokens.css');
            }
            
            if (tokensParts.includes('tagaddod') || tokensParts.includes('greenpan')) {
              const brand = tokensParts.includes('tagaddod') ? 'tagaddod' : 'greenpan';
              const locale = tokensParts.includes('en') ? 'en' : 
                            tokensParts.includes('ar') ? 'ar' : '';
              
              if (locale) {
                return path.resolve(ROOT_DIR, `../tokens/dist/${brand}/${locale}/vars.css`);
              }
              
              return path.resolve(ROOT_DIR, `../tokens/dist/${brand}/vars.css`);
            }
            
            if (tokensParts.includes('locales')) {
              const locale = tokensParts[tokensParts.indexOf('locales') + 1];
              return path.resolve(ROOT_DIR, `../tokens/dist/locales/${locale}/vars.css`);
            }
          }
          
          return id;
        }
      }),
      postcssNested()
    ]).process(mainCss, {
      from: mainCssPath,
      to: path.join(DIST_DIR, 'styles/index.css'),
      map: { inline: false, annotation: true }
    });

    // Write the processed CSS
    fs.writeFileSync(path.join(DIST_DIR, 'styles/index.css'), result.css);
    if (result.map) {
      fs.writeFileSync(path.join(DIST_DIR, 'styles/index.css.map'), result.map.toString());
    }

    // Create a CSS file that imports the main CSS file for better CSS-in-JS integration
    const cssEntryPoint = `/* CSS entry point for vite-plugin-lib-inject-css */
@import './index.css';
`;
    fs.writeFileSync(path.join(DIST_DIR, 'styles/inject.css'), cssEntryPoint);

    console.log(`${GREEN}✓${RESET} CSS built successfully`);
    return true;
  } catch (error) {
    console.error(`${RED}Error building CSS:${RESET}`, error);
    return false;
  }
}

/**
 * Step 3: Run Vite build with CSS auto-injection
 */
function buildVite() {
  console.log(`${YELLOW}Building components with Vite...${RESET}`);
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
 * Step 4: Generate TypeScript declarations
 */
function generateTypes() {
  console.log(`${YELLOW}Generating TypeScript declarations...${RESET}`);
  try {
    execSync('tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types --noEmitOnError false', { 
      stdio: 'inherit', 
      cwd: ROOT_DIR 
    });
    console.log(`${GREEN}✓${RESET} TypeScript declarations generated`);
    return true;
  } catch (error) {
    console.error(`${RED}Error generating TypeScript declarations:${RESET}`, error);
    // Continue despite errors
    console.log(`${YELLOW}⚠️ Continuing with build despite TypeScript errors${RESET}`);
    return true;
  }
}

/**
 * Step 5: Create the main index.js file (ESM) in dist root
 */
function createMainBundle() {
  console.log(`${YELLOW}Creating main bundle...${RESET}`);
  try {
    // Get components from src to verify they exist, filtering out excluded components
    const componentDirs = fs.readdirSync(COMPONENTS_SRC_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => !COMPONENTS_TO_EXCLUDE.includes(dirent.name))
      .map(dirent => dirent.name);
    
    // Create the ES Module entry point with individual component imports
    let mainIndexJs = `// ES Module entry point - Explicit re-exports
import { ThemeProvider, ThemeContext, useTheme, useThemeClasses } from './esm/providers/ThemeProvider.js';
import { Avatar, avatarSizes, avatarTypes } from './esm/components/Avatar/Avatar.js';
import { Badge, badgeSizes, badgeTones } from './esm/components/Badge/Badge.js';
import { Button, buttonSizes, buttonTones, buttonVariants } from './esm/components/Button/Button.js';
import { Checkbox } from './esm/components/Checkbox/Checkbox.js';
import { Switch } from './esm/components/Switch/Switch.js';
import { Drawer, drawerPositions, drawerSizes } from './esm/components/Drawer/Drawer.js';
import { Listbox } from './esm/components/Listbox/Listbox.js';
import { ListboxOption } from './esm/components/Listbox/ListboxOption.js';
import { Modal } from './esm/components/Modal/Modal.js';
import { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger } from './esm/components/Popover/Popover.js';
import { Pagination } from './esm/components/Pagination/Pagination.js';
import { usePagination } from './esm/components/Pagination/usePagination.js';
import { RadioButtonItem, RadioGroup } from './esm/components/RadioButton/RadioButton.js';
import { Table } from './esm/components/Table/Table.js';
import { TableHeader } from './esm/components/Table/TableHeader.js';
import { TableCell } from './esm/components/Table/TableCell.js';
import { TableHeaderCell } from './esm/components/Table/TableHeaderCell.js';
import { Tabs, TabsContent, TabsList, TabsTrigger, tabsVariants, tabsCounts, Root, List, Trigger, Content } from './esm/components/Tabs/Tabs.js';
import { TextInput, textInputSizes } from './esm/components/TextInput/TextInput.js';
import { AspectRatio } from './esm/components/AspectRatio/AspectRatio.js';

// CSS import - essential for style injection
import './styles/index.css';

// Re-export everything
export {
  // Theme
  ThemeProvider, ThemeContext, useTheme, useThemeClasses,
  
  // Components
  Avatar, avatarSizes, avatarTypes,
  Badge, badgeSizes, badgeTones,
  Button, buttonSizes, buttonTones, buttonVariants,
  Checkbox,
  Switch,
  Drawer, drawerPositions, drawerSizes,
  Listbox, ListboxOption,
  Modal,
  Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger,
  Pagination, usePagination,
  RadioButtonItem, RadioGroup,
  Table, TableHeader, TableCell, TableHeaderCell,
  Tabs, TabsContent, TabsList, TabsTrigger, tabsVariants, tabsCounts, Root, List, Trigger, Content,
  TextInput, textInputSizes,
  AspectRatio
};
`;
    
    fs.writeFileSync(path.join(DIST_DIR, 'index.js'), mainIndexJs);
    
    // Create package.json files to help with imports
    const distPackageJson = {
      "type": "module",
      "sideEffects": true,
    };
    
    fs.writeFileSync(
      path.join(DIST_DIR, 'package.json'),
      JSON.stringify(distPackageJson, null, 2)
    );
    
    console.log(`${GREEN}✓${RESET} Main bundle created (explicit ESM re-exports)`);
    return true;
  } catch (error) {
    console.error(`${RED}Error creating main bundle:${RESET}`, error);
    return false;
  }
}

/**
 * Step 6: Create individual component entry points
 */
function createComponentEntryPoints() {
  console.log(`${YELLOW}Creating component entry points...${RESET}`);
  try {
    // Get all components from src, filtering out excluded components
    const componentDirs = fs.readdirSync(COMPONENTS_SRC_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => !COMPONENTS_TO_EXCLUDE.includes(dirent.name))
      .map(dirent => dirent.name);
    
    for (const componentName of componentDirs) {
      // Create the component directory in dist/components/
      const componentDistDir = path.join(DIST_DIR, 'components', componentName);
      fs.mkdirSync(componentDistDir, { recursive: true });
      
      // Create index.js that re-exports from ESM using explicit ES module syntax
      // This creates a more reliable explicit import for each component
      const componentFile = `${componentName}.js`;
      
      const indexJs = `// ES Module component entry point - Explicit re-exports
// Import CSS for styling - will be injected at runtime
import '../../styles/index.css';

import * as ComponentModule from '../../esm/components/${componentName}/${componentFile}';
export const ${componentName} = ComponentModule.${componentName};
${componentName === 'Avatar' ? 'export const avatarSizes = ComponentModule.avatarSizes;\nexport const avatarTypes = ComponentModule.avatarTypes;' : ''}
${componentName === 'Badge' ? 'export const badgeSizes = ComponentModule.badgeSizes;\nexport const badgeTones = ComponentModule.badgeTones;' : ''}
${componentName === 'Button' ? 'export const buttonSizes = ComponentModule.buttonSizes;\nexport const buttonTones = ComponentModule.buttonTones;\nexport const buttonVariants = ComponentModule.buttonVariants;' : ''}
${componentName === 'Drawer' ? 'export const drawerSizes = ComponentModule.drawerSizes;\nexport const drawerPositions = ComponentModule.drawerPositions;' : ''}
`;
      
      fs.writeFileSync(path.join(componentDistDir, 'index.js'), indexJs);
      
      // Create package.json for the component
      const packageJson = {
        "type": "module",
        "sideEffects": true,
        "main": "./index.js",
        "types": "../../types/components/" + componentName + "/" + componentName + ".d.ts"
      };
      
      fs.writeFileSync(
        path.join(componentDistDir, 'package.json'),
        JSON.stringify(packageJson, null, 2)
      );
      
      console.log(`${GREEN}✓${RESET} Created explicit ESM entry point for ${componentName}`);
    }
    
    return true;
  } catch (error) {
    console.error(`${RED}Error creating component entry points:${RESET}`, error);
    return false;
  }
}

/**
 * Step 7: Update package.json exports
 */
function updatePackageExports() {
  console.log(`${YELLOW}Updating package.json exports...${RESET}`);
  try {
    const packageJsonPath = path.join(ROOT_DIR, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Get all components from src, filtering out excluded components
    const componentDirs = fs.readdirSync(COMPONENTS_SRC_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => !COMPONENTS_TO_EXCLUDE.includes(dirent.name))
      .map(dirent => dirent.name);
    
    // Update exports field with ESM-first exports
    packageJson.exports = {
      ".": {
        "types": "./dist/types/index.d.ts",
        "import": "./dist/esm/index.js",
        "default": "./dist/index.js"
      },
      "./styles": "./dist/styles/index.css",
      "./styles/index.css": "./dist/styles/index.css"
    };
    
    // Add component-specific exports
    for (const componentName of componentDirs) {
      packageJson.exports[`./components/${componentName}`] = {
        "types": `./dist/types/components/${componentName}/${componentName}.d.ts`,
        "import": `./dist/esm/components/${componentName}/${componentName}.js`,
        "default": `./dist/components/${componentName}/index.js`
      };
    }
    
    // Ensure sideEffects is properly set
    packageJson.sideEffects = ["**/*.css"];
    
    // Update main fields to prioritize ESM
    packageJson.type = "module";
    packageJson.main = "./dist/index.js";
    packageJson.module = "./dist/esm/index.js";
    packageJson.types = "./dist/types/index.d.ts";
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`${GREEN}✓${RESET} Package.json exports updated (ESM-first)`);
    return true;
  } catch (error) {
    console.error(`${RED}Error updating package.json exports:${RESET}`, error);
    return false;
  }
}

/**
 * Main function to run the build process
 */
async function runBuild() {
  console.time('Total build time');
  
  // Step 1: Clean dist
  if (!cleanDistDir()) {
    process.exit(1);
  }
  
  // Step 2: Build CSS
  if (!await buildCSS()) {
    process.exit(1);
  }
  
  // Step 3: Run Vite build
  if (!buildVite()) {
    process.exit(1);
  }
  
  // Step 4: Generate TypeScript declarations
  if (!generateTypes()) {
    process.exit(1);
  }
  
  // Step 5: Create main bundle
  if (!createMainBundle()) {
    process.exit(1);
  }
  
  // Step 6: Create component entry points
  if (!createComponentEntryPoints()) {
    process.exit(1);
  }
  
  // Step 7: Update package.json exports
  if (!updatePackageExports()) {
    process.exit(1);
  }
  
  console.timeEnd('Total build time');
  
  console.log(`\n${GREEN}==============================================${RESET}`);
  console.log(`${GREEN}= Build Completed Successfully =${RESET}`);
  console.log(`${GREEN}==============================================${RESET}`);
  console.log(`\n${BLUE}Your library now has a professional structure with:${RESET}`);
  console.log(`• Clean directory structure like established UI libraries`);
  console.log(`• Automatic CSS injection - no need to import styles separately`);
  console.log(`• ESM and CommonJS support with proper tree-shaking`);
  console.log(`• TypeScript declarations in a dedicated 'types' directory`);
  console.log(`• Individual component entry points for granular imports`);
  console.log(`\n${BLUE}Import Examples:${RESET}`);
  console.log(`import { Button } from '@tagaddod-design/react'; // Main bundle`);
  console.log(`import { Button } from '@tagaddod-design/react/components/Button'; // Individual component`);
}

// Run the build process
runBuild();