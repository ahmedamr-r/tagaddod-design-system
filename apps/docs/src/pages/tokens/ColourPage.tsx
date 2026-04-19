import { useState } from 'react';
import { SemanticCard } from '../../components/tokens/SemanticCard';
import { copyToClipboard } from '../../tokens/tokenData';
import type { ColorPrimitive } from '../../tokens/tokenData';
import {
  COLOR_HUES,
  SEMANTIC_GROUPS,
  SEMANTIC_GROUP_LABELS,
  SEMANTIC_GROUP_BLURBS,
  getColorPrimitivesByHue,
  getColorSemanticsByGroup,
  pathToCssVar,
} from '../../tokens/tokenData';

const CORE_COLOURS = [
  {
    label: 'Brand',
    description:
      'Used for primary actions, links and brand emphasis. Follows the selected brand theme.',
    path: 'color.fill.brand',
    cssVar: '--t-color-fill-brand',
  },
  {
    label: 'Neutral',
    description:
      'The deepest neutral, used for body text, primary icons and the strongest foreground surfaces.',
    path: 'color.gray.1600',
    cssVar: '--t-color-gray-1600',
  },
];

const SECONDARY_SHADE = '1200' as const;

function PaletteRow({ hue, swatches }: { hue: string; swatches: ColorPrimitive[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const active = swatches.find((s) => s.path === hovered) ?? swatches[11] ?? swatches[0];

  const handleCopy = async (path: string, cssVar: string) => {
    await copyToClipboard(`var(${cssVar})`);
    setCopiedPath(path);
    window.setTimeout(() => setCopiedPath((prev) => (prev === path ? null : prev)), 1200);
  };

  return (
    <div className="token-palette-row">
      <div className="token-palette-row__header">
        <h3 className="token-palette-row__title">{hue}</h3>
        {active && (
          <span className="token-palette-row__active">
            <code>{active.path}</code>
            <span>{active.value.toUpperCase()}</span>
          </span>
        )}
      </div>
      <div className="token-palette-row__swatches">
        {swatches.map((swatch) => (
          <button
            key={swatch.path}
            type="button"
            id={swatch.path.replace(/\./g, '-')}
            className="token-palette-chip"
            style={{ background: swatch.value }}
            onClick={() => handleCopy(swatch.path, swatch.cssVar)}
            onMouseEnter={() => setHovered(swatch.path)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(swatch.path)}
            onBlur={() => setHovered(null)}
            aria-label={`${swatch.path} ${swatch.value}`}
            title={`Click to copy var(${swatch.cssVar})`}
          >
            <span className="token-palette-chip__step">{swatch.step}</span>
            {copiedPath === swatch.path && (
              <span className="token-palette-chip__copied">Copied</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ColourPage() {
  const primitives = getColorPrimitivesByHue();
  const semantics = getColorSemanticsByGroup();

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">COLOUR</h1>
        <p className="token-hero__intro">
          Tagaddod&apos;s colour system is built from a raw, brand-agnostic primitive palette and a
          semantic layer that maps those primitives to intent — text, fill, border, surface and
          more. Semantic tokens are what components consume; primitives are what they resolve to.
        </p>
      </section>

      <section className="token-section" id="core-colours">
        <div className="token-section__title">
          <h2>CORE COLOURS</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            These are the two anchors of the system. <strong>Brand</strong> changes with the active
            theme (Tagaddod or GreenPan); <strong>Neutral</strong> stays constant. Use the brand
            selector in the header to see the brand colour update live.
          </p>
          <div className="token-core-grid">
            {CORE_COLOURS.map((core) => (
              <article key={core.path} className="token-core-card">
                <div
                  className="token-core-card__tile"
                  style={{ background: `var(${core.cssVar})` }}
                  aria-hidden="true"
                />
                <div className="token-core-card__meta">
                  <h3>{core.label}</h3>
                  <p>{core.description}</p>
                  <dl>
                    <div>
                      <dt>Token</dt>
                      <dd><code>{core.path}</code></dd>
                    </div>
                    <div>
                      <dt>CSS variable</dt>
                      <dd><code>{core.cssVar}</code></dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="token-section" id="secondary-colours">
        <div className="token-section__title">
          <h2>SECONDARY COLOURS</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            A mid-key shade of every hue. These are the palette&apos;s &ldquo;face&rdquo; — the
            colours you see in badges, status indicators and sentiment-driven UI.
          </p>
          <div className="token-secondary-grid">
            {COLOR_HUES.map((hue) => {
              const step = primitives[hue]?.find((p) => p.step === SECONDARY_SHADE);
              if (!step) return null;
              return (
                <article
                  key={hue}
                  className="token-secondary-card"
                  style={{ background: `var(${step.cssVar})` }}
                >
                  <div className="token-secondary-card__meta">
                    <h3>{hue.charAt(0).toUpperCase() + hue.slice(1)}</h3>
                    <dl>
                      <div>
                        <dt>HEX</dt>
                        <dd>{step.value.toUpperCase()}</dd>
                      </div>
                      <div>
                        <dt>Token</dt>
                        <dd><code>{step.path}</code></dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="token-section" id="primitive-palette">
        <div className="token-section__title">
          <h2>PRIMITIVE PALETTE</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            The full raw palette: 6 hues × 16 steps, from the lightest tint (100) to the deepest
            shade (1600). Every semantic token below resolves to one of these. Click a swatch to
            copy its CSS variable reference.
          </p>
          {COLOR_HUES.map((hue) => (
            <PaletteRow key={hue} hue={hue} swatches={primitives[hue] ?? []} />
          ))}
        </div>
      </section>

      <section className="token-section" id="product-colours">
        <div className="token-section__title">
          <h2>PRODUCT COLOURS</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            Semantic tokens are the contract between design intent and the primitives below. Each
            card shows the resolved value, the semantic CSS variable, a description of where to
            use it, and the primitive it currently points to. Click the primitive reference to
            jump to it.
          </p>

          {SEMANTIC_GROUPS.map((group) => {
            const tokens = semantics[group];
            if (!tokens || tokens.length === 0) return null;
            return (
              <div key={group} className="token-semantic-group">
                <header className="token-semantic-group__header">
                  <h3>{SEMANTIC_GROUP_LABELS[group]}</h3>
                  <p>{SEMANTIC_GROUP_BLURBS[group]}</p>
                </header>
                <div className="token-semantic-grid">
                  {tokens.map((token) => (
                    <SemanticCard key={token.path} token={token} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="token-section" id="theming">
        <div className="token-section__title">
          <h2>THEMING</h2>
        </div>
        <div className="token-section__body">
          <p className="token-section__blurb">
            Switch the <strong>Brand</strong> selector in the header to see every semantic swatch
            on this page update in real time. Semantic tokens are redirected to different
            primitives per brand — components don&apos;t know or care which one is active.
          </p>
          <div className="token-theming-grid">
            <div
              className="token-theming-card"
              style={{ background: 'var(--t-color-fill-brand)', color: 'var(--t-color-text-on-fill)' }}
            >
              <h4>Active brand</h4>
              <p>
                This card is painted with <code>{pathToCssVar('color.fill.brand')}</code>. It
                follows the current <code>data-theme</code> attribute on <code>&lt;html&gt;</code>.
              </p>
            </div>
            <div
              className="token-theming-card"
              style={{ background: 'var(--t-color-fill-brand-secondary)', color: 'var(--t-color-text-link)' }}
            >
              <h4>Brand, secondary</h4>
              <p>
                The subtler companion: <code>{pathToCssVar('color.fill.brand-secondary')}</code> —
                used for outlined buttons, subtle badges and link backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
