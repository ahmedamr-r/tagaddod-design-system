import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import * as React from "react";
import { Root as Root2, Item as Item2, Indicator } from "../../node_modules/@radix-ui/react-radio-group/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./RadioButton.module.css.es.js";
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      className: clsx(styles.RadioGroup, className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = Root2.displayName;
const RadioButtonItem = React.forwardRef(({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.RadioButtonContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.RadioButtonWrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Item2,
        {
          ref,
          className: clsx(
            styles.RadioButtonItem,
            props.disabled && styles.disabled,
            className
          ),
          ...props,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { className: styles.RadioButtonIndicator })
        }
      ),
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: props.id,
          className: clsx(
            styles.Label,
            props.disabled && styles.disabled,
            hideLabel && styles.srOnly
          ),
          style: lineHeightStyle,
          children: label
        }
      )
    ] }),
    helpText && showHelpText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.HelpText, style: lineHeightStyle, children: helpText })
  ] });
});
RadioButtonItem.displayName = "RadioButtonItem";
export {
  RadioButtonItem,
  RadioGroup
};
//# sourceMappingURL=RadioButton.es.js.map
