import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as o}from"./index-BqIVwv1J.js";import{M as t,A as l,C as r}from"./index-BCgJJ4rA.js";import{T as a,B as d,W as c,C as h,E as p,R as x,M as u}from"./TopBar.stories-5UShCG4T.js";import{T as j}from"./TopBar-DHDBH0t-.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-CoP_mZBT.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-CKk3lApD.js";import"./IconHome-DqBDdcGV.js";import"./IconUsers-CM3_DD69.js";import"./IconSearch-BrVn1Pri.js";import"./TextInput-CRZDgAAp.js";import"./index-QFq3N9B_.js";import"./index-DW48STyt.js";import"./index-D7-T4lOe.js";import"./index-N3eucVg6.js";import"./IconExclamationCircle-BYkI5IG6.js";import"./IconX-DigCVOFI.js";import"./IconPlus-C8LpY_EU.js";import"./IconBell-CK5J1bJB.js";import"./IconFilter-BzvXx6-K.js";import"./IconSettings-cjygYtAZ.js";import"./IconHelp-DOQf5BnN.js";import"./Separator-DDuP3uRh.js";import"./Popover-B4T-UWsl.js";import"./index-Dcu5jVSv.js";import"./index-CxljV1N8.js";import"./index-DAnQV6hb.js";import"./index-D5cGTUkh.js";import"./Combination-ZMr3b_jV.js";import"./index-BTe66ZhM.js";import"./index-DavpLpmr.js";import"./Drawer-CJqTAku3.js";import"./IconArrowRight-Bc4wwjT_.js";import"./IconArrowLeft-DFM-AXyG.js";import"./IconChevronDown-D1vfiZl2.js";import"./Logo-DZFxyD9b.js";import"./AspectRatio-BLaXxon9.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"realm-agent-navigation-index",children:"REALM AGENT NAVIGATION INDEX"}),`
`,n.jsx(e.p,{children:"Quick Reference for AI Agents (Claude Code):"}),`
`,n.jsxs(e.p,{children:["📋 ",n.jsx(e.strong,{children:"CRITICAL READING"}),`: TopBar-AI-AGENT-GUIDE.md (Complete AI implementation guide)
📦 `,n.jsx(e.strong,{children:"3-SLOT ARCHITECTURE"}),` (Lines 50-120)
🎯 `,n.jsx(e.strong,{children:"BASIC USAGE"}),` (Lines 122-160)
🔄 `,n.jsx(e.strong,{children:"SWAPPABLE SECTIONS"})," (Lines 162-340)"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Center Content (Lines 170-240)"}),`
`,n.jsx(e.li,{children:"End Content (Lines 242-310)"}),`
`,n.jsxs(e.li,{children:[`Warehouse Example (Lines 312-340)
📱 `,n.jsx(e.strong,{children:"RESPONSIVE PATTERNS"}),` (Lines 342-420)
🌐 `,n.jsx(e.strong,{children:"RTL SUPPORT"}),` (Lines 422-480)
♿ `,n.jsx(e.strong,{children:"ACCESSIBILITY"}),` (Lines 482-500)
💡 `,n.jsx(e.strong,{children:"COMPLETE EXAMPLES"})," (Lines 502-600)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"⚠️ CRITICAL FOR AI AGENTS:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default = Empty"}),": Center and end sections are NULL by default"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warehouse is optional"}),": Use ",n.jsx(e.code,{children:"showWarehouseDropdown={true}"})," to enable example"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Center requires flag"}),": Must set ",n.jsx(e.code,{children:"showCenterSection={true}"})," to show center content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive first"}),": ALWAYS use design tokens and flexible layouts (see guide)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Read AI Guide"}),": ",n.jsx(e.code,{children:"/TopBar-AI-AGENT-GUIDE.md"})," has complete patterns and examples"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"🚨 ANTI-PATTERNS TO AVOID:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ Hardcoded widths/heights in custom content"}),`
`,n.jsx(e.li,{children:"❌ Assuming warehouse dropdown exists by default"}),`
`,n.jsxs(e.li,{children:["❌ Forgetting ",n.jsx(e.code,{children:"showCenterSection={true}"})]}),`
`,n.jsx(e.li,{children:"❌ Not considering mobile responsiveness"}),`
`,n.jsx(e.li,{children:"❌ Using literal values instead of design tokens"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"⚠️ FALLBACK INSTRUCTION:"}),`
Read TopBar-AI-AGENT-GUIDE.md for comprehensive implementation patterns.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"topbar-component",children:"TopBar Component"}),`
`,n.jsxs(e.p,{children:["The TopBar is a ",n.jsx(e.strong,{children:"flexible 3-slot layout system"})," for application headers. It provides independent, swappable sections that you can customize with any content."]}),`
`,n.jsx(e.h2,{id:"architecture-overview",children:"Architecture Overview"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────────────────────────────────┐
│ ┌──────────┐  ┌─────────────────┐  ┌──────────────────────┐   │
│ │  START   │  │     CENTER      │  │         END          │   │
│ │  (Fixed) │  │   (Swappable)   │  │     (Swappable)      │   │
│ └──────────┘  └─────────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
`})}),`
`,n.jsx(e.h3,{id:"the-3-slots",children:"The 3 Slots"}),`
`,n.jsxs(e.p,{children:[`| Slot | Purpose | Swappable | Default |
|------|---------|-----------|---------|
| `,n.jsx(e.strong,{children:"START"}),` | Logo + Mobile menu | ❌ Fixed | TAGADDOD logo, hamburger |
| `,n.jsx(e.strong,{children:"CENTER"})," | Navigation/Search | ✅ Yes | ",n.jsx(e.code,{children:"null"}),` (empty) |
| `,n.jsx(e.strong,{children:"END"})," | User actions/Profile | ✅ Yes | ",n.jsx(e.code,{children:"null"})," (empty) |"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Key Concept"}),": CENTER and END are fully swappable slots. You can put ANY React component there. The warehouse dropdown is just an optional example."]}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { TopBar } from '@tagaddod-design/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{of:j}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"minimal-topbar",children:"Minimal TopBar"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Just logo and hamburger - clean slate
<TopBar />
`})}),`
`,n.jsx(e.h3,{id:"with-warehouse-dropdown-example",children:"With Warehouse Dropdown (Example)"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Enable the optional warehouse dropdown example
<TopBar
  showWarehouseDropdown={true}
  selectedWarehouse="Main Warehouse"
  warehouses={["Main Warehouse", "Secondary Warehouse"]}
  onWarehouseChange={setWarehouse}
  onLogoutClick={handleLogout}
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": The warehouse dropdown is an ",n.jsx(e.strong,{children:"optional convenience feature"}),", not a default. Use ",n.jsx(e.code,{children:"showWarehouseDropdown={true}"})," to enable it, or replace the end section with your own component."]}),`
`,n.jsx(e.h2,{id:"swappable-sections",children:"Swappable Sections"}),`
`,n.jsxs(e.h3,{id:"center-section-centercontent",children:["Center Section (",n.jsx(e.code,{children:"centerContent"}),")"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),`: Primary navigation, search bars, or application status
`,n.jsx(e.strong,{children:"Positioning"}),`: Absolutely centered (50% of TopBar width)
`,n.jsx(e.strong,{children:"Default"}),": ",n.jsx(e.code,{children:"null"})," (hidden)"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h4,{id:"requirements",children:"Requirements"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Set ",n.jsx(e.code,{children:"showCenterSection={true}"})," to enable"]}),`
`,n.jsxs(e.li,{children:["Pass content via ",n.jsx(e.code,{children:"centerContent"})," prop"]}),`
`,n.jsx(e.li,{children:"Content should be responsive (see guidelines below)"}),`
`]}),`
`,n.jsx(e.h4,{id:"search-bar-example",children:"Search Bar Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showCenterSection={true}
  centerContent={
    <TextInput
      placeholder="Search products..."
      prefixIcon={<IconSearch size={18} />}
      style={{
        width: '100%',
        maxWidth: '500px',
        minWidth: '300px'
      }}
    />
  }
/>
`})}),`
`,n.jsx(e.h4,{id:"navigation-menu-example",children:"Navigation Menu Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showCenterSection={true}
  centerContent={
    <div style={{
      display: 'flex',
      gap: 'var(--t-space-300)',
      alignItems: 'center'
    }}>
      <Button variant="plain" size="small">Dashboard</Button>
      <Button variant="plain" size="small">Orders</Button>
      <Button variant="plain" size="small">Analytics</Button>
    </div>
  }
/>
`})}),`
`,n.jsx(e.h4,{id:"status-indicator-example",children:"Status Indicator Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showCenterSection={true}
  centerContent={
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-200)',
      padding: '0 var(--t-space-400)',
      backgroundColor: 'var(--t-color-fill-success-secondary)',
      borderRadius: 'var(--t-border-radius-300)',
      color: 'var(--t-color-text-success)',
      height: '36px'
    }}>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'var(--t-color-icon-success)'
      }} />
      All Systems Operational
    </div>
  }
/>
`})}),`
`,n.jsxs(e.h3,{id:"end-section-endcontent",children:["End Section (",n.jsx(e.code,{children:"endContent"}),")"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),`: User profile, notifications, actions, or contextual controls
`,n.jsx(e.strong,{children:"Positioning"}),`: Right-aligned (left-aligned in RTL)
`,n.jsx(e.strong,{children:"Default"}),": ",n.jsx(e.code,{children:"null"})," (empty)"]}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h4,{id:"user-profile-with-notifications",children:"User Profile with Notifications"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  endContent={
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-300)'
    }}>
      <Button
        variant="plain"
        size="small"
        prefixIcon={<IconBell size={18} />}
        aria-label="Notifications"
      >
        3
      </Button>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'var(--t-color-fill-brand-primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'var(--t-font-weight-medium)',
        fontSize: 'var(--t-font-size-250)',
        cursor: 'pointer'
      }}>
        JD
      </div>
    </div>
  }
/>
`})}),`
`,n.jsx(e.h4,{id:"action-buttons",children:"Action Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  endContent={
    <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
      <Button
        variant="outlined"
        size="small"
        prefixIcon={<IconPlus size={16} />}
      >
        New
      </Button>
      <Button variant="primary" size="small">
        Export
      </Button>
    </div>
  }
/>
`})}),`
`,n.jsx(e.h4,{id:"custom-dropdown",children:"Custom Dropdown"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  endContent={
    <Popover>
      <button>
        <IconBuilding size={16} />
        <span>Main Warehouse</span>
        <IconChevronDown size={16} />
      </button>
      {/* Your custom dropdown content */}
    </Popover>
  }
/>
`})}),`
`,n.jsx(e.h3,{id:"warehouse-dropdown-optional-example",children:"Warehouse Dropdown (Optional Example)"}),`
`,n.jsxs(e.p,{children:["The TopBar includes an ",n.jsx(e.strong,{children:"optional"})," warehouse dropdown as a convenience feature:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showWarehouseDropdown={true}
  selectedWarehouse="Main Warehouse"
  warehouses={["Main Warehouse", "Secondary Warehouse"]}
  onWarehouseChange={setWarehouse}
  showLogoutOption={true}
  logoutText="Sign Out"
  onLogoutClick={handleLogout}
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Important Notes:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"showWarehouseDropdown"})," is ",n.jsx(e.code,{children:"false"})," by default"]}),`
`,n.jsxs(e.li,{children:["If ",n.jsx(e.code,{children:"endContent"})," is provided, warehouse dropdown is ignored"]}),`
`,n.jsx(e.li,{children:"This is demonstration code - build your own for production use"}),`
`]}),`
`,n.jsx(e.h2,{id:"responsive-design-guidelines",children:"Responsive Design Guidelines"}),`
`,n.jsx(e.h3,{id:"critical-rules-for-custom-components",children:"Critical Rules for Custom Components"}),`
`,n.jsxs(e.p,{children:["When adding content to ",n.jsx(e.code,{children:"centerContent"})," or ",n.jsx(e.code,{children:"endContent"}),", follow these patterns:"]}),`
`,n.jsx(e.h4,{id:"1-use-design-tokens",children:"1. Use Design Tokens"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ GOOD
<div style={{
  display: 'flex',
  gap: 'var(--t-space-300)',
  padding: 'var(--t-space-200)',
  backgroundColor: 'var(--t-color-surface-secondary)',
  borderRadius: 'var(--t-border-radius-300)'
}}>
  Content
</div>

// ❌ BAD
<div style={{
  display: 'flex',
  gap: '12px',
  padding: '8px',
  backgroundColor: '#f5f5f5',
  borderRadius: '6px'
}}>
  Content
</div>
`})}),`
`,n.jsx(e.h4,{id:"2-flexible-layouts",children:"2. Flexible Layouts"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ GOOD
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--t-space-300)',
  minWidth: '200px',
  maxWidth: '600px',
  width: '100%'
}}>
  Content
</div>

// ❌ BAD
<div style={{ width: '800px' }}>
  Content
</div>
`})}),`
`,n.jsx(e.h4,{id:"3-height-constraints",children:"3. Height Constraints"}),`
`,n.jsx(e.p,{children:"Keep content within TopBar height:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Desktop"}),": 56px (3.5rem)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile"}),": 56px (3.5rem)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ GOOD - Fits within height
<div style={{
  display: 'flex',
  alignItems: 'center',
  height: '40px',  // Fits in 56px TopBar
  gap: 'var(--t-space-300)'
}}>
  <Button size="small">Action</Button>
</div>

// ❌ BAD - Exceeds height
<div style={{ height: '60px' }}>
  Content
</div>
`})}),`
`,n.jsx(e.h3,{id:"mobile-responsive-behavior",children:"Mobile Responsive Behavior"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h4,{id:"mobile-configuration",children:"Mobile Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showCenterSection={true}
  showCenterSectionOnMobile={false}  // Hide on mobile
  showCenterSectionOnTablet={true}   // Show on tablet
  centerContent={<SearchBar />}
/>
`})}),`
`,n.jsx(e.h4,{id:"mobile-expandable-pattern",children:"Mobile Expandable Pattern"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [isExpanded, setIsExpanded] = useState(false);

<TopBar
  showCenterSection={true}
  showCenterSectionOnMobile={false}
  centerContent={<SearchBar />}

  // Mobile action button
  mobileActionContent={
    <Button
      variant="plain"
      size="small"
      prefixIcon={<IconSearch size={18} />}
      aria-label="Search"
    />
  }

  // Expansion config
  isExpanded={isExpanded}
  onExpandToggle={setIsExpanded}
  expandedContent={
    <div style={{
      display: 'flex',
      gap: 'var(--t-space-300)',
      alignItems: 'center'
    }}>
      <TextInput
        placeholder="Search..."
        style={{ flex: 1 }}
        autoFocus={isExpanded}
      />
      <Button variant="primary" size="small">
        Search
      </Button>
    </div>
  }
  expansionDuration={300}
/>
`})}),`
`,n.jsx(e.h2,{id:"rtl-support",children:"RTL Support"}),`
`,n.jsx(e.p,{children:"TopBar automatically handles RTL layouts when used with ThemeProvider:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider, TopBar } from '@tagaddod-design/react';

<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  <TopBar
    showCenterSection={true}
    centerContent={<SearchBar />}
    endContent={<UserProfile />}
  />
</ThemeProvider>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Automatic RTL Adjustments:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ End section moves to left edge"}),`
`,n.jsx(e.li,{children:"✅ Center section remains centered"}),`
`,n.jsx(e.li,{children:"✅ Font switches to Arabic (Tajawal)"}),`
`,n.jsx(e.li,{children:"✅ Line height adjusts for Arabic text"}),`
`,n.jsx(e.li,{children:"✅ Mobile menu slides from correct side"}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA Labels"}),": Proper labeling for screen readers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),": Full keyboard support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus Management"}),": Clear focus indicators"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile Touch Targets"}),": 44x44px minimum"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  endContent={
    <Button
      variant="plain"
      size="small"
      prefixIcon={<IconBell size={18} />}
      aria-label="Notifications - 3 unread"
    >
      3
    </Button>
  }
/>
`})}),`
`,n.jsx(e.h2,{id:"complete-examples",children:"Complete Examples"}),`
`,n.jsx(e.h3,{id:"dashboard-topbar",children:"Dashboard TopBar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  logoClickable={true}
  onLogoClick={() => navigate('/')}

  // Center: Search bar
  showCenterSection={true}
  showCenterSectionOnMobile={false}
  centerContent={
    <TextInput
      placeholder="Search products, orders, customers..."
      prefixIcon={<IconSearch size={18} />}
      style={{
        width: '100%',
        maxWidth: '500px',
        minWidth: '300px'
      }}
    />
  }

  // End: User profile
  endContent={
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-300)'
    }}>
      <Button variant="plain" size="small" prefixIcon={<IconBell />}>
        3
      </Button>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'var(--t-color-fill-brand-primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
        JD
      </div>
    </div>
  }

  // Mobile expansion
  mobileActionContent={<Button variant="plain" prefixIcon={<IconSearch />} />}
  isExpanded={searchExpanded}
  onExpandToggle={setSearchExpanded}
  expandedContent={
    <TextInput placeholder="Search..." autoFocus />
  }
/>
`})}),`
`,n.jsx(e.h3,{id:"e-commerce-topbar",children:"E-commerce TopBar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showCenterSection={true}
  centerContent={
    <div style={{
      display: 'flex',
      gap: 'var(--t-space-400)',
      alignItems: 'center'
    }}>
      <Button variant="plain" size="small">Products</Button>
      <Button variant="plain" size="small">Categories</Button>
      <Button variant="plain" size="small">Deals</Button>
    </div>
  }

  endContent={
    <div style={{ display: 'flex', gap: 'var(--t-space-200)' }}>
      <Button variant="plain" size="small" prefixIcon={<IconSearch />} />
      <Button variant="plain" size="small" prefixIcon={<IconHeart />}>
        12
      </Button>
      <Button variant="primary" size="small" prefixIcon={<IconShoppingCart />}>
        5
      </Button>
    </div>
  }
/>
`})}),`
`,n.jsx(e.h3,{id:"admin-panel-topbar",children:"Admin Panel TopBar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<TopBar
  showWarehouseDropdown={true}
  selectedWarehouse="Main Warehouse"
  warehouses={["Main Warehouse", "Secondary Warehouse", "Distribution Center"]}
  onWarehouseChange={setWarehouse}
  showLogoutOption={true}
  logoutText="Sign Out"
  onLogoutClick={handleLogout}

  showCenterSection={true}
  centerContent={
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-200)',
      padding: '0 var(--t-space-400)',
      backgroundColor: 'var(--t-color-fill-success-secondary)',
      borderRadius: 'var(--t-border-radius-300)',
      color: 'var(--t-color-text-success)',
      height: '36px'
    }}>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'var(--t-color-icon-success)'
      }} />
      All Systems Online
    </div>
  }
/>
`})}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"css-variables-used",children:"CSS Variables Used"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-topbar-height"}),` | TopBar height (56px / 3.5rem - fixed on all devices) |
| `,n.jsx(e.code,{children:"--t-color-surface-primary"}),` | Background color |
| `,n.jsx(e.code,{children:"--t-color-text-primary"}),` | Text color |
| `,n.jsx(e.code,{children:"--t-color-border-primary"}),` | Border color |
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Spacing tokens |
| `,n.jsx(e.code,{children:"--t-border-radius-*"})," | Border radius tokens |"]}),`
`,n.jsx(e.h3,{id:"mobile-breakpoints",children:"Mobile Breakpoints"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Desktop"}),": 1024px+"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tablet"}),": 768px - 1024px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile"}),": < 768px"]}),`
`]}),`
`,n.jsx(e.h3,{id:"performance",children:"Performance"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Lazy loading of Popover content"}),`
`,n.jsx(e.li,{children:"Efficient CSS transforms for animations"}),`
`,n.jsx(e.li,{children:"Minimal re-renders with optimized state"}),`
`]}),`
`,n.jsx(e.h2,{id:"for-ai-agents",children:"For AI Agents"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"📋 Read the complete implementation guide"}),": ",n.jsx(e.code,{children:"TopBar-AI-AGENT-GUIDE.md"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Quick Decision Tree"}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Just logo? → ",n.jsx(e.code,{children:"<TopBar />"})]}),`
`,n.jsxs(e.li,{children:["With search/nav? → Add ",n.jsx(e.code,{children:"showCenterSection={true}"})," + ",n.jsx(e.code,{children:"centerContent={...}"})]}),`
`,n.jsxs(e.li,{children:["With user profile? → Add ",n.jsx(e.code,{children:"endContent={...}"})]}),`
`,n.jsxs(e.li,{children:["With warehouse example? → Add ",n.jsx(e.code,{children:"showWarehouseDropdown={true}"})]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Remember"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default is empty (no center/end content)"}),`
`,n.jsx(e.li,{children:"Warehouse dropdown is optional example"}),`
`,n.jsx(e.li,{children:"Always use design tokens"}),`
`,n.jsx(e.li,{children:"Think mobile-first"}),`
`,n.jsx(e.li,{children:"Test responsive behavior"}),`
`]})]})}function ln(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{ln as default};
