import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DI2gBlDf.js";import{M as r,A as o,C as a}from"./index-BPXrzZIR.js";import{T as l,a as c,E as d,P as h}from"./Table.stories-BTT3Pgb7.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Popover-CgPZskr3.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-DUtlJRZ9.js";import"./index-DZCApzUK.js";import"./index-pvuVTQ3b.js";import"./index-BEsdyKtK.js";import"./index-Dh73ENUf.js";import"./index-B2x4RDPN.js";import"./IconChevronDown-BX0-z2hI.js";import"./createReactComponent-GuN14Mgc.js";import"./IconX-5Dn7YNlv.js";import"./Badge-4Le4p2ox.js";import"./TextInput-BC0Qh9vv.js";import"./IconSearch-vd-jVdmq.js";import"./Button-b6PCfnH9.js";import"./Checkbox-Dhj-7Gn_.js";import"./index-DZ2oWOeb.js";import"./IconCheck-PO1-3gxX.js";import"./Tabs-CVJSb24g.js";import"./index-Djcc9127.js";import"./Pagination-DyjDaROw.js";import"./IconTrash-BnTUPFNL.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(e.h1,{id:"table-component",children:"Table Component"}),`
`,n.jsx(e.p,{children:"The Table component is a powerful, feature-rich data display component built on TanStack Table, offering extensive customization options including sorting, filtering, pagination, and tabbed interfaces."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Tagaddod Table component provides an intuitive way to display structured data with advanced features such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Column sorting"}),`
`,n.jsx(e.li,{children:"Text search and filtering"}),`
`,n.jsx(e.li,{children:"Pagination"}),`
`,n.jsx(e.li,{children:"Tabbed interfaces"}),`
`,n.jsx(e.li,{children:"Customizable row styling"}),`
`,n.jsx(e.li,{children:"Export functionality"}),`
`,n.jsx(e.li,{children:"Error, loading, and empty states"}),`
`,n.jsx(e.li,{children:"RTL language support"}),`
`]}),`
`,n.jsx(e.p,{children:"This component is ideal for data-heavy applications where users need to view, sort, search, and interact with structured information."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Table } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Table } from '@tagaddod/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button } from '@tagaddod/react';

// Define column structure
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
  },
  {
    accessorKey: 'name',
    header: 'Item',
    size: 250,
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
  },
];

// Sample data
const data = [
  {
    id: 34,
    name: "زيت حلوة 700 مل",
    stockCollectors: 325,
    stockWarehouse: 325,
  },
  // Additional rows...
];

// Render the table
<Table
  data={data}
  columns={columns}
  title="Inventory Stock"
  striped={true}
  gridCells={false}
  showHeader={true}
  onRowClick={(row) => console.log('Row clicked:', row.original)}
/>
`})}),`
`,n.jsx(e.h2,{id:"interactive-playground",children:"Interactive Playground"}),`
`,n.jsx(e.p,{children:"Try out all the Table component features in a single place:"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.p,{children:"Use the controls panel below to:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Toggle features on/off (search, filters, pagination, tabs, etc.)"}),`
`,n.jsx(e.li,{children:"Switch between different table states (normal, error, empty, etc.)"}),`
`,n.jsx(e.li,{children:"Change direction (LTR/RTL)"}),`
`,n.jsx(e.li,{children:"Configure tab behavior"}),`
`,n.jsx(e.li,{children:"Modify display options"}),`
`]}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsx(e.h3,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:"Add pagination to control the number of records displayed per page."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';

const [pageIndex, setPageIndex] = useState(0);
const [pageSize, setPageSize] = useState(5);

<Table
  data={data}
  columns={columns}
  title="Inventory Stock"
  pagination={{
    pageIndex,
    pageSize,
    pageCount: Math.ceil(data.length / pageSize),
    onPageChange: setPageIndex,
    onPageSizeChange: setPageSize,
    pageSizeOptions: [5, 10, 20, 50],
  }}
/>
`})}),`
`,n.jsx(e.h3,{id:"enhanced-search-and-filters",children:"Enhanced Search and Filters"}),`
`,n.jsx(e.p,{children:"Enable search functionality and filters for more targeted data exploration."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [searchQuery, setSearchQuery] = useState('');
const [filters, setFilters] = useState({
  status: 'active',
});
const [isFilterBarVisible, setIsFilterBarVisible] = useState(true);

<Table
  data={data}
  columns={columns}
  title="Inventory Stock"
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
/>
`})}),`
`,n.jsx(e.h3,{id:"table-with-tabs",children:"Table with Tabs"}),`
`,n.jsx(e.p,{children:"Create tabbed interfaces to organize different data sets."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [activeTab, setActiveTab] = useState('inventory');

<Table
  data={data}
  columns={columns}
  title="Inventory Management"
  showTabs={true}
  tabItems={[
    { id: 'inventory', label: 'Inventory Stock', active: activeTab === 'inventory', badge: productData.length },
    { id: 'orders', label: 'Orders', active: activeTab === 'orders', badge: orderData.length },
  ]}
  onTabChange={(tabId) => {
    setActiveTab(tabId);
    console.log('Tab changed to:', tabId);
  }}
/>
`})}),`
`,n.jsx(e.h3,{id:"enhanced-tabs-with-automatic-data-switching",children:"Enhanced Tabs with Automatic Data Switching"}),`
`,n.jsxs(e.p,{children:["For more complex tabbed interfaces, use ",n.jsx(e.code,{children:"tableTabs"})," to define complete configurations for each tab."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={[]} // Default data (not used with tableTabs)
  columns={[]} // Default columns (not used with tableTabs)
  title="Inventory Management"
  showTabs={true}
  tableTabs={[
    {
      id: 'inventory',
      label: 'Inventory Stock',
      active: true, // This tab will be active by default
      badge: productData.length,
      data: productData,
      columns: productColumns,
      title: 'Inventory Stock',
    },
    {
      id: 'orders',
      label: 'Orders',
      badge: orderData.length,
      data: orderData,
      columns: orderColumns,
      title: 'Order History',
    },
  ]}
  onRowClick={(row) => console.log('Row clicked:', row.original)}
/>
`})}),`
`,n.jsx(e.h3,{id:"grid-cells",children:"Grid Cells"}),`
`,n.jsx(e.p,{children:"Enable grid cells to show borders between cells for better data visualization."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={data}
  columns={columns}
  title="Inventory Stock"
  striped={true}
  gridCells={true}
/>
`})}),`
`,n.jsx(e.h2,{id:"table-states",children:"Table States"}),`
`,n.jsx(e.h3,{id:"empty-state",children:"Empty State"}),`
`,n.jsx(e.p,{children:"Show a message when there's no data to display."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={[]}
  columns={columns}
  title="Inventory Stock"
  state="empty"
  emptyMessage="There are no records to display."
/>
`})}),`
`,n.jsx(e.h3,{id:"loading-state",children:"Loading State"}),`
`,n.jsx(e.p,{children:"Display a loading indicator while data is being fetched."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={[]}
  columns={columns}
  title="Inventory Stock"
  state="loading"
/>
`})}),`
`,n.jsx(e.h3,{id:"error-state",children:"Error State"}),`
`,n.jsx(e.p,{children:"Show an error message when data retrieval fails."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={[]}
  columns={columns}
  title="Inventory Stock"
  state="error"
  errorMessage="Error in data retrieving. Don't worry, it's our fault. Please try again later."
/>
`})}),`
`,n.jsx(e.h3,{id:"not-found-state",children:"Not Found State"}),`
`,n.jsx(e.p,{children:"Indicate when a search yields no results."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={[]}
  columns={columns}
  title="Inventory Stock"
  state="notFound"
  notFoundMessage="No available results for 'product XYZ'. Try different item name or ID."
  searchQuery="product XYZ"
/>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The Table component properly handles Right-to-Left (RTL) languages automatically."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div dir="rtl" style={{ width: '100%' }}>
  <Table
    data={data}
    columns={columns}
    title="مخزون المنتجات"
    striped={true}
    gridCells={false}
  />
</div>
`})}),`
`,n.jsx(e.h2,{id:"column-configuration",children:"Column Configuration"}),`
`,n.jsxs(e.p,{children:["The Table component accepts columns defined according to TanStack Table's ",n.jsx(e.code,{children:"ColumnDef"})," interface, with additional Tagaddod-specific properties for styling."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const columns = [
  // Standard column with accessor and header
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
  },
  
  // Column with custom cell rendering
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
  
  // Column with custom styling via meta
  {
    id: 'actions',
    header: '',
    cell: () => (/* Action buttons */),
    meta: {
      headerClassName: 'custom-header',
      cellClassName: 'custom-cell',
      width: '100px',
    },
  },
];
`})}),`
`,n.jsx(e.h2,{id:"advanced-usage",children:"Advanced Usage"}),`
`,n.jsx(e.h3,{id:"controlled-table",children:"Controlled Table"}),`
`,n.jsx(e.p,{children:"Full control of table state for advanced integration needs."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [sorting, setSorting] = useState([]);
const [globalFilter, setGlobalFilter] = useState('');
const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 10,
});
const [filters, setFilters] = useState({});

<Table
  data={data}
  columns={columns}
  title="Advanced Table"
  searchQuery={globalFilter}
  onSearchChange={setGlobalFilter}
  pagination={{
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    onPageChange: (pageIndex) => setPagination(prev => ({ ...prev, pageIndex })),
    onPageSizeChange: (pageSize) => setPagination(prev => ({ ...prev, pageSize })),
  }}
  defaultSorting={sorting}
  activeFilters={filters}
  onFilterChange={setFilters}
/>
`})}),`
`,n.jsx(e.h3,{id:"server-side-data",children:"Server-Side Data"}),`
`,n.jsx(e.p,{children:"For tables with server-side pagination, sorting, and filtering."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [data, setData] = useState([]);
const [totalItems, setTotalItems] = useState(0);
const [loading, setLoading] = useState(false);
const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 10,
});
const [sorting, setSorting] = useState([]);
const [filters, setFilters] = useState({});

// Fetch data on state changes
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.fetchData({
        page: pagination.pageIndex,
        limit: pagination.pageSize,
        sort: sorting.length > 0 ? { 
          field: sorting[0].id, 
          direction: sorting[0].desc ? 'desc' : 'asc' 
        } : undefined,
        filters,
      });
      
      setData(response.data);
      setTotalItems(response.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, [pagination, sorting, filters]);

<Table
  data={data}
  columns={columns}
  title="Server-Side Table"
  state={loading ? 'loading' : 'normal'}
  pagination={{
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    pageCount: Math.ceil(totalItems / pagination.pageSize),
    onPageChange: (pageIndex) => setPagination(prev => ({ ...prev, pageIndex })),
    onPageSizeChange: (pageSize) => setPagination(prev => ({ ...prev, pageSize })),
  }}
  defaultSorting={sorting}
  activeFilters={filters}
  onFilterChange={setFilters}
/>
`})}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"data-grid-with-row-actions",children:"Data Grid with Row Actions"}),`
`,n.jsx(e.p,{children:"Table with row actions for data management operations."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={users}
  columns={[
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'role', header: 'Role' },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant="plain"
            size="micro"
            tone="neutral"
            prefixIcon={<IconEdit size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              editUser(row.original);
            }}
          />
          <Button
            variant="plain"
            size="micro"
            tone="critical"
            prefixIcon={<IconTrash size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              deleteUser(row.original.id);
            }}
          />
        </div>
      ),
    },
  ]}
  onRowClick={(row) => viewUserDetails(row.original.id)}
/>
`})}),`
`,n.jsx(e.h3,{id:"dashboard-analytics-table",children:"Dashboard Analytics Table"}),`
`,n.jsx(e.p,{children:"Display analytical data with metrics and visual indicators."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Table
  data={analyticsData}
  columns={[
    { accessorKey: 'metric', header: 'Metric' },
    { 
      accessorKey: 'value', 
      header: 'Value',
      cell: ({ row }) => formatNumber(row.original.value),
    },
    { 
      accessorKey: 'change', 
      header: 'Change',
      cell: ({ getValue }) => {
        const change = getValue();
        return (
          <div style={{ 
            color: change > 0 ? 'var(--t-color-text-success)' : 'var(--t-color-text-critical)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
          </div>
        );
      },
    },
    { 
      id: 'chart',
      header: 'Trend',
      cell: ({ row }) => <SparklineChart data={row.original.trend} />,
    },
  ]}
  title="Performance Metrics"
  gridCells={true}
/>
`})}),`
`,n.jsx(e.h3,{id:"record-selection-table",children:"Record Selection Table"}),`
`,n.jsx(e.p,{children:"Table with row selection for batch operations."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [selectedRows, setSelectedRows] = useState([]);

// Define selection column
const selectionColumn = {
  id: 'selection',
  header: ({ table }) => (
    <input
      type="checkbox"
      checked={table.getIsAllRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <input
      type="checkbox"
      checked={row.getIsSelected()}
      onChange={row.getToggleSelectedHandler()}
      onClick={(e) => e.stopPropagation()}
    />
  ),
  size: 40,
};

// Columns with selection
const columnsWithSelection = [selectionColumn, ...columns];

<div>
  <div style={{ marginBottom: '16px' }}>
    <Button 
      disabled={selectedRows.length === 0}
      onClick={() => handleBatchAction(selectedRows)}
    >
      Process Selected ({selectedRows.length})
    </Button>
  </div>
  
  <Table
    data={data}
    columns={columnsWithSelection}
    title="Select Records"
    onRowSelectionChange={setSelectedRows}
  />
</div>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Table component is built with accessibility in mind:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Semantic HTML table structure (",n.jsx(e.code,{children:"<table>"}),", ",n.jsx(e.code,{children:"<thead>"}),", ",n.jsx(e.code,{children:"<tbody>"}),", ",n.jsx(e.code,{children:"<tr>"}),", ",n.jsx(e.code,{children:"<th>"}),", ",n.jsx(e.code,{children:"<td>"}),") for optimal screen reader compatibility"]}),`
`,n.jsx(e.li,{children:"Appropriate ARIA attributes for sorting, filtering, and pagination"}),`
`,n.jsx(e.li,{children:"Keyboard navigation support for all interactive elements"}),`
`,n.jsx(e.li,{children:"Focus management for row and cell interactions"}),`
`,n.jsx(e.li,{children:"Proper contrast ratios for all visual states"}),`
`,n.jsx(e.li,{children:"RTL language support with appropriate text alignment and directional changes"}),`
`,n.jsx(e.li,{children:"Visible focus indicators for keyboard users"}),`
`,n.jsx(e.li,{children:"Responsive design that works on various screen sizes and devices"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Table component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-font-family-primary"}),` | Text font |
| `,n.jsx(e.code,{children:"--t-font-size-*"}),` | Font sizes for text elements |
| `,n.jsx(e.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,n.jsx(e.code,{children:"--t-color-text-*"}),` | Text colors |
| `,n.jsx(e.code,{children:"--t-color-border-*"}),` | Border colors |
| `,n.jsx(e.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-fill-*"}),` | Highlight colors |
| `,n.jsx(e.code,{children:"--t-border-radius-*"}),` | Border radius |
| `,n.jsx(e.code,{children:"--t-shadow-*"}),` | Box shadows |
| `,n.jsx(e.code,{children:"--t-duration-*"}),` | Animation duration |
| `,n.jsx(e.code,{children:"--t-line-height-*"})," | Line height for different languages |"]}),`
`,n.jsx(e.h3,{id:"technical-architecture",children:"Technical Architecture"}),`
`,n.jsx(e.p,{children:"The Table component is built on TanStack Table and includes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Data Processing"}),": Core row model, filtering, sorting, and pagination"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"State Management"}),": Component-level React state with controlled inputs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Event Handling"}),": Row and cell click handlers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),": Accessible keyboard controls"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Rendering Optimization"}),": Efficient rendering with React memoization"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styling"}),": CSS Modules with proper scoping"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Design"}),": Mobile-friendly layout and styling"]}),`
`]}),`
`,n.jsx(e.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,n.jsx(e.p,{children:"For optimal performance with large datasets:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use server-side pagination for tables with more than 1,000 rows"}),`
`,n.jsx(e.li,{children:"Implement server-side sorting and filtering for tables with complex data structures"}),`
`,n.jsx(e.li,{children:"Consider virtualization for extremely large datasets"}),`
`,n.jsx(e.li,{children:"Optimize column rendering by minimizing complex cell renderers"}),`
`,n.jsx(e.li,{children:"Use memoization for expensive cell calculations"}),`
`,n.jsxs(e.li,{children:["Enable the ",n.jsx(e.code,{children:"manualPagination"})," option for custom data fetching"]}),`
`]}),`
`,n.jsx(e.h3,{id:"table-integration-with-other-components",children:"Table Integration with Other Components"}),`
`,n.jsx(e.p,{children:"The Table component seamlessly integrates with other Tagaddod Design System components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pagination"}),": For page navigation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tabs"}),": For tabbed data views"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": For action buttons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TextInput"}),": For search functionality"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FilterItem"}),": For applying data filters"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"}),": For count indicators"]}),`
`]}),`
`,n.jsx(e.h2,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Table component is compatible with all modern browsers:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome (latest)"}),`
`,n.jsx(e.li,{children:"Firefox (latest)"}),`
`,n.jsx(e.li,{children:"Safari (latest)"}),`
`,n.jsx(e.li,{children:"Edge (latest)"}),`
`,n.jsx(e.li,{children:"Mobile browsers (iOS Safari, Android Chrome)"}),`
`]}),`
`,n.jsx(e.p,{children:"RTL language support works across all supported browsers."})]})}function W(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{W as default};
