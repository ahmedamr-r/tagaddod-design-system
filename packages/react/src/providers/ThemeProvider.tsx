import React, { createContext, useContext, useEffect } from 'react';

export interface ThemeContextValue {
  brand: 'tagaddod' | 'greenpan';
}

const ThemeContext = createContext<ThemeContextValue>({
  brand: 'tagaddod',
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  name?: 'tagaddod' | 'greenpan';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  name = 'tagaddod' 
}) => {
  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove('theme-tagaddod', 'theme-greenpan');
    // Add the current theme class
    document.documentElement.classList.add(`theme-${name}`);
  }, [name]);

  return (
    <ThemeContext.Provider value={{ brand: name }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
