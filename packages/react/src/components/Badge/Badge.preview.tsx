import type { ReactNode } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { IconCheck, IconAlertCircle, IconInfoCircle, IconSparkles } from '@tabler/icons-react';
import { Badge, badgeSizes, badgeTones, type BadgeProps } from './Badge';

const iconPresets: Record<string, ReactNode> = {
  IconCheck: <IconCheck />,
  IconAlertCircle: <IconAlertCircle />,
  IconInfoCircle: <IconInfoCircle />,
  IconSparkles: <IconSparkles />,
};

export const preview: PreviewModule<BadgeProps> = {
  name: 'Badge',
  slug: 'badge',
  description: 'Short status or category label with tone, size, strong style, and optional icon.',
  component: Badge,
  defaultProps: {
    children: 'Badge',
    tone: 'default',
    size: 'medium',
    strong: false,
  },
  controls: {
    children: { type: 'text', description: 'Label text' },
    tone: { type: 'select', options: badgeTones, description: 'Colour treatment' },
    size: { type: 'select', options: badgeSizes, description: 'Size preset' },
    strong: { type: 'boolean', description: 'Use stronger background/contrast' },
    icon: { type: 'node', description: 'Leading icon', presets: iconPresets },
  },
  examples: [
    { name: 'Default', props: { tone: 'default', children: 'Default' } },
    { name: 'Info', props: { tone: 'info', children: 'Info' } },
    { name: 'Success', props: { tone: 'success', children: 'Success' } },
    { name: 'Warning', props: { tone: 'warning', children: 'Warning' } },
    { name: 'Critical', props: { tone: 'critical', children: 'Critical' } },
    { name: 'Magic', props: { tone: 'magic', children: 'Magic' } },
    { name: 'Strong', props: { tone: 'success', strong: true, children: 'Strong' } },
    { name: 'WithIcon', props: { tone: 'success', icon: <IconCheck />, children: 'Done' } },
    {
      name: 'AllTonesAndSizes',
      description: 'Tone × size matrix.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {badgeSizes.map((size) => (
            <div key={size} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: 72 }}>{size}</strong>
              {badgeTones.map((tone) => (
                <Badge key={`${size}-${tone}`} tone={tone} size={size}>
                  {tone}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      ),
    },
  ],
};
