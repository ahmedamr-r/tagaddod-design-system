import React from 'react';
import clsx from 'clsx';
import styles from './PaginationNav.module.css';

export interface PaginationNavProps {
  /**
   * Click handler
   */
  onClick: () => void;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Direction: 'prev' or 'next'
   */
  direction: 'prev' | 'next';
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
  onClick,
  disabled = false,
  direction,
}) => {
  return (
    <button 
      className={clsx(styles.nav, disabled && styles.disabled)}
      onClick={() => !disabled && onClick()}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous page' : 'Next page'}
      type="button"
    >
      <span className={styles.icon}>
        {direction === 'prev' ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
    </button>
  );
};

export const PaginationPrev: React.FC<Omit<PaginationNavProps, 'direction'>> = (props) => {
  return <PaginationNav {...props} direction="prev" />;
};

export const PaginationNext: React.FC<Omit<PaginationNavProps, 'direction'>> = (props) => {
  return <PaginationNav {...props} direction="next" />;
};
