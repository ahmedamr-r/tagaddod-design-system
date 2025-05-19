import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// No need to import styles from the design system - they should be injected

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 