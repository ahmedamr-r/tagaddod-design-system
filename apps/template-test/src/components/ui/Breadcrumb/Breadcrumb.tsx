import React from 'react';
import clsx from 'clsx';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  /**
   * The label text to display for this breadcrumb item
   */
  label: string;
  /**
   * The URL to navigate to when clicking this item
   * If not provided, the item will not be clickable
   */
  href?: string;
  /**
   * Optional click handler for the breadcrumb item
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Array of breadcrumb items to display
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator element (defaults to chevron icons)
   */
  separator?: React.ReactNode;
  /**
   * Additional class names to apply to the breadcrumb container
   */
  className?: string;
  /**
   * Maximum number of items to show before collapsing
   * Items in the middle will be replaced with "..."
   */
  maxItems?: number;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
  maxItems,
  ...props
}) => {
  // Detect RTL direction
  const isRTL = typeof document !== 'undefined' &&
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Default separator based on direction
  const defaultSeparator = isRTL ? (
    <IconChevronLeft size={16} />
  ) : (
    <IconChevronRight size={16} />
  );

  // Handle maxItems collapsing
  const getDisplayItems = () => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    // Show first item, "...", and last items
    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 2));

    return [
      firstItem,
      { label: '...', href: undefined },
      ...lastItems
    ];
  };

  const displayItems = getDisplayItems();

  const renderItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === displayItems.length - 1;
    const isCollapsed = item.label === '...';

    const itemContent = (
      <span className={styles.label} style={lineHeightStyle}>
        {item.label}
      </span>
    );

    return (
      <li key={index} className={styles.item}>
        {item.href && !isLast && !isCollapsed ? (
          <a
            href={item.href}
            onClick={item.onClick}
            className={clsx(styles.link, !isLast && styles.linkActive)}
            style={lineHeightStyle}
          >
            {itemContent}
          </a>
        ) : (
          <span
            className={clsx(styles.text, isLast && styles.current)}
            onClick={isCollapsed ? undefined : item.onClick}
            style={lineHeightStyle}
          >
            {itemContent}
          </span>
        )}
        {!isLast && (
          <span className={styles.separator} aria-hidden="true">
            {separator || defaultSeparator}
          </span>
        )}
      </li>
    );
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(styles.breadcrumb, className)}
      {...props}
    >
      <ol className={styles.list}>
        {displayItems.map((item, index) => renderItem(item, index))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
