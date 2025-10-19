import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@tagaddod-design/react'
import { Toaster } from 'sonner'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="tagaddod"
      defaultDirection="rtl"
      defaultLocale="ar"
      storageKey="tagaddod-theme-settings"
    >
      <App />
      <Toaster position="top-right" />
    </ThemeProvider>
  </React.StrictMode>,
)
