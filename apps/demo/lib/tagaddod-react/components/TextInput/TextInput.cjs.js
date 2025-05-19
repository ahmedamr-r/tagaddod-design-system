"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const React = require("react");
const index = require("../../node_modules/@radix-ui/react-form/dist/index.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const TextInput_module = require("./TextInput.module.css.cjs.js");
const IconExclamationCircle = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.cjs.js");
const IconX = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconX.cjs.js");
const IconEyeOff = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconEyeOff.cjs.js");
const IconEye = require("../../node_modules/@tabler/icons-react/dist/esm/icons/IconEye.cjs.js");
const TextInput = React.forwardRef(
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
    const [inputValue, setInputValue] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const uniqueId = id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    const isRTL = document.dir === "rtl" || document.documentElement.dir === "rtl";
    const lineHeightStyle = {
      lineHeight: isRTL ? "var(--t-line-height-arabic, 1.2)" : "var(--t-line-height-english, 1.5)"
    };
    React.useEffect(() => {
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
    const passwordSuffix = type === "password" ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: TextInput_module.default.iconButton,
        onClick: togglePasswordVisibility,
        "aria-label": passwordVisible ? "Hide password" : "Show password",
        tabIndex: -1,
        children: passwordVisible ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconEyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconEye, { size: 18 })
      }
    ) : null;
    const clearButton = clearable && inputValue ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: TextInput_module.default.iconButton,
        onClick: handleClear,
        "aria-label": "Clear input",
        tabIndex: -1,
        children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconX, { size: 18 })
      }
    ) : null;
    const combinedSuffix = /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(jsxRuntime.jsxRuntimeExports.Fragment, { children: [
      suffix,
      passwordSuffix,
      clearButton
    ] });
    const hasError = !!errorMessage;
    const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
    return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
      index.Root,
      {
        className: clsx.clsx(
          TextInput_module.default.container,
          hasError && TextInput_module.default.error,
          TextInput_module.default[sizeClass],
          fullWidth && TextInput_module.default.fullWidth,
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Field, { name: name || "text-field", children: [
          label && !hideLabel && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: TextInput_module.default.labelContainer, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(index.Label, { className: TextInput_module.default.label, style: lineHeightStyle, children: [
            label,
            required && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: TextInput_module.default.required, children: "*" }),
            optional && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("span", { className: TextInput_module.default.optional, children: "(Optional)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
            "div",
            {
              className: clsx.clsx(
                TextInput_module.default.inputWrapper,
                disabled && TextInput_module.default.disabled,
                readOnly && TextInput_module.default.readOnly
              ),
              children: [
                prefix && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: TextInput_module.default.prefix, children: prefix }),
                /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(index.Control, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref,
                    id: uniqueId,
                    className: clsx.clsx(
                      TextInput_module.default.input,
                      prefix && TextInput_module.default.withPrefix,
                      (suffix || clearButton || passwordSuffix) && TextInput_module.default.withSuffix
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
                (suffix || clearButton || passwordSuffix) && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { className: TextInput_module.default.suffix, children: combinedSuffix })
              ]
            }
          ),
          hasError ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { id: `${uniqueId}-error`, className: TextInput_module.default.errorMessage, style: lineHeightStyle, children: [
            /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(IconExclamationCircle, { size: 16, className: TextInput_module.default.errorIcon }),
            errorMessage
          ] }) : helpText ? /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx("div", { id: `${uniqueId}-helptext`, className: TextInput_module.default.helpText, style: lineHeightStyle, children: helpText }) : null
        ] })
      }
    );
  }
);
TextInput.displayName = "TextInput";
const textInputSizes = ["micro", "medium", "large"];
exports.TextInput = TextInput;
exports.textInputSizes = textInputSizes;
//# sourceMappingURL=TextInput.cjs.js.map
