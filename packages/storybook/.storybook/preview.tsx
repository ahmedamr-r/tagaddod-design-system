import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@tagaddod/react';

// Import styles using the full package paths
import '@tagaddod/tokens/css/tokens.css';
import '@tagaddod/react/styles/index.css';

// Create a wrapper component to handle global changes
const ThemeWrapper = ({ children, theme, direction }) => {
  const locale = direction === 'rtl' ? 'ar' : 'en';
  
  React.useEffect(() => {
    // Set data attributes
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-locale', locale);
    document.documentElement.setAttribute('dir', direction);
    
    console.log('Theme globals changed:', { theme, direction, locale });
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
            backgroundColor: 'var(--t-color-surface-background)', 
            padding: 'var(--t-space-600)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--t-font-family-primary)'
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
      description: 'Global theme for components',
      defaultValue: 'tagaddod',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'tagaddod', title: 'Tagaddod', icon: 'circle' },
          { value: 'greenpan', title: 'GreenPan', icon: 'circlehollow' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    direction: {
      name: 'Direction',
      description: 'Text direction for RTL support',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'direction',
        items: [
          { value: 'ltr', title: 'LTR', icon: 'arrowleft' },
          { value: 'rtl', title: 'RTL', icon: 'arrowright' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
