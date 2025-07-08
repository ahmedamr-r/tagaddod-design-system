'use client';

import React, { useState, useEffect } from 'react';
import { TokenRelationshipViewer } from '@/components/TokenRelationshipViewer';
import { TokenContextSwitcher, TokenContext } from '@/components/TokenContextSwitcher';
import { TokenBrowser } from '@/components/TokenBrowser';
import { TokenDescriptionEditor } from '@/components/TokenDescriptionEditor';
// Import design system components from published npm package
import { Button, Tabs, TabsList, TabsTrigger, TabsContent, Badge } from '@tagaddod-design/react';
import { IconDeviceFloppy, IconSettings, IconBrush } from '@tabler/icons-react';
// Enhanced token types for client-side usage
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
import { TokenAnalysis } from '@/lib/tokenAnalyzer';

export default function EnhancedTokenAdmin() {
  const [tokenSet, setTokenSet] = useState<EnhancedTokenSet | null>(null);
  const [tokenAnalysis, setTokenAnalysis] = useState<TokenAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBuilding, setIsBuilding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'browser' | 'relationships' | 'bulk-edit'>('browser');
  const [selectedToken, setSelectedToken] = useState<EnhancedToken | null>(null);
  const [context, setContext] = useState<TokenContext>({
    brand: 'common',
    locale: 'none',
    includeCore: true,
    includeSemantic: true,
    includeBrand: false,
    includeLocale: false
  });
  const [availableBrands, setAvailableBrands] = useState<string[]>(['common']);
  const [availableLocales, setAvailableLocales] = useState<string[]>(['none']);
  const [pendingChanges, setPendingChanges] = useState<Record<string, Partial<EnhancedToken>>>({});

  // Load initial context options
  useEffect(() => {
    const loadContextOptions = async () => {
      try {
        const response = await fetch('/api/token-context');
        const data = await response.json();
        
        if (data.success) {
          setAvailableBrands(data.brands);
          setAvailableLocales(data.locales);
          if (data.defaultContext) {
            setContext(data.defaultContext);
          }
        }
      } catch (error) {
        console.error('Error loading context options:', error);
      }
    };

    loadContextOptions();
  }, []);

  // Load tokens based on context
  useEffect(() => {
    const loadTokens = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams({
          brand: context.brand,
          locale: context.locale,
          includeCore: context.includeCore.toString(),
          includeSemantic: context.includeSemantic.toString(),
          includeBrand: context.includeBrand.toString(),
          includeLocale: context.includeLocale.toString()
        });

        const response = await fetch(`/api/tokens-enhanced?${params}`);
        const data = await response.json();

        if (data.success) {
          setTokenSet(data);
        } else {
          setError(data.error || 'Failed to load tokens');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tokens');
      } finally {
        setIsLoading(false);
      }
    };

    loadTokens();
  }, [context]);

  // Load token analysis
  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        const response = await fetch('/api/token-analysis');
        const data = await response.json();

        if (data.success) {
          setTokenAnalysis(data.analysis);
        }
      } catch (error) {
        console.error('Error loading token analysis:', error);
      }
    };

    loadAnalysis();
  }, []);

  const handleTokenUpdate = (tokenId: string, updates: Partial<EnhancedToken>) => {
    if (!tokenSet) return;

    // Update the token set immediately for UI consistency
    const updatedTokens = tokenSet.tokens.map(token =>
      token.id === tokenId ? { ...token, ...updates } : token
    );

    setTokenSet({
      ...tokenSet,
      tokens: updatedTokens
    });

    // Also track this as a pending change
    setPendingChanges(prev => ({
      ...prev,
      [tokenId]: { ...prev[tokenId], ...updates }
    }));

    // Update selected token if it's the one being updated
    if (selectedToken?.id === tokenId) {
      setSelectedToken({ ...selectedToken, ...updates });
    }
  };

  const handleSave = async () => {
    if (!tokenSet) return;

    try {
      setError(null);
      
      // Apply all pending changes to the current token set
      const tokensToSave = tokenSet.tokens.map(token => {
        const pendingChange = pendingChanges[token.id];
        return pendingChange ? { ...token, ...pendingChange } : token;
      });
      
      const response = await fetch('/api/tokens-enhanced', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          tokens: tokensToSave,
          context 
        }),
      });
      
      if (response.ok) {
        // Clear pending changes after successful save
        setPendingChanges({});
        alert('Tokens saved successfully!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Save failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Save failed';
      setError(errorMessage);
      alert(`Save failed: ${errorMessage}`);
    }
  };

  const handleBuild = async () => {
    try {
      setIsBuilding(true);
      setError(null);
      
      const response = await fetch('/api/build-tokens', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context })
      });
      
      if (response.ok) {
        alert('Tokens built successfully! Check the dist folder for generated CSS files with comments.');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Build failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Build failed';
      setError(errorMessage);
      alert(`Build failed: ${errorMessage}`);
    } finally {
      setIsBuilding(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--t-color-surface-primary)' }}>
        <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 style={{ 
                fontSize: 'var(--t-typography-heading-lg-font-size)', 
                fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                color: 'var(--t-color-text-primary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                Token Editor
              </h1>
              <p style={{ 
                color: 'var(--t-color-text-secondary)',
                fontSize: 'var(--t-typography-body-md-font-size)'
              }}>
                Comprehensive token management with relationships, context switching, and enhanced descriptions
              </p>
            </div>
            
            <div className="flex items-center" style={{ gap: 'var(--t-space-300)' }}>
              <Button
                onClick={handleBuild}
                disabled={isLoading || isBuilding}
                variant="primary"
                tone="success"
                prefixIcon={<IconSettings size={18} />}
                loading={isBuilding}
              >
                {isBuilding ? 'Building...' : 'Build Tokens'}
              </Button>
            </div>
          </div>

          {/* Context Switcher */}
          <TokenContextSwitcher
            context={context}
            onContextChange={setContext}
            availableBrands={availableBrands}
            availableLocales={availableLocales}
          />
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
            <p className="mt-4" style={{ color: 'var(--t-color-text-secondary)' }}>Loading tokens...</p>
          </div>
        )}

        {/* Main Content */}
        {!isLoading && tokenSet && (
          <>
            {/* Stats Summary */}
            <div className="card">
              <h3 style={{ 
                fontSize: 'var(--t-typography-heading-md-font-size)',
                fontWeight: 'var(--t-typography-heading-md-font-weight)',
                color: 'var(--t-color-text-primary)',
                marginBottom: 'var(--t-space-400)'
              }}>
                Token Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div style={{ 
                    fontSize: 'var(--t-typography-heading-lg-font-size)',
                    fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                    color: 'var(--t-color-text-brand)'
                  }}>
                    {tokenSet.metadata.totalTokens}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--t-typography-body-sm-font-size)',
                    color: 'var(--t-color-text-secondary)'
                  }}>
                    Total Tokens
                  </div>
                </div>
                <div className="text-center">
                  <div style={{ 
                    fontSize: 'var(--t-typography-heading-lg-font-size)',
                    fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                    color: 'var(--t-color-text-success)'
                  }}>
                    {tokenSet.metadata.categoryCounts.core || 0}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--t-typography-body-sm-font-size)',
                    color: 'var(--t-color-text-secondary)'
                  }}>
                    Core Tokens
                  </div>
                </div>
                <div className="text-center">
                  <div style={{ 
                    fontSize: 'var(--t-typography-heading-lg-font-size)',
                    fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                    color: 'var(--t-color-text-magic)'
                  }}>
                    {tokenSet.metadata.categoryCounts.semantic || 0}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--t-typography-body-sm-font-size)',
                    color: 'var(--t-color-text-secondary)'
                  }}>
                    Semantic Tokens
                  </div>
                </div>
                <div className="text-center">
                  <div style={{ 
                    fontSize: 'var(--t-typography-heading-lg-font-size)',
                    fontWeight: 'var(--t-typography-heading-lg-font-weight)',
                    color: 'var(--t-color-text-warning)'
                  }}>
                    {(tokenSet.metadata.categoryCounts.brand || 0) + (tokenSet.metadata.categoryCounts.locale || 0)}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--t-typography-body-sm-font-size)',
                    color: 'var(--t-color-text-secondary)'
                  }}>
                    Override Tokens
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab as any}
                  variant="primary"
                  ariaLabel="Token management tabs"
                >
                  <TabsList>
                    <TabsTrigger 
                      value="browser" 
                      icon={<IconBrush size={18} />}
                      description="Browse and edit tokens"
                    >
                      Token Browser
                    </TabsTrigger>
                    <TabsTrigger 
                      value="relationships"
                      icon={<IconSettings size={18} />}
                      description="Visualize token dependencies"
                    >
                      Relationships
                    </TabsTrigger>
                    <TabsTrigger 
                      value="bulk-edit"
                      description="Edit multiple descriptions"
                    >
                      Bulk Edit
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  variant="primary"
                  prefixIcon={<IconDeviceFloppy size={18} />}
                >
                  Save Changes
                  {Object.keys(pendingChanges).length > 0 && (
                    <Badge tone="warning" size="medium" style={{ marginLeft: 'var(--t-space-200)' }}>
                      {Object.keys(pendingChanges).length}
                    </Badge>
                  )}
                </Button>
              </div>

              <Tabs 
                value={activeTab} 
                onValueChange={setActiveTab as any}
                variant="primary"
                ariaLabel="Token management tabs"
              >
                <TabsContent value="browser">
                  <div style={{ padding: 'var(--t-space-400)' }}>
                    <TokenBrowser
                      tokens={tokenSet.tokens}
                      onTokenUpdate={handleTokenUpdate}
                      onTokenSelect={setSelectedToken}
                      selectedToken={selectedToken}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="relationships">
                  <div style={{ padding: 'var(--t-space-400)' }}>
                    <TokenRelationshipViewer
                      analysis={tokenAnalysis}
                      selectedToken={selectedToken?.path}
                      onTokenSelect={(tokenPath) => {
                        const token = tokenSet.tokens.find(t => t.path === tokenPath);
                        if (token) setSelectedToken(token);
                      }}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="bulk-edit">
                  <div style={{ padding: 'var(--t-space-400)' }}>
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <h3 style={{ 
                          fontSize: 'var(--t-typography-heading-md-font-size)',
                          fontWeight: 'var(--t-typography-heading-md-font-weight)',
                          color: 'var(--t-color-text-primary)',
                          marginBottom: 'var(--t-space-200)'
                        }}>
                          Bulk Description Editor
                        </h3>
                        <p style={{ color: 'var(--t-color-text-secondary)' }}>
                          Select tokens from the browser tab to edit their descriptions in bulk.
                        </p>
                        
                        {selectedToken && (
                          <div className="mt-6 max-w-2xl mx-auto">
                            <div className="text-left">
                              <div className="flex items-center gap-2 mb-3">
                                <h4 style={{ 
                                  fontSize: 'var(--t-typography-body-md-font-size)',
                                  fontWeight: 'var(--t-typography-body-md-font-weight)',
                                  color: 'var(--t-color-text-primary)'
                                }}>
                                  Editing:
                                </h4>
                                <Badge tone="info">{selectedToken.name}</Badge>
                              </div>
                              <TokenDescriptionEditor
                                value={selectedToken.description}
                                onChange={(description) => handleTokenUpdate(selectedToken.id, { description })}
                                tokenName={selectedToken.name}
                                tokenType={selectedToken.type}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          fontSize: 'var(--t-typography-body-sm-font-size)',
          color: 'var(--t-color-text-tertiary)',
          padding: 'var(--t-space-400) 0'
        }}>
          Token Editor - Managing {tokenSet?.metadata.totalTokens || 0} design tokens across {context.brand} brand
        </div>
        </div>
    </div>
  );
}