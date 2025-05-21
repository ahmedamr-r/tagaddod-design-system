import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-DI2gBlDf.js";import{M as o,A as d,C as i}from"./index-BPXrzZIR.js";import{T as c,D as s,O as h,R as x,W as p,a as u,b as j,c as m,A as f,E as g,d as b,e as I,f as T,C as y,P as l,F as w,S as v,g as S,h as E,i as N}from"./TextInput.stories-_O7SVl5Z.js";import{T as C}from"./TextInput-BC0Qh9vv.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createReactComponent-GuN14Mgc.js";import"./IconSearch-vd-jVdmq.js";import"./IconUser-C1LEUmMM.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-pvuVTQ3b.js";import"./clsx-B-dksMZM.js";import"./IconX-5Dn7YNlv.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"textinput-component",children:"TextInput Component"}),`
`,e.jsx(n.p,{children:"The TextInput component is a form element for collecting user text input with support for various states, sizes, and visual treatments."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"TextInput is a fundamental component for forms and data collection, offering a rich set of features including various states (error, disabled, read-only), prefix and suffix elements, password visibility toggle, and clear functionality."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { TextInput } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:C}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Name"
  placeholder="Enter your name"
/>
`})}),`
`,e.jsx(n.h2,{id:"labels-and-help-text",children:"Labels and Help Text"}),`
`,e.jsx(n.h3,{id:"standard-label",children:"Standard Label"}),`
`,e.jsx(n.p,{children:"Labels describe the purpose of the input field."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"optional-fields",children:"Optional Fields"}),`
`,e.jsx(n.p,{children:'Mark non-required fields with the "optional" flag to display "(Optional)" next to the label.'}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Phone Number"
  placeholder="Enter your phone number"
  optional={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"required-fields",children:"Required Fields"}),`
`,e.jsx(n.p,{children:"Required fields display a red asterisk (*) after the label."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Username"
  placeholder="Enter your username"
  required={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"help-text",children:"Help Text"}),`
`,e.jsxs(n.p,{children:["Add supplementary information below the input with the ",e.jsx(n.code,{children:"helpText"})," prop."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Email"
  placeholder="Enter your email"
  helpText="We will never share your email with anyone else."
/>
`})}),`
`,e.jsx(n.h2,{id:"validation-states",children:"Validation States"}),`
`,e.jsx(n.h3,{id:"error-state",children:"Error State"}),`
`,e.jsx(n.p,{children:"Display error messages when validation fails."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Password"
  placeholder="Enter your password"
  type="password"
  errorMessage="Password must be at least 8 characters long"
/>
`})}),`
`,e.jsx(n.h3,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsx(n.p,{children:"Prevent interaction with disabled inputs."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Disabled Input"
  placeholder="You cannot edit this field"
  disabled={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"read-only-state",children:"Read-Only State"}),`
`,e.jsx(n.p,{children:"Display information that cannot be edited but should remain visible."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Read-only Input"
  value="This is read-only text"
  readOnly={true}
/>
`})}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"TextInput comes in three sizes to fit different UI contexts."}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Micro (20px)"
  placeholder="Micro input"
  size="micro"
/>

<TextInput 
  label="Medium (32px)"
  placeholder="Medium input"
  size="medium"
/>

<TextInput 
  label="Large (40px)"
  placeholder="Large input"
  size="large"
/>
`})}),`
`,e.jsx(n.h2,{id:"special-features",children:"Special Features"}),`
`,e.jsx(n.h3,{id:"prefix-and-suffix",children:"Prefix and Suffix"}),`
`,e.jsx(n.p,{children:"Add icons or text before or after the input text."}),`
`,e.jsx(n.h4,{id:"icon-prefix",children:"Icon Prefix"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconMail } from '@tabler/icons-react';

<TextInput 
  label="Email"
  placeholder="Enter your email address"
  prefix={<IconMail size={18} />}
/>
`})}),`
`,e.jsx(n.h4,{id:"text-prefix",children:"Text Prefix"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Amount"
  placeholder="0.00"
  prefix="$"
/>
`})}),`
`,e.jsx(n.h4,{id:"suffix",children:"Suffix"}),`
`,e.jsx(i,{of:I}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconCurrencyDollar } from '@tabler/icons-react';

<TextInput 
  label="Amount"
  placeholder="Enter amount"
  suffix={<IconCurrencyDollar size={18} />}
/>
`})}),`
`,e.jsx(n.h4,{id:"combined-prefix-and-suffix",children:"Combined Prefix and Suffix"}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconMail } from '@tabler/icons-react';

<TextInput 
  label="Email"
  placeholder="username"
  prefix={<IconMail size={18} />}
  suffix={<span>@example.com</span>}
/>
`})}),`
`,e.jsx(n.h3,{id:"clearable-input",children:"Clearable Input"}),`
`,e.jsx(n.p,{children:"Add a clear button that appears when the input has a value."}),`
`,e.jsx(i,{of:y}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Clearable Input"
  placeholder="Type something to show clear button"
  defaultValue="Clear me"
  clearable={true}
/>
`})}),`
`,e.jsx(n.h3,{id:"password-input",children:"Password Input"}),`
`,e.jsx(n.p,{children:"Password inputs automatically include a visibility toggle."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Password"
  placeholder="Enter your password"
  type="password"
/>
`})}),`
`,e.jsx(n.h2,{id:"layout-options",children:"Layout Options"}),`
`,e.jsx(n.h3,{id:"standard-width",children:"Standard Width"}),`
`,e.jsx(n.p,{children:"By default, TextInput has a width defined by its container."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full Width"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"fullWidth"})," to true to make the input take 100% of its container width."]}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Full Width Input"
  placeholder="This input takes full width"
  fullWidth={true}
/>
`})}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.h3,{id:"search-input",children:"Search Input"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconSearch } from '@tabler/icons-react';

<TextInput 
  label="Search"
  placeholder="Search for something"
  prefix={<IconSearch size={18} />}
/>
`})}),`
`,e.jsx(n.h3,{id:"email-input",children:"Email Input"}),`
`,e.jsx(i,{of:S}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconMail } from '@tabler/icons-react';

<TextInput 
  label="Email"
  placeholder="Enter you@example.com"
  prefix={<IconMail size={18} />}
/>
`})}),`
`,e.jsx(n.h3,{id:"amount-input",children:"Amount Input"}),`
`,e.jsx(i,{of:E}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Amount"
  placeholder="0.00"
  prefix="$"
/>
`})}),`
`,e.jsx(n.h3,{id:"password-input-with-visibility-toggle",children:"Password Input with Visibility Toggle"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<TextInput 
  label="Password"
  placeholder="Enter your password"
  type="password"
/>
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"The TextInput component properly handles Right-to-Left (RTL) languages automatically by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Adjusting prefix and suffix positioning for RTL text flow"}),`
`,e.jsx(n.li,{children:"Applying appropriate line height for Arabic text"}),`
`,e.jsx(n.li,{children:"Correctly aligning text and help text in RTL contexts"}),`
`]}),`
`,e.jsx(i,{of:N}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div dir="rtl">
  <TextInput 
    label="البحث" 
    placeholder="ابحث هنا..." 
    prefix={<IconSearch size={18} />}
    clearable={true}
  />
</div>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each input has a unique ID that connects it to its label, help text, and error message"}),`
`,e.jsxs(n.li,{children:["Required fields use both the ",e.jsx(n.code,{children:"required"})," attribute and visual indication"]}),`
`,e.jsxs(n.li,{children:["Error states use ",e.jsx(n.code,{children:"aria-invalid"})," and connect error messages with ",e.jsx(n.code,{children:"aria-describedby"})]}),`
`,e.jsxs(n.li,{children:["Interactive elements (clear button, password toggle) have appropriate ",e.jsx(n.code,{children:"aria-label"})," values"]}),`
`,e.jsx(n.li,{children:"Focus states are clearly visible for keyboard navigation"}),`
`,e.jsx(n.li,{children:"Screen readers can access help text and error messages through proper ARIA attributes"}),`
`]}),`
`,e.jsx(n.h2,{id:"form-integration",children:"Form Integration"}),`
`,e.jsx(n.p,{children:"TextInput is built on Radix UI's Form components, making it suitable for form libraries and validation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Form } from '@radix-ui/react-form';

<Form onSubmit={handleSubmit}>
  <TextInput
    name="email"
    label="Email Address"
    required={true}
  />
  <TextInput
    name="password"
    label="Password"
    type="password"
    required={true}
  />
  <button type="submit">Sign In</button>
</Form>
`})}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The TextInput uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,e.jsx(n.code,{children:"--t-font-family-primary"}),` | Text font |
| `,e.jsx(n.code,{children:"--t-font-size-*"}),` | Font sizes for different elements |
| `,e.jsx(n.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,e.jsx(n.code,{children:"--t-color-text-*"}),` | Text colors |
| `,e.jsx(n.code,{children:"--t-color-border-*"}),` | Border colors |
| `,e.jsx(n.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,e.jsx(n.code,{children:"--t-color-fill-*"}),` | Focus and error colors |
| `,e.jsx(n.code,{children:"--t-color-icon-*"}),` | Icon colors |
| `,e.jsx(n.code,{children:"--t-border-radius-*"}),` | Border radius |
| `,e.jsx(n.code,{children:"--t-size-*"}),` | Height dimensions |
| `,e.jsx(n.code,{children:"--t-duration-*"}),` | Animation duration |
| `,e.jsx(n.code,{children:"--t-easing-*"}),` | Animation timing |
| `,e.jsx(n.code,{children:"--t-line-height-*"})," | Line height for different languages |"]}),`
`,e.jsx(n.h3,{id:"handling-different-input-types",children:"Handling Different Input Types"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The component detects ",e.jsx(n.code,{children:'type="password"'})," and renders a toggle button"]}),`
`,e.jsx(n.li,{children:"For other input types, standard HTML behavior applies"}),`
`,e.jsx(n.li,{children:"Clearable inputs apply to all input types"}),`
`]}),`
`,e.jsx(n.h3,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),`
`,e.jsx(n.p,{children:"TextInput works in both controlled and uncontrolled modes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Uncontrolled with default value
<TextInput 
  defaultValue="Initial value" 
  name="myInput"
/>

// Controlled with state
const [value, setValue] = useState('');
<TextInput 
  value={value} 
  onChange={(e) => setValue(e.target.value)}
/>
`})}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(n.p,{children:"The TextInput component is compatible with all modern browsers and includes RTL language support."})]})}function G(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{G as default};
