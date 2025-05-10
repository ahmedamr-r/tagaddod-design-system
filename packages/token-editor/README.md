# @tagaddod/token-editor

Enhanced Token Editor for the Tagaddod Design System. This Storybook addon provides a powerful UI for managing design tokens with real-time validation and preview.

## Features

### 🎨 Real-time Token Editing
- Edit tokens and see immediate updates in components
- Changes persist in localStorage
- Deep-merge with existing tokens for non-destructive edits

### ✅ Validation
- **W3C Schema Validation**: Ensures tokens follow the Design Token Community Group format
- **WCAG Contrast Checking**: Automatically validates color contrast ratios
- **Type Safety**: Validates token types (color, spacing, dimension, etc.)

### 📤 Import/Export
- Import JSON token files with drag-and-drop support
- Export drafts with timestamp for version control
- Compatible with Tokens Studio format

### 🔍 Search & Filter
- Search tokens by name or value
- Quick filtering for large token sets
- Hierarchical display with collapsible groups

### 🎭 Theme-aware
- Automatically loads theme-specific token overrides
- Works with both Tagaddod and GreenPan themes
- Preserves user modifications when switching themes

## Usage

The Token Editor appears as a panel in Storybook. To use it:

1. Open any story in Storybook
2. Click the "Token Editor" tab in the addon panel
3. Edit tokens using the form or import JSON files
4. See real-time updates in the preview

## Token Format

Tokens follow the W3C Design Token format:

```json
{
  "color": {
    "primary": {
      "500": {
        "value": "#25b24b",
        "type": "color",
        "description": "Primary brand color"
      }
    }
  }
}
```

## Validation Rules

### Color Contrast
The editor automatically checks contrast ratios for common color pairs:
- Button text/background combinations
- Text/background pairs
- Error, warning, success, and info states

### WCAG Compliance
- **AA**: 4.5:1 ratio for normal text
- **AA Large**: 3:1 ratio for large text (18pt or 14pt bold)
- **AAA**: 7:1 ratio for enhanced accessibility

## Development

### Installation

```bash
yarn workspace @tagaddod/token-editor add zod @storybook/icons wcag-contrast
```

### Building

```bash
yarn workspace @tagaddod/token-editor build
```

### Architecture

The token editor consists of:
- **TokenManager**: Main UI component with CRUD operations
- **ThemeAwareTokenManager**: Wrapper that handles theme-specific tokens
- **ValidationLayer**: W3C schema and WCAG contrast validation
- **Preview Integration**: Real-time CSS variable injection

## API

### Token Update Events

The preview iframe listens for token updates:

```javascript
channel.on('tds/tokens/update', (tokens) => {
  // Apply tokens as CSS variables
});
```

### Token Cache

The editor maintains a cache to optimize performance:
- Only updates changed CSS variables
- Debounces rapid changes
- Preserves token references

## Performance

- Debounced preview updates (100ms)
- Cached CSS variable generation
- Optimized token flattening algorithm
- Error boundaries for stability

## Accessibility

The Token Editor itself is fully keyboard navigable and screen reader accessible:
- Proper ARIA labels and roles
- Keyboard shortcuts for common actions
- High contrast mode support

## Future Enhancements

- [ ] Undo/Redo functionality
- [ ] Bulk operations (find & replace)
- [ ] Token diffing and comparison
- [ ] GitHub sync integration
- [ ] Design token documentation generation
