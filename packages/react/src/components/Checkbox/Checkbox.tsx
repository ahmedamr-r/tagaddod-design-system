import { forwardRef } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { IconCheck, IconMinus, IconAlertCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  /**
   * The label displayed next to the checkbox
   */
  label?: string;
  
  /**
   * The state of the checkbox
   * @default false
   */
  checked?: boolean | 'indeterminate';
  
  /**
   * Default state of the checkbox
   * @default false
   */
  defaultChecked?: boolean | 'indeterminate';
  
  /**
   * Help text displayed below the checkbox
   */
  helpText?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Hide the label but keep it accessible for screen readers
   * @default false
   */
  hideLabel?: boolean;
  
  /**
   * Callback when the state changes
   */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  
  /**
   * ID for the checkbox
   */
  id?: string;
  
  /**
   * Name for the checkbox
   */
  name?: string;
  
  /**
   * Required state
   * @default false
   */
  required?: boolean;
  
  /**
   * Additional class names
   */
  className?: string;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({
    label,
    checked,
    defaultChecked,
    helpText,
    error,
    disabled = false,
    hideLabel = false,
    onCheckedChange,
    id,
    name,
    required = false,
    className,
  }, ref) => {
    // Generate a unique ID if none provided
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    // Detect RTL for line height adjustments
    const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
    
    // Create lineHeightStyle object for proper text rendering
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };
    
    return (
      <div 
        className={clsx(
          styles.container, 
          error && styles.error,
          disabled && styles.disabled,
          className
        )}
      >
        <div className={styles.checkboxWrapper}>
          <RadixCheckbox.Root
            id={checkboxId}
            ref={ref}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={required}
            className={clsx(
              styles.checkbox,
              error && styles.error
            )}
          >
            <RadixCheckbox.Indicator className={styles.indicator}>
              {checked === 'indeterminate' ? (
                <IconMinus size={14} className={styles.icon} />
              ) : (
                <IconCheck size={14} className={styles.icon} />
              )}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
          
          {label && (
            <label
              htmlFor={checkboxId}
              className={clsx(
                styles.label,
                hideLabel && styles.srOnly
              )}
              style={lineHeightStyle}
            >
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
        </div>
        
        {error ? (
          <div className={styles.errorMessage} style={lineHeightStyle}>
            <IconAlertCircle size={20} className={styles.errorIcon} />
            {error}
          </div>
        ) : helpText ? (
          <div className={styles.helpText} style={lineHeightStyle}>
            {helpText}
          </div>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
