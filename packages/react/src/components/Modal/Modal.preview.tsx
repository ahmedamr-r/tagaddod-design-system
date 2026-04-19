import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../Button/Button';

const modalSizes = ['default', 'fullscreen'] as const;
const modalWidths = ['small', 'medium', 'large', 'custom'] as const;
const footerVariants = ['cancelAndActions', 'swapAndActions', 'actionsOnly'] as const;

export const preview: PreviewModule<ModalProps> = {
  name: 'Modal',
  slug: 'modal',
  description: 'Dialog overlay with title, scrollable body, and configurable footer variants.',
  component: Modal,
  defaultProps: {
    title: 'Delete project',
    trigger: <Button variant="primary">Open modal</Button>,
    primaryLabel: 'Delete',
    secondaryLabel: 'Archive',
    cancelLabel: 'Cancel',
    size: 'default',
    width: 'medium',
    showTitle: true,
    showFooter: true,
    showPrimaryButton: true,
    showSecondaryButton: true,
    footerVariant: 'cancelAndActions',
    children: (
      <p style={{ margin: 0 }}>
        This action cannot be undone. The project and all associated data will be permanently
        deleted.
      </p>
    ),
  },
  controls: {
    title: { type: 'text', description: 'Dialog title' },
    size: { type: 'select', options: modalSizes, description: 'Default or fullscreen' },
    width: { type: 'select', options: modalWidths, description: 'Width preset' },
    footerVariant: { type: 'select', options: footerVariants, description: 'Footer layout' },
    primaryLabel: { type: 'text', description: 'Primary button label' },
    secondaryLabel: { type: 'text', description: 'Secondary button label' },
    cancelLabel: { type: 'text', description: 'Cancel button label' },
    showTitle: { type: 'boolean', description: 'Show the header bar' },
    showFooter: { type: 'boolean', description: 'Show the footer bar' },
    showPrimaryButton: { type: 'boolean', description: 'Show the primary button' },
    showSecondaryButton: { type: 'boolean', description: 'Show the secondary button' },
    scrollable: { type: 'boolean', description: 'Enable internal scroll for long content' },
  },
  examples: [
    {
      name: 'Confirmation',
      props: {},
      render: () => (
        <Modal
          trigger={<Button variant="primary" tone="critical">Delete account</Button>}
          title="Delete account"
          primaryLabel="Delete"
          cancelLabel="Cancel"
          showSecondaryButton={false}
        >
          <p style={{ margin: 0 }}>
            Are you sure you want to permanently delete your account? This action cannot be undone.
          </p>
        </Modal>
      ),
    },
    {
      name: 'ControlledOpen',
      description: 'Controlled open state managed from the parent.',
      props: {},
      render: () => {
        const ControlledDemo = () => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button onClick={() => setOpen(true)}>Open controlled modal</Button>
              <Modal
                open={open}
                onOpenChange={setOpen}
                title="Controlled"
                primaryLabel="Save"
                onPrimary={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                showSecondaryButton={false}
              >
                <p style={{ margin: 0 }}>The open prop is managed externally.</p>
              </Modal>
            </>
          );
        };
        return <ControlledDemo />;
      },
    },
    {
      name: 'Scrollable',
      props: {},
      render: () => (
        <Modal
          trigger={<Button variant="outlined">Read policy</Button>}
          title="Privacy policy"
          primaryLabel="Accept"
          cancelLabel="Close"
          showSecondaryButton={false}
          scrollable
        >
          <div>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Section {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            ))}
          </div>
        </Modal>
      ),
    },
    {
      name: 'ActionsOnly',
      props: {},
      render: () => (
        <Modal
          trigger={<Button variant="tonal">Configure</Button>}
          title="Configure workspace"
          footerVariant="actionsOnly"
          primaryLabel="Save"
          secondaryLabel="Reset"
        >
          <p style={{ margin: 0 }}>Footer shows only primary and secondary actions.</p>
        </Modal>
      ),
    },
  ],
};
