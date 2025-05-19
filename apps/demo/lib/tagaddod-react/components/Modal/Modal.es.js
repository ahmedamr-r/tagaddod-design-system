import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { Root, Trigger, Portal, Overlay, Content, Title, Close } from "../../node_modules/@radix-ui/react-dialog/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import { Button } from "../Button/Button.es.js";
import styles from "./Modal.module.css.es.js";
import IconX from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { ...props, children: [
    trigger && /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Portal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { className: styles.overlay }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Content,
        {
          className: clsx(styles.content, {
            [styles.fullscreen]: size === "fullscreen",
            [styles.rtl]: rtl
          }),
          dir: rtl ? "rtl" : "ltr",
          children: [
            showTitle && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.header, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { className: styles.title, children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { className: styles.closeButton, "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 18 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.body, children }),
            showFooter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx(styles.footer, styles[`footerStyle${footerStyle.charAt(0).toUpperCase() + footerStyle.slice(1)}`]), children: [
              footerStyle === "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: onCancel,
                    children: cancelLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "primary",
                    onClick: onConfirm,
                    children: confirmLabel
                  }
                )
              ] }),
              footerStyle === "style1" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.footerSwapArea, children: "Swap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.footerButtonGroup, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "secondary",
                      onClick: onCancel,
                      children: cancelLabel
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "primary",
                      onClick: onConfirm,
                      children: confirmLabel
                    }
                  )
                ] })
              ] }),
              footerStyle === "style2" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.footerButtonGroup, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: onCancel,
                    children: cancelLabel
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
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
export {
  Modal,
  Modal as default
};
//# sourceMappingURL=Modal.es.js.map
