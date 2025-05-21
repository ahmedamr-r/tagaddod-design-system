import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-DI2gBlDf.js";import{M as a,A as c,C as i}from"./index-BPXrzZIR.js";import{B as l,D as s,A as d,P as h,S as u,T as x,a as j,C as p,b as m,N as g,M as f,c as B,L as b,d as y,F as v,W as I,e as T,f as w,I as S,R as N,g as C}from"./Button.stories-jCFs4MbD.js";import{B as A}from"./Button-b6PCfnH9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createReactComponent-GuN14Mgc.js";import"./IconArrowRight-BMg5yxFX.js";import"./IconSearch-vd-jVdmq.js";import"./IconTrash-BnTUPFNL.js";import"./IconCheck-PO1-3gxX.js";import"./clsx-B-dksMZM.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"button-component",children:"Button Component"}),`
`,n.jsx(e.p,{children:"The Button component is a versatile UI element that triggers actions or events when clicked by users. It supports various visual styles through variants and tones, accommodates different sizes, and can include loading states, icons, and full-width layouts."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Buttons are primary interactive elements in user interfaces, allowing users to trigger actions, submit forms, navigate, or make selections. The Tagaddod Design System provides a comprehensive Button component with consistent styling and behavior."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{of:A}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Default button (primary variant)
<Button>Button</Button>

// With callback
<Button onClick={() => console.log('Button clicked')}>
  Click Me
</Button>
`})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Buttons come in four visual variants that represent different levels of emphasis."}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.p,{children:"Use Primary buttons for the main action in a section or form."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button variant="primary">Primary Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:"Secondary buttons for alternative or secondary actions."}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button variant="secondary">Secondary Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(e.p,{children:"Tertiary buttons have a subtle appearance for less prominent actions."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button variant="tertiary">Tertiary Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"plain",children:"Plain"}),`
`,n.jsx(e.p,{children:"Plain buttons are minimalist with no background or border until hovered."}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button variant="plain">Plain Button</Button>
`})}),`
`,n.jsx(e.h2,{id:"tones",children:"Tones"}),`
`,n.jsx(e.p,{children:"Tones provide different color treatments that convey semantic meaning."}),`
`,n.jsx(e.h3,{id:"default-brand",children:"Default (Brand)"}),`
`,n.jsx(e.p,{children:"The default tone uses brand colors."}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.h3,{id:"critical",children:"Critical"}),`
`,n.jsx(e.p,{children:"Use for destructive or high-risk actions (delete, remove)."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button tone="critical">Critical Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"success",children:"Success"}),`
`,n.jsx(e.p,{children:"Indicates positive or successful actions."}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button tone="success">Success Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"neutral",children:"Neutral"}),`
`,n.jsx(e.p,{children:"For standard, non-branded actions."}),`
`,n.jsx(i,{of:g}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button tone="neutral">Neutral Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"magic",children:"Magic"}),`
`,n.jsx(e.p,{children:"For special or premium actions."}),`
`,n.jsx(i,{of:f}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button tone="magic">Magic Button</Button>
`})}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(i,{of:B}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="micro">Micro</Button>
`})}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsx(e.p,{children:'Shows a spinner and disables interaction. The button displays "Loading..." text in the current language.'}),`
`,n.jsx(i,{of:b}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button loading>Loading Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(e.p,{children:"Indicates that a button action is unavailable."}),`
`,n.jsx(i,{of:y}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button disabled>Disabled Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"full-width",children:"Full Width"}),`
`,n.jsx(e.p,{children:"Stretches the button to 100% of its container's width."}),`
`,n.jsx(i,{of:v}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button fullWidth>Full Width Button</Button>
`})}),`
`,n.jsx(e.h2,{id:"icon-usage",children:"Icon Usage"}),`
`,n.jsx(e.p,{children:"Buttons can include icons before (prefix) or after (suffix) the text, or display only an icon."}),`
`,n.jsx(e.h3,{id:"with-prefix-icon",children:"With Prefix Icon"}),`
`,n.jsx(i,{of:I}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconPlus } from '@tabler/icons-react';

<Button prefixIcon={<IconPlus size={18} />}>
  Add Item
</Button>
`})}),`
`,n.jsx(e.h3,{id:"with-suffix-icon",children:"With Suffix Icon"}),`
`,n.jsx(i,{of:T}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconArrowRight } from '@tabler/icons-react';

<Button suffixIcon={<IconArrowRight size={18} />}>
  Next Step
</Button>
`})}),`
`,n.jsx(e.h3,{id:"with-both-icons",children:"With Both Icons"}),`
`,n.jsx(i,{of:w}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconSearch, IconArrowRight } from '@tabler/icons-react';

<Button 
  prefixIcon={<IconSearch size={18} />}
  suffixIcon={<IconArrowRight size={18} />}
>
  Search Results
</Button>
`})}),`
`,n.jsx(e.h3,{id:"icon-only-button",children:"Icon-Only Button"}),`
`,n.jsxs(e.p,{children:["When creating icon-only buttons, always provide an accessible name using ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsx(i,{of:S}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconPlus } from '@tabler/icons-react';

<Button 
  prefixIcon={<IconPlus size={18} />}
  aria-label="Add item"
/>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The Button component properly handles Right-to-Left (RTL) languages automatically by:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Adjusting icon positioning for RTL text flow"}),`
`,n.jsx(e.li,{children:"Applying appropriate line height for Arabic text"}),`
`,n.jsx(e.li,{children:'Displaying "Loading..." text in Arabic when in RTL mode'}),`
`]}),`
`,n.jsx(i,{of:N}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// The button will automatically adjust in RTL contexts
<Button 
  prefixIcon={<IconPlus size={18} />}
  suffixIcon={<IconArrowRight size={18} />}
>
  زر عربي
</Button>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use semantic HTML button elements with appropriate type attributes (",n.jsx(e.code,{children:"button"}),", ",n.jsx(e.code,{children:"submit"}),", or ",n.jsx(e.code,{children:"reset"}),")"]}),`
`,n.jsx(e.li,{children:"Maintain sufficient color contrast for all states and variants"}),`
`,n.jsxs(e.li,{children:["Provide descriptive text or ",n.jsx(e.code,{children:"aria-label"})," for icon-only buttons"]}),`
`,n.jsx(e.li,{children:"Clearly indicate loading and disabled states"}),`
`,n.jsx(e.li,{children:"Support keyboard focus styles and navigation"}),`
`]}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(i,{of:C}),`
`,n.jsx(e.h3,{id:"form-actions",children:"Form Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
  <Button variant="tertiary">Cancel</Button>
  <Button variant="primary">Submit</Button>
</div>
`})}),`
`,n.jsx(e.h3,{id:"data-operations",children:"Data Operations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconPlus, IconEdit, IconTrash } from '@tabler/icons-react';

<div>
  <Button 
    variant="primary" 
    prefixIcon={<IconPlus size={18} />}
  >
    Add Item
  </Button>
  
  <Button 
    variant="secondary" 
    prefixIcon={<IconEdit size={18} />}
  >
    Edit
  </Button>
  
  <Button 
    variant="primary" 
    tone="critical" 
    prefixIcon={<IconTrash size={18} />}
  >
    Delete
  </Button>
</div>
`})}),`
`,n.jsx(e.h2,{id:"customizing",children:"Customizing"}),`
`,n.jsx(e.p,{children:"The Button component accepts additional class names and all standard HTML button attributes."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Button 
  className="custom-button-class"
  data-testid="submit-button"
  onClick={handleSubmit}
>
  Custom Button
</Button>
`})}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Button uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-space-100/200/300/400"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-font-family-primary"}),` | Button text font |
| `,n.jsx(e.code,{children:"--t-typography-body-*"}),` | Typography tokens |
| `,n.jsx(e.code,{children:"--t-color-fill-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-text-*"}),` | Text colors |
| `,n.jsx(e.code,{children:"--t-color-border-*"}),` | Border colors |
| `,n.jsx(e.code,{children:"--t-border-radius-200"}),` | Corner radius |
| `,n.jsx(e.code,{children:"--t-size-*"}),` | Height/width dimensions |
| `,n.jsx(e.code,{children:"--t-duration-base"}),` | Animation duration |
| `,n.jsx(e.code,{children:"--t-easing-in-out"})," | Animation timing |"]}),`
`,n.jsx(e.h3,{id:"rendering-logic",children:"Rendering Logic"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"The component determines if it's icon-only by checking if there are no children but icon props exist"}),`
`,n.jsx(e.li,{children:"Detects RTL mode from the document direction"}),`
`,n.jsx(e.li,{children:"Applies appropriate classes based on props"}),`
`,n.jsx(e.li,{children:"Renders content (including loading state) based on conditions"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Button component is compatible with all modern browsers and includes RTL language support."})]})}function J(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{J as default};
