'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { IconDownload, IconExternalLink } from '@tabler/icons-react'

const introductionMarkdown = `# Tagaddod Design System - Developer Integration Guide

Welcome to the comprehensive integration guide for the Tagaddod Design System! This guide will walk you through setting up a modern development environment using AI-powered tools and integrating our design system into your project.

## Overview

The Tagaddod Design System provides:

- **22+ Production-Ready Components**: Built on Radix UI primitives with full accessibility
- **Multi-Brand Support**: Tagaddod and GreenPan themes with seamless switching
- **RTL/LTR Support**: Full Arabic and English language support with proper typography
- **Design Tokens**: W3C-compliant token system for consistent theming
- **TypeScript**: Complete type safety and IntelliSense support
- **AI-Powered Development**: Pre-built setup files for automated setup

## Quick Start for AI Developers

This guide is optimized for developers using AI-powered coding tools like **Cursor AI** or **Claude Code**. Instead of manual commands, you'll download setup files and let AI agents handle the setup automatically.

---

## Step 1: Development Environment Setup

### Option A: Cursor AI Setup

1. **Download Cursor AI**: Visit [cursor.so](https://cursor.so) and install Cursor
2. **Create New Project**: Open Cursor and create a new workspace
3. **Configure AI Settings**: Enable Composer mode for multi-file editing

### Option B: Claude Code + VS Code Setup

1. **Install VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com)
2. **Install Claude Code Extension**: Search for "Claude Code" in VS Code marketplace
3. **Connect to Claude**: Follow the authentication flow to connect your account

---

## Step 2: Project Scaffolding with AI Rules

Instead of running manual commands, download our AI setup files and let your AI agent handle project creation.

### Option A: Next.js Project (Recommended)

**AI Instruction**:
\`\`\`
Please use the nextjs-setup.md file to create a new Next.js 15 project with TypeScript, 
App Router, and Tailwind CSS. Follow all the specifications in the rules file.
\`\`\`

### Option B: Vite + React Project

**AI Instruction**:
\`\`\`
Please use the vite-setup.md file to create a new Vite project with React, TypeScript, 
and all the configurations specified in the rules file.
\`\`\`

---

## Step 3: Design System Installation

**AI Instruction**:
\`\`\`
Please use the tagaddod-installation.md file to install the Tagaddod Design System 
and all required peer dependencies. Follow the exact specifications in the rules file.
\`\`\`

**What this does**:
- Installs \`@tagaddod-design/react\` package
- Adds all required Radix UI peer dependencies
- Installs Tabler icons and other required packages
- Configures package.json properly

---

## Step 4: ThemeProvider Setup

**AI Instruction**:
\`\`\`
Please use the themeprovider-setup.md file to set up the ThemeProvider in my project. 
Configure it for both Tagaddod and GreenPan themes with RTL support.
\`\`\`

**What this does**:
- Wraps your app with ThemeProvider
- Configures theme switching (Tagaddod/GreenPan)
- Sets up direction switching (LTR/RTL)
- Enables locale management (en/ar)
- Adds theme persistence with localStorage

---

## Step 5: Styles and Fonts Activation

**AI Instruction**:
\`\`\`
Please use the styles-activation.md file to activate all design system styles and fonts. 
Include Google Fonts setup for both English and Arabic typography.
\`\`\`

**What this does**:
- Imports main CSS file: \`@tagaddod-design/react/styles.css\`
- Sets up Google Fonts (Outfit for English, Tajawal for Arabic)
- Configures font loading optimization
- Adds proper font fallbacks

---

## Step 6: Component Integration

**AI Instruction**:
\`\`\`
Please use the component-integration.md file to set up proper component imports and 
usage patterns. Create example implementations following the guidelines.
\`\`\`

**What this does**:
- Sets up tree-shakable imports
- Creates component usage examples
- Establishes proper import patterns
- Adds TypeScript configurations for components

---

## Step 7: RTL Support (Optional)

**AI Instruction**:
\`\`\`
Please use the rtl-support.md file to enhance my project with full RTL support for Arabic. 
Configure automatic direction switching and proper Arabic typography.
\`\`\`

**What this does**:
- Enhances ThemeProvider with RTL detection
- Adds Arabic font configurations
- Sets up proper line-height adjustments
- Configures automatic layout mirroring

---

## Step 8: AI Agent Component Usage

### Using Component Documentation with AI

Each component has detailed \`.mdx\` documentation that your AI agent can reference for perfect implementation.

**AI Instruction Pattern**:
\`\`\`
I want to implement a [COMPONENT_NAME]. Please reference the [COMPONENT_NAME].mdx 
documentation file to implement this component correctly with all the proper props, 
variants, and accessibility features.
\`\`\`

**Example**:
\`\`\`
I want to implement a Button with loading state and prefix icon. Please reference 
the Button.mdx documentation file to implement this correctly.
\`\`\`

---

## Complete Component Catalog

### Form Controls
- **Button** → Reference: \`Button.mdx\` - Primary interactive element with variants, loading states, and icons
- **TextInput** → Reference: \`TextInput.mdx\` - Text input with validation, icons, and error states
- **Select** → Reference: \`Select.mdx\` - Dropdown selection with search and grouping
- **Checkbox** → Reference: \`Checkbox.mdx\` - Binary choice control with indeterminate state
- **RadioButton** → Reference: \`RadioButton.mdx\` - Single selection from option groups
- **Switch** → Reference: \`Switch.mdx\` - Toggle control for settings and preferences
- **RangeSlider** → Reference: \`RangeSlider.mdx\` - Range input for numeric values

### Layout & Structure
- **AspectRatio** → Reference: \`AspectRatio.mdx\` - Maintains content proportions
- **Separator** → Reference: \`Separator.mdx\` - Visual content dividers
- **Sidebar** → Reference: \`Sidebar.mdx\` - Collapsible navigation sidebar with hover-to-expand
- **TopBar** → Reference: \`TopBar.mdx\` - Application header with logo and navigation

### Data Display
- **Avatar** → Reference: \`Avatar.mdx\` - User profile pictures and initials
- **Badge** → Reference: \`Badge.mdx\` - Status indicators and labels
- **Table** → Reference: \`Table.mdx\` - Advanced data tables with sorting and filtering
- **Tooltip** → Reference: \`Tooltip.mdx\` - Contextual information overlays

### Navigation
- **Tabs** → Reference: \`Tabs.mdx\` - Tabbed content organization
- **Pagination** → Reference: \`Pagination.mdx\` - Multi-page navigation controls

### Overlays & Feedback
- **Modal** → Reference: \`Modal.mdx\` - Focus-grabbing dialog overlays
- **Drawer** → Reference: \`Drawer.mdx\` - Sliding panel overlays
- **Popover** → Reference: \`Popover.mdx\` - Contextual content overlays
- **Sonner** → Reference: \`Sonner.mdx\` - Toast notification system

### Specialized Components
- **Listbox** → Reference: \`Listbox.mdx\` - Rich option selection lists
- **Logo** → Reference: \`Logo.mdx\` - Tagaddod brand logo component

### AI Usage Instructions for Each Component

When implementing any component, use this pattern:

\`\`\`
@ai Please implement a [COMPONENT_NAME] component. Reference the [COMPONENT_NAME].mdx 
file in the components directory to understand:

1. All available props and their types
2. Proper usage examples and patterns  
3. Accessibility requirements
4. RTL/internationalization support
5. Common use cases and variants

Make sure to follow the exact specifications in the documentation.
\`\`\`

---

## Advanced Features

### Multi-Theme Support

\`\`\`jsx
import { useTheme } from '@tagaddod-design/react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}>
      Switch to {theme === 'tagaddod' ? 'GreenPan' : 'Tagaddod'}
    </Button>
  );
}
\`\`\`

### RTL Language Support

\`\`\`jsx
import { useTheme } from '@tagaddod-design/react';

function LanguageSwitcher() {
  const { direction, setDirection } = useTheme();
  
  return (
    <Button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
      {direction === 'ltr' ? 'العربية' : 'English'}
    </Button>
  );
}
\`\`\`

### Component Implementation Example

\`\`\`jsx
import { Button, TextInput, Select, Modal } from '@tagaddod-design/react';
import { IconPlus, IconSave } from '@tabler/icons-react';

function UserForm() {
  return (
    <Modal
      trigger={<Button prefixIcon={<IconPlus />}>Add User</Button>}
      title="Create New User"
      confirmLabel="Save User"
    >
      <div className="space-y-4">
        <TextInput 
          label="Full Name" 
          placeholder="Enter full name"
          required
        />
        <TextInput 
          label="Email" 
          type="email"
          placeholder="user@example.com"
          required
        />
        <Select 
          label="Role"
          placeholder="Select user role"
          options={[
            { value: 'admin', label: 'Administrator' },
            { value: 'user', label: 'Regular User' }
          ]}
          required
        />
      </div>
    </Modal>
  );
}
\`\`\`

---

## Performance Optimization

**AI Instruction**:
\`\`\`
Please use the optimization.md file to optimize my project for production. 
Configure tree-shaking, bundle splitting, and performance enhancements.
\`\`\`

---

## Troubleshooting

### Common Issues

**CSS Not Loading**:
- Ensure \`@tagaddod-design/react/styles.css\` is imported in your root file
- Check that the import path is correct

**Fonts Not Displaying**:
- Verify Google Fonts are loaded in your HTML head
- Check network tab for font loading errors

**Components Not Themed**:
- Ensure your app is wrapped with \`<ThemeProvider>\`
- Verify theme attributes are set on \`<html>\` element

**RTL Not Working**:
- Check that \`dir\` attribute is set on document
- Verify Arabic fonts are loaded
- Ensure proper line-height tokens are applied

### Getting Help

1. **Check Component Documentation**: Each \`.mdx\` file contains comprehensive usage information
2. **Use AI Agent Debugging**: Ask your AI agent to check configurations against setup files
3. **Verify Setup**: Use AI agent to validate each setup step was completed correctly

---

## AI Development Best Practices

### Effective AI Prompts

**Component Implementation**:
\`\`\`
Implement a [COMPONENT] following the exact specifications in [COMPONENT].mdx. 
Include all accessibility features, proper TypeScript types, and RTL support.
\`\`\`

**Bug Fixing**:
\`\`\`
I'm having an issue with [COMPONENT]. Please check the [COMPONENT].mdx documentation 
and help me debug this implementation: [paste your code]
\`\`\`

**Feature Enhancement**:
\`\`\`
Enhance this [COMPONENT] implementation by referencing [COMPONENT].mdx to add 
[specific features]. Maintain all existing functionality.
\`\`\`

### Setup Files Usage

Always download the latest setup files before starting:
- Setup files contain up-to-date configurations
- They include error handling and validation steps
- AI agents can follow them precisely for consistent results
- They're updated with each design system release

---

## Resources

- **Component Documentation**: Each component's \`.mdx\` file contains complete implementation guides
- **Storybook Examples**: Interactive examples at [your-storybook-url]
- **GitHub Repository**: [repository-url] for source code and issues
- **Design Tokens**: Complete token documentation in the design system
- **AI Setup Files**: Download from the setup files section for automated setup

---

## License

MIT - see [LICENSE](https://github.com/ahmedamr-r/tagaddod-design-system/blob/main/LICENSE) for details.

---

**Ready to build amazing interfaces with AI assistance? Download the setup files and let your AI agent handle the setup while you focus on creating great user experiences!**`

interface DownloadButtonProps {
  filename: string
  label: string
}

function DownloadButton({ filename, label }: DownloadButtonProps) {
  const handleDownload = () => {
    window.open(`/setup-files/${filename}`, '_blank')
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
    >
      <IconDownload size={16} />
      {label}
    </button>
  )
}

export default function IntroductionContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Download Section */}
      <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <IconDownload size={24} />
          AI Setup Files - Download & Use
        </h2>
        <p className="text-gray-700 mb-6">
          Download these files and provide them to your AI agent (Cursor AI, Claude Code, etc.) for automated setup:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <DownloadButton filename="nextjs-setup.md" label="Next.js Setup" />
          <DownloadButton filename="vite-setup.md" label="Vite Setup" />
          <DownloadButton filename="tagaddod-installation.md" label="Package Installation" />
          <DownloadButton filename="themeprovider-setup.md" label="ThemeProvider Setup" />
          <DownloadButton filename="styles-activation.md" label="Styles & Fonts" />
          <DownloadButton filename="component-integration.md" label="Component Integration" />
          <DownloadButton filename="rtl-support.md" label="RTL Support" />
          <DownloadButton filename="optimization.md" label="Optimization" />
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4 pb-2 border-b border-gray-100">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                {children}
              </ol>
            ),
            code: ({ className, children, ...props }) => {
              const isBlock = className?.includes('language-')
              
              if (isBlock) {
                return (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code {...props}>
                      {children}
                    </code>
                  </pre>
                )
              }
              
              return (
                <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              )
            },
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 text-gray-700 italic">
                {children}
              </blockquote>
            ),
            hr: () => (
              <hr className="my-8 border-t border-gray-200" />
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
                {href?.startsWith('http') && <IconExternalLink size={14} />}
              </a>
            ),
          }}
        >
          {introductionMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}