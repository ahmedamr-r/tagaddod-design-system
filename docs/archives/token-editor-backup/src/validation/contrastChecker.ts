import * as wcagContrast from 'wcag-contrast';

export interface ContrastResult {
  ratio: number;
  passes: {
    AA: boolean;
    AAA: boolean;
    AALarge: boolean;  // 3:1 for large text
    AAALarge: boolean; // 4.5:1 for large text
  };
  recommendation?: string;
}

export function checkContrast(foreground: string, background: string): ContrastResult {
  try {
    const ratio = wcagContrast.hex(foreground, background);
    
    const result: ContrastResult = {
      ratio,
      passes: {
        AA: ratio >= 4.5,      // Normal text WCAG AA
        AAA: ratio >= 7,       // Normal text WCAG AAA
        AALarge: ratio >= 3,   // Large text WCAG AA
        AAALarge: ratio >= 4.5 // Large text WCAG AAA
      }
    };
    
    // Add recommendations
    if (!result.passes.AALarge) {
      result.recommendation = 'This color combination fails WCAG requirements for all text sizes';
    } else if (!result.passes.AA) {
      result.recommendation = 'This combination only passes for large text (18pt or 14pt bold)';
    } else if (!result.passes.AAA) {
      result.recommendation = 'This combination passes AA but not AAA requirements';
    } else {
      result.recommendation = 'This combination passes all WCAG requirements';
    }
    
    return result;
  } catch (error) {
    return {
      ratio: 0,
      passes: {
        AA: false,
        AAA: false,
        AALarge: false,
        AAALarge: false
      },
      recommendation: 'Unable to calculate contrast ratio. Check color format.'
    };
  }
}

// Find all color tokens in a token structure
export function findColorTokens(tokens: any, path: string[] = []): { path: string; value: string }[] {
  const colorTokens: { path: string; value: string }[] = [];
  
  Object.entries(tokens).forEach(([key, value]: [string, any]) => {
    const currentPath = [...path, key];
    
    if (typeof value === 'object' && value !== null) {
      if (value.type === 'color' && value.value) {
        colorTokens.push({
          path: currentPath.join('.'),
          value: value.value
        });
      } else {
        // Recursively search nested objects
        colorTokens.push(...findColorTokens(value, currentPath));
      }
    }
  });
  
  return colorTokens;
}

// Check contrast for common text/background pairs
export function checkTokenContrast(tokens: any): { pair: [string, string]; result: ContrastResult }[] {
  const results: { pair: [string, string]; result: ContrastResult }[] = [];
  const colorTokens = findColorTokens(tokens);
  
  // Common semantic pairs to check
  const semanticPairs = [
    ['button.primary.text', 'button.primary.background'],
    ['button.secondary.text', 'button.secondary.background'],
    ['text.primary', 'background.primary'],
    ['text.secondary', 'background.secondary'],
    ['text.inverse', 'background.inverse'],
    ['error.text', 'error.background'],
    ['warning.text', 'warning.background'],
    ['success.text', 'success.background'],
    ['info.text', 'info.background'],
  ];
  
  // Find color values for semantic pairs
  semanticPairs.forEach(([foregroundPath, backgroundPath]) => {
    const foregroundToken = colorTokens.find(t => t.path.endsWith(foregroundPath));
    const backgroundToken = colorTokens.find(t => t.path.endsWith(backgroundPath));
    
    if (foregroundToken && backgroundToken) {
      results.push({
        pair: [foregroundPath, backgroundPath],
        result: checkContrast(foregroundToken.value, backgroundToken.value)
      });
    }
  });
  
  // Also check any explicit text/background pairs in the structure
  colorTokens.forEach(token => {
    if (token.path.includes('text') || token.path.includes('foreground')) {
      // Try to find corresponding background
      const backgroundPath = token.path
        .replace('text', 'background')
        .replace('foreground', 'background');
      
      const backgroundToken = colorTokens.find(t => t.path === backgroundPath);
      
      if (backgroundToken) {
        results.push({
          pair: [token.path, backgroundToken.path],
          result: checkContrast(token.value, backgroundToken.value)
        });
      }
    }
  });
  
  return results;
}
