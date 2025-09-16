import React, { useState, useMemo, useCallback } from 'react';
const tokens = require('@tagaddod-design/tokens/tokens.js');

// Types for token structure
interface TokenValue {
  $value: string;
  $type: string;
  filePath: string;
  isSource: boolean;
  original: {
    $value: string;
    $type: string;
  };
  name: string;
  attributes: {
    category: string;
    type: string;
    item?: string;
  };
  path: string[];
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface ParsedToken {
  name: string;
  cssVar: string;
  value: string;
  type: string;
  category: string;
  subcategory: string;
  item?: string;
  filePath: string;
  path: string[];
  isReference: boolean;
  referenceTo?: string;
}

interface TokenScannerProps {
  searchTerm?: string;
  categoryFilter?: string;
  showReferences?: boolean;
}

export const TokenScanner: React.FC<TokenScannerProps> = ({
  searchTerm = '',
  categoryFilter = '',
  showReferences = true
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['color']));

  // Parse tokens recursively
  const parseTokens = useCallback((tokenObj: TokenGroup, path: string[] = []): ParsedToken[] => {
    const parsed: ParsedToken[] = [];

    Object.entries(tokenObj).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        if ('$value' in value && '$type' in value) {
          // This is a token
          const tokenValue = value as TokenValue;
          const cssVar = `--t-${path.concat(key).join('-')}`;
          const isReference = tokenValue.$value.startsWith('{') && tokenValue.$value.endsWith('}');

          parsed.push({
            name: tokenValue.name || key,
            cssVar,
            value: tokenValue.$value,
            type: tokenValue.$type,
            category: tokenValue.attributes.category,
            subcategory: tokenValue.attributes.type,
            item: tokenValue.attributes.item,
            filePath: tokenValue.filePath,
            path: tokenValue.path || path.concat(key),
            isReference,
            referenceTo: isReference ? tokenValue.$value.slice(1, -1) : undefined
          });
        } else {
          // This is a nested group - recurse
          parsed.push(...parseTokens(value as TokenGroup, path.concat(key)));
        }
      }
    });

    return parsed;
  }, []);

  // Get all parsed tokens
  const allTokens = useMemo(() => parseTokens(tokens), [parseTokens]);

  // Filter tokens based on search and category
  const filteredTokens = useMemo(() => {
    return allTokens.filter(token => {
      const matchesSearch = !searchTerm ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.cssVar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.value.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !categoryFilter || token.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [allTokens, searchTerm, categoryFilter]);

  // Group tokens by category and subcategory
  const groupedTokens = useMemo(() => {
    const grouped: { [category: string]: { [subcategory: string]: ParsedToken[] } } = {};

    filteredTokens.forEach(token => {
      if (!grouped[token.category]) {
        grouped[token.category] = {};
      }
      if (!grouped[token.category][token.subcategory]) {
        grouped[token.category][token.subcategory] = [];
      }
      grouped[token.category][token.subcategory].push(token);
    });

    return grouped;
  }, [filteredTokens]);

  // Get unique categories for filter
  const categories = useMemo(() => {
    return Array.from(new Set(allTokens.map(token => token.category))).sort();
  }, [allTokens]);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const resolveReference = (referencePath: string): string => {
    const token = allTokens.find(t => t.path.join('.') === referencePath);
    return token ? token.value : referencePath;
  };

  return (
    <div className="token-scanner">
      <style jsx>{`
        .token-scanner {
          font-family: var(--t-font-family-primary);
          max-width: 100%;
          overflow-x: auto;
        }

        .scanner-header {
          margin-bottom: 24px;
          padding: 16px;
          background: var(--t-color-bg-light);
          border-radius: 8px;
        }

        .scanner-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--t-color-text-primary);
        }

        .scanner-stats {
          color: var(--t-color-text-secondary);
          font-size: 14px;
        }

        .category-section {
          margin-bottom: 32px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          overflow: hidden;
        }

        .category-header {
          background: var(--t-color-fill-brand-secondary);
          padding: 16px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }

        .category-header:hover {
          background: var(--t-color-fill-brand-secondary-hover);
        }

        .category-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--t-color-text-primary);
          text-transform: capitalize;
        }

        .category-count {
          background: var(--t-color-fill-primary);
          color: var(--t-color-text-secondary);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          margin-left: 8px;
        }

        .expand-icon {
          color: var(--t-color-text-secondary);
          transition: transform 0.2s;
        }

        .expand-icon.expanded {
          transform: rotate(90deg);
        }

        .subcategory-section {
          padding: 16px;
          border-bottom: 1px solid var(--t-color-border-secondary);
        }

        .subcategory-section:last-child {
          border-bottom: none;
        }

        .subcategory-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--t-color-text-primary);
          margin-bottom: 12px;
          text-transform: capitalize;
        }

        .token-grid {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .token-item {
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          padding: 12px;
          background: var(--t-color-fill-primary);
          transition: border-color 0.2s;
        }

        .token-item:hover {
          border-color: var(--t-color-border-brand);
        }

        .token-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 8px;
        }

        .token-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          color: var(--t-color-text-link);
          cursor: pointer;
          flex: 1;
        }

        .token-name:hover {
          color: var(--t-color-text-link-hover);
        }

        .copy-btn {
          background: none;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 10px;
          cursor: pointer;
          color: var(--t-color-text-secondary);
        }

        .copy-btn:hover {
          background: var(--t-color-fill-hover);
          border-color: var(--t-color-border-brand);
        }

        .token-value {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid var(--t-color-border-secondary);
          flex-shrink: 0;
        }

        .value-text {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 11px;
          color: var(--t-color-text-primary);
          background: var(--t-color-bg-light);
          padding: 2px 6px;
          border-radius: 3px;
        }

        .token-meta {
          font-size: 10px;
          color: var(--t-color-text-secondary);
          margin-top: 8px;
        }

        .reference-badge {
          background: var(--t-color-fill-warning-secondary);
          color: var(--t-color-text-primary);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 10px;
          margin-left: 8px;
        }
      `}</style>

      <div className="scanner-header">
        <h1 className="scanner-title">Design Token Documentation</h1>
        <div className="scanner-stats">
          {allTokens.length} total tokens • {Object.keys(groupedTokens).length} categories
          {searchTerm && ` • ${filteredTokens.length} matching search`}
          {categoryFilter && ` • filtered by ${categoryFilter}`}
        </div>
      </div>

      {Object.entries(groupedTokens).map(([category, subcategories]) => {
        const isExpanded = expandedCategories.has(category);
        const tokenCount = Object.values(subcategories).flat().length;

        return (
          <div key={category} className="category-section">
            <div className="category-header" onClick={() => toggleCategory(category)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="category-title">{category}</span>
                <span className="category-count">{tokenCount}</span>
              </div>
              <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▶</span>
            </div>

            {isExpanded && Object.entries(subcategories).map(([subcategory, tokens]) => (
              <div key={subcategory} className="subcategory-section">
                <h3 className="subcategory-title">{subcategory}</h3>
                <div className="token-grid">
                  {tokens.map((token, index) => (
                    <div key={index} className="token-item">
                      <div className="token-header">
                        <span className="token-name" onClick={() => copyToClipboard(token.cssVar)}>
                          {token.cssVar}
                        </span>
                        <button className="copy-btn" onClick={() => copyToClipboard(token.cssVar)}>
                          Copy
                        </button>
                      </div>

                      <div className="token-value">
                        {token.type === 'color' && (
                          <div
                            className="color-swatch"
                            style={{ backgroundColor: token.isReference ? resolveReference(token.referenceTo!) : token.value }}
                          />
                        )}
                        <span className="value-text">
                          {token.isReference ? `→ ${token.referenceTo}` : token.value}
                        </span>
                        {token.isReference && (
                          <span className="reference-badge">ref</span>
                        )}
                      </div>

                      <div className="token-meta">
                        <div>Type: {token.type}</div>
                        <div>Source: {token.filePath}</div>
                        {token.item && <div>Scale: {token.item}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TokenScanner;