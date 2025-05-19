import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.es.js";
import { clsx } from "../../node_modules/clsx/dist/clsx.es.js";
import styles from "./Listbox.module.css.es.js";
import { ListboxOption } from "./ListboxOption.es.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "listbox",
      id,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-multiselectable": multiple,
      className: clsx(
        styles.listbox,
        inPopover && styles.inPopover,
        className
      ),
      tabIndex: -1,
      ...props,
      children: [
        limitedOptions.map((option) => {
          const isSelected = multiple && Array.isArray(selectedValue) ? selectedValue.includes(option.value) : normalizedSelectedValue === option.value;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListboxOption,
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
        options.length > maxVisibleOptions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.moreOptions, children: [
          "+",
          options.length - maxVisibleOptions,
          " more options"
        ] })
      ]
    }
  );
};
export {
  Listbox,
  Listbox as default
};
//# sourceMappingURL=Listbox.es.js.map
