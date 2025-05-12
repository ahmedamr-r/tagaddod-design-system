import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const TOKENS_DIR = path.join(process.cwd(), '../../packages/tokens/src');
  const tokens: Record<string, any> = {};
  
  try {
    // Read a single token file for debugging
    const colorPath = path.join(TOKENS_DIR, 'primitives', 'color.json');
    const content = await fs.readFile(colorPath, 'utf-8');
    const colorTokens = JSON.parse(content);
    
    // Show how tokens are structured
    const debug = {
      rawTokens: colorTokens,
      howStoredInState: {
        'primitives.color': colorTokens
      },
      examplePath: 'primitives.color.color.green.500',
      expectedStructure: {
        'primitives.color': {
          color: {
            green: {
              '500': {
                value: '#25b24b',
                type: 'color'
              }
            }
          }
        }
      }
    };
    
    return NextResponse.json(debug);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
