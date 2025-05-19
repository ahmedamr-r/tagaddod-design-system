# React Component Library Build System

## Overview

This document explains the consolidated build system for the `@tagaddod-design/react` component library. The main goal was to create a single, reliable build process that:

1. Creates a proper folder structure in the dist directory
2. Automatically injects CSS with components (no manual CSS imports needed)
3. Supports ESM and CommonJS formats
4. Generates TypeScript declarations
5. Simplifies the build scripts into a single process

## How It Works

The new build system is contained in a single script (`scripts/build.js`) that orchestrates the entire process:

### 1. Processing CSS

CSS is processed with PostCSS, handling:
- Importing design tokens from the tokens package
- Nested CSS syntax
- Theme switching for the Tagaddod/GreenPan brands
- RTL support for Arabic

### 2. Component Bundling

Vite with the `vite-plugin-lib-inject-css` plugin handles the component bundling:
- CSS is automatically injected into the JS files
- Preserves the module structure from `src`
- Generates both ESM and CommonJS formats

### 3. TypeScript Declarations

TypeScript declarations are generated for all components, ensuring full type safety for library consumers.

### 4. Component Directory Structure

The build script creates a proper directory structure:
- Each component gets its own folder
- Individual package.json files for direct imports
- All necessary exports (ESM, CJS, types)

### 5. Package Exports

The main package.json is updated with proper exports to support:
- Main import: `import { Button } from '@tagaddod-design/react'`
- Direct component imports: `import { Button } from '@tagaddod-design/react/components/Button'`
- Style imports (if needed): `import '@tagaddod-design/react/styles'`

## Using the Library

With the new build system, using the components is much simpler:

```jsx
// No need to import styles separately!
import { Button } from '@tagaddod-design/react';

function App() {
  return (
    <Button variant="primary">Click Me</Button>
  );
}
```

## Development Workflow

### Building the Library

```bash
# Full build
yarn build

# Watch mode (development)
yarn watch
```

### Key Improvements

1. **No Empty Folders**: Components are now properly built with their styles
2. **Automatic CSS Injection**: No need to import styles separately
3. **Better Structure**: Proper module structure for tree-shaking
4. **Single Build Script**: One consolidated script instead of many
5. **Better Documentation**: Clean console output with build progress

## Technical Details

### CSS Processing

CSS modules are processed and then injected directly into the JavaScript using `vite-plugin-lib-inject-css`. This means:

1. Styles are automatically applied when a component is imported
2. No separate CSS imports needed
3. The CSS is scoped per component (no style leakage)

### Directory Structure

The resulting build produces this structure:

```
dist/
├── components/         # Individual component folders
│   ├── Button/
│   │   ├── index.js    # CommonJS entry
│   │   ├── index.mjs   # ESM entry
│   │   ├── index.d.ts  # TypeScript declarations
│   │   └── package.json # For direct imports
│   └── ...other components
├── index.js            # Main CommonJS entry
├── index.mjs           # Main ESM entry
├── index.d.ts          # Main TypeScript declarations
├── styles/
│   └── index.css       # Complete CSS bundle (optional)
└── package.json        # For proper module resolution
```

## Best Practices

1. **Keep CSS Module Names Consistent**: Name CSS modules as `ComponentName.module.css`
2. **Export All Components**: Make sure all components are exported from `src/components/index.ts`
3. **Declare Side Effects**: CSS files are marked as side effects in package.json
4. **Use Proper Exports**: The build system sets up all necessary exports in package.json
