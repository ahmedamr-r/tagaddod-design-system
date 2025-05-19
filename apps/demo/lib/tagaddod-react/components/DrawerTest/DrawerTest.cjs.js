"use strict";
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const Drawer = require("../Drawer/Drawer.cjs.js");
const Button = require("../Button/Button.cjs.js");
const DrawerTest = () => {
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(Button.Button, { onClick: () => setOpen(true), children: "Open Drawer" }),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      Drawer.Drawer,
      {
        open,
        onOpenChange: setOpen,
        title: "Test Drawer",
        showBackButton: true,
        showClose: true,
        showFooter: true,
        position: "right",
        size: "medium",
        primaryAction: {
          label: "Save",
          onClick: () => {
            console.log("Save clicked");
            setOpen(false);
          },
          variant: "primary",
          tone: "default"
        },
        secondaryAction: {
          label: "Cancel",
          onClick: () => setOpen(false),
          variant: "secondary",
          tone: "default"
        },
        children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("p", { children: "Drawer content goes here" }) })
      }
    )
  ] });
};
module.exports = DrawerTest;
//# sourceMappingURL=DrawerTest.cjs.js.map
