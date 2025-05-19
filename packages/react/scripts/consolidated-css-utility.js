#!/usr/bin/env node
/**
 * Consolidated CSS Utility
 * Handles building and watching CSS for the Tagaddod Design System React components
 * Integrates with design tokens for theming support
 */
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const { execSync, spawn } = require('child_process');

// Base paths
const projectRoot = path.resolve(__dirname, '../../..');
const reactRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(reactRoot, 'dist');
const stylesDir = path.resolve(distDir, 'styles');
const tokensRoot = path.resolve(projectRoot, 'packages/tokens');
const tokensDistPath = path.resolve(tokensRoot, 'dist');

/**
 * Ensures the dist directory exists
 */
function ensureDistDir() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }
  
  console.log('✅ Ensured dist directories exist');
}

/**
 * Build CSS using PostCSS with token integration
 */
async function buildCSS() {
  try {
    console.log('🚀 Building CSS with token integration...');
    
    // Ensure directories exist
    ensureDistDir();
    
    // Read the main CSS file that imports everything
    const mainCssPath = path.resolve(reactRoot, 'src/styles/main.css');
    if (!fs.existsSync(mainCssPath)) {
      throw new Error(`Main CSS file not found at ${mainCssPath}`);
    }
    
    const mainCss = fs.readFileSync(mainCssPath, 'utf-8');
    
    // Process CSS with PostCSS
    const result = await postcss([
      postcssImport({
        // Resolve token imports with updated package names
        resolve: (id, basedir) => {
          // Handle different possible import paths for tokens
          if (id.includes('@tagaddod-design/tokens/css') || 
              id.includes('@tagaddod/tokens/css')) {
            return path.resolve(tokensDistPath, 'css/tokens.css');
          }
          
          // Handle brand imports
          if (id.includes('/tagaddod/')) {
            if (id.includes('/en/')) {
              return path.resolve(tokensDistPath, 'tagaddod/en/vars.css');
            }
            if (id.includes('/ar/')) {
              return path.resolve(tokensDistPath, 'tagaddod/ar/vars.css');
            }
            return path.resolve(tokensDistPath, 'tagaddod/vars.css');
          }
          
          if (id.includes('/greenpan/')) {
            if (id.includes('/en/')) {
              return path.resolve(tokensDistPath, 'greenpan/en/vars.css');
            }
            if (id.includes('/ar/')) {
              return path.resolve(tokensDistPath, 'greenpan/ar/vars.css');
            }
            return path.resolve(tokensDistPath, 'greenpan/vars.css');
          }
          
          // Handle locale-specific imports
          if (id.includes('/locales/en/')) {
            return path.resolve(tokensDistPath, 'locales/en/vars.css');
          }
          if (id.includes('/locales/ar/')) {
            return path.resolve(tokensDistPath, 'locales/ar/vars.css');
          }
          
          return id;
        }
      }),
      postcssNested()
    ])
    .process(mainCss, { 
      from: mainCssPath,
      to: path.join(stylesDir, 'index.css'),
      map: { inline: false, annotation: true }
    });
    
    // Write the processed CSS to dist/styles directory
    const cssContent = result.css.replace(/\/\*# sourceMappingURL=.*\*\//, '/*# sourceMappingURL=index.css.map */');
    fs.writeFileSync(path.join(stylesDir, 'index.css'), cssContent);
    
    // Create a copy at the root level
    fs.writeFileSync(path.join(distDir, 'styles.css'), cssContent);
    
    // Write source map if generated
    if (result.map) {
      fs.writeFileSync(path.join(stylesDir, 'index.css.map'), result.map.toString());
    }
    
    // Now create consolidated CSS
    console.log('Creating consolidated CSS file...');
    
    const reactCssPath = path.resolve(distDir, 'react.css');
    let reactCss = '';
    
    if (fs.existsSync(reactCssPath)) {
      reactCss = fs.readFileSync(reactCssPath, 'utf-8');
    } else {
      console.log('⚠️ Warning: react.css not found. Continuing without component styles.');
    }
    
    const tokenCss = cssContent;
    
    const consolidatedCss = `/* Tagaddod Design System - Consolidated CSS */

/* ========================================
   DESIGN TOKENS AND BASE STYLES
   ======================================== */
${tokenCss}

/* ========================================
   COMPONENT STYLES
   ======================================== */
${reactCss}
`;
    
    fs.writeFileSync(path.join(stylesDir, 'consolidated.css'), consolidatedCss);
    fs.writeFileSync(path.join(distDir, 'tagaddod-design-system.css'), consolidatedCss);
    
    console.log('✨ Successfully built CSS files:');
    console.log('- dist/styles/index.css (tokens and base styles)');
    console.log('- dist/styles.css (tokens and base styles - root level)');
    console.log('- dist/react.css (component styles)');
    console.log('- dist/styles/consolidated.css (combined styles)');
    console.log('- dist/tagaddod-design-system.css (combined styles)');
    
    return true;
  } catch (error) {
    console.error('❌ Error building CSS:', error);
    return false;
  }
}

/**
 * Watch for changes in token files and rebuild CSS
 */
function watchCSS() {
  console.log('👀 Watching for token changes...');
  
  // Watch the tokens dist directory
  fs.watch(tokensDistPath, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.css')) {
      console.log(`🔄 Token file changed: ${filename}`);
      console.log('🏗️ Rebuilding React CSS...');
      
      buildCSS()
        .then(success => {
          if (success) {
            console.log('✅ CSS rebuild complete');
          } else {
            console.error('❌ CSS rebuild failed');
          }
        })
        .catch(error => {
          console.error('💥 Error during CSS rebuild:', error);
        });
    }
  });
  
  // Watch for changes in React styles
  const stylesDir = path.resolve(reactRoot, 'src/styles');
  if (fs.existsSync(stylesDir)) {
    fs.watch(stylesDir, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.css')) {
        console.log(`🔄 Style file changed: ${filename}`);
        console.log('🏗️ Rebuilding React CSS...');
        
        buildCSS()
          .then(success => {
            if (success) {
              console.log('✅ CSS rebuild complete');
            } else {
              console.error('❌ CSS rebuild failed');
            }
          })
          .catch(error => {
            console.error('💥 Error during CSS rebuild:', error);
          });
      }
    });
  }
  
  // Keep the process running
  console.log('👀 Watching for changes... (Press Ctrl+C to stop)');
  process.stdin.resume(); // Keep the process alive
  
  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down CSS watcher...');
    process.exit(0);
  });
}

/**
 * Main function
 */
async function main() {
  // Parse arguments
  const args = process.argv.slice(2);
  const command = args[0] || 'build';
  
  if (command === 'build') {
    // Build CSS
    const success = await buildCSS();
    if (!success) {
      process.exit(1);
    }
  } else if (command === 'watch') {
    // Build first, then watch
    const success = await buildCSS();
    if (success) {
      watchCSS();
    } else {
      process.exit(1);
    }
  } else {
    console.error(`❌ Unknown command: ${command}`);
    console.log('📋 Available commands: build, watch');
    process.exit(1);
  }
}

// Run the main function
main();
