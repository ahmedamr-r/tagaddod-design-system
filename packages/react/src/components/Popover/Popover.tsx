import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import clsx from 'clsx';
import styles from './Popover.module.css';

export type PopoverType = 'default' | 'with-scrollbar';

export interface PopoverProps {
  /**
   * The trigger element that will open the popover when clicked
   */
  children: React.ReactNode;
  /**
   * The content to display inside the popover
   */
  content: React.ReactNode;
  /**
   * Whether the popover should have a scrollbar for overflow content
   */
  type?: PopoverType;
  /**
   * Optional class name for styling the popover content
   */
  className?: string;
  /**
   * Controls whether the popover is open or not
   */
  open?: boolean;
  /**
   * Event handler for when the popover opens
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The side where the popover will be positioned relative to the trigger
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The alignment of the popover relative to the trigger
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Whether to show the arrow that points to the trigger
   */
  showArrow?: boolean;
  /**
   * Additional props to pass to the content element
   */
  contentProps?: React.ComponentProps<typeof RadixPopover.Content>;
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  type = 'default',
  className,
  open,
  onOpenChange,
  side = 'bottom',
  align = 'center',
  showArrow = true,
  contentProps,
  animationDuration = 200,
}) => {
  // Detect RTL direction for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  const animationStyles = {
    animationDuration: `${animationDuration}ms`,
  };

  return (
    <RadixPopover.Root open={open} onOpenChange={onOpenChange}>
      <RadixPopover.Trigger asChild>
        {children}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className={clsx(
            styles.content,
            type === 'with-scrollbar' && styles.withScrollbar,
            className
          )}
          sideOffset={5}
          side={side}
          align={align}
          style={animationStyles}
          collisionPadding={10}
          {...contentProps}
        >
          <div className={styles.innerContent} style={lineHeightStyle}>
            {content}
          </div>
          {showArrow && (
            <RadixPopover.Arrow className={styles.arrow} style={animationStyles} width={10} height={5} />
          )}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

// Export the subcomponents for more flexible composition
export const PopoverRoot = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;
export const PopoverContent = ({
  children,
  className,
  type = 'default',
  style,
  ...props
}: React.ComponentProps<typeof RadixPopover.Content> & { type?: PopoverType }) => {
  // Detect RTL direction for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  return (
    <RadixPopover.Content
      className={clsx(
        styles.content,
        type === 'with-scrollbar' && styles.withScrollbar,
        className
      )}
      collisionPadding={10}
      style={{
        ...style,
        animationDuration: style?.animationDuration || '200ms',
      }}
      {...props}
    >
      <div className={styles.innerContent} style={lineHeightStyle}>
        {children}
      </div>
      <RadixPopover.Arrow 
        className={styles.arrow} 
        width={10} 
        height={5}
        style={{
          animationDuration: style?.animationDuration || '200ms',
        }}
      />
    </RadixPopover.Content>
  );
};
export const PopoverArrow = RadixPopover.Arrow;
export const PopoverClose = RadixPopover.Close;

export default Popover;