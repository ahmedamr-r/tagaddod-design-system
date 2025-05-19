export interface TokenValue {
  value: string | number;
  type?: string;
  description?: string;
  comment?: string;
}

export interface TokenStructure {
  [key: string]: TokenValue | TokenStructure;
}

export type TokenType = 
  | 'color' 
  | 'dimension' 
  | 'fontFamily' 
  | 'fontWeight' 
  | 'duration' 
  | 'cubicBezier' 
  | 'number' 
  | 'strokeStyle' 
  | 'border' 
  | 'transition' 
  | 'shadow' 
  | 'gradient' 
  | 'typography' 
  | 'spacing'
  | 'radius';

export interface ValidationResult {
  valid: boolean;
  errors?: string[];
}

export interface ContrastCheck {
  pair: [string, string];
  result: {
    ratio: number;
    passes: {
      AA: boolean;
      AAA: boolean;
      AALarge: boolean;
      AAALarge: boolean;
    };
    recommendation?: string;
  };
}
