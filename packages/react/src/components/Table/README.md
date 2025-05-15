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

See the `TableProps` type for a complete list of available props.
