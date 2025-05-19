import React, { useEffect, useState } from 'react';
import { useChannel } from '@storybook/manager-api';
import { TokenManager } from './TokenManager';

export const ThemeAwareTokenManager: React.FC<{ active?: boolean }> = ({ active }) => {
  const [currentTheme, setCurrentTheme] = useState<'tagaddod' | 'greenpan'>('tagaddod');
  const emit = useChannel({
    'storybook/globals/update': ({ globals }) => {
      if (globals?.brand) {
        setCurrentTheme(globals.brand);
      }
    }
  });

  // Load base theme tokens based on current theme
  useEffect(() => {
    const baseThemeTokens = {
      tagaddod: {
        color: {
          green: { '500': { value: '#25b24b', type: 'color', comment: 'Tagaddod primary' } }
        },
        button: {
          primary: {
            background: { value: '{color.green.500}', type: 'color' },
            text: { value: '{color.neutral.50}', type: 'color' }
          }
        }
      },
      greenpan: {
        color: {
          green: { '500': { value: '#009f4d', type: 'color', comment: 'GreenPan primary' } }
        },
        button: {
          primary: {
            background: { value: '{color.green.500}', type: 'color' },
            text: { value: '{color.neutral.50}', type: 'color' }
          }
        }
      }
    };

    // Merge theme-specific tokens with existing ones
    const existingTokens = localStorage.getItem('tds-token-overrides');
    if (existingTokens) {
      try {
        const parsed = JSON.parse(existingTokens);
        const themeTokens = baseThemeTokens[currentTheme];
        
        // Don't override user modifications, just ensure theme tokens exist
        const merged = { ...themeTokens, ...parsed };
        localStorage.setItem('tds-token-overrides', JSON.stringify(merged));
        
        // Notify the preview about theme-aware tokens
        emit('tds/tokens/update', merged);
      } catch (e) {
        console.error('Failed to merge theme tokens:', e);
      }
    }
  }, [currentTheme, emit]);

  return <TokenManager active={active} />;
};
