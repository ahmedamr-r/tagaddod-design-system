import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { Button } from "../Button/Button.es.js";
import { Badge } from "../Badge/Badge.es.js";
import { TextInput } from "../TextInput/TextInput.es.js";
import styles from "./Table.module.css.es.js";
import IconSearch from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.es.js";
import IconAdjustmentsHorizontal from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconAdjustmentsHorizontal.es.js";
import IconFileExport from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconFileExport.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx(styles.tableHeader, className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.tableHeaderTitle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.titleContainer, children: title && /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: styles.title, style: lineHeightStyle, children: [
      title,
      badge !== void 0 && badge !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { tone: "info", className: styles.titleBadge, children: badge })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.tableHeaderActions, children: [
      showSearch && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.searchWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          size: "medium",
          placeholder: isRTL ? "ابحث باسم العنصر أو معرّفه..." : "Search by item name or ID...",
          value: searchQuery,
          onChange: (e) => onSearchChange == null ? void 0 : onSearchChange(e.target.value),
          prefix: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSearch, { size: 16 }),
          hideLabel: true,
          fullWidth: true
        }
      ) }),
      showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "tertiary",
          tone: isFilterBarVisible ? "magic" : "neutral",
          onClick: handleFilterClick,
          prefixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconAdjustmentsHorizontal, { size: 16 }),
          size: "medium",
          children: isRTL ? "تصفية" : "Filters"
        }
      ),
      showExport && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "tertiary",
          tone: "neutral",
          onClick: onExport,
          prefixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileExport, { size: 16 }),
          size: "medium",
          children: isRTL ? "تصدير CSV" : "Export CSV"
        }
      )
    ] })
  ] }) });
};
export {
  TableHeader
};
//# sourceMappingURL=TableHeader.es.js.map
