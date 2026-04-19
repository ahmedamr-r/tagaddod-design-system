import { Link } from 'react-router-dom';
import { tokenCategories } from '../components/TokensNav';

export function TokensLandingPage() {
  return (
    <main className="docs-main docs-prose landing-page">
      <header className="landing-hero">
        <h1>Tokens</h1>
        <p>
          Design tokens power colours, spacing, typography, and theming across every brand and
          locale in the system. Start with Colour to see how primitive values map to semantic
          roles, then explore the other categories below.
        </p>
      </header>

      <div className="landing-grid">
        {tokenCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/tokens/${category.slug}`}
            className="landing-card"
          >
            <span className="landing-card__name">{category.name}</span>
            <p className="landing-card__description">{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
