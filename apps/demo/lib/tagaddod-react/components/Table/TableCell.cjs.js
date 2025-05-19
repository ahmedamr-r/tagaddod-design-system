"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
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
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    "td",
    {
      className: clsx.clsx(
        Table_module.default.tableCell,
        isStriped && Table_module.default.striped,
        isGridCell && Table_module.default.gridCell,
        className
      ),
      onClick,
      children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.cellText, style: lineHeightStyle, children }) : children
    }
  );
};
exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.cjs.js.map
