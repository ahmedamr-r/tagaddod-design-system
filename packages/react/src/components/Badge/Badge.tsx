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
  // Detect if we need to apply RTL text fixes
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
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
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label} style={lineHeightStyle}>{children}</span>
    </span>
  );
};

export default Badge;
