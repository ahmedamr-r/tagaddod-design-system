import React, { useState, useMemo } from 'react';

// Brand token data - we'll read from the actual CSS files
interface BrandToken {
  variable: string;
  tagaddodValue?: string;
  greenpanValue?: string;
  isDifferent: boolean;
  category: string;
}

interface BrandTokenComparisonProps {
  className?: string;
}

export const BrandTokenComparison: React.FC<BrandTokenComparisonProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showOnlyDifferences, setShowOnlyDifferences] = useState<boolean>(true);

  // Parse brand-specific tokens from CSS content
  const parseBrandTokens = (): BrandToken[] => {
    // In a real implementation, we'd fetch and parse the actual CSS files
    // For now, we'll create a representative sample based on your token structure
    const brandTokens: BrandToken[] = [
      {
        variable: '--t-color-border-brand',
        tagaddodValue: '#3959fe',
        greenpanValue: '#009f4d',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-border-brand-hover',
        tagaddodValue: '#0b48fe',
        greenpanValue: '#00703c',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-border-brand-active',
        tagaddodValue: '#0033c2',
        greenpanValue: '#00522b',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-fill-brand',
        tagaddodValue: '#3959fe',
        greenpanValue: '#009f4d',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-fill-brand-hover',
        tagaddodValue: '#0b48fe',
        greenpanValue: '#00703c',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-fill-brand-active',
        tagaddodValue: '#0033c2',
        greenpanValue: '#00522b',
        isDifferent: true,
        category: 'color'
      },
      {
        variable: '--t-color-fill-brand-secondary',
        tagaddodValue: '#f1f2ff',
        greenpanValue: undefined, // Uses default from core tokens
        isDifferent: false,
        category: 'color'
      },
      {
        variable: '--t-color-text-link',
        tagaddodValue: '#3959fe',
        greenpanValue: undefined,
        isDifferent: false,
        category: 'color'
      },
      {
        variable: '--t-color-text-link-hover',
        tagaddodValue: '#0b48fe',
        greenpanValue: undefined,
        isDifferent: false,
        category: 'color'
      },
      {
        variable: '--t-color-green-1200',
        tagaddodValue: '#007d44',
        greenpanValue: '#009f4d',
        isDifferent: true,
        category: 'color'
      }
    ];

    return brandTokens;
  };

  const brandTokens = useMemo(() => parseBrandTokens(), []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(brandTokens.map(token => token.category)));
    return ['all', ...cats];
  }, [brandTokens]);

  const filteredTokens = useMemo(() => {
    return brandTokens.filter(token => {
      const matchesCategory = selectedCategory === 'all' || token.category === selectedCategory;
      const matchesDifference = !showOnlyDifferences || token.isDifferent;
      return matchesCategory && matchesDifference;
    });
  }, [brandTokens, selectedCategory, showOnlyDifferences]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`brand-comparison ${className || ''}`}>
      <style jsx>{`
        .brand-comparison {
          font-family: var(--t-font-family-primary);
        }

        .comparison-header {
          background: var(--t-color-bg-light);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 24px;
        }

        .comparison-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--t-color-text-primary);
          margin-bottom: 8px;
        }

        .comparison-description {
          color: var(--t-color-text-secondary);
          margin-bottom: 16px;
        }

        .comparison-controls {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
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

        .control-select {
          padding: 6px 10px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 4px;
          font-size: 14px;
          background: var(--t-color-fill-primary);
        }

        .checkbox-control {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }

        .checkbox-control input {
          width: 16px;
          height: 16px;
        }

        .tokens-grid {
          display: grid;
          gap: 12px;
        }

        .token-comparison-item {
          background: var(--t-color-fill-primary);
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          overflow: hidden;
        }

        .token-comparison-item.different {
          border-left: 4px solid var(--t-color-fill-warning);
        }

        .token-header {
          background: var(--t-color-fill-brand-secondary);
          padding: 12px 16px;
          border-bottom: 1px solid var(--t-color-border-secondary);
        }

        .token-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          color: var(--t-color-text-link);
          cursor: pointer;
          margin-bottom: 4px;
        }

        .token-name:hover {
          color: var(--t-color-text-link-hover);
        }

        .token-category-badge {
          background: var(--t-color-fill-primary);
          color: var(--t-color-text-secondary);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 10px;
          text-transform: uppercase;
        }

        .brand-values {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--t-color-border-secondary);
        }

        .brand-value {
          background: var(--t-color-fill-primary);
          padding: 16px;
        }

        .brand-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--t-color-text-secondary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .brand-label.tagaddod {
          color: #3959fe;
        }

        .brand-label.greenpan {
          color: #009f4d;
        }

        .value-display {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .color-swatch {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid var(--t-color-border-secondary);
          flex-shrink: 0;
        }

        .value-text {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          color: var(--t-color-text-primary);
          background: var(--t-color-bg-light);
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .value-text:hover {
          background: var(--t-color-fill-hover);
        }

        .inherited-indicator {
          color: var(--t-color-text-secondary);
          font-style: italic;
          font-size: 11px;
        }

        .difference-indicator {
          background: var(--t-color-fill-warning-secondary);
          color: var(--t-color-text-primary);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 10px;
          margin-left: 8px;
        }

        .stats {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          font-size: 12px;
          color: var(--t-color-text-secondary);
        }

        .stat {
          background: var(--t-color-fill-primary);
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid var(--t-color-border-secondary);
        }
      `}</style>

      <div className="comparison-header">
        <h2 className="comparison-title">Brand Token Comparison</h2>
        <p className="comparison-description">
          Compare token values between Tagaddod and GreenPan brands. Only tokens with brand-specific
          overrides are shown unless "Show all tokens" is enabled.
        </p>

        <div className="comparison-controls">
          <div className="control-group">
            <label className="control-label">Category</label>
            <select
              className="control-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="checkbox-control">
            <input
              type="checkbox"
              id="show-differences"
              checked={showOnlyDifferences}
              onChange={(e) => setShowOnlyDifferences(e.target.checked)}
            />
            <label htmlFor="show-differences" className="control-label">
              Show only differences
            </label>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            Total tokens: {brandTokens.length}
          </div>
          <div className="stat">
            Different values: {brandTokens.filter(t => t.isDifferent).length}
          </div>
          <div className="stat">
            Filtered: {filteredTokens.length}
          </div>
        </div>
      </div>

      <div className="tokens-grid">
        {filteredTokens.map((token, index) => (
          <div
            key={index}
            className={`token-comparison-item ${token.isDifferent ? 'different' : ''}`}
          >
            <div className="token-header">
              <div
                className="token-name"
                onClick={() => copyToClipboard(token.variable)}
              >
                {token.variable}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="token-category-badge">{token.category}</span>
                {token.isDifferent && (
                  <span className="difference-indicator">Different</span>
                )}
              </div>
            </div>

            <div className="brand-values">
              <div className="brand-value">
                <div className="brand-label tagaddod">Tagaddod</div>
                <div className="value-display">
                  {token.tagaddodValue ? (
                    <>
                      {token.category === 'color' && (
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: token.tagaddodValue }}
                        />
                      )}
                      <span
                        className="value-text"
                        onClick={() => copyToClipboard(token.tagaddodValue!)}
                      >
                        {token.tagaddodValue}
                      </span>
                    </>
                  ) : (
                    <span className="inherited-indicator">Uses core token</span>
                  )}
                </div>
              </div>

              <div className="brand-value">
                <div className="brand-label greenpan">GreenPan</div>
                <div className="value-display">
                  {token.greenpanValue ? (
                    <>
                      {token.category === 'color' && (
                        <div
                          className="color-swatch"
                          style={{ backgroundColor: token.greenpanValue }}
                        />
                      )}
                      <span
                        className="value-text"
                        onClick={() => copyToClipboard(token.greenpanValue!)}
                      >
                        {token.greenpanValue}
                      </span>
                    </>
                  ) : (
                    <span className="inherited-indicator">Uses core token</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTokens.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: 'var(--t-color-text-secondary)',
          background: 'var(--t-color-bg-light)',
          borderRadius: '8px'
        }}>
          No tokens match the current filters.
        </div>
      )}
    </div>
  );
};

export default BrandTokenComparison;