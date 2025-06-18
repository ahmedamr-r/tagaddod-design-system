import { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverProps, PopoverRoot, PopoverTrigger, PopoverContent, PopoverArrow, PopoverClose } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta<PopoverProps> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: [],
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'with-scrollbar'],
      description: 'Display a scrollbar to indicate overflow content in the popover',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side where the popover appears relative to the trigger',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the popover relative to the trigger',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show the arrow pointing to the trigger',
    },
    margin: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Custom margin for the popover content',
    },
    useListbox: {
      control: 'boolean',
      description: 'Enable listbox mode for dropdown functionality',
    },
    listboxShowIcons: {
      control: 'boolean',
      description: 'Whether to show icons for listbox items by default',
    },
    listboxMaxItems: {
      control: 'number',
      description: 'Maximum number of visible options in the listbox',
    },
    listboxMultiple: {
      control: 'boolean',
      description: 'Whether the listbox supports multiple selection',
    },
    listboxItemPaddingVertical: {
      control: 'number',
      description: 'Custom vertical padding (top and bottom) for listbox items in pixels',
    },
    listboxItemPaddingHorizontal: {
      control: 'number',
      description: 'Custom horizontal padding (left and right) for listbox items in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<PopoverProps>;

const Template = (args: PopoverProps) => (
  <Popover
    {...args}
    content={args.content}
  >
    <Button>Click me</Button>
  </Popover>
);

export const Default: Story = {
  render: Template,
  args: {
    content: 'This is a basic popover content',
    type: 'default',
    side: 'bottom',
    align: 'center',
    showArrow: true,
  },
};

export const WithScrollbar: Story = {
  render: Template,
  args: {
    content: (
      <div>
        <p>This popover has a lot of content that might require scrolling.</p>
        <p>You can see how the scrollbar appears when the content exceeds the maximum height.</p>
        <p>This is useful for displaying larger amounts of information without taking up too much screen space.</p>
        <p>The popover will automatically handle overflow content.</p>
        <p>This is line 5 of the content.</p>
        <p>This is line 6 of the content.</p>
        <p>This is line 7 of the content.</p>
        <p>This is line 8 of the content.</p>
      </div>
    ),
    type: 'with-scrollbar',
    side: 'bottom',
    align: 'center',
    showArrow: true,
  },
};

// New Listbox integration stories
export const WithListbox: Story = {
  render: Template,
  args: {
    useListbox: true,
    listboxOptions: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
    ],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: (value) => console.log('Selected:', value),
  },
};

export const WithListboxIcons: Story = {
  render: Template,
  args: {
    useListbox: true,
    listboxShowIcons: true,
    listboxDefaultIcon: '📄',
    listboxOptions: [
      { label: 'Documents', value: 'docs' },
      { label: 'Images', value: 'images', icon: '🖼️' },
      { label: 'Videos', value: 'videos', icon: '🎥' },
      { label: 'Music', value: 'music', icon: '🎵' },
      { label: 'Downloads', value: 'downloads' },
    ],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: (value) => console.log('Selected:', value),
  },
};

export const WithMixedIcons: Story = {
  render: Template,
  args: {
    useListbox: true,
    listboxShowIcons: false, // Global setting is false
    listboxOptions: [
      { label: 'Home', value: 'home', showIcon: true, icon: '🏠' },
      { label: 'Profile', value: 'profile' }, // No icon
      { label: 'Settings', value: 'settings', showIcon: true, icon: '⚙️' },
      { label: 'Help', value: 'help' }, // No icon
      { label: 'Logout', value: 'logout', showIcon: true, icon: '🚪' },
    ],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: (value) => console.log('Selected:', value),
  },
};

export const WithScrollableListbox: Story = {
  render: Template,
  args: {
    useListbox: true,
    type: 'with-scrollbar',
    listboxOptions: Array.from({ length: 15 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
      helpText: i % 3 === 0 ? `This is help text for option ${i + 1}` : undefined,
    })),
    listboxMaxItems: 6,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: (value) => console.log('Selected:', value),
  },
};

export const EnhancedScrollableDropdown: Story = {
  render: Template,
  args: {
    useListbox: true,
    type: 'with-scrollbar',
    listboxShowIcons: true,
    listboxOptions: [
      // Recent Files Section
      { label: 'Document.pdf', value: 'doc1', icon: '📄', helpText: 'Modified 2 hours ago' },
      { label: 'Presentation.pptx', value: 'pres1', icon: '📊', helpText: 'Modified 1 day ago' },
      { label: 'Spreadsheet.xlsx', value: 'sheet1', icon: '📈', helpText: 'Modified 3 days ago' },
      
      // Favorites Section  
      { label: 'Project Plans', value: 'fav1', icon: '⭐', divider: true },
      { label: 'Team Photos', value: 'fav2', icon: '⭐' },
      { label: 'Budget 2024', value: 'fav3', icon: '⭐' },
      
      // Applications Section
      { label: 'Calculator', value: 'app1', icon: '🧮', divider: true },
      { label: 'Calendar', value: 'app2', icon: '📅' },
      { label: 'Notes', value: 'app3', icon: '📝' },
      { label: 'Weather', value: 'app4', icon: '🌤️' },
      { label: 'Music Player', value: 'app5', icon: '🎵' },
      { label: 'Photo Editor', value: 'app6', icon: '🖼️' },
      { label: 'Video Player', value: 'app7', icon: '🎬' },
      { label: 'Terminal', value: 'app8', icon: '💻' },
      { label: 'Text Editor', value: 'app9', icon: '📄' },
      { label: 'Web Browser', value: 'app10', icon: '🌐' },
      { label: 'File Manager', value: 'app11', icon: '📁' },
      { label: 'System Settings', value: 'app12', icon: '⚙️' },
    ],
    listboxMaxItems: 8,
    side: 'bottom',
    align: 'start',
    showArrow: true,
    margin: 'small',
    onListboxSelect: (value) => console.log('Selected:', value),
  },
};

export const WithMultipleSelection: Story = {
  render: Template,
  args: {
    useListbox: true,
    listboxMultiple: true,
    listboxSelectedValue: ['1', '3'],
    listboxOptions: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
    ],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxMultiSelect: (values) => console.log('Selected values:', values),
  },
};

// Margin customization stories
export const CustomMargins: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Popover
        content="No margin"
        margin="none"
      >
        <Button>No Margin</Button>
      </Popover>
      
      <Popover
        content="Small margin"
        margin="small"
      >
        <Button>Small</Button>
      </Popover>
      
      <Popover
        content="Medium margin (default)"
        margin="medium"
      >
        <Button>Medium</Button>
      </Popover>
      
      <Popover
        content="Large margin"
        margin="large"
      >
        <Button>Large</Button>
      </Popover>
      
      <Popover
        content="Custom 20px margin"
        margin={20}
      >
        <Button>Custom (20px)</Button>
      </Popover>
    </div>
  ),
};

export const ListboxWithCustomMargins: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Popover
        useListbox
        margin="none"
        listboxOptions={[
          { label: 'Compact Option 1', value: '1' },
          { label: 'Compact Option 2', value: '2' },
          { label: 'Compact Option 3', value: '3' },
        ]}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>No Margin Listbox</Button>
      </Popover>
      
      <Popover
        useListbox
        margin={10}
        listboxShowIcons
        listboxDefaultIcon="⭐"
        listboxOptions={[
          { label: 'Custom Margin 1', value: '1' },
          { label: 'Custom Margin 2', value: '2' },
          { label: 'Custom Margin 3', value: '3' },
        ]}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>Custom Margin</Button>
      </Popover>
    </div>
  ),
};

export const ListboxWithCustomPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Popover
        useListbox
        listboxItemPaddingVertical={8}
        listboxItemPaddingHorizontal={12}
        listboxOptions={[
          { label: 'Compact Item 1', value: '1' },
          { label: 'Compact Item 2', value: '2' },
          { label: 'Compact Item 3', value: '3' },
        ]}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>Compact Padding</Button>
      </Popover>
      
      <Popover
        useListbox
        listboxItemPaddingVertical={20}
        listboxItemPaddingHorizontal={24}
        listboxShowIcons
        listboxDefaultIcon="📄"
        listboxOptions={[
          { label: 'Spacious Item 1', value: '1' },
          { label: 'Spacious Item 2', value: '2' },
          { label: 'Spacious Item 3', value: '3' },
        ]}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>Spacious Padding</Button>
      </Popover>
      
      <Popover
        useListbox
        listboxItemPaddingVertical={4}
        listboxItemPaddingHorizontal={32}
        listboxShowIcons
        listboxOptions={[
          { label: 'Narrow Height', value: '1', icon: '🔥' },
          { label: 'Wide Sides', value: '2', icon: '⚡' },
          { label: 'Custom Shape', value: '3', icon: '🎯' },
        ]}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>Custom Shape</Button>
      </Popover>
      
      <Popover
        useListbox
        type="with-scrollbar"
        listboxItemPaddingVertical={16}
        listboxItemPaddingHorizontal={20}
        listboxMaxItems={5}
        listboxShowIcons
        listboxOptions={Array.from({ length: 12 }, (_, i) => ({
          label: `Padded Option ${i + 1}`,
          value: `option-${i + 1}`,
          icon: i % 3 === 0 ? '📁' : i % 3 === 1 ? '📄' : '🖼️',
          helpText: i % 4 === 0 ? `Help text for option ${i + 1}` : undefined,
        }))}
        onListboxSelect={(value) => console.log('Selected:', value)}
      >
        <Button>Scrollable Custom Padding</Button>
      </Popover>
    </div>
  ),
};

export const Different_Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Popover
        content="This popover appears on top"
        side="top"
        align="center"
      >
        <Button>Top</Button>
      </Popover>
      
      <Popover
        content="This popover appears on the right"
        side="right"
        align="center"
      >
        <Button>Right</Button>
      </Popover>
      
      <Popover
        content="This popover appears on the bottom"
        side="bottom"
        align="center"
      >
        <Button>Bottom</Button>
      </Popover>
      
      <Popover
        content="This popover appears on the left"
        side="left"
        align="center"
      >
        <Button>Left</Button>
      </Popover>
    </div>
  ),
};

export const Compositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Popover
        content={
          <div>
            <h4 style={{ margin: '0 0 0.5rem' }}>Popover Title</h4>
            <p style={{ margin: '0 0 1rem' }}>This popover contains a title and action buttons.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <PopoverClose asChild>
                <Button variant="secondary" size="micro">Cancel</Button>
              </PopoverClose>
              <PopoverClose asChild>
                <Button size="micro">Confirm</Button>
              </PopoverClose>
            </div>
          </div>
        }
      >
        <Button>With Buttons</Button>
      </Popover>

      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button>Custom Composition</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={5}>
          <div style={{ padding: '0.5rem' }}>
            <h4>Custom Components</h4>
            <p>Using PopoverRoot, PopoverTrigger, and PopoverContent for more control.</p>
            <PopoverArrow />
          </div>
        </PopoverContent>
      </PopoverRoot>
    </div>
  ),
};