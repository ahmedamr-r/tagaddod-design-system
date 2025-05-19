"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Button_module = require("./Button.module.css.cjs.js");
const IconLoader2 = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.cjs.js");
const buttonVariants = ["primary", "secondary", "tertiary", "plain"];
const buttonTones = ["default", "critical", "success", "neutral", "magic"];
const buttonSizes = ["large", "medium", "micro"];
const Button = React.forwardRef(({
  children,
  variant = "primary",
  tone = "default",
  size = "medium",
  loading = false,
  disabled = false,
  fullWidth = false,
  prefixIcon,
  suffixIcon,
  className = "",
  ...props
}, ref) => {
  const isIconOnly = !children && (prefixIcon || suffixIcon);
  const iconOnly = isIconOnly ? Button_module.default.iconOnly : "";
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const buttonClasses = clsx.clsx(
    Button_module.default.button,
    Button_module.default[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    Button_module.default[`tone${tone.charAt(0).toUpperCase() + tone.slice(1)}`],
    Button_module.default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    fullWidth && Button_module.default.fullWidth,
    loading && Button_module.default.loading,
    iconOnly,
    className
  );
  const renderContent = () => {
    if (loading) {
      return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("span", { className: Button_module.default.loadingWrapper, children: [
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconLoader2, { className: Button_module.default.spinner }),
        !isIconOnly && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Button_module.default.loadingText, style: lineHeightStyle, children: isRTL ? "جارٍ التحميل..." : "Loading..." })
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
      prefixIcon && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Button_module.default.prefixIcon, children: prefixIcon }),
      children && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Button_module.default.label, style: lineHeightStyle, children }),
      suffixIcon && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Button_module.default.suffixIcon, children: suffixIcon })
    ] });
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      className: buttonClasses,
      disabled: disabled || loading,
      type: props.type || "button",
      ...props,
      children: renderContent()
    }
  );
});
Button.displayName = "Button";
exports.Button = Button;
exports.buttonSizes = buttonSizes;
exports.buttonTones = buttonTones;
exports.buttonVariants = buttonVariants;
//# sourceMappingURL=Button.cjs.js.map
