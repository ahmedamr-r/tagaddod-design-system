"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Button = require("../Button/Button.cjs.js");
const Badge = require("../Badge/Badge.cjs.js");
const TextInput = require("../TextInput/TextInput.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
const IconSearch = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.cjs.js");
const IconAdjustmentsHorizontal = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustmentsHorizontal.cjs.js");
const IconFileExport = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconFileExport.cjs.js");
const TableHeader = ({
  title,
  badge,
  showSearch = true,
  showFilters = true,
  showExport = false,
  searchQuery = "",
  onSearchChange,
  onFilterClick,
  onExport,
  className = "",
  isFilterBarVisible = false
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const handleFilterClick = () => {
    onFilterClick == null ? void 0 : onFilterClick();
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: clsx.clsx(Table_module.default.tableHeader, className), children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.tableHeaderTitle, children: [
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.titleContainer, children: title && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("h3", { className: Table_module.default.title, style: lineHeightStyle, children: [
      title,
      badge !== void 0 && badge !== null && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(Badge.Badge, { tone: "info", className: Table_module.default.titleBadge, children: badge })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.tableHeaderActions, children: [
      showSearch && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.searchWrapper, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        TextInput.TextInput,
        {
          size: "medium",
          placeholder: isRTL ? "ابحث باسم العنصر أو معرّفه..." : "Search by item name or ID...",
          value: searchQuery,
          onChange: (e) => onSearchChange == null ? void 0 : onSearchChange(e.target.value),
          prefix: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconSearch, { size: 16 }),
          hideLabel: true,
          fullWidth: true
        }
      ) }),
      showFilters && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        Button.Button,
        {
          variant: "tertiary",
          tone: isFilterBarVisible ? "magic" : "neutral",
          onClick: handleFilterClick,
          prefixIcon: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconAdjustmentsHorizontal, { size: 16 }),
          size: "medium",
          children: isRTL ? "تصفية" : "Filters"
        }
      ),
      showExport && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        Button.Button,
        {
          variant: "tertiary",
          tone: "neutral",
          onClick: onExport,
          prefixIcon: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconFileExport, { size: 16 }),
          size: "medium",
          children: isRTL ? "تصدير CSV" : "Export CSV"
        }
      )
    ] })
  ] }) });
};
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.cjs.js.map
