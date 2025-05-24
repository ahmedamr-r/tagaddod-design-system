import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'tagaddod' | 'greenpan';
export type Direction = 'ltr' | 'rtl';
export type Locale = 'en' | 'ar';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  direction: Direction;
  setDirection: (direction: Direction) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultDirection?: Direction;
  defaultLocale?: Locale;
  storageKey?: string;
}

// Helper function to determine locale from direction
const getLocaleFromDirection = (direction: Direction): Locale => {
  return direction === 'rtl' ? 'ar' : 'en';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'tagaddod',
  defaultDirection = 'ltr',
  defaultLocale,
  storageKey = 'tagaddod-theme'
}) => {
  // Initialize locale based on direction if not provided
  const initialLocale = defaultLocale || getLocaleFromDirection(defaultDirection);

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { theme } = JSON.parse(stored);
          return theme || defaultTheme;
        } catch {
          return defaultTheme;
        }
      }
    }
    return defaultTheme;
  });

  const [direction, setDirection] = useState<Direction>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { direction } = JSON.parse(stored);
          return direction || defaultDirection;
        } catch {
          return defaultDirection;
        }
      }
    }
    return defaultDirection;
  });

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { locale } = JSON.parse(stored);
          return locale || initialLocale;
        } catch {
          return initialLocale;
        }
      }
    }
    return initialLocale;
  });

  // Apply theme, locale and direction to root element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      root.setAttribute('lang', locale);
      root.setAttribute('dir', direction);
      
      // Update document direction and language
      document.dir = direction;
      document.documentElement.lang = locale;
      
      // Store preferences
      localStorage.setItem(storageKey, JSON.stringify({ theme, direction, locale }));
    }
  }, [theme, direction, locale, storageKey]);

  // Automatically sync locale with direction changes
  useEffect(() => {
    const expectedLocale = getLocaleFromDirection(direction);
    if (locale !== expectedLocale) {
      setLocale(expectedLocale);
    }
  }, [direction, locale]);

  const value = {
    theme,
    setTheme,
    direction,
    setDirection,
    locale,
    setLocale
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Utility hook for theme-aware classes
export const useThemeClasses = () => {
  const { theme, direction, locale } = useTheme();
  
  return {
    theme,
    direction,
    locale,
    isRTL: direction === 'rtl',
    themeClass: `theme-${theme}`,
    dirClass: `dir-${direction}`,
    localeClass: `locale-${locale}`
  };
};
