import React from 'react';

interface BuiltToken {
  name: string;
  value: string;
  type?: string;
}

interface BuiltTokensTableProps {
  tokens: Record<string, BuiltToken[]>;
}

const renderTokenPreview = (token: BuiltToken) => {
  const { name, value, type } = token;
  
  // Determine type from name or value
  const isColor = type === 'color' || name.includes('color') || value.startsWith('#') || value.startsWith('rgb');
  const isDimension = type === 'dimension' || name.includes('space') || name.includes('size') || /^\d+px$/.test(value);
  const isRadius = type === 'borderRadius' || name.includes('radius');
  const isShadow = type === 'boxShadow' || name.includes('shadow');
  
  if (isColor) {
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
  
  if (isDimension) {
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
  
  if (isRadius) {
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
  
  if (isShadow) {
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

export const BuiltTokensTable: React.FC<BuiltTokensTableProps> = ({ tokens }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedGroups, setExpandedGroups] = React.useState<Set<string>>(new Set());
  
  // Filter tokens based on search query
  const filteredTokens = Object.entries(tokens).reduce((acc, [category, tokenList]) => {
    const filtered = tokenList.filter(token => 
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.value.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    
    return acc;
  }, {} as Record<string, BuiltToken[]>);
  
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
  
  if (Object.keys(tokens).length === 0) {
    return (
      <div className="card text-center py-8">
        <p className="text-gray-500">No built tokens available. Click "Build Tokens" to generate.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="card">
        <input
          type="text"
          placeholder="Search built tokens..."
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
                    <th>CSS Variable</th>
                    <th>Value</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenList.map((token) => (
                    <tr key={token.name}>
                      <td className="font-mono text-sm">
                        --t-{token.name}
                      </td>
                      <td>
                        {renderTokenPreview(token)}
                      </td>
                      <td>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          var(--t-{token.name})
                        </code>
                      </td>
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
          <p className="text-gray-500">No built tokens match your search</p>
        </div>
      )}
    </div>
  );
};
