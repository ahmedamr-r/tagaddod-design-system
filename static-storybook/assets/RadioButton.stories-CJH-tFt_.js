import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as o,a as t}from"./RadioButton-Cisp_yHd.js";const I={title:"Components/RadioButton",component:o,parameters:{layout:"centered"},tags:[],argTypes:{defaultValue:{control:"text",description:"Default selected value"},value:{control:"text",description:"Current selected value"},disabled:{control:"boolean",description:"Whether the radio group is disabled"}}},i={render:a=>e.jsx(o,{defaultValue:a.checked?a.value:void 0,children:e.jsx(t,{...a})}),args:{value:"option1",id:"radio1",label:"Radio option",helpText:"This is help text for the radio button",showHelpText:!0,disabled:!1,hideLabel:!1},parameters:{controls:{expanded:!0}}},l={render:a=>e.jsxs(o,{...a,children:[e.jsx(t,{value:"option1",id:"option1",label:"Option 1"}),e.jsx(t,{value:"option2",id:"option2",label:"Option 2"}),e.jsx(t,{value:"option3",id:"option3",label:"Option 3"})]}),args:{defaultValue:"option1"}},n={render:a=>e.jsxs(o,{...a,children:[e.jsx(t,{value:"notification1",id:"notification1",label:"All new messages",helpText:"Get notified about all messages",showHelpText:!0}),e.jsx(t,{value:"notification2",id:"notification2",label:"Direct messages and mentions",helpText:"Only get notified when you're mentioned",showHelpText:!0}),e.jsx(t,{value:"notification3",id:"notification3",label:"Nothing",helpText:"Don't receive any notifications",showHelpText:!0})]}),args:{defaultValue:"notification1"}},r={render:a=>e.jsxs(o,{defaultValue:"option1",...a,children:[e.jsx(t,{value:"option1",id:"disabled1",label:"Enabled option"}),e.jsx(t,{value:"option2",id:"disabled2",label:"Disabled option",disabled:!0})]})},d={render:a=>e.jsxs(o,{defaultValue:"hidden1",...a,children:[e.jsx(t,{value:"hidden1",id:"hidden1",label:"Visible label",hideLabel:!1}),e.jsx(t,{value:"hidden2",id:"hidden2",label:"Hidden label (still accessible)",hideLabel:!0})]})},s={render:a=>e.jsxs(o,{defaultValue:"rtl1",...a,children:[e.jsx(t,{value:"rtl1",id:"rtl1",label:"عربي"}),e.jsx(t,{value:"rtl2",id:"rtl2",label:"رسالة مساعدة",helpText:"تيكست مساعد",showHelpText:!0})]}),parameters:{globals:{direction:"rtl"}}};var u,p,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue={args.checked ? args.value : undefined}>
      <RadioButtonItem {...args} />
    </RadioGroup>,
  args: {
    value: 'option1',
    id: 'radio1',
    label: 'Radio option',
    helpText: 'This is help text for the radio button',
    showHelpText: true,
    disabled: false,
    hideLabel: false
  },
  parameters: {
    controls: {
      expanded: true
    }
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,m,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <RadioButtonItem value="option1" id="option1" label="Option 1" />
      <RadioButtonItem value="option2" id="option2" label="Option 2" />
      <RadioButtonItem value="option3" id="option3" label="Option 3" />
    </RadioGroup>,
  args: {
    defaultValue: 'option1'
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,f,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <RadioButtonItem value="notification1" id="notification1" label="All new messages" helpText="Get notified about all messages" showHelpText={true} />
      <RadioButtonItem value="notification2" id="notification2" label="Direct messages and mentions" helpText="Only get notified when you're mentioned" showHelpText={true} />
      <RadioButtonItem value="notification3" id="notification3" label="Nothing" helpText="Don't receive any notifications" showHelpText={true} />
    </RadioGroup>,
  args: {
    defaultValue: 'notification1'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var R,v,T;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="option1" {...args}>
      <RadioButtonItem value="option1" id="disabled1" label="Enabled option" />
      <RadioButtonItem value="option2" id="disabled2" label="Disabled option" disabled />
    </RadioGroup>
}`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,B,H;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="hidden1" {...args}>
      <RadioButtonItem value="hidden1" id="hidden1" label="Visible label" hideLabel={false} />
      <RadioButtonItem value="hidden2" id="hidden2" label="Hidden label (still accessible)" hideLabel={true} />
    </RadioGroup>
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var G,V,w;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="rtl1" {...args}>
      <RadioButtonItem value="rtl1" id="rtl1" label="عربي" />
      <RadioButtonItem value="rtl2" id="rtl2" label="رسالة مساعدة" helpText="تيكست مساعد" showHelpText={true} />
    </RadioGroup>,
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(w=(V=s.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const D=["SingleRadioButton","Default","WithHelpText","Disabled","HiddenLabel","RTL"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:r,HiddenLabel:d,RTL:s,SingleRadioButton:i,WithHelpText:n,__namedExportsOrder:D,default:I},Symbol.toStringTag,{value:"Module"}));export{l as D,d as H,y as R,i as S,n as W,r as a,s as b};
