import { promises as fs } from 'fs';
import * as path from 'path';
import { TokenContext } from '@/components/TokenContextSwitcher';
import { extractReferences } from './tokenAnalyzer';

const TOKENS_DIR = path.join(process.cwd(), '../../packages/tokens');
const SOURCE_DIR = path.join(TOKENS_DIR, 'src');

export interface EnhancedToken {
  id: string;
  path: string;
  name: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  subcategory?: string; // e.g., 'color', 'spacing', 'typography'
  source: string; // file path
  brand?: string;
  locale?: string;
  references?: string[];
  referencedBy?: string[];
  isReference: boolean;
  originalPath: string; // path within the JSON structure
}

export interface EnhancedTokenSet {
  tokens: EnhancedToken[];
  metadata: {
    totalTokens: number;
    categoryCounts: Record<string, number>;
    brandCounts: Record<string, number>;
    localeCounts: Record<string, number>;
    lastUpdated: Date;
  };
}

/**
 * Determine subcategory from token path
 */
function getSubcategory(tokenPath: string): string {
  const parts = tokenPath.toLowerCase().split('.');
  
  // Common patterns
  if (parts.includes('color') || parts[0] === 'color') return 'color';
  if (parts.includes('space') || parts.includes('spacing') || parts[0] === 'space') return 'spacing';
  if (parts.includes('font') || parts.includes('typography')) return 'typography';
  if (parts.includes('border')) return 'border';
  if (parts.includes('radius')) return 'border-radius';
  if (parts.includes('shadow')) return 'shadow';
  if (parts.includes('motion') || parts.includes('duration')) return 'motion';
  if (parts.includes('size')) return 'sizing';
  if (parts.includes('z') && parts.includes('index')) return 'z-index';
  
  return 'misc';
}

/**
 * Parse a single token file and extract all tokens
 */
async function parseEnhancedTokenFile(
  filePath: string,
  category: 'core' | 'semantic' | 'brand' | 'locale',
  brand?: string,
  locale?: string
): Promise<EnhancedToken[]> {
  const tokens: EnhancedToken[] = [];
  
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
            const subcategory = getSubcategory(tokenPath);
            
            tokens.push({
              id: tokenId,
              path: tokenPath,
              name: key,
              value: value.$value,
              type: value.$type || 'unknown',
              description: value.$description,
              category,
              subcategory,
              source: filePath,
              brand,
              locale,
              references,
              referencedBy: [],
              isReference: references.length > 0,
              originalPath: tokenPath
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
 * Load tokens based on context filters
 */
export async function loadTokensByContext(context: TokenContext): Promise<EnhancedTokenSet> {
  const allTokens: EnhancedToken[] = [];
  
  try {
    // Load core tokens
    if (context.includeCore) {
      const coreDir = path.join(SOURCE_DIR, 'core');
      try {
        const coreFiles = await fs.readdir(coreDir);
        
        for (const file of coreFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(coreDir, file);
            const tokens = await parseEnhancedTokenFile(filePath, 'core');
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error('Error loading core tokens:', error);
      }
    }
    
    // Load semantic tokens
    if (context.includeSemantic) {
      const semanticDir = path.join(SOURCE_DIR, 'semantic');
      try {
        const semanticFiles = await fs.readdir(semanticDir);
        
        for (const file of semanticFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(semanticDir, file);
            const tokens = await parseEnhancedTokenFile(filePath, 'semantic');
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error('Error loading semantic tokens:', error);
      }
    }
    
    // Load brand tokens
    if (context.includeBrand && context.brand !== 'common') {
      const brandOverridesDir = path.join(SOURCE_DIR, 'brands', context.brand, 'overrides');
      try {
        const brandFiles = await fs.readdir(brandOverridesDir);
        
        for (const file of brandFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(brandOverridesDir, file);
            const tokens = await parseEnhancedTokenFile(filePath, 'brand', context.brand);
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error(`Error loading brand tokens for ${context.brand}:`, error);
      }
    }
    
    // Load all brand tokens if brand is 'common' and includeBrand is true
    if (context.includeBrand && context.brand === 'common') {
      const brandsDir = path.join(SOURCE_DIR, 'brands');
      try {
        const brands = await fs.readdir(brandsDir);
        
        for (const brand of brands) {
          const brandOverridesDir = path.join(brandsDir, brand, 'overrides');
          try {
            const brandFiles = await fs.readdir(brandOverridesDir);
            
            for (const file of brandFiles) {
              if (file.endsWith('.json')) {
                const filePath = path.join(brandOverridesDir, file);
                const tokens = await parseEnhancedTokenFile(filePath, 'brand', brand);
                allTokens.push(...tokens);
              }
            }
          } catch (error) {
            console.error(`Error loading brand directory ${brand}:`, error);
          }
        }
      } catch (error) {
        console.error('Error loading brands directory:', error);
      }
    }
    
    // Load locale tokens
    if (context.includeLocale && context.locale !== 'none') {
      const localeDir = path.join(SOURCE_DIR, 'locales', context.locale);
      try {
        const localeFiles = await fs.readdir(localeDir);
        
        for (const file of localeFiles) {
          if (file.endsWith('.json')) {
            const filePath = path.join(localeDir, file);
            const tokens = await parseEnhancedTokenFile(filePath, 'locale', undefined, context.locale);
            allTokens.push(...tokens);
          }
        }
      } catch (error) {
        console.error(`Error loading locale tokens for ${context.locale}:`, error);
      }
    }
    
    // Load all locale tokens if locale is 'none' and includeLocale is true
    if (context.includeLocale && context.locale === 'none') {
      const localesDir = path.join(SOURCE_DIR, 'locales');
      try {
        const locales = await fs.readdir(localesDir);
        
        for (const locale of locales) {
          const localeDir = path.join(localesDir, locale);
          try {
            const localeFiles = await fs.readdir(localeDir);
            
            for (const file of localeFiles) {
              if (file.endsWith('.json')) {
                const filePath = path.join(localeDir, file);
                const tokens = await parseEnhancedTokenFile(filePath, 'locale', undefined, locale);
                allTokens.push(...tokens);
              }
            }
          } catch (error) {
            console.error(`Error loading locale directory ${locale}:`, error);
          }
        }
      } catch (error) {
        console.error('Error loading locales directory:', error);
      }
    }
    
    // Build reference relationships
    buildTokenReferences(allTokens);
    
    // Generate metadata
    const metadata = generateMetadata(allTokens);
    
    return {
      tokens: allTokens,
      metadata
    };
    
  } catch (error) {
    console.error('Error loading tokens by context:', error);
    return {
      tokens: [],
      metadata: {
        totalTokens: 0,
        categoryCounts: {},
        brandCounts: {},
        localeCounts: {},
        lastUpdated: new Date()
      }
    };
  }
}

/**
 * Build reference relationships between tokens
 */
function buildTokenReferences(tokens: EnhancedToken[]): void {
  const tokenMap = new Map<string, EnhancedToken>();
  
  // Create a map for quick token lookup by path
  tokens.forEach(token => {
    tokenMap.set(token.path, token);
  });
  
  // Build reference relationships
  tokens.forEach(token => {
    if (token.references && token.references.length > 0) {
      token.references.forEach(refPath => {
        const referencedToken = tokenMap.get(refPath);
        
        if (referencedToken) {
          // Add to referencedBy array
          if (!referencedToken.referencedBy) {
            referencedToken.referencedBy = [];
          }
          if (!referencedToken.referencedBy.includes(token.id)) {
            referencedToken.referencedBy.push(token.id);
          }
        }
      });
    }
  });
}

/**
 * Generate metadata for token set
 */
function generateMetadata(tokens: EnhancedToken[]) {
  const categoryCounts: Record<string, number> = {};
  const brandCounts: Record<string, number> = {};
  const localeCounts: Record<string, number> = {};
  
  tokens.forEach(token => {
    // Count by category
    categoryCounts[token.category] = (categoryCounts[token.category] || 0) + 1;
    
    // Count by brand
    if (token.brand) {
      brandCounts[token.brand] = (brandCounts[token.brand] || 0) + 1;
    }
    
    // Count by locale
    if (token.locale) {
      localeCounts[token.locale] = (localeCounts[token.locale] || 0) + 1;
    }
  });
  
  return {
    totalTokens: tokens.length,
    categoryCounts,
    brandCounts,
    localeCounts,
    lastUpdated: new Date()
  };
}

/**
 * Get available brands from the file system
 */
export async function getAvailableBrands(): Promise<string[]> {
  try {
    const brandsDir = path.join(SOURCE_DIR, 'brands');
    const brands = await fs.readdir(brandsDir);
    return ['common', ...brands.filter(brand => !brand.startsWith('.'))];
  } catch (error) {
    console.error('Error reading brands directory:', error);
    return ['common'];
  }
}

/**
 * Get available locales from the file system
 */
export async function getAvailableLocales(): Promise<string[]> {
  try {
    const localesDir = path.join(SOURCE_DIR, 'locales');
    const locales = await fs.readdir(localesDir);
    return ['none', ...locales.filter(locale => !locale.startsWith('.'))];
  } catch (error) {
    console.error('Error reading locales directory:', error);
    return ['none'];
  }
}

/**
 * Save enhanced tokens back to their respective files
 */
export async function saveEnhancedTokens(
  tokens: EnhancedToken[],
  context: TokenContext
): Promise<void> {
  // Group tokens by their source files
  const tokensByFile = new Map<string, EnhancedToken[]>();
  
  tokens.forEach(token => {
    if (!tokensByFile.has(token.source)) {
      tokensByFile.set(token.source, []);
    }
    tokensByFile.get(token.source)!.push(token);
  });
  
  // Save each file
  for (const [filePath, fileTokens] of tokensByFile.entries()) {
    try {
      // Reconstruct the JSON structure
      const jsonStructure: any = {};
      
      fileTokens.forEach(token => {
        const pathParts = token.originalPath.split('.');
        let current = jsonStructure;
        
        // Navigate to the parent object
        for (let i = 0; i < pathParts.length - 1; i++) {
          if (!current[pathParts[i]]) {
            current[pathParts[i]] = {};
          }
          current = current[pathParts[i]];
        }
        
        // Set the token value
        const tokenKey = pathParts[pathParts.length - 1];
        current[tokenKey] = {
          $value: token.value,
          $type: token.type,
          ...(token.description && { $description: token.description })
        };
      });
      
      // Make sure the directory exists
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      
      // Write the file
      await fs.writeFile(filePath, JSON.stringify(jsonStructure, null, 2));
      
    } catch (error) {
      console.error(`Error saving file ${filePath}:`, error);
      throw error;
    }
  }
}