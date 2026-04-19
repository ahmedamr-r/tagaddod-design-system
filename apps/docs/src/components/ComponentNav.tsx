import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { componentList } from '../registry';

export function ComponentNav() {
  return (
    <nav aria-label="Components">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 4 }}>
        {componentList.map((entry) => (
          <li key={entry.slug}>
            <NavLink
              to={`/components/${entry.slug}`}
              className={({ isActive }) =>
                clsx('docs-nav-link', isActive && 'docs-nav-link--active')
              }
            >
              {entry.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
