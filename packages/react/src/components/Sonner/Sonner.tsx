'use client';

import React from 'react';
import { toast as sonnerToast, Toaster } from 'sonner';
import { IconCheck, IconX, IconAlertTriangle, IconLoader } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from './Sonner.module.css';

// Export types
export type SonnerType = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'custom';
export type SonnerPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export interface SonnerToastOptions {
  id?: string | number;
  title?: string;
  description?: string;
  duration?: number;
  dismissible?: boolean;
  icon?: React.ReactNode;
  iconBackground?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
  onAutoClose?: () => void;
}

export interface SonnerProps {
  position?: SonnerPosition;
  hotkey?: string[];
  richColors?: boolean;
  expand?: boolean;
  duration?: number;
  visibleToasts?: number;
  closeButton?: boolean;
  toastOptions?: SonnerToastOptions;
  className?: string;
  style?: React.CSSProperties;
  offset?: string | number;
  theme?: 'light' | 'dark' | 'system';
  gap?: number;
  loadingIcon?: React.ReactNode;
  icons?: {
    success?: React.ReactNode;
    info?: React.ReactNode;
    warning?: React.ReactNode;
    error?: React.ReactNode;
    loading?: React.ReactNode;
  };
}

// Toast Props Interface
interface ToastProps {
  id: string | number;
  title?: string;
  description?: string;
  type?: SonnerType;
  icon?: React.ReactNode;
  iconBackground?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
}

/** A fully custom toast that maintains animations and interactions. */
function Toast(props: ToastProps) {
  const { 
    id, 
    title, 
    description, 
    type = 'info',
    icon,
    iconBackground = true,
    action,
    cancel
  } = props;

  // Detect RTL for line-height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Get default icon based on type
  const getTypeIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'success':
        return <IconCheck className={styles.icon} />;
      case 'error':
        return <IconX className={styles.icon} />;
      case 'warning':
        return <IconAlertTriangle className={styles.icon} />;
      case 'loading':
        return <IconLoader className={clsx(styles.icon, styles.spinning)} />;
      default:
        return null;
    }
  };

  return (
    <div className={clsx(styles.toast, styles[type])}>
      <div className={styles.mainContent}>
        {getTypeIcon() && (
          <div className={clsx(
            styles.iconContainer,
            iconBackground && styles.iconWithBackground
          )}>
            {getTypeIcon()}
          </div>
        )}
        
        <div className={styles.textContent}>
          {title && (
            <div className={styles.title} style={lineHeightStyle}>
              {title}
            </div>
          )}
          {description && (
            <div className={styles.description} style={lineHeightStyle}>
              {description}
            </div>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        {action && (
          <button
            className={clsx(styles.button, styles.actionButton)}
            onClick={() => {
              action.onClick();
              sonnerToast.dismiss(id);
            }}
            style={lineHeightStyle}
          >
            {action.label}
          </button>
        )}
        
        {/* Close button */}
        <button
          className={styles.closeButton}
          onClick={() => sonnerToast.dismiss(id)}
          aria-label="Close toast"
        >
          <IconX className={styles.closeIcon} />
        </button>
      </div>

      {cancel && (
        <div className={styles.bottomActions}>
          <button
            className={clsx(styles.button, styles.cancelButton)}
            onClick={() => {
              cancel.onClick();
              sonnerToast.dismiss(id);
            }}
            style={lineHeightStyle}
          >
            {cancel.label}
          </button>
        </div>
      )}
    </div>
  );
}

/** I recommend abstracting the toast function so that you can call it without having to use toast.custom everytime. */
function toast(toastOptions: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toastOptions.title}
      description={toastOptions.description}
      type={toastOptions.type}
      icon={toastOptions.icon}
      iconBackground={toastOptions.iconBackground}
      action={toastOptions.action}
      cancel={toastOptions.cancel}
    />
  ));
}

// Convenience methods
export const showSonner = {
  success: (options: SonnerToastOptions) => toast({ ...options, type: 'success' }),
  error: (options: SonnerToastOptions) => toast({ ...options, type: 'error' }),
  warning: (options: SonnerToastOptions) => toast({ ...options, type: 'warning' }),
  info: (options: SonnerToastOptions) => toast({ ...options, type: 'info' }),
  loading: (options: SonnerToastOptions) => toast({ ...options, type: 'loading' }),
  custom: (options: SonnerToastOptions) => toast({ ...options, type: 'custom' }),
  dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  dismissAll: () => sonnerToast.dismiss(),
};

// Main Sonner Toaster Component
export const Sonner: React.FC<SonnerProps> = ({
  position = 'bottom-right',
  theme = 'system',
  className,
  richColors = true,
  expand = false,
  duration = 4000,
  visibleToasts = 3,
  closeButton = false,
  gap = 14,
  offset,
  icons,
  ...props
}) => {
  return (
    <Toaster
      position={position}
      richColors={richColors}
      expand={expand}
      duration={duration}
      visibleToasts={visibleToasts}
      closeButton={closeButton}
      theme={theme}
      className={clsx(styles.toaster, className)}
      gap={gap}
      offset={offset}
      dir="auto" // Support RTL/LTR automatically
      icons={{
        success: icons?.success || <IconCheck />,
        info: icons?.info,
        warning: icons?.warning || <IconAlertTriangle />,
        error: icons?.error || <IconX />,
        loading: icons?.loading || <IconLoader className={styles.spinning} />,
      }}
      {...props}
    />
  );
};

// Alternative exports
export const ToasterSonner = Sonner;
export const SonnerToaster = Sonner;

// Export constants for external use
export const sonnerTypes: SonnerType[] = ['success', 'error', 'warning', 'info', 'loading', 'custom'];
export const sonnerPositions: SonnerPosition[] = [
  'top-left', 
  'top-center', 
  'top-right', 
  'bottom-left', 
  'bottom-center', 
  'bottom-right'
]; 