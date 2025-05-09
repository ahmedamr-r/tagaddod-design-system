import React, { createContext, useContext, useEffect } from 'react';

interface ThemeContextType {
  name: string;
}

const ThemeContext = createContext<ThemeContextType>({ name: 'tagaddod' });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  name?: string;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  name = 'tagaddod', 
  children 
}) => {
  useEffect(() => {
    // Apply theme class to root element
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove('Polaris-Theme--Tagaddod', 'Polaris-Theme--Greenpan');
    // Add the selected theme class
    root.classList.add(`Polaris-Theme--${name.charAt(0).toUpperCase() + name.slice(1)}`);
  }, [name]);

  return (
    <ThemeContext.Provider value={{ name }}>
      {children}
    </ThemeContext.Provider>
  );
};
