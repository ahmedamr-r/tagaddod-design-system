import React from 'react';
import { ThemeProvider } from '@tagaddod-design/react';

// Import styles using correct package names
import '@tagaddod-design/tokens/tokens.css';
import '@tagaddod-design/react/styles/index.css';

// Import brand-specific token overrides - CRITICAL for theme switching
import '@tagaddod-design/tokens/brands/tagaddod.css';
import '@tagaddod-design/tokens/brands/greenpan.css';

// Import locale-specific CSS files (CRITICAL for font switching)
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
    
    // Set data attributes
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-locale', locale);
    root.setAttribute('dir', direction);
    
    // CRITICAL: Set lang attribute for font switching
    root.setAttribute('lang', locale);
    
    // Also set document lang and dir
    document.documentElement.lang = locale;
    document.dir = direction;
    
    console.log('Theme globals changed:', { 
      theme, 
      direction, 
      locale, 
      themeAttr: root.getAttribute('data-theme'),
      langAttr: root.getAttribute('lang'),
      dirAttr: root.getAttribute('dir')
    });
  }, [theme, direction, locale]);

  return React.createElement(
    ThemeProvider,
    {
      defaultTheme: theme,
      defaultDirection: direction,
      defaultLocale: locale
    },
    children
  );
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', 'Tokens', '*']
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'tagaddod';
      const direction = context.globals.direction || 'ltr';
      
      return React.createElement(
        ThemeWrapper,
        { theme, direction },
        React.createElement(
          'div',
          {
            style: {
              minHeight: '100vh',
              backgroundColor: 'var(--t-color-bg-primary, #f7f7f8)',
              padding: 'var(--t-space-600, 1.5rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--t-font-family-primary)',
              fontSize: 'var(--t-font-size-400, 1rem)',
              color: 'var(--t-color-text-primary, #16161d)',
              textAlign: direction === 'rtl' ? 'right' : 'left'
            }
          },
          React.createElement(Story)
        )
      );
    }
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
          { value: 'greenpan', title: 'GreenPan (Green)', icon: 'circlehollow' }
        ],
        showName: true,
        dynamicTitle: true
      }
    },
    direction: {
      name: 'Direction',
      description: 'Text direction and locale for RTL support',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'direction',
        items: [
          { value: 'ltr', title: 'LTR (English - Outfit)', icon: 'arrowleft' },
          { value: 'rtl', title: 'RTL (Arabic - Tajawal)', icon: 'arrowright' }
        ],
        showName: true,
        dynamicTitle: true
      }
    }
  }
};

export default preview;
