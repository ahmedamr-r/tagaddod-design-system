# TopBar Component - AI Agent Implementation Guide

## Overview

The TopBar component is a **3-slot flexible layout system** for application headers. It provides three independent, swappable sections that AI agents can customize with any content.

## Architecture: The 3-Slot System

```
┌─────────────────────────────────────────────────────────────────┐
│ ┌──────────┐  ┌─────────────────┐  ┌──────────────────────┐   │
│ │  START   │  │     CENTER      │  │         END          │   │
│ │  (Fixed) │  │   (Swappable)   │  │     (Swappable)      │   │
│ └──────────┘  └─────────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Slot Breakdown

| Slot | Purpose | Swappable | Default Content |
|------|---------|-----------|-----------------|
| **START** | Logo + Hamburger menu | ❌ No (Fixed) | TAGADDOD logo, mobile hamburger |
| **CENTER** | Main navigation/search | ✅ Yes | `null` (empty) |
| **END** | User actions/profile | ✅ Yes | `null` (empty) |

## Quick Start for AI Agents

### Minimal Implementation
```jsx
<TopBar />
```
**Result**: Just logo and hamburger menu. Clean slate for customization.

### With Center Content
```jsx
<TopBar
  showCenterSection={true}
  centerContent={<TextInput placeholder="Search..." />}
/>
```

### With End Content
```jsx
<TopBar
  endContent={<UserProfileDropdown />}
/>
```

### Full Customization
```jsx
<TopBar
  showCenterSection={true}
  centerContent={<NavigationMenu />}
  endContent={<UserProfileWithNotifications />}
  logoClickable={true}
  onLogoClick={() => navigate('/')}
/>
```

## Swappable Sections: Detailed Guide

### 1. Center Section (`centerContent` prop)

**Purpose**: Primary navigation, search bars, or application status
**Positioning**: Absolutely centered (50% of TopBar width)
**Default**: `null` (hidden)

#### Props
- `showCenterSection`: boolean (default: `false`) - Must be `true` to show
- `centerContent`: ReactNode - The content to render
- `centerSectionMinWidth`: string (default: `"16.25rem"`)
- `centerSectionMaxWidth`: string (default: `"50rem"`)

#### Responsive Behavior
- `showCenterSectionOnTablet`: boolean (default: `true`)
- `showCenterSectionOnMobile`: boolean (default: `false`)

#### Example Use Cases
```jsx
// Search bar
centerContent={
  <TextInput
    placeholder="Search..."
    prefixIcon={<IconSearch />}
    style={{ width: '100%', maxWidth: '500px' }}
  />
}

// Navigation tabs
centerContent={
  <div style={{ display: 'flex', gap: 'var(--t-space-300)' }}>
    <Button variant="plain">Dashboard</Button>
    <Button variant="plain">Orders</Button>
    <Button variant="plain">Analytics</Button>
  </div>
}

// Status indicator
centerContent={
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--t-space-200)',
    padding: '0 var(--t-space-400)',
    backgroundColor: 'var(--t-color-fill-success-secondary)',
    borderRadius: 'var(--t-border-radius-300)',
    color: 'var(--t-color-text-success)',
    height: '36px'
  }}>
    <div style={{
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: 'var(--t-color-icon-success)'
    }} />
    System Online
  </div>
}
```

### 2. End Section (`endContent` prop)

**Purpose**: User profile, notifications, actions, or contextual controls
**Positioning**: Right-aligned (left-aligned in RTL)
**Default**: `null` (empty)

#### Props
- `endContent`: ReactNode - The content to render
- `showEndSection`: boolean (default: `true`) - Controls visibility

#### Example Use Cases
```jsx
// User profile with avatar
endContent={
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-300)' }}>
    <Button variant="plain" prefixIcon={<IconBell size={18} />}>
      3
    </Button>
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: 'var(--t-color-fill-brand-primary)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      cursor: 'pointer'
    }}>
      JD
    </div>
  </div>
}

// Action buttons
endContent={
  <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
    <Button variant="outlined" size="small" prefixIcon={<IconPlus />}>
      New
    </Button>
    <Button variant="primary" size="small">
      Export
    </Button>
  </div>
}

// Warehouse dropdown (example only - see next section)
endContent={
  <Button
    variant="outlined"
    size="small"
    prefixIcon={<IconBuilding size={16} />}
  >
    Main Warehouse
  </Button>
}
```

### 3. Warehouse Dropdown (Optional Example)

The TopBar includes an **optional** warehouse dropdown as a convenience feature. This is **NOT** a default - it's an example you can enable.

#### Using the Built-in Example
```jsx
<TopBar
  showWarehouseDropdown={true}
  selectedWarehouse="Main Warehouse"
  warehouses={["Main Warehouse", "Secondary Warehouse"]}
  onWarehouseChange={setWarehouse}
  onLogoutClick={handleLogout}
/>
```

#### Important Notes
- `showWarehouseDropdown` is `false` by default
- If `endContent` is provided, warehouse dropdown is ignored
- This is just a demonstration - you can build your own dropdown

#### Warehouse Props (Only used when `showWarehouseDropdown={true}`)
- `selectedWarehouse`: string
- `warehouses`: string[]
- `onWarehouseChange`: (warehouse: string) => void
- `showLogoutOption`: boolean (default: `true`)
- `logoutText`: string
- `onLogoutClick`: () => void
- `popoverSide`: 'top' | 'right' | 'bottom' | 'left'
- `popoverAlign`: 'start' | 'center' | 'end'

## Responsive Design Guidelines for AI Agents

### Critical Rules for Custom Components

When adding custom content to `centerContent` or `endContent`, follow these responsive patterns:

#### 1. Use Flexible Layouts
```jsx
// ✅ GOOD: Flexible container
centerContent={
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--t-space-300)',
    minWidth: '200px',
    maxWidth: '600px',
    width: '100%'
  }}>
    {/* Your content */}
  </div>
}

// ❌ BAD: Fixed width
centerContent={
  <div style={{ width: '800px' }}>
    {/* This will overflow on smaller screens */}
  </div>
}
```

#### 2. Design Token Usage
Always use design tokens for spacing, colors, and typography:

```jsx
// ✅ GOOD: Uses design tokens
endContent={
  <div style={{
    display: 'flex',
    gap: 'var(--t-space-200)',
    padding: '0 var(--t-space-300)',
    backgroundColor: 'var(--t-color-surface-secondary)',
    borderRadius: 'var(--t-border-radius-300)',
    color: 'var(--t-color-text-primary)'
  }}>
    {/* Content */}
  </div>
}

// ❌ BAD: Hardcoded values
endContent={
  <div style={{
    display: 'flex',
    gap: '8px',
    padding: '0 12px',
    backgroundColor: '#f5f5f5',
    borderRadius: '6px',
    color: '#333'
  }}>
    {/* Content */}
  </div>
}
```

#### 3. Mobile Optimization

TopBar has specific mobile behaviors:
- **Breakpoint**: 768px
- **Mobile behavior**: Hamburger appears, center section may hide

```jsx
// Configure mobile visibility
<TopBar
  showCenterSection={true}
  showCenterSectionOnMobile={false}  // Hide search on mobile
  showCenterSectionOnTablet={true}   // Show on tablet
  centerContent={<SearchBar />}
  // Mobile action button appears when center is hidden
  mobileActionContent={
    <Button
      variant="plain"
      size="small"
      prefixIcon={<IconSearch />}
      aria-label="Search"
    />
  }
  isExpanded={isMobileSearchExpanded}
  onExpandToggle={setIsMobileSearchExpanded}
  expandedContent={
    <TextInput
      placeholder="Search..."
      autoFocus
    />
  }
/>
```

#### 4. Height Constraints

Keep custom content within TopBar height:
- **Desktop**: 56px (3.5rem)
- **Mobile**: 56px (3.5rem)

```jsx
// ✅ GOOD: Fits within height
centerContent={
  <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '40px',  // Fits in 64px TopBar
    gap: 'var(--t-space-300)'
  }}>
    <Button size="small">Action</Button>
  </div>
}

// ❌ BAD: Exceeds height
centerContent={
  <div style={{ height: '80px' }}>
    {/* This will overflow TopBar */}
  </div>
}
```

### Responsive Component Patterns

#### Pattern 1: Hide Text on Mobile
```jsx
endContent={
  <Button
    variant="outlined"
    size="small"
    prefixIcon={<IconUser size={16} />}
  >
    <span style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline' } }}>
      John Doe
    </span>
  </Button>
}
```

#### Pattern 2: Conditional Rendering
```jsx
const isDesktop = window.innerWidth >= 768;

endContent={
  <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
    {isDesktop && <Button variant="outlined">Action 1</Button>}
    <Button variant="primary">Action 2</Button>
  </div>
}
```

#### Pattern 3: Flexible Gap Spacing
```jsx
centerContent={
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(var(--t-space-200), 2vw, var(--t-space-400))',
    flexWrap: 'wrap'
  }}>
    <Button variant="plain" size="small">Item 1</Button>
    <Button variant="plain" size="small">Item 2</Button>
    <Button variant="plain" size="small">Item 3</Button>
  </div>
}
```

## Mobile Expandable Pattern

For mobile-first experiences, use the expandable pattern:

```jsx
const [isExpanded, setIsExpanded] = useState(false);

<TopBar
  // Hide center on mobile
  showCenterSection={true}
  showCenterSectionOnMobile={false}
  centerContent={<SearchBar />}

  // Mobile action button
  mobileActionContent={
    <Button
      variant="plain"
      size="small"
      prefixIcon={<IconSearch size={18} />}
      aria-label="Search"
    />
  }

  // Expansion config
  isExpanded={isExpanded}
  onExpandToggle={setIsExpanded}
  expandedContent={
    <div style={{
      display: 'flex',
      gap: 'var(--t-space-300)',
      alignItems: 'center',
      width: '100%'
    }}>
      <TextInput
        placeholder="Search products..."
        style={{ flex: 1 }}
        autoFocus={isExpanded}
      />
      <Button
        variant="primary"
        size="small"
        onClick={() => {
          handleSearch();
          setIsExpanded(false);
        }}
      >
        Search
      </Button>
    </div>
  }
  expansionDuration={300}
/>
```

## RTL Support

TopBar automatically handles RTL layouts when used with ThemeProvider:

```jsx
import { ThemeProvider } from '@tagaddod-design/react';

<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  <TopBar
    showCenterSection={true}
    centerContent={<SearchBar />}
    endContent={<UserProfile />}
  />
</ThemeProvider>
```

**Automatic RTL Adjustments:**
- End section moves to left edge
- Center section remains centered
- Font switches to Arabic (Tajawal)
- Line height adjusts for Arabic text
- Mobile menu slides from correct side

## Common Mistakes to Avoid

### ❌ Mistake 1: Assuming default content exists
```jsx
// WRONG: Expecting warehouse dropdown by default
<TopBar
  selectedWarehouse="Main"
  onWarehouseChange={setWarehouse}
/>
// This won't show anything!
```

✅ **Correct**:
```jsx
<TopBar
  showWarehouseDropdown={true}
  selectedWarehouse="Main"
  onWarehouseChange={setWarehouse}
/>
```

### ❌ Mistake 2: Not enabling center section
```jsx
// WRONG: center content won't show
<TopBar centerContent={<SearchBar />} />
```

✅ **Correct**:
```jsx
<TopBar
  showCenterSection={true}
  centerContent={<SearchBar />}
/>
```

### ❌ Mistake 3: Hardcoded dimensions
```jsx
// WRONG: Will break responsive layout
endContent={
  <div style={{ width: '400px', height: '80px' }}>
    Content
  </div>
}
```

✅ **Correct**:
```jsx
endContent={
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--t-space-300)',
    maxWidth: '100%',
    height: '40px'
  }}>
    Content
  </div>
}
```

### ❌ Mistake 4: Ignoring mobile responsiveness
```jsx
// WRONG: Center content always visible, even on mobile
<TopBar
  showCenterSection={true}
  centerContent={<WideNavigationMenu />}
/>
```

✅ **Correct**:
```jsx
<TopBar
  showCenterSection={true}
  showCenterSectionOnMobile={false}
  showCenterSectionOnTablet={true}
  centerContent={<WideNavigationMenu />}
  mobileActionContent={<IconMenu2 />}
/>
```

## AI Agent Decision Tree

```
User wants TopBar?
├─ Just logo + hamburger?
│  └─ <TopBar />
│
├─ With search/navigation in center?
│  └─ <TopBar showCenterSection={true} centerContent={...} />
│     ├─ Hide on mobile?
│     │  └─ showCenterSectionOnMobile={false}
│     └─ Expandable on mobile?
│        └─ Add mobileActionContent + expandedContent
│
├─ With user profile/actions?
│  └─ <TopBar endContent={...} />
│
├─ With warehouse dropdown example?
│  └─ <TopBar showWarehouseDropdown={true} selectedWarehouse={...} />
│
└─ Full customization?
   └─ <TopBar
        showCenterSection={true}
        centerContent={...}
        endContent={...}
        {other props}
      />
```

## Complete Example: Dashboard TopBar

```jsx
import { TopBar, Button, TextInput } from '@tagaddod-design/react';
import { IconSearch, IconBell, IconPlus } from '@tabler/icons-react';

function DashboardTopBar() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <TopBar
      // Logo config
      logoClickable={true}
      onLogoClick={() => navigate('/')}

      // Center section - search bar
      showCenterSection={true}
      showCenterSectionOnMobile={false}
      showCenterSectionOnTablet={true}
      centerContent={
        <TextInput
          placeholder="Search products, orders, customers..."
          prefixIcon={<IconSearch size={18} />}
          style={{
            width: '100%',
            maxWidth: '500px',
            minWidth: '300px'
          }}
        />
      }

      // End section - user actions
      endContent={
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-300)'
        }}>
          <Button
            variant="plain"
            size="small"
            prefixIcon={<IconPlus size={18} />}
          >
            New Order
          </Button>
          <Button
            variant="plain"
            size="small"
            prefixIcon={<IconBell size={18} />}
            aria-label="Notifications"
          >
            {notifications > 0 && notifications}
          </Button>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'var(--t-color-fill-brand-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'var(--t-font-weight-medium)',
            fontSize: 'var(--t-font-size-250)',
            cursor: 'pointer'
          }}>
            JD
          </div>
        </div>
      }

      // Mobile search expansion
      isExpanded={searchExpanded}
      onExpandToggle={setSearchExpanded}
      mobileActionContent={
        <Button
          variant="plain"
          size="small"
          prefixIcon={<IconSearch size={18} />}
          aria-label="Search"
        />
      }
      expandedContent={
        <div style={{
          display: 'flex',
          gap: 'var(--t-space-300)',
          alignItems: 'center'
        }}>
          <TextInput
            placeholder="Search..."
            prefixIcon={<IconSearch size={18} />}
            style={{ flex: 1 }}
            autoFocus={searchExpanded}
          />
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              handleSearch();
              setSearchExpanded(false);
            }}
          >
            Search
          </Button>
        </div>
      }
      expansionDuration={300}
    />
  );
}
```

## Summary for AI Agents

1. **TopBar has 3 slots**: START (fixed), CENTER (swappable), END (swappable)
2. **Default is minimal**: Just logo and hamburger, no content in center/end
3. **Center section**: Requires `showCenterSection={true}` to display
4. **End section**: Just pass `endContent={...}` - no extra props needed
5. **Warehouse dropdown**: Optional example via `showWarehouseDropdown={true}`
6. **Responsive**: Use design tokens, flexible layouts, and mobile-specific props
7. **RTL**: Automatic with ThemeProvider - no extra work needed
8. **Mobile pattern**: Hide center, show action button, expand on click

**Golden Rule**: When in doubt, check the swappable slot examples in Storybook - they demonstrate responsive patterns you should follow.
