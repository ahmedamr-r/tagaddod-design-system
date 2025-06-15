import React from 'react';
import { Toaster, toast } from 'sonner';
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from './Sonner.module.css';

export type SonnerType = 'default' | 'success' | 'error';
export type SonnerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface SonnerProps {
  /** Position of the toaster */
  position?: SonnerPosition;
  /** Whether to use rich colors */
  richColors?: boolean;
  /** Maximum number of toasts to show */
  visibleToasts?: number;
  /** Whether toasts are closable */
  closeButton?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Whether to expand toasts */
  expand?: boolean;
  /** Duration in milliseconds before auto-close (0 = no auto-close) */
  duration?: number;
  /** Theme for the toaster */
  theme?: 'light' | 'dark' | 'system';
  /** Text direction */
  dir?: 'ltr' | 'rtl' | 'auto';
}

export interface SonnerToastOptions {
  /** The type of toast that affects styling and icon */
  type?: SonnerType;
  /** The main title of the toast */
  title: string;
  /** Optional description text */
  description?: string;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Whether to show an icon */
  showIcon?: boolean;
  /** Whether the icon has a background container */
  iconWithBackground?: boolean;
  /** Duration in milliseconds before auto-close (0 = no auto-close) */
  duration?: number;
  /** Additional CSS class name */
  className?: string;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Action button configuration */
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const sonnerTypes: SonnerType[] = ['default', 'success', 'error'];
export const sonnerPositions: SonnerPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const getIcon = (type: SonnerType) => {
  switch (type) {
    case 'success':
      return <IconCheck size={20} />;
    case 'error':
      return <IconAlertTriangle size={20} />;
    case 'default':
    default:
      return <IconInfoCircle size={20} />;
  }
};

// Main Toaster component following official Sonner patterns
export const Sonner: React.FC<SonnerProps> = ({
  position = 'bottom-right',
  richColors = false,
  visibleToasts = 5,
  closeButton = true,
  className,
  expand = true,
  duration = 4000,
  theme = 'light',
  dir = 'auto',
  ...props
}) => {
  return (
    <Toaster
      position={position}
      richColors={richColors}
      visibleToasts={visibleToasts}
      closeButton={closeButton}
      expand={expand}
      duration={duration}
      theme={theme}
      dir={dir}
      className={clsx(styles.toaster, className)}
      toastOptions={{
        className: styles.toast,
        classNames: {
          toast: styles.toast,
          title: styles.title,
          description: styles.description,
          closeButton: styles.closeButton,
          success: styles.success,
          error: styles.error,
          info: styles.default,
          warning: styles.default,
        },
      }}
      {...props}
    />
  );
};

// Function to show toast with custom content following Toast component patterns
export const showSonner = (options: SonnerToastOptions): string | number => {
  const {
    type = 'default',
    title,
    description,
    showDescription = true,
    showClose = true,
    showIcon = true,
    iconWithBackground = true,
    duration = 4000,
    className,
    onDismiss,
    action,
  } = options;

  // Detect RTL direction for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Create custom toast content with same structure as Toast component
  const ToastContent = () => (
    <div className={clsx(styles.content, styles[type])}>
      {showIcon && (
        <div className={clsx(styles.icon, iconWithBackground && styles.iconWithBackground)}>
          {getIcon(type)}
        </div>
      )}
      
      <div className={styles.text}>
        <div className={styles.customTitle} style={lineHeightStyle}>
          {title}
        </div>
        
        {description && showDescription && (
          <div className={styles.customDescription} style={lineHeightStyle}>
            {description}
          </div>
        )}
      </div>
      
      {showClose && (
        <button className={styles.customClose} aria-label="Close toast">
          <IconX size={20} />
        </button>
      )}
    </div>
  );

  // Toast options
  const toastOptions = {
    duration: duration === 0 ? Infinity : duration,
    onDismiss,
    className: clsx(styles.customToast, className),
    ...(action && {
      action: {
        label: action.label,
        onClick: action.onClick,
      },
    }),
  };

  // Use appropriate Sonner method based on type
  switch (type) {
    case 'success':
      return toast.success(<ToastContent />, toastOptions);
    case 'error':
      return toast.error(<ToastContent />, toastOptions);
    case 'default':
    default:
      return toast(<ToastContent />, toastOptions);
  }
};

// Alternative export names for flexibility
export const ToasterSonner = Sonner;
export const SonnerToaster = Sonner;

Sonner.displayName = 'Sonner';