import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { IconLoader2 } from '@tabler/icons-react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'plain';
export type ButtonTone = 'default' | 'critical' | 'success' | 'neutral' | 'magic';
export type ButtonSize = 'large' | 'medium' | 'micro';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant that changes the visual appearance
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Button tone that applies different color treatments
   * @default 'default'
   */
  tone?: ButtonTone;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Loading state, shows a spinner and disables the button
   * @default false
   */
  loading?: boolean;
  
  /**
   * Full width button (100% of container)
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display before the button text
   */
  prefixIcon?: React.ReactNode;
  
  /**
   * Icon to display after the button text
   */
  suffixIcon?: React.ReactNode;
}

export const buttonVariants = ['primary', 'secondary', 'tertiary', 'plain'] as const;
export const buttonTones = ['default', 'critical', 'success', 'neutral', 'magic'] as const;
export const buttonSizes = ['large', 'medium', 'micro'] as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  tone = 'default',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  prefixIcon,
  suffixIcon,
  className = '',
  ...props
}, ref) => {
  // Determine if this is an icon-only button (no text content)
  const isIconOnly = !children && (prefixIcon || suffixIcon);
  
  // Apply specific icon positioning for icon-only buttons
  const iconOnly = isIconOnly ? styles.iconOnly : '';
  
  // Simple line height style
  const lineHeightStyle = { lineHeight: 1.5 };
  
  // Combine all classes for the button
  const buttonClasses = clsx(
    styles.button,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`tone${tone.charAt(0).toUpperCase() + tone.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    iconOnly,
    className
  );
  
  // Handle content based on loading state
  const renderContent = () => {
    if (loading) {
      return (
        <>
          {/* Hidden content to maintain width */}
          <span style={{ visibility: 'hidden', position: 'absolute' }}>
            {prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
            {children && <span className={styles.label} style={lineHeightStyle}>{children}</span>}
            {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
          </span>
          {/* Visible spinner */}
          <span className={styles.loadingWrapper}>
            <IconLoader2 className={styles.spinner} />
          </span>
        </>
      );
    }
    
    return (
      <>
        {prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
        {children && <span className={styles.label} style={lineHeightStyle}>{children}</span>}
        {suffixIcon && <span className={styles.suffixIcon}>{suffixIcon}</span>}
      </>
    );
  };
  
  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      type={props.type || 'button'}
      {...props}
    >
      {renderContent()}
    </button>
  );
});

Button.displayName = 'Button';
