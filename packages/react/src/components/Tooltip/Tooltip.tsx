import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import styles from './Tooltip.module.css';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';
export type TooltipAlign = 'start' | 'center' | 'end';

export interface TooltipProps {
  /** The content to display inside the tooltip */
  content: React.ReactNode;
  /** The trigger element that shows the tooltip on hover */
  children: React.ReactNode;
  /** How long to delay opening the tooltip in ms */
  delayDuration?: number;
  /** The preferred side of the trigger to render against. If not specified, Radix will automatically position the tooltip based on available space */
  side?: TooltipSide;
  /** The alignment relative to the trigger */
  align?: TooltipAlign;
  /** The distance in pixels from the trigger */
  sideOffset?: number;
  /** The alignment offset in pixels */
  alignOffset?: number;
  /** Whether the tooltip should be disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
}

export const tooltipSides: TooltipSide[] = ['top', 'right', 'bottom', 'left'];
export const tooltipAligns: TooltipAlign[] = ['start', 'center', 'end'];

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  delayDuration = 200,
  side,
  align = 'center',
  sideOffset = 8,
  alignOffset = 0,
  disabled = false,
  className,
}) => {
  // Detect RTL direction for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Root 
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className={clsx(styles.content, className)}
          {...(side && { side })}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          style={lineHeightStyle}
        >
          {content}
          <TooltipPrimitive.Arrow className={styles.arrow} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

Tooltip.displayName = 'Tooltip';