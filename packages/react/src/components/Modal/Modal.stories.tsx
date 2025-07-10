import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { TextInput } from '../TextInput/TextInput';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Modal.mdx'),
    },
  },
  tags: [],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'fullscreen'],
    },
    width: {
      control: 'select',
      options: ['small', 'medium', 'large', 'custom'],
    },
    customWidth: {
      control: 'text',
    },
    minWidth: {
      control: 'text',
    },
    maxWidth: {
      control: 'text',
    },
    contentPadding: {
      control: 'text',
    },
    showTitle: {
      control: 'boolean',
    },
    showFooter: {
      control: 'boolean',
    },
    footerVariant: {
      control: 'select',
      options: ['cancelAndActions', 'swapAndActions', 'actionsOnly'],
    },
    showPrimaryButton: {
      control: 'boolean',
    },
    showSecondaryButton: {
      control: 'boolean',
    },
    rtl: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Default Modal
export const Default: Story = {
  args: {
    title: 'Title',
    showTitle: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Label',
    secondaryLabel: 'Label',
    showPrimaryButton: true,
    showSecondaryButton: true,
    size: 'default',
    children: <div style={{ textAlign: 'center', padding: '16px' }}>Modal Content</div>,
    trigger: <Button>Open Modal</Button>,
  },
};

// Modal without title
export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    showTitle: false,
  },
};

// Modal without footer
export const WithoutFooter: Story = {
  args: {
    ...Default.args,
    showFooter: false,
  },
};


// RTL Modal with Arabic content
export const ArabicContent: Story = {
  args: {
    ...Default.args,
    title: 'العنوان',
    cancelLabel: 'إلغاء',
    primaryLabel: 'تأكيد',
    secondaryLabel: 'ثانوي',
    children: (
      <div style={{ padding: '16px', textAlign: 'right', direction: 'rtl' }}>
        محتوى النافذة المنبثقة باللغة العربية. يمكنك تبديل الاتجاه من شريط الأدوات لرؤية التخطيط الصحيح.
      </div>
    ),
    trigger: <Button>فتح النافذة</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with Arabic content - switch to RTL mode in the Storybook toolbar to see proper layout mirroring',
      },
    },
  },
};

// Footer variants
export const CancelAndActions: Story = {
  args: {
    ...Default.args,
    footerVariant: 'cancelAndActions',
    trigger: <Button>Cancel & Actions Footer</Button>,
  },
};

export const SwapAndActions: Story = {
  args: {
    ...Default.args,
    footerVariant: 'swapAndActions',
    trigger: <Button>Swap & Actions Footer</Button>,
  },
};

export const ActionsOnly: Story = {
  args: {
    ...Default.args,
    footerVariant: 'actionsOnly',
    trigger: <Button>Actions Only Footer</Button>,
  },
};

export const SingleButton: Story = {
  args: {
    ...Default.args,
    footerVariant: 'cancelAndActions',
    showSecondaryButton: false,
    trigger: <Button>Single Button Footer</Button>,
  },
};

export const CustomSwapContent: Story = {
  args: {
    ...Default.args,
    footerVariant: 'swapAndActions',
    swapContent: <span style={{ color: 'blue', fontWeight: 'bold' }}>Custom Content</span>,
    trigger: <Button>Custom Swap Content</Button>,
  },
};

// Width variants
export const SmallWidth: Story = {
  args: {
    ...Default.args,
    width: 'small',
    trigger: <Button>Open Small Modal</Button>,
  },
};

export const MediumWidth: Story = {
  args: {
    ...Default.args,
    width: 'medium',
    trigger: <Button>Open Medium Modal</Button>,
  },
};

export const LargeWidth: Story = {
  args: {
    ...Default.args,
    width: 'large',
    trigger: <Button>Open Large Modal</Button>,
  },
};

export const CustomWidth: Story = {
  args: {
    ...Default.args,
    width: 'custom',
    customWidth: '50rem',
    trigger: <Button>Open Custom Width Modal</Button>,
  },
};

export const WithMinMaxWidth: Story = {
  args: {
    ...Default.args,
    width: 'custom',
    customWidth: '70%',
    minWidth: '20rem',
    maxWidth: '60rem',
    trigger: <Button>Open Modal with Min/Max Width</Button>,
  },
};

export const CustomContentPadding: Story = {
  args: {
    ...Default.args,
    contentPadding: 'var(--t-space-700)',
    trigger: <Button>Open Modal with Custom Padding</Button>,
  },
};

export const NoContentPadding: Story = {
  args: {
    ...Default.args,
    contentPadding: '0',
    trigger: <Button>Open Modal with No Padding</Button>,
  },
};

// Form Integration Story - Testing Select component z-index fix
export const FormWithSelect: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      country: '',
      language: '',
      category: ''
    });

    const countryOptions = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'sa', label: 'Saudi Arabia' },
      { value: 'ae', label: 'United Arab Emirates' },
    ];

    const languageOptions = [
      { value: 'en', label: 'English' },
      { value: 'ar', label: 'العربية' },
      { value: 'fr', label: 'Français' },
      { value: 'de', label: 'Deutsch' },
      { value: 'es', label: 'Español' },
    ];

    const categoryOptions = [
      { value: 'tech', label: 'Technology' },
      { value: 'business', label: 'Business' },
      { value: 'education', label: 'Education' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'finance', label: 'Finance' },
      { value: 'retail', label: 'Retail' },
    ];

    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      setIsOpen(false);
    };

    return (
      <Modal
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button>Open Form with Select</Button>}
        title="User Registration Form"
        footerVariant="cancelAndActions"
        cancelLabel="Cancel"
        primaryLabel="Register"
        showPrimaryButton={true}
        showSecondaryButton={false}
        onCancel={() => setIsOpen(false)}
        onPrimary={handleSubmit}
      >
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          
          <TextInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />
          
          <Select
            label="Country"
            placeholder="Select your country..."
            options={countryOptions}
            value={formData.country}
            onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
            helpText="This Select dropdown should appear above the modal overlay"
          />
          
          <Select
            label="Preferred Language"
            placeholder="Select language..."
            options={languageOptions}
            value={formData.language}
            onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
            searchable
            searchPlaceholder="Search languages..."
          />
          
          <Select
            label="Category"
            placeholder="Select a category..."
            options={categoryOptions}
            value={formData.category}
            onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            helpText="Testing multiple Select components in the same modal"
          />
          
          <div style={{ 
            marginTop: '8px', 
            padding: '12px', 
            backgroundColor: 'var(--t-color-fill-success-secondary)', 
            borderRadius: 'var(--t-border-radius-200)',
            fontSize: 'var(--t-font-size-300)',
            color: 'var(--t-color-text-success)'
          }}>
            <strong>Z-Index Test:</strong> Open any Select dropdown above. The dropdown should appear above the modal overlay, not behind it.
          </div>
        </div>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests the Select component integration with Modal. Select dropdowns should appear above the modal overlay thanks to automatic z-index detection.',
      },
    },
  },
};

// Dynamic Footer Control Story
export const DynamicFooter: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [footerConfig, setFooterConfig] = useState({
      showCancel: true,
      showSecondary: true,
      showPrimary: true,
      footerVariant: 'cancelAndActions' as const,
      customContent: ''
    });

    const handleToggle = (key: keyof typeof footerConfig) => {
      setFooterConfig(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    const handleVariantChange = (variant: 'cancelAndActions' | 'swapAndActions' | 'actionsOnly') => {
      setFooterConfig(prev => ({ ...prev, footerVariant: variant }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        {/* Footer Controls */}
        <div style={{ 
          padding: '16px', 
          border: '1px solid var(--t-color-border-secondary)', 
          borderRadius: 'var(--t-border-radius-200)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '400px'
        }}>
          <h4 style={{ margin: 0, fontSize: 'var(--t-font-size-400)' }}>Footer Configuration</h4>
          
          {/* Footer Variant Selection */}
          <div>
            <label style={{ fontSize: 'var(--t-font-size-300)', fontWeight: 'var(--t-font-weight-medium)' }}>
              Footer Variant:
            </label>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              {(['cancelAndActions', 'swapAndActions', 'actionsOnly'] as const).map(variant => (
                <Button
                  key={variant}
                  size="micro"
                  variant={footerConfig.footerVariant === variant ? 'primary' : 'secondary'}
                  onClick={() => handleVariantChange(variant)}
                >
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* Button Visibility Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: 'var(--t-font-size-300)', fontWeight: 'var(--t-font-weight-medium)' }}>
              Button Visibility:
            </label>
            
            {footerConfig.footerVariant !== 'actionsOnly' && (
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--t-font-size-300)' }}>
                <input
                  type="checkbox"
                  checked={footerConfig.showCancel}
                  onChange={() => handleToggle('showCancel')}
                />
                Show Cancel Button
              </label>
            )}
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--t-font-size-300)' }}>
              <input
                type="checkbox"
                checked={footerConfig.showSecondary}
                onChange={() => handleToggle('showSecondary')}
              />
              Show Secondary Button
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--t-font-size-300)' }}>
              <input
                type="checkbox"
                checked={footerConfig.showPrimary}
                onChange={() => handleToggle('showPrimary')}
              />
              Show Primary Button
            </label>
          </div>

          {/* Custom Content for Swap Area */}
          {footerConfig.footerVariant === 'swapAndActions' && (
            <div>
              <label style={{ fontSize: 'var(--t-font-size-300)', fontWeight: 'var(--t-font-weight-medium)' }}>
                Custom Swap Content:
              </label>
              <input
                type="text"
                value={footerConfig.customContent}
                onChange={(e) => setFooterConfig(prev => ({ ...prev, customContent: e.target.value }))}
                placeholder="Enter custom content..."
                style={{
                  marginTop: '4px',
                  padding: '8px',
                  border: '1px solid var(--t-color-border-secondary)',
                  borderRadius: 'var(--t-border-radius-100)',
                  width: '100%'
                }}
              />
            </div>
          )}
        </div>

        <Modal
          {...args}
          open={isOpen}
          onOpenChange={setIsOpen}
          trigger={<Button>Open Dynamic Footer Modal</Button>}
          title="Dynamic Footer Control"
          showFooter={footerConfig.showPrimary || footerConfig.showSecondary || footerConfig.showCancel}
          footerVariant={footerConfig.footerVariant}
          
          // Cancel button visibility (only for cancelAndActions and swapAndActions)
          cancelLabel={footerConfig.showCancel ? "Cancel" : undefined}
          onCancel={footerConfig.showCancel ? () => setIsOpen(false) : undefined}
          
          // Secondary button visibility
          secondaryLabel={footerConfig.showSecondary ? "Draft" : undefined}
          showSecondaryButton={footerConfig.showSecondary}
          onSecondary={footerConfig.showSecondary ? () => console.log('Secondary action') : undefined}
          
          // Primary button visibility
          primaryLabel={footerConfig.showPrimary ? "Save" : undefined}
          showPrimaryButton={footerConfig.showPrimary}
          onPrimary={footerConfig.showPrimary ? () => console.log('Primary action') : undefined}
          
          // Custom swap content
          swapContent={
            footerConfig.footerVariant === 'swapAndActions' && footerConfig.customContent
              ? <span style={{ fontStyle: 'italic', color: 'var(--t-color-text-secondary)' }}>
                  {footerConfig.customContent}
                </span>
              : undefined
          }
        >
          <div style={{ padding: '16px' }}>
            <p>This modal demonstrates dynamic footer control:</p>
            <ul style={{ marginLeft: '20px', lineHeight: 1.6 }}>
              <li><strong>Footer Variants:</strong> Switch between cancelAndActions, swapAndActions, and actionsOnly</li>
              <li><strong>Button Visibility:</strong> Toggle individual buttons on/off</li>
              <li><strong>Custom Content:</strong> Add custom content to the swap area</li>
              <li><strong>RTL Support:</strong> All variants work correctly in RTL mode</li>
            </ul>
            
            <div style={{ 
              marginTop: '16px',
              padding: '12px',
              backgroundColor: 'var(--t-color-fill-brand-secondary)',
              borderRadius: 'var(--t-border-radius-200)',
              fontSize: 'var(--t-font-size-300)'
            }}>
              <strong>Current Configuration:</strong>
              <br />• Variant: {footerConfig.footerVariant}
              <br />• Cancel: {footerConfig.showCancel ? '✓' : '✗'}
              <br />• Secondary: {footerConfig.showSecondary ? '✓' : '✗'}
              <br />• Primary: {footerConfig.showPrimary ? '✓' : '✗'}
              {footerConfig.footerVariant === 'swapAndActions' && footerConfig.customContent && (
                <>
                  <br />• Custom Content: "{footerConfig.customContent}"
                </>
              )}
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates complete dynamic control over the Modal footer. Toggle button visibility, switch footer variants, and add custom content in real-time.',
      },
    },
  },
};
