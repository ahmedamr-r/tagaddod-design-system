import fs from 'fs';
import path from 'path';
import deepmerge from 'deepmerge';

// For now, we'll mock the tokens import since the tokens package might not be built yet
// In production, this would import from '@tagaddod/tokens'
let tokens: any;
try {
  tokens = require('@tagaddod/tokens/dist');
} catch (e) {
  console.warn('Warning: @tagaddod/tokens not found, using mock data for build');
  tokens = {
    tokens: {
      color: {
        blue: { 500: { $value: '#0066ff' } },
        green: { 500: { $value: '#25b24b' } },
        neutral: { 50: { $value: '#f7f8fa' }, 900: { $value: '#1c1d22' } }
      },
      button: {
        primary: {
          background: { $value: '{color.green.500}' },
          text: { $value: '{color.neutral.50}' }
        }
      }
    }
  };
}

// Read theme files
const tagaddodRaw = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/tagaddod.json'), 'utf-8'));
const greenpanRaw = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/greenpan.json'), 'utf-8'));

// Merge themes with base tokens
const tagaddodTheme = deepmerge(tokens.tokens || tokens, tagaddodRaw);
const greenpanTheme = deepmerge(tokens.tokens || tokens, greenpanRaw);

// Ensure dist directory exists
fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });

// Write compiled themes
fs.writeFileSync(
  path.join(__dirname, '../dist/tagaddod.json'),
  JSON.stringify(tagaddodTheme, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, '../dist/greenpan.json'),
  JSON.stringify(greenpanTheme, null, 2)
);

// Create index file that exports both themes
const indexContent = `
export const tagaddodTheme = ${JSON.stringify(tagaddodTheme, null, 2)};
export const greenpanTheme = ${JSON.stringify(greenpanTheme, null, 2)};

export default {
  tagaddod: tagaddodTheme,
  greenpan: greenpanTheme
};
`;

fs.writeFileSync(
  path.join(__dirname, '../dist/index.js'),
  indexContent
);

console.log('✔ Themes built successfully');
console.log('  - dist/tagaddod.json');
console.log('  - dist/greenpan.json');
console.log('  - dist/index.js');
