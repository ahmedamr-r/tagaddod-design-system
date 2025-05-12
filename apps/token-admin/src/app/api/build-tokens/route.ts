import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const tokens = await request.json();
    
    // Get the path to the tokens package
    const projectRoot = path.resolve(process.cwd(), '../..');
    const tokensPackagePath = path.join(projectRoot, 'packages/tokens');
    
    // Save the tokens to source files
    const primitivesPath = path.join(tokensPackagePath, 'src/primitives.json');
    const semanticsPath = path.join(tokensPackagePath, 'src/semantics.json');
    
    // Write primitives and semantics
    await fs.writeFile(primitivesPath, JSON.stringify(tokens.primitives, null, 2));
    await fs.writeFile(semanticsPath, JSON.stringify(tokens.semantics, null, 2));
    
    // Write theme files if they exist
    if (tokens.themes) {
      const themesPath = path.join(projectRoot, 'packages/themes/src');
      for (const [themeName, themeTokens] of Object.entries(tokens.themes)) {
        const themePath = path.join(themesPath, `${themeName}.json`);
        await fs.writeFile(themePath, JSON.stringify(themeTokens, null, 2));
      }
    }
    
    // Run the build command
    const { stdout, stderr } = await execAsync('yarn build', {
      cwd: tokensPackagePath,
    });
    
    if (stderr && !stderr.includes('warning')) {
      throw new Error(stderr);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Tokens built successfully',
      output: stdout 
    });
  } catch (error: any) {
    console.error('Build error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
