import { useMemo, useState, useEffect } from 'react';
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
import { Tabs, TabsList, TabsTrigger } from '../Tabs';

// Extend ColumnMeta to include custom properties
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
  }
}
import { FilterItem } from './FilterItem';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableCell } from './TableCell';
import { TableContentCase } from './TableContentCase';
import { Pagination } from '../Pagination';
import styles from './Table.module.css';
import { TableProps, TableTab } from './types';

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
  showFilterBar: defaultShowFilterBar = false,
  showExport = false,
  showTotalBadge = true,
  defaultSorting = [],
  defaultColumnVisibility = {},
  onRowClick,
  onCellClick,
  tabItems = [],
  tableTabs = [],
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
  const [isFilterBarVisible, setIsFilterBarVisible] = useState<boolean>(defaultShowFilterBar);
  
  // Default pagination state for internal use when not provided
  const [internalPagination, setInternalPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Determine if we're using tableTabs (enhanced) or simple tabItems
  const usingEnhancedTabs = tableTabs.length > 0;

  // Initialize active tab from tableTabs or tabItems
  const initialActiveTab = useMemo(() => {
    // Check if tableTabs has active tab
    if (usingEnhancedTabs) {
      const activeTabItem = tableTabs.find(tab => tab.active);
      if (activeTabItem) return activeTabItem.id;
      return tableTabs[0]?.id || '';
    }
    
    // Otherwise check tabItems
    if (tabItems.length > 0) {
      const activeTabItem = tabItems.find(tab => tab.active);
      if (activeTabItem) return activeTabItem.id;
      return tabItems[0]?.id || '';
    }
    
    return '';
  }, [tableTabs, tabItems, usingEnhancedTabs]);

  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);

  // Get the current active tab configuration if using enhanced tabs
  const activeTabConfig = useMemo<TableTab<T> | null>(() => {
    if (!usingEnhancedTabs) return null;
    return tableTabs.find(tab => tab.id === activeTab) || null;
  }, [activeTab, tableTabs, usingEnhancedTabs]);

  // Get the current data for the active tab (or default data)
  const activeData = useMemo<T[]>(() => {
    if (usingEnhancedTabs && activeTabConfig?.data) {
      return activeTabConfig.data;
    }
    return data;
  }, [data, activeTabConfig, usingEnhancedTabs]);

  // Get the current columns for the active tab (or default columns)
  const activeColumns = useMemo<ColumnDef<T, any>[]>(() => {
    if (usingEnhancedTabs && activeTabConfig?.columns) {
      return activeTabConfig.columns;
    }
    return columns;
  }, [columns, activeTabConfig, usingEnhancedTabs]);

  // Get the current title for the active tab (or default title)
  const activeTitle = useMemo<string | undefined>(() => {
    if (usingEnhancedTabs && activeTabConfig?.title) {
      return activeTabConfig.title;
    }
    return title;
  }, [title, activeTabConfig, usingEnhancedTabs]);

  // Get the current pagination for the active tab (or default pagination)
  const activePagination = useMemo(() => {
    if (usingEnhancedTabs && activeTabConfig?.pagination) {
      return activeTabConfig.pagination;
    }
    return pagination;
  }, [pagination, activeTabConfig, usingEnhancedTabs]);

  // Sync search query with global filter
  useEffect(() => {
    setGlobalFilter(searchQuery);
  }, [searchQuery]);

  // Transform tabItems or tableTabs to tab props needed by Tabs component
  const tabsForDisplay = useMemo(() => {
    if (usingEnhancedTabs) {
      return tableTabs.map(tab => ({
        id: tab.id,
        label: tab.label,
        active: tab.id === activeTab,
        badge: tab.badge,
      }));
    } else {
      return tabItems.map(tab => ({
        id: tab.id,
        label: tab.label,
        active: tab.id === activeTab,
        badge: tab.badge,
      }));
    }
  }, [tableTabs, tabItems, activeTab, usingEnhancedTabs]);

  // Create the table instance
  const table = useReactTable({
    data: activeData,
    columns: activeColumns,
    state: {
      sorting,
      columnVisibility,
      globalFilter,
      // Use either provided pagination or internal pagination state
      pagination: activePagination ? {
        pageIndex: activePagination.pageIndex,
        pageSize: activePagination.pageSize,
      } : internalPagination,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: (value) => {
      setGlobalFilter(String(value));
      onSearchChange?.(String(value));
    },
    // Unified approach to handle pagination changes
    onPaginationChange: (updater) => {
      // Handle both function updater and direct value
      const newPagination = typeof updater === 'function' 
        ? updater(activePagination ? { 
            pageIndex: activePagination.pageIndex, 
            pageSize: activePagination.pageSize 
          } : internalPagination) 
        : updater;
      
      if (activePagination) {
        activePagination.onPageChange(newPagination.pageIndex);
        if (activePagination.onPageSizeChange && newPagination.pageSize !== activePagination.pageSize) {
          activePagination.onPageSizeChange(newPagination.pageSize);
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
    manualPagination: !!activePagination,
    // Pagination page count
    pageCount: activePagination?.pageCount ?? Math.ceil(activeData.length / (activePagination?.pageSize || internalPagination.pageSize)),
  });

  // Handle tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Reset pagination when switching tabs
    setInternalPagination({
      pageIndex: 0,
      pageSize: internalPagination.pageSize,
    });
    
    // Callback
    onTabChange?.(tabId);
  };

  // Handle filter bar toggle
  const handleFilterClick = () => {
    setIsFilterBarVisible(!isFilterBarVisible);
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
  const currentPagination = activePagination || internalPagination;

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
    
    if (state === 'empty' || activeData.length === 0) {
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
                  onSort={() => header.column.toggleSorting()}
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
        isFilterBarVisible && styles.tableWithActiveFilter,
        className
      )}
    >
      {showTabs && tabsForDisplay.length > 0 && (
        <div className={styles.tabsContainer}>
          <Tabs
            defaultValue={activeTab}
            onValueChange={handleTabChange}
            value={activeTab}
            dir={isRTL ? "rtl" : "ltr"} // Explicitly set direction
          >
            <TabsList className={styles.tabsList}>
              {tabsForDisplay.map(tab => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  badge={tab.badge}
                  className={styles.tabTrigger}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
      
      {showHeader && (
        <TableHeader
          title={hasActiveFilters && activeTitle ? `Filtered ${activeTitle}` : activeTitle}
          badge={effectiveBadge}
          showSearch={showSearch}
          showFilters={showFilters}
          showExport={showExport}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onFilterClick={handleFilterClick}
          onExport={onExport}
          isFilterBarVisible={isFilterBarVisible}
        />
      )}
      
      {isFilterBarVisible && showFilters && Object.keys(filterOptions).length > 0 && (
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
      
      {showPagination && state === 'normal' && activeData.length > 0 && (
        <div className={styles.paginationContainer}>
          <Pagination 
            total={table.getPrePaginationRowModel().rows.length}
            current={currentPagination.pageIndex + 1}
            pageSize={currentPagination.pageSize}
            onChange={(page) => {
              if (activePagination) {
                activePagination.onPageChange(page - 1);
              } else {
                table.setPageIndex(page - 1);
              }
            }}
            onPageSizeChange={(newPageSize) => {
              if (activePagination && activePagination.onPageSizeChange) {
                activePagination.onPageSizeChange(newPageSize);
              } else {
                table.setPageSize(newPageSize);
              }
            }}
            pageSizeOptions={activePagination?.pageSizeOptions || [10, 20, 50, 100]}
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
