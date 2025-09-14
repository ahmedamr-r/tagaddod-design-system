import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { IconLoader2 } from '@tabler/icons-react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'tonal' | 'outlined' | 'plain';
export type ButtonTone = 'default' | 'critical' | 'success' | 'neutral' | 'magic';
export type ButtonSize = 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';

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

export const buttonVariants = ['primary', 'tonal', 'outlined', 'plain'] as const;
export const buttonTones = ['default', 'critical', 'success', 'neutral', 'magic'] as const;
export const buttonSizes = ['xLarge', 'large', 'medium', 'small', 'xSmall'] as const;

// Icon size mapping for each button size
const iconSizeMap: Record<ButtonSize, number> = {
  xLarge: 20,
  large: 16, 
  medium: 16,
  small: 14,
  xSmall: 12
};

// Helper function to clone icon with correct size
const cloneIconWithSize = (icon: React.ReactNode, size: number): React.ReactNode => {
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, { size } as any);
  }
  return icon;
};

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
  // Get the correct icon size for the current button size
  const iconSize = iconSizeMap[size];
  
  // Clone icons with correct size
  const sizedPrefixIcon = prefixIcon ? cloneIconWithSize(prefixIcon, iconSize) : null;
  const sizedSuffixIcon = suffixIcon ? cloneIconWithSize(suffixIcon, iconSize) : null;
  
  // Determine if this is an icon-only button (no text content)
  const isIconOnly = !children && (sizedPrefixIcon || sizedSuffixIcon);
  
  // Apply specific icon positioning for icon-only buttons
  const iconOnly = isIconOnly ? styles.iconOnly : '';
  
  // Detect RTL for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
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
            {sizedPrefixIcon && <span className={styles.prefixIcon}>{sizedPrefixIcon}</span>}
            {children && <span className={styles.label} style={lineHeightStyle}>{children}</span>}
            {sizedSuffixIcon && <span className={styles.suffixIcon}>{sizedSuffixIcon}</span>}
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
        {sizedPrefixIcon && <span className={styles.prefixIcon}>{sizedPrefixIcon}</span>}
        {children && <span className={styles.label} style={lineHeightStyle}>{children}</span>}
        {sizedSuffixIcon && <span className={styles.suffixIcon}>{sizedSuffixIcon}</span>}
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
