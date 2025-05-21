import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DI2gBlDf.js";import{M as l,A as p,C as t}from"./index-BPXrzZIR.js";import{P as a,D as i,W as c,a as d,C as h}from"./Popover.stories-Bhu8mPA7.js";import{P as u}from"./Popover-CgPZskr3.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-b6PCfnH9.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-GuN14Mgc.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-DUtlJRZ9.js";import"./index-DZCApzUK.js";import"./index-pvuVTQ3b.js";import"./index-BEsdyKtK.js";import"./index-Dh73ENUf.js";import"./index-B2x4RDPN.js";function r(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(o.h1,{id:"popover-component",children:"Popover Component"}),`
`,n.jsx(o.p,{children:"The Popover component displays floating content that appears when a user interacts with a trigger element."}),`
`,n.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(o.p,{children:"Popovers are used to display additional information or actions related to an element on the page without navigating away from the current context. They're commonly used for tooltips, dropdowns, menus, and other contextual information displays."}),`
`,n.jsx(o.h2,{id:"import",children:"Import"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`import { Popover } from '@tagaddod/react';
`})}),`
`,n.jsx(o.p,{children:"For advanced usage with more control over the composition:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`import { 
  PopoverRoot, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverClose 
} from '@tagaddod/react';
`})}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(p,{of:u}),`
`,n.jsx(o.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`import { Popover, Button } from '@tagaddod/react';

<Popover
  content="This is a basic popover content"
  side="bottom"
  align="center"
  showArrow={true}
>
  <Button>Click me</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"types",children:"Types"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content="This is a basic popover content"
  type="default"
>
  <Button>Default Popover</Button>
</Popover>
`})}),`
`,n.jsx(o.h3,{id:"with-scrollbar",children:"With Scrollbar"}),`
`,n.jsxs(o.p,{children:["For popover content that might exceed the maximum height, use the ",n.jsx(o.code,{children:"with-scrollbar"})," type to display a scrollbar."]}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content={
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
  }
  type="with-scrollbar"
>
  <Button>Scrollable Popover</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"positions",children:"Positions"}),`
`,n.jsxs(o.p,{children:["You can position the popover relative to the trigger using the ",n.jsx(o.code,{children:"side"})," and ",n.jsx(o.code,{children:"align"})," props."]}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`// Top position
<Popover
  content="This popover appears on top"
  side="top"
  align="center"
>
  <Button>Top</Button>
</Popover>

// Right position
<Popover
  content="This popover appears on the right"
  side="right"
  align="center"
>
  <Button>Right</Button>
</Popover>

// Bottom position
<Popover
  content="This popover appears on the bottom"
  side="bottom"
  align="center"
>
  <Button>Bottom</Button>
</Popover>

// Left position
<Popover
  content="This popover appears on the left"
  side="left"
  align="center"
>
  <Button>Left</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"arrow",children:"Arrow"}),`
`,n.jsxs(o.p,{children:["You can show or hide the arrow pointing to the trigger using the ",n.jsx(o.code,{children:"showArrow"})," prop."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`// With arrow
<Popover
  content="This popover has an arrow"
  showArrow={true}
>
  <Button>With Arrow</Button>
</Popover>

// Without arrow
<Popover
  content="This popover has no arrow"
  showArrow={false}
>
  <Button>Without Arrow</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"animation",children:"Animation"}),`
`,n.jsxs(o.p,{children:["The popover has a default animation duration of 200ms. You can customize this with the ",n.jsx(o.code,{children:"animationDuration"})," prop."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`// Faster animation
<Popover
  content="This popover animates quickly"
  animationDuration={100}
>
  <Button>Fast Animation</Button>
</Popover>

// Slower animation
<Popover
  content="This popover animates slowly"
  animationDuration={400}
>
  <Button>Slow Animation</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"advanced-composition",children:"Advanced Composition"}),`
`,n.jsx(o.p,{children:"For more complex scenarios, you can use the individual popover components to create custom compositions."}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`import { 
  PopoverRoot, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverClose, 
  Button 
} from '@tagaddod/react';

// With buttons
<Popover
  content={
    <div>
      <h4 style={{ margin: '0 0 0.5rem' }}>Popover Title</h4>
      <p style={{ margin: '0 0 1rem' }}>This popover contains a title and action buttons.</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
        <PopoverClose asChild>
          <Button variant="secondary" size="micro">Cancel</Button>
        </PopoverClose>
        <PopoverClose asChild>
          <Button size="micro">Confirm</Button>
        </PopoverClose>
      </div>
    </div>
  }
>
  <Button>With Buttons</Button>
</Popover>

// Custom composition
<PopoverRoot>
  <PopoverTrigger asChild>
    <Button>Custom Composition</Button>
  </PopoverTrigger>
  <PopoverContent sideOffset={5}>
    <div style={{ padding: '0.5rem' }}>
      <h4>Custom Components</h4>
      <p>Using PopoverRoot, PopoverTrigger, and PopoverContent for more control.</p>
      <PopoverArrow />
    </div>
  </PopoverContent>
</PopoverRoot>
`})}),`
`,n.jsx(o.h2,{id:"controlled-mode",children:"Controlled Mode"}),`
`,n.jsxs(o.p,{children:["You can control the open state of the popover using the ",n.jsx(o.code,{children:"open"})," and ",n.jsx(o.code,{children:"onOpenChange"})," props."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`import { useState } from 'react';

function ControlledPopover() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close Popover' : 'Open Popover'}
      </Button>
      
      <Popover
        content="This is a controlled popover"
        open={open}
        onOpenChange={setOpen}
      >
        <Button>Trigger</Button>
      </Popover>
    </div>
  );
}
`})}),`
`,n.jsx(o.h2,{id:"use-cases",children:"Use Cases"}),`
`,n.jsx(o.h3,{id:"tooltips",children:"Tooltips"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content="This is additional information about the action"
  side="top"
  showArrow={true}
>
  <Button>Hover for Info</Button>
</Popover>
`})}),`
`,n.jsx(o.h3,{id:"dropdown-menus",children:"Dropdown Menus"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content={
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button style={{ padding: '8px', textAlign: 'left' }}>Edit</button>
      <button style={{ padding: '8px', textAlign: 'left' }}>Duplicate</button>
      <button style={{ padding: '8px', textAlign: 'left' }}>Delete</button>
    </div>
  }
>
  <Button>Menu</Button>
</Popover>
`})}),`
`,n.jsx(o.h3,{id:"information-cards",children:"Information Cards"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content={
    <div>
      <h4>Item Details</h4>
      <p>Status: Active</p>
      <p>Created: June 1, 2023</p>
      <p>Owner: John Doe</p>
    </div>
  }
  side="right"
>
  <Button>View Details</Button>
</Popover>
`})}),`
`,n.jsx(o.h3,{id:"color-picker",children:"Color Picker"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<Popover
  content={
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
      {['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal'].map(color => (
        <div
          key={color}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: color,
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => console.log(\`Selected color: \${color}\`)}
        />
      ))}
    </div>
  }
>
  <Button>Pick a Color</Button>
</Popover>
`})}),`
`,n.jsx(o.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(o.p,{children:"The Popover component properly handles Right-to-Left (RTL) languages by:"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsx(o.li,{children:"Adjusting the layout and positioning for RTL text flow"}),`
`,n.jsx(o.li,{children:"Applying appropriate line height for Arabic text"}),`
`,n.jsx(o.li,{children:"Supporting RTL content alignment"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-jsx",children:`<div dir="rtl">
  <Popover
    content="محتوى منبثق باللغة العربية"
    side="bottom"
    align="start"
  >
    <Button>افتح المنبثقة</Button>
  </Popover>
</div>
`})}),`
`,n.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(o.p,{children:"The Popover component follows accessibility best practices:"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Built on Radix UI's Popover primitive for robust accessibility"}),`
`,n.jsx(o.li,{children:"Properly manages focus when opened and closed"}),`
`,n.jsx(o.li,{children:"Uses appropriate ARIA attributes for screen readers"}),`
`,n.jsx(o.li,{children:"Supports keyboard navigation with Tab and Escape keys"}),`
`,n.jsx(o.li,{children:"Ensures sufficient color contrast"}),`
`,n.jsx(o.li,{children:"Properly positions content to avoid clipping and ensure visibility"}),`
`,n.jsx(o.li,{children:"Handles animations with respect for reduced motion preferences"}),`
`]}),`
`,n.jsx(o.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(o.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(o.p,{children:"The Popover component uses the following token CSS variables:"}),`
`,n.jsxs(o.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(o.code,{children:"--t-border-radius-300"}),` | Border radius for the popover |
| `,n.jsx(o.code,{children:"--t-space-300"}),` | Padding inside the popover |
| `,n.jsx(o.code,{children:"--t-color-surface-primary"}),` | Background color |
| `,n.jsx(o.code,{children:"--t-shadow-popover"}),` | Shadow for depth and elevation |
| `,n.jsx(o.code,{children:"--t-width-350"}),` | Maximum width constraint |
| `,n.jsx(o.code,{children:"--t-height-350"}),` | Maximum height for scrollable popovers |
| `,n.jsx(o.code,{children:"--t-z-index-popover"}),` | Z-index for proper stacking |
| `,n.jsx(o.code,{children:"--t-color-border-subtle"}),` | Border color |
| `,n.jsx(o.code,{children:"--t-color-fill-primary"}),` | Arrow fill color |
| `,n.jsx(o.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,n.jsx(o.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,n.jsx(o.h3,{id:"architecture",children:"Architecture"}),`
`,n.jsx(o.p,{children:"The Popover component is built on Radix UI's Popover primitive, which provides:"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsx(o.li,{children:"Focus management"}),`
`,n.jsx(o.li,{children:"Proper positioning"}),`
`,n.jsx(o.li,{children:"Collision detection"}),`
`,n.jsx(o.li,{children:"Keyboard navigation"}),`
`,n.jsx(o.li,{children:"Animation support"}),`
`]}),`
`,n.jsx(o.p,{children:"The Tagaddod implementation extends this with:"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsx(o.li,{children:"Design system integration with tokens"}),`
`,n.jsx(o.li,{children:"RTL language support"}),`
`,n.jsx(o.li,{children:"Scrollable content option"}),`
`,n.jsx(o.li,{children:"Animation customization"}),`
`,n.jsx(o.li,{children:"Simplified API for common cases"}),`
`]}),`
`,n.jsx(o.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsxs(o.p,{children:["The Popover component is compatible with all modern browsers and includes RTL language support. The animation performance is optimized using CSS properties like ",n.jsx(o.code,{children:"will-change"})," and ",n.jsx(o.code,{children:"transform-origin"}),"."]})]})}function W(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{W as default};
