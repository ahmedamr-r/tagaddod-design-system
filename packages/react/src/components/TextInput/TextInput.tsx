import React, { forwardRef, useState, useEffect } from 'react';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import { IconX, IconExclamationCircle, IconEye, IconEyeOff } from '@tabler/icons-react';
import styles from './TextInput.module.css';

export type TextInputSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

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
  
  /** 
   * Callback when Enter key is pressed
   * @param event - The keyboard event
   * @param value - Current input value
   */
  onEnterPress?: (event: React.KeyboardEvent<HTMLInputElement>, value: string) => void;
  
  /** 
   * Whether this input is used for search purposes
   * When true, Enter key will blur the input after triggering onEnterPress
   */
  isSearchInput?: boolean;
  
  /** 
   * Whether to automatically focus next focusable element on Enter key press
   * When true, pressing Enter will move focus to the next input in tab order
   */
  autoFocusNext?: boolean;
  
  /** 
   * Whether to prevent default form submission on Enter key press
   * @default false
   */
  preventFormSubmit?: boolean;
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
    onEnterPress,
    isSearchInput = false,
    autoFocusNext = false,
    preventFormSubmit = false,
    onKeyDown,
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
    
    // Helper function to find next focusable element
    const findNextFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
      const focusableElements = document.querySelectorAll(
        'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      const elements = Array.from(focusableElements) as HTMLElement[];
      const currentIndex = elements.indexOf(currentElement);
      
      // Return next element or null if current is last
      return elements[currentIndex + 1] || null;
    };
    
    // Handle Enter key press
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const currentValue = value !== undefined ? String(value) : inputValue;
        
        // Prevent default form submission if specified
        if (preventFormSubmit) {
          event.preventDefault();
        }
        
        // Call the onEnterPress callback if provided
        if (onEnterPress) {
          onEnterPress(event, currentValue);
        }
        
        // Handle search input behavior
        if (isSearchInput) {
          // Blur the input to remove focus from search field
          event.currentTarget.blur();
        }
        
        // Handle auto focus next behavior
        if (autoFocusNext && !isSearchInput) {
          event.preventDefault(); // Prevent form submission when navigating
          const nextElement = findNextFocusableElement(event.currentTarget);
          if (nextElement) {
            nextElement.focus();
          }
        }
      }
      
      // Call any additional onKeyDown handler passed via props
      if (onKeyDown) {
        onKeyDown(event);
      }
    };
    
    // Determine the actual input type for password fields
    const actualType = type === 'password' && passwordVisible ? 'text' : type;
    
    // Get appropriate icon size based on the size prop
    const getIconSize = (size: TextInputSize): number => {
      switch (size) {
        case 'xlarge': return 24;
        case 'large': return 20;
        case 'medium': return 16;
        case 'small': return 16;
        case 'xsmall': return 16;
        default: return 16;
      }
    };
    
    const iconSize = getIconSize(size);
    
    // For password fields, provide visibility toggle
    const passwordSuffix = type === 'password' ? (
      <button 
        type="button" 
        className={styles.iconButton}
        onClick={togglePasswordVisibility}
        aria-label={passwordVisible ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {passwordVisible ? <IconEyeOff size={iconSize} /> : <IconEye size={iconSize} />}
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
        <IconX size={iconSize} />
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
                {optional && <span className={styles.optional} style={lineHeightStyle}>(Optional)</span>}
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
                style={lineHeightStyle}
                name={name}
                value={value === undefined ? inputValue : value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                type={actualType}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                aria-invalid={hasError}
                aria-describedby={`${uniqueId}-helptext ${uniqueId}-error`}
                {...props}
              />
            </Form.Control>
            
            {(suffix || clearButton || passwordSuffix) && (
              <div className={styles.suffix}>{combinedSuffix}</div>
            )}
          </div>
          
          {hasError && (
            <div id={`${uniqueId}-error`} className={styles.errorMessage} style={lineHeightStyle}>
              <IconExclamationCircle size={iconSize} className={styles.errorIcon} />
              {errorMessage}
            </div>
          )}
          {helpText && (
            <div id={`${uniqueId}-helptext`} className={styles.helpText} style={lineHeightStyle}>
              {helpText}
            </div>
          )}
        </Form.Field>
      </Form.Root>
    );
  }
);

TextInput.displayName = 'TextInput';

// Export size arrays for documentation
export const textInputSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'] as const;
