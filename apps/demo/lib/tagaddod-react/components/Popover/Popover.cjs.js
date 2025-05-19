"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const index = require("../../node_modules/@radix-ui/react-popover/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Popover_module = require("./Popover.module.css.cjs.js");
const Popover = ({
  children,
  content,
  type = "default",
  className,
  open,
  onOpenChange,
  side = "bottom",
  align = "center",
  showArrow = true,
  contentProps,
  animationDuration = 200
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const animationStyles = {
    animationDuration: `${animationDuration}ms`
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Root, { open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
      index.Content,
      {
        className: clsx.clsx(
          Popover_module.default.content,
          type === "with-scrollbar" && Popover_module.default.withScrollbar,
          className
        ),
        sideOffset: 5,
        side,
        align,
        style: animationStyles,
        collisionPadding: 10,
        ...contentProps,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Popover_module.default.innerContent, style: lineHeightStyle, children: content }),
          showArrow && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Arrow, { className: Popover_module.default.arrow, style: animationStyles, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
};
const PopoverRoot = index.Root;
const PopoverTrigger = index.Trigger;
const PopoverContent = ({
  children,
  className,
  type = "default",
  style,
  ...props
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    index.Content,
    {
      className: clsx.clsx(
        Popover_module.default.content,
        type === "with-scrollbar" && Popover_module.default.withScrollbar,
        className
      ),
      collisionPadding: 10,
      style: {
        ...style,
        animationDuration: (style == null ? void 0 : style.animationDuration) || "200ms"
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Popover_module.default.innerContent, style: lineHeightStyle, children }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          index.Arrow,
          {
            className: Popover_module.default.arrow,
            width: 10,
            height: 5,
            style: {
              animationDuration: (style == null ? void 0 : style.animationDuration) || "200ms"
            }
          }
        )
      ]
    }
  );
};
const PopoverArrow = index.Arrow;
const PopoverClose = index.Close;
exports.Popover = Popover;
exports.PopoverArrow = PopoverArrow;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverRoot = PopoverRoot;
exports.PopoverTrigger = PopoverTrigger;
exports.default = Popover;
//# sourceMappingURL=Popover.cjs.js.map
