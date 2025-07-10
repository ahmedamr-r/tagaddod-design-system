# Next.js Project Setup Rules
# AI Agent Instructions for Creating Next.js 15 Project with Tagaddod Design System Support

## OBJECTIVE
Create a new Next.js 15 project with TypeScript, App Router, and prepare it for Tagaddod Design System integration.

## ⚠️ CRITICAL: DO NOT INSTALL TAILWIND CSS
**DO NOT install Tailwind CSS** - the Tagaddod Design System provides its own complete styling solution that will conflict with Tailwind. Follow these instructions exactly as written.

## PREREQUISITES
- Node.js 18.17+ installed
- Package manager preference: yarn (preferred) or npm

## PROJECT CREATION STEPS

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest project-name --typescript --eslint --app --src-dir --import-alias "@/*"
```

### 2. Navigate to Project Directory
```bash
cd project-name
```

### 3. Install Additional Dependencies
```bash
# Development dependencies
npm install -D @types/node @types/react @types/react-dom eslint-config-next

# Utility dependencies  
npm install clsx class-variance-authority

# Icon library (required for design system)
npm install @tabler/icons-react
```

### 4. Configure TypeScript (tsconfig.json)
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 5. Update Next.js Configuration (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@tagaddod-design/react']
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil'
    });
    return config;
  }
};

module.exports = nextConfig;
```

### 6. Configure PostCSS (postcss.config.js)
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
```

### 7. Set Up App Router Structure
Create the following directory structure:
```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    loading.tsx
    error.tsx
    not-found.tsx
  components/
    ui/ (for design system components)
    layout/ (for layout components)
  lib/
    utils.ts
  styles/ (for additional stylesheets)
```

### 8. Configure Root Layout (src/app/layout.tsx)
```typescript
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tagaddod Design System App',
  description: 'Application built with Tagaddod Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for Tagaddod Design System */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* ThemeProvider will be added here */}
        {children}
      </body>
    </html>
  )
}
```

### 9. Set Up Global Styles (src/app/globals.css)
```css
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
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

a {
  color: inherit;
  text-decoration: none;
}

/* Prepare for RTL support */
[dir="rtl"] {
  direction: rtl;
}

[dir="ltr"] {
  direction: ltr;
}
```

### 10. Create Utility Functions (src/lib/utils.ts)
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
```

### 11. Create Sample Page (src/app/page.tsx)
```typescript
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Tagaddod Design System
        </h1>
        <p className="text-center text-gray-600">
          Your Next.js project is ready for design system integration.
        </p>
      </div>
    </main>
  )
}
```

### 12. Update Package.json Scripts
Add these scripts to package.json:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next",
    "analyze": "ANALYZE=true next build"
  }
}
```

## VALIDATION STEPS

### 1. Verify Project Structure
Ensure the following directories exist:
- src/app/
- src/components/
- src/lib/
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

### 5. Verify Font Loading
Check browser dev tools network tab for Google Fonts loading

## TROUBLESHOOTING

### Common Issues:
1. **Port already in use**: Add `-p 3001` to dev script
2. **TypeScript errors**: Run `npm install @types/node @types/react @types/react-dom`
3. **Font loading issues**: Verify Google Fonts URLs in layout.tsx
4. **Build errors**: Check next.config.js syntax

### Success Indicators:
- Development server starts without errors
- TypeScript compilation succeeds
- Fonts load correctly in browser
- Ready for design system installation

## NEXT STEPS
After completing this setup:
1. Download and use `tagaddod-installation.rules` to install the design system
2. Download and use `themeprovider-setup.rules` to configure theming
3. Download and use `styles-activation.rules` to activate design system styles

## NOTES
- This setup optimizes for Tree Shaking with design system components
- RTL support is prepared but not activated (use rtl-support.rules later)
- PostCSS is configured for modern CSS processing
- Font optimization is configured for both English and Arabic typography