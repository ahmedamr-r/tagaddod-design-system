# Vite + React Project Setup Rules
# AI Agent Instructions for Creating Vite Project with React, TypeScript, and Tagaddod Design System Support

## OBJECTIVE
Create a new Vite project with React 18, TypeScript, Tailwind CSS, and prepare it for Tagaddod Design System integration.

## PREREQUISITES
- Node.js 18+ installed
- Package manager preference: npm, yarn, or pnpm

## PROJECT CREATION STEPS

### 1. Initialize Vite Project
```bash
npm create vite@latest project-name -- --template react-ts
```

### 2. Navigate to Project Directory
```bash
cd project-name
```

### 3. Install Base Dependencies
```bash
npm install
```

### 4. Install Additional Dependencies
```bash
# Styling utilities
npm install tailwindcss postcss autoprefixer clsx class-variance-authority

# Icons (required for design system)
npm install @tabler/icons-react

# Development dependencies
npm install -D @types/node eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### 5. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

### 6. Configure Vite (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'design-system': ['@tagaddod-design/react'],
          'radix': ['@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-select'],
          'icons': ['@tabler/icons-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@tagaddod-design/react', '@tabler/icons-react'],
  },
})
```

### 7. Configure TypeScript (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 8. Configure Tailwind CSS (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Design system tokens will be added here
      colors: {
        // Placeholder for design system colors
      },
      fontFamily: {
        // Placeholder for design system fonts
      }
    },
  },
  plugins: [],
  // Disable Tailwind's base styles as design system provides its own
  corePlugins: {
    preflight: false,
  }
}
```

### 9. Configure PostCSS (postcss.config.js)
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 10. Set Up Project Structure
Create the following directory structure:
```
src/
  components/
    ui/ (for design system components)
    layout/ (for layout components)
  lib/
    utils.ts
  styles/
    globals.css
  App.tsx
  main.tsx
  index.css
```

### 11. Update HTML Template (index.html)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tagaddod Design System App</title>
    
    <!-- Google Fonts for Tagaddod Design System -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link 
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
      rel="stylesheet" 
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 12. Configure Main Entry Point (src/main.tsx)
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ThemeProvider will be added here */}
    <App />
  </React.StrictMode>,
)
```

### 13. Set Up Global Styles (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Design system styles will be imported here */
/* @import '@tagaddod-design/react/styles.css'; */

/* Base styles for consistency */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: #ffffff;
}

#root {
  min-height: 100vh;
}

/* Prepare for RTL support */
[dir="rtl"] {
  direction: rtl;
  font-family: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

[dir="ltr"] {
  direction: ltr;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
```

### 14. Create Utility Functions (src/lib/utils.ts)
```typescript
import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Utility for theme detection
export function getSystemTheme() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Utility for RTL detection
export function isRTL() {
  if (typeof document !== 'undefined') {
    return document.dir === 'rtl' || document.documentElement.dir === 'rtl'
  }
  return false
}

// Local storage utilities for theme persistence
export function getStoredTheme(key: string = 'theme') {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

export function setStoredTheme(theme: string, key: string = 'theme') {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, theme)
  }
}
```

### 15. Update App Component (src/App.tsx)
```typescript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tagaddod Design System
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your Vite + React project is ready for design system integration.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <p className="text-sm text-gray-500">
            Click the button to test React state management
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
```

### 16. Create App Styles (src/App.css)
```css
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: logo-spin infinite 20s linear;
  }
}
```

### 17. Update Package.json Scripts
Add these scripts to package.json:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist node_modules/.vite",
    "analyze": "npx vite-bundle-analyzer"
  }
}
```

### 18. Configure ESLint (.eslintrc.cjs)
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

## VALIDATION STEPS

### 1. Verify Project Structure
Ensure the following directories exist:
- src/components/
- src/lib/
- src/styles/
- node_modules/

### 2. Test Development Server
```bash
npm run dev
```
Should start on http://localhost:3000 without errors

### 3. Verify TypeScript Configuration
```bash
npm run type-check
```
Should complete without type errors

### 4. Test Build Process
```bash
npm run build
```
Should build successfully without errors

### 5. Test Preview
```bash
npm run preview
```
Should serve built application without issues

### 6. Verify Font Loading
Check browser dev tools network tab for Google Fonts loading

## TROUBLESHOOTING

### Common Issues:
1. **Port conflicts**: Change port in vite.config.ts server.port
2. **TypeScript path errors**: Verify baseUrl and paths in tsconfig.json
3. **Font loading issues**: Check Google Fonts URLs in index.html
4. **Build errors**: Verify vite.config.ts syntax and imports
5. **Module resolution**: Ensure @types/node is installed

### Success Indicators:
- Development server starts without errors
- TypeScript compilation succeeds
- Fonts load correctly in browser
- Build process completes successfully
- Ready for design system installation

## NEXT STEPS
After completing this setup:
1. Download and use `tagaddod-installation.rules` to install the design system
2. Download and use `themeprovider-setup.rules` to configure theming
3. Download and use `styles-activation.rules` to activate design system styles

## NOTES
- Vite provides faster development builds compared to webpack
- Hot Module Replacement (HMR) is configured for optimal development experience
- Bundle splitting is optimized for design system components
- RTL support is prepared but not activated (use rtl-support.rules later)
- Font optimization is configured for both English and Arabic typography
- Tree-shaking is enabled for optimal bundle sizes