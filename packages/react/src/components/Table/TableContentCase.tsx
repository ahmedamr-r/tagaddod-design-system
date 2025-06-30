import React from 'react';
import clsx from 'clsx';
import { 
  IconCloudOff, 
  IconPackageOff, 
  IconSearchOff, 
  IconLoader2
} from '@tabler/icons-react';
import styles from './Table.module.css';
import { TableContentCaseProps } from './types';

export const TableContentCase: React.FC<TableContentCaseProps> = ({
  type,
  message,
  subtitle,
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
    const iconElement = (() => {
      switch (type) {
        case 'error':
          return <IconCloudOff size={32} stroke={2} className={styles.contentCaseIcon} />;
        case 'empty':
          return <IconPackageOff size={32} stroke={2} className={styles.contentCaseIcon} />;
        case 'notFound':
          return <IconSearchOff size={32} stroke={2} className={styles.contentCaseIcon} />;
        case 'loading':
          return <IconLoader2 size={32} stroke={2} className={clsx(styles.contentCaseIcon, styles.spinnerIcon)} />;
        default:
          return null;
      }
    })();

    if (!iconElement) return null;

    return (
      <div className={styles.contentCaseIconWrapper}>
        {iconElement}
      </div>
    );
  };

  // Get the message to display
  const displayMessage = message || defaultMessages[type];

  // Render message content based on type
  const renderMessageContent = () => {
    if (type === 'notFound') {
      const defaultTitle = isRTL 
        ? 'لا توجد نتائج متاحة للعنصر "{المطلوب}"'
        : 'No available results for "{Searched item}"';
      const defaultSubtitle = isRTL 
        ? 'جرب استخدام مصطلحات بحث مختلفة أو تحقق من الإملاء'
        : 'Try using different search terms or check your spelling';
      
      return (
        <div className={styles.contentCaseNotFoundContent}>
          <h3 className={styles.contentCaseNotFoundTitle} style={lineHeightStyle}>
            {message || defaultTitle}
          </h3>
          <p className={styles.contentCaseNotFoundSubtitle} style={lineHeightStyle}>
            {subtitle || defaultSubtitle}
          </p>
        </div>
      );
    }
    
    return (
      <p className={styles.contentCaseMessage} style={lineHeightStyle}>
        {displayMessage}
      </p>
    );
  };

  return (
    <div className={styles.contentCaseContainer}>
      <div className={styles.contentCaseContent}>
        {renderIcon()}
        {renderMessageContent()}
      </div>
    </div>
  );
};
