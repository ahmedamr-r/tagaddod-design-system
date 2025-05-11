import { create } from 'zustand';

interface TokenValue {
  value: string;
  type: string;
  description?: string;
}

interface TokenStore {
  sourceTokens: Record<string, any>;
  builtTokens: Record<string, string>;
  isLoading: boolean;
  isBuilding: boolean;
  error: string | null;
  loadSourceTokens: () => Promise<void>;
  loadBuiltTokens: () => Promise<void>;
  updateToken: (path: string, value: TokenValue) => void;
  deleteToken: (path: string) => void;
  saveTokens: () => Promise<void>;
  buildTokens: () => Promise<void>;
}

export const useTokenStore = create<TokenStore>((set, get) => {
  console.log('Creating token store...');
  
  return ({
    sourceTokens: {},
    builtTokens: {},
    isLoading: false,
    isBuilding: false,
    error: null,

  loadSourceTokens: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/tokens');
      const data = await response.json();
      
      console.log('API response:', data);
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to load tokens');
      }
      
      console.log('Setting sourceTokens:', data.tokens);
      
      set({ 
        sourceTokens: data.tokens,
        isLoading: false 
      });
    } catch (error) {
      console.error('Failed to load tokens:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Failed to load tokens',
        isLoading: false 
      });
    }
  },

  loadBuiltTokens: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/tokens?type=built');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to load built tokens');
      }
      
      set({ 
        builtTokens: data.tokens,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to load built tokens',
        isLoading: false 
      });
    }
  },

  updateToken: (path, value) => {
    const tokens = { ...get().sourceTokens };
    const pathParts = path.split('.');
    let current: any = tokens;

    // Handle the file prefix specially (e.g., 'primitives.color')
    if (pathParts.length >= 2) {
      const fileKey = `${pathParts[0]}.${pathParts[1]}`; // e.g., 'primitives.color'
      if (tokens[fileKey]) {
        current = tokens[fileKey];
        // Remove the file prefix from the path parts
        pathParts.splice(0, 2);
      }
    }

    // Navigate to the correct nested location
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }

    // Update the token value
    const lastKey = pathParts[pathParts.length - 1];
    current[lastKey] = value;
    
    // Force a state update
    set({ sourceTokens: { ...tokens } });
  },

  deleteToken: (path) => {
    const tokens = { ...get().sourceTokens };
    const pathParts = path.split('.');
    let current: any = tokens;

    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      if (!current[part]) return;
      current = current[part];
    }

    delete current[pathParts[pathParts.length - 1]];
    set({ sourceTokens: tokens });
  },

  saveTokens: async () => {
    set({ error: null });
    try {
      const tokensToSave = get().sourceTokens;
      console.log('Saving tokens:', JSON.stringify(tokensToSave, null, 2));
      
      const response = await fetch('/api/tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokens: tokensToSave }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save tokens');
      }
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to save tokens' 
      });
      throw error;
    }
  },

  buildTokens: async () => {
    set({ isBuilding: true, error: null });
    try {
      // First save the current tokens
      await get().saveTokens();
      
      // Then trigger the build
      const response = await fetch('/api/build', {
        method: 'POST',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Build failed');
      }
      
      // Reload built tokens after successful build
      await get().loadBuiltTokens();
      
      set({ isBuilding: false });
    } catch (error) {
      set({ 
        isBuilding: false,
        error: error instanceof Error ? error.message : 'Build failed' 
      });
      throw error;
    }
  },
  });
});
