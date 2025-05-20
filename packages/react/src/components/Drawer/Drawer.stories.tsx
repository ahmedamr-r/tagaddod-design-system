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
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacity of the overlay background (0-1)',
    },
    blurBackground: {
      control: 'boolean',
      description: 'Whether to apply a blur effect to the background',
    },
    useSurfaceBackground: {
      control: 'boolean',
      description: 'Whether to use the surface background color (--t-color-surface-background)',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether to use full viewport height',
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
          <div style={{ padding: '16px 0' }}>
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
    overlayOpacity: 0.7,
    blurBackground: true,
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
          <div style={{ padding: '16px 0' }}>
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
    overlayOpacity: 0.7,
    blurBackground: true,
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
        >
          <div style={{ padding: '16px 0' }}>
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
    overlayOpacity: 0.7,
    blurBackground: true,
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
          primaryAction={{
            label: 'Save',
            onClick: () => {
              alert('Saved!');
              setOpen(false);
            },
            variant: 'primary',
          }}
          secondaryAction={{
            label: 'Cancel',
            onClick: () => setOpen(false),
            variant: 'tertiary',
          }}
          footerContent={<span style={{ color: 'var(--t-color-text-subtle)' }}>Last edited: Today</span>}
        >
          <div style={{ padding: '16px 0' }}>
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
    overlayOpacity: 0.7,
    blurBackground: true,
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
          primaryAction={{
            label: 'حفظ',
            onClick: () => {
              alert('تم الحفظ!');
              setOpen(false);
            },
            variant: 'primary',
          }}
          secondaryAction={{
            label: 'إلغاء',
            onClick: () => setOpen(false),
            variant: 'tertiary',
          }}
        >
          <div style={{ padding: '16px 0', textAlign: 'right' }}>
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
    overlayOpacity: 0.7,
    blurBackground: true,
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
          <div style={{ padding: '16px 0' }}>
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
    primaryAction: {
      label: 'Save',
      onClick: () => alert('Saved!'),
      variant: 'primary',
    },
    secondaryAction: {
      label: 'Cancel',
      onClick: () => {},
      variant: 'tertiary',
    },
    overlayOpacity: 0.7,
    blurBackground: true,
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
          <div style={{ padding: '16px 0' }}>
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
    primaryAction: {
      label: 'Save',
      onClick: () => alert('Saved!'),
      variant: 'primary',
    },
    secondaryAction: {
      label: 'Cancel',
      onClick: () => {},
      variant: 'tertiary',
    },
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const SurfaceBackground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open White Background Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          useSurfaceBackground={true}
        >
          <div style={{ padding: '16px 0' }}>
            <p>This drawer uses the --t-color-surface-background token for its background color.</p>
            <p>This ensures it matches the design system's surface color (white by default).</p>
            <div style={{ background: 'var(--t-color-fill-brand-secondary)', marginTop: '20px', padding: '20px', borderRadius: 'var(--t-border-radius-200)' }}>
              <p>This colored box demonstrates the contrast with the drawer's white background.</p>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Surface Background Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const CustomOverlay: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open with Custom Overlay</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          overlayOpacity={0.9}
          blurBackground={true}
        >
          <div style={{ padding: '16px 0' }}>
            <p>This drawer has a darker overlay with opacity set to 0.9.</p>
            <p>The background also has a blur effect applied.</p>
            <p>These settings improve the visibility and focus on the drawer content.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Custom Overlay Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.9,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
};
