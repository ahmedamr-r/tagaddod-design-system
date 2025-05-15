import { ReactNode } from 'react';
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  Row,
  Cell,
} from '@tanstack/react-table';

export type SortDirection = 'asc' | 'desc' | false;

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
  };
  
  /**
   * Whether to show striped rows
   * @default true
   */
  striped?: boolean;
  
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
   */
  tabItems?: Array<{
    id: string;
    label: string;
    active?: boolean;
  }>;
  
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
   * Search query
   */
  searchQuery?: string;
  
  /**
   * Callback when search query changes
   */
  onSearchChange?: (query: string) => void;
  
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
      options: Array<{ label: string; value: any }>;
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
   * Options for the filter
   */
  options: Array<{ label: string; value: any }>;
  
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
};
