// Load tokens from monorepo packages
import { TokenSet } from '../types/token';

export async function loadTokensFromPackages(): Promise<TokenSet> {
  try {
    // Try to import from package exports first
    const [primitives, semantics] = await Promise.all([
      import('@tagaddod/tokens/src/primitives.json').catch(() => ({})),
      import('@tagaddod/tokens/src/semantics.json').catch(() => ({})),
    ]);
    
    // Load theme files if available
    let themes = {};
    try {
      const [tagaddod, greenpan] = await Promise.all([
        import('@tagaddod/themes/src/tagaddod.json').catch(() => ({})),
        import('@tagaddod/themes/src/greenpan.json').catch(() => ({})),
      ]);
      
      themes = {
        tagaddod: tagaddod.default || tagaddod,
        greenpan: greenpan.default || greenpan,
      };
    } catch (e) {
      console.warn('Theme files not found, using empty themes');
    }
    
    return {
      primitives: primitives.default || primitives,
      semantics: semantics.default || semantics,
      themes,
    };
  } catch (error) {
    console.error('Error loading tokens from packages:', error);
    
    // Return empty structure if loading fails
    return {
      primitives: {},
      semantics: {},
      themes: {},
    };
  }
}

// Load from built files (flattened structure)
export async function loadTokensFromDist(): Promise<TokenSet> {
  try {
    // Import the built tokens
    const tokens = await import('@tagaddod/tokens');
    
    // The built tokens are flattened, so we need to reconstruct the structure
    const primitives: any = {
      color: {},
      space: {},
      radius: {},
      typography: {},
    };
    
    const semantics: any = {
      button: {
        primary: {},
      },
      feedback: {
        error: {},
        success: {},
      },
      surface: {},
    };
    
    // Map the flattened tokens back to structure
    Object.entries(tokens).forEach(([key, value]) => {
      // Skip default export
      if (key === 'default') return;
      
      // Parse color tokens
      if (key.startsWith('Color')) {
        const colorKey = key.replace('Color', '').toLowerCase();
        
        // Handle neutral colors specially
        if (colorKey.startsWith('neutral')) {
          const shade = colorKey.replace('neutral', '');
          if (!primitives.color.neutral) primitives.color.neutral = {};
          primitives.color.neutral[shade] = { value, type: 'color' };
        } else {
          // Handle other colors (blue500, green500, etc.)
          const match = colorKey.match(/([a-z]+)(\d+)/);
          if (match) {
            const [, color, shade] = match;
            if (!primitives.color[color]) primitives.color[color] = {};
            primitives.color[color][shade] = { value, type: 'color' };
          }
        }
      }
      
      // Parse space tokens
      if (key.startsWith('Space')) {
        const spaceKey = key.replace('Space', '').toLowerCase();
        primitives.space[spaceKey] = { value, type: 'dimension' };
      }
      
      // Parse radius tokens
      if (key.startsWith('Radius')) {
        const radiusKey = key.replace('Radius', '').toLowerCase();
        primitives.radius[radiusKey] = { value, type: 'dimension' };
      }
      
      // Parse typography tokens
      if (key.startsWith('Typography')) {
        const typographyKey = key.replace('Typography', '')
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
        primitives.typography[typographyKey] = { value, type: 'string' };
      }
      
      // Parse semantic tokens
      if (key.startsWith('Button')) {
        const buttonKey = key.replace('Button', '').toLowerCase();
        if (buttonKey.includes('primary')) {
          const prop = buttonKey.replace('primary', '').toLowerCase();
          semantics.button.primary[prop] = { value, type: 'color' };
        }
      }
      
      if (key.startsWith('Feedback')) {
        const feedbackKey = key.replace('Feedback', '').toLowerCase();
        const match = feedbackKey.match(/([a-z]+)([a-z]+)/);
        if (match) {
          const [, type, prop] = match;
          if (!semantics.feedback[type]) semantics.feedback[type] = {};
          semantics.feedback[type][prop] = { value, type: 'color' };
        }
      }
      
      if (key.startsWith('Surface')) {
        const surfaceKey = key.replace('Surface', '').toLowerCase();
        semantics.surface[surfaceKey] = { value, type: 'color' };
      }
    });
    
    return {
      primitives,
      semantics,
      themes: {},
    };
  } catch (error) {
    console.error('Error loading tokens from dist:', error);
    
    return {
      primitives: {},
      semantics: {},
      themes: {},
    };
  }
}
