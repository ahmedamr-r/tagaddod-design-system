import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-DI2gBlDf.js";import{M as s,A as t,C as o}from"./index-BPXrzZIR.js";import{R as d,a as r,b as c,D as u,S as h,W as p,c as x,H as m,d as j}from"./RadioButton.stories-CpgF8HNa.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-Djcc9127.js";import"./index-pvuVTQ3b.js";import"./index-DZCApzUK.js";import"./index-B2x4RDPN.js";import"./index-BEsdyKtK.js";import"./index-DZ2oWOeb.js";import"./index-Dh73ENUf.js";import"./clsx-B-dksMZM.js";function l(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(e.h1,{id:"radiobutton-component",children:"RadioButton Component"}),`
`,n.jsx(e.p,{children:"The RadioButton component allows users to select a single option from a set of mutually exclusive choices. This component is built on Radix UI's RadioGroup primitive and follows Tagaddod's design system specifications."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"RadioButtons are used when users need to select exactly one option from a list of related options. They're organized in groups where only one option can be selected at a time. When a user selects a new option, the previously selected option is automatically deselected."}),`
`,n.jsx(e.p,{children:"RadioButtons should be used when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Only one choice can be selected from a list of options"}),`
`,n.jsx(e.li,{children:"All options need to be visible to help users make an informed decision"}),`
`,n.jsx(e.li,{children:"There are 2-7 options (use a dropdown for more options)"}),`
`]}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { RadioGroup, RadioButtonItem } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"component-structure",children:"Component Structure"}),`
`,n.jsx(e.p,{children:"The RadioButton component consists of two parts:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RadioGroup"}),": Container that manages the state and grouping of radio buttons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RadioButtonItem"}),": Individual radio button with label and optional help text"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.h3,{id:"radiogroup-props",children:"RadioGroup Props"}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(e.h3,{id:"radiobuttonitem-props",children:"RadioButtonItem Props"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.p,{children:"The most common implementation of RadioButton with a default selected value:"}),`
`,n.jsx(o,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { RadioGroup, RadioButtonItem } from '@tagaddod/react';

<RadioGroup defaultValue="option1">
  <RadioButtonItem value="option1" id="option1" label="Option 1" />
  <RadioButtonItem value="option2" id="option2" label="Option 2" />
  <RadioButtonItem value="option3" id="option3" label="Option 3" />
</RadioGroup>
`})}),`
`,n.jsx(e.h2,{id:"single-radio-button",children:"Single Radio Button"}),`
`,n.jsx(e.p,{children:"An individual RadioButtonItem can be used with all available props:"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="option1">
  <RadioButtonItem 
    value="option1" 
    id="radio1" 
    label="Radio option" 
    helpText="This is help text for the radio button"
  />
</RadioGroup>
`})}),`
`,n.jsx(e.h2,{id:"radiobutton-with-help-text",children:"RadioButton with Help Text"}),`
`,n.jsx(e.p,{children:"Add descriptive help text to provide more context for each option:"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="notification1">
  <RadioButtonItem 
    value="notification1" 
    id="notification1" 
    label="All new messages" 
    helpText="Get notified about all messages" 
    showHelpText={true}
  />
  <RadioButtonItem 
    value="notification2" 
    id="notification2" 
    label="Direct messages and mentions" 
    helpText="Only get notified when you're mentioned" 
    showHelpText={true}
  />
  <RadioButtonItem 
    value="notification3" 
    id="notification3" 
    label="Nothing" 
    helpText="Don't receive any notifications" 
    showHelpText={true}
  />
</RadioGroup>
`})}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsx(e.h3,{id:"disabled-state",children:"Disabled State"}),`
`,n.jsx(e.p,{children:"Disable individual radio buttons or the entire group:"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Disable individual radio button
<RadioGroup defaultValue="option1">
  <RadioButtonItem value="option1" id="disabled1" label="Enabled option" />
  <RadioButtonItem value="option2" id="disabled2" label="Disabled option" disabled />
</RadioGroup>

// Disable entire group
<RadioGroup defaultValue="option1" disabled>
  <RadioButtonItem value="option1" id="groupDisabled1" label="Option 1" />
  <RadioButtonItem value="option2" id="groupDisabled2" label="Option 2" />
</RadioGroup>
`})}),`
`,n.jsx(e.h3,{id:"hidden-label",children:"Hidden Label"}),`
`,n.jsx(e.p,{children:"Visually hide the label while keeping it accessible for screen readers:"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="hidden1">
  <RadioButtonItem 
    value="hidden1" 
    id="hidden1" 
    label="Visible label" 
    hideLabel={false}
  />
  <RadioButtonItem 
    value="hidden2" 
    id="hidden2" 
    label="Hidden label (still accessible)" 
    hideLabel={true}
  />
</RadioGroup>
`})}),`
`,n.jsx(e.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),`
`,n.jsx(e.h3,{id:"uncontrolled-mode",children:"Uncontrolled Mode"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"defaultValue"})," to set an initial selection without managing state:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="option1">
  <RadioButtonItem value="option1" id="uncontrolled1" label="Option 1" />
  <RadioButtonItem value="option2" id="uncontrolled2" label="Option 2" />
</RadioGroup>
`})}),`
`,n.jsx(e.h3,{id:"controlled-mode",children:"Controlled Mode"}),`
`,n.jsx(e.p,{children:"Manage the selection with React state:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';

function ControlledRadioGroup() {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
    <div>
      <RadioGroup 
        value={selectedValue} 
        onValueChange={setSelectedValue}
      >
        <RadioButtonItem value="option1" id="controlled1" label="Option 1" />
        <RadioButtonItem value="option2" id="controlled2" label="Option 2" />
        <RadioButtonItem value="option3" id="controlled3" label="Option 3" />
      </RadioGroup>
      
      <div style={{ marginTop: '1rem' }}>
        Selected value: {selectedValue}
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"event-handling",children:"Event Handling"}),`
`,n.jsxs(e.p,{children:["Handle selection changes using the ",n.jsx(e.code,{children:"onValueChange"})," callback:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup 
  defaultValue="option1"
  onValueChange={(value) => {
    console.log(\`Selected value: \${value}\`);
    // Perform actions based on selection
  }}
>
  <RadioButtonItem value="option1" id="event1" label="Option 1" />
  <RadioButtonItem value="option2" id="event2" label="Option 2" />
</RadioGroup>
`})}),`
`,n.jsx(e.h2,{id:"form-integration",children:"Form Integration"}),`
`,n.jsx(e.p,{children:"RadioButton components work well with form libraries and the native HTML form API:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// With React Hook Form
import { useForm } from 'react-hook-form';

function FormExample() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { subscription: 'monthly' }
  });
  
  const subscription = watch('subscription');
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <RadioGroup 
        value={subscription} 
        onValueChange={(value) => {
          // Update the form value
          register('subscription').onChange({ target: { name: 'subscription', value } });
        }}
      >
        <RadioButtonItem value="monthly" id="sub1" label="Monthly" />
        <RadioButtonItem value="yearly" id="sub2" label="Yearly" helpText="Save 16%" />
      </RadioGroup>
      
      <button type="submit">Subscribe</button>
    </form>
  );
}

// With native HTML form
<form onSubmit={(e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get('plan'));
}}>
  <RadioGroup name="plan" defaultValue="basic">
    <RadioButtonItem value="basic" id="plan1" label="Basic Plan" />
    <RadioButtonItem value="pro" id="plan2" label="Pro Plan" />
    <RadioButtonItem value="enterprise" id="plan3" label="Enterprise Plan" />
  </RadioGroup>
  
  <button type="submit">Continue</button>
</form>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The RadioButton component properly handles Right-to-Left (RTL) languages by:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Adjusting layout direction for RTL text flow"}),`
`,n.jsx(e.li,{children:"Placing the radio button on the right side in RTL mode"}),`
`,n.jsx(e.li,{children:"Applying appropriate line height for Arabic text"}),`
`,n.jsx(e.li,{children:"Correctly aligning help text in RTL contexts"}),`
`]}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div dir="rtl">
  <RadioGroup defaultValue="rtl1">
    <RadioButtonItem 
      value="rtl1" 
      id="rtl1" 
      label="عربي" 
    />
    <RadioButtonItem 
      value="rtl2" 
      id="rtl2" 
      label="رسالة مساعدة" 
      helpText="تيكست مساعد"
      showHelpText={true} 
    />
  </RadioGroup>
</div>
`})}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"settings-options",children:"Settings Options"}),`
`,n.jsx(e.p,{children:"Use RadioButtons for mutually exclusive settings:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="privacy2">
  <RadioButtonItem 
    value="privacy1" 
    id="privacy1" 
    label="Public" 
    helpText="Anyone can see this content" 
  />
  <RadioButtonItem 
    value="privacy2" 
    id="privacy2" 
    label="Private" 
    helpText="Only you can see this content" 
  />
  <RadioButtonItem 
    value="privacy3" 
    id="privacy3" 
    label="Shared" 
    helpText="Only you and people you choose can see this content" 
  />
</RadioGroup>
`})}),`
`,n.jsx(e.h3,{id:"checkout-form-options",children:"Checkout Form Options"}),`
`,n.jsx(e.p,{children:"Select shipping or payment methods:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<form onSubmit={handleSubmit}>
  <fieldset>
    <legend>Shipping Method</legend>
    <RadioGroup defaultValue="standard" name="shipping">
      <RadioButtonItem 
        value="standard" 
        id="shipping1" 
        label="Standard Shipping" 
        helpText="3-5 business days (Free)" 
      />
      <RadioButtonItem 
        value="expedited" 
        id="shipping2" 
        label="Expedited Shipping" 
        helpText="2 business days ($9.99)" 
      />
      <RadioButtonItem 
        value="overnight" 
        id="shipping3" 
        label="Overnight Shipping" 
        helpText="Next business day ($19.99)" 
      />
    </RadioGroup>
  </fieldset>
  <button type="submit">Continue</button>
</form>
`})}),`
`,n.jsx(e.h3,{id:"survey-questions",children:"Survey Questions"}),`
`,n.jsx(e.p,{children:"Gather feedback with a single selection from a range of options:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div>
  <h3>How would you rate your experience?</h3>
  <RadioGroup defaultValue="satisfied" name="satisfaction">
    <RadioButtonItem 
      value="very-satisfied" 
      id="rating1" 
      label="Very Satisfied" 
    />
    <RadioButtonItem 
      value="satisfied" 
      id="rating2" 
      label="Satisfied" 
    />
    <RadioButtonItem 
      value="neutral" 
      id="rating3" 
      label="Neutral" 
    />
    <RadioButtonItem 
      value="dissatisfied" 
      id="rating4" 
      label="Dissatisfied" 
    />
    <RadioButtonItem 
      value="very-dissatisfied" 
      id="rating5" 
      label="Very Dissatisfied" 
    />
  </RadioGroup>
</div>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Provide clear labels"}),": Each radio button should have a concise, descriptive label"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use help text for clarification"}),": Add help text when options need more explanation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default selection"}),": When appropriate, set a default value to help users make decisions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Logical ordering"}),": Arrange options in a meaningful order (alphabetical, numerical, etc.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Visual consistency"}),": Maintain consistent spacing between radio button items"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Limit options"}),": If you have more than 7 options, consider using a dropdown instead"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Group related options"}),": Use fieldset and legend for semantic grouping in forms"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The RadioButton component follows accessibility best practices:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses proper ARIA roles and states (",n.jsx(e.code,{children:'role="radiogroup"'}),", ",n.jsx(e.code,{children:"aria-checked"}),")"]}),`
`,n.jsx(e.li,{children:"Each radio button has a unique ID that connects it to its label"}),`
`,n.jsx(e.li,{children:"Visual states have sufficient color contrast (WCAG AA compliance)"}),`
`,n.jsxs(e.li,{children:["Supports keyboard navigation:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Tab"}),": Move focus to the radio group"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Space"}),": Select the focused radio button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Arrow keys"}),": Navigate between radio buttons in a group"]}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Help text is properly associated with radio buttons"}),`
`,n.jsx(e.li,{children:"Hidden labels are visually hidden but still accessible to screen readers"}),`
`,n.jsx(e.li,{children:"Focus states are clearly visible for keyboard navigation"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The RadioButton component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-size-*"}),` | Radio button dimensions |
| `,n.jsx(e.code,{children:"--t-border-width-25"}),` | Border width |
| `,n.jsx(e.code,{children:"--t-color-border-*"}),` | Border colors |
| `,n.jsx(e.code,{children:"--t-color-fill-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,n.jsx(e.code,{children:"--t-color-text-*"}),` | Text colors |
| `,n.jsx(e.code,{children:"--t-font-family-primary"}),` | Font family |
| `,n.jsx(e.code,{children:"--t-font-size-*"}),` | Font sizes |
| `,n.jsx(e.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,n.jsx(e.code,{children:"--t-duration-fast"}),` | Animation duration |
| `,n.jsx(e.code,{children:"--t-easing-in-out"}),` | Animation timing function |
| `,n.jsx(e.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,n.jsx(e.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,n.jsx(e.h3,{id:"customizing-style",children:"Customizing Style"}),`
`,n.jsx(e.p,{children:"You can customize the appearance of RadioButtons using CSS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Target the radio button */
.your-class .RadioButtonItem {
  /* Custom styles */
}

/* Target the label */
.your-class .Label {
  /* Custom styles */
}

/* Target the help text */
.your-class .HelpText {
  /* Custom styles */
}
`})}),`
`,n.jsx(e.p,{children:"Or use the className prop for specific component instances:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<RadioGroup className="custom-radio-group">
  <RadioButtonItem 
    value="option1" 
    className="custom-radio-item"
    label="Customized Radio" 
  />
</RadioGroup>
`})}),`
`,n.jsx(e.h3,{id:"technical-architecture",children:"Technical Architecture"}),`
`,n.jsx(e.p,{children:"The RadioButton component is built on Radix UI's RadioGroup primitive, providing:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper keyboard navigation"}),`
`,n.jsx(e.li,{children:"ARIA attribute management"}),`
`,n.jsx(e.li,{children:"Focus handling"}),`
`,n.jsx(e.li,{children:"Selection state management"}),`
`]}),`
`,n.jsx(e.p,{children:"The Tagaddod implementation extends this with:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Design system token integration"}),`
`,n.jsx(e.li,{children:"Help text support"}),`
`,n.jsx(e.li,{children:"RTL language support"}),`
`,n.jsx(e.li,{children:"Hidden label support"}),`
`,n.jsx(e.li,{children:"Disabled state styling"}),`
`,n.jsx(e.li,{children:"Dynamic line-height adjustment for different languages"}),`
`]}),`
`,n.jsx(e.h3,{id:"performance-considerations",children:"Performance Considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The component uses CSS transitions for smooth state changes"}),`
`,n.jsx(e.li,{children:"DOM structure is minimal to ensure good performance"}),`
`,n.jsx(e.li,{children:"State changes are efficiently handled by React's state management"}),`
`,n.jsx(e.li,{children:"RTL detection happens once per render"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The RadioButton component is compatible with all modern browsers:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome (latest)"}),`
`,n.jsx(e.li,{children:"Firefox (latest)"}),`
`,n.jsx(e.li,{children:"Safari (latest)"}),`
`,n.jsx(e.li,{children:"Edge (latest)"}),`
`,n.jsx(e.li,{children:"Mobile browsers (iOS Safari, Android Chrome)"}),`
`]}),`
`,n.jsx(e.p,{children:"RTL language support works across all supported browsers."}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Checkbox"}),": Use when multiple selections are allowed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Switch"}),": Use for single toggle options (on/off)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select/Dropdown"}),": Use when there are many options or limited space"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SegmentedControl"}),": Use for immediate visual selection between a few options"]}),`
`]})]})}function P(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{P as default};
