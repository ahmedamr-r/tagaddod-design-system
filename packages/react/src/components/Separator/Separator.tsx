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
   * Additional class names
   */
  className?: string;
}

export const separatorOrientations = ['horizontal', 'vertical'] as const;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(({
  orientation = 'horizontal',
  decorative = false,
  className,
  ...props
}, ref) => {
  // Determine ARIA attributes based on decorative prop
  const ariaAttributes = decorative
    ? { role: 'presentation' as const }
    : { 
        role: 'separator' as const,
        'aria-orientation': orientation
      };

  return (
    <div
      ref={ref}
      className={clsx(
        styles.separator,
        styles[orientation],
        className
      )}
      {...ariaAttributes}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';
