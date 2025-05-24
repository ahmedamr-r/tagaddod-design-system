# @tagaddod-design/react

[![npm version](https://badge.fury.io/js/@tagaddod-design%2Freact.svg)](https://www.npmjs.com/package/@tagaddod-design/react)
[![Documentation](https://img.shields.io/badge/docs-storybook-ff4785)](https://tagaddod-design-system.vercel.app/)

> **📚 [Complete Documentation & Interactive Examples](https://tagaddod-design-system.vercel.app/)**

A modern, accessible React component library for building consistent user interfaces following the Tagaddod Design System. Built with performance, accessibility, and developer experience in mind.

## 🚀 What's New in v0.1.0

This release includes major optimizations and improvements:

- **🏗️ Simplified Build Process**: Leverages Vite's library mode for faster builds and better tree-shaking
- **📦 Reduced Bundle Size**: ~40% reduction through optimized token generation and CSS handling
- **⚡ Performance Improvements**: ~50-70% faster build times and better runtime performance
- **🎨 Enhanced Theming**: Runtime theme switching without page reloads using CSS custom properties
- **🌍 Improved I18n**: Better RTL support with automatic font switching (Outfit ↔ Tajawal)
- **🧹 Code Quality**: Consolidated configurations and removed redundant files

[View full optimization details](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/OPTIMIZATION_SUMMARY.md)

## 📦 Installation

```bash
npm install @tagaddod-design/react
```

```bash
yarn add @tagaddod-design/react
```

```bash
pnpm add @tagaddod-design/react
```

## 🔧 Prerequisites

- React >=17.0.0
- React DOM >=17.0.0

## 🚀 Quick Start

### Basic Usage

```jsx
import { ThemeProvider, Button } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Get Started</Button>
    </ThemeProvider>
  );
}
```

### Complete Setup with Theming

```jsx
import { ThemeProvider, Button } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider 
      defaultTheme="tagaddod"     // 'tagaddod' | 'greenpan'
      defaultDirection="ltr"      // 'ltr' | 'rtl'
      defaultLocale="en"         // 'en' | 'ar'
      storageKey="app-theme"     // localStorage key
    >
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Tagaddod Design System</h1>
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
      </div>
    </ThemeProvider>
  );
}
```

## ✨ Core Features

- 🌍 **Multilingual Support**: Built-in RTL support with Arabic and English locales
- 🎨 **Multi-Brand Theming**: Support for Tagaddod and GreenPan themes with runtime switching
- 🔧 **18 Production-Ready Components**: From basic buttons to complex data tables
- 📱 **Responsive Design**: Mobile-first approach with consistent breakpoints
- ♿ **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- 📦 **Tree-Shakable**: Import only what you need for optimal bundle size
- 🛡️ **TypeScript**: Fully typed components with excellent IntelliSense support
- 🎭 **CSS Modules**: Scoped styling without global CSS conflicts
- 🚀 **Performance Optimized**: Lazy loading, memoization, and minimal re-renders

## 🏗️ Architecture Overview

### Theme System
The component library uses a layered theming approach:

1. **Base Design Tokens**: Color, typography, spacing, and other foundational values
2. **Semantic Tokens**: Contextual mappings (e.g., `color-text-primary`)
3. **Brand Overrides**: Theme-specific customizations (Tagaddod vs GreenPan)
4. **Runtime Switching**: CSS custom properties enable instant theme changes

### Font System
Automatic font switching based on locale:
- **English (LTR)**: Outfit font family with weights 400, 500, 600, 700
- **Arabic (RTL)**: Tajawal font family with optimized weights for Arabic text

### Component Architecture
- **Radix UI Primitives**: Accessible, unstyled components as foundation
- **CSS Modules**: Scoped styling with design token integration
- **Compound Components**: Flexible composition patterns
- **Forward Props**: Full HTML attribute support with TypeScript safety

## 🎯 For LLM Agents

This section provides structured information for AI agents to understand and use this component library effectively.

### Installation Pattern
```typescript
// Always start with these imports
import { ThemeProvider } from '@tagaddod-design/react';
import { ComponentName } from '@tagaddod-design/react';

// Wrap app in ThemeProvider
<ThemeProvider>{/* components */}</ThemeProvider>
```

### Component Import Patterns
```typescript
// Primary method - tree-shaking friendly
import { Button, Avatar, Modal } from '@tagaddod-design/react';

// Alternative - direct imports for smaller bundles
import { Button } from '@tagaddod-design/react/Button';
import { Avatar } from '@tagaddod-design/react/Avatar';
```

### Common Props Pattern
Most components follow these patterns:

```typescript
interface CommonProps {
  className?: string;           // Additional CSS classes
  children?: React.ReactNode;   // Content
  disabled?: boolean;          // Disable interaction
  'data-*'?: string;          // Data attributes supported
  'aria-*'?: string;          // ARIA attributes supported
}
```

### Size Variants
Components typically support these sizes:
- `micro` | `small` | `medium` | `large` | `xlarge`
- Default is usually `medium`

### Color/Tone Variants  
Many components support these tones:
- `default` | `info` | `success` | `warning` | `critical` | `magic` | `neutral`
- Default is usually `default`

## 📖 Component Reference

### 🎭 ThemeProvider

**Purpose**: Root provider that manages theme, locale, direction, and font preferences throughout the application.

**Required**: Must wrap your entire application or component tree.

```jsx
import { ThemeProvider, useTheme } from '@tagaddod-design/react';

// Basic usage
<ThemeProvider>
  <YourApp />
</ThemeProvider>

// Full configuration
<ThemeProvider
  defaultTheme="tagaddod"        // 'tagaddod' | 'greenpan'
  defaultDirection="ltr"         // 'ltr' | 'rtl'  
  defaultLocale="en"            // 'en' | 'ar'
  storageKey="my-app-theme"     // localStorage key
>
  <YourApp />
</ThemeProvider>

// Access theme context anywhere
function ThemeControls() {
  const { 
    theme, setTheme,              // Current theme and setter
    direction, setDirection,      // Text direction and setter  
    locale, setLocale            // Language and setter
  } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('greenpan')}>Switch to GreenPan</button>
      <button onClick={() => setDirection('rtl')}>Switch to Arabic</button>
    </div>
  );
}
```

**Props**:
- `defaultTheme?: 'tagaddod' | 'greenpan'` - Initial brand theme
- `defaultDirection?: 'ltr' | 'rtl'` - Initial text direction
- `defaultLocale?: 'en' | 'ar'` - Initial locale (auto-syncs with direction)
- `storageKey?: string` - localStorage key for persistence (default: 'tagaddod-theme')
- `children: React.ReactNode` - Your application content

**AI Agent Usage Notes**:
- Always wrap the root of your application with ThemeProvider
- Use `useTheme()` hook to access/modify theme state anywhere in component tree
- Direction and locale auto-sync (ltr=en, rtl=ar) unless explicitly overridden
- Theme preferences persist automatically in localStorage

---

### 🔘 Button

**Purpose**: Primary interaction element with multiple variants for different UI contexts.

```jsx
import { Button } from '@tagaddod-design/react';
import { IconPlus, IconArrowRight } from '@tabler/icons-react';

// Basic variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>  
<Button variant="tertiary">Subtle Action</Button>
<Button variant="plain">Minimal Action</Button>

// Tones for semantic meaning
<Button tone="critical">Delete Item</Button>
<Button tone="success">Save Changes</Button>
<Button tone="magic">AI Action</Button>

// Sizes
<Button size="micro">Tiny</Button>
<Button size="medium">Default</Button>
<Button size="large">Prominent</Button>

// States and modifiers
<Button loading>Processing...</Button>
<Button disabled>Unavailable</Button>
<Button fullWidth>Full Width Button</Button>

// With icons
<Button prefixIcon={<IconPlus size={18} />}>Add Item</Button>
<Button suffixIcon={<IconArrowRight size={18} />}>Continue</Button>
<Button prefixIcon={<IconPlus size={18} />} suffixIcon={<IconArrowRight size={18} />}>
  Add and Continue
</Button>

// Event handling
<Button onClick={() => console.log('clicked')}>
  Click Handler
</Button>
```

**Props**:
- `variant?: 'primary' | 'secondary' | 'tertiary' | 'plain'` - Visual style (default: 'primary')
- `tone?: 'default' | 'critical' | 'success' | 'neutral' | 'magic'` - Semantic color (default: 'default')
- `size?: 'micro' | 'medium' | 'large'` - Size variant (default: 'medium')
- `loading?: boolean` - Shows loading spinner and disables interaction
- `fullWidth?: boolean` - Makes button span full container width
- `prefixIcon?: React.ReactNode` - Icon before text
- `suffixIcon?: React.ReactNode` - Icon after text
- `disabled?: boolean` - Disables interaction
- `className?: string` - Additional CSS classes
- All standard `<button>` HTML attributes (onClick, type, form, etc.)

**AI Agent Usage Notes**:
- Use `variant="primary"` for main actions, `secondary` for alternatives, `tertiary` for subtle actions
- Use `tone="critical"` for destructive actions (delete, remove)
- Use `tone="success"` for positive actions (save, confirm, approve)  
- Use `loading={true}` during async operations to provide feedback
- Icons should be 18px for medium buttons, 16px for micro buttons
- Combine `onClick` with appropriate async patterns for API calls

---

### 👤 Avatar

**Purpose**: Display user profile pictures, initials, or default icons.

```jsx
import { Avatar } from '@tagaddod-design/react';

// Image avatar (most common)
<Avatar 
  type="image" 
  src="https://example.com/avatar.jpg" 
  alt="John Doe"
  size="md" 
/>

// Initial avatar (when no image available)
<Avatar 
  type="initial" 
  initial="JD" 
  size="lg"
/>

// Icon avatar (default fallback)
<Avatar size="sm" />

// Different sizes
<Avatar size="sm" type="image" src="/avatar.jpg" alt="Small" />
<Avatar size="md" type="image" src="/avatar.jpg" alt="Medium" />
<Avatar size="lg" type="image" src="/avatar.jpg" alt="Large" />
<Avatar size="xl" type="image" src="/avatar.jpg" alt="Extra Large" />

// Custom delay for fallback
<Avatar 
  type="image" 
  src="/might-be-slow.jpg" 
  alt="User"
  delayMs={1000}  // Wait 1s before showing fallback
/>
```

**Props**:
- `type?: 'image' | 'initial' | 'icon'` - Avatar type (default: 'icon')
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Size variant (default: 'md')
- `src?: string` - Image URL (required when type='image')
- `alt?: string` - Alt text for image (required when type='image')
- `initial?: string` - Text to display (required when type='initial', max 2 chars)
- `delayMs?: number` - Delay before showing fallback (default: 600)
- `className?: string` - Additional CSS classes

**AI Agent Usage Notes**:
- Always provide `alt` text when using `type="image"` for accessibility
- Use `type="initial"` when user has name but no profile picture
- Keep `initial` prop to 1-2 characters (usually first/last name initials)
- Size guide: `sm` for lists, `md` for cards, `lg` for profiles, `xl` for headers

---

### 🏷️ Badge

**Purpose**: Small status indicators and labels for categorization.

```jsx
import { Badge } from '@tagaddod-design/react';
import { IconCheck, IconAlert } from '@tabler/icons-react';

// Basic badges
<Badge>New</Badge>
<Badge>Status</Badge>

// Semantic tones
<Badge tone="info">Information</Badge>
<Badge tone="success">Completed</Badge>
<Badge tone="warning">Pending</Badge>
<Badge tone="critical">Error</Badge>
<Badge tone="magic">AI Generated</Badge>

// Sizes
<Badge size="medium">Default Size</Badge>
<Badge size="large">Large Badge</Badge>
<Badge size="xlarge">Extra Large</Badge>

// Visual emphasis
<Badge strong>Strong Text</Badge>
<Badge tone="success" strong>Strong Success</Badge>

// With icons
<Badge tone="success" icon={<IconCheck size={14} />}>Verified</Badge>
<Badge tone="critical" icon={<IconAlert size={14} />}>Alert</Badge>

// Usage in lists
<div>
  <span>Project Alpha</span>
  <Badge tone="success">Active</Badge>
</div>
```

**Props**:
- `tone?: 'default' | 'info' | 'success' | 'warning' | 'critical' | 'magic'` - Semantic color
- `size?: 'medium' | 'large' | 'xlarge'` - Size variant (default: 'medium')
- `strong?: boolean` - Enhanced visual emphasis (default: false)
- `icon?: React.ReactNode` - Icon element (use 14px size for medium badges)
- `className?: string` - Additional CSS classes
- `children: React.ReactNode` - Badge content (keep text short)

**AI Agent Usage Notes**:
- Use `tone="success"` for positive states (active, completed, verified)
- Use `tone="warning"` for attention states (pending, review needed)
- Use `tone="critical"` for negative states (error, failed, blocked)
- Use `tone="info"` for neutral information (count, category)
- Use `tone="magic"` for AI/ML related features
- Keep badge text concise (1-2 words maximum)

---

### ☑️ Checkbox

**Purpose**: Boolean input for forms and multi-selection lists.

```jsx
import { Checkbox } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic usage
function BasicCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox checked={checked} onChange={setChecked} />
      Remember me
    </label>
  );
}

// In forms
function FormExample() {
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  
  return (
    <form>
      <div>
        <label>
          <Checkbox checked={newsletter} onChange={setNewsletter} />
          Subscribe to newsletter
        </label>
      </div>
      
      <div>
        <label>
          <Checkbox checked={terms} onChange={setTerms} />
          I agree to the terms and conditions
        </label>
      </div>
      
      <button type="submit" disabled={!terms}>Submit</button>
    </form>
  );
}

// Disabled state
<Checkbox disabled />
<Checkbox checked disabled />

// Indeterminate state (for partial selections)
<Checkbox checked="indeterminate" />
```

**Props**:
- `checked?: boolean | 'indeterminate'` - Checked state
- `onChange?: (checked: boolean) => void` - Change handler
- `disabled?: boolean` - Disable interaction
- `className?: string` - Additional CSS classes
- All standard `<input type="checkbox">` HTML attributes

**AI Agent Usage Notes**:
- Always wrap in a `<label>` for accessibility
- Use controlled pattern with `checked` and `onChange`
- Use `disabled` for conditional checkboxes that depend on other state
- Use `checked="indeterminate"` for parent checkboxes when some children are selected
- Provide clear, descriptive labels for screen readers

---

### 📋 Drawer

**Purpose**: Slide-in panel for forms, details, or additional content without leaving current context.

```jsx
import { Drawer } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic drawer
function BasicDrawer() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="User Profile"
      >
        <div style={{ padding: '20px' }}>
          <p>Drawer content goes here</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </>
  );
}

// Different sizes and positions
<Drawer 
  open={open} 
  onOpenChange={setOpen}
  size="small"           // 'small' | 'default' | 'large' | 'fullWidth'
  position="right"       // 'right' | 'left' | 'top' | 'bottom'
  title="Settings"
>
  {/* Content */}
</Drawer>

// Form drawer example
function FormDrawer() {
  const [open, setOpen] = useState(false);
  
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      title="Add New Item"
      size="default"
    >
      <form style={{ padding: '20px' }}>
        <TextInput label="Name" placeholder="Enter name" />
        <TextInput label="Email" placeholder="Enter email" />
        
        <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
          <Button type="submit">Save</Button>
          <Button variant="tertiary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </Drawer>
  );
}
```

**Props**:
- `open: boolean` - Controls drawer visibility (required)
- `onOpenChange: (open: boolean) => void` - Called when open state changes (required)
- `title?: React.ReactNode` - Drawer title/header
- `size?: 'small' | 'default' | 'large' | 'fullWidth'` - Drawer width (default: 'default')
- `position?: 'right' | 'left' | 'top' | 'bottom'` - Slide direction (default: 'right')
- `children?: React.ReactNode` - Drawer content
- `className?: string` - Additional CSS classes

**AI Agent Usage Notes**:
- Use for forms, details, or settings without navigating away from current page
- Use `size="small"` for simple forms, `large` for complex forms, `fullWidth` for tables
- Always provide a way to close the drawer (button or onOpenChange)
- Use controlled state pattern with `open` and `onOpenChange`
- Consider `position="bottom"` for mobile-optimized drawers

---

### 📝 TextInput

**Purpose**: Text input field with comprehensive form features including validation, icons, and accessibility.

```jsx
import { TextInput } from '@tagaddod-design/react';
import { IconSearch, IconUser, IconEye } from '@tabler/icons-react';
import { useState } from 'react';

// Basic input
function BasicInput() {
  const [value, setValue] = useState('');
  
  return (
    <TextInput
      placeholder="Enter your name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// With label and helper text
<TextInput
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email with third parties."
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Validation states
<TextInput
  label="Username"
  placeholder="Choose a username"
  error="Username already taken"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

// With icons
<TextInput
  placeholder="Search users..."
  prefixIcon={<IconSearch size={18} />}
  size="large"
/>

<TextInput
  label="Full Name"
  prefixIcon={<IconUser size={18} />}
  suffixIcon={<IconEye size={18} />}
/>

// Different sizes
<TextInput size="medium" placeholder="Medium input" />
<TextInput size="large" placeholder="Large input" />

// Disabled state
<TextInput disabled placeholder="Disabled input" />

// Different input types
<TextInput type="password" placeholder="Enter password" />
<TextInput type="email" placeholder="Enter email" />
<TextInput type="number" placeholder="Enter number" />
```

**Props**:
- `label?: React.ReactNode` - Input label
- `value?: string` - Input value (controlled)
- `defaultValue?: string` - Initial value (uncontrolled)
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `placeholder?: string` - Placeholder text
- `helperText?: React.ReactNode` - Helper text below input
- `error?: React.ReactNode` - Error message (shows error state)
- `disabled?: boolean` - Disable input
- `prefixIcon?: React.ReactNode` - Icon at start of input (use 18px)
- `suffixIcon?: React.ReactNode` - Icon at end of input (use 18px)
- `size?: 'medium' | 'large'` - Size variant (default: 'medium')
- `type?: string` - Input type (default: 'text')
- `className?: string` - Additional CSS classes
- All standard `<input>` HTML attributes (required, pattern, etc.)

**AI Agent Usage Notes**:
- Use controlled pattern with `value` and `onChange` for form validation
- Use `error` prop to show validation errors (this changes input appearance)
- Use `helperText` for additional context or formatting instructions
- Icon size should be 18px for both prefix and suffix icons
- Use appropriate `type` attribute for better mobile keyboards and validation
- Combine with form libraries like React Hook Form for complex forms

---

### 📑 Select & Listbox

**Purpose**: Dropdown selection components for single or multiple choice scenarios.

```jsx
import { Select, Listbox, ListboxOption } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic Select (Radix UI based)
function BasicSelect() {
  const [value, setValue] = useState('');
  
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}

// Listbox (Custom implementation)
function BasicListbox() {
  const [value, setValue] = useState('apple');
  
  return (
    <Listbox 
      value={value} 
      onChange={setValue}
      placeholder="Select a fruit"
    >
      <ListboxOption value="apple">🍎 Apple</ListboxOption>
      <ListboxOption value="banana">🍌 Banana</ListboxOption>
      <ListboxOption value="orange">🍊 Orange</ListboxOption>
      <ListboxOption value="grape" disabled>🍇 Grape (Out of stock)</ListboxOption>
    </Listbox>
  );
}

// Complex options with descriptions
<Listbox value={plan} onChange={setPlan} placeholder="Choose plan">
  <ListboxOption value="basic">
    <div>
      <div style={{ fontWeight: 'medium' }}>Basic Plan</div>
      <div style={{ fontSize: '14px', opacity: 0.7 }}>$9/month</div>
    </div>
  </ListboxOption>
  <ListboxOption value="pro">
    <div>
      <div style={{ fontWeight: 'medium' }}>Pro Plan</div>
      <div style={{ fontSize: '14px', opacity: 0.7 }}>$29/month</div>
    </div>
  </ListboxOption>
</Listbox>
```

**Listbox Props**:
- `value: string` - Current selected value (required)
- `onChange: (value: string) => void` - Change handler (required)
- `placeholder?: string` - Placeholder text when no selection
- `disabled?: boolean` - Disable the entire listbox
- `className?: string` - Additional CSS classes

**ListboxOption Props**:
- `value: string` - Option value (required)
- `disabled?: boolean` - Disable this specific option
- `children: React.ReactNode` - Option content

**AI Agent Usage Notes**:
- Use Listbox for simpler dropdowns with custom styling needs
- Use Select for more complex scenarios requiring Radix UI features
- Always use controlled pattern with `value` and `onChange/onValueChange`
- Provide meaningful `placeholder` text
- Use `disabled` on individual options for temporarily unavailable choices
- Support rich content in options (icons, descriptions, etc.)

---

### 🎛️ RadioButton

**Purpose**: Mutually exclusive selection from a group of options.

```jsx
import { RadioGroup, RadioButtonItem } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic radio group
function BasicRadioGroup() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioButtonItem value="option1" label="Option 1" />
      <RadioButtonItem value="option2" label="Option 2" />  
      <RadioButtonItem value="option3" label="Option 3" />
    </RadioGroup>
  );
}

// With rich labels
<RadioGroup value={plan} onValueChange={setPlan}>
  <RadioButtonItem 
    value="basic" 
    label={
      <div>
        <div style={{ fontWeight: 'medium' }}>Basic Plan</div>
        <div style={{ fontSize: '14px', opacity: 0.7 }}>Perfect for individuals</div>
      </div>
    } 
  />
  <RadioButtonItem 
    value="team" 
    label={
      <div>
        <div style={{ fontWeight: 'medium' }}>Team Plan</div>
        <div style={{ fontSize: '14px', opacity: 0.7 }}>For small teams up to 10 people</div>
      </div>
    } 
  />
</RadioGroup>

// With disabled options
<RadioGroup value={delivery} onValueChange={setDelivery}>
  <RadioButtonItem value="standard" label="Standard Delivery (3-5 days)" />
  <RadioButtonItem value="express" label="Express Delivery (1-2 days)" />
  <RadioButtonItem value="overnight" label="Overnight Delivery" disabled />
</RadioGroup>

// Form integration
function PreferencesForm() {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState('email');
  
  return (
    <form>
      <fieldset>
        <legend>Theme Preference</legend>
        <RadioGroup value={theme} onValueChange={setTheme} name="theme">
          <RadioButtonItem value="light" label="Light Mode" />
          <RadioButtonItem value="dark" label="Dark Mode" />
          <RadioButtonItem value="auto" label="System Default" />
        </RadioGroup>
      </fieldset>
      
      <fieldset>
        <legend>Notification Method</legend>
        <RadioGroup value={notifications} onValueChange={setNotifications} name="notifications">
          <RadioButtonItem value="email" label="Email Only" />
          <RadioButtonItem value="push" label="Push Notifications" />
          <RadioButtonItem value="both" label="Both Email and Push" />
          <RadioButtonItem value="none" label="No Notifications" />
        </RadioGroup>
      </fieldset>
    </form>
  );
}
```

**RadioGroup Props**:
- `value: string` - Current selected value (required)
- `onValueChange: (value: string) => void` - Change handler (required)
- `name?: string` - HTML name attribute for form submission
- `className?: string` - Additional CSS classes

**RadioButtonItem Props**:
- `value: string` - Option value (required)
- `label: React.ReactNode` - Option label (required)
- `disabled?: boolean` - Disable this option
- `className?: string` - Additional CSS classes

**AI Agent Usage Notes**:
- Use for mutually exclusive choices (only one can be selected)
- Always use controlled pattern with `value` and `onValueChange`
- Provide `name` attribute for proper form submission
- Use rich labels for complex options (plans, configurations, etc.)
- Group related radio groups in `<fieldset>` with `<legend>` for accessibility
- Use `disabled` for temporarily unavailable options

---

### 🔄 Switch

**Purpose**: Toggle switch for boolean settings and preferences.

```jsx
import { Switch } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic switch
function BasicSwitch() {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <Switch 
      checked={enabled}
      onCheckedChange={setEnabled}
      label="Enable notifications"
    />
  );
}

// Settings panel example
function SettingsPanel() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch
        checked={notifications}
        onCheckedChange={setNotifications}
        label="Push Notifications"
      />
      
      <Switch
        checked={darkMode}
        onCheckedChange={setDarkMode}
        label="Dark Mode"
      />
      
      <Switch
        checked={autoSave}
        onCheckedChange={setAutoSave}
        label="Auto-save changes"
        disabled={!notifications} // Conditional enabling
      />
    </div>
  );
}

// Without built-in label (custom layout)
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <Switch checked={enabled} onCheckedChange={setEnabled} />
  <label style={{ cursor: 'pointer' }} onClick={() => setEnabled(!enabled)}>
    Custom label with click handling
  </label>
</div>

// Disabled states
<Switch checked disabled label="Always enabled (disabled)" />
<Switch checked={false} disabled label="Always disabled" />
```

**Props**:
- `checked: boolean` - Current state (required)
- `onCheckedChange: (checked: boolean) => void` - Change handler (required)
- `label?: React.ReactNode` - Label text (optional, can use custom layout)
- `disabled?: boolean` - Disable interaction
- `className?: string` - Additional CSS classes
- All standard Radix Switch attributes

**AI Agent Usage Notes**:
- Use for boolean settings and preferences (on/off states)
- Always use controlled pattern with `checked` and `onCheckedChange`
- Provide clear, descriptive labels
- Use `disabled` for conditional switches that depend on other settings
- Consider grouping related switches in settings panels
- Switch implies immediate effect (unlike checkbox which may require form submission)

---

### 🗂️ Tabs

**Purpose**: Organize content into multiple panels with tab navigation.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';

// Basic tabs
<Tabs defaultValue="overview" variant="underline">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  
  <TabsContent value="overview">
    <h3>Overview</h3>
    <p>This is the overview content.</p>
  </TabsContent>
  
  <TabsContent value="details">
    <h3>Details</h3>
    <p>This is the details content.</p>
  </TabsContent>
  
  <TabsContent value="settings">
    <h3>Settings</h3>
    <p>This is the settings content.</p>
  </TabsContent>
</Tabs>

// Controlled tabs
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} variant="contained">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
      <TabsContent value="tab3">Content 3</TabsContent>
    </Tabs>
  );
}

// Different variants and counts
<Tabs defaultValue="home" variant="underline" count="four">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="products">Products</TabsTrigger>
    <TabsTrigger value="services">Services</TabsTrigger>
    <TabsTrigger value="contact">Contact</TabsTrigger>
  </TabsList>
  
  {/* Content for each tab */}
</Tabs>

// Complex tab content
<Tabs defaultValue="dashboard">
  <TabsList>
    <TabsTrigger value="dashboard">📊 Dashboard</TabsTrigger>
    <TabsTrigger value="analytics">📈 Analytics</TabsTrigger>
    <TabsTrigger value="reports">📋 Reports</TabsTrigger>
  </TabsList>
  
  <TabsContent value="dashboard">
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {/* Dashboard widgets */}
      </div>
    </div>
  </TabsContent>
  
  <TabsContent value="analytics">
    <div style={{ padding: '20px' }}>
      <h2>Analytics</h2>
      {/* Charts and analytics */}
    </div>
  </TabsContent>
</Tabs>
```

**Tabs Props**:
- `value?: string` - Controlled active tab
- `defaultValue?: string` - Default active tab (uncontrolled)
- `onValueChange?: (value: string) => void` - Change handler
- `variant?: 'underline' | 'contained'` - Visual style (default: 'underline')
- `count?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'` - Number of tabs for styling
- `className?: string` - Additional CSS classes

**AI Agent Usage Notes**:
- Use for organizing related content into separate views
- Use `defaultValue` for uncontrolled tabs, `value` + `onValueChange` for controlled
- Use `variant="underline"` for subtle tabs, `contained` for prominent tabs
- Provide `count` prop for optimal tab spacing and styling
- Keep tab labels concise (1-2 words)
- Consider using icons in tab labels for better visual recognition

---

### 🗃️ Table

**Purpose**: Display structured data in rows and columns with consistent styling.

```jsx
import { Table, TableHeader, TableHeaderCell, TableCell } from '@tagaddod-design/react';

// Basic table
<Table>
  <TableHeader>
    <tr>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </tr>
  </TableHeader>
  <tbody>
    <tr>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
      <TableCell>
        <Badge tone="success">Active</Badge>
      </TableCell>
    </tr>
    <tr>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
      <TableCell>
        <Badge tone="warning">Pending</Badge>
      </TableCell>
    </tr>
  </tbody>
</Table>

// Complex table with actions
function UsersTable({ users }) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableHeaderCell>Avatar</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Last Login</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </tr>
      </TableHeader>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <TableCell>
              <Avatar 
                type="image" 
                src={user.avatar} 
                alt={user.name}
                size="sm" 
              />
            </TableCell>
            <TableCell>
              <div>
                <div style={{ fontWeight: 'medium' }}>{user.name}</div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>{user.username}</div>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge tone={user.role === 'admin' ? 'info' : 'default'}>
                {user.role}
              </Badge>
            </TableCell>
            <TableCell>{user.lastLogin}</TableCell>
            <TableCell>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button size="micro" variant="tertiary">Edit</Button>
                <Button size="micro" variant="tertiary" tone="critical">Delete</Button>
              </div>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Empty state
<Table>
  <TableHeader>
    <tr>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </tr>
  </TableHeader>
  <tbody>
    <tr>
      <TableCell colSpan={2} style={{ textAlign: 'center', padding: '40px' }}>
        <p>No data available</p>
        <Button size="micro">Add Item</Button>
      </TableCell>
    </tr>
  </tbody>
</Table>
```

**Component Props**:
- `Table`: Standard HTML table attributes + `className`
- `TableHeader`: Standard HTML thead attributes + `className`  
- `TableHeaderCell`: Standard HTML th attributes + `className`
- `TableCell`: Standard HTML td attributes + `className`

**AI Agent Usage Notes**:
- Use semantic HTML structure (thead, tbody, th, td)
- Use `TableHeaderCell` for column headers, `TableCell` for data
- Combine with other components (Avatar, Badge, Button) for rich table content
- Consider responsive design - tables may need horizontal scrolling on mobile
- Use `colSpan` for empty states or grouped headers
- Keep table headers concise and descriptive

---

### 🪟 Modal

**Purpose**: Overlay dialog for important actions, forms, or content that requires user attention.

```jsx
import { Modal } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic modal
function BasicModal() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Confirm Action"
      >
        <p>Are you sure you want to continue?</p>
        
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '24px' }}>
          <Button variant="tertiary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => { 
            console.log('Confirmed');
            setOpen(false);
          }}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}

// Form modal
function FormModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
    setOpen(false);
    setName('');
    setEmail('');
  };
  
  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      title="Add New User"
      description="Fill in the information below to create a new user account."
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextInput
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <TextInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px' }}>
          <Button type="button" variant="tertiary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">
            Create User
          </Button>
        </div>
      </form>
    </Modal>
  );
}

// Destructive action modal
function DeleteModal({ itemName, onConfirm }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      title="Delete Item"
      description={`Are you sure you want to delete "${itemName}"? This cannot be undone.`}
    >
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '24px' }}>
        <Button variant="tertiary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button 
          tone="critical" 
          onClick={() => {
            onConfirm();
            setOpen(false);
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}
```

**Props**:
- `open: boolean` - Controls modal visibility (required)
- `onOpenChange: (open: boolean) => void` - Called when open state changes (required)
- `title?: React.ReactNode` - Modal title
- `description?: React.ReactNode` - Modal description/subtitle
- `children?: React.ReactNode` - Modal content
- `className?: string` - Additional CSS classes

**AI Agent Usage Notes**:
- Use for actions that require confirmation (delete, important changes)
- Use for forms that shouldn't interrupt the main flow
- Always provide a way to close/cancel the modal
- Use controlled state pattern with `open` and `onOpenChange`
- Keep content focused - avoid complex layouts in modals
- Use `tone="critical"` on confirm buttons for destructive actions
- Consider alternatives like Drawer for less critical content

---

### 📄 Pagination

**Purpose**: Navigate through large datasets split across multiple pages.

```jsx
import { Pagination, usePagination } from '@tagaddod-design/react';
import { useState } from 'react';

// Basic pagination
function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 150;
  const itemsPerPage = 10;
  
  return (
    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}

// Using the hook for complex scenarios
function AdvancedPagination() {
  const pagination = usePagination({
    totalItems: 247,
    itemsPerPage: 20,
    currentPage: 1,
    siblingCount: 2, // Show 2 pages on each side
  });
  
  const {
    currentPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    canGoToNext,
    canGoToPrevious,
    startItem,
    endItem,
    totalItems
  } = pagination;
  
  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        Showing {startItem}-{endItem} of {totalItems} items
      </div>
      
      <Pagination
        totalItems={247}
        itemsPerPage={20}
        currentPage={currentPage}
        onPageChange={goToPage}
        siblingCount={2}
      />
      
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Button 
          size="micro" 
          disabled={!canGoToPrevious}
          onClick={goToPreviousPage}
        >
          Previous
        </Button>
        <Button 
          size="micro" 
          disabled={!canGoToNext}
          onClick={goToNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// With data loading
function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const itemsPerPage = 25;
  
  const loadData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/data?page=${page}&limit=${itemsPerPage}`);
      const result = await response.json();
      setData(result.items);
    } finally {
      setLoading(false);
    }
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    loadData(page);
  };
  
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table>
          {/* Render data */}
        </Table>
      )}
      
      <Pagination
        totalItems={500} // From API response
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
```

**Pagination Props**:
- `totalItems: number` - Total number of items (required)
- `itemsPerPage: number` - Items per page (required)
- `currentPage: number` - Current active page (required)
- `onPageChange: (page: number) => void` - Called when page changes (required)
- `siblingCount?: number` - Pages to show on each side of current (default: 1)
- `className?: string` - Additional CSS classes

**usePagination Hook Returns**:
- `currentPage: number` - Current page
- `totalPages: number` - Total number of pages
- `goToPage: (page: number) => void` - Go to specific page
- `goToNextPage: () => void` - Go to next page
- `goToPreviousPage: () => void` - Go to previous page
- `canGoToNext: boolean` - Whether next page exists
- `canGoToPrevious: boolean` - Whether previous page exists
- `startItem: number` - First item number on current page
- `endItem: number` - Last item number on current page
- `totalItems: number` - Total items count

**AI Agent Usage Notes**:
- Use for datasets with more than ~50 items
- Always show current page context ("Showing X-Y of Z items")
- Use controlled pattern with `currentPage` and `onPageChange`
- Consider using the hook for complex pagination logic
- Handle loading states when changing pages
- Use appropriate `itemsPerPage` values (10-50 typically)

---

### 🎈 Popover

**Purpose**: Floating content panel triggered by user interaction, typically for menus, tooltips, or additional information.

```jsx
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  PopoverArrow,
  PopoverClose
} from '@tagaddod-design/react';

// Basic popover
<Popover>
  <PopoverTrigger asChild>
    <Button>Open Menu</Button>
  </PopoverTrigger>
  
  <PopoverContent>
    <PopoverArrow />
    <div style={{ padding: '12px' }}>
      <p>This is the popover content</p>
      <PopoverClose asChild>
        <Button size="micro" variant="tertiary">Close</Button>
      </PopoverClose>
    </div>
  </PopoverContent>
</Popover>

// Menu popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="tertiary">Actions ▼</Button>
  </PopoverTrigger>
  
  <PopoverContent align="start" style={{ minWidth: '150px' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button variant="plain" style={{ justifyContent: 'flex-start' }}>
        Edit Item
      </Button>
      <Button variant="plain" style={{ justifyContent: 'flex-start' }}>
        Duplicate
      </Button>
      <Button variant="plain" tone="critical" style={{ justifyContent: 'flex-start' }}>
        Delete
      </Button>
    </div>
  </PopoverContent>
</Popover>

// User profile popover
function UserProfilePopover({ user }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <Avatar type="image" src={user.avatar} alt={user.name} size="sm" />
        </button>
      </PopoverTrigger>
      
      <PopoverContent align="end" style={{ width: '280px' }}>
        <PopoverArrow />
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Avatar type="image" src={user.avatar} alt={user.name} size="md" />
            <div>
              <div style={{ fontWeight: 'medium' }}>{user.name}</div>
              <div style={{ fontSize: '14px', opacity: 0.7 }}>{user.email}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Button variant="tertiary" fullWidth>View Profile</Button>
            <Button variant="tertiary" fullWidth>Account Settings</Button>
            <hr style={{ margin: '8px 0', opacity: 0.2 }} />
            <Button variant="tertiary" tone="critical" fullWidth>Sign Out</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// Tooltip-style popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="tertiary">Hover for info</Button>
  </PopoverTrigger>
  
  <PopoverContent side="top" style={{ maxWidth: '200px' }}>
    <PopoverArrow />
    <div style={{ padding: '8px 12px', fontSize: '14px' }}>
      This is a tooltip-style popover with helpful information.
    </div>
  </PopoverContent>
</Popover>
```

**Component Structure**:
- `Popover`: Root container
- `PopoverTrigger`: Element that triggers the popover
- `PopoverContent`: The floating content panel
- `PopoverArrow`: Optional arrow pointing to trigger
- `PopoverClose`: Element that closes the popover

**Common Props**:
- `PopoverContent` accepts Radix UI Popover.Content props:
  - `side?: 'top' | 'right' | 'bottom' | 'left'` - Preferred side
  - `align?: 'start' | 'center' | 'end'` - Alignment along the side
  - `sideOffset?: number` - Distance from trigger
  - `alignOffset?: number` - Offset along the alignment axis

**AI Agent Usage Notes**:
- Use `asChild` prop on triggers to avoid DOM nesting issues
- Use for contextual menus, user profiles, or additional information
- Include `PopoverArrow` for better visual connection to trigger
- Keep content focused and not too large (mobile considerations)
- Provide close mechanisms (PopoverClose or outside click)
- Use appropriate `side` and `align` props for optimal positioning

---

### 📏 Separator

**Purpose**: Visual divider to separate content sections.

```jsx
import { Separator } from '@tagaddod-design/react';

// Horizontal separator (default)
<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>

// Vertical separator
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>

// In navigation
<nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <a href="/">Home</a>
  <Separator orientation="vertical" />
  <a href="/about">About</a>
  <Separator orientation="vertical" />
  <a href="/contact">Contact</a>
</nav>

// In forms
<form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <TextInput label="Name" />
  <TextInput label="Email" />
  
  <Separator style={{ margin: '8px 0' }} />
  
  <TextInput label="Company" />
  <TextInput label="Position" />
</form>
```

**Props**:
- `orientation?: 'horizontal' | 'vertical'` - Separator direction (default: 'horizontal')
- `className?: string` - Additional CSS classes
- Standard HTML div attributes

**AI Agent Usage Notes**:
- Use to visually separate sections of content
- Use `orientation="vertical"` in horizontal layouts (flex, navigation)
- Use `orientation="horizontal"` (default) in vertical layouts (forms, content)
- Separators are semantic elements that help screen readers understand content structure
- Consider using CSS margins/padding around separators for proper spacing

---

### 📐 AspectRatio

**Purpose**: Container that maintains a specified aspect ratio regardless of content size, useful for images, videos, and responsive layouts.

```jsx
import { AspectRatio } from '@tagaddod-design/react';

// 16:9 aspect ratio (common for videos)
<AspectRatio ratio={16/9}>
  <img 
    src="/path/to/image.jpg" 
    alt="Example image"
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover' 
    }} 
  />
</AspectRatio>

// 1:1 square aspect ratio (profile pictures, thumbnails)
<AspectRatio ratio={1}>
  <div style={{ 
    backgroundColor: '#f0f0f0', 
    width: '100%', 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    Square Content
  </div>
</AspectRatio>

// 4:3 aspect ratio (traditional photos)
<AspectRatio ratio={4/3}>
  <img 
    src="/photo.jpg" 
    alt="Photo"
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover',
      borderRadius: '8px'
    }} 
  />
</AspectRatio>

// Video embed
<AspectRatio ratio={16/9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ width: '100%', height: '100%' }}
  />
</AspectRatio>

// Card with consistent image sizes
function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      <AspectRatio ratio={1}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </AspectRatio>
      <div style={{ padding: '16px' }}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
```

**Props**:
- `ratio: number` - Aspect ratio (width/height) - required
- `children: React.ReactNode` - Content to be constrained
- `className?: string` - Additional CSS classes

**Common Aspect Ratios**:
- `1` - Square (1:1)
- `16/9` - Widescreen video (1.78:1)
- `4/3` - Traditional photo/video (1.33:1)
- `3/2` - Common photo format (1.5:1)
- `21/9` - Ultra-wide (2.33:1)
- `2/3` - Portrait orientation (0.67:1)

**AI Agent Usage Notes**:
- Use for maintaining consistent layouts with dynamic content
- Essential for responsive image galleries and grids
- Use `objectFit: 'cover'` on images to fill the container without distortion
- Use `objectFit: 'contain'` to show the entire image within the ratio
- Common for video embeds, product images, and card components
- The aspect ratio is maintained even when the container is resized

## 🎨 Theming Guide

### Built-in Themes

The library includes two brand themes:

- **Tagaddod**: The default theme with purple primary colors
- **GreenPan**: Alternative theme with green primary colors

### Runtime Theme Switching

```jsx
import { useTheme } from '@tagaddod-design/react';

function ThemeControls() {
  const { theme, setTheme, direction, setDirection } = useTheme();
  
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button 
        variant={theme === 'tagaddod' ? 'primary' : 'secondary'}
        onClick={() => setTheme('tagaddod')}
      >
        Tagaddod Theme
      </Button>
      
      <Button 
        variant={theme === 'greenpan' ? 'primary' : 'secondary'}
        onClick={() => setTheme('greenpan')}
      >
        GreenPan Theme
      </Button>
      
      <Button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
        Toggle Direction ({direction.toUpperCase()})
      </Button>
    </div>
  );
}
```

### Automatic Font Switching

The theme system automatically switches fonts based on locale:

- **English (en)**: Outfit font family
- **Arabic (ar)**: Tajawal font family

This happens automatically when you change direction or locale:

```jsx
const { setDirection } = useTheme();

// Switching to RTL automatically sets locale to 'ar' and switches to Tajawal font
setDirection('rtl');
```

## 🌍 Internationalization (i18n)

### RTL Support

All components support Right-to-Left (RTL) layouts for Arabic and other RTL languages:

```jsx
<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  {/* All components automatically adjust for RTL */}
  <Button prefixIcon={<IconArrowLeft size={18} />}>
    الزر التالي
  </Button>
</ThemeProvider>
```

### Locale Detection

The system automatically syncs direction and locale:

- `direction="ltr"` → `locale="en"` → Outfit font
- `direction="rtl"` → `locale="ar"` → Tajawal font

## 📱 Responsive Design

All components are built mobile-first and include responsive behavior:

```jsx
// Buttons adapt their touch targets for mobile
<Button size="large">Mobile-friendly Button</Button>

// Tables can scroll horizontally on small screens
<div style={{ overflowX: 'auto' }}>
  <Table>
    {/* Table content */}
  </Table>
</div>

// Drawers can change position based on screen size
<Drawer 
  position="bottom"  // Better for mobile
  size="fullWidth"   // Full width on mobile
>
  {/* Content */}
</Drawer>
```

## 🧪 Testing Components

### Unit Testing with React Testing Library

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, Button } from '@tagaddod-design/react';

// Always wrap components in ThemeProvider for testing
const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

test('button renders and handles click', () => {
  const handleClick = jest.fn();
  
  renderWithTheme(
    <Button onClick={handleClick}>Click me</Button>
  );
  
  const button = screen.getByRole('button', { name: /click me/i });
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility Testing

```jsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('modal should not have accessibility violations', async () => {
  const { container } = renderWithTheme(
    <Modal open={true} onOpenChange={() => {}} title="Test Modal">
      <p>Modal content</p>
    </Modal>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 🚀 Performance

### Tree Shaking

Import only what you need for optimal bundle size:

```jsx
// ✅ Good - only imports Button
import { Button } from '@tagaddod-design/react';

// ✅ Better - direct import (smallest bundle)
import { Button } from '@tagaddod-design/react/Button';

// ❌ Avoid - imports entire library
import * as Components from '@tagaddod-design/react';
```

### Component Optimization

Components are optimized with:

- **React.memo**: Prevents unnecessary re-renders
- **Lazy loading**: Dynamic imports for complex components
- **CSS optimization**: Minimal runtime CSS generation
- **Event handler memoization**: Prevents function recreation

## 🛠️ Migration Guide

### From v0.0.x to v0.1.0

**Breaking Changes:**
- CSS imports are now consolidated - import once at app level
- Some component APIs have been standardized
- Build output format has changed for better tree-shaking

**Migration Steps:**

1. **Update CSS imports:**
   ```jsx
   // Before - multiple imports
   import '@tagaddod-design/tokens/tagaddod/en/vars.css';
   import '@tagaddod-design/tokens/tagaddod/rtl/vars.css';
   
   // After - single import
   import '@tagaddod-design/react/styles';
   ```

2. **Theme switching now uses runtime CSS variables:**
   ```jsx
   // Before - required page reload
   window.location.reload();
   
   // After - instant switching
   const { setTheme } = useTheme();
   setTheme('greenpan');
   ```

3. **Component imports remain the same:**
   ```jsx
   // No changes needed
   import { Button, Avatar } from '@tagaddod-design/react';
   ```

## 📚 Additional Resources

- **[📖 Complete Documentation](https://tagaddod-design-system.vercel.app/)** - Interactive component examples and API documentation
- **[🎨 Design Tokens](https://github.com/ahmedamr-r/tagaddod-design-system/tree/main/packages/tokens)** - Design system foundation
- **[🔧 Contributing Guide](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/CONTRIBUTING.md)** - How to contribute to the project
- **[📈 Optimization Details](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/OPTIMIZATION_SUMMARY.md)** - Performance improvements in v0.1.0

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/LICENSE) for details.

---

**Built with ❤️ by the Tagaddod Design System Team**
