import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

export const badgeTones = ['default', 'info', 'success', 'warning', 'critical', 'magic'] as const;
export type BadgeTone = typeof badgeTones[number];

export const badgeSizes = ['medium', 'large', 'xlarge'] as const;
export type BadgeSize = typeof badgeSizes[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The label text to display inside the badge
   */
  children: React.ReactNode;
  /**
   * The tone of the badge (affects colors)
   * @default 'default'
   */
  tone?: BadgeTone;
  /**
   * The size of the badge
   * @default 'medium'
   */
  size?: BadgeSize;
  /**
   * Whether to display the badge with strong styling
   * @default false
   */
  strong?: boolean;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  /**
   * Additional class names to apply
   */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'default',
  size = 'medium',
  strong = false,
  icon,
  className,
  ...props
}) => {
  // Simple line height style
  const lineHeightStyle = { lineHeight: 1.5 };

  // Clone icon with proper size based on badge size
  const renderIcon = () => {
    if (!icon) return null;
    
    // Determine icon size based on badge size using design tokens
    const iconSize = size === 'xlarge' ? 'var(--t-size-500)' : 'var(--t-size-400)'; // 20px for xlarge, 16px for medium/large
    
    // Clone the icon element and apply size
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        style: {
          width: iconSize,
          height: iconSize,
          ...((icon as React.ReactElement<any>).props?.style || {})
        }
      });
    }
    
    return icon;
  };

  return (
    <span 
      className={clsx(
        styles.badge,
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        strong && styles.strong,
        className
      )}
      style={lineHeightStyle}
      {...props}
    >
      {icon && <span className={styles.icon}>{renderIcon()}</span>}
      <span className={styles.label} style={lineHeightStyle}>{children}</span>
    </span>
  );
};

export default Badge;
