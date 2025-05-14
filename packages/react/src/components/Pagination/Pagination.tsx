import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import styles from './Pagination.module.css';
import { PaginationProps } from './types';
import { PaginationItem } from './PaginationItem';
import { PaginationEllipsis } from './PaginationEllipsis';
import { PaginationPrev, PaginationNext } from './PaginationNav';
import { usePagination, DOTS } from './usePagination';

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
  
  // Update internal state when props change
  useEffect(() => {
    setCurrentPage(current);
  }, [current]);
  
  useEffect(() => {
    setCurrentPageSize(pageSize);
  }, [pageSize]);
  
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
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = Number(e.target.value);
    setCurrentPageSize(newPageSize);
    // Reset to page 1 when changing page size
    setCurrentPage(1);
    onChange?.(1, newPageSize);
    onPageSizeChange?.(newPageSize);
  };
  
  // Calculate "Showing X to Y of Z entries" text
  const countText = useMemo(() => {
    const start = total === 0 ? 0 : (currentPage - 1) * currentPageSize + 1;
    const end = Math.min(currentPage * currentPageSize, total);
    return `Showing ${start} to ${end} of ${total} entries`;
  }, [currentPage, currentPageSize, total]);
  
  // RTL detection for line height
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
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
      
      <div className={styles.paginationItems}>
        <PaginationPrev 
          onClick={handlePrev} 
          disabled={currentPage === 1} 
        />
        
        {/* Render page items */}
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <PaginationEllipsis key={`ellipsis-${index}`} />;
          }
          
          const page = pageNumber as number;
          return (
            <PaginationItem
              key={`page-${page}`}
              page={page}
              isCurrent={page === currentPage}
              onClick={handlePageChange}
            />
          );
        })}
        
        <PaginationNext
          onClick={handleNext}
          disabled={currentPage === totalPages}
        />
      </div>
      
      {showRowsInPage && (
        <div className={styles.rowsPerPage}>
          <span className={styles.rowsLabel} style={lineHeightStyle}>
            {isRTL ? 'عدد الصفوف' : 'Rows in Page'}
          </span>
          <div className={styles.selectWrapper}>
            <select 
              className={styles.select}
              value={currentPageSize}
              onChange={handlePageSizeChange}
              aria-label={isRTL ? 'عدد الصفوف' : 'Rows in Page'}
            >
              {pageSizeOptions.map(size => (
                <option key={size} value={size} className={styles.selectValue} style={lineHeightStyle}>
                  {size}
                </option>
              ))}
            </select>
            <span className={styles.selectArrow}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
