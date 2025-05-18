import React, { forwardRef, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The ratio of the container's width to height (e.g., 16/9, 4/3, 1, etc.)
   * @default 1
   */
  ratio?: number;
  
  /**
   * Custom class name for the container
   */
  className?: string;
  
  /**
   * Content to be displayed within the aspect ratio container
   */
  children: React.ReactNode;
}

/**
 * Check if the browser supports the aspect-ratio CSS property
 */
const supportsAspectRatio = () => {
  if (typeof window === 'undefined') return true; // SSR fallback
  return CSS.supports('aspect-ratio', '1');
};

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(({
  ratio = 1,
  className = '',
  children,
  style = {},
  ...props
}, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasAspectRatioSupport = supportsAspectRatio();
  
  // For modern browsers: use the aspect-ratio CSS property
  const combinedStyle = hasAspectRatioSupport
    ? {
        aspectRatio: `${ratio}`,
        ...style,
      }
    : {
        ...style,
      };

  // For older browsers: use the padding-top hack
  useEffect(() => {
    // Skip if aspect-ratio is supported or if we're in SSR
    if (hasAspectRatioSupport || !containerRef.current) return;

    // For browsers without aspect-ratio support, apply the padding-top hack
    const paddingTop = `${(1 / ratio) * 100}%`;
    containerRef.current.style.setProperty('padding-top', paddingTop);
    
    // Ensure content is positioned absolutely
    const child = containerRef.current.firstElementChild as HTMLElement;
    if (child) {
      child.style.position = 'absolute';
      child.style.top = '0';
      child.style.left = '0';
      child.style.width = '100%';
      child.style.height = '100%';
    }
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty('padding-top');
      }
    };
  }, [ratio, hasAspectRatioSupport]);

  // Use both the forwarded ref and the internal ref
  const setRefs = (element: HTMLDivElement | null) => {
    containerRef.current = element;
    
    // Handle forwarded ref
    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        // Handle React.MutableRefObject safely
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
      }
    }
  };

  return (
    <div
      ref={setRefs}
      className={clsx(styles.container, !hasAspectRatioSupport && styles.fallback, className)}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
});

AspectRatio.displayName = 'AspectRatio';
