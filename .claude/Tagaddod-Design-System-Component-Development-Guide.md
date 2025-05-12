# Tagaddod Design System Component Development Guide

This guide provides instructions for developing new components in the Tagaddod Design System. Follow these conventions and structure to ensure consistency across all components.

## Table of Contents

1. [Component Creation Overview](#component-creation-overview)
2. [Project Structure](#project-structure)
3. [Step-by-Step Component Creation](#step-by-step-component-creation)
4. [RTL Implementation](#rtl-implementation)
5. [Component Requirements](#component-requirements)
6. [Styling Guidelines](#styling-guidelines)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Component Testing](#component-testing)
9. [Integration Checklist](#integration-checklist)

## Component Creation Overview

Each component in the Tagaddod Design System follows a standardized structure and conventions to ensure consistency, accessibility, and quality. Components should:

- Use Radix UI primitives when applicable
- Support both Tagaddod and GreenPan brand themes
- Support RTL languages (Arabic)
- Follow accessible design patterns
- Include comprehensive Storybook documentation
- Utilize the design token system

## Project Structure

Components are located in the `packages/react/src/components` directory, with each component having its own folder.

```
packages/react/src/components/[ComponentName]/
├── [ComponentName].tsx           # Component implementation
├── [ComponentName].module.css    # Component styles
├── [ComponentName].stories.tsx   # Storybook documentation
├── index.ts                      # Component exports
```

## Step-by-Step Component Creation

### 1. Install Required Dependencies

```bash
cd /path/to/tagaddod-design-system-main
yarn workspace @tagaddod/react add [required-packages]
```

Common dependencies:
- `@radix-ui/react-*` - Radix UI primitives
- `@tabler/icons-react` - Icon library

### 2. Create Component Directory Structure

```bash
mkdir -p packages/react/src/components/[ComponentName]
```

### 3. Create Component Files

#### `[ComponentName].tsx`

```tsx
import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './[ComponentName].module.css';

export interface [ComponentName]Props {
  /**
   * Prop description
   */
  propName?: type;
  
  /**
   * Additional class names
   */
  className?: string;
}

export const [ComponentName] = forwardRef<HTMLElementType, [ComponentName]Props>(
  ({
    propName,
    className,
    ...props
  }, ref) => {
    return (
      <element
        ref={ref}
        className={clsx(styles.root, className)}
        {...props}
      >
        {/* Component content */}
      </element>
    );
  }
);

[ComponentName].displayName = '[ComponentName]';
```

#### `[ComponentName].module.css`

```css
/* [ComponentName] Component Styles */

.root {
  /* Base styles */
}

/* Always use the --t- prefixed design tokens */
.someElement {
  color: var(--t-color-text-primary);
  background-color: var(--t-color-surface-background);
  border-radius: var(--t-border-radius-100);
  padding: var(--t-space-200);
  font-family: var(--t-font-family-primary);
}

/* Include state variations */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error {
  border-color: var(--t-color-border-critical);
}

/* Include RTL support - See RTL implementation section for details */
/* Don't rely on flex-direction: row-reverse for RTL */
:global([dir="rtl"]) .someElement {
  /* RTL-specific styles */
}

/* Include responsive adjustments */
@media (max-width: 640px) {
  .someElement {
    /* Mobile adjustments */
  }
}
```

#### `index.ts`

```ts
export * from './[ComponentName]';
```

#### `[ComponentName].stories.tsx`

```tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { [ComponentName] } from './[ComponentName]';

const meta: Meta<typeof [ComponentName]> = {
  title: 'Components/[ComponentName]',
  component: [ComponentName],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define argTypes for Storybook controls
  },
};

export default meta;
type Story = StoryObj<typeof [ComponentName]>;

export const Default: Story = {
  args: {
    // Default props
  },
};

// Include additional variations
export const SomeVariation: Story = {
  args: {
    // Variation props
  },
};

// Always include RTL example
export const RTL: Story = {
  args: {
    // RTL-specific props
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
};
```

### 4. Export Component in Main Index

Update `packages/react/src/components/index.ts`:

```ts
// Existing exports...

export { [ComponentName] } from './[ComponentName]';
export type { [ComponentName]Props } from './[ComponentName]';
```

### 5. Build and Test Component

```bash
cd /path/to/tagaddod-design-system-main
yarn workspace @tagaddod/react build
yarn workspace @tagaddod/storybook storybook --port 6011
```

## RTL Implementation

RTL support is critical for the Tagaddod Design System as it needs to support Arabic text. Based on practical experience with components like the Checkbox, here are key approaches for successful RTL implementation:

### General RTL Principles

1. **Reference Figma designs**: Always reference the Figma designs for both LTR and RTL versions of a component to understand the correct layout.

2. **Consider component structure**: Different components may require different RTL strategies based on their structure.

3. **Use browser DevTools**: Test and debug RTL styles using browser DevTools to visualize changes in real-time.

### Practical Approaches (Component-Specific)

#### 1. Container Layout Approach

For components that maintain the same internal structure but change alignment:

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* LTR alignment */
}

:global([dir="rtl"]) .container {
  align-items: flex-start; /* Might stay the same for specific components */
}
```

#### 2. Explicit Direction Strategy

Instead of relying on `flex-direction: row-reverse`, set explicit padding or margin for RTL:

```css
/* For LTR */
:global([dir="ltr"]) .element {
  padding-left: calc(var(--t-size-400) + var(--t-space-200));
}

/* For RTL - use explicit right padding from design */
:global([dir="rtl"]) .element {
  padding-right: var(--t-space-600); /* From Figma spec */
}
```

#### 3. Content Ordering Approaches

For the ordering of child elements, consider the component's purpose:

**Option A:** Maintaining the Same Flex Direction (preferred for many cases)
```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: var(--t-space-200);
}

/* Use the same flex-direction but adjust other properties */
:global([dir="rtl"]) .wrapper {
  flex-direction: row; /* Same as LTR */
}
```

**Option B:** Using CSS Grid (for complex layouts)
```css
.wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
}

:global([dir="ltr"]) .checkbox { grid-column: 1; }
:global([dir="ltr"]) .label { grid-column: 2; }

:global([dir="rtl"]) .checkbox { grid-column: 2; }
:global([dir="rtl"]) .label { grid-column: 1; }
```

#### 4. Debugging RTL Issues

When RTL layout issues occur:

1. Use Chrome DevTools to inspect the component structure
2. Verify that `dir="rtl"` is properly applied
3. Test different CSS properties to see their effect
4. Consider the component's specific layout needs rather than applying generic RTL solutions

### RTL Case Study: Checkbox Component

For the Checkbox component, the solution was:

1. Keep flex-direction consistent between LTR and RTL
2. Use explicit padding values according to the design specifications
3. Apply specific RTL styles to only the elements that need them
4. Test in browser DevTools to verify layout visually

```css
/* The key insight: Keep flex-direction the same for both */
.checkboxWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--t-space-200);
}

:global([dir="rtl"]) .checkboxWrapper {
  flex-direction: row; /* Same as LTR */
}

/* Use explicit padding for help/error text */
:global([dir="rtl"]) .helpText {
  padding-right: var(--t-space-600);
}

:global([dir="rtl"]) .errorMessage {
  padding-right: var(--t-space-600);
  flex-direction: row; /* Same as LTR */
}
```

## Component Requirements

### Props Interface

- Use descriptive interface names: `[ComponentName]Props`
- Include JSDoc comments for each prop
- Provide sensible defaults
- Use appropriate TypeScript types
- Include commonly needed props:
  - `className` - For additional styling
  - `children` - When component acts as a container
  - Any relevant HTML attributes
  - State props like `disabled`, `error`, etc.

### Component Implementation

- Use `forwardRef` to pass refs to root elements
- Add `displayName` for better debugging
- Implement controlled and uncontrolled variants when applicable
- Include error handling
- Only include necessary dependencies

## Styling Guidelines

### CSS Modules

- Keep CSS scoped to the component with CSS modules
- Use BEM-like naming convention within the CSS file
- Follow the CSS modules pattern with semantic class names
- Import and use global design tokens with `var(--t-*)`

### Design Tokens Usage

- Use design tokens for all stylistic properties:
  - **Colors**: `var(--t-color-*)`
  - **Spacing**: `var(--t-space-*)`
  - **Typography**: `var(--t-font-*)`
  - **Borders/Radius**: `var(--t-border-*)`
  - **Shadows**: `var(--t-shadow-*)`

- If a token doesn't exist:
  1. Highlight the missing token in a comment
  2. Ask the user whether to continue with a fixed value or request a new token

### Theme Support

- Design components to work with both brands:
  - Tagaddod (default)
  - GreenPan
- Test theme changes by switching the theme in Storybook

## Accessibility Considerations

- Include appropriate ARIA attributes
- Ensure keyboard navigation works
- Provide visible focus states
- Support screen readers
- Use semantic HTML elements where possible
- Include visual indicators for states (focus, error, disabled)
- Implement proper contrast ratios

## Component Testing

- Create comprehensive Storybook stories
- Include all major variations and states
- Test different themes
- Test RTL support
- Test with keyboard navigation
- Test with screen readers

## Integration Checklist

Before submitting a new component, ensure:

- [ ] Component follows the structure in this guide
- [ ] Component uses design tokens for all visual properties
- [ ] Component has appropriate TypeScript types and interfaces
- [ ] Component has JSDoc comments for all props
- [ ] Component supports both themes
- [ ] Component supports RTL layouts (tested in browser)
- [ ] Component is accessible
- [ ] Component includes Storybook stories
- [ ] Component is exported from the main index
- [ ] Component builds without errors

---

## Component Template with RTL Support

Use this template as a starting point for new components:

### `NewComponent.tsx`

```tsx
import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './NewComponent.module.css';

export interface NewComponentProps {
  /**
   * Component content
   */
  children?: React.ReactNode;
  
  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Additional class names
   */
  className?: string;
}

export const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(
  ({
    children,
    disabled = false,
    error,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          styles.container,
          disabled && styles.disabled,
          error && styles.error,
          className
        )}
        aria-disabled={disabled}
        {...props}
      >
        <div className={styles.wrapper}>
          {/* Component content elements */}
          <div className={styles.element1}></div>
          <div className={styles.element2}>{children}</div>
        </div>
        
        {error && (
          <div className={styles.errorMessage}>{error}</div>
        )}
      </div>
    );
  }
);

NewComponent.displayName = 'NewComponent';
```

### `NewComponent.module.css` with RTL Support

```css
/* NewComponent Component Styles */

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--t-space-100);
}

/* Setting explicit alignment - consider component needs */
:global([dir="ltr"]) .container,
:global([dir="rtl"]) .container {
  align-items: flex-start;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--t-space-200);
}

/* Important: Test if flex-direction should stay the same for RTL */
:global([dir="rtl"]) .wrapper {
  flex-direction: row; /* Same as LTR - use DevTools to validate */
}

.element1, .element2 {
  /* Base styles */
}

.errorMessage {
  font-family: var(--t-font-family-primary);
  font-size: var(--t-font-size-300);
  color: var(--t-color-text-critical);
  display: flex;
  align-items: center;
  gap: var(--t-space-100);
}

/* Use explicit padding instead of relying on flexbox behavior */
:global([dir="ltr"]) .errorMessage {
  padding-left: calc(var(--t-size-400) + var(--t-space-200));
}

:global([dir="rtl"]) .errorMessage {
  padding-right: var(--t-space-600); /* Use exact value from Figma */
}

/* State styles */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error .element1 {
  border-color: var(--t-color-border-critical);
}

/* Responsive styles */
@media (max-width: 640px) {
  .element2 {
    font-size: var(--t-font-size-300);
  }
}
```

## RTL Debugging Workflow

When implementing RTL support:

1. **Examine the Figma design** for both LTR and RTL
2. **Start with the basic component** structure in LTR
3. **Add RTL selectors** with minimal changes first
4. **Test in Storybook** with RTL mode enabled
5. **Use Chrome DevTools** to debug and tweak CSS
6. **Try different approaches**:
   - Keep flex-direction the same and use padding
   - Try grid layout for complex components
   - Use explicit RTL styles for specific elements
7. **Validate against design** specifications
8. **Document the approach** that worked for future reference

Remember, RTL implementation can be component-specific - what works for one component might not work for another. Always test thoroughly and use browser DevTools to debug layout issues.