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

### Local Testing & Verdaccio Workflow
```bash
# Start Verdaccio (local npm registry)
yarn registry:start         # Start on http://localhost:4873

# Publish to Verdaccio (after making changes)
yarn publish:local          # Bump version + build + publish + sync docs
yarn bump:local             # Just bump local version (optional)

# Quick workflows
yarn registry:publish       # Same as publish:local
yarn registry:test-workflow # Build + publish + update template-test

# Test in template-test app
yarn test:local             # Start template-test dev server

# Verdaccio management
yarn registry:reset         # Clear storage and version counters
yarn sync:docs              # Manually sync documentation to template-test
```

## Local Testing with Verdaccio

The monorepo includes a **Verdaccio-based local testing workflow** that allows you to test packages exactly as end-users would consume them from npm, without publishing to the public registry.

### Architecture Overview

```
packages/tokens + packages/react
    ↓ build
    ↓ auto-bump version (0.1.29-local.1, local.2, etc.)
    ↓ auto-sync documentation
    ↓ publish
Verdaccio (localhost:4873)
    ↓ npm install
apps/template-test (self-contained testing environment)
    • .claude/skills/tagaddod-design-system.md (Claude AI integration)
    • .component-documentation/ (33 synced component docs)
    • Full template with examples
```

### Key Features

1. **Automatic Version Management**
   - Local versions: `0.1.29-local.1`, `0.1.29-local.2`, etc.
   - Auto-increments on each publish
   - Resets counter when base version changes (via Changesets)
   - State tracked in `.local-version-counter`

2. **Template-Test Application** (`apps/template-test/`)
   - Self-contained testing environment
   - Consumes packages from Verdaccio (not workspace links)
   - Includes 33 synced component documentation files
   - **Claude AI skill** for automatic component implementation
   - Ready to publish as standalone repository

3. **Documentation Auto-Sync**
   - Component `.mdx` files automatically copied to template-test
   - Syncs on every publish
   - Ensures template always has latest documentation

### Daily Development Workflow

**Simple 2-Terminal Setup**

```bash
# Terminal 1: Start Verdaccio (keep running)
yarn registry:start

# Terminal 2: Your workflow
# 1. Edit components in packages/react/src/
# 2. Make multiple changes
# 3. When ready to test:

yarn publish:local              # Bumps version, builds, publishes, syncs docs

# 4. Update and test in template
cd apps/template-test
npm run update:design-system    # Updates packages from Verdaccio
npm run dev                     # Start dev server and test
```

**What happens when you run `yarn publish:local`:**
1. ✅ Version auto-bumps (0.1.29-local.1 → local.2)
2. ✅ Builds tokens and react packages
3. ✅ Documentation syncs to template-test
4. ✅ Publishes to Verdaccio (only if build succeeds)
5. ✅ Ready to update in template-test

**Quick alternative workflows:**

```bash
# All-in-one: Build + publish + update template
yarn registry:test-workflow

# Or use registry:publish alias
yarn registry:publish           # Same as publish:local
```

### Publish Script Options

```bash
# Full workflow (default)
yarn publish:local

# Skip build step (use existing dist/)
yarn publish:local --skip-build

# Skip version bump
yarn publish:local --skip-bump

# Skip documentation sync
yarn publish:local --skip-docs

# Auto-update template-test after publish
yarn publish:local --auto-update

# Skip specific packages
yarn publish:local --skip-tokens
yarn publish:local --skip-react
```

### Template-Test Scripts

```bash
cd apps/template-test

# Update from Verdaccio
npm run update:design-system    # Update packages
npm run update:auto             # Update + start dev server

# Documentation verification
npm run docs:check              # Verify all docs synced
npm run docs:list               # List available docs
```

## Claude Skills Integration

The template-test application includes a **specialized Claude skill** for automatic component implementation.

### Skill Location
`apps/template-test/.claude/skills/tagaddod-design-system.md`

### How It Works

When you or a user asks Claude Code to implement a component in the template-test app:

1. **Detects** component name from request
2. **Reads** `.component-documentation/[Component].mdx`
3. **Extracts** exact import patterns, props, and examples
4. **Generates** correct implementation code
5. **Falls back** to Shadcn/Antd if component not found
6. **Applies** design tokens for custom styling

### Example Usage

```
User: "I need a button with loading state"

Claude: [Automatically reads .component-documentation/Button.mdx]
        [Extracts props, examples, and patterns]
        [Generates correct implementation]

Result:
import { Button } from '@tagaddod-design/react'

<Button variant="primary" loading={isLoading}>
  Submit
</Button>
```

### Skill Features

- **Self-contained**: Works in standalone template repository
- **Documentation-driven**: Reads local .mdx files for accuracy
- **Intelligent fallback**: Searches Shadcn → Antd → builds custom
- **Design token integration**: Ensures consistent styling
- **RTL support**: Implements Arabic/RTL when requested
- **Session memory**: Caches documentation to optimize token usage

### Benefits for AI-Assisted Development

- ✅ "Vibe coders" can build with zero component knowledge
- ✅ Automatic implementation following design system patterns
- ✅ Consistent code across the codebase
- ✅ Reduced documentation lookup time
- ✅ Built-in best practices and accessibility

## Version Management Strategy

### Local Versions (Verdaccio)

**Format**: `<base-version>-local.<counter>`

**Example Flow**:
```
0.1.29              # Base version from Changesets
0.1.29-local.1      # First local publish
0.1.29-local.2      # Second local publish
0.1.29-local.3      # Third local publish

# After changeset updates base version:
0.1.30              # New base version
0.1.30-local.1      # Counter resets
```

**State File**: `.local-version-counter` (git-ignored)

### Production Versions (npm)

**Controlled by Changesets** (manual, intentional versioning):

```bash
# 1. Create changeset
yarn changeset

# 2. Version and publish to npm
yarn release
```

This ensures:
- Local testing doesn't pollute npm versions
- Production versions are deliberate and documented
- Team maintains full control over public releases

## Documentation Sync

Component documentation (`.mdx` files) automatically syncs from `packages/react/src/components/` to `apps/template-test/.component-documentation/`.

### Automatic Sync Triggers

Documentation syncs automatically when:
- Running `yarn publish:local`
- Running `yarn registry:publish`
- Running `yarn registry:test-workflow`
- Building React package (`yarn build:react`)

### Manual Sync

```bash
yarn sync:docs
# OR
cd packages/react && npm run copy-docs
```

### Verification

```bash
cd apps/template-test
npm run docs:check    # Verify 33 component docs are present
npm run docs:list     # List all available docs
```

## Additional Documentation

- **apps/template-test/WORKFLOW.md** - End-user development guide
- **apps/template-test/README-STANDALONE.md** - Standalone repository README
- **apps/template-test/CLAUDE.md** - Claude Code instructions for template

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

- **template-test**: Local testing and standalone template application
  - Self-contained Vite + React + TypeScript template
  - Consumes packages from Verdaccio (not workspace links)
  - 33 synced component documentation files (.mdx)
  - Claude AI skill for automatic component implementation
  - Complete examples and starter code
  - Ready to publish as standalone repository

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
- [ ] **Document ThemeProvider integration and directional icons** (see RTL Documentation Template below)

### STANDARD RTL DOCUMENTATION TEMPLATE

**IMPORTANT**: When writing component documentation (.mdx files), ALWAYS include this RTL section template. This ensures consistent RTL guidance across all components. Based on the comprehensive RTL documentation pattern established in the Button component.

#### Template for RTL Documentation Section:

```markdown
## Internationalization and RTL Support

The [ComponentName] component provides comprehensive Right-to-Left (RTL) language support when used with the `ThemeProvider`. This includes automatic font switching, proper icon positioning, and directional icon handling.

### Using with ThemeProvider

For full RTL support, wrap your application with `ThemeProvider`:

```jsx
import { ThemeProvider, [ComponentName] } from '@tagaddod-design/react';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <[ComponentName] prefixIcon={<IconArrowRight />}>
        زر عربي
      </[ComponentName]>
    </ThemeProvider>
  );
}
```

### Automatic RTL Adjustments

When RTL is enabled via ThemeProvider, the [ComponentName] component automatically:

1. **Font Switching**: Changes from Outfit (English) to Tajawal (Arabic) font
2. **Icon Positioning**: Adjusts icon placement for RTL text flow
3. **Line Height**: Applies appropriate line height for Arabic text rendering
4. **Layout Direction**: Maintains proper positioning in RTL mode
5. **Gap Spacing**: Uses flexbox gap for consistent spacing in all directions

### Directional Icon Handling

**Important**: When using directional icons (arrows, chevrons, etc.) in multilingual applications, you should manually choose the appropriate icon based on the current direction:

```jsx
import { useTheme } from '@tagaddod-design/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

function DirectionalComponent() {
  const { isRTL } = useTheme();
  
  // Use arrow pointing in the correct direction for the language
  const ArrowIcon = isRTL ? IconArrowLeft : IconArrowRight;
  
  return (
    <[ComponentName] suffixIcon={<ArrowIcon />}>
      {isRTL ? 'التالي' : 'Next'}
    </[ComponentName]>
  );
}
```

### Common Directional Icon Patterns

#### "Next" Action
```jsx
// English: Next → (arrow points right)
// Arabic: التالي ← (arrow points left, matching RTL reading direction)
const NextIcon = isRTL ? IconArrowLeft : IconArrowRight;

<[ComponentName] variant="primary" suffixIcon={<NextIcon />}>
  {isRTL ? 'التالي' : 'Next'}
</[ComponentName]>
```

#### "Back" Action  
```jsx
// English: ← Back (arrow points left)
// Arabic: رجوع → (arrow points right, matching RTL reading direction)
const BackIcon = isRTL ? IconArrowRight : IconArrowLeft;

<[ComponentName] variant="outlined" prefixIcon={<BackIcon />}>
  {isRTL ? 'رجوع' : 'Back'}
</[ComponentName]>
```

#### "More Info" or "Expand" Action
```jsx
// For expand/collapse or "more info" actions
const ExpandIcon = isRTL ? IconChevronLeft : IconChevronRight;

<[ComponentName] variant="plain" suffixIcon={<ExpandIcon />}>
  {isRTL ? 'المزيد' : 'More'}
</[ComponentName]>
```

### RTL Best Practices

1. **Always use ThemeProvider** for proper RTL support and font switching
2. **Choose directional icons carefully** - arrows should point in the reading direction
3. **Test with actual Arabic content** to ensure proper text rendering
4. **Use `useTheme` hook** to access RTL state and theme information
5. **Consider icon semantics** - "next" in RTL should point left (←) not right (→)
6. **Direction follows reading flow** - not physical direction on screen
```

#### Usage Instructions:
1. Replace `[ComponentName]` with the actual component name
2. Adapt examples to match the component's specific props and use cases
3. Include relevant Canvas examples from the component's stories
4. Add component-specific RTL considerations if any
5. Update navigation index line numbers accordingly

This template ensures consistent RTL documentation across all components in the design system.

### RTL Documentation Application

**When editing any component documentation (.mdx files)**, apply the RTL Documentation Template above to ensure:
- Consistent ThemeProvider integration guidance
- Proper directional icon handling examples
- Complete RTL best practices
- Standardized documentation structure

Components that should include this RTL section:
- TextInput, Select, Tabs, Modal, Drawer, Pagination
- Any component with icons or directional elements
- All interactive components that users interact with

## Overlay System and Z-Index Management

**CRITICAL FOR AI AGENTS**: The Tagaddod Design System uses **automatic z-index management** for all overlay components. AI agents should NEVER manually configure z-index values or worry about nesting scenarios.

### How It Works

The overlay system uses React Context (`DrawerContext`) and design tokens to automatically manage z-index layering:

1. **Portal-Based Rendering**: Modal, Drawer, Popover render to `document.body`, escaping parent stacking contexts
2. **Context-Aware Z-Index**: Components detect when they're nested (e.g., Popover inside Drawer) and automatically adjust their z-index
3. **Design Token Integration**: All z-index values use CSS custom properties from `/packages/tokens/src/extras/zIndex.tokens.json`
4. **Zero Configuration Required**: Developers and AI agents just use components as-is - the system handles all layering

### Design Token Hierarchy (Reference Only)

```
Base:             0   (--t-z-base)
Dropdown:      1000   (--t-z-dropdown)
Popover:       1010   (--t-z-popover)
Drawer:        1020   (--t-z-drawer)
Modal:         1050   (--t-z-modal)
Modal Dropdown: 1060  (--t-z-modal-dropdown)
Drawer Modal:  1070   (--t-z-drawer-modal)
Toast:         1080   (--t-z-toast)
Tooltip:       1090   (--t-z-tooltip)
```

### Nesting Scenarios That Work Automatically

All of these scenarios work without any z-index configuration:

```jsx
// ✅ Drawer → Table with Popover filters
<Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
  <Table
    showFilters={true}  // Popover automatically appears above Drawer
    filterOptions={{ category: { type: 'select', options: [...] }}}
  />
</Drawer>

// ✅ Drawer → Modal → Select dropdown
<Drawer open={drawerOpen}>
  <Modal open={modalOpen}>
    <Select options={[...]} />  {/* Dropdown uses maximum z-index */}
  </Modal>
</Drawer>

// ✅ Tabs → Modal/Drawer → Popover
<Tabs defaultValue="tab1">
  <TabsContent value="tab1">
    <Modal open={modalOpen}>
      <Popover content="Info">...</Popover>  {/* Works perfectly */}
    </Modal>
  </TabsContent>
</Tabs>

// ✅ Complex nesting: Drawer → Tabs → Table → Modal → Select.
// Everything layers correctly without configuration!
```

### Critical Rules for AI Agents

When working with overlay components (Modal, Drawer, Popover, Select, Tooltip):

❌ **NEVER** manually set z-index values or style props
❌ **NEVER** calculate z-index in your code
❌ **NEVER** import `useDrawerContext` unless creating custom overlay components
❌ **NEVER** worry about nesting depth or stacking contexts

✅ **ALWAYS** use components as documented - they handle nesting automatically
✅ **TRUST** the system - any combination of overlays will layer correctly
✅ **REFER** to `packages/react/src/OVERLAY-SYSTEM-AI-AGENT-GUIDE.md` for detailed examples

### Common Mistake: Manual Z-Index Configuration

```jsx
// ❌ WRONG - Don't do this!
<Modal open={open} style={{ zIndex: 9999 }}>Content</Modal>

// ✅ CORRECT - Let the system handle it
<Modal open={open}>Content</Modal>
```

### For More Details

See the comprehensive AI-friendly guide at:
`packages/react/src/OVERLAY-SYSTEM-AI-AGENT-GUIDE.md`

This guide includes:
- Complete nesting scenario examples
- Troubleshooting for overlay visibility issues
- Decision tree for choosing the right component
- Common AI agent mistakes and solutions

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

### Sonner Component
**Location**: `packages/react/src/components/Sonner/`
**Features**:
- Toast notification system built on Sonner library
- Multiple toast types (success, error, warning, info)
- RTL/LTR support with proper Arabic line-height adjustments
- Theme-aware styling with design token integration
- Auto-dismiss and manual control
- Action buttons support
- Position customization (top, bottom, left, right)
- Full TypeScript interfaces with proper prop typing
- Comprehensive Storybook stories with RTL testing

**Key Implementation Notes**:
- Uses `sonner` library as the base toast implementation
- Integrates with design system tokens for consistent theming
- Supports all standard toast patterns (promise-based, action buttons, custom content)
- RTL detection and Arabic font family support
- Follows design system patterns for accessibility and interaction

## TypeScript & Code Quality

### Recent Fixes (June 2025)
- ✅ **All TypeScript errors resolved**: Fixed 60+ type errors across components and stories
- ✅ **Story structure compliance**: Ensured all Storybook stories have proper args and typing
- ✅ **Component type safety**: Fixed ref typing conflicts and prop interfaces
- ✅ **Build system validation**: Full project now type-checks without errors
- ✅ **Dependency consistency**: Verified all peer dependencies and import paths

**Type Checking Commands**:
```bash
# Full project type check
yarn type-check

# React package only
cd packages/react && npm run type-check

# Individual component validation
npx tsc --noEmit --strict
```

**Common TypeScript Patterns**:
- All components use `forwardRef` with proper generic typing
- Story files follow Storybook v7+ patterns with `Meta` and `StoryObj`
- CSS Module imports properly typed
- Radix UI component integration with correct prop forwarding

## Component Documentation

For comprehensive component documentation (.mdx files), use the specialized **component-docs-writer agent**:

```bash
# Create or update component documentation
/ask component-docs-writer "Create complete documentation for the Button component following design system standards"
```

The component-docs-writer agent handles:
- Complete RTL implementation templates
- Component interaction patterns 
- Accessibility documentation
- Real-world usage examples
- AI-friendly documentation standards
- Integration with other design system components

This ensures consistent, comprehensive documentation that serves both human developers and AI agents.