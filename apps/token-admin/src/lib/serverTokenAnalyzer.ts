import { promises as fs } from 'fs';
import * as path from 'path';
import { TokenNode, TokenAnalysis, TokenRelationship, extractReferences, buildRelationships } from './tokenAnalyzer';

const TOKENS_DIR = path.join(process.cwd(), '../../packages/tokens');
const SOURCE_DIR = path.join(TOKENS_DIR, 'src');

/**
 * Parse a single token file and extract all tokens
 */
async function parseTokenFile(
  filePath: string, 
  category: 'core' | 'semantic' | 'brand' | 'locale',
  brand?: string,
  locale?: string
): Promise<TokenNode[]> {
  const tokens: TokenNode[] = [];
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const jsonContent = JSON.parse(content);
    
    function traverse(obj: any, pathSegments: string[] = []) {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = [...pathSegments, key];
        
        if (value && typeof value === 'object') {
          if ('$value' in value) {
            // This is a token
            const tokenPath = currentPath.join('.');
            const tokenId = `${category}:${brand || locale || 'default'}:${tokenPath}`;
            const references = extractReferences(value.$value);
            
            tokens.push({
              id: tokenId,
              name: key,
              path: tokenPath,
              value: value.$value,
              type: value.$type || 'unknown',
              description: value.$description,
              category,
              source: filePath,
              references,
              referencedBy: [],
              isReference: references.length > 0
            });
          } else {
            // Recurse deeper
            traverse(value, currentPath);
          }
        }
      }
    }
    
    traverse(jsonContent);
  } catch (error) {
    console.error(`Error parsing token file ${filePath}:`, error);
  }
  
  return tokens;
}

/**
 * Load all token files from the source directory
 */
async function loadAllTokenFiles(): Promise<TokenNode[]> {
  const allTokens: TokenNode[] = [];
  
  try {
    // Load core tokens
    const coreDir = path.join(SOURCE_DIR, 'core');
    const coreFiles = await fs.readdir(coreDir);
    
    for (const file of coreFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(coreDir, file);
        const tokens = await parseTokenFile(filePath, 'core');
        allTokens.push(...tokens);
      }
    }
    
    // Load semantic tokens
    const semanticDir = path.join(SOURCE_DIR, 'semantic');
    const semanticFiles = await fs.readdir(semanticDir);
    
    for (const file of semanticFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(semanticDir, file);
        const tokens = await parseTokenFile(filePath, 'semantic');
        allTokens.push(...tokens);
      }
    }
    
    // Load brand tokens
    const brandsDir = path.join(SOURCE_DIR, 'brands');
    const brands = await fs.readdir(brandsDir);
    
    for (const brand of brands) {
      const brandOverridesDir = path.join(brandsDir, brand, 'overrides');
      try {
        const brandFiles = await fs.readdir(brandOverridesDir);
        
        for (const file of brandFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(brandOverridesDir, file);
            const tokens = await parseTokenFile(filePath, 'brand', brand);
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error(`Error reading brand directory ${brand}:`, error);
      }
    }
    
    // Load locale tokens
    const localesDir = path.join(SOURCE_DIR, 'locales');
    const locales = await fs.readdir(localesDir);
    
    for (const locale of locales) {
      const localeDir = path.join(localesDir, locale);
      try {
        const localeFiles = await fs.readdir(localeDir);
        
        for (const file of localeFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(localeDir, file);
            const tokens = await parseTokenFile(filePath, 'locale', undefined, locale);
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error(`Error reading locale directory ${locale}:`, error);
      }
    }
    
  } catch (error) {
    console.error('Error loading token files:', error);
  }
  
  return allTokens;
}

/**
 * Analyze all tokens and their relationships
 */
export async function analyzeTokens(): Promise<TokenAnalysis> {
  const tokens = await loadAllTokenFiles();
  const relationships = buildRelationships(tokens);
  
  // Categorize tokens
  const categories = {
    core: tokens.filter(t => t.category === 'core'),
    semantic: tokens.filter(t => t.category === 'semantic'),
    brand: tokens.filter(t => t.category === 'brand'),
    locale: tokens.filter(t => t.category === 'locale')
  };
  
  return {
    nodes: tokens,
    relationships,
    categories
  };
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