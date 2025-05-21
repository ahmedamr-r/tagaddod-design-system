import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DI2gBlDf.js";import{M as a,A as l,C as r}from"./index-BPXrzZIR.js";import{D as c,a as d,b as t,L as h,W as p,c as x,d as j,C as u,S as m,F as g,R as w}from"./Drawer.stories-BL3XtCe1.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./index-BY2_vhv5.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-pvuVTQ3b.js";import"./index-B2x4RDPN.js";import"./index-DUtlJRZ9.js";import"./index-DZCApzUK.js";import"./index-Dh73ENUf.js";import"./Button-b6PCfnH9.js";import"./createReactComponent-GuN14Mgc.js";import"./IconArrowRight-BMg5yxFX.js";import"./IconX-5Dn7YNlv.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"drawer-component",children:"Drawer Component"}),`
`,n.jsx(e.p,{children:"The Drawer component is a side panel that slides in from the edge of the screen, providing additional content or actions without navigating away from the current page."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Drawers are used to display supplementary content, forms, or detailed information while keeping the main context visible. They can appear from the right or left side of the screen and come in different sizes."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{of:d}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Drawer, Button } from '@tagaddod/react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Drawer Title"
      >
        <div style={{ padding: '16px 0' }}>
          <p>This is a default drawer content.</p>
          <p>You can place any content here.</p>
        </div>
      </Drawer>
    </>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(e.p,{children:"The Drawer component comes in three sizes:"}),`
`,n.jsx(e.h3,{id:"medium-default",children:"Medium (Default)"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Medium Drawer"
  size="medium"
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"small",children:"Small"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Small Drawer"
  size="small"
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"large",children:"Large"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Large Drawer"
  size="large"
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"positions",children:"Positions"}),`
`,n.jsx(e.p,{children:"The Drawer can appear from either side of the screen:"}),`
`,n.jsx(e.h3,{id:"right-default",children:"Right (Default)"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Right Drawer"
  position="right"
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"left",children:"Left"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Left Drawer"
  position="left"
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"header-options",children:"Header Options"}),`
`,n.jsx(e.h3,{id:"with-back-button",children:"With Back Button"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Step 1 of 3"
  showBackButton={true}
  onBackClick={handleBack}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"with-header-components",children:"With Header Components"}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Drawer with Header Components"
  headerPrefix={<span className="badge">Badge</span>}
  headerSuffix={<Button variant="plain" size="micro">Action</Button>}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"without-title",children:"Without Title"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  showTitle={false}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"without-close-button",children:"Without Close Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Without Close Button"
  showClose={false}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"footer",children:"Footer"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Drawer with Footer"
  showFooter={true}
  primaryAction={{
    label: 'Save',
    onClick: () => {
      // Save action
      setOpen(false);
    },
    variant: 'primary',
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setOpen(false),
    variant: 'tertiary',
  }}
  footerContent={<span>Last edited: Today</span>}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"visual-customization",children:"Visual Customization"}),`
`,n.jsx(e.h3,{id:"custom-overlay",children:"Custom Overlay"}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Custom Overlay Drawer"
  overlayOpacity={0.9}
  blurBackground={true}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"surface-background",children:"Surface Background"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Surface Background Drawer"
  useSurfaceBackground={true}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"full-height",children:"Full Height"}),`
`,n.jsx(r,{of:g}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Full Height Drawer"
  fullHeight={true}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The Drawer component properly handles Right-to-Left (RTL) languages automatically by:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Switching the position (right becomes left and vice versa)"}),`
`,n.jsx(e.li,{children:"Flipping the direction of the back button icon"}),`
`,n.jsx(e.li,{children:"Applying appropriate line height for Arabic text"}),`
`,n.jsx(e.li,{children:"Ensuring correct alignment of text and buttons"}),`
`]}),`
`,n.jsx(r,{of:w}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div dir="rtl">
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="عنوان الدرج"
    showBackButton={true}
    showFooter={true}
    primaryAction={{
      label: 'حفظ',
      onClick: () => setOpen(false),
    }}
    secondaryAction={{
      label: 'إلغاء',
      onClick: () => setOpen(false),
    }}
  >
    <div style={{ textAlign: 'right' }}>
      <p>هذا محتوى الدرج باللغة العربية.</p>
    </div>
  </Drawer>
</div>
`})}),`
`,n.jsx(e.h2,{id:"use-cases",children:"Use Cases"}),`
`,n.jsx(e.h3,{id:"form-entry",children:"Form Entry"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Add New User"
  showFooter={true}
  primaryAction={{
    label: 'Save',
    onClick: handleSave,
    disabled: !isFormValid,
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setOpen(false),
  }}
>
  <form onSubmit={handleSubmit}>
    {/* Form fields */}
  </form>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"object-details",children:"Object Details"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title={\`Order #\${order.id}\`}
  showFooter={true}
  primaryAction={{
    label: 'Process Order',
    onClick: handleProcessOrder,
  }}
  secondaryAction={{
    label: 'Close',
    onClick: () => setOpen(false),
  }}
>
  <div>
    {/* Order details */}
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"multi-step-flows",children:"Multi-step Flows"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title={\`Step \${currentStep} of \${totalSteps}\`}
  showBackButton={currentStep > 1}
  onBackClick={() => setCurrentStep(currentStep - 1)}
  showFooter={true}
  primaryAction={{
    label: currentStep === totalSteps ? 'Finish' : 'Next',
    onClick: handleNextStep,
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: () => setOpen(false),
  }}
>
  <div>
    {/* Step content */}
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"settings-panel",children:"Settings Panel"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Settings"
  size="small"
  position="right"
>
  <div>
    {/* Settings options */}
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Drawer component follows accessibility best practices:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Uses a modal dialog pattern for proper focus management"}),`
`,n.jsx(e.li,{children:"Traps focus within the drawer when open"}),`
`,n.jsx(e.li,{children:"Closes on ESC key press"}),`
`,n.jsx(e.li,{children:"Uses proper headings for drawer title"}),`
`,n.jsx(e.li,{children:"Provides sufficient color contrast"}),`
`,n.jsx(e.li,{children:"Handles keyboard navigation properly"}),`
`,n.jsx(e.li,{children:"Maintains a logical tab order"}),`
`,n.jsx(e.li,{children:"Properly labeled buttons (back, close)"}),`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.code,{children:"aria-label"})," for buttons without visible text"]}),`
`,n.jsx(e.li,{children:"Prevents background scrolling when drawer is open"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Drawer component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-fill-*"}),` | Button and background colors |
| `,n.jsx(e.code,{children:"--t-color-border-*"}),` | Border colors |
| `,n.jsx(e.code,{children:"--t-color-text-*"}),` | Text colors |
| `,n.jsx(e.code,{children:"--t-color-icon-*"}),` | Icon colors |
| `,n.jsx(e.code,{children:"--t-font-size-*"}),` | Font sizes |
| `,n.jsx(e.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,n.jsx(e.code,{children:"--t-border-radius-*"}),` | Border radius values |
| `,n.jsx(e.code,{children:"--t-shadow-200"}),` | Shadow for the drawer |
| `,n.jsx(e.code,{children:"--t-z-index-overlay"}),` | Z-index for drawer and overlay |
| `,n.jsx(e.code,{children:"--t-duration-base"}),` | Animation duration |
| `,n.jsx(e.code,{children:"--t-easing-in-out"}),` | Animation timing function |
| `,n.jsx(e.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,n.jsx(e.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,n.jsx(e.h3,{id:"architecture",children:"Architecture"}),`
`,n.jsx(e.p,{children:"The component is built on Vaul's Drawer component which provides:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Animation and transitions for smooth entrance/exit"}),`
`,n.jsx(e.li,{children:"Focus management for accessibility"}),`
`,n.jsx(e.li,{children:"Supporting primitives for overlay and content"}),`
`]}),`
`,n.jsx(e.p,{children:"The Tagaddod implementation extends this with:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Design system integration with tokens"}),`
`,n.jsx(e.li,{children:"Multiple sizes and positions"}),`
`,n.jsx(e.li,{children:"Header and footer configurations"}),`
`,n.jsx(e.li,{children:"RTL language support"}),`
`,n.jsx(e.li,{children:"Responsive behavior for mobile devices"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Drawer component is compatible with all modern browsers and includes RTL language support."}),`
`,n.jsx(e.h3,{id:"mobile-behavior",children:"Mobile Behavior"}),`
`,n.jsx(e.p,{children:"On smaller screens (below 640px):"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The drawer takes the full width of the screen"}),`
`,n.jsx(e.li,{children:"It slides up from the bottom instead of from the side"}),`
`,n.jsx(e.li,{children:"It has a maximum height of 80% of the viewport"}),`
`,n.jsx(e.li,{children:"It uses rounded corners at the top"}),`
`]})]})}function V(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{V as default};
