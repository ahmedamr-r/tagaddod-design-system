import React from 'react';
import clsx from 'clsx';
import { IconChevronDown, IconChevronUp, IconHelp } from '@tabler/icons-react';
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
  const handleSort = () => {
    if (isSortable && onSort) {
      onSort();
    }
  };

  // Handle checkbox click to prevent propagation
  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent cell click when clicking checkbox
  };

  // Helper to render sort icons
  const renderSortIcon = () => {
    if (!isSortable) return null;
    
    if (sortDirection === 'asc') {
      return <IconChevronUp className={styles.sortIcon} size={16} />;
    }
    
    if (sortDirection === 'desc') {
      return <IconChevronDown className={styles.sortIcon} size={16} />;
    }
    
    // Default sort icon (neutral state)
    return (
      <span className={styles.sortIconDefault}>
        <IconChevronUp className={styles.sortIconInactive} size={16} />
      </span>
    );
  };

  return (
    <th 
      className={clsx(
        styles.tableHeaderCell,
        isSortable && styles.sortable,
        className
      )}
      onClick={isSortable ? handleSort : undefined}
    >
      <div className={styles.headerCellContent}>
        {showCheckbox && (
          <div className={styles.headerCheckbox}>
            <Checkbox
              checked={isChecked}
              onCheckedChange={(checked) => onCheckboxChange?.(checked === true)}
              // Use the typesafe event handler
              onClick={handleCheckboxClick}
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
