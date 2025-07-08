import { NextResponse } from 'next/server';
import { analyzeTokens, findTokenReferences, findTokenDependencies, getTokenHierarchy } from '@/lib/serverTokenAnalyzer';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tokenPath = searchParams.get('tokenPath');
    const type = searchParams.get('type'); // 'references', 'dependencies', 'hierarchy'
    
    if (!tokenPath) {
      return NextResponse.json(
        { success: false, error: 'tokenPath parameter is required' },
        { status: 400 }
      );
    }
    
    const analysis = await analyzeTokens();
    
    let result;
    switch (type) {
      case 'references':
        result = findTokenReferences(tokenPath, analysis);
        break;
      case 'dependencies':
        result = findTokenDependencies(tokenPath, analysis);
        break;
      case 'hierarchy':
        result = getTokenHierarchy(tokenPath, analysis);
        break;
      default:
        // Return all relationship data
        result = {
          references: findTokenReferences(tokenPath, analysis),
          dependencies: findTokenDependencies(tokenPath, analysis),
          hierarchy: getTokenHierarchy(tokenPath, analysis)
        };
    }
    
    return NextResponse.json({
      success: true,
      tokenPath,
      type: type || 'all',
      result
    });
  } catch (error) {
    console.error('Error getting token relationships:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to get token relationships' 
      },
      { status: 500 }
    );
  }
}