import StyleDictionary from 'style-dictionary';

// Register a custom format that properly handles prefixes
StyleDictionary.registerFormat({
  name: 'css/variables-with-prefix',
  format: function({dictionary, options}) {
    const prefix = options.prefix || '';
    const selector = options.selector || ':root';
    
    return `/**
 * Do not edit directly, this file was auto-generated.
 */

${selector} {
${dictionary.allTokens.map(token => {
  // Handle token value correctly - could be token.value or token.$value
  const value = token.value || token.$value || token.original.$value;
  return `  --${prefix}-${token.name}: ${value};`;
}).join('\n')}
}`;
  }
});

// Configuration for brands and locales
const brands = ['tagaddod', 'greenpan'];
const locales = ['en', 'ar'];
const directions = ['ltr', 'rtl'];

// Create a unified configuration
const config = {
  source: ['src/**/*.json'],
  platforms: {
    // Main CSS file with all base tokens
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables-with-prefix',
        options: {
          outputReferences: true,
          selector: ':root',
          prefix: 't'
        }
      }]
    },
    
    // SCSS variables
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: [{
        destination: '_tokens.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true,
          prefix: '$t-'
        }
      }]
    },
    
    // JavaScript/ES6 module
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [{
        destination: 'index.js',
        format: 'javascript/es6'
      }, {
        destination: 'tokens.js',
        format: 'javascript/module'
      }]
    }
  }
};

// Initialize and build the main tokens
const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();

console.log('✅ Built main token files');

// Build brand-specific overrides
for (const brand of brands) {
  const brandConfig = {
    source: [
      'src/core/**/*.json',
      'src/semantic/**/*.json',
      'src/extras/**/*.json',
      `src/brands/${brand}/overrides/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `dist/brands/`,
        files: [{
          destination: `${brand}.css`,
          format: 'css/variables-with-prefix',
          filter: (token) => {
            // Only include tokens that are specific to this brand
            return token.filePath.includes(`brands/${brand}`) || 
                   token.attributes?.category === 'brand';
          },
          options: {
            selector: `[data-theme="${brand}"]`,
            outputReferences: true,
            prefix: 't'
          }
        }]
      }
    }
  };
  
  const brandSd = new StyleDictionary(brandConfig);
  await brandSd.buildAllPlatforms();
  console.log(`✅ Built ${brand} brand tokens`);
}


// Build locale-specific tokens (for RTL/LTR support)
for (const locale of locales) {
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const localeConfig = {
    source: [
      'src/core/**/*.json',
      'src/semantic/**/*.json',
      `src/locales/${locale}/**/*.json`,
      `src/locales/${direction}/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `dist/locales/`,
        files: [{
          destination: `${locale}.css`,
          format: 'css/variables-with-prefix',
          filter: (token) => {
            // Only include tokens that are specific to this locale/direction
            return token.filePath.includes(`locales/${locale}`) || 
                   token.filePath.includes(`locales/${direction}`);
          },
          options: {
            selector: `html[lang="${locale}"]`,
            outputReferences: true,
            prefix: 't'
          }
        }]
      }
    }
  };
  
  const localeSd = new StyleDictionary(localeConfig);
  await localeSd.buildAllPlatforms();
  console.log(`✅ Built ${locale} locale tokens`);
}

// Build direction-specific tokens
for (const direction of directions) {
  const directionConfig = {
    source: [
      'src/core/**/*.json',
      'src/semantic/**/*.json',
      `src/locales/${direction}/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `dist/directions/`,
        files: [{
          destination: `${direction}.css`,
          format: 'css/variables-with-prefix',
          filter: (token) => {
            // Only include tokens that are specific to this direction
            return token.filePath.includes(`locales/${direction}`);
          },
          options: {
            selector: `[dir="${direction}"]`,
            outputReferences: true,
            prefix: 't'
          }
        }]
      }
    }
  };
  
  const directionSd = new StyleDictionary(directionConfig);
  await directionSd.buildAllPlatforms();
  console.log(`✅ Built ${direction} direction tokens`);
}

console.log('✨ All tokens built successfully!');
