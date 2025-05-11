# Simple Token Workflow

## The 5-Step Process

### 1️⃣ Design in Figma
```
Figma + Tokens Studio Plugin
├── Create colors, spacing, typography
├── Name them (e.g., color.green.500)
└── Save in plugin
```

### 2️⃣ Export to GitHub
```
Tokens Studio → GitHub
├── Click "Sync to GitHub"
├── Enter your token (ghp_xxx...)
└── Push changes
```

### 3️⃣ Edit in Token Admin
```
Token Admin App
├── Import from GitHub
├── Edit values in table
└── Save changes
```

### 4️⃣ Create Pull Request
```
Token Admin → GitHub PR
├── Click "Create Pull Request"
├── Review changes on GitHub
└── Merge PR
```

### 5️⃣ Use in Code
```
Your React Components
├── Tokens become CSS variables
├── Use: var(--t-color-green-500)
└── Automatic updates!
```

## First-Time Setup

### 1. Get GitHub Token
1. Go to github.com/settings/tokens
2. Generate new token
3. Select "repo" scope
4. Copy token (ghp_xxxx...)

### 2. Configure Token Admin
1. Open Token Admin
2. Go to Import tab
3. Enter:
   - GitHub Token
   - Your username
   - Repository name

### 3. You're Ready!

## Quick Fix: PR Button Error

Getting an error when clicking "Create Pull Request"?

**Solution**: Go to Import tab first and enter:
- GitHub Token
- Repository Owner (your username)
- Repository Name

Then try creating the PR again!

## Common Issues

### ❌ "Please configure GitHub credentials"
✅ **Fix**: Enter GitHub details in Import tab

### ❌ "Repository not found"
✅ **Fix**: Check username and repo name spelling

### ❌ "Authentication failed"
✅ **Fix**: Generate a new GitHub token

## Remember

- **Tokens** = Design values (colors, spacing)
- **PR** = Pull Request (asking to add changes)
- **--t-** = Token prefix in CSS variables

## Need Help?

1. Check GitHub credentials in Import tab
2. Make sure you have a valid token
3. Verify repository exists
4. Try refreshing the page

The workflow is: **Design → Export → Edit → PR → Use in Code**
