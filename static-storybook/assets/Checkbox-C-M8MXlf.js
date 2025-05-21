import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-DI2gBlDf.js";import{M as c,A as t,C as i}from"./index-BPXrzZIR.js";import{C as d,D as l,a as o,I as h,b as x,c as p,W as j,d as b,R as m,e as u,H as g,f as k,g as C}from"./Checkbox.stories-rwtsqjHV.js";import{C as f}from"./Checkbox-Dhj-7Gn_.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CfQheYXo.js";import"./index-DW48STyt.js";import"./index-B2x4RDPN.js";import"./index-DZ2oWOeb.js";import"./index-BEsdyKtK.js";import"./index-Dh73ENUf.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-GuN14Mgc.js";import"./IconCheck-PO1-3gxX.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"checkbox-component",children:"Checkbox Component"}),`
`,e.jsx(n.p,{children:"The Checkbox component allows users to select one or multiple items from a set or toggle a single option on or off."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Checkboxes are form controls that let users make binary choices (checked or unchecked) and can also represent an indeterminate state. They're commonly used in forms, settings, and lists where multiple selections are allowed."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Checkbox } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox label="Label" />
`})}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.h3,{id:"checked",children:"Checked"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox label="Label" checked={true} />
`})}),`
`,e.jsx(n.h3,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsx(n.p,{children:"The indeterminate state is useful for representing partially checked states, often used in hierarchical selections."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox label="Label" checked="indeterminate" />
`})}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox label="Label" disabled={true} />
`})}),`
`,e.jsx(n.h3,{id:"disabled-and-checked",children:"Disabled and Checked"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="Label" 
  disabled={true} 
  checked={true} 
/>
`})}),`
`,e.jsx(n.h2,{id:"validation-and-information",children:"Validation and Information"}),`
`,e.jsx(n.h3,{id:"with-help-text",children:"With Help Text"}),`
`,e.jsxs(n.p,{children:["Add supplementary information below the checkbox with the ",e.jsx(n.code,{children:"helpText"})," prop."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="Label" 
  helpText="Help text" 
/>
`})}),`
`,e.jsx(n.h3,{id:"with-error",children:"With Error"}),`
`,e.jsx(n.p,{children:"Display error messages when validation fails."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="Label" 
  error="Error message" 
/>
`})}),`
`,e.jsx(n.h3,{id:"required",children:"Required"}),`
`,e.jsx(n.p,{children:"Required checkboxes display a red asterisk (*) next to the label."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="Label" 
  required={true} 
/>
`})}),`
`,e.jsx(n.h2,{id:"label-variations",children:"Label Variations"}),`
`,e.jsx(n.h3,{id:"default-label",children:"Default Label"}),`
`,e.jsx(n.p,{children:"Labels describe the purpose of the checkbox."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"no-label",children:"No Label"}),`
`,e.jsx(n.p,{children:"Checkboxes can be displayed without a label."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox />
`})}),`
`,e.jsx(n.h3,{id:"hidden-label",children:"Hidden Label"}),`
`,e.jsx(n.p,{children:"For visual layout purposes, you may want to hide the label visually while keeping it accessible to screen readers."}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="Hidden Label" 
  hideLabel={true} 
/>
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"The Checkbox component properly handles Right-to-Left (RTL) languages automatically by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Adjusting the alignment and spacing for RTL text flow"}),`
`,e.jsx(n.li,{children:"Applying appropriate line height for Arabic text"}),`
`,e.jsx(n.li,{children:"Correctly positioning the help text and error messages"}),`
`]}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div dir="rtl">
  <Checkbox 
    label="تسمية" 
    helpText="نص المساعدة" 
  />
</div>
`})}),`
`,e.jsx(n.h3,{id:"rtl-with-error",children:"RTL with Error"}),`
`,e.jsx(i,{of:C}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div dir="rtl">
  <Checkbox 
    label="تسمية" 
    error="رسالة خطأ" 
  />
</div>
`})}),`
`,e.jsx(n.h2,{id:"controlled-usage",children:"Controlled Usage"}),`
`,e.jsx(n.p,{children:"You can control the checkbox state and handle changes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';

function MyForm() {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <Checkbox 
      label="I agree to the terms" 
      checked={isChecked}
      onCheckedChange={setIsChecked}
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"form-integration",children:"Form Integration"}),`
`,e.jsx(n.p,{children:"Checkbox is built on Radix UI's Checkbox component, making it compatible with forms:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<form onSubmit={handleSubmit}>
  <Checkbox 
    name="terms" 
    required={true} 
    label="I agree to the terms and conditions"
  />
  <button type="submit">Submit</button>
</form>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each checkbox has a unique ID that connects it to its label"}),`
`,e.jsxs(n.li,{children:["Required checkboxes use both the ",e.jsx(n.code,{children:"required"})," attribute and visual indication"]}),`
`,e.jsx(n.li,{children:"Error states are clearly communicated visually and to assistive technologies"}),`
`,e.jsx(n.li,{children:"Focus states are clearly visible for keyboard navigation"}),`
`,e.jsx(n.li,{children:"Supports keyboard navigation (space to toggle)"}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideLabel"})," prop maintains accessibility even when labels are visually hidden"]}),`
`,e.jsx(n.li,{children:"Help text and error messages are properly associated with the checkbox"}),`
`]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.h3,{id:"terms-acceptance",children:"Terms Acceptance"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Checkbox 
  label="I accept the Terms of Service and Privacy Policy" 
  required={true} 
/>
`})}),`
`,e.jsx(n.h3,{id:"preference-toggles",children:"Preference Toggles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  <Checkbox label="Email notifications" />
  <Checkbox label="SMS notifications" />
  <Checkbox label="Push notifications" />
</div>
`})}),`
`,e.jsx(n.h3,{id:"multi-select-lists",children:"Multi-select Lists"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  <Checkbox label="Apple" />
  <Checkbox label="Orange" />
  <Checkbox label="Banana" />
  <Checkbox label="Strawberry" />
</div>
`})}),`
`,e.jsx(n.h3,{id:"tristate-for-hierarchical-selection",children:"Tristate for Hierarchical Selection"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [parentChecked, setParentChecked] = useState('indeterminate');
const [child1Checked, setChild1Checked] = useState(true);
const [child2Checked, setChild2Checked] = useState(false);

// Update parent state based on children
useEffect(() => {
  if (child1Checked && child2Checked) {
    setParentChecked(true);
  } else if (!child1Checked && !child2Checked) {
    setParentChecked(false);
  } else {
    setParentChecked('indeterminate');
  }
}, [child1Checked, child2Checked]);

// Update children based on parent
const handleParentChange = (newState) => {
  setParentChecked(newState);
  if (newState !== 'indeterminate') {
    setChild1Checked(newState);
    setChild2Checked(newState);
  }
};

return (
  <div>
    <Checkbox 
      label="Select All" 
      checked={parentChecked}
      onCheckedChange={handleParentChange}
    />
    <div style={{ marginLeft: '24px' }}>
      <Checkbox 
        label="Option 1" 
        checked={child1Checked}
        onCheckedChange={setChild1Checked}
      />
      <Checkbox 
        label="Option 2" 
        checked={child2Checked}
        onCheckedChange={setChild2Checked}
      />
    </div>
  </div>
);
`})}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The Checkbox uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-size-*"}),` | Checkbox dimensions |
| `,e.jsx(n.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,e.jsx(n.code,{children:"--t-typography-*"}),` | Typography tokens |
| `,e.jsx(n.code,{children:"--t-color-fill-*"}),` | Background colors |
| `,e.jsx(n.code,{children:"--t-color-text-*"}),` | Text colors |
| `,e.jsx(n.code,{children:"--t-color-border-*"}),` | Border colors |
| `,e.jsx(n.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,e.jsx(n.code,{children:"--t-color-icon-*"}),` | Icon colors |
| `,e.jsx(n.code,{children:"--t-border-radius-*"}),` | Border radius |
| `,e.jsx(n.code,{children:"--t-border-width-*"}),` | Border width |
| `,e.jsx(n.code,{children:"--t-duration-*"}),` | Animation duration |
| `,e.jsx(n.code,{children:"--t-easing-*"}),` | Animation timing |
| `,e.jsx(n.code,{children:"--t-line-height-*"})," | Line height for different languages |"]}),`
`,e.jsx(n.h3,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"The component is built on Radix UI's Checkbox component, which provides accessibility and state management. The custom implementation adds:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Label, help text, and error message handling"}),`
`,e.jsx(n.li,{children:"Visual styling through CSS modules"}),`
`,e.jsx(n.li,{children:"RTL support with appropriate text and layout adjustments"}),`
`,e.jsx(n.li,{children:"Indeterminate state visualization"}),`
`,e.jsx(n.li,{children:"Required field indication"}),`
`]}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(n.p,{children:"The Checkbox component is compatible with all modern browsers and includes RTL language support."})]})}function z(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{z as default};
