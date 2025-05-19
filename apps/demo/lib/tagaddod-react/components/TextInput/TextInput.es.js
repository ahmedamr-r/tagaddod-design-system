import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { forwardRef, useState, useEffect } from "react";
import { Root, Field, Label, Control } from "../../node_modules/@radix-ui/react-form/dist/index.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./TextInput.module.css.es.js";
import IconExclamationCircle from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.es.js";
import IconX from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.es.js";
import IconEyeOff from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconEyeOff.es.js";
import IconEye from "../../node_modules/@tabler/icons-react/dist/esm/icons/IconEye.es.js";
const TextInput = forwardRef(
  ({
    label,
    name,
    id,
    value,
    defaultValue,
    placeholder,
    helpText,
    errorMessage,
    required,
    disabled,
    readOnly,
    className,
    size = "medium",
    fullWidth = false,
    hideLabel = false,
    optional = false,
    prefix,
    suffix,
    clearable = false,
    onClear,
    type = "text",
    onChange,
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const uniqueId = id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
    const lineHeightStyle = {
      lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
    };
    useEffect(() => {
      if (value !== void 0) {
        setInputValue(String(value));
      }
    }, [value]);
    const handleChange = (e) => {
      setInputValue(e.target.value);
      onChange == null ? void 0 : onChange(e);
    };
    const handleClear = () => {
      setInputValue("");
      const syntheticEvent = {
        target: { value: "", name },
        currentTarget: { value: "", name }
      };
      onChange == null ? void 0 : onChange(syntheticEvent);
      onClear == null ? void 0 : onClear();
    };
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    const actualType = type === "password" && passwordVisible ? "text" : type;
    const passwordSuffix = type === "password" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: styles.iconButton,
        onClick: togglePasswordVisibility,
        "aria-label": passwordVisible ? "Hide password" : "Show password",
        tabIndex: -1,
        children: passwordVisible ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconEyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconEye, { size: 18 })
      }
    ) : null;
    const clearButton = clearable && inputValue ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: styles.iconButton,
        onClick: handleClear,
        "aria-label": "Clear input",
        tabIndex: -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 18 })
      }
    ) : null;
    const combinedSuffix = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      suffix,
      passwordSuffix,
      clearButton
    ] });
    const hasError = !!errorMessage;
    const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        className: clsx(
          styles.container,
          hasError && styles.error,
          styles[sizeClass],
          fullWidth && styles.fullWidth,
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { name: name || "text-field", children: [
          label && !hideLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.labelContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: styles.label, style: lineHeightStyle, children: [
            label,
            required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.required, children: "*" }),
            optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.optional, children: "(Optional)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: clsx(
                styles.inputWrapper,
                disabled && styles.disabled,
                readOnly && styles.readOnly
              ),
              children: [
                prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.prefix, children: prefix }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Control, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref,
                    id: uniqueId,
                    className: clsx(
                      styles.input,
                      prefix && styles.withPrefix,
                      (suffix || clearButton || passwordSuffix) && styles.withSuffix
                    ),
                    name,
                    value: value === void 0 ? inputValue : value,
                    placeholder,
                    required,
                    disabled,
                    readOnly,
                    type: actualType,
                    onChange: handleChange,
                    "aria-invalid": hasError,
                    "aria-describedby": `${uniqueId}-helptext ${uniqueId}-error`,
                    ...props
                  }
                ) }),
                (suffix || clearButton || passwordSuffix) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.suffix, children: combinedSuffix })
              ]
            }
          ),
          hasError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: `${uniqueId}-error`, className: styles.errorMessage, style: lineHeightStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconExclamationCircle, { size: 16, className: styles.errorIcon }),
            errorMessage
          ] }) : helpText ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: `${uniqueId}-helptext`, className: styles.helpText, style: lineHeightStyle, children: helpText }) : null
        ] })
      }
    );
  }
);
TextInput.displayName = "TextInput";
const textInputSizes = ["micro", "medium", "large"];
export {
  TextInput,
  textInputSizes
};
//# sourceMappingURL=TextInput.es.js.map
