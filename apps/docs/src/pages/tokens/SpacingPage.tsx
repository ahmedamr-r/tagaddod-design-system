import { getSpacingTokens } from '../../tokens/tokenData';

export function SpacingPage() {
  const tokens = getSpacingTokens();
  const maxWidthRem = Math.max(
    ...tokens.map((t) => {
      const m = t.value.match(/^([\d.]+)rem$/);
      return m ? Number(m[1]) : 0;
    })
  );

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">SPACING</h1>
        <p className="token-hero__intro">
          A 4px-based scale that drives padding, margin and gap values across every component.
          Each step aliases a <code>size.*</code> primitive so spacing stays consistent with
          typography and sizing tokens.
        </p>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>SCALE</h2>
        </div>
        <div className="token-section__body">
          <div className="token-ruler">
            {tokens.map((token) => (
              <div key={token.path} className="token-ruler__row">
                <div className="token-ruler__label">
                  <code>{token.path}</code>
                  <span className="token-ruler__value">{token.px}</span>
                </div>
                <div className="token-ruler__track" aria-hidden="true">
                  <div
                    className="token-ruler__bar"
                    style={{
                      width: `calc(var(${token.cssVar}) / ${maxWidthRem}rem * 100%)`,
                    }}
                  />
                </div>
                <code className="token-ruler__var">{token.cssVar}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {tokens.some((t) => t.description) && (
        <section className="token-section">
          <div className="token-section__title">
            <h2>GUIDANCE</h2>
          </div>
          <div className="token-section__body">
            <ul className="token-guidance-list">
              {tokens
                .filter((t) => t.description)
                .map((t) => (
                  <li key={t.path}>
                    <code>{t.path}</code>
                    <span>{t.description}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
