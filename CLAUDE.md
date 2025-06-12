# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Tagaddod Design System - a modern, scalable design system with comprehensive token management, multi-brand theming, and React components. It's a Turborepo monorepo with specialized packages for tokens, React components, Storybook documentation, and a token admin application.

## Commands

### Development
```bash
# Start all packages in development mode
yarn dev

# Start specific packages
yarn dev:tokens      # Watch mode for design tokens
yarn dev:react       # Watch mode for React components  
yarn dev:storybook   # Run Storybook on port 6006

# Token admin app (Next.js)
cd apps/token-admin && yarn dev
```

### Building
```bash
# Build everything
yarn build

# Build specific packages
yarn build:tokens    # Build design tokens using Style Dictionary
yarn build:react     # Build React component library
yarn build:storybook # Build static Storybook

# Test optimized build performance
yarn test:build
```

### Testing & Quality
```bash
# Run all tests
yarn test
yarn test:watch      # Watch mode

# Type checking
yarn type-check

# Linting
yarn lint

# Clean builds
yarn clean           # Clean all dist folders
yarn clean:cache     # Remove node_modules cache and .turbo
yarn clean:all       # Full clean including node_modules
```

### Publishing
```bash
# Create changeset for versioning
yarn changeset

# Release packages
yarn release         # Versions, builds, and publishes to npm
```

## Architecture

### Package Structure
- **@tagaddod-design/tokens**: Design tokens built with Style Dictionary v4
  - Multi-brand support (Tagaddod, GreenPan)
  - Locale-specific tokens (en, ar)
  - Direction tokens (LTR, RTL)
  - Exports CSS, SCSS, and JS formats
  
- **@tagaddod-design/react**: React component library
  - 20+ accessible components built on Radix UI
  - CSS Modules for styling
  - Multi-brand theming with ThemeProvider
  - RTL/LTR support with automatic font switching and line-height adjustments
  - Tree-shakeable exports
  - Peer dependencies: React 17+, Radix UI components, Tabler icons

- **@tagaddod-design/storybook**: Component documentation
  - Interactive examples and token sandbox
  - Multi-brand theme switching
  - Accessibility testing with addon-a11y
  - LLM documentation served at `/llms.txt`

- **token-admin**: Next.js 15 app for token management
  - Token editing with real-time validation
  - GitHub sync functionality
  - Zustand for state management
  - WCAG contrast checking

### Key Technical Details

**Monorepo Management**: Uses Turborepo with dependency-aware task orchestration. Tasks like `build` have proper `dependsOn` chains - tokens build first, then React components, then Storybook.

**Theming System**: Runtime theme switching via ThemeProvider context. Themes are CSS custom properties that can be swapped dynamically. The system supports brand themes (tagaddod/greenpan), locales (en/ar), and directions (ltr/rtl).

**Token Pipeline**: Style Dictionary transforms JSON tokens into multiple formats (CSS, SCSS, JS). Tokens support brand overrides and locale-specific values. The token-admin app provides a GUI for editing tokens and syncing with GitHub.

**Component Architecture**: React components use CSS Modules with design token CSS custom properties. Components are built on Radix UI primitives for accessibility. The library is tree-shakeable with proper ESM/CJS dual exports.

**Development Workflow**: 
1. Edit tokens in `packages/tokens/src/` or via token-admin GUI
2. Build tokens: `yarn build:tokens` (auto-runs on watch)
3. Build React components: `yarn build:react` (depends on tokens)
4. Test in Storybook: `yarn dev:storybook`
5. Create changeset and release when ready

**LLM Integration**: The system includes structured documentation for AI agents at `/llms.txt` endpoints, providing component props, usage patterns, and best practices.

## Important Notes

- Always run `yarn build:tokens` before building React components
- The token-admin app requires specific environment variables for GitHub sync
- Storybook copies the latest `llms.txt` from React package during build/dev
- CSS imports must follow the pattern: `import '@tagaddod-design/react/styles'`
- When adding new components, follow existing CSS Module patterns and ensure proper token usage
- Run `yarn lint` and `yarn type-check` before committing changes

## Common Issues & Solutions

### Storybook Configuration Issues

**CSS Import Path Problems**: 
- Use exact paths based on actual file structure in `packages/storybook/.storybook/preview.js`:
  - `@tagaddod-design/tokens/tokens.css` ✓
  - `@tagaddod-design/react/styles/index.css` ✓ (NOT `styles.css`)
  - `@tagaddod-design/tokens/brands/tagaddod.css` ✓
  - `@tagaddod-design/tokens/brands/greenpan.css` ✓
  - `@tagaddod-design/tokens/locales/en.css` ✓
  - `@tagaddod-design/tokens/locales/ar.css` ✓
  - `@tagaddod-design/tokens/directions/ltr.css` ✓
  - `@tagaddod-design/tokens/directions/rtl.css` ✓

**Module Resolution Errors**:
- If you see "Failed to fetch dynamically imported module" errors:
  1. Check CSS import paths match actual file structure
  2. Clear Vite cache: `rm -rf packages/storybook/node_modules/.cache`
  3. Clear Storybook cache: `rm -rf packages/storybook/.storybook-static`
  4. Restart Storybook on different port if needed: `yarn storybook --port 6011`

**Missing Dependencies**:
- Required dev dependencies for Storybook:
  - `@mdx-js/react` (for MDX story support)
  - `@types/react` (for TypeScript)
- Add missing Radix UI peer dependencies to both React and Storybook packages

**MDX Documentation Issues**:
- If you see "TypeError: importers[path] is not a function" when opening component docs:
  1. Ensure all story imports include `Story` from `@storybook/blocks`: `import { Meta, Story, Controls, Canvas, ArgTypes } from '@storybook/blocks';`
  2. Verify all stories referenced in MDX actually exist in the corresponding `.stories.tsx` file
  3. Check that story exports match the Canvas references (e.g., `<Canvas of={SidebarStories.Default} />`)
  4. Clear Storybook cache if needed

### Component Development

**Creating New Components**:
1. Add Radix UI dependency to both `packages/react/package.json` (peerDependencies and devDependencies) if using Radix
2. Add to `packages/storybook/package.json` (dependencies) if needed for stories
3. Follow existing patterns in TopBar, Sidebar, or other components for:
   - TypeScript interfaces with proper prop typing
   - CSS Modules with design token variables
   - RTL support with line-height fixes (see RTL Implementation below)
   - Accessibility props and ARIA patterns
   - Comprehensive Storybook stories with RTL testing
   - Export constants pattern (e.g., `buttonVariants`, `sidebarSizes`)

**File Structure Pattern**:
```
packages/react/src/components/ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.module.css   # Styles with design tokens
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Jest tests
├── ComponentName.mdx          # Documentation
└── index.ts                   # Exports
```

### Build System

**Dependency Order**: 
- Tokens must build before React components
- React components must build before Storybook
- Use `yarn build` for proper dependency orchestration

**Cache Management**:
- Vite cache: `packages/storybook/node_modules/.cache/vite-storybook`
- Clear with: `yarn clean:cache` or manual removal
- Force optimization: `config.optimizeDeps.force = true` in Storybook main.js

## RTL Implementation Guidelines

### Critical RTL Requirements
All new components **MUST** follow these RTL guidelines for proper Arabic/English text rendering:

**1. TypeScript Component Pattern**:
```tsx
// Detect RTL direction
const isRTL = typeof document !== 'undefined' && 
  (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

// Apply line height style based on text direction
const lineHeightStyle = {
  lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
};

// Apply to ALL text elements
<span style={lineHeightStyle}>Text content</span>
```

**2. CSS Module Pattern**:
```css
.textElement {
  position: relative;
  line-height: 1.5;
}

/* Line height trim for English text */
.textElement::before,
.textElement::after {
  content: '';
  display: block;
  height: 0;
}

.textElement::before {
  margin-top: -0.15em;
}

.textElement::after {
  margin-bottom: -0.15em;
}

/* Arabic text adjustment (larger trim) */
:global([dir="rtl"]) .textElement::before {
  margin-top: -0.25em;
}

:global([dir="rtl"]) .textElement::after {
  margin-bottom: -0.25em;
}

/* RTL layout adjustments */
:global([dir="rtl"]) .component {
  border-left: 1px solid var(--t-color-border-secondary);
  border-right: none;
  text-align: right;
  font-family: var(--t-font-family-arabic);
}
```

**3. Storybook RTL Testing**:
```tsx
// Create RTL-aware menu/content functions
const createContent = (isRTL: boolean) => ({
  label: isRTL ? 'النص العربي' : 'English Text'
});

// In story component
const direction = props.globals?.direction || 'ltr';
const isRTL = direction === 'rtl';

// Apply RTL styles to demo content
<p style={{
  lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
  fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
  textAlign: isRTL ? 'right' : 'left',
  direction: direction
}}>
  {isRTL ? 'نص عربي للاختبار' : 'English text for testing'}
</p>
```

### RTL Checklist for New Components
- [ ] Apply `lineHeightStyle` to all text elements in TypeScript
- [ ] Use `:global([dir="rtl"])` selectors in CSS
- [ ] Add line-height trimming with `::before`/`::after` pseudo-elements
- [ ] Test component in both LTR and RTL modes in Storybook
- [ ] Verify proper Arabic font family application
- [ ] Check layout positioning (left/right borders, margins, positioning)
- [ ] Ensure text alignment switches correctly
- [ ] Add RTL-specific content in Storybook stories

## Recent Component Additions

### Sidebar Component
**Location**: `packages/react/src/components/Sidebar/`
**Features**: 
- Expandable navigation with hover-to-expand (64px collapsed, 240px expanded)
- Hierarchical menu structure with parent/child relationships
- RTL/LTR support with proper Arabic line-height adjustments and border positioning
- Left/right positioning support
- **No logo/brand section** - focused purely on navigation
- Content-pushing layout (flexbox integration, not overlay)
- Active state styling with `--t-color-fill-brand-secondary` background
- Full width links and sub-links
- Full TypeScript interfaces with `SidebarMenuItem` type
- Comprehensive MDX documentation following Button component patterns

**Layout Integration**:
```tsx
// Recommended flexbox layout pattern
<div style={{ display: 'flex', height: '100vh' }}>
  <Sidebar selectedItem="analytics" onItemChange={setSelectedItem} />
  <main style={{ flex: 1, overflow: 'auto' }}>
    Your content here
  </main>
</div>
```

**Applied Figma Design Tokens**:
- Main menu items: `padding: var(--t-space-300) var(--t-space-200)`, `font-weight: 600`, `gap: var(--t-space-200)`
- Sub-menu items: `padding: var(--t-space-300) var(--t-space-200) var(--t-space-300) var(--t-space-1000)`, `font-weight: 400`
- Active state: `background-color: var(--t-color-fill-brand-secondary)`, `color: var(--t-color-text-link)`
- Container: `border-right: 1px solid var(--t-color-border-secondary)` (switches to left in RTL)

### TopBar Component  
**Location**: `packages/react/src/components/TopBar/`
**Features**:
- TAGADDOD logo integration
- Warehouse dropdown using Popover component
- RTL support with line-height fixes
- Theme-aware styling

### Logo Component
**Location**: `packages/react/src/components/Logo/`
**Features**:
- SVG-based TAGADDOD logo
- Multiple sizes and colors
- Clickable functionality
- RTL support