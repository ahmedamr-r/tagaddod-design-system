'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import styles from './RadioButton.module.css';

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  /**
   * Additional class names
   */
  className?: string;
};

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={clsx(styles.RadioGroup, className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioButtonItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  /**
   * The label displayed next to the radio button
   */
  label?: string;
  
  /**
   * Help text displayed below the radio button
   */
  helpText?: string;
  
  /**
   * Whether to show the help text
   * @default true
   */
  showHelpText?: boolean;
  
  /**
   * Whether the radio button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional class names
   */
  className?: string;
  
  /**
   * Whether to hide the label but keep it accessible for screen readers
   * @default false
   */
  hideLabel?: boolean;
};

const RadioButtonItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioButtonItemProps
>(({ 
  className, 
  label, 
  helpText, 
  showHelpText = true,
  hideLabel = false,
  ...props 
}, ref) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
  return (
    <div className={styles.RadioButtonContainer}>
      <div className={styles.RadioButtonWrapper}>
        <RadioGroupPrimitive.Item
          ref={ref}
          className={clsx(
            styles.RadioButtonItem,
            props.disabled && styles.disabled,
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className={styles.RadioButtonIndicator} />
        </RadioGroupPrimitive.Item>
        
        {label && (
          <label
            htmlFor={props.id}
            className={clsx(
              styles.Label, 
              props.disabled && styles.disabled,
              hideLabel && styles.srOnly
            )}
            style={lineHeightStyle}
          >
            {label}
          </label>
        )}
      </div>
      
      {helpText && showHelpText && (
        <div className={styles.HelpText} style={lineHeightStyle}>{helpText}</div>
      )}
    </div>
  );
});
RadioButtonItem.displayName = 'RadioButtonItem';

export { RadioGroup, RadioButtonItem };
