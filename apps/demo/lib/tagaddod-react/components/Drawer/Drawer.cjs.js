"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const index = require("../../node_modules/vaul/dist/index.cjs.js");
const Button = require("../Button/Button.cjs.js");
const Drawer_module = require("./Drawer.module.css.cjs.js");
const IconArrowRight = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.cjs.js");
const IconArrowLeft = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.cjs.js");
const IconX = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.cjs.js");
const drawerSizes = ["small", "medium", "large"];
const drawerPositions = ["right", "left"];
const Drawer = React.forwardRef(({
  open,
  onOpenChange,
  title,
  headerPrefix,
  headerSuffix,
  showBackButton = false,
  showTitle = true,
  showClose = true,
  showFooter = false,
  footerContent,
  primaryAction,
  secondaryAction,
  onBackClick,
  size = "medium",
  position = "right",
  className = "",
  overlayOpacity = 0.7,
  blurBackground = true,
  useSurfaceBackground = true,
  // Default to using the surface background color
  fullHeight = true,
  // Default to full height
  children,
  ...props
}, ref) => {
  const [isRTL, setIsRTL] = React.useState(false);
  React.useEffect(() => {
    const dir = document.dir || document.documentElement.dir;
    setIsRTL(dir === "rtl");
  }, []);
  const adjustedPosition = isRTL ? position === "right" ? "left" : "right" : position;
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      onOpenChange(false);
    }
  };
  const BackArrowIcon = isRTL ? IconArrowRight : IconArrowLeft;
  const drawerClasses = clsx.clsx(
    Drawer_module.default.drawer,
    Drawer_module.default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    Drawer_module.default[`position${adjustedPosition.charAt(0).toUpperCase() + adjustedPosition.slice(1)}`],
    className
  );
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    backdropFilter: blurBackground ? "blur(2px)" : "none"
  };
  const drawerStyle = {
    backgroundColor: useSurfaceBackground ? "var(--t-color-surface-primary)" : void 0,
    height: fullHeight ? "100vh" : void 0,
    maxHeight: fullHeight ? "100vh" : void 0
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    index.Drawer.Root,
    {
      open,
      onOpenChange,
      direction: adjustedPosition,
      shouldScaleBackground: true,
      modal: true,
      children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Drawer.Portal, { children: [
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Drawer.Overlay, { className: Drawer_module.default.overlay, style: overlayStyle }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
          index.Drawer.Content,
          {
            ref,
            className: drawerClasses,
            "data-direction": adjustedPosition,
            style: drawerStyle,
            ...props,
            children: [
              /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Drawer_module.default.header, children: [
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Drawer_module.default.headerContent, children: [
                  showBackButton && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                    Button.Button,
                    {
                      variant: "plain",
                      onClick: handleBackClick,
                      "aria-label": isRTL ? "التالي" : "Back",
                      className: Drawer_module.default.backButton,
                      prefixIcon: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(BackArrowIcon, { size: 20 })
                    }
                  ),
                  headerPrefix && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Drawer_module.default.headerPrefix, children: headerPrefix }),
                  showTitle && title && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("h2", { className: Drawer_module.default.title, style: lineHeightStyle, children: title }),
                  headerSuffix && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Drawer_module.default.headerSuffix, children: headerSuffix })
                ] }),
                showClose && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  Button.Button,
                  {
                    variant: "plain",
                    onClick: () => onOpenChange(false),
                    "aria-label": isRTL ? "إغلاق" : "Close",
                    className: Drawer_module.default.closeButton,
                    prefixIcon: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconX, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Drawer_module.default.content, children }),
              showFooter && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Drawer_module.default.footer, children: [
                footerContent && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Drawer_module.default.footerContent, children: footerContent }),
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Drawer_module.default.actions, children: [
                  secondaryAction && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                    Button.Button,
                    {
                      variant: secondaryAction.variant || "secondary",
                      tone: secondaryAction.tone || "default",
                      onClick: secondaryAction.onClick,
                      disabled: secondaryAction.disabled,
                      className: Drawer_module.default.footerButton,
                      children: secondaryAction.label
                    }
                  ),
                  primaryAction && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                    Button.Button,
                    {
                      variant: primaryAction.variant || "primary",
                      tone: primaryAction.tone || "default",
                      onClick: primaryAction.onClick,
                      disabled: primaryAction.disabled,
                      loading: primaryAction.loading,
                      className: Drawer_module.default.footerButton,
                      children: primaryAction.label
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ] })
    }
  );
});
Drawer.displayName = "Drawer";
exports.Drawer = Drawer;
exports.drawerPositions = drawerPositions;
exports.drawerSizes = drawerSizes;
//# sourceMappingURL=Drawer.cjs.js.map
