import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import styles from './Switch.module.css';
import clsx from 'clsx';

export interface SwitchProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
  'checked' | 'defaultChecked' | 'onCheckedChange'
> {
  /**
   * Whether the switch is pressed (checked) or not
   * @default false
   */
  pressed?: boolean;
  
  /**
   * The default pressed state when initially rendered
   * @default false
   */
  defaultPressed?: boolean;
  
  /**
   * Size of the switch (sm = 20px, md = 24px)
   * @default "md"
   */
  size?: 'sm' | 'md';
  
  /**
   * Callback when the pressed state changes
   */
  onPressedChange?: (pressed: boolean) => void;
}

/**
 * Switch component for toggling between checked and unchecked states
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({
  pressed,
  defaultPressed,
  size = 'md',
  onPressedChange,
  className,
  ...props
}, ref) => {
  // State for uncontrolled mode
  const [internalPressed, setInternalPressed] = React.useState(defaultPressed || false);
  
  // Use internal state only if pressed prop is not provided (uncontrolled mode)
  const isPressed = pressed !== undefined ? pressed : internalPressed;
  
  // Handle toggle
  const handleCheckedChange = (checked: boolean) => {
    // Update internal state for uncontrolled mode
    if (pressed === undefined) {
      setInternalPressed(checked);
    }
    
    // Call the callback if provided
    if (onPressedChange) {
      onPressedChange(checked);
    }
  };

  return (
    <SwitchPrimitive.Root
      ref={ref}
      checked={isPressed}
      onCheckedChange={handleCheckedChange}
      className={clsx(
        styles.root,
        size === 'sm' ? styles.sizeSm : styles.sizeMd,
        isPressed && styles.pressed,
        props.disabled && styles.disabled,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb 
        className={clsx(
          styles.thumb,
          size === 'sm' ? styles.thumbSm : styles.thumbMd,
          isPressed && styles.thumbPressed
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = 'Switch';
