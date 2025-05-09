import { addons } from '@storybook/preview-api';

const channel = addons.getChannel();
const STYLE_ID = 'tds-token-overrides';

interface TokenValue {
  value?: any;
  [key: string]: any;
}

function flattenTokens(tokens: Record<string, any>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    const currentKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      if (value.hasOwnProperty('value')) {
        // This is a token with a value property
        result[`--t-${currentKey}`] = value.value;
      } else {
        // This is a nested object, recurse
        Object.assign(result, flattenTokens(value, currentKey));
      }
    } else {
      // Direct value
      result[`--t-${currentKey}`] = value;
    }
  });
  
  return result;
}

function applyTokens(tokens: Record<string, any>) {
  const flatTokens = flattenTokens(tokens);
  const cssVars = Object.entries(flatTokens)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ');
  
  let styleEl = document.getElementById(STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    document.head.appendChild(styleEl);
  }
  
  styleEl.textContent = `:root {\n  ${cssVars}\n}`;
}

// Load cached token overrides on startup
const cached = localStorage.getItem('tds-token-overrides');
if (cached) {
  try {
    const tokens = JSON.parse(cached);
    applyTokens(tokens);
  } catch (error) {
    console.error('Failed to parse cached tokens:', error);
  }
}

// Listen for token updates
channel.on('tds/tokens/update', applyTokens);
