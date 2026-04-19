import type { ReactNode } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import {
  IconPlus,
  IconSearch,
  IconArrowRight,
  IconDownload,
  IconCheck,
  IconRefresh,
  IconTrash,
  IconEdit,
} from '@tabler/icons-react';
import { Button, buttonVariants, buttonTones, buttonSizes, type ButtonProps } from './Button';

const iconPresets: Record<string, ReactNode> = {
  IconPlus: <IconPlus />,
  IconSearch: <IconSearch />,
  IconArrowRight: <IconArrowRight />,
  IconDownload: <IconDownload />,
  IconCheck: <IconCheck />,
  IconRefresh: <IconRefresh />,
  IconTrash: <IconTrash />,
  IconEdit: <IconEdit />,
};

export const preview: PreviewModule<ButtonProps> = {
  name: 'Button',
  slug: 'button',
  description: 'Primary interactive element with variants, tones, sizes, and loading state.',
  component: Button,
  defaultProps: {
    children: 'Button',
    variant: 'primary',
    tone: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  controls: {
    variant: { type: 'select', options: buttonVariants, description: 'Visual style' },
    tone: { type: 'select', options: buttonTones, description: 'Color treatment' },
    size: { type: 'select', options: buttonSizes, description: 'Size preset' },
    fullWidth: { type: 'boolean', description: 'Stretch to container width' },
    disabled: { type: 'boolean', description: 'Disable interactions' },
    loading: { type: 'boolean', description: 'Show spinner, keep width' },
    prefixIcon: { type: 'node', description: 'Icon before text', presets: iconPresets },
    suffixIcon: { type: 'node', description: 'Icon after text', presets: iconPresets },
    children: { type: 'text', description: 'Button label' },
  },
  examples: [
    { name: 'Primary', props: { variant: 'primary', children: 'Primary Button' } },
    { name: 'Tonal', props: { variant: 'tonal', children: 'Tonal Button' } },
    { name: 'Outlined', props: { variant: 'outlined', children: 'Outlined Button' } },
    { name: 'Plain', props: { variant: 'plain', children: 'Plain Button' } },
    { name: 'Critical', props: { tone: 'critical', children: 'Critical Button' } },
    { name: 'Success', props: { tone: 'success', children: 'Success Button' } },
    { name: 'Neutral', props: { tone: 'neutral', children: 'Neutral Button' } },
    { name: 'Magic', props: { tone: 'magic', children: 'Magic Button' } },
    { name: 'XLarge', props: { size: 'xLarge', children: 'X-Large Button' } },
    { name: 'Large', props: { size: 'large', children: 'Large Button' } },
    { name: 'Medium', props: { size: 'medium', children: 'Medium Button' } },
    { name: 'Small', props: { size: 'small', children: 'Small Button' } },
    { name: 'XSmall', props: { size: 'xSmall', children: 'X-Small Button' } },
    { name: 'Loading', props: { loading: true, children: 'Loading Button' } },
    { name: 'Disabled', props: { disabled: true, children: 'Disabled Button' } },
    { name: 'FullWidth', props: { fullWidth: true, children: 'Full Width Button' } },
    {
      name: 'WithPrefixIcon',
      props: { children: 'Add Item', prefixIcon: <IconPlus /> },
    },
    {
      name: 'WithSuffixIcon',
      props: { children: 'Next Step', suffixIcon: <IconArrowRight /> },
    },
    {
      name: 'WithBothIcons',
      props: {
        children: 'Search Results',
        prefixIcon: <IconSearch />,
        suffixIcon: <IconArrowRight />,
      },
    },
    {
      name: 'IconOnly',
      props: { prefixIcon: <IconPlus />, 'aria-label': 'Add item' } as Partial<ButtonProps>,
    },
    {
      name: 'RtlText',
      description: 'Arabic label with icons — switch direction to RTL to preview.',
      props: {
        children: 'زر عربي',
        prefixIcon: <IconPlus />,
        suffixIcon: <IconArrowRight />,
      },
    },
    {
      name: 'AllVariantsAndTones',
      description: 'Variant × tone matrix.',
      props: {},
      render: () => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
          }}
        >
          {buttonTones.map((tone) => (
            <div
              key={tone}
              style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}
            >
              <strong>{tone}</strong>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {buttonVariants.map((variant) => (
                  <Button key={`${tone}-${variant}`} tone={tone} variant={variant}>
                    {variant}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      name: 'AllSizes',
      description: 'Every size side-by-side.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button size="xLarge">X-Large</Button>
          <Button size="large">Large</Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
          <Button size="xSmall">X-Small</Button>
        </div>
      ),
    },
    {
      name: 'CommonUseCases',
      description: 'Common button compositions.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" prefixIcon={<IconPlus />}>
              Add Item
            </Button>
            <Button variant="primary" tone="success" prefixIcon={<IconCheck />}>
              Save
            </Button>
            <Button variant="primary" tone="critical" prefixIcon={<IconTrash />}>
              Delete
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="tonal" prefixIcon={<IconEdit />}>
              Edit
            </Button>
            <Button variant="tonal" prefixIcon={<IconRefresh />}>
              Refresh
            </Button>
            <Button variant="outlined" prefixIcon={<IconDownload />}>
              Download
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between' }}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </div>
        </div>
      ),
    },
  ],
};
