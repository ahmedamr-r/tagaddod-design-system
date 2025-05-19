import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Table.module.css.es.js";
const TableCell = ({
  children,
  isStriped = false,
  isGridCell = false,
  className = "",
  onClick
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      className: clsx(
        styles.tableCell,
        isStriped && styles.striped,
        isGridCell && styles.gridCell,
        className
      ),
      onClick,
      children: typeof children === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.cellText, style: lineHeightStyle, children }) : children
    }
  );
};
export {
  TableCell
};
//# sourceMappingURL=TableCell.es.js.map
