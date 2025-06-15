import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Button } from '../components/Button/Button';

// Component to display and change theme state with font information
const ThemeDemo = () => {
  const { theme, setTheme, direction, setDirection, locale } = useTheme();
  const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '20px',
      border: '1px solid var(--t-color-border-primary)',
      borderRadius: 'var(--t-border-radius-200)',
      backgroundColor: 'var(--t-color-surface-primary)',
      fontFamily: 'var(--t-font-family-primary)',
    }}>
      <div>
        <h3 style={{ marginTop: 0, color: 'var(--t-color-text-primary)' }}>Current Settings</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--t-color-text-secondary)' }}>
          <li><strong>Theme:</strong> {theme}</li>
          <li><strong>Direction:</strong> {direction}</li>
          <li><strong>Locale:</strong> {locale}</li>
          <li><strong>Font Family:</strong> {currentFont}</li>
          <li><strong>CSS Font Variable:</strong> var(--t-font-family-primary)</li>
        </ul>
      </div>
      
      <div>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>Theme Control</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button 
            variant={theme === 'tagaddod' ? 'primary' : 'secondary'} 
            onClick={() => setTheme('tagaddod')}
          >
            Tagaddod
          </Button>
          <Button 
            variant={theme === 'greenpan' ? 'primary' : 'secondary'} 
            onClick={() => setTheme('greenpan')}
          >
            GreenPan
          </Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>Font & Direction Control</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button 
            variant={direction === 'ltr' ? 'primary' : 'secondary'} 
            onClick={() => setDirection('ltr')}
          >
            English (Outfit)
          </Button>
          <Button 
            variant={direction === 'rtl' ? 'primary' : 'secondary'} 
            onClick={() => setDirection('rtl')}
          >
            العربية (Tajawal)
          </Button>
        </div>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <h3 style={{ color: 'var(--t-color-text-primary)' }}>Sample UI in current theme & font</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
        </div>
      </div>
    </div>
  );
};

// Font switching demonstration component
const FontSwitchingDemoComponent = () => {
  const { direction, setDirection, locale } = useTheme();
  const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
  
  return (
    <div style={{ 
      padding: '24px',
      border: '2px solid var(--t-color-border-primary)',
      borderRadius: 'var(--t-border-radius-200)',
      backgroundColor: 'var(--t-color-surface-primary)',
      textAlign: direction === 'rtl' ? 'right' : 'left'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          fontWeight: 'var(--t-font-weight-semibold)',
          color: 'var(--t-color-text-primary)',
          margin: '0 0 8px 0'
        }}>
          Font Switching Demo
        </h3>
        <p style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          color: 'var(--t-color-text-secondary)',
          fontSize: 'var(--t-font-size-350)',
          margin: 0
        }}>
          Current Font: <strong>{currentFont}</strong> | Direction: <strong>{direction.toUpperCase()}</strong>
        </p>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--t-font-family-primary)',
        fontSize: 'var(--t-font-size-400)',
        lineHeight: 'var(--t-font-line-height-600)',
        color: 'var(--t-color-text-primary)',
        marginBottom: '20px'
      }}>
        {locale === 'en' ? (
          <div>
            <h4 style={{ fontWeight: 'var(--t-font-weight-medium)', margin: '0 0 12px 0' }}>
              This text uses the Outfit font family
            </h4>
            <p style={{ margin: '0 0 16px 0' }}>
              Outfit is a geometric sans-serif font designed for optimal readability in English text. 
              It provides excellent clarity for both headings and body text, with a modern appearance 
              that works well for digital interfaces.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontWeight: 'var(--t-font-weight-regular)' }}>Regular</span>
              <span style={{ fontWeight: 'var(--t-font-weight-medium)' }}>Medium</span>
              <span style={{ fontWeight: 'var(--t-font-weight-semibold)' }}>Semibold</span>
              <span style={{ fontWeight: 'var(--t-font-weight-bold)' }}>Bold</span>
            </div>
          </div>
        ) : (
          <div>
            <h4 style={{ fontWeight: 'var(--t-font-weight-medium)', margin: '0 0 12px 0' }}>
              هذا النص يستخدم خط تجوال
            </h4>
            <p style={{ margin: '0 0 16px 0' }}>
              تجوال هو خط عربي حديث مصمم خصيصاً لسهولة القراءة في النصوص العربية. 
              يوفر وضوحاً ممتازاً للعناوين والنصوص، مع مظهر عصري يناسب الواجهات الرقمية.
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexDirection: 'row-reverse' }}>
              <span style={{ fontWeight: 'var(--t-font-weight-regular)' }}>عادي</span>
              <span style={{ fontWeight: 'var(--t-font-weight-medium)' }}>متوسط</span>
              <span style={{ fontWeight: 'var(--t-font-weight-semibold)' }}>نصف غامق</span>
              <span style={{ fontWeight: 'var(--t-font-weight-bold)' }}>غامق</span>
            </div>
          </div>
        )}
      </div>
      
      <Button 
        onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}
        variant="primary"
      >
        {locale === 'en' ? 'Switch to Arabic (Tajawal)' : 'التبديل للإنجليزية (Outfit)'}
      </Button>
    </div>
  );
};

// Typography comparison component
const TypographyComparisonComponent = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      {/* English Column */}
      <ThemeProvider defaultDirection="ltr" defaultLocale="en">
        <div style={{ 
          padding: '20px',
          border: '2px solid var(--t-color-border-primary)',
          borderRadius: 'var(--t-border-radius-200)',
          backgroundColor: 'var(--t-color-surface-primary)'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--t-font-family-primary)',
            fontWeight: 'var(--t-font-weight-semibold)',
            color: 'var(--t-color-text-primary)',
            margin: '0 0 16px 0',
            textAlign: 'left'
          }}>
            English - Outfit Font
          </h3>
          
          <div style={{ fontFamily: 'var(--t-font-family-primary)', color: 'var(--t-color-text-primary)' }}>
            <h1 style={{ fontSize: 'var(--t-font-size-800)', fontWeight: 'var(--t-font-weight-bold)', margin: '0 0 8px 0' }}>
              Heading 1
            </h1>
            <h2 style={{ fontSize: 'var(--t-font-size-600)', fontWeight: 'var(--t-font-weight-semibold)', margin: '0 0 8px 0' }}>
              Heading 2
            </h2>
            <h3 style={{ fontSize: 'var(--t-font-size-500)', fontWeight: 'var(--t-font-weight-medium)', margin: '0 0 12px 0' }}>
              Heading 3
            </h3>
            
            <p style={{ fontSize: 'var(--t-font-size-400)', fontWeight: 'var(--t-font-weight-regular)', margin: '0 0 12px 0', lineHeight: 1.6 }}>
              This is body text using the Outfit font family. It's designed for optimal readability 
              in digital interfaces and provides excellent clarity for extended reading.
            </p>
            
            <p style={{ fontSize: 'var(--t-font-size-350)', color: 'var(--t-color-text-secondary)', margin: '0 0 16px 0' }}>
              This is smaller text demonstrating different font sizes and weights available in Outfit.
            </p>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="primary" size="micro">Primary</Button>
              <Button variant="secondary" size="micro">Secondary</Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
      
      {/* Arabic Column */}
      <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
        <div style={{ 
          padding: '20px',
          border: '2px solid var(--t-color-border-primary)',
          borderRadius: 'var(--t-border-radius-200)',
          backgroundColor: 'var(--t-color-surface-primary)'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--t-font-family-primary)',
            fontWeight: 'var(--t-font-weight-semibold)',
            color: 'var(--t-color-text-primary)',
            margin: '0 0 16px 0',
            textAlign: 'right'
          }}>
            العربية - خط تجوال
          </h3>
          
          <div style={{ fontFamily: 'var(--t-font-family-primary)', color: 'var(--t-color-text-primary)', textAlign: 'right' }}>
            <h1 style={{ fontSize: 'var(--t-font-size-800)', fontWeight: 'var(--t-font-weight-bold)', margin: '0 0 8px 0' }}>
              العنوان الأول
            </h1>
            <h2 style={{ fontSize: 'var(--t-font-size-600)', fontWeight: 'var(--t-font-weight-semibold)', margin: '0 0 8px 0' }}>
              العنوان الثاني
            </h2>
            <h3 style={{ fontSize: 'var(--t-font-size-500)', fontWeight: 'var(--t-font-weight-medium)', margin: '0 0 12px 0' }}>
              العنوان الثالث
            </h3>
            
            <p style={{ fontSize: 'var(--t-font-size-400)', fontWeight: 'var(--t-font-weight-regular)', margin: '0 0 12px 0', lineHeight: 1.6 }}>
              هذا نص أساسي يستخدم خط تجوال. تم تصميمه لتحسين القراءة في الواجهات الرقمية 
              ويوفر وضوحاً ممتازاً للقراءة المطولة باللغة العربية.
            </p>
            
            <p style={{ fontSize: 'var(--t-font-size-350)', color: 'var(--t-color-text-secondary)', margin: '0 0 16px 0' }}>
              هذا نص أصغر يوضح أحجام الخطوط والأوزان المختلفة المتاحة في خط تجوال.
            </p>
            
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="micro">ثانوي</Button>
              <Button variant="primary" size="micro">أساسي</Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Language/Font switcher component
const LanguageFontSwitcherComponent = () => {
  const { locale, direction, setDirection } = useTheme();
  const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
  
  const switchLanguage = () => {
    setDirection(locale === 'en' ? 'rtl' : 'ltr');
  };
  
  return (
    <div style={{ 
      padding: '24px',
      border: '2px solid var(--t-color-border-primary)',
      borderRadius: 'var(--t-border-radius-200)',
      backgroundColor: 'var(--t-color-surface-primary)',
      textAlign: direction === 'rtl' ? 'right' : 'left',
      fontFamily: 'var(--t-font-family-primary)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          fontWeight: 'var(--t-font-weight-semibold)',
          color: 'var(--t-color-text-primary)',
          margin: '0 0 8px 0'
        }}>
          {locale === 'en' ? 'Language & Font Switcher' : 'مبدل اللغة والخط'}
        </h3>
        
        <div style={{ 
          color: 'var(--t-color-text-secondary)',
          fontSize: 'var(--t-font-size-350)',
          marginBottom: '16px'
        }}>
          <div>
            <strong>{locale === 'en' ? 'Current Language:' : 'اللغة الحالية:'}</strong> 
            {' '}{locale === 'en' ? 'English' : 'العربية'}
          </div>
          <div>
            <strong>{locale === 'en' ? 'Current Font:' : 'الخط الحالي:'}</strong> 
            {' '}{currentFont}
          </div>
          <div>
            <strong>{locale === 'en' ? 'Direction:' : 'الاتجاه:'}</strong> 
            {' '}{direction.toUpperCase()}
          </div>
        </div>
      </div>
      
      <div style={{ 
        fontSize: 'var(--t-font-size-400)',
        lineHeight: 'var(--t-font-line-height-600)',
        color: 'var(--t-color-text-primary)',
        marginBottom: '20px'
      }}>
        {locale === 'en' ? (
          <p>
            This content is currently displayed in English using the <strong>Outfit</strong> font family. 
            Click the button below to switch to Arabic with the <strong>Tajawal</strong> font family.
          </p>
        ) : (
          <p>
            يتم عرض هذا المحتوى حالياً باللغة العربية باستخدام خط <strong>تجوال</strong>. 
            انقر على الزر أدناه للتبديل إلى الإنجليزية باستخدام خط <strong>Outfit</strong>.
          </p>
        )}
      </div>
      
      <Button onClick={switchLanguage} variant="primary">
        {locale === 'en' ? 'العربية (Tajawal) ←' : 'English (Outfit) →'}
      </Button>
    </div>
  );
};

// Reset theme when leaving the story
const ResetThemeOnExit = () => {
  useEffect(() => {
    return () => {
      // Reset to default on unmount
      document.documentElement.setAttribute('data-theme', 'tagaddod');
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.setAttribute('data-locale', 'en');
      document.dir = 'ltr';
    };
  }, []);
  
  return null;
};

const meta = {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./ThemeProvider.mdx'),
    },
  },
  decorators: [
    (Story) => (
      <>
        <ResetThemeOnExit />
        <Story />
      </>
    ),
  ],
  tags: ['providers'],
  argTypes: {
    defaultTheme: {
      control: 'radio',
      options: ['tagaddod', 'greenpan'],
      description: 'Initial theme value',
    },
    defaultDirection: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'Initial text direction (also determines font: ltr=Outfit, rtl=Tajawal)',
    },
    defaultLocale: {
      control: 'radio',
      options: ['en', 'ar'],
      description: 'Initial locale (en=Outfit font, ar=Tajawal font)',
    },
    storageKey: {
      control: 'text',
      description: 'localStorage key for persisting theme preferences',
    },
    children: {
      control: false,
      description: 'React children to render inside the provider',
    },
  },
  args: {
    defaultTheme: 'tagaddod',
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    storageKey: 'tagaddod-theme',
    children: <div>Theme Provider Content</div>,
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const FontSwitchingDemo: Story = {
  name: '🎨 Font Switching Demo',
  args: {
    children: <FontSwitchingDemoComponent />,
  },
  render: () => (
    <ThemeProvider>
      <FontSwitchingDemoComponent />
    </ThemeProvider>
  ),
};

export const TypographyComparison: Story = {
  name: '📝 Typography Comparison',
  args: {
    children: <TypographyComparisonComponent />,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ padding: '20px' }}>
      <TypographyComparisonComponent />
    </div>
  ),
};

export const LanguageFontSwitcher: Story = {
  name: '🌐 Language & Font Switcher',
  args: {
    children: <LanguageFontSwitcherComponent />,
  },
  render: () => (
    <ThemeProvider>
      <LanguageFontSwitcherComponent />
    </ThemeProvider>
  ),
};

export const TagaddodTheme: Story = {
  args: {
    defaultTheme: 'tagaddod',
    children: <ThemeDemo />,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const GreenPanTheme: Story = {
  args: {
    defaultTheme: 'greenpan',
    children: <ThemeDemo />,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const RtlDirection: Story = {
  name: 'RTL Direction (Arabic/Tajawal)',
  args: {
    defaultDirection: 'rtl',
    defaultLocale: 'ar',
    children: <ThemeDemo />,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const CustomStorageKey: Story = {
  args: {
    storageKey: 'custom-theme-storage-key',
    children: <ThemeDemo />,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

// Demonstrates nesting theme providers with different fonts
export const NestedThemeProviders: Story = {
  name: 'Nested Providers (Mixed Fonts)',
  args: {
    children: <div>Nested content</div>,
  },
  render: () => (
    <ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
      <div style={{ 
        padding: '20px', 
        border: '2px solid var(--t-color-border-primary)', 
        marginBottom: '20px',
        borderRadius: 'var(--t-border-radius-200)',
        backgroundColor: 'var(--t-color-surface-primary)'
      }}>
        <h3 style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          color: 'var(--t-color-text-primary)'
        }}>
          Outer Provider (Tagaddod, LTR, Outfit Font)
        </h3>
        <p style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          color: 'var(--t-color-text-secondary)'
        }}>
          This content uses the Outfit font family in left-to-right direction.
        </p>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <Button variant="primary">Tagaddod Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          border: '2px solid var(--t-color-border-primary)',
          borderRadius: 'var(--t-border-radius-200)',
          backgroundColor: 'var(--t-color-surface-secondary)'
        }}>
          <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
            <h3 style={{ 
              textAlign: 'right',
              fontFamily: 'var(--t-font-family-primary)',
              color: 'var(--t-color-text-primary)'
            }}>
              Inner Provider (GreenPan, RTL, Tajawal Font)
            </h3>
            <p style={{ 
              textAlign: 'right',
              fontFamily: 'var(--t-font-family-primary)',
              color: 'var(--t-color-text-secondary)'
            }}>
              هذا المحتوى يستخدم خط تجوال في الاتجاه من اليمين إلى اليسار.
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="secondary">زر ثانوي</Button>
              <Button variant="primary">زر أساسي</Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// Example with useThemeClasses hook for CSS class usage
export const WithThemeClasses: Story = {
  name: 'useThemeClasses Hook',
  args: {
    children: <div>Theme classes content</div>,
  },
  render: () => {
    const ThemeClassesDemo = () => {
      const { theme, setTheme, themeClass, dirClass, localeClass, isRTL, locale } = useTheme();
      const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
      
      return (
        <div style={{ 
          padding: '20px', 
          border: '2px solid var(--t-color-border-primary)',
          borderRadius: 'var(--t-border-radius-200)',
          backgroundColor: 'var(--t-color-surface-primary)',
          fontFamily: 'var(--t-font-family-primary)'
        }}>
          <h3 style={{ color: 'var(--t-color-text-primary)' }}>useThemeClasses Hook Demo</h3>
          <div style={{ color: 'var(--t-color-text-secondary)' }}>
            <p>Current theme classes and values:</p>
            <ul>
              <li><code>themeClass</code>: <strong>{themeClass}</strong></li>
              <li><code>dirClass</code>: <strong>{dirClass}</strong></li>
              <li><code>localeClass</code>: <strong>{localeClass}</strong></li>
              <li><code>isRTL</code>: <strong>{isRTL ? 'true' : 'false'}</strong></li>
              <li><code>currentFont</code>: <strong>{currentFont}</strong></li>
            </ul>
          </div>
          
          <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
            <Button onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}>
              Toggle Theme
            </Button>
          </div>
        </div>
      );
    };
    
    return (
      <ThemeProvider>
        <ThemeClassesDemo />
      </ThemeProvider>
    );
  },
};
