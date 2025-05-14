import React from 'react';
import clsx from 'clsx';
import styles from './PaginationItem.module.css';

export interface PaginationItemProps {
  /**
   * Page number
   */
  page: number;
  
  /**
   * Whether this is the current page
   */
  isCurrent?: boolean;
  
  /**
   * Click handler
   */
  onClick?: (page: number) => void;
  
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  page,
  isCurrent = false,
  onClick,
  disabled = false,
}) => {
  // RTL detection for line height
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
  return (
    <button 
      className={clsx(
        styles.item,
        isCurrent && styles.current,
        disabled && styles.disabled
      )}
      onClick={() => !disabled && onClick?.(page)}
      disabled={disabled}
      aria-current={isCurrent ? 'page' : undefined}
      type="button"
    >
      <span className={styles.text} style={lineHeightStyle}>{page}</span>
    </button>
  );
};
