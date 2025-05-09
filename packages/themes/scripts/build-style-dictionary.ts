import StyleDictionary from 'style-dictionary';
import { w3c } from '@tokens-studio/sd-transforms';
import fs from 'fs';
import path from 'path';

// Load base tokens
const baseTokensPath = path.join(__dirname, '../../tokens/src');

// Configure Style Dictionary for each theme
const sdConfigs = {
  tagaddod: {
    source: [path.join(baseTokensPath, '**/*.json')],
    platforms: {
      css: {
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
        }]
      }
    }
  },
  greenpan: {
    source: [
      path.join(baseTokensPath, '**/*.json'),
      path.join(__dirname, '../src/greenpan.json')
    ],
    platforms: {
      css: {
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
        }]
      }
    }
  }
};

// Build each theme
Object.entries(sdConfigs).forEach(([themeName, config]) => {
  const sd = new StyleDictionary(config);
  sd.buildAllPlatforms();
  console.log(`✔ Built ${themeName} theme CSS`);
});
