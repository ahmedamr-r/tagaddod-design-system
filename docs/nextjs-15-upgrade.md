# Next.js 15 Upgrade Guide

## Overview
Upgraded the Token Admin app from Next.js 14.2.28 to Next.js 15.0.3.

## Changes Made

### 1. Updated Dependencies
```json
// package.json
"next": "15.0.3",          // was "14.2.28"
"eslint-config-next": "15.0.3",  // was "14.2.28"
```

### 2. Breaking Changes Addressed
The main breaking changes in Next.js 15 that would affect this app are:

1. **Async Request APIs**: APIs like `cookies()`, `headers()`, `params`, and `searchParams` are now asynchronous
2. **React 19 Support**: Next.js 15 supports React 19 (RC) while maintaining backward compatibility with React 18
3. **Speed Insights Changes**: Auto instrumentation for Speed Insights was removed

### 3. No Code Changes Required
Since the Token Admin app:
- Doesn't use server actions
- Doesn't access cookies, headers, or params
- Is a client-side app with `'use client'` components
- Doesn't use Speed Insights

No code changes were required beyond updating the dependencies.

## How to Complete the Upgrade

1. **Install the new dependencies**:
   ```bash
   cd apps/token-admin
   yarn install
   ```

2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   ```

3. **Rebuild the app**:
   ```bash
   yarn build
   ```

4. **Run the development server**:
   ```bash
   yarn dev
   ```

## Using the Next.js Codemod (Optional)

Next.js 15 provides an enhanced codemod CLI that can help with upgrades:

```bash
npx @next/codemod@latest upgrade
```

This tool will:
- Update dependencies
- Show available codemods
- Apply necessary transformations

For this project, no codemods were needed since we don't use the affected APIs.

## Key New Features in Next.js 15

1. **Stable React Compiler Support**: Better performance with React 19
2. **Enhanced CLI and Codemods**: Easier upgrades
3. **Improved Error Messages**: Better developer experience
4. **Partial Pre-rendering (PPR)**: Better performance for dynamic routes
5. **Server Actions Improvements**: Better error handling and validation

## Potential Issues and Solutions

### Issue: Module Resolution Errors
If you encounter module resolution errors after upgrading:
1. Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
2. Clear Next.js cache: `rm -rf .next`
3. Restart the development server

### Issue: Type Errors
If TypeScript shows new errors:
1. Update @types/react and @types/react-dom if needed
2. The project currently has `ignoreBuildErrors: true` in next.config.mjs

## Verification Steps

1. Start the development server
2. Navigate to the Token Admin app
3. Verify that:
   - Tokens load correctly
   - Table displays properly
   - Add/Edit/Delete operations work
   - GitHub integration functions correctly

## Future Considerations

1. **React 19**: When React 19 becomes stable, consider upgrading to take full advantage of Next.js 15 features
2. **Type Safety**: Consider removing `ignoreBuildErrors: true` and fixing any TypeScript issues
3. **ESLint**: Consider removing `ignoreDuringBuilds: true` and fixing any ESLint issues

## References

- [Next.js 15 Release Blog](https://nextjs.org/blog/next-15)
- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-15)
- [Breaking Changes in Next.js 15](https://github.com/vercel/next.js/issues/70899)
