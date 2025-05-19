import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime.es.js";
import { createContext, useState, useEffect, useContext } from "react";
const ThemeContext = createContext(void 0);
const getLocaleFromDirection = (direction) => {
  return direction === "rtl" ? "ar" : "en";
};
const ThemeProvider = ({
  children,
  defaultTheme = "tagaddod",
  defaultDirection = "ltr",
  defaultLocale,
  storageKey = "tagaddod-theme"
}) => {
  const initialLocale = defaultLocale || getLocaleFromDirection(defaultDirection);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { theme: theme2 } = JSON.parse(stored);
          return theme2 || defaultTheme;
        } catch {
          return defaultTheme;
        }
      }
    }
    return defaultTheme;
  });
  const [direction, setDirection] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { direction: direction2 } = JSON.parse(stored);
          return direction2 || defaultDirection;
        } catch {
          return defaultDirection;
        }
      }
    }
    return defaultDirection;
  });
  const [locale, setLocale] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const { locale: locale2 } = JSON.parse(stored);
          return locale2 || initialLocale;
        } catch {
          return initialLocale;
        }
      }
    }
    return initialLocale;
  });
  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme);
      root.setAttribute("data-locale", locale);
      root.setAttribute("dir", direction);
      document.dir = direction;
      localStorage.setItem(storageKey, JSON.stringify({ theme, direction, locale }));
    }
  }, [theme, direction, locale, storageKey]);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value, children });
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
const useThemeClasses = () => {
  const { theme, direction, locale } = useTheme();
  return {
    theme,
    direction,
    locale,
    isRTL: direction === "rtl",
    themeClass: `theme-${theme}`,
    dirClass: `dir-${direction}`,
    localeClass: `locale-${locale}`
  };
};
export {
  ThemeContext,
  ThemeProvider,
  useTheme,
  useThemeClasses
};
//# sourceMappingURL=ThemeProvider.es.js.map
