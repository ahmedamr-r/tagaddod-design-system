import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import * as React from "react";
import { Root, Thumb } from "../../node_modules/@radix-ui/react-switch/dist/index.es.js";
import styles from "./Switch.module.css.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
const Switch = React.forwardRef(({
  pressed,
  defaultPressed,
  size = "md",
  onPressedChange,
  className,
  ...props
}, ref) => {
  const [internalPressed, setInternalPressed] = React.useState(defaultPressed || false);
  const isPressed = pressed !== void 0 ? pressed : internalPressed;
  const handleCheckedChange = (checked) => {
    if (pressed === void 0) {
      setInternalPressed(checked);
    }
    if (onPressedChange) {
      onPressedChange(checked);
    }
  };
  document.dir === "rtl" || document.documentElement.dir === "rtl";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      ref,
      checked: isPressed,
      onCheckedChange: handleCheckedChange,
      className: clsx(
        styles.root,
        size === "sm" ? styles.sizeSm : styles.sizeMd,
        isPressed && styles.pressed,
        props.disabled && styles.disabled,
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          className: clsx(
            styles.thumb,
            size === "sm" ? styles.thumbSm : styles.thumbMd,
            isPressed && styles.thumbPressed
          )
        }
      )
    }
  );
});
Switch.displayName = "Switch";
export {
  Switch
};
//# sourceMappingURL=Switch.es.js.map
