import { useState } from 'react';
import type { ColorSemantic } from '../../tokens/tokenData';
import { copyToClipboard } from '../../tokens/tokenData';

interface SemanticCardProps {
  token: ColorSemantic;
  /** When true, the swatch uses the CSS variable so brand/theme switches update live. */
  live?: boolean;
}

export function SemanticCard({ token, live = true }: SemanticCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(`var(${token.cssVar})`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  const background = live ? `var(${token.cssVar})` : token.resolvedValue;

  return (
    <article className="semantic-card">
      <button
        type="button"
        className="semantic-card__preview"
        style={{ background }}
        onClick={handleCopy}
        aria-label={`Copy ${token.cssVar}`}
        title={`Click to copy var(${token.cssVar})`}
      >
        {copied && <span className="semantic-card__copied">Copied</span>}
      </button>
      <div className="semantic-card__body">
        <header className="semantic-card__header">
          <h4 className="semantic-card__name">{token.path.replace(/^color\./, '')}</h4>
          <code className="semantic-card__var">{token.cssVar}</code>
        </header>
        {token.description && (
          <p className="semantic-card__description">{token.description}</p>
        )}
        <footer className="semantic-card__footer">
          {token.referencePath ? (
            <a
              href={`#${token.referencePath.replace(/\./g, '-')}`}
              className="semantic-card__ref"
              title="Jump to primitive"
            >
              <span className="semantic-card__ref-arrow" aria-hidden="true">
                →
              </span>
              <span className="semantic-card__ref-path">{token.referencePath}</span>
              <span
                className="semantic-card__ref-swatch"
                style={{ background: token.resolvedValue }}
                aria-hidden="true"
              />
              <span className="semantic-card__ref-value">
                {token.resolvedValue.toUpperCase()}
              </span>
            </a>
          ) : (
            <span className="semantic-card__ref semantic-card__ref--raw">
              <span className="semantic-card__ref-value">
                {token.resolvedValue.toUpperCase()}
              </span>
            </span>
          )}
        </footer>
      </div>
    </article>
  );
}
