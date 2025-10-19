import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import clsx from 'clsx';
import styles from './Popover.module.css';
import { Listbox, ListboxProps } from '../Listbox/Listbox';
import { ListboxOptionProps } from '../Listbox/ListboxOption';
import { useDrawerContext } from '../Drawer/Drawer';

export type PopoverType = 'default' | 'with-scrollbar';
export type PopoverMargin = 'none' | 'small' | 'medium' | 'large' | number;

export interface PopoverListboxOption extends Omit<ListboxOptionProps, 'onClick' | 'role' | 'tabIndex' | 'aria-selected'> {
  /**
   * Whether this specific option should show an icon (overrides global listboxShowIcons)
   */
  showIcon?: boolean;
  /**
   * Icon element to display for this option (if showIcon is true)
   */
  icon?: React.ReactNode;
}

export interface PopoverProps {
  /**
   * The trigger element that will open the popover when clicked
   */
  children: React.ReactNode;
  /**
   * The content to display inside the popover (when not using listbox mode)
   */
  content?: React.ReactNode;
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
  /**
   * Custom margin for the popover content
   */
  margin?: PopoverMargin;
  
  // Listbox integration props
  /**
   * Enable listbox mode - displays a dropdown list instead of custom content
   */
  useListbox?: boolean;
  /**
   * Array of options for the listbox dropdown
   */
  listboxOptions?: PopoverListboxOption[];
  /**
   * Maximum number of visible options in the listbox
   */
  listboxMaxItems?: number;
  /**
   * Whether the listbox supports multiple selection
   */
  listboxMultiple?: boolean;
  /**
   * Currently selected value(s) in the listbox
   */
  listboxSelectedValue?: string | number | Array<string | number>;
  /**
   * Whether to show icons for all listbox items by default
   */
  listboxShowIcons?: boolean;
  /**
   * Default icon to use for listbox items (when listboxShowIcons is true and no specific icon provided)
   */
  listboxDefaultIcon?: React.ReactNode;
  /**
   * Handler for when a listbox option is selected
   */
  onListboxSelect?: (value: string | number) => void;
  /**
   * Handler for when multiple listbox options are selected
   */
  onListboxMultiSelect?: (values: Array<string | number>) => void;
  /**
   * Additional props to pass to the Listbox component
   */
  listboxProps?: Partial<ListboxProps>;
  
  // Custom padding for listbox items
  /**
   * Custom vertical padding (top and bottom) for listbox items in pixels
   */
  listboxItemPaddingVertical?: number;
  /**
   * Custom horizontal padding (left and right) for listbox items in pixels
   */
  listboxItemPaddingHorizontal?: number;
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
  margin = 'medium',
  useListbox = false,
  listboxOptions = [],
  listboxMaxItems = 5,
  listboxMultiple = false,
  listboxSelectedValue,
  listboxShowIcons = false,
  listboxDefaultIcon,
  onListboxSelect,
  onListboxMultiSelect,
  listboxProps,
  listboxItemPaddingVertical,
  listboxItemPaddingHorizontal,
}) => {
  // Check if popover is inside a drawer for z-index management
  const drawerContext = useDrawerContext();

  // Detect RTL direction for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Calculate z-index based on context
  // Base z-index: 1010 (--t-z-popover)
  // Inside drawer: drawerZIndex + 60 = 1080
  const popoverZIndex = drawerContext.isInsideDrawer
    ? drawerContext.drawerZIndex + 60
    : undefined; // Use CSS default (--t-z-popover: 1010)

  const animationStyles = {
    animationDuration: `${animationDuration}ms`,
  };

  // Calculate margin styles
  const getMarginStyle = (margin: PopoverMargin): React.CSSProperties => {
    if (margin === 'none') return { padding: 0 };
    if (typeof margin === 'number') return { padding: `${margin}px` };
    
    const marginMap: Record<string, string> = {
      small: 'var(--t-space-200)',
      medium: 'var(--t-space-300)',
      large: 'var(--t-space-400)',
    };
    
    return { padding: marginMap[margin] || marginMap.medium };
  };

  // Prepare listbox options with icon handling
  const processedListboxOptions = useListbox ? listboxOptions.map(option => {
    const shouldShowIcon = option.showIcon !== undefined ? option.showIcon : listboxShowIcons;
    const iconToUse = option.icon || (shouldShowIcon ? listboxDefaultIcon : undefined);
    
    return {
      ...option,
      prefix: iconToUse ? iconToUse : option.prefix,
    };
  }) : [];

  // Determine content to render
  const renderContent = () => {
    if (useListbox) {
      return (
        <Listbox
          options={processedListboxOptions}
          selectedValue={listboxSelectedValue}
          maxVisibleOptions={listboxMaxItems}
          multiple={listboxMultiple}
          onSelect={onListboxSelect}
          onMultiSelect={onListboxMultiSelect}
          inPopover={true}
          itemPaddingVertical={listboxItemPaddingVertical}
          itemPaddingHorizontal={listboxItemPaddingHorizontal}
          {...listboxProps}
        />
      );
    }
    return content;
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
          style={{
            ...animationStyles,
            ...getMarginStyle(margin),
            ...(popoverZIndex && { zIndex: popoverZIndex }),
          }}
          collisionPadding={10}
          {...contentProps}
        >
          <div className={styles.innerContent} style={lineHeightStyle}>
            {renderContent()}
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
  margin = 'medium',
  ...props
}: React.ComponentProps<typeof RadixPopover.Content> & {
  type?: PopoverType;
  margin?: PopoverMargin;
}) => {
  // Check if popover is inside a drawer for z-index management
  const drawerContext = useDrawerContext();

  // Detect RTL direction for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Calculate z-index based on context
  const popoverZIndex = drawerContext.isInsideDrawer
    ? drawerContext.drawerZIndex + 60
    : undefined;

  // Calculate margin styles
  const getMarginStyle = (margin: PopoverMargin): React.CSSProperties => {
    if (margin === 'none') return { padding: 0 };
    if (typeof margin === 'number') return { padding: `${margin}px` };
    
    const marginMap: Record<string, string> = {
      small: 'var(--t-space-200)',
      medium: 'var(--t-space-300)',
      large: 'var(--t-space-400)',
    };
    
    return { padding: marginMap[margin] || marginMap.medium };
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
        ...getMarginStyle(margin),
        animationDuration: style?.animationDuration || '200ms',
        ...(popoverZIndex && { zIndex: popoverZIndex }),
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