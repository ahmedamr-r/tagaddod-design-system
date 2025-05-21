import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-DI2gBlDf.js";import{M as l,A as i,C as a}from"./index-BPXrzZIR.js";import{T as c,D as t,P as d,S as b,F as g,V as T,W as h,a as x,b as u,c as p,C as j,d as m,e as f,R as v,f as y,A as C,g as w,B as L}from"./Tabs.stories-e8sJSyXq.js";import{T as S,a as I,b as A}from"./Tabs-CVJSb24g.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createReactComponent-GuN14Mgc.js";import"./IconUser-C1LEUmMM.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-Djcc9127.js";import"./index-pvuVTQ3b.js";import"./index-DZCApzUK.js";import"./index-B2x4RDPN.js";import"./index-Dh73ENUf.js";import"./clsx-B-dksMZM.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(e.h1,{id:"tabs-component",children:"Tabs Component"}),`
`,n.jsx(e.p,{children:"The Tabs component allows users to navigate between related sections of content, displaying one section at a time while keeping all options visible and accessible."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Tabs are a fundamental navigation pattern that organizes content into separate views that users can switch between without changing the page. The Tagaddod Tabs component is built on Radix UI primitives to ensure full accessibility while providing flexible design options."}),`
`,n.jsx(e.p,{children:"Use Tabs when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Content can be organized into discrete categories"}),`
`,n.jsx(e.li,{children:"Users need to navigate between related sections"}),`
`,n.jsx(e.li,{children:"You want to keep the interface clean and organized"}),`
`,n.jsx(e.li,{children:"Screen space is limited and you need to show one view at a time"}),`
`]}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"component-structure",children:"Component Structure"}),`
`,n.jsx(e.p,{children:"The Tabs component consists of four main parts:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tabs"})," - The container that provides context to its children"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TabsList"})," - The container for the tab triggers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TabsTrigger"})," - The clickable buttons that users interact with"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TabsContent"})," - The content associated with each tab"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.h3,{id:"tabs-props",children:"Tabs Props"}),`
`,n.jsx(i,{of:S}),`
`,n.jsx(e.h3,{id:"tabstrigger-props",children:"TabsTrigger Props"}),`
`,n.jsx(i,{of:I}),`
`,n.jsx(e.h3,{id:"tabscontent-props",children:"TabsContent Props"}),`
`,n.jsx(i,{of:A}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod/react';

<Tabs defaultValue="tab1" ariaLabel="Content tabs">
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
`})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"primary-tabs",children:"Primary Tabs"}),`
`,n.jsx(e.p,{children:"The primary variant is the default, featuring an underline indicator."}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs variant="primary" defaultValue="tab1" ariaLabel="Primary tabs example">
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
  {/* Other tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"secondary-tabs",children:"Secondary Tabs"}),`
`,n.jsx(e.p,{children:"The secondary variant has a more subtle appearance with background highlighting."}),`
`,n.jsx(a,{of:b}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs variant="secondary" defaultValue="tab1" ariaLabel="Secondary tabs example">
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
  {/* Other tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"layout-options",children:"Layout Options"}),`
`,n.jsx(e.h3,{id:"standard-tabs",children:"Standard Tabs"}),`
`,n.jsx(e.p,{children:"By default, tabs take up only the space needed for their content."}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(e.h3,{id:"fitted-tabs",children:"Fitted Tabs"}),`
`,n.jsx(e.p,{children:"Fitted tabs distribute evenly across the available width, making them suitable for full-width containers."}),`
`,n.jsx(a,{of:g}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs fitted defaultValue="tab1" ariaLabel="Fitted tabs example">
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
  {/* Other tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"vertical-orientation",children:"Vertical Orientation"}),`
`,n.jsx(e.p,{children:"For certain interfaces, tabs can be displayed vertically."}),`
`,n.jsx(a,{of:T}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs 
  orientation="vertical" 
  variant="secondary"
  defaultValue="tab1" 
  ariaLabel="Vertical tabs example"
>
  <div style={{ display: 'flex', gap: '20px' }}>
    <TabsList style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <TabsTrigger value="tab1">Account</TabsTrigger>
      <TabsTrigger value="tab2">Security</TabsTrigger>
      <TabsTrigger value="tab3">Notifications</TabsTrigger>
    </TabsList>
    <div style={{ flex: 1 }}>
      <TabsContent value="tab1">
        <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', minHeight: '150px' }}>
          <h3>Account Settings</h3>
          <p>Manage your account information.</p>
        </div>
      </TabsContent>
      {/* Other tab contents */}
    </div>
  </div>
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"tab-features",children:"Tab Features"}),`
`,n.jsx(e.h3,{id:"with-badge",children:"With Badge"}),`
`,n.jsx(e.p,{children:"Add badges to indicate counts or status."}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="tab1" ariaLabel="Tabs with badge">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2" badge="3">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"with-icon",children:"With Icon"}),`
`,n.jsx(e.p,{children:"Include icons to visually represent tab content."}),`
`,n.jsx(a,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

<Tabs defaultValue="tab1" ariaLabel="Tabs with icons">
  <TabsList>
    <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
    <TabsTrigger value="tab2" icon={<IconUser size={18} />}>Profile</TabsTrigger>
    <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"with-icon-and-badge",children:"With Icon and Badge"}),`
`,n.jsx(e.p,{children:"Combine icons and badges for rich tab indicators."}),`
`,n.jsx(a,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconHome, IconBell, IconSettings } from '@tabler/icons-react';

<Tabs defaultValue="tab1" ariaLabel="Tabs with icons and badge">
  <TabsList>
    <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
    <TabsTrigger value="tab2" icon={<IconBell size={18} />} badge="5">Notifications</TabsTrigger>
    <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"disabled-tab",children:"Disabled Tab"}),`
`,n.jsx(e.p,{children:"Disable specific tabs that are currently unavailable."}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="tab1" ariaLabel="Tabs with disabled tab">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2" disabled>Tab 2 (Disabled)</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"tab-count-options",children:"Tab Count Options"}),`
`,n.jsx(e.p,{children:"The Tabs component supports 2-6 tabs with optimized styling for each configuration."}),`
`,n.jsx(e.h3,{id:"two-tabs",children:"Two Tabs"}),`
`,n.jsx(a,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs count={2} defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"four-tabs",children:"Four Tabs"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs count={4} defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    <TabsTrigger value="tab4">Tab 4</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"six-tabs",children:"Six Tabs"}),`
`,n.jsx(a,{of:f}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs count={6} defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    <TabsTrigger value="tab4">Tab 4</TabsTrigger>
    <TabsTrigger value="tab5">Tab 5</TabsTrigger>
    <TabsTrigger value="tab6">Tab 6</TabsTrigger>
  </TabsList>
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The Tabs component properly handles Right-to-Left (RTL) languages."}),`
`,n.jsx(a,{of:v}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs dir="rtl" defaultValue="tab1" ariaLabel="RTL tabs example">
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
  {/* Other tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),`
`,n.jsx(e.h3,{id:"uncontrolled",children:"Uncontrolled"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"defaultValue"})," prop for uncontrolled tabs."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="tab1">
  {/* Tabs content */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"controlled",children:"Controlled"}),`
`,n.jsxs(e.p,{children:["For more control, manage the state yourself and use the ",n.jsx(e.code,{children:"value"})," and ",n.jsx(e.code,{children:"onValueChange"})," props."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
    >
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Tab 1 Content</TabsContent>
      <TabsContent value="tab2">Tab 2 Content</TabsContent>
      <TabsContent value="tab3">Tab 3 Content</TabsContent>
      
      <div style={{ marginTop: '16px' }}>
        <p>Current tab: {activeTab}</p>
        <button onClick={() => setActiveTab('tab1')}>Go to Tab 1</button>
        <button onClick={() => setActiveTab('tab2')}>Go to Tab 2</button>
        <button onClick={() => setActiveTab('tab3')}>Go to Tab 3</button>
      </div>
    </Tabs>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"navigation-tabs",children:"Navigation Tabs"}),`
`,n.jsx(a,{of:y}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconHome, IconUser, IconMessage, IconSettings } from '@tabler/icons-react';

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
  {/* Other tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"form-sections",children:"Form Sections"}),`
`,n.jsx(e.p,{children:"Organize multi-step forms into logical sections."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="personal" variant="secondary" ariaLabel="Registration form sections">
  <TabsList>
    <TabsTrigger value="personal" description="Fill in personal information">Personal Info</TabsTrigger>
    <TabsTrigger value="address" description="Fill in address details">Address</TabsTrigger>
    <TabsTrigger value="payment" description="Add payment information">Payment</TabsTrigger>
  </TabsList>
  <TabsContent value="personal">
    <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
      <h4>Personal Information</h4>
      <form>
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" type="text" />
        
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" />
      </form>
    </div>
  </TabsContent>
  {/* Other form sections */}
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"settings-panel-with-vertical-tabs",children:"Settings Panel with Vertical Tabs"}),`
`,n.jsx(e.p,{children:"Create a vertical navigation panel for settings."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="account" variant="secondary" orientation="vertical" ariaLabel="Settings navigation">
  <div style={{ display: 'flex', gap: '20px' }}>
    <TabsList style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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
      {/* Other tab contents */}
    </div>
  </div>
</Tabs>
`})}),`
`,n.jsx(e.h3,{id:"dashboard-metrics",children:"Dashboard Metrics"}),`
`,n.jsx(e.p,{children:"Display different metrics in a dashboard."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs defaultValue="overview" fitted ariaLabel="Dashboard metrics">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="sales">Sales</TabsTrigger>
    <TabsTrigger value="traffic" badge="↑12%">Traffic</TabsTrigger>
    <TabsTrigger value="conversion">Conversion</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
      <h4>Dashboard Overview</h4>
      {/* Overview metrics and charts */}
    </div>
  </TabsContent>
  {/* Other metric contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(a,{of:C}),`
`,n.jsx(e.p,{children:"The Tabs component follows accessibility best practices:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"WAI-ARIA Compliance"}),": Uses appropriate ARIA roles, states, and properties:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="tablist"'})," for the tab container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="tab"'})," for individual tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="tabpanel"'})," for tab content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-selected"})," to indicate the selected tab"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-controls"})," to associate tabs with their panels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-labelledby"})," to associate panels with their tabs"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Tab"})," to move focus to the tab list"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Arrow keys"})," to navigate between tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Space/Enter"})," to select a tab"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Home/End"})," to jump to the first/last tab"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When a tab is activated, focus automatically moves to the associated panel"}),`
`,n.jsx(e.li,{children:"Clear focus indicators for keyboard users"}),`
`,n.jsx(e.li,{children:"Proper tab order for logical navigation"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Screen Reader Support"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Each tab can include a ",n.jsx(e.code,{children:"description"})," for additional screen reader context"]}),`
`,n.jsxs(e.li,{children:["Proper labeling of the tab list with ",n.jsx(e.code,{children:"ariaLabel"})," or ",n.jsx(e.code,{children:"ariaLabelledby"})]}),`
`,n.jsx(e.li,{children:"Appropriate announcement of tab selection changes"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Motion Sensitivity"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Animations respect the ",n.jsx(e.code,{children:"prefers-reduced-motion"})," setting"]}),`
`,n.jsx(e.li,{children:"Subtle transitions that don't cause distraction"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"RTL Support"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full right-to-left language support"}),`
`,n.jsx(e.li,{children:"Appropriate arrow key direction reversal in RTL mode"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"Example with accessible description for screen readers:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Tabs 
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
  {/* Tab contents */}
</Tabs>
`})}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Tabs component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-font-family-primary"}),` | Font family |
| `,n.jsx(e.code,{children:"--t-font-size-*"}),` | Font sizes for different elements |
| `,n.jsx(e.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,n.jsx(e.code,{children:"--t-color-text-*"}),` | Text colors |
| `,n.jsx(e.code,{children:"--t-color-border-*"}),` | Border colors |
| `,n.jsx(e.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-fill-*"}),` | Brand colors |
| `,n.jsx(e.code,{children:"--t-color-badge-*"}),` | Badge colors |
| `,n.jsx(e.code,{children:"--t-border-radius-*"}),` | Border radius |
| `,n.jsx(e.code,{children:"--t-duration-*"}),` | Animation duration |
| `,n.jsx(e.code,{children:"--t-easing-*"}),` | Animation timing functions |
| `,n.jsx(e.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,n.jsx(e.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,n.jsx(e.h3,{id:"animations",children:"Animations"}),`
`,n.jsx(e.p,{children:"The Tabs component includes several animations that enhance the user experience:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tab Indicator"}),": The active indicator smoothly transitions between tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Fade"}),": Tab content fades in when activated"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover Effects"}),": Subtle background and color changes on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Selection Animation"}),": Smooth transitions when a tab is selected"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge State Changes"}),": Badge appearance changes with tab states"]}),`
`]}),`
`,n.jsxs(e.p,{children:["All animations respect the user's ",n.jsx(e.code,{children:"prefers-reduced-motion"})," setting."]}),`
`,n.jsx(a,{of:w}),`
`,n.jsx(e.h3,{id:"badge-states",children:"Badge States"}),`
`,n.jsx(e.p,{children:"Badge styling changes based on the tab state:"}),`
`,n.jsx(a,{of:L}),`
`,n.jsx(e.h3,{id:"technical-architecture",children:"Technical Architecture"}),`
`,n.jsx(e.p,{children:"The Tabs component is built on Radix UI's primitives and includes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"State Management"}),": Tab selection state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Event Handling"}),": Click handlers and keyboard interactions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composition"}),": Multiple sub-components (TabsList, TabsTrigger, TabsContent)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styling"}),": CSS modules with proper scoping"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility"}),": ARIA attributes and keyboard navigation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Internationalization"}),": RTL support and dynamic line height"]}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Tabs component is compatible with all modern browsers:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome (latest)"}),`
`,n.jsx(e.li,{children:"Firefox (latest)"}),`
`,n.jsx(e.li,{children:"Safari (latest)"}),`
`,n.jsx(e.li,{children:"Edge (latest)"}),`
`,n.jsx(e.li,{children:"Mobile browsers (iOS Safari, Android Chrome)"}),`
`]}),`
`,n.jsx(e.p,{children:"RTL language support works across all supported browsers."}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use clear labels"}),": Keep tab labels short and descriptive"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Include icons"}),": When appropriate, use icons to enhance recognition"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Order logically"}),": Arrange tabs in a logical sequence or priority order"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Limit tab count"}),": Aim for 2-6 tabs; use other navigation for more options"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Match content height"}),": Try to keep content panels a similar height to prevent jarring layout shifts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Maintain context"}),": Ensure users don't lose their place when switching tabs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Preserve state"}),": When using controlled tabs, preserve content state between tab switches"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Be responsive"}),": Consider how tabs will behave on different screen sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge appropriately"}),": Use badges for counts or status indicators, not decorative purposes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Horizontal vs vertical"}),": Choose horizontal tabs for top-level navigation and vertical tabs for settings or sections with many options"]}),`
`]})]})}function Q(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{Q as default};
