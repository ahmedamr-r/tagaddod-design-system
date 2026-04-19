import type { PreviewModule } from '@tagaddod-design/docs-types';
import { RadioGroup, RadioButtonItem } from './RadioButton';

interface RadioButtonPreviewProps {
  label?: string;
  helpText?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  defaultValue?: string;
}

const RadioButtonPreview = ({
  label = 'Option A',
  helpText,
  disabled,
  hideLabel,
  defaultValue = 'a',
}: RadioButtonPreviewProps) => (
  <RadioGroup defaultValue={defaultValue}>
    <RadioButtonItem
      id="radio-a"
      value="a"
      label={label}
      helpText={helpText}
      disabled={disabled}
      hideLabel={hideLabel}
    />
    <RadioButtonItem id="radio-b" value="b" label="Option B" />
    <RadioButtonItem id="radio-c" value="c" label="Option C" disabled={disabled} />
  </RadioGroup>
);

RadioButtonPreview.displayName = 'RadioButtonItem';

export const preview: PreviewModule<RadioButtonPreviewProps> = {
  name: 'RadioButton',
  slug: 'radio-button',
  description: 'Mutually exclusive selection via a group of radio inputs with labels and help text.',
  component: RadioButtonPreview,
  defaultProps: {
    label: 'Option A',
    defaultValue: 'a',
    disabled: false,
    hideLabel: false,
  },
  controls: {
    label: { type: 'text', description: 'Label for the first option' },
    helpText: { type: 'text', description: 'Help text under the first option' },
    defaultValue: { type: 'select', options: ['a', 'b', 'c'], description: 'Initially-selected value' },
    disabled: { type: 'boolean', description: 'Disable the first and third options' },
    hideLabel: { type: 'boolean', description: 'Hide labels visually (still accessible)' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => (
        <RadioGroup defaultValue="apple">
          <RadioButtonItem id="fruit-apple" value="apple" label="Apple" />
          <RadioButtonItem id="fruit-banana" value="banana" label="Banana" />
          <RadioButtonItem id="fruit-cherry" value="cherry" label="Cherry" />
        </RadioGroup>
      ),
    },
    {
      name: 'WithHelpText',
      props: {},
      render: () => (
        <RadioGroup defaultValue="standard">
          <RadioButtonItem
            id="plan-standard"
            value="standard"
            label="Standard"
            helpText="Billed monthly, cancel any time."
          />
          <RadioButtonItem
            id="plan-premium"
            value="premium"
            label="Premium"
            helpText="Includes priority support."
          />
          <RadioButtonItem
            id="plan-enterprise"
            value="enterprise"
            label="Enterprise"
            helpText="For teams of 50+."
            disabled
          />
        </RadioGroup>
      ),
    },
    {
      name: 'Horizontal',
      description: 'Custom flex layout using the same primitives.',
      props: {},
      render: () => (
        <RadioGroup defaultValue="left" style={{ display: 'flex', gap: 24 }}>
          <RadioButtonItem id="align-left" value="left" label="Left" />
          <RadioButtonItem id="align-center" value="center" label="Centre" />
          <RadioButtonItem id="align-right" value="right" label="Right" />
        </RadioGroup>
      ),
    },
  ],
};
