import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Card, cardSizes, cardVariants, type CardProps } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { Avatar } from '../Avatar/Avatar';

export const preview: PreviewModule<CardProps> = {
  name: 'Card',
  slug: 'card',
  description: 'Container with variants, sizes, optional header/footer, and interactive states.',
  component: Card,
  defaultProps: {
    variant: 'elevated',
    size: 'medium',
    interactive: false,
    clickable: false,
    fullWidth: false,
    header: <strong>Card title</strong>,
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Button variant="outlined" size="small">Cancel</Button>
        <Button size="small">Save</Button>
      </div>
    ),
    children: (
      <p style={{ margin: 0 }}>
        Card body — place any content here. The surrounding Card component provides padding,
        borders, and elevation according to variant and size.
      </p>
    ),
  },
  controls: {
    variant: { type: 'select', options: cardVariants, description: 'Elevated, outlined, or ghost' },
    size: { type: 'select', options: cardSizes, description: 'Padding and spacing preset' },
    interactive: { type: 'boolean', description: 'Enable hover/focus affordance' },
    clickable: { type: 'boolean', description: 'Make the whole card feel clickable' },
    fullWidth: { type: 'boolean', description: 'Stretch to container width' },
    containerPadding: { type: 'text', description: 'Override container padding (CSS value)' },
    contentPadding: { type: 'text', description: 'Override content padding (CSS value)' },
  },
  examples: [
    {
      name: 'Elevated',
      props: {
        variant: 'elevated',
        header: <strong>Elevated</strong>,
        children: <p style={{ margin: 0 }}>Default card with soft shadow.</p>,
      },
    },
    {
      name: 'Outlined',
      props: {
        variant: 'outlined',
        header: <strong>Outlined</strong>,
        children: <p style={{ margin: 0 }}>Bordered card without shadow.</p>,
      },
    },
    {
      name: 'Ghost',
      props: {
        variant: 'ghost',
        header: <strong>Ghost</strong>,
        children: <p style={{ margin: 0 }}>Minimal card — no border, no shadow.</p>,
      },
    },
    {
      name: 'ClickableProfile',
      description: 'Interactive card for a profile summary.',
      props: {},
      render: () => (
        <Card clickable interactive variant="elevated" size="medium" style={{ maxWidth: 320 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Avatar type="initial" initial="A" size="large" />
            <div>
              <strong>Ahmed Ali</strong>
              <div style={{ color: 'var(--t-color-text-secondary, #6b7280)', fontSize: 14 }}>
                Admin · Member since 2024
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      name: 'StatCard',
      description: 'A metric card with a badge.',
      props: {},
      render: () => (
        <Card variant="outlined" size="medium" style={{ minWidth: 220 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: 'var(--t-color-text-secondary, #6b7280)' }}>Total orders</span>
            <strong style={{ fontSize: 28 }}>1,248</strong>
            <Badge tone="success">+12% this week</Badge>
          </div>
        </Card>
      ),
    },
    {
      name: 'AllSizes',
      description: 'Every size preset stacked.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
          {cardSizes.map((size) => (
            <Card key={size} size={size} variant="elevated" header={<strong>{size}</strong>}>
              <p style={{ margin: 0 }}>Padding and spacing adapt to the size.</p>
            </Card>
          ))}
        </div>
      ),
    },
  ],
};
