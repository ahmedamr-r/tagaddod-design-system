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
  ColumnOrderState,
  ColumnSizingState,
  ColumnPinningState,
  flexRender,
} from '@tanstack/react-table';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Tabs, TabsList, TabsTrigger } from '../Tabs';
import { ScrollArea } from '../ScrollArea';
import { Button } from '../Button';
import { Drawer } from '../Drawer';
import { Select } from '../Select';
import { RangeSlider } from '../RangeSlider';
import { Checkbox } from '../Checkbox';
import { RadioGroup, RadioButtonItem } from '../RadioButton';

// Extend ColumnMeta to include custom properties
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
    /** 
     * Whether this column should be pinned
     * @default false
     */
    pinned?: 'left' | 'right' | false;
  }
}
import { FilterItem } from './FilterItem';
import { TableHeader } from './TableHeader';
import { SortableHeaderCell } from './SortableHeaderCell';
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
  striped = false,
  gridCells = false,
  disableRowHover = false,
  enableColumnResizing = false,
  enableColumnOrdering = false,
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
  notFoundSubtitle,
  searchQuery = '',
  onSearchChange,
  searchConfig,
  onExport,
  activeFilters = {},
  onFilterChange,
  filterOptions = {},
  className = '',
  footerContent,
  emptyStateNode,
  enableScrollArea = false,
  scrollAreaHeight = '400px',
  scrollAreaWidth = '100%',
  enableHorizontalScroll = true,
  enableVerticalScroll = true,
  scrollAreaType = 'hover',
}: TableProps<T>) => {
  // Table state
  const [sorting, setSorting] = useState<SortingState>(defaultSorting);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(defaultColumnVisibility);
  const [globalFilter, setGlobalFilter] = useState<string>(searchQuery);
  const [isFilterBarVisible, setIsFilterBarVisible] = useState<boolean>(defaultShowFilterBar);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);
  
  // Column ordering, sizing, and pinning state
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({ left: [], right: [] });
  
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

  // Initialize column order when columns change
  useEffect(() => {
    const columnIds = activeColumns.map((col, index) => 
      col.id ?? (col as any).accessorKey?.toString() ?? index.toString()
    );
    setColumnOrder(columnIds);
  }, [activeColumns]);

  // Initialize column pinning state based on column meta.pinned
  useEffect(() => {
    const leftPinnedColumns: string[] = [];
    const rightPinnedColumns: string[] = [];

    activeColumns.forEach((col, index) => {
      const columnId = col.id ?? (col as any).accessorKey?.toString() ?? index.toString();
      const pinned = col.meta?.pinned;

      if (pinned === 'left') {
        leftPinnedColumns.push(columnId);
      } else if (pinned === 'right') {
        rightPinnedColumns.push(columnId);
      }
    });

    setColumnPinning({
      left: leftPinnedColumns,
      right: rightPinnedColumns,
    });
  }, [activeColumns]);

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

  // Detect RTL for line height adjustments and column resize direction
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle column reordering
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = columnOrder.indexOf(active.id as string);
      const newIndex = columnOrder.indexOf(over?.id as string);
      const newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex);
      setColumnOrder(newColumnOrder);
    }
  };

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
      columnOrder,
      columnSizing,
      columnPinning,
      // Use either provided pagination or internal pagination state
      pagination: activePagination ? {
        pageIndex: activePagination.pageIndex,
        pageSize: activePagination.pageSize,
      } : internalPagination,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnSizingChange: setColumnSizing,
    onColumnPinningChange: setColumnPinning,
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
    // Enable column features
    enableColumnResizing: enableColumnResizing,
    columnResizeMode: 'onChange',
    columnResizeDirection: isRTL ? 'rtl' : 'ltr',
    // Indicate if using manual pagination (e.g., server-side)
    // Only use manual pagination if explicitly specified for server-side pagination
    manualPagination: activePagination?.isServerSide ?? false,
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

  // Handle clear all filters
  const handleClearAllFilters = () => {
    onFilterChange?.({});
  };

  // Filter visibility logic - progressive disclosure pattern
  const MAX_VISIBLE_FILTERS = 5;
  const allFilterKeys = Object.keys(filterOptions);
  const visibleFilterKeys = allFilterKeys.slice(0, MAX_VISIBLE_FILTERS);
  const hasMoreFilters = allFilterKeys.length > MAX_VISIBLE_FILTERS;

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

  // Helper function to get pinning styles based on TanStack Table best practices
  const getPinningStyles = (column: any): React.CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
    const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');
    
    return {
      boxShadow: isLastLeftPinnedColumn
        ? '-4px 0 4px -4px rgba(0, 0, 0, 0.1) inset'
        : isFirstRightPinnedColumn
        ? '4px 0 4px -4px rgba(0, 0, 0, 0.1) inset'
        : undefined,
      left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
      position: isPinned ? 'sticky' : 'relative',
      width: column.getSize(),
      zIndex: isPinned ? 10 : 1,
      backgroundColor: 'var(--t-color-background-primary)',
    };
  };

  // Get current pagination state (either from props or internal state)
  const currentPagination = activePagination || internalPagination;

  // Helper to render table element
  const renderTable = () => {
    if (enableColumnOrdering) {
      return (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <table className={clsx(styles.table, className?.includes('fixed-width') && styles.fixedWidthTable)}>
            <thead className={styles.tableHead}>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <SortableContext
                    items={columnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    {headerGroup.headers.map((header) => (
                      <SortableHeaderCell
                        key={header.id}
                        header={header}
                        enableColumnOrdering={enableColumnOrdering}
                        pinningStyles={getPinningStyles(header.column)}
                      />
                    ))}
                  </SortableContext>
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
                      onRowClick && styles.clickableRow,
                      disableRowHover && styles.staticRow,
                      (row.original as any)?.hasError && styles.errorRow
                    )}
                    onClick={() => onRowClick?.(row)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`${styles.tableCell} ${cell.column.columnDef.meta?.cellClassName || ''} ${
                          striped && !isEvenRow ? styles.striped : ''
                        } ${gridCells ? styles.gridCell : ''}`}
                        style={{
                          width: `${cell.column.getSize()}px`,
                          ...getPinningStyles(cell.column)
                        }}
                        onClick={() => onCellClick?.(cell)}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </DndContext>
      );
    }

    // Static table without column ordering
    return (
      <table className={clsx(styles.table, className?.includes('fixed-width') && styles.fixedWidthTable)}>
        <thead className={styles.tableHead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <SortableHeaderCell
                  key={header.id}
                  header={header}
                  enableColumnOrdering={enableColumnOrdering}
                  pinningStyles={getPinningStyles(header.column)}
                />
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
                  onRowClick && styles.clickableRow,
                  disableRowHover && styles.staticRow,
                  (row.original as any)?.hasError && styles.errorRow
                )}
                onClick={() => onRowClick?.(row)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`${styles.tableCell} ${cell.column.columnDef.meta?.cellClassName || ''} ${
                      striped && !isEvenRow ? styles.striped : ''
                    } ${gridCells ? styles.gridCell : ''}`}
                    style={{
                      width: `${cell.column.getSize()}px`,
                      ...getPinningStyles(cell.column)
                    }}
                    onClick={() => onCellClick?.(cell)}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  // Helper to render content based on state
  const renderContent = () => {
    if (state === 'error') {
      return <TableContentCase type="error" message={errorMessage} />;
    }

    if (state === 'loading') {
      return <TableContentCase type="loading" />;
    }

    if (state === 'notFound') {
      return <TableContentCase type="notFound" message={notFoundMessage} subtitle={notFoundSubtitle} />;
    }

    if (state === 'empty' || activeData.length === 0) {
      if (emptyStateNode) {
        return emptyStateNode;
      }
      return <TableContentCase type="empty" message={emptyMessage} />;
    }

    // Render table with or without ScrollArea
    const tableElement = renderTable();

    if (enableScrollArea) {
      return (
        <ScrollArea
          height={scrollAreaHeight}
          width={scrollAreaWidth}
          horizontal={enableHorizontalScroll}
          vertical={enableVerticalScroll}
          type={scrollAreaType}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {tableElement}
        </ScrollArea>
      );
    }

    return tableElement;
  };

  return (
    <div 
      className={clsx(
        styles.tableContainer,
        striped && styles.striped,
        gridCells && styles.gridCells,
        isFilterBarVisible && styles.tableWithActiveFilter,
        !enableColumnOrdering && styles.disableColumnOrdering,
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
          searchConfig={searchConfig}
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
            {visibleFilterKeys.map((filterKey) => {
              const filterOption = filterOptions[filterKey];
              const filterType = filterOption.type || 'select';

              // Generate current filters for currentFilters type
              const getCurrentFilters = () => {
                if (filterType !== 'currentFilters') return [];

                return Object.entries(activeFilters)
                  .filter(([key, value]) => value !== undefined && key !== filterKey)
                  .map(([key, value]) => {
                    const relatedFilter = filterOptions[key];
                    if (!relatedFilter) return { label: `${key}: ${value}`, value: key };

                    // Format based on filter type
                    if (relatedFilter.type === 'rangeSlider' && Array.isArray(value)) {
                      const config = relatedFilter.rangeConfig;
                      const formatValue = config?.formatValue || ((val: number) => val.toString());
                      const prefix = config?.prefix || '';
                      const suffix = config?.suffix || '';
                      return {
                        label: `${relatedFilter.label}: ${prefix}${formatValue(value[0])} - ${prefix}${formatValue(value[1])}${suffix}`,
                        value: key
                      };
                    } else if (relatedFilter.options) {
                      const selectedOption = relatedFilter.options.find(opt => opt.value === value);
                      return {
                        label: `${relatedFilter.label}: ${selectedOption?.label || value}`,
                        value: key
                      };
                    }

                    return { label: `${relatedFilter.label}: ${value}`, value: key };
                  });
              };

              return (
                <FilterItem
                  key={filterKey}
                  name={filterKey}
                  label={filterOption.label}
                  value={activeFilters[filterKey]}
                  type={filterType}
                  options={filterOption.options}
                  rangeConfig={filterOption.rangeConfig}
                  currentFilters={getCurrentFilters()}
                  onChange={handleFilterChange}
                  removable={true}
                  onRemove={handleFilterRemove}
                />
              );
            })}

            {hasMoreFilters && (
              <Button
                variant="plain"
                tone="default"
                size="small"
                onClick={() => setIsFilterDrawerOpen(true)}
                className={styles.moreFiltersButton}
              >
                {isRTL ? "المزيد من الفلاتر" : "More filters"}
              </Button>
            )}
          </div>

          {Object.keys(activeFilters).length > 0 && (
            <Button
              variant="plain"
              tone="critical"
              size="small"
              onClick={handleClearAllFilters}
              className={styles.clearAllButton}
            >
              {isRTL ? "مسح جميع الفلاتر" : "Clear all filters"}
            </Button>
          )}
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

      {/* Advanced Filters Drawer */}
      <Drawer
        open={isFilterDrawerOpen}
        onOpenChange={setIsFilterDrawerOpen}
        title={isRTL ? "الفلاتر" : "Filters"}
        position={isRTL ? "left" : "right"}
        size="medium"
        showFooter={false}
      >
        <div className={styles.drawerFilters}>
          {allFilterKeys.map((filterKey) => {
            const filterOption = filterOptions[filterKey];
            const filterType = filterOption.type || 'select';
            const currentValue = activeFilters[filterKey];

            // Render appropriate input component based on filter type
            if (filterType === 'rangeSlider' && filterOption.rangeConfig) {
              const config = filterOption.rangeConfig;
              const value = Array.isArray(currentValue) ? currentValue : [config.min, config.max];

              return (
                <div key={filterKey} className={styles.drawerFilterItem}>
                  <RangeSlider
                    label={filterOption.label}
                    min={config.min}
                    max={config.max}
                    step={config.step || 1}
                    value={value}
                    onChange={(newValue) => handleFilterChange(filterKey, newValue)}
                    formatValue={config.formatValue}
                    prefix={config.prefix}
                    suffix={config.suffix}
                  />
                </div>
              );
            }

            if (filterType === 'checkboxGroup' && filterOption.options) {
              const selectedValues = Array.isArray(currentValue) ? currentValue : [];

              return (
                <div key={filterKey} className={styles.drawerFilterItem}>
                  <label className={styles.drawerFilterLabel}>{filterOption.label}</label>
                  <div className={styles.checkboxGroup}>
                    {filterOption.options.map((option) => (
                      <Checkbox
                        key={option.value}
                        label={option.label}
                        checked={selectedValues.includes(option.value)}
                        onCheckedChange={(checked) => {
                          const newValues = checked
                            ? [...selectedValues, option.value]
                            : selectedValues.filter(v => v !== option.value);
                          handleFilterChange(filterKey, newValues);
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            }

            if (filterType === 'radioGroup' && filterOption.options) {
              // Ensure we have a valid string value for the RadioGroup component
              const radioValue = currentValue ? String(currentValue) : '';

              return (
                <div key={filterKey} className={styles.drawerFilterItem}>
                  <RadioGroup
                    label={filterOption.label}
                    value={radioValue}
                    onValueChange={(newValue) => handleFilterChange(filterKey, newValue)}
                  >
                    {filterOption.options.map((option) => (
                      <RadioButtonItem
                        key={option.value}
                        value={String(option.value)}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </div>
              );
            }

            // Default: select dropdown
            if (filterOption.options) {
              // Ensure we have a valid string value for the Select component
              const selectValue = currentValue ? String(currentValue) : '';

              // Convert filter options to Select component format
              const selectOptions = filterOption.options.map(opt => ({
                value: String(opt.value),
                label: opt.label,
                disabled: false
              }));

              return (
                <div key={filterKey} className={styles.drawerFilterItem}>
                  <Select
                    label={filterOption.label}
                    value={selectValue}
                    onValueChange={(newValue) => handleFilterChange(filterKey, newValue)}
                    placeholder={isRTL ? `اختر ${filterOption.label}` : `Select ${filterOption.label}`}
                    options={selectOptions}
                    fullWidth
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
      </Drawer>
    </div>
  );
};
