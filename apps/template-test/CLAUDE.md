# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 MANDATORY: Tagaddod Design System Skill

**CRITICAL INSTRUCTION FOR CLAUDE CODE:**

This template includes a **specialized Claude skill** that you **MUST ALWAYS USE** for ANY component-related requests.

**Skill: `tagaddod-design-system`**
- **Location**: `.claude/skills/tagaddod-design-system.md`
- **Purpose**: Reads component documentation and generates correct implementations
- **Documentation Source**: `.component-documentation/` (33 component guides)
- **Features**:
  - Auto-reads `.component-documentation/[Component].mdx` files
  - Extracts exact import patterns, props, and examples
  - Applies design tokens automatically
  - Supports RTL/Arabic implementation
  - Falls back to Shadcn/Antd when components don't exist

### 🚨 MANDATORY SKILL INVOCATION PROTOCOL

**For ANY component implementation request, you MUST:**

1. **FIRST**: Invoke the `tagaddod-design-system` skill using the Skill tool
2. **WAIT**: For the skill to provide component implementation guidance
3. **THEN**: Implement the component using the skill's instructions

**Component requests include**:
- UI components (Button, Modal, Table, TextInput, etc.)
- Layouts and navigation
- Forms and data entry
- Any design system element
- Arabic/RTL implementations

### Skill Invocation Examples

```
User: "I need a button with loading state"
Claude: [MUST invoke tagaddod-design-system skill first]
        → Uses Skill tool with command: "tagaddod-design-system"
        → Skill reads .component-documentation/Button.mdx
        → Provides exact Button implementation patterns
        → Claude implements using skill guidance

User: "أريد إنشاء جدول بيانات" (I want to create a data table)
Claude: [MUST invoke tagaddod-design-system skill first]
        → Uses Skill tool with command: "tagaddod-design-system"
        → Skill reads Table.mdx and ThemeProvider.mdx for RTL
        → Provides Arabic table implementation patterns
        → Claude implements using skill guidance
```

**❌ WRONG**: Implementing components without invoking the skill first
**✅ CORRECT**: Always invoke `tagaddod-design-system` skill before implementation

## 🚨 MANDATORY: Overlay Component Z-Index Rules

**CRITICAL FOR ALL OVERLAY COMPONENTS (Modal, Drawer, Popover, Select, Tooltip):**

### Golden Rule: THE SYSTEM IS AUTOMATIC

When working with overlay components, the design system handles ALL z-index management automatically via React Context and design tokens. You should NEVER manually configure z-index values.

❌ **NEVER** manually set z-index values or style props
❌ **NEVER** calculate z-index in your code
❌ **NEVER** import `useDrawerContext` unless creating custom overlay components
❌ **NEVER** worry about nesting depth or stacking contexts

✅ **ALWAYS** use components as documented - they handle nesting automatically
✅ **TRUST** the system - any combination of overlays will layer correctly

### How It Works (Reference Only)

The design system uses **automatic z-index management**:
- **Portal-based rendering**: Modal/Drawer/Popover render to `document.body`
- **Context-aware z-index**: Components detect nesting and adjust automatically
- **Design tokens**: All values use CSS custom properties (--t-z-modal, --t-z-drawer, etc.)

### Nesting Scenarios That Work Automatically

All of these work WITHOUT any z-index configuration:

```jsx
// ✅ Drawer → Table with Popover filters
<Drawer open={drawerOpen}>
  <Table showFilters={true} />  {/* Popover automatically appears above Drawer */}
</Drawer>

// ✅ Drawer → Modal → Select dropdown
<Drawer open={drawerOpen}>
  <Modal open={modalOpen}>
    <Select options={[...]} />  {/* Dropdown uses maximum z-index */}
  </Modal>
</Drawer>

// ✅ Tabs → Modal → Popover
<Tabs defaultValue="tab1">
  <TabsContent value="tab1">
    <Modal open={modalOpen}>
      <Popover content="Info">...</Popover>  {/* Works perfectly */}
    </Modal>
  </TabsContent>
</Tabs>

// ✅ Even complex nesting works
<Drawer>
  <Tabs>
    <Table showFilters={true}>  {/* Popover filters */}
      <Modal>
        <Select />  {/* Always appears on top */}
      </Modal>
    </Table>
  </Tabs>
</Drawer>
```

### Common AI Agent Mistakes

```jsx
// ❌ WRONG - Don't do this!
<Modal open={open} style={{ zIndex: 9999 }}>Content</Modal>

// ❌ WRONG - Unnecessary complexity
import { useDrawerContext } from '@tagaddod-design/react';
const { isInsideDrawer } = useDrawerContext();
<Modal style={{ zIndex: isInsideDrawer ? 1070 : 1050 }}>Content</Modal>

// ✅ CORRECT - Let the system handle it
<Modal open={open}>Content</Modal>
```

### Complete Overlay Guide

For comprehensive examples, nesting scenarios, and troubleshooting:
**Read**: `.design-system-guides/OVERLAY-SYSTEM-GUIDE.md`

This guide covers:
- All supported nesting combinations with detailed examples
- Common AI agent mistakes and how to avoid them
- Decision tree for choosing the right overlay component
- Troubleshooting overlay visibility issues
- Advanced scenarios and edge cases

**Key Takeaway**: Trust the automatic system. If you're manually setting z-index, you're doing it wrong!

## 🚨 MANDATORY FIRST STEP: Component Documentation Check

**Before responding to ANY component-related request:**

### Step 1: Invoke the Design System Skill
**ALWAYS use the Skill tool to invoke `tagaddod-design-system` first.**

The skill will automatically:
1. **Session Memory Check**: Check if component context already exists in current session
2. **IF component context EXISTS**: Use cached implementation knowledge without re-reading
3. **IF component context DOES NOT exist**: Read complete `.component-documentation/[ComponentName].mdx` file
4. **Read ENTIRE documentation**: Reads the complete file to ensure full understanding
5. **Cache Complete Context**: Stores implementation patterns, props, examples, and usage guidelines
6. **If component is NOT found**: Falls back to Shadcn/Antd or builds custom component
7. **Provide implementation guidance**: Returns exact patterns, props, and imports

### Step 2: Implement Using Skill Guidance
**Use ONLY the patterns, props, and imports provided by the skill.**

**Never guess** component usage - the skill provides the source of truth based on documentation.

Available documentation: `.component-documentation/` contains 33 detailed component guides (Button, TextInput, Modal, Table, Select, TopBar, Sidebar, and more).

## 🚨 MANDATORY RULE: Design Tokens - The Styling Source of Truth

**For ANY styling task (component creation, layout, custom styles, or modifications):**

1. **ALWAYS reference `.component-documentation/DesignTokens.mdx` FIRST** before applying any styles
2. **MUST use Tagaddod design tokens ONLY** - NEVER use arbitrary CSS values
3. **Import design tokens from**: `@tagaddod-design/react/dist/styles/styles.css`
4. **Apply design tokens using CSS custom properties**:
   - Colors: `var(--t-color-fill-*)`, `var(--t-color-text-*)`, `var(--t-color-border-*)`
   - Spacing: `var(--t-space-*)` (0 through 3200)
   - Typography: `var(--t-typography-*)`, `var(--t-font-*)`
   - Layout: `var(--t-border-radius-*)`, `var(--t-shadow-*)`
5. **Follow established patterns** from existing Tagaddod components

**This applies to:**
- Creating new custom components
- Styling page layouts and sections
- Modifying existing component styles
- Adding margins, padding, colors, or typography
- Any visual design decision

This ensures all implementations maintain design system consistency and support the "vibe coder with no code knowledge" workflow.

## 🚨 MANDATORY RULE: Modular Component Architecture

**When creating custom components not found in Tagaddod library:**

### 1. Component Organization
**MUST create new components in separate, organized folder structure:**
```
src/
├── components/
│   ├── ui/                    # Tagaddod re-exports (existing)
│   ├── custom/                # Custom components (NEW)
│   │   ├── forms/             # Form-related components
│   │   ├── layout/            # Layout components  
│   │   ├── data-display/      # Data visualization components
│   │   ├── navigation/        # Navigation components
│   │   └── feedback/          # Feedback components
│   └── composed/              # Complex composed components
```

### 2. Modular Design Principles
**NEVER embed component logic directly in page components:**
- **Break down complex components** into small, reusable modules
- **Create atomic components** that handle single responsibilities
- **Compose larger components** from smaller building blocks
- **Use composition over inheritance** patterns

### 3. Component Creation Workflow
**For any custom component:**
1. **Research best practices** using web search for modular component patterns
2. **Create atomic components first** (buttons, inputs, labels)
3. **Build molecular components** (form fields, cards, list items) 
4. **Compose organism components** (forms, tables, navigation bars)
5. **Integrate into pages** through composition

### 4. Naming Conventions
```tsx
// ✅ CORRECT - Modular structure
src/components/custom/forms/
├── FormField/
│   ├── FormField.tsx          # Main component
│   ├── FormField.types.ts     # TypeScript types
│   ├── FormField.styles.css   # Component styles
│   └── index.ts               # Clean exports
├── ValidationMessage/
└── FormActions/

// ✅ CORRECT - Usage in pages
import { FormField, ValidationMessage, FormActions } from '@/components/custom/forms'
```

### 5. Integration Requirements
- **Export components cleanly** through index files
- **Document component APIs** with TypeScript interfaces
- **Use design tokens consistently** in all custom components
- **Maintain RTL support** for international usage
- **Follow accessibility patterns** from Tagaddod components

**This ensures maintainable, scalable component architecture that matches enterprise-grade development practices.**

## 🚨 MANDATORY RULE: Design Token Usage for All Styling

**For ALL spacing, colors, fonts, and layout decisions:**

1. **MUST use Tagaddod design tokens** from `styles.css`
2. **Reference `.component-documentation/DesignTokens.mdx`** for complete token catalog
3. **Use CSS custom properties**: `var(--t-color-*)`, `var(--t-space-*)`, `var(--t-typography-*)`
4. **NEVER use hardcoded values** like `color: #333`, `margin: 16px`, `font-size: 14px`
5. **Apply tokens for**:
   - Colors: `--t-color-fill-*`, `--t-color-text-*`, `--t-color-border-*`
   - Spacing: `--t-space-*` (0 through 3200)
   - Typography: `--t-typography-*`, `--t-font-*`
   - Layout: `--t-border-radius-*`, `--t-shadow-*`

This ensures consistent design language across all implementations.

## 🚨 MANDATORY RULE: Intelligent Component Discovery System

**Context-Aware Component Discovery with Multi-Tier Fallback Strategy**

### Core Discovery Protocol

**ALWAYS follow this intelligent discovery sequence for ANY component request:**

### Tier 1: Native Tagaddod Components (Primary Discovery)

**Context-Aware Documentation Reading:**
1. **Session Memory Check**: Before reading any documentation, check if component context already exists in current session
2. **IF component context EXISTS in session**: Use cached implementation knowledge without re-reading documentation
3. **IF component context DOES NOT exist**: Read complete `.component-documentation/[ComponentName].mdx` file from start to finish
4. **Read ENTIRE documentation**: Since indexing is incomplete, always read the full file for comprehensive understanding
5. **Cache Complete Context**: Store full implementation patterns, props, examples, and usage guidelines in session memory
6. **Apply Comprehensive Understanding**: Generate component using retained implementation knowledge

**Auto-Discovery Features:**
- **File Detection**: Automatically scan `.component-documentation/` for all available components
- **Change Detection**: Monitor for new/modified documentation files and invalidate cache when needed
- **Complete File Reading**: Always read documentation files from start to finish (indexing in progress)
- **Token Optimization**: Balance comprehensive understanding vs. efficient token usage

### Tier 2: Shadcn Components (First Fallback)

**When no suitable Tagaddod component found:**
1. **Web Search Integration**: Use Tavily Search MCP, Bright Data, or Brave Search
2. **Shadcn Priority Search**: `"shadcn [component-name] 2025 latest implementation react"`
3. **Documentation Extraction**: Parse Shadcn documentation for:
   - Component implementation patterns
   - Props and configuration options
   - Usage examples and best practices
   - TypeScript integration patterns
4. **Context Caching**: Store Shadcn component understanding in session memory

### Tier 3: Antd Components (Second Fallback)

**When no suitable Shadcn component found:**
1. **Antd-Specific Search**: `"antdesign [component-name] react 2025 best practices implementation"`
2. **Component Research**: Extract Antd patterns focusing on:
   - Modern React implementation
   - TypeScript integration
   - Accessibility features
   - Customization options
3. **Adaptation Strategy**: Plan conversion to Tagaddod design language

### Tier 4: Universal Web Components (Final Fallback)

**When no external library component found:**
1. **Best Practices Search**: `"react [component-name] component best practices 2025 accessibility"`
2. **Implementation Research**: Search for:
   - Modern React patterns (hooks, functional components)
   - Accessibility standards (ARIA, keyboard navigation)
   - Performance optimization techniques
   - TypeScript integration
3. **Custom Component Architecture**: Build from scratch using atomic design principles

### Design Token Integration (All Tiers)

**Mandatory for ALL components and styling tasks (All Tiers):**
1. **ALWAYS check `.component-documentation/DesignTokens.mdx`** before applying any styles
2. **Token Application**: Use Tagaddod design tokens for all styling decisions
3. **Color Mapping**: Apply `var(--t-color-*)` tokens to match Tagaddod theme
4. **Spacing Consistency**: Use `var(--t-space-*)` for all margins, padding, and layout
5. **Typography Alignment**: Apply `var(--t-typography-*)` and `var(--t-font-*)` tokens
6. **Layout Properties**: Use `var(--t-border-radius-*)`, `var(--t-shadow-*)` for borders and shadows
7. **Visual Consistency**: Ensure all implementations match existing Tagaddod components
8. **NEVER use hardcoded values**: No `#333`, `16px`, `14px`, or arbitrary CSS values

### Session Memory Management

**Intelligent Context Retention:**
- **Component Context Cache**: Store implementation knowledge for all read/researched components
- **Session Persistence**: Maintain context throughout entire user session
- **Smart Re-reading**: Only re-read documentation if component wasn't previously accessed
- **Cache Invalidation**: Clear specific component cache when documentation files are modified
- **Token Efficiency**: Eliminate redundant documentation reads while maintaining accuracy

### Implementation Workflow

```
User Request → Check Session Memory → [Found: Use Cached Context]
                                   → [Not Found: Execute Discovery Tiers]

Discovery Tiers:
Tier 1: Tagaddod Docs → Cache Context → Generate Component
Tier 2: Shadcn Search → Extract Docs → Apply Tokens → Cache → Generate
Tier 3: Antd Search → Extract Docs → Apply Tokens → Cache → Generate
Tier 4: Universal Search → Research → Build Custom → Apply Tokens → Cache → Generate
```

### Arabic Language & RTL Support Protocol

**MANDATORY: When user instructs in Arabic or requests Arabic/RTL implementation:**

1. **Language Detection**: If user communicates in Arabic or requests Arabic content
2. **Documentation Priority**: ALWAYS read relevant component documentation Arabic/RTL sections first
3. **ThemeProvider Integration**: Check `.component-documentation/ThemeProvider.mdx` for Arabic implementation patterns
4. **RTL Implementation Requirements**:
   - Use `defaultDirection="rtl"` and `defaultLocale="ar"` in ThemeProvider
   - Apply automatic Tajawal font switching (Arabic) vs Outfit (English)
   - Use logical CSS properties: `margin-inline-start` instead of `margin-left`
   - Implement proper text alignment: `text-align: start` instead of `text-align: left`
   - Test both LTR (English/Outfit) and RTL (Arabic/Tajawal) modes

5. **Component Arabic Sections**: For each component used, check documentation for:
   - Arabic/RTL-specific examples
   - Font weight adjustments (Tajawal: 500 regular, 700 medium/bold)
   - Direction-aware layout considerations
   - Locale-specific styling requirements

### Quality Assurance

**Implementation Standards:**
- **Complete Understanding**: Always obtain full component context before implementation
- **Design Consistency**: All components must maintain Tagaddod visual language
- **Arabic/RTL Compliance**: When requested, implement proper RTL support with Tajawal font
- **Best Practices**: Follow modern React patterns and accessibility standards
- **Documentation Accuracy**: Never guess component usage - always research thoroughly
- **Memory Optimization**: Balance comprehensive context vs. token efficiency

**This system ensures users can always find and properly implement components while maintaining design consistency and optimal performance.**

### Practical Examples

**Example 1: First Request for Button Component**
```
User: "I need a primary button for my form"
Agent Process:
1. Check session memory for Button context → [NOT FOUND]
2. Read .component-documentation/Button.mdx → [Cache complete context]
3. Generate Button using cached knowledge
Result: Perfect Button implementation using documented patterns
```

**Example 2: Second Request for Button Component (Same Session)**
```
User: "I need another button with loading state"
Agent Process:
1. Check session memory for Button context → [FOUND - use cached knowledge]
2. Generate Button with loading state using retained context
Result: Accurate implementation without re-reading documentation
```

**Example 3: External Component Fallback**
```
User: "I need a datepicker component"
Agent Process:
1. Check Tagaddod docs → [DatePicker.mdx found, use native component]
OR (if not found):
1. Search Shadcn → "shadcn datepicker 2025 latest implementation react"
2. Extract Shadcn documentation → Cache context
3. Apply Tagaddod design tokens → Generate component
Result: Shadcn datepicker styled with Tagaddod design language
```

**Example 4: Custom Component Creation**
```
User: "I need a kanban board component"
Agent Process:
1. Check Tagaddod docs → [NOT FOUND]
2. Search Shadcn → [NOT FOUND]
3. Search Antd → [NOT FOUND]
4. Universal search → "react kanban board component best practices 2025"
5. Research implementation patterns → Cache context
6. Build custom component using Tagaddod design tokens
Result: Custom kanban board with full Tagaddod styling
```

**Example 5: Arabic Language Implementation**
```
User: "أريد إنشاء نموذج تسجيل دخول باللغة العربية" (I want to create an Arabic login form)
Agent Process:
1. Detect Arabic language request
2. Read ThemeProvider.mdx Arabic/RTL sections → Cache RTL context
3. Read Button.mdx Arabic sections → Cache Arabic button patterns
4. Read TextInput.mdx Arabic sections → Cache RTL input patterns
5. Implement with:
   - ThemeProvider defaultDirection="rtl" defaultLocale="ar"
   - Tajawal font automatically applied
   - Logical CSS properties (margin-inline-start)
   - Right-to-left text alignment
Result: Proper Arabic login form with Tajawal font and RTL layout
```

## 🚨 MANDATORY RULE: External Component Library Integration

**When integrating external UI component libraries:**

1. **DO NOT use external component libraries** unless explicitly requested by the human
2. **When human explicitly requests external UI library integration** (e.g., shadcn, tailwind, material, bootstrap, Polaris, antdesign):
   - **MUST apply Tagaddod design tokens** to all external components
   - **Use `tagaddod-design/react` library styles** for theming
   - **Ensure external components match Tagaddod theme**:
     - Colors: Apply Tagaddod blue color palette using `var(--t-color-*)`
     - Fonts: Use Tagaddod typography tokens `var(--t-typography-*)`, `var(--t-font-*)`
     - Spacing: Apply Tagaddod spacing tokens `var(--t-space-*)`
   - **Override external library styles** with Tagaddod design tokens
   - **Maintain design consistency** across external and native Tagaddod components

3. **Integration Requirements**:
   - Import design tokens from: `@tagaddod-design/react/dist/styles/styles.css`
   - Create CSS overrides using Tagaddod custom properties
   - Test visual consistency between external and Tagaddod components
   - Document integration patterns in component documentation

This ensures external libraries maintain Tagaddod's design language and visual consistency.

## 🚨 MANDATORY RULE: Component Documentation Indexing

**When adding new component documentation OR when explicitly asked to add an index:**

### 1. Automatic Index Creation
**MUST add a Realm Agent Navigation Index to ANY new component documentation file:**
- When creating new `.component-documentation/[ComponentName].md` or `.mdx` files
- Index must be added immediately after imports and Meta tags, before the main title
- Follow the established index pattern from existing files

### 2. Index Request Handling
**When user explicitly requests adding an index to component documentation:**
- Read the target file completely to understand its structure and content
- Create comprehensive navigation index with emoji-categorized sections
- Include specific line number references for direct navigation
- Add quick implementation examples with exact line locations
- Include critical notes and fallback instructions
- Follow the exact format pattern from existing documentation files

### 3. Index Pattern Requirements (Future Enhancement)
**Note: Documentation indexing is currently in progress. Not all documentation files have proper navigation indexes yet.**

**For now, ALWAYS read documentation files completely from start to finish.**

**When creating new documentation or adding indexes, use this pattern:**
```html
<!--
REALM AGENT NAVIGATION INDEX
=============================
Quick Reference for Claude Code Agents:

📦 IMPORT & SETUP (Lines X-Y)
🎯 BASIC USAGE (Lines X-Y)
🎨 VARIANTS/TYPES (Lines X-Y)
[Component-specific sections with emojis]

QUICK IMPLEMENTATION EXAMPLES:
- Pattern name: Lines X-Y
- Another pattern: Lines X-Y

⚠️ [COMPONENT-SPECIFIC NOTE]
Critical information about the component

⚠️ FALLBACK INSTRUCTION:
If you cannot find what you're looking for in the sections above,
read the ENTIRE document from start to finish to ensure complete
understanding of all [ComponentName] capabilities and patterns.
-->
```

### 4. Index Benefits
These indexes enable Claude Code agents to:
- Jump directly to relevant sections instead of reading entire files
- Quickly identify implementation patterns with line-specific references
- Access critical notes about component behavior and integration
- Find exact code examples for immediate implementation
- Understand component relationships and dependencies

**This dramatically improves agent accuracy and response time for "vibe coders with no code knowledge".**

## Development Commands

```bash
# Development
npm start              # Start development server (same as npm run dev)
npm run dev           # Start development server on port 3000
npm run build         # Build for production (TypeScript compilation + Vite build)
npm run preview       # Preview production build

# Code Quality
npm run lint          # Check code quality with ESLint
npm run lint:fix      # Auto-fix ESLint issues
npm run type-check    # TypeScript type checking without emitting files
```

## Project Architecture

### Clean Template Structure
This is a **minimal, production-ready React template** with Tagaddod Design System integration. The architecture emphasizes **simplicity** and **direct component usage**.

### Technology Stack
- **Build System**: Vite with React + TypeScript
- **UI Framework**: Tagaddod Design System (@tagaddod-design/react)
- **Styling**: Global CSS with RTL support
- **Type Safety**: Full TypeScript integration

### File Organization

```
src/
├── App.tsx              # Main application component with welcome message
├── main.tsx             # React app entry point with ThemeProvider
├── components/ui/       # Optional component re-exports from design system
├── lib/                 # Core utilities (RTL support, basic helpers)
└── styles/              # Global CSS and RTL-specific styles
```

### Key Implementation Patterns

**Direct Import Strategy**: 
- Import components directly from `@tagaddod-design/react`
- Optional convenience re-exports available in `src/components/ui/index.ts`
- No wrapper components or abstraction layers

**RTL/Internationalization**:
- `useRTL()` hook for Arabic/English switching
- Automatic browser language detection
- CSS utilities for direction-aware styling

**Theme Integration**:
- ThemeProvider configured with Tagaddod defaults
- Settings persisted to localStorage
- Automatic system theme detection

## Path Aliases
- `@/` → `src/`
- `@/components` → `src/components/`
- `@/lib` → `src/lib/`
- `@/styles` → `src/styles/`

## Component Usage Patterns

### Import Components Directly
```tsx
import { Button, TextInput, Modal } from '@tagaddod-design/react'
```

### RTL Support Usage
```tsx
import { useRTL } from './lib/use-rtl'

const { toggleDirection, locale, isRTL } = useRTL()
```

### Available Components
All components from @tagaddod-design/react:
- Form Controls: Button, TextInput, Select, Checkbox, Switch, RangeSlider
- Layout: AspectRatio, Separator
- Data Display: Avatar, Badge, Table, Tooltip  
- Navigation: Tabs, TabsList, TabsTrigger, TabsContent
- Overlays: Modal, Drawer, Popover

## Development Guidelines

### Template Philosophy
- **Minimal Setup**: Provide essential configuration without over-engineering
- **Direct Usage**: Encourage importing from the design system directly
- **Type Safety**: Full TypeScript support for all components
- **RTL First**: Built-in Arabic/English support for international projects

### Code Patterns
- Use design system components as-is without wrappers
- Leverage TypeScript for prop validation and IDE support
- Implement RTL-aware layouts using provided utilities
- Follow modern React patterns (hooks, functional components)

## ⚠️ CRITICAL: Component Documentation Protocol

**ALWAYS follow this process when users request component-related features:**

### 1. Component Request Analysis
When a user requests:
- "Add a button"
- "Create a form"
- "Add a table"
- "Need a modal"
- Any UI component functionality

**IMMEDIATELY invoke the `tagaddod-design-system` skill using the Skill tool.**

### 2. Skill-Based Documentation Access
**The skill will automatically:**
- Check if the component exists in Tagaddod Design System
- Read the appropriate `.component-documentation/[Component].mdx` file
- Extract implementation patterns, props, and examples
- Provide exact code patterns for implementation

### 3. Available Component Documentation
The skill has access to 33 detailed component guides in `.component-documentation/`:
- **Forms**: Button, TextInput, Select, Checkbox, Switch, RangeSlider
- **Layout**: AspectRatio, Separator, Sidebar
- **Data**: Table, Avatar, Badge, Logo
- **Navigation**: Tabs, Listbox
- **Overlays**: Modal, Drawer, Popover, Tooltip
- **Feedback**: Sonner (notifications)
- **Design Tokens**: DesignTokens.mdx (comprehensive reference for all styling tokens)

### 4. Skill-First Response Pattern
```
1. Invoke `tagaddod-design-system` skill using Skill tool
2. Wait for skill to provide component implementation guidance
3. Use the EXACT import patterns provided by the skill
4. Follow the examples and prop usage from the skill's guidance
5. Include proper TypeScript types as provided by the skill
6. Provide working code that matches the skill's patterns
```

### 5. Import Strategy (From Documentation)
Always use imports as documented:
```tsx
// Correct (as per documentation):
import { Button } from '@tagaddod-design/react'
// OR
import { Button } from '@/components/ui'

// Follow the exact patterns from .component-documentation/
```

### 6. Error Prevention
- **DO NOT** guess component props or usage patterns
- **DO NOT** create custom wrapper components
- **ALWAYS** reference the documentation for correct prop names, types, and patterns
- **ENSURE** imports match what's documented in the .component-documentation/ files (.md or .mdx)

### Essential Files
- `src/App.tsx`: Main application entry point with welcome message
- `src/lib/use-rtl.ts`: RTL/LTR language switching utilities
- `src/lib/utils.ts`: Basic utility functions (cn, theme detection)
- `vite.config.ts`: Build configuration with path aliases
- **`.component-documentation/`**: Component usage guides (CHECK FIRST!)

## Example: Correct Component Response Workflow

**User Request**: "I need to add a modal to confirm deletion"

**✅ CORRECT Claude Code Process**:

1. **FIRST**: Invoke the `tagaddod-design-system` skill
   ```
   Uses Skill tool with command: "tagaddod-design-system"
   ```

2. **WAIT**: For skill to provide Modal implementation guidance
   - Skill reads `.component-documentation/Modal.mdx`
   - Skill extracts import patterns, props, usage examples
   - Skill provides exact implementation patterns

3. **IMPLEMENT**: Using skill's guidance

```tsx
// ✅ CORRECT (using skill's guidance):
import { Modal, Button } from '@tagaddod-design/react'

function DeleteConfirmModal() {
  return (
    <Modal
      trigger={<Button tone="critical">Delete Item</Button>}
      title="Confirm Deletion"
    >
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <p>Are you sure you want to delete this item?</p>
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <Button variant="secondary">Cancel</Button>
          <Button tone="critical">Delete</Button>
        </div>
      </div>
    </Modal>
  )
}
```

**❌ WRONG**: Implementing components without invoking the skill first.
**❌ WRONG**: Guessing props or creating custom implementations without skill guidance.