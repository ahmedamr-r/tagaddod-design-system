import { Routes, Route, Navigate } from 'react-router-dom'
import { SidebarWithRouter, useTheme } from '@tagaddod-design/react'
import { IconUsers, IconUserCheck, IconPackage } from '@tabler/icons-react'
import { AppTopBar } from './components/AppTopBar'
import { UsersPage } from './pages/UsersPage'
import { CustomersPage } from './pages/CustomersPage'
import { ProductsPage } from './pages/ProductsPage'
import { getTranslations } from './lib/translations'

function App() {
  const { locale } = useTheme()
  const t = getTranslations(locale)

  // Menu items configuration for SidebarWithRouter
  const menuItems = [
    {
      id: 'users',
      icon: IconUsers,
      label: t.users,
      hasChildren: false
    },
    {
      id: 'customers',
      icon: IconUserCheck,
      label: t.customers,
      hasChildren: false
    },
    {
      id: 'products',
      icon: IconPackage,
      label: t.products,
      hasChildren: false
    }
  ]

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--t-color-bg-primary)'
    }}>
      {/* TopBar with logo and language switcher */}
      <AppTopBar />

      {/* Main layout with sidebar and content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar navigation with React Router integration */}
        <SidebarWithRouter menuItems={menuItems} />

        {/* Main content area with routes */}
        <main
          style={{
            flex: 1,
            overflow: 'auto',
            backgroundColor: 'var(--t-color-bg-light)',
            padding: 'var(--t-space-600)',
          }}
        >
          <h1
            style={{
              font: 'var(--t-typography-heading-2xl)',
              color: 'var(--t-color-text-primary)',
              marginBottom: 'var(--t-space-600)',
            }}
          >
            {t.dashboard}
          </h1>

          <Routes>
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
