import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import React__default from "react";
import { Drawer } from "../Drawer/Drawer.es.js";
import { Button } from "../Button/Button.es.js";
const DrawerTest = () => {
  const [open, setOpen] = React__default.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setOpen(true), children: "Open Drawer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Drawer,
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Drawer content goes here" }) })
      }
    )
  ] });
};
export {
  DrawerTest as default
};
//# sourceMappingURL=DrawerTest.es.js.map
