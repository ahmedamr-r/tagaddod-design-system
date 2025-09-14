import { ReactNode } from 'react';
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  Row,
  Cell,
} from '@tanstack/react-table';

export type SortDirection = 'asc' | 'desc' | false;

/**
 * Interface for table tab configuration
 */
export interface TableTab<T extends object> {
  /**
   * Unique ID for this tab
   */
  id: string;
  
  /**
   * Label to display on the tab
   */
  label: string;
  
  /**
   * Optional badge count to display next to tab label
   */
  badge?: number;
  
  /**
   * Whether this tab is active by default
   */
  active?: boolean;
  
  /**
   * Data array for this specific tab's table
   */
  data?: T[];
  
  /**
   * Column definitions specific to this tab
   */
  columns?: ColumnDef<T, any>[];
  
  /**
   * Tab-specific title (overrides main table title)
   */
  title?: string;
  
  /**
   * Tab-specific pagination
   */
  pagination?: {
    pageSize: number;
    pageIndex: number;
    pageCount: number;
    onPageChange: (pageIndex: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];
    isServerSide?: boolean;
  };
}

export interface TableProps<T extends object> {
  /**
   * Data array to display in the table
   */
  data: T[];
  
  /**
   * Column definitions for the table
   */
  columns: ColumnDef<T, any>[];
  
  /**
   * Title displayed in the table header
   */
  title?: string;
  
  /**
   * Number badge displayed next to title
   */
  badge?: number;
  
  /**
   * Table pagination props
   */
  pagination?: {
    pageSize: number;
    pageIndex: number;
    pageCount: number;
    onPageChange: (pageIndex: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    pageSizeOptions?: number[];
    isServerSide?: boolean;
  };
  
  /**
   * Whether to show striped rows
   * @default false
   */
  striped?: boolean;
  
  /**
   * Whether to disable row hover effects (for static/non-interactive tables)
   * @default false
   */
  disableRowHover?: boolean;
  
  /**
   * Whether to enable column resizing
   * @default false
   */
  enableColumnResizing?: boolean;
  
  /**
   * Whether to enable column ordering (drag and drop)
   * @default false
   */
  enableColumnOrdering?: boolean;
  
  /**
   * Whether to show grid cells with borders
   * @default false
   */
  gridCells?: boolean;
  
  /**
   * Whether to show the header section
   * @default true
   */
  showHeader?: boolean;
  
  /**
   * Whether to show the table tabs
   * @default false
   */
  showTabs?: boolean;
  
  /**
   * Whether to show the pagination component
   * @default true
   */
  showPagination?: boolean;
  
  /**
   * Whether to show the search field
   * @default true
   */
  showSearch?: boolean;
  
  /**
   * Whether to show the filters button and panel
   * @default true
   */
  showFilters?: boolean;
  
  /**
   * Whether to show the filter bar
   * @default false
   */
  showFilterBar?: boolean;
  
  /**
   * Whether to show the export CSV button
   * @default false
   */
  showExport?: boolean;
  
  /**
   * Whether to show the total badge with count
   * @default true
   */
  showTotalBadge?: boolean;
  
  /**
   * Default sorting state
   */
  defaultSorting?: SortingState;
  
  /**
   * Default column visibility state
   */
  defaultColumnVisibility?: VisibilityState;
  
  /**
   * Callback when row is clicked
   */
  onRowClick?: (row: Row<T>) => void;
  
  /**
   * Callback when cell is clicked
   */
  onCellClick?: (cell: Cell<T, unknown>) => void;
  
  /**
   * Tab items if showTabs is true
   * Simple version with just tab configuration
   */
  tabItems?: Array<{
    id: string;
    label: string;
    active?: boolean;
    badge?: number;
  }>;
  
  /**
   * Enhanced tab items with full table configuration per tab
   * When this is provided, it overrides the simple tabItems
   * In this case, the table's main data and columns are used as defaults for tabs
   * that don't specify their own
   */
  tableTabs?: Array<TableTab<T>>;
  
  /**
   * Callback when tab is clicked
   */
  onTabChange?: (tabId: string) => void;
  
  /**
   * Show a specific state in the table
   * - 'error': Shows error message
   * - 'empty': Shows empty state
   * - 'notFound': Shows not found message for search
   * - 'loading': Shows loading state
   */
  state?: 'normal' | 'error' | 'empty' | 'notFound' | 'loading';
  
  /**
   * Error message to display when state is 'error'
   */
  errorMessage?: string;
  
  /**
   * Message to display when state is 'empty'
   */
  emptyMessage?: string;
  
  /**
   * Message to display when state is 'notFound'
   */
  notFoundMessage?: string;
  
  /**
   * Subtitle message to display when state is 'notFound'
   */
  notFoundSubtitle?: string;
  
  /**
   * Search query
   */
  searchQuery?: string;
  
  /**
   * Callback when search query changes
   */
  onSearchChange?: (query: string) => void;
  
  /**
   * Search configuration for different scenarios
   */
  searchConfig?: {
    /**
     * Debounce delay in milliseconds
     * @default 300 (recommended for server-side: 500ms, client-side: 200-300ms)
     */
    debounceMs?: number;
    
    /**
     * Whether search data comes from server-side
     * @default false (client-side)
     */
    serverSide?: boolean;
    
    /**
     * Minimum characters before triggering search
     * @default 0
     */
    minLength?: number;
    
    /**
     * Custom placeholder text
     */
    placeholder?: string;
  };
  
  /**
   * Callback when export is clicked
   */
  onExport?: () => void;
  
  /**
   * Active filters
   */
  activeFilters?: {
    [key: string]: any;
  };
  
  /**
   * Callback when filter is applied
   */
  onFilterChange?: (filters: { [key: string]: any }) => void;
  
  /**
   * Filter options for filter dropdown
   */
  filterOptions?: {
    [key: string]: {
      label: string;
      type?: 'select' | 'rangeSlider' | 'currentFilters' | 'popoverListbox' | 'checkboxGroup' | 'radioGroup';
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
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional content to render in the footer
   */
  footerContent?: ReactNode;
  
  /**
   * A node to render when there is no data and no special state
   */
  emptyStateNode?: ReactNode;
}

export interface TableHeaderProps {
  /**
   * Title displayed in the table header
   */
  title?: string;
  
  /**
   * Number badge displayed next to title
   */
  badge?: number | null;
  
  /**
   * Whether to show the search field
   */
  showSearch?: boolean;
  
  /**
   * Whether to show the filters button
   */
  showFilters?: boolean;
  
  /**
   * Whether to show the export CSV button
   */
  showExport?: boolean;
  
  /**
   * Search query
   */
  searchQuery?: string;
  
  /**
   * Callback when search query changes
   */
  onSearchChange?: (query: string) => void;
  
  /**
   * Search configuration
   */
  searchConfig?: {
    debounceMs?: number;
    serverSide?: boolean;
    minLength?: number;
    placeholder?: string;
  };
  
  /**
   * Callback when filter button is clicked
   */
  onFilterClick?: () => void;
  
  /**
   * Callback when export is clicked
   */
  onExport?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Whether the filter bar is currently visible
   * @default false
   */
  isFilterBarVisible?: boolean;
}

export interface TableHeaderCellProps {
  /**
   * Content to display in the header cell
   */
  children?: ReactNode;
  
  /**
   * Whether the column is sortable
   */
  isSortable?: boolean;
  
  /**
   * Current sort direction
   */
  sortDirection?: SortDirection;
  
  /**
   * Callback when sort is clicked
   */
  onSort?: () => void;
  
  /**
   * Whether to show a checkbox for selection
   */
  showCheckbox?: boolean;
  
  /**
   * Whether the checkbox is checked
   */
  isChecked?: boolean;
  
  /**
   * Callback when checkbox is changed
   */
  onCheckboxChange?: (checked: boolean) => void;
  
  /**
   * Whether to show help tooltip
   */
  showHelp?: boolean;
  
  /**
   * Help text to display in tooltip
   */
  helpText?: string;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export interface TableCellProps {
  /**
   * Content to display in the cell
   */
  children?: ReactNode;
  
  /**
   * Is the cell striped with background
   */
  isStriped?: boolean;
  
  /**
   * Is the cell part of a bordered grid
   */
  isGridCell?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Cell click handler
   */
  onClick?: () => void;
}

export interface FilterItemProps {
  /**
   * Filter name/key
   */
  name: string;
  
  /**
   * Display label
   */
  label: string;
  
  /**
   * Current value
   */
  value?: any;
  
  /**
   * Filter type
   */
  type?: 'select' | 'rangeSlider' | 'currentFilters' | 'popoverListbox' | 'checkboxGroup' | 'radioGroup';
  
  /**
   * Options for the filter (for select type)
   */
  options?: Array<{ label: string; value: any }>;
  
  /**
   * Range configuration (for rangeSlider type)
   */
  rangeConfig?: {
    min: number;
    max: number;
    step?: number;
    prefix?: string;
    suffix?: string;
    formatValue?: (value: number) => string;
  };
  
  /**
   * Current filters for display (for currentFilters type)
   */
  currentFilters?: Array<{ label: string; value: string }>;
  
  /**
   * Callback when filter changes
   */
  onChange: (name: string, value: any) => void;
  
  /**
   * Whether filter is removable
   */
  removable?: boolean;
  
  /**
   * Callback when filter is removed
   */
  onRemove?: (name: string) => void;
}

export type TableContentCaseProps = {
  /**
   * Type of case to display
   */
  type: 'error' | 'empty' | 'notFound' | 'loading';
  
  /**
   * Message to display
   */
  message?: string;
  
  /**
   * Subtitle message for notFound case (optional)
   */
  subtitle?: string;
};
