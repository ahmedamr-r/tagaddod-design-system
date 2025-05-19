"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-radio-group/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const RadioButton_module = require("./RadioButton.module.css.cjs.js");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const RadioGroup = React__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    index.Root,
    {
      className: clsx.clsx(RadioButton_module.default.RadioGroup, className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = index.Root.displayName;
const RadioButtonItem = React__namespace.forwardRef(({
  className,
  label,
  helpText,
  showHelpText = true,
  hideLabel = false,
  ...props
}, ref) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: RadioButton_module.default.RadioButtonContainer, children: [
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: RadioButton_module.default.RadioButtonWrapper, children: [
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        index.Item,
        {
          ref,
          className: clsx.clsx(
            RadioButton_module.default.RadioButtonItem,
            props.disabled && RadioButton_module.default.disabled,
            className
          ),
          ...props,
          children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Indicator, { className: RadioButton_module.default.RadioButtonIndicator })
        }
      ),
      label && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: props.id,
          className: clsx.clsx(
            RadioButton_module.default.Label,
            props.disabled && RadioButton_module.default.disabled,
            hideLabel && RadioButton_module.default.srOnly
          ),
          style: lineHeightStyle,
          children: label
        }
      )
    ] }),
    helpText && showHelpText && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: RadioButton_module.default.HelpText, style: lineHeightStyle, children: helpText })
  ] });
});
RadioButtonItem.displayName = "RadioButtonItem";
exports.RadioButtonItem = RadioButtonItem;
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioButton.cjs.js.map
