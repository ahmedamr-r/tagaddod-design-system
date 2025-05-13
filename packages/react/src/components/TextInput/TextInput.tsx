import React, { forwardRef, useState, useEffect } from 'react';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import { IconX, IconExclamationCircle, IconEye, IconEyeOff } from '@tabler/icons-react';
import styles from './TextInput.module.css';

export type TextInputSize = 'micro' | 'medium' | 'large';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Text label displayed above the input */
  label?: string;
  
  /** Help text displayed below the input */
  helpText?: string;
  
  /** Error message displayed below the input */
  errorMessage?: string;
  
  /** Size of the input field */
  size?: TextInputSize;
  
  /** Whether the input should take full width of its container */
  fullWidth?: boolean;
  
  /** Whether to hide the label visually (still accessible to screen readers) */
  hideLabel?: boolean;
  
  /** Mark the field as optional, displaying "(Optional)" text next to label */
  optional?: boolean;
  
  /** Content to display before the input text (icon or text) */
  prefix?: React.ReactNode;
  
  /** Content to display after the input text (icon or text) */
  suffix?: React.ReactNode;
  
  /** Whether to show a clear button when the input has a value */
  clearable?: boolean;
  
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  
  /** Whether the field is read-only */
  readOnly?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
    size = 'medium',
    fullWidth = false,
    hideLabel = false,
    optional = false,
    prefix,
    suffix,
    clearable = false,
    onClear,
    type = 'text',
    onChange,
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const uniqueId = id || `text-input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Detect RTL for line height adjustments
    const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
    
    // Create lineHeightStyle object for proper text rendering
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };
    
    // Initialize input value from props
    useEffect(() => {
      if (value !== undefined) {
        setInputValue(String(value));
      }
    }, [value]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };
    
    const handleClear = () => {
      setInputValue('');
      
      // Create synthetic change event
      const syntheticEvent = {
        target: { value: '', name },
        currentTarget: { value: '', name },
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange?.(syntheticEvent);
      onClear?.();
    };
    
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    
    // Determine the actual input type for password fields
    const actualType = type === 'password' && passwordVisible ? 'text' : type;
    
    // For password fields, provide visibility toggle
    const passwordSuffix = type === 'password' ? (
      <button 
        type="button" 
        className={styles.iconButton}
        onClick={togglePasswordVisibility}
        aria-label={passwordVisible ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {passwordVisible ? <IconEyeOff size={18} /> : <IconEye size={18} />}
      </button>
    ) : null;
    
    // Prepare clear button if enabled and has value
    const clearButton = clearable && inputValue ? (
      <button 
        type="button" 
        className={styles.iconButton}
        onClick={handleClear}
        aria-label="Clear input"
        tabIndex={-1}
      >
        <IconX size={18} />
      </button>
    ) : null;
    
    // Combine suffix with clear button and password toggle
    const combinedSuffix = (
      <>
        {suffix}
        {passwordSuffix}
        {clearButton}
      </>
    );
    
    const hasError = !!errorMessage;
    const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
    
    return (
      <Form.Root 
        className={clsx(
          styles.container,
          hasError && styles.error,
          styles[sizeClass],
          fullWidth && styles.fullWidth,
          className
        )}
      >
        <Form.Field name={name || 'text-field'}>
          {label && !hideLabel && (
            <div className={styles.labelContainer}>
              <Form.Label className={styles.label} style={lineHeightStyle}>
                {label}
                {required && <span className={styles.required}>*</span>}
                {optional && <span className={styles.optional}>(Optional)</span>}
              </Form.Label>
            </div>
          )}
          
          <div 
            className={clsx(
              styles.inputWrapper,
              disabled && styles.disabled,
              readOnly && styles.readOnly
            )}
          >
            {prefix && <div className={styles.prefix}>{prefix}</div>}
            
            <Form.Control asChild>
              <input
                ref={ref}
                id={uniqueId}
                className={clsx(
                  styles.input,
                  prefix && styles.withPrefix,
                  (suffix || clearButton || passwordSuffix) && styles.withSuffix
                )}
                name={name}
                value={value === undefined ? inputValue : value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                type={actualType}
                onChange={handleChange}
                aria-invalid={hasError}
                aria-describedby={`${uniqueId}-helptext ${uniqueId}-error`}
                {...props}
              />
            </Form.Control>
            
            {(suffix || clearButton || passwordSuffix) && (
              <div className={styles.suffix}>{combinedSuffix}</div>
            )}
          </div>
          
          {hasError ? (
            <div id={`${uniqueId}-error`} className={styles.errorMessage} style={lineHeightStyle}>
              <IconExclamationCircle size={16} className={styles.errorIcon} />
              {errorMessage}
            </div>
          ) : helpText ? (
            <div id={`${uniqueId}-helptext`} className={styles.helpText} style={lineHeightStyle}>
              {helpText}
            </div>
          ) : null}
        </Form.Field>
      </Form.Root>
    );
  }
);

TextInput.displayName = 'TextInput';

// Export size arrays for documentation
export const textInputSizes = ['micro', 'medium', 'large'] as const;
