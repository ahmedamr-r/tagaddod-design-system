# Complete Token Workflow Guide

This guide explains how to work with design tokens from start to finish.

## Overview

The workflow consists of 5 main steps:
1. Create tokens in Figma
2. Export to GitHub
3. Import and edit in Token Admin
4. Create Pull Request
5. Use tokens in code

## Step 1: Create Tokens in Figma

### Install Tokens Studio
1. Open Figma
2. Go to Plugins → Browse all plugins
3. Search for "Tokens Studio for Figma"
4. Click Install

### Create Token Structure
```
Design Tokens/
├── Primitives/
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Radius
└── Semantics/
    ├── Button
    ├── Input
    └── Card
```

### Example Tokens
```json
// Primitives - Base values
{
  "color": {
    "green": {
      "500": {
        "value": "#25b24b",
        "type": "color"
      }
    }
  }
}

// Semantics - Meaningful aliases
{
  "button": {
    "primary": {
      "background": {
        "value": "{color.green.500}",
        "type": "color"
      }
    }
  }
}
```

## Step 2: Export to GitHub

### Set Up GitHub Sync in Tokens Studio

1. Click the **Settings** icon in Tokens Studio
2. Choose **Sync** → **Add new** → **GitHub**
3. Configure:
   - **Repository**: `your-username/tagaddod-design-system`
   - **Branch**: `main` (or create a new branch)
   - **File Path**: `packages/tokens/src/`
   - **Personal Access Token**: (see below)

### Create GitHub Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name: "Tokens Studio Sync"
4. Select scopes:
   - ✅ repo (Full control of private repositories)
5. Click "Generate token"
6. Copy the token (starts with `ghp_`)
7. Paste in Tokens Studio

### Push Tokens

1. In Tokens Studio, click **Push to GitHub**
2. Add commit message: "Update design tokens"
3. Click **Push**

## Step 3: Import and Edit in Token Admin

### Start Token Admin
```bash
cd apps/token-admin
yarn dev
```
Open http://localhost:3000

### Import from GitHub

1. Go to **Import** tab
2. Select **GitHub Branch**
3. Enter credentials:
   - **Personal Access Token**: Same token from Step 2
   - **Repository Owner**: Your GitHub username
   - **Repository Name**: `tagaddod-design-system`
4. Click **Load GitHub Branches**
5. Select your branch
6. Click **Import from Selected Branch**

### Edit Tokens

1. Go to **Edit Tokens** tab
2. Click **Edit** on any token
3. Modify values
4. Click **Save**

## Step 4: Create Pull Request

### Configure GitHub (First Time Only)

⚠️ **Important**: You must configure GitHub credentials before creating a PR

1. Go to **Import** tab
2. Enter:
   - Personal Access Token
   - Repository Owner
   - Repository Name

### Create the PR

1. Go to **Export** tab
2. Click **Create Pull Request**
3. The app will:
   - Create a new branch
   - Commit your changes
   - Open a PR on GitHub
4. You'll get a success message with the PR link

### Common Errors and Solutions

#### "Please configure GitHub credentials first"
- Go to Import tab
- Enter your GitHub token, owner, and repo
- Try again

#### "GitHub authentication failed"
- Check your Personal Access Token
- Make sure it has 'repo' scope
- Token might be expired - create a new one

#### "Repository not found"
- Verify repository owner (your GitHub username)
- Check repository name spelling
- Ensure repository exists and you have access

## Step 5: Use Tokens in Code

After the PR is merged, tokens are available as CSS variables:

```css
/* In your CSS */
.button {
  background: var(--t-button-primary-background);
  color: var(--t-button-primary-text);
  padding: var(--t-space-400);
  border-radius: var(--t-radius-100);
}
```

```tsx
// In React components
import styles from './Button.module.css';

export function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}
```

## Complete Example Workflow

1. **Designer in Figma**:
   - Creates new brand color: `purple.500 = #7C3AED`
   - Updates button semantic: `button.secondary.background = {color.purple.500}`
   - Pushes to GitHub via Tokens Studio

2. **In Token Admin**:
   - Imports from GitHub branch
   - Reviews changes
   - Adjusts purple shade to `#8B5CF6`
   - Creates PR

3. **On GitHub**:
   - Team reviews PR
   - PR gets merged
   - CI builds new token files

4. **In Code**:
   - Developer pulls latest
   - Uses `var(--t-button-secondary-background)`
   - New purple color is live!

## Quick Reference

### File Locations
- Figma tokens: Stored in Tokens Studio plugin
- Source files: `packages/tokens/src/`
- Built CSS: `packages/tokens/dist/css/tokens.css`
- React components: `packages/react/src/components/`

### Token Naming Convention
- Primitives: `color.blue.500`, `space.400`
- Semantics: `button.primary.background`, `input.border.color`
- CSS Variables: `--t-color-blue-500`, `--t-button-primary-background`

### Common Commands
```bash
# Start Token Admin
cd apps/token-admin && yarn dev

# Build tokens
cd packages/tokens && yarn build

# Start Storybook
cd packages/storybook && yarn dev
```

## Troubleshooting

### Tokens Not Showing in Table
- Check console for errors
- Ensure tokens package is built
- Try refreshing the page

### GitHub Sync Not Working
- Verify Personal Access Token
- Check repository permissions
- Ensure correct branch name

### PR Creation Fails
- Must configure GitHub first
- Check internet connection
- Verify token has 'repo' scope

## Next Steps

1. Create your first token set in Figma
2. Set up GitHub sync
3. Import and edit in Token Admin
4. Create your first PR
5. Use tokens in a component

Remember: Always test token changes in Storybook before merging!
