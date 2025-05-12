# Complete Token Flow Explained

## 1. Source to Build Flow

```
packages/tokens/src/          packages/tokens/dist/
├── primitives/              ├── css/
│   ├── color.json    →      │   └── tokens.css (CSS variables)
│   └── space.json           ├── scss/
└── semantics/               │   └── _tokens.scss (SCSS vars)
    └── button.json          ├── index.js (ES modules)
                             └── tokens.js (CommonJS)
```

## 2. Build Process

```bash
# When you run:
cd packages/tokens
yarn build

# Style Dictionary does:
1. Reads all JSON files from src/
2. Resolves references ({color.green.500})
3. Applies transformations
4. Outputs to multiple formats
```

## 3. What Each File Contains

### Source (packages/tokens/src/primitives/color.json):
```json
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
```

### Built CSS (packages/tokens/dist/css/tokens.css):
```css
:root {
  --t-color-green-500: #25b24b;
}
```

### Built JS (packages/tokens/dist/index.js):
```javascript
export const ColorGreen500 = "#25b24b";
```

## 4. GitHub's Role

### A. Version Control
```
GitHub Repository
├── Stores source files
├── Tracks all changes
├── Provides history
└── Enables collaboration
```

### B. Integration Points
```
Figma Tokens Studio → GitHub (Push tokens)
GitHub → Token Admin (Import tokens)
Token Admin → GitHub (Create PRs)
GitHub → CI/CD (Trigger builds)
```

### C. Workflow
```
1. Designer updates tokens in Figma
2. Pushes to GitHub via Tokens Studio
3. Creates PR for review
4. PR gets merged
5. CI builds new token files
6. Developers use updated tokens
```

## 5. Current State in Your Project

### What Happens When:

#### You Edit on GitHub Directly:
- Changes are in source files only
- Need to build locally to see in Token Admin
- OR import from GitHub branch manually

#### You Use Token Admin:
- Loads from built files on start
- Can import from GitHub manually
- Creates PRs for changes

#### You Merge a PR:
- Source files update on GitHub
- Need to pull + build locally
- Then Token Admin shows new values

## 6. Common Commands

```bash
# Build tokens after changes
cd packages/tokens
yarn build

# See what changed
git status
git diff

# Start Token Admin
cd apps/token-admin
yarn dev

# Build everything
cd ../.. # to monorepo root
yarn build
```

## 7. Troubleshooting

### "I changed tokens on GitHub but don't see them"
1. **Option A**: Import from GitHub branch in Token Admin
2. **Option B**: Pull changes and rebuild:
   ```bash
   git pull
   cd packages/tokens
   yarn build
   cd ../../apps/token-admin
   yarn dev
   ```

### "Token Admin shows old values"
- Click "Refresh from Package" button
- Or restart the dev server

### "My CSS doesn't have new tokens"
- Did you build? (`yarn build` in tokens package)
- Did you restart your app?

## Key Concepts

1. **Source Files**: JSON in `src/` - what you edit
2. **Built Files**: Files in `dist/` - what apps use
3. **GitHub**: Stores source, enables collaboration
4. **Token Admin**: Edits tokens, creates PRs
5. **Build Step**: Transforms source → usable formats
