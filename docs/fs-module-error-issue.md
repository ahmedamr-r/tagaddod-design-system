# Issue: Module Not Found - Can't Resolve 'fs'

## Problem
Error when importing Node.js modules (`fs` and `path`) in client-side code:
```
Module not found: Can't resolve 'fs'
```

## Root Cause
The Token Admin component is marked with `'use client'`, which means it runs in the browser. Node.js modules like `fs` (file system) and `path` are not available in the browser environment.

## Solution
Removed the `loadTokensFromFileSystem()` function and the fs/path imports from the tokenLoader. The updated file now only includes browser-compatible code:

1. `loadTokensFromPackages()` - Attempts to import JSON files using dynamic imports
2. `loadTokensFromDist()` - Loads from built/compiled JavaScript files

Both functions work in the browser environment.

## Code Changes

Removed:
```typescript
import fs from 'fs';
import path from 'path';

// Removed the loadTokensFromFileSystem function
```

The tokenLoader now only contains browser-compatible functions that use dynamic imports.

## Best Practices

1. **Client Components**: Code marked with `'use client'` runs in the browser and cannot use Node.js modules
2. **Server Components**: Only server components (without `'use client'`) can use Node.js modules
3. **Dynamic Imports**: Use dynamic imports for conditional loading in client-side code

## Alternative Approaches

If file system access is needed:
1. Create an API route in Next.js that reads files server-side
2. Use server components for file operations
3. Preload data during build time using Next.js data fetching methods

The current solution works entirely in the browser by loading pre-built JavaScript modules.
