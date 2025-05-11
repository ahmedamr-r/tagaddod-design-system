# Token Admin Best Practices

## Project Structure

### Components Organization
All components are placed inside `src/components/` following Next.js App Router best practices:

```
src/
├── app/                    # Next.js App Router pages
├── components/             # All React components
│   ├── TokenTable/
│   ├── TokenEditDrawer/
│   ├── TokenAdminHeader/
│   └── ...
├── lib/                    # Utilities and stores
└── types/                  # TypeScript type definitions
```

### Why Not Root-Level Components?
- **Consistency**: All source code lives inside `src/` directory
- **Next.js Convention**: App Router expects components to be inside `src/`
- **Better Organization**: Clearer separation between config files and source code
- **Import Clarity**: All imports use `@/components/...` alias consistently

## Component Structure

Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx       # Main component file
├── ComponentName.module.css # Component-specific styles
└── index.ts               # Re-export for clean imports
```

## State Management
- **Zustand** for global state (token store)
- **React hooks** for component-level state
- **useCallback** and **useMemo** for performance optimization

## Performance Optimizations
1. **Pagination** for large data sets (50 items per page)
2. **Memoization** of expensive operations
3. **Callback optimization** to prevent re-renders
4. **Component isolation** for focused updates

## Data Flow
1. **Load**: Tokens are loaded from API on mount
2. **Edit**: Changes are made in memory first
3. **Save**: Changes are persisted to backend explicitly
4. **Build**: Compiles tokens into CSS variables

## UI/UX Considerations
- **Drawer animation**: Slides from left to right
- **Feedback**: Loading and error states are clearly shown
- **Confirmation**: Destructive actions require confirmation
- **Responsiveness**: Works on all screen sizes

## CSS Architecture
- **CSS Modules** for component isolation
- **Tailwind** for utility classes
- **Custom properties** for theming
- **Animations** for smooth transitions

## Error Handling
- **Try-catch blocks** for async operations
- **User feedback** via alerts (can be upgraded to toast notifications)
- **Error boundaries** for component-level errors (to be implemented)

## TypeScript
- **Strict typing** for all components
- **Interface definitions** for props
- **Type inference** where appropriate
- **No `any` types** unless absolutely necessary
