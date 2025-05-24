#!/usr/bin/env node

/**
 * Standalone CSS build script
 * 
 * This script extracts the CSS building functionality from the main build.cjs
 * to provide backward compatibility for Storybook and other tools that expect
 * a separate build:css command.
 */

import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

/**
 * Build CSS with PostCSS
 * This function is extracted from the build.cjs script
 */
async function buildCSS() {
  console.log(`${YELLOW}Building CSS...${RESET}`);
  try {
    // Create dist/styles directory if it doesn't exist
    fs.mkdirSync(path.join(DIST_DIR, 'styles'), { recursive: true });
    
    const mainCssPath = path.join(SRC_DIR, 'styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf-8');

    const result = await postcss([
      postcssImport({
        resolve: (id) => {
          if (id.includes('@tagaddod-design/tokens')) {
            const tokensDir = path.resolve(ROOT_DIR, '../tokens/dist');
            
            // Handle different import patterns based on package.json exports
            if (id === '@tagaddod-design/tokens/tokens.css') {
              return path.join(tokensDir, 'tokens.css');
            }
            
            if (id.startsWith('@tagaddod-design/tokens/brands/')) {
              const brand = id.split('/').pop().replace('.css', '');
              return path.join(tokensDir, 'brands', `${brand}.css`);
            }
            
            if (id.startsWith('@tagaddod-design/tokens/locales/')) {
              const locale = id.split('/').pop().replace('.css', '');
              return path.join(tokensDir, 'locales', `${locale}.css`);
            }
            
            if (id.startsWith('@tagaddod-design/tokens/directions/')) {
              const direction = id.split('/').pop().replace('.css', '');
              return path.join(tokensDir, 'directions', `${direction}.css`);
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

// Run the CSS build
buildCSS().then((success) => {
  if (!success) {
    process.exit(1);
  }
}); 