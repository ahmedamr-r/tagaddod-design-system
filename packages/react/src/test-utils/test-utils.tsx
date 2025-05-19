import type { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Check if ThemeProvider exists
let ThemeProvider;
try {
  ThemeProvider = require('../providers/ThemeProvider').ThemeProvider;
} catch (e) {
  // If ThemeProvider is not available, create a simple wrapper
  ThemeProvider = ({ children }: { children: ReactNode }) => <>{children}</>;
}

// Custom render function that wraps component in ThemeProvider
export function renderWithTheme(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    theme?: 'tagaddod' | 'greenpan';
    direction?: 'ltr' | 'rtl';
  }
) {
  const { theme = 'tagaddod', direction = 'ltr', ...restOptions } = options || {};
  
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <ThemeProvider defaultTheme={theme} defaultDirection={direction}>
        {children}
      </ThemeProvider>
    ),
    ...restOptions
  });
}

// Add additional utility: RTL testing
export function renderRTL(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return renderWithTheme(ui, { direction: 'rtl', ...options });
}

// Mock document attributes for testing
export function setDocumentTheme(theme: 'tagaddod' | 'greenpan') {
  document.documentElement.setAttribute('data-theme', theme);
}

export function setDocumentDirection(dir: 'ltr' | 'rtl') {
  document.documentElement.setAttribute('dir', dir);
}

// Reset document attributes after tests
export function resetDocumentAttributes() {
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.removeAttribute('dir');
}
