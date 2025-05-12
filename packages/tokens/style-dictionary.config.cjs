const { w3c } = require('@tokens-studio/sd-transforms');

// Basic configuration for default build
module.exports = {
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
};
