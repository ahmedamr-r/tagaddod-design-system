import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef } from "react";
import { Root, Image, Fallback } from "../../node_modules/@radix-ui/react-avatar/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Avatar.module.css.es.js";
import IconUser from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconUser.es.js";
const avatarTypes = ["image", "initial", "icon"];
const avatarSizes = ["sm", "md", "lg", "xl"];
const Avatar = forwardRef(({
  type = "icon",
  size = "md",
  src,
  alt,
  initial,
  className,
  delayMs = 600
}, ref) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  const displayInitial = initial ? initial.trim().charAt(0).toUpperCase() : "";
  const avatarClasses = clsx(
    styles.avatar,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { className: avatarClasses, ref, children: [
    type === "image" && src && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        className: styles.image,
        src,
        alt: alt || "User avatar",
        onLoadingStatusChange: () => {
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Fallback,
      {
        className: styles.fallback,
        delayMs: type === "image" ? delayMs : 0,
        children: type === "initial" && displayInitial ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.initial, style: lineHeightStyle, children: displayInitial }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconUser, { className: styles.icon })
      }
    )
  ] });
});
Avatar.displayName = "Avatar";
export {
  Avatar,
  avatarSizes,
  avatarTypes
};
//# sourceMappingURL=Avatar.es.js.map
