import { forwardRef, useEffect, useRef } from 'react';
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
   * Additional CSS class for styling (borders, colors, spacing only)
   * ⚠️ WARNING: Do not use CSS for height, width, flex, or overflow properties.
   * Use the component props instead to avoid conflicts with scrolling behavior.
   */
  className?: string;

  /**
   * The height of the scroll area (controls scrolling behavior)
   * Use this prop instead of CSS height to ensure proper scrolling.
   * @default '200px'
   */
  height?: string | number;

  /**
   * The width of the scroll area
   * Use this prop instead of CSS width to ensure proper scrolling.
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
  // Development warning for potential CSS conflicts (once per component instance)
  const hasWarnedRef = useRef(false);
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && className && !hasWarnedRef.current) {
      console.warn(
        'ScrollArea: Ensure your className only contains styling properties (borders, colors, spacing). ' +
        'Avoid CSS properties like height, width, flex, max-height, or overflow as they can conflict with scrolling behavior. ' +
        'Use the height and width props instead.'
      );
      hasWarnedRef.current = true;
    }
  }, [className]);
  // Create dynamic styles for dimensions with !important protection against CSS conflicts
  const rootStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    // Protect against common CSS conflicts that can break ScrollArea
    minHeight: '0', // Prevent flex-grow expansion
    minWidth: '0',  // Prevent flex-grow expansion
    flexShrink: '0', // Prevent flexbox shrinking
    // Note: These styles ensure ScrollArea dimensions are controlled by props, not external CSS
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