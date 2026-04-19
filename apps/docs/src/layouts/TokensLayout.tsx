import { Outlet } from 'react-router-dom';
import { TokensNav } from '../components/TokensNav';

export function TokensLayout() {
  return (
    <div className="docs-body">
      <aside className="docs-nav">
        <TokensNav />
      </aside>
      <main className="docs-main docs-prose">
        <Outlet />
      </main>
    </div>
  );
}
