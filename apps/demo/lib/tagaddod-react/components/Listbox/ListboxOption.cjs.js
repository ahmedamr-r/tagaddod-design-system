"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Listbox_module = require("./Listbox.module.css.cjs.js");
const ListboxOption = ({
  label,
  selected = false,
  disabled = false,
  divider = false,
  customContent,
  prefix,
  suffix,
  helpText,
  value,
  onClick,
  className,
  style,
  "aria-selected": ariaSelected,
  role = "option",
  id,
  tabIndex = -1,
  ...props
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(value);
    }
  };
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (onClick) onClick(value);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    "div",
    {
      role,
      id,
      "aria-selected": ariaSelected !== void 0 ? ariaSelected : selected,
      "aria-disabled": disabled,
      tabIndex: disabled ? -1 : tabIndex,
      className: clsx.clsx(
        Listbox_module.default.option,
        selected && Listbox_module.default.selected,
        disabled && Listbox_module.default.disabled,
        divider && Listbox_module.default.divider,
        className
      ),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "data-state": selected ? "selected" : disabled ? "disabled" : void 0,
      style: { ...style },
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Listbox_module.default.optionContent, children: [
        prefix && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Listbox_module.default.prefix, children: prefix }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Listbox_module.default.labelContainer, children: customContent || /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Listbox_module.default.label, style: lineHeightStyle, children: label }),
          helpText && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Listbox_module.default.helpText, style: lineHeightStyle, children: helpText })
        ] }) }),
        suffix && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Listbox_module.default.suffix, children: suffix })
      ] })
    }
  );
};
exports.ListboxOption = ListboxOption;
exports.default = ListboxOption;
//# sourceMappingURL=ListboxOption.cjs.js.map
