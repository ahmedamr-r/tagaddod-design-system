import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@tagaddod-design/react';

// Import base tokens using correct package name
import '@tagaddod-design/tokens/tokens.css';
import '@tagaddod-design/react/styles/index.css';

// Import brand-specific token overrides - CRITICAL for theme switching
import '@tagaddod-design/tokens/brands/tagaddod.css';
import '@tagaddod-design/tokens/brands/greenpan.css';

// Import locale-specific token overrides - CRITICAL: these contain [lang="ar"] and [lang="en"] selectors
import '@tagaddod-design/tokens/locales/en.css';
import '@tagaddod-design/tokens/locales/ar.css';

// Import direction-specific tokens
import '@tagaddod-design/tokens/directions/ltr.css';
import '@tagaddod-design/tokens/directions/rtl.css';

// Create a wrapper component to handle global changes
const ThemeWrapper = ({ children, theme, direction }) => {
  const locale = direction === 'rtl' ? 'ar' : 'en';
  
  React.useEffect(() => {
    const root = document.documentElement;
    
    // Set data attributes for theme, locale, and direction
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-locale', locale);
    root.setAttribute('dir', direction);
    
    // CRITICAL: Set lang attribute for font switching - this is what the CSS targets
    root.setAttribute('lang', locale);
    
    // Also set document lang and dir for complete coverage
    document.documentElement.lang = locale;
    document.dir = direction;
    
    // Remove existing classes to prevent conflicts
    root.classList.remove('locale-en', 'locale-ar');
    root.classList.remove('theme-tagaddod', 'theme-greenpan');
    root.classList.remove('dir-ltr', 'dir-rtl');
    
    // Add current locale, theme, and direction classes
    root.classList.add(`locale-${locale}`);
    root.classList.add(`theme-${theme}`);
    root.classList.add(`dir-${direction}`);
    
    console.log('🎨 Theme applied:', { 
      theme, 
      direction, 
      locale,
      themeAttr: root.getAttribute('data-theme'),
      langAttr: root.getAttribute('lang'),
      dirAttr: root.getAttribute('dir'),
      fontFamily: getComputedStyle(root).getPropertyValue('--t-font-family-primary'),
      brandColor: getComputedStyle(root).getPropertyValue('--t-color-fill-brand')
    });
  }, [theme, direction, locale]);

  return (
    <ThemeProvider 
      defaultTheme={theme}
      defaultDirection={direction}
      defaultLocale={locale}
    >
      {children}
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', 'Tokens', '*'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'tagaddod';
      const direction = context.globals.direction || 'ltr';
      
      return (
        <ThemeWrapper theme={theme} direction={direction}>
          <div style={{ 
            minHeight: '100vh', 
            backgroundColor: 'var(--t-color-bg-primary, #f7f7f8)', 
            padding: 'var(--t-space-600, 1.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--t-font-family-primary)',
            fontSize: 'var(--t-font-size-400, 1rem)',
            lineHeight: 'var(--t-font-line-height-500, 1.25)',
            color: 'var(--t-color-text-primary, #16161d)',
            textAlign: direction === 'rtl' ? 'right' : 'left'
          }}>
            <Story />
          </div>
        </ThemeWrapper>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components (Tagaddod=Blue, GreenPan=Green)',
      defaultValue: 'tagaddod',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'tagaddod', title: 'Tagaddod (Blue)', icon: 'circle' },
          { value: 'greenpan', title: 'GreenPan (Green)', icon: 'circlehollow' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    direction: {
      name: 'Direction',
      description: 'Text direction and locale for RTL support',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'direction',
        items: [
          { value: 'ltr', title: 'LTR (English - Outfit)', icon: 'arrowleft' },
          { value: 'rtl', title: 'RTL (Arabic - Tajawal)', icon: 'arrowright' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
