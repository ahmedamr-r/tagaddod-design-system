# Token Admin Usage Guide

The Token Admin app allows you to view, edit, and manage design tokens for the Tagaddod Design System. It provides a visual interface for working with tokens across different brands.

## Features

### 1. Brand Selection
- **Common Tokens**: Core design tokens shared across all brands
- **Tagaddod Brand**: Specific overrides for the Tagaddod brand
- **GreenPan Brand**: Specific overrides for the GreenPan brand

### 2. Token Views
- **Source Tokens**: The original token definitions with W3C DTCG format (editable)
- **Built Tokens**: The compiled CSS variables ready for use (read-only)

### 3. Visual Token Preview
- **Color tokens**: Displayed with color swatches
- **Spacing tokens**: Shown with visual width indicators
- **Border radius**: Displayed with rounded corners
- **Shadows**: Shown with actual shadow effects

### 4. Token Operations
- **Search**: Filter tokens by name, value, or description
- **Edit**: Modify token values and descriptions (in source view)
- **Save**: Persist changes back to the source files
- **Build**: Compile tokens to generate CSS variables

## Workflow

### Viewing Tokens
1. Select a brand from the dropdown (Common, Tagaddod, or GreenPan)
2. Choose between "Source Tokens" and "Built Tokens" tabs
3. Use the search bar to find specific tokens
4. Click on category headers to expand/collapse token groups

### Editing Tokens
1. Select "Source Tokens" tab
2. Select the appropriate brand
3. Edit token values or descriptions directly in the table
4. Click "Save Changes" to persist modifications

### Building Tokens
1. After making changes, click "Build Tokens"
2. The system will:
   - Run Style Dictionary to compile tokens
   - Generate CSS files with proper prefixes (--t-)
   - Create brand-specific CSS files
3. Switch to "Built Tokens" tab to see the results

### Brand-Specific Workflows

#### Common Tokens
- Contains all base tokens (colors, spacing, typography, etc.)
- Changes here affect all brands unless overridden
- Best for global design system updates

#### Tagaddod Brand
- Contains overrides specific to Tagaddod
- Only shows tokens that differ from common
- Primary brand color: Purple (#8c34ff)

#### GreenPan Brand
- Contains overrides specific to GreenPan
- Only shows tokens that differ from common
- Primary brand color: Green (#009f4d)

## Token Structure

```
packages/tokens/src/
├── core/              # Primitive values (colors, sizes)
├── semantic/          # Semantic tokens (surface, text)
├── extras/            # Additional tokens (motion, shadows)
└── brands/           
    ├── tagaddod/     # Tagaddod overrides
    └── greenpan/     # GreenPan overrides
```

## API Endpoints

- `GET /api/tokens?brand={brand}` - Fetch source tokens
- `GET /api/tokens?type=built&brand={brand}` - Fetch built tokens
- `POST /api/tokens` - Save token changes
- `POST /api/build` - Trigger token build process

## Styling

The app uses the design system's own tokens for styling:
- Imports tokens via `@import '@tagaddod/tokens/css/tokens.css'`
- Uses CSS variables like `var(--t-color-bg-fill-brand)`
- Automatically adapts to the selected brand theme

## Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Troubleshooting

### Tokens not loading
1. Ensure token packages are built: `yarn workspace @tagaddod/tokens build`
2. Check that token files exist in `packages/tokens/dist/`
3. Verify PostCSS configuration is correct

### Build fails
1. Check for JSON syntax errors in token files
2. Ensure all token references are valid
3. Look for circular dependencies in token definitions

### Styles not applying
1. Verify CSS imports in `globals.css`
2. Check that PostCSS import resolver is configured
3. Ensure token CSS files are generated in dist folder

## Integration with Design System

The Token Admin integrates with:
- **Tokens Package**: Reads/writes token source files
- **Style Dictionary**: Uses for token compilation
- **React Components**: Provides tokens for styling
- **Storybook**: Tokens used in component documentation

Changes made in Token Admin will be reflected across the entire design system after building and deploying the updated packages.
