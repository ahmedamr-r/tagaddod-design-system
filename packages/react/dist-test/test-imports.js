
// Test importing from main module
import { Button, ThemeProvider, Avatar, Badge } from '../dist/index.mjs';

console.log('Main bundle imports:',
  Button ? 'Button ✓' : 'Button ✗',
  ThemeProvider ? 'ThemeProvider ✓' : 'ThemeProvider ✗',
  Avatar ? 'Avatar ✓' : 'Avatar ✗',
  Badge ? 'Badge ✓' : 'Badge ✗'
);

// Test rendering a component (simplified test)
console.log('Component properties:',
  Button.displayName || Button.name,
  typeof Button === 'function' ? '✓' : '✗'
);

console.log('Theme provider properties:',
  ThemeProvider.displayName || ThemeProvider.name,
  typeof ThemeProvider === 'function' ? '✓' : '✗'
);

// Success message
console.log('\nAll imports successful ✓');
