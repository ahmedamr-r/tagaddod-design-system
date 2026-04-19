import { getShadowTokens } from '../../tokens/tokenData';

export function ShadowPage() {
  const shadows = getShadowTokens();

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">SHADOW</h1>
        <p className="token-hero__intro">
          Elevation shadows for cards, popovers and stacked surfaces. Shadows are composite
          tokens — they&apos;re compiled by Style Dictionary into a single <code>box-shadow</code>
          declaration.
        </p>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>ELEVATION</h2>
        </div>
        <div className="token-section__body">
          <div className="token-shadow-grid">
            {shadows.map((token) => (
              <article key={token.path} className="token-shadow-card">
                <div
                  className="token-shadow-card__preview"
                  style={{ boxShadow: `var(${token.cssVar})` }}
                  aria-hidden="true"
                />
                <div className="token-shadow-card__meta">
                  <h3><code>{token.path}</code></h3>
                  <code className="token-shadow-card__var">{token.cssVar}</code>
                  <code className="token-shadow-card__value">{token.css}</code>
                  {token.description && (
                    <p className="token-shadow-card__description">{token.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
