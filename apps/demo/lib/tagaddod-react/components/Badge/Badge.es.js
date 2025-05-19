import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Badge.module.css.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: clsx(
        styles.badge,
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        strong && styles.strong,
        className
      ),
      style: lineHeightStyle,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.icon, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.label, style: lineHeightStyle, children })
      ]
    }
  );
};
export {
  Badge,
  badgeSizes,
  badgeTones,
  Badge as default
};
//# sourceMappingURL=Badge.es.js.map
