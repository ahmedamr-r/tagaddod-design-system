import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import"./index-D4H_InIO.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"table-component---ai-agent-implementation-guide",children:"Table Component - AI Agent Implementation Guide"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Version:"}),` 1.0.0
`,e.jsx(n.strong,{children:"Component:"}),` @tagaddod-design/react Table
`,e.jsx(n.strong,{children:"Documentation Type:"}),` AI Agent Optimized
`,e.jsx(n.strong,{children:"Related Docs:"})," ",e.jsx(n.a,{href:"./Table-CELL-VARIANTS-GUIDE.md",children:"Table-CELL-VARIANTS-GUIDE.md"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-navigation-index",children:"Quick Navigation Index"}),`
`,e.jsx(n.h3,{id:"-basics-lines-30-150",children:"📦 BASICS (Lines 30-150)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Import & Setup"}),`
`,e.jsx(n.li,{children:"Core Props Interface"}),`
`,e.jsx(n.li,{children:"Basic Implementation"}),`
`]}),`
`,e.jsx(n.h3,{id:"️-table-features-lines-151-450",children:"🎛️ TABLE FEATURES (Lines 151-450)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pagination (Client & Server-Side)"}),`
`,e.jsx(n.li,{children:"Filtering System (Lines 250-380)"}),`
`,e.jsx(n.li,{children:"Search Functionality"}),`
`,e.jsx(n.li,{children:"Tabbed Tables"}),`
`,e.jsx(n.li,{children:"Column Management (Ordering, Resizing, Pinning)"}),`
`]}),`
`,e.jsx(n.h3,{id:"-visual-configuration-lines-451-550",children:"🎨 VISUAL CONFIGURATION (Lines 451-550)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Striped vs Non-Striped"}),`
`,e.jsx(n.li,{children:"Grid Cells"}),`
`,e.jsx(n.li,{children:"Row Hover States"}),`
`,e.jsx(n.li,{children:"ScrollArea Integration"}),`
`]}),`
`,e.jsx(n.h3,{id:"-state-management-lines-551-650",children:"🔄 STATE MANAGEMENT (Lines 551-650)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Table States (normal, error, empty, loading, notFound)"}),`
`,e.jsx(n.li,{children:"Controlled vs Uncontrolled"}),`
`,e.jsx(n.li,{children:"State Synchronization"}),`
`]}),`
`,e.jsx(n.h3,{id:"-rtl--internationalization-lines-651-720",children:"🌍 RTL & INTERNATIONALIZATION (Lines 651-720)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"RTL Detection"}),`
`,e.jsx(n.li,{children:"Arabic Text Handling"}),`
`,e.jsx(n.li,{children:"Directional Props"}),`
`]}),`
`,e.jsx(n.h3,{id:"-advanced-patterns-lines-721-900",children:"⚡ ADVANCED PATTERNS (Lines 721-900)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Server-Side Data Fetching"}),`
`,e.jsx(n.li,{children:"Custom State Management"}),`
`,e.jsx(n.li,{children:"Performance Optimization"}),`
`]}),`
`,e.jsx(n.h3,{id:"-troubleshooting-lines-901-1000",children:"🐛 TROUBLESHOOTING (Lines 901-1000)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Common Issues & Solutions"}),`
`,e.jsx(n.li,{children:"Performance Tips"}),`
`,e.jsx(n.li,{children:"Debugging Strategies"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import--basic-setup",children:"Import & Basic Setup"}),`
`,e.jsx(n.h3,{id:"required-imports",children:"Required Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Table } from '@tagaddod-design/react';
import { ColumnDef } from '@tanstack/react-table';

// For cell variants (see Table-CELL-VARIANTS-GUIDE.md)
import {
  QuickColumns,
  createCellColumn,
  createCustomCellColumn,
  TableCellVariants
} from '@tagaddod-design/react';
`})}),`
`,e.jsx(n.h3,{id:"minimal-working-example",children:"Minimal Working Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from '@tagaddod-design/react';

// Define your data type
interface Product {
  id: number;
  name: string;
  price: number;
}

// Define columns
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
  },
  {
    accessorKey: 'name',
    header: 'Product Name',
    size: 200,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    size: 120,
  },
];

// Sample data
const data: Product[] = [
  { id: 1, name: 'Widget', price: 29.99 },
  { id: 2, name: 'Gadget', price: 49.99 },
];

// Render
function ProductTable() {
  return (
    <Table
      data={data}
      columns={columns}
      title="Products"
    />
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"core-props-reference",children:"Core Props Reference"}),`
`,e.jsx(n.h3,{id:"tableprops-interface",children:"TableProps Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface TableProps<T extends object> {
  // REQUIRED
  data: T[];                              // Array of data objects
  columns: ColumnDef<T, any>[];          // Column definitions (TanStack Table)

  // DISPLAY CONFIGURATION
  title?: string;                         // Header title
  badge?: number;                         // Badge count next to title
  showTotalBadge?: boolean;              // Auto-calculate badge from data (default: true)
  striped?: boolean;                     // Alternating row colors (default: false)
  gridCells?: boolean;                   // Show cell borders (default: false)
  disableRowHover?: boolean;             // Disable hover effects (default: false)

  // FEATURE TOGGLES
  showHeader?: boolean;                  // Show title/search/filter bar (default: true)
  showPagination?: boolean;              // Show pagination controls (default: true)
  showSearch?: boolean;                  // Show search input (default: true)
  showFilters?: boolean;                 // Show filter button (default: true)
  showFilterBar?: boolean;               // Show filter bar initially (default: false)
  showExport?: boolean;                  // Show export button (default: false)
  showTabs?: boolean;                    // Enable tabbed interface (default: false)

  // COLUMN FEATURES
  enableColumnOrdering?: boolean;        // Drag-drop column reorder (default: false)
  enableColumnResizing?: boolean;        // Interactive column resize (default: false)

  // PAGINATION
  pagination?: {
    pageSize: number;                    // Items per page
    pageIndex: number;                   // Current page (0-indexed)
    pageCount: number;                   // Total pages
    onPageChange: (pageIndex: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];          // Options for page size selector
    isServerSide?: boolean;              // Enable server-side pagination
  };

  // SEARCH CONFIGURATION
  searchQuery?: string;                  // Controlled search value
  onSearchChange?: (query: string) => void;
  searchConfig?: {
    debounceMs?: number;                 // Debounce delay (default: 300ms)
    serverSide?: boolean;                // Server-side search (default: false)
    minLength?: number;                  // Min chars to trigger (default: 0)
    placeholder?: string;                // Custom placeholder
  };

  // FILTERING
  activeFilters?: { [key: string]: any }; // Current filter values
  onFilterChange?: (filters: { [key: string]: any }) => void;
  filterOptions?: {
    [key: string]: {
      label: string;
      type?: 'select' | 'rangeSlider' | 'checkboxGroup' | 'radioGroup' | 'currentFilters';
      options?: Array<{ label: string; value: any }>;
      rangeConfig?: {
        min: number;
        max: number;
        step?: number;
        prefix?: string;
        suffix?: string;
        formatValue?: (value: number) => string;
      };
    };
  };

  // TABS
  tabItems?: Array<{
    id: string;
    label: string;
    active?: boolean;
    badge?: number;
  }>;

  tableTabs?: Array<TableTab<T>>;       // Enhanced tabs with separate data/columns
  onTabChange?: (tabId: string) => void;

  // STATE MANAGEMENT
  state?: 'normal' | 'error' | 'empty' | 'notFound' | 'loading';
  errorMessage?: string;
  emptyMessage?: string;
  notFoundMessage?: string;
  notFoundSubtitle?: string;
  emptyStateNode?: ReactNode;            // Custom empty state component

  // SORTING
  defaultSorting?: SortingState;        // Initial sort configuration
  defaultColumnVisibility?: VisibilityState;

  // INTERACTIONS
  onRowClick?: (row: Row<T>) => void;
  onCellClick?: (cell: Cell<T, unknown>) => void;
  onExport?: () => void;

  // SCROLLING
  enableScrollArea?: boolean;            // Wrap in ScrollArea (default: false)
  scrollAreaHeight?: string | number;    // ScrollArea height (default: '400px')
  scrollAreaWidth?: string | number;     // ScrollArea width (default: '100%')
  enableHorizontalScroll?: boolean;      // Enable horizontal scroll (default: true)
  enableVerticalScroll?: boolean;        // Enable vertical scroll (default: true)
  scrollAreaType?: 'always' | 'scroll' | 'hover' | 'auto';

  // CUSTOM CONTENT
  footerContent?: ReactNode;             // Custom footer content
  className?: string;                    // Additional CSS classes
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"pagination-implementation",children:"Pagination Implementation"}),`
`,e.jsx(n.h3,{id:"client-side-pagination-default",children:"Client-Side Pagination (Default)"}),`
`,e.jsx(n.p,{children:"For data that is already loaded, use client-side pagination:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ClientPaginatedTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // Calculate total pages from full dataset
  const pageCount = Math.ceil(data.length / pageSize);

  return (
    <Table
      data={data}  // Full dataset
      columns={columns}
      pagination={{
        pageIndex: currentPage,
        pageSize: pageSize,
        pageCount: pageCount,
        onPageChange: setCurrentPage,
        onPageSizeChange: setPageSize,
        pageSizeOptions: [10, 20, 50, 100],
        // isServerSide: false (default)
      }}
    />
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Points:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Table handles data slicing internally"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pageCount"})," is calculated from full dataset"]}),`
`,e.jsxs(n.li,{children:["No need to set ",e.jsx(n.code,{children:"isServerSide"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"server-side-pagination",children:"Server-Side Pagination"}),`
`,e.jsx(n.p,{children:"For large datasets fetched from an API:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ServerPaginatedTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data when page or page size changes
  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  async function fetchData(page: number, size: number) {
    setLoading(true);
    try {
      const response = await fetch(
        \`/api/products?page=\${page}&pageSize=\${size}\`
      );
      const result = await response.json();

      setData(result.data);
      setTotalPages(result.totalPages);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Table
      data={data}  // Current page data only
      columns={columns}
      state={loading ? 'loading' : 'normal'}
      pagination={{
        pageIndex: currentPage,
        pageSize: pageSize,
        pageCount: totalPages,  // From API response
        onPageChange: (page) => setCurrentPage(page),
        onPageSizeChange: (size) => {
          setPageSize(size);
          setCurrentPage(0);  // Reset to first page
        },
        pageSizeOptions: [10, 20, 50, 100],
        isServerSide: true,  // CRITICAL: Enable server-side mode
      }}
    />
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Points:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MUST"})," set ",e.jsx(n.code,{children:"isServerSide: true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data"})," contains only current page items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pageCount"})," from API, not calculated"]}),`
`,e.jsx(n.li,{children:"Handle loading state yourself"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"filtering-system",children:"Filtering System"}),`
`,e.jsx(n.h3,{id:"critical-concept-table-does-not-filter-data",children:"CRITICAL CONCEPT: Table Does NOT Filter Data"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Table component provides the filter UI but does NOT perform filtering."}),`
You must implement the filtering logic yourself and pass the filtered data.`]}),`
`,e.jsx(n.h3,{id:"complete-filtering-implementation",children:"Complete Filtering Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function FilteredTable() {
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  // Define filter options
  const filterOptions = {
    category: {
      label: 'Category',
      type: 'select',
      options: [
        { label: 'All Categories', value: '' },
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Food', value: 'food' },
      ]
    },
    priceRange: {
      label: 'Price Range',
      type: 'rangeSlider',
      rangeConfig: {
        min: 0,
        max: 1000,
        step: 10,
        prefix: '$',
        formatValue: (value: number) => value.toString()
      }
    },
    status: {
      label: 'Status',
      type: 'checkboxGroup',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Pending', value: 'pending' },
      ]
    }
  };

  // YOUR FILTERING LOGIC
  const filteredData = useMemo(() => {
    let result = [...fullData];

    // Category filter
    if (activeFilters.category && activeFilters.category !== '') {
      result = result.filter(item => item.category === activeFilters.category);
    }

    // Price range filter
    if (activeFilters.priceRange && Array.isArray(activeFilters.priceRange)) {
      const [min, max] = activeFilters.priceRange;
      result = result.filter(item => item.price >= min && item.price <= max);
    }

    // Status checkbox filter
    if (activeFilters.status && Array.isArray(activeFilters.status) && activeFilters.status.length > 0) {
      result = result.filter(item => activeFilters.status.includes(item.status));
    }

    return result;
  }, [fullData, activeFilters]);

  return (
    <Table
      data={filteredData}  // Pass FILTERED data
      columns={columns}
      activeFilters={activeFilters}
      onFilterChange={setActiveFilters}
      filterOptions={filterOptions}
      showFilters={true}
      showFilterBar={true}  // Show filter bar initially
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"filter-types-reference",children:"Filter Types Reference"}),`
`,e.jsxs(n.p,{children:["The Table component supports 6 different filter types, each optimized for specific use cases. All filters are displayed in a ",e.jsx(n.strong,{children:"Popover component"})," when clicked."]}),`
`,e.jsxs(n.h4,{id:"1-select-dropdown-type-select",children:["1. Select Dropdown (",e.jsx(n.code,{children:"type: 'select'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single selection from a small list (3-10 options)"}),`
`,e.jsx(n.li,{children:"Mutually exclusive choices (e.g., category, status, priority)"}),`
`,e.jsx(n.li,{children:"When the user needs to see all options at once"}),`
`,e.jsxs(n.li,{children:["Default filter type if ",e.jsx(n.code,{children:"type"})," is not specified"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders as a simple dropdown list in a Popover"}),`
`,e.jsx(n.li,{children:"Single selection only"}),`
`,e.jsx(n.li,{children:"Popover closes automatically when an option is selected"}),`
`,e.jsx(n.li,{children:"Immediate response (0ms debounce)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Category',
  type: 'select',  // or omit for default
  options: [
    { label: 'All Categories', value: '' },  // Empty value for "all"
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Food', value: 'food' },
  ]
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Value: ",e.jsx(n.code,{children:"string | number"})," (single value)"]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"activeFilters.category = 'electronics'"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Filtering Logic:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (activeFilters.category && activeFilters.category !== '') {
  data = data.filter(item => item.category === activeFilters.category);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Category [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected: ",e.jsx(n.code,{children:"[×] Category | Electronics [▼]"})]}),`
`]}),`
`,e.jsxs(n.h4,{id:"2-range-slider-type-rangeslider",children:["2. Range Slider (",e.jsx(n.code,{children:"type: 'rangeSlider'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filtering numeric ranges (price, age, quantity, distance)"}),`
`,e.jsx(n.li,{children:"Continuous values with min/max bounds"}),`
`,e.jsx(n.li,{children:"When users need to see and adjust both endpoints"}),`
`,e.jsx(n.li,{children:"Large numeric ranges where dropdowns would be impractical"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders dual-thumb slider with text inputs in a Popover"}),`
`,e.jsx(n.li,{children:"Real-time visual feedback (100ms debounce for performance)"}),`
`,e.jsx(n.li,{children:"Text inputs for precise value entry"}),`
`,e.jsx(n.li,{children:"Popover width: 320px (accommodates slider + inputs)"}),`
`,e.jsx(n.li,{children:"Popover remains open for adjustments"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Price Range',
  type: 'rangeSlider',
  rangeConfig: {  // REQUIRED for rangeSlider
    min: 0,       // Required: minimum value
    max: 1000,    // Required: maximum value
    step: 10,     // Optional: slider increment (default: 1)
    prefix: '$',  // Optional: appears before value in display
    suffix: '',   // Optional: appears after value (e.g., ' USD', ' km')
    formatValue: (value: number) => value.toString()  // Optional: custom formatting
  }
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Value: ",e.jsx(n.code,{children:"[number, number]"})," (array with [min, max])"]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"activeFilters.priceRange = [50, 500]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Filtering Logic:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (activeFilters.priceRange && Array.isArray(activeFilters.priceRange)) {
  const [min, max] = activeFilters.priceRange;
  data = data.filter(item => item.price >= min && item.price <= max);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Price Range [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected: ",e.jsx(n.code,{children:"[×] Price Range | $50 - $500 [▼]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Price filtering: ",e.jsx(n.code,{children:"{ min: 0, max: 10000, step: 100, prefix: '$' }"})]}),`
`,e.jsxs(n.li,{children:["Age range: ",e.jsx(n.code,{children:"{ min: 18, max: 99, step: 1, suffix: ' years' }"})]}),`
`,e.jsxs(n.li,{children:["Distance: ",e.jsx(n.code,{children:"{ min: 0, max: 500, step: 10, suffix: ' km' }"})]}),`
`,e.jsxs(n.li,{children:["Percentage: ",e.jsx(n.code,{children:"{ min: 0, max: 100, step: 5, suffix: '%' }"})]}),`
`]}),`
`,e.jsxs(n.h4,{id:"3-checkbox-group-type-checkboxgroup",children:["3. Checkbox Group (",e.jsx(n.code,{children:"type: 'checkboxGroup'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multiple selection from a list (3-8 options recommended)"}),`
`,e.jsx(n.li,{children:"Non-mutually exclusive choices (user can select multiple)"}),`
`,e.jsx(n.li,{children:"Filter by multiple criteria simultaneously (e.g., regions, features, tags)"}),`
`,e.jsx(n.li,{children:'When "OR" logic is needed (match ANY selected option)'}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders vertical list of checkboxes in a Popover"}),`
`,e.jsx(n.li,{children:"Multiple selection allowed"}),`
`,e.jsx(n.li,{children:"Popover remains open for multiple selections"}),`
`,e.jsx(n.li,{children:"Immediate response (0ms debounce)"}),`
`,e.jsx(n.li,{children:"Popover min-width: 220px"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Regions',
  type: 'checkboxGroup',
  options: [
    { label: 'North America', value: 'NA' },
    { label: 'Europe', value: 'EU' },
    { label: 'Asia', value: 'ASIA' },
    { label: 'Middle East', value: 'ME' },
  ]
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Value: ",e.jsx(n.code,{children:"any[]"})," (array of selected values)"]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"activeFilters.regions = ['NA', 'EU']"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Filtering Logic:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// OR logic: show items matching ANY selected region
if (activeFilters.regions && Array.isArray(activeFilters.regions) && activeFilters.regions.length > 0) {
  data = data.filter(item => activeFilters.regions.includes(item.region));
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Regions [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected (1): ",e.jsx(n.code,{children:"[×] Regions | 1 selected [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected (2+): ",e.jsx(n.code,{children:"[×] Regions | 3 selected [▼]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Use Cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multi-region filtering"}),`
`,e.jsx(n.li,{children:"Feature toggles (show items with specific features)"}),`
`,e.jsx(n.li,{children:"Tag-based filtering"}),`
`,e.jsx(n.li,{children:"Multi-category selection"}),`
`]}),`
`,e.jsxs(n.h4,{id:"4-radio-group-type-radiogroup",children:["4. Radio Group (",e.jsx(n.code,{children:"type: 'radioGroup'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single selection from a small list (2-6 options)"}),`
`,e.jsx(n.li,{children:"Mutually exclusive choices with visual emphasis"}),`
`,e.jsx(n.li,{children:"When you want radio button UI instead of dropdown"}),`
`,e.jsxs(n.li,{children:["Alternative to ",e.jsx(n.code,{children:"select"})," type with different visual style"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders vertical list of radio buttons in a Popover"}),`
`,e.jsxs(n.li,{children:["Single selection only (like ",e.jsx(n.code,{children:"select"})," type)"]}),`
`,e.jsx(n.li,{children:"Popover closes automatically when an option is selected"}),`
`,e.jsx(n.li,{children:"Immediate response (0ms debounce)"}),`
`,e.jsx(n.li,{children:"Popover min-width: 200px"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Status',
  type: 'radioGroup',
  options: [
    { label: 'All Statuses', value: '' },  // Empty for "all"
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
  ]
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Value: ",e.jsx(n.code,{children:"string | number"})," (single value, same as ",e.jsx(n.code,{children:"select"}),")"]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"activeFilters.status = 'active'"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Filtering Logic:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (activeFilters.status && activeFilters.status !== '') {
  data = data.filter(item => item.status === activeFilters.status);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Status [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected: ",e.jsx(n.code,{children:"[×] Status | Active [▼]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use Radio vs Select:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"radioGroup"}),": When options need visual emphasis or represent important mutually-exclusive choices"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"select"}),": For standard dropdown behavior with less visual weight"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"5-popover-listbox-type-popoverlistbox",children:["5. Popover Listbox (",e.jsx(n.code,{children:"type: 'popoverListbox'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single selection from a longer list (10+ options)"}),`
`,e.jsx(n.li,{children:"When options need search/filter capability (Listbox component provides this)"}),`
`,e.jsxs(n.li,{children:["Better UX for large option lists compared to standard ",e.jsx(n.code,{children:"select"})]}),`
`,e.jsx(n.li,{children:"When you want the Listbox component's enhanced features"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders Listbox component in a Popover"}),`
`,e.jsx(n.li,{children:"Single selection with enhanced UX"}),`
`,e.jsx(n.li,{children:"Popover closes automatically when an option is selected"}),`
`,e.jsx(n.li,{children:"Fast response (200ms debounce)"}),`
`,e.jsx(n.li,{children:"Popover min-width: 200px"}),`
`,e.jsx(n.li,{children:"Supports keyboard navigation and search"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Country',
  type: 'popoverListbox',
  options: [
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Australia', value: 'AU' },
    // ... many more options
  ]
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Value: ",e.jsx(n.code,{children:"string | number"})," (single value)"]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{children:"activeFilters.country = 'US'"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Filtering Logic:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (activeFilters.country && activeFilters.country !== '') {
  data = data.filter(item => item.country === activeFilters.country);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Country [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected: ",e.jsx(n.code,{children:"[×] Country | United States [▼]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use Listbox vs Select:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"popoverListbox"}),": For 10+ options, when search/filter is helpful"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"select"}),": For 3-10 options, simple dropdown"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"6-current-filters-display-type-currentfilters",children:["6. Current Filters Display (",e.jsx(n.code,{children:"type: 'currentFilters'"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display all currently active filters in one place"}),`
`,e.jsx(n.li,{children:'"Filter summary" or "Applied filters" view'}),`
`,e.jsx(n.li,{children:"Quick overview of active filtering state"}),`
`,e.jsx(n.li,{children:"Read-only display (not for selection)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"UI Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Renders read-only Listbox showing active filters in a Popover"}),`
`,e.jsx(n.li,{children:"No selection - display only"}),`
`,e.jsx(n.li,{children:'Shows formatted filter values (e.g., "Price: $50 - $200")'}),`
`,e.jsx(n.li,{children:"Automatically updates when other filters change"}),`
`,e.jsx(n.li,{children:"Popover min-width: 200px"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  label: 'Active Filters',
  type: 'currentFilters'
  // No options array - generated automatically from activeFilters
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Data Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Auto-generated from current ",e.jsx(n.code,{children:"activeFilters"})," state"]}),`
`,e.jsx(n.li,{children:"Displays formatted labels for each active filter"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Display in Filter Bar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Unselected: ",e.jsx(n.code,{children:"[+] Active Filters [▼]"})]}),`
`,e.jsxs(n.li,{children:["Selected: ",e.jsx(n.code,{children:"[×] Active Filters | 3 filters [▼]"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Popover Content Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Category: Electronics
Price Range: $50 - $500
Regions: NA, EU (2 selected)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This is a special display-only filter type. It doesn't change filter state - it only shows current state."]}),`
`,e.jsx(n.h3,{id:"filter-type-comparison-chart",children:"Filter Type Comparison Chart"}),`
`,e.jsxs(n.p,{children:[`| Filter Type | Use When | Selection | Options | Popover UI | Debounce |
|-------------|----------|-----------|---------|------------|----------|
| `,e.jsx(n.code,{children:"select"}),` | 3-10 options, single choice | Single | Required | Simple dropdown | 0ms |
| `,e.jsx(n.code,{children:"radioGroup"}),` | 2-6 options, visual emphasis | Single | Required | Radio buttons | 0ms |
| `,e.jsx(n.code,{children:"popoverListbox"}),` | 10+ options, searchable | Single | Required | Enhanced listbox | 200ms |
| `,e.jsx(n.code,{children:"checkboxGroup"}),` | 3-8 options, multiple choice | Multiple | Required | Checkboxes | 0ms |
| `,e.jsx(n.code,{children:"rangeSlider"}),` | Numeric range | Range | N/A | Slider + inputs | 100ms |
| `,e.jsx(n.code,{children:"currentFilters"})," | Display active filters | None | N/A | Read-only list | N/A |"]}),`
`,e.jsx(n.h3,{id:"filter-bar-behavior",children:"Filter Bar Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Initial State:"})," Hidden by default (",e.jsx(n.code,{children:"showFilterBar: false"}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Progressive Disclosure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First 5 filters shown in filter bar"}),`
`,e.jsx(n.li,{children:'Remaining filters accessible via "More filters" button'}),`
`,e.jsx(n.li,{children:"Opens drawer with all filter options"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clear All Filters:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const handleClearAll = () => {
  setActiveFilters({});
};
`})}),`
`,e.jsx(n.h3,{id:"complete-filter-example",children:"Complete Filter Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const filterOptions = {
  // Select: Simple dropdown (default)
  category: {
    label: 'Category',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Clothing', value: 'clothing' },
    ]
  },

  // Radio Group: Visual emphasis
  priority: {
    label: 'Priority',
    type: 'radioGroup',
    options: [
      { label: 'All', value: '' },
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' },
    ]
  },

  // Popover Listbox: Long lists with search
  country: {
    label: 'Country',
    type: 'popoverListbox',
    options: [
      { label: 'United States', value: 'US' },
      { label: 'United Kingdom', value: 'UK' },
      // ... 50+ more countries
    ]
  },

  // Checkbox Group: Multiple selection
  regions: {
    label: 'Regions',
    type: 'checkboxGroup',
    options: [
      { label: 'North America', value: 'NA' },
      { label: 'Europe', value: 'EU' },
      { label: 'Asia', value: 'ASIA' },
    ]
  },

  // Range Slider: Numeric ranges
  priceRange: {
    label: 'Price',
    type: 'rangeSlider',
    rangeConfig: {
      min: 0,
      max: 1000,
      step: 10,
      prefix: '$',
      formatValue: (val) => val.toString()
    }
  },

  // Current Filters: Display only
  activeFilters: {
    label: 'Active Filters',
    type: 'currentFilters'
  }
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"search-implementation",children:"Search Implementation"}),`
`,e.jsx(n.h3,{id:"client-side-search",children:"Client-Side Search"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function SearchableTable() {
  const [searchQuery, setSearchQuery] = useState('');

  // Define which fields to search
  const searchFields = ['name', 'email', 'id'];

  // Perform search
  const searchedData = useMemo(() => {
    if (!searchQuery) return data;

    const query = searchQuery.toLowerCase();
    return data.filter(item =>
      searchFields.some(field =>
        item[field]?.toString().toLowerCase().includes(query)
      )
    );
  }, [data, searchQuery]);

  return (
    <Table
      data={searchedData}
      columns={columns}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      searchConfig={{
        placeholder: 'Search by name, email, or ID...',
        debounceMs: 300,      // Wait 300ms after typing stops
        minLength: 2,         // Require at least 2 characters
      }}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"server-side-search",children:"Server-Side Search"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ServerSearchTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounced search effect
  useEffect(() => {
    if (searchQuery.length < 2) {
      setData(initialData);
      return;
    }

    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 500);  // 500ms debounce for server requests

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function performSearch(query: string) {
    setLoading(true);
    try {
      const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
      const results = await response.json();
      setData(results);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Table
      data={data}
      columns={columns}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      searchConfig={{
        serverSide: true,
        debounceMs: 500,      // Longer debounce for server
        minLength: 2,
        placeholder: 'Search products...',
      }}
      state={loading ? 'loading' : data.length === 0 ? 'notFound' : 'normal'}
      notFoundMessage="No results found"
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"combined-search--filter",children:"Combined Search + Filter"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function SearchAndFilterTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  const processedData = useMemo(() => {
    let result = [...fullData];

    // 1. Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.name?.toLowerCase().includes(query) ||
        item.email?.toLowerCase().includes(query)
      );
    }

    // 2. Apply filters
    if (activeFilters.category && activeFilters.category !== '') {
      result = result.filter(item => item.category === activeFilters.category);
    }

    if (activeFilters.priceRange && Array.isArray(activeFilters.priceRange)) {
      const [min, max] = activeFilters.priceRange;
      result = result.filter(item => item.price >= min && item.price <= max);
    }

    return result;
  }, [fullData, searchQuery, activeFilters]);

  return (
    <Table
      data={processedData}
      columns={columns}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      activeFilters={activeFilters}
      onFilterChange={setActiveFilters}
      filterOptions={filterOptions}
      state={processedData.length === 0 ? 'notFound' : 'normal'}
    />
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tabbed-tables",children:"Tabbed Tables"}),`
`,e.jsx(n.h3,{id:"simple-tabs-ui-only",children:"Simple Tabs (UI Only)"}),`
`,e.jsx(n.p,{children:"For tabs that just change the display without changing data:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function SimpleTabbedTable() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <Table
      data={data}
      columns={columns}
      showTabs={true}
      tabItems={[
        { id: 'all', label: 'All Items', badge: data.length, active: true },
        { id: 'active', label: 'Active', badge: 45 },
        { id: 'archived', label: 'Archived', badge: 12 },
      ]}
      onTabChange={(tabId) => {
        setActiveTab(tabId);
        // Handle tab change logic
      }}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"enhanced-tabs-separate-datacolumns",children:"Enhanced Tabs (Separate Data/Columns)"}),`
`,e.jsx(n.p,{children:"For tabs with completely different data and columns:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function EnhancedTabbedTable() {
  const allProductsData = [/* products data */];
  const lowStockData = [/* low stock products */];
  const outOfStockData = [/* out of stock */];

  const productColumns = [/* standard columns */];
  const lowStockColumns = [/* columns with stock alerts */];

  return (
    <Table
      data={allProductsData}  // Default data
      columns={productColumns}  // Default columns
      title="Inventory"
      showTabs={true}
      tableTabs={[
        {
          id: 'all',
          label: 'All Products',
          badge: allProductsData.length,
          active: true,
          // Uses default data and columns
        },
        {
          id: 'low-stock',
          label: 'Low Stock',
          badge: lowStockData.length,
          data: lowStockData,           // Tab-specific data
          columns: lowStockColumns,     // Tab-specific columns
          title: 'Low Stock Items',     // Tab-specific title
          pagination: {                  // Tab-specific pagination
            pageSize: 5,
            pageIndex: 0,
            pageCount: Math.ceil(lowStockData.length / 5),
            onPageChange: (page) => console.log('Low stock page:', page),
          }
        },
        {
          id: 'out-of-stock',
          label: 'Out of Stock',
          badge: outOfStockData.length,
          data: outOfStockData,
          // Uses default columns
        }
      ]}
      onTabChange={(tabId) => console.log('Active tab:', tabId)}
    />
  );
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key Points:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tableTabs"})," overrides ",e.jsx(n.code,{children:"tabItems"})," if both provided"]}),`
`,e.jsxs(n.li,{children:["Each tab can have its own: ",e.jsx(n.code,{children:"data"}),", ",e.jsx(n.code,{children:"columns"}),", ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"pagination"})]}),`
`,e.jsx(n.li,{children:"Tabs without specific config inherit from main table props"}),`
`,e.jsx(n.li,{children:"Pagination resets when switching tabs"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"column-configuration",children:"Column Configuration"}),`
`,e.jsx(n.h3,{id:"column-definition-interface",children:"Column Definition Interface"}),`
`,e.jsxs(n.p,{children:["Based on TanStack Table's ",e.jsx(n.code,{children:"ColumnDef"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ColumnDef<T, TValue> {
  // IDENTIFICATION
  id?: string;                    // Unique column ID (required for ordering)
  accessorKey?: keyof T;          // Data property to access
  accessorFn?: (row: T) => TValue; // Custom accessor function

  // DISPLAY
  header: string | ((props) => ReactNode);  // Column header
  cell?: (props) => ReactNode;              // Custom cell renderer
  footer?: string | ((props) => ReactNode);

  // SIZING
  size?: number;                  // Initial width (pixels)
  minSize?: number;               // Minimum width (default: 20)
  maxSize?: number;               // Maximum width
  enableResizing?: boolean;       // Allow resizing this column

  // FEATURES
  enableSorting?: boolean;        // Allow sorting (default: true)
  enableColumnFilter?: boolean;   // Allow filtering
  enableGlobalFilter?: boolean;   // Include in global search

  // META (custom properties)
  meta?: {
    headerClassName?: string;     // CSS class for header
    cellClassName?: string;       // CSS class for cells
    width?: string;               // CSS width value
    pinned?: 'left' | 'right' | false;  // Pin column position
  };
}
`})}),`
`,e.jsx(n.h3,{id:"column-pinning",children:"Column Pinning"}),`
`,e.jsx(n.p,{children:"Pin important columns to left or right:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
    meta: {
      pinned: 'left',  // Pin to left side
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
    size: 200,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 250,
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 100,
    meta: {
      pinned: 'right',  // Pin to right side
    },
    cell: ({ row }) => (
      <Button onClick={() => handleAction(row)}>Edit</Button>
    )
  }
];

<Table
  data={data}
  columns={columns}
  enableScrollArea={true}
  scrollAreaWidth="800px"  // Pinning works best with horizontal scroll
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pinning Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pinned columns remain visible during horizontal scroll"}),`
`,e.jsx(n.li,{children:"Supports left and right pinning"}),`
`,e.jsx(n.li,{children:"Automatically handles RTL direction"}),`
`,e.jsx(n.li,{children:"Shadow effects indicate pinned state"}),`
`]}),`
`,e.jsx(n.h3,{id:"column-ordering-drag--drop",children:"Column Ordering (Drag & Drop)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns = [
  {
    id: 'name',           // REQUIRED for ordering
    accessorKey: 'name',
    header: 'Name',
    size: 200,
  },
  {
    id: 'email',          // REQUIRED
    accessorKey: 'email',
    header: 'Email',
    size: 250,
  },
  // ... more columns
];

<Table
  data={data}
  columns={columns}
  enableColumnOrdering={true}  // Enable drag-drop reordering
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Requirements:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column MUST have a unique ",e.jsx(n.code,{children:"id"})]}),`
`,e.jsx(n.li,{children:"Uses @dnd-kit for accessibility"}),`
`,e.jsx(n.li,{children:"Keyboard navigation: Tab + Arrow Keys + Space"}),`
`,e.jsx(n.li,{children:"Order state persists during table interactions"}),`
`]}),`
`,e.jsx(n.h3,{id:"column-resizing",children:"Column Resizing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 200,           // Initial width
    minSize: 100,        // Minimum width
    maxSize: 400,        // Maximum width
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 300,
    minSize: 150,
    // No maxSize = unlimited
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 100,
    enableResizing: false,  // Disable resizing for this column
  }
];

<Table
  data={data}
  columns={columns}
  enableColumnResizing={true}  // Enable resizing
  gridCells={true}             // Recommended for visual feedback
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Resize Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Drag column borders to resize"}),`
`,e.jsx(n.li,{children:"Double-click to auto-fit content"}),`
`,e.jsx(n.li,{children:"Respects min/max constraints"}),`
`,e.jsx(n.li,{children:"RTL-aware (resize direction inverts)"}),`
`,e.jsx(n.li,{children:"Works on touch devices"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"visual-configuration",children:"Visual Configuration"}),`
`,e.jsx(n.h3,{id:"striped-vs-non-striped",children:"Striped vs Non-Striped"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Default:"})," Non-striped (",e.jsx(n.code,{children:"striped={false}"}),")"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Modern, interactive table (default)
<Table
  data={data}
  columns={columns}
  striped={false}  // White background, better for interactions
/>

// Static, read-only table
<Table
  data={data}
  columns={columns}
  striped={true}   // Alternating row colors
  disableRowHover={true}  // No hover effects
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use Striped:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Read-only data tables"}),`
`,e.jsx(n.li,{children:"Dense information requiring visual separation"}),`
`,e.jsx(n.li,{children:"Static reports or dashboards"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to Use Non-Striped:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Interactive tables with row/cell clicks"}),`
`,e.jsx(n.li,{children:"Tables with action buttons"}),`
`,e.jsx(n.li,{children:"Modern UI aesthetics"}),`
`]}),`
`,e.jsx(n.h3,{id:"grid-cells",children:"Grid Cells"}),`
`,e.jsx(n.p,{children:"Add borders to cells:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  gridCells={true}  // Show cell borders
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Recommended With:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Column resizing (visual feedback)"}),`
`,e.jsx(n.li,{children:"Dense data (better cell separation)"}),`
`,e.jsx(n.li,{children:"Aligned numeric columns"}),`
`]}),`
`,e.jsx(n.h3,{id:"row-hover-states",children:"Row Hover States"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Default: hover enabled
<Table
  data={data}
  columns={columns}
  onRowClick={(row) => console.log(row)}
/>

// Disable hover (for static tables)
<Table
  data={data}
  columns={columns}
  disableRowHover={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"scrollarea-integration",children:"ScrollArea Integration"}),`
`,e.jsx(n.p,{children:"For tables that exceed container dimensions:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  enableScrollArea={true}
  scrollAreaHeight="500px"        // Fixed height
  scrollAreaWidth="100%"          // Full width
  enableHorizontalScroll={true}   // Horizontal scrolling
  enableVerticalScroll={true}     // Vertical scrolling
  scrollAreaType="hover"          // Show scrollbars on hover
/>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Scroll Types:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hover'"})," - Show scrollbars on hover (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'scroll'"})," - Show scrollbars when content overflows"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'always'"})," - Always show scrollbars"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'auto'"})," - Browser default"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"table-states",children:"Table States"}),`
`,e.jsx(n.h3,{id:"state-types",children:"State Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type TableState = 'normal' | 'error' | 'empty' | 'notFound' | 'loading';
`})}),`
`,e.jsx(n.h3,{id:"normal-state-default",children:"Normal State (Default)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  state="normal"  // Default
/>
`})}),`
`,e.jsx(n.h3,{id:"loading-state",children:"Loading State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={[]}
  columns={columns}
  state="loading"  // Shows loading spinner
/>
`})}),`
`,e.jsx(n.h3,{id:"empty-state",children:"Empty State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={[]}
  columns={columns}
  state="empty"
  emptyMessage="No products available"
/>

// Custom empty state
<Table
  data={[]}
  columns={columns}
  state="empty"
  emptyStateNode={
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <CustomEmptyIcon />
      <h3>No Data Found</h3>
      <Button onClick={loadData}>Load Data</Button>
    </div>
  }
/>
`})}),`
`,e.jsx(n.h3,{id:"error-state",children:"Error State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={[]}
  columns={columns}
  state="error"
  errorMessage="Failed to load data. Please try again."
/>
`})}),`
`,e.jsx(n.h3,{id:"not-found-state-search-results",children:"Not Found State (Search Results)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={searchResults}
  columns={columns}
  state={searchResults.length === 0 ? 'notFound' : 'normal'}
  notFoundMessage="No results match your search"
  notFoundSubtitle="Try adjusting your search terms or filters"
/>
`})}),`
`,e.jsx(n.h3,{id:"dynamic-state-management",children:"Dynamic State Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicStateTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tableState = useMemo(() => {
    if (loading) return 'loading';
    if (error) return 'error';
    if (data.length === 0) return 'empty';
    return 'normal';
  }, [loading, error, data]);

  return (
    <Table
      data={data}
      columns={columns}
      state={tableState}
      errorMessage={error?.message}
      emptyMessage="No data available"
    />
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rtl--internationalization",children:"RTL & Internationalization"}),`
`,e.jsx(n.h3,{id:"automatic-rtl-detection",children:"Automatic RTL Detection"}),`
`,e.jsx(n.p,{children:"The Table component automatically detects RTL mode:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// RTL detected from document.dir or document.documentElement.dir
<Table
  data={data}
  columns={columns}
  // RTL automatically applied to:
  // - Column resize direction
  // - Scroll direction
  // - Text alignment
  // - Filter drawer position
/>
`})}),`
`,e.jsx(n.h3,{id:"rtl-aware-text-rendering",children:"RTL-Aware Text Rendering"}),`
`,e.jsx(n.p,{children:"All text cells automatically apply proper line-height for Arabic text:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Automatic in all cell variants
const lineHeightStyle = {
  lineHeight: isRTL
    ? 'var(--t-line-height-arabic, 1.2)'
    : 'var(--t-line-height-english, 1.5)'
};
`})}),`
`,e.jsx(n.h3,{id:"rtl-filter-labels",children:"RTL Filter Labels"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const isRTL = document.dir === 'rtl';

const filterOptions = {
  category: {
    label: isRTL ? 'الفئة' : 'Category',
    type: 'select',
    options: [
      {
        label: isRTL ? 'جميع الفئات' : 'All Categories',
        value: ''
      },
      {
        label: isRTL ? 'إلكترونيات' : 'Electronics',
        value: 'electronics'
      },
    ]
  }
};
`})}),`
`,e.jsx(n.h3,{id:"rtl-search-placeholders",children:"RTL Search Placeholders"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const searchPlaceholder = isRTL
  ? 'ابحث باسم المنتج أو المعرف...'
  : 'Search by product name or ID...';

<Table
  data={data}
  columns={columns}
  searchConfig={{
    placeholder: searchPlaceholder
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"filter-drawer-position",children:"Filter Drawer Position"}),`
`,e.jsx(n.p,{children:"In RTL mode, the filter drawer automatically opens from the left:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Automatic behavior
<Drawer
  position={isRTL ? "left" : "right"}
  title={isRTL ? "الفلاتر" : "Filters"}
>
  {/* Filter content */}
</Drawer>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"advanced-patterns",children:"Advanced Patterns"}),`
`,e.jsx(n.h3,{id:"controlled-table-state",children:"Controlled Table State"}),`
`,e.jsx(n.p,{children:"Full control over all table state:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ControlledTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Apply sorting to data
  const sortedData = useMemo(() => {
    if (sorting.length === 0) return data;

    const sorted = [...data].sort((a, b) => {
      for (const sort of sorting) {
        const aVal = a[sort.id];
        const bVal = b[sort.id];

        if (aVal < bVal) return sort.desc ? 1 : -1;
        if (aVal > bVal) return sort.desc ? -1 : 1;
      }
      return 0;
    });

    return sorted;
  }, [data, sorting]);

  return (
    <Table
      data={sortedData}
      columns={columns}
      defaultSorting={sorting}
      defaultColumnVisibility={columnVisibility}
      searchQuery={globalFilter}
      onSearchChange={setGlobalFilter}
      pagination={{
        ...pagination,
        pageCount: Math.ceil(sortedData.length / pagination.pageSize),
        onPageChange: (page) => setPagination(prev => ({ ...prev, pageIndex: page })),
        onPageSizeChange: (size) => setPagination({ pageIndex: 0, pageSize: size }),
      }}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"server-side-everything",children:"Server-Side Everything"}),`
`,e.jsx(n.p,{children:"Complete server-side implementation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function ServerSideTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
    pageCount: 0,
  });

  // Fetch data when any parameter changes
  useEffect(() => {
    fetchData();
  }, [searchQuery, activeFilters, sorting, pagination.pageIndex, pagination.pageSize]);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: pagination.pageIndex.toString(),
        pageSize: pagination.pageSize.toString(),
        search: searchQuery,
        filters: JSON.stringify(activeFilters),
        sort: JSON.stringify(sorting),
      });

      const response = await fetch(\`/api/data?\${params}\`);
      if (!response.ok) throw new Error('Failed to fetch');

      const result = await response.json();

      setData(result.data);
      setPagination(prev => ({
        ...prev,
        pageCount: result.totalPages,
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const tableState = useMemo(() => {
    if (loading) return 'loading';
    if (error) return 'error';
    if (data.length === 0 && searchQuery) return 'notFound';
    if (data.length === 0) return 'empty';
    return 'normal';
  }, [loading, error, data, searchQuery]);

  return (
    <Table
      data={data}
      columns={columns}
      state={tableState}
      errorMessage={error?.message}

      // Search
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      searchConfig={{
        serverSide: true,
        debounceMs: 500,
        minLength: 2,
      }}

      // Filters
      activeFilters={activeFilters}
      onFilterChange={setActiveFilters}
      filterOptions={filterOptions}

      // Sorting
      defaultSorting={sorting}

      // Pagination
      pagination={{
        ...pagination,
        onPageChange: (page) => setPagination(prev => ({ ...prev, pageIndex: page })),
        onPageSizeChange: (size) => setPagination({ pageIndex: 0, pageSize: size }),
        isServerSide: true,
      }}
    />
  );
}
`})}),`
`,e.jsx(n.h3,{id:"performance-optimization",children:"Performance Optimization"}),`
`,e.jsx(n.p,{children:"For large datasets:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { memo, useMemo } from 'react';

// 1. Memoize columns (expensive to recreate)
const columns = useMemo(() => [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: memo(({ getValue }) => <span>{getValue()}</span>)
  },
  // ...
], []);

// 2. Memoize processed data
const processedData = useMemo(() => {
  let result = data;

  // Apply transformations
  if (searchQuery) {
    result = performSearch(result, searchQuery);
  }

  if (Object.keys(activeFilters).length > 0) {
    result = applyFilters(result, activeFilters);
  }

  return result;
}, [data, searchQuery, activeFilters]);

// 3. Use virtual scrolling for 1000+ rows
<Table
  data={processedData}
  columns={columns}
  enableScrollArea={true}
  scrollAreaHeight="600px"
  scrollAreaType="scroll"
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"issue-pagination-not-changing-content",children:"Issue: Pagination Not Changing Content"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Page numbers change but data stays the same"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Ensure ",e.jsx(n.code,{children:"isServerSide"})," is set correctly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Client-side (default)
pagination={{
  pageIndex: page,
  pageSize: size,
  pageCount: Math.ceil(data.length / size),
  onPageChange: setPage,
  // isServerSide: false (default)
}}

// Server-side
pagination={{
  pageIndex: page,
  pageSize: size,
  pageCount: totalPagesFromAPI,
  onPageChange: setPage,
  isServerSide: true  // REQUIRED
}}
`})}),`
`,e.jsx(n.h3,{id:"issue-filters-not-working",children:"Issue: Filters Not Working"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Filter UI shows but data doesn't change"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cause:"})," Table doesn't filter data automatically"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Implement filtering logic:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const filteredData = useMemo(() => {
  let result = [...data];

  Object.entries(activeFilters).forEach(([key, value]) => {
    if (!value || value === '') return;

    if (Array.isArray(value)) {
      // Range filter
      const [min, max] = value;
      result = result.filter(item => item[key] >= min && item[key] <= max);
    } else {
      // Exact match
      result = result.filter(item => item[key] === value);
    }
  });

  return result;
}, [data, activeFilters]);

<Table data={filteredData} ... />
`})}),`
`,e.jsx(n.h3,{id:"issue-search-not-working",children:"Issue: Search Not Working"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Typing in search doesn't filter data"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cause:"})," Table doesn't perform search automatically"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Implement search logic:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const searchedData = useMemo(() => {
  if (!searchQuery) return data;

  const query = searchQuery.toLowerCase();
  return data.filter(item =>
    item.name?.toLowerCase().includes(query) ||
    item.email?.toLowerCase().includes(query)
  );
}, [data, searchQuery]);

<Table data={searchedData} ... />
`})}),`
`,e.jsx(n.h3,{id:"issue-column-ordering-not-working",children:"Issue: Column Ordering Not Working"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Can't drag columns to reorder"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cause:"})," Missing column IDs"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Add unique ",e.jsx(n.code,{children:"id"})," to each column:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns = [
  {
    id: 'name',  // REQUIRED
    accessorKey: 'name',
    header: 'Name',
  },
  {
    id: 'email',  // REQUIRED
    accessorKey: 'email',
    header: 'Email',
  },
];

<Table
  columns={columns}
  enableColumnOrdering={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"issue-poor-filter-performance",children:"Issue: Poor Filter Performance"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," UI lags when adjusting filters"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Optimize filter processing:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// 1. Memoize filter function
const applyFilters = useCallback((data, filters) => {
  // Filter logic
}, []);

// 2. Use efficient data structures
const filteredData = useMemo(() => {
  if (Object.keys(activeFilters).length === 0) return data;
  return applyFilters(data, activeFilters);
}, [data, activeFilters, applyFilters]);

// 3. Debounce range slider changes
const debouncedFilters = useDebounce(activeFilters, 100);
`})}),`
`,e.jsx(n.h3,{id:"issue-table-doesnt-show-rtl-properly",children:"Issue: Table Doesn't Show RTL Properly"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Arabic text layout is incorrect"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Ensure document direction is set:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Set in HTML
<html dir="rtl">

// Or programmatically
useEffect(() => {
  document.dir = 'rtl';
}, []);

// Table will automatically detect and apply RTL styles
`})}),`
`,e.jsx(n.h3,{id:"issue-slow-rendering-with-many-rows",children:"Issue: Slow Rendering with Many Rows"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Symptom:"})," Table is slow with 1000+ rows"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," Use pagination or virtual scrolling:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Option 1: Pagination (recommended)
<Table
  data={data}
  columns={columns}
  pagination={{
    pageSize: 50,  // Limit visible rows
    pageIndex: currentPage,
    pageCount: Math.ceil(data.length / 50),
    onPageChange: setCurrentPage,
  }}
/>

// Option 2: ScrollArea with fixed height
<Table
  data={data}
  columns={columns}
  enableScrollArea={true}
  scrollAreaHeight="600px"
  showPagination={false}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"related-documentation",children:"Related Documentation"}),`
`,e.jsx(n.p,{children:"For detailed information on cell customization, see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./Table-CELL-VARIANTS-GUIDE.mdx",children:"Table-CELL-VARIANTS-GUIDE.mdx"})})," - Complete guide to cell variants, custom cells, and QuickColumns helpers"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-reference-common-patterns",children:"Quick Reference: Common Patterns"}),`
`,e.jsx(n.h3,{id:"basic-table",children:"Basic Table"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table data={data} columns={columns} title="Products" />
`})}),`
`,e.jsx(n.h3,{id:"with-pagination",children:"With Pagination"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  pagination={{
    pageIndex: page,
    pageSize: 10,
    pageCount: Math.ceil(data.length / 10),
    onPageChange: setPage,
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"with-search",children:"With Search"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={searchedData}
  columns={columns}
  searchQuery={query}
  onSearchChange={setQuery}
/>
`})}),`
`,e.jsx(n.h3,{id:"with-filters",children:"With Filters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={filteredData}
  columns={columns}
  activeFilters={filters}
  onFilterChange={setFilters}
  filterOptions={filterOptions}
  showFilterBar={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"server-side-table",children:"Server-Side Table"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  state={loading ? 'loading' : 'normal'}
  searchConfig={{ serverSide: true }}
  pagination={{
    pageIndex: page,
    pageSize: size,
    pageCount: totalPages,
    onPageChange: setPage,
    isServerSide: true,
  }}
/>
`})}),`
`,e.jsx(n.h3,{id:"with-tabs",children:"With Tabs"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table
  data={data}
  columns={columns}
  showTabs={true}
  tableTabs={[
    { id: 'all', label: 'All', data: allData },
    { id: 'active', label: 'Active', data: activeData },
  ]}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"End of Table Component AI Agent Guide"}),`
For cell customization, continue to: `,e.jsx(n.a,{href:"./Table-CELL-VARIANTS-GUIDE.mdx",children:"Table-CELL-VARIANTS-GUIDE.mdx"})]})]})}function o(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default};
