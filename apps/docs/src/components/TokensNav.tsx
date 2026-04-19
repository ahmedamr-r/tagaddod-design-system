import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export interface TokenCategory {
  slug: string;
  name: string;
  description: string;
}

export const tokenCategories: TokenCategory[] = [
  {
    slug: 'colour',
    name: 'Colour',
    description: 'Primitives and semantic colour tokens with brand and state variants.',
  },
  {
    slug: 'spacing',
    name: 'Spacing',
    description: 'The 4px-based spacing scale that powers padding, margins and gaps.',
  },
  {
    slug: 'typography',
    name: 'Typography',
    description: 'Heading, body and caption styles with English/Arabic font switching.',
  },
  {
    slug: 'radii',
    name: 'Radii',
    description: 'Corner radii from sharp to fully rounded pills.',
  },
  {
    slug: 'shadow',
    name: 'Shadow',
    description: 'Elevation shadows for cards, popovers and stacked surfaces.',
  },
  {
    slug: 'motion',
    name: 'Motion',
    description: 'Durations, easings and composed transitions.',
  },
  {
    slug: 'z-index',
    name: 'Z-index',
    description: 'Layering hierarchy for dropdowns, modals, toasts and tooltips.',
  },
];

export function TokensNav() {
  return (
    <nav aria-label="Tokens">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 4 }}>
        {tokenCategories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/tokens/${category.slug}`}
              className={({ isActive }) =>
                clsx('docs-nav-link', isActive && 'docs-nav-link--active')
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
