# Issue: Tokens Not Loading in Token Table

## Problem
The token table appears empty even though the tokens package has been built and contains token files.

## Root Cause
The Token Admin app doesn't automatically load existing tokens when it starts. The store is initialized with empty token sets and no mechanism to load the tokens from the monorepo packages.

## Solution
Add token loading on component mount to load tokens from the built token packages in the monorepo.

### Implementation Steps

1. Create a new utility to load tokens from the packages
2. Modify the TokenAdmin component to load tokens on mount
3. Update the store to properly handle initial token loading

### Code Changes

First, create a token loader utility:

```typescript
// apps/token-admin/src/lib/tokenLoader.ts
import primitivesJson from '@tagaddod/tokens/src/primitives.json';
import semanticsJson from '@tagaddod/tokens/src/semantics.json';
import tagaddodTheme from '@tagaddod/themes/src/tagaddod.json';
import greenpanTheme from '@tagaddod/themes/src/greenpan.json';

export function loadTokensFromPackages() {
  return {
    primitives: primitivesJson,
    semantics: semanticsJson,
    themes: {
      tagaddod: tagaddodTheme,
      greenpan: greenpanTheme
    }
  };
}
```

Then, update the TokenAdmin component to load tokens on mount:

```typescript
// In TokenAdmin.tsx, add this useEffect:
useEffect(() => {
  // Load tokens from packages on mount
  const tokens = loadTokensFromPackages();
  store.loadTokens(tokens);
}, []); // Empty dependency array to run once on mount
```

### Alternative: Load from built files
If importing from src doesn't work, load from the built files:

```typescript
// Load from built files instead
import tokens from '@tagaddod/tokens';
```

## Prevention
1. Add a loading state to show when tokens are being loaded
2. Consider adding a refresh button to reload tokens
3. Add error handling for when token loading fails
