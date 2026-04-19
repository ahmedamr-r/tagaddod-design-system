import { Link } from 'react-router-dom';
import { componentList } from '../registry';

export function HomePage() {
  return (
    <div>
      <h1>Tagaddod Design System</h1>
      <p>
        Native documentation site for <code>@tagaddod-design/react</code>. Select a component from
        the navigation to view docs, examples, and an interactive playground.
      </p>
      <h2>Available components</h2>
      <ul>
        {componentList.map((entry) => (
          <li key={entry.slug}>
            <Link to={`/components/${entry.slug}`}>{entry.name}</Link>
            {entry.description ? <> — {entry.description}</> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
