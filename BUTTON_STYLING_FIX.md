# Button Styling Fix Documentation

## Issue Identified
The Button component was using standard Tailwind utility classes (like `bg-purple-1200`) that weren't being generated during the build process. This resulted in buttons appearing unstyled in Storybook.

## Root Cause
1. The Tailwind configuration maps token values to color names correctly
2. But the build process isn't generating the actual Tailwind utilities for these mapped colors
3. The current build only generates a subset of utility classes and CSS variables

## Solution Implemented
Instead of trying to generate all Tailwind utilities, the Button component now uses Tailwind's arbitrary value feature to directly reference CSS variables:

```tsx
// Instead of:
'bg-purple-1200 text-white'

// Now using:
'bg-[var(--t-color-action-primary-bg)] text-[var(--t-color-text-on-brand)]'
```

This approach:
- Directly uses the CSS variables exported from the tokens package
- Works with the existing build process
- Ensures the component styles are always in sync with the design tokens
- Doesn't require generating thousands of Tailwind utility classes

## Benefits
1. Smaller CSS bundle size
2. Direct connection to design tokens
3. Works with existing build process
4. Maintains design system consistency

## Future Improvements
1. Consider implementing a PostCSS plugin to automatically map token-based utilities
2. Or fully configure Tailwind to generate all utility classes from tokens
3. Create a helper function to simplify token variable references

## How to Test
1. Build the React package: `yarn build`
2. Copy CSS to Storybook: `cp packages/react/dist/styles/index.css packages/storybook/src/styles/globals.css`
3. Start Storybook: `cd packages/storybook && yarn storybook`
4. The Button component should now be properly styled with the design tokens
