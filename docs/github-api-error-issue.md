# Issue: GitHub API Error When Loading Branches

## Problem
Error loading GitHub branches with message: "Error: GitHub API error:"

## Root Cause
The GitHub client is not properly configured with authentication credentials. The app is trying to use `process.env.NEXT_PUBLIC_GITHUB_TOKEN` which is likely not set.

## Solutions

### Option 1: Using Personal Access Token (Recommended for Development)

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer Settings → Personal Access Tokens
   - Generate new token (classic) with `repo` scope
   - Copy the token

2. Add to environment variables:
   ```bash
   # Create .env.local file in apps/token-admin/
   NEXT_PUBLIC_GITHUB_TOKEN=your_personal_access_token_here
   ```

3. Update the GitHub client configuration:
   ```typescript
   // In TokenAdmin.tsx
   const githubClient = new GitHubClient({
     owner: 'your-github-username', // Replace with actual GitHub username
     repo: 'tagaddod-design-system', // Your repository name
     token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
   });
   ```

### Option 2: Add Token Input Field (More Secure)

1. Add a token input field in the UI:
   ```typescript
   // Add state for token
   const [githubToken, setGithubToken] = useState('');
   
   // Update the GitHub client to use the input token
   const githubClient = useMemo(() => {
     return new GitHubClient({
       owner: 'tagaddod',
       repo: 'tagaddod-design-system',
       token: githubToken,
     });
   }, [githubToken]);
   
   // Add input field in the import tab
   <input
     type="password"
     placeholder="GitHub Personal Access Token"
     value={githubToken}
     onChange={(e) => setGithubToken(e.target.value)}
     className="w-full px-3 py-2 border rounded mb-4"
   />
   ```

### Option 3: Using GitHub App (Production)

For production, create a GitHub App:
1. Create a GitHub App in your organization
2. Install it on the repository
3. Use the app's credentials for authentication

## Implementation

Let's implement Option 2 (token input field) for better security:

```typescript
// Updated TokenAdmin.tsx with token input
const [githubToken, setGithubToken] = useState('');

const githubClient = useMemo(() => {
  if (!githubToken) return null;
  
  return new GitHubClient({
    owner: 'tagaddod', // Update with actual owner
    repo: 'tagaddod-design-system',
    token: githubToken,
  });
}, [githubToken]);

// Update the GitHub operations to check for client
const handleLoadGitHubBranches = async () => {
  if (!githubClient) {
    setError('Please enter a GitHub token first');
    return;
  }
  
  try {
    setLoading(true);
    setError(null);
    const tokenSync = new TokenSync(githubClient);
    const branches = await tokenSync.listTokenBranches();
    setGithubBranches(branches);
  } catch (err) {
    setError(`Error loading GitHub branches: ${err}`);
  } finally {
    setLoading(false);
  }
};
```

## Best Practices

1. Never commit tokens to the repository
2. Use environment variables for tokens in development
3. In production, use GitHub Apps or secure token management
4. Add the `.env.local` file to `.gitignore`

## Additional Security Considerations

1. Validate token permissions before use
2. Add rate limiting for GitHub API calls
3. Show clear error messages when authentication fails
4. Consider adding a "Test Connection" button to verify the token works
