const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Number-BwMlWIUb.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Number-CiXgcMqy.js","./index-QFq3N9B_.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-N3eucVg6.js","./clsx-B-dksMZM.js","./IconChevronUp-BrVbvfGP.js","./createReactComponent-CKk3lApD.js","./IconChevronDown-D1vfiZl2.js","./IconExclamationCircle-BYkI5IG6.js","./IconX-DigCVOFI.js","./Number-D9tIPF5j.css","./IconCurrencyDollar-E96oMeB2.js"])))=>i.map(i=>d[i]);
import{_ as ze}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as j}from"./index-D4H_InIO.js";import{N as r}from"./Number-CiXgcMqy.js";import{I as De}from"./IconCurrencyDollar-E96oMeB2.js";import{c as k}from"./createReactComponent-CKk3lApD.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z",key:"svg-1"}],["path",{d:"M8 14l0 .01",key:"svg-2"}],["path",{d:"M12 14l0 .01",key:"svg-3"}],["path",{d:"M16 14l0 .01",key:"svg-4"}],["path",{d:"M8 17l0 .01",key:"svg-5"}],["path",{d:"M12 17l0 .01",key:"svg-6"}],["path",{d:"M16 17l0 .01",key:"svg-7"}]],Oe=k("outline","calculator","Calculator",qe);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M6 18l12 -12",key:"svg-2"}]],_e=k("outline","percentage","Percentage",Ne);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1",key:"svg-0"}],["path",{d:"M4 8l2 0",key:"svg-1"}],["path",{d:"M4 12l3 0",key:"svg-2"}],["path",{d:"M4 16l2 0",key:"svg-3"}],["path",{d:"M8 4l0 2",key:"svg-4"}],["path",{d:"M12 4l0 3",key:"svg-5"}],["path",{d:"M16 4l0 2",key:"svg-6"}]],we=k("outline","ruler","Ruler",Fe),Le={title:"Components/Number",component:r,parameters:{layout:"padded",docs:{page:()=>ze(()=>import("./Number-BwMlWIUb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url),description:{component:"A number input component with increment/decrement controls, formatting options, and full accessibility support."}}},tags:[],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"],description:"Size of the number input",defaultValue:{summary:"medium"}},label:{control:"text",description:"Label text for the input"},helpText:{control:"text",description:"Help text displayed below the input"},errorMessage:{control:"text",description:"Error message displayed below the input"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"},readOnly:{control:"boolean",description:"Whether the input is read-only"},required:{control:"boolean",description:"Whether the input is required"},clearable:{control:"boolean",description:"Whether to show a clear button"},hideSteppers:{control:"boolean",description:"Whether to hide the increment/decrement buttons"},fullWidth:{control:"boolean",description:"Whether the input takes full width"},optional:{control:"boolean",description:"Whether to show optional indicator"},min:{control:"number",description:"Minimum allowed value"},max:{control:"number",description:"Maximum allowed value"},step:{control:"number",description:"Step increment value",defaultValue:{summary:1}}}},l={args:{label:"Quantity",placeholder:"Enter a number"}},s={args:{label:"Amount",value:42,helpText:"Enter the desired amount"}},o={render:function(){const[a,t]=j.useState(10);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Controlled Number",value:a,onChange:t,min:0,max:100,step:5}),e.jsxs("p",{children:["Current value: ",a??"null"]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:()=>t(0),children:"Set to 0"}),e.jsx("button",{onClick:()=>t(50),children:"Set to 50"}),e.jsx("button",{onClick:()=>t(100),children:"Set to 100"}),e.jsx("button",{onClick:()=>t(null),children:"Clear"})]})]})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{size:"xlarge",label:"XLarge",defaultValue:10}),e.jsx(r,{size:"large",label:"Large",defaultValue:20}),e.jsx(r,{size:"medium",label:"Medium",defaultValue:30}),e.jsx(r,{size:"small",label:"Small",defaultValue:40}),e.jsx(r,{size:"xsmall",label:"XSmall",defaultValue:50})]})},u={args:{label:"Age",min:0,max:120,defaultValue:25,helpText:"Enter your age (0-120)"}},d={args:{label:"Temperature",min:-10,max:50,step:.5,defaultValue:22.5,helpText:"Adjust in 0.5 degree increments"}},c={args:{label:"Price",defaultValue:99.99,min:0,step:.01,formatOptions:{style:"currency",currency:"USD"},prefix:e.jsx(De,{size:16}),helpText:"Enter the product price"}},p={args:{label:"Discount",defaultValue:.15,min:0,max:1,step:.01,formatOptions:{style:"percent"},prefix:e.jsx(_e,{size:16}),helpText:"Enter discount percentage (0-100%)"}},m={args:{label:"Weight",defaultValue:75.5,min:0,step:.1,formatOptions:{minimumFractionDigits:1,maximumFractionDigits:2},suffix:"kg",helpText:"Enter weight in kilograms"}},h={args:{label:"Length",defaultValue:100,prefix:e.jsx(we,{size:16}),suffix:"cm",helpText:"Enter length in centimeters"}},x={args:{label:"Optional Value",defaultValue:50,clearable:!0,optional:!0,helpText:"This field can be cleared"}},g={args:{label:"Manual Input Only",hideSteppers:!0,defaultValue:100,helpText:"Stepper buttons are hidden"}},b={args:{label:"Disabled Field",value:42,disabled:!0,helpText:"This field is disabled"}},f={args:{label:"Read-Only Field",value:100,readOnly:!0,helpText:"This field is read-only"}},y={args:{label:"Quantity",defaultValue:150,min:0,max:100,errorMessage:"Value must be between 0 and 100"}},v={args:{label:"Required Field",required:!0,helpText:"This field is required"}},S={args:{label:"Full Width Number",fullWidth:!0,defaultValue:50,helpText:"This input takes the full width of its container"}},T={render:function(a){var C;const t=((C=a.globals)==null?void 0:C.direction)||"ltr",n=t==="rtl";return e.jsx("div",{dir:t,style:{padding:"20px"},children:e.jsx(r,{label:n?"الكمية":"Quantity",defaultValue:10,min:0,max:100,helpText:n?"أدخل الكمية المطلوبة":"Enter the required quantity",prefix:e.jsx(Oe,{size:16})})})}},V={render:function(){const[a,t]=j.useState(1),[n]=j.useState(29.99),C=a?a*n:0;return e.jsxs("div",{style:{padding:"24px",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-300)",maxWidth:"400px"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Order Calculator"}),e.jsx(r,{label:"Quantity",value:a,onChange:t,min:1,max:99,step:1,required:!0,helpText:"Select quantity (1-99)",style:{marginBottom:"16px"}}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:"Unit Price:"}),e.jsxs("span",{children:["$",n.toFixed(2)]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold"},children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{children:["$",C.toFixed(2)]})]})]})]})}};var M,R,E;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    placeholder: 'Enter a number'
  }
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var z,D,q;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    value: 42,
    helpText: 'Enter the desired amount'
  }
}`,...(q=(D=s.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var O,N,_;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = useState<number | null>(10);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Number label="Controlled Number" value={value} onChange={setValue} min={0} max={100} step={5} />
        <p>Current value: {value ?? 'null'}</p>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <button onClick={() => setValue(0)}>Set to 0</button>
          <button onClick={() => setValue(50)}>Set to 50</button>
          <button onClick={() => setValue(100)}>Set to 100</button>
          <button onClick={() => setValue(null)}>Clear</button>
        </div>
      </div>;
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var F,w,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Number size="xlarge" label="XLarge" defaultValue={10} />
      <Number size="large" label="Large" defaultValue={20} />
      <Number size="medium" label="Medium" defaultValue={30} />
      <Number size="small" label="Small" defaultValue={40} />
      <Number size="xsmall" label="XSmall" defaultValue={50} />
    </div>
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var P,I,Q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
    helpText: 'Enter your age (0-120)'
  }
}`,...(Q=(I=u.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var A,B,$;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    min: -10,
    max: 50,
    step: 0.5,
    defaultValue: 22.5,
    helpText: 'Adjust in 0.5 degree increments'
  }
}`,...($=(B=d.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var U,X,H;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    defaultValue: 99.99,
    min: 0,
    step: 0.01,
    formatOptions: {
      style: 'currency',
      currency: 'USD'
    },
    prefix: <IconCurrencyDollar size={16} />,
    helpText: 'Enter the product price'
  }
}`,...(H=(X=c.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Discount',
    defaultValue: 0.15,
    min: 0,
    max: 1,
    step: 0.01,
    formatOptions: {
      style: 'percent'
    },
    prefix: <IconPercentage size={16} />,
    helpText: 'Enter discount percentage (0-100%)'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Weight',
    defaultValue: 75.5,
    min: 0,
    step: 0.1,
    formatOptions: {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    },
    suffix: 'kg',
    helpText: 'Enter weight in kilograms'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Length',
    defaultValue: 100,
    prefix: <IconRuler size={16} />,
    suffix: 'cm',
    helpText: 'Enter length in centimeters'
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,le,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Optional Value',
    defaultValue: 50,
    clearable: true,
    optional: true,
    helpText: 'This field can be cleared'
  }
}`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,ie,ue;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Manual Input Only',
    hideSteppers: true,
    defaultValue: 100,
    helpText: 'Stepper buttons are hidden'
  }
}`,...(ue=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,ce,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    value: 42,
    disabled: true,
    helpText: 'This field is disabled'
  }
}`,...(pe=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,xe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Read-Only Field',
    value: 100,
    readOnly: true,
    helpText: 'This field is read-only'
  }
}`,...(xe=(he=f.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,be,fe;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    defaultValue: 150,
    min: 0,
    max: 100,
    errorMessage: 'Value must be between 0 and 100'
  }
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ye,ve,Se;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    helpText: 'This field is required'
  }
}`,...(Se=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var Te,Ve,Ce;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Number',
    fullWidth: true,
    defaultValue: 50,
    helpText: 'This input takes the full width of its container'
  }
}`,...(Ce=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var je,ke,We;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: function RTLStory(args) {
    const direction = args.globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';
    return <div dir={direction} style={{
      padding: '20px'
    }}>
        <Number label={isRTL ? 'الكمية' : 'Quantity'} defaultValue={10} min={0} max={100} helpText={isRTL ? 'أدخل الكمية المطلوبة' : 'Enter the required quantity'} prefix={<IconCalculator size={16} />} />
      </div>;
  }
}`,...(We=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};var Me,Re,Ee;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: function ComplexStory() {
    const [quantity, setQuantity] = useState<number | null>(1);
    const [price] = useState(29.99);
    const total = quantity ? quantity * price : 0;
    return <div style={{
      padding: '24px',
      border: '1px solid var(--t-color-border-secondary)',
      borderRadius: 'var(--t-border-radius-300)',
      maxWidth: '400px'
    }}>
        <h3 style={{
        marginBottom: '16px'
      }}>Order Calculator</h3>

        <Number label="Quantity" value={quantity} onChange={setQuantity} min={1} max={99} step={1} required helpText="Select quantity (1-99)" style={{
        marginBottom: '16px'
      }} />

        <div style={{
        padding: '16px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        borderRadius: 'var(--t-border-radius-200)'
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
            <span>Unit Price:</span>
            <span>\${price.toFixed(2)}</span>
          </div>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold'
        }}>
            <span>Total:</span>
            <span>\${total.toFixed(2)}</span>
          </div>
        </div>
      </div>;
  }
}`,...(Ee=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};const Pe=["Default","WithValue","Controlled","Sizes","WithMinMax","WithStep","Currency","Percentage","WithDecimals","WithPrefixSuffix","Clearable","NoSteppers","Disabled","ReadOnly","WithError","Required","FullWidth","RTLSupport","ComplexExample"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Clearable:x,ComplexExample:V,Controlled:o,Currency:c,Default:l,Disabled:b,FullWidth:S,NoSteppers:g,Percentage:p,RTLSupport:T,ReadOnly:f,Required:v,Sizes:i,WithDecimals:m,WithError:y,WithMinMax:u,WithPrefixSuffix:h,WithStep:d,WithValue:s,__namedExportsOrder:Pe,default:Le},Symbol.toStringTag,{value:"Module"}));export{x as C,l as D,S as F,Xe as N,p as P,f as R,i as S,s as W,u as a,d as b,g as c,c as d,m as e,h as f,b as g,y as h,v as i,o as j,T as k,V as l};
