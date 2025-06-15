import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button } from '../Button';

// Define product data type
interface Product {
  id: number;
  name: string;
  stockCollectors: number;
  stockWarehouse: number;
  actions?: React.ReactNode;
}


// Sample data for products
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


// Define product columns
const productColumns: ColumnDef<Product, any>[] = [
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


const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A powerful data table component with sorting, filtering, pagination, and more.'
      }
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed in the header',
    },
    data: {
      control: false,
      description: 'Data array to display',
    },
    columns: {
      control: false,
      description: 'Column definitions',
    },
    striped: {
      control: 'boolean',
      description: 'Whether to show striped rows',
      defaultValue: true,
    },
    gridCells: {
      control: 'boolean',
      description: 'Whether to show grid cells with borders',
      defaultValue: false,
    },
    showHeader: {
      control: 'boolean',
      description: 'Whether to show the header section',
      defaultValue: true,
    },
    showTabs: {
      control: 'boolean',
      description: 'Whether to show the table tabs',
      defaultValue: false,
    },
    showPagination: {
      control: 'boolean',
      description: 'Whether to show the pagination component',
      defaultValue: true,
    },
    showSearch: {
      control: 'boolean',
      description: 'Whether to show the search field',
      defaultValue: true,
    },
    showFilters: {
      control: 'boolean',
      description: 'Whether to show the filters button',
      defaultValue: true,
    },
    showFilterBar: {
      control: 'boolean',
      description: 'Whether to show the filter bar',
      defaultValue: false,
    },
    showExport: {
      control: 'boolean',
      description: 'Whether to show the export button',
      defaultValue: false,
    },
    state: {
      control: 'select',
      options: ['normal', 'error', 'empty', 'notFound', 'loading'],
      description: 'Special display state',
      defaultValue: 'normal',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (when state is "error")',
      if: { arg: 'state', eq: 'error' },
    },
    emptyMessage: {
      control: 'text',
      description: 'Empty state message (when state is "empty")',
      if: { arg: 'state', eq: 'empty' },
    },
    notFoundMessage: {
      control: 'text',
      description: 'Not found message (when state is "notFound")',
      if: { arg: 'state', eq: 'notFound' },
    },
    badge: {
      control: 'number',
      description: 'Number badge next to title',
    },
  },
  args: {
    title: 'Inventory Stock',
    striped: true,
    gridCells: false,
    showHeader: true,
    showTabs: false,
    showPagination: true,
    showSearch: true,
    showFilters: true,
    showFilterBar: false,
    showExport: false,
    state: 'normal',
    errorMessage: 'Error in data retrieving. Don\'t worry, it\'s our fault. Please try again later.',
    emptyMessage: 'There are no records to display.',
    notFoundMessage: 'No available results for the current search. Try different criteria.',
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground story
export const Playground: Story = {
  name: 'Table Playground',
  render: (args) => {
    // React state hooks
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<Record<string, any>>({
      status: 'active',
    });
    
    // Pagination state
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    
    // Filter options
    const filterOptions = {
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
    };
    
    // Prepare pagination config
    const paginationConfig = {
      pageIndex,
      pageSize,
      pageCount: Math.ceil(sampleProducts.length / pageSize),
      onPageChange: setPageIndex,
      onPageSizeChange: setPageSize,
      pageSizeOptions: [5, 10, 20, 50],
    };
    
    return (
      <Table
        data={sampleProducts}
        columns={productColumns}
        title={args.title}
        striped={args.striped}
        gridCells={args.gridCells}
        showHeader={args.showHeader}
        showTabs={args.showTabs}
        showPagination={args.showPagination}
        showSearch={args.showSearch}
        showFilters={args.showFilters}
        showFilterBar={args.showFilterBar}
        showExport={args.showExport}
        state={args.state}
        errorMessage={args.errorMessage}
        emptyMessage={args.emptyMessage}
        notFoundMessage={args.notFoundMessage}
        badge={args.badge}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilters={filters}
        onFilterChange={setFilters}
        filterOptions={filterOptions}
        onExport={() => alert('Export clicked')}
        onRowClick={(row) => console.log('Row clicked:', row.original)}
        pagination={paginationConfig}
      />
    );
  }
};

// Documentation example showing the basic table with just enough props for clarity
export const Example: Story = {
  name: 'Basic Example',
  render: () => (
    <Table
      data={sampleProducts}
      columns={productColumns}
      title="Inventory Stock"
      striped={true}
      showHeader={true}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  )
};
