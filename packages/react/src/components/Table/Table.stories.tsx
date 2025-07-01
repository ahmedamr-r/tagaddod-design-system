import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconTrash, IconFilter, IconAlertTriangle } from '@tabler/icons-react';
import { Button } from '../Button';
import { QuickColumns, createCellColumn, createInteractiveCellColumn, createActionCellColumn } from './TableCellHelpers';

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
    ...QuickColumns.number('id', 'ID'),
    size: 80,
  },
  {
    ...QuickColumns.text('name', 'Item'),
    size: 250,
  },
  {
    ...QuickColumns.number('stockCollectors', 'Dispatched to collectors'),
    size: 150,
  },
  {
    ...QuickColumns.number('stockWarehouse', 'Available at warehouse'),
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
      description: 'Whether to show striped rows (use only for non-interactive data)',
      defaultValue: false,
    },
    disableRowHover: {
      control: 'boolean',
      description: 'Whether to disable row hover effects (for static/non-interactive tables)',
      defaultValue: false,
    },
    enableColumnResizing: {
      control: 'boolean',
      description: 'Whether to enable column resizing with drag handles',
      defaultValue: false,
    },
    enableColumnOrdering: {
      control: 'boolean',
      description: 'Whether to enable column ordering with drag and drop',
      defaultValue: false,
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
    notFoundSubtitle: {
      control: 'text',
      description: 'Not found subtitle message (when state is "notFound")',
      if: { arg: 'state', eq: 'notFound' },
    },
    badge: {
      control: 'number',
      description: 'Number badge next to title',
    },
  },
  args: {
    title: 'Inventory Stock',
    striped: false,
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
    notFoundMessage: 'No available results for "searched item"',
    notFoundSubtitle: 'Try using different search terms or check your spelling',
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
      striped={false}
      showHeader={true}
      onRowClick={(row) => console.log('Row clicked:', row.original)}
    />
  )
};

// Cell Variants Showcase - SalesData interface defined in AdvancedFilters story


export const CellVariants: Story = {
  name: 'Sales Variant Showcase',
  render: () => {
    // Enhanced sample data for comprehensive grid showcase
    const textVariantsData = [
      { id: 1, singleLine: 'Ahmed Al-Rashid', multiLine: 'Premium customer\nwith excellent\nrating history', truncated: 'This is a very long text that will be truncated with ellipsis when it overflows the cell width and shows tooltip on hover', withBadge: { text: 'Ahmed Al-Rashid', badge: 'VIP', badgeVariant: 'success' as const } },
      { id: 2, singleLine: 'Fatima Hassan', multiLine: 'Regular customer\nsteady orders', truncated: 'Another long description that demonstrates the truncation feature with tooltip', withBadge: { text: 'Fatima Hassan', badge: 'Premium', badgeVariant: 'info' as const } },
      { id: 3, singleLine: 'Omar Khalil', multiLine: 'New customer\nexploring catalog', truncated: 'Short text', withBadge: { text: 'Omar Khalil', badge: 'Trial', badgeVariant: 'warning' as const } }
    ];

    const badgeVariantsData = [
      { id: 1, single: { text: 'Active', tone: 'success' as const }, multiple: [{ text: 'VIP', tone: 'success' as const }, { text: 'Premium', tone: 'info' as const }] },
      { id: 2, single: { text: 'Pending', tone: 'warning' as const }, multiple: [{ text: 'Regular', tone: 'info' as const }] },
      { id: 3, single: { text: 'Inactive', tone: 'critical' as const }, multiple: [{ text: 'New', tone: 'warning' as const }, { text: 'Trial', tone: 'info' as const }] }
    ];

    const interactiveVariantsData = [
      { id: 1, checkbox: true, select: 'high', radioButton: 'option1', textField: 'Edit me', number: 2450.75, complexNumber: { primary: 100, secondary: 50 } },
      { id: 2, checkbox: false, select: 'medium', radioButton: 'option2', textField: 'Custom notes', number: 1200.00, complexNumber: { primary: 250, secondary: 30 } },
      { id: 3, checkbox: true, select: 'low', radioButton: 'option3', textField: 'Additional info', number: 350.50, complexNumber: { primary: 75 } }
    ];

    // Enhanced cell variants data showcasing the new Figma designs
    const enhancedVariantsData = [
      { 
        id: 1, 
        textWithBadge: { 
          text: 'Olivia Rhye', 
          badge: 'Low', 
          badgeVariant: 'warning' as const,
          prefixIcon: <IconAlertTriangle size={16} />
        },
        actionIcons: 'actions',
        updatedNumbers: { primary: 100, secondary: 50 }
      },
      { 
        id: 2, 
        textWithBadge: { 
          text: 'Ahmed Al-Rashid', 
          badge: 'High', 
          badgeVariant: 'critical' as const
        },
        actionIcons: 'actions',
        updatedNumbers: { primary: 250, secondary: 30 }
      },
      { 
        id: 3, 
        textWithBadge: { 
          text: 'Fatima Hassan', 
          badge: 'Medium', 
          badgeVariant: 'info' as const
        },
        actionIcons: 'actions',
        updatedNumbers: { primary: 75 }
      }
    ];

    const [textData] = useState(textVariantsData);
    const [badgeData] = useState(badgeVariantsData);
    const [interactiveData, setInteractiveData] = useState(interactiveVariantsData);
    const [enhancedData] = useState(enhancedVariantsData);

    // Handlers for interactive cells
    const handleCheckboxChange = (checked: boolean, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, checkbox: checked } : item
        )
      );
    };

    const handleSelectChange = (value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, select: value } : item
        )
      );
    };

    const handleRadioChange = (value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, radioButton: value } : item
        )
      );
    };

    const handleTextFieldChange = (value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, textField: value } : item
        )
      );
    };

         const handleActionClick = (row: any) => {
       alert(`Action clicked for ID: ${row.id}`);
     };

     const handleEditAction = (row: any) => {
       alert(`Edit clicked for: ${row.id}`);
     };

     const handleDeleteAction = (row: any) => {
       alert(`Delete clicked for: ${row.id}`);
     };

     // Column definitions for each grid
    const textVariantColumns: ColumnDef<any, any>[] = [
      { ...createCellColumn('singleLine', 'Single Line Text', 'textSingleLine'), size: 140 },
      { ...createCellColumn('multiLine', 'Multi-line Text', 'textMultiline'), size: 140 },
      { ...createCellColumn('truncated', 'Truncated Text', 'textTruncated'), size: 140 },
      { ...createCellColumn('withBadge', 'Text + Badge', 'textSingleLineWithBadge'), size: 140 }
    ];

    const badgeVariantColumns: ColumnDef<any, any>[] = [
      { ...createCellColumn('single', 'Single Badge', 'badge'), size: 120 },
      { ...createCellColumn('multiple', 'Multiple Badges', 'badgeMultiple'), size: 200 }
    ];

    const interactiveVariantColumns: ColumnDef<any, any>[] = [
      { ...createInteractiveCellColumn('checkbox', 'Checkbox', 'checkbox', handleCheckboxChange), size: 90 },
      { ...createInteractiveCellColumn('select', 'Select', 'select', handleSelectChange, {
        cellProps: { 
          options: [
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' }
          ]
        }
      }), size: 110 },
      { ...createInteractiveCellColumn('radioButton', 'Radio Button', 'radioButton', handleRadioChange, {
        cellProps: { 
          options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]
        }
      }), size: 130 },
             { ...createInteractiveCellColumn('textField', 'Text Field', 'textField', handleTextFieldChange, {
         cellProps: { placeholder: 'Enter text...' }
       }), size: 130 },
       { ...createCellColumn('number', 'Formatted Number', 'updatedNumber'), size: 130 },
       { ...createCellColumn('complexNumber', 'Complex Number', 'updatedNumber'), size: 130 },
       { ...createActionCellColumn('Actions', 'actionIcon', handleActionClick), size: 80 }
     ];

     // Enhanced variants columns for Figma designs
     const enhancedVariantColumns: ColumnDef<any, any>[] = [
       { ...createCellColumn('textWithBadge', 'Text + Badge (Enhanced)', 'textSingleLineWithBadge'), size: 200 },
       { 
         id: 'enhancedActions',
         header: 'Actions (Enhanced)',
         cell: ({ row }) => {
           const actions = [
             { icon: <IconEdit size={16} />, onClick: handleEditAction, label: 'Edit' },
             { icon: <IconTrash size={16} />, onClick: handleDeleteAction, label: 'Delete' }
           ];
           return (
             <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-100)' }}>
               {actions.map((action, index) => (
                 <Button
                   key={index}
                   onClick={(e) => {
                     e.stopPropagation();
                     action.onClick(row.original);
                   }}
                   variant="plain"
                   size="micro"
                   tone="neutral"
                   prefixIcon={action.icon}
                   title={action.label}
                 />
               ))}
             </div>
           );
         },
         size: 120 
       },
       { ...createCellColumn('updatedNumbers', 'Updated Numbers', 'updatedNumber'), size: 150 }
     ];

    const gridStyle = {
      marginBottom: '40px',
      padding: '20px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fff'
    };

    const headerStyle = {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '10px',
      color: '#1f2937'
    };

    const descriptionStyle = {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '20px',
      lineHeight: 1.5
    };

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 700, color: '#111827' }}>
          📊 Sales Variant Showcase
        </h1>
        <p style={{ marginBottom: '40px', color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
          Comprehensive showcase of all available Table cell variants organized by category. 
          Each grid demonstrates different cell types with real-time interactive functionality.
        </p>

        {/* Text Variants Grid */}
        <div style={gridStyle}>
          <h2 style={headerStyle}>📝 Text Cell Variants</h2>
          <p style={descriptionStyle}>
            Different text display options including RTL support, multiline text, truncation with tooltips, and text with badges.
          </p>
          <Table
            data={textData}
            columns={textVariantColumns}
            title="Text Variants"
            badge={textData.length}
            showPagination={false}
            showSearch={false}
            showFilters={false}
            striped={true}
            gridCells={true}
          />
        </div>

        {/* Badge Variants Grid */}
        <div style={gridStyle}>
          <h2 style={headerStyle}>🏷️ Badge Cell Variants</h2>
          <p style={descriptionStyle}>
            Status badges with different tones and support for multiple badges in a single cell.
          </p>
          <Table
            data={badgeData}
            columns={badgeVariantColumns}
            title="Badge Variants"
            badge={badgeData.length}
            showPagination={false}
            showSearch={false}
            showFilters={false}
            striped={true}
            gridCells={true}
          />
        </div>

        {/* Interactive Variants Grid */}
        <div style={gridStyle}>
          <h2 style={headerStyle}>⚡ Interactive Cell Variants</h2>
          <p style={descriptionStyle}>
            Interactive elements including checkboxes, dropdowns, radio buttons, text inputs, formatted numbers, and action buttons.
          </p>
          <Table
            data={interactiveData}
            columns={interactiveVariantColumns}
            title="Interactive Variants"
            badge={interactiveData.length}
            showPagination={false}
            showSearch={false}
            showFilters={false}
            striped={false}
            gridCells={true}
            onRowClick={(row) => console.log('Interactive row clicked:', row.original)}
          />
        </div>

        {/* Enhanced Variants Grid - New Figma Designs */}
        <div style={gridStyle}>
          <h2 style={headerStyle}>✨ Enhanced Cell Variants (New Figma Designs)</h2>
          <p style={descriptionStyle}>
            Enhanced cell variants based on the latest Figma designs: improved text+badge layout, multiple action icons, and enhanced number display.
          </p>
          <Table
            data={enhancedData}
            columns={enhancedVariantColumns}
            title="Enhanced Variants"
            badge={enhancedData.length}
            showPagination={false}
            showSearch={false}
            showFilters={false}
            striped={false}
            gridCells={true}
            onRowClick={(row) => console.log('Enhanced row clicked:', row.original)}
          />
        </div>

        {/* Complete Variants Reference */}
        <div style={{ ...gridStyle, backgroundColor: '#f8fafc' }}>
          <h2 style={headerStyle}>📋 Complete Cell Variants Reference</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
            
            <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#374151' }}>Text Variants</h4>
              <ul style={{ fontSize: '13px', color: '#6b7280', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                <li><code>textSingleLine</code> - Basic single line text with RTL support</li>
                <li><code>textMultiline</code> - Multi-line text with proper line breaks</li>
                <li><code>textTruncated</code> - Truncated text with tooltip on overflow</li>
                <li><code>textSingleLineWithBadge</code> - Text combined with badge</li>
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#374151' }}>Badge Variants</h4>
              <ul style={{ fontSize: '13px', color: '#6b7280', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                <li><code>badge</code> - Single badge with tone support</li>
                <li><code>badgeMultiple</code> - Multiple badges in one cell</li>
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#374151' }}>Interactive Variants</h4>
              <ul style={{ fontSize: '13px', color: '#6b7280', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                <li><code>checkbox</code> - Interactive checkbox input</li>
                <li><code>radioButton</code> - Radio button group</li>
                <li><code>select</code> - Dropdown select with options</li>
                <li><code>textField</code> - Editable text input field</li>
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#374151' }}>Special Variants</h4>
              <ul style={{ fontSize: '13px', color: '#6b7280', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                <li><code>updatedNumber</code> - Formatted numbers with locale support</li>
                <li><code>actionIcon</code> - Action button with icon</li>
                <li><code>actionDropdownIcon</code> - Action dropdown menu</li>
              </ul>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#374151' }}>Enhanced Variants (New)</h4>
              <ul style={{ fontSize: '13px', color: '#6b7280', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                <li><code>textSingleLineWithBadge</code> - Enhanced text+badge with prefix icon support</li>
                <li><code>actionIcon (Enhanced)</code> - Multiple action icons (edit, delete)</li>
                <li><code>updatedNumber (Enhanced)</code> - Primary/secondary number display</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

// Table States Showcase
export const TableStates: Story = {
  name: 'Table States Showcase',
  render: () => {
    const [currentState, setCurrentState] = useState<'normal' | 'loading' | 'error' | 'empty' | 'notFound'>('normal');
    
    // Sample data for normal state
    const normalData = sampleProducts.slice(0, 3);
    
    // Basic columns for states demo
    const stateColumns: ColumnDef<Product, any>[] = [
      {
        ...QuickColumns.number('id', 'ID'),
        size: 80,
      },
      {
        ...QuickColumns.text('name', 'Product Name'),
        size: 300,
      },
      {
        ...QuickColumns.number('stockCollectors', 'Stock'),
        size: 120,
      },
    ];

    const stateButtons = [
      { label: 'Normal', state: 'normal' as const, description: 'Default state with data' },
      { label: 'Loading', state: 'loading' as const, description: 'Shows loading spinner' },
      { label: 'Error', state: 'error' as const, description: 'Displays error message' },
      { label: 'Empty', state: 'empty' as const, description: 'No data available' },
      { label: 'Not Found', state: 'notFound' as const, description: 'Search yielded no results' },
    ];

    const getTableProps = () => {
      const baseProps = {
        columns: stateColumns,
        title: 'Product Inventory',
        showHeader: true,
        showSearch: true,
        showFilters: true,
        showPagination: true,
      };

      switch (currentState) {
        case 'normal':
          return {
            ...baseProps,
            data: normalData,
            state: 'normal' as const,
          };
        case 'loading':
          return {
            ...baseProps,
            data: [],
            state: 'loading' as const,
          };
        case 'error':
          return {
            ...baseProps,
            data: [],
            state: 'error' as const,
            errorMessage: "Failed to load product data. Please check your connection and try again.",
          };
        case 'empty':
          return {
            ...baseProps,
            data: [],
            state: 'empty' as const,
            emptyMessage: "No products have been added to your inventory yet. Add your first product to get started.",
          };
        case 'notFound':
          return {
            ...baseProps,
            data: [],
            state: 'notFound' as const,
            notFoundMessage: "No available results for \"non-existent-product\"",
            notFoundSubtitle: "Try different search terms or check your spelling",
            searchQuery: "non-existent-product",
          };
        default:
          return { ...baseProps, data: normalData, state: 'normal' as const };
      }
    };

    return (
      <div style={{ padding: '20px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 600 }}>
          Table States Showcase
        </h2>
        <p style={{ marginBottom: '30px', color: '#666', lineHeight: 1.5 }}>
          The Table component supports different states to handle various data scenarios. 
          Click the buttons below to see how each state is displayed.
        </p>

        {/* State Selection Controls */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 600 }}>
            Select Table State:
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            {stateButtons.map((button) => (
              <button
                key={button.state}
                onClick={() => setCurrentState(button.state)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  backgroundColor: currentState === button.state ? '#007bff' : '#fff',
                  color: currentState === button.state ? '#fff' : '#333',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
          
          {/* Current State Description */}
          <div style={{ 
            padding: '12px 16px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong>Current State: {currentState}</strong>
            <br />
            <span style={{ color: '#666' }}>
              {stateButtons.find(b => b.state === currentState)?.description}
            </span>
          </div>
        </div>

        {/* Table Component with Dynamic State */}
        <div style={{ 
          border: '1px solid #e9ecef', 
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <Table {...getTableProps()} />
        </div>

        {/* State Usage Examples */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
            Usage Examples:
          </h3>
          
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Normal State */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#28a745' }}>
                Normal State
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`<Table
  data={products}
  columns={columns}
  state="normal"
/>`}
              </pre>
            </div>

            {/* Loading State */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#6c757d' }}>
                Loading State
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`<Table
  data={[]}
  columns={columns}
  state="loading"
/>`}
              </pre>
            </div>

            {/* Error State */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#dc3545' }}>
                Error State
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`<Table
  data={[]}
  columns={columns}
  state="error"
  errorMessage="Failed to load data"
/>`}
              </pre>
            </div>

            {/* Empty State */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#ffc107' }}>
                Empty State
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`<Table
  data={[]}
  columns={columns}
  state="empty"
  emptyMessage="No data available"
/>`}
              </pre>
            </div>

            {/* Not Found State */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#17a2b8' }}>
                Not Found State
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`<Table
  data={[]}
  columns={columns}
  state="notFound"
  notFoundMessage="No results found"
  searchQuery="search term"
/>`}
              </pre>
            </div>

            {/* Dynamic State Example */}
            <div>
              <h4 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600, color: '#6f42c1' }}>
                Dynamic State (Recommended)
              </h4>
              <pre style={{ 
                backgroundColor: '#fff', 
                padding: '12px', 
                borderRadius: '4px', 
                fontSize: '12px',
                overflow: 'auto',
                border: '1px solid #dee2e6'
              }}>
{`const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState([]);

const getTableState = () => {
  if (loading) return 'loading';
  if (error) return 'error';
  if (data.length === 0) return 'empty';
  return 'normal';
};

<Table
  data={data}
  columns={columns}
  state={getTableState()}
  errorMessage={error}
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e7f3ff', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 600 }}>
            Best Practices:
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
            <li><strong>Loading State:</strong> Show immediately when data fetching begins</li>
            <li><strong>Error State:</strong> Provide clear, actionable error messages</li>
            <li><strong>Empty State:</strong> Guide users on how to add their first data</li>
            <li><strong>Not Found:</strong> Suggest alternative search terms or filters</li>
            <li><strong>State Management:</strong> Use dynamic state calculation based on data status</li>
            <li><strong>Consistency:</strong> Maintain consistent messaging across your application</li>
          </ul>
        </div>
      </div>
    );
  }
};


// Export functionality story
export const WithExport: Story = {
  name: 'With Export CSV',
  args: {
    title: 'Product Inventory',
    data: sampleProducts,
    columns: productColumns,
    showExport: true,
    showSearch: true,
    showFilters: true,
    showPagination: true,
    badge: sampleProducts.length, // Show total count with default tone
  },
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleExport = () => {
      // Convert data to CSV format
      const headers = ['ID', 'Item', 'Dispatched to collectors', 'Available at warehouse'];
      const csvContent = [
        headers.join(','),
        ...sampleProducts.map(product => 
          [product.id, `"${product.name}"`, product.stockCollectors, product.stockWarehouse].join(',')
        )
      ].join('\n');
      
      // Create and download CSV file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'product-inventory.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show confirmation
      alert('CSV file has been downloaded successfully!');
    };
    
    return (
      <Table
        {...args}
        data={args.data}
        columns={args.columns}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onExport={handleExport}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the export CSV functionality with the export button visible in the header. The badge shows the total number of rows using the default tone. Click the export button to download a CSV file of the current data.'
      }
    }
  }
};

// Striped Table Story
export const StripedTable: Story = {
  name: 'Striped Table',
  args: {
    title: 'Striped Product Inventory',
    data: sampleProducts,
    columns: productColumns,
    striped: true,
    gridCells: false,
    showSearch: true,
    showFilters: true,
    showPagination: true,
    badge: sampleProducts.length,
  },
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<Record<string, any>>({});
    
    // Filter the data based on search and filters
    const filteredData = sampleProducts.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !product.id.toString().includes(searchQuery)) {
        return false;
      }
      
      // Additional filters can be added here
      return true;
    });
    
    return (
      <Table
        {...args}
        data={filteredData}
        columns={productColumns}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilters={filters}
        onFilterChange={setFilters}
        badge={filteredData.length}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the striped table variant with alternating row colors. The striped pattern helps distinguish between rows in large datasets. Search functionality is enabled to test data filtering.'
      }
    }
  }
};

// Grid Table Story
export const GridTable: Story = {
  name: 'Grid Table',
  args: {
    title: 'Grid Product Inventory',
    data: sampleProducts,
    columns: productColumns,
    striped: false,
    gridCells: true,
    showSearch: true,
    showFilters: true,
    showPagination: true,
    badge: sampleProducts.length,
  },
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<Record<string, any>>({});
    
    // Filter the data based on search and filters
    const filteredData = sampleProducts.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !product.id.toString().includes(searchQuery)) {
        return false;
      }
      
      // Additional filters can be added here
      return true;
    });
    
    return (
      <Table
        {...args}
        data={filteredData}
        columns={productColumns}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilters={filters}
        onFilterChange={setFilters}
        badge={filteredData.length}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the grid table variant with visible cell borders. The grid layout provides clear visual separation between cells and is ideal for data-heavy tables where precise data alignment is important.'
      }
    }
  }
};

// Tabbed Table Story
export const TabbedTable: Story = {
  name: 'Tabbed Table',
  args: {
    title: 'Multi-Category Inventory',
    showTabs: true,
    showSearch: true,
    showFilters: true,
    showPagination: true,
    striped: false,
    gridCells: false,
  },
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<Record<string, any>>({});
    const [activeTab, setActiveTab] = useState('all');
    
    // Create different data sets for each tab
    const allProducts = sampleProducts;
    const lowStockProducts = sampleProducts.filter(p => p.stockWarehouse < 100);
    const highStockProducts = sampleProducts.filter(p => p.stockWarehouse >= 100);
    
    // Define tabs with their data
    const tableTabs = [
      {
        id: 'all',
        label: 'All Products',
        data: allProducts,
        columns: productColumns,
        badge: allProducts.length,
      },
      {
        id: 'low-stock',
        label: 'Low Stock',
        data: lowStockProducts,
        columns: productColumns,
        badge: lowStockProducts.length,
      },
      {
        id: 'high-stock',
        label: 'High Stock',
        data: highStockProducts,
        columns: productColumns,
        badge: highStockProducts.length,
      },
    ];
    
    // Get current tab data
    const currentTab = tableTabs.find(tab => tab.id === activeTab) || tableTabs[0];
    
    // Filter the current tab data based on search and filters
    const filteredData = currentTab.data.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !product.id.toString().includes(searchQuery)) {
        return false;
      }
      
      // Additional filters can be added here
      return true;
    });
    
    return (
      <Table
        {...args}
        data={filteredData}
        columns={currentTab.columns}
        tableTabs={tableTabs}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilters={filters}
        onFilterChange={setFilters}
        badge={filteredData.length}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the tabbed table functionality where users can switch between different data views. Each tab has its own data set and badge count. The search and filter functionality works independently for each tab, allowing users to find specific items within each category.'
      }
    }
  }
};

// Static Table Story (no hover effects)
export const StaticTable: Story = {
  name: 'Static Table',
  args: {
    title: 'Static Product Report',
    data: sampleProducts,
    columns: productColumns,
    striped: true,
    gridCells: false,
    disableRowHover: true,
    showSearch: false,
    showFilters: false,
    showPagination: false,
    badge: sampleProducts.length,
  },
  render: (args) => {
    return (
      <Table
        {...args}
        data={args.data}
        columns={args.columns}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a static table with no interactive features. Row hover effects are disabled using `disableRowHover={true}`, making it ideal for read-only data displays, reports, or when the table is purely informational. Search, filters, and pagination are also disabled to emphasize the static nature.'
      }
    }
  }
};

// Column Management Story (ordering and resizing)
export const ColumnManagement: Story = {
  name: 'Column Ordering & Resizing',
  args: {
    title: 'Interactive Column Management',
    data: sampleProducts,
    columns: productColumns,
    striped: false,
    gridCells: true, // Recommended for better visual feedback
    enableColumnOrdering: true,
    enableColumnResizing: true,
    showSearch: true,
    showFilters: true,
    showPagination: true,
    badge: sampleProducts.length,
  },
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<Record<string, any>>({});
    
    // Filter the data based on search and filters
    const filteredData = sampleProducts.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !product.id.toString().includes(searchQuery)) {
        return false;
      }
      
      // Additional filters can be added here
      return true;
    });
    
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600, color: '#495057' }}>
            ✨ Column Management Features Enabled
          </h3>
          <div style={{ fontSize: '14px', lineHeight: 1.5, color: '#6c757d' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>📋 Column Ordering:</strong> Hover over column headers to reveal drag handles (⋮⋮⋮). 
              Click and drag to reorder columns.
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>📏 Column Resizing:</strong> Hover over column borders to reveal resize handles. 
              Click and drag to adjust column widths. Double-click to auto-fit content.
            </p>
            <p style={{ margin: '0' }}>
              <strong>🎯 Grid Cells:</strong> Enabled for better visual feedback during column management operations.
            </p>
          </div>
        </div>
        
        <Table
          {...args}
          data={filteredData}
          columns={productColumns}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilters={filters}
          onFilterChange={setFilters}
          badge={filteredData.length}
          onRowClick={(row) => console.log('Row clicked:', row.original)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the advanced column management features of the Table component. Both **Column Ordering** and **Column Resizing** are enabled, allowing users to customize their data view by reordering columns via drag and drop and adjusting column widths with resize handles. Grid cells are enabled to provide better visual feedback during these operations. These features are disabled by default for performance and must be explicitly enabled via props.'
      }
    }
  }
};

// Advanced Filters Story
export const AdvancedFilters: Story = {
  name: 'Advanced Filters with Real-World Scenarios',
  args: {
    title: 'Customer Sales Management',
    showSearch: true,
    showFilters: true,
    showFilterBar: false, 
    showPagination: true,
    striped: false,
    gridCells: false,
    state: 'normal',
  },
  render: (args) => {
    // Sales data using the same structure as Sales Variant Showcase
    const salesData = useMemo(() => [
      {
        id: 1,
        customer: 'Ahmed Al-Rashid',
        email: 'ahmed@rashid.com',
        description: 'VIP customer with excellent\nhistory and high satisfaction\nratings across all channels',
        status: { text: 'Active', tone: 'success' as const },
        tags: [
          { text: 'VIP', tone: 'success' as const },
          { text: 'Premium', tone: 'info' as const }
        ],
        selected: true,
        priority: 'high',
        category: 'enterprise',
        amount: 2450.75,
        approved: true,
        notes: 'Priority customer - handle with care',
        region: 'MENA',
        department: 'Corporate'
      },
      {
        id: 2,
        customer: 'Fatima Hassan',
        email: 'fatima@hassan.co',
        description: 'Regular customer with\nsteady purchase pattern\nand reliable payment history',
        status: { text: 'Pending', tone: 'warning' as const },
        tags: [
          { text: 'Regular', tone: 'info' as const }
        ],
        selected: false,
        priority: 'medium',
        category: 'business',
        amount: 1200.00,
        approved: false,
        notes: 'Pending approval for bulk discount',
        region: 'MENA',
        department: 'Sales'
      },
      {
        id: 3,
        customer: 'Omar Khalil',
        email: 'omar@khalil.org',
        description: 'New customer exploring\nour product catalog\nwith trial account',
        status: { text: 'Trial', tone: 'warning' as const },
        tags: [
          { text: 'New', tone: 'warning' as const },
          { text: 'Trial', tone: 'info' as const }
        ],
        selected: false,
        priority: 'low',
        category: 'individual',
        amount: 350.75,
        approved: true,
        notes: 'Trial period - monitor usage',
        region: 'MENA',
        department: 'Marketing'
      },
      {
        id: 4,
        customer: 'Olivia Rhye',
        email: 'olivia@untitledui.com',
        description: 'Corporate account with\nlarge volume requirements\nand quarterly contracts',
        status: { text: 'Active', tone: 'success' as const },
        tags: [
          { text: 'Corporate', tone: 'success' as const },
          { text: 'Bulk', tone: 'warning' as const }
        ],
        selected: true,
        priority: 'high',
        category: 'enterprise',
        amount: 5600.25,
        approved: true,
        notes: 'Quarterly contract renewal',
        region: 'US',
        department: 'Corporate'
      },
      {
        id: 5,
        customer: 'Phoenix Baker',
        email: 'phoenix@baker.com',
        description: 'Design agency with\nspecialized requirements\nand custom solutions',
        status: { text: 'Review', tone: 'info' as const },
        tags: [
          { text: 'Agency', tone: 'info' as const }
        ],
        selected: false,
        priority: 'medium',
        category: 'business',
        amount: 890.00,
        approved: false,
        notes: 'Custom design services needed',
        region: 'US',
        department: 'Creative'
      },
      {
        id: 6,
        customer: 'Lana Steiner',
        email: 'lana@steiner.co',
        description: 'Seasonal customer with\nvariable order patterns\nand special requests',
        status: { text: 'Inactive', tone: 'critical' as const },
        tags: [
          { text: 'Seasonal', tone: 'warning' as const }
        ],
        selected: false,
        priority: 'low',
        category: 'individual',
        amount: 245.50,
        approved: true,
        notes: 'Seasonal customer - Q4 focus',
        region: 'EU',
        department: 'Sales'
      }
    ], []);

    // Columns using predefined cell variants from Sales Showcase
    const salesColumns: ColumnDef<any, any>[] = useMemo(() => [
      { ...createCellColumn('id', 'ID', 'textSingleLine'), size: 60 },
      { ...createCellColumn('customer', 'Customer Name', 'textSingleLineWithBadge'), size: 200 },
      { ...createCellColumn('email', 'Email', 'textTruncated'), size: 180 },
      { ...createCellColumn('description', 'Description', 'textMultiline'), size: 200 },
      { ...createCellColumn('status', 'Status', 'badge'), size: 100 },
      { ...createCellColumn('tags', 'Tags', 'badgeMultiple'), size: 150 },
      { ...createCellColumn('amount', 'Amount', 'updatedNumber'), size: 120 },
      { ...createCellColumn('priority', 'Priority', 'textSingleLine'), size: 80 },
      { ...createActionCellColumn('Actions', 'actionIcon', (row) => console.log('Action:', row)), size: 80 }
    ], []);
    
    // State management
    const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [tableState, setTableState] = useState<'normal' | 'error' | 'empty' | 'notFound' | 'loading'>('normal');
    const [isRTL, setIsRTL] = useState(false);
    
    // Enhanced filter options with RTL/Arabic support and popover configuration
    const filterOptions = useMemo(() => {
      const baseFilters = {
        category: {
          label: isRTL ? 'الفئة' : 'Category',
          type: 'popoverListbox' as const,
          popoverProps: { 
            margin: 'small' as const,
            placement: 'bottom-start' as const 
          },
          options: [
            { label: isRTL ? 'جميع الفئات' : 'All Categories', value: '' },
            { label: isRTL ? 'مؤسسات' : 'Enterprise', value: 'enterprise' },
            { label: isRTL ? 'أعمال' : 'Business', value: 'business' },
            { label: isRTL ? 'أفراد' : 'Individual', value: 'individual' },
          ],
        },
        amountRange: {
          label: isRTL ? 'نطاق المبلغ' : 'Amount Range',
          type: 'rangeSlider' as const,
          rangeConfig: {
            min: 0,
            max: 6000,
            step: 100,
            prefix: '$',
            formatValue: (value: number) => value.toString(),
          },
        },
        region: {
          label: isRTL ? 'المنطقة' : 'Region',
          type: 'checkboxGroup' as const,
          popoverProps: { 
            margin: 'small' as const,
            placement: 'bottom-start' as const 
          },
          options: [
            { label: isRTL ? 'الشرق الأوسط وشمال أفريقيا' : 'MENA', value: 'MENA' },
            { label: isRTL ? 'الولايات المتحدة' : 'United States', value: 'US' },
            { label: isRTL ? 'أوروبا' : 'Europe', value: 'EU' },
          ],
        },
        statusFilter: {
          label: isRTL ? 'الحالة' : 'Status',
          type: 'radioGroup' as const,
          popoverProps: { 
            margin: 'small' as const,
            placement: 'bottom-start' as const 
          },
          options: [
            { label: isRTL ? 'جميع الحالات' : 'All Status', value: '' },
            { label: isRTL ? 'نشط' : 'Active', value: 'Active' },
            { label: isRTL ? 'قيد المراجعة' : 'Review', value: 'Review' },
            { label: isRTL ? 'معلق' : 'Pending', value: 'Pending' },
            { label: isRTL ? 'تجريبي' : 'Trial', value: 'Trial' },
            { label: isRTL ? 'غير نشط' : 'Inactive', value: 'Inactive' },
          ],
        },
        department: {
          label: isRTL ? 'القسم' : 'Department',
          type: 'popoverListbox' as const,
          popoverProps: { 
            margin: 'small' as const,
            placement: 'bottom-start' as const 
          },
          options: [
            { label: isRTL ? 'جميع الأقسام' : 'All Departments', value: '' },
            { label: isRTL ? 'المؤسسات' : 'Corporate', value: 'Corporate' },
            { label: isRTL ? 'المبيعات' : 'Sales', value: 'Sales' },
            { label: isRTL ? 'التسويق' : 'Marketing', value: 'Marketing' },
            { label: isRTL ? 'الإبداع' : 'Creative', value: 'Creative' },
          ],
        },
      };
      
      return baseFilters;
    }, [isRTL]);
    
    // Advanced filtering with sales data business logic
    const filteredData = useMemo(() => {
      let filtered = salesData.filter(customer => {
        // Search filter - search across multiple fields
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          const searchableFields = [
            customer.customer,
            customer.email,
            customer.description,
            customer.notes,
            customer.id.toString()
          ].join(' ').toLowerCase();
          
          if (!searchableFields.includes(query)) {
            return false;
          }
        }
        
        // Category filter
        if (activeFilters.category && activeFilters.category !== '') {
          if (customer.category !== activeFilters.category) return false;
        }
        
        // Amount range filter
        if (activeFilters.amountRange && Array.isArray(activeFilters.amountRange)) {
          const [minAmount, maxAmount] = activeFilters.amountRange;
          if (customer.amount < minAmount || customer.amount > maxAmount) return false;
        }
        
        // Multi-select region filter
        if (activeFilters.region && Array.isArray(activeFilters.region) && activeFilters.region.length > 0) {
          if (!activeFilters.region.includes(customer.region)) return false;
        }
        
        // Status filter
        if (activeFilters.statusFilter && activeFilters.statusFilter !== '') {
          if (customer.status.text !== activeFilters.statusFilter) return false;
        }
        
        // Department filter
        if (activeFilters.department && activeFilters.department !== '') {
          if (customer.department !== activeFilters.department) return false;
        }
        
        return true;
      });
      
      return filtered;
    }, [salesData, activeFilters, searchQuery]);
    
    // Table state management
    const getTableState = () => {
      if (tableState === 'loading') return 'loading';
      if (tableState === 'error') return 'error';
      if (filteredData.length === 0) {
        return searchQuery || Object.keys(activeFilters).some(key => activeFilters[key]) ? 'notFound' : 'empty';
      }
      return 'normal';
    };
    
    const currentState = getTableState();
    
    return (
      <div style={{ padding: '20px', direction: isRTL ? 'rtl' : 'ltr' }} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Demo Controls */}
        <div style={{ 
          marginBottom: '24px', 
          padding: '20px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '12px', 
          border: '1px solid #e9ecef' 
        }}>
          <h3 style={{ 
            margin: '0 0 16px 0', 
            fontSize: '18px', 
            fontWeight: 600, 
            color: '#212529',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: isRTL ? 'var(--t-font-family-arabic, Tajawal)' : 'var(--t-font-family-primary, Outfit)'
          }}>
            <IconFilter size={20} />
            {isRTL ? 'عرض التصفية المتقدمة والحالات' : 'Advanced Filtering & Status Demo'}
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <Button
              tone={tableState === 'normal' ? 'success' : 'default'}
              onClick={() => setTableState('normal')}
            >
              {isRTL ? 'الحالة العادية' : 'Normal State'}
            </Button>
            <Button
              tone={tableState === 'loading' ? 'default' : 'default'}
              onClick={() => setTableState('loading')}
            >
              {isRTL ? 'حالة التحميل' : 'Loading State'}
            </Button>
            <Button
              tone={tableState === 'error' ? 'critical' : 'default'}
              onClick={() => setTableState('error')}
            >
              {isRTL ? 'حالة الخطأ' : 'Error State'}
            </Button>
            <Button
              onClick={() => setIsRTL(!isRTL)}
              variant="secondary"
            >
              {isRTL ? 'English' : 'العربية'}
            </Button>
            <Button
              onClick={() => {
                setActiveFilters({});
                setSearchQuery('');
                setTableState('normal');
              }}
            >
              {isRTL ? 'مسح الكل' : 'Clear All'}
            </Button>
          </div>
          
          <div style={{ 
            fontSize: '14px', 
            color: '#6c757d',
            lineHeight: 1.5,
            fontFamily: isRTL ? 'var(--t-font-family-arabic, Tajawal)' : 'var(--t-font-family-primary, Outfit)'
          }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>{isRTL ? '🎯 أنواع التصفية:' : '🎯 Filter Types:'}</strong> {isRTL ? 'قائمة منبثقة (الفئة، القسم)، شريط تمرير (المبلغ)، خانات اختيار (المنطقة)، أزرار راديو (الحالة)' : 'PopoverListbox (Category, Department), RangeSlider (Amount), CheckboxGroup (Region), RadioGroup (Status)'}
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>{isRTL ? '⚡ الأداء:' : '⚡ Performance:'}</strong> {isRTL ? 'هوامش صغيرة للمنبثقات، خلايا محددة مسبقاً من عرض المبيعات' : 'Small margins for popovers, predefined cells from Sales Showcase'}
            </p>
            <p style={{ margin: '0' }}>
              <strong>{isRTL ? '📊 النتائج:' : '📊 Results:'}</strong> {isRTL ? 'عرض' : 'Showing'} <strong>{filteredData.length}</strong> {isRTL ? 'من' : 'of'} <strong>{salesData.length}</strong> {isRTL ? 'عملاء' : 'customers'}
              {Object.keys(activeFilters).length > 0 && ` (${Object.keys(activeFilters).length} ${isRTL ? 'مرشحات نشطة' : 'filters active'})`}
            </p>
          </div>
        </div>
        
        <Table
          {...args}
          title={isRTL ? 'إدارة مبيعات العملاء' : 'Customer Sales Management'}
          data={currentState === 'normal' ? filteredData : []}
          columns={salesColumns}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
          filterOptions={filterOptions}
          badge={currentState === 'normal' ? filteredData.length : undefined}
          state={currentState}
          errorMessage={isRTL ? "فشل في تحميل بيانات العملاء. قد يكون هذا بسبب مشاكل في الخادم أو الاتصال بالشبكة." : "Failed to load customer data. This could be due to server issues or network connectivity problems."}
          emptyMessage={isRTL ? "لم يتم العثور على عملاء في النظام. أضف بعض العملاء للبدء." : "No customers found in the system. Add some customers to get started."}
          notFoundMessage={searchQuery ? (isRTL ? `لم يتم العثور على نتائج لـ "${searchQuery}"` : `No results found for "${searchQuery}"`) : (isRTL ? "لا يوجد عملاء مطابقون للمرشحات المحددة" : "No customers match the selected filters")}
          notFoundSubtitle={isRTL ? "جرب تعديل مصطلحات البحث أو معايير التصفية" : "Try adjusting your search terms or filter criteria"}
          onRowClick={(row) => console.log('Customer selected:', row.original)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This comprehensive story demonstrates the **complete advanced filtering system** using **predefined cells from Sales Variant Showcase**. Features include: **PopoverListbox filters** with small margins for categories and departments, **RangeSlider filters** for amount ranges, **CheckboxGroup filters** for multi-region selection, **RadioGroup filters** for status, **real sales data** with proper cell variants (textSingleLineWithBadge, textMultiline, badge, badgeMultiple, updatedNumber), **RTL/Arabic language toggle** with translated filter names, **status showcases** (normal, loading, error, empty, not found), and **popover configuration** with small margin variants for optimal spacing.'
      }
    }
  }
};

// Error Row Highlighting Story
export const ErrorRowHighlighting: Story = {
  name: 'Error Row Highlighting',
  render: () => {
    // Simple demonstration data with error styling
    const errorData = [
      { id: 1, name: 'Valid Product', price: 25.99, status: 'Valid', hasError: false },
      { id: 2, name: 'Invalid Product', price: 0, status: 'Error', hasError: true },
      { id: 3, name: 'Another Valid Product', price: 15.50, status: 'Valid', hasError: false },
    ];

    const errorColumns: ColumnDef<any, any>[] = [
      {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        size: 80,
        cell: ({ row, getValue }) => (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {row.original.hasError && (
              <IconAlertTriangle size={14} style={{ color: 'var(--t-color-text-critical)' }} />
            )}
            <span>{getValue()}</span>
          </div>
        ),
      },
      {
        id: 'name',
        header: 'Product Name',
        accessorKey: 'name',
        size: 200,
      },
      {
        id: 'price',
        header: 'Price ($)',
        accessorKey: 'price',
        size: 120,
      },
      {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
        size: 100,
        cell: ({ row, getValue }) => (
          <span style={{ 
            color: row.original.hasError ? 'var(--t-color-text-critical)' : 'var(--t-color-text-success)',
            fontWeight: 500 
          }}>
            {getValue()}
          </span>
        ),
      },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ 
          marginBottom: '16px', 
          padding: '16px', 
          backgroundColor: 'var(--t-color-fill-info-secondary)', 
          borderRadius: '8px' 
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
            Error Row Highlighting Demo
          </h4>
          <p style={{ margin: '0', fontSize: '13px' }}>
            Rows with validation errors are highlighted using <code>fill-critical-secondary</code> token across the entire row.
          </p>
        </div>

        <Table
          data={errorData}
          columns={errorColumns}
          title="Product Validation"
          badge={errorData.length}
          showPagination={false}
          showSearch={false}
          showFilters={false}
          gridCells={true}
          disableRowHover={false}
          className="error-table-demo"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates **error row highlighting** using the `fill-critical-secondary` token. Rows with validation errors are visually highlighted across the entire row to help users identify problematic data.'
      }
    }
  }
};

