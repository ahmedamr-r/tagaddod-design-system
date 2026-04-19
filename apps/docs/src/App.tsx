import { Route, Routes } from 'react-router-dom';
import { DocsHeader } from './components/DocsHeader';
import { ComponentsLayout } from './layouts/ComponentsLayout';
import { TokensLayout } from './layouts/TokensLayout';
import { HomePage } from './pages/HomePage';
import { ComponentsLandingPage } from './pages/ComponentsLandingPage';
import { TokensLandingPage } from './pages/TokensLandingPage';
import { TokenCategoryPage } from './pages/TokenCategoryPage';
import { ComponentPage } from './pages/ComponentPage';

export default function App() {
  return (
    <div className="docs-layout">
      <DocsHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tokens" element={<TokensLandingPage />} />
        <Route element={<TokensLayout />}>
          <Route path="/tokens/:slug" element={<TokenCategoryPage />} />
        </Route>
        <Route path="/components" element={<ComponentsLandingPage />} />
        <Route element={<ComponentsLayout />}>
          <Route path="/components/:slug" element={<ComponentPage />} />
        </Route>
      </Routes>
    </div>
  );
}
