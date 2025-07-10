# RTL Support Rules
# AI Agent Instructions for Enhanced Right-to-Left (Arabic) Language Support

## OBJECTIVE
Enhance your application with comprehensive RTL (Right-to-Left) support for Arabic language users, including proper typography, layout adjustments, and cultural considerations.

## PREREQUISITES
- Design system installed and configured
- ThemeProvider set up with direction switching
- Styles activated with Google Fonts
- Basic component integration completed

## RTL ENHANCEMENT FEATURES
- **Automatic Layout Mirroring**: CSS logical properties for RTL layouts
- **Arabic Typography**: Proper font selection and line-height adjustments
- **Icon Direction**: Automatic icon flipping for RTL contexts
- **Content Alignment**: Text and element alignment for Arabic reading patterns
- **Cultural Adaptations**: Date formats, number systems, and UI patterns

## RTL SETUP STEPS

### 1. Enhanced CSS for RTL Support

#### 1.1 Create RTL Utilities (src/styles/rtl.css)
```css
/* RTL-specific utility classes and enhancements */

/* Logical properties for automatic RTL support */
.ml-auto { margin-inline-start: auto; }
.mr-auto { margin-inline-end: auto; }
.pl-4 { padding-inline-start: 1rem; }
.pr-4 { padding-inline-end: 1rem; }
.text-left { text-align: start; }
.text-right { text-align: end; }

/* Border radius adjustments for RTL */
.rounded-l-lg { border-start-start-radius: 0.5rem; border-end-start-radius: 0.5rem; }
.rounded-r-lg { border-start-end-radius: 0.5rem; border-end-end-radius: 0.5rem; }

/* RTL-aware positioning */
.left-4 { inset-inline-start: 1rem; }
.right-4 { inset-inline-end: 1rem; }

/* Arabic text optimizations */
[dir="rtl"] {
  /* Enhanced Arabic typography */
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  text-rendering: optimizeLegibility;
  font-variant-ligatures: contextual;
  
  /* Arabic line height and spacing */
  line-height: 1.2;
  letter-spacing: 0.01em;
}

/* Arabic text blocks */
[dir="rtl"] .arabic-text {
  font-family: 'Tajawal', 'Amiri', 'Noto Sans Arabic', sans-serif;
  line-height: 1.2;
  text-align: right;
  direction: rtl;
  unicode-bidi: isolate;
}

/* English text in RTL context */
[dir="rtl"] .english-text {
  font-family: 'Outfit', 'Inter', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  direction: ltr;
  unicode-bidi: isolate;
  display: inline-block;
}

/* Mixed content handling */
.mixed-content {
  unicode-bidi: plaintext;
}

/* RTL-specific component adjustments */
[dir="rtl"] .sidebar {
  border-left: 1px solid var(--t-color-border-secondary);
  border-right: none;
}

[dir="rtl"] .dropdown-menu {
  left: auto;
  right: 0;
}

[dir="rtl"] .tooltip-arrow {
  transform: scaleX(-1);
}

/* Icon mirroring for directional context */
[dir="rtl"] .flip-icon {
  transform: scaleX(-1);
}

/* Form field layouts */
[dir="rtl"] .form-field {
  text-align: right;
}

[dir="rtl"] .form-field label {
  text-align: right;
}

/* Table alignments */
[dir="rtl"] .table-cell-start {
  text-align: right;
}

[dir="rtl"] .table-cell-end {
  text-align: left;
}

/* Navigation adjustments */
[dir="rtl"] .breadcrumb-separator {
  transform: scaleX(-1);
}

[dir="rtl"] .pagination-prev {
  order: 2;
}

[dir="rtl"] .pagination-next {
  order: 1;
}
```

#### 1.2 Update Global CSS (src/app/globals.css or src/index.css)
Add RTL imports to your global CSS:

```css
/* Import RTL-specific styles */
@import './rtl.css';

/* Enhanced RTL font loading */
@font-face {
  font-family: 'Arabic Fallback';
  src: local('Tahoma'), local('Arial Unicode MS'), local('Lucida Grande');
  unicode-range: U+0600-06FF, U+FE70-FEFF, U+FB50-FDFF;
}

/* RTL-enhanced root variables */
:root {
  --rtl-text-align: left;
  --rtl-flex-direction: row;
  --rtl-margin-start: 0;
  --rtl-margin-end: auto;
}

[dir="rtl"] {
  --rtl-text-align: right;
  --rtl-flex-direction: row-reverse;
  --rtl-margin-start: auto;
  --rtl-margin-end: 0;
}

/* Arabic numeral support */
[dir="rtl"] .arabic-numerals {
  font-feature-settings: "numr" 1;
}

[dir="rtl"] .hindi-numerals {
  font-feature-settings: "hngl" 1;
}
```

### 2. Enhanced Direction Detection and Management

#### 2.1 Create Advanced RTL Hook (src/lib/use-rtl.ts)
```typescript
import { useEffect, useState } from 'react'
import { useTheme } from '@tagaddod-design/react'

interface RTLConfig {
  detectBrowserLanguage: boolean
  persistDirection: boolean
  storageKey: string
  supportedLocales: string[]
}

export function useRTL(config: Partial<RTLConfig> = {}) {
  const {
    detectBrowserLanguage = true,
    persistDirection = true,
    storageKey = 'rtl-direction',
    supportedLocales = ['ar', 'he', 'fa', 'ur']
  } = config

  const { direction, setDirection, locale, setLocale, isRTL } = useTheme()
  const [isReady, setIsReady] = useState(false)

  // Auto-detect user's language preference
  useEffect(() => {
    if (!detectBrowserLanguage || isReady) return

    const detectLanguage = () => {
      const browserLanguage = navigator.language || navigator.languages[0]
      const langCode = browserLanguage.split('-')[0]
      
      if (supportedLocales.includes(langCode)) {
        setDirection('rtl')
        setLocale(langCode as any)
      }
    }

    detectLanguage()
    setIsReady(true)
  }, [detectBrowserLanguage, supportedLocales, setDirection, setLocale, isReady])

  // Apply direction to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.dir = direction
      document.documentElement.dir = direction
      document.documentElement.lang = locale
      
      // Add direction class to body for CSS targeting
      document.body.classList.toggle('rtl', isRTL)
      document.body.classList.toggle('ltr', !isRTL)
    }
  }, [direction, locale, isRTL])

  // Utility functions
  const toggleDirection = () => {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr'
    setDirection(newDirection)
    setLocale(newDirection === 'rtl' ? 'ar' : 'en')
  }

  const getTextAlign = () => isRTL ? 'right' : 'left'
  const getTextAlignOpposite = () => isRTL ? 'left' : 'right'
  const getMarginStart = () => isRTL ? 'marginRight' : 'marginLeft'
  const getMarginEnd = () => isRTL ? 'marginLeft' : 'marginRight'
  const getPaddingStart = () => isRTL ? 'paddingRight' : 'paddingLeft'
  const getPaddingEnd = () => isRTL ? 'paddingLeft' : 'paddingRight'

  // Icon direction helper
  const getIconStyle = (shouldFlip: boolean = true) => ({
    transform: isRTL && shouldFlip ? 'scaleX(-1)' : undefined
  })

  // Layout helpers
  const getFlexDirection = (reverse: boolean = false) => {
    if (reverse) {
      return isRTL ? 'row' : 'row-reverse'
    }
    return isRTL ? 'row-reverse' : 'row'
  }

  return {
    // State
    direction,
    locale,
    isRTL,
    isReady,
    
    // Actions
    setDirection,
    setLocale,
    toggleDirection,
    
    // Utilities
    getTextAlign,
    getTextAlignOpposite,
    getMarginStart,
    getMarginEnd,
    getPaddingStart,
    getPaddingEnd,
    getIconStyle,
    getFlexDirection,
    
    // CSS helpers
    rtlClass: isRTL ? 'rtl' : 'ltr',
    textAlign: getTextAlign(),
    flexDirection: getFlexDirection()
  }
}
```

### 3. RTL-Aware Component Patterns

#### 3.1 Enhanced Layout Component (src/components/layout/RTLLayout.tsx)
```typescript
import { ReactNode } from 'react'
import { useRTL } from '@/lib/use-rtl'

interface RTLLayoutProps {
  children: ReactNode
  className?: string
}

export function RTLLayout({ children, className = '' }: RTLLayoutProps) {
  const { isRTL, textAlign, isReady } = useRTL()

  if (!isReady) {
    return <div>Loading...</div> // Prevent flash of incorrect direction
  }

  return (
    <div 
      className={`min-h-screen ${className}`}
      style={{
        direction: isRTL ? 'rtl' : 'ltr',
        textAlign: textAlign as any,
        fontFamily: isRTL 
          ? 'var(--font-family-arabic)' 
          : 'var(--font-family-primary)'
      }}
    >
      {children}
    </div>
  )
}
```

#### 3.2 RTL-Aware Navigation Component (src/components/navigation/RTLNavigation.tsx)
```typescript
import { Button } from '@/components/ui'
import { useRTL } from '@/lib/use-rtl'
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconHome,
  IconUser,
  IconSettings 
} from '@tabler/icons-react'

const NAV_ITEMS = [
  {
    id: 'home',
    label: { en: 'Home', ar: 'الرئيسية' },
    icon: IconHome,
    href: '/home'
  },
  {
    id: 'profile',
    label: { en: 'Profile', ar: 'الملف الشخصي' },
    icon: IconUser,
    href: '/profile'
  },
  {
    id: 'settings',
    label: { en: 'Settings', ar: 'الإعدادات' },
    icon: IconSettings,
    href: '/settings'
  }
]

export function RTLNavigation() {
  const { isRTL, locale, getIconStyle } = useRTL()
  
  return (
    <nav className="flex items-center gap-4 p-4 border-b">
      {/* Back/Forward navigation */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="micro"
          prefixIcon={
            isRTL ? (
              <IconChevronRight size={16} style={getIconStyle()} />
            ) : (
              <IconChevronLeft size={16} style={getIconStyle()} />
            )
          }
        >
          {locale === 'ar' ? 'رجوع' : 'Back'}
        </Button>
        
        <Button
          variant="secondary"
          size="micro"
          suffixIcon={
            isRTL ? (
              <IconChevronLeft size={16} style={getIconStyle()} />
            ) : (
              <IconChevronRight size={16} style={getIconStyle()} />
            )
          }
        >
          {locale === 'ar' ? 'التالي' : 'Next'}
        </Button>
      </div>

      {/* Main navigation */}
      <div className="flex items-center gap-3 ml-auto">
        {NAV_ITEMS.map((item) => {
          const IconComponent = item.icon
          return (
            <Button
              key={item.id}
              variant="tertiary"
              size="micro"
              prefixIcon={<IconComponent size={16} />}
            >
              {item.label[locale as keyof typeof item.label]}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
```

#### 3.3 RTL-Aware Form Component (src/components/forms/RTLForm.tsx)
```typescript
import { useState } from 'react'
import { TextInput, Select, Button, Checkbox } from '@/components/ui'
import { useRTL } from '@/lib/use-rtl'
import { IconSend } from '@tabler/icons-react'

const COUNTRY_OPTIONS = [
  { value: 'us', label: { en: 'United States', ar: 'الولايات المتحدة' } },
  { value: 'ae', label: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' } },
  { value: 'sa', label: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' } },
  { value: 'eg', label: { en: 'Egypt', ar: 'مصر' } },
]

export function RTLForm() {
  const { isRTL, locale, textAlign } = useRTL()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    terms: false
  })

  const labels = {
    name: { en: 'Full Name', ar: 'الاسم الكامل' },
    email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    country: { en: 'Country', ar: 'البلد' },
    terms: { en: 'I agree to the terms', ar: 'أوافق على الشروط' },
    submit: { en: 'Submit', ar: 'إرسال' },
    placeholders: {
      name: { en: 'Enter your full name', ar: 'أدخل اسمك الكامل' },
      email: { en: 'your.email@example.com', ar: 'بريدك@example.com' },
      country: { en: 'Select your country', ar: 'اختر بلدك' }
    }
  }

  const currentLabels = labels
  const currentLocale = locale as keyof typeof labels.name

  return (
    <form className="max-w-md mx-auto space-y-6 p-6 border rounded-lg">
      <div 
        className="text-center mb-6"
        style={{ textAlign: textAlign as any }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          {currentLocale === 'ar' ? 'نموذج الاتصال' : 'Contact Form'}
        </h2>
        <p className="text-gray-600">
          {currentLocale === 'ar' 
            ? 'يرجى ملء المعلومات أدناه' 
            : 'Please fill out the information below'
          }
        </p>
      </div>

      <div className="space-y-4">
        <TextInput
          label={currentLabels.name[currentLocale]}
          placeholder={currentLabels.placeholders.name[currentLocale]}
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          style={{ textAlign: textAlign as any }}
        />

        <TextInput
          label={currentLabels.email[currentLocale]}
          type="email"
          placeholder={currentLabels.placeholders.email[currentLocale]}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          style={{ textAlign: textAlign as any }}
        />

        <Select
          label={currentLabels.country[currentLocale]}
          placeholder={currentLabels.placeholders.country[currentLocale]}
          options={COUNTRY_OPTIONS.map(option => ({
            value: option.value,
            label: option.label[currentLocale]
          }))}
          value={formData.country}
          onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
        />

        <Checkbox
          label={currentLabels.terms[currentLocale]}
          checked={formData.terms}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: Boolean(checked) }))}
          required
        />
      </div>

      <div 
        className="flex justify-end pt-4"
        style={{ 
          flexDirection: isRTL ? 'row-reverse' : 'row',
          justifyContent: isRTL ? 'flex-end' : 'flex-end'
        }}
      >
        <Button 
          type="submit"
          prefixIcon={<IconSend size={18} />}
        >
          {currentLabels.submit[currentLocale]}
        </Button>
      </div>
    </form>
  )
}
```

### 4. Date and Number Formatting

#### 4.1 RTL-Aware Formatting Utilities (src/lib/rtl-formatters.ts)
```typescript
import { useRTL } from './use-rtl'

export function useRTLFormatting() {
  const { locale, isRTL } = useRTL()

  const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    }

    return new Intl.DateTimeFormat(locale, defaultOptions).format(date)
  }

  const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(locale, options).format(number)
  }

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  const formatRelativeTime = (date: Date) => {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
    const diffInMs = date.getTime() - Date.now()
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24))
    
    return rtf.format(diffInDays, 'day')
  }

  // Arabic numeral conversion
  const toArabicNumerals = (text: string) => {
    if (locale !== 'ar') return text
    
    const arabicDigits = '٠١٢٣٤٥٦٧٨٩'
    return text.replace(/\d/g, (digit) => arabicDigits[parseInt(digit)])
  }

  const toWesternNumerals = (text: string) => {
    const arabicDigits = '٠١٢٣٤٥٦٧٨٩'
    return text.replace(/[٠-٩]/g, (digit) => arabicDigits.indexOf(digit).toString())
  }

  return {
    formatDate,
    formatNumber,
    formatCurrency,
    formatRelativeTime,
    toArabicNumerals,
    toWesternNumerals,
    
    // Common formatted values
    currentDate: formatDate(new Date()),
    sampleCurrency: formatCurrency(1234.56),
    sampleNumber: formatNumber(1234567.89)
  }
}

// Usage example component
export function FormattingExample() {
  const formatting = useRTLFormatting()
  
  return (
    <div className="space-y-2 p-4 border rounded">
      <h3>Formatting Examples</h3>
      <p>Date: {formatting.currentDate}</p>
      <p>Currency: {formatting.sampleCurrency}</p>
      <p>Number: {formatting.sampleNumber}</p>
      <p>Arabic Numerals: {formatting.toArabicNumerals('12345')}</p>
    </div>
  )
}
```

### 5. Advanced RTL Testing Component

#### 5.1 RTL Testing Suite (src/components/testing/RTLTestSuite.tsx)
```typescript
import { Button, TextInput, Badge, Modal, Separator } from '@/components/ui'
import { useRTL } from '@/lib/use-rtl'
import { useRTLFormatting } from '@/lib/rtl-formatters'
import { 
  IconArrowLeft, 
  IconArrowRight, 
  IconHome,
  IconSettings,
  IconLanguage 
} from '@tabler/icons-react'

export function RTLTestSuite() {
  const { isRTL, toggleDirection, locale, getIconStyle } = useRTL()
  const formatting = useRTLFormatting()

  const testContent = {
    en: {
      title: 'RTL Testing Suite',
      description: 'Test all RTL features and layouts',
      mixedText: 'English text mixed with العربية text',
      numbers: 'Numbers: 12345 and Arabic: ١٢٣٤٥',
      navigation: 'Navigation Test',
      forms: 'Form Testing',
      icons: 'Icon Direction Test'
    },
    ar: {
      title: 'مجموعة اختبار RTL',
      description: 'اختبار جميع ميزات وتخطيطات RTL',
      mixedText: 'النص العربي مع English text مختلط',
      numbers: 'الأرقام: ١٢٣٤٥ والإنجليزية: 12345',
      navigation: 'اختبار التنقل',
      forms: 'اختبار النماذج',
      icons: 'اختبار اتجاه الأيقونات'
    }
  }

  const content = testContent[locale as keyof typeof testContent]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="text-gray-600">{content.description}</p>
        
        <div className="flex justify-center gap-4">
          <Button 
            onClick={toggleDirection}
            prefixIcon={<IconLanguage size={18} />}
          >
            Switch to {isRTL ? 'English' : 'العربية'}
          </Button>
          
          <Badge tone="info">
            Current: {isRTL ? 'RTL (Arabic)' : 'LTR (English)'}
          </Badge>
        </div>
      </div>

      <Separator />

      {/* Typography Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Typography & Text Direction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Pure Text</h3>
            <p>{locale === 'ar' ? 'هذا نص عربي خالص للاختبار' : 'This is pure English text for testing'}</p>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Mixed Content</h3>
            <p className="mixed-content">{content.mixedText}</p>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Numbers & Dates</h3>
            <p>{content.numbers}</p>
            <p>Date: {formatting.currentDate}</p>
            <p>Currency: {formatting.sampleCurrency}</p>
          </div>
          
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Long Text</h3>
            <p>
              {locale === 'ar' 
                ? 'هذا نص طويل باللغة العربية لاختبار التفاف النص وتوزيع الكلمات والمحاذاة الصحيحة في التخطيط من اليمين إلى اليسار'
                : 'This is a long English text to test text wrapping, word distribution, and proper alignment in left-to-right layout'
              }
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Navigation Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{content.navigation}</h2>
        <div className="flex items-center gap-3 p-4 border rounded">
          <Button
            variant="secondary"
            size="micro"
            prefixIcon={
              <IconArrowLeft 
                size={16} 
                style={getIconStyle(true)} 
              />
            }
          >
            {locale === 'ar' ? 'السابق' : 'Previous'}
          </Button>
          
          <Button
            variant="secondary"
            size="micro"
            prefixIcon={<IconHome size={16} />}
          >
            {locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Button>
          
          <Button
            variant="secondary"
            size="micro"
            suffixIcon={
              <IconArrowRight 
                size={16} 
                style={getIconStyle(true)} 
              />
            }
          >
            {locale === 'ar' ? 'التالي' : 'Next'}
          </Button>
          
          <div className="ml-auto">
            <Button
              variant="tertiary"
              size="micro"
              prefixIcon={<IconSettings size={16} />}
            >
              {locale === 'ar' ? 'الإعدادات' : 'Settings'}
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Form Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{content.forms}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label={locale === 'ar' ? 'الاسم' : 'Name'}
            placeholder={locale === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
          />
          <TextInput
            label={locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            placeholder={locale === 'ar' ? 'بريدك@example.com' : 'your.email@example.com'}
            type="email"
          />
        </div>
      </section>

      <Separator />

      {/* Icon Direction Test */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{content.icons}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border rounded">
            <IconArrowLeft size={32} style={getIconStyle(true)} className="mx-auto mb-2" />
            <p className="text-sm">Arrow Left (Flipped)</p>
          </div>
          
          <div className="text-center p-4 border rounded">
            <IconArrowRight size={32} style={getIconStyle(true)} className="mx-auto mb-2" />
            <p className="text-sm">Arrow Right (Flipped)</p>
          </div>
          
          <div className="text-center p-4 border rounded">
            <IconHome size={32} className="mx-auto mb-2" />
            <p className="text-sm">Home (No Flip)</p>
          </div>
          
          <div className="text-center p-4 border rounded">
            <IconSettings size={32} className="mx-auto mb-2" />
            <p className="text-sm">Settings (No Flip)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
```

## VALIDATION STEPS

### 1. Visual RTL Testing
- Load the RTLTestSuite component
- Switch between English and Arabic
- Verify layout changes and text alignment
- Check icon direction changes

### 2. Typography Verification
- Verify Arabic fonts load correctly (Tajawal)
- Check line-height differences between languages
- Test mixed content handling

### 3. Component Integration Testing
- Test all design system components in RTL mode
- Verify form field alignments
- Check modal and popover positioning

### 4. Browser Testing
Test in multiple browsers:
- Chrome/Edge (Blink engine)
- Firefox (Gecko engine)  
- Safari (WebKit engine)

### 5. Performance Testing
- Check font loading performance
- Verify no layout shifts when switching directions
- Test smooth transitions

## TROUBLESHOOTING

### Common Issues:

#### 1. Layout Not Mirroring
**Problem**: Elements don't flip to RTL layout
**Solution**: 
- Use CSS logical properties instead of physical ones
- Ensure `dir` attribute is set on document
- Check for hardcoded left/right values

#### 2. Arabic Fonts Not Loading
**Problem**: Arabic text displays with fallback fonts
**Solution**:
- Verify Google Fonts include Arabic font weights
- Check network tab for font loading errors
- Ensure font-display: swap is set

#### 3. Mixed Content Issues
**Problem**: Mixed Arabic/English text doesn't display correctly
**Solution**:
- Use `unicode-bidi: isolate` for mixed content
- Apply `direction: rtl` only to Arabic text blocks
- Use `plaintext` for auto-detection

#### 4. Icon Direction Problems
**Problem**: Icons don't flip or flip incorrectly
**Solution**:
- Only flip directional icons (arrows, navigation)
- Don't flip symbolic icons (home, settings)
- Use transform: scaleX(-1) for flipping

#### 5. Form Field Alignment
**Problem**: Form fields not aligned properly in RTL
**Solution**:
- Use text-align: start instead of left
- Verify label positioning
- Check input field direction attributes

### Success Indicators:
- Text aligns properly in both directions
- Layout mirrors correctly in RTL mode
- Fonts switch appropriately for language
- Icons flip when contextually appropriate
- No layout shifts during direction changes
- Mixed content displays correctly

## CULTURAL CONSIDERATIONS

### Date Formats
- Arabic: day/month/year format
- Use Hijri calendar option for Islamic contexts
- Right-align date displays in RTL

### Number Systems
- Support both Western (1234) and Arabic-Indic (١٢٣٤) numerals
- Allow user preference for numeral system
- Use appropriate thousands separators

### Reading Patterns
- Right-to-left reading flow for content
- Navigation follows RTL conventions
- Scroll bars on left side in RTL

### Color Associations
- Consider cultural color meanings
- Green positive associations in Islamic cultures
- Appropriate color choices for both cultures

## ACCESSIBILITY CONSIDERATIONS

### Screen Readers
- Ensure `lang` attribute switches with content
- Use proper `dir` attributes for mixed content
- Test with Arabic screen readers

### Keyboard Navigation
- Tab order follows visual layout direction
- Arrow key navigation respects RTL flow
- Focus indicators work in both directions

### ARIA Labels
- Provide Arabic translations for aria-label
- Ensure role attributes work with RTL
- Test with assistive technologies

## NEXT STEPS
After successful RTL implementation:
1. Download and use `optimization.rules` for performance tuning
2. Test with real Arabic content and feedback
3. Consider implementing additional Arabic localization features

## NOTES
- RTL affects layout but not all content direction
- Icons should flip contextually, not universally
- Mixed content requires careful unicode-bidi handling
- Performance impact is minimal with proper implementation
- Cultural considerations enhance user experience beyond technical RTL support