"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Checkbox = require("../Checkbox/Checkbox.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
const IconHelp = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconHelp.cjs.js");
const IconChevronUp = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.cjs.js");
const IconChevronDown = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.cjs.js");
const TableHeaderCell = ({
  children,
  isSortable = false,
  sortDirection = false,
  onSort,
  showCheckbox = false,
  isChecked = false,
  onCheckboxChange,
  showHelp = false,
  helpText,
  className = ""
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const renderSortIcon = () => {
    if (!isSortable) return null;
    if (sortDirection === "asc") {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconChevronUp, { className: Table_module.default.sortIcon, size: 16 });
    }
    if (sortDirection === "desc") {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconChevronDown, { className: Table_module.default.sortIcon, size: 16 });
    }
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.sortIconDefault, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconChevronUp, { className: Table_module.default.sortIconInactive, size: 16 }) });
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    "th",
    {
      className: clsx.clsx(
        Table_module.default.tableHeaderCell,
        isSortable && Table_module.default.sortable,
        className
      ),
      onClick: isSortable ? onSort : void 0,
      children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.headerCellContent, children: [
        showCheckbox && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.headerCheckbox, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          Checkbox.Checkbox,
          {
            checked: isChecked,
            onCheckedChange: (checked) => onCheckboxChange == null ? void 0 : onCheckboxChange(checked === true),
            onClick: (e) => e.stopPropagation()
          }
        ) }),
        typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.headerCellLabel, style: lineHeightStyle, children }) : children,
        isSortable && renderSortIcon(),
        showHelp && helpText && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.helpIconWrapper, title: helpText, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconHelp, { className: Table_module.default.helpIcon, size: 16 }) })
      ] })
    }
  );
};
exports.TableHeaderCell = TableHeaderCell;
//# sourceMappingURL=TableHeaderCell.cjs.js.map
