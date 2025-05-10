import { create } from 'zustand';
import deepmerge from 'deepmerge';
import { TokenSet, TokenGroup, FlatToken } from '../types/token';

interface TokenStore {
  tokens: TokenSet;
  history: TokenSet[];
  currentIndex: number;
  selectedTheme: string;
  
  // Actions
  loadTokens: (tokens: TokenSet) => void;
  updateToken: (path: string[], value: any, source: 'primitives' | 'semantics' | 'theme') => void;
  addToken: (path: string[], token: any, source: 'primitives' | 'semantics' | 'theme') => void;
  deleteToken: (path: string[], source: 'primitives' | 'semantics' | 'theme') => void;
  undo: () => void;
  redo: () => void;
  setSelectedTheme: (theme: string) => void;
  flattenTokens: () => FlatToken[];
}

function setNestedValue(obj: any, path: string[], value: any): any {
  const [first, ...rest] = path;
  if (rest.length === 0) {
    return { ...obj, [first]: value };
  }
  return {
    ...obj,
    [first]: setNestedValue(obj[first] || {}, rest, value),
  };
}

function deleteNestedValue(obj: any, path: string[]): any {
  const [first, ...rest] = path;
  if (rest.length === 0) {
    const { [first]: deleted, ...remaining } = obj;
    return remaining;
  }
  return {
    ...obj,
    [first]: deleteNestedValue(obj[first] || {}, rest),
  };
}

function flattenTokenGroup(
  group: TokenGroup, 
  path: string[] = [], 
  source: 'primitives' | 'semantics' | 'theme',
  theme?: string
): FlatToken[] {
  const result: FlatToken[] = [];
  
  Object.entries(group).forEach(([key, value]) => {
    const currentPath = [...path, key];
    
    if (value && typeof value === 'object' && 'value' in value && 'type' in value) {
      // This is a token
      const id = currentPath.join('.');
      result.push({
        id,
        name: key,
        value: value.value,
        type: value.type as any,
        description: value.description,
        path: currentPath,
        source,
        theme,
        isReference: typeof value.value === 'string' && value.value.startsWith('{') && value.value.endsWith('}'),
      });
    } else if (value && typeof value === 'object') {
      // This is a nested group
      result.push(...flattenTokenGroup(value as TokenGroup, currentPath, source, theme));
    }
  });
  
  return result;
}

export const useTokenStore = create<TokenStore>((set, get) => ({
  tokens: {
    primitives: {},
    semantics: {},
    themes: {},
  },
  history: [],
  currentIndex: -1,
  selectedTheme: 'tagaddod',
  
  loadTokens: (tokens) => {
    set((state) => ({
      tokens,
      history: [...state.history.slice(0, state.currentIndex + 1), tokens],
      currentIndex: state.currentIndex + 1,
    }));
  },
  
  updateToken: (path, value, source) => {
    set((state) => {
      const newTokens = deepmerge({}, state.tokens);
      if (source === 'primitives') {
        newTokens.primitives = setNestedValue(newTokens.primitives, path, value);
      } else if (source === 'semantics') {
        newTokens.semantics = setNestedValue(newTokens.semantics, path, value);
      } else if (source === 'theme' && state.selectedTheme) {
        if (!newTokens.themes) newTokens.themes = {};
        if (!newTokens.themes[state.selectedTheme]) newTokens.themes[state.selectedTheme] = {};
        newTokens.themes[state.selectedTheme] = setNestedValue(
          newTokens.themes[state.selectedTheme],
          path,
          value
        );
      }
      
      return {
        tokens: newTokens,
        history: [...state.history.slice(0, state.currentIndex + 1), newTokens],
        currentIndex: state.currentIndex + 1,
      };
    });
  },
  
  addToken: (path, token, source) => {
    get().updateToken(path, token, source);
  },
  
  deleteToken: (path, source) => {
    set((state) => {
      const newTokens = deepmerge({}, state.tokens);
      if (source === 'primitives') {
        newTokens.primitives = deleteNestedValue(newTokens.primitives, path);
      } else if (source === 'semantics') {
        newTokens.semantics = deleteNestedValue(newTokens.semantics, path);
      } else if (source === 'theme' && state.selectedTheme && newTokens.themes) {
        newTokens.themes[state.selectedTheme] = deleteNestedValue(
          newTokens.themes[state.selectedTheme] || {},
          path
        );
      }
      
      return {
        tokens: newTokens,
        history: [...state.history.slice(0, state.currentIndex + 1), newTokens],
        currentIndex: state.currentIndex + 1,
      };
    });
  },
  
  undo: () => {
    set((state) => {
      if (state.currentIndex > 0) {
        return {
          tokens: state.history[state.currentIndex - 1],
          currentIndex: state.currentIndex - 1,
        };
      }
      return state;
    });
  },
  
  redo: () => {
    set((state) => {
      if (state.currentIndex < state.history.length - 1) {
        return {
          tokens: state.history[state.currentIndex + 1],
          currentIndex: state.currentIndex + 1,
        };
      }
      return state;
    });
  },
  
  setSelectedTheme: (theme) => {
    set({ selectedTheme: theme });
  },
  
  flattenTokens: () => {
    const state = get();
    const result: FlatToken[] = [];
    
    // Flatten primitives
    result.push(...flattenTokenGroup(state.tokens.primitives, [], 'primitives'));
    
    // Flatten semantics
    result.push(...flattenTokenGroup(state.tokens.semantics, [], 'semantics'));
    
    // Flatten themes
    if (state.tokens.themes) {
      Object.entries(state.tokens.themes).forEach(([themeName, themeTokens]) => {
        result.push(...flattenTokenGroup(themeTokens, [], 'theme', themeName));
      });
    }
    
    return result;
  },
}));
