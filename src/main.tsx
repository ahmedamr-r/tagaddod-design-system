import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import styles from the published npm package using specific file path
import '@tagaddod-design/react/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 