import React, { forwardRef } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import styles from './Tabs.module.css';

export type TabsVariant = 'primary' | 'secondary';
export type TabsCount = 2 | 3 | 4 | 5 | 6;
export type TabsOrientation = 'horizontal' | 'vertical';

export interface TabsProps extends Omit<RadixTabs.TabsProps, 'orientation'> {
  /**
   * Visual appearance style of the tabs
   * @default 'primary'
   */
  variant?: TabsVariant;

  /**
   * Whether the tabs should take the full width of the container
   * @default false
   */
  fitted?: boolean;

  /**
   * Number of tabs (used for styling classes)
   * @default 2
   */
  count?: TabsCount;

  /**
   * Direction of the tabs (handled automatically via context)
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl';

  /**
   * The orientation of the tabs component
   * @default 'horizontal'
   */
  orientation?: TabsOrientation;

  /**
   * Class name for the Tabs root element
   */
  className?: string;

  /**
   * Class name for the TabsList element
   */
  listClassName?: string;

  /**
   * Accessible label for the tabs
   * When provided, it will be passed as aria-label to the tabs list
   */
  ariaLabel?: string;

  /**
   * ID of the element that labels the tabs
   * Alternative to ariaLabel, this will be passed as aria-labelledby to the tabs list
   */
  ariaLabelledby?: string;

  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * Tabs allow users to navigate between related sections of content.
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
  variant = 'primary',
  fitted = false,
  count = 2,
  dir,
  orientation = 'horizontal',
  children,
  className,
  listClassName,
  ariaLabel,
  ariaLabelledby,
  ...props
}, ref) => {
  // Detect if we need to apply RTL text fixes
  const isRTL = dir === 'rtl' || document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Extract TabsList and TabsContent children
  const childrenArray = React.Children.toArray(children);
  const tabsList = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === TabsList
  );
  const tabsContent = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === TabsContent
  );

  // Set aria attributes for the list
  const listProps: React.HTMLAttributes<HTMLDivElement> = {};
  if (ariaLabel) {
    listProps['aria-label'] = ariaLabel;
  }
  if (ariaLabelledby) {
    listProps['aria-labelledby'] = ariaLabelledby;
  }

  return (
    <RadixTabs.Root
      ref={ref}
      className={clsx(
        styles.tabsRoot,
        styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        fitted && styles.fitted,
        styles[`count${count}`],
        className
      )}
      dir={dir}
      orientation={orientation}
      {...props}
    >
      {tabsList && (
        <RadixTabs.List 
          className={clsx(
            styles.tabsList,
            listClassName
          )}
          style={lineHeightStyle}
          {...listProps}
        >
          {tabsList}
        </RadixTabs.List>
      )}
      {tabsContent}
    </RadixTabs.Root>
  );
});

Tabs.displayName = 'Tabs';

export interface TabsListProps {
  /**
   * Class name for the TabsList element
   */
  className?: string;
  
  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * Container for the tab triggers (tabs).
 */
export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <>{children}</>;
};

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  /**
   * Class name for the TabsTrigger element
   */
  className?: string;
  
  /**
   * Badge to display alongside the label
   */
  badge?: React.ReactNode;
  
  /**
   * Icon to display before the label
   */
  icon?: React.ReactNode;
  
  /**
   * Accessible description for the tab
   * This will be passed to aria-description
   */
  description?: string;
  
  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * The button that activates its associated content.
 */
export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(({
  className,
  badge,
  icon,
  children,
  description,
  ...props
}, ref) => {
  // Detect if we need to apply RTL text fixes
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Generate a unique ID for the description if provided
  const descriptionId = description ? `tabs-desc-${React.useId()}` : undefined;

  return (
    <RadixTabs.Trigger
      ref={ref}
      className={clsx(
        styles.tabsTrigger,
        className
      )}
      aria-describedby={descriptionId}
      {...props}
    >
      {icon && <span className={styles.tabsIcon} aria-hidden="true">{icon}</span>}
      <span className={styles.tabsLabel} style={lineHeightStyle}>{children}</span>
      {badge && <span className={styles.tabsBadge} aria-label={`${badge} items`}>{badge}</span>}
      {description && <span id={descriptionId} style={{ display: 'none' }}>{description}</span>}
    </RadixTabs.Trigger>
  );
});

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends RadixTabs.TabsContentProps {
  /**
   * Class name for the TabsContent element
   */
  className?: string;

  /**
   * Children components
   */
  children: React.ReactNode;
}

/**
 * Contains the content associated with each trigger.
 */
export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({
  className,
  children,
  ...props
}, ref) => {
  return (
    <RadixTabs.Content
      ref={ref}
      className={clsx(
        styles.tabsContent,
        className
      )}
      tabIndex={0} // Ensure focus can be set to the content
      {...props}
    >
      {children}
    </RadixTabs.Content>
  );
});

TabsContent.displayName = 'TabsContent';

export interface TabsRootProps extends RadixTabs.TabsProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * The root container for the tabs component.
 */
export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(({
  className,
  children,
  ...props
}, ref) => {
  return <RadixTabs.Root ref={ref} className={className} {...props}>{children}</RadixTabs.Root>;
});

TabsRoot.displayName = 'TabsRoot';

// Export all components
export { 
  TabsRoot as Root,
  TabsList as List,
  TabsTrigger as Trigger,
  TabsContent as Content
};

// Export variants/sizes for storybook
export const tabsVariants = ['primary', 'secondary'] as const;
export const tabsCounts = [2, 3, 4, 5, 6] as const;
export const tabsOrientations = ['horizontal', 'vertical'] as const;

// Export shared functions (for testing/stories)
export const getTabStateClass = (isHovered: boolean, isActive: boolean, isDisabled: boolean) => {
  if (isDisabled) return 'disabled';
  if (isActive) return 'active';
  if (isHovered) return 'hover';
  return 'rest';
};
