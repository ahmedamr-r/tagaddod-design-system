import type { Meta, StoryObj } from '@storybook/react';
import { Button, useTheme } from '@tagaddod/react';
import React, { useEffect, useState } from 'react';

const AttributeDebugger = () => {
  const { theme, direction, locale } = useTheme();
  const [attributes, setAttributes] = useState<Record<string, string>>({});
  const [fontFamily, setFontFamily] = useState('');
  const [actionColor, setActionColor] = useState('');
  
  useEffect(() => {
    const root = document.documentElement;
    const attrs: Record<string, string> = {};
    
    // Get all attributes on root element
    for (let i = 0; i < root.attributes.length; i++) {
      const attr = root.attributes[i];
      attrs[attr.name] = attr.value;
    }
    
    setAttributes(attrs);
    
    // Get computed style values
    const computedStyle = getComputedStyle(root);
    setFontFamily(computedStyle.getPropertyValue('--t-font-family-primary').trim());
    setActionColor(computedStyle.getPropertyValue('--t-color-action-primary-bg').trim());
    
    // Log for debugging
    console.log('Current attributes:', attrs);
    console.log('Current font-family:', computedStyle.getPropertyValue('--t-font-family-primary'));
    console.log('Current action color:', computedStyle.getPropertyValue('--t-color-action-primary-bg'));
  }, [theme, direction, locale]);
  
  return (
    <div style={{ 
      padding: 'var(--t-space-400)',
      backgroundColor: 'var(--t-color-surface-background-secondary)',
      borderRadius: 'var(--t-border-radius-100)',
      marginBottom: 'var(--t-space-400)',
      fontFamily: 'monospace'
    }}>
      <h3>Debug Information</h3>
      
      <div style={{ marginBottom: 'var(--t-space-400)' }}>
        <h4>Context Values</h4>
        <div>Theme: <strong>{theme}</strong></div>
        <div>Direction: <strong>{direction}</strong></div>
        <div>Locale: <strong>{locale || 'undefined'}</strong></div>
      </div>
      
      <div style={{ marginBottom: 'var(--t-space-400)' }}>
        <h4>Root Element Attributes</h4>
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
      
      <div style={{ marginBottom: 'var(--t-space-400)' }}>
        <h4>CSS Variable Values</h4>
        <div>--t-font-family-primary: <strong>{fontFamily}</strong></div>
        <div>--t-color-action-primary-bg: <strong>{actionColor}</strong></div>
      </div>
      
      <div style={{ marginBottom: 'var(--t-space-400)' }}>
        <h4>Expected Selector</h4>
        <code>[data-theme="{theme}"][data-locale="{locale || 'undefined'}"]</code>
      </div>
      
      <div>
        <h4>Font Test</h4>
        <div 
          style={{ 
            fontFamily: 'var(--t-font-family-primary)',
            fontSize: 'var(--t-font-size-500)',
            marginBottom: 'var(--t-space-200)'
          }}
        >
          {locale === 'ar' ? 'هذا نص اختباري - الخط العربي' : 'This is test text - English font'}
        </div>
        <div>
          Actual font applied: <strong style={{ fontFamily: 'var(--t-font-family-primary)' }}>Sample Text</strong>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Debug/Theme System',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DebugAttributes: Story = {
  render: () => (
    <div>
      <AttributeDebugger />
      <Button variant="primary">Test Button</Button>
      
      <div style={{ marginTop: 'var(--t-space-600)' }}>
        <p>Instructions:</p>
        <ol>
          <li>Switch between Tagaddod and GreenPan themes using the toolbar</li>
          <li>Switch between LTR and RTL directions using the toolbar</li>
          <li>Check the debug information above to see what's actually being set</li>
        </ol>
      </div>
    </div>
  ),
};
