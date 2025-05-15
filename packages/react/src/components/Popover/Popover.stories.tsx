import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverProps, PopoverRoot, PopoverTrigger, PopoverContent, PopoverArrow, PopoverClose } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta<PopoverProps> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
                <Button variant="secondary" size="sm">Cancel</Button>
              </PopoverClose>
              <PopoverClose asChild>
                <Button size="sm">Confirm</Button>
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
        <PopoverContent className={meta.component.name} sideOffset={5}>
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