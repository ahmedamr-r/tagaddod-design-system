import { useMemo } from 'react';

// Define a constant for the ellipsis
export const DOTS = '...';

export interface UsePaginationProps {
  /**
   * Total number of items
   */
  total: number;
  
  /**
   * Current page number (1-based)
   */
  current: number;
  
  /**
   * Number of items per page
   * @default 10
   */
  pageSize?: number;
  
  /**
   * Number of sibling pages to display on each side of current page
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationResult {
  /**
   * Array of page numbers and ellipsis to render
   */
  paginationRange: Array<number | typeof DOTS>;
  
  /**
   * Total number of pages
   */
  totalPages: number;
  
  /**
   * Current page
   */
  currentPage: number;
}

/**
 * Hook to generate a range of pagination items
 */
export const usePagination = ({
  total,
  current,
  pageSize = 10,
  siblingCount = 1,
}: UsePaginationProps): UsePaginationResult => {
  // Calculate total pages
  const totalPages = Math.ceil(total / pageSize);
  
  // Create a range function helper
  const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };
  
  // Calculate the range of pages to display
  const paginationRange = useMemo(() => {
    // Ensure current page is within valid range
    const currentPage = Math.max(1, Math.min(current, totalPages));
    
    // Number of items to always display
    const totalPageItems = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis
    
    // If we have fewer pages than the number we want to show
    if (totalPages <= totalPageItems) {
      return range(1, totalPages);
    }
    
    // Determine if we need left or right ellipsis
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    
    // Don't show ellipsis if there's just one page missing
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    
    // No left ellipsis, but right ellipsis
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      
      return [...leftRange, DOTS, totalPages] as Array<number | typeof DOTS>;
    }
    
    // No right ellipsis, but left ellipsis
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      
      return [firstPageIndex, DOTS, ...rightRange] as Array<number | typeof DOTS>;
    }
    
    // Both ellipsis
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex] as Array<number | typeof DOTS>;
    }
    
    // Shouldn't get here, but just in case
    return range(1, totalPages);
  }, [total, current, pageSize, siblingCount]);
  
  return {
    paginationRange,
    totalPages,
    currentPage: current,
  };
};
