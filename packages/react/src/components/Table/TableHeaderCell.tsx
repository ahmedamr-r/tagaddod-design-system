import React from 'react';
import clsx from 'clsx';
import { IconArrowDown, IconArrowUp, IconHelp } from '@tabler/icons-react';
import { Checkbox } from '../Checkbox';
import styles from './Table.module.css';
import { TableHeaderCellProps } from './types';

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  isSortable = false,
  sortDirection = false,
  onSort,
  showCheckbox = false,
  isChecked = false,
  onCheckboxChange,
  showHelp = false,
  helpText,
  className = '',
}) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Handle sort click, wrapped to handle event parameter
  const handleSort = (e: React.MouseEvent) => {
    if (isSortable && onSort) {
      e.preventDefault();
      onSort();
    }
  };

  // Handle checkbox change to prevent propagation
  const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
    onCheckboxChange?.(checked === true);
  };

  // Helper to render sort icons
  const renderSortIcon = () => {
    if (!isSortable) return null;
    
    if (sortDirection === 'asc') {
      return <IconArrowUp className={styles.sortIcon} size={16} />;
    }
    
    if (sortDirection === 'desc') {
      return <IconArrowDown className={styles.sortIcon} size={16} />;
    }
    
    // Default sort icon (neutral state)
    return (
      <span className={styles.sortIconDefault}>
        <IconArrowUp className={styles.sortIconInactive} size={16} />
      </span>
    );
  };

  return (
    <th 
      className={clsx(
        styles.tableHeaderCell,
        isSortable && styles.sortable,
        isSortable && sortDirection && styles.activeSorted,
        className
      )}
      onClick={isSortable ? handleSort : undefined}
      role={isSortable ? "button" : undefined}
      tabIndex={isSortable ? 0 : undefined}
      aria-sort={sortDirection ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}
    >
      <div className={styles.headerCellContent}>
        {showCheckbox && (
          <div className={styles.headerCheckbox}>
            <Checkbox
              checked={isChecked}
              onCheckedChange={handleCheckboxChange}
            />
          </div>
        )}
        
        {typeof children === 'string' ? (
          <span className={styles.headerCellLabel} style={lineHeightStyle}>
            {children}
          </span>
        ) : (
          children
        )}
        
        {isSortable && renderSortIcon()}
        
        {showHelp && helpText && (
          <div className={styles.helpIconWrapper} title={helpText}>
            <IconHelp className={styles.helpIcon} size={16} />
          </div>
        )}
      </div>
    </th>
  );
};
