'use client';

import React, { useState } from 'react';

interface Token {
  path: string;
  value: string;
  type: string;
  description?: string;
}

interface TokenTableProps {
  tokens: Record<string, Token[]>;
  readOnly?: boolean;
  onTokenUpdate?: (path: string, updates: Partial<Token>) => void;
}

const formatTokenPath = (path: string) => {
  return path.replace(/\./g, ' › ');
};

const renderTokenPreview = (token: Token) => {
  const { type, value } = token;
  
  if (type === 'color') {
    return (
      <div className="flex items-center gap-2">
        <div 
          className="token-color-swatch" 
          style={{ backgroundColor: value }}
        />
        <span className="token-value">{value}</span>
      </div>
    );
  }
  
  if (type === 'dimension' || type === 'spacing') {
    return (
      <div className="flex items-center gap-2">
        <div 
          className="h-4 bg-gray-300" 
          style={{ width: value }}
        />
        <span className="token-value">{value}</span>
      </div>
    );
  }
  
  if (type === 'borderRadius') {
    return (
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 bg-gray-300" 
          style={{ borderRadius: value }}
        />
        <span className="token-value">{value}</span>
      </div>
    );
  }
  
  if (type === 'boxShadow') {
    return (
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 bg-white border" 
          style={{ boxShadow: value }}
        />
        <span className="token-value text-xs break-all">{value}</span>
      </div>
    );
  }
  
  return <span className="token-value">{value}</span>;
};

export const TokenTable: React.FC<TokenTableProps> = ({ 
  tokens, 
  readOnly = false,
  onTokenUpdate 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  
  // Filter tokens based on search query
  const filteredTokens = Object.entries(tokens).reduce((acc, [category, tokenList]) => {
    const filtered = tokenList.filter(token => 
      token.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    
    return acc;
  }, {} as Record<string, Token[]>);
  
  const toggleGroup = (category: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };
  
  const handleTokenEdit = (token: Token, field: keyof Token, newValue: string) => {
    if (!readOnly && onTokenUpdate) {
      onTokenUpdate(token.path, { [field]: newValue });
    }
  };
  
  if (Object.keys(tokens).length === 0) {
    return (
      <div className="card text-center py-8">
        <p className="text-gray-500">No tokens available</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="card">
        <input
          type="text"
          placeholder="Search tokens..."
          className="input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Token groups */}
      {Object.entries(filteredTokens).map(([category, tokenList]) => (
        <div key={category} className="card">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleGroup(category)}
          >
            <h3 className="font-semibold text-lg capitalize">
              {category} ({tokenList.length})
            </h3>
            <button className="text-gray-500">
              {expandedGroups.has(category) ? '▼' : '▶'}
            </button>
          </div>
          
          {expandedGroups.has(category) && (
            <div className="mt-4">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Token Path</th>
                    <th>Value</th>
                    <th>Type</th>
                    <th>Description</th>
                    {!readOnly && <th>Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {tokenList.map((token) => (
                    <tr key={token.path}>
                      <td className="font-mono text-sm">
                        {formatTokenPath(token.path)}
                      </td>
                      <td>
                        {readOnly ? (
                          renderTokenPreview(token)
                        ) : (
                          <input
                            type="text"
                            value={token.value}
                            onChange={(e) => handleTokenEdit(token, 'value', e.target.value)}
                            className="input text-sm"
                          />
                        )}
                      </td>
                      <td>
                        <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {token.type}
                        </span>
                      </td>
                      <td>
                        {readOnly ? (
                          <span className="text-sm text-gray-600">
                            {token.description || '-'}
                          </span>
                        ) : (
                          <input
                            type="text"
                            value={token.description || ''}
                            onChange={(e) => handleTokenEdit(token, 'description', e.target.value)}
                            className="input text-sm"
                            placeholder="Add description..."
                          />
                        )}
                      </td>
                      {!readOnly && (
                        <td>
                          <button className="text-red-600 hover:text-red-800 text-sm">
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
      
      {Object.keys(filteredTokens).length === 0 && searchQuery && (
        <div className="card text-center py-8">
          <p className="text-gray-500">No tokens match your search</p>
        </div>
      )}
    </div>
  );
};
