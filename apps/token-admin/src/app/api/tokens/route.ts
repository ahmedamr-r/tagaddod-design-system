import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import * as path from 'path';

const TOKENS_DIR = path.join(process.cwd(), '../../packages/tokens');
const SOURCE_DIR = path.join(TOKENS_DIR, 'src');
const DIST_DIR = path.join(TOKENS_DIR, 'dist');

// Helper to parse tokens and convert to display format
function parseTokens(jsonContent: any, category: string, fileName: string): any[] {
  const tokens: any[] = [];
  
  function traverse(obj: any, path: string[] = []) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      
      if (value && typeof value === 'object') {
        if ('$value' in value) {
          // This is a token
          tokens.push({
            path: currentPath.join('.'),
            value: value.$value,
            type: (value as any).$type || 'unknown',
            description: (value as any).$description || '',
            category,
            fileName
          });
        } else {
          // Recurse deeper
          traverse(value, currentPath);
        }
      }
    }
  }
  
  traverse(jsonContent);
  return tokens;
}

// Helper to read source tokens for a specific brand
async function readSourceTokens(brand: 'common' | 'tagaddod' | 'greenpan') {
  const tokensByCategory: Record<string, any[]> = {};

  try {
    if (brand === 'common') {
      // Read core and semantic tokens
      const coreDirs = ['core', 'semantic', 'extras'];
      
      for (const dir of coreDirs) {
        const dirPath = path.join(SOURCE_DIR, dir);
        try {
          const files = await fs.readdir(dirPath);
          
          for (const file of files) {
            if (file.endsWith('.json')) {
              const content = await fs.readFile(path.join(dirPath, file), 'utf-8');
              const jsonContent = JSON.parse(content);
              const category = dir;
              const tokens = parseTokens(jsonContent, category, file);
              
              if (!tokensByCategory[category]) {
                tokensByCategory[category] = [];
              }
              tokensByCategory[category].push(...tokens);
            }
          }
        } catch (error) {
          console.error(`Error reading directory ${dir}:`, error);
        }
      }
    } else {
      // Read brand-specific overrides
      const brandPath = path.join(SOURCE_DIR, 'brands', brand, 'overrides');
      try {
        const files = await fs.readdir(brandPath);
        
        for (const file of files) {
          if (file.endsWith('.json')) {
            const content = await fs.readFile(path.join(brandPath, file), 'utf-8');
            const jsonContent = JSON.parse(content);
            const category = `${brand}-overrides`;
            const tokens = parseTokens(jsonContent, category, file);
            
            if (!tokensByCategory[category]) {
              tokensByCategory[category] = [];
            }
            tokensByCategory[category].push(...tokens);
          }
        }
      } catch (error) {
        console.error(`Error reading brand directory ${brand}:`, error);
      }
    }
  } catch (error) {
    console.error('Error reading tokens:', error);
  }

  return tokensByCategory;
}

// Helper to read built tokens
async function readBuiltTokens(brand: 'common' | 'tagaddod' | 'greenpan') {
  const tokensByCategory: Record<string, any[]> = {};
  
  try {
    let cssPath: string;
    let selector: string;
    
    if (brand === 'common') {
      cssPath = path.join(DIST_DIR, 'css', 'tokens.css');
      selector = ':root';
    } else {
      cssPath = path.join(DIST_DIR, brand, 'vars.css');
      selector = `[data-theme="${brand}"]`;
    }
    
    const cssContent = await fs.readFile(cssPath, 'utf-8');
    
    // Extract the content for the specific selector
    const selectorRegex = new RegExp(`${selector.replace(/[[\]]/g, '\\$&')}\\s*{([^}]+)}`, 's');
    const match = cssContent.match(selectorRegex);
    
    if (match) {
      const variables = match[1];
      const tokenRegex = /--(t-[^:]+):\s*([^;]+);/g;
      
      let tokenMatch;
      while ((tokenMatch = tokenRegex.exec(variables)) !== null) {
        const name = tokenMatch[1];
        const value = tokenMatch[2].trim();
        
        // Categorize based on token name
        let category = 'misc';
        if (name.includes('color')) category = 'color';
        else if (name.includes('space')) category = 'spacing';
        else if (name.includes('font')) category = 'typography';
        else if (name.includes('border')) category = 'border';
        else if (name.includes('radius')) category = 'border-radius';
        else if (name.includes('shadow')) category = 'shadow';
        else if (name.includes('motion') || name.includes('duration')) category = 'motion';
        
        if (!tokensByCategory[category]) {
          tokensByCategory[category] = [];
        }
        
        tokensByCategory[category].push({
          name,
          value,
          type: category
        });
      }
    }
  } catch (error) {
    console.error('Error reading built tokens:', error);
  }
  
  return tokensByCategory;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const brand = (searchParams.get('brand') || 'common') as 'common' | 'tagaddod' | 'greenpan';
  
  if (type === 'built') {
    const builtTokens = await readBuiltTokens(brand);
    return NextResponse.json({ tokens: builtTokens });
  } else {
    const sourceTokens = await readSourceTokens(brand);
    return NextResponse.json({ tokens: sourceTokens });
  }
}

export async function POST(request: Request) {
  try {
    const { tokens, brand } = await request.json();
    
    // Save tokens back to their respective files
    for (const [category, tokenList] of Object.entries(tokens)) {
      // Group tokens by fileName
      const tokensByFile: Record<string, any> = {};
      
      for (const token of tokenList as any[]) {
        const fileName = token.fileName;
        if (!tokensByFile[fileName]) {
          tokensByFile[fileName] = {};
        }
        
        // Reconstruct the nested structure
        const pathParts = token.path.split('.');
        let current = tokensByFile[fileName];
        
        for (let i = 0; i < pathParts.length - 1; i++) {
          if (!current[pathParts[i]]) {
            current[pathParts[i]] = {};
          }
          current = current[pathParts[i]];
        }
        
        // Set the token value
        current[pathParts[pathParts.length - 1]] = {
          $value: token.value,
          $type: token.type,
          ...(token.description && { $description: token.description })
        };
      }
      
      // Write each file
      for (const [fileName, content] of Object.entries(tokensByFile)) {
        let filePath: string;
        
        if (brand === 'common') {
          filePath = path.join(SOURCE_DIR, category, fileName);
        } else {
          filePath = path.join(SOURCE_DIR, 'brands', brand, 'overrides', fileName);
        }
        
        // Make sure the directory exists
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(content, null, 2));
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving tokens:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to save tokens' },
      { status: 500 }
    );
  }
}
