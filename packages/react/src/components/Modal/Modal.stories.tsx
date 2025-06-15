import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { IconInfoCircle, IconAlertTriangle, IconCheck } from '@tabler/icons-react';

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
    showTitle: {
      control: 'boolean',
    },
    showFooter: {
      control: 'boolean',
    },
    footerStyle: {
      control: 'select',
      options: ['default', 'style1', 'style2'],
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
    footerStyle: 'default',
    cancelLabel: 'Cancel',
    confirmLabel: 'Label',
    size: 'default',
    rtl: false,
    defaultOpen: true, // For Storybook viewing
    children: <div style={{ textAlign: 'center', padding: '16px' }}>Swap</div>,
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

// Fullscreen Modal
export const Fullscreen: Story = {
  args: {
    ...Default.args,
    size: 'fullscreen',
  },
};

// RTL Modal for Arabic
export const RTL: Story = {
  args: {
    ...Default.args,
    rtl: true,
    title: 'العنوان',
    cancelLabel: 'إلغاء',
    confirmLabel: 'تأكيد',
  },
};

// Modal with style1 footer
export const FooterStyle1: Story = {
  args: {
    ...Default.args,
    footerStyle: 'style1',
  },
};

// Modal with style2 footer
export const FooterStyle2: Story = {
  args: {
    ...Default.args,
    footerStyle: 'style2',
  },
};

// Modal with info icon
export const InfoModal: Story = {
  args: {
    ...Default.args,
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconInfoCircle size={20} color="#0066ff" />
        Information
      </div>
    ),
    children: <div style={{ padding: '16px' }}>This is an informational message.</div>,
    trigger: <Button prefixIcon={<IconInfoCircle />}>Open Info Modal</Button>,
  },
};

// Modal with warning
export const WarningModal: Story = {
  args: {
    ...Default.args,
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconAlertTriangle size={20} color="#ff9800" />
        Warning
      </div>
    ),
    children: <div style={{ padding: '16px' }}>Please be careful with this action.</div>,
    trigger: <Button tone="neutral" prefixIcon={<IconAlertTriangle />}>Open Warning Modal</Button>,
  },
};

// Success modal
export const SuccessModal: Story = {
  args: {
    ...Default.args,
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconCheck size={20} color="#4caf50" />
        Success
      </div>
    ),
    children: <div style={{ padding: '16px' }}>Operation completed successfully!</div>,
    trigger: <Button tone="success" prefixIcon={<IconCheck />}>Open Success Modal</Button>,
    showFooter: false,
  },
};