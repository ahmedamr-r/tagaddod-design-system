# Testing Workflow - Simple Guide

## 🎯 What Problem Does This Solve?

**Before:** Every time you make changes to components, you have to:
1. Publish to **real npm** (npmjs.com) → version 0.1.30
2. Test in your template
3. Find a bug? Publish again → version 0.1.31
4. Another bug? Publish again → version 0.1.32
5. **Result:** Many test versions published publicly

**After (With This Setup):**
1. Make changes to components
2. Test locally in `apps/template-test` (using Verdaccio)
3. Fix all bugs locally
4. **Only when perfect:** Publish ONE clean version to real npm

---

## 📦 Two Registries Explained

### 1. **Verdaccio** (Local Test Registry)
- URL: `http://localhost:4873`
- Purpose: **Testing only**
- Location: On your computer
- Packages: Test versions that nobody else can see

### 2. **npmjs.com** (Real Registry)
- URL: `https://registry.npmjs.org`
- Purpose: **Production**
- Location: Public internet
- Packages: Real versions that everyone can install

---

## 🚀 Complete Workflow

### Step 1: Start Local Registry (Once per session)

```bash
# In Terminal 1 - Keep this running
yarn registry:start
```

✅ You'll see: `http address - http://localhost:4873/`

Visit http://localhost:4873 in your browser to see your local registry!

---

### Step 2: Make Changes to Components

Edit any component in `packages/react/src/components/`

Example: Change Button color in `packages/react/src/components/Button/Button.module.css`

---

### Step 3: Build Packages

```bash
# Build the React package
yarn build:react
```

---

### Step 4: Publish to LOCAL Registry (Verdaccio)

```bash
# Publish to LOCAL registry (not real npm!)
cd packages/react
npm publish --registry http://localhost:4873
```

✅ Package is now in your **local** registry (version 0.1.29)
❌ Package is **NOT** on real npmjs.com yet!

---

### Step 5: Test in Template-Test Package

```bash
# Install from LOCAL registry
cd ../../apps/template-test
npm install

# Start dev server
npm run dev
```

Open http://localhost:3000 and test your changes!

---

### Step 6: Found a Bug? No Problem!

1. Fix the bug in `packages/react`
2. Build again: `yarn build:react`
3. Publish to local registry again (same version!)
4. Update template-test: `cd apps/template-test && npm install`
5. Test again!

**No new versions created on real npm!**

---

### Step 7: Everything Works? Publish to Real npm!

```bash
# Update version (creates new version like 0.1.30)
yarn changeset

# Publish to REAL npmjs.com
yarn release
```

✅ Now the package is published to real npmjs.com!

---

## 📂 Understanding the Packages

### What Gets Published to Real npm?

**Only `@tagaddod-design/react`:**
- Current version on npmjs.com: **0.1.29**
- URL: https://www.npmjs.com/package/@tagaddod-design/react
- Anyone can install: `npm install @tagaddod-design/react`

**NOT `@tagaddod-design/tokens`:**
- This is **internal only** (used by React package)
- Not published to npmjs.com
- Only lives in your monorepo

### What's in `apps/template-test`?

- A copy of your template (`tagaddod-startert-template-main`)
- Configured to install from **local** Verdaccio registry
- Used for testing before publishing to real npm
- **Not tracked in git** (it's in .gitignore)

---

## 🎨 Visual Workflow

```
┌─────────────────────────────────────────────────────────┐
│  1. Edit Component                                      │
│     packages/react/src/components/Button/Button.tsx     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. Build                                               │
│     yarn build:react                                    │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. Publish to LOCAL Verdaccio                          │
│     npm publish --registry http://localhost:4873        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. Test in apps/template-test                          │
│     cd apps/template-test && npm install && npm run dev │
└─────────────────────────────────────────────────────────┘
                          ↓
                   ┌─────────────┐
                   │ Works? │
                   └─────────────┘
                   Yes ↓       ↓ No (go back to step 1)
┌─────────────────────────────────────────────────────────┐
│  5. Publish to REAL npmjs.com                           │
│     yarn changeset && yarn release                      │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 Quick Commands Reference

| What You Want | Command |
|--------------|---------|
| Start local registry | `yarn registry:start` |
| Build React package | `yarn build:react` |
| Publish to LOCAL registry | `cd packages/react && npm publish --registry http://localhost:4873` |
| Test in template-test | `cd apps/template-test && npm install && npm run dev` |
| Publish to REAL npm | `yarn changeset && yarn release` |
| View local packages | Visit http://localhost:4873 in browser |

---

## 🐛 Troubleshooting

### Error: "EADDRINUSE: address already in use ::1:4873"

**Problem:** Verdaccio is already running on port 4873

**Fix:**
```bash
# Kill any process using port 4873
lsof -ti:4873 | xargs kill -9

# Then start again
yarn registry:start
```

### Error: "Cannot connect to http://localhost:4873"

**Problem:** Verdaccio is not running

**Fix:**
```bash
# Start Verdaccio
yarn registry:start
```

### Warning: "logs property deprecated"

**Already fixed!** The config has been updated to use `log:` instead of `logs:` for Verdaccio 6.x

---

## ❓ Common Questions

### Q: How do I know if I'm using local or real npm?

**Look at the registry URL:**
- Local: `--registry http://localhost:4873`
- Real: No `--registry` flag, or `--registry https://registry.npmjs.org`

### Q: Can I use the same version number in Verdaccio?

**Yes!** You can publish version 0.1.29 to Verdaccio as many times as you want for testing.

### Q: What happens if Verdaccio isn't running?

Apps/template-test can't install packages. You'll see connection errors.

### Q: Can others see my Verdaccio packages?

**No!** Verdaccio runs only on your computer (localhost). It's private.

### Q: Do I need to be online?

- **For Verdaccio:** No (runs offline)
- **For real npm:** Yes (need internet to publish)

---

## 🎯 Summary

**Old Way:**
Edit → Publish to npm → Test → Bug → Publish again → Test → Bug → Publish again...
(Many versions on real npm!)

**New Way:**
Edit → Publish to Verdaccio → Test → Fix → Test → Fix → Test → **Perfect!** → Publish to npm
(One clean version on real npm!)

---

**Questions? Check VERDACCIO-SETUP.md for detailed technical documentation.**
