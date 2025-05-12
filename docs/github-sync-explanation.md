# GitHub Sync and Data Flow Explanation

## Current Data Flow

```
GitHub Repository
    ↓ (Manual Import)
Token Admin (Zustand Store)
    ↓ (Create PR)
GitHub Repository
    ↓ (Merge & Build)
Built Package (@tagaddod/tokens)
    ↓ (Load on Start)
Token Admin Table
```

## Where Table Data Comes From

1. **On App Start**: Loads from the built `@tagaddod/tokens` package
2. **After Import**: Loads from GitHub branch (manual action)
3. **During Editing**: Stored in local state (Zustand store)

## Why No Real-Time Sync

The Token Admin app doesn't have real-time sync because:

1. **Design Decision**: Tokens are meant to be stable, versioned assets
2. **Safety**: Changes should go through review (PR process)
3. **Performance**: Constant polling would be inefficient
4. **Architecture**: The app is designed for manual import/export

## To See GitHub Changes

### Method 1: Import from GitHub
```
1. Edit on GitHub
2. Go to Import tab in Token Admin
3. Enter GitHub credentials
4. Load branches
5. Select your branch
6. Import
```

### Method 2: Full Rebuild
```
1. Edit on GitHub
2. Merge PR
3. Pull changes locally
4. Run: cd packages/tokens && yarn build
5. Restart Token Admin
```

## Adding Real-Time Sync (Optional)

To add real-time sync, you would need:

### 1. GitHub Webhooks
```typescript
// api/webhooks/github.ts
export async function POST(req: Request) {
  const payload = await req.json();
  if (payload.ref === 'refs/heads/main') {
    // Trigger token reload
    notifyTokenUpdate();
  }
}
```

### 2. WebSocket or Server-Sent Events
```typescript
// Add to TokenAdmin.tsx
useEffect(() => {
  const eventSource = new EventSource('/api/token-updates');
  eventSource.onmessage = (event) => {
    if (event.data === 'tokens-updated') {
      // Reload tokens from GitHub
      handleImportFromGitHub();
    }
  };
  return () => eventSource.close();
}, []);
```

### 3. Polling (Simpler Alternative)
```typescript
// Add to TokenAdmin.tsx
useEffect(() => {
  // Poll GitHub every 30 seconds
  const interval = setInterval(() => {
    if (githubClient) {
      checkForUpdates();
    }
  }, 30000);
  
  return () => clearInterval(interval);
}, [githubClient]);
```

## Current Workflow (Recommended)

1. **Edit in Token Admin**: Make changes in the UI
2. **Create PR**: Send changes to GitHub for review
3. **Merge PR**: Approve and merge changes
4. **Import if Needed**: Import from GitHub for immediate updates

## Why This Architecture

The current design promotes:
- **Version Control**: All changes tracked in Git
- **Code Review**: Changes reviewed before merging
- **Stability**: No unexpected token changes
- **Single Source of Truth**: GitHub is the source of truth

The Token Admin is a tool for **editing and reviewing** tokens, not a real-time sync client.
