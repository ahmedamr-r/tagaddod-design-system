"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-switch/dist/index.cjs.js");
const Switch_module = require("./Switch.module.css.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
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
const Switch = React__namespace.forwardRef(({
  pressed,
  defaultPressed,
  size = "md",
  onPressedChange,
  className,
  ...props
}, ref) => {
  const [internalPressed, setInternalPressed] = React__namespace.useState(defaultPressed || false);
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
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    index.Root,
    {
      ref,
      checked: isPressed,
      onCheckedChange: handleCheckedChange,
      className: clsx.clsx(
        Switch_module.default.root,
        size === "sm" ? Switch_module.default.sizeSm : Switch_module.default.sizeMd,
        isPressed && Switch_module.default.pressed,
        props.disabled && Switch_module.default.disabled,
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
        index.Thumb,
        {
          className: clsx.clsx(
            Switch_module.default.thumb,
            size === "sm" ? Switch_module.default.thumbSm : Switch_module.default.thumbMd,
            isPressed && Switch_module.default.thumbPressed
          )
        }
      )
    }
  );
});
Switch.displayName = "Switch";
exports.Switch = Switch;
//# sourceMappingURL=Switch.cjs.js.map
