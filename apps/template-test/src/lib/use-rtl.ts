import { useEffect, useState } from 'react'
import { useTheme } from '@tagaddod-design/react'

interface RTLConfig {
  detectBrowserLanguage: boolean
  supportedLocales: string[]
}

export function useRTL(config: Partial<RTLConfig> = {}) {
  const {
    detectBrowserLanguage = true,
    supportedLocales = ['ar', 'he', 'fa', 'ur']
  } = config

  const { direction, setDirection, locale, setLocale, isRTL } = useTheme()
  const [isReady, setIsReady] = useState(false)

  // Auto-detect user's language preference
  useEffect(() => {
    if (!detectBrowserLanguage || isReady) return

    const detectLanguage = () => {
      const browserLanguage = navigator.language || navigator.languages[0]
      const langCode = browserLanguage.split('-')[0]
      
      if (supportedLocales.includes(langCode)) {
        setDirection('rtl')
        setLocale(langCode as 'ar' | 'en')
      }
    }

    detectLanguage()
    setIsReady(true)
  }, [detectBrowserLanguage, supportedLocales, setDirection, setLocale, isReady])

  // Apply direction to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.dir = direction
      document.documentElement.dir = direction
      document.documentElement.lang = locale
      
      // Add direction class to body for CSS targeting
      document.body.classList.toggle('rtl', isRTL)
      document.body.classList.toggle('ltr', !isRTL)
    }
  }, [direction, locale, isRTL])

  // Utility functions
  const toggleDirection = () => {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr'
    setDirection(newDirection)
    setLocale(newDirection === 'rtl' ? 'ar' : 'en')
  }

  const getTextAlign = () => isRTL ? 'right' : 'left'
  const getTextAlignOpposite = () => isRTL ? 'left' : 'right'
  const getMarginStart = () => isRTL ? 'marginRight' : 'marginLeft'
  const getMarginEnd = () => isRTL ? 'marginLeft' : 'marginRight'
  const getPaddingStart = () => isRTL ? 'paddingRight' : 'paddingLeft'
  const getPaddingEnd = () => isRTL ? 'paddingLeft' : 'paddingRight'

  // Icon direction helper
  const getIconStyle = (shouldFlip: boolean = true) => ({
    transform: isRTL && shouldFlip ? 'scaleX(-1)' : undefined
  })

  // Layout helpers
  const getFlexDirection = (reverse: boolean = false) => {
    if (reverse) {
      return isRTL ? 'row' : 'row-reverse'
    }
    return isRTL ? 'row-reverse' : 'row'
  }

  return {
    // State
    direction,
    locale,
    isRTL,
    isReady,
    
    // Actions
    setDirection,
    setLocale,
    toggleDirection,
    
    // Utilities
    getTextAlign,
    getTextAlignOpposite,
    getMarginStart,
    getMarginEnd,
    getPaddingStart,
    getPaddingEnd,
    getIconStyle,
    getFlexDirection,
    
    // CSS helpers
    rtlClass: isRTL ? 'rtl' : 'ltr',
    textAlign: getTextAlign(),
    flexDirection: getFlexDirection()
  }
}