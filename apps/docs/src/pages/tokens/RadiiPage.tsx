import { getBorderRadiusTokens, getBorderWidthTokens } from '../../tokens/tokenData';

export function RadiiPage() {
  const radii = getBorderRadiusTokens();
  const widths = getBorderWidthTokens();

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">RADII</h1>
        <p className="token-hero__intro">
          Corner radii from sharp rectangles to fully-rounded pills, plus the border-width scale
          used across inputs, cards and interactive elements.
        </p>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>BORDER RADIUS</h2>
        </div>
        <div className="token-section__body">
          <div className="token-radii-grid">
            {radii.map((token) => (
              <article key={token.path} className="token-radii-card">
                <div
                  className="token-radii-card__preview"
                  style={{ borderRadius: `var(${token.cssVar})` }}
                  aria-hidden="true"
                />
                <div className="token-radii-card__meta">
                  <code>{token.path}</code>
                  <span className="token-radii-card__value">{token.px}</span>
                  <code className="token-radii-card__var">{token.cssVar}</code>
                  {token.description && (
                    <p className="token-radii-card__description">{token.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>BORDER WIDTH</h2>
        </div>
        <div className="token-section__body">
          <div className="token-radii-grid">
            {widths.map((token) => (
              <article key={token.path} className="token-radii-card">
                <div
                  className="token-radii-card__preview token-radii-card__preview--outlined"
                  style={{ borderWidth: `var(${token.cssVar})` }}
                  aria-hidden="true"
                />
                <div className="token-radii-card__meta">
                  <code>{token.path}</code>
                  <span className="token-radii-card__value">{token.px}</span>
                  <code className="token-radii-card__var">{token.cssVar}</code>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
