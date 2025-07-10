# Tagaddod Design System - Documentation App

A standalone Next.js application providing comprehensive developer integration documentation for the Tagaddod Design System.

## Overview

This documentation app serves as the primary resource for developers integrating the Tagaddod Design System into their projects using AI-powered development tools like Cursor AI and Claude Code.

## Features

- **Comprehensive Integration Guide**: Step-by-step instructions for setting up projects with AI agents
- **Downloadable Setup Files**: Pre-built `.md` files that AI agents can use for automated setup
- **Multi-Framework Support**: Instructions for both Next.js and Vite projects
- **Component Catalog**: Complete reference to all 22+ available components
- **AI-Optimized Instructions**: Specifically designed for AI-powered development workflows
- **RTL Support**: Full Arabic language support documentation
- **Theme Documentation**: Multi-brand theming with Tagaddod and GreenPan themes

## Quick Start

### Development

```bash
# From the monorepo root
yarn dev:docs

# Or directly in the docs-app directory
cd apps/docs-app
yarn dev
```

The app will be available at `http://localhost:3001`

### Building

```bash
# From the monorepo root
yarn build:docs

# Or directly in the docs-app directory
cd apps/docs-app
yarn build
```

## Architecture

### Technology Stack

- **Next.js 15**: App Router with React Server Components
- **React 19**: Latest React features
- **Tailwind CSS 4**: Styling framework
- **TypeScript**: Full type safety
- **Tagaddod Design System**: Using the actual design system components
- **React Markdown**: Markdown rendering with GitHub Flavored Markdown

### File Structure

```
apps/docs-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   ├── page.tsx            # Main documentation page
│   │   └── globals.css         # Global styles with design tokens
│   └── components/
│       └── IntroductionContent.tsx  # Main documentation component
├── public/
│   └── setup-files/            # Downloadable AI setup files
│       ├── nextjs-setup.md
│       ├── vite-setup.md
│       ├── tagaddod-installation.md
│       ├── themeprovider-setup.md
│       ├── styles-activation.md
│       ├── component-integration.md
│       ├── rtl-support.md
│       ├── optimization.md
│       └── README.md
├── package.json                # Dependencies and scripts
├── next.config.ts             # Next.js configuration
└── README.md                  # This file
```

## Setup Files

The `/public/setup-files/` directory contains downloadable Markdown files that developers can provide to AI agents for automated setup:

| File | Purpose |
|------|---------|
| `nextjs-setup.md` | Next.js 15 project scaffolding |
| `vite-setup.md` | Vite + React project creation |
| `tagaddod-installation.md` | Complete package installation |
| `themeprovider-setup.md` | ThemeProvider configuration |
| `styles-activation.md` | CSS imports and Google Fonts |
| `component-integration.md` | Component usage patterns |
| `rtl-support.md` | Arabic/RTL language support |
| `optimization.md` | Performance optimization |

## Development Workflow

### Adding New Setup Files

1. Create the new `.md` file in `public/setup-files/`
2. Update the download buttons in `IntroductionContent.tsx`
3. Update the documentation content to reference the new file
4. Test the download functionality

### Updating Documentation

The main documentation content is in `src/components/IntroductionContent.tsx` as a React component that renders Markdown. This approach provides:

- **Type Safety**: Full TypeScript support
- **Component Integration**: Can use actual design system components
- **Dynamic Content**: Can include interactive elements like download buttons
- **Performance**: Server-side rendering with Next.js

### AI-Powered Development

This app is designed to work seamlessly with AI development tools:

1. **Download Links**: Direct access to setup files from the UI
2. **Clear Instructions**: Each section provides exact AI prompts to use
3. **Component References**: Links to specific `.mdx` files for component documentation
4. **Validation Steps**: Built-in success indicators for each setup phase

## Deployment

### Vercel (Recommended)

```bash
# Build the app
yarn build:docs

# Deploy with Vercel CLI
vercel --prod
```

### Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with PM2

## Environment Variables

No environment variables are required for basic functionality. The app uses:

- Design system packages via workspace dependencies
- Google Fonts via Next.js font optimization
- Static file serving for setup files

## Contributing

1. **Documentation Updates**: Modify `IntroductionContent.tsx`
2. **Setup Files**: Add new files to `public/setup-files/`
3. **Styling**: Update global styles in `globals.css`
4. **Configuration**: Modify `next.config.ts` for build optimization

## Integration with Monorepo

This app is part of the Tagaddod Design System monorepo and:

- **Uses Workspace Dependencies**: Direct access to `@tagaddod-design/react` and `@tagaddod-design/tokens`
- **Follows Monorepo Scripts**: Integrates with root-level `yarn dev:docs` and `yarn build:docs`
- **Shares Build Tools**: Uses shared Turbo configuration for parallel builds
- **Maintains Consistency**: Uses the same TypeScript and linting configuration

## License

MIT - Part of the Tagaddod Design System project.
