import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@tagaddod/react';

const CSSDebugComponent = () => {
  const { theme, direction, locale } = useTheme();
  const [cssValues, setCssValues] = useState<Record<string, string>>({});
  const [attributes, setAttributes] = useState<Record<string, string>>({});

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const root = document.documentElement;
    
    // Get attributes
    const attrs: Record<string, string> = {};
    for (const attr of root.attributes) {
      attrs[attr.name] = attr.value;
    }
    setAttributes(attrs);
    
    // Get CSS values
    const values = {
      '--t-color-bg-fill-brand': computedStyle.getPropertyValue('--t-color-bg-fill-brand').trim(),
      '--t-font-family-primary': computedStyle.getPropertyValue('--t-font-family-primary').trim(),
      '--t-color-green-1200': computedStyle.getPropertyValue('--t-color-green-1200').trim(),
      '--t-color-purple-1200': computedStyle.getPropertyValue('--t-color-purple-1200').trim(),
    };
    setCssValues(values);
  }, [theme, direction, locale]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '14px' }}>
      <h2>CSS Debug Information</h2>
      
      <h3>Context Values</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Theme:</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{theme}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Direction:</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{direction}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Locale:</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{locale}</td>
          </tr>
        </tbody>
      </table>
      
      <h3>HTML Root Attributes</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {Object.entries(attributes).map(([key, value]) => (
            <tr key={key}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{key}:</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h3>CSS Custom Properties</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {Object.entries(cssValues).map(([key, value]) => (
            <tr key={key}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{key}:</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{value || '(empty)'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h3>Visual Test</h3>
      <div style={{
        width: '200px',
        height: '50px',
        backgroundColor: 'var(--t-color-bg-fill-brand)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        marginTop: '1rem'
      }}>
        Brand Color Test
      </div>
      
      <div style={{
        fontFamily: 'var(--t-font-family-primary)',
        fontSize: '24px',
        marginTop: '1rem'
      }}>
        Font Test: {locale === 'ar' ? 'نص عربي' : 'English Text'}
      </div>
      
      <h3>Expected CSS Selectors</h3>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', overflow: 'auto' }}>
{`[data-theme="${theme}"] {
  --t-color-bg-fill-brand: ${theme === 'greenpan' ? '#009f4d' : '#8c34ff'};
}

[data-locale="${locale}"] {
  --t-font-family-primary: ${locale === 'ar' ? 'Tajawal' : 'Outfit'}, sans-serif;
}`}
      </pre>
    </div>
  );
};

const meta = {
  title: 'Debug/CSS Properties',
  component: CSSDebugComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CSSDebugComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
