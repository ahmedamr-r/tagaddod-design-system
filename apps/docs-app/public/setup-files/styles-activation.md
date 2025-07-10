# Styles Activation Rules
# AI Agent Instructions for Activating Tagaddod Design System Styles and Fonts

## OBJECTIVE
Activate all design system styles, fonts, and CSS configurations to enable full visual functionality of Tagaddod Design System components.

## ⚠️ CRITICAL: DO NOT USE TAILWIND CSS
**DO NOT install or import Tailwind CSS** - the Tagaddod Design System provides its own complete styling solution. Using Tailwind will cause conflicts and override design system styles.

## PREREQUISITES
- Design system installed (using tagaddod-installation.rules)
- ThemeProvider configured (using themeprovider-setup.rules)
- Project structure in place (Next.js or Vite)

## STYLE ACTIVATION STEPS

### 1. Import Design System CSS

#### 1.1 For Next.js Applications
Update your global CSS file (src/app/globals.css):

```css
/* Import Tagaddod Design System styles FIRST */
@import '@tagaddod-design/react/styles.css';

/* Root CSS custom properties for enhanced theming */
:root {
  /* Design system foundation */
  --font-family-primary: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-arabic: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Base typography settings */
  --line-height-english: 1.5;
  --line-height-arabic: 1.2;
  
  /* Application-specific overrides (optional) */
  --app-max-width: 1200px;
  --app-padding: 1rem;
}

/* Global reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-family-primary);
  line-height: var(--line-height-english);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  min-height: 100vh;
  background-color: var(--t-color-surface-background, #ffffff);
  color: var(--t-color-text-primary, #000000);
  font-family: var(--font-family-primary);
  line-height: var(--line-height-english);
}

/* RTL-specific styles */
[dir="rtl"] {
  font-family: var(--font-family-arabic);
  line-height: var(--line-height-arabic);
}

[dir="rtl"] body {
  font-family: var(--font-family-arabic);
  line-height: var(--line-height-arabic);
}

/* Enhanced focus styles for accessibility */
:focus-visible {
  outline: 2px solid var(--t-color-border-focus, #007AFF);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

/* Application container styles */
.app-container {
  max-width: var(--app-max-width);
  margin: 0 auto;
  padding: var(--app-padding);
}

/* Utility classes for common patterns */
.text-balance {
  text-wrap: balance;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Print styles */
@media print {
  * {
    background-color: transparent !important;
    color: black !important;
    box-shadow: none !important;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}
```

#### 1.2 For Vite Applications
Update your main CSS file (src/index.css):

```css
/* Import Tagaddod Design System styles FIRST */
@import '@tagaddod-design/react/styles.css';

/* Root CSS custom properties for enhanced theming */
:root {
  /* Design system foundation */
  --font-family-primary: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-arabic: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Base typography settings */
  --line-height-english: 1.5;
  --line-height-arabic: 1.2;
  
  /* Application-specific overrides (optional) */
  --app-max-width: 1200px;
  --app-padding: 1rem;
}

/* Global reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-family-primary);
  line-height: var(--line-height-english);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  min-height: 100vh;
  background-color: var(--t-color-surface-background, #ffffff);
  color: var(--t-color-text-primary, #000000);
  font-family: var(--font-family-primary);
  line-height: var(--line-height-english);
}

#root {
  min-height: 100vh;
}

/* RTL-specific styles */
[dir="rtl"] {
  font-family: var(--font-family-arabic);
  line-height: var(--line-height-arabic);
}

[dir="rtl"] body {
  font-family: var(--font-family-arabic);
  line-height: var(--line-height-arabic);
}

/* Enhanced focus styles for accessibility */
:focus-visible {
  outline: 2px solid var(--t-color-border-focus, #007AFF);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

/* Application container styles */
.app-container {
  max-width: var(--app-max-width);
  margin: 0 auto;
  padding: var(--app-padding);
}

/* Utility classes for common patterns */
.text-balance {
  text-wrap: balance;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Print styles */
@media print {
  * {
    background-color: transparent !important;
    color: black !important;
    box-shadow: none !important;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}
```

### 2. Optimize Font Loading

#### 2.1 For Next.js Applications
Update your layout.tsx with optimized font loading:

```typescript
import type { Metadata } from 'next'
import { ThemeProvider } from '@tagaddod-design/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tagaddod Design System App',
  description: 'Application built with Tagaddod Design System',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Load fonts with display=swap for better performance */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload critical design system CSS */}
        <link 
          rel="preload" 
          href="/@tagaddod-design/react/styles.css" 
          as="style" 
        />
        
        {/* Font display optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Outfit';
              font-display: swap;
            }
            @font-face {
              font-family: 'Tajawal';
              font-display: swap;
            }
          `
        }} />
      </head>
      <body className="font-primary antialiased">
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

#### 2.2 For Vite Applications
Update your index.html with optimized font loading:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tagaddod Design System App</title>
    
    <!-- Preconnect to Google Fonts for faster loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- Load fonts with display=swap for better performance -->
    <link 
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
      rel="stylesheet" 
    />
    
    <!-- Font display optimization -->
    <style>
      @font-face {
        font-family: 'Outfit';
        font-display: swap;
      }
      @font-face {
        font-family: 'Tajawal';
        font-display: swap;
      }
    </style>
  </head>
  <body class="font-primary antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 3. Configure PostCSS Integration

Update your postcss.config.js to work with design system:

```javascript
export default {
  plugins: {
    autoprefixer: {},
    // Add other PostCSS plugins as needed
  },
}
```

### 4. Create CSS Variable Utilities

Create a utility file for CSS variables (src/lib/css-variables.ts):

```typescript
/**
 * Utility functions for working with CSS custom properties from the design system
 */

export function getCSSVariable(variable: string, fallback?: string): string {
  if (typeof window === 'undefined') return fallback || ''
  
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()
  
  return value || fallback || ''
}

export function setCSSVariable(variable: string, value: string): void {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(variable, value)
  }
}

// Design system token getters
export const tokens = {
  colors: {
    brandPrimary: () => getCSSVariable('--t-color-brand-primary', '#007AFF'),
    surfaceBackground: () => getCSSVariable('--t-color-surface-background', '#ffffff'),
    textPrimary: () => getCSSVariable('--t-color-text-primary', '#000000'),
  },
  spacing: {
    xs: () => getCSSVariable('--t-space-100', '0.25rem'),
    sm: () => getCSSVariable('--t-space-200', '0.5rem'),
    md: () => getCSSVariable('--t-space-300', '0.75rem'),
    lg: () => getCSSVariable('--t-space-400', '1rem'),
    xl: () => getCSSVariable('--t-space-500', '1.25rem'),
  },
  typography: {
    fontPrimary: () => getCSSVariable('--t-font-family-primary', 'Outfit, sans-serif'),
    fontArabic: () => getCSSVariable('--t-font-family-arabic', 'Tajawal, sans-serif'),
    lineHeightEnglish: () => getCSSVariable('--t-line-height-english', '1.5'),
    lineHeightArabic: () => getCSSVariable('--t-line-height-arabic', '1.2'),
  }
}

// Theme detection utilities
export function getCurrentTheme(): string {
  return getCSSVariable('--t-current-theme', 'tagaddod')
}

export function getCurrentDirection(): string {
  if (typeof document !== 'undefined') {
    return document.dir || document.documentElement.dir || 'ltr'
  }
  return 'ltr'
}
```

### 5. Create Typography Scale Component

Create a typography demonstration component (src/components/TypographyScale.tsx):

```typescript
import { useAppTheme } from '@/lib/use-app-theme'

export function TypographyScale() {
  const { isArabic, isRTL } = useAppTheme()

  const sampleText = {
    en: "The quick brown fox jumps over the lazy dog",
    ar: "نص تجريبي باللغة العربية للتحقق من الخطوط"
  }

  const text = isArabic ? sampleText.ar : sampleText.en

  return (
    <div className="space-y-6 p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Typography Scale</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Heading 1 - {text}
          </h1>
          <p className="text-sm text-gray-500">text-4xl font-bold</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Heading 2 - {text}
          </h2>
          <p className="text-sm text-gray-500">text-3xl font-semibold</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-medium" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Heading 3 - {text}
          </h3>
          <p className="text-sm text-gray-500">text-2xl font-medium</p>
        </div>

        <div className="space-y-2">
          <p className="text-lg" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Large text - {text}
          </p>
          <p className="text-sm text-gray-500">text-lg</p>
        </div>

        <div className="space-y-2">
          <p className="text-base" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Body text - {text}
          </p>
          <p className="text-sm text-gray-500">text-base</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Small text - {text}
          </p>
          <p className="text-sm text-gray-500">text-sm</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs" style={{
            fontFamily: isArabic ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
            lineHeight: isArabic ? 'var(--line-height-arabic)' : 'var(--line-height-english)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            Extra small text - {text}
          </p>
          <p className="text-sm text-gray-500">text-xs</p>
        </div>
      </div>
    </div>
  )
}
```

## VALIDATION STEPS

### 1. Verify CSS Import
Check browser dev tools:
- Network tab should show @tagaddod-design/react/styles.css loaded
- Elements tab should show CSS custom properties on :root

### 2. Test Font Loading
- Check Network tab for Google Fonts requests
- Verify fonts change when switching languages
- Test font fallbacks when fonts fail to load

### 3. Verify Design Tokens
Open browser console and run:
```javascript
getComputedStyle(document.documentElement).getPropertyValue('--t-color-brand-primary')
```
Should return a color value

### 4. Test Typography Rendering
- Create TypographyScale component and verify rendering
- Test both English (Outfit) and Arabic (Tajawal) fonts
- Verify line-height differences between languages

### 5. Check Theme Integration
- Switch themes and verify CSS custom properties update
- Test that components use design system styles
- Verify smooth transitions between themes

## TROUBLESHOOTING

### Common Issues:

#### 1. CSS Not Loading
**Problem**: Design system styles not applied
**Solution**: 
- Verify import path: `@tagaddod-design/react/styles.css`
- Check build process includes CSS files
- Ensure CSS import is before Tailwind imports

#### 2. Fonts Not Loading
**Problem**: Fonts don't display or fallback incorrectly
**Solution**:
- Check Google Fonts URLs in HTML head
- Verify font-display: swap is set
- Test network connectivity to fonts.googleapis.com

#### 3. CSS Custom Properties Not Available
**Problem**: Design tokens return empty values
**Solution**:
- Verify CSS import order (design system first)
- Check for CSS conflicts or overrides
- Ensure ThemeProvider is properly configured

#### 4. Typography Not Switching
**Problem**: Fonts don't change between English/Arabic
**Solution**:
- Verify font-family CSS variables are set
- Check language detection in ThemeProvider
- Ensure dir attribute is properly set

#### 5. CSS Specificity Issues
**Problem**: CSS conflicts between design system and custom styles
**Solution**:
- Import design system CSS first in global styles
- Use CSS specificity or !important if needed for overrides
- Ensure proper PostCSS configuration

### Success Indicators:
- Design system CSS loads without errors
- Fonts load and display correctly
- CSS custom properties are available
- Components render with proper styling
- Theme switching works smoothly
- Typography adapts to language changes

## PERFORMANCE OPTIMIZATION

### Font Loading Strategies
```html
<!-- Critical font preloading -->
<link rel="preload" href="https://fonts.gstatic.com/s/outfit/..." as="font" type="font/woff2" crossorigin>

<!-- Font display optimization -->
<style>
  @font-face {
    font-family: 'Outfit';
    font-display: swap;
    src: url('...') format('woff2');
  }
</style>
```

### CSS Bundle Optimization
```javascript
// vite.config.ts or next.config.js
export default {
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
}
```

## NEXT STEPS
After successful styles activation:
1. Download and use `component-integration.rules` for component usage guidelines
2. Download and use `rtl-support.rules` for enhanced RTL features
3. Download and use `optimization.rules` for performance tuning

## NOTES
- CSS import order is critical (design system first)
- Font loading affects Largest Contentful Paint (LCP) performance
- CSS custom properties enable dynamic theming
- RTL support requires both CSS and font considerations
- Design tokens provide consistent spacing and colors across components
- PostCSS configuration handles modern CSS processing