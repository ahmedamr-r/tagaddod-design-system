# Issue: Module Not Found - Package Export Error

## Problem
Error when trying to import token JSON files directly from packages: 
```
Module not found: Package path ./src/primitives.json is not exported from package @tagaddod/tokens
```

## Root Cause
The package.json of @tagaddod/tokens doesn't include exports for the source JSON files. By default, packages only export what's explicitly listed in the `exports` field.

## Solutions Implemented

### 1. Updated package.json exports (Attempted)
Added exports for source files in both `@tagaddod/tokens` and `@tagaddod/themes` packages:
```json
"exports": {
  "./src/primitives.json": "./src/primitives.json",
  "./src/semantics.json": "./src/semantics.json"
}
```

**Note**: This requires rebuilding the packages for the changes to take effect in node_modules.

### 2. Alternative: Load from Built Files (Implemented)
Created a function `loadTokensFromDist()` that reconstructs the token structure from the flattened build output:

```typescript
// Maps flattened tokens back to structured format
export async function loadTokensFromDist(): Promise<TokenSet> {
  const tokens = await import('@tagaddod/tokens');
  // Reconstructs primitives and semantics from flattened structure
  // ... implementation details
}
```

### 3. File System Loader (Alternative)
For server-side loading, created a file system loader that reads directly from the filesystem:

```typescript
export async function loadTokensFromFileSystem(): Promise<TokenSet> {
  // Reads files using fs.promises
  // Only works server-side
}
```

## Current Solution
The Token Admin app now uses `loadTokensFromDist()` which:
1. Imports the built tokens from `@tagaddod/tokens`
2. Reconstructs the hierarchical structure from the flattened tokens
3. Maps semantic tokens back to their references

## To Fix Permanently

1. Run monorepo build to update packages:
   ```bash
   yarn build
   ```

2. Or manually rebuild tokens:
   ```bash
   cd packages/tokens && yarn build
   cd ../themes && yarn build
   ```

3. If the exports approach is preferred, ensure packages are rebuilt after package.json changes.

## Trade-offs

- **Loading from source files**: Cleaner structure, but requires export configuration
- **Loading from built files**: Works with current setup, but requires reconstruction logic
- **File system loading**: Direct access, but only works server-side

The current implementation uses the built files approach as it works immediately without requiring package rebuilds.
