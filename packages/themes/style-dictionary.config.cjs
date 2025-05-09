const {w3c} = require('@tokens-studio/sd-transforms');
const fs = require('fs');
const path = require('path');

// Load base tokens
const baseTokens = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/dist/tokens.json'), 'utf-8'));

module.exports = {
  platforms: {
    cssTagaddod: {
      transforms: [...w3c.transformGroupCss, 'name/cti/kebab'],
      buildPath: 'dist/css/',
      files: [{
        destination: 'theme-tagaddod.css',
        format: 'css/variables',
        options: { 
          outputReferences: true, 
          selector: '.Polaris-Theme--Tagaddod',
          prefix: 't'
        }
      }],
      source: ['../tokens/src/**/*.json'] // Use base tokens for default theme
    },
    cssGreenpan: {
      transforms: [...w3c.transformGroupCss, 'name/cti/kebab'],
      buildPath: 'dist/css/',
      files: [{
        destination: 'theme-greenpan.css',
        format: 'css/variables',
        options: { 
          outputReferences: true, 
          selector: '.Polaris-Theme--Greenpan',
          prefix: 't'
        }
      }],
      source: ['../tokens/src/**/*.json', 'src/greenpan.json'] // Base + overrides
    }
  }
};
