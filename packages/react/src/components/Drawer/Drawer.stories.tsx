import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Drawer.mdx'),
    },
  },
  tags: [],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the drawer header',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'The size of the drawer',
    },
    position: {
      options: ['right', 'left'],
      control: { type: 'radio' },
      description: 'The position of the drawer',
    },
    showBackButton: {
      control: 'boolean',
      description: 'Show or hide the back button',
    },
    showTitle: {
      control: 'boolean',
      description: 'Show or hide the title',
    },
    showClose: {
      control: 'boolean',
      description: 'Show or hide the close button',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show or hide the footer',
    },
    headerPrefix: {
      control: { type: 'text' },
      description: 'Element to display before the title',
    },
    headerSuffix: {
      control: { type: 'text' },
      description: 'Element to display after the title',
    },
    useSurfaceBackground: {
      control: 'boolean',
      description: 'Whether to use the surface background color (--t-color-surface-background)',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether to use full viewport height',
    },
    contentPadding: {
      control: 'text',
      description: 'Custom padding for the drawer content',
    },
    footerVariant: {
      options: ['cancelAndActions', 'swapAndActions', 'actionsOnly'],
      control: { type: 'radio' },
      description: 'The footer variant layout',
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for the cancel button',
    },
    primaryLabel: {
      control: 'text',
      description: 'Label for the primary button',
    },
    secondaryLabel: {
      control: 'text',
      description: 'Label for the secondary button',
    },
    showPrimaryButton: {
      control: 'boolean',
      description: 'Show or hide the primary button',
    },
    showSecondaryButton: {
      control: 'boolean',
      description: 'Show or hide the secondary button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div>
            <p>This is a default drawer content.</p>
            <p>You can place any content here.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Drawer Title',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const WithHeaderComponents: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Header Components</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          headerPrefix={<span style={{ background: 'var(--t-color-fill-brand-secondary)', padding: '4px 8px', borderRadius: '4px' }}>Badge</span>}
          headerSuffix={<Button variant="plain" size="micro">Action</Button>}
        >
          <div>
            <p>This drawer has custom header prefix and suffix components.</p>
            <p>You can use any component like badges or buttons.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Drawer with Header Components',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const WithBackButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);

    const handleBack = () => {
      if (step > 1) {
        setStep(step - 1);
      } else {
        setOpen(false);
      }
    };

    return (
      <div>
        <Button onClick={() => { setOpen(true); setStep(1); }}>Open Multi-step Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          showBackButton={true}
          onBackClick={handleBack}
          title={`Step ${step} of 3`}
          step={step}
        >
          <div>
            <p>This is step {step} of a multi-step drawer.</p>
            {step < 3 && (
              <Button 
                onClick={() => setStep(step + 1)}
                style={{ marginTop: '16px' }}
              >
                Next Step
              </Button>
            )}
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    size: 'medium',
    position: 'right',
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Footer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          showFooter={true}
          footerVariant="cancelAndActions"
          cancelLabel="Cancel"
          primaryLabel="Save"
          secondaryLabel="Secondary"
          onCancel={() => setOpen(false)}
          onPrimary={() => {
            alert('Saved!');
            setOpen(false);
          }}
          onSecondary={() => alert('Secondary action')}
          showPrimaryButton={true}
          showSecondaryButton={true}
        >
          <div>
            <p>This drawer has a footer with action buttons and custom content.</p>
            <p>Click Save or Cancel to close the drawer.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Drawer with Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const RTLDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    
    // Toggle direction for this story only
    React.useEffect(() => {
      const originalDir = document.documentElement.dir;
      document.documentElement.dir = 'rtl';
      
      return () => {
        document.documentElement.dir = originalDir;
      };
    }, []);

    return (
      <div dir="rtl">
        <Button onClick={() => setOpen(true)}>افتح الدرج</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          showFooter={true}
          footerVariant="cancelAndActions"
          cancelLabel="إلغاء"
          primaryLabel="حفظ"
          secondaryLabel="ثانوي"
          onCancel={() => setOpen(false)}
          onPrimary={() => {
            alert('تم الحفظ!');
            setOpen(false);
          }}
          onSecondary={() => alert('إجراء ثانوي')}
          showPrimaryButton={true}
          showSecondaryButton={true}
        >
          <div style={{ textAlign: 'right' }}>
            <p>هذا محتوى الدرج باللغة العربية.</p>
            <p>يمكنك وضع أي محتوى هنا.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'عنوان الدرج',
    size: 'medium',
    position: 'right', // will be adjusted to 'left' in RTL
    showBackButton: true,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'إلغاء',
    primaryLabel: 'حفظ',
    secondaryLabel: 'ثانوي',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const LargeDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Large Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          size="large"
        >
          <div>
            <p>This is a large drawer with more content space.</p>
            <p>It's useful for complex forms or detailed information.</p>
            <div style={{ height: '1000px', background: 'var(--t-color-fill-brand-secondary)', marginTop: '20px', padding: '20px' }}>
              <p>Scroll content to test the drawer's scrolling behavior.</p>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Large Drawer',
    size: 'large',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    onCancel: () => {},
    onPrimary: () => alert('Saved!'),
    onSecondary: () => {},
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const FullHeightDrawer: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Full Height Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          fullHeight={true}
        >
          <div>
            <p>This drawer spans the full height of the viewport.</p>
            <p>It's ideal for displaying large amounts of content or for applications that need the drawer to match the page height.</p>
            <div style={{ height: '1000px', background: 'var(--t-color-fill-brand-secondary)', marginTop: '20px', padding: '20px' }}>
              <p>This content area can be scrolled while the header and footer remain fixed.</p>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Full Height Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    onCancel: () => {},
    onPrimary: () => alert('Saved!'),
    onSecondary: () => {},
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};


export const FooterCancelAndActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Cancel and Actions Footer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div>
            <p>This footer shows a cancel button on the left and action buttons on the right.</p>
            <p>This is the most common footer pattern for forms and dialogs.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Cancel and Actions Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save Changes',
    secondaryLabel: 'Save Draft',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const FooterSwapAndActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Swap and Actions Footer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          swapContent={
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)' }}>
              <span style={{ color: 'var(--t-color-text-secondary)', fontSize: 'var(--t-font-size-body-sm)' }}>
                Status: Draft
              </span>
            </div>
          }
        >
          <div>
            <p>This footer shows custom content on the left and action buttons on the right.</p>
            <p>Useful for showing status, metadata, or other contextual information.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Swap and Actions Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'swapAndActions',
    primaryLabel: 'Publish',
    secondaryLabel: 'Save Draft',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const FooterActionsOnly: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Actions Only Footer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div>
            <p>This footer shows only action buttons aligned to the right.</p>
            <p>Perfect for workflows where canceling is done via the close button or back button.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Actions Only Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    primaryLabel: 'Confirm',
    secondaryLabel: 'Review',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const FooterPrimaryOnly: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Primary Button Only</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div>
            <p>This footer shows only a primary action button.</p>
            <p>Used for simple confirmations or single-action workflows.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Primary Button Only',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    primaryLabel: 'Understand',
    showPrimaryButton: true,
    showSecondaryButton: false,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const FooterSecondaryOnly: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Secondary Button Only</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div>
            <p>This footer shows only a secondary action button.</p>
            <p>Used for less prominent actions or optional workflows.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Secondary Button Only',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    secondaryLabel: 'Maybe Later',
    showPrimaryButton: false,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const CustomPadding: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open with Custom Padding</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          contentPadding="var(--t-space-600)" // 24px padding (1.5rem)
        >
          <div style={{ 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-200)',
            padding: 'var(--t-space-300)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <p><strong>Custom Content Padding Demo</strong></p>
            <p>This drawer uses <code>var(--t-space-600)</code> (24px) for content padding instead of the default <code>var(--t-space-500)</code> (20px).</p>
          </div>
          
          <div style={{ marginBottom: 'var(--t-space-400)' }}>
            <h3 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-primary)' }}>Available Spacing Tokens:</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><code>var(--t-space-300)</code> = 12px (0.75rem)</li>
              <li><code>var(--t-space-400)</code> = 16px (1rem)</li>
              <li><code>var(--t-space-500)</code> = 20px (1.25rem) - default</li>
              <li><code>var(--t-space-600)</code> = 24px (1.5rem) - current</li>
              <li><code>var(--t-space-700)</code> = 32px (2rem)</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--t-color-surface-secondary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <p style={{ margin: 0 }}>You can also use custom values like <code>"2rem 1rem"</code> for different horizontal and vertical padding.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Custom Padding Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true,
    contentPadding: 'var(--t-space-600)', // 24px padding
  },
};
