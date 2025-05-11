# Fix for "require is not defined" Error

## Problem
The error occurred because the browser was trying to execute CommonJS code (`require`) which it doesn't understand. The preview.js and register.js files were using `module.exports = require(...)`.

## Solution Applied

### 1. Removed CommonJS Proxy Files
- Deleted preview.js and register.js that were using CommonJS syntax
- Updated package.json to directly export the built files

### 2. Updated Imports to Use Built Files
- Changed imports to use the dist folder directly
- Updated main.ts to import from '../token-editor/dist/register.js'

### 3. Inlined Preview Logic
- Added the token preview functionality directly into Storybook's preview.ts
- This avoids any module resolution issues

### 4. Ensured ES Module Output
- TypeScript config already outputs ES modules
- Built files use proper import/export syntax

## Changes Made

1. **package.json exports**:
   ```json
   "exports": {
     ".": "./dist/index.js",
     "./register": "./dist/register.js",
     "./preview": "./dist/preview.js"
   }
   ```

2. **Storybook main.ts**:
   ```ts
   addons: [
     '@storybook/addon-essentials',
     '../token-editor/dist/register.js'
   ]
   ```

3. **Preview.ts**:
   - Inlined token preview logic
   - Removed problematic import

## Next Steps

1. Restart Storybook
2. The error should now be resolved
3. Test the Token Editor panel functionality

## Troubleshooting

If you still see issues:
1. Clear node_modules/.cache
2. Rebuild the token-editor package
3. Check browser console for any new errors
