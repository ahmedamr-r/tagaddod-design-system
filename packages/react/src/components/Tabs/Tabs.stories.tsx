import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsTrigger, TabsContent, TabsList, tabsVariants, tabsCounts, tabsOrientations } from './Tabs';
import styles from './Tabs.module.css';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconBell,
  IconCalendar,
  IconMessage,
  IconChartBar,
  IconFileText
} from '@tabler/icons-react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A set of layered sections of content—known as tab panels—that are displayed one at a time. The component follows WAI-ARIA guidelines for tabs with keyboard navigation support and proper ARIA roles and attributes.',
      },
    },
  },
  tags: [],
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
    orientation: {
      control: 'radio',
      options: tabsOrientations,
      description: 'Tab orientation (horizontal or vertical)'
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected tab'
    },
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'Text direction'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the tab list'
    },
    ariaLabelledby: {
      control: 'text',
      description: 'ID of element that labels the tab list'
    }
  },
  args: {
    variant: 'primary',
    fitted: false,
    count: 3,
    orientation: 'horizontal',
    defaultValue: 'tab1',
    ariaLabel: 'Content tabs',
    children: <div>Tabs content</div>,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  name: 'Tabs Playground',
  render: (args) => {
    // Helper function to create tab elements based on count
    const createTabs = (count: number, useIcons: boolean = false, withBadges: boolean = false) => {
      const tabs = [];
      
      // Tab Icons
      const icons = [
        <IconHome size={18} />,
        <IconUser size={18} />,
        <IconSettings size={18} />,
        <IconBell size={18} />,
        <IconCalendar size={18} />,
        <IconMessage size={18} />
      ];
      
      // Labels based on direction
      const getLabel = (index: number) => {
        if (args.dir === 'rtl') {
          const arabicLabels = ['الرئيسية', 'الملف الشخصي', 'الإعدادات', 'التنبيهات', 'التقويم', 'الرسائل'];
          return arabicLabels[index] || `Tab ${index + 1}`;
        }
        
        const englishLabels = ['Home', 'Profile', 'Settings', 'Notifications', 'Calendar', 'Messages'];
        return englishLabels[index] || `Tab ${index + 1}`;
      };
      
      for (let i = 0; i < count; i++) {
        tabs.push(
          <TabsTrigger 
            key={`tab${i+1}`} 
            value={`tab${i+1}`}
            icon={useIcons ? icons[i] : undefined}
            badge={withBadges && i === 1 ? '3' : undefined}
            description={`Description for ${getLabel(i)}`}
          >
            {getLabel(i)}
          </TabsTrigger>
        );
      }
      
      return tabs;
    };
    
    // Helper function to create tab content elements based on count
    const createTabContent = (count: number) => {
      const contents = [];
      
      // Content based on direction
      const getContent = (index: number) => {
        if (args.dir === 'rtl') {
          const arabicContent = ['محتوى الرئيسية', 'محتوى الملف الشخصي', 'محتوى الإعدادات', 'محتوى التنبيهات', 'محتوى التقويم', 'محتوى الرسائل'];
          return arabicContent[index] || `محتوى التبويب ${index + 1}`;
        }
        
        return `Content for tab ${index + 1}`;
      };
      
      for (let i = 0; i < count; i++) {
        contents.push(
          <TabsContent key={`content${i+1}`} value={`tab${i+1}`}>
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: args.orientation === 'vertical' ? '200px' : 'auto' }}>
              <h4>{getLabel(i)}</h4>
              <p>{getContent(i)}</p>
              <p>This tab demonstrates the {args.variant} variant with {args.orientation} orientation.</p>
              {args.fitted && <p>These tabs are fitted to take full width.</p>}
            </div>
          </TabsContent>
        );
      }
      
      return contents;
    };
    
    // Helper function for getting labels based on direction and index
    const getLabel = (index: number) => {
      if (args.dir === 'rtl') {
        const arabicLabels = ['الرئيسية', 'الملف الشخصي', 'الإعدادات', 'التنبيهات', 'التقويم', 'الرسائل'];
        return arabicLabels[index] || `Tab ${index + 1}`;
      }
      
      const englishLabels = ['Home', 'Profile', 'Settings', 'Notifications', 'Calendar', 'Messages'];
      return englishLabels[index] || `Tab ${index + 1}`;
    };
    
    // For vertical orientation, we need a different layout
    if (args.orientation === 'vertical') {
      return (
        <div style={{ display: 'flex', gap: '20px' }}>
          <Tabs {...args}>
            <TabsList>
              {createTabs(args.count || 3, true, true)}
            </TabsList>
            {createTabContent(args.count || 3)}
          </Tabs>
        </div>
      );
    }
    
    // Standard horizontal layout
    return (
      <Tabs {...args}>
        <TabsList>
          {createTabs(args.count || 3, true, true)}
        </TabsList>
        {createTabContent(args.count || 3)}
      </Tabs>
    );
  }
};

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
    children: <div>Primary tabs content</div>,
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

// Vertical orientation
export const VerticalOrientation: Story = {
  args: {
    orientation: 'vertical',
    variant: 'secondary', // Vertical works better with secondary style
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Security</TabsTrigger>
          <TabsTrigger value="tab3">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '150px' }}>
            <h3>Account Settings</h3>
            <p>Manage your account information.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '150px' }}>
            <h3>Security Settings</h3>
            <p>Update your password and security preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '150px' }}>
            <h3>Notification Settings</h3>
            <p>Control how you receive notifications.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

// With Tab Description (for screen readers)
export const WithTabDescription: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger 
          value="tab1" 
          description="View and edit your profile information">
          Profile
        </TabsTrigger>
        <TabsTrigger 
          value="tab2" 
          description="Manage account security settings">
          Security
        </TabsTrigger>
        <TabsTrigger 
          value="tab3" 
          description="Configure your notification preferences">
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h3>Profile</h3>
          <p>Edit your personal information and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h3>Security</h3>
          <p>Update your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h3>Notifications</h3>
          <p>Control how you receive notifications.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with descriptions for screen readers. The descriptions are not visible but are announced by screen readers.',
      },
    },
  },
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

// Animation Showcase
export const AnimationShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Primary Tab Animation</h3>
        <p>Click different tabs to see the animation in action.</p>
        <Tabs defaultValue="tab1" variant="primary" ariaLabel="Animation showcase - primary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 1 Content</h4>
              <p>Notice the slide-in underline animation and the fade-in of this content.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 2 Content</h4>
              <p>Watch how the underline transitions from Tab 1 to Tab 2.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 3 Content</h4>
              <p>Smooth animation respects the 'prefers-reduced-motion' setting.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Tab Animation</h3>
        <p>Click different tabs to see the animation in action.</p>
        <Tabs defaultValue="tab1" variant="secondary" ariaLabel="Animation showcase - secondary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 1 Content</h4>
              <p>Notice the scale-in animation of the tab and fade-in of this content.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 2 Content</h4>
              <p>Watch how the tab scales in when activated.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', height: '100px' }}>
              <h4>Tab 3 Content</h4>
              <p>The content also has a slight slide-in transition from top.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of tab animations with different variants. The animations respect user preferences with `prefers-reduced-motion` media query.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3>Primary Tabs</h3>
        <Tabs defaultValue="tab1" variant="primary" ariaLabel="Primary tabs example">
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
        <Tabs defaultValue="tab1" variant="secondary" ariaLabel="Secondary tabs example">
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
        <Tabs defaultValue="tab1" variant="primary" fitted ariaLabel="Primary fitted tabs example">
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
        <Tabs defaultValue="tab1" variant="secondary" fitted ariaLabel="Secondary fitted tabs example">
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
// Badge states showcase
export const BadgeStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h3>Badge States in Different Tab States</h3>
      <p>This showcase demonstrates how badges appear in different tab states.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4>Default/Rest State</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fff' }}>
            <TabsTrigger value="rest" badge="3">Label</TabsTrigger>
          </div>
          <p>Badge has a light gray background (fill-hover) with text-secondary color</p>
        </div>
        
        <h4>Hover State</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#f9f9fa' }}>
            <TabsTrigger 
              value="hover" 
              badge="3"
              // Force hover styles to be applied
              className={styles.tabsTriggerHover}
            >Label</TabsTrigger>
          </div>
          <p>Badge has a darker gray background (fill-active) with text-primary color</p>
        </div>
        
        <h4>Active State</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fff' }}>
            <TabsTrigger 
              value="active" 
              badge="3"
              data-state="active"
            >Label</TabsTrigger>
          </div>
          <p>Badge has a brand-secondary background with text-link color</p>
        </div>
        
        <h4>Disabled State</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fff' }}>
            <TabsTrigger 
              value="disabled" 
              badge="3"
              disabled
            >Label</TabsTrigger>
          </div>
          <p>Badge has background-primary and text-secondary color</p>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Tabs defaultValue="rest" variant="primary">
          <TabsList>
            <TabsTrigger value="rest" badge="3">Rest</TabsTrigger>
            <TabsTrigger value="hover" badge="3">Hover</TabsTrigger>
            <TabsTrigger value="active" badge="3">Active</TabsTrigger>
            <TabsTrigger value="disabled" badge="3" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="rest">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Rest State Badge</h4>
              <p>In its default state, the badge has a subtle light gray background and secondary text color to blend with the rest of the tab.</p>
            </div>
          </TabsContent>
          <TabsContent value="hover">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Hover State Badge</h4>
              <p>When hovering, the badge background becomes slightly darker and the text becomes more prominent.</p>
            </div>
          </TabsContent>
          <TabsContent value="active">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Active State Badge</h4>
              <p>When the tab is active, the badge uses brand colors to increase visibility and emphasis.</p>
            </div>
          </TabsContent>
          <TabsContent value="disabled">
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h4>Disabled State Badge</h4>
              <p>When disabled, the badge has a more subtle appearance with reduced contrast.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This showcase demonstrates how badges appear in different tab states (rest, hover, active, disabled).',
      },
    },
  },
};

export const CommonUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3>Navigation Tabs</h3>
        <Tabs defaultValue="home" variant="primary" fitted ariaLabel="Main navigation">
          <TabsList>
            <TabsTrigger value="home" icon={<IconHome size={18} />} description="View your dashboard">Home</TabsTrigger>
            <TabsTrigger value="profile" icon={<IconUser size={18} />} description="View and edit your profile">Profile</TabsTrigger>
            <TabsTrigger value="messages" icon={<IconMessage size={18} />} badge="3" description="Read your messages">Messages</TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings size={18} />} description="Configure your account settings">Settings</TabsTrigger>
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
        <Tabs defaultValue="personal" variant="secondary" ariaLabel="Registration form sections">
          <TabsList>
            <TabsTrigger value="personal" description="Fill in personal information">Personal Info</TabsTrigger>
            <TabsTrigger value="address" description="Fill in address details">Address</TabsTrigger>
            <TabsTrigger value="payment" description="Add payment information">Payment</TabsTrigger>
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

      <div>
        <h3>Settings Panel with Vertical Tabs</h3>
        <Tabs defaultValue="account" variant="secondary" orientation="vertical" ariaLabel="Settings navigation">
          <div style={{ display: 'flex', gap: '20px' }}>
            <TabsList>
              <TabsTrigger value="account" icon={<IconUser size={18} />} description="Manage account settings">Account</TabsTrigger>
              <TabsTrigger value="security" icon={<IconSettings size={18} />} description="Adjust security options">Security</TabsTrigger>
              <TabsTrigger value="notifications" icon={<IconBell size={18} />} badge="2" description="Configure notifications">Notifications</TabsTrigger>
            </TabsList>
            <div style={{ flex: 1 }}>
              <TabsContent value="account">
                <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '200px' }}>
                  <h4>Account Settings</h4>
                  <p>Manage your account information, profile picture, and personal details.</p>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '200px' }}>
                  <h4>Security Settings</h4>
                  <p>Change your password, enable two-factor authentication, and review login activity.</p>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '200px' }}>
                  <h4>Notification Settings</h4>
                  <p>Configure how you receive notifications via email, mobile, and in-app alerts.</p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  ),
};

// Accessibility example
export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Accessibility Features</h3>
        <p>This component implements the following accessibility features:</p>
        <ul>
          <li>Correct ARIA roles (tablist, tab, tabpanel)</li>
          <li>Proper keyboard navigation (arrow keys, Tab, Home, End)</li>
          <li>Descriptive labels for screen readers</li>
          <li>Tab indicators that respect "prefers-reduced-motion"</li>
          <li>Focus management with proper focus indicators</li>
        </ul>
        
        <div style={{ marginTop: '20px' }}>
          <Tabs 
            defaultValue="account" 
            variant="primary" 
            ariaLabel="Account management tabs"
          >
            <TabsList>
              <TabsTrigger 
                value="account" 
                description="View and edit your account information"
              >
                Account Info
              </TabsTrigger>
              <TabsTrigger 
                value="password" 
                description="Change your account password"
              >
                Password
              </TabsTrigger>
              <TabsTrigger 
                value="preferences" 
                description="Manage your email and notification settings"
              >
                Preferences
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h4>Account Information</h4>
                <p>This section demonstrates the TabsContent component with proper ARIA attributes and keyboard focus management.</p>
                <ul>
                  <li>Try navigating with Tab key</li>
                  <li>Use arrow keys to switch between tabs when focus is on a tab</li>
                  <li>Notice how focus moves appropriately</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h4>Password Management</h4>
                <p>When you activate this tab with keyboard, the focus moves to the content area to maintain proper focus management.</p>
              </div>
            </TabsContent>
            <TabsContent value="preferences">
              <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h4>User Preferences</h4>
                <p>The tab indicators and content transitions respect the "prefers-reduced-motion" setting for users with motion sensitivity.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcases the accessibility features of the Tabs component, including keyboard navigation, ARIA attributes, and focus management.',
      },
    },
  },
};

// URL Routing - Basic
export const URLRoutingBasic: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#e0f2fe', borderRadius: '4px' }}>
          <strong>Current URL will show:</strong> ?tab={activeTab}
          <br />
          <small>Try changing tabs and using browser back/forward buttons!</small>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          syncWithUrl={true}
          variant="primary"
          fitted
          ariaLabel="Dashboard navigation with URL routing"
        >
          <TabsList>
            <TabsTrigger value="overview" icon={<IconHome size={18} />}>
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" icon={<IconChartBar size={18} />}>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" icon={<IconFileText size={18} />}>
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings size={18} />}>
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Dashboard Overview</h4>
              <p>This tab is synced with the URL. Check your browser's address bar!</p>
              <p><strong>URL:</strong> ?tab=overview</p>
              <ul>
                <li>Browser back/forward buttons work</li>
                <li>Bookmark this URL to return to this tab</li>
                <li>Share this URL to let others see this tab</li>
                <li>Page reload maintains tab selection</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Analytics Dashboard</h4>
              <p>URL updated to: ?tab=analytics</p>
              <p>Try clicking the browser back button to return to the previous tab!</p>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Generated Reports</h4>
              <p>URL updated to: ?tab=reports</p>
              <p>Each tab change creates a new browser history entry.</p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Dashboard Settings</h4>
              <p>URL updated to: ?tab=settings</p>
              <p>Users can bookmark this exact URL to return directly to the settings tab.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
          <h4>Try This:</h4>
          <ol>
            <li>Click through the tabs above</li>
            <li>Notice how the URL changes in your browser</li>
            <li>Use the browser's back button to navigate through tab history</li>
            <li>Refresh the page - the selected tab persists!</li>
            <li>Bookmark a tab and reopen it later</li>
          </ol>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic URL routing example with syncWithUrl enabled. Each tab change updates the URL with ?tab=value, creating browser history entries for back/forward navigation.',
      },
    },
  },
};

// URL Routing - Custom Parameter Name
export const URLRoutingCustomParam: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('products');

    return (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#fef3c7', borderRadius: '4px' }}>
          <strong>Custom URL parameter:</strong> ?section={activeSection}
          <br />
          <small>Using <code>urlParamName="section"</code> instead of the default "tab"</small>
        </div>

        <Tabs
          value={activeSection}
          onValueChange={setActiveSection}
          syncWithUrl={true}
          urlParamName="section"
          variant="secondary"
          ariaLabel="Store management with custom URL parameter"
        >
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders" badge="12">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Product Catalog</h4>
              <p><strong>URL:</strong> ?section=products</p>
              <p>The URL parameter name can be customized to match your application's routing conventions.</p>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Orders Management</h4>
              <p><strong>URL:</strong> ?section=orders</p>
              <p>Useful when you have multiple tab groups on the same page with different parameter names.</p>
            </div>
          </TabsContent>

          <TabsContent value="customers">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Customer Directory</h4>
              <p><strong>URL:</strong> ?section=customers</p>
              <p>Custom parameter names make URLs more semantic and easier to understand.</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Store Analytics</h4>
              <p><strong>URL:</strong> ?section=analytics</p>
              <p>All URL routing features work the same with custom parameter names.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
          <p><strong>Use Cases for Custom Parameters:</strong></p>
          <ul>
            <li><code>urlParamName="view"</code> - For different view modes</li>
            <li><code>urlParamName="step"</code> - For wizard/multi-step forms</li>
            <li><code>urlParamName="category"</code> - For category navigation</li>
            <li><code>urlParamName="panel"</code> - For settings panels</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom URL parameter name with urlParamName="section" instead of the default "tab". Useful for semantic URLs or when multiple tab groups exist on the same page.',
      },
    },
  },
};

// URL Routing - Replace History
export const URLRoutingReplaceHistory: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('grid');

    return (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '4px' }}>
          <strong>Replace History Mode:</strong> ?view={activeView}
          <br />
          <small>URL updates without creating new browser history entries</small>
        </div>

        <Tabs
          value={activeView}
          onValueChange={setActiveView}
          syncWithUrl={true}
          urlParamName="view"
          replaceHistory={true}
          variant="primary"
          ariaLabel="View mode switcher"
        >
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="compact">Compact View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Grid View</h4>
              <p><strong>URL:</strong> ?view=grid</p>
              <p>With <code>replaceHistory=true</code>, switching tabs updates the URL but doesn't add to browser history.</p>
              <p><strong>Try this:</strong> Switch between views multiple times, then click the browser back button. You'll skip all the view changes!</p>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>List View</h4>
              <p><strong>URL:</strong> ?view=list</p>
              <p>This is useful for UI state that users shouldn't navigate back through, like view mode toggles or filter panels.</p>
            </div>
          </TabsContent>

          <TabsContent value="compact">
            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px' }}>
              <h4>Compact View</h4>
              <p><strong>URL:</strong> ?view=compact</p>
              <p>URL persists across page reloads, but switching views doesn't clutter browser history.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
          <p><strong>When to use <code>replaceHistory=true</code>:</strong></p>
          <ul>
            <li><strong>View mode toggles</strong> - Grid/list/compact views</li>
            <li><strong>Filter panels</strong> - Different filter configurations</li>
            <li><strong>Sort options</strong> - Changing sort order</li>
            <li><strong>UI preferences</strong> - Theme toggles, density settings</li>
          </ul>
          <p><strong>When to use <code>replaceHistory=false</code> (default):</strong></p>
          <ul>
            <li><strong>Page navigation</strong> - Main sections or pages</li>
            <li><strong>Content categories</strong> - Different types of content</li>
            <li><strong>Workflow steps</strong> - Multi-step processes</li>
            <li><strong>Settings sections</strong> - Different settings panels</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using replaceHistory=true to update the URL without creating new browser history entries. Perfect for view modes, filters, or UI state that users shouldn\'t navigate back through.',
      },
    },
  },
};
