import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Table.module.css.es.js";
import IconLoader2 from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.es.js";
import IconSearch from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.es.js";
import IconPackageOff from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconPackageOff.es.js";
import IconCloudOff from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconCloudOff.es.js";
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
        return /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudOff, { size: 48, className: styles.contentCaseIcon });
      case "empty":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(IconPackageOff, { size: 48, className: styles.contentCaseIcon });
      case "notFound":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(IconSearch, { size: 48, className: styles.contentCaseIcon });
      case "loading":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(IconLoader2, { size: 48, className: clsx(styles.contentCaseIcon, styles.spinnerIcon) });
      default:
        return null;
    }
  };
  const displayMessage = message || defaultMessages[type];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.contentCaseContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.contentCaseContent, children: [
    renderIcon(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.contentCaseMessage, style: lineHeightStyle, children: displayMessage })
  ] }) });
};
export {
  TableContentCase
};
//# sourceMappingURL=TableContentCase.es.js.map
