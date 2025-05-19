# Tagaddod React Components

## Installation

```bash
npm install @tagaddod/react
```

or

```bash
yarn add @tagaddod/react
```

## Usage

Import both the components and the styles:

```jsx
// Import the component library
import { Button, ThemeProvider } from '@tagaddod/react';

// Option 1: Import all styles (recommended for simplicity)
import '@tagaddod/react/all.css';  // All styles in one file

// Option 2: Import styles separately
// import '@tagaddod/react/styles.css';     // Design tokens & base styles
// import '@tagaddod/react/components.css';  // Component-specific styles

function App() {
  return (
    <ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
      <div className="app">
        <Button variant="primary">Hello Tagaddod!</Button>
      </div>
    </ThemeProvider>
  );
}
```

## Theme Switching

You can use the ThemeProvider to switch themes:

```jsx
import { ThemeProvider, useTheme, Button } from '@tagaddod/react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button 
        variant="secondary" 
        onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}
      >
        Switch to {theme === 'tagaddod' ? 'GreenPan' : 'Tagaddod'} theme
      </Button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## RTL Support

The Tagaddod Design System includes built-in RTL support:

```jsx
import { ThemeProvider, useTheme, Button } from '@tagaddod/react';

function DirectionSwitcher() {
  const { direction, setDirection } = useTheme();

  return (
    <Button 
      variant="secondary" 
      onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}
    >
      Switch to {direction === 'ltr' ? 'RTL' : 'LTR'}
    </Button>
  );
}
```

## Available Components

- Button
- TextInput
- Checkbox
- RadioButton
- Tabs
- Drawer
- Pagination
- Avatar
- Badge
- Popover
- Listbox
- Table
- Switch
- Modal
- AspectRatio

## Design Tokens

The design system includes a comprehensive set of design tokens that power the components:

- Colors
- Typography
- Spacing
- Borders
- Shadows
- Z-indices

These tokens are automatically applied through CSS variables with the `--t-` prefix.

## Development

To build the package locally:

```bash
yarn build
```

This will generate:
- JS files in the `dist` directory
- CSS files in both `dist/react.css` and `dist/styles/index.css`
