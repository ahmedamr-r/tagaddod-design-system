import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Utility for theme detection
export function getSystemTheme() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Utility for RTL detection
export function isRTL() {
  if (typeof document !== 'undefined') {
    return document.dir === 'rtl' || document.documentElement.dir === 'rtl'
  }
  return false
}

// Local storage utilities for theme persistence
export function getStoredTheme(key: string = 'theme') {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

export function setStoredTheme(theme: string, key: string = 'theme') {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, theme)
  }
}