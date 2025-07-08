'use client';

import React, { useState, useEffect } from 'react';
import { TokenGraphVisualization } from '@/components/TokenGraph/TokenGraphVisualization';
import { Button } from '@tagaddod-design/react';
import { IconRefresh, IconDownload, IconSearch, IconSettings } from '@tabler/icons-react';

// Enhanced token interfaces matching existing enhanced admin
interface EnhancedToken {
  id: string;
  path: string;
  name: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  subcategory?: string;
  source: string;
  brand?: string;
  locale?: string;
  references?: string[];
  referencedBy?: string[];
  isReference: boolean;
  originalPath: string;
}

interface TokenAnalysis {
  nodes: any[];
  relationships: any[];
  categories: {
    core: any[];
    semantic: any[];
    brand: any[];
    locale: any[];
  };
}

interface EnhancedTokenSet {
  tokens: EnhancedToken[];
  metadata: {
    totalTokens: number;
    categoryCounts: Record<string, number>;
    brandCounts: Record<string, number>;
    localeCounts: Record<string, number>;
    lastUpdated: Date;
  };
}

export default function TokenRelationshipsPage() {
  const [tokenSet, setTokenSet] = useState<EnhancedTokenSet | null>(null);
  const [tokenAnalysis, setTokenAnalysis] = useState<TokenAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<'common' | 'tagaddod' | 'greenpan'>('common');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'core' | 'semantic' | 'brand' | 'locale'>('all');
  const [availableBrands, setAvailableBrands] = useState<string[]>(['common']);
  const [availableLocales, setAvailableLocales] = useState<string[]>(['none']);
  const [showDebugInfo, setShowDebugInfo] = useState(false);

  // Load context options
  useEffect(() => {
    const loadContextOptions = async () => {
      try {
        const response = await fetch('/api/token-context');
        const data = await response.json();
        
        if (data.success) {
          setAvailableBrands(data.brands);
          setAvailableLocales(data.locales);
        }
      } catch (error) {
        console.error('Error loading context options:', error);
      }
    };

    loadContextOptions();
  }, []);

  // Load token data
  useEffect(() => {
    const loadTokenData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Load enhanced tokens with full context
        const params = new URLSearchParams({
          brand: selectedBrand,
          locale: 'none',
          includeCore: 'true',
          includeSemantic: 'true',
          includeBrand: 'true',
          includeLocale: 'false'
        });

        const tokenResponse = await fetch(`/api/tokens-enhanced?${params}`);
        const tokenData = await tokenResponse.json();

        if (tokenData.success) {
          setTokenSet(tokenData);
        } else {
          throw new Error(tokenData.error || 'Failed to load tokens');
        }

        // Load token analysis for relationships
        const analysisResponse = await fetch('/api/token-analysis');
        const analysisData = await analysisResponse.json();

        if (analysisData.success) {
          setTokenAnalysis(analysisData.analysis);
        }
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load token data');
      } finally {
        setIsLoading(false);
      }
    };

    loadTokenData();
  }, [selectedBrand]);

  const handleRefresh = () => {
    // Reload token data
    setTokenSet(null);
    setTokenAnalysis(null);
    // Trigger reload by updating a dependency
    const currentBrand = selectedBrand;
    setSelectedBrand('common');
    setTimeout(() => setSelectedBrand(currentBrand), 100);
  };

  const handleExport = () => {
    // Export graph as JSON data
    if (tokenSet) {
      const exportData = {
        tokens: tokenSet.tokens,
        analysis: tokenAnalysis,
        metadata: {
          exportDate: new Date().toISOString(),
          brand: selectedBrand,
          totalTokens: tokenSet.metadata.totalTokens,
        }
      };
      
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `token-relationships-${selectedBrand}-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--t-color-surface-primary)' }}>
      <div className="h-screen flex flex-col p-6 space-y-6">
        {/* Header */}
        <div className="card flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 style={{ 
                fontSize: 'var(--t-typography-heading-lg-font-size)', 
                fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                color: 'var(--t-color-text-primary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                Token Relationships
              </h1>
              <p style={{ 
                color: 'var(--t-color-text-secondary)',
                fontSize: 'var(--t-typography-body-md-font-size)'
              }}>
                Visualize and explore design token dependencies and hierarchies
              </p>
            </div>
            
            <div className="flex items-center" style={{ gap: 'var(--t-space-300)' }}>
              <Button
                onClick={handleRefresh}
                variant="secondary"
                prefixIcon={<IconRefresh size={18} />}
              >
                Refresh
              </Button>
              
              <Button
                onClick={handleExport}
                variant="primary"
                prefixIcon={<IconDownload size={18} />}
              >
                Export Graph
              </Button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between" style={{ gap: 'var(--t-space-400)' }}>
            <div className="flex items-center" style={{ gap: 'var(--t-space-300)' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'var(--t-typography-body-sm-font-size)',
                  color: 'var(--t-color-text-primary)',
                  marginBottom: 'var(--t-space-100)'
                }}>
                  Brand Context
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value as any)}
                  style={{
                    padding: 'var(--t-space-200) var(--t-space-300)',
                    borderRadius: 'var(--t-border-radius-200)',
                    border: '1px solid var(--t-color-border-secondary)',
                    backgroundColor: 'var(--t-color-surface-primary)',
                    color: 'var(--t-color-text-primary)'
                  }}
                >
                  <option value="common">All Brands</option>
                  <option value="tagaddod">Tagaddod</option>
                  <option value="greenpan">GreenPan</option>
                </select>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'var(--t-typography-body-sm-font-size)',
                  color: 'var(--t-color-text-primary)',
                  marginBottom: 'var(--t-space-100)'
                }}>
                  Filter by Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  style={{
                    padding: 'var(--t-space-200) var(--t-space-300)',
                    borderRadius: 'var(--t-border-radius-200)',
                    border: '1px solid var(--t-color-border-secondary)',
                    backgroundColor: 'var(--t-color-surface-primary)',
                    color: 'var(--t-color-text-primary)'
                  }}
                >
                  <option value="all">All Types</option>
                  <option value="core">Core</option>
                  <option value="semantic">Semantic</option>
                  <option value="brand">Brand</option>
                  <option value="locale">Locale</option>
                </select>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search tokens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: 'var(--t-space-200) var(--t-space-300)',
                  paddingLeft: 'var(--t-space-800)',
                  borderRadius: 'var(--t-border-radius-200)',
                  border: '1px solid var(--t-color-border-secondary)',
                  backgroundColor: 'var(--t-color-surface-primary)',
                  color: 'var(--t-color-text-primary)',
                  minWidth: '240px'
                }}
              />
              <IconSearch 
                size={16} 
                style={{
                  position: 'absolute',
                  left: 'var(--t-space-300)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--t-color-text-tertiary)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="card" style={{ 
            backgroundColor: 'var(--t-color-surface-critical-secondary)', 
            borderColor: 'var(--t-color-border-critical)' 
          }}>
            <div style={{ color: 'var(--t-color-text-critical)' }}>{error}</div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--t-color-border-brand)' }}></div>
            <p className="mt-4" style={{ color: 'var(--t-color-text-secondary)' }}>Loading token relationships...</p>
          </div>
        )}

        {/* Graph Visualization */}
        {!isLoading && (
          <div className="card flex-grow" style={{ minHeight: 0 }}>
            <div style={{ height: '100%', width: '100%' }}>
              <TokenGraphVisualization
                tokens={tokenSet?.tokens || []}
                analysis={tokenAnalysis}
                searchTerm={searchTerm}
                filterType={filterType}
                selectedBrand={selectedBrand}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}