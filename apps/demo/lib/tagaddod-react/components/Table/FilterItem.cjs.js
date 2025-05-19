"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Popover = require("../Popover/Popover.cjs.js");
const Table_module = require("./Table.module.css.cjs.js");
const IconChevronDown = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.cjs.js");
const IconX = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.cjs.js");
const FilterItem = ({
  name,
  label,
  value,
  options,
  onChange,
  removable = true,
  onRemove
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
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
  const filterTrigger = /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.filterItem, children: [
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Table_module.default.filterItemContent, children: [
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.filterLabel, style: lineHeightStyle, children: label }),
      value !== void 0 && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.filterSeparator, children: "|" }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Table_module.default.filterValue, style: lineHeightStyle, children: selectedLabel })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconChevronDown, { size: 16, className: Table_module.default.filterChevron })
    ] }),
    removable && onRemove && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      "button",
      {
        className: Table_module.default.filterRemoveButton,
        onClick: handleRemove,
        "aria-label": "Remove filter",
        children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconX, { size: 12 })
      }
    )
  ] });
  const filterContent = /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Table_module.default.filterDropdown, children: options.map((option) => {
    var _a;
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      "div",
      {
        className: clsx.clsx(
          Table_module.default.filterOption,
          value === option.value && Table_module.default.filterOptionSelected
        ),
        onClick: () => {
          onChange(name, option.value);
          setIsOpen(false);
        },
        children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { style: lineHeightStyle, children: option.label })
      },
      (_a = option.value) == null ? void 0 : _a.toString()
    );
  }) });
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    Popover.Popover,
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
exports.FilterItem = FilterItem;
//# sourceMappingURL=FilterItem.cjs.js.map
