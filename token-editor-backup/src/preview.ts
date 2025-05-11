import { addons } from '@storybook/preview-api';

const channel = addons.getChannel();
const STYLE_ID = 'tds-token-overrides';

export interface TokenValue {
  value?: any;
  type?: string;
  description?: string;
  [key: string]: any;
}

interface TokenCache {
  tokens: Record<string, any>;
  cssVars: Record<string, string>;
}

// Cache to track previous state and optimize updates
let tokenCache: TokenCache = {
  tokens: {},
  cssVars: {}
};

function resolveTokenReferences(tokens: Record<string, any>, value: string): string {
  // Resolve token references like {color.blue.500}
  if (typeof value === 'string' && value.match(/^\{(.+)\}$/)) {
    const ref = value.slice(1, -1);
    const parts = ref.split('.');
    let current = tokens;
    
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return value; // Return original if reference not found
      }
    }
    
    // If we found a token object with a value property, return the value
    if (current && typeof current === 'object' && 'value' in current) {
      return resolveTokenReferences(tokens, current.value);
    }
    
    // If current is a string, return it; otherwise convert to string
    return typeof current === 'string' ? current : String(current);
  }
  
  return value;
}

function flattenTokens(tokens: Record<string, any>, prefix = '', allTokens = tokens): Record<string, string> {
  const result: Record<string, string> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    const currentKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      if (value.hasOwnProperty('value')) {
        // This is a token with a value property
        const resolvedValue = resolveTokenReferences(allTokens, value.value);
        result[`--t-${currentKey}`] = resolvedValue;
      } else {
        // This is a nested object, recurse
        Object.assign(result, flattenTokens(value, currentKey, allTokens));
      }
    } else {
      // Direct value
      result[`--t-${currentKey}`] = String(value);
    }
  });
  
  return result;
}

function applyTokens(tokens: Record<string, any>) {
  const flatTokens = flattenTokens(tokens);
  
  // Check if we need to update (optimize by comparing with cache)
  const hasChanges = Object.keys(flatTokens).some(key => 
    tokenCache.cssVars[key] !== flatTokens[key]
  ) || Object.keys(tokenCache.cssVars).length !== Object.keys(flatTokens).length;
  
  if (!hasChanges) {
    return; // No changes, skip update
  }
  
  // Update cache
  tokenCache = {
    tokens: { ...tokens },
    cssVars: { ...flatTokens }
  };
  
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

// Error boundary function to catch and report errors
function safeApplyTokens(tokens: Record<string, any>) {
  try {
    applyTokens(tokens);
  } catch (error) {
    console.error('Error applying tokens:', error);
    // Optionally notify the manager about the error
    channel.emit('tds/tokens/error', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}

// Load cached token overrides on startup
const cached = localStorage.getItem('tds-token-overrides');
if (cached) {
  try {
    const tokens = JSON.parse(cached);
    safeApplyTokens(tokens);
  } catch (error) {
    console.error('Failed to parse cached tokens:', error);
  }
}

// Listen for token updates
channel.on('tds/tokens/update', safeApplyTokens);

// Export the cache for testing purposes
export { tokenCache };
