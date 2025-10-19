# Verdaccio Local Registry Testing Setup

**Complete Guide for Testing Tagaddod Design System with Local NPM Registry**

## 📦 What Has Been Set Up

A complete local testing infrastructure that allows you to:
- Test packages as external users would consume them
- Maintain full monorepo context for AI agents (Claude Code)
- Iterate quickly: edit → build → publish → test
- Validate actual npm distribution before publishing to npmjs.com

## 🏗️ Architecture Overview

```
tagaddod-design-system/
├── verdaccio-config.yaml          # Verdaccio configuration
├── scripts/
│   ├── publish-to-verdaccio.js    # Automated publishing script
│   └── watch-docs.js              # Real-time documentation sync
├── packages/
│   ├── tokens/                     # Design tokens
│   └── react/                      # React components
│       └── scripts/
│           └── copy-docs.js       # Multi-target documentation sync
├── apps/
│   └── template-test/             # 🆕 Isolated testing package
│       ├── .npmrc                 # Forces Verdaccio registry
│       ├── package.json           # Consumes from registry
│       ├── CLAUDE.md              # AI agent instructions
│       └── .component-documentation/  # Auto-synced docs
└── .gitignore                     # Excludes test package & Verdaccio storage
```

## 🚀 Quick Start Guide

### Step 1: Install Verdaccio (One-Time Setup)

```bash
npm install -g verdaccio
```

### Step 2: Start Verdaccio

In **Terminal 1** (keep this running):

```bash
cd /path/to/tagaddod-design-system
yarn registry:start
```

✅ Verdaccio will start at `http://localhost:4873`
✅ Visit http://localhost:4873 in your browser to see the web UI

### Step 3: Build and Publish Packages

In **Terminal 2**:

```bash
# Build all packages
yarn build

# Publish to local Verdaccio
yarn registry:publish
```

### Step 4: Install and Run Template Test

```bash
# Install dependencies from Verdaccio
cd apps/template-test
npm install

# Start development server
npm run dev
```

✅ App opens at http://localhost:3000

## 📋 Daily Workflow

### Scenario: Testing Component Changes

```bash
# Terminal 1: Verdaccio (keep running)
yarn registry:start

# Terminal 2: Make changes and test
# 1. Edit Button component in packages/react/src/components/Button/
# 2. Build React package
yarn build:react

# 3. Publish to local registry
yarn registry:publish

# 4. Update template-test package
yarn registry:update-test

# 5. Test in browser
cd apps/template-test && npm run dev

# 6. Claude Code can now see your changes in both packages!
```

### Automated Workflow

Use the one-command workflow:

```bash
yarn registry:test-workflow
```

This automatically runs: `build → publish → update template-test`

## 🔧 Available Scripts

### Root Package Scripts

| Script | Description |
|--------|-------------|
| `yarn registry:start` | Start Verdaccio local registry |
| `yarn registry:publish` | Build and publish packages to Verdaccio |
| `yarn registry:update-test` | Update template-test with latest packages |
| `yarn registry:test-workflow` | Complete workflow (build → publish → update) |
| `yarn watch:docs` | Watch and auto-sync documentation changes |

### Template Test Package Scripts

```bash
cd apps/template-test

npm run dev                     # Start development server
npm run build                   # Build for production
npm run update:design-system    # Update design system packages
```

## 🤖 Claude Code Integration

The `apps/template-test/` package is **fully visible to Claude Code**, providing:

1. **Complete Context**: Claude sees both core packages and consumer code
2. **Documentation Access**: `.component-documentation/` folder with all component guides
3. **AI Instructions**: `CLAUDE.md` with comprehensive component discovery rules
4. **Real-world Testing**: Test exactly how external users consume packages

### Example Claude Code Workflow

```
You: "I made changes to the Button component. Can you help me test them in the template-test package?"

Claude Code:
1. Sees your Button changes in packages/react/
2. Understands you need to publish to Verdaccio
3. Guides you through: build → publish → update → test
4. Can verify the changes work correctly in apps/template-test/
```

## 📚 Documentation Sync

### Automatic Sync

Documentation is automatically copied to `apps/template-test/.component-documentation/` when you:
- Build the React package: `yarn build:react`
- Run the copy script: `cd packages/react && npm run copy-docs`

### Real-Time Sync

Watch for documentation changes and sync automatically:

```bash
yarn watch:docs
```

This monitors `packages/react/src/components/**/*.mdx` and syncs changes to both:
- External template: `/path/to/tagaddod-startert-template-main/`
- Internal test package: `apps/template-test/`

## 🐛 Troubleshooting

### Problem: "Cannot find module @tagaddod-design/react"

**Cause**: Packages not published to Verdaccio yet

**Solution**:
```bash
yarn registry:publish
cd apps/template-test
npm install
```

### Problem: "Connection refused to localhost:4873"

**Cause**: Verdaccio not running

**Solution**:
```bash
yarn registry:start
```

### Problem: Changes not reflected in template-test

**Cause**: Package needs to be updated

**Solution**:
```bash
# Rebuild and republish
yarn build:react
yarn registry:publish

# Update template-test
yarn registry:update-test
```

### Problem: Documentation out of sync

**Cause**: Documentation not copied after changes

**Solution**:
```bash
cd packages/react
npm run copy-docs
```

### Problem: Can't install dependencies in template-test

**Cause**: Wrong registry configuration

**Solution**:
```bash
cd apps/template-test

# Verify .npmrc exists and points to Verdaccio
cat .npmrc

# Should show:
# registry=http://localhost:4873/
# @tagaddod-design:registry=http://localhost:4873/
```

## 🔍 Verifying the Setup

### 1. Check Verdaccio is Running

```bash
curl http://localhost:4873
```

Should return Verdaccio web page HTML

### 2. Check Published Packages

Visit http://localhost:4873 in browser and verify:
- `@tagaddod-design/tokens`
- `@tagaddod-design/react`

### 3. Check Package Versions

```bash
npm view @tagaddod-design/react versions --registry http://localhost:4873
```

### 4. Verify Template Test Setup

```bash
cd apps/template-test

# Check .npmrc
cat .npmrc

# Check package.json
cat package.json | grep @tagaddod-design

# Check documentation exists
ls -la .component-documentation/
```

## 📖 File Changes Summary

### New Files Created

1. ✅ `verdaccio-config.yaml` - Verdaccio configuration
2. ✅ `scripts/publish-to-verdaccio.js` - Automated publishing
3. ✅ `scripts/watch-docs.js` - Documentation watching
4. ✅ `apps/template-test/` - Complete test package (copied from template)
5. ✅ `apps/template-test/.npmrc` - Registry configuration
6. ✅ `apps/template-test/README.md` - Testing workflow documentation

### Modified Files

1. ✅ `package.json` - Added registry scripts
2. ✅ `packages/react/scripts/copy-docs.js` - Multi-target support
3. ✅ `.gitignore` - Excluded Verdaccio storage and template-test

## ⚠️ Important Notes

### Git and Version Control

- **`apps/template-test/` is excluded from git** (except README.md)
- **Verdaccio storage is excluded from git**
- This is intentional - the test package is for local development only

### Registry Configuration

The test package uses `.npmrc` to force Verdaccio:
- **NOT workspace protocol** (`workspace:*`)
- **Uses actual npm registry** (local Verdaccio)
- Simulates real-world package consumption

### When to Use This Setup

✅ **Use when:**
- Testing package distribution before publishing
- Validating component changes in real consumer context
- Working with Claude Code on template integration
- Debugging package.json exports and module resolution

❌ **Don't use when:**
- Developing components (use Storybook instead)
- Running unit tests (use Jest)
- Quick iteration (use workspace links)

## 🔄 Typical Development Cycle

### 1. Component Development
```bash
# Develop in packages/react with Storybook
yarn dev:storybook
```

### 2. Local Testing
```bash
# Test distribution with Verdaccio
yarn registry:test-workflow
cd apps/template-test && npm run dev
```

### 3. Production Release
```bash
# Publish to npmjs.com
yarn changeset
yarn release
```

## 🎯 Next Steps

Now that everything is set up, you can:

1. **Start Verdaccio**: `yarn registry:start`
2. **Publish packages**: `yarn registry:publish`
3. **Test in template-test**: `cd apps/template-test && npm install && npm run dev`
4. **Work with Claude Code**: AI can see both core packages and consumer code!

## 📚 Additional Resources

- [Verdaccio Documentation](https://verdaccio.org/docs/what-is-verdaccio)
- [Template Test README](apps/template-test/README.md) - Detailed testing workflows
- [Verdaccio Config Reference](https://verdaccio.org/docs/configuration)

## 🆘 Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Read `apps/template-test/README.md` for detailed workflows
3. Verify Verdaccio is running: `curl http://localhost:4873`
4. Check package versions in registry web UI: http://localhost:4873

---

**Setup Complete! 🎉**

You now have a professional-grade local testing environment for the Tagaddod Design System.
