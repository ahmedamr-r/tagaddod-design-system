import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export type CardVariant = 'elevated' | 'outlined' | 'ghost';
export type CardSize = 'small' | 'medium' | 'large';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main content area - can be any React node
   */
  children: React.ReactNode;

  /**
   * Optional header content - shows at top of card
   */
  header?: React.ReactNode;

  /**
   * Optional footer content - shows at bottom of card
   */
  footer?: React.ReactNode;

  /**
   * Card visual variant
   * @default 'elevated'
   */
  variant?: CardVariant;

  /**
   * Card size affects padding and spacing
   * @default 'medium'
   */
  size?: CardSize;

  /**
   * Makes the card interactive with hover/focus states
   * @default false
   */
  interactive?: boolean;

  /**
   * Full width card (100% of container)
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Makes the entire card clickable with enhanced hover/click effects
   * @default false
   */
  clickable?: boolean;

  /**
   * Custom padding for the entire card container
   * Overrides the size-based padding when provided
   */
  containerPadding?: string;

  /**
   * Custom padding for the card content (header, body, footer)
   * Overrides the default content spacing when provided
   */
  contentPadding?: string;
}

export const cardVariants = ['elevated', 'outlined', 'ghost'] as const;
export const cardSizes = ['small', 'medium', 'large'] as const;

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  header,
  footer,
  variant = 'elevated',
  size = 'medium',
  interactive = false,
  fullWidth = false,
  clickable = false,
  containerPadding,
  contentPadding,
  className = '',
  ...props
}, ref) => {
  // Detect RTL for line height adjustments
  const isRTL = typeof document !== 'undefined' &&
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Combine all classes for the card
  const cardClasses = clsx(
    styles.card,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    interactive && styles.interactive,
    clickable && styles.clickable,
    fullWidth && styles.fullWidth,
    className
  );

  // Create container styles with custom padding if provided
  const containerStyles = {
    ...lineHeightStyle,
    ...(containerPadding && { padding: containerPadding })
  };

  // Create content styles with custom padding if provided
  const contentStyles = contentPadding ? { padding: contentPadding } : undefined;

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={containerStyles}
      {...props}
    >
      {header && (
        <div className={styles.header} style={contentStyles}>
          {header}
        </div>
      )}

      <div className={styles.body} style={contentStyles}>
        {children}
      </div>

      {footer && (
        <div className={styles.footer} style={contentStyles}>
          {footer}
        </div>
      )}
    </div>
  );
});

Card.displayName = 'Card';