import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Button } from '../components/Button/Button';

// Component to display and change theme state
const ThemeDemo = () => {
  const { theme, setTheme, direction, setDirection, locale, setLocale } = useTheme();
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '20px',
      border: '1px solid var(--t-color-border-subtle)',
      borderRadius: 'var(--t-border-radius-200)',
      background: 'var(--t-color-background-subtle)'
    }}>
      <div>
        <h3 style={{ marginTop: 0 }}>Current Settings</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Theme:</strong> {theme}</li>
          <li><strong>Direction:</strong> {direction}</li>
          <li><strong>Locale:</strong> {locale}</li>
        </ul>
      </div>
      
      <div>
        <h3>Theme Control</h3>
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
        <h3>Direction Control</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button 
            variant={direction === 'ltr' ? 'primary' : 'secondary'} 
            onClick={() => setDirection('ltr')}
          >
            LTR (English)
          </Button>
          <Button 
            variant={direction === 'rtl' ? 'primary' : 'secondary'} 
            onClick={() => setDirection('rtl')}
          >
            RTL (Arabic)
          </Button>
        </div>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <h3>Sample UI in current theme</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
        </div>
      </div>
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
      description: 'Initial text direction',
    },
    defaultLocale: {
      control: 'radio',
      options: ['en', 'ar'],
      description: 'Initial locale',
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

export const TagaddodTheme: Story = {
  args: {
    defaultTheme: 'tagaddod',
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
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const RtlDirection: Story = {
  args: {
    defaultDirection: 'rtl',
    defaultLocale: 'ar',
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
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
};

// Demonstrates nesting theme providers
export const NestedThemeProviders: Story = {
  render: () => (
    <ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
      <div style={{ padding: '20px', border: '1px solid var(--t-color-border-subtle)', marginBottom: '20px' }}>
        <h3>Outer Provider (Tagaddod, LTR)</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary">Tagaddod Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid var(--t-color-border-subtle)' }}>
          <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
            <h3 style={{ textAlign: 'right' }}>Inner Provider (GreenPan, RTL)</h3>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="primary">زر خضر</Button>
              <Button variant="secondary">زر ثانوي</Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// Example with useThemeClasses hook for CSS class usage
export const WithThemeClasses: Story = {
  render: () => {
    const ThemeClassesDemo = () => {
      const { theme, setTheme, themeClass, dirClass, localeClass, isRTL } = useTheme();
      
      return (
        <div style={{ padding: '20px', border: '1px solid var(--t-color-border-subtle)' }}>
          <h3>Theme Classes</h3>
          <div>
            <p>Current theme classes:</p>
            <ul>
              <li><code>themeClass</code>: <strong>{themeClass}</strong></li>
              <li><code>dirClass</code>: <strong>{dirClass}</strong></li>
              <li><code>localeClass</code>: <strong>{localeClass}</strong></li>
              <li><code>isRTL</code>: <strong>{isRTL ? 'true' : 'false'}</strong></li>
            </ul>
          </div>
          
          <div style={{ marginTop: '16px' }}>
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
