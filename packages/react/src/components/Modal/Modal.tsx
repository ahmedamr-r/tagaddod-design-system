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
  footerStyle?: 'default' | 'style1' | 'style2';
  cancelLabel?: string;
  confirmLabel?: string;
  size?: 'default' | 'fullscreen';
  rtl?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Modal = ({
  children,
  trigger,
  title = 'Title',
  showTitle = true,
  showFooter = true,
  footerStyle = 'default',
  cancelLabel = 'Cancel',
  confirmLabel = 'Label',
  size = 'default',
  rtl = false,
  onCancel,
  onConfirm,
  ...props
}: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content 
          className={clsx(styles.content, {
            [styles.fullscreen]: size === 'fullscreen',
            [styles.rtl]: rtl
          })}
          dir={rtl ? 'rtl' : 'ltr'}
        >
          {showTitle && (
            <div className={styles.header}>
              <Dialog.Title className={styles.title}>
                {title}
              </Dialog.Title>
              <Dialog.Close className={styles.closeButton} aria-label="Close">
                <IconX size={18} />
              </Dialog.Close>
            </div>
          )}
          
          <div className={styles.body}>
            {children}
          </div>
          
          {showFooter && (
            <div className={clsx(styles.footer, styles[`footerStyle${footerStyle.charAt(0).toUpperCase() + footerStyle.slice(1)}`])}>
              {footerStyle === 'default' && (
                <>
                  <Button 
                    variant="secondary" 
                    onClick={onCancel}
                  >
                    {cancelLabel}
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={onConfirm}
                  >
                    {confirmLabel}
                  </Button>
                </>
              )}
              {footerStyle === 'style1' && (
                <>
                  <div className={styles.footerSwapArea}>Swap</div>
                  <div className={styles.footerButtonGroup}>
                    <Button 
                      variant="secondary" 
                      onClick={onCancel}
                    >
                      {cancelLabel}
                    </Button>
                    <Button 
                      variant="primary" 
                      onClick={onConfirm}
                    >
                      {confirmLabel}
                    </Button>
                  </div>
                </>
              )}
              {footerStyle === 'style2' && (
                <div className={styles.footerButtonGroup}>
                  <Button 
                    variant="secondary" 
                    onClick={onCancel}
                  >
                    {cancelLabel}
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={onConfirm}
                  >
                    {confirmLabel}
                  </Button>
                </div>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;