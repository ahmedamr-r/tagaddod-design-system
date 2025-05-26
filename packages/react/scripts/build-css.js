#!/usr/bin/env node

/**
 * React Package CSS Build Script
 * 
 * Generates a single consolidated CSS file that includes:
 * - All design tokens from @tagaddod/tokens
 * - Brand overrides (tagaddod, greenpan)
 * - Direction support (ltr, rtl)
 * - Utility classes generated from tokens
 * - Base reset styles
 * 
 * This creates a single styles.css file that consumers can import
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const STYLES_DIR = path.join(DIST_DIR, 'styles');
const TOKENS_PACKAGE_DIR = path.resolve(ROOT_DIR, '../tokens/dist');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`\n${BLUE}=======================================${RESET}`);
console.log(`${BLUE}= Building Consolidated CSS Files =${RESET}`);
console.log(`${BLUE}=======================================${RESET}\n`);

/**
 * Ensure directory exists
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`${GREEN}✓${RESET} Created directory: ${path.relative(ROOT_DIR, dir)}`);
  }
}

/**
 * Read CSS file with error handling
 */
function readCSSFile(filePath, description) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`${YELLOW}⚠️ ${description} not found at ${filePath}${RESET}`);
      return '';
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(`${GREEN}✓${RESET} Read ${description} (${(content.length / 1024).toFixed(1)}KB)`);
    return content;
  } catch (error) {
    console.error(`${RED}Error reading ${description}:${RESET}`, error.message);
    return '';
  }
}

/**
 * Generate utility classes from tokens
 */
function generateUtilityClasses() {
  console.log(`${YELLOW}Generating utility classes...${RESET}`);
  
  const utilitiesCSS = `
/* Typography utilities */
.t-heading-3xl { font: var(--t-typography-heading-3xl); }
.t-heading-2xl { font: var(--t-typography-heading-2xl); }
.t-heading-xl { font: var(--t-typography-heading-xl); }
.t-heading-lg { font: var(--t-typography-heading-lg); }
.t-heading-md { font: var(--t-typography-heading-md); }
.t-heading-sm { font: var(--t-typography-heading-sm); }

.t-body-lg-default { font: var(--t-typography-body-lg-default); }
.t-body-lg-medium { font: var(--t-typography-body-lg-medium); }
.t-body-lg-semibold { font: var(--t-typography-body-lg-semibold); }

.t-body-md-default { font: var(--t-typography-body-md-default); }
.t-body-md-medium { font: var(--t-typography-body-md-medium); }
.t-body-md-semibold { font: var(--t-typography-body-md-semibold); }

.t-body-sm-default { font: var(--t-typography-body-sm-default); }
.t-body-sm-medium { font: var(--t-typography-body-sm-medium); }
.t-body-sm-semibold { font: var(--t-typography-body-sm-semibold); }

.t-caption-lg-default { font: var(--t-typography-caption-lg-default); }
.t-caption-lg-medium { font: var(--t-typography-caption-lg-medium); }
.t-caption-lg-semibold { font: var(--t-typography-caption-lg-semibold); }

.t-caption-sm-default { font: var(--t-typography-caption-sm-default); }
.t-caption-sm-semibold { font: var(--t-typography-caption-sm-semibold); }

/* Text color utilities */
.t-text-primary { color: var(--t-color-text-primary); }
.t-text-secondary { color: var(--t-color-text-secondary); }
.t-text-disabled { color: var(--t-color-text-disabled); }
.t-text-on-fill { color: var(--t-color-text-on-fill); }
.t-text-link { color: var(--t-color-text-link); }
.t-text-success { color: var(--t-color-text-success); }
.t-text-warning { color: var(--t-color-text-warning); }
.t-text-critical { color: var(--t-color-text-critical); }
.t-text-magic { color: var(--t-color-text-magic); }

/* Background utilities */
.t-bg-primary { background-color: var(--t-color-bg-primary); }
.t-bg-light { background-color: var(--t-color-bg-light); }
.t-surface-primary { background-color: var(--t-color-surface-primary); }
.t-surface-secondary { background-color: var(--t-color-surface-secondary); }

/* Spacing utilities - using logical properties for RTL support */
.t-p-0 { padding: var(--t-space-0); }
.t-p-100 { padding: var(--t-space-100); }
.t-p-200 { padding: var(--t-space-200); }
.t-p-300 { padding: var(--t-space-300); }
.t-p-400 { padding: var(--t-space-400); }
.t-p-500 { padding: var(--t-space-500); }
.t-p-600 { padding: var(--t-space-600); }
.t-p-800 { padding: var(--t-space-800); }

.t-px-100 { padding-inline: var(--t-space-100); }
.t-px-200 { padding-inline: var(--t-space-200); }
.t-px-300 { padding-inline: var(--t-space-300); }
.t-px-400 { padding-inline: var(--t-space-400); }
.t-px-500 { padding-inline: var(--t-space-500); }
.t-px-600 { padding-inline: var(--t-space-600); }

.t-py-100 { padding-block: var(--t-space-100); }
.t-py-200 { padding-block: var(--t-space-200); }
.t-py-300 { padding-block: var(--t-space-300); }
.t-py-400 { padding-block: var(--t-space-400); }
.t-py-500 { padding-block: var(--t-space-500); }

.t-m-0 { margin: var(--t-space-0); }
.t-m-100 { margin: var(--t-space-100); }
.t-m-200 { margin: var(--t-space-200); }
.t-m-300 { margin: var(--t-space-300); }
.t-m-400 { margin: var(--t-space-400); }

.t-mx-100 { margin-inline: var(--t-space-100); }
.t-mx-200 { margin-inline: var(--t-space-200); }
.t-mx-300 { margin-inline: var(--t-space-300); }
.t-mx-400 { margin-inline: var(--t-space-400); }

.t-my-100 { margin-block: var(--t-space-100); }
.t-my-200 { margin-block: var(--t-space-200); }
.t-my-300 { margin-block: var(--t-space-300); }

/* Border radius utilities */
.t-rounded-0 { border-radius: var(--t-border-radius-0); }
.t-rounded-50 { border-radius: var(--t-border-radius-50); }
.t-rounded-100 { border-radius: var(--t-border-radius-100); }
.t-rounded-200 { border-radius: var(--t-border-radius-200); }
.t-rounded-300 { border-radius: var(--t-border-radius-300); }
.t-rounded-600 { border-radius: var(--t-border-radius-600); }
.t-rounded-800 { border-radius: var(--t-border-radius-800); }
.t-rounded-full { border-radius: var(--t-border-radius-full); }

/* Shadow utilities */
.t-shadow-1 { box-shadow: var(--t-shadow-1); }
.t-shadow-2 { box-shadow: var(--t-shadow-2); }
.t-shadow-popover { box-shadow: var(--t-shadow-popover); }

/* Transition utilities */
.t-transition-soft { transition: var(--t-transition-soft); }

/* Z-index utilities */
.t-z-base { z-index: var(--t-z-base); }
.t-z-dropdown { z-index: var(--t-z-dropdown); }
.t-z-modal { z-index: var(--t-z-modal); }
.t-z-toast { z-index: var(--t-z-toast); }

/* Accessibility utilities */
.t-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus utilities */
.t-focus-outline:focus-visible {
  outline: 2px solid var(--t-color-border-brand);
  outline-offset: 2px;
}

/* Interactive state utilities */
.t-hover-lift:hover {
  transform: translateY(-1px);
  box-shadow: var(--t-shadow-2);
  transition: var(--t-transition-soft);
}
`;

  return utilitiesCSS;
}

/**
 * Generate base reset styles
 */
function generateBaseStyles() {
  return `
/* Reset and base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: var(--t-font-family-primary);
  font-size: var(--t-font-size-400);
  line-height: var(--t-font-line-height-500);
  color: var(--t-color-text-primary);
  background-color: var(--t-color-bg-primary);
  margin: 0;
  padding: 0;
}
`;
}

/**
 * Generate direction support styles
 */
function generateDirectionStyles() {
  return `
/* LTR/RTL specific styles */
[dir="ltr"] {
  --t-text-align-start: left;
  --t-text-align-end: right;
}

[dir="rtl"] {
  --t-text-align-start: right;
  --t-text-align-end: left;
}
`;
}

/**
 * Build the consolidated CSS file
 */
function buildCSS() {
  console.time('CSS build time');
  
  // Ensure output directory exists
  ensureDir(STYLES_DIR);
  
  // Check if tokens package is built
  if (!fs.existsSync(TOKENS_PACKAGE_DIR)) {
    console.error(`${RED}Error: Tokens package not found at ${TOKENS_PACKAGE_DIR}${RESET}`);
    console.log(`${YELLOW}Please build the tokens package first: yarn workspace @tagaddod/tokens build${RESET}`);
    process.exit(1);
  }
  
  console.log(`${BLUE}Reading CSS files from tokens package...${RESET}`);
  
  // Read all CSS files from tokens package
  const baseTokensCSS = readCSSFile(
    path.join(TOKENS_PACKAGE_DIR, 'tokens.css'),
    'Base tokens CSS'
  );
  
  const tagaddodBrandCSS = readCSSFile(
    path.join(TOKENS_PACKAGE_DIR, 'brands', 'tagaddod.css'),
    'Tagaddod brand CSS'
  );
  
  const greenpanBrandCSS = readCSSFile(
    path.join(TOKENS_PACKAGE_DIR, 'brands', 'greenpan.css'),
    'GreenPan brand CSS'
  );
  
  // Verify we have the essential tokens
  if (!baseTokensCSS) {
    console.error(`${RED}Error: Base tokens CSS is required but not found${RESET}`);
    process.exit(1);
  }
  
  // Build the consolidated CSS file by concatenating all parts
  const consolidatedCSS = `/**
 * Tagaddod Design System - Complete Styles
 * Auto-generated during build - DO NOT EDIT MANUALLY
 * 
 * This is the main entry point for all design system styles.
 * Import this single file to get everything:
 * 
 * import '@tagaddod-design/react/styles'
 * // or
 * import '@tagaddod-design/react/styles.css'
 */

/* ===== DESIGN TOKENS ===== */

/* Base tokens from @tagaddod/tokens */
${baseTokensCSS}

/* ===== BRAND OVERRIDES ===== */

/* Tagaddod brand (default) */
${tagaddodBrandCSS}

/* GreenPan brand override */
${greenpanBrandCSS}

/* ===== DIRECTION SUPPORT ===== */
${generateDirectionStyles()}

/* ===== BASE STYLES ===== */
${generateBaseStyles()}

/* ===== UTILITY CLASSES ===== */
${generateUtilityClasses()}
`;
  
  // Write the final consolidated CSS file
  const finalCSSPath = path.join(STYLES_DIR, 'styles.css');
  fs.writeFileSync(finalCSSPath, consolidatedCSS);
  console.log(`${GREEN}✓${RESET} Generated consolidated styles.css (${(consolidatedCSS.length / 1024).toFixed(1)}KB)`);
  
  // Create backwards compatibility files
  const compatibilityRedirect = `/* Redirects to main styles file for backwards compatibility */
@import './styles.css';
`;
  
  fs.writeFileSync(path.join(STYLES_DIR, 'index.css'), compatibilityRedirect);
  fs.writeFileSync(path.join(STYLES_DIR, 'tokens.css'), compatibilityRedirect);
  fs.writeFileSync(path.join(STYLES_DIR, 'utilities.css'), compatibilityRedirect);
  
  console.log(`${GREEN}✓${RESET} Created compatibility redirect files`);
  
  // Update the source styles for Vite bundling
  const srcStylesDir = path.join(ROOT_DIR, 'src', 'styles');
  ensureDir(srcStylesDir);
  
  // Copy the consolidated CSS to src/styles for Vite to bundle
  const srcIndexCSS = path.join(srcStylesDir, 'index.css');
  fs.copyFileSync(finalCSSPath, srcIndexCSS);
  console.log(`${GREEN}✓${RESET} Updated source styles for Vite bundling`);
  
  console.timeEnd('CSS build time');
  
  // Generate documentation
  generateREADME();
  
  console.log(`\n${GREEN}========================================${RESET}`);
  console.log(`${GREEN}= ✅ CSS BUILD SUCCESSFUL =${RESET}`);
  console.log(`${GREEN}= 📁 Single consolidated CSS file =${RESET}`);
  console.log(`${GREEN}= 🎨 Includes all tokens & themes =${RESET}`);
  console.log(`${GREEN}= 🔄 Automatic brand switching =${RESET}`);
  console.log(`${GREEN}========================================${RESET}`);
  
  console.log(`\n${BLUE}✨ Generated files:${RESET}`);
  console.log(`   • styles/styles.css - Complete design system CSS`);
  console.log(`   • styles/index.css - Compatibility redirect`);
  console.log(`   • src/styles/index.css - Source for Vite bundling`);
  
  console.log(`\n${BLUE}Usage in your app:${RESET}`);
  console.log(`   import '@tagaddod-design/react/styles'`);
  console.log(`   // or`);
  console.log(`   import '@tagaddod-design/react/styles.css'`);
  
  console.log(`\n${BLUE}Theme switching:${RESET}`);
  console.log(`   <div data-theme="tagaddod">Default theme</div>`);
  console.log(`   <div data-theme="greenpan">GreenPan theme</div>`);
}

/**
 * Generate documentation
 */
function generateREADME() {
  console.log(`${YELLOW}Generating CSS usage documentation...${RESET}`);
  
  const readmeContent = `# CSS Usage Guide

This package provides a single CSS file that includes everything you need:
- All design tokens
- Brand theme overrides (Tagaddod and GreenPan)
- Direction support (LTR/RTL)
- Utility classes
- Base reset styles

## Installation & Usage

### 1. Install the package
\`\`\`bash
npm install @tagaddod-design/react
\`\`\`

### 2. Import the styles in your app
\`\`\`javascript
// In your app's entry point (e.g., App.js or index.js)
import '@tagaddod-design/react/styles';
// or
import '@tagaddod-design/react/styles.css';
\`\`\`

### 3. Import and use components
\`\`\`javascript
import { Button, TextInput } from '@tagaddod-design/react';

function App() {
  return (
    <Button variant="primary">Click me</Button>
  );
}
\`\`\`

## Theme Switching

### Using data-theme attribute
\`\`\`html
<!-- Default Tagaddod theme -->
<div data-theme="tagaddod">
  <Button>Tagaddod themed button</Button>
</div>

<!-- GreenPan theme -->
<div data-theme="greenpan">
  <Button>GreenPan themed button</Button>
</div>
\`\`\`

### Using ThemeProvider (React)
\`\`\`javascript
import { ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider theme="greenpan">
      <Button>Themed button</Button>
    </ThemeProvider>
  );
}
\`\`\`

## Direction Support (RTL/LTR)

\`\`\`html
<!-- Left-to-right (default) -->
<html dir="ltr">
  <body>
    <Button>LTR Button</Button>
  </body>
</html>

<!-- Right-to-left (Arabic) -->
<html dir="rtl">
  <body>
    <Button>RTL Button</Button>
  </body>
</html>
\`\`\`

## Available Utility Classes

### Typography
- \`.t-heading-3xl\`, \`.t-heading-2xl\`, \`.t-heading-xl\`, etc.
- \`.t-body-lg-default\`, \`.t-body-md-medium\`, etc.
- \`.t-caption-lg-default\`, \`.t-caption-sm-semibold\`, etc.

### Colors
- \`.t-text-primary\`, \`.t-text-secondary\`, \`.t-text-disabled\`
- \`.t-bg-primary\`, \`.t-bg-light\`
- \`.t-surface-primary\`, \`.t-surface-secondary\`

### Spacing
- \`.t-p-400\`, \`.t-px-200\`, \`.t-py-300\` (padding)
- \`.t-m-400\`, \`.t-mx-200\`, \`.t-my-300\` (margin)

### Other
- \`.t-rounded-200\`, \`.t-rounded-full\` (border radius)
- \`.t-shadow-1\`, \`.t-shadow-popover\` (shadows)
- \`.t-z-dropdown\`, \`.t-z-modal\` (z-index)

## CSS Variables

All design tokens are available as CSS variables with the \`--t-\` prefix:

\`\`\`css
.my-custom-component {
  background-color: var(--t-color-surface-primary);
  padding: var(--t-space-400);
  border-radius: var(--t-border-radius-200);
  font: var(--t-typography-body-md-default);
}
\`\`\`

## File Structure

- \`styles.css\` - The main CSS file with everything
- \`index.css\` - Alias for styles.css (backwards compatibility)
- \`tokens.css\` - Alias for styles.css (backwards compatibility)
- \`utilities.css\` - Alias for styles.css (backwards compatibility)
`;

  const readmeFile = path.join(STYLES_DIR, 'README.md');
  fs.writeFileSync(readmeFile, readmeContent);
  console.log(`${GREEN}✓${RESET} Generated README.md`);
}

// Run the build
try {
  buildCSS();
} catch (error) {
  console.error(`${RED}❌ CSS build failed:${RESET}`, error);
  process.exit(1);
}
