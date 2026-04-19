import { getZIndexTokens } from '../../tokens/tokenData';

export function ZIndexPage() {
  const tokens = getZIndexTokens();
  const maxValue = Math.max(...tokens.map((t) => t.value)) || 1;

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">Z-INDEX</h1>
        <p className="token-hero__intro">
          The layering hierarchy for overlays. The design system manages stacking contexts
          automatically — these tokens exist so custom surfaces can slot in at the right layer.
        </p>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>HIERARCHY</h2>
        </div>
        <div className="token-section__body">
          <div className="token-zindex-stack" aria-hidden="true">
            {tokens.map((token, index) => (
              <div
                key={token.path}
                className="token-zindex-stack__layer"
                style={{
                  top: `${index * 14}px`,
                  left: `${index * 18}px`,
                  zIndex: token.value,
                  background: `hsl(${220 - index * 12} 85% ${70 - index * 4}%)`,
                }}
              >
                <code>{token.name}</code>
                <span>{token.value}</span>
              </div>
            ))}
          </div>

          <table className="token-zindex-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>CSS variable</th>
                <th>Value</th>
                <th>Relative</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr key={token.path}>
                  <td><code>{token.path}</code></td>
                  <td><code>{token.cssVar}</code></td>
                  <td>{token.value}</td>
                  <td>
                    <div className="token-zindex-table__bar-track">
                      <div
                        className="token-zindex-table__bar"
                        style={{ width: `${(token.value / maxValue) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
