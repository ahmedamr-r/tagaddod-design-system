import { useState } from 'react';
import clsx from 'clsx';
import { copyToClipboard } from '../../tokens/tokenData';

interface TokenSwatchProps {
  /** Dotted path, e.g. "color.blue.1200" — used as the display label. */
  path: string;
  /** CSS custom property name, e.g. "--t-color-blue-1200". */
  cssVar: string;
  /** Hex/rgba value. */
  value: string;
  /** When true, render the tile using `var(cssVar)` instead of `value` so brand overrides apply live. */
  useCssVar?: boolean;
  /** Controls tile size preset. */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show the path + value meta below the tile. */
  showMeta?: boolean;
}

export function TokenSwatch({
  path,
  cssVar,
  value,
  useCssVar = false,
  size = 'md',
  showMeta = true,
}: TokenSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(`var(${cssVar})`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  const background = useCssVar ? `var(${cssVar})` : value;

  return (
    <button
      type="button"
      className={clsx('token-swatch', `token-swatch--${size}`)}
      onClick={handleCopy}
      aria-label={`Copy ${cssVar}`}
      title={`Click to copy var(${cssVar})`}
    >
      <span
        className="token-swatch__tile"
        style={{ background }}
        aria-hidden="true"
      />
      {showMeta && (
        <span className="token-swatch__meta">
          <span className="token-swatch__name">{path}</span>
          <span className="token-swatch__value">{value.toUpperCase()}</span>
        </span>
      )}
      {copied && <span className="token-swatch__copied">Copied</span>}
    </button>
  );
}
