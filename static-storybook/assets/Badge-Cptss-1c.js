import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-DI2gBlDf.js";import{M as r,A as t,C as s}from"./index-BPXrzZIR.js";import{B as d,D as c,A as l,S as g,a as h,W as x,R as p}from"./Badge.stories-c4t_WN-o.js";import{B as j}from"./Badge-4Le4p2ox.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"badge-component",children:"Badge Component"}),`
`,e.jsx(n.p,{children:"The Badge component is a visual indicator used to highlight status, count, or categorize content with short text labels. Badges can appear in different tones, sizes, and can include icons."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Badges help users quickly identify status, category, or other metadata about items. They're compact, high-contrast elements that stand out visually from surrounding content."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Badge } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge>Badge</Badge>
`})}),`
`,e.jsx(n.h2,{id:"tones",children:"Tones"}),`
`,e.jsx(n.p,{children:"Badges come in different tones to represent different states or categories."}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Regular badges
<Badge tone="default">Default</Badge>
<Badge tone="info">Info</Badge>
<Badge tone="success">Success</Badge>
<Badge tone="warning">Warning</Badge>
<Badge tone="critical">Critical</Badge>
<Badge tone="magic">Magic</Badge>

// Strong badges (higher contrast)
<Badge tone="default" strong>Default</Badge>
<Badge tone="info" strong>Info</Badge>
<Badge tone="success" strong>Success</Badge>
<Badge tone="warning" strong>Warning</Badge>
<Badge tone="critical" strong>Critical</Badge>
<Badge tone="magic" strong>Magic</Badge>
`})}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"Used for neutral or general-purpose labels."}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsx(n.p,{children:"For informational or helpful content."}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(n.p,{children:"Indicates successful status or positive completion."}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(n.p,{children:"Alerts users to potential issues."}),`
`,e.jsx(n.h3,{id:"critical",children:"Critical"}),`
`,e.jsx(n.p,{children:"Highlights errors or critical information."}),`
`,e.jsx(n.h3,{id:"magic",children:"Magic"}),`
`,e.jsx(n.p,{children:"For special, featured, or premium items."}),`
`,e.jsx(n.h2,{id:"strong-variant",children:"Strong Variant"}),`
`,e.jsx(n.p,{children:"The strong variant provides higher contrast with a bold colored background, making badges more prominent."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge tone="success" strong>Success</Badge>
`})}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"Badges come in three sizes to fit different UI contexts."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>
<Badge size="xlarge">X-Large</Badge>
`})}),`
`,e.jsx(n.h3,{id:"medium-default",children:"Medium (Default)"}),`
`,e.jsx(n.p,{children:"Compact size suitable for most UI contexts."}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(n.p,{children:"Slightly larger for more prominence."}),`
`,e.jsx(n.h3,{id:"x-large",children:"X-Large"}),`
`,e.jsx(n.p,{children:"The largest size, for high-emphasis indicators or when a badge contains more text."}),`
`,e.jsx(n.h2,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(n.p,{children:"Badges can include an icon before the label text."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge 
  icon={<InfoIcon />}
>
  Badge with icon
</Badge>
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"The Badge component properly handles Right-to-Left (RTL) languages automatically by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Adjusting icon positioning for RTL text flow"}),`
`,e.jsx(n.li,{children:"Applying appropriate line height for Arabic text"}),`
`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// The badge will automatically adjust in RTL contexts
<div dir="rtl">
  <Badge tone="info">جداب</Badge>
  <Badge tone="success">نجاح</Badge>
  <Badge tone="warning">تحذير</Badge>
</div>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Badges are non-interactive elements used to convey information"}),`
`,e.jsx(n.li,{children:"Use appropriate color combinations to maintain sufficient contrast"}),`
`,e.jsx(n.li,{children:"For interactive badges, consider using a Button component instead"}),`
`,e.jsx(n.li,{children:"Screen readers will read badge content, so keep text concise and meaningful"}),`
`]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.h3,{id:"status-indicators",children:"Status Indicators"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  <Badge tone="success">Completed</Badge>
  <Badge tone="warning">Pending</Badge>
  <Badge tone="critical">Failed</Badge>
</div>
`})}),`
`,e.jsx(n.h3,{id:"categorization",children:"Categorization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  <Badge>Design</Badge>
  <Badge>Development</Badge>
  <Badge>Marketing</Badge>
</div>
`})}),`
`,e.jsx(n.h3,{id:"notification-counts",children:"Notification Counts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge tone="critical" strong>5</Badge>
`})}),`
`,e.jsx(n.h3,{id:"information-with-icons",children:"Information with Icons"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { InfoIcon, AlertIcon } from '@your-icon-library';

<div>
  <Badge icon={<InfoIcon />} tone="info">Information</Badge>
  <Badge icon={<AlertIcon />} tone="warning">Notice</Badge>
</div>
`})}),`
`,e.jsx(n.h2,{id:"customizing",children:"Customizing"}),`
`,e.jsx(n.p,{children:"The Badge component accepts additional class names and all standard HTML span attributes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Badge 
  className="custom-badge-class"
  data-testid="status-badge"
>
  Custom Badge
</Badge>
`})}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The Badge uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-space-100/200/300"}),` | Padding and icon spacing |
| `,e.jsx(n.code,{children:"--t-typography-caption-lg-medium"}),` | Typography for medium/large sizes |
| `,e.jsx(n.code,{children:"--t-typography-body-sm-medium"}),` | Typography for xlarge size |
| `,e.jsx(n.code,{children:"--t-color-*-500/1200"}),` | Background colors |
| `,e.jsx(n.code,{children:"--t-color-text-*"}),` | Text colors |
| `,e.jsx(n.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,e.jsx(n.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,e.jsx(n.h3,{id:"rendering-logic",children:"Rendering Logic"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The component applies classes based on tone, size, and strong props"}),`
`,e.jsx(n.li,{children:"Detects RTL mode from the document direction"}),`
`,e.jsx(n.li,{children:"Applies line height adjustments based on text direction"}),`
`,e.jsx(n.li,{children:"Renders the icon (if provided) and label text"}),`
`]}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(n.p,{children:"The Badge component is compatible with all modern browsers and includes RTL language support."})]})}function L(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{L as default};
