import React from 'react';
import clsx from 'clsx';
import styles from './Listbox.module.css';
import { ListboxOption, ListboxOptionProps } from './ListboxOption';

export interface ListboxProps {
  /**
   * Array of options to display in the listbox
   */
  options: Array<Omit<ListboxOptionProps, 'onClick' | 'role' | 'tabIndex' | 'aria-selected'>>;
  /**
   * Currently selected option value(s)
   */
  selectedValue?: string | number | Array<string | number>;
  /**
   * Maximum number of options to display (prevents showing over 5)
   */
  maxVisibleOptions?: number;
  /**
   * Whether multiple options can be selected
   */
  multiple?: boolean;
  /**
   * Handler for when an option is selected
   */
  onSelect?: (value: string | number) => void;
  /**
   * Handler for when multiple options are selected (when multiple=true)
   */
  onMultiSelect?: (values: Array<string | number>) => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * ID attribute for the listbox
   */
  id?: string;
  /**
   * ARIA label for the listbox
   */
  'aria-label'?: string;
  /**
   * ID of the element that labels this listbox
   */
  'aria-labelledby'?: string;
  /**
   * Pass true if this is rendered inside a Popover
   */
  inPopover?: boolean;
  /**
   * Custom vertical padding (top and bottom) for listbox items in pixels
   */
  itemPaddingVertical?: number;
  /**
   * Custom horizontal padding (left and right) for listbox items in pixels
   */
  itemPaddingHorizontal?: number;
}

export const Listbox: React.FC<ListboxProps> = ({
  options,
  selectedValue,
  maxVisibleOptions = 5,
  multiple = false,
  onSelect,
  onMultiSelect,
  className,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  inPopover = true,
  itemPaddingVertical,
  itemPaddingHorizontal,
  ...props
}) => {
  // Detect RTL direction for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.5)' : 'var(--t-line-height-english, 1.5)'
  };

  // If selectedValue is an array but multiple is false, take the first value
  const normalizedSelectedValue = !multiple && Array.isArray(selectedValue) 
    ? selectedValue[0] 
    : selectedValue;

  // Limit the number of visible options
  const limitedOptions = options.slice(0, maxVisibleOptions);

  // Handle option selection
  const handleOptionSelect = (value: string | number) => {
    if (multiple) {
      if (onMultiSelect && Array.isArray(selectedValue)) {
        const newValues = selectedValue.includes(value)
          ? selectedValue.filter(v => v !== value)
          : [...selectedValue, value];
        onMultiSelect(newValues);
      }
    } else {
      if (onSelect) {
        onSelect(value);
      }
    }
  };

  return (
    <div
      role="listbox"
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-multiselectable={multiple}
      className={clsx(
        styles.listbox,
        inPopover && styles.inPopover,
        className
      )}
      tabIndex={-1}
      style={{
        ...(itemPaddingVertical !== undefined && {
          ['--item-padding-vertical' as any]: `${itemPaddingVertical}px`
        }),
        ...(itemPaddingHorizontal !== undefined && {
          ['--item-padding-horizontal' as any]: `${itemPaddingHorizontal}px`
        })
      } as React.CSSProperties}
      {...props}
    >
      {limitedOptions.map((option) => {
        const isSelected = multiple && Array.isArray(selectedValue)
          ? selectedValue.includes(option.value)
          : normalizedSelectedValue === option.value;
          
        return (
          <ListboxOption
            key={option.value}
            {...option}
            selected={isSelected}
            onClick={handleOptionSelect}
            role="option"
            aria-selected={isSelected}
            tabIndex={-1}
          />
        );
      })}
      {options.length > maxVisibleOptions && (
        <div className={styles.moreOptions} style={lineHeightStyle}>
          +{options.length - maxVisibleOptions} more options
        </div>
      )}
    </div>
  );
};

export default Listbox;
