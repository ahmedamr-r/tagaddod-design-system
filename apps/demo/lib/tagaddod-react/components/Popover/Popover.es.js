import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { Root as Root2, Trigger, Arrow as Arrow2, Close, Portal, Content as Content2 } from "../../node_modules/@radix-ui/react-popover/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Popover.module.css.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root2, { open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content2,
      {
        className: clsx(
          styles.content,
          type === "with-scrollbar" && styles.withScrollbar,
          className
        ),
        sideOffset: 5,
        side,
        align,
        style: animationStyles,
        collisionPadding: 10,
        ...contentProps,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.innerContent, style: lineHeightStyle, children: content }),
          showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow2, { className: styles.arrow, style: animationStyles, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
};
const PopoverRoot = Root2;
const PopoverTrigger = Trigger;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      className: clsx(
        styles.content,
        type === "with-scrollbar" && styles.withScrollbar,
        className
      ),
      collisionPadding: 10,
      style: {
        ...style,
        animationDuration: (style == null ? void 0 : style.animationDuration) || "200ms"
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.innerContent, style: lineHeightStyle, children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Arrow2,
          {
            className: styles.arrow,
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
const PopoverArrow = Arrow2;
const PopoverClose = Close;
export {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  Popover as default
};
//# sourceMappingURL=Popover.es.js.map
