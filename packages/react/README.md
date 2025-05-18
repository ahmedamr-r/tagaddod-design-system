# @tagaddod-design/react

React component library for the Tagaddod Design System with multi-brand theming support.

## Overview

This package provides a comprehensive set of React components built on top of the `@tagaddod-design/tokens` package. The components are designed to be accessible, customizable, and support RTL languages.

## Import Methods

You can import components in multiple ways:

### Method 1: Import from the package root (recommended for bundling efficiency)

```jsx
import { Button, TextInput } from '@tagaddod-design/react';
import '@tagaddod-design/tokens/css/tokens.css';
import '@tagaddod-design/react/styles/index.css';
```

### Method 2: Import individual components

```jsx
import { Button } from '@tagaddod-design/react/components/Button';
import { TextInput } from '@tagaddod-design/react/components/TextInput';
import '@tagaddod-design/tokens/css/tokens.css';
import '@tagaddod-design/react/styles/index.css';
```

Method 2 is useful if your bundler supports tree-shaking or if you want to explicitly reference components by their path.

## Features

- **Design Token Integration**: Components use CSS variables from `@tagaddod-design/tokens`
- **Multi-brand Support**: Built-in support for Tagaddod and GreenPan brands
- **RTL Support**: Fully bidirectional with Arabic/English language support
- **Accessibility**: WCAG 2.1 AA compliant components
- **Modular Architecture**: Import only what you need

## Installation

```bash
# Using npm
npm install @tagaddod-design/react @tagaddod-design/tokens

# Using yarn
yarn add @tagaddod-design/react @tagaddod-design/tokens
```

## Usage

```jsx
import { Button } from '@tagaddod-design/react';
import '@tagaddod-design/tokens/css/tokens.css'; // Base tokens
import '@tagaddod-design/react/styles/index.css'; // Component styles

function App() {
  return (
    <Button variant="primary" tone="default" size="medium">
      Click Me
    </Button>
  );
}
```

## Available Components

- **Button**: Versatile button component with multiple variants and tones
- **TextInput**: Text input field with validation states
- **Checkbox**: Standard checkbox with label support
- **RadioButton**: Radio button selection control
- **Tabs**: Tabbed interface with content panels
- **Avatar**: User avatars with fallback initials
- **Badge**: Status indicators and counters
- **Popover**: Contextual overlays for content
- **Modal**: Dialog and modal component
- **Switch**: Toggle switch control
- **Drawer**: Slide-in panel component
- **Table**: Data table with sorting and selection
- **Pagination**: Page navigation control
- **AspectRatio**: Maintain consistent aspect ratios

## Theming

The components automatically work with the theming system provided by `@tagaddod-design/tokens`. You can switch between brands using the `ThemeProvider`:

```jsx
import { ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider theme="greenpan" direction="rtl">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Customization

Components accept standard HTML attributes and custom props for styling and behavior:

```jsx
<Button 
  variant="secondary"
  tone="critical"
  size="large"
  fullWidth
  onClick={handleClick}
  prefixIcon={<IconAlert />}
>
  Warning Action
</Button>
```

## How It Works

Each component:
1. Uses CSS module styles with token variables (e.g., `var(--t-color-fill-brand)`)
2. Handles directional styles with logical properties
3. Supports multiple variants through prop-based class application
4. Maintains accessibility with proper ARIA attributes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Development

```bash
# Build the library
yarn build

# Run tests
yarn test

# Watch mode for development
yarn watch
```

## License

MIT
