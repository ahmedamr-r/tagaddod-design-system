import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Listbox, ListboxOption } from './';
import { Popover, PopoverContent, PopoverTrigger, PopoverRoot } from '../Popover';
import { Button } from '../Button';
import buttonStyles from '../Button/Button.module.css';
import { IconSquareCheck, IconSquare, IconCheck, IconTag, IconStar, IconChevronDown } from '@tabler/icons-react';

const meta = {
  title: 'Components/Listbox',
  component: Listbox,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./Listbox.mdx'),
    },
  },
  tags: [],
  argTypes: {
    options: { control: 'object' },
    selectedValue: { control: 'text' },
    maxVisibleOptions: { control: 'number' },
    multiple: { control: 'boolean' },
    inPopover: { control: 'boolean' },
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple story with args
export const Basic: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ],
    selectedValue: 'option1',
    inPopover: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// WithIcons story
export const WithIcons: Story = {
  args: {
    options: [
      { 
        label: 'Selected Option', 
        value: 'selected',
        prefix: <IconCheck size={16} />
      },
      { 
        label: 'Tagged Items', 
        value: 'tagged',
        prefix: <IconTag size={16} />,
        suffix: <span style={{fontSize: '12px', color: 'var(--t-color-text-subtle)'}}>12</span>
      },
      { 
        label: 'Favorites', 
        value: 'favorites',
        prefix: <IconStar size={16} />,
        suffix: <span style={{fontSize: '12px', color: 'var(--t-color-text-subtle)'}}>5</span>
      },
    ],
    selectedValue: 'selected',
    inPopover: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// WithHelpText story
export const WithHelpText: Story = {
  args: {
    options: [
      { 
        label: 'Product Settings', 
        value: 'product',
        helpText: 'Manage product inventory and variations'
      },
      { 
        label: 'User Accounts', 
        value: 'users',
        helpText: 'Modify user permissions and access'
      },
      { 
        label: 'Payment Options', 
        value: 'payment',
        helpText: 'Configure available payment methods'
      },
    ],
    selectedValue: 'product',
    inPopover: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// Interactive story with multiple selection
export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['option1', 'option3']);
    
    return (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Listbox
          options={[
            { 
              label: 'Option 1', 
              value: 'option1',
              prefix: selected.includes('option1') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
            },
            { 
              label: 'Option 2', 
              value: 'option2',
              prefix: selected.includes('option2') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
            },
            { 
              label: 'Option 3', 
              value: 'option3',
              prefix: selected.includes('option3') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
            },
            { 
              label: 'Option 4', 
              value: 'option4',
              prefix: selected.includes('option4') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
            },
          ]}
          selectedValue={selected}
          multiple={true}
          onMultiSelect={setSelected}
          inPopover={false}
        />
      </div>
    );
  }
};

// Arabic (RTL) example
export const ArabicRTL: Story = {
  args: {
    options: [
      { label: 'الخيار الأول', value: 'option1' },
      { label: 'الخيار الثاني', value: 'option2' },
      { label: 'الخيار الثالث', value: 'option3', helpText: 'نص توضيحي للمساعدة' },
    ],
    selectedValue: 'option1',
    inPopover: false,
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// Disabled options
export const WithDisabledOptions: Story = {
  args: {
    options: [
      { label: 'Available Option', value: 'available' },
      { label: 'Disabled Option', value: 'disabled', disabled: true },
      { label: 'Another Available', value: 'another' },
      { label: 'Currently Unavailable', value: 'unavailable', disabled: true },
    ],
    selectedValue: 'available',
    inPopover: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// With dividers
export const WithDividers: Story = {
  args: {
    options: [
      { label: 'Recent', value: 'recent', divider: true },
      { label: 'Yesterday', value: 'yesterday' },
      { label: 'Last Week', value: 'lastWeek', divider: true },
      { label: 'Last Month', value: 'lastMonth' },
      { label: 'Older', value: 'older' },
    ],
    selectedValue: 'yesterday',
    inPopover: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

// In Popover - Interactive example
export const InPopover: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('filter1');
    const [open, setOpen] = useState(false);
    
    const options = [
      { label: 'Filter by Date', value: 'filter1' },
      { label: 'Filter by Status', value: 'filter2' },
      { label: 'Filter by Category', value: 'filter3' },
      { label: 'Filter by Priority', value: 'filter4' },
      { label: 'Filter by Assignee', value: 'filter5' },
    ];
    
    const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || 'Select...';
    
    return (
      <PopoverRoot open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {/* 
            We're using a simple HTML button element instead of the Button component 
            because Radix UI's asChild prop expects exactly one child with no children of its own.
            The Button component adds spans inside, which causes the error.
          */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              backgroundColor: 'var(--t-color-surface-secondary)',
              color: 'var(--t-color-text-primary)',
              border: '1px solid var(--t-color-border-default)',
              borderRadius: 'var(--t-border-radius-200)',
              cursor: 'pointer',
              gap: '8px',
              fontSize: 'var(--t-font-size-body-md)'
            }}
          >
            {selectedLabel}
            <IconChevronDown size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Listbox
            options={options}
            selectedValue={selectedOption}
            onSelect={(value) => {
              setSelectedOption(value.toString());
              setOpen(false);
            }}
            inPopover={true}
          />
        </PopoverContent>
      </PopoverRoot>
    );
  }
};
