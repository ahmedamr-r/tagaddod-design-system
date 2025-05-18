# Tagaddod Design System - Component Testing Master Plan

This document outlines a comprehensive testing strategy for all components in the Tagaddod Design System. Each component has its own detailed testing plan broken down into phases for systematic implementation.

## Table of Contents

- [Testing Environment Setup](#testing-environment-setup)
- [Component Testing Phases](#component-testing-phases)
- [Component-Specific Test Plans](#component-specific-test-plans)
  - [1. AspectRatio](#1-aspectratio)
  - [2. Button](#2-button)
  - [3. TextInput](#3-textinput)
  - [4. Checkbox](#4-checkbox)
  - [5. RadioButton](#5-radiobutton)
  - [6. Tabs](#6-tabs)
  - [7. Badge](#7-badge)
  - [8. Avatar](#8-avatar)
  - [9. Drawer](#9-drawer)
  - [10. Modal](#10-modal)
  - [11. Popover](#11-popover)
  - [12. Switch](#12-switch)
  - [13. Table](#13-table)
  - [14. Pagination](#14-pagination)
  - [15. Listbox](#15-listbox)
- [Common Test Utilities](#common-test-utilities)
- [Implementation Checklist](#implementation-checklist)

## Testing Environment Setup

The testing environment has already been set up for the project. Here's what's been configured:

### ✅ Installed Dependencies
The following dependencies have been installed:
```bash
# Test framework and utilities
jest @testing-library/react @testing-library/jest-dom @testing-library/user-event 
jest-environment-jsdom @types/jest identity-obj-proxy

# Babel dependencies for TypeScript/React support
@babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest
```

### ✅ Configuration Files
The following configuration files have been created:

1. **jest.config.js**
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/*.stories.{ts,tsx}',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
};
```

2. **jest.setup.js**
```javascript
require('@testing-library/jest-dom');
```

3. **babel.config.js**
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};
```

4. **styleMock.js** (in `__mocks__` folder)
```javascript
module.exports = {};
```

### ✅ Test Utilities
A test utilities file has been created at `src/test-utils/test-utils.tsx` with helpers for:
- Theme context testing 
- RTL support testing
- Document attribute mocking

### ✅ Package.json Scripts
The following test scripts have been added:
```json
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage"
```

Basic Jest configuration:

```javascript
// All configuration files have already been created.
// See the Testing Environment Setup section above for details.
```

And create a Jest setup file:

```javascript
// See the Testing Environment Setup section above for details.
```

## Component Testing Phases

For each component, testing will be broken down into 4 phases:

### Phase 1: Basic Rendering
- Test component renders without errors
- Test children/content renders correctly 
- Test accessible attributes are correct
- Test default props behavior

### Phase 2: Props & Variants
- Test all props and their effects on rendering
- Test all documented variants/combinations
- Test conditional rendering based on props
- Test style application and className merging

### Phase 3: Interaction & Behavior
- Test user interactions (click, hover, focus, etc.)
- Test keyboard navigation
- Test state changes
- Test callbacks and event handlers

### Phase 4: Edge Cases & Accessibility
- Test extreme values
- Test error states
- Test SSR compatibility
- Test accessibility requirements
- Test theme switching
- Test RTL (right-to-left) support

## Component-Specific Test Plans

### 1. AspectRatio

**Component Overview**: Maintains a consistent width-to-height ratio for content.

#### Phase 1: Basic Rendering
- Test component renders without errors
- Test children are rendered correctly
- Test default 1:1 aspect ratio is applied

#### Phase 2: Props & Variants
- Test custom ratio values (16/9, 4/3, 3/2, etc.)
- Test style prop merging
- Test className prop application
- Test ref forwarding

#### Phase 3: Browser Compatibility Behavior
- Test modern browser path (with CSS aspect-ratio)
- Test fallback behavior (padding-top technique)
- Test SSR compatibility (no window object)

#### Phase 4: Edge Cases
- Test with image children
- Test with very large/small ratio values
- Test interaction with container size changes
- Test RTL compatibility

**Test File Structure**:
```typescript
// AspectRatio.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { AspectRatio } from './AspectRatio';

// Mock CSS.supports for testing both paths
let aspectRatioSupported = true;
Object.defineProperty(window, 'CSS', {
  value: {
    supports: jest.fn(() => aspectRatioSupported),
  },
});

describe('AspectRatio Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders children correctly', () => {...})
    it('applies default 1:1 aspect ratio', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('applies custom ratio values correctly', () => {...})
    it('merges style props correctly', () => {...})
    it('applies custom className correctly', () => {...})
    it('forwards ref to DOM element', () => {...})
  });
  
  // Phase 3 Tests
  describe('Browser Compatibility', () => {
    it('uses CSS aspect-ratio in modern browsers', () => {...})
    it('uses padding technique in older browsers', () => {
      // Toggle support to false
      aspectRatioSupported = false;
      // Test fallback implementation
      // Reset for other tests
      aspectRatioSupported = true;
    })
  });
  
  // Phase 4 Tests
  describe('Edge Cases', () => {
    it('handles image children correctly', () => {...})
    it('handles extreme ratio values', () => {...})
    it('works with RTL direction', () => {...})
  });
});
```

### 2. Button

**Component Overview**: Interactive button component with various styles, states, and behaviors.

#### Phase 1: Basic Rendering
- Test button renders correctly
- Test button text content is displayed
- Test default props are applied
- Test button type attribute

#### Phase 2: Props & Variants
- Test all variants (primary, secondary, tertiary, plain)
- Test all tones (default, critical, success, neutral, magic)
- Test all sizes (large, medium, micro)
- Test fullWidth prop
- Test disabled state
- Test with icons (prefix/suffix)
- Test loading state

#### Phase 3: Interaction & Behavior
- Test click events
- Test keyboard accessibility (Enter/Space)
- Test focus states
- Test hover states (via userEvent)

#### Phase 4: Edge Cases & Accessibility
- Test with long text content
- Test RTL support (icon positioning)
- Test with different languages
- Test ARIA attributes
- Test theme switching

**Test File Structure**:
```typescript
// Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders with correct text', () => {...})
    it('has button role', () => {...})
    it('has default type="button"', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([
      ['primary'], 
      ['secondary'], 
      ['tertiary'], 
      ['plain']
    ])('renders %s variant correctly', (variant) => {...})
    
    it.each([
      ['default'], 
      ['critical'], 
      ['success'], 
      ['neutral'], 
      ['magic']
    ])('renders %s tone correctly', (tone) => {...})
    
    it.each([
      ['large'], 
      ['medium'], 
      ['micro']
    ])('renders %s size correctly', (size) => {...})
    
    it('applies fullWidth style when specified', () => {...})
    it('applies disabled attribute when disabled', () => {...})
    it('renders prefix icon when provided', () => {...})
    it('renders suffix icon when provided', () => {...})
    it('displays loading spinner when loading=true', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('calls onClick when clicked', () => {...})
    it('does not call onClick when disabled', () => {...})
    it('does not call onClick when loading', () => {...})
    it('can be triggered with keyboard Enter', () => {...})
    it('can be triggered with keyboard Space', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles long text content correctly', () => {...})
    it('positions icons correctly in RTL mode', () => {...})
    it('has correct ARIA attributes when disabled', () => {...})
    it('has correct ARIA attributes when loading', () => {...})
  });
});
```

### 3. TextInput

**Component Overview**: Text input field with various styling options and states.

#### Phase 1: Basic Rendering
- Test input renders correctly
- Test placeholder displays correctly
- Test default props are applied

#### Phase 2: Props & Variants
- Test all sizes
- Test disabled state
- Test readOnly state
- Test error state
- Test with prefix/suffix content
- Test with label
- Test with helper text

#### Phase 3: Interaction & Behavior
- Test value changes when typing
- Test onChange callback is called
- Test onFocus/onBlur events
- Test controlled vs uncontrolled behavior

#### Phase 4: Edge Cases & Accessibility
- Test with very long input
- Test with special characters
- Test with different input types (text, email, number, etc.)
- Test a11y attributes
- Test RTL support

**Test File Structure**:
```typescript
// TextInput.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('TextInput Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders input element correctly', () => {...})
    it('displays placeholder text', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([/* sizes */])('renders %s size correctly', (size) => {...})
    it('applies disabled attribute when disabled', () => {...})
    it('applies readOnly attribute when readOnly', () => {...})
    it('displays error styling when error=true', () => {...})
    it('renders prefix content when provided', () => {...})
    it('renders suffix content when provided', () => {...})
    it('renders with label when provided', () => {...})
    it('renders helper text when provided', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('updates value when typing (uncontrolled)', () => {...})
    it('calls onChange when typing', () => {...})
    it('calls onFocus when focused', () => {...})
    it('calls onBlur when blurred', () => {...})
    it('respects controlled value', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long input correctly', () => {...})
    it('handles different input types correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 4. Checkbox

**Component Overview**: Checkbox input component for boolean or tri-state selections.

#### Phase 1: Basic Rendering
- Test checkbox renders correctly
- Test label renders correctly
- Test default props are applied

#### Phase 2: Props & Variants
- Test checked state (true/false/indeterminate)
- Test disabled state
- Test error state
- Test with different label positions
- Test with and without label

#### Phase 3: Interaction & Behavior
- Test click toggles state
- Test onChange callback is called
- Test keyboard accessibility (Space)
- Test focus states

#### Phase 4: Edge Cases & Accessibility
- Test with very long label
- Test with HTML content in label
- Test ARIA attributes
- Test RTL support

**Test File Structure**:
```typescript
// Checkbox.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders checkbox input correctly', () => {...})
    it('renders label text correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('renders in unchecked state by default', () => {...})
    it('renders in checked state when checked=true', () => {...})
    it('renders in indeterminate state when indeterminate=true', () => {...})
    it('applies disabled styling when disabled=true', () => {...})
    it('applies error styling when error=true', () => {...})
    it('positions label correctly based on labelPosition', () => {...})
    it('renders without label when no label provided', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('toggles checked state when clicked (uncontrolled)', () => {...})
    it('calls onChange when clicked with correct value', () => {...})
    it('can be toggled with Space key', () => {...})
    it('shows focus styling when focused', () => {...})
    it('does not toggle when disabled', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long label correctly', () => {...})
    it('renders HTML content in label correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 5. RadioButton

**Component Overview**: Radio button input for selecting a single option from a group.

#### Phase 1: Basic Rendering
- Test radio button renders correctly
- Test label renders correctly
- Test default props are applied

#### Phase 2: Props & Variants
- Test checked state
- Test disabled state
- Test error state
- Test with different label positions
- Test with and without label

#### Phase 3: Interaction & Behavior
- Test click sets checked state
- Test onChange callback is called
- Test keyboard accessibility
- Test focus states
- Test group behavior (only one selected)

#### Phase 4: Edge Cases & Accessibility
- Test with very long label
- Test with HTML content in label
- Test ARIA attributes
- Test RTL support

**Test File Structure**:
```typescript
// RadioButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButton, RadioGroup } from './RadioButton';

describe('RadioButton Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders radio input correctly', () => {...})
    it('renders label text correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('renders in unchecked state by default', () => {...})
    it('renders in checked state when checked=true', () => {...})
    it('applies disabled styling when disabled=true', () => {...})
    it('applies error styling when error=true', () => {...})
    it('positions label correctly based on labelPosition', () => {...})
    it('renders without label when no label provided', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('becomes checked when clicked', () => {...})
    it('calls onChange when clicked with correct value', () => {...})
    it('can be selected with keyboard', () => {...})
    it('shows focus styling when focused', () => {...})
    it('does not toggle when disabled', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long label correctly', () => {...})
    it('renders HTML content in label correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});

describe('RadioGroup Component', () => {
  it('only allows one radio to be selected at a time', () => {...})
  it('calls onChange with the selected value', () => {...})
  // More RadioGroup-specific tests...
});
```

### 6. Tabs

**Component Overview**: Tab container and panels for organizing content into selectable views.

#### Phase 1: Basic Rendering
- Test tabs container renders correctly
- Test tab triggers render correctly
- Test tab content renders correctly
- Test default selected tab

#### Phase 2: Props & Variants
- Test different variants
- Test different counts
- Test with custom labels
- Test disabled tabs
- Test with icons

#### Phase 3: Interaction & Behavior
- Test tab selection on click
- Test onChange callback
- Test keyboard navigation (←, →, Home, End)
- Test focus management

#### Phase 4: Edge Cases & Accessibility
- Test with many tabs
- Test with long tab labels
- Test dynamic tab adding/removing
- Test ARIA attributes
- Test RTL support

**Test File Structure**:
```typescript
// Tabs.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs Component', () => {
  const setupBasicTabs = () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" disabled>Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    );
  };

  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders tabs list correctly', () => {...})
    it('renders tab triggers correctly', () => {...})
    it('renders default selected tab content', () => {...})
    it('hides non-selected tab content', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([/* variants */])('renders %s variant correctly', (variant) => {...})
    it.each([/* counts */])('renders %s count correctly', (count) => {...})
    it('applies disabled styling to disabled tabs', () => {...})
    it('renders tab with icon correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('changes selected tab when clicking a tab', () => {...})
    it('calls onValueChange when tab changes', () => {...})
    it('navigates tabs with arrow keys', () => {...})
    it('navigates to first/last tab with Home/End keys', () => {...})
    it('cannot select disabled tabs', () => {...})
    it('manages focus correctly when navigating', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles many tabs correctly', () => {...})
    it('handles long tab labels correctly', () => {...})
    it('updates correctly when tabs change dynamically', () => {...})
    it('has correct ARIA attributes for tabs', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 7. Badge

**Component Overview**: Small status indicator for labeling, categorization, or notifications.

#### Phase 1: Basic Rendering
- Test badge renders correctly
- Test badge text content is displayed
- Test default props are applied

#### Phase 2: Props & Variants
- Test all tones (default, critical, success, etc.)
- Test all sizes
- Test with and without icons
- Test with custom colors
- Test with custom className

#### Phase 3: Behavior
- Test truncation with long text
- Test overflow handling

#### Phase 4: Edge Cases & Accessibility
- Test with very long text
- Test with only icon, no text
- Test a11y contrast requirements for each tone
- Test RTL support

**Test File Structure**:
```typescript
// Badge.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders badge correctly', () => {...})
    it('displays text content correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([/* tones */])('renders %s tone correctly', (tone) => {...})
    it.each([/* sizes */])('renders %s size correctly', (size) => {...})
    it('renders with prefix icon when provided', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Behavior', () => {
    it('truncates long text correctly', () => {...})
    it('handles overflow appropriately', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long text correctly', () => {...})
    it('renders properly with only icon', () => {...})
    it('has sufficient contrast for each tone', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 8. Avatar

**Component Overview**: User or entity avatar display with image, initials, or fallback.

#### Phase 1: Basic Rendering
- Test avatar renders correctly
- Test default props are applied
- Test image is displayed

#### Phase 2: Props & Variants
- Test all sizes
- Test all types (image, initials, icon)
- Test with and without border
- Test with custom colors

#### Phase 3: Behavior
- Test fallback behavior when image fails to load
- Test initials generation from name
- Test loading states

#### Phase 4: Edge Cases & Accessibility
- Test with very long names for initials
- Test with special characters in names
- Test a11y attributes
- Test theme changes

**Test File Structure**:
```typescript
// Avatar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders avatar container correctly', () => {...})
    it('renders image when src provided', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([/* sizes */])('renders %s size correctly', (size) => {...})
    it('renders image type correctly', () => {...})
    it('renders initials type correctly', () => {...})
    it('renders icon type correctly', () => {...})
    it('applies border when border=true', () => {...})
    it('applies custom colors correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Behavior', () => {
    it('falls back to initials when image fails to load', () => {
      const { container } = render(<Avatar src="invalid-url.jpg" name="John Doe" />);
      const img = container.querySelector('img');
      fireEvent.error(img);
      expect(screen.getByText('JD')).toBeInTheDocument();
    })
    it('generates correct initials from name', () => {...})
    it('shows loading state when loading=true', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long names correctly', () => {...})
    it('handles special characters in names', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('handles theme changes correctly', () => {...})
  });
});
```

### 9. Drawer

**Component Overview**: Side panel that slides in from the edge of the screen.

#### Phase 1: Basic Rendering
- Test drawer renders correctly when open
- Test drawer is not in the DOM when closed
- Test default props are applied

#### Phase 2: Props & Variants
- Test all positions (left, right, top, bottom)
- Test all sizes
- Test with and without overlay
- Test with and without close button
- Test with custom className

#### Phase 3: Interaction & Behavior
- Test open/close transitions
- Test onOpenChange callback
- Test close on overlay click
- Test close on Escape key
- Test focus management

#### Phase 4: Edge Cases & Accessibility
- Test with very tall/wide content
- Test scroll behavior with overflow content
- Test a11y attributes
- Test keyboard navigation
- Test with screen readers

**Test File Structure**:
```typescript
// Drawer.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from './Drawer';

// Mock transition/animation related functions
jest.mock('your-animation-lib', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Drawer Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders when open=true', () => {...})
    it('does not render when open=false', () => {...})
    it('renders content correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([
      ['left'], 
      ['right'], 
      ['top'], 
      ['bottom']
    ])('renders in %s position correctly', (position) => {...})
    
    it.each([/* sizes */])('renders %s size correctly', (size) => {...})
    it('renders overlay when hasOverlay=true', () => {...})
    it('renders close button when showCloseButton=true', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('calls onOpenChange when opening/closing', () => {...})
    it('closes when overlay is clicked', () => {...})
    it('closes when Escape key is pressed', () => {...})
    it('traps focus within drawer when open', () => {...})
    it('returns focus to trigger when closed', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles tall content with scrolling', () => {...})
    it('handles very wide content correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('supports keyboard navigation', () => {...})
    it('is properly announced by screen readers', () => {...})
  });
});
```

### 10. Modal

**Component Overview**: Dialog that appears on top of the main content.

#### Phase 1: Basic Rendering
- Test modal renders correctly when open
- Test modal is not in the DOM when closed
- Test default props are applied
- Test header, content, and footer render correctly

#### Phase 2: Props & Variants
- Test all sizes
- Test with and without overlay
- Test with and without close button
- Test with custom className
- Test with custom header/footer

#### Phase 3: Interaction & Behavior
- Test open/close transitions
- Test onOpenChange callback
- Test close on overlay click
- Test close on Escape key
- Test focus management

#### Phase 4: Edge Cases & Accessibility
- Test with very tall/wide content
- Test scroll behavior with overflow content
- Test a11y attributes
- Test keyboard navigation
- Test with screen readers

**Test File Structure**:
```typescript
// Modal.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

// Mock transition/animation related functions
jest.mock('your-animation-lib', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Modal Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders when open=true', () => {...})
    it('does not render when open=false', () => {...})
    it('renders header correctly', () => {...})
    it('renders content correctly', () => {...})
    it('renders footer correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([/* sizes */])('renders %s size correctly', (size) => {...})
    it('renders overlay when hasOverlay=true', () => {...})
    it('renders close button when showCloseButton=true', () => {...})
    it('applies custom className correctly', () => {...})
    it('renders custom header component', () => {...})
    it('renders custom footer component', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('calls onOpenChange when opening/closing', () => {...})
    it('closes when overlay is clicked', () => {...})
    it('closes when Escape key is pressed', () => {...})
    it('traps focus within modal when open', () => {...})
    it('returns focus to trigger when closed', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles tall content with scrolling', () => {...})
    it('handles very wide content correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('supports keyboard navigation', () => {...})
    it('is properly announced by screen readers', () => {...})
  });
});
```

### 11. Popover

**Component Overview**: Small floating content panel typically triggered by a click.

#### Phase 1: Basic Rendering
- Test popover trigger renders correctly
- Test popover content renders when open
- Test popover is not in the DOM when closed
- Test default props are applied

#### Phase 2: Props & Variants
- Test all placements (top, right, bottom, left, etc.)
- Test with and without arrow
- Test with and without close button
- Test with custom className

#### Phase 3: Interaction & Behavior
- Test open/close on trigger click
- Test onOpenChange callback
- Test close on outside click
- Test close on Escape key
- Test focus management

#### Phase 4: Edge Cases & Accessibility
- Test positioning near viewport edges
- Test with very tall/wide content
- Test scroll behavior with overflow content
- Test a11y attributes
- Test keyboard navigation

**Test File Structure**:
```typescript
// Popover.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

// Mock popper.js for positioning tests
jest.mock('@popperjs/core', () => ({
  ...jest.requireActual('@popperjs/core'),
  createPopper: jest.fn(() => ({
    update: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('Popover Component', () => {
  const setupPopover = () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover Content</div>
        </PopoverContent>
      </Popover>
    );
    return {
      trigger: screen.getByText('Open Popover'),
      getContent: () => screen.queryByText('Popover Content'),
    };
  };

  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders trigger correctly', () => {...})
    it('does not render content initially', () => {...})
    it('renders content when triggered', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it.each([
      ['top'], 
      ['right'], 
      ['bottom'], 
      ['left']
    ])('positions content at %s correctly', (placement) => {...})
    
    it('renders arrow when showArrow=true', () => {...})
    it('renders close button when showCloseButton=true', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('opens when trigger is clicked', () => {...})
    it('closes when clicking outside', () => {...})
    it('closes when Escape key is pressed', () => {...})
    it('calls onOpenChange when opening/closing', () => {...})
    it('manages focus correctly', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles positioning near viewport edges', () => {...})
    it('handles tall content with scrolling', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('supports keyboard navigation', () => {...})
  });
});
```

### 12. Switch

**Component Overview**: Toggle switch for boolean settings.

#### Phase 1: Basic Rendering
- Test switch renders correctly
- Test default props are applied
- Test label renders correctly

#### Phase 2: Props & Variants
- Test checked/unchecked states
- Test disabled state
- Test with and without label
- Test with custom className

#### Phase 3: Interaction & Behavior
- Test toggling on click
- Test onChange callback
- Test keyboard toggle (Space)
- Test focus states

#### Phase 4: Edge Cases & Accessibility
- Test with very long label
- Test a11y attributes
- Test RTL support

**Test File Structure**:
```typescript
// Switch.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders switch element correctly', () => {...})
    it('renders label when provided', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('renders in unchecked state by default', () => {...})
    it('renders in checked state when checked=true', () => {...})
    it('applies disabled styling when disabled=true', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('toggles state when clicked', () => {...})
    it('calls onChange when toggled with correct value', () => {...})
    it('can be toggled with Space key', () => {...})
    it('shows focus styling when focused', () => {...})
    it('does not toggle when disabled', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles very long label correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 13. Table

**Component Overview**: Data table with sorting, selection, and pagination capabilities.

#### Phase 1: Basic Rendering
- Test table renders correctly
- Test headers render correctly
- Test rows and cells render correctly
- Test default props are applied

#### Phase 2: Props & Variants
- Test with different column configurations
- Test with and without selection
- Test with and without sorting
- Test with custom rendering for cells
- Test with custom className

#### Phase 3: Interaction & Behavior
- Test sorting when clicking headers
- Test row selection
- Test bulk selection
- Test callbacks (onSort, onSelect, etc.)

#### Phase 4: Edge Cases & Accessibility
- Test with empty data
- Test with many columns/rows
- Test with very wide/long content
- Test a11y attributes
- Test keyboard navigation
- Test RTL support

**Test File Structure**:
```typescript
// Table.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table, TableHeader, TableHeaderCell, TableCell } from './Table';

describe('Table Component', () => {
  const columns = [
    { id: 'name', header: 'Name' },
    { id: 'age', header: 'Age' },
    { id: 'email', header: 'Email' },
  ];
  
  const data = [
    { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
  ];
  
  const renderTable = (props = {}) => {
    return render(
      <Table 
        columns={columns} 
        data={data}
        {...props}
      />
    );
  };

  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders table element correctly', () => {...})
    it('renders correct number of headers', () => {...})
    it('renders correct number of rows', () => {...})
    it('renders cell content correctly', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('renders with custom column configuration', () => {...})
    it('renders selection checkboxes when selectable=true', () => {...})
    it('renders sort indicators when sortable=true', () => {...})
    it('renders custom cell content using cell renderer', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('sorts data when clicking sortable header', () => {...})
    it('toggles sort direction on multiple clicks', () => {...})
    it('selects row when clicking checkbox', () => {...})
    it('selects all rows when clicking header checkbox', () => {...})
    it('calls onSort when sorting changes', () => {...})
    it('calls onSelect when selection changes', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('displays message when no data is available', () => {...})
    it('handles very wide content correctly', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('supports keyboard navigation', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 14. Pagination

**Component Overview**: Navigation for paginated data with page numbers and controls.

#### Phase 1: Basic Rendering
- Test pagination renders correctly
- Test page numbers render correctly
- Test prev/next buttons render correctly
- Test default props are applied

#### Phase 2: Props & Variants
- Test with different page counts
- Test with different current page
- Test with disabled state
- Test with custom className
- Test with sibling count variations

#### Phase 3: Interaction & Behavior
- Test page change on click
- Test prev/next navigation
- Test onPageChange callback
- Test keyboard navigation

#### Phase 4: Edge Cases & Accessibility
- Test with single page
- Test with many pages
- Test a11y attributes
- Test keyboard navigation
- Test RTL support

**Test File Structure**:
```typescript
// Pagination.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders pagination correctly', () => {...})
    it('renders correct number of page buttons', () => {...})
    it('renders prev/next buttons', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('renders with correct current page highlighted', () => {...})
    it('renders correct number of siblings', () => {...})
    it('disables prev button on first page', () => {...})
    it('disables next button on last page', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('changes page when clicking page number', () => {...})
    it('goes to previous page when clicking prev button', () => {...})
    it('goes to next page when clicking next button', () => {...})
    it('calls onPageChange with correct page number', () => {...})
    it('supports keyboard navigation', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles single page correctly', () => {...})
    it('handles many pages with ellipsis', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

### 15. Listbox

**Component Overview**: Dropdown select list with options.

#### Phase 1: Basic Rendering
- Test listbox trigger renders correctly
- Test options render correctly when open
- Test default props are applied
- Test selected option is displayed in trigger

#### Phase 2: Props & Variants
- Test single vs multiple selection
- Test disabled state
- Test with custom rendering for options
- Test custom className

#### Phase 3: Interaction & Behavior
- Test opening/closing dropdown
- Test selecting options
- Test multiple selection with Ctrl/Shift
- Test onChange callback
- Test keyboard navigation

#### Phase 4: Edge Cases & Accessibility
- Test with many options
- Test with grouped options
- Test with very long option text
- Test a11y attributes
- Test keyboard navigation
- Test RTL support

**Test File Structure**:
```typescript
// Listbox.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Listbox, ListboxOption } from './Listbox';

describe('Listbox Component', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];
  
  const renderListbox = (props = {}) => {
    return render(
      <Listbox {...props}>
        {options.map((option) => (
          <ListboxOption key={option.value} value={option.value}>
            {option.label}
          </ListboxOption>
        ))}
      </Listbox>
    );
  };

  // Phase 1 Tests
  describe('Basic Rendering', () => {
    it('renders trigger correctly', () => {...})
    it('does not render options list initially', () => {...})
    it('displays selected option in trigger', () => {...})
  });
  
  // Phase 2 Tests
  describe('Props & Variants', () => {
    it('supports single selection mode', () => {...})
    it('supports multiple selection mode', () => {...})
    it('applies disabled styling when disabled=true', () => {...})
    it('renders custom option content correctly', () => {...})
    it('applies custom className correctly', () => {...})
  });
  
  // Phase 3 Tests
  describe('Interaction & Behavior', () => {
    it('opens options list when trigger is clicked', () => {...})
    it('closes options list when option is selected', () => {...})
    it('closes options list when clicking outside', () => {...})
    it('selects option when clicked', () => {...})
    it('allows multiple selection with Ctrl key', () => {...})
    it('calls onChange with selected value(s)', () => {...})
    it('navigates options with arrow keys', () => {...})
  });
  
  // Phase 4 Tests
  describe('Edge Cases & Accessibility', () => {
    it('handles many options correctly', () => {...})
    it('handles grouped options correctly', () => {...})
    it('truncates very long option text', () => {...})
    it('has correct ARIA attributes', () => {...})
    it('works correctly in RTL mode', () => {...})
  });
});
```

## Common Test Utilities

These utilities can be shared across component tests:

### 1. Theme Provider Wrapper

```typescript
// testUtils.tsx
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../src/providers/ThemeProvider';

// Custom render function that wraps component in ThemeProvider
export function renderWithTheme(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    theme?: 'tagaddod' | 'greenpan';
    direction?: 'ltr' | 'rtl';
  }
) {
  const { theme = 'tagaddod', direction = 'ltr', ...restOptions } = options || {};
  
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider defaultTheme={theme} defaultDirection={direction}>
        {children}
      </ThemeProvider>
    ),
    ...restOptions
  });
}

// Add additional utility: RTL testing
export function renderRTL(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return renderWithTheme(ui, { direction: 'rtl', ...options });
}
```

### 2. Theme Testing Utilities

```typescript
// themeTestUtils.tsx
import React from 'react';
import { act } from '@testing-library/react';

// Mock document attributes for testing
export function setDocumentTheme(theme: 'tagaddod' | 'greenpan') {
  act(() => {
    document.documentElement.setAttribute('data-theme', theme);
  });
}

export function setDocumentDirection(dir: 'ltr' | 'rtl') {
  act(() => {
    document.documentElement.setAttribute('dir', dir);
  });
}

// Reset document attributes after tests
export function resetDocumentAttributes() {
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.removeAttribute('dir');
}
```

### 3. User Interaction Utilities

```typescript
// userEventUtils.tsx
import userEvent from '@testing-library/user-event';

// Helper for keyboard navigation testing
export async function pressTab(times = 1) {
  for (let i = 0; i < times; i++) {
    await userEvent.tab();
  }
}

export async function pressShiftTab(times = 1) {
  for (let i = 0; i < times; i++) {
    await userEvent.tab({ shift: true });
  }
}

export async function pressKey(key: string) {
  await userEvent.keyboard(`{${key}}`);
}
```

## Implementation Checklist

For testing each new component, follow these steps:

1. **Create test file and directory structure**:
   ```bash
   # Create the __tests__ directory if it doesn't exist
   mkdir -p src/components/ComponentName/__tests__
   
   # Create the test file
   touch src/components/ComponentName/__tests__/ComponentName.test.tsx
   ```

2. **Import the necessary testing utilities**:
   ```javascript
   import React from 'react';
   import { render, screen, fireEvent } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import { ComponentName } from '../ComponentName';
   
   // If needed for mocking icons or other external dependencies
   jest.mock('@tabler/icons-react', () => ({
     // Add mocks for specific icons used in the component
     IconExample: () => <span data-testid="icon-example">IconExample</span>,
   }));
   ```

3. **Organize tests by phase using describe blocks**:
   ```javascript
   describe('ComponentName Component', () => {
     // Phase 1: Basic Rendering tests
     describe('Basic Rendering', () => {
       // Tests here
     });
     
     // Phase 2: Props & Variants tests
     describe('Props & Variants', () => {
       // Tests here
     });
     
     // Phase 3: Interaction & Behavior tests
     describe('Interaction & Behavior', () => {
       // Tests here
     });
     
     // Phase 4: Edge Cases & Accessibility tests
     describe('Edge Cases & Accessibility', () => {
       // Tests here
     });
   });
   ```

4. **Run tests and check coverage**:
   ```bash
   # Run tests for specific component
   yarn test src/components/ComponentName

   # Run tests with coverage to check completeness
   yarn test:coverage src/components/ComponentName
   ```

5. **Fix any failing tests or improve coverage as needed**

### Test Coverage Goals

Aim for the following coverage targets:

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

More important than raw percentages is testing all critical user paths and behaviors!

## Quick Start Guide for Testing a New Component

This section provides a quick reference for testing new components without needing to redo any setup work.

1. **Create the test file**:
   ```bash
   mkdir -p /Users/me-mac/Downloads/t-design-system/tagaddod-design-system/packages/react/src/components/YourComponent/__tests__
   touch /Users/me-mac/Downloads/t-design-system/tagaddod-design-system/packages/react/src/components/YourComponent/__tests__/YourComponent.test.tsx
   ```

2. **Use this template for your test file**:
   ```typescript
   import React from 'react';
   import { render, screen, fireEvent } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import { YourComponent } from '../YourComponent';
   
   // Mock any external dependencies if needed
   jest.mock('@tabler/icons-react', () => ({
     IconExample: () => <span data-testid="icon-example">IconExample</span>,
   }));
   
   // Mock document.dir for RTL tests if needed
   Object.defineProperty(document, 'dir', {
     writable: true,
     value: 'ltr',
   });
   
   describe('YourComponent Component', () => {
     afterEach(() => {
       // Reset any mocks or document state
       document.dir = 'ltr';
     });
   
     // Phase 1 Tests: Basic Rendering
     describe('Basic Rendering', () => {
       it('renders correctly', () => {
         render(<YourComponent />);
         // Add your assertions here
       });
       
       // More basic rendering tests...
     });
     
     // Phase 2 Tests: Props & Variants
     describe('Props & Variants', () => {
       // Add tests for props and variants...
     });
     
     // Phase 3 Tests: Interaction & Behavior
     describe('Interaction & Behavior', () => {
       // Add tests for interactions...
     });
     
     // Phase 4 Tests: Edge Cases & Accessibility
     describe('Edge Cases & Accessibility', () => {
       // Add tests for edge cases and accessibility...
     });
   });
   ```

3. **Run the tests**:
   ```bash
   cd /Users/me-mac/Downloads/t-design-system/tagaddod-design-system/packages/react
   yarn test src/components/YourComponent
   ```

4. **Check coverage**:
   ```bash
   yarn test:coverage src/components/YourComponent
   ```

Once you've completed your tests, refer to the component-specific sections in this document to ensure you've covered all the necessary test cases for your component.
