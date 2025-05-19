"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Badge_module = require("./Badge.module.css.cjs.js");
const badgeTones = ["default", "info", "success", "warning", "critical", "magic"];
const badgeSizes = ["medium", "large", "xlarge"];
const Badge = ({
  children,
  tone = "default",
  size = "medium",
  strong = false,
  icon,
  className,
  ...props
}) => {
  const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
  const lineHeightStyle = {
    lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    "span",
    {
      className: clsx.clsx(
        Badge_module.default.badge,
        Badge_module.default[`tone-${tone}`],
        Badge_module.default[`size-${size}`],
        strong && Badge_module.default.strong,
        className
      ),
      style: lineHeightStyle,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Badge_module.default.icon, children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: Badge_module.default.label, style: lineHeightStyle, children })
      ]
    }
  );
};
exports.Badge = Badge;
exports.badgeSizes = badgeSizes;
exports.badgeTones = badgeTones;
exports.default = Badge;
//# sourceMappingURL=Badge.cjs.js.map
