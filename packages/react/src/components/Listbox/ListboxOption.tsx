import React from 'react';
import clsx from 'clsx';
import styles from './Listbox.module.css';

export interface ListboxOptionProps {
  /**
   * The text label for the option
   */
  label: string;
  /**
   * Whether the option is selected
   */
  selected?: boolean;
  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
  /**
   * Whether to show a divider below this option
   */
  divider?: boolean;
  /**
   * Custom content to render instead of or alongside the label
   */
  customContent?: React.ReactNode;
  /**
   * Element to display before the label (icon, checkbox, etc.)
   */
  prefix?: React.ReactNode;
  /**
   * Element to display after the label
   */
  suffix?: React.ReactNode;
  /**
   * Optional help text to display below the label
   */
  helpText?: string;
  /**
   * Unique value for the option
   */
  value: string | number;
  /**
   * Handler for when the option is clicked
   */
  onClick?: (value: string | number) => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional styles to apply
   */
  style?: React.CSSProperties;
  /**
   * ARIA props
   */
  'aria-selected'?: boolean;
  role?: string;
  id?: string;
  tabIndex?: number;
}

export const ListboxOption: React.FC<ListboxOptionProps> = ({
  label,
  selected = false,
  disabled = false,
  divider = false,
  customContent,
  prefix,
  suffix,
  helpText,
  value,
  onClick,
  className,
  style,
  'aria-selected': ariaSelected,
  role = 'option',
  id,
  tabIndex = -1,
  ...props
}) => {
  // Detect RTL direction for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick(value);
    }
  };

  // Check if this is a separator item (has customContent and empty label)
  const isSeparator = customContent && !label.trim();

  return (
    <div
      role={role}
      id={id}
      aria-selected={ariaSelected !== undefined ? ariaSelected : selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      className={clsx(
        styles.option,
        selected && styles.selected,
        disabled && styles.disabled,
        divider && styles.divider,
        isSeparator && styles.separator,
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-state={selected ? 'selected' : disabled ? 'disabled' : undefined}
      style={{ ...style }}
      {...props}
    >
      <div className={styles.optionContent}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        
        <div className={styles.labelContainer}>
          {customContent || (
            <>
              <span className={styles.label} style={lineHeightStyle}>{label}</span>
              {helpText && (
                <span className={styles.helpText} style={lineHeightStyle}>{helpText}</span>
              )}
            </>
          )}
        </div>
        
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    </div>
  );
};

export default ListboxOption;
