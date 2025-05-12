export interface TokenValue {
  value: string | number;
  type: string;
  description?: string;
}

export interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

export interface TokenSet {
  primitives: TokenGroup;
  semantics: TokenGroup;
  themes?: {
    [themeName: string]: TokenGroup;
  };
}

export type TokenType = 
  | 'color'
  | 'dimension'
  | 'font'
  | 'number'
  | 'string'
  | 'shadow'
  | 'gradient'
  | 'transition'
  | 'cubic-bezier';

export interface FlatToken {
  id: string;
  name: string;
  value: string | number;
  type: TokenType;
  description?: string;
  path: string[];
  source: 'primitives' | 'semantics' | 'theme';
  theme?: string;
  isReference?: boolean;
}
