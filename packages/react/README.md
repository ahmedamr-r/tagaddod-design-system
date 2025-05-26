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


## 🤖 LLM Agent Integration

This package includes `llms.txt` - a structured documentation file designed specifically for AI coding agents like GPT, Claude, and other LLMs. This file contains comprehensive component usage patterns, props, examples, and best practices to help AI agents understand and use the component library effectively.

**For AI Agents:** The documentation is located at the package root and includes installation instructions, component APIs, usage examples, theming information, and common patterns.

**Accessing the documentation:**
- From local install: `cat node_modules/@tagaddod-design/react/llms.txt`
- From CDN: `https://unpkg.com/@tagaddod-design/react/llms.txt`
- Via import: The file is exported as `@tagaddod-design/react/llms.txt`

This enables more accurate AI-assisted development with proper component usage, accessibility practices, and theme integration.



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

## 🚀 Quick Start (Plug & Play)

### 1. Install
```bash
npm install @tagaddod-design/react
# or
yarn add @tagaddod-design/react
```

### 2. Import Styles (Required)
```javascript
// In your app's entry point (App.js, main.js, or index.js)
import '@tagaddod-design/react/styles';
```

### 3. Import & Use Components
```javascript
import { Button, TextInput, ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultTheme="tagaddod" defaultLocale="en">
      <Button variant="primary">Click me</Button>
      <TextInput label="Name" placeholder="Enter your name" />
    </ThemeProvider>
  );
}
```

That's it! 🎉 Your components are ready to use with full theming and accessibility support.

## 📦 What's Included

- **50+ React Components** - Buttons, Forms, Tables, Modals, and more
- **Complete Design System** - Tokens, themes, and utilities
- **Full TypeScript Support** - Type-safe development experience
- **Accessibility First** - WCAG compliant components
- **RTL/LTR Support** - Built-in internationalization
- **Theme Switching** - Tagaddod and GreenPan themes
- **Tree Shakeable** - Import only what you need

## 🎨 Theming

### Automatic Theme Detection
```javascript
// Themes are applied via data attributes
<div data-theme="tagaddod">Tagaddod theme</div>
<div data-theme="greenpan">GreenPan theme</div>
```

### React Theme Provider
```javascript
import { ThemeProvider, useTheme } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultTheme="greenpan" defaultLocale="ar">
      <MyComponents />
    </ThemeProvider>
  );
}

function ThemeSwitcher() {
  const { setTheme, setLocale } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('tagaddod')}>Tagaddod</button>
      <button onClick={() => setTheme('greenpan')}>GreenPan</button>
      <button onClick={() => setLocale('ar')}>العربية</button>
    </div>
  );
}
```

## 🌍 Internationalization

### Automatic Direction Support
```javascript
// Set locale and direction is automatically applied
const { setLocale } = useTheme();

setLocale('ar'); // Automatically sets dir="rtl"
setLocale('en'); // Automatically sets dir="ltr"
```

### Manual Direction Control
```html
<html dir="rtl">
  <!-- All components automatically adapt to RTL -->
</html>
```

## 🧩 Component Examples

### Forms
```javascript
import { 
  TextInput, 
  Checkbox, 
  Switch, 
  RadioGroup, 
  RadioButtonItem,
  Button 
} from '@tagaddod-design/react';

function ContactForm() {
  return (
    <form>
      <TextInput 
        label="Email" 
        type="email" 
        required 
        helpText="We'll never share your email"
      />
      
      <Checkbox>Subscribe to newsletter</Checkbox>
      
      <RadioGroup>
        <RadioButtonItem value="individual">Individual</RadioButtonItem>
        <RadioButtonItem value="business">Business</RadioButtonItem>
      </RadioGroup>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Enable notifications</span>
        <Switch />
      </div>
      
      <Button type="submit" variant="primary">Submit</Button>
    </form>
  );
}
```

### Data Display
```javascript
import { Table, Badge, Avatar, Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';

function Dashboard() {
  const data = [
    { id: 1, name: 'John Doe', status: 'active', role: 'Admin' },
    { id: 2, name: 'Jane Smith', status: 'inactive', role: 'User' }
  ];
  
  const columns = [
    { accessorKey: 'name', header: 'Name' },
    { 
      accessorKey: 'status', 
      header: 'Status',
      cell: ({ getValue }) => (
        <Badge tone={getValue() === 'active' ? 'success' : 'neutral'}>
          {getValue()}
        </Badge>
      )
    },
    { accessorKey: 'role', header: 'Role' }
  ];

  return (
    <Tabs defaultValue="users">
      <TabsList>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="users">
        <Table 
          data={data} 
          columns={columns}
          title="User Management"
          showSearch
          showFilters
        />
      </TabsContent>
      
      <TabsContent value="settings">
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Avatar src="https://i.pravatar.cc/150" alt="User" />
          <div>
            <h3>Profile Settings</h3>
            <p>Manage your account preferences</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
```

## 🎯 Advanced Usage

### Custom Styling with CSS Variables
```css
.my-custom-component {
  background-color: var(--t-color-surface-primary);
  padding: var(--t-space-400);
  border-radius: var(--t-border-radius-200);
  color: var(--t-color-text-primary);
}
```

### Utility Classes
```javascript
function MyComponent() {
  return (
    <div className="t-p-400 t-bg-primary t-rounded-200 t-shadow-1">
      <h2 className="t-heading-lg t-text-primary">Title</h2>
      <p className="t-body-md-default t-text-secondary">Description</p>
    </div>
  );
}
```

### Tree Shaking (Import Only What You Need)
```javascript
// ✅ Good - Only imports Button component
import { Button } from '@tagaddod-design/react';

// ✅ Also good - Explicit imports
import { Button } from '@tagaddod-design/react/components/Button';

// ❌ Avoid - Imports entire library
import * as TagaddodReact from '@tagaddod-design/react';
```

## 📱 Framework Integration

### Next.js
```javascript
// pages/_app.js or app/layout.js
import '@tagaddod-design/react/styles';
import { ThemeProvider } from '@tagaddod-design/react';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="tagaddod">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

### Vite/React
```javascript
// main.jsx
import '@tagaddod-design/react/styles';
import { ThemeProvider } from '@tagaddod-design/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="tagaddod">
    <App />
  </ThemeProvider>
);
```

### Create React App
```javascript
// src/index.js
import '@tagaddod-design/react/styles';
import { ThemeProvider } from '@tagaddod-design/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider defaultTheme="tagaddod">
    <App />
  </ThemeProvider>
);
```

## 🔧 TypeScript Support

Full TypeScript support is included out of the box:

```typescript
import { ButtonProps, TextInputProps } from '@tagaddod-design/react';

interface MyComponentProps {
  primaryButton: ButtonProps;
  emailInput: TextInputProps;
}

function MyComponent({ primaryButton, emailInput }: MyComponentProps) {
  return (
    <div>
      <TextInput {...emailInput} />
      <Button {...primaryButton} />
    </div>
  );
}
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📚 Documentation

- [Storybook Documentation](https://tagaddod-design-system.vercel.app/)
- [Component API Reference](https://tagaddod-design-system.vercel.app/)
- [Design Tokens](https://github.com/ahmedamr-r/tagaddod-design-system/tree/main/packages/tokens)

## 🤝 Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for development setup and contribution guidelines.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.


---

**Made with ❤️ by the Tagaddod Design System Team**
