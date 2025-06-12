import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from './Toast.module.css';

export type ToastType = 'default' | 'success' | 'error';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastProps {
  /** The type of toast that affects styling and icon */
  type?: ToastType;
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
  /** Callback when toast is dismissed */
  onOpenChange?: (open: boolean) => void;
  /** Whether the toast is open */
  open?: boolean;
  /** Additional CSS class name */
  className?: string;
}

export interface ToastViewportProps {
  /** Position of the toast viewport */
  position?: ToastPosition;
  /** Additional CSS class name */
  className?: string;
}


export const toastTypes: ToastType[] = ['default', 'success', 'error'];
export const toastPositions: ToastPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport: React.FC<ToastViewportProps> = ({ 
  position = 'bottom-left',
  className 
}) => {
  // Force re-mount when position changes to ensure proper positioning
  return (
    <ToastPrimitive.Viewport 
      key={position} // This ensures re-mount when position changes
      className={clsx(styles.viewport, styles[`viewport-${position}`], className)}
    />
  );
};

const getIcon = (type: ToastType) => {
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

export const Toast: React.FC<ToastProps> = ({
  type = 'default',
  title,
  description,
  showDescription = true,
  showClose = true,
  showIcon = true,
  iconWithBackground = true,
  duration = 5000,
  onOpenChange,
  open,
  className,
}) => {
  // Detect RTL direction for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');

  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  return (
    <ToastPrimitive.Root
      className={clsx(styles.root, styles[type], className)}
      duration={duration}
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className={styles.content}>
        {showIcon && (
          <div className={clsx(styles.icon, iconWithBackground && styles.iconWithBackground)}>
            {getIcon(type)}
          </div>
        )}
        
        <div className={styles.text}>
          <ToastPrimitive.Title className={styles.title} style={lineHeightStyle}>
            {title}
          </ToastPrimitive.Title>
          
          {description && showDescription && (
            <ToastPrimitive.Description className={styles.description} style={lineHeightStyle}>
              {description}
            </ToastPrimitive.Description>
          )}
        </div>
        
        {showClose && (
          <ToastPrimitive.Close className={styles.close} aria-label="Close toast">
            <IconX size={20} />
          </ToastPrimitive.Close>
        )}
      </div>
    </ToastPrimitive.Root>
  );
};

Toast.displayName = 'Toast';