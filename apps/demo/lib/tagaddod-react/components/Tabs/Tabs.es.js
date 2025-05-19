import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import React__default, { forwardRef } from "react";
import { Root as Root2, List, Trigger, Content } from "../../node_modules/@radix-ui/react-tabs/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Tabs.module.css.es.js";
const Tabs = forwardRef(({
  variant = "primary",
  fitted = false,
  count = 2,
  dir,
  orientation = "horizontal",
  children,
  className,
  listClassName,
  ariaLabel,
  ariaLabelledby,
  ...props
}, ref) => {
  const isRTL = dir === "rtl" || document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const childrenArray = React__default.Children.toArray(children);
  const tabsList = childrenArray.find(
    (child) => React__default.isValidElement(child) && child.type === TabsList
  );
  const tabsContent = childrenArray.filter(
    (child) => React__default.isValidElement(child) && child.type === TabsContent
  );
  const listProps = {};
  if (ariaLabel) {
    listProps["aria-label"] = ariaLabel;
  }
  if (ariaLabelledby) {
    listProps["aria-labelledby"] = ariaLabelledby;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root2,
    {
      ref,
      className: clsx(
        styles.tabsRoot,
        styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        fitted && styles.fitted,
        styles[`count${count}`],
        className
      ),
      dir,
      orientation,
      ...props,
      children: [
        tabsList && /* @__PURE__ */ jsxRuntimeExports.jsx(
          List,
          {
            className: clsx(
              styles.tabsList,
              listClassName
            ),
            style: lineHeightStyle,
            ...listProps,
            children: tabsList
          }
        ),
        tabsContent
      ]
    }
  );
});
Tabs.displayName = "Tabs";
const TabsList = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
TabsList.displayName = "TabsList";
const TabsTrigger = forwardRef(({
  className,
  badge,
  icon,
  children,
  description,
  ...props
}, ref) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const descriptionId = description ? `tabs-desc-${React__default.useId()}` : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    {
      ref,
      className: clsx(
        styles.tabsTrigger,
        className
      ),
      "aria-describedby": descriptionId,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.tabsIcon, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.tabsLabel, style: lineHeightStyle, children }),
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.tabsBadge, "aria-label": `${badge} items`, children: badge }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: descriptionId, style: { display: "none" }, children: description })
      ]
    }
  );
});
TabsTrigger.displayName = "TabsTrigger";
const TabsContent = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      ref,
      className: clsx(
        styles.tabsContent,
        className
      ),
      tabIndex: 0,
      ...props,
      children
    }
  );
});
TabsContent.displayName = "TabsContent";
const TabsRoot = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { ref, className, ...props, children });
});
TabsRoot.displayName = "TabsRoot";
const tabsVariants = ["primary", "secondary"];
const tabsCounts = [2, 3, 4, 5, 6];
export {
  TabsContent as Content,
  TabsList as List,
  TabsRoot as Root,
  Tabs,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  TabsTrigger as Trigger,
  tabsCounts,
  tabsVariants
};
//# sourceMappingURL=Tabs.es.js.map
