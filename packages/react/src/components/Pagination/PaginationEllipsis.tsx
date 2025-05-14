import React from 'react';
import styles from './PaginationEllipsis.module.css';

export const PaginationEllipsis: React.FC = () => {
  return (
    <div className={styles.ellipsis} aria-hidden="true">•••</div>
  );
};
