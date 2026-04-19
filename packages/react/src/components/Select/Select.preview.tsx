import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Select, selectSizes, type SelectOption, type SelectProps } from './Select';

const fruitOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const countryOptions: SelectOption[] = [
  { value: 'eg', label: 'Egypt' },
  { value: 'sa', label: 'Saudi Arabia' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

export const preview: PreviewModule<SelectProps> = {
  name: 'Select',
  slug: 'select',
  description: 'Accessible dropdown with optional search, prefix, label, help/error, and five sizes.',
  component: Select,
  defaultProps: {
    label: 'Fruit',
    placeholder: 'Choose a fruit',
    options: fruitOptions,
    size: 'medium',
    fullWidth: false,
    searchable: false,
    disabled: false,
    required: false,
    optional: false,
    hideLabel: false,
  },
  controls: {
    label: { type: 'text', description: 'Label above the select' },
    placeholder: { type: 'text', description: 'Placeholder when nothing is selected' },
    helpText: { type: 'text', description: 'Supporting text below the select' },
    errorMessage: { type: 'text', description: 'Error message (puts select in error state)' },
    size: { type: 'select', options: selectSizes, description: 'Size preset' },
    fullWidth: { type: 'boolean', description: 'Stretch to container width' },
    searchable: { type: 'boolean', description: 'Show a search box inside the dropdown' },
    disabled: { type: 'boolean', description: 'Disable the trigger' },
    required: { type: 'boolean', description: 'Mark the field as required' },
    optional: { type: 'boolean', description: 'Display "(Optional)" next to label' },
    hideLabel: { type: 'boolean', description: 'Hide label visually (still accessible)' },
  },
  examples: [
    { name: 'Default', props: { label: 'Fruit', options: fruitOptions } },
    {
      name: 'WithHelpText',
      props: { label: 'Country', options: countryOptions, helpText: 'Used for tax calculation.' },
    },
    {
      name: 'WithError',
      props: {
        label: 'Country',
        options: countryOptions,
        errorMessage: 'Please choose a country.',
      },
    },
    {
      name: 'Searchable',
      props: {
        label: 'Country',
        options: countryOptions,
        searchable: true,
        searchPlaceholder: 'Search countries…',
      },
    },
    {
      name: 'Required',
      props: { label: 'Fruit', options: fruitOptions, required: true },
    },
    {
      name: 'Disabled',
      props: { label: 'Fruit', options: fruitOptions, disabled: true, defaultValue: 'apple' },
    },
    {
      name: 'AllSizes',
      description: 'Every size side-by-side.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
          {selectSizes.map((size) => (
            <Select key={size} size={size} label={size} options={fruitOptions} placeholder={`${size} select`} />
          ))}
        </div>
      ),
    },
  ],
};
