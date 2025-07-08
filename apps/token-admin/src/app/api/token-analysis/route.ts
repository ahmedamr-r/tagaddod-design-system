import { NextResponse } from 'next/server';
import { analyzeTokens } from '@/lib/serverTokenAnalyzer';

export async function GET() {
  try {
    const analysis = await analyzeTokens();
    
    return NextResponse.json({
      success: true,
      analysis,
      stats: {
        totalTokens: analysis.nodes.length,
        totalRelationships: analysis.relationships.length,
        categoryCounts: {
          core: analysis.categories.core.length,
          semantic: analysis.categories.semantic.length,
          brand: analysis.categories.brand.length,
          locale: analysis.categories.locale.length
        }
      }
    });
  } catch (error) {
    console.error('Error analyzing tokens:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to analyze tokens' 
      },
      { status: 500 }
    );
  }
}