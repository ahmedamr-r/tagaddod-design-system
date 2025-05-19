import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Button.module.css.es.js";
import IconLoader2 from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconLoader2.es.js";
const buttonVariants = ["primary", "secondary", "tertiary", "plain"];
const buttonTones = ["default", "critical", "success", "neutral", "magic"];
const buttonSizes = ["large", "medium", "micro"];
const Button = forwardRef(({
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
  const iconOnly = isIconOnly ? styles.iconOnly : "";
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const buttonClasses = clsx(
    styles.button,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`tone${tone.charAt(0).toUpperCase() + tone.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    iconOnly,
    className
  );
  const renderContent = () => {
    if (loading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles.loadingWrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconLoader2, { className: styles.spinner }),
        !isIconOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.loadingText, style: lineHeightStyle, children: isRTL ? "جارٍ التحميل..." : "Loading..." })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      prefixIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.prefixIcon, children: prefixIcon }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.label, style: lineHeightStyle, children }),
      suffixIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.suffixIcon, children: suffixIcon })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
export {
  Button,
  buttonSizes,
  buttonTones,
  buttonVariants
};
//# sourceMappingURL=Button.es.js.map
