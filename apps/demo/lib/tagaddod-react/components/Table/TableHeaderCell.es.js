import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { Checkbox } from "../Checkbox/Checkbox.es.js";
import styles from "./Table.module.css.es.js";
import IconHelp from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconHelp.es.js";
import IconChevronUp from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.es.js";
import IconChevronDown from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.es.js";
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronUp, { className: styles.sortIcon, size: 16 });
    }
    if (sortDirection === "desc") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, { className: styles.sortIcon, size: 16 });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.sortIconDefault, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronUp, { className: styles.sortIconInactive, size: 16 }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      className: clsx(
        styles.tableHeaderCell,
        isSortable && styles.sortable,
        className
      ),
      onClick: isSortable ? onSort : void 0,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.headerCellContent, children: [
        showCheckbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.headerCheckbox, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: isChecked,
            onCheckedChange: (checked) => onCheckboxChange == null ? void 0 : onCheckboxChange(checked === true),
            onClick: (e) => e.stopPropagation()
          }
        ) }),
        typeof children === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.headerCellLabel, style: lineHeightStyle, children }) : children,
        isSortable && renderSortIcon(),
        showHelp && helpText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.helpIconWrapper, title: helpText, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconHelp, { className: styles.helpIcon, size: 16 }) })
      ] })
    }
  );
};
export {
  TableHeaderCell
};
//# sourceMappingURL=TableHeaderCell.es.js.map
