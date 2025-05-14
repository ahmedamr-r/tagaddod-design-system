import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Controlled pagination story with state
export const Controlled: Story = {
  render: (args) => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    
    const handleChange = (page: number, size?: number) => {
      console.log(`Page changed to ${page}, size: ${size}`);
      setCurrent(page);
      if (size) setPageSize(size);
    };
    
    return (
      <Pagination 
        {...args} 
        current={current} 
        pageSize={pageSize}
        onChange={handleChange}
        onPageSizeChange={(size) => {
          console.log(`Page size changed to ${size}`);
          setPageSize(size);
        }}
      />
    );
  },
  args: {
    total: 100,
    showCount: true,
    showRowsInPage: true,
    countType: 'long',
  },
};

// Long pagination with ellipsis
export const LongPagination: Story = {
  args: {
    total: 500,
    current: 6,
    countType: 'long',
  },
};

// Short pagination without ellipsis
export const ShortPagination: Story = {
  args: {
    total: 80,
    current: 3,
    countType: 'short',
  },
};

// Hide count text
export const WithoutCount: Story = {
  args: {
    total: 100,
    current: 1,
    showCount: false,
  },
};

// Hide rows per page selector
export const WithoutRowsSelector: Story = {
  args: {
    total: 100,
    current: 1,
    showRowsInPage: false,
  },
};

// RTL pagination
export const RTLMode: Story = {
  render: (args) => {
    // Set RTL for this story only
    React.useEffect(() => {
      const prevDir = document.dir;
      document.dir = 'rtl';
      document.documentElement.dir = 'rtl';
      
      return () => {
        document.dir = prevDir;
        document.documentElement.dir = prevDir;
      };
    }, []);
    
    return <Pagination {...args} />;
  },
  args: {
    total: 100,
    current: 5,
  },
};

// Small total
export const SmallTotal: Story = {
  args: {
    total: 15,
    current: 1,
  },
};
