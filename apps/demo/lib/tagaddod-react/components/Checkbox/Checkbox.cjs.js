"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-checkbox/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Checkbox_module = require("./Checkbox.module.css.cjs.js");
const IconMinus = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconMinus.cjs.js");
const IconCheck = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.cjs.js");
const IconAlertCircle = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.cjs.js");
const Checkbox = React.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
      "div",
      {
        className: clsx.clsx(
          Checkbox_module.default.container,
          error && Checkbox_module.default.error,
          disabled && Checkbox_module.default.disabled,
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Checkbox_module.default.checkboxWrapper, children: [
            /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
              index.Checkbox,
              {
                id: checkboxId,
                ref,
                name,
                checked,
                defaultChecked,
                onCheckedChange,
                disabled,
                required,
                className: clsx.clsx(
                  Checkbox_module.default.checkbox,
                  error && Checkbox_module.default.error
                ),
                children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.CheckboxIndicator, { className: Checkbox_module.default.indicator, children: checked === "indeterminate" ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconMinus, { size: 14, className: Checkbox_module.default.icon }) : /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconCheck, { size: 14, className: Checkbox_module.default.icon }) })
              }
            ),
            label && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: checkboxId,
                className: clsx.clsx(
                  Checkbox_module.default.label,
                  hideLabel && Checkbox_module.default.srOnly
                ),
                style: lineHeightStyle,
                children: [
                  label,
                  required && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Checkbox_module.default.required, children: "*" })
                ]
              }
            )
          ] }),
          error ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Checkbox_module.default.errorMessage, style: lineHeightStyle, children: [
            /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconAlertCircle, { size: 20, className: Checkbox_module.default.errorIcon }),
            error
          ] }) : helpText ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Checkbox_module.default.helpText, style: lineHeightStyle, children: helpText }) : null
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.cjs.js.map
