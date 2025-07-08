import { NextResponse } from 'next/server';
import { getAvailableBrands, getAvailableLocales } from '@/lib/serverEnhancedTokenLoader';

export async function GET() {
  try {
    const [brands, locales] = await Promise.all([
      getAvailableBrands(),
      getAvailableLocales()
    ]);
    
    return NextResponse.json({
      success: true,
      brands,
      locales,
      defaultContext: {
        brand: 'common',
        locale: 'none',
        includeCore: true,
        includeSemantic: true,
        includeBrand: false,
        includeLocale: false
      }
    });
  } catch (error) {
    console.error('Error getting token context options:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to get context options' 
      },
      { status: 500 }
    );
  }
}