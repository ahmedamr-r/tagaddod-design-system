import { forwardRef, useState, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider';
import clsx from 'clsx';
import { IconExclamationCircle } from '@tabler/icons-react';
import styles from './RangeSlider.module.css';

export type RangeSliderType = 'single thumb' | 'dual thumb';
export type RangeSliderState = 'rest' | 'focus' | 'active' | 'disabled' | 'error';

export interface RangeSliderProps {
  /**
   * The controlled value of the slider
   */
  value?: number[];
  
  /**
   * The default value of the slider when initially rendered
   * @default [0]
   */
  defaultValue?: number[];
  
  /**
   * Event handler called when the value changes
   */
  onValueChange?: (value: number[]) => void;
  
  /**
   * Event handler called when the value changes at the end of an interaction
   */
  onValueCommit?: (value: number[]) => void;
  
  /**
   * The minimum value of the slider
   * @default 0
   */
  min?: number;
  
  /**
   * The maximum value of the slider
   * @default 100
   */
  max?: number;
  
  /**
   * The step increment of the slider
   * @default 1
   */
  step?: number;
  
  /**
   * Type of slider - single or dual thumb
   * @default 'single thumb'
   */
  type?: RangeSliderType;
  
  /**
   * Current state of the slider
   * @default 'rest'
   */
  state?: RangeSliderState;
  
  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Text label displayed above the slider
   */
  label?: string;
  
  /**
   * Content to display before the slider (icon or text)
   */
  prefix?: React.ReactNode;
  
  /**
   * Content to display after the slider (icon or text)  
   */
  suffix?: React.ReactNode;
  
  /**
   * Error message to display below the slider
   */
  errorMessage?: string;
  
  /**
   * Custom formatter for displaying values in tooltip
   */
  formatValue?: (value: number) => string;
  
  /**
   * Aria label for the slider
   */
  'aria-label'?: string;
  
  /**
   * Additional class names
   */
  className?: string;
  
  /**
   * Whether to show tooltip on active state
   * @default true
   */
  showTooltip?: boolean;
}

export const RangeSlider = forwardRef<
  React.ElementRef<typeof Slider.Root>,
  RangeSliderProps
>(({
  value,
  defaultValue,
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 1,
  type = 'single thumb',
  state = 'rest',
  disabled = false,
  label,
  prefix,
  suffix,
  errorMessage,
  formatValue = (value: number) => value.toString(),
  'aria-label': ariaLabel,
  className,
  showTooltip = true,
  ...props
}, ref) => {
  const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL direction
  useEffect(() => {
    const detectRTL = () => {
      if (typeof document === 'undefined') return false;
      
      // Check document direction
      if (document.dir === 'rtl' || document.documentElement.dir === 'rtl') {
        return true;
      }
      
      // Check if we're inside an RTL container
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      const computedStyle = window.getComputedStyle(htmlElement);
      if (computedStyle.direction === 'rtl') {
        return true;
      }
      
      const bodyComputedStyle = window.getComputedStyle(bodyElement);
      if (bodyComputedStyle.direction === 'rtl') {
        return true;
      }
      
      return false;
    };
    
    setIsRTL(detectRTL());
  }, []);
  
  // Determine current value and thumb count
  const isRange = type === 'dual thumb';
  
  // Set appropriate default values based on type
  const getDefaultValue = () => {
    if (defaultValue) return defaultValue;
    return isRange ? [25, 75] : [50];
  };
  
  const currentValue = value || getDefaultValue();
  
  // Ensure proper array structure based on type
  let actualValue = currentValue;
  if (isRange && currentValue.length === 1) {
    // Convert single value to dual thumb range
    actualValue = [currentValue[0], Math.min(currentValue[0] + 25, max)];
  } else if (!isRange && currentValue.length > 1) {
    // Convert dual thumb to single value
    actualValue = [currentValue[0]];
  }

  // Determine actual state
  const actualState = disabled ? 'disabled' : errorMessage ? 'error' : state;
  const actualDisabled = disabled || actualState === 'disabled';

  // Detect RTL for line height adjustments
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Handle slider events - no transformation needed as direction: rtl handles this natively
  const handleValueChange = (newValue: number[]) => {
    onValueChange?.(newValue);
  };

  const handleValueCommit = (newValue: number[]) => {
    setActiveThumbIndex(null);
    onValueCommit?.(newValue);
  };

  // Transform the actual values for the slider component
  const sliderValue = value ? actualValue : undefined;
  const sliderDefaultValue = value ? undefined : actualValue;

  return (
    <div
      className={clsx(
        styles.container,
        styles[actualState],
        className
      )}
    >
      {/* Label */}
      {label && (
        <div className={styles.labelContainer}>
          <label className={styles.label} style={lineHeightStyle}>
            {label}
          </label>
        </div>
      )}

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        {/* Prefix */}
        {prefix && (
          <div className={styles.prefix}>
            {prefix}
          </div>
        )}

        {/* Slider Root */}
        <Slider.Root
          ref={ref}
          className={clsx(
            styles.root,
            styles[actualState],
            isRange && styles.dualThumb
          )}
          value={sliderValue}
          defaultValue={sliderDefaultValue}
          onValueChange={handleValueChange}
          onValueCommit={handleValueCommit}
          min={min}
          max={max}
          step={step}
          orientation="horizontal"
          disabled={actualDisabled}
          dir={isRTL ? 'rtl' : 'ltr'}
          aria-label={ariaLabel || label}
          {...props}
        >
          {/* Track */}
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          
          {/* Thumbs */}
          {actualValue.map((thumbValue, index) => (
            <Slider.Thumb
              key={index}
              className={styles.thumb}
              aria-label={
                isRange 
                  ? `${ariaLabel || label || 'Range slider'} ${index === 0 ? 'minimum' : 'maximum'} value`
                  : ariaLabel || label || 'Slider value'
              }
              onFocus={() => {}}
              onBlur={() => {}}
              onMouseDown={() => setActiveThumbIndex(index)}
              onMouseUp={() => setActiveThumbIndex(null)}
            >
              {/* Tooltip for active state */}
              {showTooltip && activeThumbIndex === index && actualState === 'active' && (
                <div className={styles.tooltip}>
                  <div className={styles.tooltipContent}>
                    {formatValue(thumbValue)}
                  </div>
                  <div className={styles.tooltipArrow} />
                </div>
              )}
            </Slider.Thumb>
          ))}
        </Slider.Root>

        {/* Suffix */}
        {suffix && (
          <div className={styles.suffix}>
            {suffix}
          </div>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className={styles.errorContainer}>
          <IconExclamationCircle size={20} className={styles.errorIcon} />
          <span className={styles.errorMessage} style={lineHeightStyle}>
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
});

RangeSlider.displayName = 'RangeSlider';