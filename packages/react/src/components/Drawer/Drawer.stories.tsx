import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { TextInput } from '../TextInput/TextInput';
import { Modal } from '../Modal/Modal';
import { Select } from '../Select/Select';

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
    width: {
      options: ['default', 'custom'],
      control: { type: 'radio' },
      description: 'The width variant of the drawer',
    },
    customWidth: {
      control: 'text',
      description: 'Custom width value (used when width is "custom")',
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width for the drawer (default: 25rem/400px)',
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width for the drawer',
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

export const CustomWidthTester: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [customWidth, setCustomWidth] = useState('35rem');
    const [minWidth, setMinWidth] = useState('25rem');
    const [maxWidth, setMaxWidth] = useState('50rem');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-400)' }}>
        <div style={{ 
          padding: 'var(--t-space-400)', 
          backgroundColor: 'var(--t-color-surface-secondary)', 
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
          <h3 style={{ margin: '0 0 var(--t-space-300) 0' }}>Test Custom Width Settings</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--t-space-300)', marginBottom: 'var(--t-space-300)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: 'var(--t-space-100)', fontWeight: '600' }}>Custom Width:</label>
              <input 
                type="text" 
                value={customWidth} 
                onChange={(e) => setCustomWidth(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: 'var(--t-space-200)', 
                  border: '1px solid var(--t-color-border-primary)', 
                  borderRadius: 'var(--t-border-radius-100)' 
                }}
                placeholder="e.g., 35rem, 600px, 40vw"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: 'var(--t-space-100)', fontWeight: '600' }}>Min Width:</label>
              <input 
                type="text" 
                value={minWidth} 
                onChange={(e) => setMinWidth(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: 'var(--t-space-200)', 
                  border: '1px solid var(--t-color-border-primary)', 
                  borderRadius: 'var(--t-border-radius-100)' 
                }}
                placeholder="e.g., 25rem, 400px"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: 'var(--t-space-100)', fontWeight: '600' }}>Max Width:</label>
              <input 
                type="text" 
                value={maxWidth} 
                onChange={(e) => setMaxWidth(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: 'var(--t-space-200)', 
                  border: '1px solid var(--t-color-border-primary)', 
                  borderRadius: 'var(--t-border-radius-100)' 
                }}
                placeholder="e.g., 50rem, 800px"
              />
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--t-space-200)', 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-100)',
            fontSize: 'var(--t-font-size-body-sm)',
            marginBottom: 'var(--t-space-300)'
          }}>
            <strong>Current Settings:</strong> width="{customWidth}", min="{minWidth}", max="{maxWidth}"
          </div>
        </div>

        <Button onClick={() => setOpen(true)}>Test Custom Width Drawer</Button>
        
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          width="custom"
          customWidth={customWidth}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          <div style={{ 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-200)',
            padding: 'var(--t-space-300)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <p><strong>Width Testing Drawer</strong></p>
            <p>This drawer allows you to test different width configurations in real-time.</p>
            <p>Change the values in the controls above and reopen the drawer to see the effects.</p>
          </div>
          
          <div style={{ marginBottom: 'var(--t-space-400)' }}>
            <h3 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-primary)' }}>Current Configuration:</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><strong>Width variant:</strong> <code>custom</code></li>
              <li><strong>Custom width:</strong> <code>{customWidth}</code></li>
              <li><strong>Min width:</strong> <code>{minWidth}</code></li>
              <li><strong>Max width:</strong> <code>{maxWidth}</code></li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--t-color-surface-secondary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Try These Examples:</h4>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><code>30rem</code> - Fixed rem-based width</li>
              <li><code>500px</code> - Fixed pixel width</li>
              <li><code>40vw</code> - Viewport width percentage</li>
              <li><code>clamp(25rem, 40vw, 50rem)</code> - Responsive width</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'var(--t-color-surface-tertiary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <p style={{ margin: 0, fontSize: 'var(--t-font-size-body-sm)' }}>
              <strong>Note:</strong> The drawer will always respect the minimum width constraint. 
              If your custom width is smaller than the minimum, the minimum will be used instead.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Width Testing Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Close',
    primaryLabel: 'Apply Changes',
    showPrimaryButton: true,
    showSecondaryButton: false,
    width: 'custom',
    customWidth: '35rem',
    minWidth: '25rem',
    maxWidth: '50rem',
    useSurfaceBackground: true,
    fullHeight: true,
  },
};

export const SwappableHeaderAreas: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [showPrefix, setShowPrefix] = useState(true);
    const [showSuffix, setShowSuffix] = useState(true);
    const [prefixType, setPrefixType] = useState('badge');
    const [suffixType, setSuffixType] = useState('action');

    const createPrefixContent = () => {
      if (!showPrefix) return null;
      
      switch (prefixType) {
        case 'badge':
          return (
            <Badge tone="info">
              Draft
            </Badge>
          );
        case 'status':
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-100)' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--t-color-status-success)'
              }} />
              <span style={{
                fontSize: 'var(--t-font-size-body-sm)',
                color: 'var(--t-color-text-secondary)'
              }}>
                Active
              </span>
            </div>
          );
        case 'icon':
          return (
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: 'var(--t-border-radius-100)',
              backgroundColor: 'var(--t-color-fill-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              📄
            </div>
          );
        case 'textinput':
          return (
            <TextInput
              placeholder="Search..."
              size="xsmall"
              hideLabel
              style={{ minWidth: '120px' }}
            />
          );
        default:
          return null;
      }
    };

    const createSuffixContent = () => {
      if (!showSuffix) return null;
      
      switch (suffixType) {
        case 'action':
          return (
            <Button variant="plain" size="xSmall" tone="neutral">
              Edit
            </Button>
          );
        case 'badge':
          return (
            <Badge tone="warning">
              Updated
            </Badge>
          );
        case 'menu':
          return (
            <Button variant="plain" size="xSmall" tone="neutral" prefixIcon="⋯">
            </Button>
          );
        case 'textinput':
          return (
            <TextInput
              placeholder="Filter..."
              size="xsmall"
              hideLabel
              style={{ minWidth: '100px' }}
            />
          );
        default:
          return null;
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-400)' }}>
        <div style={{ 
          padding: 'var(--t-space-400)', 
          backgroundColor: 'var(--t-color-surface-secondary)', 
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
          <h3 style={{ margin: '0 0 var(--t-space-300) 0' }}>Header Swappable Areas Configuration</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--t-space-400)', marginBottom: 'var(--t-space-300)' }}>
            <div>
              <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Header Prefix (Left Area)</h4>
              <div style={{ marginBottom: 'var(--t-space-200)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-100)' }}>
                  <input 
                    type="checkbox" 
                    checked={showPrefix} 
                    onChange={(e) => setShowPrefix(e.target.checked)}
                  />
                  Show Prefix
                </label>
              </div>
              {showPrefix && (
                <div>
                  <label style={{ display: 'block', marginBottom: 'var(--t-space-100)', fontWeight: '600' }}>Type:</label>
                  <select 
                    value={prefixType} 
                    onChange={(e) => setPrefixType(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: 'var(--t-space-100)', 
                      border: '1px solid var(--t-color-border-primary)', 
                      borderRadius: 'var(--t-border-radius-100)' 
                    }}
                  >
                    <option value="badge">Status Badge</option>
                    <option value="status">Status Indicator</option>
                    <option value="icon">Document Icon</option>
                    <option value="textinput">Text Input</option>
                  </select>
                </div>
              )}
            </div>
            
            <div>
              <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Header Suffix (Right Area)</h4>
              <div style={{ marginBottom: 'var(--t-space-200)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-100)' }}>
                  <input 
                    type="checkbox" 
                    checked={showSuffix} 
                    onChange={(e) => setShowSuffix(e.target.checked)}
                  />
                  Show Suffix
                </label>
              </div>
              {showSuffix && (
                <div>
                  <label style={{ display: 'block', marginBottom: 'var(--t-space-100)', fontWeight: '600' }}>Type:</label>
                  <select 
                    value={suffixType} 
                    onChange={(e) => setSuffixType(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: 'var(--t-space-100)', 
                      border: '1px solid var(--t-color-border-primary)', 
                      borderRadius: 'var(--t-border-radius-100)' 
                    }}
                  >
                    <option value="action">Action Button</option>
                    <option value="badge">Info Badge</option>
                    <option value="menu">Menu Button</option>
                    <option value="textinput">Text Input</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--t-space-200)', 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-100)',
            fontSize: 'var(--t-font-size-body-sm)'
          }}>
            <strong>Current Config:</strong> 
            Prefix: {showPrefix ? prefixType : 'none'} | 
            Suffix: {showSuffix ? suffixType : 'none'}
          </div>
        </div>

        <Button onClick={() => setOpen(true)}>Test Header Swappable Areas</Button>
        
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          headerPrefix={createPrefixContent()}
          headerSuffix={createSuffixContent()}
        >
          <div style={{ 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-200)',
            padding: 'var(--t-space-300)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <p><strong>Header Swappable Areas Demo</strong></p>
            <p>This drawer demonstrates the two customizable header areas that can be swapped with different content.</p>
          </div>
          
          <div style={{ marginBottom: 'var(--t-space-400)' }}>
            <h3 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-primary)' }}>Header Layout:</h3>
            <div style={{ 
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-secondary)',
              borderRadius: 'var(--t-border-radius-200)',
              border: '1px solid var(--t-color-border-secondary)',
              fontFamily: 'monospace',
              fontSize: 'var(--t-font-size-body-sm)'
            }}>
              [Group 1: Back Title Prefix] [Group 2: Suffix Close]
            </div>
          </div>
          
          <div style={{ marginBottom: 'var(--t-space-400)' }}>
            <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Header Groups:</h4>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><strong>Group 1 (Left):</strong> Back button, Title, Prefix - all with var(--t-space-200) gaps</li>
              <li><strong>Group 2 (Right):</strong> Suffix, Close button - with var(--t-space-200) gap</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'var(--t-color-surface-secondary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Common Use Cases:</h4>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><strong>Status badges:</strong> Draft, Published, Updated</li>
              <li><strong>Action buttons:</strong> Edit, Share, More options</li>
              <li><strong>Indicators:</strong> Status dots, progress indicators</li>
              <li><strong>Icons:</strong> File type, priority level</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: 'var(--t-color-surface-tertiary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <p style={{ margin: 0, fontSize: 'var(--t-font-size-body-sm)' }}>
              <strong>Note:</strong> Both areas are optional and automatically adjust the title width to prevent text overflow.
            </p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Document Title',
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

export const DefaultWidth: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Default Width Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <div style={{ 
            backgroundColor: 'var(--t-color-fill-brand-secondary)', 
            borderRadius: 'var(--t-border-radius-200)',
            padding: 'var(--t-space-300)',
            marginBottom: 'var(--t-space-400)'
          }}>
            <p><strong>Default Width Demo</strong></p>
            <p>This drawer uses the default width of <code>28.125rem</code> (450px).</p>
            <p>The minimum width is always <code>25rem</code> (400px) to ensure usability.</p>
          </div>
          
          <div style={{ marginBottom: 'var(--t-space-400)' }}>
            <h3 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-primary)' }}>Width Configuration:</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--t-space-400)' }}>
              <li><strong>Width variant:</strong> <code>default</code></li>
              <li><strong>Default width:</strong> <code>28.125rem</code> (450px)</li>
              <li><strong>Min width:</strong> <code>25rem</code> (400px)</li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--t-color-surface-secondary)', 
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <p style={{ margin: 0 }}>This is the recommended width for most use cases, providing a good balance between content space and screen real estate.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    title: 'Default Width Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    width: 'default',
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

// Ultimate Z-Index Stress Test: Drawer → Modal → Select
export const UltimateZIndexTest: Story = {
  render: (args) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      position: '',
      department: '',
      experience: '',
      skills: '',
      location: ''
    });

    const handleModalSubmit = () => {
      console.log('Modal form submitted:', formData);
      setModalOpen(false);
    };

    const handleDrawerClose = () => {
      setDrawerOpen(false);
      setModalOpen(false); // Close modal when drawer closes
    };

    // Form options
    const companyOptions = [
      { value: 'tech-corp', label: 'TechCorp Inc.' },
      { value: 'design-studio', label: 'Design Studio Ltd.' },
      { value: 'startup-inc', label: 'Startup Inc.' },
      { value: 'enterprise-co', label: 'Enterprise Co.' },
      { value: 'innovation-labs', label: 'Innovation Labs' },
    ];

    const positionOptions = [
      { value: 'frontend', label: 'Frontend Developer' },
      { value: 'backend', label: 'Backend Developer' },
      { value: 'fullstack', label: 'Full Stack Developer' },
      { value: 'designer', label: 'UI/UX Designer' },
      { value: 'product-manager', label: 'Product Manager' },
      { value: 'data-scientist', label: 'Data Scientist' },
    ];

    const departmentOptions = [
      { value: 'engineering', label: 'Engineering' },
      { value: 'design', label: 'Design' },
      { value: 'product', label: 'Product' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'hr', label: 'Human Resources' },
    ];

    const experienceOptions = [
      { value: 'junior', label: 'Junior (0-2 years)' },
      { value: 'mid', label: 'Mid-level (2-5 years)' },
      { value: 'senior', label: 'Senior (5-8 years)' },
      { value: 'lead', label: 'Lead (8+ years)' },
      { value: 'principal', label: 'Principal (10+ years)' },
    ];

    const skillsOptions = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'angular', label: 'Angular' },
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'figma', label: 'Figma' },
      { value: 'sketch', label: 'Sketch' },
    ];

    const locationOptions = [
      { value: 'us-ny', label: 'New York, USA' },
      { value: 'us-sf', label: 'San Francisco, USA' },
      { value: 'uk-london', label: 'London, UK' },
      { value: 'de-berlin', label: 'Berlin, Germany' },
      { value: 'ca-toronto', label: 'Toronto, Canada' },
      { value: 'au-sydney', label: 'Sydney, Australia' },
      { value: 'sg-singapore', label: 'Singapore' },
      { value: 'jp-tokyo', label: 'Tokyo, Japan' },
    ];

    return (
      <div>
        <div style={{ 
          padding: 'var(--t-space-400)', 
          backgroundColor: 'var(--t-color-fill-critical-secondary)', 
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-critical)',
          marginBottom: 'var(--t-space-400)'
        }}>
          <h3 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-critical)' }}>
            🧪 Ultimate Z-Index Stress Test
          </h3>
          <p style={{ margin: '0', fontSize: 'var(--t-font-size-350)' }}>
            This test creates the most complex layering scenario: <strong>Drawer → Modal → Select dropdowns</strong>
          </p>
          <p style={{ margin: 'var(--t-space-200) 0 0 0', fontSize: 'var(--t-font-size-300)', fontStyle: 'italic' }}>
            All Select dropdowns should appear above both the Modal overlay AND the Drawer overlay.
          </p>
        </div>

        <Button onClick={() => setDrawerOpen(true)}>🚀 Start Z-Index Stress Test</Button>
        
        <Drawer
          {...args}
          open={drawerOpen}
          onOpenChange={handleDrawerClose}
          title="Employee Management"
          showFooter={true}
          footerVariant="cancelAndActions"
          cancelLabel="Close"
          primaryLabel="View All Employees"
          showPrimaryButton={true}
          showSecondaryButton={false}
          onCancel={handleDrawerClose}
          onPrimary={() => console.log('View all employees')}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-400)' }}>
            <div style={{ 
              backgroundColor: 'var(--t-color-fill-brand-secondary)', 
              borderRadius: 'var(--t-border-radius-200)',
              padding: 'var(--t-space-300)'
            }}>
              <h3 style={{ margin: '0 0 var(--t-space-200) 0' }}>Employee Management Dashboard</h3>
              <p style={{ margin: 0 }}>
                Manage employee information and add new team members to your organization.
              </p>
            </div>

            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-secondary)',
              borderRadius: 'var(--t-border-radius-200)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Quick Actions</h4>
              <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
                <Button variant="tonal" size="medium">
                  Import Employees
                </Button>
                <Button variant="tonal" size="medium">
                  Export Data
                </Button>
                <Modal
                  trigger={
                    <Button variant="primary" size="medium">
                      ➕ Add New Employee
                    </Button>
                  }
                  open={modalOpen}
                  onOpenChange={setModalOpen}
                  title="Add New Employee"
                  width="large"
                  footerVariant="cancelAndActions"
                  cancelLabel="Cancel"
                  primaryLabel="Add Employee"
                  showPrimaryButton={true}
                  showSecondaryButton={false}
                  onCancel={() => setModalOpen(false)}
                  onPrimary={handleModalSubmit}
                >
                  <div style={{ padding: 'var(--t-space-400)', display: 'flex', flexDirection: 'column', gap: 'var(--t-space-400)' }}>
                    <div style={{ 
                      backgroundColor: 'var(--t-color-fill-warning-secondary)', 
                      padding: 'var(--t-space-300)',
                      borderRadius: 'var(--t-border-radius-200)',
                      border: '1px solid var(--t-color-border-warning)'
                    }}>
                      <h4 style={{ margin: '0 0 var(--t-space-100) 0', color: 'var(--t-color-text-warning)' }}>
                        ⚡ Z-Index Test in Progress
                      </h4>
                      <p style={{ margin: 0, fontSize: 'var(--t-font-size-300)' }}>
                        This Modal is inside a Drawer. All Select dropdowns below should appear above BOTH overlays.
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--t-space-300)' }}>
                      <TextInput
                        label="Full Name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                      
                      <TextInput
                        label="Email Address"
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--t-space-300)' }}>
                      <Select
                        label="Company"
                        placeholder="Select company..."
                        options={companyOptions}
                        value={formData.company}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, company: value }))}
                        helpText="🎯 Test: Should appear above Drawer + Modal"
                      />
                      
                      <Select
                        label="Position"
                        placeholder="Select position..."
                        options={positionOptions}
                        value={formData.position}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}
                        searchable
                        searchPlaceholder="Search positions..."
                        helpText="🔍 Searchable dropdown test"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--t-space-300)' }}>
                      <Select
                        label="Department"
                        placeholder="Select department..."
                        options={departmentOptions}
                        value={formData.department}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
                      />
                      
                      <Select
                        label="Experience Level"
                        placeholder="Select experience..."
                        options={experienceOptions}
                        value={formData.experience}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--t-space-300)' }}>
                      <Select
                        label="Primary Skills"
                        placeholder="Select primary skill..."
                        options={skillsOptions}
                        value={formData.skills}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, skills: value }))}
                        searchable
                        searchPlaceholder="Search skills..."
                      />
                      
                      <Select
                        label="Location"
                        placeholder="Select location..."
                        options={locationOptions}
                        value={formData.location}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}
                        searchable
                        searchPlaceholder="Search locations..."
                      />
                    </div>

                    <div style={{ 
                      backgroundColor: 'var(--t-color-fill-success-secondary)', 
                      padding: 'var(--t-space-300)',
                      borderRadius: 'var(--t-border-radius-200)',
                      border: '1px solid var(--t-color-border-success)'
                    }}>
                      <h4 style={{ margin: '0 0 var(--t-space-100) 0', color: 'var(--t-color-text-success)' }}>
                        ✅ Z-Index Hierarchy Test
                      </h4>
                      <p style={{ margin: 0, fontSize: 'var(--t-font-size-300)' }}>
                        Expected layering (bottom to top):
                      </p>
                      <ol style={{ margin: 'var(--t-space-100) 0 0 0', paddingLeft: 'var(--t-space-400)', fontSize: 'var(--t-font-size-300)' }}>
                        <li>Drawer overlay (z-index: ~1000)</li>
                        <li>Modal overlay (z-index: 1050)</li>
                        <li>Modal content (z-index: 1051)</li>
                        <li><strong>Select dropdowns (z-index: 2147483647)</strong></li>
                      </ol>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>

            <div style={{
              padding: 'var(--t-space-300)',
              backgroundColor: 'var(--t-color-surface-tertiary)',
              borderRadius: 'var(--t-border-radius-200)',
              border: '1px solid var(--t-color-border-secondary)'
            }}>
              <h4 style={{ margin: '0 0 var(--t-space-200) 0' }}>Recent Employees</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-200)' }}>
                {[
                  { name: 'Sarah Johnson', role: 'Frontend Developer', dept: 'Engineering' },
                  { name: 'Mike Chen', role: 'UI Designer', dept: 'Design' },
                  { name: 'Alex Rodriguez', role: 'Product Manager', dept: 'Product' },
                ].map((employee, index) => (
                  <div key={index} style={{
                    padding: 'var(--t-space-200)',
                    backgroundColor: 'var(--t-color-surface-primary)',
                    borderRadius: 'var(--t-border-radius-100)',
                    border: '1px solid var(--t-color-border-secondary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontWeight: 'var(--t-font-weight-medium)' }}>{employee.name}</div>
                      <div style={{ fontSize: 'var(--t-font-size-300)', color: 'var(--t-color-text-secondary)' }}>
                        {employee.role} • {employee.dept}
                      </div>
                    </div>
                    <Button variant="plain" size="xSmall" tone="neutral">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--t-color-fill-magic-secondary)',
              padding: 'var(--t-space-300)',
              borderRadius: 'var(--t-border-radius-200)',
              border: '1px solid var(--t-color-border-magic)'
            }}>
              <h4 style={{ margin: '0 0 var(--t-space-200) 0', color: 'var(--t-color-text-magic)' }}>
                🧪 Test Instructions
              </h4>
              <ol style={{ margin: 0, paddingLeft: 'var(--t-space-400)', fontSize: 'var(--t-font-size-300)' }}>
                <li>Click "Add New Employee" to open the Modal</li>
                <li>Try opening each Select dropdown in the form</li>
                <li>Verify dropdowns appear above BOTH overlays</li>
                <li>Test searchable Select components</li>
                <li>Try scrolling within dropdowns</li>
              </ol>
            </div>
          </div>
        </Drawer>
      </div>
    );
  },
  args: {
    size: 'large',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    useSurfaceBackground: true,
    fullHeight: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ultimate z-index stress test: Drawer → Modal → Select. Tests the most complex layering scenario where Select dropdowns must appear above both Drawer and Modal overlays.',
      },
    },
  },
};
