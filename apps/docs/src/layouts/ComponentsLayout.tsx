import { Outlet } from 'react-router-dom';
import { ComponentNav } from '../components/ComponentNav';

export function ComponentsLayout() {
  return (
    <div className="docs-body">
      <aside className="docs-nav">
        <ComponentNav />
      </aside>
      <main className="docs-main docs-prose">
        <Outlet />
      </main>
    </div>
  );
}
