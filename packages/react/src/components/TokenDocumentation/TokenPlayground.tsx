import React, { useState, useMemo } from 'react';
const tokens = require('@tagaddod-design/tokens/tokens.js');

interface TokenPlaygroundProps {
  className?: string;
}

interface PlaygroundToken {
  name: string;
  cssVar: string;
  value: string;
  type: string;
  category: string;
}

export const TokenPlayground: React.FC<TokenPlaygroundProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTokens, setSelectedTokens] = useState<PlaygroundToken[]>([]);
  const [playgroundContent, setPlaygroundContent] = useState('Design System Playground');
  const [copySuccess, setCopySuccess] = useState<string>('');

  // Parse tokens for playground use
  const parseTokensFlat = (tokenObj: any, path: string[] = []): PlaygroundToken[] => {
    const parsed: PlaygroundToken[] = [];

    Object.entries(tokenObj).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        if ('$value' in value && '$type' in value) {
          const tokenValue = value as any;
          const cssVar = `--t-${path.concat(key).join('-')}`;

          parsed.push({
            name: tokenValue.name || key,
            cssVar,
            value: tokenValue.$value,
            type: tokenValue.$type,
            category: tokenValue.attributes?.category || 'unknown'
          });
        } else {
          parsed.push(...parseTokensFlat(value, path.concat(key)));
        }
      }
    });

    return parsed;
  };

  const allTokens = useMemo(() => parseTokensFlat(tokens), []);

  const filteredTokens = useMemo(() => {
    return allTokens.filter(token =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.cssVar.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.value.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 50); // Limit for performance
  }, [allTokens, searchTerm]);

  const addToken = (token: PlaygroundToken) => {
    if (!selectedTokens.find(t => t.cssVar === token.cssVar)) {
      setSelectedTokens(prev => [...prev, token]);
    }
  };

  const removeToken = (cssVar: string) => {
    setSelectedTokens(prev => prev.filter(t => t.cssVar !== cssVar));
  };

  const generateCSS = () => {
    const css = selectedTokens.map(token =>
      `  ${token.cssVar}: ${token.value};`
    ).join('\n');

    return `:root {\n${css}\n}`;
  };

  const generateTailwindClasses = () => {
    return selectedTokens.map(token => {
      const varName = token.cssVar.replace('--t-', '');
      return `${varName}`;
    }).join(' ');
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getTokenPreview = (token: PlaygroundToken) => {
    switch (token.category) {
      case 'color':
        return (
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: token.value,
              borderRadius: '4px',
              border: '1px solid var(--t-color-border-secondary)'
            }}
          />
        );
      case 'space':
        return (
          <div
            style={{
              width: `${Math.min(parseInt(token.value) || 4, 40)}px`,
              height: '4px',
              backgroundColor: 'var(--t-color-fill-brand)',
              borderRadius: '2px'
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`token-playground ${className || ''}`}>
      <style jsx>{`
        .token-playground {
          font-family: var(--t-font-family-primary);
        }

        .playground-header {
          background: var(--t-color-bg-light);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 24px;
        }

        .playground-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--t-color-text-primary);
          margin-bottom: 8px;
        }

        .playground-description {
          color: var(--t-color-text-secondary);
          margin-bottom: 16px;
        }

        .playground-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .token-browser {
          background: var(--t-color-fill-primary);
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          overflow: hidden;
        }

        .browser-header {
          background: var(--t-color-fill-brand-secondary);
          padding: 16px;
          border-bottom: 1px solid var(--t-color-border-secondary);
        }

        .browser-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--t-color-text-primary);
          margin-bottom: 12px;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--t-color-border-brand);
        }

        .token-list {
          max-height: 400px;
          overflow-y: auto;
          padding: 8px;
        }

        .token-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .token-item:hover {
          background: var(--t-color-fill-hover);
        }

        .token-preview {
          flex-shrink: 0;
        }

        .token-info {
          flex: 1;
          min-width: 0;
        }

        .token-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 11px;
          color: var(--t-color-text-link);
          margin-bottom: 2px;
          word-break: break-all;
        }

        .token-value {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 10px;
          color: var(--t-color-text-secondary);
        }

        .selected-tokens {
          background: var(--t-color-fill-primary);
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          overflow: hidden;
        }

        .selected-header {
          background: var(--t-color-fill-success-secondary);
          padding: 16px;
          border-bottom: 1px solid var(--t-color-border-secondary);
        }

        .selected-list {
          max-height: 400px;
          overflow-y: auto;
          padding: 8px;
        }

        .selected-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px;
          border-radius: 4px;
          background: var(--t-color-bg-light);
          margin-bottom: 4px;
        }

        .remove-btn {
          background: var(--t-color-fill-critical);
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 10px;
          cursor: pointer;
        }

        .remove-btn:hover {
          background: var(--t-color-fill-critical-hover);
        }

        .playground-preview {
          background: var(--t-color-fill-primary);
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
          min-height: 200px;
        }

        .preview-content {
          padding: 20px;
          border-radius: 8px;
          background: var(--t-color-bg-light);
          border: 2px dashed var(--t-color-border-secondary);
          text-align: center;
          font-size: 18px;
          color: var(--t-color-text-primary);
        }

        .export-section {
          background: var(--t-color-fill-primary);
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 8px;
          padding: 20px;
        }

        .export-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--t-color-text-primary);
          margin-bottom: 16px;
        }

        .export-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .export-btn {
          background: var(--t-color-fill-brand);
          color: var(--t-color-text-on-fill);
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .export-btn:hover {
          background: var(--t-color-fill-brand-hover);
        }

        .export-btn.success {
          background: var(--t-color-fill-success);
        }

        .code-block {
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 16px;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          white-space: pre-wrap;
          max-height: 200px;
          overflow-y: auto;
          margin-top: 8px;
        }

        .content-editor {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--t-color-border-secondary);
          border-radius: 6px;
          font-size: 16px;
          margin-bottom: 16px;
          resize: vertical;
          min-height: 60px;
        }

        .empty-state {
          text-align: center;
          color: var(--t-color-text-secondary);
          font-style: italic;
          padding: 20px;
        }
      `}</style>

      <div className="playground-header">
        <h2 className="playground-title">Token Playground</h2>
        <p className="playground-description">
          Search and select design tokens to experiment with combinations, generate CSS, and export for use in your projects.
        </p>
      </div>

      <div className="playground-layout">
        <div className="token-browser">
          <div className="browser-header">
            <h3 className="browser-title">Token Browser</h3>
            <input
              type="text"
              className="search-input"
              placeholder="Search tokens by name, variable, or value..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="token-list">
            {filteredTokens.map((token, index) => (
              <div
                key={index}
                className="token-item"
                onClick={() => addToken(token)}
              >
                <div className="token-preview">
                  {getTokenPreview(token)}
                </div>
                <div className="token-info">
                  <div className="token-name">{token.cssVar}</div>
                  <div className="token-value">{token.value}</div>
                </div>
              </div>
            ))}
            {searchTerm && filteredTokens.length === 0 && (
              <div className="empty-state">No tokens found matching "{searchTerm}"</div>
            )}
          </div>
        </div>

        <div className="selected-tokens">
          <div className="selected-header">
            <h3 className="browser-title">Selected Tokens ({selectedTokens.length})</h3>
          </div>
          <div className="selected-list">
            {selectedTokens.map((token, index) => (
              <div key={index} className="selected-item">
                <div className="token-info">
                  <div className="token-name">{token.cssVar}</div>
                  <div className="token-value">{token.value}</div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeToken(token.cssVar)}
                >
                  Remove
                </button>
              </div>
            ))}
            {selectedTokens.length === 0 && (
              <div className="empty-state">
                Click tokens from the browser to add them here
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="playground-preview">
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Live Preview
        </h3>
        <textarea
          className="content-editor"
          value={playgroundContent}
          onChange={(e) => setPlaygroundContent(e.target.value)}
          placeholder="Enter content to preview with selected tokens..."
        />
        <div
          className="preview-content"
          style={selectedTokens.reduce((styles, token) => {
            if (token.category === 'color' && token.cssVar.includes('bg')) {
              styles.backgroundColor = token.value;
            } else if (token.category === 'color' && token.cssVar.includes('text')) {
              styles.color = token.value;
            } else if (token.category === 'space') {
              styles.padding = token.value;
            }
            return styles;
          }, {} as React.CSSProperties)}
        >
          {playgroundContent}
        </div>
      </div>

      <div className="export-section">
        <h3 className="export-title">Export Selected Tokens</h3>
        <div className="export-buttons">
          <button
            className={`export-btn ${copySuccess === 'css' ? 'success' : ''}`}
            onClick={() => copyToClipboard(generateCSS(), 'css')}
          >
            {copySuccess === 'css' ? '✓ Copied!' : 'Copy CSS'}
          </button>
          <button
            className={`export-btn ${copySuccess === 'vars' ? 'success' : ''}`}
            onClick={() => copyToClipboard(selectedTokens.map(t => t.cssVar).join('\n'), 'vars')}
          >
            {copySuccess === 'vars' ? '✓ Copied!' : 'Copy Variable Names'}
          </button>
          <button
            className={`export-btn ${copySuccess === 'json' ? 'success' : ''}`}
            onClick={() => copyToClipboard(JSON.stringify(selectedTokens, null, 2), 'json')}
          >
            {copySuccess === 'json' ? '✓ Copied!' : 'Copy JSON'}
          </button>
        </div>

        {selectedTokens.length > 0 && (
          <div>
            <strong>CSS Custom Properties:</strong>
            <div className="code-block">{generateCSS()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenPlayground;