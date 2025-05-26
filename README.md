# Tagaddod Design System

[![Documentation](https://img.shields.io/badge/docs-storybook-ff4785)](https://tagaddod-design-system.vercel.app/)
[![LLM Agent Ready](https://img.shields.io/badge/LLM-ready-blue)](https://tagaddod-design-system.vercel.app/llms.txt)
[![npm version](https://img.shields.io/npm/v/@tagaddod/react.svg)](https://www.npmjs.com/package/@tagaddod/react)

> **📚 [Live Documentation & Examples](https://tagaddod-design-system.vercel.app/)**

Modern, scalable design system with comprehensive token management, multi-brand theming, and AI agent integration.

## 🤖 AI Agent Integration

This design system includes specialized documentation for Large Language Models (GPT, Claude, etc.):

**Live LLM Documentation**: [`https://tagaddod-design-system.vercel.app/llms.txt`](https://tagaddod-design-system.vercel.app/llms.txt)

Provides structured information about components, props, usage patterns, and best practices for accurate AI-assisted development.

## Quick Start

```bash
# Install dependencies
yarn install

# Build everything
yarn build

# Development mode
yarn dev

# Test the optimized build
yarn test:build
```

## Package Structure

### @tagaddod-design/tokens
Design tokens using Style Dictionary v4 with optimized output:
- **Base tokens**: Core design values
- **Brand tokens**: Theme-specific overrides
- **Locale tokens**: Language-specific values
- **Direction tokens**: RTL/LTR layout values

### @tagaddod-design/react
React component library with:
- **18+ accessible components** built on Radix UI
- **Multi-brand theming** (Tagaddod & GreenPan)
- **RTL/LTR support** with automatic font switching
- **CSS modules** for styling
- **Full TypeScript support**
- **Tree-shakeable exports**
- **LLM documentation** for AI-assisted development

### @tagaddod-design/storybook
Component documentation and testing with:
- **Interactive examples** for all components
- **Live token editing** sandbox
- **Multi-brand switching** in real-time
- **Accessibility testing** with addon-a11y
- **LLM documentation** served at `/llms.txt`

## 🚀 Key Features & Improvements

1. **🤖 AI Agent Ready** - Specialized LLM documentation for accurate AI-assisted development
2. **🎨 Multi-Brand Theming** - Runtime switching between Tagaddod and GreenPan themes
3. **🌍 Full RTL/LTR Support** - Bi-directional language support with automatic font switching
4. **⚡ Performance Optimized** - 50-70% faster builds, 40% smaller bundle size
5. **🏗️ Comprehensive Token System** - W3C compliant design tokens with live editing
6. **♿ Accessibility First** - WCAG 2.1 AA compliant components
7. **📦 Tree-Shakeable** - Import only what you need
8. **🔧 Developer Experience** - TypeScript, Storybook, and comprehensive documentation

## Usage

### Basic Setup
```javascript
// Import styles once in your app
import '@tagaddod-design/react/styles';

// Import components as needed
import { Button, ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultTheme="tagaddod" defaultLocale="en">
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

### Theme Switching
```javascript
// Runtime theme switching
const { setTheme, setLocale, setDirection } = useTheme();

// Change theme
setTheme('greenpan');

// Change language (automatically sets direction)
setLocale('ar'); // Sets dir="rtl"
```

### Using Tokens
```css
/* CSS */
.custom-component {
  color: var(--t-color-text-primary);
  padding: var(--t-space-400);
}
```

```javascript
// JavaScript
import { ColorTextPrimary, Space400 } from '@tagaddod-design/tokens';
```

## Development

```bash
# Watch mode for tokens
yarn dev:tokens

# Watch mode for React components
yarn dev:react

# Run Storybook
yarn dev:storybook

# Run all in parallel
yarn dev
```

## Building

```bash
# Build everything
yarn build

# Build specific packages
yarn build:tokens
yarn build:react
yarn build:storybook

# Clean build
yarn clean:all && yarn build
```

## Testing

```bash
# Run tests
yarn test

# Test with coverage
yarn test:coverage

# Test build performance
yarn test:build
```

## Contributing

1. Make changes in the appropriate package
2. Run `yarn build` to verify your changes
3. Test in Storybook: `yarn dev:storybook`
4. Create a changeset: `yarn changeset`
5. Submit a pull request

For more details, see [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md)
