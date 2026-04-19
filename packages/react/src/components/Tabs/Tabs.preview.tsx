import type { PreviewModule } from '@tagaddod-design/docs-types';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsCounts,
  tabsOrientations,
  tabsVariants,
  type TabsProps,
} from './Tabs';

const basicTabs = (
  <>
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">Overview content</TabsContent>
    <TabsContent value="activity">Activity content</TabsContent>
    <TabsContent value="settings">Settings content</TabsContent>
  </>
);

export const preview: PreviewModule<TabsProps> = {
  name: 'Tabs',
  slug: 'tabs',
  description: 'Keyboard-accessible tabs with primary/secondary styles, icons, badges, and URL sync.',
  component: Tabs,
  defaultProps: {
    defaultValue: 'overview',
    variant: 'primary',
    fitted: false,
    count: 3,
    orientation: 'horizontal',
    children: basicTabs,
  },
  controls: {
    variant: { type: 'select', options: tabsVariants, description: 'Primary or secondary style' },
    fitted: { type: 'boolean', description: 'Stretch tabs to fill container width' },
    count: {
      type: 'select',
      options: tabsCounts.map(String),
      description: 'Expected tab count (styling hint)',
    },
    orientation: { type: 'select', options: tabsOrientations, description: 'Horizontal or vertical' },
  },
  examples: [
    {
      name: 'Primary',
      props: {},
      render: () => (
        <Tabs defaultValue="overview" variant="primary" count={3}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">Overview content</TabsContent>
          <TabsContent value="activity">Activity content</TabsContent>
          <TabsContent value="settings">Settings content</TabsContent>
        </Tabs>
      ),
    },
    {
      name: 'Secondary',
      props: {},
      render: () => (
        <Tabs defaultValue="overview" variant="secondary" count={3}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">Overview content</TabsContent>
          <TabsContent value="activity">Activity content</TabsContent>
          <TabsContent value="settings">Settings content</TabsContent>
        </Tabs>
      ),
    },
    {
      name: 'Fitted',
      description: 'Tabs stretch evenly across the container.',
      props: {},
      render: () => (
        <Tabs defaultValue="a" variant="primary" count={3} fitted>
          <TabsList>
            <TabsTrigger value="a">First</TabsTrigger>
            <TabsTrigger value="b">Second</TabsTrigger>
            <TabsTrigger value="c">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="a">First panel</TabsContent>
          <TabsContent value="b">Second panel</TabsContent>
          <TabsContent value="c">Third panel</TabsContent>
        </Tabs>
      ),
    },
    {
      name: 'WithBadges',
      props: {},
      render: () => (
        <Tabs defaultValue="inbox" variant="primary" count={3}>
          <TabsList>
            <TabsTrigger value="inbox" badge={12}>
              Inbox
            </TabsTrigger>
            <TabsTrigger value="sent" badge={2}>
              Sent
            </TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">12 new messages</TabsContent>
          <TabsContent value="sent">2 sent messages</TabsContent>
          <TabsContent value="drafts">No drafts</TabsContent>
        </Tabs>
      ),
    },
    {
      name: 'DisabledTab',
      props: {},
      render: () => (
        <Tabs defaultValue="current" variant="primary" count={3}>
          <TabsList>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="coming" disabled>
              Coming soon
            </TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>
          <TabsContent value="current">Current content</TabsContent>
          <TabsContent value="coming">Not yet available</TabsContent>
          <TabsContent value="archive">Archive content</TabsContent>
        </Tabs>
      ),
    },
  ],
};
