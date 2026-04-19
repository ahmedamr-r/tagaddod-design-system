import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Checkbox, type CheckboxProps } from './Checkbox';

export const preview: PreviewModule<CheckboxProps> = {
  name: 'Checkbox',
  slug: 'checkbox',
  description: 'Boolean or indeterminate selection control with label, help text, and error state.',
  component: Checkbox,
  defaultProps: {
    label: 'Accept terms',
    disabled: false,
    required: false,
    hideLabel: false,
  },
  controls: {
    label: { type: 'text', description: 'Label shown next to the checkbox' },
    helpText: { type: 'text', description: 'Supporting text below the checkbox' },
    error: { type: 'text', description: 'Error message (puts the checkbox in error state)' },
    disabled: { type: 'boolean', description: 'Disable interactions' },
    required: { type: 'boolean', description: 'Mark the field as required' },
    hideLabel: { type: 'boolean', description: 'Hide label visually (still accessible)' },
  },
  examples: [
    { name: 'Default', props: { label: 'Remember me' } },
    { name: 'CheckedByDefault', props: { label: 'Subscribed', defaultChecked: true } },
    { name: 'Indeterminate', props: { label: 'Select all', defaultChecked: 'indeterminate' } },
    { name: 'Required', props: { label: 'I agree to the terms', required: true } },
    { name: 'WithHelpText', props: { label: 'Notifications', helpText: 'We will email you about order updates.' } },
    { name: 'WithError', props: { label: 'I accept', error: 'You must accept to continue.' } },
    { name: 'Disabled', props: { label: 'Unavailable option', disabled: true } },
    {
      name: 'Group',
      description: 'A common group of checkboxes in a form.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Email updates" defaultChecked />
          <Checkbox label="SMS updates" />
          <Checkbox label="Push notifications" defaultChecked="indeterminate" />
          <Checkbox label="Disabled option" disabled />
        </div>
      ),
    },
  ],
};
