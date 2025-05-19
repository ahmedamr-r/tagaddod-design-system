/**
 * Unified Style Dictionary Configuration
 * Handles both default tokens and brand-locale specific tokens
 */
const { w3c } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

/**
 * Build the default tokens with --t- prefix
 */
function buildDefaultTokens() {
  return StyleDictionary.extend({
    source: ['src/**/*.json'],
    platforms: {
      css: {
        transforms: [...w3c.transformGroupCss, 'name/cti/kebab'],
        buildPath: 'dist/css/',
        files: [{
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: ':root', prefix: 't' }
        }]
      },
      scss: {
        transforms: [...w3c.transformGroupScss, 'name/cti/kebab'],
        buildPath: 'dist/scss/',
        files: [{
          destination: '_tokens.scss',
          format: 'scss/variables',
          options: { outputReferences: true, prefix: 't' }
        }]
      },
      js: {
        transforms: [...w3c.transformGroupJs, 'name/cti/camel'],
        buildPath: 'dist/',
        files: [{
          destination: 'index.js',
          format: 'javascript/es6'
        }]
      }
    }
  }).buildAllPlatforms();
}

/**
 * Build brand and locale specific tokens
 */
function buildBrandLocaleTokens() {
  const brands = ['tagaddod', 'greenpan'];
  const locales = ['en', 'ar'];

  brands.forEach(brand => {
    locales.forEach(locale => {
      StyleDictionary.extend({
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
            prefix: `${brand}-${locale}`,
            buildPath: `dist/${brand}/${locale}/`,
            files: [{
              destination: 'vars.css',
              format: 'css/variables'
            }]
          }
        }
      }).buildAllPlatforms();
    });
  });
}

// Build all token variations
buildDefaultTokens();
buildBrandLocaleTokens();

// For usage with require/import
module.exports = {
  buildDefaultTokens,
  buildBrandLocaleTokens
};
