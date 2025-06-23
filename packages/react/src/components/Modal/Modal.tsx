import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { IconX } from '@tabler/icons-react';
import styles from './Modal.module.css';

export interface ModalProps extends React.ComponentPropsWithoutRef<typeof Dialog.Root> {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  showTitle?: boolean;
  showFooter?: boolean;
  footerVariant?: 'cancelAndActions' | 'swapAndActions' | 'actionsOnly';
  cancelLabel?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  swapContent?: React.ReactNode;
  size?: 'default' | 'fullscreen';
  width?: 'small' | 'medium' | 'large' | 'custom';
  customWidth?: string;
  minWidth?: string;
  maxWidth?: string;
  contentPadding?: string;
  rtl?: boolean;
  onCancel?: () => void;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export const Modal = ({
  children,
  trigger,
  title = 'Title',
  showTitle = true,
  showFooter = true,
  footerVariant = 'cancelAndActions',
  cancelLabel = 'Cancel',
  primaryLabel = 'Label',
  secondaryLabel = 'Label',
  showPrimaryButton = true,
  showSecondaryButton = true,
  swapContent,
  size = 'default',
  width = 'medium',
  customWidth,
  minWidth,
  maxWidth,
  contentPadding = 'var(--t-space-500)',
  rtl = false,
  onCancel,
  onPrimary,
  onSecondary,
  ...props
}: ModalProps) => {
  // Detect RTL for line height adjustments
  const isRTL = typeof document !== 'undefined' && 
    (document.dir === 'rtl' || document.documentElement.dir === 'rtl');
  
  // Apply line height style based on text direction
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Create custom style object for width variants
  const getCustomStyles = () => {
    const customStyles: React.CSSProperties = {};
    
    if (width === 'custom' && customWidth) {
      customStyles.width = customWidth;
    }
    
    if (minWidth) {
      customStyles.minWidth = minWidth;
    }
    
    if (maxWidth) {
      customStyles.maxWidth = maxWidth;
    }
    
    return customStyles;
  };

  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content 
          className={clsx(styles.content, {
            [styles.fullscreen]: size === 'fullscreen',
            [styles.widthSmall]: width === 'small',
            [styles.widthMedium]: width === 'medium',
            [styles.widthLarge]: width === 'large',
            [styles.rtl]: rtl
          })}
          style={getCustomStyles()}
          dir={rtl ? 'rtl' : 'ltr'}
        >
          {showTitle && (
            <div className={styles.header}>
              <Dialog.Title className={styles.title} style={lineHeightStyle}>
                {title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button
                  variant="tertiary"
                  tone="neutral"
                  size="micro"
                  prefixIcon={<IconX size={16} />}
                  aria-label="Close"
                  className={styles.closeButton}
                />
              </Dialog.Close>
            </div>
          )}
          
          <div className={styles.body} style={{ padding: contentPadding }}>
            {children}
          </div>
          
          {showFooter && (
            <div className={clsx(styles.footer, styles[`footer${footerVariant.charAt(0).toUpperCase() + footerVariant.slice(1)}`])}>
              {isRTL ? (
                // RTL: Render in reversed order
                <>
                  {footerVariant === 'cancelAndActions' && (
                    <>
                      {/* RTL: Action buttons on the left */}
                      <div className={styles.footerLeft}>
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                        {showSecondaryButton && (
                          <Button 
                            variant="secondary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                      </div>
                      {/* RTL: Cancel button on the right */}
                      <div className={styles.footerRight}>
                        <Dialog.Close asChild>
                          <Button 
                            variant="plain" 
                            tone="neutral"
                            onClick={onCancel}
                            style={lineHeightStyle}
                          >
                            {cancelLabel}
                          </Button>
                        </Dialog.Close>
                      </div>
                    </>
                  )}
                  {footerVariant === 'swapAndActions' && (
                    <>
                      {/* RTL: Action buttons on the left */}
                      <div className={styles.footerLeft}>
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                        {showSecondaryButton && (
                          <Button 
                            variant="secondary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                      </div>
                      {/* RTL: Swap content on the right */}
                      <div className={styles.footerRight}>
                        {swapContent || <div className={styles.footerSwapArea} style={lineHeightStyle}>Swap</div>}
                      </div>
                    </>
                  )}
                  {footerVariant === 'actionsOnly' && (
                    <div className={styles.footerLeft}>
                      {showPrimaryButton && (
                        <Button 
                          variant="primary" 
                          onClick={onPrimary}
                          style={lineHeightStyle}
                        >
                          {primaryLabel}
                        </Button>
                      )}
                      {showSecondaryButton && (
                        <Button 
                          variant="secondary" 
                          onClick={onSecondary}
                          style={lineHeightStyle}
                        >
                          {secondaryLabel}
                        </Button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                // LTR: Normal order
                <>
                  {footerVariant === 'cancelAndActions' && (
                    <>
                      <div className={styles.footerLeft}>
                        <Dialog.Close asChild>
                          <Button 
                            variant="plain" 
                            tone="neutral"
                            onClick={onCancel}
                            style={lineHeightStyle}
                          >
                            {cancelLabel}
                          </Button>
                        </Dialog.Close>
                      </div>
                      <div className={styles.footerRight}>
                        {showSecondaryButton && (
                          <Button 
                            variant="secondary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                  {footerVariant === 'swapAndActions' && (
                    <>
                      <div className={styles.footerLeft}>
                        {swapContent || <div className={styles.footerSwapArea} style={lineHeightStyle}>Swap</div>}
                      </div>
                      <div className={styles.footerRight}>
                        {showSecondaryButton && (
                          <Button 
                            variant="secondary" 
                            onClick={onSecondary}
                            style={lineHeightStyle}
                          >
                            {secondaryLabel}
                          </Button>
                        )}
                        {showPrimaryButton && (
                          <Button 
                            variant="primary" 
                            onClick={onPrimary}
                            style={lineHeightStyle}
                          >
                            {primaryLabel}
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                  {footerVariant === 'actionsOnly' && (
                    <div className={styles.footerRight}>
                      {showSecondaryButton && (
                        <Button 
                          variant="secondary" 
                          onClick={onSecondary}
                          style={lineHeightStyle}
                        >
                          {secondaryLabel}
                        </Button>
                      )}
                      {showPrimaryButton && (
                        <Button 
                          variant="primary" 
                          onClick={onPrimary}
                          style={lineHeightStyle}
                        >
                          {primaryLabel}
                        </Button>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;