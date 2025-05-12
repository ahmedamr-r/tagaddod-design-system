import StyleDictionary from 'style-dictionary';

const brands = ['tagaddod', 'greenpan'];
const directions = ['ltr', 'rtl'];
const locales = ['en', 'ar'];

// Build brand + direction specific files (existing)
brands.forEach(brand => {
  directions.forEach(direction => {
    const sd = new StyleDictionary({
      source: [
        'src/core/**/*.json',
        'src/semantic/**/*.json',
        'src/extras/**/*.json',
        `src/brands/${brand}/overrides/**/*.json`,
        `src/locales/${direction}/**/*.json`
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          prefix: 't',
          buildPath: `dist/${brand}/${direction}/`,
          files: [{
            destination: 'vars.css',
            format: 'css/variables',
            options: {
              selector: `[data-theme="${brand}"][dir="${direction}"]`
            }
          }]
        }
      }
    });
    
    sd.buildAllPlatforms();
  });
});

// NEW: Build brand + locale specific files
brands.forEach(brand => {
  locales.forEach(locale => {
    const sd = new StyleDictionary({
      source: [
        'src/core/**/*.json',
        'src/semantic/**/*.json',
        'src/extras/**/*.json',
        `src/brands/${brand}/overrides/**/*.json`,
        `src/locales/${locale}/**/*.json`
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          prefix: 't',
          buildPath: `dist/${brand}/${locale}/`,
          files: [{
            destination: 'vars.css',
            format: 'css/variables',
            options: {
              selector: `[data-theme="${brand}"][data-locale="${locale}"]`
            }
          }]
        }
      }
    });
    
    sd.buildAllPlatforms();
  });
});

// NEW: Build locale-only files (theme-agnostic)
locales.forEach(locale => {
  const sd = new StyleDictionary({
    source: [
      'src/core/**/*.json',
      'src/semantic/**/*.json',
      'src/extras/**/*.json',
      `src/locales/${locale}/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 't',
        buildPath: `dist/locales/${locale}/`,
        files: [{
          destination: 'vars.css',
          format: 'css/variables',
          options: {
            selector: `[data-locale="${locale}"]`
          }
        }]
      }
    }
  });
  
  sd.buildAllPlatforms();
});

// Also build brand-only files for backward compatibility (existing)
brands.forEach(brand => {
  const sd = new StyleDictionary({
    source: [
      'src/core/**/*.json',
      'src/semantic/**/*.json',
      'src/extras/**/*.json',
      `src/brands/${brand}/overrides/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 't',
        buildPath: `dist/${brand}/`,
        files: [{
          destination: 'vars.css',
          format: 'css/variables',
          options: {
            selector: `[data-theme="${brand}"]`
          }
        }]
      }
    }
  });
  
  sd.buildAllPlatforms();
});
