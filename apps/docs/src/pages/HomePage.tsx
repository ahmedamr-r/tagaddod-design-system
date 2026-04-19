import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main className="docs-main docs-prose home-page">
      <section className="home-hero">
        <h1>Tagaddod Design System</h1>
        <p>
          The official documentation for <code>@tagaddod-design</code>. Explore the design tokens
          that drive theming across brands and locales, and the React components that put them to
          work in production.
        </p>
      </section>

      <section className="home-choices">
        <Link to="/tokens" className="home-choice">
          <div className="home-choice__header">
            <h2>Tokens</h2>
          </div>
          <p>
            Colors, spacing, typography, radii, and motion — the primitives every component is
            built on, with multi-brand and RTL support.
          </p>
          <span className="home-choice__cta">Explore tokens →</span>
        </Link>

        <Link to="/components" className="home-choice">
          <div className="home-choice__header">
            <h2>Components</h2>
          </div>
          <p>
            Accessible React components with live playgrounds, usage examples, props references,
            and full RTL support out of the box.
          </p>
          <span className="home-choice__cta">Browse components →</span>
        </Link>
      </section>
    </main>
  );
}
