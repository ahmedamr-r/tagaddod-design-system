"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const index = require("../../node_modules/@tanstack/react-table/build/lib/index.cjs.js");
const Tabs = require("../Tabs/Tabs.cjs.js");
const FilterItem = require("./FilterItem.cjs.js");
const TableHeader = require("./TableHeader.cjs.js");
const TableHeaderCell = require("./TableHeaderCell.cjs.js");
const TableCell = require("./TableCell.cjs.js");
const TableContentCase = require("./TableContentCase.cjs.js");
const Pagination = require("../Pagination/Pagination.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
const index$1 = require("../../node_modules/@tanstack/table-core/build/lib/index.cjs.js");
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
  const [sorting, setSorting] = React.useState(defaultSorting);
  const [columnVisibility, setColumnVisibility] = React.useState(defaultColumnVisibility);
  const [globalFilter, setGlobalFilter] = React.useState(searchQuery);
  const [isFilterBarVisible, setIsFilterBarVisible] = React.useState(defaultShowFilterBar);
  const [internalPagination, setInternalPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10
  });
  const usingEnhancedTabs = tableTabs.length > 0;
  const initialActiveTab = React.useMemo(() => {
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
  const [activeTab, setActiveTab] = React.useState(initialActiveTab);
  const activeTabConfig = React.useMemo(() => {
    if (!usingEnhancedTabs) return null;
    return tableTabs.find((tab) => tab.id === activeTab) || null;
  }, [activeTab, tableTabs, usingEnhancedTabs]);
  const activeData = React.useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.data)) {
      return activeTabConfig.data;
    }
    return data;
  }, [data, activeTabConfig, usingEnhancedTabs]);
  const activeColumns = React.useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.columns)) {
      return activeTabConfig.columns;
    }
    return columns;
  }, [columns, activeTabConfig, usingEnhancedTabs]);
  const activeTitle = React.useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.title)) {
      return activeTabConfig.title;
    }
    return title;
  }, [title, activeTabConfig, usingEnhancedTabs]);
  const activePagination = React.useMemo(() => {
    if (usingEnhancedTabs && (activeTabConfig == null ? void 0 : activeTabConfig.pagination)) {
      return activeTabConfig.pagination;
    }
    return pagination;
  }, [pagination, activeTabConfig, usingEnhancedTabs]);
  React.useEffect(() => {
    setGlobalFilter(searchQuery);
  }, [searchQuery]);
  const tabsForDisplay = React.useMemo(() => {
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
  const table = index.useReactTable({
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
    getCoreRowModel: index$1.getCoreRowModel(),
    getSortedRowModel: index$1.getSortedRowModel(),
    getFilteredRowModel: index$1.getFilteredRowModel(),
    // Always use pagination model for consistent behavior
    getPaginationRowModel: index$1.getPaginationRowModel(),
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
  const effectiveBadge = React.useMemo(() => {
    if (!showTotalBadge) return void 0;
    if (badge !== void 0) return badge;
    return table.getPrePaginationRowModel().rows.length;
  }, [badge, table, showTotalBadge]);
  const hasActiveFilters = Object.keys(activeFilters).length > 0;
  const currentPagination = activePagination || internalPagination;
  const renderContent = () => {
    if (state === "error") {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(TableContentCase.TableContentCase, { type: "error", message: errorMessage });
    }
    if (state === "loading") {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(TableContentCase.TableContentCase, { type: "loading" });
    }
    if (state === "notFound") {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(TableContentCase.TableContentCase, { type: "notFound", message: notFoundMessage });
    }
    if (state === "empty" || activeData.length === 0) {
      if (emptyStateNode) {
        return emptyStateNode;
      }
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(TableContentCase.TableContentCase, { type: "empty", message: emptyMessage });
    }
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("table", { className: Table_module.default.table, children: [
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("thead", { className: Table_module.default.tableHead, children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("tr", { children: headerGroup.headers.map((header) => {
        var _a;
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          TableHeaderCell.TableHeaderCell,
          {
            isSortable: header.column.getCanSort(),
            sortDirection: header.column.getIsSorted(),
            onSort: header.column.getToggleSortingHandler(),
            className: (_a = header.column.columnDef.meta) == null ? void 0 : _a.headerClassName,
            children: header.isPlaceholder ? null : index.flexRender(
              header.column.columnDef.header,
              header.getContext()
            )
          },
          header.id
        );
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("tbody", { children: table.getRowModel().rows.map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          "tr",
          {
            className: clsx.clsx(
              Table_module.default.tableRow,
              onRowClick && Table_module.default.clickableRow
            ),
            onClick: () => onRowClick == null ? void 0 : onRowClick(row),
            children: row.getVisibleCells().map((cell) => {
              var _a;
              return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                TableCell.TableCell,
                {
                  isStriped: striped && !isEvenRow,
                  isGridCell: gridCells,
                  className: (_a = cell.column.columnDef.meta) == null ? void 0 : _a.cellClassName,
                  onClick: () => onCellClick == null ? void 0 : onCellClick(cell),
                  children: index.flexRender(
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
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    "div",
    {
      className: clsx.clsx(
        Table_module.default.tableContainer,
        striped && Table_module.default.striped,
        gridCells && Table_module.default.gridCells,
        className
      ),
      children: [
        showTabs && tabsForDisplay.length > 0 && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.tabsContainer, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          Tabs.Tabs,
          {
            defaultValue: activeTab,
            onValueChange: handleTabChange,
            value: activeTab,
            children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(Tabs.TabsList, { className: Table_module.default.tabsList, children: tabsForDisplay.map((tab) => /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
              Tabs.TabsTrigger,
              {
                value: tab.id,
                badge: tab.badge,
                className: Table_module.default.tabTrigger,
                children: tab.label
              },
              tab.id
            )) })
          }
        ) }),
        showHeader && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          TableHeader.TableHeader,
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
        isFilterBarVisible && showFilters && Object.keys(filterOptions).length > 0 && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.filterBar, children: [
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.filterBarLabel, style: lineHeightStyle, children: isRTL ? "تصفية:" : "Filters:" }),
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.filterItems, children: Object.keys(filterOptions).map((filterKey) => /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
            FilterItem.FilterItem,
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
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.tableContent, children: renderContent() }),
        showPagination && state === "normal" && activeData.length > 0 && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.paginationContainer, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          Pagination.Pagination,
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
        footerContent && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.footerContent, children: footerContent })
      ]
    }
  );
};
exports.Table = Table;
//# sourceMappingURL=Table.cjs.js.map
