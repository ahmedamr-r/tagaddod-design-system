# Tagaddod Design System Installation Rules
# AI Agent Instructions for Installing @tagaddod-design/react and All Required Dependencies

## OBJECTIVE
Install the Tagaddod Design System package and all required peer dependencies to enable full functionality of the component library.

## PREREQUISITES
- Project created with Next.js or Vite (using previous setup rules)
- Node.js 18+ with package manager (npm, yarn, or pnpm)
- Working directory should be project root

## INSTALLATION STEPS

### 1. Install Core Design System Package
```bash
npm install @tagaddod-design/react
```

### 2. Install Required Radix UI Peer Dependencies
```bash
# Essential Radix UI components for design system functionality
npm install @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-dialog \
  @radix-ui/react-form \
  @radix-ui/react-popover \
  @radix-ui/react-radio-group \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-slider \
  @radix-ui/react-switch \
  @radix-ui/react-tabs \
  @radix-ui/react-tooltip \
  @radix-ui/react-aspect-ratio
```

### 3. Install Icon Library
```bash
# Tabler Icons (required for component icons)
npm install @tabler/icons-react
```

### 4. Install Table Component Dependencies
```bash
# TanStack Table for advanced table functionality
npm install @tanstack/react-table
```

### 5. Install Toast Notification Dependencies
```bash
# Sonner for toast notifications
npm install sonner
```

### 6. Install Development Dependencies (Optional but Recommended)
```bash
npm install -D @types/react @types/react-dom
```

### 7. Verify Package.json Dependencies
After installation, your package.json should include these dependencies:

```json
{
  "dependencies": {
    "@tagaddod-design/react": "^latest",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-form": "^0.0.3",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@tabler/icons-react": "^3.0.0",
    "@tanstack/react-table": "^8.0.0",
    "sonner": "^1.0.0"
  }
}
```

### 8. Create Components Directory Structure
```bash
# Create organized directory structure for design system components
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/forms
mkdir -p src/lib
```

### 9. Create Basic Import Test File (src/lib/design-system-test.ts)
```typescript
// Test file to verify all design system imports work correctly
import {
  Button,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Switch,
  Modal,
  Drawer,
  Popover,
  Tabs,
  Table,
  Avatar,
  Badge,
  Tooltip,
  Separator,
  AspectRatio,
  Sidebar,
  TopBar,
  Logo,
  Sonner,
  RangeSlider,
  Listbox,
  Pagination,
  ThemeProvider,
  useTheme
} from '@tagaddod-design/react'

// Test icon imports
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconPlus, 
  IconSearch 
} from '@tabler/icons-react'

// Verify all imports are working
export const DESIGN_SYSTEM_COMPONENTS = {
  // Form Controls
  Button,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Switch,
  RangeSlider,
  
  // Layout & Structure
  AspectRatio,
  Separator,
  Sidebar,
  TopBar,
  
  // Data Display
  Avatar,
  Badge,
  Table,
  Tooltip,
  Logo,
  
  // Navigation
  Tabs,
  Pagination,
  Listbox,
  
  // Overlays & Feedback
  Modal,
  Drawer,
  Popover,
  Sonner,
  
  // Theme System
  ThemeProvider,
  useTheme,
  
  // Icons
  Icons: {
    IconHome,
    IconUser,
    IconSettings,
    IconPlus,
    IconSearch
  }
}

export default DESIGN_SYSTEM_COMPONENTS
```

### 10. Update TypeScript Configuration (if needed)
Add design system types to your tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["node"],
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

### 11. Create Component Re-export File (src/components/ui/index.ts)
```typescript
// Re-export all design system components for easy importing
export {
  // Form Controls
  Button,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Switch,
  RangeSlider,
  
  // Layout & Structure
  AspectRatio,
  Separator,
  Sidebar,
  TopBar,
  
  // Data Display
  Avatar,
  Badge,
  Table,
  Tooltip,
  Logo,
  
  // Navigation
  Tabs,
  Pagination,
  Listbox,
  
  // Overlays & Feedback
  Modal,
  Drawer,
  Popover,
  Sonner,
  
  // Theme System
  ThemeProvider,
  useTheme,
} from '@tagaddod-design/react'

// Export commonly used types
export type {
  ButtonProps,
  TextInputProps,
  SelectProps,
  CheckboxProps,
  RadioButtonProps,
  SwitchProps,
  ModalProps,
  DrawerProps,
  PopoverProps,
  TabsProps,
  TableProps,
  AvatarProps,
  BadgeProps,
  TooltipProps,
  ThemeProviderProps,
  Theme,
  Direction,
  Locale
} from '@tagaddod-design/react'
```

## VALIDATION STEPS

### 1. Verify Package Installation
```bash
npm list @tagaddod-design/react
```
Should show the installed version without errors

### 2. Check Peer Dependencies
```bash
npm ls
```
Should show no missing peer dependency warnings

### 3. Test TypeScript Imports
```bash
npx tsc --noEmit
```
Should compile without errors after importing design system components

### 4. Test Runtime Import
Create a simple test component:

```typescript
// src/components/InstallationTest.tsx
import { Button, TextInput, Badge } from '@tagaddod-design/react'
import { IconCheck } from '@tabler/icons-react'

export function InstallationTest() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Installation Test</h2>
      <div className="space-y-2">
        <Button prefixIcon={<IconCheck size={18} />}>
          Design System Installed
        </Button>
        <TextInput 
          label="Test Input" 
          placeholder="Type something..." 
        />
        <Badge tone="success">Installation Success</Badge>
      </div>
    </div>
  )
}
```

### 5. Verify Bundle Size (Development)
Start development server and check network tab:
```bash
npm run dev
```
Design system should load without errors in browser console

## TROUBLESHOOTING

### Common Issues:

#### 1. Peer Dependency Warnings
**Problem**: npm warns about missing peer dependencies
**Solution**: Install missing Radix UI components individually:
```bash
npm install @radix-ui/react-[MISSING_COMPONENT]
```

#### 2. TypeScript Import Errors
**Problem**: "Module not found" errors for design system
**Solution**: 
- Verify package is installed: `npm list @tagaddod-design/react`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check tsconfig.json moduleResolution setting

#### 3. Icon Import Errors
**Problem**: Tabler icons not found
**Solution**: 
```bash
npm install @tabler/icons-react
```

#### 4. Runtime Errors with Radix Components
**Problem**: Component crashes at runtime
**Solution**: Install specific Radix dependency:
```bash
npm install @radix-ui/react-dialog @radix-ui/react-popover
```

#### 5. Version Conflicts
**Problem**: Conflicting React versions
**Solution**: 
```bash
npm ls react
npm install react@^18.0.0 react-dom@^18.0.0
```

### Success Indicators:
- All packages install without peer dependency warnings
- TypeScript compilation succeeds
- Design system components import without errors
- Test component renders correctly
- No console errors in browser

## COMPATIBILITY REQUIREMENTS

### React Version
- React 17.0.0 or higher
- React 18.0.0 recommended

### TypeScript
- TypeScript 4.9.0 or higher
- TypeScript 5.0.0 recommended

### Bundler Support
- Vite 4.0+ ✅
- Next.js 13.4+ ✅  
- Webpack 5+ ✅
- Rollup 3+ ✅

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## NEXT STEPS
After successful installation:
1. Download and use `themeprovider-setup.rules` to configure theming
2. Download and use `styles-activation.rules` to activate design system styles
3. Download and use `component-integration.rules` for component usage guidelines

## NOTES
- All peer dependencies are required for full functionality
- Missing Radix UI components will cause runtime errors
- Tabler icons provide the complete icon set used by components
- Design system supports tree-shaking for optimal bundle sizes
- Version compatibility is maintained with semantic versioning