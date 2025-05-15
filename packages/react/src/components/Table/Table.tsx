import React, { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
} from '@tanstack/react-table';
import { Tabs } from '../Tabs';
import { FilterItem } from './FilterItem';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableCell } from './TableCell';
import { TableContentCase } from './TableContentCase';
import { Pagination } from '../Pagination';
import styles from './Table.module.css';
import { TableProps } from './types';

export const Table = <T extends object>({
  data,
  columns,
  title,
  badge,
  pagination,
  striped = true,
  gridCells = false,
  showHeader = true,
  showTabs = false,
  showPagination = true,
  showSearch = true,
  showFilters = true,
  showFilterBar = false,
  showExport = false,
  showTotalBadge = true,
  defaultSorting = [],
  defaultColumnVisibility = {},
  onRowClick,
  onCellClick,
  tabItems = [],
  onTabChange,
  state = 'normal',
  errorMessage,
  emptyMessage,
  notFoundMessage,
  searchQuery = '',
  onSearchChange,
  onExport,
  activeFilters = {},
  onFilterChange,
  filterOptions = {},
  className = '',
  footerContent,
  emptyStateNode,
}: TableProps<T>) => {
  // Table state
  const [sorting, setSorting] = useState<SortingState>(defaultSorting);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(defaultColumnVisibility);
  const [globalFilter, setGlobalFilter] = useState<string>(searchQuery);
  const [activeTab, setActiveTab] = useState<string>(tabItems.find(tab => tab.active)?.id || tabItems[0]?.id || '');
  
  // Default pagination state for internal use when not provided
  const [internalPagination, setInternalPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Sync search query with global filter
  useEffect(() => {
    setGlobalFilter(searchQuery);
  }, [searchQuery]);

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      globalFilter,
      // Use either provided pagination or internal pagination state
      pagination: pagination ? {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      } : internalPagination,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: (value) => {
      setGlobalFilter(String(value));
      onSearchChange?.(String(value));
    },
    // Unified approach to handle pagination changes - no more conditional operator
    onPaginationChange: (updater) => {
      // Handle both function updater and direct value
      const newPagination = typeof updater === 'function' 
        ? updater(pagination ? { pageIndex: pagination.pageIndex, pageSize: pagination.pageSize } : internalPagination) 
        : updater;
      
      if (pagination) {
        pagination.onPageChange(newPagination.pageIndex);
        if (pagination.onPageSizeChange && newPagination.pageSize !== pagination.pageSize) {
          pagination.onPageSizeChange(newPagination.pageSize);
        }
      } else {
        setInternalPagination(newPagination);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // Always use pagination model for consistent behavior
    getPaginationRowModel: getPaginationRowModel(),
    // Indicate if using manual pagination (e.g., server-side)
    manualPagination: !!pagination,
    // Pagination page count
    pageCount: pagination?.pageCount ?? Math.ceil(data.length / (pagination?.pageSize || internalPagination.pageSize)),
  });

  // Handle tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  // Handle filter changes
  const handleFilterChange = (name: string, value: any) => {
    const newFilters = { ...activeFilters, [name]: value };
    onFilterChange?.(newFilters);
  };

  // Handle filter removal
  const handleFilterRemove = (name: string) => {
    const newFilters = { ...activeFilters };
    delete newFilters[name];
    onFilterChange?.(newFilters);
  };

  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Calculate effective badge value (may depend on filtered data)
  const effectiveBadge = useMemo(() => {
    if (!showTotalBadge) return undefined;
    if (badge !== undefined) return badge;
    return table.getPrePaginationRowModel().rows.length;
  }, [badge, table, showTotalBadge]);

  // Helper to determine if there are active filters
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  // Get current pagination state (either from props or internal state)
  const currentPagination = pagination || internalPagination;

  // Helper to render content based on state
  const renderContent = () => {
    if (state === 'error') {
      return <TableContentCase type="error" message={errorMessage} />;
    }
    
    if (state === 'loading') {
      return <TableContentCase type="loading" />;
    }
    
    if (state === 'notFound') {
      return <TableContentCase type="notFound" message={notFoundMessage} />;
    }
    
    if (state === 'empty' || data.length === 0) {
      if (emptyStateNode) {
        return emptyStateNode;
      }
      return <TableContentCase type="empty" message={emptyMessage} />;
    }
    
    return (
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  isSortable={header.column.getCanSort()}
                  sortDirection={header.column.getIsSorted() as any}
                  onSort={header.column.getToggleSortingHandler()}
                  className={header.column.columnDef.meta?.headerClassName}
                >
                  {header.isPlaceholder ? null : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                </TableHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            
            return (
              <tr
                key={row.id}
                className={clsx(
                  styles.tableRow,
                  onRowClick && styles.clickableRow
                )}
                onClick={() => onRowClick?.(row)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    isStriped={striped && !isEvenRow}
                    isGridCell={gridCells}
                    className={cell.column.columnDef.meta?.cellClassName}
                    onClick={() => onCellClick?.(cell)}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div 
      className={clsx(
        styles.tableContainer,
        striped && styles.striped,
        gridCells && styles.gridCells,
        className
      )}
    >
      {showTabs && tabItems.length > 0 && (
        <div className={styles.tabsContainer}>
          <Tabs
            items={tabItems.map(tab => ({
              id: tab.id,
              label: tab.label,
              active: tab.id === activeTab,
            }))}
            onChange={handleTabChange}
          />
        </div>
      )}
      
      {showHeader && (
        <TableHeader
          title={hasActiveFilters && title ? `Filtered ${title}` : title}
          badge={effectiveBadge}
          showSearch={showSearch}
          showFilters={showFilters}
          showExport={showExport}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onFilterClick={() => {
            // Handle filter click
          }}
          onExport={onExport}
        />
      )}
      
      {showFilterBar && Object.keys(filterOptions).length > 0 && (
        <div className={styles.filterBar}>
          <div className={styles.filterBarLabel} style={lineHeightStyle}>
            {isRTL ? "تصفية:" : "Filters:"}
          </div>
          
          <div className={styles.filterItems}>
            {Object.keys(filterOptions).map((filterKey) => (
              <FilterItem
                key={filterKey}
                name={filterKey}
                label={filterOptions[filterKey].label}
                value={activeFilters[filterKey]}
                options={filterOptions[filterKey].options}
                onChange={handleFilterChange}
                removable={true}
                onRemove={handleFilterRemove}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className={styles.tableContent}>
        {renderContent()}
      </div>
      
      {showPagination && state === 'normal' && data.length > 0 && (
        <div className={styles.paginationContainer}>
          <Pagination 
            total={table.getPrePaginationRowModel().rows.length}
            current={currentPagination.pageIndex + 1}
            pageSize={currentPagination.pageSize}
            onChange={(page) => {
              if (pagination) {
                pagination.onPageChange(page - 1);
              } else {
                table.setPageIndex(page - 1);
              }
            }}
            onPageSizeChange={(newPageSize) => {
              if (pagination && pagination.onPageSizeChange) {
                pagination.onPageSizeChange(newPageSize);
              } else {
                table.setPageSize(newPageSize);
              }
            }}
            pageSizeOptions={pagination?.pageSizeOptions || [10, 20, 50, 100]}
            showRowsInPage={true}
            showCount={true}
          />
        </div>
      )}
      
      {footerContent && (
        <div className={styles.footerContent}>
          {footerContent}
        </div>
      )}
    </div>
  );
};
