import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Popover, type PopoverProps } from './Popover';
import { Button } from '../Button/Button';
import { IconBell, IconHome, IconSettings, IconUser } from '@tabler/icons-react';

const popoverSides = ['top', 'right', 'bottom', 'left'] as const;
const popoverAligns = ['start', 'center', 'end'] as const;
const popoverTypes = ['default', 'with-scrollbar'] as const;
const popoverMargins = ['none', 'small', 'medium', 'large'] as const;

export const preview: PreviewModule<PopoverProps> = {
  name: 'Popover',
  slug: 'popover',
  description: 'Floating panel anchored to a trigger. Supports custom content or a built-in listbox.',
  component: Popover,
  defaultProps: {
    side: 'bottom',
    align: 'center',
    showArrow: true,
    type: 'default',
    margin: 'medium',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 200 }}>
        <strong>Popover content</strong>
        <span style={{ color: 'var(--t-color-text-secondary, #6b7280)', fontSize: 14 }}>
          Any React node can go here.
        </span>
      </div>
    ),
    children: <Button>Open popover</Button>,
  },
  controls: {
    side: { type: 'select', options: popoverSides, description: 'Preferred side relative to trigger' },
    align: { type: 'select', options: popoverAligns, description: 'Alignment along the chosen side' },
    showArrow: { type: 'boolean', description: 'Show the arrow pointing to the trigger' },
    type: { type: 'select', options: popoverTypes, description: 'Default or with overflow scrollbar' },
    margin: { type: 'select', options: popoverMargins, description: 'Content padding preset' },
    animationDuration: { type: 'number', description: 'Open/close animation duration in ms' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => (
        <Popover content={<div style={{ minWidth: 200 }}>Simple popover content.</div>}>
          <Button>Open popover</Button>
        </Popover>
      ),
    },
    {
      name: 'RichContent',
      props: {},
      render: () => (
        <Popover
          content={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 240 }}>
              <strong>Account</strong>
              <span style={{ color: 'var(--t-color-text-secondary, #6b7280)' }}>
                ahmed@example.com
              </span>
              <Button variant="outlined" size="small">Sign out</Button>
            </div>
          }
        >
          <Button variant="tonal">My account</Button>
        </Popover>
      ),
    },
    {
      name: 'WithListbox',
      description: 'Use the built-in listbox mode for menu-style popovers.',
      props: {},
      render: () => (
        <Popover
          useListbox
          listboxShowIcons
          listboxOptions={[
            { value: 'home', label: 'Home', icon: <IconHome size={16} /> },
            { value: 'profile', label: 'Profile', icon: <IconUser size={16} /> },
            { value: 'settings', label: 'Settings', icon: <IconSettings size={16} /> },
            { value: 'notifications', label: 'Notifications', icon: <IconBell size={16} /> },
          ]}
        >
          <Button variant="outlined">Navigate</Button>
        </Popover>
      ),
    },
    {
      name: 'AllSides',
      description: 'One popover per side of the trigger.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {popoverSides.map((side) => (
            <Popover
              key={side}
              side={side}
              content={<div style={{ minWidth: 140 }}>Side: {side}</div>}
            >
              <Button variant="outlined">{side}</Button>
            </Popover>
          ))}
        </div>
      ),
    },
  ],
};
