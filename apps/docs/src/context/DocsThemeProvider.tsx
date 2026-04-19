import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Brand = 'tagaddod' | 'greenpan';
export type Mode = 'en-ltr' | 'ar-rtl';
export type Direction = 'ltr' | 'rtl';
export type Locale = 'en' | 'ar';

interface DocsThemeContext {
  brand: Brand;
  setBrand: (brand: Brand) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  direction: Direction;
  locale: Locale;
}

const Context = createContext<DocsThemeContext | undefined>(undefined);

const STORAGE_KEY = 'tagaddod-docs-theme';

interface StoredState {
  brand?: Brand;
  mode?: Mode;
}

function readStored(): StoredState {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredState) : {};
  } catch {
    return {};
  }
}

export function DocsThemeProvider({ children }: { children: ReactNode }) {
  const stored = readStored();
  const [brand, setBrand] = useState<Brand>(stored.brand ?? 'tagaddod');
  const [mode, setMode] = useState<Mode>(stored.mode ?? 'en-ltr');

  // Brand is the only axis that flips the docs chrome — mirror it onto <html>.
  // Direction + locale are kept local to preview surfaces.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', brand);
    }
  }, [brand]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ brand, mode }));
    }
  }, [brand, mode]);

  const direction: Direction = mode === 'ar-rtl' ? 'rtl' : 'ltr';
  const locale: Locale = mode === 'ar-rtl' ? 'ar' : 'en';

  return (
    <Context.Provider value={{ brand, setBrand, mode, setMode, direction, locale }}>
      {children}
    </Context.Provider>
  );
}

export function useDocsTheme(): DocsThemeContext {
  const ctx = useContext(Context);
  if (!ctx) {
    throw new Error('useDocsTheme must be used within <DocsThemeProvider>');
  }
  return ctx;
}
