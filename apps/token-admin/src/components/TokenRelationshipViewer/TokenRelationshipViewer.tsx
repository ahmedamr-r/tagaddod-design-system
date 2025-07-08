'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { TokenNode, TokenAnalysis, TokenRelationship, findTokenReferences, findTokenDependencies, getTokenHierarchy } from '@/lib/tokenAnalyzer';

interface TokenRelationshipViewerProps {
  analysis?: TokenAnalysis;
  selectedToken?: string;
  onTokenSelect?: (tokenPath: string) => void;
}

interface TreeNodeProps {
  token: TokenNode;
  level: number;
  onSelect: (tokenPath: string) => void;
  selectedToken?: string;
  relationships: TokenRelationship[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  token, 
  level, 
  onSelect, 
  selectedToken, 
  relationships 
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = token.referencedBy && token.referencedBy.length > 0;
  const indent = level * 20;
  
  const categoryColors = {
    core: 'bg-blue-100 text-blue-800 border-blue-200',
    semantic: 'bg-green-100 text-green-800 border-green-200',
    brand: 'bg-purple-100 text-purple-800 border-purple-200',
    locale: 'bg-orange-100 text-orange-800 border-orange-200'
  };

  return (
    <div className="relative">
      <div 
        className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
          selectedToken === token.path 
            ? 'bg-blue-50 border-2 border-blue-300' 
            : 'hover:bg-gray-50 border border-gray-200'
        }`}
        style={{ marginLeft: `${indent}px` }}
        onClick={() => onSelect(token.path)}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mr-2 w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            {isExpanded ? '−' : '+'}
          </button>
        )}
        
        {!hasChildren && <div className="w-6" />}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-xs rounded-full border ${categoryColors[token.category]}`}>
              {token.category}
            </span>
            
            <span className="font-medium text-gray-900 truncate">
              {token.name}
            </span>
            
            {token.isReference && (
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                ref
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-600 mt-1">
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              {(() => {
                const displayValue = typeof token.value === 'object' 
                  ? JSON.stringify(token.value) 
                  : String(token.value);
                return displayValue.length > 50 
                  ? displayValue.substring(0, 50) + '...' 
                  : displayValue;
              })()}
            </code>
            
            {token.description && (
              <p className="text-xs text-gray-500 mt-1 italic">
                {token.description}
              </p>
            )}
          </div>
        </div>
        
        {token.referencedBy && token.referencedBy.length > 0 && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {token.referencedBy.length} ref{token.referencedBy.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>
      
      {/* Show connected lines for relationships */}
      {level > 0 && (
        <div 
          className="absolute top-0 left-0 w-px h-full bg-gray-300"
          style={{ marginLeft: `${indent - 10}px` }}
        />
      )}
    </div>
  );
};

const TokenRelationshipViewer: React.FC<TokenRelationshipViewerProps> = ({
  analysis,
  selectedToken,
  onTokenSelect = () => {}
}) => {
  const [viewMode, setViewMode] = useState<'dependencies' | 'references' | 'hierarchy'>('dependencies');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter tokens based on search
  const filteredTokens = useMemo(() => {
    if (!analysis) return [];
    
    if (!searchTerm) return analysis.nodes;
    
    return analysis.nodes.filter(token => 
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (token.description && token.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [analysis, searchTerm]);
  
  // Get tokens to display based on view mode and selected token
  const displayTokens = useMemo(() => {
    if (!analysis || !selectedToken) return filteredTokens;
    
    switch (viewMode) {
      case 'dependencies':
        return findTokenDependencies(selectedToken, analysis);
      case 'references':
        return findTokenReferences(selectedToken, analysis);
      case 'hierarchy':
        return getTokenHierarchy(selectedToken, analysis);
      default:
        return filteredTokens;
    }
  }, [analysis, selectedToken, viewMode, filteredTokens]);
  
  // Group tokens by category for better organization
  const groupedTokens = useMemo(() => {
    const groups: Record<string, TokenNode[]> = {};
    
    displayTokens.forEach(token => {
      const key = token.category;
      if (!groups[key]) groups[key] = [];
      groups[key].push(token);
    });
    
    return groups;
  }, [displayTokens]);
  
  if (!analysis) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Analyzing token relationships...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header with controls */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Token Relationships</h3>
          
          <div className="flex items-center gap-2">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="dependencies">Dependencies</option>
              <option value="references">References</option>
              <option value="hierarchy">Full Hierarchy</option>
            </select>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-3 top-2.5 text-gray-400">
            🔍
          </div>
        </div>
        
        {/* Summary stats */}
        <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
          <span>Total: {analysis.nodes.length} tokens</span>
          <span>Core: {analysis.categories.core.length}</span>
          <span>Semantic: {analysis.categories.semantic.length}</span>
          <span>Brand: {analysis.categories.brand.length}</span>
          <span>Locale: {analysis.categories.locale.length}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {selectedToken && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              Viewing <strong>{viewMode}</strong> for token: <code className="bg-blue-100 px-2 py-1 rounded">{selectedToken}</code>
            </p>
            {displayTokens.length === 0 && (
              <p className="text-sm text-blue-600 mt-2">No {viewMode} found for this token.</p>
            )}
          </div>
        )}
        
        {Object.keys(groupedTokens).length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No tokens match your search criteria.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedTokens).map(([category, tokens]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  {category} ({tokens.length})
                </h4>
                
                <div className="space-y-2">
                  {tokens.map((token, index) => (
                    <TreeNode
                      key={token.id}
                      token={token}
                      level={0}
                      onSelect={onTokenSelect}
                      selectedToken={selectedToken}
                      relationships={analysis.relationships}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Relationship summary for selected token */}
      {selectedToken && analysis && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Relationship Summary</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Dependencies:</span>
              <span className="ml-2 font-medium">
                {findTokenDependencies(selectedToken, analysis).length}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Referenced by:</span>
              <span className="ml-2 font-medium">
                {findTokenReferences(selectedToken, analysis).length}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Total in hierarchy:</span>
              <span className="ml-2 font-medium">
                {getTokenHierarchy(selectedToken, analysis).length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenRelationshipViewer;