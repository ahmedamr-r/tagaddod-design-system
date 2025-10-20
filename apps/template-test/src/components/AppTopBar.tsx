import { TopBar, Select, useTheme } from '@tagaddod-design/react'
import { IconLanguage } from '@tabler/icons-react'

export function AppTopBar() {
  const { direction, setDirection, locale, setLocale } = useTheme()

  // Language options
  const languageOptions = [
    { value: 'en-ltr', label: 'English' },
    { value: 'ar-rtl', label: 'العربية' }
  ]

  // Current language value (combined direction + locale)
  const currentLanguage = `${locale}-${direction}`

  // Handle language change
  const handleLanguageChange = (value: string) => {
    const [newLocale, newDirection] = value.split('-') as ['en' | 'ar', 'ltr' | 'rtl']
    setLocale(newLocale)
    setDirection(newDirection)
  }

  // Language selector component for end slot
  const languageSelector = (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-200)'
    }}>
      <Select
        value={currentLanguage}
        onValueChange={handleLanguageChange}
        options={languageOptions}
        size="micro"
        prefixIcon={<IconLanguage size={16} />}
        style={{
          minWidth: '140px'
        }}
      />
    </div>
  )

  return (
    <TopBar
      endContent={languageSelector}
    />
  )
}
