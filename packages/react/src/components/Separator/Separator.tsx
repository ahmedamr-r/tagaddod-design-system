import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Separator.module.css';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the separator
   * @default 'horizontal'
   */
  orientation?: SeparatorOrientation;
  
  /**
   * When true, indicates the separator is purely decorative and should be ignored by screen readers
   * When false, the separator is semantic and will be announced by screen readers
   * @default false
   */
  decorative?: boolean;
  
  /**
   * Custom spacing for the separator. Can be:
   * - 'none': No spacing
   * - 'compact': Reduced spacing
   * - 'default': Default spacing (same as not providing this prop)
   * - number: Custom spacing in pixels
   * @default 'default'
   */
  spacing?: 'none' | 'compact' | 'default' | number;
  
  /**
   * Additional class names
   */
  className?: string;
}

export const separatorOrientations = ['horizontal', 'vertical'] as const;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(({
  orientation = 'horizontal',
  decorative = false,
  spacing = 'default',
  className,
  style,
  ...props
}, ref) => {
  // Determine ARIA attributes based on decorative prop
  const ariaAttributes = decorative
    ? { role: 'presentation' as const }
    : { 
        role: 'separator' as const,
        'aria-orientation': orientation
      };

  // Calculate spacing style
  const spacingStyle = React.useMemo(() => {
    if (spacing === 'none') {
      return { margin: 0 };
    } else if (spacing === 'compact') {
      return orientation === 'horizontal' 
        ? { margin: 'var(--t-space-200) 0' }
        : { margin: '0 var(--t-space-200)' };
    } else if (typeof spacing === 'number') {
      return orientation === 'horizontal'
        ? { margin: `${spacing}px 0` }
        : { margin: `0 ${spacing}px` };
    }
    // Default spacing is handled by CSS
    return {};
  }, [spacing, orientation]);

  return (
    <div
      ref={ref}
      className={clsx(
        styles.separator,
        styles[orientation],
        spacing !== 'default' && styles.customSpacing,
        className
      )}
      style={{ ...spacingStyle, ...style }}
      {...ariaAttributes}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';
