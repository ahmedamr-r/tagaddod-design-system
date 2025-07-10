# Performance Optimization Rules
# AI Agent Instructions for Optimizing Tagaddod Design System Performance

## OBJECTIVE
Optimize application performance, bundle size, and loading times when using the Tagaddod Design System while maintaining functionality and user experience.

## PREREQUISITES
- Design system fully integrated and working
- Build system configured (Next.js or Vite)
- All components and features tested
- Production deployment planned

## OPTIMIZATION AREAS
- **Bundle Size Reduction**: Tree-shaking and code splitting
- **Loading Performance**: Font optimization and asset preloading
- **Runtime Performance**: Component optimization and caching
- **Network Optimization**: CDN usage and compression
- **Core Web Vitals**: LCP, FID, CLS improvements

## OPTIMIZATION STEPS

### 1. Bundle Size Optimization

#### 1.1 Advanced Tree-Shaking Configuration

For **Next.js** projects, update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize design system imports
  experimental: {
    optimizePackageImports: [
      '@tagaddod-design/react',
      '@tabler/icons-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
    ]
  },
  
  // Enable SWC for faster builds
  swcMinify: true,
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Design system chunk
          designSystem: {
            test: /[\\/]node_modules[\\/]@tagaddod-design[\\/]/,
            name: 'design-system',
            priority: 30,
            reuseExistingChunk: true,
          },
          // Radix UI chunk
          radixUI: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-ui',
            priority: 25,
            reuseExistingChunk: true,
          },
          // Icons chunk
          icons: {
            test: /[\\/]node_modules[\\/]@tabler[\\/]icons-react[\\/]/,
            name: 'icons',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Common vendor chunk
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      }
    }
    
    return config
  },
  
  // Compress output
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
```

For **Vite** projects, update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  
  build: {
    // Enable minification
    minify: 'terser',
    
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    
    // Advanced rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          // Design system chunk
          'design-system': ['@tagaddod-design/react'],
          
          // Radix UI chunks (split by functionality)
          'radix-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
          ],
          'radix-forms': [
            '@radix-ui/react-select',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-radio-group',
          ],
          'radix-display': [
            '@radix-ui/react-avatar',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-tabs',
          ],
          
          // Icons (split into commonly used groups)
          'icons-common': [
            '@tabler/icons-react/icons-outline/IconHome',
            '@tabler/icons-react/icons-outline/IconUser',
            '@tabler/icons-react/icons-outline/IconSettings',
            '@tabler/icons-react/icons-outline/IconSearch',
            '@tabler/icons-react/icons-outline/IconPlus',
          ],
          
          // Other vendor libraries
          'vendor-utils': ['clsx', 'class-variance-authority'],
          'vendor-table': ['@tanstack/react-table'],
          'vendor-toast': ['sonner'],
        },
        
        // Optimize asset naming
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      '@tagaddod-design/react',
      '@tabler/icons-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
    ],
  },
})
```

#### 1.2 Create Import Optimization Utilities

Create `src/lib/optimized-imports.ts`:
```typescript
// Optimized component imports to reduce bundle size
// Use these instead of importing everything from the main package

// Core components (most commonly used)
export { Button, TextInput, Select } from '@tagaddod-design/react'

// Layout components (lazy-loaded)
export const AspectRatio = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.AspectRatio }))
)

export const Separator = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Separator }))
)

// Complex components (lazy-loaded)
export const Table = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Table }))
)

export const Sidebar = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Sidebar }))
)

// Modal and overlay components (lazy-loaded)
export const Modal = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Modal }))
)

export const Drawer = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Drawer }))
)

export const Popover = lazy(() => 
  import('@tagaddod-design/react').then(mod => ({ default: mod.Popover }))
)

// Commonly used icons (bundled together)
export {
  IconHome,
  IconUser,
  IconSettings,
  IconSearch,
  IconPlus,
  IconMinus,
  IconEdit,
  IconTrash,
  IconCheck,
  IconX,
} from '@tabler/icons-react'

// Less common icons (lazy-loaded)
export const IconDownload = lazy(() => 
  import('@tabler/icons-react').then(mod => ({ default: mod.IconDownload }))
)

export const IconUpload = lazy(() => 
  import('@tabler/icons-react').then(mod => ({ default: mod.IconUpload }))
)
```

### 2. Font Loading Optimization

#### 2.1 Advanced Font Preloading Strategy

For **Next.js**, update `src/app/layout.tsx`:
```typescript
import type { Metadata } from 'next'
import { ThemeProvider } from '@tagaddod-design/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tagaddod Design System App',
  description: 'Application built with Tagaddod Design System',
  // Preload critical fonts
  other: {
    'link': [
      {
        rel: 'preload',
        href: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G8A3lQBiu2SqeO.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: 'https://fonts.gstatic.com/s/tajawal/v9/Iura6YBj_oCad4k1l8KiEA.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
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
        {/* DNS prefetch for faster font loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect with high priority */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Optimized font loading with display=swap */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Font face definitions with fallbacks */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Outfit';
              font-display: swap;
              font-style: normal;
              font-weight: 400 700;
              src: url('https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G8A3lQBiu2SqeO.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: 'Tajawal';
              font-display: swap;
              font-style: normal;
              font-weight: 400 700;
              src: url('https://fonts.gstatic.com/s/tajawal/v9/Iura6YBj_oCad4k1l8KiEA.woff2') format('woff2');
              unicode-range: U+0600-06FF, U+200C-206F, U+2070-20CF, U+FB50-FDFF, U+FE70-FEFF;
            }
          `
        }} />
      </head>
      <body className="font-primary antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### 2.2 CSS Font Optimization

Update your global CSS with font-display optimizations:
```css
/* Optimized font loading with fallbacks */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G8A3lQBiu2SqeO.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Tajawal';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/tajawal/v9/Iura6YBj_oCad4k1l8KiEA.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-206F, U+2070-20CF, U+FB50-FDFF, U+FE70-FEFF;
}

/* Optimized font stack with system fallbacks */
:root {
  --font-family-primary: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-family-arabic: 'Tajawal', 'Segoe UI Historic', 'Noto Sans Arabic', system-ui, sans-serif;
}

/* Prevent layout shift during font loading */
body {
  font-family: var(--font-family-primary);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}

/* Size adjust for better fallback matching */
@font-face {
  font-family: 'Outfit Fallback';
  src: local('Arial');
  size-adjust: 107%;
  ascent-override: 95%;
  descent-override: 25%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'Tajawal Fallback';
  src: local('Tahoma');
  size-adjust: 95%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}
```

### 3. Component Performance Optimization

#### 3.1 Create Performance-Optimized Components

Create `src/components/optimized/OptimizedTable.tsx`:
```typescript
import { memo, useMemo, useCallback, useState } from 'react'
import { Table } from '@tagaddod-design/react'
import type { TableProps } from '@tagaddod-design/react'

// Memoized table component for large datasets
export const OptimizedTable = memo<TableProps>(({ 
  data, 
  columns, 
  ...props 
}) => {
  // Memoize column definitions to prevent re-renders
  const memoizedColumns = useMemo(() => columns, [columns])
  
  // Memoize data processing
  const processedData = useMemo(() => {
    // Add any data processing logic here
    return data
  }, [data])

  return (
    <Table
      data={processedData}
      columns={memoizedColumns}
      {...props}
    />
  )
})

OptimizedTable.displayName = 'OptimizedTable'
```

#### 3.2 Create Virtualized Components for Large Lists

Create `src/components/optimized/VirtualizedList.tsx`:
```typescript
import { memo, useMemo } from 'react'
import { FixedSizeList as List } from 'react-window'

interface VirtualizedListProps {
  items: any[]
  height: number
  itemHeight: number
  renderItem: (item: any, index: number) => React.ReactNode
}

export const VirtualizedList = memo<VirtualizedListProps>(({
  items,
  height,
  itemHeight,
  renderItem
}) => {
  const itemCount = items.length

  const Item = memo(({ index, style }: { index: number; style: any }) => (
    <div style={style}>
      {renderItem(items[index], index)}
    </div>
  ))

  return (
    <List
      height={height}
      itemCount={itemCount}
      itemSize={itemHeight}
      itemData={items}
    >
      {Item}
    </List>
  )
})
```

### 4. Caching and Memoization

#### 4.1 Theme Context Optimization

Create `src/lib/optimized-theme-provider.tsx`:
```typescript
import { createContext, useContext, useMemo, ReactNode } from 'react'
import { ThemeProvider as BaseThemeProvider, useTheme } from '@tagaddod-design/react'

interface OptimizedThemeContextType {
  theme: string
  direction: string
  locale: string
  isRTL: boolean
  // Memoized selectors
  themeClasses: string
  fontFamily: string
  textAlign: string
}

const OptimizedThemeContext = createContext<OptimizedThemeContextType | null>(null)

export function OptimizedThemeProvider({ children }: { children: ReactNode }) {
  const baseTheme = useTheme()
  
  // Memoize expensive computations
  const contextValue = useMemo(() => ({
    ...baseTheme,
    themeClasses: `theme-${baseTheme.theme} dir-${baseTheme.direction} locale-${baseTheme.locale}`,
    fontFamily: baseTheme.isRTL ? 'var(--font-family-arabic)' : 'var(--font-family-primary)',
    textAlign: baseTheme.isRTL ? 'right' : 'left',
  }), [baseTheme])

  return (
    <OptimizedThemeContext.Provider value={contextValue}>
      {children}
    </OptimizedThemeContext.Provider>
  )
}

export function useOptimizedTheme() {
  const context = useContext(OptimizedThemeContext)
  if (!context) {
    throw new Error('useOptimizedTheme must be used within OptimizedThemeProvider')
  }
  return context
}
```

### 5. Image and Asset Optimization

#### 5.1 Optimized Asset Loading

Create `src/components/optimized/OptimizedImage.tsx`:
```typescript
import { useState, useCallback } from 'react'
import Image from 'next/image' // For Next.js projects

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  priority = false,
  className = ''
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500">Failed to load image</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  )
}
```

### 6. Service Worker and Caching

#### 6.1 Create Service Worker for Asset Caching

Create `public/sw.js`:
```javascript
const CACHE_NAME = 'tagaddod-design-system-v1'
const FONT_CACHE_NAME = 'fonts-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/manifest.json',
  // Add other critical assets
]

// Font URLs to cache
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700&display=swap',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      }),
      // Cache fonts
      caches.open(FONT_CACHE_NAME).then((cache) => {
        return cache.addAll(FONT_URLS)
      })
    ])
  )
  self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  // Handle font requests
  if (event.request.url.includes('fonts.googleapis.com') || 
      event.request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(FONT_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request).then((fetchResponse) => {
            cache.put(event.request, fetchResponse.clone())
            return fetchResponse
          })
        })
      })
    )
    return
  }

  // Handle other requests with network-first strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request)
      })
  )
})
```

### 7. Performance Monitoring

#### 7.1 Core Web Vitals Monitoring

Create `src/lib/performance-monitor.ts`:
```typescript
// Web Vitals monitoring for Core Web Vitals
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    console.log('LCP:', lastEntry.startTime)
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'performance',
        event_label: 'LCP',
        value: Math.round(lastEntry.startTime)
      })
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // First Input Delay (FID)
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID:', entry.processingStart - entry.startTime)
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'FID',
          value: Math.round(entry.processingStart - entry.startTime)
        })
      }
    }
  }).observe({ entryTypes: ['first-input'] })

  // Cumulative Layout Shift (CLS)
  let clsValue = 0
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    }
    console.log('CLS:', clsValue)
  }).observe({ entryTypes: ['layout-shift'] })
}

// Component render performance tracking
export function trackComponentRender(componentName: string) {
  if (typeof window === 'undefined') return

  return {
    start: () => performance.mark(`${componentName}-start`),
    end: () => {
      performance.mark(`${componentName}-end`)
      performance.measure(
        `${componentName}-render`,
        `${componentName}-start`,
        `${componentName}-end`
      )
      
      const measure = performance.getEntriesByName(`${componentName}-render`)[0]
      console.log(`${componentName} render time:`, measure.duration)
    }
  }
}
```

#### 7.2 Bundle Analysis Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build",
    "analyze:vite": "npx vite-bundle-analyzer dist",
    "lighthouse": "npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html",
    "perf:fonts": "npx fontaine analyze",
    "perf:size": "npx size-limit"
  },
  "devDependencies": {
    "size-limit": "^8.2.6",
    "@size-limit/preset-big-lib": "^8.2.6",
    "vite-bundle-analyzer": "^0.7.0",
    "lighthouse": "^10.4.0"
  }
}
```

## VALIDATION STEPS

### 1. Bundle Size Analysis
```bash
# Analyze bundle size
npm run analyze

# Check size limits
npm run perf:size
```

Target bundle sizes:
- Main chunk: < 200KB gzipped
- Design system chunk: < 150KB gzipped
- Icons chunk: < 50KB gzipped

### 2. Performance Testing
```bash
# Run Lighthouse audit
npm run lighthouse

# Test font loading performance
npm run perf:fonts
```

Target Core Web Vitals:
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### 3. Network Performance
- Test on slow 3G connection
- Verify font loading doesn't block rendering
- Check asset caching effectiveness

### 4. Component Performance
- Profile component render times
- Test table performance with 1000+ rows
- Verify smooth theme switching

## TROUBLESHOOTING

### Common Performance Issues:

#### 1. Large Bundle Size
**Problem**: Bundle larger than expected
**Solution**:
- Use bundle analyzer to identify large dependencies
- Implement lazy loading for heavy components
- Check for duplicate dependencies

#### 2. Slow Font Loading
**Problem**: Flash of unstyled text (FOUT)
**Solution**:
- Preload critical font files
- Use font-display: swap
- Implement proper font fallbacks

#### 3. Poor LCP Scores
**Problem**: Largest Contentful Paint > 2.5s
**Solution**:
- Optimize critical rendering path
- Preload key assets
- Reduce server response times

#### 4. Layout Shifts (CLS)
**Problem**: Content jumping during load
**Solution**:
- Reserve space for fonts with size-adjust
- Set explicit dimensions for images
- Avoid dynamic content injection

#### 5. Slow Component Rendering
**Problem**: Components take long to render
**Solution**:
- Use React.memo for expensive components
- Implement virtualization for large lists
- Optimize context value calculations

### Success Indicators:
- Bundle size within targets
- Core Web Vitals scores in green
- Fast Time to Interactive (TTI)
- Smooth animations and interactions
- Effective caching strategy

## ADVANCED OPTIMIZATIONS

### 1. Critical CSS Extraction
```css
/* Critical CSS for above-the-fold content */
.critical-styles {
  /* Only styles needed for initial render */
  font-family: var(--font-family-primary);
  color: var(--t-color-text-primary);
  background: var(--t-color-surface-background);
}

/* Non-critical styles loaded asynchronously */
@media print {
  .non-critical-styles {
    /* Styles for print, complex animations, etc. */
  }
}
```

### 2. Resource Hints Optimization
```html
<!-- Priority hints for better loading -->
<link rel="preload" href="/critical.css" as="style" fetchpriority="high">
<link rel="prefetch" href="/non-critical.js" fetchpriority="low">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

### 3. Component-Level Code Splitting
```typescript
// Route-based code splitting
const HomePage = lazy(() => import('../pages/HomePage'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

// Component-based code splitting
const HeavyChart = lazy(() => import('../components/HeavyChart'))
```

## PRODUCTION DEPLOYMENT CHECKLIST

### Pre-deployment:
- [ ] Bundle analysis completed
- [ ] Core Web Vitals targets met
- [ ] Service worker configured
- [ ] CDN setup for static assets
- [ ] Image optimization implemented
- [ ] Font loading optimized

### Post-deployment:
- [ ] Real User Monitoring (RUM) setup
- [ ] Performance budgets configured
- [ ] Regular Lighthouse audits scheduled
- [ ] Bundle size monitoring active

## MONITORING AND MAINTENANCE

### Performance Budgets
Set up automated checks for:
- Bundle size limits
- Core Web Vitals thresholds
- Font loading performance
- Component render times

### Regular Audits
Schedule monthly reviews of:
- Bundle composition analysis
- Performance metrics trends
- User experience metrics
- Caching effectiveness

## NOTES
- Performance optimization is ongoing, not one-time
- Always measure before and after changes
- User experience metrics matter more than synthetic scores
- Different optimization strategies work for different use cases
- Keep performance budgets updated as features grow