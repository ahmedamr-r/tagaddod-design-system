# TopBar Component

A comprehensive top navigation bar component with TAGADDOD logo and highly customizable dropdown functionality.

## ✨ Key Features

### 🎨 **Visual & Interactive**
- **TAGADDOD logo** on the left side with optional click functionality
- **Dropdown selector** with fully customizable Popover and Listbox components
- **Mobile hamburger menu** with smooth icon transitions (hamburger ↔ X)
- **Smooth animations** for mobile sidebar with slide-in/out transitions
- **RTL support** for Arabic layouts with proper text and layout direction

### 📱 **Mobile Experience**
- **Responsive design** with mobile-optimized dimensions
- **Overlay sidebar** that slides underneath TopBar (not over it)
- **Backdrop overlay** with smooth fade transitions
- **Auto-close behavior** when menu items are selected

## 🔧 **Customization Options**

### **Basic Usage**

```tsx
import { TopBar } from '@tagaddod-design/react';

<TopBar
  selectedWarehouse="Main Warehouse"
  warehouses={["Main Warehouse", "Secondary Warehouse"]}
  onWarehouseChange={setSelectedWarehouse}
  onLogoutClick={handleLogout}
/>
```

### **Listbox Customization**

Complete control over dropdown options:

```tsx
<TopBar
  customListboxOptions={[
    { 
      label: "Dashboard", 
      value: "dashboard", 
      prefix: <IconHome size={16} /> 
    },
    { 
      label: "User Management", 
      value: "users", 
      prefix: <IconUsers size={16} /> 
    },
    {
      label: "",
      value: "separator",
      disabled: true,
      customContent: <Separator />
    },
    { 
      label: "Settings", 
      value: "settings", 
      prefix: <IconSettings size={16} /> 
    }
  ]}
  onCustomListboxSelect={(value, option) => {
    console.log('Selected:', value, option);
    handleCustomSelection(value, option);
  }}
  listboxClassName="my-custom-listbox"
  listboxProps={{ 
    'data-testid': 'custom-listbox',
    style: { minWidth: '300px' }
  }}
/>
```

### **Popover Customization**

Control positioning and appearance:

```tsx
<TopBar
  popoverSide="top"           // 'top' | 'right' | 'bottom' | 'left'
  popoverAlign="center"       // 'start' | 'center' | 'end'
  popoverMargin={8}           // Custom margin in pixels
  showPopoverArrow={true}     // Show/hide arrow
  popoverProps={{
    className: 'custom-popover',
    style: { zIndex: 9999 }
  }}
/>
```

### **Styling Customization**

Custom icons and styling:

```tsx
<TopBar
  warehouseIcon={<IconBuildingStore size={20} />}
  warehouseIconSize={20}
  warehouseTriggerClassName="custom-trigger-button"
  hamburgerButtonClassName="custom-hamburger"
  className="custom-topbar"
/>
```

### **Behavior Customization**

Control features and text:

```tsx
<TopBar
  showLogoutOption={false}           // Hide logout option
  logoutText="Sign Out"             // Custom logout text
  showHamburgerMenu={true}          // Show/hide mobile menu
  logoClickable={true}              // Make logo clickable
  warehouseDisabled={false}         // Enable/disable dropdown
  onLogoClick={() => navigateHome()}
/>
```

### **Mobile Sidebar Integration**

For responsive layouts with sidebar:

```tsx
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

<TopBar
  isMobileSidebarOpen={isSidebarOpen}
  onHamburgerMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
  showHamburgerMenu={true}
/>
```

## 📱 **Mobile Features**

### **Responsive Layout**
- **Grouped elements**: Hamburger button and logo grouped together in left section
- **50% width allocation**: Left section (hamburger + logo) takes 50% of mobile width
- **Proper spacing**: `--t-space-200` margin between hamburger button and logo
- **Hidden warehouse text**: Only icon and chevron shown on mobile screens
- **Micro button**: Hamburger menu uses micro-sized plain Button component

### **Smooth Transitions**
- **Slide Duration**: 300ms with cubic-bezier easing
- **Backdrop Fade**: 200ms opacity transition
- **Icon Transform**: Hamburger ↔ X with smooth transition

### **Proper Positioning**
- Sidebar opens **underneath TopBar** (not over it)
- TopBar height: 64px desktop, 56px mobile
- Fixed positioning with proper z-index management

### **RTL Support**
- Automatic detection of `dir="rtl"`
- **Mirrored layout**: Logo/hamburger group moves to right, warehouse dropdown moves to left
- Proper slide direction for Arabic layouts
- RTL-aware text and icon positioning
- **Mobile RTL**: Maintains 50% width allocation with proper element positioning

## 🎯 **Advanced Usage**

### **Complete Custom Dropdown**

Replace the entire dropdown with custom content:

```tsx
<TopBar
  customListboxOptions={[
    {
      label: "Quick Actions",
      value: "actions-header",
      disabled: true,
      customContent: (
        <div style={{ 
          padding: '8px 12px', 
          fontWeight: 'bold',
          borderBottom: '1px solid var(--t-color-border-secondary)'
        }}>
          Quick Actions
        </div>
      )
    },
    { label: "Create New", value: "create", prefix: <IconPlus /> },
    { label: "Import Data", value: "import", prefix: <IconUpload /> },
    { label: "Export Data", value: "export", prefix: <IconDownload /> }
  ]}
  onCustomListboxSelect={(value, option) => {
    if (value === 'create') handleCreate();
    if (value === 'import') handleImport();
    if (value === 'export') handleExport();
  }}
/>
```

### **Full Layout Integration**

Complete example with sidebar:

```tsx
const Layout = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState("Main Warehouse");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar
        selectedWarehouse={selectedWarehouse}
        warehouses={warehouses}
        onWarehouseChange={setSelectedWarehouse}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onHamburgerMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        onLogoutClick={handleLogout}
      />
      
      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
        {/* Desktop Sidebar */}
        <div className="desktop-sidebar">
          <Sidebar />
        </div>
        
        {/* Mobile Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="mobile-overlay"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
        
        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div className="mobile-sidebar">
            <Sidebar />
          </div>
        )}
        
        {/* Main Content */}
        <main style={{ flex: 1 }}>
          {/* Your app content */}
        </main>
      </div>
    </div>
  );
};
```

## 🎨 **Design System Integration**

### **Design Tokens Used**
- `--t-color-surface-primary` - TopBar background
- `--t-color-text-critical` - Logout text color
- `--t-color-icon-critical` - Logout icon color
- `--t-space-100` - Popover margin (4px)
- `--t-typography-body-sm-medium` - Warehouse text typography
- `--t-color-icon-primary` - Warehouse icon color

### **Animation Tokens**
- `--t-easing-out-cubic` - Sidebar slide easing
- `--t-duration-base` - Standard transition duration
- `--t-z-modal` - Modal/sidebar z-index
- `--t-z-dropdown` - Dropdown/overlay z-index

## 🔄 **Recent Updates**

- ✅ **Popover Margin Enhancement** - Changed default margin from 4px to 'medium' for better shadow visibility
- ✅ **Shadow Test Story** - Added dedicated Storybook story to test Popover shadow visibility
- ✅ **Type Safety Improvement** - Updated popoverMargin to use PopoverMargin type for better flexibility
- ✅ **Popover Shadow Fix** - Removed legacy CSS that was interfering with Popover component's built-in drop shadow
- ✅ **RTL Hamburger Positioning** - Fixed hamburger button to stay right before logo in RTL (not in middle)
- ✅ **RTL Layout Mirroring** - Logo/hamburger group and warehouse dropdown positions properly mirrored in RTL
- ✅ **Mobile Layout Optimization** - Hamburger and logo grouped with 50% width allocation and proper spacing
- ✅ **Micro Button Implementation** - Hamburger menu now uses micro-sized plain Button component
- ✅ **Hidden Mobile Text** - Warehouse text hidden on mobile, showing only icon and chevron
- ✅ **Mobile Sidebar Transitions** - Smooth slide-in/out animations (300ms cubic-bezier)
- ✅ **Proper Positioning** - Sidebar opens underneath TopBar instead of covering it
- ✅ **Icon Toggle** - Hamburger icon changes to X when sidebar is open
- ✅ **Full Customization** - Complete listbox, popover, and styling customization
- ✅ **Backdrop Overlay** - Dark overlay with fade transitions
- ✅ **RTL Support** - Proper behavior for right-to-left layouts

## 📚 **API Reference**

### **Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `customListboxOptions` | `ListboxOption[]` | `undefined` | Override default warehouse + logout options |
| `listboxProps` | `Record<string, any>` | `{}` | Additional props for the listbox component |
| `listboxClassName` | `string` | `undefined` | Custom CSS class for listbox container |
| `onCustomListboxSelect` | `(value: string \| number, option: ListboxOption) => void` | `undefined` | Custom selection handler |
| `popoverSide` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Popover positioning side |
| `popoverAlign` | `'start' \| 'center' \| 'end'` | `'end'` | Popover alignment |
| `popoverMargin` | `PopoverMargin` | `'medium'` | Popover margin - preset size or custom pixel value |
| `showPopoverArrow` | `boolean` | `false` | Whether to show popover arrow |
| `popoverProps` | `Record<string, any>` | `{}` | Additional popover properties |
| `warehouseIcon` | `React.ReactNode` | `<IconBuilding />` | Custom icon for dropdown trigger |
| `warehouseIconSize` | `number` | `16` | Size of the warehouse icon |
| `showLogoutOption` | `boolean` | `true` | Whether to show logout option |
| `logoutText` | `string` | `'Logout'` / `'تسجيل الخروج'` | Custom logout text |
| `isMobileSidebarOpen` | `boolean` | `false` | Whether mobile sidebar is open |

### **ListboxOption Interface**

```tsx
interface ListboxOption {
  label: string;
  value: string | number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  customContent?: React.ReactNode;
}
```

---

**🎉 Production Ready!** This TopBar component is fully customizable and ready for production use with complete listbox customization, smooth mobile transitions, and comprehensive design system integration. 