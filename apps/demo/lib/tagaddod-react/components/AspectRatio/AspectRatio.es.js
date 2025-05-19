import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef, useRef, useEffect } from "react";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./AspectRatio.module.css.es.js";
const supportsAspectRatio = () => {
  if (typeof window === "undefined") return true;
  return CSS.supports("aspect-ratio", "1");
};
const AspectRatio = forwardRef(({
  ratio = 1,
  className = "",
  children,
  style = {},
  ...props
}, ref) => {
  const containerRef = useRef(null);
  const hasAspectRatioSupport = supportsAspectRatio();
  const combinedStyle = hasAspectRatioSupport ? {
    aspectRatio: `${ratio}`,
    ...style
  } : {
    ...style
  };
  useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: setRefs,
      className: clsx(styles.container, !hasAspectRatioSupport && styles.fallback, className),
      style: combinedStyle,
      ...props,
      children
    }
  );
});
AspectRatio.displayName = "AspectRatio";
export {
  AspectRatio
};
//# sourceMappingURL=AspectRatio.es.js.map
