# Tagaddod Design System

[![CI](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/codeql.yml/badge.svg)](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/codeql.yml)
[![Visual Regression Tests](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/visual-regression.yml/badge.svg)](https://github.com/ahmedamr-r/tagaddod-design-system/actions/workflows/visual-regression.yml)

A comprehensive design system for Tagaddod and GreenPan brands.

## Features

- 🎨 Multi-brand theming support
- 🌐 Internationalization (i18n) with RTL support
- 📦 Monorepo architecture with Turborepo
- 🚀 Built with React 19 and TypeScript
- 📚 Storybook documentation
- 🎯 Design tokens following W3C standards
- ♿ Accessibility-first components

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn 1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmedamr-r/tagaddod-design-system.git

# Navigate to the project
cd tagaddod-design-system

# Enable corepack for yarn
corepack enable

# Install dependencies
yarn install

# Build all packages
yarn build

# Start Storybook
yarn storybook
```

## Packages

| Package | Description |
| ------- | ----------- |
| [@tagaddod/tokens](packages/tokens) | Design tokens following W3C standards |
| [@tagaddod/themes](packages/themes) | Brand theme configurations |
| [@tagaddod/react](packages/react) | React component library |
| [@tagaddod/storybook](packages/storybook) | Documentation and development environment |

## Development

```bash
# Run all packages in development mode
yarn dev

# Build all packages
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Type checking
yarn type-check

# Clean build artifacts
yarn clean
```

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
