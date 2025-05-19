import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { useState } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { Popover } from "../Popover/Popover.es.js";
import styles from "./Table.module.css.es.js";
import IconChevronDown from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.es.js";
import IconX from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.es.js";
const FilterItem = ({
  name,
  label,
  value,
  options,
  onChange,
  removable = true,
  onRemove
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const selectedOption = options.find((option) => option.value === value);
  const selectedLabel = (selectedOption == null ? void 0 : selectedOption.label) || "";
  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove == null ? void 0 : onRemove(name);
  };
  const filterTrigger = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.filterItem, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.filterItemContent, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.filterLabel, style: lineHeightStyle, children: label }),
      value !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.filterSeparator, children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.filterValue, style: lineHeightStyle, children: selectedLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, { size: 16, className: styles.filterChevron })
    ] }),
    removable && onRemove && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: styles.filterRemoveButton,
        onClick: handleRemove,
        "aria-label": "Remove filter",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 12 })
      }
    )
  ] });
  const filterContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.filterDropdown, children: options.map((option) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: clsx(
          styles.filterOption,
          value === option.value && styles.filterOptionSelected
        ),
        onClick: () => {
          onChange(name, option.value);
          setIsOpen(false);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: lineHeightStyle, children: option.label })
      },
      (_a = option.value) == null ? void 0 : _a.toString()
    );
  }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Popover,
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      side: "bottom",
      align: "start",
      content: filterContent,
      children: filterTrigger
    }
  );
};
export {
  FilterItem
};
//# sourceMappingURL=FilterItem.es.js.map
