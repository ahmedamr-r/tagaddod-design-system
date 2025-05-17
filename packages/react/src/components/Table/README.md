# Table Component

A flexible and feature-rich table component built with TanStack Table v8 for the Tagaddod Design System.

## Features

- RTL Support
- Advanced sorting and filtering
- Pagination
- Configurable header and footer
- Theme integration
- Loading, error, and empty states
- Filter bar
- Search functionality
- Responsive design
- Grid cells and striped rows
- Action columns
- **NEW: Enhanced tabbed tables with per-tab configuration**

## Recent Updates

### May 2025 - Enhanced Tabbed Tables

- Added support for enhanced tabbed tables that can switch between different datasets
- Each tab can have its own data, columns, title, and pagination
- Tabs can display badge counters
- Tab switching is automatic with the new `tableTabs` prop
- RTL support for tabs included

### May 2025 - Table Header Layout Improvements

- Fixed layout issues that caused elements in the header to wrap unnecessarily
- Enhanced header layout to maintain proper alignment of title, search, filter and export buttons
- Improved search input to use the TextInput component from the design system
- Added better responsive behavior for mobile displays
- Ensured all three components (title, search, buttons) appear on the same line until very small viewport sizes
- Fixed styling to ensure proper alignment of Filter and Export CSV buttons

## Usage

```tsx
import { Table } from '@tagaddod/react';
import { createColumnHelper } from '@tanstack/react-table';

// Define your data type
interface Product {
  id: number;
  name: string;
  stock: number;
}

// Create some sample data
const products: Product[] = [
  { id: 1, name: 'Product A', stock: 42 },
  { id: 2, name: 'Product B', stock: 13 },
];

// Define columns using TanStack Table helpers
const columnHelper = createColumnHelper<Product>();
const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Product Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('stock', {
    header: 'In Stock',
    cell: info => info.getValue(),
  }),
];

// Use the table component
const MyTable = () => {
  return (
    <Table
      data={products}
      columns={columns}
      title="Product Inventory"
      striped={true}
      gridCells={false}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};
```

## Advanced Features

### Enhanced Tabbed Tables

The Table component now supports two ways to implement tabs:

#### 1. Simple Tabs (Manual Handling)

```tsx
import { useState } from 'react';

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

#### 2. Enhanced Tabs (Automatic Handling)

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
          active: true,
          badge: 5,
          data: productsData,
          columns: productColumns,
          title: 'Product Inventory',
          // Optional tab-specific pagination
          pagination: {
            pageIndex: 0,
            pageSize: 10,
            pageCount: Math.ceil(productsData.length / 10),
            onPageChange: (pageIndex) => console.log('Products page:', pageIndex),
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

### Header Options

```tsx
<Table
  // ...other props
  title="Inventory Stock"           // Table title
  badge={123}                       // Optional count badge
  showSearch={true}                 // Show search input
  showFilters={true}                // Show filter button
  showFilterBar={false}             // Show/hide filter bar (toggle with filter button)
  showExport={true}                 // Show export button
  onSearchChange={(q) => setSearchQuery(q)}
  onFilterClick={() => setIsFilterBarVisible(!isFilterBarVisible)}
  onExport={() => exportData()}
/>
```

### Pagination

```tsx
const [pageIndex, setPageIndex] = useState(0);
const [pageSize, setPageSize] = useState(10);

<Table
  // ...other props
  pagination={{
    pageIndex,
    pageSize,
    pageCount: Math.ceil(totalItems / pageSize),
    onPageChange: setPageIndex,
    onPageSizeChange: setPageSize,
    pageSizeOptions: [10, 25, 50, 100],
  }}
/>
```

### Filters

```tsx
const [filters, setFilters] = useState({
  status: 'active',
  category: 'all',
});

<Table
  // ...other props
  showFilterBar={true}
  activeFilters={filters}
  onFilterChange={setFilters}
  filterOptions={{
    status: {
      label: 'Status',
      options: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
    category: {
      label: 'Category',
      options: [
        { label: 'All', value: 'all' },
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
      ],
    },
  }}
/>
```

### Different States

```tsx
// Loading state
<Table
  // ...other props
  state="loading"
/>

// Error state
<Table
  // ...other props
  state="error"
  errorMessage="Failed to load data. Please try again."
/>

// Empty state
<Table
  // ...other props
  state="empty"
  emptyMessage="No items found."
/>

// Not found (search)
<Table
  // ...other props
  state="notFound"
  notFoundMessage="No results for your search."
  searchQuery="your search"
/>
```

## Props

See the `TableProps` type for a complete list of available props. New tab-related props include:

- **showTabs** (boolean): Controls whether tabs are displayed.
- **tabItems** (Array): Simple tab configuration (backward compatible).
- **tableTabs** (Array<TableTab>): Enhanced tab configuration with complete table settings per tab.
- **onTabChange** (function): Callback when tab is clicked.

## Technical Implementation Notes

### Table Tabs Implementation

Enhanced tabs provide the following capabilities:

- Automatic switching between different data sets and columns
- Each tab can have its own title, pagination, and state
- Badges can be displayed next to tab labels
- Tabs are fully styled with the design system's tokens
- RTL support is built-in with proper text alignment
- Mobile responsiveness with horizontal scrolling on smaller screens

### Table Header Layout

The table header uses a combination of flex layout properties to maintain proper alignment:

- The header container uses `flex-wrap: nowrap` to prevent wrapping
- The title uses `overflow: hidden` and `text-overflow: ellipsis` to handle truncation
- The search input has a fixed width to ensure consistent layout
- Action buttons are set to `flex-shrink: 0` to prevent them from shrinking
- The components use responsive styling for smaller screens (below 768px)

### Integration with Design System

- The search input integrates with the TextInput component
- Filter and Export buttons use the Button component with proper sizing and icons
- All components follow design tokens for spacing, colors, and typography
- The tab component follows the design system's patterns for consistent UI

## Advanced Use Cases

### Conditional Tab Rendering

You can conditionally show or hide specific tabs based on user permissions:

```tsx
const MyTable = () => {
  const { hasOrdersAccess } = useUserPermissions();
  
  // Filter tabs based on permissions
  const tableTabsFiltered = useMemo(() => {
    const allTabs = [
      {
        id: 'products',
        label: 'Products',
        data: productsData,
        columns: productColumns,
      },
      {
        id: 'orders',
        label: 'Orders',
        data: ordersData,
        columns: orderColumns,
      },
    ];
    
    // Only show Orders tab if user has access
    return hasOrdersAccess ? allTabs : allTabs.filter(tab => tab.id !== 'orders');
  }, [hasOrdersAccess, productsData, ordersData]);
  
  return (
    <Table
      data={[]}
      columns={[]}
      showTabs={tableTabsFiltered.length > 1} // Only show tabs if more than one tab
      tableTabs={tableTabsFiltered}
    />
  );
};
```

### Lazy Loading Tab Data

You can implement lazy loading of tab data by combining both tab approaches:

```tsx
const MyTable = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [productsData, setProductsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data when tab changes
  useEffect(() => {
    setIsLoading(true);
    
    if (activeTab === 'products') {
      fetchProducts().then(data => {
        setProductsData(data);
        setIsLoading(false);
      });
    } else if (activeTab === 'orders') {
      fetchOrders().then(data => {
        setOrdersData(data);
        setIsLoading(false);
      });
    }
  }, [activeTab]);

  // Build tabs configuration
  const getTableTabs = () => [
    {
      id: 'products',
      label: 'Products',
      active: activeTab === 'products',
      data: productsData,
      columns: productColumns,
      title: 'Product Inventory',
    },
    {
      id: 'orders',
      label: 'Orders',
      active: activeTab === 'orders',
      data: ordersData,
      columns: orderColumns,
      title: 'Order History',
    },
  ];

  return (
    <Table
      data={[]} // Default data (won't be used)
      columns={[]} // Default columns (won't be used)
      showTabs={true}
      tableTabs={getTableTabs()}
      onTabChange={setActiveTab}
      state={isLoading ? 'loading' : 'normal'}
    />
  );
};
```

## Accessibility

The tabbed table implementation follows accessibility best practices:

- Tabs are fully keyboard navigable
- Proper ARIA attributes are used for screen readers
- Focus management is handled correctly when switching tabs
- Color contrast meets WCAG standards
- RTL languages are properly supported

## Browser Support

The Table component with enhanced tabs is tested and works in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Considerations

- When using many tabs with large datasets, consider lazy loading data for better performance
- The Table component is optimized to only re-render what changes when switching tabs
- The tab switching is debounced to prevent UI flicker during rapid switches
