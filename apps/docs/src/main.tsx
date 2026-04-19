if (import.meta.env.DEV) {
  import("react-grab");
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { DocsThemeProvider } from './context/DocsThemeProvider';

import '@tagaddod-design/tokens/tokens.css';
import '@tagaddod-design/tokens/brands/tagaddod.css';
import '@tagaddod-design/tokens/brands/greenpan.css';
import '@tagaddod-design/tokens/locales/en.css';
import '@tagaddod-design/tokens/locales/ar.css';
import '@tagaddod-design/tokens/directions/ltr.css';
import '@tagaddod-design/tokens/directions/rtl.css';
import '@tagaddod-design/react/styles';
import './styles/global.css';

import App from './App';
import { mdxComponents } from './components/mdx-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocsThemeProvider>
      <BrowserRouter>
        <MDXProvider components={mdxComponents}>
          <App />
        </MDXProvider>
      </BrowserRouter>
    </DocsThemeProvider>
  </React.StrictMode>,
);
