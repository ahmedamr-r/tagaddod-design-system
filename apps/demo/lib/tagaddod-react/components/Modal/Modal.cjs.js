"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const index = require("../../node_modules/@radix-ui/react-dialog/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Button = require("../Button/Button.cjs.js");
const Modal_module = require("./Modal.module.css.cjs.js");
const IconX = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.cjs.js");
const Modal = ({
  children,
  trigger,
  title = "Title",
  showTitle = true,
  showFooter = true,
  footerStyle = "default",
  cancelLabel = "Cancel",
  confirmLabel = "Label",
  size = "default",
  rtl = false,
  onCancel,
  onConfirm,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Root, { ...props, children: [
    trigger && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Trigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Portal, { children: [
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Overlay, { className: Modal_module.default.overlay }),
      /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
        index.Content,
        {
          className: clsx.clsx(Modal_module.default.content, {
            [Modal_module.default.fullscreen]: size === "fullscreen",
            [Modal_module.default.rtl]: rtl
          }),
          dir: rtl ? "rtl" : "ltr",
          children: [
            showTitle && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Modal_module.default.header, children: [
              /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Title, { className: Modal_module.default.title, children: title }),
              /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Close, { className: Modal_module.default.closeButton, "aria-label": "Close", children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconX, { size: 18 }) })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Modal_module.default.body, children }),
            showFooter && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: clsx.clsx(Modal_module.default.footer, Modal_module.default[`footerStyle${footerStyle.charAt(0).toUpperCase() + footerStyle.slice(1)}`]), children: [
              footerStyle === "default" && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  Button.Button,
                  {
                    variant: "secondary",
                    onClick: onCancel,
                    children: cancelLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  Button.Button,
                  {
                    variant: "primary",
                    onClick: onConfirm,
                    children: confirmLabel
                  }
                )
              ] }),
              footerStyle === "style1" && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: Modal_module.default.footerSwapArea, children: "Swap" }),
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Modal_module.default.footerButtonGroup, children: [
                  /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                    Button.Button,
                    {
                      variant: "secondary",
                      onClick: onCancel,
                      children: cancelLabel
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                    Button.Button,
                    {
                      variant: "primary",
                      onClick: onConfirm,
                      children: confirmLabel
                    }
                  )
                ] })
              ] }),
              footerStyle === "style2" && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Modal_module.default.footerButtonGroup, children: [
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  Button.Button,
                  {
                    variant: "secondary",
                    onClick: onCancel,
                    children: cancelLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  Button.Button,
                  {
                    variant: "primary",
                    onClick: onConfirm,
                    children: confirmLabel
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
};
exports.Modal = Modal;
exports.default = Modal;
//# sourceMappingURL=Modal.cjs.js.map
