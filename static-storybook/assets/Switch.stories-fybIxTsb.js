import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-BlmOqGMO.js";import{c as ue}from"./index-DW48STyt.js";import{u as ae,c as he,P as de}from"./index-CfQheYXo.js";import{u as fe}from"./index-B2x4RDPN.js";import{u as ge}from"./index-DZ2oWOeb.js";import{u as xe}from"./index-BEsdyKtK.js";import{c as L}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";var R="Switch",[ve,We]=he(R),[Pe,Se]=ve(R),ie=d.forwardRef((s,r)=>{const{__scopeSwitch:t,name:i,checked:n,defaultChecked:h,required:p,disabled:c,value:m="on",onCheckedChange:u,form:o,...f}=s,[x,v]=d.useState(null),I=ae(r,S=>v(S)),k=d.useRef(!1),D=x?o||!!x.closest("form"):!0,[P,pe]=fe({prop:n,defaultProp:h??!1,onChange:u,caller:R});return e.jsxs(Pe,{scope:t,checked:P,disabled:c,children:[e.jsx(de.button,{type:"button",role:"switch","aria-checked":P,"aria-required":p,"data-state":oe(P),"data-disabled":c?"":void 0,disabled:c,value:m,...f,ref:I,onClick:ue(s.onClick,S=>{pe(me=>!me),D&&(k.current=S.isPropagationStopped(),k.current||S.stopPropagation())})}),D&&e.jsx(ce,{control:x,bubbles:!k.current,name:i,value:m,checked:P,required:p,disabled:c,form:o,style:{transform:"translateX(-100%)"}})]})});ie.displayName=R;var ne="SwitchThumb",le=d.forwardRef((s,r)=>{const{__scopeSwitch:t,...i}=s,n=Se(ne,t);return e.jsx(de.span,{"data-state":oe(n.checked),"data-disabled":n.disabled?"":void 0,...i,ref:r})});le.displayName=ne;var be="SwitchBubbleInput",ce=d.forwardRef(({__scopeSwitch:s,control:r,checked:t,bubbles:i=!0,...n},h)=>{const p=d.useRef(null),c=ae(p,h),m=ge(t),u=xe(r);return d.useEffect(()=>{const o=p.current;if(!o)return;const f=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(f,"checked").set;if(m!==t&&v){const I=new Event("click",{bubbles:i});v.call(o,t),o.dispatchEvent(I)}},[m,t,i]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...n,tabIndex:-1,ref:c,style:{...n.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ce.displayName=be;function oe(s){return s?"checked":"unchecked"}var ye=ie,je=le;const we="_root_kkx50_2",Ce="_sizeSm_kkx50_17",Te="_sizeMd_kkx50_22",ze="_disabled_kkx50_32",_e="_pressed_kkx50_39",Re="_thumb_kkx50_61",Ie="_thumbSm_kkx50_86",ke="_thumbMd_kkx50_92",De="_thumbPressed_kkx50_103",l={root:we,sizeSm:Ce,sizeMd:Te,disabled:ze,pressed:_e,thumb:Re,thumbSm:Ie,thumbMd:ke,thumbPressed:De},a=d.forwardRef(({pressed:s,defaultPressed:r,size:t="md",onPressedChange:i,className:n,...h},p)=>{const[c,m]=d.useState(r||!1),u=s!==void 0?s:c,o=f=>{s===void 0&&m(f),i&&i(f)};return document.dir==="rtl"||document.documentElement.dir,e.jsx(ye,{ref:p,checked:u,onCheckedChange:o,className:L(l.root,t==="sm"?l.sizeSm:l.sizeMd,u&&l.pressed,h.disabled&&l.disabled,n),...h,children:e.jsx(je,{className:L(l.thumb,t==="sm"?l.thumbSm:l.thumbMd,u&&l.thumbPressed)})})});a.displayName="Switch";try{a.displayName="Switch",a.__docgenInfo={description:"Switch component for toggling between checked and unchecked states",displayName:"Switch",props:{pressed:{defaultValue:{value:"false"},description:"Whether the switch is pressed (checked) or not",name:"pressed",required:!1,type:{name:"boolean | undefined"}},defaultPressed:{defaultValue:{value:"false"},description:"The default pressed state when initially rendered",name:"defaultPressed",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"md"},description:"Size of the switch (sm = 20px, md = 24px)",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},onPressedChange:{defaultValue:null,description:"Callback when the pressed state changes",name:"onPressedChange",required:!1,type:{name:"((pressed: boolean) => void) | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Fe={title:"Components/Switch",component:a,parameters:{layout:"centered",docs:{description:{component:"A switch component that allows users to toggle between checked and not checked states."}}},argTypes:{pressed:{control:"boolean",description:"The controlled checked state of the switch"},defaultPressed:{control:"boolean",description:"The default checked state when initially rendered"},size:{control:{type:"radio"},options:["sm","md"],description:"The size of the switch"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the switch"},onPressedChange:{action:"changed",description:"Event handler called when the checked state changes"}},args:{size:"md",disabled:!1}},b={args:{defaultPressed:!1},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},y={args:{defaultPressed:!0},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},j={args:{size:"sm",defaultPressed:!1},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},w={args:{disabled:!0,defaultPressed:!1}},C={args:{disabled:!0,defaultPressed:!0}},T=()=>{const[s,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{pressed:s,onPressedChange:r}),e.jsxs("span",{children:["Switch is ",s?"on":"off"]})]})},z=()=>{const[s,r]=d.useState(!1),[t,i]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"LTR:"}),e.jsx(a,{pressed:s,onPressedChange:r}),e.jsxs("span",{children:["Switch is ",s?"on":"off"]})]}),e.jsxs("div",{dir:"rtl",style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"RTL:"}),e.jsx(a,{pressed:t,onPressedChange:i}),e.jsxs("span",{children:["Switch is ",t?"on":"off"]})]})]})},_=()=>e.jsxs("div",{style:{display:"grid",gap:"2rem"},children:[e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Size: Small"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"LTR"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"sm"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"sm",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"sm",disabled:!0,defaultPressed:!0})]})]}),e.jsxs("div",{dir:"rtl",children:[e.jsx("h4",{children:"RTL"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"sm"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"sm",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"sm",disabled:!0,defaultPressed:!0})]})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Size: Medium"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"LTR"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"md"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"md",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"md",disabled:!0,defaultPressed:!0})]})]}),e.jsxs("div",{dir:"rtl",children:[e.jsx("h4",{children:"RTL"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"md"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"md",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"md",disabled:!0,defaultPressed:!0})]})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Interactive Examples"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(g,{size:"sm",showState:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium"}),e.jsx(g,{size:"md",showState:!0})]})]})]})]}),g=({size:s="md",showState:r=!1})=>{const[t,i]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{size:s,pressed:t,onPressedChange:i}),r&&e.jsxs("span",{children:["Switch is ",t?"on":"off"]})]})};var E,M,N;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultPressed: false
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var q,B,V;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    defaultPressed: true
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(V=(B=y.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var A,H,O;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultPressed: false
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(O=(H=j.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,W,F;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultPressed: false
  }
}`,...(F=(W=w.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var X,$,G;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultPressed: true
  }
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [isPressed, setIsPressed] = React.useState(false);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <Switch pressed={isPressed} onPressedChange={setIsPressed} />
      <span>Switch is {isPressed ? 'on' : 'off'}</span>
    </div>;
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [isPressedLTR, setIsPressedLTR] = React.useState(false);
  const [isPressedRTL, setIsPressedRTL] = React.useState(false);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span>LTR:</span>
        <Switch pressed={isPressedLTR} onPressedChange={setIsPressedLTR} />
        <span>Switch is {isPressedLTR ? 'on' : 'off'}</span>
      </div>
      
      <div dir="rtl" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <span>RTL:</span>
        <Switch pressed={isPressedRTL} onPressedChange={setIsPressedRTL} />
        <span>Switch is {isPressedRTL ? 'on' : 'off'}</span>
      </div>
    </div>;
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  gap: '2rem'
}}>
    <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      <h3>Size: Small</h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    }}>
        <div>
          <h4>LTR</h4>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content',
          alignItems: 'center',
          gap: '1rem'
        }}>
            <span>Default:</span>
            <InteractiveSwitch size="sm" />
            <span>Disabled:</span>
            <Switch size="sm" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="sm" disabled defaultPressed={true} />
          </div>
        </div>
        <div dir="rtl">
          <h4>RTL</h4>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content',
          alignItems: 'center',
          gap: '1rem'
        }}>
            <span>Default:</span>
            <InteractiveSwitch size="sm" />
            <span>Disabled:</span>
            <Switch size="sm" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="sm" disabled defaultPressed={true} />
          </div>
        </div>
      </div>
    </div>
    
    <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      <h3>Size: Medium</h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    }}>
        <div>
          <h4>LTR</h4>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content',
          alignItems: 'center',
          gap: '1rem'
        }}>
            <span>Default:</span>
            <InteractiveSwitch size="md" />
            <span>Disabled:</span>
            <Switch size="md" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="md" disabled defaultPressed={true} />
          </div>
        </div>
        <div dir="rtl">
          <h4>RTL</h4>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content',
          alignItems: 'center',
          gap: '1rem'
        }}>
            <span>Default:</span>
            <InteractiveSwitch size="md" />
            <span>Disabled:</span>
            <Switch size="md" disabled />
            <span>Disabled Pressed:</span>
            <Switch size="md" disabled defaultPressed={true} />
          </div>
        </div>
      </div>
    </div>

    <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      <h3>Interactive Examples</h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    }}>
        <div>
          <h4>Small</h4>
          <InteractiveSwitch size="sm" showState />
        </div>
        <div>
          <h4>Medium</h4>
          <InteractiveSwitch size="md" showState />
        </div>
      </div>
    </div>
  </div>`,...(re=(te=_.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Xe=["Default","Pressed","Small","Disabled","DisabledPressed","Interactive","RTLSupport","AllVariants"];export{_ as AllVariants,b as Default,w as Disabled,C as DisabledPressed,T as Interactive,y as Pressed,z as RTLSupport,j as Small,Xe as __namedExportsOrder,Fe as default};
