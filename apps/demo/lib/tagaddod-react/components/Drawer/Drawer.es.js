import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef, useState, useEffect } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { Drawer as Drawer$1 } from "../../node_modules/vaul/dist/index.es.js";
import { Button } from "../Button/Button.es.js";
import styles from "./Drawer.module.css.es.js";
import IconArrowRight from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.es.js";
import IconArrowLeft from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.es.js";
import IconX from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.es.js";
const drawerSizes = ["small", "medium", "large"];
const drawerPositions = ["right", "left"];
const Drawer = forwardRef(({
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
  const [isRTL, setIsRTL] = useState(false);
  useEffect(() => {
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
  const drawerClasses = clsx(
    styles.drawer,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`position${adjustedPosition.charAt(0).toUpperCase() + adjustedPosition.slice(1)}`],
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Drawer$1.Root,
    {
      open,
      onOpenChange,
      direction: adjustedPosition,
      shouldScaleBackground: true,
      modal: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Drawer$1.Portal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer$1.Overlay, { className: styles.overlay, style: overlayStyle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Drawer$1.Content,
          {
            ref,
            className: drawerClasses,
            "data-direction": adjustedPosition,
            style: drawerStyle,
            ...props,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.header, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.headerContent, children: [
                  showBackButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "plain",
                      onClick: handleBackClick,
                      "aria-label": isRTL ? "التالي" : "Back",
                      className: styles.backButton,
                      prefixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(BackArrowIcon, { size: 20 })
                    }
                  ),
                  headerPrefix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.headerPrefix, children: headerPrefix }),
                  showTitle && title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.title, style: lineHeightStyle, children: title }),
                  headerSuffix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.headerSuffix, children: headerSuffix })
                ] }),
                showClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "plain",
                    onClick: () => onOpenChange(false),
                    "aria-label": isRTL ? "إغلاق" : "Close",
                    className: styles.closeButton,
                    prefixIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.content, children }),
              showFooter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.footer, children: [
                footerContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.footerContent, children: footerContent }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.actions, children: [
                  secondaryAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: secondaryAction.variant || "secondary",
                      tone: secondaryAction.tone || "default",
                      onClick: secondaryAction.onClick,
                      disabled: secondaryAction.disabled,
                      className: styles.footerButton,
                      children: secondaryAction.label
                    }
                  ),
                  primaryAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: primaryAction.variant || "primary",
                      tone: primaryAction.tone || "default",
                      onClick: primaryAction.onClick,
                      disabled: primaryAction.disabled,
                      loading: primaryAction.loading,
                      className: styles.footerButton,
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
export {
  Drawer,
  drawerPositions,
  drawerSizes
};
//# sourceMappingURL=Drawer.es.js.map
