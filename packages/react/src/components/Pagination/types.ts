export interface PaginationProps {
  /**
   * Total number of items
   */
  total: number;
  
  /**
   * Current page number (1-based)
   */
  current?: number;
  
  /**
   * Number of items per page
   * @default 10
   */
  pageSize?: number;
  
  /**
   * Callback when page is changed
   */
  onChange?: (page: number, pageSize?: number) => void;
  
  /**
   * Callback when page size is changed
   */
  onPageSizeChange?: (pageSize: number) => void;
  
  /**
   * Whether to show the count text
   * @default true
   */
  showCount?: boolean;
  
  /**
   * Whether to show the rows per page selector
   * @default true
   */
  showRowsInPage?: boolean;
  
  /**
   * Count type
   * 'short': Show all page numbers (up to 8)
   * 'long': Show ellipsis for large number of pages
   * @default 'long'
   */
  countType?: 'short' | 'long';
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Available page sizes for the selector
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];
}
