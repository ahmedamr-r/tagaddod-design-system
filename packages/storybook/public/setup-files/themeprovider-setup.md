# ThemeProvider Setup Rules
# AI Agent Instructions for Configuring Tagaddod Design System ThemeProvider

## OBJECTIVE
Set up and configure the ThemeProvider component to enable multi-brand theming, RTL/LTR support, and theme persistence in your application.

## PREREQUISITES
- Design system installed (using tagaddod-installation.rules)
- Next.js or Vite project set up
- React 17+ application structure

## THEMEPROVIDER FEATURES
- **Multi-Brand Support**: Tagaddod and GreenPan themes
- **Direction Support**: LTR (Left-to-Right) and RTL (Right-to-Left)
- **Locale Management**: English (en) and Arabic (ar)
- **Theme Persistence**: Automatic localStorage management
- **Auto-sync**: Direction and locale automatically sync (RTL→ar, LTR→en)

## SETUP STEPS

### 1. For Next.js Applications

#### 1.1 Update Root Layout (src/app/layout.tsx)
```typescript
import type { Metadata } from 'next'
import { ThemeProvider } from '@tagaddod-design/react'
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
        {/* Google Fonts for both English and Arabic */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ThemeProvider 
          defaultTheme="tagaddod"
          defaultDirection="ltr"
          defaultLocale="en"
          storageKey="tagaddod-theme-settings"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### 1.2 Create Theme Management Hook (src/lib/use-app-theme.ts)
```typescript
'use client'

import { useTheme } from '@tagaddod-design/react'
import { useEffect } from 'react'

export function useAppTheme() {
  const {
    theme,
    setTheme,
    direction,
    setDirection,
    locale,
    setLocale,
    isRTL,
    themeClass,
    dirClass,
    localeClass
  } = useTheme()

  // Auto-detect user's preferred language/direction
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLanguage = navigator.language || navigator.languages[0]
      const isArabicLocale = userLanguage.startsWith('ar')
      
      if (isArabicLocale && direction === 'ltr') {
        setDirection('rtl')
        setLocale('ar')
      }
    }
  }, [direction, setDirection, setLocale])

  const toggleTheme = () => {
    setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')
  }

  const toggleDirection = () => {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr'
    setDirection(newDirection)
    setLocale(newDirection === 'rtl' ? 'ar' : 'en')
  }

  return {
    // Current state
    theme,
    direction,
    locale,
    isRTL,
    
    // CSS classes for styling
    themeClass,
    dirClass,
    localeClass,
    
    // Actions
    setTheme,
    setDirection,
    setLocale,
    toggleTheme,
    toggleDirection,
    
    // Helper methods
    isTagaddodTheme: theme === 'tagaddod',
    isGreenPanTheme: theme === 'greenpan',
    isEnglish: locale === 'en',
    isArabic: locale === 'ar'
  }
}
```

### 2. For Vite Applications

#### 2.1 Update Main Entry Point (src/main.tsx)
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@tagaddod-design/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider 
      defaultTheme="tagaddod"
      defaultDirection="ltr"
      defaultLocale="en"
      storageKey="tagaddod-theme-settings"
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

#### 2.2 Create Theme Management Hook (src/lib/use-app-theme.ts)
```typescript
import { useTheme } from '@tagaddod-design/react'
import { useEffect } from 'react'

export function useAppTheme() {
  const {
    theme,
    setTheme,
    direction,
    setDirection,
    locale,
    setLocale,
    isRTL,
    themeClass,
    dirClass,
    localeClass
  } = useTheme()

  // Auto-detect user's preferred language/direction
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLanguage = navigator.language || navigator.languages[0]
      const isArabicLocale = userLanguage.startsWith('ar')
      
      if (isArabicLocale && direction === 'ltr') {
        setDirection('rtl')
        setLocale('ar')
      }
    }
  }, [direction, setDirection, setLocale])

  const toggleTheme = () => {
    setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')
  }

  const toggleDirection = () => {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr'
    setDirection(newDirection)
    setLocale(newDirection === 'rtl' ? 'ar' : 'en')
  }

  return {
    // Current state
    theme,
    direction,
    locale,
    isRTL,
    
    // CSS classes for styling
    themeClass,
    dirClass,
    localeClass,
    
    // Actions
    setTheme,
    setDirection,
    setLocale,
    toggleTheme,
    toggleDirection,
    
    // Helper methods
    isTagaddodTheme: theme === 'tagaddod',
    isGreenPanTheme: theme === 'greenpan',
    isEnglish: locale === 'en',
    isArabic: locale === 'ar'
  }
}
```

### 3. Create Theme Switcher Component (src/components/ThemeSwitcher.tsx)

```typescript
import { Button } from '@tagaddod-design/react'
import { useAppTheme } from '@/lib/use-app-theme'
import { IconPalette, IconLanguage } from '@tabler/icons-react'

export function ThemeSwitcher() {
  const {
    theme,
    direction,
    isTagaddodTheme,
    isArabic,
    toggleTheme,
    toggleDirection
  } = useAppTheme()

  return (
    <div className="flex items-center gap-2 p-4 border rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <IconPalette size={18} />
          <span className="text-sm font-medium">Theme:</span>
          <Button
            variant={isTagaddodTheme ? "primary" : "secondary"}
            size="micro"
            onClick={toggleTheme}
          >
            {isTagaddodTheme ? "Tagaddod" : "GreenPan"}
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <IconLanguage size={18} />
          <span className="text-sm font-medium">Language:</span>
          <Button
            variant="secondary"
            size="micro"
            onClick={toggleDirection}
          >
            {isArabic ? "العربية" : "English"}
          </Button>
        </div>
      </div>
      
      <div className="ml-4 text-xs text-gray-500">
        <div>Current: {theme}</div>
        <div>Direction: {direction}</div>
      </div>
    </div>
  )
}
```

### 4. Create Theme-Aware Layout Component (src/components/layout/AppLayout.tsx)

```typescript
import { ReactNode } from 'react'
import { useAppTheme } from '@/lib/use-app-theme'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

interface AppLayoutProps {
  children: ReactNode
  showThemeSwitcher?: boolean
}

export function AppLayout({ children, showThemeSwitcher = true }: AppLayoutProps) {
  const { isRTL, themeClass, dirClass, localeClass } = useAppTheme()

  return (
    <div 
      className={`min-h-screen ${themeClass} ${dirClass} ${localeClass}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Theme switcher in top-right corner */}
      {showThemeSwitcher && (
        <div className={`fixed top-4 ${isRTL ? 'left-4' : 'right-4'} z-50`}>
          <ThemeSwitcher />
        </div>
      )}
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
```

### 5. Update Application Root Component

#### 5.1 For Next.js (src/app/page.tsx)
```typescript
import { Button, TextInput, Badge } from '@tagaddod-design/react'
import { AppLayout } from '@/components/layout/AppLayout'
import { IconHome, IconUser } from '@tabler/icons-react'

export default function Home() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Tagaddod Design System
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Theme switching and RTL support are now configured!
          </p>
        </div>
        
        <div className="space-y-4 p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Component Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button prefixIcon={<IconHome size={18} />}>
              Home Button
            </Button>
            
            <Button 
              variant="secondary" 
              suffixIcon={<IconUser size={18} />}
            >
              User Profile
            </Button>
          </div>
          
          <TextInput 
            label="Sample Input" 
            placeholder="Try typing something..."
          />
          
          <div className="flex gap-2">
            <Badge tone="success">Success Badge</Badge>
            <Badge tone="warning">Warning Badge</Badge>
            <Badge tone="critical">Critical Badge</Badge>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
```

#### 5.2 For Vite (src/App.tsx)
```typescript
import { Button, TextInput, Badge } from '@tagaddod-design/react'
import { AppLayout } from './components/layout/AppLayout'
import { IconHome, IconUser } from '@tabler/icons-react'

function App() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Tagaddod Design System
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Theme switching and RTL support are now configured!
          </p>
        </div>
        
        <div className="space-y-4 p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Component Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button prefixIcon={<IconHome size={18} />}>
              Home Button
            </Button>
            
            <Button 
              variant="secondary" 
              suffixIcon={<IconUser size={18} />}
            >
              User Profile
            </Button>
          </div>
          
          <TextInput 
            label="Sample Input" 
            placeholder="Try typing something..."
          />
          
          <div className="flex gap-2">
            <Badge tone="success">Success Badge</Badge>
            <Badge tone="warning">Warning Badge</Badge>
            <Badge tone="critical">Critical Badge</Badge>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default App
```

### 6. Create Theme Configuration Types (src/types/theme.ts)

```typescript
export type AppTheme = 'tagaddod' | 'greenpan'
export type AppDirection = 'ltr' | 'rtl'
export type AppLocale = 'en' | 'ar'

export interface ThemeSettings {
  theme: AppTheme
  direction: AppDirection
  locale: AppLocale
}

export interface ThemeConfig {
  defaultTheme: AppTheme
  defaultDirection: AppDirection
  defaultLocale: AppLocale
  storageKey: string
  autoDetectLanguage: boolean
}
```

## VALIDATION STEPS

### 1. Verify ThemeProvider Integration
Start your development server:
```bash
npm run dev
```

### 2. Test Theme Switching
- Click the theme switcher button
- Verify visual changes between Tagaddod and GreenPan themes
- Check localStorage for persisted settings

### 3. Test Direction/Language Switching  
- Click the language toggle button
- Verify layout changes to RTL when switching to Arabic
- Check that fonts change appropriately

### 4. Verify Browser Developer Tools
- Check HTML attributes: `data-theme`, `dir`, `lang`
- Verify CSS custom properties are applied
- Confirm font loading in Network tab

### 5. Test Theme Persistence
- Change theme/direction settings
- Refresh the page
- Verify settings are restored from localStorage

## TROUBLESHOOTING

### Common Issues:

#### 1. ThemeProvider Context Error
**Problem**: "useTheme must be used within a ThemeProvider"
**Solution**: Ensure ThemeProvider wraps your entire app in layout.tsx or main.tsx

#### 2. Fonts Not Loading
**Problem**: Fonts don't change with theme switching
**Solution**: Verify Google Fonts are loaded in HTML head

#### 3. RTL Layout Issues
**Problem**: Layout doesn't flip properly in RTL mode
**Solution**: 
- Check `dir` attribute is set on root elements
- Verify CSS uses logical properties (margin-inline-start vs margin-left)

#### 4. Theme Persistence Not Working
**Problem**: Settings don't persist across page reloads
**Solution**: 
- Check localStorage in browser dev tools
- Verify storageKey is consistent
- Ensure localStorage is available (not disabled)

#### 5. SSR Hydration Errors (Next.js)
**Problem**: Hydration mismatch warnings
**Solution**: Use `'use client'` directive for theme-dependent components

### Success Indicators:
- Theme switcher works without errors
- Direction changes affect layout and fonts
- Settings persist across page reloads
- No console errors or warnings
- HTML attributes update correctly

## ADVANCED CONFIGURATION

### Custom Theme Detection
```typescript
// src/lib/theme-detection.ts
export function detectUserPreferences() {
  const preferences = {
    theme: 'tagaddod' as const,
    direction: 'ltr' as const,
    locale: 'en' as const
  }

  if (typeof window !== 'undefined') {
    // Detect system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      preferences.theme = 'greenpan' // Use GreenPan for dark preference
    }

    // Detect language preference
    const userLanguage = navigator.language || navigator.languages[0]
    if (userLanguage.startsWith('ar')) {
      preferences.direction = 'rtl'
      preferences.locale = 'ar'
    }
  }

  return preferences
}
```

### Theme-Aware Component Example
```typescript
// src/components/ThemedCard.tsx
import { useAppTheme } from '@/lib/use-app-theme'

export function ThemedCard({ children }: { children: React.ReactNode }) {
  const { isTagaddodTheme, isRTL } = useAppTheme()
  
  return (
    <div 
      className={`
        p-6 rounded-lg border 
        ${isTagaddodTheme ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}
        ${isRTL ? 'text-right' : 'text-left'}
      `}
    >
      {children}
    </div>
  )
}
```

## NEXT STEPS
After successful ThemeProvider setup:
1. Download and use `styles-activation.rules` to activate design system styles
2. Download and use `component-integration.rules` for component usage guidelines
3. Download and use `rtl-support.rules` for enhanced RTL features

## NOTES
- ThemeProvider automatically applies theme attributes to document
- Direction and locale are automatically synced (RTL→Arabic, LTR→English)
- Theme settings are persisted in localStorage
- All child components have access to theme context
- Font families are automatically switched based on locale