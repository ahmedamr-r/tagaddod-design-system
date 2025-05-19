import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef } from "react";
import { Checkbox as Checkbox$1, CheckboxIndicator } from "../../node_modules/@radix-ui/react-checkbox/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Checkbox.module.css.es.js";
import IconMinus from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconMinus.es.js";
import IconCheck from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.es.js";
import IconAlertCircle from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.es.js";
const Checkbox = forwardRef(
  ({
    label,
    checked,
    defaultChecked,
    helpText,
    error,
    disabled = false,
    hideLabel = false,
    onCheckedChange,
    id,
    name,
    required = false,
    className
  }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
    const lineHeightStyle = {
      lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: clsx(
          styles.container,
          error && styles.error,
          disabled && styles.disabled,
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.checkboxWrapper, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox$1,
              {
                id: checkboxId,
                ref,
                name,
                checked,
                defaultChecked,
                onCheckedChange,
                disabled,
                required,
                className: clsx(
                  styles.checkbox,
                  error && styles.error
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: styles.indicator, children: checked === "indeterminate" ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconMinus, { size: 14, className: styles.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { size: 14, className: styles.icon }) })
              }
            ),
            label && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: checkboxId,
                className: clsx(
                  styles.label,
                  hideLabel && styles.srOnly
                ),
                style: lineHeightStyle,
                children: [
                  label,
                  required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.required, children: "*" })
                ]
              }
            )
          ] }),
          error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.errorMessage, style: lineHeightStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconAlertCircle, { size: 20, className: styles.errorIcon }),
            error
          ] }) : helpText ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.helpText, style: lineHeightStyle, children: helpText }) : null
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";
export {
  Checkbox
};
//# sourceMappingURL=Checkbox.es.js.map
