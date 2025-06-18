import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { IconChevronLeft, IconChevronRight, IconChevronDown } from '@tabler/icons-react';
import styles from './Pagination.module.css';
import { Button } from '../Button/Button';
import { Popover } from '../Popover/Popover';
import { PaginationProps } from './types';

// Define a constant for the ellipsis
export const DOTS = '...';

/**
 * Pagination hook to calculate the range of pages to display
 */
export const usePagination = ({
  total,
  current,
  pageSize = 10,
  siblingCount = 1,
}: {
  total: number;
  current: number;
  pageSize?: number;
  siblingCount?: number;
}) => {
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

/**
 * Pagination component
 */
export const Pagination: React.FC<PaginationProps> = ({
  total,
  current = 1,
  pageSize = 10,
  onChange,
  onPageSizeChange,
  
  showCount = true,
  showRowsInPage = true,
  
  countType = 'long',
  
  className,
  pageSizeOptions = [10, 20, 50, 100],
}) => {
  // State to track current page internally if not controlled
  const [currentPage, setCurrentPage] = useState<number>(current);
  // State to track page size internally
  const [currentPageSize, setCurrentPageSize] = useState<number>(pageSize);
  // State to control the rows per page popover
  const [isRowsPopoverOpen, setIsRowsPopoverOpen] = useState<boolean>(false);
  // State to track RTL direction (reactive to changes)
  const [isRTL, setIsRTL] = useState<boolean>(false);
  
  // Update internal state when props change
  useEffect(() => {
    setCurrentPage(current);
  }, [current]);
  
  useEffect(() => {
    setCurrentPageSize(pageSize);
  }, [pageSize]);

  // Effect to monitor RTL direction changes
  useEffect(() => {
    const checkRTL = () => {
      const rtl = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
      setIsRTL(prevRTL => {
        // Only update if the value actually changed to avoid unnecessary re-renders
        if (prevRTL !== rtl) {
          return rtl;
        }
        return prevRTL;
      });
    };

    // Check initially
    checkRTL();

    // Set up a MutationObserver to watch for dir attribute changes
    const observer = new MutationObserver((mutations) => {
      // Check if any mutation was related to the dir attribute
      const dirChanged = mutations.some(mutation => 
        mutation.type === 'attributes' && mutation.attributeName === 'dir'
      );
      if (dirChanged) {
        checkRTL();
      }
    });

    // Observe changes to dir attribute on html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir']
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Get pagination data from hook
  const { paginationRange, totalPages } = usePagination({
    total,
    current: currentPage,
    pageSize: currentPageSize,
    siblingCount: countType === 'long' ? 1 : 0, // No siblings in short mode
  });
  
  // Handler for page change
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    onChange?.(page, currentPageSize);
  };
  
  // Handler for previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  
  // Handler for next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  
  // Handler for page size change
  const handlePageSizeChange = (newPageSize: number) => {
    setCurrentPageSize(newPageSize);
    // Reset to page 1 when changing page size
    setCurrentPage(1);
    onChange?.(1, newPageSize);
    onPageSizeChange?.(newPageSize);
    // Close the popover after selection
    setIsRowsPopoverOpen(false);
  };
  
  // Calculate "Showing X to Y of Z entries" text
  const countText = useMemo(() => {
    const start = total === 0 ? 0 : (currentPage - 1) * currentPageSize + 1;
    const end = Math.min(currentPage * currentPageSize, total);
    return `Showing ${start} to ${end} of ${total} entries`;
  }, [currentPage, currentPageSize, total]);
  
  // Line height style based on RTL state
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
  // Render ellipsis
  const renderEllipsis = (key: string) => (
    <div className={styles.ellipsis} key={key} aria-hidden="true">•••</div>
  );
  
  // Don't render if no items or only one page
  if (total === 0 || totalPages <= 0) {
    return null;
  }
  
  return (
    <div className={clsx(styles.pagination, className)}>
      {showCount && (
        <div className={styles.count} style={lineHeightStyle}>
          {isRTL ? (
            // Arabic format
            `عرض ${(currentPage - 1) * currentPageSize + 1} إلى ${Math.min(currentPage * currentPageSize, total)} من أصل ${total}`
          ) : (
            // English format
            countText
          )}
        </div>
      )}
      
      <div className={styles.controlsGroup}>
        <div className={styles.paginationItems}>
          {isRTL ? (
            <>
              {/* RTL: Next button first (left arrow pointing left) */}
              <Button
                size="micro"
                variant="tertiary"
                tone="neutral"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                prefixIcon={<IconChevronLeft size={16} />}
              />
              
              {/* RTL: Page buttons in reverse order */}
              {[...paginationRange].reverse().map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                  return renderEllipsis(`ellipsis-rtl-${index}`);
                }
                
                const page = pageNumber as number;
                const isCurrentPage = page === currentPage;
                
                return (
                  <Button
                    key={`page-rtl-${page}`}
                    size="micro"
                    variant="tertiary"
                    tone={isCurrentPage ? "default" : "neutral"}
                    onClick={() => handlePageChange(page)}
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {page}
                  </Button>
                );
              })}
              
              {/* RTL: Previous button last (right arrow pointing right) */}
              <Button
                size="micro"
                variant="tertiary"
                tone="neutral"
                onClick={handlePrev}
                disabled={currentPage === 1}
                aria-label="Previous page"
                prefixIcon={<IconChevronRight size={16} />}
              />
            </>
          ) : (
            <>
              {/* LTR: Previous button first */}
              <Button
                size="micro"
                variant="tertiary"
                tone="neutral"
                onClick={handlePrev}
                disabled={currentPage === 1}
                aria-label="Previous page"
                prefixIcon={<IconChevronLeft size={16} />}
              />
              
              {/* LTR: Page buttons in normal order */}
              {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                  return renderEllipsis(`ellipsis-${index}`);
                }
                
                const page = pageNumber as number;
                const isCurrentPage = page === currentPage;
                
                return (
                  <Button
                    key={`page-${page}`}
                    size="micro"
                    variant="tertiary"
                    tone={isCurrentPage ? "default" : "neutral"}
                    onClick={() => handlePageChange(page)}
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {page}
                  </Button>
                );
              })}
              
              {/* LTR: Next button last */}
              <Button
                size="micro"
                variant="tertiary"
                tone="neutral"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                suffixIcon={<IconChevronRight size={16} />}
              />
            </>
          )}
        </div>
        
        {/* Rows per page dropdown - shown for both LTR and RTL */}
        {showRowsInPage && (
          <div className={styles.rowsPerPage}>
            <Popover
              open={isRowsPopoverOpen}
              onOpenChange={setIsRowsPopoverOpen}
              side="bottom"
              align={isRTL ? "start" : "end"}
              margin="none"
              content={
                <div className={styles.popoverContent}>
                  {pageSizeOptions.map(size => (
                    <button
                      key={size}
                      className={clsx(
                        styles.popoverOption,
                        size === currentPageSize && styles.popoverOptionSelected
                      )}
                      onClick={() => handlePageSizeChange(size)}
                      style={lineHeightStyle}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              }
            >
              <button 
                className={styles.rowsButton} 
                aria-label={isRTL ? "عدد الصفوف" : "Rows in Page"}
                data-state={isRowsPopoverOpen ? 'open' : 'closed'}
              >
                {isRTL ? (
                  <>
                    <IconChevronDown size={16} className={styles.chevron} />
                    <span className={styles.rowsValue} style={lineHeightStyle}>
                      {currentPageSize}
                    </span>
                    <span className={styles.rowsLabel} style={lineHeightStyle}>
                      عدد الصفوف
                    </span>
                  </>
                ) : (
                  <>
                    <span className={styles.rowsLabel} style={lineHeightStyle}>
                      Rows in Page
                    </span>
                    <span className={styles.rowsValue} style={lineHeightStyle}>
                      {currentPageSize}
                    </span>
                    <IconChevronDown size={16} className={styles.chevron} />
                  </>
                )}
              </button>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};
