# Storybook Deployment & LLM Documentation Setup Guide

This guide outlines how the `llms.txt` file is integrated into the Storybook build and made available at `https://tagaddod-design-system.vercel.app/llms.txt` for AI agents.

## 🤖 LLM Integration Overview

The design system includes comprehensive AI agent documentation via the `llms.txt` file that's automatically made available through multiple channels:

### Access Points
- **Live URL**: `https://tagaddod-design-system.vercel.app/llms.txt`
- **NPM Package**: `@tagaddod/react/llms.txt`
- **Local Development**: Available at `http://localhost:6006/llms.txt` when running Storybook

## 📁 File Structure

```
tagaddod-design-system/
├── packages/
│   ├── react/
│   │   ├── llms.txt                    # Source file (manually maintained)
│   │   ├── package.json                # Exports llms.txt
│   │   └── README.md                   # Updated with LLM integration info
│   └── storybook/
│       ├── public/
│       │   └── llms.txt                # Copied for static serving
│       ├── .storybook/
│       │   └── main.js                 # Configured with staticDirs
│       └── package.json                # Build scripts copy llms.txt
```

## ⚙️ Configuration Details

### 1. React Package Configuration

**`packages/react/package.json`**:
```json
{
  "files": [
    "dist",
    "README.md", 
    "CHANGELOG.md",
    "llms.txt"                          // ✅ Included in npm package
  ],
  "exports": {
    "./llms.txt": "./llms.txt"          // ✅ Exported for direct import
  }
}
```

### 2. Storybook Configuration

**`packages/storybook/.storybook/main.js`**:
```javascript
module.exports = {
  staticDirs: ['../public'],             // ✅ Serves public directory
  // ... other config
};
```

**`packages/storybook/package.json`**:
```json
{
  "scripts": {
    "prestorybook": "cp ../react/llms.txt public/llms.txt",         // ✅ Dev server
    "prewatch": "cp ../react/llms.txt public/llms.txt",            // ✅ Watch mode
    "prebuild-storybook": "cd ../tokens && yarn build && cd ../react && yarn build && cp llms.txt ../storybook/public/llms.txt"  // ✅ Production build
  }
}
```

## 🚀 Deployment Setup

### Step 1: GitHub Repository Setup

1. **Push the entire monorepo to GitHub**:
   ```bash
   git add .
   git commit -m "feat: Add LLM documentation and Storybook integration"
   git push origin main
   ```

2. **Repository structure should include**:
   ```
   tagaddod-design-system/           # Root repository
   ├── packages/                     # All packages
   ├── .github/workflows/            # CI/CD workflows (if any)
   ├── package.json                  # Root package.json with workspaces
   ├── turbo.json                    # Turborepo configuration
   └── README.md                     # Main documentation
   ```

### Step 2: Vercel Deployment

1. **Connect Repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `your-username/tagaddod-design-system`

2. **Configure Build Settings**:
   ```
   Framework Preset: Other
   Root Directory: packages/storybook
   Build Command: yarn build-storybook
   Output Directory: storybook-static
   Install Command: yarn install
   ```

3. **Environment Variables** (if needed):
   ```
   NODE_VERSION=18
   YARN_VERSION=1.22.22
   ```

### Step 3: Vercel Configuration File

Create `packages/storybook/vercel.json`:
```json
{
  "buildCommand": "yarn build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "yarn install",
  "rewrites": [
    {
      "source": "/llms.txt",
      "destination": "/llms.txt"
    }
  ],
  "headers": [
    {
      "source": "/llms.txt",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/plain; charset=utf-8"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

## 🔄 Automated Workflow

### Development Workflow
1. **Update `llms.txt`** in `packages/react/llms.txt`
2. **Run Storybook**: `yarn workspace @tagaddod-design/storybook storybook`
3. **File automatically available** at `http://localhost:6006/llms.txt`

### Production Workflow
1. **Commit changes** to `packages/react/llms.txt`
2. **Push to GitHub**: Vercel automatically detects changes
3. **Build process**:
   - Runs `prebuild-storybook` script
   - Copies `llms.txt` to `public/` directory
   - Builds Storybook with static assets
   - Deploys to Vercel
4. **File available** at `https://tagaddod-design-system.vercel.app/llms.txt`

## 🧪 Testing the Setup

### Local Testing
```bash
# Start Storybook
yarn workspace @tagaddod-design/storybook storybook

# Verify file is accessible
curl http://localhost:6006/llms.txt
```

### Production Testing
```bash
# After deployment
curl https://tagaddod-design-system.vercel.app/llms.txt

# Should return the LLM documentation content
```

## 📝 Updating LLM Documentation

To update the AI agent documentation:

1. **Edit the source file**: `packages/react/llms.txt`
2. **Update component information**: Add new components, update props, examples
3. **Commit and push**: Changes automatically deploy to Vercel
4. **Verify**: Check `https://tagaddod-design-system.vercel.app/llms.txt`

## 🔧 Troubleshooting

### File Not Found (404)
- **Check**: Verify `staticDirs: ['../public']` in Storybook config
- **Check**: Ensure `llms.txt` exists in `packages/storybook/public/`
- **Fix**: Run `yarn workspace @tagaddod-design/storybook prebuild-storybook`

### File Not Updated
- **Check**: Verify pre-build scripts are running
- **Fix**: Clear Vercel cache and redeploy

### Local Development Issues
```bash
# Manually copy file if needed
cp packages/react/llms.txt packages/storybook/public/llms.txt

# Restart Storybook
yarn workspace @tagaddod-design/storybook storybook
```

## 🎯 Benefits for AI Agents

With this setup, AI coding agents can:

1. **Access documentation directly**: `https://tagaddod-design-system.vercel.app/llms.txt`
2. **Get component usage patterns**: Proper props, examples, accessibility info
3. **Understand theming**: Multi-brand support, RTL/LTR handling
4. **Follow best practices**: TypeScript usage, performance optimization
5. **Stay updated**: Documentation automatically syncs with code changes

## 🔐 Security Considerations

- **Public access**: The `llms.txt` file is intentionally public for AI agent access
- **No sensitive data**: Ensure no API keys, tokens, or private information
- **Rate limiting**: Vercel automatically handles reasonable traffic loads
- **Content review**: Review changes before deployment

## 🚀 Next Steps

1. **Deploy to Vercel** following the steps above
2. **Test the URL**: Verify `https://tagaddod-design-system.vercel.app/llms.txt` works
3. **Share with AI agents**: Use the URL in AI coding sessions
4. **Maintain documentation**: Keep `llms.txt` updated as components evolve
5. **Monitor usage**: Check Vercel analytics for access patterns

The setup is now complete and ready for AI-assisted development! 🤖✨