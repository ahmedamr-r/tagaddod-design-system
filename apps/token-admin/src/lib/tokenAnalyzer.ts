// Client-side token analyzer - interfaces and utilities only
// File system operations moved to API routes

export interface TokenNode {
  id: string;
  name: string;
  path: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  source: string; // file path
  references?: string[]; // tokens this token references
  referencedBy?: string[]; // tokens that reference this token
  isReference: boolean;
}

export interface TokenRelationship {
  from: string; // token id that references
  to: string; // token id that is referenced
  type: 'core-to-semantic' | 'semantic-to-brand' | 'semantic-to-semantic' | 'core-to-brand';
}

export interface TokenAnalysis {
  nodes: TokenNode[];
  relationships: TokenRelationship[];
  categories: {
    core: TokenNode[];
    semantic: TokenNode[];
    brand: TokenNode[];
    locale: TokenNode[];
  };
}

/**
 * Extract token references from a value string
 * e.g., "{color.gray.1600}" -> ["color.gray.1600"]
 */
export function extractReferences(value: string | number): string[] {
  if (typeof value !== 'string') return [];
  
  const referenceRegex = /\{([^}]+)\}/g;
  const references: string[] = [];
  let match;
  
  while ((match = referenceRegex.exec(value)) !== null) {
    references.push(match[1]);
  }
  
  return references;
}

/**
 * Build relationships between tokens based on references
 */
export function buildRelationships(tokens: TokenNode[]): TokenRelationship[] {
  const relationships: TokenRelationship[] = [];
  const tokenMap = new Map<string, TokenNode>();
  
  // Create a map for quick token lookup by path
  tokens.forEach(token => {
    tokenMap.set(token.path, token);
  });
  
  // Build relationships
  tokens.forEach(token => {
    if (token.references && token.references.length > 0) {
      token.references.forEach(refPath => {
        const referencedToken = tokenMap.get(refPath);
        
        if (referencedToken) {
          // Add to referencedBy array
          if (!referencedToken.referencedBy) {
            referencedToken.referencedBy = [];
          }
          referencedToken.referencedBy.push(token.id);
          
          // Determine relationship type
          let relType: TokenRelationship['type'] = 'semantic-to-semantic';
          
          if (token.category === 'semantic' && referencedToken.category === 'core') {
            relType = 'core-to-semantic';
          } else if (token.category === 'brand' && referencedToken.category === 'semantic') {
            relType = 'semantic-to-brand';
          } else if (token.category === 'brand' && referencedToken.category === 'core') {
            relType = 'core-to-brand';
          }
          
          relationships.push({
            from: token.id,
            to: referencedToken.id,
            type: relType
          });
        }
      });
    }
  });
  
  return relationships;
}

/**
 * Find all tokens that reference a specific token
 */
export function findTokenReferences(tokenPath: string, analysis: TokenAnalysis): TokenNode[] {
  const token = analysis.nodes.find(t => t.path === tokenPath);
  if (!token || !token.referencedBy) return [];
  
  return analysis.nodes.filter(t => token.referencedBy!.includes(t.id));
}

/**
 * Find all tokens that a specific token references
 */
export function findTokenDependencies(tokenPath: string, analysis: TokenAnalysis): TokenNode[] {
  const token = analysis.nodes.find(t => t.path === tokenPath);
  if (!token || !token.references) return [];
  
  return analysis.nodes.filter(t => token.references!.includes(t.path));
}

/**
 * Get token hierarchy for a specific token (all its dependencies recursively)
 */
export function getTokenHierarchy(tokenPath: string, analysis: TokenAnalysis): TokenNode[] {
  const visited = new Set<string>();
  const hierarchy: TokenNode[] = [];
  
  function traverse(path: string) {
    if (visited.has(path)) return;
    visited.add(path);
    
    const token = analysis.nodes.find(t => t.path === path);
    if (!token) return;
    
    hierarchy.push(token);
    
    if (token.references) {
      token.references.forEach(refPath => traverse(refPath));
    }
  }
  
  traverse(tokenPath);
  return hierarchy;
}