# Table Component Enhancement: Tabbed Tables

## Implementation Summary

The Tagaddod Design System's Table component has been enhanced with the ability to display tabs that can switch between different table configurations. This implementation adds the following features:

1. **Enhanced Tab Configuration**
   - Each tab can have its own data, columns, title, and pagination
   - Tabs can display badge counters
   - Tab switching is handled automatically by the component

2. **Two Implementation Options**
   - Simple tabs with manual data switching (backwards compatible)
   - Enhanced tabs with automatic data switching through the new `tableTabs` prop

3. **Visual Enhancements**
   - Tabs are styled to match the design system's aesthetics
   - Tabs support RTL languages
   - Mobile-responsive design with horizontal scrolling
   - Animation effects when switching tabs

4. **Accessibility**
   - Proper keyboard navigation support
   - ARIA attributes for screen readers
   - Correct focus management when switching tabs

## Files Updated

1. `types.ts`
   - Added `TableTab<T>` interface for the enhanced tab configuration
   - Updated `TableProps<T>` interface to include `tableTabs` property and badge support for `tabItems`

2. `Table.tsx`
   - Enhanced component to support switching between different data sets and columns
   - Added logic to determine which tab is active and which data/columns to display
   - Updated tab rendering to use the Tabs component from the design system

3. `Table.module.css`
   - Added styles for the tab container, tabs, and active state
   - Added styles for badges and responsive behavior
   - Added animation effects for tab content transitions

4. `Table.stories.tsx`
   - Added new examples showcasing the enhanced tabs functionality
   - Added examples for tab-specific pagination, RTL support, and hidden tabs

5. `README.md`
   - Updated documentation to explain the new functionality
   - Added examples for both implementation options
   - Added advanced use cases such as conditional tab rendering and lazy loading

## How to Use

### Option 1: Simple Tabs (Manual Handling)

```tsx
const MyTable = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Table
      data={activeTab === 'tab1' ? data1 : data2}
      columns={activeTab === 'tab1' ? columns1 : columns2}
      title={activeTab === 'tab1' ? 'Title 1' : 'Title 2'}
      showTabs={true}
      tabItems={[
        { id: 'tab1', label: 'Tab 1', active: activeTab === 'tab1', badge: 5 },
        { id: 'tab2', label: 'Tab 2', active: activeTab === 'tab2', badge: 10 },
      ]}
      onTabChange={(tabId) => setActiveTab(tabId)}
    />
  );
};
```

### Option 2: Enhanced Tabs (Automatic Handling)

```tsx
const MyTable = () => {
  return (
    <Table
      data={[]} // Default data (not used with tableTabs)
      columns={[]} // Default columns (not used with tableTabs)
      showTabs={true}
      tableTabs={[
        {
          id: 'tab1',
          label: 'Products',
          active: true, // This tab will be active by default
          badge: 5,
          data: productsData,
          columns: productColumns,
          title: 'Product Inventory',
          pagination: {
            pageIndex: 0,
            pageSize: 10,
            pageCount: Math.ceil(productsData.length / 10),
            onPageChange: (pageIndex) => console.log('Page:', pageIndex),
          },
        },
        {
          id: 'tab2',
          label: 'Orders',
          badge: 10,
          data: ordersData,
          columns: orderColumns,
          title: 'Order History',
        },
      ]}
    />
  );
};
```

## Testing

The enhanced Table component has been tested with:

- Different data types and column configurations
- Tab switching and state preservation
- RTL languages
- Mobile responsiveness
- Keyboard navigation
- Screen readers

## Backward Compatibility

The implementation is fully backward compatible with the existing Table component. If the `tableTabs` prop is not provided, the component behaves exactly as before. The existing `tabItems` prop still works as expected for simple tab configurations.

## Future Enhancements

Potential future enhancements could include:

1. Drag-and-drop tab reordering
2. Tab persistence across page reloads (via localStorage)
3. Tab-specific filter configurations
4. Deep linking to specific tabs via URL parameters
