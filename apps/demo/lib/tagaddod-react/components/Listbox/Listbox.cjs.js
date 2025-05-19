"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("../../_virtual/jsx-runtime.cjs.js");
const clsx = require("../../node_modules/clsx/dist/clsx.cjs.js");
const Listbox_module = require("./Listbox.module.css.cjs.js");
const ListboxOption = require("./ListboxOption.cjs.js");
const Listbox = ({
  options,
  selectedValue,
  maxVisibleOptions = 5,
  multiple = false,
  onSelect,
  onMultiSelect,
  className,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  inPopover = true,
  ...props
}) => {
  const normalizedSelectedValue = !multiple && Array.isArray(selectedValue) ? selectedValue[0] : selectedValue;
  const limitedOptions = options.slice(0, maxVisibleOptions);
  const handleOptionSelect = (value) => {
    if (multiple) {
      if (onMultiSelect && Array.isArray(selectedValue)) {
        const newValues = selectedValue.includes(value) ? selectedValue.filter((v) => v !== value) : [...selectedValue, value];
        onMultiSelect(newValues);
      }
    } else {
      if (onSelect) {
        onSelect(value);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs(
    "div",
    {
      role: "listbox",
      id,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-multiselectable": multiple,
      className: clsx.clsx(
        Listbox_module.default.listbox,
        inPopover && Listbox_module.default.inPopover,
        className
      ),
      tabIndex: -1,
      ...props,
      children: [
        limitedOptions.map((option) => {
          const isSelected = multiple && Array.isArray(selectedValue) ? selectedValue.includes(option.value) : normalizedSelectedValue === option.value;
          return /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsx(
            ListboxOption.ListboxOption,
            {
              ...option,
              selected: isSelected,
              onClick: handleOptionSelect,
              role: "option",
              "aria-selected": isSelected,
              tabIndex: -1
            },
            option.value
          );
        }),
        options.length > maxVisibleOptions && /* @__PURE__ */ jsxRuntime.jsxRuntimeExports.jsxs("div", { className: Listbox_module.default.moreOptions, children: [
          "+",
          options.length - maxVisibleOptions,
          " more options"
        ] })
      ]
    }
  );
};
exports.Listbox = Listbox;
exports.default = Listbox;
//# sourceMappingURL=Listbox.cjs.js.map
