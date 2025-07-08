import { NextResponse } from 'next/server';
import { loadTokensByContext, saveEnhancedTokens, getAvailableBrands, getAvailableLocales } from '@/lib/serverEnhancedTokenLoader';
import { TokenContext } from '@/components/TokenContextSwitcher';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse context from query parameters
    const context: TokenContext = {
      brand: (searchParams.get('brand') || 'common') as TokenContext['brand'],
      locale: (searchParams.get('locale') || 'none') as TokenContext['locale'],
      includeCore: searchParams.get('includeCore') !== 'false',
      includeSemantic: searchParams.get('includeSemantic') !== 'false',
      includeBrand: searchParams.get('includeBrand') === 'true',
      includeLocale: searchParams.get('includeLocale') === 'true'
    };
    
    const tokenSet = await loadTokensByContext(context);
    
    return NextResponse.json({
      success: true,
      tokens: tokenSet.tokens,
      metadata: tokenSet.metadata,
      context
    });
  } catch (error) {
    console.error('Error loading enhanced tokens:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to load tokens' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { tokens, context } = await request.json();
    
    if (!tokens || !context) {
      return NextResponse.json(
        { success: false, error: 'Missing tokens or context' },
        { status: 400 }
      );
    }
    
    await saveEnhancedTokens(tokens, context);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving enhanced tokens:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to save tokens' 
      },
      { status: 500 }
    );
  }
}