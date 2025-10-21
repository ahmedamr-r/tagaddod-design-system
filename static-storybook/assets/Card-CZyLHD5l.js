import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as s,A as d,C as i}from"./index-BCgJJ4rA.js";import{C as o,a as l,D as c,I as h,b as p,A as x,P as g,c as v,V as u,S as m,d as f,U as j,e as C,R as y,F as b,G as w}from"./Card.stories-B_2T2reN.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Button-CoP_mZBT.js";import"./createReactComponent-CKk3lApD.js";import"./Badge-BhZgywnl.js";import"./Avatar-BuzOK5mh.js";import"./index-D7-T4lOe.js";import"./index-DAnQV6hb.js";import"./IconUser-CxX_vdyQ.js";import"./IconArrowRight-Bc4wwjT_.js";import"./IconPlus-C8LpY_EU.js";import"./IconSettings-cjygYtAZ.js";import"./IconArrowLeft-DFM-AXyG.js";function r(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:o}),`
`,n.jsx(e.h1,{id:"-ai-coding-agent---critical-implementation-guide-",children:"🚨 AI CODING AGENT - CRITICAL IMPLEMENTATION GUIDE 🚨"}),`
`,n.jsx(e.h2,{id:"card-component-architecture---read-first",children:"CARD COMPONENT ARCHITECTURE - READ FIRST"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────┐
│ HEADER (Optional Props)             │ ← header prop for titles/actions
├─────────────────────────────────────┤
│ BODY (Your Content Goes Here)      │ ← children prop ONLY
├─────────────────────────────────────┤
│ FOOTER (Optional Props)             │ ← footer prop for actions/metadata
└─────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"-critical-mistakes-to-avoid",children:"❌ CRITICAL MISTAKES TO AVOID"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER create manual header/footer divs in children"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER add styling wrappers around entire content"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER use custom padding containers unless necessary"})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER create ",n.jsx(e.code,{children:'<div className="card-header">'})," in children"]})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER ignore the equal padding principle"})}),`
`]}),`
`,n.jsx(e.h2,{id:"-correct-implementation-pattern",children:"✅ CORRECT IMPLEMENTATION PATTERN"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Basic card with equal padding on all sides
<Card>
  <p>Simple content with automatic equal padding (top, bottom, left, right)</p>
</Card>

// ✅ CORRECT - Card with header and footer (props-based)
<Card
  header="Card Title"              // Use header prop
  footer="Footer content"          // Use footer prop
>
  {/* ONLY main content goes here */}
  <div>Main card content</div>
  {/* NO HEADERS OR FOOTERS HERE */}
</Card>

// ✅ CORRECT - Interactive card with proper hover effects
<Card
  variant="elevated"
  interactive={true}              // 0.2s ease-in-out + surface-hover bg
  header="Interactive Card"
>
  <p>Content with smooth hover transitions</p>
</Card>

// ✅ CORRECT - Clickable card with drop shadow
<Card
  variant="outlined"
  clickable={true}               // Enhanced hover: shadow + 2px lift
  onClick={handleClick}
  header="Clickable Card"
>
  <p>Click anywhere on this card</p>
</Card>

// ❌ WRONG - Manual header/footer creation
<Card>
  <div className="header">Title</div>    {/* ❌ DON'T DO THIS */}
  <div>Content</div>
  <div className="footer">Actions</div>  {/* ❌ DON'T DO THIS */}
</Card>
`})}),`
`,n.jsx(e.h2,{id:"-ai-implementation-checklist",children:"🎯 AI IMPLEMENTATION CHECKLIST"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"children"})," for main content ONLY"]}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"header"})," prop for titles, not manual divs"]}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"footer"})," prop for actions/metadata, not manual divs"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"Remember: Equal 12px padding on all sides by default (var(--t-space-300))"})]}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"interactive={true}"})," for hover effects without drop shadow"]}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"clickable={true}"})," for enhanced hover with drop shadow + lift"]}),`
`,n.jsxs(e.li,{children:["[ ] Choose appropriate variant: ",n.jsx(e.code,{children:"elevated"})," (default), ",n.jsx(e.code,{children:"outlined"}),", ",n.jsx(e.code,{children:"ghost"})]}),`
`,n.jsx(e.li,{children:"[ ] All animations are 0.2s ease-in-out automatically"}),`
`]}),`
`,n.jsx(e.h2,{id:"-key-card-principles",children:"🔑 KEY CARD PRINCIPLES"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Equal 12px Padding"}),": All cards use 12px (var(--t-space-300)) on all sides regardless of size"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"0.2s Transitions"}),": All hover effects use 0.2s ease-in-out for smooth animations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Surface-Hover Background"}),": Interactive/clickable cards get background change on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Drop Shadow Enhancement"}),": Only clickable cards get drop shadow on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composition Pattern"}),": Header/footer via props, content via children"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Size Affects Gaps"}),": Small/Medium/Large control internal spacing, not padding"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"card-component",children:"Card Component"}),`
`,n.jsx(e.p,{children:"The Card component is a versatile container that serves as a flexible building block for any content. It provides optional header and footer sections while maintaining a consistent visual design with equal padding on all sides."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Card } from '@tagaddod-design/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{of:l}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Simple card with equal padding
<Card>
  <p>Content with automatic equal padding on all sides</p>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"-common-ai-agent-mistakes",children:"❌ COMMON AI AGENT MISTAKES"}),`
`,n.jsx(e.h3,{id:"mistake-1-manual-headerfooter-creation",children:"Mistake 1: Manual Header/Footer Creation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Don't create manual headers/footers
<Card>
  <div style={{fontWeight: 'bold', marginBottom: '16px'}}>Manual Header</div>
  <p>Content here</p>
  <div style={{marginTop: '16px', borderTop: '1px solid #ccc'}}>Manual Footer</div>
</Card>

// ✅ CORRECT - Use header and footer props
<Card
  header="Proper Header"          // Use header prop
  footer="Proper Footer"          // Use footer prop
>
  <p>Content here</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"mistake-2-ignoring-interactive-vs-clickable-differences",children:"Mistake 2: Ignoring Interactive vs Clickable Differences"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Confusing interactive and clickable
<Card interactive={true} onClick={handleClick}>
  <p>This won't get proper clickable effects</p>
</Card>

// ✅ CORRECT - Interactive for hover only (no drop shadow)
<Card interactive={true}>
  <p>Hover effects: surface-hover background, 1px lift, 0.2s ease-in-out</p>
</Card>

// ✅ CORRECT - Clickable for full interaction (with drop shadow)
<Card clickable={true} onClick={handleClick}>
  <p>Enhanced hover: surface-hover background, drop shadow, 2px lift, 0.2s ease-in-out</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"mistake-3-breaking-equal-padding-principle",children:"Mistake 3: Breaking Equal Padding Principle"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Adding unequal padding
<Card>
  <div style={{padding: '20px 10px 5px 15px'}}>  {/* Unequal padding */}
    <p>Inconsistent spacing</p>
  </div>
</Card>

// ✅ CORRECT - Let Card handle equal padding
<Card>
  <p>Card automatically provides equal padding on all sides</p>
</Card>

// ✅ CORRECT - Custom equal padding if needed
<Card containerPadding="24px">  {/* Equal on all sides */}
  <p>Custom but still equal padding</p>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"step-by-step-implementation",children:"STEP-BY-STEP IMPLEMENTATION"}),`
`,n.jsx(e.h3,{id:"step-1-basic-content-card",children:"Step 1: Basic Content Card"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Start with simple content - Card provides equal padding automatically
<Card variant="elevated">
  <div>
    <h3>Dashboard Overview</h3>
    <p>Key metrics and statistics for your application.</p>
  </div>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"step-2-add-header-and-footer",children:"Step 2: Add Header and Footer"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Add structure with header and footer props
<Card
  variant="elevated"
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconDashboard size={20} />
      <span>Dashboard Overview</span>
    </div>
  }
  footer={
    <Button variant="primary" size="small">
      View Details
    </Button>
  }
>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
    <div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1,234</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Users</div>
    </div>
    <div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>567</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Orders</div>
    </div>
    <div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>89%</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Uptime</div>
    </div>
  </div>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"step-3-make-it-interactive",children:"Step 3: Make It Interactive"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Add smooth hover effects with 0.2s ease-in-out
<Card
  variant="outlined"
  interactive={true}                    // Surface-hover bg + 1px lift
  header="Interactive Analytics"
  footer="Hover to see smooth animation"
>
  <div>
    <p>This card responds to hover with:</p>
    <ul>
      <li>Surface-hover background color</li>
      <li>1px upward transform</li>
      <li>0.2s ease-in-out transition</li>
      <li>No drop shadow (interactive only)</li>
    </ul>
  </div>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"step-4-make-it-clickable",children:"Step 4: Make It Clickable"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Add enhanced clickable effects
<Card
  variant="elevated"
  clickable={true}                      // Enhanced hover + drop shadow
  onClick={() => navigateToDetails()}
  header="Clickable Navigation Card"
  footer={
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span>Click anywhere</span>
      <IconArrowRight size={16} />
    </div>
  }
>
  <div>
    <p>This card is fully clickable with enhanced effects:</p>
    <ul>
      <li>Surface-hover background color</li>
      <li>Drop shadow (var(--t-shadow-200))</li>
      <li>2px upward transform</li>
      <li>0.2s ease-in-out transition</li>
      <li>Active state: 1px transform with 0.1s transition</li>
    </ul>
  </div>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"animation-and-hover-effects",children:"Animation and Hover Effects"}),`
`,n.jsx(e.h3,{id:"interactive-cards-surface-hover-only",children:"Interactive Cards (Surface Hover Only)"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Interactive: Hover effects without drop shadow
<Card
  variant="elevated"
  interactive={true}                    // Surface-hover + 1px lift
  header="Interactive Card"
>
  <p>Hover for smooth animation: surface-hover background, 1px lift, 0.2s ease-in-out</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"clickable-cards-enhanced-hover-with-drop-shadow",children:"Clickable Cards (Enhanced Hover with Drop Shadow)"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Clickable: Full interaction effects
<Card
  variant="outlined"
  clickable={true}                      // Enhanced hover + drop shadow
  onClick={() => handleCardClick()}
  header="Clickable Navigation"
  footer={
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span>Click anywhere</span>
      <IconArrowRight size={16} />
    </div>
  }
>
  <p>Enhanced hover: surface-hover background, drop shadow, 2px lift, 0.2s ease-in-out</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"animation-technical-details",children:"Animation Technical Details"}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Hover Effects:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive Cards"}),": ",n.jsx(e.code,{children:"background-color: var(--t-color-surface-hover)"}),", ",n.jsx(e.code,{children:"transform: translateY(-1px)"}),", no shadow"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clickable Cards"}),": ",n.jsx(e.code,{children:"background-color: var(--t-color-surface-hover)"}),", ",n.jsx(e.code,{children:"transform: translateY(-2px)"}),", ",n.jsx(e.code,{children:"box-shadow: var(--t-shadow-200)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"All Transitions"}),": ",n.jsx(e.code,{children:"0.2s ease-in-out"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Active State"}),": ",n.jsx(e.code,{children:"transform: translateY(-1px)"}),", ",n.jsx(e.code,{children:"transition: 0.1s ease-in-out"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"equal-padding-design",children:"Equal Padding Design"}),`
`,n.jsx(e.h3,{id:"default-equal-padding-behavior",children:"Default Equal Padding Behavior"}),`
`,n.jsx(i,{of:g}),`
`,n.jsxs(e.p,{children:["The Card component provides ",n.jsx(e.strong,{children:"equal padding on all sides"})," by default:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"All sizes"}),": ",n.jsx(e.code,{children:"12px"})," (var(--t-space-300)) on all sides (top, bottom, left, right)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent spacing"}),": Same padding regardless of size for predictable layouts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Design token based"}),": Uses ",n.jsx(e.code,{children:"var(--t-space-300)"})," which equals ",n.jsx(e.code,{children:"0.75rem"})," (12px)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Equal padding automatically applied
<Card size="medium">
  <p>This content has exactly 12px padding on all four sides</p>
</Card>

// ✅ CORRECT - All sizes use the same 12px base padding
<Card size="small">
  <p>Small cards also have 12px padding on all sides</p>
</Card>

<Card size="large">
  <p>Large cards maintain the same 12px padding for consistency</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"custom-padding-control",children:"Custom Padding Control"}),`
`,n.jsx(i,{of:v}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Custom container padding (affects entire card)
<Card containerPadding="24px">  {/* Equal 24px on all sides */}
  <p>Custom equal padding</p>
</Card>

// Custom content padding (affects header, body, footer sections)
<Card
  header="Custom Content Padding"
  contentPadding="20px 16px"        {/* 20px vertical, 16px horizontal */}
>
  <p>Different content section padding</p>
</Card>

// Mixed control for advanced layouts
<Card
  containerPadding="0"              {/* No outer padding */}
  contentPadding="32px 24px 16px 24px"  {/* Top, right, bottom, left */}
  header="Precise Control"
>
  <p>Advanced padding control for specific layouts</p>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"variants-and-sizes",children:"Variants and Sizes"}),`
`,n.jsx(e.h3,{id:"visual-variants",children:"Visual Variants"}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Elevated: Default with shadow and subtle border
<Card variant="elevated">
  <p>Professional look with elevation</p>
</Card>

// Outlined: Clean with visible border, no shadow
<Card variant="outlined">
  <p>Clean, minimal appearance</p>
</Card>

// Ghost: Minimal with no border or shadow
<Card variant="ghost">
  <p>Subtle, nearly invisible until interaction</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"size-options",children:"Size Options"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Small: Same base padding (12px), compact gaps
<Card size="small" header="Compact">
  <p>Tight layouts and sidebars</p>
</Card>

// Medium: Same base padding (12px), standard gaps
<Card size="medium" header="Standard">
  <p>Most common use case</p>
</Card>

// Large: Same base padding (12px), generous gaps
<Card size="large" header="Spacious">
  <p>Prominent content areas</p>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"component-integration-examples",children:"Component Integration Examples"}),`
`,n.jsx(e.h3,{id:"analytics-dashboard",children:"Analytics Dashboard"}),`
`,n.jsx(i,{of:f}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Card
  variant="elevated"
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconActivity size={20} />
      <span>Analytics Overview</span>
    </div>
  }
  footer={
    <Button variant="plain" size="small" suffixIcon={<IconArrowRight size={14} />}>
      View Details
    </Button>
  }
>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
    <div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,234</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Total Users</div>
    </div>
    <div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>567</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Active Today</div>
    </div>
    <div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>89%</div>
      <div style={{ color: 'var(--t-color-text-secondary)' }}>Engagement</div>
    </div>
  </div>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"user-profile-management",children:"User Profile Management"}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Card
  variant="outlined"
  clickable={true}
  onClick={() => navigateToProfile()}
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Avatar size="medium" />
      <div>
        <div style={{ fontWeight: 'bold' }}>Sarah Johnson</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>Product Manager</div>
      </div>
      <Badge variant="success" style={{ marginLeft: 'auto' }}>Online</Badge>
    </div>
  }
  footer={
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="primary" size="small">Message</Button>
      <Button variant="outlined" size="small">View Profile</Button>
    </div>
  }
>
  <p>Experienced product manager with 8+ years in tech. Currently leading the design system initiative.</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"settings-and-configuration",children:"Settings and Configuration"}),`
`,n.jsx(i,{of:C}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Card
  variant="elevated"
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconSettings size={20} />
      <span>Account Settings</span>
    </div>
  }
>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>Email Notifications</span>
      <Button variant="outlined" size="small">Configure</Button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>Privacy Settings</span>
      <Button variant="outlined" size="small">Manage</Button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>Security</span>
      <Button variant="outlined" size="small">Update</Button>
    </div>
  </div>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,n.jsxs(e.p,{children:["The Card component provides comprehensive Right-to-Left (RTL) language support when used with the ",n.jsx(e.code,{children:"ThemeProvider"}),". This includes automatic font switching, proper icon positioning, and directional icon handling."]}),`
`,n.jsx(e.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,n.jsxs(e.p,{children:["For full RTL support, wrap your application with ",n.jsx(e.code,{children:"ThemeProvider"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider, Card } from '@tagaddod-design/react';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <Card header="رأس البطاقة">
        محتوى البطاقة باللغة العربية
      </Card>
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,n.jsx(e.p,{children:"When RTL is enabled via ThemeProvider, the Card component automatically:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon Positioning"}),": Adjusts icon placement for RTL text flow"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Line Height"}),": Applies appropriate line height for Arabic text rendering"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout Direction"}),": Maintains proper positioning in RTL mode"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gap Spacing"}),": Uses flexbox gap for consistent spacing in all directions"]}),`
`]}),`
`,n.jsx(i,{of:y}),`
`,n.jsx(e.h3,{id:"directional-icon-handling",children:"Directional Icon Handling"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important"}),": When using directional icons (arrows, chevrons, etc.) in multilingual applications, you should manually choose the appropriate icon based on the current direction:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

function DirectionalCard() {
  const { isRTL } = useTheme();

  const ArrowIcon = isRTL ? IconArrowLeft : IconArrowRight;

  return (
    <Card
      header={isRTL ? 'الإعدادات' : 'Settings'}
      footer={
        <Button suffixIcon={<ArrowIcon />}>
          {isRTL ? 'التالي' : 'Next'}
        </Button>
      }
    >
      {isRTL ? 'محتوى البطاقة' : 'Card content'}
    </Card>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"common-directional-icon-patterns",children:"Common Directional Icon Patterns"}),`
`,n.jsx(e.h4,{id:"next-action",children:'"Next" Action'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// English: Next → (arrow points right)
// Arabic: التالي ← (arrow points left, matching RTL reading direction)
const NextIcon = isRTL ? IconArrowLeft : IconArrowRight;

<Card
  footer={
    <Button variant="primary" suffixIcon={<NextIcon />}>
      {isRTL ? 'التالي' : 'Next'}
    </Button>
  }
>
  {content}
</Card>
`})}),`
`,n.jsx(e.h4,{id:"back-action",children:'"Back" Action'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// English: ← Back (arrow points left)
// Arabic: رجوع → (arrow points right, matching RTL reading direction)
const BackIcon = isRTL ? IconArrowRight : IconArrowLeft;

<Card
  footer={
    <Button variant="outlined" prefixIcon={<BackIcon />}>
      {isRTL ? 'رجوع' : 'Back'}
    </Button>
  }
>
  {content}
</Card>
`})}),`
`,n.jsx(e.h4,{id:"more-info-or-expand-action",children:'"More Info" or "Expand" Action'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// For expand/collapse or "more info" actions
const ExpandIcon = isRTL ? IconChevronLeft : IconChevronRight;

<Card
  footer={
    <Button variant="plain" suffixIcon={<ExpandIcon />}>
      {isRTL ? 'المزيد' : 'More'}
    </Button>
  }
>
  {content}
</Card>
`})}),`
`,n.jsx(e.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Choose directional icons carefully"})," - arrows should point in the reading direction"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with actual Arabic content"})," to ensure proper text rendering"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider icon semantics"}),' - "next" in RTL should point left (←) not right (→)']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Direction follows reading flow"})," - not physical direction on screen"]}),`
`]}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"1-dashboard-analytics-cards",children:"1. Dashboard Analytics Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function DashboardMetrics() {
  const metrics = [
    { title: 'Total Users', value: '12,345', change: '+5.2%' },
    { title: 'Revenue', value: '$89,432', change: '+12.8%' },
    { title: 'Conversion', value: '3.4%', change: '-0.8%' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      {metrics.map((metric) => (
        <Card
          key={metric.title}
          variant="elevated"
          size="medium"
          clickable={true}
          onClick={() => navigateToMetricDetails(metric.title)}
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconTrendingUp size={20} />
              <span>{metric.title}</span>
            </div>
          }
          footer={
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.875rem'
            }}>
              <span style={{ color: 'var(--t-color-text-tertiary)' }}>vs last month</span>
              <span style={{
                color: metric.change.startsWith('+') ? 'var(--t-color-text-success)' : 'var(--t-color-text-error)'
              }}>
                {metric.change}
              </span>
            </div>
          }
        >
          <div style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
            {metric.value}
          </div>
        </Card>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"2-user-profileteam-member-cards",children:"2. User Profile/Team Member Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function TeamMemberCard({ member }) {
  return (
    <Card
      variant="outlined"
      size="medium"
      interactive={true}
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar size="medium" src={member.avatar} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{member.name}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>
              {member.role}
            </div>
          </div>
          <Badge
            variant={member.status === 'online' ? 'success' : 'secondary'}
            style={{ marginLeft: 'auto' }}
          >
            {member.status}
          </Badge>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary" size="small" onClick={() => startChat(member.id)}>
            Message
          </Button>
          <Button variant="outlined" size="small" onClick={() => viewProfile(member.id)}>
            View Profile
          </Button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>{member.bio}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {member.skills.map((skill) => (
            <Badge key={skill} variant="secondary" size="small">{skill}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"3-form-section-cards",children:"3. Form Section Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function SettingsForm() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <Card
        variant="elevated"
        size="large"
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSettings size={20} />
            <span>Account Preferences</span>
          </div>
        }
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={() => resetSettings()}>Reset</Button>
            <Button variant="primary" onClick={() => saveSettings(settings)}>Save Changes</Button>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>Email Notifications</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>
                Receive updates and alerts via email
              </div>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>Dark Mode</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>
                Use dark theme for better night viewing
              </div>
            </div>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, darkMode: checked }))}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>Language</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>
                Choose your preferred language
              </div>
            </div>
            <Select
              value={settings.language}
              onValueChange={(value) => setSettings(prev => ({ ...prev, language: value }))}
              options={[
                { value: 'en', label: 'English' },
                { value: 'ar', label: 'العربية' },
                { value: 'es', label: 'Español' }
              ]}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"4-actioncta-cards",children:"4. Action/CTA Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function ActionCards() {
  const actions = [
    {
      icon: IconPlus,
      title: 'Create New Project',
      description: 'Start a new project from scratch or use a template',
      action: 'Get Started',
      onClick: () => navigateToProjectCreation()
    },
    {
      icon: IconUpload,
      title: 'Import Existing',
      description: 'Import data from your existing tools and services',
      action: 'Import Now',
      onClick: () => navigateToImport()
    },
    {
      icon: IconUsers,
      title: 'Invite Team',
      description: 'Collaborate with team members on projects',
      action: 'Send Invites',
      onClick: () => navigateToInvites()
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      {actions.map((action) => {
        const IconComponent = action.icon;
        return (
          <Card
            key={action.title}
            variant="ghost"
            size="large"
            clickable={true}
            onClick={action.onClick}
            header={
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--t-color-surface-brand)',
                  color: 'var(--t-color-text-inverse)'
                }}>
                  <IconComponent size={20} />
                </div>
                <span style={{ fontWeight: '600' }}>{action.title}</span>
              </div>
            }
            footer={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--t-color-text-brand)' }}>
                <span style={{ fontWeight: '500' }}>{action.action}</span>
                <IconArrowRight size={16} />
              </div>
            }
          >
            <p style={{ margin: 0, color: 'var(--t-color-text-secondary)' }}>
              {action.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"5-content-preview-cards",children:"5. Content Preview Cards"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function ContentPreviewCard({ article }) {
  return (
    <Card
      variant="elevated"
      size="medium"
      clickable={true}
      onClick={() => navigateToArticle(article.id)}
      header={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ margin: 0, marginBottom: '4px' }}>{article.title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--t-color-text-secondary)' }}>
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.publishDate}</span>
            </div>
          </div>
          <Badge variant={article.status === 'published' ? 'success' : 'warning'}>
            {article.status}
          </Badge>
        </div>
      }
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" size="small">{tag}</Badge>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', color: 'var(--t-color-text-tertiary)' }}>
            <IconEye size={14} />
            <span>{article.views}</span>
          </div>
        </div>
      }
    >
      <p style={{ margin: 0, lineHeight: 1.5 }}>
        {article.excerpt}
      </p>
    </Card>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,n.jsx(e.h3,{id:"full-width-layout",children:"Full Width Layout"}),`
`,n.jsx(i,{of:b}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Full width cards for dashboard headers
<Card
  fullWidth={true}
  variant="outlined"
  size="large"
  header="Dashboard Overview"
  footer="Last updated 5 minutes ago"
>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
    {/* Dashboard content */}
  </div>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"grid-layout",children:"Grid Layout"}),`
`,n.jsx(i,{of:w}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Responsive grid layout
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '16px'
}}>
  <Card variant="elevated" header="Metric 1">
    <div>42 Active Projects</div>
  </Card>
  <Card variant="outlined" header="Metric 2">
    <div>15 Updates Today</div>
  </Card>
  <Card variant="ghost" header="Metric 3">
    <div>98% Uptime</div>
  </Card>
</div>
`})}),`
`,n.jsx(e.h2,{id:"component-integration",children:"Component Integration"}),`
`,n.jsx(e.p,{children:"The Card component works seamlessly with other design system components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Buttons"}),": For actions in headers and footers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badges"}),": For status indicators and tags"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Avatars"}),": For user representation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icons"}),": For visual hierarchy and actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select/Input"}),": For embedded forms"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Switch/Checkbox"}),": For settings toggles"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),": Interactive and clickable cards are focusable with Tab"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Screen Reader Support"}),": Proper semantic structure with header/body/footer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA Labels"}),": When clickable, cards include appropriate ARIA attributes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"High Contrast"}),": All text meets WCAG contrast requirements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced Motion"}),": Respects ",n.jsx(e.code,{children:"prefers-reduced-motion"})," for animations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus Indicators"}),": Clear focus rings for keyboard navigation"]}),`
`]}),`
`,n.jsx(e.h2,{id:"performance-considerations",children:"Performance Considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React.memo"}),": Component is optimized to prevent unnecessary re-renders"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CSS Modules"}),": Efficient styling with scoped CSS classes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Minimal DOM"}),": Clean HTML structure without wrapper elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Optimized Animations"}),": Hardware-accelerated transforms for smooth performance"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bundle Size"}),": Lightweight implementation with tree-shaking support"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-reference-for-ai-agents",children:"🎯 QUICK REFERENCE FOR AI AGENTS"}),`
`,n.jsx(e.h3,{id:"-do-this-default",children:"✅ DO THIS (DEFAULT):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Basic card with equal padding
<Card>
  <p>Content with automatic equal padding on all sides</p>
</Card>

// Card with header and footer (props-based)
<Card
  header="Card Title"              // Use header prop
  footer="Footer content"          // Use footer prop
>
  <div>Main content only</div>
</Card>

// Interactive card (hover effects only)
<Card
  interactive={true}              // Surface-hover + 1px lift
  header="Interactive Card"
>
  <p>Hover for smooth animation</p>
</Card>

// Clickable card (enhanced hover + drop shadow)
<Card
  clickable={true}               // Enhanced hover + drop shadow + 2px lift
  onClick={handleClick}
  header="Clickable Card"
>
  <p>Click anywhere on this card</p>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"-never-do-this",children:"❌ NEVER DO THIS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Card>
  <div className="header">Title</div>     {/* ❌ Use header prop */}
  <div>Content</div>
  <div className="footer">Actions</div>   {/* ❌ Use footer prop */}
</Card>

<Card interactive={true} onClick={handleClick}>  {/* ❌ Use clickable={true} for clicks */}
  <p>Wrong interaction pattern</p>
</Card>

<Card>
  <div style={{padding: '20px 10px 5px 15px'}}>  {/* ❌ Breaks equal padding */}
    <p>Unequal padding</p>
  </div>
</Card>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Remember:"})," Equal 12px padding on all sides (var(--t-space-300)), header/footer via props, 0.2s ease-in-out animations, interactive vs clickable distinction!"]})]})}function Y(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(r,{...a})}):r(a)}export{Y as default};
