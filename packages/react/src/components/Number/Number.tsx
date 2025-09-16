import React, { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import { IconX, IconExclamationCircle, IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import styles from './Number.module.css';

export type NumberSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export interface NumberFormatOptions {
  /** The formatting style to use */
  style?: 'decimal' | 'currency' | 'percent';
  /** The currency to use in currency formatting */
  currency?: string;
  /** The minimum number of fraction digits to use */
  minimumFractionDigits?: number;
  /** The maximum number of fraction digits to use */
  maximumFractionDigits?: number;
}

export interface NumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'prefix'> {
  /** Text label displayed above the input */
  label?: string;

  /** Help text displayed below the input */
  helpText?: string;

  /** Error message displayed below the input */
  errorMessage?: string;

  /** Size of the input field */
  size?: NumberSize;

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

  /** The current numeric value */
  value?: number | null;

  /** The default numeric value */
  defaultValue?: number;

  /** The minimum allowed value */
  min?: number;

  /** The maximum allowed value */
  max?: number;

  /** The step increment value */
  step?: number;

  /** Number formatting options */
  formatOptions?: NumberFormatOptions;

  /** Whether to hide the increment/decrement stepper buttons */
  hideSteppers?: boolean;

  /** Whether to disable mouse wheel input */
  disableWheel?: boolean;

  /** Callback when the value changes */
  onChange?: (value: number | null) => void;
}

export const Number = forwardRef<HTMLInputElement, NumberProps>(
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
    onChange,
    min,
    max,
    step = 1,
    formatOptions,
    hideSteppers = false,
    disableWheel = false,
    onBlur,
    onFocus,
    onKeyDown,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState<number | null>(() => {
      if (value !== undefined) return value;
      if (defaultValue !== undefined) return defaultValue;
      return null;
    });

    const [inputText, setInputText] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const pressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const uniqueId = id || `number-input-${Math.random().toString(36).substr(2, 9)}`;

    // Detect RTL for line height adjustments
    const isRTL = typeof document !== 'undefined' &&
      (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

    // Create lineHeightStyle object for proper text rendering
    const lineHeightStyle = {
      lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
    };

    // Format number for display
    const formatNumber = useCallback((num: number | null): string => {
      if (num === null || isNaN(num)) return '';

      if (formatOptions?.style || formatOptions?.minimumFractionDigits !== undefined) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: formatOptions?.style || 'decimal',
          currency: formatOptions?.currency,
          minimumFractionDigits: formatOptions?.minimumFractionDigits,
          maximumFractionDigits: formatOptions?.maximumFractionDigits,
        });

        // For percent style, the formatter expects a decimal (0.5 = 50%)
        const valueToFormat = formatOptions?.style === 'percent' ? num : num;
        return formatter.format(valueToFormat);
      }

      return String(num);
    }, [formatOptions]);

    // Parse user input to number
    const parseInput = useCallback((text: string): number | null => {
      if (!text || text === '') return null;

      // Remove formatting characters
      let cleanText = text.replace(/[,$%\s]/g, '');

      // Handle negative numbers
      if (cleanText.startsWith('(') && cleanText.endsWith(')')) {
        cleanText = '-' + cleanText.slice(1, -1);
      }

      const parsed = parseFloat(cleanText);

      if (isNaN(parsed)) return null;

      // For percent style, convert percentage to decimal
      if (formatOptions?.style === 'percent' && !isFocused) {
        return parsed / 100;
      }

      return parsed;
    }, [formatOptions?.style, isFocused]);

    // Constrain value to min/max
    const constrainValue = useCallback((val: number | null): number | null => {
      if (val === null) return null;
      if (min !== undefined && val < min) return min;
      if (max !== undefined && val > max) return max;
      return val;
    }, [min, max]);

    // Snap to step
    const snapToStep = useCallback((val: number | null): number | null => {
      if (val === null || step === 0) return val;

      const base = min !== undefined ? min : 0;
      const snapped = Math.round((val - base) / step) * step + base;
      return constrainValue(snapped);
    }, [min, step, constrainValue]);

    // Update internal value and trigger onChange
    const updateValue = useCallback((newValue: number | null, shouldFormat: boolean = false) => {
      const constrained = constrainValue(newValue);
      const finalValue = shouldFormat ? snapToStep(constrained) : constrained;

      setInternalValue(finalValue);

      if (!isFocused || shouldFormat) {
        setInputText(formatNumber(finalValue));
      }

      onChange?.(finalValue);
    }, [constrainValue, snapToStep, formatNumber, onChange, isFocused]);

    // Increment value
    const increment = useCallback(() => {
      const currentVal = value !== undefined ? value : internalValue;
      const baseValue = currentVal ?? (min ?? 0);
      const newValue = baseValue + step;
      updateValue(newValue, true);
    }, [value, internalValue, min, step, updateValue]);

    // Decrement value
    const decrement = useCallback(() => {
      const currentVal = value !== undefined ? value : internalValue;
      const baseValue = currentVal ?? (max ?? 0);
      const newValue = baseValue - step;
      updateValue(newValue, true);
    }, [value, internalValue, max, step, updateValue]);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setInputText(text);

      const parsed = parseInput(text);
      if (parsed !== null || text === '') {
        updateValue(parsed);
      }
    };

    // Handle blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);

      const parsed = parseInput(inputText);
      const finalValue = snapToStep(constrainValue(parsed));

      updateValue(finalValue, true);
      onBlur?.(e);
    };

    // Handle focus
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);

      // Show raw number on focus for easier editing
      const currentVal = value !== undefined ? value : internalValue;
      if (currentVal !== null) {
        setInputText(String(currentVal));
      }

      onFocus?.(e);
    };

    // Handle keyboard input
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        increment();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        decrement();
      } else if (e.key === 'Home' && min !== undefined) {
        e.preventDefault();
        updateValue(min, true);
      } else if (e.key === 'End' && max !== undefined) {
        e.preventDefault();
        updateValue(max, true);
      }

      onKeyDown?.(e);
    };

    // Handle wheel event
    const handleWheel = useCallback((e: WheelEvent) => {
      if (!disableWheel && isFocused && !readOnly && !disabled) {
        e.preventDefault();
        if (e.deltaY < 0) {
          increment();
        } else if (e.deltaY > 0) {
          decrement();
        }
      }
    }, [disableWheel, isFocused, readOnly, disabled, increment, decrement]);

    // Handle clear
    const handleClear = () => {
      setInternalValue(null);
      setInputText('');
      onChange?.(null);
      onClear?.();
    };

    // Handle stepper button press
    const handleStepperMouseDown = (direction: 'up' | 'down') => {
      if (disabled || readOnly) return;

      const step = direction === 'up' ? increment : decrement;
      step();

      // Start continuous stepping after delay
      pressTimerRef.current = setTimeout(() => {
        const interval = setInterval(step, 50);
        pressTimerRef.current = interval as any;
      }, 500);
    };

    const handleStepperMouseUp = () => {
      if (pressTimerRef.current) {
        clearTimeout(pressTimerRef.current);
        clearInterval(pressTimerRef.current);
        pressTimerRef.current = null;
      }
    };

    // Sync with external value prop
    useEffect(() => {
      if (value !== undefined && !isFocused) {
        setInternalValue(value);
        setInputText(formatNumber(value));
      }
    }, [value, formatNumber, isFocused]);

    // Initialize input text
    useEffect(() => {
      if (!isFocused) {
        const currentVal = value !== undefined ? value : internalValue;
        setInputText(formatNumber(currentVal));
      }
    }, []);

    // Add wheel event listener
    useEffect(() => {
      const input = inputRef.current || (ref as any)?.current;
      if (input) {
        input.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
          input.removeEventListener('wheel', handleWheel);
        };
      }
    }, [handleWheel, ref]);

    // Clean up timer on unmount
    useEffect(() => {
      return () => {
        if (pressTimerRef.current) {
          clearTimeout(pressTimerRef.current);
          clearInterval(pressTimerRef.current);
        }
      };
    }, []);

    // Get appropriate icon size based on the size prop
    const getIconSize = (size: NumberSize): number => {
      switch (size) {
        case 'xlarge': return 20;
        case 'large': return 18;
        case 'medium': return 16;
        case 'small': return 14;
        case 'xsmall': return 12;
        default: return 16;
      }
    };

    const iconSize = getIconSize(size);

    // Prepare clear button if enabled and has value
    const clearButton = clearable && inputText ? (
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

    // Prepare stepper buttons
    const stepperButtons = !hideSteppers && !readOnly ? (
      <div className={styles.stepperContainer}>
        <button
          type="button"
          className={clsx(styles.stepperButton, styles.stepperUp)}
          onMouseDown={() => handleStepperMouseDown('up')}
          onMouseUp={handleStepperMouseUp}
          onMouseLeave={handleStepperMouseUp}
          disabled={disabled || (max !== undefined && (internalValue ?? 0) >= max)}
          aria-label="Increment value"
          tabIndex={-1}
        >
          <IconChevronUp size={iconSize} />
        </button>
        <button
          type="button"
          className={clsx(styles.stepperButton, styles.stepperDown)}
          onMouseDown={() => handleStepperMouseDown('down')}
          onMouseUp={handleStepperMouseUp}
          onMouseLeave={handleStepperMouseUp}
          disabled={disabled || (min !== undefined && (internalValue ?? 0) <= min)}
          aria-label="Decrement value"
          tabIndex={-1}
        >
          <IconChevronDown size={iconSize} />
        </button>
      </div>
    ) : null;

    // Combine suffix with clear button (but not steppers)
    const combinedSuffix = (
      <>
        {suffix}
        {clearButton}
      </>
    );

    const hasError = !!errorMessage;
    const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
    const currentValue = value !== undefined ? value : internalValue;

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
        <Form.Field name={name || 'number-field'}>
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
              readOnly && styles.readOnly,
              !hideSteppers && styles.withSteppers
            )}
          >
            {prefix && <div className={styles.prefix}>{prefix}</div>}

            <Form.Control asChild>
              <input
                ref={(node) => {
                  // Handle both ref and inputRef
                  if (typeof ref === 'function') {
                    ref(node);
                  } else if (ref) {
                    ref.current = node;
                  }
                  inputRef.current = node;
                }}
                id={uniqueId}
                className={clsx(
                  styles.input,
                  prefix && styles.withPrefix,
                  (suffix || clearButton) && styles.withSuffix
                )}
                style={lineHeightStyle}
                name={name}
                value={inputText}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                type="text"
                inputMode="decimal"
                onChange={handleInputChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                aria-invalid={hasError}
                aria-describedby={`${uniqueId}-helptext ${uniqueId}-error`}
                role="spinbutton"
                aria-valuenow={currentValue ?? undefined}
                aria-valuemin={min}
                aria-valuemax={max}
                {...props}
              />
            </Form.Control>

            {(suffix || clearButton) && (
              <div className={styles.suffix}>{combinedSuffix}</div>
            )}
            {stepperButtons}
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

Number.displayName = 'Number';

// Export size arrays for documentation
export const numberSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'] as const;