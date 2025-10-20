import { useTheme } from '@tagaddod-design/react'
import { getTranslations } from '../lib/translations'

export function CustomersPage() {
  const { locale } = useTheme()
  const t = getTranslations(locale)

  return (
    <div
      style={{
        backgroundColor: 'var(--t-color-surface-primary)',
        borderRadius: 'var(--t-border-radius-300)',
        padding: 'var(--t-space-500)',
        border: `var(--t-border-width-25) solid var(--t-color-border-secondary)`,
      }}
    >
      <h2
        style={{
          font: 'var(--t-typography-heading-lg)',
          color: 'var(--t-color-text-primary)',
        }}
      >
        {t.customers}
      </h2>
      <p
        style={{
          font: 'var(--t-typography-body-md)',
          color: 'var(--t-color-text-secondary)',
          marginTop: 'var(--t-space-400)',
        }}
      >
        {t.customersContent}
      </p>
    </div>
  )
}
