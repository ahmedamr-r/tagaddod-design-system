import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsTrigger, TabsContent, TabsList, tabsVariants, tabsCounts } from './Tabs';
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconBell, 
  IconCalendar, 
  IconMessage
} from '@tabler/icons-react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: tabsVariants,
      description: 'Visual appearance style'
    },
    fitted: {
      control: 'boolean',
      description: 'Whether tabs should take up full width'
    },
    count: {
      control: 'select',
      options: tabsCounts,
      description: 'Number of tabs'
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected tab'
    },
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'Text direction'
    }
  },
  args: {
    variant: 'primary',
    fitted: false,
    count: 3,
    defaultValue: 'tab1',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic tabs
export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Primary variant - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Primary variant - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Primary variant - Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Secondary variant - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Secondary variant - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Secondary variant - Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Fitted tabs
export const Fitted: Story = {
  args: {
    fitted: true,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Fitted tabs - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Fitted tabs - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Fitted tabs - Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// With badge
export const WithBadge: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" badge="3">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab two content with badge
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// With icon
export const WithIcon: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={18} />}>Profile</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Home tab content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Profile tab content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Settings tab content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// With icon and badge
export const WithIconAndBadge: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconBell size={18} />} badge="5">Notifications</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Home tab content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Notifications tab content with 5 new notifications
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Settings tab content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Disabled tab
export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Tab 2 (Disabled)</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab two content (disabled)
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// RTL
export const RTL: Story = {
  args: {
    dir: 'rtl',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>الرئيسية</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={18} />} badge="3">الملف الشخصي</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>الإعدادات</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          محتوى التبويب الأول
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          محتوى التبويب الثاني
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          محتوى التبويب الثالث
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Count variations
export const Count2: Story = {
  args: {
    count: 2,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 1 content - 2 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 2 content - 2 tabs total
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Count4: Story = {
  args: {
    count: 4,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 1 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 2 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 3 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Tab 4 content - 4 tabs total
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Count6: Story = {
  args: {
    count: 6,
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={16} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={16} />}>Profile</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconBell size={16} />}>Alerts</TabsTrigger>
        <TabsTrigger value="tab4" icon={<IconCalendar size={16} />}>Calendar</TabsTrigger>
        <TabsTrigger value="tab5" icon={<IconMessage size={16} />}>Messages</TabsTrigger>
        <TabsTrigger value="tab6" icon={<IconSettings size={16} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Home tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Profile tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Alerts tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Calendar tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab5">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Messages tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab6">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          Settings tab content - 6 tabs total
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3>Primary Tabs</h3>
        <Tabs defaultValue="tab1" variant="primary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Tabs</h3>
        <Tabs defaultValue="tab1" variant="secondary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Primary Fitted Tabs</h3>
        <Tabs defaultValue="tab1" variant="primary" fitted>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary fitted tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary fitted tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Primary fitted tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Fitted Tabs</h3>
        <Tabs defaultValue="tab1" variant="secondary" fitted>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary fitted tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary fitted tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              Secondary fitted tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

// Common use cases showcase
export const CommonUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3>Navigation Tabs</h3>
        <Tabs defaultValue="home" variant="primary" fitted>
          <TabsList>
            <TabsTrigger value="home" icon={<IconHome size={18} />}>Home</TabsTrigger>
            <TabsTrigger value="profile" icon={<IconUser size={18} />}>Profile</TabsTrigger>
            <TabsTrigger value="messages" icon={<IconMessage size={18} />} badge="3">Messages</TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Welcome to the Dashboard</h4>
              <p>This is the main view of your application.</p>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>User Profile</h4>
              <p>View and edit your profile information.</p>
            </div>
          </TabsContent>
          <TabsContent value="messages">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Messages</h4>
              <p>You have 3 unread messages.</p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Settings</h4>
              <p>Manage your account settings and preferences.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Form Sections</h3>
        <Tabs defaultValue="personal" variant="secondary">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Personal Information</h4>
              <p>Form fields for name, email, phone, etc. would go here.</p>
            </div>
          </TabsContent>
          <TabsContent value="address">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Address Information</h4>
              <p>Form fields for street, city, state, etc. would go here.</p>
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Payment Details</h4>
              <p>Form fields for card information, billing address, etc. would go here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
