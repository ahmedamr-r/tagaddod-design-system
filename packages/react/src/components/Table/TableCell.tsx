import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.css';
import { TableCellProps } from './types';

export const TableCell: React.FC<TableCellProps> = ({
  children,
  isStriped = false,
  isGridCell = false,
  className = '',
  onClick,
}) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  return (
    <td 
      className={clsx(
        styles.tableCell,
        isStriped && styles.striped,
        isGridCell && styles.gridCell,
        className
      )}
      onClick={onClick}
    >
      {typeof children === 'string' ? (
        <span className={styles.cellText} style={lineHeightStyle}>
          {children}
        </span>
      ) : (
        children
      )}
    </td>
  );
};
