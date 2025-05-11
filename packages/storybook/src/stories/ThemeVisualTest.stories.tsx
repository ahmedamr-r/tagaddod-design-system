import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, useTheme } from '@tagaddod/react';

const ThemeVisualTest = () => {
  const { theme, direction, locale } = useTheme();
  
  return (
    <div style={{ 
      padding: 'var(--t-space-800)',
      backgroundColor: 'var(--t-color-surface-background)',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'var(--t-color-surface-background-secondary)',
        padding: 'var(--t-space-600)',
        borderRadius: 'var(--t-border-radius-200)',
        marginBottom: 'var(--t-space-600)'
      }}>
        <h2 style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          fontSize: 'var(--t-font-size-800)',
          color: 'var(--t-color-text-primary)',
          marginTop: 0
        }}>
          Current Theme: {theme}
        </h2>
        <p style={{ fontSize: 'var(--t-font-size-600)' }}>
          Current Direction: {direction}
        </p>
        <p style={{ fontSize: 'var(--t-font-size-600)' }}>
          Current Locale: {locale}
        </p>
        <p style={{ 
          fontFamily: 'var(--t-font-family-primary)',
          fontSize: 'var(--t-font-size-600)',
          fontWeight: 'var(--t-font-weight-bold)'
        }}>
          Primary Font: {locale === 'ar' ? 'Tajawal' : 'Outfit'}, sans-serif
        </p>
      </div>

      {/* Font Preview */}
      <div style={{ 
        marginBottom: 'var(--t-space-800)',
        fontFamily: 'var(--t-font-family-primary)',
        fontSize: '3rem',
        fontWeight: 'var(--t-font-weight-bold)'
      }}>
        {locale === 'ar' ? 'هذا نص عربي - أهلاً وسهلاً' : 'This is English text - Welcome'}
      </div>

      {/* Color Preview */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--t-space-400)', 
        justifyContent: 'center',
        marginBottom: 'var(--t-space-800)'
      }}>
        <div style={{
          width: '150px',
          height: '150px',
          backgroundColor: 'var(--t-color-action-primary-bg)',
          borderRadius: 'var(--t-border-radius-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          Primary Action
        </div>
        <div style={{
          width: '150px',
          height: '150px',
          backgroundColor: 'var(--t-color-surface-background-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--t-color-text-primary)',
          fontWeight: 'bold'
        }}>
          Secondary
        </div>
      </div>

      {/* Button Test */}
      <Button variant="primary" size="lg">
        {locale === 'ar' ? 'زر اختبار' : 'Test Button'}
      </Button>
      
      <div style={{ marginTop: 'var(--t-space-800)', fontSize: 'var(--t-font-size-400)' }}>
        <p>Try switching between brands (Tagaddod/GreenPan) and directions (LTR/RTL)</p>
        <p>The theme colors and fonts should update automatically</p>
      </div>
    </div>
  );
};

const meta = {
  title: 'Theme System/Visual Test',
  component: ThemeVisualTest,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemeVisualTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Story to debug computed styles
export const ComputedStylesDebug: Story = {
  render: () => {
    const [styles, setStyles] = React.useState<Record<string, string>>({});
    
    React.useEffect(() => {
      const root = document.documentElement;
      const computedStyles = getComputedStyle(root);
      
      const tokenValues = {
        '--t-font-family-primary': computedStyles.getPropertyValue('--t-font-family-primary').trim(),
        '--t-color-action-primary-bg': computedStyles.getPropertyValue('--t-color-action-primary-bg').trim(),
        '--t-color-surface-background': computedStyles.getPropertyValue('--t-color-surface-background').trim(),
        '--t-font-size-400': computedStyles.getPropertyValue('--t-font-size-400').trim(),
        '--t-font-weight-semibold': computedStyles.getPropertyValue('--t-font-weight-semibold').trim(),
      };
      
      setStyles(tokenValues);
    }, []);
    
    return (
      <div style={{ padding: 'var(--t-space-600)' }}>
        <h2>Computed CSS Variables</h2>
        <pre style={{ 
          backgroundColor: 'var(--t-color-surface-background-secondary)',
          padding: 'var(--t-space-400)',
          borderRadius: 'var(--t-border-radius-200)',
          overflow: 'auto'
        }}>
          {JSON.stringify(styles, null, 2)}
        </pre>
        
        <div style={{ marginTop: 'var(--t-space-400)' }}>
          <h3>Root Element Attributes</h3>
          <div id="attributesList"></div>
        </div>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            const root = document.documentElement;
            const attrs = Array.from(root.attributes).map(attr => \`\${attr.name}="\${attr.value}"\`);
            document.getElementById('attributesList').innerHTML = attrs.join('<br/>');
          `
        }} />
      </div>
    );
  },
};
