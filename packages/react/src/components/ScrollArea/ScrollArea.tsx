import { forwardRef } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import styles from './ScrollArea.module.css';

export type ScrollAreaType = 'always' | 'scroll' | 'hover' | 'auto';

export interface ScrollAreaProps {
  /**
   * The content to be scrolled
   */
  children: React.ReactNode;

  /**
   * The scrollbar visibility behavior
   * @default 'hover'
   */
  type?: ScrollAreaType;

  /**
   * The delay in milliseconds before the scrollbars are hidden after the user stops interacting with scrollbars
   * @default 600
   */
  scrollHideDelay?: number;

  /**
   * The writing direction of the scroll area
   * When omitted, inherits from DirectionProvider or assumes LTR
   */
  dir?: 'ltr' | 'rtl';

  /**
   * Additional CSS class for styling
   */
  className?: string;

  /**
   * The height of the scroll area
   * @default '200px'
   */
  height?: string | number;

  /**
   * The width of the scroll area
   * @default '100%'
   */
  width?: string | number;

  /**
   * Whether to show horizontal scrollbar
   * @default false
   */
  horizontal?: boolean;

  /**
   * Whether to show vertical scrollbar
   * @default true
   */
  vertical?: boolean;

  /**
   * Custom nonce attribute for CSP
   */
  nonce?: string;
}

export const scrollAreaTypes = ['always', 'scroll', 'hover', 'auto'] as const;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(({
  children,
  type = 'hover',
  scrollHideDelay = 600,
  dir,
  className,
  height = '200px',
  width = '100%',
  horizontal = false,
  vertical = true,
  nonce,
}, ref) => {
  // Create dynamic styles for dimensions
  const rootStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  // Combined class names
  const rootClasses = clsx(
    styles.root,
    className
  );

  return (
    <RadixScrollArea.Root
      ref={ref}
      className={rootClasses}
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      style={rootStyle}
      nonce={nonce}
    >
      <RadixScrollArea.Viewport className={styles.viewport}>
        {children}
      </RadixScrollArea.Viewport>

      {vertical && (
        <RadixScrollArea.Scrollbar
          className={styles.scrollbar}
          orientation="vertical"
        >
          <RadixScrollArea.Thumb className={styles.thumb} />
        </RadixScrollArea.Scrollbar>
      )}

      {horizontal && (
        <RadixScrollArea.Scrollbar
          className={styles.scrollbar}
          orientation="horizontal"
        >
          <RadixScrollArea.Thumb className={styles.thumb} />
        </RadixScrollArea.Scrollbar>
      )}

      {vertical && horizontal && (
        <RadixScrollArea.Corner className={styles.corner} />
      )}
    </RadixScrollArea.Root>
  );
});

ScrollArea.displayName = 'ScrollArea';