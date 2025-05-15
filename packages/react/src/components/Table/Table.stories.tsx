import React, { useState } from 'react';
import { Table } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button } from '../Button';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
};

// Define product data type
interface Product {
  id: number;
  name: string;
  stockCollectors: number;
  stockWarehouse: number;
  actions?: React.ReactNode;
}

// Sample data for the table
const sampleProducts: Product[] = [
  {
    id: 34,
    name: "زيت حلوة 700 مل",
    stockCollectors: 325,
    stockWarehouse: 325,
  },
  {
    id: 2342,
    name: "زيت حلوة 700 مل",
    stockCollectors: 34,
    stockWarehouse: 34,
  },
  {
    id: 34,
    name: "كلوروكس منظف متعدد الاستخدامات 950 مل",
    stockCollectors: 523,
    stockWarehouse: 523,
  },
  {
    id: 234,
    name: "جيلي دريم",
    stockCollectors: 43,
    stockWarehouse: 43,
  },
  {
    id: 532,
    name: "كلوركس ابيض 1 لتر",
    stockCollectors: 53,
    stockWarehouse: 53,
  },
  {
    id: 32432,
    name: "زجاجة خل حبوبة 900 مل",
    stockCollectors: 32,
    stockWarehouse: 32,
  },
  {
    id: 324,
    name: "كلوروكس صابون سائل 200 مل",
    stockCollectors: 32,
    stockWarehouse: 32,
  },
  {
    id: 5323,
    name: "شاي ليبتون 20 فتلة",
    stockCollectors: 43,
    stockWarehouse: 43,
  },
  {
    id: 5342,
    name: "كلوروكس منظف متعدد الاستخدامات 950 مل",
    stockCollectors: 53,
    stockWarehouse: 53,
  },
  {
    id: 432,
    name: "جيلي دريم",
    stockCollectors: 534,
    stockWarehouse: 534,
  },
];

// Define columns for the table
const columns: ColumnDef<Product, any>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
  },
  {
    accessorKey: 'name',
    header: 'Item',
    size: 250,
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'stockCollectors',
    header: 'Dispatched to collectors',
    size: 150,
  },
  {
    accessorKey: 'stockWarehouse',
    header: 'Available at warehouse',
    size: 150,
  },
  {
    id: 'actions',
    header: '',
    cell: () => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          variant="plain"
          size="micro"
          tone="neutral"
          prefixIcon={<IconEdit size={16} />}
          onClick={(e) => {
            e.stopPropagation();
            alert('Edit clicked');
          }}
        />
        <Button
          variant="plain"
          size="micro"
          tone="critical"
          prefixIcon={<IconTrash size={16} />}
          onClick={(e) => {
            e.stopPropagation();
            alert('Delete clicked');
          }}
        />
      </div>
    ),
    meta: {
      headerClassName: 'actions-header',
      cellClassName: 'actions-cell',
    },
  },
];

// Basic table example
export const Default = () => {
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      showHeader={true}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with pagination
export const WithPagination = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      pagination={{
        pageIndex,
        pageSize,
        pageCount: Math.ceil(sampleProducts.length / pageSize),
        onPageChange: setPageIndex,
        onPageSizeChange: setPageSize,
        pageSizeOptions: [5, 10, 20, 50],
      }}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// NEW: Table with internal pagination (no pagination prop)
export const WithInternalPagination = () => {
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Internal Pagination Test"
      striped={true}
      gridCells={false}
      // No explicit pagination prop, will use internal state
      showPagination={true}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with tabs
export const WithTabs = () => {
  const [activeTab, setActiveTab] = useState('inventory');
  
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      showTabs={true}
      tabItems={[
        { id: 'inventory', label: 'Inventory Stock', active: activeTab === 'inventory' },
        { id: 'orders', label: 'Orders', active: activeTab === 'orders' },
      ]}
      onTabChange={setActiveTab}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with filters
export const WithFilters = () => {
  const [filters, setFilters] = useState<Record<string, any>>({
    status: 'active',
  });
  
  // Add pagination state for filters example
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      showFilterBar={true}
      activeFilters={filters}
      onFilterChange={setFilters}
      pagination={{
        pageIndex,
        pageSize,
        pageCount: Math.ceil(sampleProducts.length / pageSize),
        onPageChange: setPageIndex,
        onPageSizeChange: setPageSize,
        pageSizeOptions: [5, 10, 20, 50],
      }}
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
            { label: 'Food', value: 'food' },
            { label: 'Cleaning', value: 'cleaning' },
            { label: 'Drinks', value: 'drinks' },
          ],
        },
      }}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with grid cells
export const WithGridCells = () => {
  return (
    <Table
      data={sampleProducts}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={true}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// RTL example
export const RTLExample = () => {
  // We'll use a wrapper div with RTL direction to simulate RTL environment
  return (
    <div dir="rtl" style={{ width: '100%' }}>
      <Table
        data={sampleProducts}
        columns={columns}
        title="مخزون المنتجات"
        striped={true}
        gridCells={false}
        onRowClick={(row) => console.log('Row clicked:', row.original)}
      />
    </div>
  );
};

// Empty state
export const EmptyState = () => {
  return (
    <Table
      data={[]}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      state="empty"
      emptyMessage="There are no records to display."
    />
  );
};

// Loading state
export const LoadingState = () => {
  return (
    <Table
      data={[]}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      state="loading"
    />
  );
};

// Error state
export const ErrorState = () => {
  return (
    <Table
      data={[]}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      state="error"
      errorMessage="Error in data retrieving. Don't worry, it's our fault. Please try again later."
    />
  );
};

// Not found state
export const NotFoundState = () => {
  return (
    <Table
      data={[]}
      columns={columns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      state="notFound"
      notFoundMessage="No available results for 'product XYZ'. Try different item name or ID."
      searchQuery="product XYZ"
    />
  );
};
