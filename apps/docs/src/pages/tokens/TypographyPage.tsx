import { getTypographyTokens } from '../../tokens/tokenData';

const SAMPLE = 'The quick brown fox jumps over the lazy dog';
const SAMPLE_AR = 'الثعلب البني السريع يقفز فوق الكلب الكسول';

export function TypographyPage() {
  const tokens = getTypographyTokens();
  const headings = tokens.filter((t) => t.group === 'heading');
  const body = tokens.filter((t) => t.group === 'body');
  const caption = tokens.filter((t) => t.group === 'caption');

  const renderSpecimen = (token: ReturnType<typeof getTypographyTokens>[number]) => (
    <article key={token.path} className="token-type-card">
      <div className="token-type-card__meta">
        <code>{token.path}</code>
        <code className="token-type-card__var">{token.cssVar}</code>
        <span className="token-type-card__size">
          {token.fontSizePx} · {token.fontWeight}
        </span>
      </div>
      <p
        className="token-type-card__specimen"
        style={{
          fontFamily: 'var(--t-font-family-primary)',
          fontWeight: token.fontWeight as React.CSSProperties['fontWeight'],
          fontSize: `var(${token.cssVar.replace('--t-typography', '--t-font-size')}, ${token.fontSize})`,
          lineHeight: 1.25,
        }}
      >
        {SAMPLE}
      </p>
    </article>
  );

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">TYPOGRAPHY</h1>
        <p className="token-hero__intro">
          Heading, body and caption styles. Typography tokens automatically switch font-family
          between Outfit (English/LTR) and Tajawal (Arabic/RTL) via <code>[lang]</code>
          selectors — switch the language in the header to see both rendered live.
        </p>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>HEADINGS</h2>
        </div>
        <div className="token-section__body">
          <div className="token-type-grid">{headings.map(renderSpecimen)}</div>
        </div>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>BODY</h2>
        </div>
        <div className="token-section__body">
          <div className="token-type-grid">{body.map(renderSpecimen)}</div>
        </div>
      </section>

      {caption.length > 0 && (
        <section className="token-section">
          <div className="token-section__title">
            <h2>CAPTION</h2>
          </div>
          <div className="token-section__body">
            <div className="token-type-grid">{caption.map(renderSpecimen)}</div>
          </div>
        </section>
      )}

      <section className="token-section">
        <div className="token-section__title">
          <h2>BILINGUAL</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            Both scripts use the same semantic tokens — the <code>font-family</code> swap happens
            at the locale layer.
          </p>
          <div className="token-type-bilingual">
            <div lang="en" dir="ltr">
              <h3>English (Outfit)</h3>
              <p style={{ fontFamily: 'var(--t-font-family-primary)', fontSize: '1.25rem' }}>
                {SAMPLE}
              </p>
            </div>
            <div lang="ar" dir="rtl">
              <h3>العربية (Tajawal)</h3>
              <p style={{ fontFamily: 'var(--t-font-family-primary)', fontSize: '1.25rem' }}>
                {SAMPLE_AR}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
