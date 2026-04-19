import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { IconHome, IconSettings, IconUser } from '@tabler/icons-react';
import { Listbox, type ListboxProps } from './Listbox';

const basicOptions = [
  { value: 'home', label: 'Home' },
  { value: 'profile', label: 'Profile' },
  { value: 'settings', label: 'Settings' },
];

const iconOptions = [
  { value: 'home', label: 'Home', prefix: <IconHome size={16} /> },
  { value: 'profile', label: 'Profile', prefix: <IconUser size={16} /> },
  { value: 'settings', label: 'Settings', prefix: <IconSettings size={16} /> },
];

const helpOptions = [
  { value: 'starter', label: 'Starter', helpText: 'Up to 3 seats' },
  { value: 'team', label: 'Team', helpText: 'Unlimited seats' },
  { value: 'enterprise', label: 'Enterprise', helpText: 'SSO and audit log', disabled: true },
];

export const preview: PreviewModule<ListboxProps> = {
  name: 'Listbox',
  slug: 'listbox',
  description: 'Accessible option list with single or multi-select, icons, help text, and dividers.',
  component: Listbox,
  defaultProps: {
    options: basicOptions,
    multiple: false,
    maxVisibleOptions: 5,
    inPopover: false,
  },
  controls: {
    multiple: { type: 'boolean', description: 'Allow multiple selection' },
    maxVisibleOptions: { type: 'number', description: 'Cap on how many options render' },
    inPopover: { type: 'boolean', description: 'Apply popover-context styling' },
  },
  examples: [
    {
      name: 'Basic',
      props: {},
      render: () => {
        const Demo = () => {
          const [value, setValue] = useState<string | number>('home');
          return (
            <div style={{ width: 240 }}>
              <Listbox options={basicOptions} selectedValue={value} onSelect={setValue} />
            </div>
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'WithIcons',
      props: {},
      render: () => {
        const Demo = () => {
          const [value, setValue] = useState<string | number>('profile');
          return (
            <div style={{ width: 240 }}>
              <Listbox options={iconOptions} selectedValue={value} onSelect={setValue} />
            </div>
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'WithHelpText',
      props: {},
      render: () => {
        const Demo = () => {
          const [value, setValue] = useState<string | number>('team');
          return (
            <div style={{ width: 280 }}>
              <Listbox options={helpOptions} selectedValue={value} onSelect={setValue} />
            </div>
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'Multiple',
      props: {},
      render: () => {
        const Demo = () => {
          const [values, setValues] = useState<Array<string | number>>(['home']);
          return (
            <div style={{ width: 240 }}>
              <Listbox
                options={basicOptions}
                multiple
                selectedValue={values}
                onMultiSelect={setValues}
              />
            </div>
          );
        };
        return <Demo />;
      },
    },
  ],
};
