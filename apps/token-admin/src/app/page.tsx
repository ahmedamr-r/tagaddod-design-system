'use client';

import React, { useEffect, useState } from 'react';
import { TokenTable } from '@/components/TokenTable';
import { TokenAdminHeader } from '@/components/TokenAdminHeader';
import { TokenTabs } from '@/components/TokenTabs';
import { ErrorMessage } from '@/components/ErrorMessage';
import { BuiltTokensTable } from '@/components/BuiltTokensTable';

export default function Home() {
  const [sourceTokens, setSourceTokens] = useState({});
  const [builtTokens, setBuiltTokens] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isBuilding, setIsBuilding] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState<'source' | 'built'>('source');
  const [selectedBrand, setSelectedBrand] = useState<'common' | 'tagaddod' | 'greenpan'>('common');

  // Load tokens based on selected brand
  const loadTokens = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Load source tokens for the selected brand
      const sourceRes = await fetch(`/api/tokens?brand=${selectedBrand}`);
      const sourceData = await sourceRes.json();
      setSourceTokens(sourceData.tokens || {});

      // Load built tokens for the selected brand
      const builtRes = await fetch(`/api/tokens?type=built&brand=${selectedBrand}`);
      const builtData = await builtRes.json();
      setBuiltTokens(builtData.tokens || {});
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTokens();
  }, [selectedBrand]);

  const handleBuild = async () => {
    try {
      setIsBuilding(true);
      setError(null);
      
      const response = await fetch('/api/build', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand: selectedBrand })
      });
      
      if (response.ok) {
        alert('Tokens built successfully!');
        // Reload tokens to show the newly built ones
        await loadTokens();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Build failed');
      }
    } catch (error) {
      setError(error.message);
      alert(`Build failed: ${error.message}`);
    } finally {
      setIsBuilding(false);
    }
  };

  const handleSave = async () => {
    try {
      setError(null);
      
      const response = await fetch('/api/tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          tokens: sourceTokens,
          brand: selectedBrand 
        }),
      });
      
      if (response.ok) {
        alert('Tokens saved successfully!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Save failed');
      }
    } catch (error) {
      setError(error.message);
      alert(`Save failed: ${error.message}`);
    }
  };

  const handleTokenUpdate = (path: string, updates: any) => {
    setSourceTokens(prevTokens => {
      const newTokens = { ...prevTokens };
      // Update the token in the correct category
      Object.keys(newTokens).forEach(category => {
        newTokens[category] = newTokens[category].map(token => 
          token.path === path ? { ...token, ...updates } : token
        );
      });
      return newTokens;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50" data-theme={selectedBrand}>
      <div className="page-container space-y-6">
        <TokenAdminHeader
          activeTab={activeTab}
          isLoading={isLoading}
          isBuilding={isBuilding}
          onSave={handleSave}
          onBuild={handleBuild}
          selectedBrand={selectedBrand}
          onBrandChange={setSelectedBrand}
        />

        <ErrorMessage error={error} />

        <div className="card">
          <TokenTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="mt-6">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p className="mt-4 text-gray-600">Loading tokens...</p>
              </div>
            ) : activeTab === 'source' ? (
              <TokenTable 
                tokens={sourceTokens} 
                readOnly={false}
                onTokenUpdate={handleTokenUpdate}
              />
            ) : (
              <BuiltTokensTable tokens={builtTokens} />
            )}
          </div>
        </div>

        {/* Brand indicator with color preview */}
        <div className="card">
          <h3 className="font-semibold mb-4">Brand Information</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Current Brand</p>
              <p className="font-medium capitalize">{selectedBrand}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Primary Color</p>
              <div className="flex items-center gap-2 mt-1">
                <div 
                  className="w-6 h-6 rounded border" 
                  style={{ backgroundColor: 'var(--t-color-bg-fill-brand)' }}
                />
                <code className="text-sm">var(--t-color-bg-fill-brand)</code>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`status-indicator ${isBuilding ? 'warning' : 'success'}`}></span>
                <span className="text-sm">{isBuilding ? 'Building...' : 'Ready'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
