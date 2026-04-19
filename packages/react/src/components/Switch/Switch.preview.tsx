import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Switch, type SwitchProps } from './Switch';

const switchSizes = ['sm', 'md'] as const;

export const preview: PreviewModule<SwitchProps> = {
  name: 'Switch',
  slug: 'switch',
  description: 'Binary on/off toggle with small and medium sizes.',
  component: Switch,
  defaultProps: {
    size: 'md',
    defaultPressed: false,
    disabled: false,
  },
  controls: {
    size: { type: 'select', options: switchSizes, description: 'Size: small (20px) or medium (24px)' },
    disabled: { type: 'boolean', description: 'Disable interactions' },
    defaultPressed: { type: 'boolean', description: 'Initial pressed state (uncontrolled)' },
  },
  examples: [
    { name: 'Off', props: { defaultPressed: false } },
    { name: 'On', props: { defaultPressed: true } },
    { name: 'Small', props: { size: 'sm', defaultPressed: true } },
    { name: 'Medium', props: { size: 'md', defaultPressed: true } },
    { name: 'DisabledOff', props: { disabled: true, defaultPressed: false } },
    { name: 'DisabledOn', props: { disabled: true, defaultPressed: true } },
    {
      name: 'WithLabel',
      description: 'Common settings-style row.',
      props: {},
      render: () => (
        <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <Switch defaultPressed={true} />
          <span>Enable notifications</span>
        </label>
      ),
    },
    {
      name: 'Group',
      description: 'Multiple switches in a settings list.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Switch defaultPressed={true} />
            <span>Email updates</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Switch />
            <span>SMS updates</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Switch disabled />
            <span>Beta features (disabled)</span>
          </label>
        </div>
      ),
    },
  ],
};
