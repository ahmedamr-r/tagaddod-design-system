import React from 'react';

interface TokenVisualizerProps {
  tokens: Array<{
    name: string;
    cssVar: string;
    value: string;
    type: string;
    category: string;
    subcategory: string;
    item?: string;
  }>;
  onCopy?: (text: string) => void;
}

// Color Token Grid Visualizer
export const ColorTokenGrid: React.FC<TokenVisualizerProps> = ({ tokens, onCopy }) => {
  const colorTokens = tokens.filter(token => token.type === 'color');

  return (
    <div className="color-grid">
      <style jsx>{`
        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin: 16px 0;
        }

        .color-card {
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          overflow: hidden;
          background: var(--t-color-fill-primary);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .color-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .color-swatch {
          height: 80px;
          width: 100%;
          position: relative;
          cursor: pointer;
        }

        .color-info {
          padding: 12px;
        }

        .color-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 11px;
          color: var(--t-color-text-link);
          margin-bottom: 4px;
          word-break: break-all;
        }

        .color-value {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          color: var(--t-color-text-primary);
          background: var(--t-color-bg-light);
          padding: 4px 6px;
          border-radius: 4px;
          display: inline-block;
        }

        .contrast-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 11px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.9);
          color: #000;
        }
      `}</style>

      {colorTokens.map((token, index) => (
        <div key={index} className="color-card">
          <div
            className="color-swatch"
            style={{ backgroundColor: token.value }}
            onClick={() => onCopy?.(token.cssVar)}
          >
            <span className="contrast-text">{token.value}</span>
          </div>
          <div className="color-info">
            <div className="color-name">{token.cssVar}</div>
            <div className="color-value">{token.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Typography Token Previews
export const TypographyTokenPreview: React.FC<TokenVisualizerProps> = ({ tokens, onCopy }) => {
  const typographyTokens = tokens.filter(token =>
    token.category === 'font' || token.subcategory.includes('font') || token.subcategory.includes('text')
  );

  return (
    <div className="typography-preview">
      <style jsx>{`
        .typography-preview {
          margin: 16px 0;
        }

        .typography-item {
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
          background: var(--t-color-fill-primary);
        }

        .typography-sample {
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .typography-meta {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 11px;
          color: var(--t-color-text-secondary);
          background: var(--t-color-bg-light);
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .typography-meta:hover {
          background: var(--t-color-fill-hover);
        }
      `}</style>

      {typographyTokens.map((token, index) => {
        const getFontProperty = () => {
          if (token.subcategory.includes('size')) return { fontSize: token.value };
          if (token.subcategory.includes('weight')) return { fontWeight: token.value };
          if (token.subcategory.includes('family')) return { fontFamily: token.value };
          if (token.subcategory.includes('height')) return { lineHeight: token.value };
          return {};
        };

        return (
          <div key={index} className="typography-item">
            <div
              className="typography-sample"
              style={getFontProperty()}
            >
              The quick brown fox jumps over the lazy dog
            </div>
            <div
              className="typography-meta"
              onClick={() => onCopy?.(token.cssVar)}
            >
              {token.cssVar}: {token.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Spacing Scale Visualizer
export const SpacingTokenScale: React.FC<TokenVisualizerProps> = ({ tokens, onCopy }) => {
  const spacingTokens = tokens
    .filter(token => token.category === 'space' || token.subcategory.includes('space'))
    .sort((a, b) => {
      const aNum = parseInt(a.item || '0');
      const bNum = parseInt(b.item || '0');
      return aNum - bNum;
    });

  return (
    <div className="spacing-scale">
      <style jsx>{`
        .spacing-scale {
          margin: 16px 0;
        }

        .spacing-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          background: var(--t-color-fill-primary);
        }

        .spacing-visual {
          background: var(--t-color-fill-brand);
          height: 20px;
          margin-right: 16px;
          min-width: 4px;
          border-radius: 2px;
        }

        .spacing-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spacing-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          color: var(--t-color-text-link);
          cursor: pointer;
        }

        .spacing-value {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 11px;
          color: var(--t-color-text-secondary);
          background: var(--t-color-bg-light);
          padding: 2px 6px;
          border-radius: 3px;
        }
      `}</style>

      {spacingTokens.map((token, index) => {
        const pixelValue = parseFloat(token.value.replace('px', '')) || 4;

        return (
          <div key={index} className="spacing-item">
            <div
              className="spacing-visual"
              style={{ width: `${Math.max(pixelValue, 4)}px` }}
            />
            <div className="spacing-info">
              <span
                className="spacing-name"
                onClick={() => onCopy?.(token.cssVar)}
              >
                {token.cssVar}
              </span>
              <span className="spacing-value">{token.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Token Hierarchy Tree
export const TokenHierarchyTree: React.FC<{ tokens: TokenVisualizerProps['tokens'] }> = ({ tokens }) => {
  const buildHierarchy = () => {
    const hierarchy: any = {};

    tokens.forEach(token => {
      const parts = token.cssVar.replace('--t-', '').split('-');
      let current = hierarchy;

      parts.forEach((part, index) => {
        if (!current[part]) {
          current[part] = index === parts.length - 1 ? token : {};
        }
        current = current[part];
      });
    });

    return hierarchy;
  };

  const renderTree = (node: any, level = 0): React.ReactNode => {
    return Object.entries(node).map(([key, value]) => (
      <div key={key} style={{ marginLeft: `${level * 20}px` }}>
        {value.cssVar ? (
          <div className="tree-leaf">
            <span className="tree-token-name">{value.cssVar}</span>
            <span className="tree-token-value">{value.value}</span>
          </div>
        ) : (
          <div className="tree-branch">
            <span className="tree-branch-name">{key}</span>
            {renderTree(value, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="hierarchy-tree">
      <style jsx>{`
        .hierarchy-tree {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          margin: 16px 0;
          padding: 16px;
          background: var(--t-color-bg-light);
          border-radius: 8px;
          max-height: 400px;
          overflow-y: auto;
        }

        .tree-branch {
          margin: 4px 0;
        }

        .tree-branch-name {
          color: var(--t-color-text-primary);
          font-weight: 600;
        }

        .tree-leaf {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2px 0;
          border-bottom: 1px solid var(--t-color-border-secondary);
        }

        .tree-token-name {
          color: var(--t-color-text-link);
        }

        .tree-token-value {
          color: var(--t-color-text-secondary);
          font-size: 10px;
        }
      `}</style>
      {renderTree(buildHierarchy())}
    </div>
  );
};

// Search and Filter Controls
interface TokenControlsProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  totalTokens: number;
  filteredTokens: number;
}

export const TokenControls: React.FC<TokenControlsProps> = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  categories,
  totalTokens,
  filteredTokens
}) => {
  return (
    <div className="token-controls">
      <style jsx>{`
        .token-controls {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: var(--t-color-bg-light);
          border-radius: 8px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          align-items: center;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .control-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--t-color-text-secondary);
        }

        .search-input {
          padding: 8px 12px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          font-size: 14px;
          min-width: 200px;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--t-color-border-brand);
        }

        .category-select {
          padding: 8px 12px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          font-size: 14px;
          background: var(--t-color-fill-primary);
        }

        .stats {
          margin-left: auto;
          font-size: 12px;
          color: var(--t-color-text-secondary);
        }
      `}</style>

      <div className="control-group">
        <label className="control-label">Search tokens</label>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, value, or CSS variable..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label className="control-label">Category</label>
        <select
          className="category-select"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="stats">
        Showing {filteredTokens} of {totalTokens} tokens
      </div>
    </div>
  );
};