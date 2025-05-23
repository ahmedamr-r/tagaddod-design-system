import React, { forwardRef, useState, useMemo } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import { IconChevronDown, IconChevronUp, IconCheck, IconExclamationCircle, IconSearch } from '@tabler/icons-react';
import { TextInput } from '../TextInput/TextInput';
import styles from './Select.module.css';

export type SelectSize = 'micro' | 'medium' | 'large';
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Text label for the select */
  label?: string;
  
  /** Help text displayed below the select */
  helpText?: string;
  
  /** Error message displayed below the select */
  errorMessage?: string;
  
  /** Size of the select field */
  size?: SelectSize;
  
  /** Whether the select should take full width of its container */
  fullWidth?: boolean;
  
  /** Whether to hide the label visually (still accessible to screen readers) */
  hideLabel?: boolean;
  
  /** Mark the field as optional, displaying "(Optional)" text next to label */
  optional?: boolean;
  
  /** Placeholder text when no option is selected */
  placeholder?: string;
  
  /** Array of options to display in the select */
  options: SelectOption[];
  
  /** Current selected value */
  value?: string;
  
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
  
  /** Whether the select is disabled */
  disabled?: boolean;
  
  /** Whether the field is required */
  required?: boolean;
  
  /** Name attribute for form submission */
  name?: string;
  
  /** Additional class names */
  className?: string;
  
  /** ID for the select */
  id?: string;
  
  /** Content to display before the select value (icon or text) */
  prefix?: React.ReactNode;
  
  /** Whether to show search input for long lists */
  searchable?: boolean;
  
  /** Placeholder text for search input */
  searchPlaceholder?: string;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({
    label,
    helpText,
    errorMessage,
    size = 'medium',
    fullWidth = false,
    hideLabel = false,
    optional = false,
    placeholder = 'Select an option...',
    options = [],
    value,
    defaultValue,
    onValueChange,
    disabled = false,
    required = false,
    name,
    className,
    id,
    prefix,
    searchable = false,
    searchPlaceholder = 'Search options...',
    ...props
  }, ref) => {
    const uniqueId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const [searchTerm, setSearchTerm] = useState('');
    
    // Detect RTL for line height adjustments
    const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
    
    // Create lineHeightStyle object for proper text rendering
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };
    
    // Filter options based on search term
    const filteredOptions = useMemo(() => {
      if (!searchable || !searchTerm.trim()) {
        return options;
      }
      return options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [options, searchTerm, searchable]);
    
    const hasError = !!errorMessage;
    const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
    
    // Get current selected option to display label
    const selectedOption = options.find(option => option.value === value) || 
                          options.find(option => option.value === defaultValue);
    const shouldShowLabel = label && !hideLabel;
    
    return (
      <Form.Root
        className={clsx(
          styles.container,
          styles[sizeClass],
          hasError && styles.error,
          fullWidth && styles.fullWidth,
          className
        )}
      >
        <Form.Field name={name || 'select-field'}>
          {shouldShowLabel && (
            <div className={styles.labelContainer}>
              <Form.Label className={styles.label} style={lineHeightStyle}>
                {label}
                {required && <span className={styles.required}>*</span>}
                {optional && <span className={styles.optional}>(Optional)</span>}
              </Form.Label>
              {selectedOption && (
                <span className={styles.selectedValue} style={lineHeightStyle}>
                  {selectedOption.label}
                </span>
              )}
            </div>
          )}
          
          <SelectPrimitive.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
            required={required}
            name={name}
          >
            <SelectPrimitive.Trigger
              ref={ref}
              id={uniqueId}
              className={clsx(
                styles.trigger,
                disabled && styles.disabled,
                prefix && styles.withPrefix
              )}
              aria-invalid={hasError}
              aria-describedby={`${uniqueId}-helptext ${uniqueId}-error`}
              {...props}
            >
              {prefix && <div className={styles.prefix}>{prefix}</div>}
              
              <SelectPrimitive.Value
                className={styles.value}
                placeholder={placeholder}
                style={lineHeightStyle}
              />
              
              <SelectPrimitive.Icon className={styles.icon}>
                <IconChevronDown size={18} />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content
                className={styles.content}
                position="popper"
                sideOffset={4}
                alignOffset={0}
              >
                <SelectPrimitive.ScrollUpButton className={styles.scrollButton}>
                  <IconChevronUp size={16} />
                </SelectPrimitive.ScrollUpButton>
                
                <SelectPrimitive.Viewport className={styles.viewport}>
                  {searchable && (
                    <div className={styles.searchContainer}>
                      <TextInput
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        prefix={<IconSearch size={16} />}
                        size="micro"
                        hideLabel
                        className={styles.searchInput}
                      />
                    </div>
                  )}
                  
                  {filteredOptions.length === 0 && searchable && searchTerm ? (
                    <div className={styles.noResults}>
                      No options found
                    </div>
                  ) : (
                    filteredOptions.map((option) => (
                      <SelectPrimitive.Item
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        className={clsx(
                          styles.item,
                          option.disabled && styles.itemDisabled
                        )}
                      >
                        <SelectPrimitive.ItemText
                          className={styles.itemText}
                          style={lineHeightStyle}
                        >
                          {option.label}
                        </SelectPrimitive.ItemText>
                        
                        <SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
                          <IconCheck size={16} />
                        </SelectPrimitive.ItemIndicator>
                      </SelectPrimitive.Item>
                    ))
                  )}
                </SelectPrimitive.Viewport>
                
                <SelectPrimitive.ScrollDownButton className={styles.scrollButton}>
                  <IconChevronDown size={16} />
                </SelectPrimitive.ScrollDownButton>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
          
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

Select.displayName = 'Select';

// Export type and size arrays for documentation
export const selectSizes = ['micro', 'medium', 'large'] as const;