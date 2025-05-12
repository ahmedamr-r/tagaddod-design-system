#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

async function buildCSS() {
  try {
    // Read the main CSS file that imports everything
    const mainCssPath = path.resolve(__dirname, '../src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf-8');
    
    // Process CSS with PostCSS
    const result = await postcss([
      postcssImport({
        // Resolve @tagaddod/tokens imports
        resolve: (id, basedir) => {
          // Handle the base token import
          if (id === '@tagaddod/tokens/css' || id === '@tagaddod/tokens/css/tokens.css') {
            return path.resolve(__dirname, '../../tokens/dist/css/tokens.css');
          }
          
          // Handle brand imports with the correct paths
          if (id === '@tagaddod/tokens/tagaddod' || id === '@tagaddod/tokens/tagaddod/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/tagaddod/vars.css');
          }
          if (id === '@tagaddod/tokens/greenpan' || id === '@tagaddod/tokens/greenpan/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/greenpan/vars.css');
          }
          
          // Handle locale-specific imports
          if (id === '@tagaddod/tokens/locales/en/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/locales/en/vars.css');
          }
          if (id === '@tagaddod/tokens/locales/ar/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/locales/ar/vars.css');
          }
          
          // Handle brand + locale imports
          if (id === '@tagaddod/tokens/tagaddod/en/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/tagaddod/en/vars.css');
          }
          if (id === '@tagaddod/tokens/tagaddod/ar/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/tagaddod/ar/vars.css');
          }
          if (id === '@tagaddod/tokens/greenpan/en/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/greenpan/en/vars.css');
          }
          if (id === '@tagaddod/tokens/greenpan/ar/vars.css') {
            return path.resolve(__dirname, '../../tokens/dist/greenpan/ar/vars.css');
          }
          
          return id;
        }
      }),
      postcssNested()
    ])
      .process(mainCss, { 
        from: mainCssPath,
        to: path.join(path.resolve(__dirname, '../dist/styles'), 'index.css'),
        map: { inline: false, annotation: true }
      });
    
    // Create dist directory if it doesn't exist
    const distDir = path.resolve(__dirname, '../dist/styles');
    fs.mkdirSync(distDir, { recursive: true });
    
    // Write the processed CSS to dist
    const cssContent = result.css.replace(/\/\*# sourceMappingURL=.*\*\//, '/*# sourceMappingURL=index.css.map */');
    fs.writeFileSync(path.join(distDir, 'index.css'), cssContent);
    
    // Write source map if generated
    if (result.map) {
      fs.writeFileSync(path.join(distDir, 'index.css.map'), result.map.toString());
    }
    
    console.log('Successfully built CSS to dist/styles/index.css');
    console.log('- Integrated design tokens');
    console.log('- Added multi-brand theme support');
    console.log('- Prepared RTL support');
  } catch (error) {
    console.error('Error building CSS:', error);
    process.exit(1);
  }
}

buildCSS();
