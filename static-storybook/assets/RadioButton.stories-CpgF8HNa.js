import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-BlmOqGMO.js";import{c as C}from"./index-DW48STyt.js";import{c as Q,P as w,u as E}from"./index-CfQheYXo.js";import{c as Z,u as me,R as fe,I as Re}from"./index-Djcc9127.js";import{u as be}from"./index-B2x4RDPN.js";import{u as he}from"./index-BEsdyKtK.js";import{u as ve}from"./index-DZ2oWOeb.js";import{P as xe}from"./index-Dh73ENUf.js";import{c as N}from"./clsx-B-dksMZM.js";var H="Radio",[ge,ee]=Q(H),[_e,ye]=ge(H),oe=l.forwardRef((o,i)=>{const{__scopeRadio:t,name:u,checked:a=!1,required:r,disabled:s,value:m="on",onCheck:c,form:b,...h}=o,[f,v]=l.useState(null),d=E(i,_=>v(_)),p=l.useRef(!1),g=f?b||!!f.closest("form"):!0;return e.jsxs(_e,{scope:t,checked:a,disabled:s,children:[e.jsx(w.button,{type:"button",role:"radio","aria-checked":a,"data-state":ie(a),"data-disabled":s?"":void 0,disabled:s,value:m,...h,ref:d,onClick:C(o.onClick,_=>{a||c==null||c(),g&&(p.current=_.isPropagationStopped(),p.current||_.stopPropagation())})}),g&&e.jsx(re,{control:f,bubbles:!p.current,name:u,value:m,checked:a,required:r,disabled:s,form:b,style:{transform:"translateX(-100%)"}})]})});oe.displayName=H;var te="RadioIndicator",ae=l.forwardRef((o,i)=>{const{__scopeRadio:t,forceMount:u,...a}=o,r=ye(te,t);return e.jsx(xe,{present:u||r.checked,children:e.jsx(w.span,{"data-state":ie(r.checked),"data-disabled":r.disabled?"":void 0,...a,ref:i})})});ae.displayName=te;var Ie="RadioBubbleInput",re=l.forwardRef(({__scopeRadio:o,control:i,checked:t,bubbles:u=!0,...a},r)=>{const s=l.useRef(null),m=E(s,r),c=ve(t),b=he(i);return l.useEffect(()=>{const h=s.current;if(!h)return;const f=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(f,"checked").set;if(c!==t&&d){const p=new Event("click",{bubbles:u});d.call(h,t),h.dispatchEvent(p)}},[c,t,u]),e.jsx(w.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...a,tabIndex:-1,ref:m,style:{...a.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});re.displayName=Ie;function ie(o){return o?"checked":"unchecked"}var je=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],S="RadioGroup",[Be,Qe]=Q(S,[Z,ee]),ne=Z(),se=ee(),[Te,Ge]=Be(S),de=l.forwardRef((o,i)=>{const{__scopeRadioGroup:t,name:u,defaultValue:a,value:r,required:s=!1,disabled:m=!1,orientation:c,dir:b,loop:h=!0,onValueChange:f,...v}=o,d=ne(t),p=me(b),[g,_]=be({prop:r,defaultProp:a??null,onChange:f,caller:S});return e.jsx(Te,{scope:t,name:u,required:s,disabled:m,value:g,onValueChange:_,children:e.jsx(fe,{asChild:!0,...d,orientation:c,dir:p,loop:h,children:e.jsx(w.div,{role:"radiogroup","aria-required":s,"aria-orientation":c,"data-disabled":m?"":void 0,dir:p,...v,ref:i})})})});de.displayName=S;var le="RadioGroupItem",ue=l.forwardRef((o,i)=>{const{__scopeRadioGroup:t,disabled:u,...a}=o,r=Ge(le,t),s=r.disabled||u,m=ne(t),c=se(t),b=l.useRef(null),h=E(i,b),f=r.value===a.value,v=l.useRef(!1);return l.useEffect(()=>{const d=g=>{je.includes(g.key)&&(v.current=!0)},p=()=>v.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",p)}},[]),e.jsx(Re,{asChild:!0,...m,focusable:!s,active:f,children:e.jsx(oe,{disabled:s,required:r.required,checked:f,...c,...a,name:r.name,ref:h,onCheck:()=>r.onValueChange(a.value),onKeyDown:C(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:C(a.onFocus,()=>{var d;v.current&&((d=b.current)==null||d.click())})})})});ue.displayName=le;var we="RadioGroupIndicator",ce=l.forwardRef((o,i)=>{const{__scopeRadioGroup:t,...u}=o,a=se(t);return e.jsx(ae,{...a,...u,ref:i})});ce.displayName=we;var pe=de,Se=ue,Ce=ce;const Ne="_RadioGroup_16f8x_2",Ee="_RadioButtonContainer_16f8x_9",He="_RadioButtonWrapper_16f8x_18",De="_RadioButtonItem_16f8x_32",Le="_RadioButtonIndicator_16f8x_63",Oe="_Label_16f8x_81",Pe="_srOnly_16f8x_118",Ve="_HelpText_16f8x_131",ke="_disabled_16f8x_178",R={RadioGroup:Ne,RadioButtonContainer:Ee,RadioButtonWrapper:He,RadioButtonItem:De,RadioButtonIndicator:Le,Label:Oe,srOnly:Pe,HelpText:Ve,disabled:ke},x=l.forwardRef(({className:o,...i},t)=>e.jsx(pe,{className:N(R.RadioGroup,o),...i,ref:t}));x.displayName=pe.displayName;const n=l.forwardRef(({className:o,label:i,helpText:t,showHelpText:u=!0,hideLabel:a=!1,...r},s)=>{const c={lineHeight:document.dir==="rtl"||document.documentElement.dir==="rtl"?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)"};return e.jsxs("div",{className:R.RadioButtonContainer,children:[e.jsxs("div",{className:R.RadioButtonWrapper,children:[e.jsx(Se,{ref:s,className:N(R.RadioButtonItem,r.disabled&&R.disabled,o),...r,children:e.jsx(Ce,{className:R.RadioButtonIndicator})}),i&&e.jsx("label",{htmlFor:r.id,className:N(R.Label,r.disabled&&R.disabled,a&&R.srOnly),style:c,children:i})]}),t&&u&&e.jsx("div",{className:R.HelpText,style:c,children:t})]})});n.displayName="RadioButtonItem";try{n.displayName="RadioButtonItem",n.__docgenInfo={description:"",displayName:"RadioButtonItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Ae={title:"Components/RadioButton",component:x,parameters:{layout:"centered"},tags:[],argTypes:{defaultValue:{control:"text",description:"Default selected value"},value:{control:"text",description:"Current selected value"},disabled:{control:"boolean",description:"Whether the radio group is disabled"}}},y={render:o=>e.jsx(x,{defaultValue:o.checked?o.value:void 0,children:e.jsx(n,{...o})}),args:{value:"option1",id:"radio1",label:"Radio option",helpText:"This is help text for the radio button",showHelpText:!0,disabled:!1,hideLabel:!1},parameters:{controls:{expanded:!0}}},I={render:o=>e.jsxs(x,{...o,children:[e.jsx(n,{value:"option1",id:"option1",label:"Option 1"}),e.jsx(n,{value:"option2",id:"option2",label:"Option 2"}),e.jsx(n,{value:"option3",id:"option3",label:"Option 3"})]}),args:{defaultValue:"option1"}},j={render:o=>e.jsxs(x,{...o,children:[e.jsx(n,{value:"notification1",id:"notification1",label:"All new messages",helpText:"Get notified about all messages",showHelpText:!0}),e.jsx(n,{value:"notification2",id:"notification2",label:"Direct messages and mentions",helpText:"Only get notified when you're mentioned",showHelpText:!0}),e.jsx(n,{value:"notification3",id:"notification3",label:"Nothing",helpText:"Don't receive any notifications",showHelpText:!0})]}),args:{defaultValue:"notification1"}},B={render:o=>e.jsxs(x,{defaultValue:"option1",...o,children:[e.jsx(n,{value:"option1",id:"disabled1",label:"Enabled option"}),e.jsx(n,{value:"option2",id:"disabled2",label:"Disabled option",disabled:!0})]})},T={render:o=>e.jsxs(x,{defaultValue:"hidden1",...o,children:[e.jsx(n,{value:"hidden1",id:"hidden1",label:"Visible label",hideLabel:!1}),e.jsx(n,{value:"hidden2",id:"hidden2",label:"Hidden label (still accessible)",hideLabel:!0})]})},G={render:o=>e.jsxs(x,{defaultValue:"rtl1",...o,children:[e.jsx(n,{value:"rtl1",id:"rtl1",label:"عربي"}),e.jsx(n,{value:"rtl2",id:"rtl2",label:"رسالة مساعدة",helpText:"تيكست مساعد",showHelpText:!0})]}),parameters:{globals:{direction:"rtl"}}};var D,L,O;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(L=y.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,V,k;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <RadioButtonItem value="option1" id="option1" label="Option 1" />
      <RadioButtonItem value="option2" id="option2" label="Option 2" />
      <RadioButtonItem value="option3" id="option3" label="Option 3" />
    </RadioGroup>,
  args: {
    defaultValue: 'option1'
  }
}`,...(k=(V=I.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var A,M,W;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <RadioButtonItem value="notification1" id="notification1" label="All new messages" helpText="Get notified about all messages" showHelpText={true} />
      <RadioButtonItem value="notification2" id="notification2" label="Direct messages and mentions" helpText="Only get notified when you're mentioned" showHelpText={true} />
      <RadioButtonItem value="notification3" id="notification3" label="Nothing" helpText="Don't receive any notifications" showHelpText={true} />
    </RadioGroup>,
  args: {
    defaultValue: 'notification1'
  }
}`,...(W=(M=j.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,q,K;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="option1" {...args}>
      <RadioButtonItem value="option1" id="disabled1" label="Enabled option" />
      <RadioButtonItem value="option2" id="disabled2" label="Disabled option" disabled />
    </RadioGroup>
}`,...(K=(q=B.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var U,z,$;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="hidden1" {...args}>
      <RadioButtonItem value="hidden1" id="hidden1" label="Visible label" hideLabel={false} />
      <RadioButtonItem value="hidden2" id="hidden2" label="Hidden label (still accessible)" hideLabel={true} />
    </RadioGroup>
}`,...($=(z=T.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var X,Y,J;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="rtl1" {...args}>
      <RadioButtonItem value="rtl1" id="rtl1" label="عربي" />
      <RadioButtonItem value="rtl2" id="rtl2" label="رسالة مساعدة" helpText="تيكست مساعد" showHelpText={true} />
    </RadioGroup>,
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(J=(Y=G.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Me=["SingleRadioButton","Default","WithHelpText","Disabled","HiddenLabel","RTL"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Default:I,Disabled:B,HiddenLabel:T,RTL:G,SingleRadioButton:y,WithHelpText:j,__namedExportsOrder:Me,default:Ae},Symbol.toStringTag,{value:"Module"}));export{I as D,T as H,Ze as R,y as S,j as W,x as a,n as b,B as c,G as d};
