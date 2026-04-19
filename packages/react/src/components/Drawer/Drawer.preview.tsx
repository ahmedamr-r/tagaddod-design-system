import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Drawer, drawerPositions, drawerSizes, type DrawerProps } from './Drawer';
import { Button } from '../Button/Button';

const footerVariants = ['cancelAndActions', 'swapAndActions', 'actionsOnly'] as const;

type DrawerPreviewProps = Omit<DrawerProps, 'open' | 'onOpenChange' | 'children'> & {
  triggerLabel?: string;
  bodyContent?: React.ReactNode;
};

const DrawerPreview = ({
  triggerLabel = 'Open drawer',
  bodyContent,
  ...drawerProps
}: DrawerPreviewProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
      <Drawer open={open} onOpenChange={setOpen} {...drawerProps}>
        {bodyContent ?? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ margin: 0 }}>Drawer content goes here.</p>
            <p style={{ margin: 0, color: 'var(--t-color-text-secondary, #6b7280)' }}>
              You can compose any React nodes inside the drawer body.
            </p>
          </div>
        )}
      </Drawer>
    </>
  );
};

DrawerPreview.displayName = 'Drawer';

export const preview: PreviewModule<DrawerPreviewProps> = {
  name: 'Drawer',
  slug: 'drawer',
  description: 'Side-anchored panel with header, body, and optional footer. Ships with back/close.',
  component: DrawerPreview,
  defaultProps: {
    triggerLabel: 'Open drawer',
    title: 'Drawer title',
    size: 'medium',
    position: 'right',
    showFooter: true,
    footerVariant: 'cancelAndActions',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    cancelLabel: 'Cancel',
    showBackButton: false,
    showClose: true,
    showTitle: true,
    showPrimaryButton: true,
    showSecondaryButton: true,
  },
  controls: {
    triggerLabel: { type: 'text', description: 'Text on the trigger button' },
    title: { type: 'text', description: 'Drawer header title' },
    size: { type: 'select', options: drawerSizes, description: 'Small, medium, or large' },
    position: { type: 'select', options: drawerPositions, description: 'Open from left or right (auto-flipped in RTL)' },
    footerVariant: { type: 'select', options: footerVariants, description: 'Footer layout' },
    showFooter: { type: 'boolean', description: 'Show the footer bar' },
    showTitle: { type: 'boolean', description: 'Show the title in the header' },
    showClose: { type: 'boolean', description: 'Show the close button' },
    showBackButton: { type: 'boolean', description: 'Show the back button (visible when step > 1)' },
    showPrimaryButton: { type: 'boolean', description: 'Show the primary footer button' },
    showSecondaryButton: { type: 'boolean', description: 'Show the secondary footer button' },
    primaryLabel: { type: 'text', description: 'Primary button label' },
    secondaryLabel: { type: 'text', description: 'Secondary button label' },
    cancelLabel: { type: 'text', description: 'Cancel button label' },
    step: { type: 'number', description: 'Multi-step index (enables back button when > 1)' },
  },
  examples: [
    {
      name: 'Default',
      props: { triggerLabel: 'Open default drawer', title: 'Settings' },
    },
    {
      name: 'LeftSide',
      props: { triggerLabel: 'Open from left', position: 'left', title: 'Navigation' },
    },
    {
      name: 'Large',
      props: { triggerLabel: 'Open large drawer', size: 'large', title: 'Order details' },
    },
    {
      name: 'NoFooter',
      props: { triggerLabel: 'Open info drawer', showFooter: false, title: 'Information' },
    },
    {
      name: 'MultiStep',
      description: 'Back button is shown when step > 1.',
      props: { triggerLabel: 'Open step 2', title: 'Step 2 of 3', step: 2, showBackButton: true },
    },
  ],
};
