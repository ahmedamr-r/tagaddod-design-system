import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { useState, useMemo, useEffect } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { useReactTable, flexRender } from "../../node_modules/@tanstack/react-table/build/lib/index.es.js";
import { Tabs, TabsList, TabsTrigger } from "../Tabs/Tabs.es.js";
import { FilterItem } from "./FilterItem.es.js";
import { TableHeader } from "./TableHeader.es.js";
import { TableHeaderCell } from "./TableHeaderCell.es.js";
import { TableCell } from "./TableCell.es.js";
import { TableContentCase } from "./TableContentCase.es.js";
import { Pagination } from "../Pagination/Pagination.es.js";
import styles from "./Table.module.css.es.js";
import { getPaginationRowModel, getFilteredRowModel, getSortedRowModel, getCoreRowModel } from "../../node_modules/@tanstack/table-core/build/lib/index.es.js";
const Table = ({
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
  state = "normal",
  errorMessage,
  emptyMessage,
  notFoundMessage,
  searchQuery = "",
  onSearchChange,
  onExport,
  activeFilters = {},
  onFilterChange,
  filterOptions = {},
  className = "",
  footerContent,
  emptyStateNode
}) => {
  const [sorting, setSorting] = useState(defaultSorting);
  const [columnVisibility, setColumnVisibility] = useState(defaultColumnVisibility);
  const [globalFilter, setGlobalFilter] = useState(searchQuery);
  const [isFilterBarVisible, setIsFilterBarVisible] = useState(defaultShowFilterBar);
  const [internalPagination, setInternalPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  const usingEnhancedTabs = tableTabs.length > 0;
  const initialActiveTab = useMemo(() => {
    var _a, _b;
    if (usingEnhancedTabs) {
      const activeTabItem = tableTabs.find((tab) => tab.active);
      if (activeTabItem) return activeTabItem.id;
      return ((_a = tableTabs[0]) == null ? void 0 : _a.id) || "";
    }
    if (tabItems.length > 0) {
      const activeTabItem = tabItems.find((tab) => tab.active);
      if (activeTabItem) return activeTabItem.id;
      return ((_b = tabItems[0]) == null ? void 0 : _b.id) || "";
    }
    return "";
  }, [tableTabs, tabItems, usingEnhancedTabs]);
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const activeTabConfig = useMemo(() => {
    if (!usingEnhancedTabs) return null;
    return tableTabs.find((tab) => tab.id === activeTab) || null;
  }, [activeTab, tableTabs, usingEnhancedTabs]);
  const activeData = useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.data)) {
      return activeTabConfig.data;
    }
    return data;
  }, [data, activeTabConfig, usingEnhancedTabs]);
  const activeColumns = useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.columns)) {
      return activeTabConfig.columns;
    }
    return columns;
  }, [columns, activeTabConfig, usingEnhancedTabs]);
  const activeTitle = useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.title)) {
      return activeTabConfig.title;
    }
    return title;
  }, [title, activeTabConfig, usingEnhancedTabs]);
  const activePagination = useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.pagination)) {
      return activeTabConfig.pagination;
    }
    return pagination;
  }, [pagination, activeTabConfig, usingEnhancedTabs]);
  useEffect(() => {
    setGlobalFilter(searchQuery);
  }, [searchQuery]);
  const tabsForDisplay = useMemo(() => {
    if (usingEnhancedTabs) {
      return tableTabs.map((tab) => ({
        id: tab.id,
        label: tab.label,
        active: tab.id === activeTab,
        badge: tab.badge
      }));
    } else {
      return tabItems.map((tab) => ({
        id: tab.id,
        label: tab.label,
        active: tab.id === activeTab,
        badge: tab.badge
      }));
    }
  }, [tableTabs, tabItems, activeTab, usingEnhancedTabs]);
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
        pageSize: activePagination.pageSize
      } : internalPagination
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: (value) => {
      setGlobalFilter(String(value));
      onSearchChange == null ? void 0 : onSearchChange(String(value));
    },
    // Unified approach to handle pagination changes
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === "function" ? updater(activePagination ? {
        pageIndex: activePagination.pageIndex,
        pageSize: activePagination.pageSize
      } : internalPagination) : updater;
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
    pageCount: (activePagination == null ? void 0 : activePagination.pageCount) ?? Math.ceil(activeData.length / ((activePagination == null ? void 0 : activePagination.pageSize) || internalPagination.pageSize))
  });
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setInternalPagination({
      pageIndex: 0,
      pageSize: internalPagination.pageSize
    });
    onTabChange == null ? void 0 : onTabChange(tabId);
  };
  const handleFilterClick = () => {
    setIsFilterBarVisible(!isFilterBarVisible);
  };
  const handleFilterChange = (name, value) => {
    const newFilters = { ...activeFilters, [name]: value };
    onFilterChange == null ? void 0 : onFilterChange(newFilters);
  };
  const handleFilterRemove = (name) => {
    const newFilters = { ...activeFilters };
    delete newFilters[name];
    onFilterChange == null ? void 0 : onFilterChange(newFilters);
  };
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const effectiveBadge = useMemo(() => {
    if (!showTotalBadge) return void 0;
    if (badge !== void 0) return badge;
    return table.getPrePaginationRowModel().rows.length;
  }, [badge, table, showTotalBadge]);
  const hasActiveFilters = Object.keys(activeFilters).length > 0;
  const currentPagination = activePagination || internalPagination;
  const renderContent = () => {
    if (state === "error") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContentCase, { type: "error", message: errorMessage });
    }
    if (state === "loading") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContentCase, { type: "loading" });
    }
    if (state === "notFound") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContentCase, { type: "notFound", message: notFoundMessage });
    }
    if (state === "empty" || activeData.length === 0) {
      if (emptyStateNode) {
        return emptyStateNode;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContentCase, { type: "empty", message: emptyMessage });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: styles.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: styles.tableHead, children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: headerGroup.headers.map((header) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHeaderCell,
          {
            isSortable: header.column.getCanSort(),
            sortDirection: header.column.getIsSorted(),
            onSort: header.column.getToggleSortingHandler(),
            className: (_a = header.column.columnDef.meta) == null ? void 0 : _a.headerClassName,
            children: header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            )
          },
          header.id
        );
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: table.getRowModel().rows.map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "tr",
          {
            className: clsx(
              styles.tableRow,
              onRowClick && styles.clickableRow
            ),
            onClick: () => onRowClick == null ? void 0 : onRowClick(row),
            children: row.getVisibleCells().map((cell) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  isStriped: striped && !isEvenRow,
                  isGridCell: gridCells,
                  className: (_a = cell.column.columnDef.meta) == null ? void 0 : _a.cellClassName,
                  onClick: () => onCellClick == null ? void 0 : onCellClick(cell),
                  children: flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )
                },
                cell.id
              );
            })
          },
          row.id
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: clsx(
        styles.tableContainer,
        striped && styles.striped,
        gridCells && styles.gridCells,
        className
      ),
      children: [
        showTabs && tabsForDisplay.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.tabsContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tabs,
          {
            defaultValue: activeTab,
            onValueChange: handleTabChange,
            value: activeTab,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: styles.tabsList, children: tabsForDisplay.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: tab.id,
                badge: tab.badge,
                className: styles.tabTrigger,
                children: tab.label
              },
              tab.id
            )) })
          }
        ) }),
        showHeader && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHeader,
          {
            title: hasActiveFilters && activeTitle ? `Filtered ${activeTitle}` : activeTitle,
            badge: effectiveBadge,
            showSearch,
            showFilters,
            showExport,
            searchQuery,
            onSearchChange,
            onFilterClick: handleFilterClick,
            onExport,
            isFilterBarVisible
          }
        ),
        isFilterBarVisible && showFilters && Object.keys(filterOptions).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.filterBar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.filterBarLabel, style: lineHeightStyle, children: isRTL ? "تصفية:" : "Filters:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.filterItems, children: Object.keys(filterOptions).map((filterKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterItem,
            {
              name: filterKey,
              label: filterOptions[filterKey].label,
              value: activeFilters[filterKey],
              options: filterOptions[filterKey].options,
              onChange: handleFilterChange,
              removable: true,
              onRemove: handleFilterRemove
            },
            filterKey
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.tableContent, children: renderContent() }),
        showPagination && state === "normal" && activeData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.paginationContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pagination,
          {
            total: table.getPrePaginationRowModel().rows.length,
            current: currentPagination.pageIndex + 1,
            pageSize: currentPagination.pageSize,
            onChange: (page) => {
              if (activePagination) {
                activePagination.onPageChange(page - 1);
              } else {
                table.setPageIndex(page - 1);
              }
            },
            onPageSizeChange: (newPageSize) => {
              if (activePagination && activePagination.onPageSizeChange) {
                activePagination.onPageSizeChange(newPageSize);
              } else {
                table.setPageSize(newPageSize);
              }
            },
            pageSizeOptions: (activePagination == null ? void 0 : activePagination.pageSizeOptions) || [10, 20, 50, 100],
            showRowsInPage: true,
            showCount: true
          }
        ) }),
        footerContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.footerContent, children: footerContent })
      ]
    }
  );
};
export {
  Table
};
//# sourceMappingURL=Table.es.js.map
