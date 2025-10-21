import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as l}from"./index-BqIVwv1J.js";import{M as t,C as r,A as c}from"./index-BCgJJ4rA.js";import{S as i,D as d,T as a,H as h,B as p,a as x,R as j,C as g}from"./ScrollArea.stories-DaULMKhi.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./ScrollArea-CS41QZ1X.js";import"./index-D7-T4lOe.js";import"./index-BTe66ZhM.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./clsx-B-dksMZM.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:i}),`
`,n.jsx(e.h1,{id:"scrollarea",children:"ScrollArea"}),`
`,n.jsx(e.p,{children:"The ScrollArea component provides native scroll functionality with custom, cross-browser styling. It enhances the default browser scrollbars while maintaining native scrolling behavior and accessibility features."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ScrollArea } from '@tagaddod-design/react';

function App() {
  return (
    <ScrollArea height="200px" width="300px">
      <div style={{ padding: '16px' }}>
        {/* Your scrollable content here */}
        <p>Long content that requires scrolling...</p>
      </div>
    </ScrollArea>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"scrollbar-types",children:"Scrollbar Types"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"type"})," prop controls when scrollbars are visible:"]}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h3,{id:"horizontal-scrolling",children:"Horizontal Scrolling"}),`
`,n.jsx(e.p,{children:"Enable horizontal scrolling for wide content:"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"both-scrollbars",children:"Both Scrollbars"}),`
`,n.jsx(e.p,{children:"When content overflows both horizontally and vertically:"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h3,{id:"different-sizes",children:"Different Sizes"}),`
`,n.jsx(e.p,{children:"ScrollArea can be sized to fit your layout needs:"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"rtl-support",children:"RTL Support"}),`
`,n.jsx(e.p,{children:"The component supports Right-to-Left languages:"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h3,{id:"custom-content",children:"Custom Content"}),`
`,n.jsx(e.p,{children:"ScrollArea works with any type of content:"}),`
`,n.jsx(r,{of:g}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Native scrolling"}),": Uses browser's native scroll behavior for optimal performance and accessibility"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom styling"}),": Replaces default scrollbars with design system themed versions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Cross-browser"}),": Consistent appearance across different browsers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RTL support"}),": Proper handling of right-to-left text direction"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility"}),": Maintains keyboard navigation and screen reader support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible sizing"}),": Customizable width and height"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple orientations"}),": Support for vertical, horizontal, or both scrollbars"]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(e.p,{children:"The component uses the following design tokens:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-border-radius-md"})," - Rounded corners"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-color-fill-primary"})," - Background color"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-color-border-secondary"})," - Border color"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-color-fill-secondary"})," - Scrollbar track color"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-color-fill-brand"})," - Scrollbar thumb color"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-space-300"})," - Scrollbar width/height (12px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-motion-duration-fast"})," - Transition timing"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Preserves native keyboard scrolling behavior"}),`
`,n.jsx(e.li,{children:"Maintains focus management"}),`
`,n.jsx(e.li,{children:"Supports screen readers"}),`
`,n.jsx(e.li,{children:"Follows WAI-ARIA best practices"}),`
`,n.jsx(e.li,{children:"High contrast mode support"}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Set appropriate dimensions"}),": Always specify width and height for predictable layout"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider content padding"}),": Add padding inside the scrollable area for better readability"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use hover type for most cases"}),": The 'hover' type provides good UX without visual clutter"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with keyboard navigation"}),": Ensure scrollable areas are keyboard accessible"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Handle both orientations carefully"}),": Only enable horizontal scrolling when necessary"]}),`
`]})]})}function H(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{H as default};
