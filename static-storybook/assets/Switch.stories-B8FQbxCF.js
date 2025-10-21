const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Switch-DbaClPjT.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-DavpLpmr.js","./index-DXU_LAI1.js","./index-D5cGTUkh.js","./clsx-B-dksMZM.js"])))=>i.map(i=>d[i]);
import{_ as ue}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as d}from"./index-D4H_InIO.js";import{c as he}from"./index-DW48STyt.js";import{u as ae,c as fe,P as de}from"./index-D7-T4lOe.js";import{u as ge}from"./index-DavpLpmr.js";import{u as xe}from"./index-DXU_LAI1.js";import{u as ve}from"./index-D5cGTUkh.js";import{c as k}from"./clsx-B-dksMZM.js";var R="Switch",[Pe]=fe(R),[Se,be]=Pe(R),ie=d.forwardRef((s,r)=>{const{__scopeSwitch:t,name:i,checked:n,defaultChecked:u,required:p,disabled:l,value:m="on",onCheckedChange:h,form:c,...f}=s,[T,_]=d.useState(null),I=ae(r,z=>_(z)),D=d.useRef(!1),L=T?c||!!T.closest("form"):!0,[C,pe]=ge({prop:n,defaultProp:u??!1,onChange:h,caller:R});return e.jsxs(Se,{scope:t,checked:C,disabled:l,children:[e.jsx(de.button,{type:"button",role:"switch","aria-checked":C,"aria-required":p,"data-state":oe(C),"data-disabled":l?"":void 0,disabled:l,value:m,...f,ref:I,onClick:he(s.onClick,z=>{pe(me=>!me),L&&(D.current=z.isPropagationStopped(),D.current||z.stopPropagation())})}),L&&e.jsx(ce,{control:T,bubbles:!D.current,name:i,value:m,checked:C,required:p,disabled:l,form:c,style:{transform:"translateX(-100%)"}})]})});ie.displayName=R;var ne="SwitchThumb",le=d.forwardRef((s,r)=>{const{__scopeSwitch:t,...i}=s,n=be(ne,t);return e.jsx(de.span,{"data-state":oe(n.checked),"data-disabled":n.disabled?"":void 0,...i,ref:r})});le.displayName=ne;var ye="SwitchBubbleInput",ce=d.forwardRef(({__scopeSwitch:s,control:r,checked:t,bubbles:i=!0,...n},u)=>{const p=d.useRef(null),l=ae(p,u),m=xe(t),h=ve(r);return d.useEffect(()=>{const c=p.current;if(!c)return;const f=window.HTMLInputElement.prototype,_=Object.getOwnPropertyDescriptor(f,"checked").set;if(m!==t&&_){const I=new Event("click",{bubbles:i});_.call(c,t),c.dispatchEvent(I)}},[m,t,i]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...n,tabIndex:-1,ref:l,style:{...n.style,...h,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ce.displayName=ye;function oe(s){return s?"checked":"unchecked"}var je=ie,we=le;const Te="_root_q3n31_2",_e="_sizeSm_q3n31_17",Ce="_sizeMd_q3n31_22",ze="_disabled_q3n31_32",Re="_pressed_q3n31_39",Ie="_thumb_q3n31_60",De="_thumbSm_q3n31_104",Le="_thumbMd_q3n31_110",o={root:Te,sizeSm:_e,sizeMd:Ce,disabled:ze,pressed:Re,thumb:Ie,thumbSm:De,thumbMd:Le},a=d.forwardRef(({pressed:s,defaultPressed:r,size:t="md",onPressedChange:i,className:n,...u},p)=>{const[l,m]=d.useState(r||!1),h=s!==void 0?s:l,c=f=>{s===void 0&&m(f),i&&i(f)};return e.jsx(je,{ref:p,checked:h,onCheckedChange:c,className:k(o.root,t==="sm"?o.sizeSm:o.sizeMd,h&&o.pressed,u.disabled&&o.disabled,n),...u,children:e.jsx(we,{className:k(o.thumb,t==="sm"?o.thumbSm:o.thumbMd)})})});a.displayName="Switch";try{a.displayName="Switch",a.__docgenInfo={description:"Switch component for toggling between checked and unchecked states",displayName:"Switch",props:{pressed:{defaultValue:{value:"false"},description:"Whether the switch is pressed (checked) or not",name:"pressed",required:!1,type:{name:"boolean | undefined"}},defaultPressed:{defaultValue:{value:"false"},description:"The default pressed state when initially rendered",name:"defaultPressed",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"md"},description:"Size of the switch (sm = 20px, md = 24px)",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},onPressedChange:{defaultValue:null,description:"Callback when the pressed state changes",name:"onPressedChange",required:!1,type:{name:"((pressed: boolean) => void) | undefined"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const ke={title:"Components/Switch",component:a,parameters:{layout:"centered",docs:{page:()=>ue(()=>import("./Switch-DbaClPjT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)}},argTypes:{pressed:{control:"boolean",description:"The controlled checked state of the switch"},defaultPressed:{control:"boolean",description:"The default checked state when initially rendered"},size:{control:{type:"radio"},options:["sm","md"],description:"The size of the switch"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the switch"},onPressedChange:{action:"changed",description:"Event handler called when the checked state changes"}},args:{size:"md",disabled:!1}},x={args:{defaultPressed:!1},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},v={args:{defaultPressed:!0},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},P={args:{size:"sm",defaultPressed:!1},render:s=>{const[r,t]=d.useState(s.defaultPressed||!1);return e.jsx(a,{...s,pressed:r,onPressedChange:t})}},S={args:{disabled:!0,defaultPressed:!1}},b={args:{disabled:!0,defaultPressed:!0}},y=()=>{const[s,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{pressed:s,onPressedChange:r}),e.jsxs("span",{children:["Switch is ",s?"on":"off"]})]})},j=()=>{const[s,r]=d.useState(!1),[t,i]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"LTR:"}),e.jsx(a,{pressed:s,onPressedChange:r}),e.jsxs("span",{children:["Switch is ",s?"on":"off"]})]}),e.jsxs("div",{dir:"rtl",style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"RTL:"}),e.jsx(a,{pressed:t,onPressedChange:i}),e.jsxs("span",{children:["Switch is ",t?"on":"off"]})]})]})},w=()=>e.jsxs("div",{style:{display:"grid",gap:"2rem"},children:[e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Size: Small"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"LTR"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"sm"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"sm",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"sm",disabled:!0,defaultPressed:!0})]})]}),e.jsxs("div",{dir:"rtl",children:[e.jsx("h4",{children:"RTL"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"sm"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"sm",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"sm",disabled:!0,defaultPressed:!0})]})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Size: Medium"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"LTR"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"md"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"md",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"md",disabled:!0,defaultPressed:!0})]})]}),e.jsxs("div",{dir:"rtl",children:[e.jsx("h4",{children:"RTL"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"max-content max-content",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Default:"}),e.jsx(g,{size:"md"}),e.jsx("span",{children:"Disabled:"}),e.jsx(a,{size:"md",disabled:!0}),e.jsx("span",{children:"Disabled Pressed:"}),e.jsx(a,{size:"md",disabled:!0,defaultPressed:!0})]})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("h3",{children:"Interactive Examples"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(g,{size:"sm",showState:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium"}),e.jsx(g,{size:"md",showState:!0})]})]})]})]}),g=({size:s="md",showState:r=!1})=>{const[t,i]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{size:s,pressed:t,onPressedChange:i}),r&&e.jsxs("span",{children:["Switch is ",t?"on":"off"]})]})};var E,M,q;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultPressed: false
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var N,V,A;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultPressed: true
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(A=(V=v.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var B,O,H;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultPressed: false
  },
  render: args => {
    const [pressed, setPressed] = React.useState(args.defaultPressed || false);
    return <Switch {...args} pressed={pressed} onPressedChange={setPressed} />;
  }
}`,...(H=(O=P.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var U,W,F;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultPressed: false
  }
}`,...(F=(W=S.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var X,$,G;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultPressed: true
  }
}`,...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [isPressed, setIsPressed] = React.useState(false);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <Switch pressed={isPressed} onPressedChange={setIsPressed} />
      <span>Switch is {isPressed ? 'on' : 'off'}</span>
    </div>;
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ee=["Default","Pressed","Small","Disabled","DisabledPressed","Interactive","RTLSupport","AllVariants"],We=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:w,Default:x,Disabled:S,DisabledPressed:b,Interactive:y,Pressed:v,RTLSupport:j,Small:P,__namedExportsOrder:Ee,default:ke},Symbol.toStringTag,{value:"Module"}));export{w as A,x as D,y as I,v as P,j as R,We as S,a,S as b,b as c,P as d};
