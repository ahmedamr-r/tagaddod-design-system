import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from './';
import { PopoverContent, PopoverTrigger, PopoverRoot } from '../Popover';
import { Checkbox } from '../Checkbox/Checkbox';
import { Separator } from '../Separator/Separator';
import { IconCheck, IconTag, IconStar, IconChevronDown } from '@tabler/icons-react';

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
    itemPaddingVertical: {
      control: 'number',
      description: 'Custom vertical padding (top and bottom) for listbox items in pixels',
    },
    itemPaddingHorizontal: {
      control: 'number',
      description: 'Custom horizontal padding (left and right) for listbox items in pixels',
    },
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

// Interactive story with multiple selection using Checkbox component
export const MultiSelect: Story = {
  args: {
    options: [],
    inPopover: false,
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>(['option1', 'option3']);
    
    return (
      <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
        <Listbox
          options={[
            { 
              label: 'Option 1', 
              value: 'option1',
              prefix: (
                <Checkbox
                  checked={selected.includes('option1')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, 'option1']);
                    } else {
                      setSelected(selected.filter(v => v !== 'option1'));
                    }
                  }}
                  hideLabel={true}
                />
              )
            },
            { 
              label: 'Option 2', 
              value: 'option2',
              prefix: (
                <Checkbox
                  checked={selected.includes('option2')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, 'option2']);
                    } else {
                      setSelected(selected.filter(v => v !== 'option2'));
                    }
                  }}
                  hideLabel={true}
                />
              )
            },
            { 
              label: 'Option 3', 
              value: 'option3',
              prefix: (
                <Checkbox
                  checked={selected.includes('option3')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, 'option3']);
                    } else {
                      setSelected(selected.filter(v => v !== 'option3'));
                    }
                  }}
                  hideLabel={true}
                />
              )
            },
            { 
              label: 'Option 4', 
              value: 'option4',
              prefix: (
                <Checkbox
                  checked={selected.includes('option4')}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, 'option4']);
                    } else {
                      setSelected(selected.filter(v => v !== 'option4'));
                    }
                  }}
                  hideLabel={true}
                />
              )
            },
          ]}
          selectedValue={selected}
          multiple={true}
          onMultiSelect={(values) => setSelected(values as string[])}
          inPopover={false}
        />
      </div>
    );
  }
};

// Custom padding story
export const WithCustomPadding: Story = {
  args: {
    options: [],
    inPopover: false,
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>Compact Padding (8px/12px)</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Compact Item 1', value: '1' },
              { label: 'Compact Item 2', value: '2' },
              { label: 'Compact Item 3', value: '3' },
            ]}
            itemPaddingVertical={8}
            itemPaddingHorizontal={12}
            selectedValue="1"
            inPopover={false}
          />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>Spacious Padding (20px/24px)</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Spacious Item 1', value: '1', prefix: <IconStar size={16} /> },
              { label: 'Spacious Item 2', value: '2', prefix: <IconTag size={16} /> },
              { label: 'Spacious Item 3', value: '3', prefix: <IconCheck size={16} /> },
            ]}
            itemPaddingVertical={20}
            itemPaddingHorizontal={24}
            selectedValue="2"
            inPopover={false}
          />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>Custom Shape (4px/32px)</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Narrow Height', value: '1', prefix: <IconStar size={16} /> },
              { label: 'Wide Sides', value: '2', prefix: <IconTag size={16} /> },
              { label: 'Custom Shape', value: '3', prefix: <IconCheck size={16} /> },
            ]}
            itemPaddingVertical={4}
            itemPaddingHorizontal={32}
            selectedValue="3"
            inPopover={false}
          />
        </div>
      </div>
    </div>
  ),
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

// With separators using Separator component
export const WithDividers: Story = {
  args: {
    options: [],
    inPopover: false,
  },
  render: () => (
    <div style={{ width: '240px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
      <Listbox
        options={[
          { label: 'Recent', value: 'recent' },
          { 
            label: '', 
            value: 'separator1', 
            disabled: true,
            customContent: <Separator decorative={true} spacing="none" />
          },
          { label: 'Yesterday', value: 'yesterday' },
          { label: 'Last Week', value: 'lastWeek' },
          { 
            label: '', 
            value: 'separator2', 
            disabled: true,
            customContent: <Separator decorative={true} spacing="none" />
          },
          { label: 'Last Month', value: 'lastMonth' },
          { label: 'Older', value: 'older' },
        ]}
        selectedValue="yesterday"
        inPopover={false}
      />
    </div>
  ),
};

// Separator spacing comparison
export const SeparatorSpacingComparison: Story = {
  args: {
    options: [],
    inPopover: false,
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>No Spacing</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Item 1', value: '1' },
              { 
                label: '', 
                value: 'sep1', 
                disabled: true,
                customContent: <Separator decorative={true} spacing="none" />
              },
              { label: 'Item 2', value: '2' },
            ]}
            selectedValue="1"
            inPopover={false}
          />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>Compact Spacing</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Item 1', value: '1' },
              { 
                label: '', 
                value: 'sep1', 
                disabled: true,
                customContent: <Separator decorative={true} spacing="compact" />
              },
              { label: 'Item 2', value: '2' },
            ]}
            selectedValue="1"
            inPopover={false}
          />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 0.5rem', fontSize: '14px', fontWeight: 600 }}>Custom Spacing (8px)</h4>
        <div style={{ width: '200px', border: '1px solid var(--t-color-border-subtle)', borderRadius: '8px' }}>
          <Listbox
            options={[
              { label: 'Item 1', value: '1' },
              { 
                label: '', 
                value: 'sep1', 
                disabled: true,
                customContent: <Separator decorative={true} spacing={8} />
              },
              { label: 'Item 2', value: '2' },
            ]}
            selectedValue="1"
            inPopover={false}
          />
        </div>
      </div>
    </div>
  ),
};

// In Popover - Interactive example
export const InPopover: Story = {
  args: {
    options: [],
    inPopover: true,
  },
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
