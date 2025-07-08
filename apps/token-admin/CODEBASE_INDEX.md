# Token Admin Codebase Index

*Generated: 2025-07-07*

This file provides a comprehensive overview of the token-admin application structure, components, and functionality for quick reference and onboarding.

## 📁 Directory Structure

```
src/
├── app/                          # Next.js App Router pages and API routes
│   ├── api/                      # Server-side API endpoints
│   │   ├── tokens/               # Basic token CRUD operations
│   │   ├── tokens-enhanced/      # Advanced token operations with context
│   │   ├── token-analysis/       # Token relationship analysis
│   │   ├── token-context/        # Brand/locale context data
│   │   ├── token-relationships/  # Specific relationship queries
│   │   ├── build-tokens/         # Style Dictionary build triggers
│   │   └── debug-tokens/         # Development debugging endpoints
│   ├── enhanced/                 # Enhanced token management interface
│   ├── relationships/            # Token relationship visualization page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main token editor page
├── components/                   # React UI components
│   ├── AppLayout/               # Main application wrapper
│   ├── TokenBrowser/            # Advanced token browsing interface
│   ├── TokenContextSwitcher/    # Brand/locale filtering
│   ├── TokenRelationshipViewer/ # Token dependency visualization
│   ├── TokenGraph/              # Graph visualization components
│   ├── TokenDescriptionEditor/  # Rich text editor for descriptions
│   └── BuiltTokensTable/        # Processed token display
├── lib/                         # Utility libraries and business logic
│   ├── tokenStore.ts            # Zustand state management
│   ├── enhancedTokenLoader.ts   # Client-side token loading
│   ├── serverEnhancedTokenLoader.ts # Server-side token operations
│   ├── tokenAnalyzer.ts         # Client-side analysis utilities
│   ├── serverTokenAnalyzer.ts   # Server-side relationship analysis
│   ├── contrastChecker.ts       # WCAG color validation
│   ├── validation.ts            # Token validation utilities
│   └── github/                  # GitHub integration
├── types/                       # TypeScript type definitions
└── utils/                       # Helper utilities
```

## 🎯 Core Components

### AppLayout (`/components/AppLayout/`)
**Purpose**: Main application wrapper with navigation sidebar
- Uses the design system's Sidebar component
- Provides routing between different admin sections
- Implements hover-expand navigation pattern (64px → 240px)
- No logo/brand section - focused purely on navigation

**Key Features**:
- Content-pushing layout (flexbox integration, not overlay)
- Active state styling with design tokens
- Full width links and sub-links
- RTL/LTR support with proper Arabic line-height adjustments

### TokenBrowser (`/components/TokenBrowser/`)
**Purpose**: Advanced token browsing interface with search/filter capabilities
- Sophisticated table with custom cell components
- Visual token previews (color swatches for color tokens)
- Inline description editing capabilities
- Token selection and bulk update operations

**Key Features**:
- Real-time search and filtering
- Category-based organization
- Sortable columns
- Export functionality

### TokenGraph (`/components/TokenGraph/`)
**Purpose**: Interactive graph visualization of token relationships

**Components**:
- `TokenGraphVisualization.tsx` - Main graph component (644 lines)
- `TokenNode.tsx` - Individual node rendering
- `TokenGraphLegend.tsx` - Legend panel
- `TokenGraphControls.tsx` - Layout switching controls

**Layout Algorithms**:
- 📊 **Hierarchical** (Dagre) - Top-down tree structure
- 🌳 **Tree** (D3) - Strict parent-child hierarchy
- 🔗 **Force** (Placeholder for future implementation)

**Recent Improvements** (2025-07-07):
- ✅ Fixed relationship detection (0 edges → proper connections)
- ✅ Added D3.js tree layout algorithm
- ✅ Enhanced path matching for token references
- ✅ Added layout switching controls
- ✅ Improved debug logging

### TokenContextSwitcher (`/components/TokenContextSwitcher/`)
**Purpose**: Brand and locale context switching interface
- Allows filtering by token categories (core, semantic, brand, locale)
- Provides quick actions for common context scenarios
- Visual indicators for active context

### TokenRelationshipViewer (`/components/TokenRelationshipViewer/`)
**Purpose**: Visualizes token dependencies and references
- Shows how tokens relate to each other in the design system hierarchy
- Interactive navigation between related tokens
- Export functionality for relationship data

## 🔗 API Endpoints

### Core Token Management
- **`GET/POST /api/tokens`**: Basic token CRUD operations with brand filtering
- **`GET/POST /api/tokens-enhanced`**: Advanced token operations with context support
- **`POST /api/build-tokens`**: Triggers Style Dictionary build process

### Enhanced Features
- **`GET /api/token-analysis`**: Analyzes token relationships and dependencies
- **`GET /api/token-context`**: Provides available brands/locales for context switching
- **`GET /api/token-relationships`**: Retrieves specific token relationship data

### Development/Testing
- **`GET /api/debug-tokens`**: Debug token loading and processing
- **`GET /api/test`**: Various testing endpoints for development

## 🧠 Business Logic

### Token Management Core

**`tokenStore.ts`**: Zustand store for client-side token state management
```typescript
interface TokenStore {
  sourceTokens: FlatToken[];
  builtTokens: FlatToken[];
  isLoading: boolean;
  error: string | null;
  loadTokens: () => Promise<void>;
  saveTokens: (tokens: FlatToken[]) => Promise<void>;
  buildTokens: () => Promise<void>;
}
```

**`tokenLoader.ts`**: Basic token loading utilities
**`enhancedTokenLoader.ts`**: Advanced token loading with context support
**`serverEnhancedTokenLoader.ts`**: Server-side enhanced token operations

### Analysis & Relationships

**`tokenAnalyzer.ts`**: Client-side token analysis utilities
**`serverTokenAnalyzer.ts`**: Server-side token relationship analysis
- Extracts token references from values like `{color.gray.900}`
- Builds dependency graphs between tokens
- Categorizes tokens by type and purpose
- Generates relationship metadata

**Recent Fixes** (2025-07-07):
```typescript
// Fixed interface mismatch:
interface TokenRelationship {
  source: string; // Graph format
  target: string;
  type: string;
}

interface AnalyzerRelationship {
  from: string;   // Analyzer format
  to: string;
  type: 'core-to-semantic' | 'semantic-to-brand' | ...;
}
```

### Validation & Quality

**`contrastChecker.ts`**: WCAG color contrast validation
**`validation.ts`**: Token validation utilities

### GitHub Integration

**`github/`**: GitHub client and sync functionality
- Provides GitHub API integration for token synchronization
- Supports branch management and pull request creation
- Enables collaborative token management workflows

## 📄 Main Application Pages

### Basic Token Editor (`/`)
- Simple token editing interface
- Brand-based token switching
- Basic save/build functionality
- Built-in contrast checking and validation

### Enhanced Token Editor (`/enhanced`)
- Advanced token management with full context switching
- Comprehensive token browser with search/filter
- Token relationship visualization
- Bulk description editing
- Real-time token statistics and metadata

### Relationship Visualizer (`/relationships`)
- Dedicated page for token relationship analysis
- Interactive graph visualization with multiple layout algorithms
- Export functionality for relationship data
- Advanced filtering by token type and brand context

## 🏗️ Type Definitions

### Core Token Types (`/types/token.ts`)

```typescript
interface TokenValue {
  value: string | number;
  type: string;
  description?: string;
}

interface FlatToken {
  id: string;
  name: string;
  value: string | number;
  type: TokenType;
  description?: string;
  path: string[];
  source: 'primitives' | 'semantics' | 'theme';
  // ... additional metadata
}

interface EnhancedToken {
  id: string;
  path: string;
  name: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  subcategory?: string;
  source: string;
  brand?: string;
  locale?: string;
  references?: string[];      // What this token references
  referencedBy?: string[];   // What references this token
  isReference: boolean;
  originalPath: string;
}
```

## 🔄 Architecture & Data Flow

### Token Processing Pipeline
1. **Source Loading**: Reads JSON token files from `packages/tokens/src/`
2. **Context Filtering**: Applies brand/locale/category filters
3. **Relationship Analysis**: Builds dependency graphs between tokens
4. **Enhancement**: Adds metadata, subcategories, and reference information
5. **Presentation**: Displays in various UI components (browser, graph, table)

### Multi-Brand Support
- **Common**: Base tokens shared across all brands
- **Brand-Specific**: Override tokens for Tagaddod and GreenPan brands
- **Locale Support**: Direction and language-specific tokens (AR/EN, LTR/RTL)

### State Management
- **Client State**: Zustand store for UI state and token data
- **Server Operations**: File system operations for reading/writing tokens
- **Context Switching**: Dynamic filtering based on selected brand/locale/categories

## 🎨 Key Features Summary

### Token Management
- Multi-brand token editing with context switching
- Real-time validation and contrast checking
- Bulk description editing with markdown support
- Token relationship visualization and dependency tracking

### Developer Experience
- GitHub integration for collaborative workflows
- Style Dictionary integration for automated CSS generation
- Debug interfaces and testing utilities
- Comprehensive error handling and validation

### Design System Integration
- Uses the `@tagaddod-design/react` component library
- Implements the design system's theming patterns
- Supports RTL/LTR layouts and multi-language content
- Follows established design tokens for consistency

## 🔧 Recent Improvements (2025-07-07)

### Token Graph Visualization Fixes
1. **Relationship Detection**: Fixed interface mismatch causing 0 edges
2. **Tree Layout**: Added D3.js hierarchical layout algorithm
3. **Path Matching**: Enhanced token reference detection with multiple format support
4. **Layout Controls**: Added UI for switching between Dagre, Tree, and Force layouts
5. **Debug Tools**: Comprehensive console logging for troubleshooting

### Performance Optimizations
- Node clustering for large datasets (>300 nodes)
- Balanced token sampling (500 node limit)
- Memoized callbacks and layout calculations
- Efficient relationship filtering

### Technical Dependencies
- **React Flow**: Graph visualization library
- **Dagre**: Hierarchical layout algorithm
- **D3.js**: Tree layout and hierarchy utilities
- **Zustand**: State management
- **Next.js 15**: App framework with API routes

## 🚀 Development Workflow

1. **Edit tokens** in `packages/tokens/src/` or via token-admin GUI
2. **Build tokens**: `yarn build:tokens` (auto-runs on watch)
3. **Build React components**: `yarn build:react` (depends on tokens)
4. **Test in Storybook**: `yarn dev:storybook`
5. **Run token-admin**: `cd apps/token-admin && npm run dev`
6. **Create changeset and release** when ready

## 📋 Common Commands

```bash
# Development
yarn dev                    # Start all packages
cd apps/token-admin && npm run dev  # Token admin only

# Building
yarn build:tokens          # Build design tokens
yarn build:react          # Build React components
yarn build                # Build everything

# Testing & Quality
yarn test                 # Run tests
yarn lint                 # Linting
yarn type-check          # TypeScript validation

# Token Admin Specific
cd apps/token-admin
npm install d3-hierarchy @types/d3-hierarchy  # Tree layout deps
npm run dev               # Start development server
```

## 🐛 Troubleshooting

### Common Issues
1. **Zero relationships in graph**: Check console logs for path matching issues
2. **TypeScript errors**: Run `yarn type-check` to identify issues
3. **Build failures**: Ensure tokens build before React components
4. **Missing dependencies**: Check peer dependencies in package.json

### Debug Tools
- Console logs in TokenGraph for relationship detection
- Performance info panel shows node/edge counts
- API endpoints for testing token analysis
- Built-in contrast checking and validation

---

*This index serves as a living document for the token-admin codebase. Update as needed when making significant changes.*