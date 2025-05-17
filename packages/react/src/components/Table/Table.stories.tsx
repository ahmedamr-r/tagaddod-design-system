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

// Define order data type
interface Order {
  id: number;
  customer: string;
  date: string;
  status: string;
  total: number;
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

// Sample data for orders
const sampleOrders: Order[] = [
  {
    id: 1001,
    customer: "John Doe",
    date: "2025-05-10",
    status: "Completed",
    total: 359.98,
  },
  {
    id: 1002,
    customer: "Jane Smith",
    date: "2025-05-11",
    status: "Pending",
    total: 499.99,
  },
  {
    id: 1003,
    customer: "Bob Johnson",
    date: "2025-05-12",
    status: "Processing",
    total: 129.99,
  },
  {
    id: 1004,
    customer: "Alice Brown",
    date: "2025-05-12",
    status: "Completed",
    total: 79.98,
  },
  {
    id: 1005,
    customer: "Charlie Wilson",
    date: "2025-05-13",
    status: "Pending",
    total: 259.97,
  },
  {
    id: 1006,
    customer: "Eve Davis",
    date: "2025-05-14",
    status: "Completed",
    total: 899.99,
  }
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

// Define order columns
const orderColumns: ColumnDef<Order, any>[] = [
  {
    accessorKey: 'id',
    header: 'Order #',
    size: 100,
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    size: 200,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    size: 150,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 150,
    cell: info => (
      <span 
        style={{ 
          color: 
            info.getValue() === 'Completed' ? 'var(--t-color-text-success)' :
            info.getValue() === 'Pending' ? 'var(--t-color-text-warning)' :
            'var(--t-color-text-info)'
        }}
      >
        {info.getValue()}
      </span>
    ),
  },
  {
    accessorKey: 'total',
    header: 'Total',
    size: 150,
    cell: info => `$${info.getValue().toFixed(2)}`,
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
      columns={productColumns}
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
      columns={productColumns}
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

// Table with enhanced search and filters
export const WithEnhancedSearchAndFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, any>>({
    status: 'active',
  });
  const [isFilterBarVisible, setIsFilterBarVisible] = useState(true);
  
  // Add pagination state
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  
  return (
    <Table
      data={sampleProducts}
      columns={productColumns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      showSearch={true}
      showFilters={true}
      showFilterBar={isFilterBarVisible}
      showExport={true}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      activeFilters={filters}
      onFilterChange={setFilters}
      onFilterClick={() => setIsFilterBarVisible(!isFilterBarVisible)}
      onExport={() => alert('Export clicked')}
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

// Table with tabs (simple configuration)
export const WithTabs = () => {
  const [activeTab, setActiveTab] = useState('inventory');
  
  return (
    <Table
      data={sampleProducts}
      columns={productColumns}
      title="Inventory Management"
      striped={true}
      gridCells={false}
      showTabs={true}
      tabItems={[
        { id: 'inventory', label: 'Inventory Stock', active: activeTab === 'inventory', badge: sampleProducts.length },
        { id: 'orders', label: 'Orders', active: activeTab === 'orders', badge: sampleOrders.length },
      ]}
      onTabChange={(tabId) => {
        setActiveTab(tabId);
        console.log('Tab changed to:', tabId);
      }}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with tabs (simple configuration) + manual data switching
export const WithTabsAndManualDataSwitch = () => {
  const [activeTab, setActiveTab] = useState('inventory');
  
  return (
    <Table
      data={activeTab === 'inventory' ? sampleProducts : sampleOrders}
      columns={activeTab === 'inventory' ? productColumns : orderColumns}
      title={activeTab === 'inventory' ? 'Inventory Stock' : 'Order History'}
      striped={true}
      gridCells={false}
      showTabs={true}
      tabItems={[
        { id: 'inventory', label: 'Inventory Stock', active: activeTab === 'inventory', badge: sampleProducts.length },
        { id: 'orders', label: 'Orders', active: activeTab === 'orders', badge: sampleOrders.length },
      ]}
      onTabChange={(tabId) => {
        setActiveTab(tabId);
        console.log('Tab changed to:', tabId);
      }}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// NEW: Table with enhanced tabs configuration
export const WithEnhancedTabs = () => {
  // Enhanced tabs automatically handle the tab switching
  return (
    <Table
      data={[]} // Default data (not used with tableTabs)
      columns={[]} // Default columns (not used with tableTabs)
      title="Inventory Management" // Default title
      striped={true}
      gridCells={false}
      showTabs={true}
      tableTabs={[
        {
          id: 'inventory',
          label: 'Inventory Stock',
          active: true, // This tab will be active by default
          badge: sampleProducts.length,
          data: sampleProducts,
          columns: productColumns,
          title: 'Inventory Stock',
        },
        {
          id: 'orders',
          label: 'Orders',
          badge: sampleOrders.length,
          data: sampleOrders,
          columns: orderColumns,
          title: 'Order History',
        },
      ]}
      onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// NEW: Table with enhanced tabs with tab-specific pagination
export const WithEnhancedTabsAndPagination = () => {
  // State for product tab pagination
  const [productPageIndex, setProductPageIndex] = useState(0);
  const [productPageSize, setProductPageSize] = useState(5);
  
  // State for order tab pagination
  const [orderPageIndex, setOrderPageIndex] = useState(0);
  const [orderPageSize, setOrderPageSize] = useState(5);
  
  return (
    <Table
      data={[]} // Default data (not used with tableTabs)
      columns={[]} // Default columns (not used with tableTabs)
      title="Inventory Management" // Default title
      striped={true}
      gridCells={false}
      showTabs={true}
      tableTabs={[
        {
          id: 'inventory',
          label: 'Inventory Stock',
          active: true,
          badge: sampleProducts.length,
          data: sampleProducts,
          columns: productColumns,
          title: 'Inventory Stock',
          pagination: {
            pageIndex: productPageIndex,
            pageSize: productPageSize,
            pageCount: Math.ceil(sampleProducts.length / productPageSize),
            onPageChange: setProductPageIndex,
            onPageSizeChange: setProductPageSize,
            pageSizeOptions: [5, 10, 20, 50],
          },
        },
        {
          id: 'orders',
          label: 'Orders',
          badge: sampleOrders.length,
          data: sampleOrders,
          columns: orderColumns,
          title: 'Order History',
          pagination: {
            pageIndex: orderPageIndex,
            pageSize: orderPageSize,
            pageCount: Math.ceil(sampleOrders.length / orderPageSize),
            onPageChange: setOrderPageIndex,
            onPageSizeChange: setOrderPageSize,
            pageSizeOptions: [5, 10, 20, 50],
          },
        },
      ]}
      onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
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
      columns={productColumns}
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

// Table with export button
export const WithExport = () => {
  return (
    <Table
      data={sampleProducts}
      columns={productColumns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      showExport={true}
      onExport={() => alert('Export CSV clicked')}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};

// Table with grid cells
export const WithGridCells = () => {
  return (
    <Table
      data={sampleProducts}
      columns={productColumns}
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
        columns={productColumns}
        title="مخزون المنتجات"
        striped={true}
        gridCells={false}
        onRowClick={(row) => console.log('Row clicked:', row.original)}
      />
    </div>
  );
};

// NEW: RTL with Enhanced Tabs
export const RTLWithEnhancedTabs = () => {
  return (
    <div dir="rtl" style={{ width: '100%' }}>
      <Table
        data={[]}
        columns={[]}
        striped={true}
        gridCells={false}
        showTabs={true}
        tableTabs={[
          {
            id: 'inventory',
            label: 'المخزون',
            active: true,
            badge: sampleProducts.length,
            data: sampleProducts,
            columns: productColumns,
            title: 'مخزون المنتجات',
          },
          {
            id: 'orders',
            label: 'الطلبات',
            badge: sampleOrders.length,
            data: sampleOrders,
            columns: orderColumns,
            title: 'سجل الطلبات',
          },
        ]}
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
      columns={productColumns}
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
      columns={productColumns}
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
      columns={productColumns}
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
      columns={productColumns}
      title="Inventory Stock"
      striped={true}
      gridCells={false}
      state="notFound"
      notFoundMessage="No available results for 'product XYZ'. Try different item name or ID."
      searchQuery="product XYZ"
    />
  );
};

// NEW: Hidden Tabs
export const WithHiddenTabs = () => {
  return (
    <Table
      data={[]}
      columns={[]}
      title="Inventory Management"
      striped={true}
      gridCells={false}
      showTabs={false} // Explicitly hide tabs but still use tableTabs config
      tableTabs={[
        {
          id: 'inventory',
          label: 'Inventory Stock',
          active: true,
          data: sampleProducts,
          columns: productColumns,
          title: 'Inventory Stock',
        },
        {
          id: 'orders',
          label: 'Orders',
          data: sampleOrders,
          columns: orderColumns,
          title: 'Order History',
        },
      ]}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  );
};
