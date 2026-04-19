import { useState } from 'react';
import { getMotionTokens } from '../../tokens/tokenData';

export function MotionPage() {
  const tokens = getMotionTokens();
  const durations = tokens.filter((t) => t.kind === 'duration');
  const easings = tokens.filter((t) => t.kind === 'easing');
  const transitions = tokens.filter((t) => t.kind === 'transition');

  const [playKey, setPlayKey] = useState(0);
  const replay = () => setPlayKey((k) => k + 1);

  return (
    <div className="token-page">
      <section className="token-hero">
        <h1 className="token-hero__title">MOTION</h1>
        <p className="token-hero__intro">
          Durations, easings and composed transitions that keep animations consistent across the
          system. Click <strong>Replay</strong> below to re-run each preview.
        </p>
        <button type="button" className="token-motion-replay" onClick={replay}>
          Replay animations
        </button>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>DURATION</h2>
        </div>
        <div className="token-section__body">
          <div className="token-motion-grid">
            {durations.map((token) => (
              <article key={token.path} className="token-motion-card">
                <div className="token-motion-card__stage">
                  <span
                    key={playKey}
                    className="token-motion-card__dot"
                    style={{
                      animationDuration: `var(${token.cssVar})`,
                      animationTimingFunction: 'var(--t-easing-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
                    }}
                  />
                </div>
                <div className="token-motion-card__meta">
                  <code>{token.path}</code>
                  <span>{token.value}</span>
                  <code className="token-motion-card__var">{token.cssVar}</code>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="token-section">
        <div className="token-section__title">
          <h2>EASING</h2>
        </div>
        <div className="token-section__body">
          <div className="token-motion-grid">
            {easings.map((token) => (
              <article key={token.path} className="token-motion-card">
                <div className="token-motion-card__stage">
                  <span
                    key={playKey}
                    className="token-motion-card__dot"
                    style={{
                      animationDuration: '900ms',
                      animationTimingFunction: `var(${token.cssVar})`,
                    }}
                  />
                </div>
                <div className="token-motion-card__meta">
                  <code>{token.path}</code>
                  <span>{token.value}</span>
                  <code className="token-motion-card__var">{token.cssVar}</code>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {transitions.length > 0 && (
        <section className="token-section">
          <div className="token-section__title">
            <h2>TRANSITION</h2>
          </div>
          <div className="token-section__body">
            <div className="token-motion-grid">
              {transitions.map((token) => (
                <article key={token.path} className="token-motion-card">
                  <div className="token-motion-card__meta">
                    <code>{token.path}</code>
                    <span>{token.value}</span>
                    <code className="token-motion-card__var">{token.cssVar}</code>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
