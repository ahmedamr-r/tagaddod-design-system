import React, { useState, useMemo, useCallback, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconTrash, IconFilter, IconAlertTriangle } from '@tabler/icons-react';
import { Button } from '../Button/Button';
import { QuickColumns, createCellColumn, createInteractiveCellColumn, createActionCellColumn } from './TableCellHelpers';
import {
  TextSingleLineCell,
  TextMultilineCell,
  TextTruncatedCell,
  TextSingleLineWithBadgeCell,
  BadgeCell,
  BadgeMultipleCell,
  CheckboxCell,
  RadioButtonCell,
  SelectCell,
  TextFieldCell,
  UpdatedNumberCell,
  ActionIconCell,
} from './TableCellVariants';

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

// Search placeholder templates for different data contexts
const searchPlaceholders = {
  products: {
    en: "Search by product name or ID...",
    ar: "ابحث باسم المنتج أو المعرف..."
  },
  customers: {
    en: "Search by customer name or email...",
    ar: "ابحث باسم العميل أو البريد الإلكتروني..."
  },
  sales: {
    en: "Search by customer, email, or description...",
    ar: "ابحث بالعميل أو البريد أو الوصف..."
  },
  inventory: {
    en: "Search inventory by name or ID...",
    ar: "ابحث في المخزون بالاسم أو المعرف..."
  },
  general: {
    en: "Search table data...",
    ar: "ابحث في بيانات الجدول..."
  }
};

// Helper function to get appropriate search placeholder
const getSearchPlaceholder = (context: keyof typeof searchPlaceholders, isRTL: boolean = false) => {
  return searchPlaceholders[context][isRTL ? 'ar' : 'en'];
};

// Common filter options templates
const createProductFilters = (isRTL: boolean = false) => ({
  category: {
    label: isRTL ? 'الفئة' : 'Category',
    type: 'select' as const,
    options: [
      { label: isRTL ? 'جميع الفئات' : 'All Categories', value: '' },
      { label: isRTL ? 'مواد تنظيف' : 'Cleaning Products', value: 'cleaning' },
      { label: isRTL ? 'مشروبات' : 'Beverages', value: 'beverages' },
      { label: isRTL ? 'زيوت وتوابل' : 'Oils & Spices', value: 'oils' },
    ]
  },
  stockRange: {
    label: isRTL ? 'نطاق المخزون' : 'Stock Range',
    type: 'rangeSlider' as const,
    rangeConfig: {
      min: 0,
      max: 1000,
      step: 10,
      formatValue: (value: number) => value.toString()
    }
  }
});

const createCustomerFilters = (isRTL: boolean = false) => ({
  status: {
    label: isRTL ? 'الحالة' : 'Status',
    type: 'select' as const,
    options: [
      { label: isRTL ? 'جميع الحالات' : 'All Status', value: '' },
      { label: isRTL ? 'نشط' : 'Active', value: 'Active' },
      { label: isRTL ? 'في الانتظار' : 'Pending', value: 'Pending' },
      { label: isRTL ? 'غير نشط' : 'Inactive', value: 'Inactive' },
    ]
  },
  region: {
    label: isRTL ? 'المنطقة' : 'Region',
    type: 'checkboxGroup' as const,
    options: [
      { label: isRTL ? 'الشرق الأوسط وشمال أفريقيا' : 'MENA', value: 'MENA' },
      { label: isRTL ? 'الولايات المتحدة' : 'United States', value: 'US' },
      { label: isRTL ? 'أوروبا' : 'Europe', value: 'EU' },
    ]
  },
  amountRange: {
    label: isRTL ? 'نطاق المبلغ' : 'Amount Range',
    type: 'rangeSlider' as const,
    rangeConfig: {
      min: 0,
      max: 5000,
      step: 100,
      prefix: '$',
      formatValue: (value: number) => value.toString()
    }
  }
});

// Helper function to implement search functionality
const useTableSearch = (data: any[], searchFields: string[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;

    const query = searchQuery.toLowerCase();
    return data.filter(item =>
      searchFields.some(field =>
        item[field]?.toString().toLowerCase().includes(query)
      )
    );
  }, [data, searchQuery, searchFields]);

  return { searchQuery, setSearchQuery, filteredData };
};

// Helper function to implement filter functionality
const useTableFilters = (data: any[]) => {
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const filteredData = useMemo(() => {
    if (Object.keys(activeFilters).length === 0) return data;

    return data.filter(item => {
      return Object.entries(activeFilters).every(([key, value]) => {
        if (!value || value === '') return true;

        // Handle different filter types
        if (Array.isArray(value)) {
          return value.includes(item[key]);
        }

        // Handle range filters
        if (typeof value === 'object' && value.min !== undefined) {
          const itemValue = Number(item[key]);
          return itemValue >= value.min && itemValue <= value.max;
        }

        return item[key] === value;
      });
    });
  }, [data, activeFilters]);

  return { activeFilters, setActiveFilters, filteredData };
};


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
    
    // Filter options - More than 5 to test progressive disclosure
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
          { label: 'Personal Care', value: 'personal-care' },
        ],
      },
      brand: {
        label: 'Brand',
        options: [
          { label: 'All', value: 'all' },
          { label: 'Brand A', value: 'brand-a' },
          { label: 'Brand B', value: 'brand-b' },
          { label: 'Brand C', value: 'brand-c' },
        ],
      },
      priceRange: {
        label: 'Price Range',
        type: 'rangeSlider',
        rangeConfig: {
          min: 0,
          max: 1000,
          step: 10,
          prefix: '$',
          formatValue: (val: number) => val.toString(),
        },
      },
      stockLevel: {
        label: 'Stock Level',
        options: [
          { label: 'All', value: 'all' },
          { label: 'In Stock', value: 'in-stock' },
          { label: 'Low Stock', value: 'low-stock' },
          { label: 'Out of Stock', value: 'out-of-stock' },
        ],
      },
      supplier: {
        label: 'Supplier',
        options: [
          { label: 'All', value: 'all' },
          { label: 'Supplier 1', value: 'supplier-1' },
          { label: 'Supplier 2', value: 'supplier-2' },
          { label: 'Supplier 3', value: 'supplier-3' },
        ],
      },
      location: {
        label: 'Location',
        options: [
          { label: 'All', value: 'all' },
          { label: 'Warehouse A', value: 'warehouse-a' },
          { label: 'Warehouse B', value: 'warehouse-b' },
          { label: 'Warehouse C', value: 'warehouse-c' },
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

// Cell Variants Showcase
export const AllCellVariants: Story = {
  name: 'All Cell Variants',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  render: (args, { globals }) => {
    const direction = globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';

    // State for managing cell variant data
    const [cellVariantsData, setCellVariantsData] = useState([
      {
        id: 1,
        textSingle: 'Single line text',
        textMultiline: 'Primary line\nSecondary line',
        textTruncated: 'This is a very long text that will be truncated with ellipsis when it overflows the cell width',
        textWithBadge: { text: 'Product Name', badge: 'New', badgeVariant: 'success' as const },
        badge: { text: 'Active', tone: 'success' as const },
        badgeMultiple: [
          { text: 'Tag 1', tone: 'info' as const },
          { text: 'Tag 2', tone: 'warning' as const }
        ],
        checkbox: true,
        radioButton: 'option1',
        select: 'option-a',
        textField: 'Editable text',
        number: { primary: 1250, secondary: 200 },
      },
      {
        id: 2,
        textSingle: 'Another single line',
        textMultiline: 'First line\nSecond line\nThird line',
        textTruncated: 'Short text',
        textWithBadge: { text: 'Service Item', badge: 'Hot', badgeVariant: 'critical' as const },
        badge: { text: 'Pending', tone: 'warning' as const },
        badgeMultiple: [
          { text: 'Premium', tone: 'magic' as const },
          { text: 'Featured', tone: 'success' as const },
          { text: 'Sale', tone: 'critical' as const }
        ],
        checkbox: false,
        radioButton: 'option2',
        select: 'option-b',
        textField: 'Type here...',
        number: { primary: 3500, secondary: -150 },
      },
      {
        id: 3,
        textSingle: 'Text example 3',
        textMultiline: 'Main text\nSupporting info',
        textTruncated: 'This text will overflow and show tooltip on hover when the cell is too narrow to display the full content',
        textWithBadge: { text: 'Special Offer', badge: '50% OFF', badgeVariant: 'info' as const },
        badge: { text: 'Inactive', tone: 'default' as const },
        badgeMultiple: [
          { text: 'Draft', tone: 'default' as const }
        ],
        checkbox: true,
        radioButton: 'option1',
        select: 'option-c',
        textField: 'Another field',
        number: 999,
      },
    ]);

    // Handler to update cell data
    const updateCellData = useCallback((rowId: number, field: string, value: any) => {
      setCellVariantsData(prevData =>
        prevData.map(row =>
          row.id === rowId ? { ...row, [field]: value } : row
        )
      );
    }, []);

    // Column definitions using cell variants
    const cellVariantColumns: ColumnDef<typeof cellVariantsData[0], any>[] = useMemo(() => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 60,
        cell: ({ getValue }) => <TextSingleLineCell value={String(getValue())} />,
      },
      {
        accessorKey: 'textSingle',
        header: isRTL ? 'نص سطر واحد' : 'Single Line Text',
        size: 150,
        cell: ({ getValue }) => <TextSingleLineCell value={getValue()} />,
      },
      {
        accessorKey: 'textMultiline',
        header: isRTL ? 'نص متعدد الأسطر' : 'Multiline Text',
        size: 180,
        cell: ({ getValue }) => <TextMultilineCell value={getValue()} />,
      },
      {
        accessorKey: 'textTruncated',
        header: isRTL ? 'نص مقتطع' : 'Truncated Text',
        size: 200,
        cell: ({ getValue }) => <TextTruncatedCell value={getValue()} />,
      },
      {
        accessorKey: 'textWithBadge',
        header: isRTL ? 'نص مع شارة' : 'Text with Badge',
        size: 180,
        cell: ({ getValue }) => <TextSingleLineWithBadgeCell value={getValue()} />,
      },
      {
        accessorKey: 'badge',
        header: isRTL ? 'شارة' : 'Badge',
        size: 120,
        cell: ({ getValue }) => <BadgeCell value={getValue()} />,
      },
      {
        accessorKey: 'badgeMultiple',
        header: isRTL ? 'شارات متعددة' : 'Multiple Badges',
        size: 200,
        cell: ({ getValue }) => <BadgeMultipleCell value={getValue()} />,
      },
      {
        accessorKey: 'checkbox',
        header: isRTL ? 'خانة اختيار' : 'Checkbox',
        size: 100,
        cell: ({ getValue, row }) => (
          <CheckboxCell
            value={getValue()}
            onChange={(checked) => updateCellData(row.original.id, 'checkbox', checked)}
          />
        ),
      },
      {
        accessorKey: 'radioButton',
        header: isRTL ? 'زر راديو' : 'Radio Button',
        size: 120,
        cell: ({ getValue, row }) => (
          <RadioButtonCell
            value={getValue()}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            onChange={(value) => updateCellData(row.original.id, 'radioButton', value)}
          />
        ),
      },
      {
        accessorKey: 'select',
        header: isRTL ? 'قائمة منسدلة' : 'Select',
        size: 150,
        cell: ({ getValue, row }) => (
          <SelectCell
            value={getValue()}
            options={[
              { label: 'Option A', value: 'option-a' },
              { label: 'Option B', value: 'option-b' },
              { label: 'Option C', value: 'option-c' },
            ]}
            onChange={(value) => updateCellData(row.original.id, 'select', value)}
          />
        ),
      },
      {
        accessorKey: 'textField',
        header: isRTL ? 'حقل نصي' : 'Text Field',
        size: 150,
        cell: ({ getValue, row }) => (
          <TextFieldCell
            value={getValue()}
            onChange={(value) => updateCellData(row.original.id, 'textField', value)}
          />
        ),
      },
      {
        accessorKey: 'number',
        header: isRTL ? 'رقم محدث' : 'Number Updated',
        size: 150,
        cell: ({ getValue }) => <UpdatedNumberCell value={getValue()} />,
      },
      {
        id: 'actions',
        header: isRTL ? 'إجراءات' : 'Actions',
        size: 100,
        cell: ({ row }) => (
          <ActionIconCell
            value={row.original}
            actions={[
              {
                icon: <IconEdit size={16} />,
                label: isRTL ? 'تعديل' : 'Edit',
                onClick: (rowData) => console.log('Edit:', rowData),
                tone: 'neutral' as const, // Secondary icon color
              },
              {
                icon: <IconTrash size={16} />,
                label: isRTL ? 'حذف' : 'Delete',
                onClick: (rowData) => console.log('Delete:', rowData),
                tone: 'critical' as const,
              },
            ]}
          />
        ),
      },
    ], [isRTL, updateCellData]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-600)' }}>
        {/* Grid Display */}
        <div>
          <h3 style={{
            marginBottom: 'var(--t-space-400)',
            font: 'var(--t-typography-heading-sm-default)',
            color: 'var(--t-color-text-primary)'
          }}>
            {isRTL ? 'شبكة أنواع الخلايا' : 'Cell Variants Grid'}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--t-space-400)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
          }}>
            {/* Text Single Line */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                TextSingleLineCell
              </div>
              <TextSingleLineCell value="Single line text" />
            </div>

            {/* Text Multiline */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                TextMultilineCell
              </div>
              <TextMultilineCell value="Primary line\nSecondary line" />
            </div>

            {/* Text Truncated */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                TextTruncatedCell
              </div>
              <TextTruncatedCell value="This is a very long text that will be truncated with ellipsis" />
            </div>

            {/* Text with Badge */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                TextSingleLineWithBadgeCell
              </div>
              <TextSingleLineWithBadgeCell value={{ text: 'Product Name', badge: 'New', badgeVariant: 'success' }} />
            </div>

            {/* Badge */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                BadgeCell
              </div>
              <BadgeCell value={{ text: 'Active', tone: 'success' }} />
            </div>

            {/* Badge Multiple */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                BadgeMultipleCell
              </div>
              <BadgeMultipleCell value={[
                { text: 'Tag 1', tone: 'info' },
                { text: 'Tag 2', tone: 'warning' }
              ]} />
            </div>

            {/* Checkbox */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                CheckboxCell
              </div>
              <CheckboxCell value={true} onChange={(checked) => console.log('Checkbox:', checked)} />
            </div>

            {/* Radio Button */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                RadioButtonCell
              </div>
              <RadioButtonCell
                value="option1"
                options={[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' }
                ]}
                onChange={(value) => console.log('Radio:', value)}
              />
            </div>

            {/* Select */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                SelectCell
              </div>
              <SelectCell
                value="option-a"
                options={[
                  { label: 'Option A', value: 'option-a' },
                  { label: 'Option B', value: 'option-b' }
                ]}
                onChange={(value) => console.log('Select:', value)}
              />
            </div>

            {/* Text Field */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                TextFieldCell
              </div>
              <TextFieldCell value="Editable text" onChange={(value) => console.log('TextField:', value)} />
            </div>

            {/* Updated Number */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                UpdatedNumberCell
              </div>
              <UpdatedNumberCell value={{ primary: 1250, secondary: 200 }} />
            </div>

            {/* Action Icon */}
            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-primary)',
              borderRadius: 'var(--t-border-radius-100)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <div style={{
                font: 'var(--t-typography-caption-lg-default)',
                color: 'var(--t-color-text-secondary)',
                marginBottom: 'var(--t-space-200)'
              }}>
                ActionIconCell
              </div>
              <ActionIconCell
                value={{}}
                actions={[
                  { icon: <IconEdit size={16} />, label: 'Edit', onClick: () => console.log('Edit') },
                  { icon: <IconTrash size={16} />, label: 'Delete', onClick: () => console.log('Delete'), tone: 'critical' }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Table Display */}
        <div>
          <h3 style={{
            marginBottom: 'var(--t-space-400)',
            font: 'var(--t-typography-heading-sm-default)',
            color: 'var(--t-color-text-primary)'
          }}>
            {isRTL ? 'عرض الجدول' : 'Table Display'}
          </h3>
          <Table
            data={cellVariantsData}
            columns={cellVariantColumns}
            title={isRTL ? 'جميع أنواع الخلايا' : 'All Cell Variants'}
            showHeader={true}
            showPagination={false}
            showSearch={false}
            showFilters={false}
          />
        </div>
      </div>
    );
  }
};

// Sales Data Variants
export const CellVariants: Story = {
  name: 'Sales Variant Showcase',
  render: (args, { globals }) => {
    const direction = globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';
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

    // Add search and filter functionality to interactive table
    const { searchQuery: interactiveSearchQuery, setSearchQuery: setInteractiveSearchQuery, filteredData: interactiveSearchFiltered } = useTableSearch(
      interactiveData,
      ['textField', 'select', 'radioButton'] // Search in text field and dropdown values
    );

    const { activeFilters: interactiveActiveFilters, setActiveFilters: setInteractiveActiveFilters, filteredData: interactiveFilterFiltered } = useTableFilters(interactiveSearchFiltered);

    // Get the final interactive data (search + filters)
    const finalInteractiveData = interactiveFilterFiltered;

    // Create customer/sales-specific filters for interactive table
    const interactiveFilterOptions = {
      select: {
        label: isRTL ? 'الأولوية' : 'Priority',
        type: 'select' as const,
        options: [
          { label: isRTL ? 'جميع الأولويات' : 'All Priorities', value: '' },
          { label: isRTL ? 'عالية' : 'High', value: 'high' },
          { label: isRTL ? 'متوسطة' : 'Medium', value: 'medium' },
          { label: isRTL ? 'منخفضة' : 'Low', value: 'low' },
        ]
      },
      radioButton: {
        label: isRTL ? 'الخيار' : 'Option',
        type: 'radioGroup' as const,
        options: [
          { label: isRTL ? 'الخيار الأول' : 'Option 1', value: 'option1' },
          { label: isRTL ? 'الخيار الثاني' : 'Option 2', value: 'option2' },
          { label: isRTL ? 'الخيار الثالث' : 'Option 3', value: 'option3' },
        ]
      }
    };

    // Handlers for interactive cells
    const handleCheckboxChange = useCallback((checked: boolean, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, checkbox: checked } : item
        )
      );
    }, []);

    const handleSelectChange = useCallback((value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, select: value } : item
        )
      );
    }, []);

    const handleRadioChange = useCallback((value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, radioButton: value } : item
        )
      );
    }, []);

    const handleTextFieldChange = useCallback((value: string, row: any) => {
      setInteractiveData(prevData => 
        prevData.map(item => 
          item.id === row.id ? { ...item, textField: value } : item
        )
      );
    }, []);

         const handleActionClick = useCallback((row: any) => {
       alert(`Action clicked for ID: ${row.id}`);
     }, []);

     const handleEditAction = useCallback((row: any) => {
       alert(`Edit clicked for: ${row.id}`);
     }, []);

     const handleDeleteAction = useCallback((row: any) => {
       alert(`Delete clicked for: ${row.id}`);
     }, []);

     // Column definitions for each grid
    const textVariantColumns: ColumnDef<any, any>[] = useMemo(() => [
      { ...createCellColumn('singleLine', 'Single Line Text', 'textSingleLine'), size: 140 },
      { ...createCellColumn('multiLine', 'Multi-line Text', 'textMultiline'), size: 140 },
      { ...createCellColumn('truncated', 'Truncated Text', 'textTruncated'), size: 140 },
      { ...createCellColumn('withBadge', 'Text + Badge', 'textSingleLineWithBadge'), size: 140 }
    ], []);

    const badgeVariantColumns: ColumnDef<any, any>[] = useMemo(() => [
      { ...createCellColumn('single', 'Single Badge', 'badge'), size: 120 },
      { ...createCellColumn('multiple', 'Multiple Badges', 'badgeMultiple'), size: 200 }
    ], []);

    const interactiveVariantColumns: ColumnDef<any, any>[] = useMemo(() => [
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
     ], [handleCheckboxChange, handleSelectChange, handleRadioChange, handleTextFieldChange]);

     // Enhanced variants columns for Figma designs
     const enhancedVariantColumns: ColumnDef<any, any>[] = useMemo(() => [
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
     ], [handleEditAction, handleDeleteAction]);

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
            data={finalInteractiveData}
            columns={interactiveVariantColumns}
            title="Interactive Variants"
            badge={finalInteractiveData.length}
            showPagination={false}
            showSearch={true}
            showFilters={true}
            searchQuery={interactiveSearchQuery}
            onSearchChange={setInteractiveSearchQuery}
            searchConfig={{
              placeholder: getSearchPlaceholder('sales', isRTL),
              debounceMs: 300,
              minLength: 0
            }}
            activeFilters={interactiveActiveFilters}
            onFilterChange={setInteractiveActiveFilters}
            filterOptions={interactiveFilterOptions}
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
  render: (args, { globals }) => {
    const direction = globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';
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

// Fixed Pagination Story - Demonstrates working pagination with API data
export const FixedPagination: Story = {
  name: 'Fixed Pagination with API Data',
  render: () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    
    // Simulate API data (in real usage, this would come from an API call)
    const allData = useMemo(() => {
      const data = [];
      for (let i = 1; i <= 50; i++) {
        data.push({
          id: i,
          name: `Product ${i}`,
          stockCollectors: Math.floor(Math.random() * 500) + 10,
          stockWarehouse: Math.floor(Math.random() * 1000) + 50,
        });
      }
      return data;
    }, []);

    const pagination = {
      pageIndex: currentPage,
      pageSize: pageSize,
      pageCount: Math.ceil(allData.length / pageSize),
      onPageChange: (pageIndex: number) => {
        setCurrentPage(pageIndex);
        // In real usage, this would trigger an API call
        console.log(`Loading page ${pageIndex + 1}`);
      },
      onPageSizeChange: (newPageSize: number) => {
        setPageSize(newPageSize);
        setCurrentPage(0); // Reset to first page
        console.log(`Changing page size to ${newPageSize}`);
      },
      pageSizeOptions: [5, 10, 25, 50],
      // isServerSide: false for client-side pagination (default)
      // isServerSide: true for server-side pagination
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#28a745' }}>✅ Fixed Pagination</h3>
          <p style={{ margin: '0', color: '#6c757d' }}>
            <strong>Issue Fixed:</strong> Pagination now properly slices data and updates content when pages change.
            <br />
            <strong>Current Page:</strong> {currentPage + 1} of {pagination.pageCount} | 
            <strong> Page Size:</strong> {pageSize} | 
            <strong> Total Items:</strong> {allData.length}
          </p>
        </div>
        
        <Table
          data={allData}
          columns={productColumns}
          title="Fixed Pagination Demo"
          pagination={pagination}
          striped={false}
          showHeader={true}
          showSearch={true}
          showFilters={true}
          showPagination={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Fixed pagination behavior** - Content now properly changes when switching pages. The `manualPagination` setting is now correctly applied only for server-side pagination scenarios.'
      }
    }
  }
};

// Fast Filters Performance Story
export const FastFilters: Story = {
  name: 'Fast Filters Performance',
  render: () => {
    const [filters, setFilters] = useState<Record<string, any>>({});
    const [lastFilterTime, setLastFilterTime] = useState<Date | null>(null);
    
    // Generate more data for filter performance testing
    const filterTestData = useMemo(() => {
      const data = [];
      const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'];
      const statuses = ['Active', 'Inactive', 'Pending'];
      
      for (let i = 1; i <= 100; i++) {
        data.push({
          id: i,
          name: `Product ${i}`,
          category: categories[Math.floor(Math.random() * categories.length)],
          status: statuses[Math.floor(Math.random() * statuses.length)],
          price: Math.floor(Math.random() * 1000) + 10,
          stockCollectors: Math.floor(Math.random() * 500) + 10,
          stockWarehouse: Math.floor(Math.random() * 1000) + 50,
        });
      }
      return data;
    }, []);

    const filterOptions = {
      category: {
        label: 'Category',
        type: 'popoverListbox' as const,
        options: [
          { label: 'All Categories', value: '' },
          { label: 'Electronics', value: 'Electronics' },
          { label: 'Clothing', value: 'Clothing' },
          { label: 'Food', value: 'Food' },
          { label: 'Books', value: 'Books' },
          { label: 'Sports', value: 'Sports' },
        ],
      },
      status: {
        label: 'Status',
        type: 'popoverListbox' as const,
        options: [
          { label: 'All Status', value: '' },
          { label: 'Active', value: 'Active' },
          { label: 'Inactive', value: 'Inactive' },
          { label: 'Pending', value: 'Pending' },
        ],
      },
      priceRange: {
        label: 'Price Range',
        type: 'rangeSlider' as const,
        rangeConfig: {
          min: 0,
          max: 1000,
          step: 10,
          formatValue: (value: number) => `$${value}`,
          prefix: '$',
        }
      }
    };

    const filterColumns: ColumnDef<any, any>[] = [
      { ...QuickColumns.number('id', 'ID'), size: 60 },
      { ...QuickColumns.text('name', 'Product'), size: 200 },
      { ...QuickColumns.text('category', 'Category'), size: 120 },
      { ...QuickColumns.text('status', 'Status'), size: 100 },
      { ...QuickColumns.number('price', 'Price'), size: 100 },
      { ...QuickColumns.number('stockCollectors', 'Stock'), size: 100 },
    ];

    const handleFilterChange = (newFilters: Record<string, any>) => {
      setFilters(newFilters);
      setLastFilterTime(new Date());
    };

    // Filter the data based on active filters
    const filteredData = useMemo(() => {
      return filterTestData.filter(item => {
        // Category filter
        if (filters.category && filters.category !== '') {
          if (item.category !== filters.category) return false;
        }
        
        // Status filter
        if (filters.status && filters.status !== '') {
          if (item.status !== filters.status) return false;
        }
        
        // Price range filter
        if (filters.priceRange && Array.isArray(filters.priceRange)) {
          const [minPrice, maxPrice] = filters.priceRange;
          if (item.price < minPrice || item.price > maxPrice) return false;
        }
        
        return true;
      });
    }, [filterTestData, filters]);

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#28a745' }}>⚡ Optimized Filter Performance</h3>
          <div style={{ color: '#6c757d', fontSize: '14px' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Performance Improvements:</strong>
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li><strong>Dropdown filters:</strong> Immediate response (0ms debounce)</li>
              <li><strong>Range sliders:</strong> Fast response (100ms debounce)</li>
              <li><strong>Text inputs:</strong> Quick response (200ms debounce, reduced from 500ms)</li>
              <li><strong>Memory optimization:</strong> React.memo prevents unnecessary re-renders</li>
            </ul>
            <p style={{ margin: '8px 0 0 0', fontWeight: 'bold', color: '#28a745' }}>
              <strong>Results:</strong> Showing {filteredData.length} of {filterTestData.length} items
              {Object.keys(filters).length > 0 && ` (${Object.keys(filters).length} filters active)`}
            </p>
            {lastFilterTime && (
              <p style={{ margin: '8px 0 0 0', fontWeight: 'bold', color: '#28a745' }}>
                Last filter applied: {lastFilterTime.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
        
        <Table
          data={filteredData}
          columns={filterColumns}
          title="Fast Filters Performance Demo"
          badge={filteredData.length}
          striped={false}
          showHeader={true}
          showSearch={true}
          showFilters={true}
          showFilterBar={true}
          activeFilters={filters}
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
          showPagination={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Optimized filter performance** - Filters now respond immediately with differentiated debounce timing. Try the dropdown filters (immediate), range sliders (100ms), and notice the improved responsiveness.'
      }
    }
  }
};

// Default Non-Striped Story
export const DefaultNonStriped: Story = {
  name: 'Default Non-Striped Rows',
  render: () => {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#28a745' }}>✅ Default Non-Striped</h3>
          <p style={{ margin: '0', color: '#6c757d' }}>
            <strong>Issue Fixed:</strong> Table now defaults to non-striped rows (white background) for better interactivity and modern appearance.
            <br />
            <strong>When to use striped:</strong> Only for static, read-only data tables. For interactive tables, keep striped=false (default).
          </p>
        </div>
        
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h4 style={{ marginBottom: '12px' }}>Default (striped=false)</h4>
            <Table
              data={sampleProducts.slice(0, 5)}
              columns={productColumns.slice(0, 3)}
              title="Interactive Table"
              showHeader={true}
              showPagination={true}
              onRowClick={(row) => alert(`Clicked row ${row.original.id}`)}
            />
          </div>
          
          <div>
            <h4 style={{ marginBottom: '12px' }}>With Striped (striped=true)</h4>
            <Table
              data={sampleProducts.slice(0, 5)}
              columns={productColumns.slice(0, 3)}
              title="Static Display Table"
              striped={true}
              showHeader={true}
              showPagination={true}
              disableRowHover={true}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Default non-striped behavior** - The table now defaults to non-striped rows for better interactivity. Compare the default vs striped versions side by side.'
      }
    }
  }
};

// Client-Side Search Story
export const ClientSideSearch: Story = {
  name: 'Client-Side Search (Debounced)',
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    // Client-side filtering logic
    const filteredData = useMemo(() => {
      if (!searchQuery) return sampleProducts;
      
      const query = searchQuery.toLowerCase();
      return sampleProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.id.toString().includes(query)
      );
    }, [searchQuery]);
    
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#e7f3ff', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>🔍 Client-Side Search</h3>
          <div style={{ fontSize: '14px', color: '#555', lineHeight: 1.5 }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Configuration:</strong> 300ms debounce, immediate filtering, no minimum length
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Best For:</strong> Small to medium datasets (&lt; 1000 rows), fast user experience
            </p>
            <p style={{ margin: '0' }}>
              <strong>Results:</strong> Showing {filteredData.length} of {sampleProducts.length} products
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>
        
        <Table
          data={filteredData}
          columns={productColumns}
          title="Client-Side Search Demo"
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchConfig={{
            debounceMs: 300,
            serverSide: false,
            minLength: 0,
            placeholder: "Search products by name or ID..."
          }}
          showHeader={true}
          showSearch={true}
          showFilters={false}
          showPagination={true}
          badge={filteredData.length}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Client-side search** with 300ms debouncing. Filtering happens immediately in the browser, providing fast search experience for smaller datasets.'
      }
    }
  }
};

// Server-Side Search Story
export const ServerSideSearch: Story = {
  name: 'Server-Side Search (Simulated)',
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(sampleProducts);
    
    // Simulate server-side search
    const performSearch = useCallback(async (query: string) => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const filteredResults = query 
        ? sampleProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.id.toString().includes(query)
          )
        : sampleProducts;
      
      setResults(filteredResults);
      setLoading(false);
    }, []);
    
    // Trigger search when query changes
    useEffect(() => {
      performSearch(searchQuery);
    }, [searchQuery, performSearch]);
    
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#856404' }}>🌐 Server-Side Search</h3>
          <div style={{ fontSize: '14px', color: '#555', lineHeight: 1.5 }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Configuration:</strong> 500ms debounce, minimum 2 characters, simulated API calls
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Best For:</strong> Large datasets, search indexes, complex queries
            </p>
            <p style={{ margin: '0' }}>
              <strong>Status:</strong> {loading ? 'Searching...' : `Found ${results.length} results`}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>
        
        <Table
          data={results}
          columns={productColumns}
          title="Server-Side Search Demo"
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchConfig={{
            debounceMs: 500,
            serverSide: true,
            minLength: 2,
            placeholder: "Search server data (min 2 chars)..."
          }}
          showHeader={true}
          showSearch={true}
          showFilters={false}
          showPagination={true}
          badge={results.length}
          state={loading ? 'loading' : 'normal'}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Server-side search** with 500ms debouncing and 2-character minimum. Simulates API calls with loading states for large dataset searching.'
      }
    }
  }
};

// Search Configuration Showcase
export const SearchConfigShowcase: Story = {
  name: 'Search Configuration Showcase',
  render: () => {
    const [config1Query, setConfig1Query] = useState('');
    const [config2Query, setConfig2Query] = useState('');
    const [config3Query, setConfig3Query] = useState('');
    
    const searchConfigs = [
      {
        title: 'Fast Client-Side (100ms)',
        query: config1Query,
        setQuery: setConfig1Query,
        config: {
          debounceMs: 100,
          serverSide: false,
          minLength: 0,
          placeholder: "Ultra-fast search..."
        },
        description: 'Immediate feedback, ideal for small datasets'
      },
      {
        title: 'Balanced (300ms)',
        query: config2Query,
        setQuery: setConfig2Query,
        config: {
          debounceMs: 300,
          serverSide: false,
          minLength: 1,
          placeholder: "Balanced search (1 char min)..."
        },
        description: 'Good balance of performance and UX'
      },
      {
        title: 'Conservative Server (800ms)',
        query: config3Query,
        setQuery: setConfig3Query,
        config: {
          debounceMs: 800,
          serverSide: true,
          minLength: 3,
          placeholder: "Conservative search (3 chars min)..."
        },
        description: 'Reduces server load, good for expensive queries'
      }
    ];
    
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#28a745' }}>⚙️ Search Configuration Options</h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#6c757d' }}>
            Compare different search configurations to find the best balance for your use case.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {searchConfigs.map((config, index) => (
              <div key={index} style={{ padding: '12px', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #dee2e6' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#495057' }}>{config.title}</h4>
                <p style={{ margin: '0', fontSize: '12px', color: '#6c757d' }}>{config.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'grid', gap: '30px' }}>
          {searchConfigs.map((config, index) => {
            const filteredData = config.query 
              ? sampleProducts.filter(product => 
                  product.name.toLowerCase().includes(config.query.toLowerCase()) ||
                  product.id.toString().includes(config.query)
                )
              : sampleProducts.slice(0, 5);
            
            return (
              <div key={index} style={{ border: '1px solid #e9ecef', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
                  <h4 style={{ margin: '0', fontSize: '16px', color: '#495057' }}>{config.title}</h4>
                  <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6c757d' }}>
                    Debounce: {config.config.debounceMs}ms | Min Length: {config.config.minLength} | 
                    Results: {filteredData.length}
                  </p>
                </div>
                <Table
                  data={filteredData}
                  columns={productColumns.slice(0, 3)}
                  title={`${config.title} Demo`}
                  searchQuery={config.query}
                  onSearchChange={config.setQuery}
                  searchConfig={config.config}
                  showHeader={true}
                  showSearch={true}
                  showFilters={false}
                  showPagination={false}
                  badge={filteredData.length}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Search configuration showcase** - Compare different debounce timings, minimum lengths, and server-side vs client-side configurations to find the optimal setup for your use case.'
      }
    }
  }
};

// Pinned Columns Stories
export const PinnedColumns: Story = {
  render: () => {
    // Sample data with more columns to demonstrate pinning
    const wideTableData = [
      { id: 1, name: 'Product A', category: 'Electronics', status: 'Active', price: 299.99, stock: 50, description: 'High-quality electronics', supplier: 'Supplier A', lastUpdated: '2023-12-01' },
      { id: 2, name: 'Product B', category: 'Clothing', status: 'Active', price: 89.99, stock: 25, description: 'Comfortable clothing', supplier: 'Supplier B', lastUpdated: '2023-12-02' },
      { id: 3, name: 'Product C', category: 'Food', status: 'Inactive', price: 15.99, stock: 0, description: 'Organic food products', supplier: 'Supplier C', lastUpdated: '2023-12-03' },
      { id: 4, name: 'Product D', category: 'Books', status: 'Active', price: 29.99, stock: 100, description: 'Educational books', supplier: 'Supplier D', lastUpdated: '2023-12-04' },
      { id: 5, name: 'Product E', category: 'Sports', status: 'Pending', price: 199.99, stock: 15, description: 'Sports equipment', supplier: 'Supplier E', lastUpdated: '2023-12-05' },
    ];

    // Create columns with different pinning configurations
    const pinnedColumns: ColumnDef<any, any>[] = [
      // Pinned left - ID column for easy reference
      { 
        ...QuickColumns.number('id', 'ID'), 
        size: 80,
        meta: { ...QuickColumns.number('id', 'ID').meta, pinned: 'left' }
      },
      // Regular unpinned columns in the center
      { ...QuickColumns.text('name', 'Product Name'), size: 200 },
      { ...QuickColumns.text('category', 'Category'), size: 120 },
      { ...QuickColumns.text('status', 'Status'), size: 100 },
      { ...QuickColumns.number('price', 'Price'), size: 100 },
      { ...QuickColumns.number('stock', 'Stock'), size: 100 },
      { ...QuickColumns.text('description', 'Description'), size: 250 },
      { ...QuickColumns.text('supplier', 'Supplier'), size: 150 },
      { ...QuickColumns.text('lastUpdated', 'Last Updated'), size: 120 },
      // Pinned right - Actions column (automatically pinned by default)
      {
        ...QuickColumns.actions('Actions', (row) => {
          alert(`Action clicked for: ${row.name}`);
        }),
        size: 100,
      },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#007bff' }}>📌 Pinned Columns Demo</h3>
          <div style={{ color: '#6c757d', fontSize: '14px' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Pinning Configuration:</strong>
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li><strong>Left Pinned:</strong> ID column - always visible for easy row identification</li>
              <li><strong>Center Columns:</strong> Scrollable content columns (Name, Category, Status, etc.)</li>
              <li><strong>Right Pinned:</strong> Actions column - always accessible for row operations</li>
            </ul>
            <p style={{ margin: '8px 0 0 0', fontWeight: 'bold', color: '#007bff' }}>
              <strong>Try:</strong> Scroll horizontally to see pinned columns stay in place!
            </p>
          </div>
        </div>
        
        <div style={{ overflow: 'auto', maxWidth: '800px', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <Table
            data={wideTableData}
            columns={pinnedColumns}
            title="Products with Pinned Columns"
            showHeader={true}
            showSearch={false}
            showFilters={false}
            showPagination={false}
            badge={wideTableData.length}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Pinned columns** - Demonstrates left and right column pinning. The ID column is pinned to the left for easy reference, while the Actions column is pinned to the right for consistent access to row operations.'
      }
    }
  }
};

export const PinnedColumnsCustom: Story = {
  render: () => {
    // Sample data for custom pinning demo
    const customData = [
      { priority: 'High', task: 'Fix critical bug', assignee: 'John Doe', department: 'Engineering', startDate: '2023-12-01', endDate: '2023-12-15', budget: 5000, status: 'In Progress' },
      { priority: 'Medium', task: 'Update documentation', assignee: 'Jane Smith', department: 'Product', startDate: '2023-12-05', endDate: '2023-12-20', budget: 2000, status: 'Planning' },
      { priority: 'Low', task: 'Code cleanup', assignee: 'Bob Johnson', department: 'Engineering', startDate: '2023-12-10', endDate: '2023-12-25', budget: 1000, status: 'Backlog' },
    ];

    // Create columns with custom pinning - pin priority and status columns
    const customPinnedColumns: ColumnDef<any, any>[] = [
      // Left pinned - Priority for immediate visibility
      { 
        ...QuickColumns.text('priority', 'Priority'), 
        size: 100,
        meta: { ...QuickColumns.text('priority', 'Priority').meta, pinned: 'left' }
      },
      // Center scrollable columns
      { ...QuickColumns.text('task', 'Task Description'), size: 300 },
      { ...QuickColumns.text('assignee', 'Assignee'), size: 150 },
      { ...QuickColumns.text('department', 'Department'), size: 120 },
      { ...QuickColumns.text('startDate', 'Start Date'), size: 120 },
      { ...QuickColumns.text('endDate', 'End Date'), size: 120 },
      { ...QuickColumns.number('budget', 'Budget ($)'), size: 120 },
      // Right pinned - Status and Actions for easy access
      { 
        ...QuickColumns.text('status', 'Status'), 
        size: 120,
        meta: { ...QuickColumns.text('status', 'Status').meta, pinned: 'right' }
      },
      {
        ...QuickColumns.actions('', (row) => {
          alert(`Edit task: ${row.task}`);
        }),
        size: 80,
        // Actions are automatically pinned right by default
      },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#0056b3' }}>🎯 Custom Pinned Columns</h3>
          <div style={{ color: '#6c757d', fontSize: '14px' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Advanced Pinning Strategy:</strong>
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li><strong>Priority (Left):</strong> Always visible for quick task prioritization</li>
              <li><strong>Status + Actions (Right):</strong> Key operational columns for task management</li>
              <li><strong>Details (Center):</strong> Scrollable task information and metadata</li>
            </ul>
            <p style={{ margin: '8px 0 0 0', fontWeight: 'bold', color: '#0056b3' }}>
              <strong>Usage:</strong> Pin columns based on workflow importance and frequency of access
            </p>
          </div>
        </div>
        
        <div style={{ overflow: 'auto', maxWidth: '900px', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <Table
            data={customData}
            columns={customPinnedColumns}
            title="Task Management - Custom Pinning"
            showHeader={true}
            showSearch={false}
            showFilters={false}
            showPagination={false}
            badge={customData.length}
          />
        </div>
        
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#856404' }}>💡 Best Practices for Column Pinning</h4>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#856404', fontSize: '14px' }}>
            <li><strong>Left pinning:</strong> Use for identifier columns (ID, Priority, Name)</li>
            <li><strong>Right pinning:</strong> Use for action columns and status indicators</li>
            <li><strong>Performance:</strong> Pinned columns use sticky positioning with optimized z-index</li>
            <li><strong>Accessibility:</strong> Maintains keyboard navigation and screen reader compatibility</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom pinned columns** - Advanced example showing how to pin multiple columns strategically. Priority is pinned left for quick identification, while Status and Actions are pinned right for operational efficiency.'
      }
    }
  }
};

// ScrollArea integration story
export const WithScrollArea: Story = {
  name: 'Table with ScrollArea',
  render: (args, { globals }) => {
    const direction = globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';

    // Extended sample data to show scrolling
    const extendedProducts = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1} - منتج رقم ${index + 1}`,
      stockCollectors: Math.floor(Math.random() * 1000),
      stockWarehouse: Math.floor(Math.random() * 1000),
    }));

    // Use search functionality for products (search by name and ID)
    const { searchQuery, setSearchQuery, filteredData: searchFiltered } = useTableSearch(
      extendedProducts,
      ['name', 'id']
    );

    // Use filter functionality
    const { activeFilters, setActiveFilters, filteredData: filterFiltered } = useTableFilters(searchFiltered);

    // Get the final filtered data (search + filters)
    const finalData = filterFiltered;

    // Create filter options for products
    const filterOptions = createProductFilters(isRTL);

    // Wide columns to demonstrate horizontal scrolling
    const wideColumns: ColumnDef<Product, any>[] = [
      createCellColumn('id', 'ID', 'textSingleLine', { width: '100px' }),
      createCellColumn('name', 'Product Name', 'textSingleLine', { width: '400px' }),
      createCellColumn('stockCollectors', 'Stock (Collectors)', 'textSingleLine', { width: '200px' }),
      createCellColumn('stockWarehouse', 'Stock (Warehouse)', 'textSingleLine', { width: '200px' }),
      // Duplicate columns for horizontal scrolling demo
      createCellColumn('id', 'ID Copy 1', 'textSingleLine', { width: '100px' }),
      createCellColumn('name', 'Product Name Copy 1', 'textSingleLine', { width: '400px' }),
      createCellColumn('stockCollectors', 'Stock (Collectors) Copy 1', 'textSingleLine', { width: '200px' }),
      createCellColumn('stockWarehouse', 'Stock (Warehouse) Copy 1', 'textSingleLine', { width: '200px' }),
      createCellColumn('id', 'ID Copy 2', 'textSingleLine', { width: '100px' }),
      createCellColumn('name', 'Product Name Copy 2', 'textSingleLine', { width: '400px' }),
    ];

    return (
      <div style={{ width: '800px', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px' }}>
        <h3 style={{ marginBottom: '16px' }}>ScrollArea Table Demo</h3>
        <Table
          {...args}
          data={finalData}
          columns={wideColumns}
          enableScrollArea={true}
          scrollAreaHeight="300px"
          scrollAreaWidth="100%"
          enableHorizontalScroll={true}
          enableVerticalScroll={true}
          scrollAreaType="hover"
          title="Products with ScrollArea"
          badge={finalData.length}
          showPagination={false}
          showSearch={true}
          showFilters={true}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchConfig={{
            placeholder: getSearchPlaceholder('products', isRTL),
            debounceMs: 300,
            minLength: 0
          }}
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
          filterOptions={filterOptions}
        />
      </div>
    );
  },
  args: {
    striped: true,
    gridCells: true,
    showHeader: true,
  },
  parameters: {
    docs: {
      description: {
        story: '**ScrollArea Integration** - Demonstrates how the Table component integrates with ScrollArea for custom scrolling behavior. The table is wrapped in a ScrollArea with both horizontal and vertical scrolling enabled.'
      }
    }
  }
};

