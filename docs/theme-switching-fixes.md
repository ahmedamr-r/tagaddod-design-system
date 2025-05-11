# Theme Switching Fixes

## Issues Resolved

1. **Theme Variables Not Being Applied**
   - Problem: Brand overrides weren't being loaded because the CSS files weren't imported correctly
   - Fix: Updated imports in `main.css` to point to the correct paths with `.css` extension
   - Updated PostCSS build script to resolve the correct paths

2. **Font Switching for RTL/LTR**
   - Already working correctly in the CSS using `data-locale` attributes
   - Font switches between Outfit (LTR) and Tajawal (RTL) based on locale

3. **Multiple Re-renders**
   - Problem: Preview.tsx had excessive re-renders due to multiple effects and force-refresh logic
   - Fix: Simplified the component to use single effect for setting data attributes

4. **CSS Variables Organization**
   - Base tokens in `:root`
   - Brand overrides in `[data-theme="tagaddod"]` and `[data-theme="greenpan"]`
   - Locale overrides in `[data-locale="en"]` and `[data-locale="ar"]`

## Changes Made

### 1. Fixed CSS Imports in main.css
```css
/* Before */
@import '@tagaddod/tokens/tagaddod';
@import '@tagaddod/tokens/greenpan';

/* After */
@import '@tagaddod/tokens/tagaddod/vars.css';
@import '@tagaddod/tokens/greenpan/vars.css';
```

### 2. Updated PostCSS Build Script
Updated the resolve function to handle both old and new import paths for backward compatibility.

### 3. Simplified Preview.tsx
Removed unnecessary forced updates and multiple effects, keeping just the essential data attribute updates.

### 4. Fixed Package Exports
Updated `tokens/package.json` to export the correct paths with `.css` extensions.

## How It Works Now

1. **Base Tokens**: Loaded from `tokens.css` with default values
2. **Brand Overrides**: Applied via CSS attribute selectors when `data-theme` changes
3. **Locale Overrides**: Applied via CSS attribute selectors when `data-locale` changes
4. **CSS Cascade**: The browser's CSS engine handles all switching automatically

## Testing

1. Switch between Tagaddod (purple) and GreenPan (green) themes
2. Switch between LTR (Outfit font) and RTL (Tajawal font) directions
3. Observe smooth transitions without flicker or delays

## Architecture Benefits

- Pure CSS-based theming (no JavaScript manipulation)
- Leverages CSS cascade and specificity
- Single source of truth for token values
- Easy to add new themes or locales
- Performant theme switching
