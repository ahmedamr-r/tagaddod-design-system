"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-avatar/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Avatar_module = require("./Avatar.module.css.cjs.js");
const IconUser = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconUser.cjs.js");
const avatarTypes = ["image", "initial", "icon"];
const avatarSizes = ["sm", "md", "lg", "xl"];
const Avatar = React.forwardRef(({
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
  const avatarClasses = clsx.clsx(
    Avatar_module.default.avatar,
    Avatar_module.default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    className
  );
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Root, { className: avatarClasses, ref, children: [
    type === "image" && src && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      index.Image,
      {
        className: Avatar_module.default.image,
        src,
        alt: alt || "User avatar",
        onLoadingStatusChange: () => {
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      index.Fallback,
      {
        className: Avatar_module.default.fallback,
        delayMs: type === "image" ? delayMs : 0,
        children: type === "initial" && displayInitial ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Avatar_module.default.initial, style: lineHeightStyle, children: displayInitial }) : /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconUser, { className: Avatar_module.default.icon })
      }
    )
  ] });
});
Avatar.displayName = "Avatar";
exports.Avatar = Avatar;
exports.avatarSizes = avatarSizes;
exports.avatarTypes = avatarTypes;
//# sourceMappingURL=Avatar.cjs.js.map
