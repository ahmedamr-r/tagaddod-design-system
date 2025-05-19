import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Listbox.module.css.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role,
      id,
      "aria-selected": ariaSelected !== void 0 ? ariaSelected : selected,
      "aria-disabled": disabled,
      tabIndex: disabled ? -1 : tabIndex,
      className: clsx(
        styles.option,
        selected && styles.selected,
        disabled && styles.disabled,
        divider && styles.divider,
        className
      ),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "data-state": selected ? "selected" : disabled ? "disabled" : void 0,
      style: { ...style },
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.optionContent, children: [
        prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.prefix, children: prefix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.labelContainer, children: customContent || /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.label, style: lineHeightStyle, children: label }),
          helpText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.helpText, style: lineHeightStyle, children: helpText })
        ] }) }),
        suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.suffix, children: suffix })
      ] })
    }
  );
};
export {
  ListboxOption,
  ListboxOption as default
};
//# sourceMappingURL=ListboxOption.es.js.map
