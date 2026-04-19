import { Route, Routes, Navigate } from 'react-router-dom';
import { DocsHeader } from './components/DocsHeader';
import { ComponentNav } from './components/ComponentNav';
import { HomePage } from './pages/HomePage';
import { ComponentPage } from './pages/ComponentPage';
import { componentList } from './registry';

export default function App() {
  const firstSlug = componentList[0]?.slug;

  return (
    <div className="docs-layout">
      <DocsHeader />
      <div className="docs-body">
        <aside className="docs-nav">
          <ComponentNav />
        </aside>
        <main className="docs-main docs-prose">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components/:slug" element={<ComponentPage />} />
            {firstSlug ? (
              <Route
                path="*"
                element={<Navigate to={`/components/${firstSlug}`} replace />}
              />
            ) : null}
          </Routes>
        </main>
      </div>
    </div>
  );
}
