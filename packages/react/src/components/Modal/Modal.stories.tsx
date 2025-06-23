import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

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
    rtl: false,
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


// RTL Modal for Arabic
export const RTL: Story = {
  args: {
    ...Default.args,
    rtl: true,
    title: 'العنوان',
    cancelLabel: 'إلغاء',
    primaryLabel: 'تأكيد',
    secondaryLabel: 'ثانوي',
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
