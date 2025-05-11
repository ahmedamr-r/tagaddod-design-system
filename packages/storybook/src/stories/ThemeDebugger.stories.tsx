import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@tagaddod/react';

const ThemeDebugger = () => {
  const { theme, direction, locale } = useTheme();
  const [debugInfo, setDebugInfo] = useState({
    rootAttributes: {},
    computedStyles: {}
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Get all attributes on root element
    const attributes = {};
    for (const attr of root.attributes) {
      attributes[attr.name] = attr.value;
    }

    // Get computed styles
    const styles = getComputedStyle(root);
    const computedStyles = {
      '--t-font-family-primary': styles.getPropertyValue('--t-font-family-primary').trim(),
      '--t-color-action-primary-bg': styles.getPropertyValue('--t-color-action-primary-bg').trim(),
    };

    setDebugInfo({
      rootAttributes: attributes,
      computedStyles
    });
  }, [theme, direction, locale]);

  return (
    <div style={{ 
      padding: 'var(--t-space-400)',
      backgroundColor: 'var(--t-color-surface-background-secondary)',
      borderRadius: 'var(--t-border-radius-200)',
      fontFamily: 'monospace',
      fontSize: 'var(--t-font-size-400)',
      lineHeight: '1.6'
    }}>
      <h2 style={{ marginTop: 0 }}>Debug Information</h2>
      
      <h3>Context Values</h3>
      <div>Theme: <strong>{theme}</strong></div>
      <div>Direction: <strong>{direction}</strong></div>
      <div>Locale: <strong>{locale}</strong></div>
      
      <h3>Root Element Attributes</h3>
      {Object.entries(debugInfo.rootAttributes).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
      
      <h3>CSS Variable Values</h3>
      {Object.entries(debugInfo.computedStyles).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value || '(not set)'}
        </div>
      ))}
      
      <h3>Expected Selector</h3>
      <div>[data-theme="{theme}"][data-locale="{locale}"]</div>
      
      <h3>Font Test</h3>
      <div style={{ fontFamily: 'var(--t-font-family-primary)', fontSize: '2rem' }}>
        This is test text - {locale === 'ar' ? 'Arabic font' : 'English font'}
      </div>
      
      <div style={{ marginTop: 'var(--t-space-200)' }}>
        Actual font applied: <span style={{ fontFamily: 'var(--t-font-family-primary)', fontWeight: 'bold' }}>Sample Text</span>
      </div>
    </div>
  );
};

const meta = {
  title: 'Theme System/Debugger',
  component: ThemeDebugger,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeDebugger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Story to test actual theme application
export const WithButton: Story = {
  render: () => {
    const { theme, direction, locale } = useTheme();
    
    return (
      <div style={{ textAlign: 'center' }}>
        <ThemeDebugger />
        <div style={{ marginTop: 'var(--t-space-400)' }}>
          <button
            style={{
              padding: 'var(--t-space-300) var(--t-space-600)',
              backgroundColor: 'var(--t-color-action-primary-bg)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--t-border-radius-200)',
              fontFamily: 'var(--t-font-family-primary)',
              fontSize: 'var(--t-font-size-400)',
              cursor: 'pointer'
            }}
          >
            Test Button
          </button>
        </div>
        <div style={{ 
          marginTop: 'var(--t-space-200)',
          fontSize: 'var(--t-font-size-300)',
          color: 'var(--t-color-text-secondary)'
        }}>
          Switch brands and directions in the toolbar to see changes
        </div>
      </div>
    );
  },
};