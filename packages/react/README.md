# @tagaddod-design/react
[**📚 Full Documentation & Storybook**](https://tagaddod-design-system.vercel.app/)
A modern, accessible React component library for building consistent user interfaces following the Tagaddod Design System.

## Installation

```bash
# npm
npm install @tagaddod-design/react

# yarn
yarn add @tagaddod-design/react

# pnpm
pnpm add @tagaddod-design/react
```

## Quick Start

```jsx
import { ThemeProvider, Button } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## Features

- 🌍 **Multilingual Support**: Built-in RTL support with Arabic and English locales
- 🌓 **Theming**: Multiple themes (tagaddod, greenpan) with consistent design tokens
- 🧩 **Component Library**: High-quality, accessible components following modern design patterns
- 📦 **Tree-shakable**: Import only what you need
- 🛡️ **TypeScript**: Fully typed components for better development experience

## Core Concepts

### ThemeProvider

Wrap your application with `ThemeProvider` to enable theming, locale, and direction support:

```jsx
import { ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider 
      defaultTheme="tagaddod" // 'tagaddod' or 'greenpan'
      defaultDirection="ltr"  // 'ltr' or 'rtl'
      defaultLocale="en"      // 'en' or 'ar'
    >
      {/* Your app here */}
    </ThemeProvider>
  );
}
```

Use the `useTheme` hook to access theme context anywhere in your app:

```jsx
import { useTheme } from '@tagaddod-design/react';

function MyComponent() {
  const { theme, setTheme, direction, setDirection, locale, setLocale } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}>
        Toggle Theme
      </button>
      <button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
        Toggle Direction
      </button>
    </div>
  );
}
```

## Components

### Avatar

Display user avatars with various types and sizes.

```jsx
import { Avatar } from '@tagaddod-design/react';

// Image Avatar
<Avatar type="image" src="/path/to/image.jpg" alt="User Name" size="md" />

// Initial Avatar
<Avatar type="initial" initial="JD" size="lg" />

// Icon Avatar (default)
<Avatar size="sm" />
```

**Props:**
- `type`: 'image' | 'initial' | 'icon' (default: 'icon')
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `src`: Source URL for the image (required when type is 'image')
- `alt`: Alt text for the image
- `initial`: Initial to display (required when type is 'initial')
- `className`: Additional CSS class
- `delayMs`: Delay before showing fallback (default: 600)

### Badge

Display small status indicators.

```jsx
import { Badge } from '@tagaddod-design/react';
import { IconCheck } from '@tabler/icons-react';

// Simple badge
<Badge>New</Badge>

// Badge with tone and size
<Badge tone="success" size="large">Completed</Badge>

// Badge with icon
<Badge tone="info" icon={<IconCheck size={16} />}>Verified</Badge>

// Strong styling
<Badge tone="critical" strong>Error</Badge>
```

**Props:**
- `tone`: 'default' | 'info' | 'success' | 'warning' | 'critical' | 'magic' (default: 'default')
- `size`: 'medium' | 'large' | 'xlarge' (default: 'medium')
- `strong`: boolean (default: false)
- `icon`: React node for icon
- `className`: Additional CSS class

### Button

Versatile button component with multiple variants, tones, and sizes.

```jsx
import { Button } from '@tagaddod-design/react';
import { IconPlus, IconArrowRight } from '@tabler/icons-react';

// Basic button
<Button>Click me</Button>

// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="plain">Plain</Button>

// Button tones
<Button tone="default">Default</Button>
<Button tone="critical">Critical</Button>
<Button tone="success">Success</Button>
<Button tone="neutral">Neutral</Button>
<Button tone="magic">Magic</Button>

// Button sizes
<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="micro">Micro</Button>

// Loading state
<Button loading>Loading</Button>

// With icons
<Button prefixIcon={<IconPlus size={18} />}>Add Item</Button>
<Button suffixIcon={<IconArrowRight size={18} />}>Next</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'plain' (default: 'primary')
- `tone`: 'default' | 'critical' | 'success' | 'neutral' | 'magic' (default: 'default')
- `size`: 'large' | 'medium' | 'micro' (default: 'medium')
- `loading`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `prefixIcon`: React node for icon before text
- `suffixIcon`: React node for icon after text
- `disabled`: boolean (default: false)
- `className`: Additional CSS class
- All standard button HTML attributes

### Checkbox

Simple checkbox component for forms.

```jsx
import { Checkbox } from '@tagaddod-design/react';

// Basic checkbox
<Checkbox />

// Checked state
<Checkbox checked={isChecked} onChange={handleChange} />

// With label
<label>
  <Checkbox checked={isChecked} onChange={handleChange} />
  Remember me
</label>

// Disabled state
<Checkbox disabled />
```

### Drawer

Slide-in panel for additional content or forms.

```jsx
import { Drawer } from '@tagaddod-design/react';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      
      <Drawer 
        open={open} 
        onOpenChange={setOpen}
        title="Drawer Title"
        size="default"
        position="right"
      >
        {/* Drawer content */}
        <p>This is the drawer content</p>
        
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Drawer>
    </>
  );
}
```

**Props:**
- `open`: boolean - Controls drawer visibility
- `onOpenChange`: (open: boolean) => void - Called when open state changes
- `title`: React node - Title of the drawer
- `size`: 'default' | 'small' | 'large' | 'fullWidth' (default: 'default')
- `position`: 'right' | 'left' | 'top' | 'bottom' (default: 'right')
- `children`: React node - Drawer content
- `className`: Additional CSS class

### Listbox

Dropdown selection component.

```jsx
import { Listbox, ListboxOption } from '@tagaddod-design/react';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('apple');
  
  return (
    <Listbox value={value} onChange={setValue} placeholder="Select a fruit">
      <ListboxOption value="apple">Apple</ListboxOption>
      <ListboxOption value="banana">Banana</ListboxOption>
      <ListboxOption value="orange">Orange</ListboxOption>
    </Listbox>
  );
}
```

**Listbox Props:**
- `value`: string - Current selected value
- `onChange`: (value: string) => void - Called when selection changes
- `placeholder`: string - Placeholder text when no selection
- `disabled`: boolean - Disable the listbox
- `className`: Additional CSS class

**ListboxOption Props:**
- `value`: string - Option value
- `children`: React node - Option label
- `disabled`: boolean - Disable this option

### Modal

Accessible modal dialog component.

```jsx
import { Modal } from '@tagaddod-design/react';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal 
        open={open} 
        onOpenChange={setOpen}
        title="Modal Title"
      >
        <p>Modal content goes here</p>
        
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '24px' }}>
          <Button variant="tertiary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => { /* Handle confirmation */ setOpen(false); }}>Confirm</Button>
        </div>
      </Modal>
    </>
  );
}
```

**Props:**
- `open`: boolean - Controls modal visibility
- `onOpenChange`: (open: boolean) => void - Called when open state changes
- `title`: React node - Title of the modal
- `description`: React node - Optional description text
- `children`: React node - Modal content
- `className`: Additional CSS class

### Pagination

Component for navigating through multiple pages.

```jsx
import { Pagination, usePagination } from '@tagaddod-design/react';

function MyComponent() {
  // Using the hook
  const pagination = usePagination({
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
  });
  
  // Or manage state manually
  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}
```

**Props:**
- `totalItems`: number - Total number of items
- `itemsPerPage`: number - Items displayed per page
- `currentPage`: number - Current active page
- `onPageChange`: (page: number) => void - Called when page changes
- `siblingCount`: number - Number of page buttons to show on each side (default: 1)
- `className`: Additional CSS class

### Popover

Floating content panel triggered by a button.

```jsx
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  PopoverArrow,
  PopoverClose
} from '@tagaddod-design/react';

function MyComponent() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      
      <PopoverContent>
        <PopoverArrow />
        <div style={{ padding: '16px' }}>
          <h3>Popover Title</h3>
          <p>This is the popover content</p>
          <PopoverClose asChild>
            <Button size="micro" variant="tertiary">Close</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### RadioButton

Group of mutually exclusive options.

```jsx
import { RadioGroup, RadioButtonItem } from '@tagaddod-design/react';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <RadioButtonItem value="option1" label="Option 1" />
      <RadioButtonItem value="option2" label="Option 2" />
      <RadioButtonItem value="option3" label="Option 3" disabled />
    </RadioGroup>
  );
}
```

**RadioGroup Props:**
- `value`: string - Current selected value
- `onValueChange`: (value: string) => void - Called when selection changes
- `name`: string - HTML name attribute for the radio group
- `className`: Additional CSS class

**RadioButtonItem Props:**
- `value`: string - Option value
- `label`: React node - Label for the radio option
- `disabled`: boolean - Disable this option
- `className`: Additional CSS class

### Switch

Toggle switch component.

```jsx
import { Switch } from '@tagaddod-design/react';
import { useState } from 'react';

function MyComponent() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch 
      checked={checked} 
      onCheckedChange={setChecked} 
      label="Enable notifications"
    />
  );
}
```

**Props:**
- `checked`: boolean - Current state
- `onCheckedChange`: (checked: boolean) => void - Called when state changes
- `label`: React node - Label for the switch
- `disabled`: boolean - Disable the switch
- `className`: Additional CSS class

### Table

Data table component.

```jsx
import { Table, TableHeader, TableHeaderCell, TableCell } from '@tagaddod-design/react';

function MyComponent() {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </tr>
      </TableHeader>
      <tbody>
        <tr>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </tr>
        <tr>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </tr>
      </tbody>
    </Table>
  );
}
```

### Tabs

Tabbed interface component.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';

function MyComponent() {
  return (
    <Tabs defaultValue="tab1" variant="underline">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tab1">
        <h3>Tab 1 Content</h3>
        <p>This is the content for tab 1</p>
      </TabsContent>
      
      <TabsContent value="tab2">
        <h3>Tab 2 Content</h3>
        <p>This is the content for tab 2</p>
      </TabsContent>
      
      <TabsContent value="tab3">
        <h3>Tab 3 Content</h3>
        <p>This is the content for tab 3</p>
      </TabsContent>
    </Tabs>
  );
}
```

**Tabs Props:**
- `value`: string - Controlled value
- `defaultValue`: string - Default selected tab 
- `variant`: 'underline' | 'contained' (default: 'underline')
- `count`: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' - Number of tabs
- `onValueChange`: (value: string) => void - Called when tab changes
- `className`: Additional CSS class

### TextInput

Text input field component.

```jsx
import { TextInput } from '@tagaddod-design/react';
import { IconSearch } from '@tabler/icons-react';

// Basic input
<TextInput 
  placeholder="Enter your name" 
  value={value} 
  onChange={handleChange} 
/>

// With label and helper text
<TextInput 
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email."
  value={email}
  onChange={handleEmailChange}
/>

// With validation
<TextInput 
  label="Username"
  placeholder="Choose a username"
  error="Username already taken"
  value={username}
  onChange={handleUsernameChange}
/>

// With icons
<TextInput 
  placeholder="Search..."
  prefixIcon={<IconSearch size={18} />}
  size="large"
/>

// Different sizes
<TextInput size="medium" placeholder="Medium input" />
<TextInput size="large" placeholder="Large input" />
```

**Props:**
- `label`: React node - Input label
- `value`: string - Input value
- `onChange`: (e: React.ChangeEvent<HTMLInputElement>) => void - Change handler
- `placeholder`: string - Placeholder text
- `helperText`: React node - Helper text shown below input
- `error`: React node - Error message (shows input in error state)
- `disabled`: boolean - Disable the input
- `prefixIcon`: React node - Icon at the start of input
- `suffixIcon`: React node - Icon at the end of input
- `size`: 'medium' | 'large' (default: 'medium')
- `className`: Additional CSS class
- All standard input HTML attributes

### AspectRatio

Container that maintains a specified aspect ratio.

```jsx
import { AspectRatio } from '@tagaddod-design/react';

// 16:9 aspect ratio
<AspectRatio ratio={16/9}>
  <img src="/path/to/image.jpg" alt="Example" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</AspectRatio>

// 1:1 square aspect ratio
<AspectRatio ratio={1}>
  <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%' }} />
</AspectRatio>
```

**Props:**
- `ratio`: number - Aspect ratio (width/height)
- `children`: React node - Content
- `className`: Additional CSS class

## Advanced Usage

### Importing Individual Components

For better tree-shaking, you can import components directly:

```jsx
import { Button } from '@tagaddod-design/react/components/Button';
import { Avatar } from '@tagaddod-design/react/components/Avatar';
```

### Styling

The library uses CSS Modules internally and automatically injects its styles. You don't need to import CSS files separately.

## Browser Support

The library supports all modern browsers, including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Please see CONTRIBUTING.md for details on how to contribute to the project.

## License

[MIT License](LICENSE)
