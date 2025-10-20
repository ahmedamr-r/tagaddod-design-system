import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, Sonner } from '@tagaddod-design/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider
        defaultTheme="tagaddod"
        storageKey="tagaddod-theme-settings"
      >
        <App />
        <Sonner position="top-right" />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
