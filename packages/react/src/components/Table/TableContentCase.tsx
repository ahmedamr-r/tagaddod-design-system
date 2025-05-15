import React from 'react';
import clsx from 'clsx';
import { 
  IconCloudOff, 
  IconPackageOff, 
  IconSearch, 
  IconLoader2
} from '@tabler/icons-react';
import styles from './Table.module.css';
import { TableContentCaseProps } from './types';

export const TableContentCase: React.FC<TableContentCaseProps> = ({
  type,
  message,
}) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Default messages for different states
  const defaultMessages = {
    error: isRTL 
      ? 'خطأ في استرجاع البيانات. لا تقلق، هذا خطأنا. يرجى المحاولة مرة أخرى لاحقاً'
      : 'Error in data retrieving. Don\'t worry, it\'s our fault. Please try again later',
    empty: isRTL 
      ? 'لا توجد سجلات للعرض'
      : 'There are no records to display.',
    notFound: isRTL 
      ? 'لا توجد نتائج متاحة للعنصر المطلوب'
      : 'No available results for the searched item',
    loading: isRTL 
      ? 'جارٍ تحميل البيانات...'
      : 'Loading data...',
  };

  // Determine which icon to show
  const renderIcon = () => {
    switch (type) {
      case 'error':
        return <IconCloudOff size={48} className={styles.contentCaseIcon} />;
      case 'empty':
        return <IconPackageOff size={48} className={styles.contentCaseIcon} />;
      case 'notFound':
        return <IconSearch size={48} className={styles.contentCaseIcon} />;
      case 'loading':
        return <IconLoader2 size={48} className={clsx(styles.contentCaseIcon, styles.spinnerIcon)} />;
      default:
        return null;
    }
  };

  // Get the message to display
  const displayMessage = message || defaultMessages[type];

  return (
    <div className={styles.contentCaseContainer}>
      <div className={styles.contentCaseContent}>
        {renderIcon()}
        <p className={styles.contentCaseMessage} style={lineHeightStyle}>
          {displayMessage}
        </p>
      </div>
    </div>
  );
};
