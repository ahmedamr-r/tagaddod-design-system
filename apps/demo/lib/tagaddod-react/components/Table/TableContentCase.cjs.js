"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
const IconLoader2 = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.cjs.js");
const IconSearch = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.cjs.js");
const IconPackageOff = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconPackageOff.cjs.js");
const IconCloudOff = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconCloudOff.cjs.js");
const TableContentCase = ({
  type,
  message
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const defaultMessages = {
    error: isRTL ? "خطأ في استرجاع البيانات. لا تقلق، هذا خطأنا. يرجى المحاولة مرة أخرى لاحقاً" : "Error in data retrieving. Don't worry, it's our fault. Please try again later",
    empty: isRTL ? "لا توجد سجلات للعرض" : "There are no records to display.",
    notFound: isRTL ? "لا توجد نتائج متاحة للعنصر المطلوب" : "No available results for the searched item",
    loading: isRTL ? "جارٍ تحميل البيانات..." : "Loading data..."
  };
  const renderIcon = () => {
    switch (type) {
      case "error":
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconCloudOff, { size: 48, className: Table_module.default.contentCaseIcon });
      case "empty":
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconPackageOff, { size: 48, className: Table_module.default.contentCaseIcon });
      case "notFound":
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconSearch, { size: 48, className: Table_module.default.contentCaseIcon });
      case "loading":
        return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconLoader2, { size: 48, className: clsx.clsx(Table_module.default.contentCaseIcon, Table_module.default.spinnerIcon) });
      default:
        return null;
    }
  };
  const displayMessage = message || defaultMessages[type];
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.contentCaseContainer, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.contentCaseContent, children: [
    renderIcon(),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("p", { className: Table_module.default.contentCaseMessage, style: lineHeightStyle, children: displayMessage })
  ] }) });
};
exports.TableContentCase = TableContentCase;
//# sourceMappingURL=TableContentCase.cjs.js.map
