const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tooltip-OfIlEtlG.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Tooltip-DU82b37Z.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./index-N3eucVg6.js","./index-BTe66ZhM.js","./index-DavpLpmr.js","./index-ComwvWTa.js","./clsx-B-dksMZM.js","./Tooltip-DW0tBoRd.css","./Button-CoP_mZBT.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css","./IconSettings-cjygYtAZ.js","./IconHelp-DOQf5BnN.js","./IconAlertTriangle-CKuJFN8q.js"])))=>i.map(i=>d[i]);
import{_ as Bt}from"./iframe-BpBrZJOc.js";import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{T as o,a as It}from"./Tooltip-DU82b37Z.js";import{B as e}from"./Button-CoP_mZBT.js";import{c as Rt}from"./createReactComponent-CKk3lApD.js";import{I as ft}from"./IconSettings-cjygYtAZ.js";import{I as St}from"./IconHelp-DOQf5BnN.js";import{I as Lt}from"./IconAlertTriangle-CKuJFN8q.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]],yt=Rt("outline","info-circle","InfoCircle",wt),Ct={title:"Components/Tooltip",component:o,parameters:{layout:"centered",docs:{page:()=>Bt(()=>import("./Tooltip-OfIlEtlG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url)}},tags:[],argTypes:{content:{control:"text",description:"The content to display inside the tooltip"},side:{control:"select",options:["top","right","bottom","left"],description:"The preferred side of the trigger to render against"},align:{control:"select",options:["start","center","end"],description:"The alignment relative to the trigger"},delayDuration:{control:"number",description:"How long to delay opening the tooltip in ms"},sideOffset:{control:"number",description:"The distance in pixels from the trigger"},disabled:{control:"boolean",description:"Whether the tooltip should be disabled"}},args:{content:"This is a helpful tooltip",align:"center",delayDuration:200,sideOffset:8,disabled:!1},decorators:[n=>t.jsx(It,{children:t.jsx("div",{style:{padding:"100px"},children:t.jsx(n,{})})})]},i={args:{content:"This tooltip automatically positions itself based on available space",children:t.jsx(e,{children:"Hover me (auto-position)"})}},r={args:{content:"Radix automatically chooses the best position for this tooltip based on viewport space",children:t.jsx(e,{children:"Auto positioning"})},parameters:{docs:{description:{story:"When no side is specified, Radix UI automatically positions the tooltip where there is the most available space."}}}},s={args:{content:"Tooltip positioned on top",side:"top",children:t.jsx(e,{children:"Top tooltip"})}},a={args:{content:"Tooltip positioned on right",side:"right",children:t.jsx(e,{children:"Right tooltip"})}},c={args:{content:"Tooltip positioned at bottom",side:"bottom",children:t.jsx(e,{children:"Bottom tooltip"})}},l={args:{content:"Tooltip positioned on left",side:"left",children:t.jsx(e,{children:"Left tooltip"})}},d={args:{content:"Aligned to start",align:"start",children:t.jsx(e,{children:"Start aligned"})}},p={args:{content:"Aligned to center",align:"center",children:t.jsx(e,{children:"Center aligned"})}},m={args:{content:"Aligned to end",align:"end",children:t.jsx(e,{children:"End aligned"})}},g={args:{content:"This button provides more information",children:t.jsx(e,{variant:"secondary",prefixIcon:t.jsx(yt,{size:18}),children:"Information"})}},h={args:{content:"Click to open settings",children:t.jsx(e,{variant:"tertiary",prefixIcon:t.jsx(ft,{size:18}),"aria-label":"Settings"})}},u={args:{content:"This is a much longer tooltip that demonstrates how the tooltip handles longer text content. It should wrap nicely and maintain readability.",children:t.jsx(e,{children:"Long tooltip"})}},T={args:{content:"This tooltip will not show",disabled:!0,children:t.jsx(e,{children:"Disabled tooltip"})}},x={args:{content:"This tooltip has a longer delay",delayDuration:1e3,children:t.jsx(e,{children:"Slow tooltip"})}},f={args:{content:"نص تلميح مفيد باللغة العربية",children:t.jsx(e,{children:"تحويم عربي"})},parameters:{docs:{description:{story:"Tooltip with Arabic content - switch to RTL mode to see proper text alignment and positioning"}}}},y={args:{children:t.jsx("div",{children:"Tooltip content"}),content:"Tooltip text"},render:()=>{const n=(vt,jt,bt)=>vt?bt:jt;return t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center",justifyContent:"center",direction:"ltr"},children:[t.jsx(o,{content:n(!1,"Save your work","احفظ عملك"),side:"top",children:t.jsx(e,{variant:"primary",tone:"success",prefixIcon:t.jsx(yt,{size:18}),children:"Save"})}),t.jsx(o,{content:n(!1,"Get help and support","احصل على المساعدة والدعم"),side:"right",children:t.jsx(e,{variant:"secondary",prefixIcon:t.jsx(St,{size:18}),children:"Help"})}),t.jsx(o,{content:n(!1,"Warning: This action cannot be undone","تحذير: لا يمكن التراجع عن هذا الإجراء"),side:"bottom",children:t.jsx(e,{variant:"primary",tone:"critical",prefixIcon:t.jsx(Lt,{size:18}),children:"Warning"})}),t.jsx(o,{content:n(!1,"Open application settings","فتح إعدادات التطبيق"),side:"left",children:t.jsx(e,{variant:"tertiary",prefixIcon:t.jsx(ft,{size:18}),"aria-label":"Settings"})})]})},parameters:{docs:{description:{story:"Multiple tooltips with different positioning and RTL support. Try switching between LTR and RTL modes."}}}},v={args:{children:t.jsx("div",{children:"Tooltip content"}),content:"Tooltip text"},render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"60px",alignItems:"center",justifyItems:"center",width:"400px",height:"300px"},children:[t.jsx("div",{}),t.jsx(o,{content:"Top tooltip",side:"top",children:t.jsx(e,{size:"micro",children:"Top"})}),t.jsx("div",{}),t.jsx(o,{content:"Left tooltip",side:"left",children:t.jsx(e,{size:"micro",children:"Left"})}),t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"var(--t-color-text-secondary)"},children:"Center"}),t.jsx(o,{content:"Right tooltip",side:"right",children:t.jsx(e,{size:"micro",children:"Right"})}),t.jsx("div",{}),t.jsx(o,{content:"Bottom tooltip",side:"bottom",children:t.jsx(e,{size:"micro",children:"Bottom"})}),t.jsx("div",{})]}),parameters:{docs:{description:{story:"Demonstration of all four positioning options for tooltips"}}}};var j,b,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip automatically positions itself based on available space',
    children: <Button>Hover me (auto-position)</Button>
  }
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var I,R,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    content: 'Radix automatically chooses the best position for this tooltip based on viewport space',
    children: <Button>Auto positioning</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'When no side is specified, Radix UI automatically positions the tooltip where there is the most available space.'
      }
    }
  }
}`,...(S=(R=r.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var L,w,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip positioned on top',
    side: 'top',
    children: <Button>Top tooltip</Button>
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var A,z,D;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip positioned on right',
    side: 'right',
    children: <Button>Right tooltip</Button>
  }
}`,...(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var _,W,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip positioned at bottom',
    side: 'bottom',
    children: <Button>Bottom tooltip</Button>
  }
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var O,k,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip positioned on left',
    side: 'left',
    children: <Button>Left tooltip</Button>
  }
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var P,H,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'Aligned to start',
    align: 'start',
    children: <Button>Start aligned</Button>
  }
}`,...(G=(H=d.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var U,N,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    content: 'Aligned to center',
    align: 'center',
    children: <Button>Center aligned</Button>
  }
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,F,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'Aligned to end',
    align: 'end',
    children: <Button>End aligned</Button>
  }
}`,...(J=(F=m.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    content: 'This button provides more information',
    children: <Button variant="secondary" prefixIcon={<IconInfoCircle size={18} />}>
        Information
      </Button>
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: 'Click to open settings',
    children: <Button variant="tertiary" prefixIcon={<IconSettings size={18} />} aria-label="Settings" />
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,ot;u.parameters={...u.parameters,docs:{...(tt=u.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    content: 'This is a much longer tooltip that demonstrates how the tooltip handles longer text content. It should wrap nicely and maintain readability.',
    children: <Button>Long tooltip</Button>
  }
}`,...(ot=(et=u.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var nt,it,rt;T.parameters={...T.parameters,docs:{...(nt=T.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip will not show',
    disabled: true,
    children: <Button>Disabled tooltip</Button>
  }
}`,...(rt=(it=T.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var st,at,ct;x.parameters={...x.parameters,docs:{...(st=x.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip has a longer delay',
    delayDuration: 1000,
    children: <Button>Slow tooltip</Button>
  }
}`,...(ct=(at=x.parameters)==null?void 0:at.docs)==null?void 0:ct.source}}};var lt,dt,pt;f.parameters={...f.parameters,docs:{...(lt=f.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    content: 'نص تلميح مفيد باللغة العربية',
    children: <Button>تحويم عربي</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with Arabic content - switch to RTL mode to see proper text alignment and positioning'
      }
    }
  }
}`,...(pt=(dt=f.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,gt,ht;y.parameters={...y.parameters,docs:{...(mt=y.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    children: <div>Tooltip content</div>,
    content: 'Tooltip text'
  },
  render: () => {
    // Create content function for RTL-aware text
    const createContent = (isRTL: boolean, baseText: string, rtlText: string) => isRTL ? rtlText : baseText;

    // Get direction from globals (Storybook RTL toolbar)
    const direction = 'ltr'; // Simplified for type safety
    const isRTL = false; // Always false since direction is 'ltr'

    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      direction: direction
    }}>
        <Tooltip content={createContent(isRTL, 'Save your work', 'احفظ عملك')} side="top">
          <Button variant="primary" tone="success" prefixIcon={<IconInfoCircle size={18} />}>
            {isRTL ? 'حفظ' : 'Save'}
          </Button>
        </Tooltip>

        <Tooltip content={createContent(isRTL, 'Get help and support', 'احصل على المساعدة والدعم')} side="right">
          <Button variant="secondary" prefixIcon={<IconHelp size={18} />}>
            {isRTL ? 'مساعدة' : 'Help'}
          </Button>
        </Tooltip>

        <Tooltip content={createContent(isRTL, 'Warning: This action cannot be undone', 'تحذير: لا يمكن التراجع عن هذا الإجراء')} side="bottom">
          <Button variant="primary" tone="critical" prefixIcon={<IconAlertTriangle size={18} />}>
            {isRTL ? 'تحذير' : 'Warning'}
          </Button>
        </Tooltip>

        <Tooltip content={createContent(isRTL, 'Open application settings', 'فتح إعدادات التطبيق')} side="left">
          <Button variant="tertiary" prefixIcon={<IconSettings size={18} />} aria-label={isRTL ? 'الإعدادات' : 'Settings'} />
        </Tooltip>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple tooltips with different positioning and RTL support. Try switching between LTR and RTL modes.'
      }
    }
  }
}`,...(ht=(gt=y.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var ut,Tt,xt;v.parameters={...v.parameters,docs:{...(ut=v.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    children: <div>Tooltip content</div>,
    content: 'Tooltip text'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '60px',
    alignItems: 'center',
    justifyItems: 'center',
    width: '400px',
    height: '300px'
  }}>
      {/* Top row */}
      <div></div>
      <Tooltip content="Top tooltip" side="top">
        <Button size="micro">Top</Button>
      </Tooltip>
      <div></div>

      {/* Middle row */}
      <Tooltip content="Left tooltip" side="left">
        <Button size="micro">Left</Button>
      </Tooltip>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: 'var(--t-color-text-secondary)'
    }}>
        Center
      </div>
      <Tooltip content="Right tooltip" side="right">
        <Button size="micro">Right</Button>
      </Tooltip>

      {/* Bottom row */}
      <div></div>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button size="micro">Bottom</Button>
      </Tooltip>
      <div></div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all four positioning options for tooltips'
      }
    }
  }
}`,...(xt=(Tt=v.parameters)==null?void 0:Tt.docs)==null?void 0:xt.source}}};const At=["Default","AutoPositioning","Top","Right","Bottom","Left","AlignStart","AlignCenter","AlignEnd","WithIcon","IconOnlyTrigger","LongContent","Disabled","CustomDelay","RtlContent","MultipleTooltips","AllPositions"],Gt=Object.freeze(Object.defineProperty({__proto__:null,AlignCenter:p,AlignEnd:m,AlignStart:d,AllPositions:v,AutoPositioning:r,Bottom:c,CustomDelay:x,Default:i,Disabled:T,IconOnlyTrigger:h,Left:l,LongContent:u,MultipleTooltips:y,Right:a,RtlContent:f,Top:s,WithIcon:g,__namedExportsOrder:At,default:Ct},Symbol.toStringTag,{value:"Module"}));export{r as A,c as B,i as D,h as I,l as L,y as M,a as R,Gt as T,g as W,s as a,d as b,p as c,m as d,u as e,v as f,f as g};
