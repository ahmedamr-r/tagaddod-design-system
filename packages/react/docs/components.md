# Tagaddod Design System Components

This document provides an overview of the components available in the `@tagaddod-design/react` package and how to use them.

## Button

The Button component is a versatile button with multiple variants, tones, and sizes.

```jsx
import { Button } from '@tagaddod-design/react';

<Button 
  variant="primary" // primary, secondary, tertiary, plain
  tone="default"    // default, critical, success, neutral, magic
  size="medium"     // large, medium, micro
  loading={false}   // Shows loading spinner
  fullWidth={false} // Takes full width of container
  prefixIcon={<IconUser />}  // Icon before text
  suffixIcon={<IconArrow />} // Icon after text
  onClick={() => {}}
>
  Button Text
</Button>
```

## TextInput

Text input field with optional label, hint and error messaging.

```jsx
import { TextInput } from '@tagaddod-design/react';

<TextInput 
  label="Email"
  placeholder="Enter your email"
  error="Invalid email format"
  hint="We'll never share your email"
  onChange={(e) => setEmail(e.target.value)}
  value={email}
/>
```

## Checkbox

A checkbox component with customizable styles.

```jsx
import { Checkbox } from '@tagaddod-design/react';

<Checkbox 
  label="Accept terms and conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

## RadioButton

A radio button component for selecting from a list of options.

```jsx
import { RadioButton } from '@tagaddod-design/react';

<RadioButton 
  name="subscription"
  value="monthly"
  label="Monthly subscription"
  checked={subscription === 'monthly'}
  onChange={(e) => setSubscription(e.target.value)}
/>
```

## Tabs

A tabbed interface component.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';

<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  
  <TabsContent value="profile">
    Profile content here
  </TabsContent>
  
  <TabsContent value="settings">
    Settings content here
  </TabsContent>
  
  <TabsContent value="notifications">
    Notifications content here
  </TabsContent>
</Tabs>
```

## Badge

Status indicators or counters.

```jsx
import { Badge } from '@tagaddod-design/react';

<Badge 
  tone="success" // default, critical, success, neutral, magic
  size="medium"  // small, medium
>
  New
</Badge>
```

## Avatar

A component for displaying user avatars with image or fallback to initials.

```jsx
import { Avatar } from '@tagaddod-design/react';

<Avatar 
  src="https://example.com/avatar.jpg" // Optional image URL
  name="John Doe"                     // Used for generating initials
  size="medium"                       // small, medium, large
/>
```

## Popover

A component for displaying content in a popover.

```jsx
import { Popover } from '@tagaddod-design/react';

<Popover 
  trigger={<Button>Open Popover</Button>}
>
  <div>Popover content</div>
</Popover>
```

## Modal

A dialog/modal component.

```jsx
import { Modal } from '@tagaddod-design/react';

<Modal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Confirmation"
>
  <p>Are you sure you want to continue?</p>
  <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
</Modal>
```

## Switch

A toggle switch component.

```jsx
import { Switch } from '@tagaddod-design/react';

<Switch 
  label="Enable notifications"
  checked={notificationsEnabled}
  onChange={(e) => setNotificationsEnabled(e.target.checked)}
/>
```

## Drawer

A slide-in panel component.

```jsx
import { Drawer } from '@tagaddod-design/react';

<Drawer 
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  position="right" // left, right
>
  <div>Drawer content</div>
</Drawer>
```

## Table

A data table component.

```jsx
import { Table } from '@tagaddod-design/react';

const columns = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
  { header: 'Role', accessorKey: 'role' }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' }
];

<Table 
  columns={columns}
  data={data}
/>
```

## Pagination

A component for navigating through pages.

```jsx
import { Pagination } from '@tagaddod-design/react';

<Pagination 
  totalItems={100}
  itemsPerPage={10}
  currentPage={1}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

## AspectRatio

A component for maintaining a specific aspect ratio.

```jsx
import { AspectRatio } from '@tagaddod-design/react';

<AspectRatio ratio={16/9}>
  <img src="https://example.com/image.jpg" alt="Example" />
</AspectRatio>
```

## ThemeProvider

Component for setting the theme and direction for a section of the UI.

```jsx
import { ThemeProvider } from '@tagaddod-design/react';

<ThemeProvider 
  theme="greenpan" // tagaddod, greenpan
  direction="rtl"  // ltr, rtl
>
  {/* Components will use the specified theme and direction */}
  <Button>Themed Button</Button>
</ThemeProvider>
```

## Using with CSS

To ensure proper styling, you need to import the CSS files:

```jsx
// Import core tokens
import '@tagaddod-design/tokens/css/tokens.css';

// Import component styles
import '@tagaddod-design/react/styles/index.css';

// Optional: Import specific theme if needed
import '@tagaddod-design/tokens/greenpan/vars.css';
```

## RTL Support

The components automatically adjust for RTL languages when the `dir` attribute is set to `rtl` on the HTML or body element, or when using the `ThemeProvider` with `direction="rtl"`.
