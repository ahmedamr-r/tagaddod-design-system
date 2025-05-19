"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-tabs/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Tabs_module = require("./Tabs.module.css.cjs.js");
const Tabs = React.forwardRef(({
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
  const childrenArray = React.Children.toArray(children);
  const tabsList = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === TabsList
  );
  const tabsContent = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === TabsContent
  );
  const listProps = {};
  if (ariaLabel) {
    listProps["aria-label"] = ariaLabel;
  }
  if (ariaLabelledby) {
    listProps["aria-labelledby"] = ariaLabelledby;
  }
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    index.Root,
    {
      ref,
      className: clsx.clsx(
        Tabs_module.default.tabsRoot,
        Tabs_module.default[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        fitted && Tabs_module.default.fitted,
        Tabs_module.default[`count${count}`],
        className
      ),
      dir,
      orientation,
      ...props,
      children: [
        tabsList && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
          index.List,
          {
            className: clsx.clsx(
              Tabs_module.default.tabsList,
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
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(jsxRuntime.jsxRuntimeExports.Fragment, { children });
};
TabsList.displayName = "TabsList";
const TabsTrigger = React.forwardRef(({
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
  const descriptionId = description ? `tabs-desc-${React.useId()}` : void 0;
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    index.Trigger,
    {
      ref,
      className: clsx.clsx(
        Tabs_module.default.tabsTrigger,
        className
      ),
      "aria-describedby": descriptionId,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Tabs_module.default.tabsIcon, "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Tabs_module.default.tabsLabel, style: lineHeightStyle, children }),
        badge && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Tabs_module.default.tabsBadge, "aria-label": `${badge} items`, children: badge }),
        description && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { id: descriptionId, style: { display: "none" }, children: description })
      ]
    }
  );
});
TabsTrigger.displayName = "TabsTrigger";
const TabsContent = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    index.Content,
    {
      ref,
      className: clsx.clsx(
        Tabs_module.default.tabsContent,
        className
      ),
      tabIndex: 0,
      ...props,
      children
    }
  );
});
TabsContent.displayName = "TabsContent";
const TabsRoot = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Root, { ref, className, ...props, children });
});
TabsRoot.displayName = "TabsRoot";
const tabsVariants = ["primary", "secondary"];
const tabsCounts = [2, 3, 4, 5, 6];
exports.Content = TabsContent;
exports.List = TabsList;
exports.Root = TabsRoot;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsRoot = TabsRoot;
exports.TabsTrigger = TabsTrigger;
exports.Trigger = TabsTrigger;
exports.tabsCounts = tabsCounts;
exports.tabsVariants = tabsVariants;
//# sourceMappingURL=Tabs.cjs.js.map
