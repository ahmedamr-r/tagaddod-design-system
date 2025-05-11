import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme, Button } from '@tagaddod/react';

interface DebugInfo {
  rootAttributes: Record<string, string>;
  computedStyles: Record<string, string>;
  activeCSSRule: string;
}

const DebugPanel = () => {
  const { theme, direction, locale } = useTheme();
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    rootAttributes: {},
    computedStyles: {},
    activeCSSRule: ''
  });

  useEffect(() => {
    const updateDebugInfo = () => {
      const root = document.documentElement;
      
      // Get all attributes on root element
      const attributes: Record<string, string> = {};
      for (const attr of root.attributes) {
        attributes[attr.name] = attr.value;
      }

      // Get computed styles
      const styles = getComputedStyle(root);
      const computedStyles = {
        '--t-font-family-primary': styles.getPropertyValue('--t-font-family-primary').trim(),
        '--t-color-action-primary-bg': styles.getPropertyValue('--t-color-action-primary-bg').trim(),
        '--t-color-text-primary': styles.getPropertyValue('--t-color-text-primary').trim(),
        '--t-color-surface-background': styles.getPropertyValue('--t-color-surface-background').trim(),
      };

      // Check which CSS rule is active
      const expectedSelector = `[data-theme="${theme}"][data-locale="${locale}"]`;
      
      setDebugInfo({
        rootAttributes: attributes,
        computedStyles,
        activeCSSRule: expectedSelector
      });
    };

    updateDebugInfo();
    
    // Use a small delay to ensure DOM updates are complete
    const timeoutId = setTimeout(updateDebugInfo, 100);
    
    return () => clearTimeout(timeoutId);
  }, [theme, direction, locale]);

  const expectedValues = {
    tagaddod: {
      en: {
        font: 'Outfit, sans-serif',
        primaryColor: '#8c34ff', // Purple for Tagaddod
      },
      ar: {
        font: 'Tajawal, sans-serif',
        primaryColor: '#8c34ff', // Purple for Tagaddod
      }
    },
    greenpan: {
      en: {
        font: 'Outfit, sans-serif',
        primaryColor: '#8c34ff', // Purple override for GreenPan
      },
      ar: {
        font: 'Tajawal, sans-serif',
        primaryColor: '#8c34ff', // Purple override for GreenPan
      }
    }
  };

  const expected = expectedValues[theme][locale];
  const isCorrect = {
    font: debugInfo.computedStyles['--t-font-family-primary'] === expected.font,
    color: debugInfo.computedStyles['--t-color-action-primary-bg'] === expected.primaryColor
  };

  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'monospace',
      fontSize: '14px',
      lineHeight: 1.6
    }}>
      <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'var(--t-color-surface-background-secondary)',
        marginBottom: '20px'
      }}>
        <h2 style={{ marginTop: 0 }}>Theme System Debug Panel</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <section>
            <h3>Current Context Values</h3>
            <div>Theme: <strong>{theme}</strong></div>
            <div>Direction: <strong>{direction}</strong></div>
            <div>Locale: <strong>{locale || '(undefined)'}</strong></div>
          </section>

          <section>
            <h3>Document Attributes</h3>
            {Object.entries(debugInfo.rootAttributes).map(([key, value]) => (
              <div key={key}>
                <code>{key}</code>: <strong>{value}</strong>
              </div>
            ))}
          </section>

          <section>
            <h3>Expected CSS Selector</h3>
            <code>{debugInfo.activeCSSRule}</code>
          </section>

          <section>
            <h3>CSS Variables</h3>
            {Object.entries(debugInfo.computedStyles).map(([key, value]) => (
              <div key={key} style={{ 
                marginBottom: '5px',
                color: isCorrect[key.includes('font') ? 'font' : 'color'] === false ? 'red' : 'inherit'
              }}>
                <code>{key}</code>: <strong>{value || '(not set)'}</strong>
                {key.includes('font') && (
                  <span style={{ marginLeft: '10px', color: isCorrect.font ? 'green' : 'red' }}>
                    (Expected: {expected.font})
                  </span>
                )}
                {key.includes('action-primary-bg') && (
                  <span style={{ marginLeft: '10px', color: isCorrect.color ? 'green' : 'red' }}>
                    (Expected: {expected.primaryColor})
                  </span>
                )}
              </div>
            ))}
          </section>

          <section>
            <h3>Test Elements</h3>
            <div style={{ 
              fontFamily: 'var(--t-font-family-primary)', 
              fontSize: '24px',
              marginBottom: '10px'
            }}>
              Font Test: {locale === 'ar' ? 'نص عربي تجريبي' : 'English Test Text'}
            </div>
            <Button variant="primary">
              Primary Button Test
            </Button>
            <div style={{ marginTop: '10px' }}>
              <div style={{
                display: 'inline-block',
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--t-color-action-primary-bg)',
                borderRadius: '4px',
                marginRight: '10px'
              }} />
              <span>Primary Action Color</span>
            </div>
          </section>

          <section>
            <h3>Status</h3>
            <div style={{ 
              padding: '10px',
              borderRadius: '4px',
              backgroundColor: (isCorrect.font && isCorrect.color) ? '#d4edda' : '#f8d7da',
              color: (isCorrect.font && isCorrect.color) ? '#155724' : '#721c24'
            }}>
              {(isCorrect.font && isCorrect.color) ? 
                '✓ Theme and locale are applying correctly' : 
                '✗ Theme or locale not applying correctly'}
            </div>
          </section>
        </div>
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>Instructions</h3>
        <ol>
          <li>Use the Theme toolbar to switch between "Tagaddod" and "GreenPan"</li>
          <li>Use the Direction toolbar to switch between "LTR" and "RTL"</li>
          <li>When switching to RTL, the locale should automatically change to "ar"</li>
          <li>When switching to LTR, the locale should automatically change to "en"</li>
          <li>Font family should change between Outfit (English) and Tajawal (Arabic)</li>
          <li>GreenPan should show purple primary color (override test)</li>
        </ol>
      </div>
    </div>
  );
};

const meta = {
  title: 'Theme System/Debug Panel',
  component: DebugPanel,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DebugPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};