"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const AspectRatio_module = require("./AspectRatio.module.css.cjs.js");
const supportsAspectRatio = () => {
  if (typeof window === "undefined") return true;
  return CSS.supports("aspect-ratio", "1");
};
const AspectRatio = React.forwardRef(({
  ratio = 1,
  className = "",
  children,
  style = {},
  ...props
}, ref) => {
  const containerRef = React.useRef(null);
  const hasAspectRatioSupport = supportsAspectRatio();
  const combinedStyle = hasAspectRatioSupport ? {
    aspectRatio: `${ratio}`,
    ...style
  } : {
    ...style
  };
  React.useEffect(() => {
    if (hasAspectRatioSupport || !containerRef.current) return;
    const paddingTop = `${1 / ratio * 100}%`;
    containerRef.current.style.setProperty("padding-top", paddingTop);
    const child = containerRef.current.firstElementChild;
    if (child) {
      child.style.position = "absolute";
      child.style.top = "0";
      child.style.left = "0";
      child.style.width = "100%";
      child.style.height = "100%";
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty("padding-top");
      }
    };
  }, [ratio, hasAspectRatioSupport]);
  const setRefs = (element) => {
    containerRef.current = element;
    if (ref) {
      if (typeof ref === "function") {
        ref(element);
      } else {
        ref.current = element;
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
    "div",
    {
      ref: setRefs,
      className: clsx.clsx(AspectRatio_module.default.container, !hasAspectRatioSupport && AspectRatio_module.default.fallback, className),
      style: combinedStyle,
      ...props,
      children
    }
  );
});
AspectRatio.displayName = "AspectRatio";
exports.AspectRatio = AspectRatio;
//# sourceMappingURL=AspectRatio.cjs.js.map
