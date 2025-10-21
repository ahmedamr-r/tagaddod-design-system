const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Logo-D7PIad34.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Logo-DZFxyD9b.js","./clsx-B-dksMZM.js","./AspectRatio-BLaXxon9.js","./AspectRatio-BnjZEaot.css","./Logo-BpEKDq6D.css"])))=>i.map(i=>d[i]);
import{_ as B}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{L as r}from"./Logo-DZFxyD9b.js";const F={title:"Components/Logo",component:r,parameters:{layout:"centered",docs:{page:()=>B(()=>import("./Logo-D7PIad34.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url)}},tags:[],argTypes:{size:{control:"select",options:["small","medium","large","custom"],description:"Size variant for the logo"},width:{control:"text",description:'Custom width (only used when size is "custom")',if:{arg:"size",eq:"custom"}},height:{control:"text",description:'Custom height (only used when size is "custom")',if:{arg:"size",eq:"custom"}},color:{control:"select",options:["primary","white","inherit"],description:"Color variant for the logo"},clickable:{control:"boolean",description:"Whether the logo should be clickable"},onClick:{action:"clicked",description:"Callback when the logo is clicked (only when clickable is true)"},"aria-label":{control:"text",description:"Accessible label for the logo"}}},o={args:{size:"medium",color:"primary",clickable:!1}},s={args:{size:"small",color:"primary",clickable:!1}},i={args:{size:"large",color:"primary",clickable:!1}},t={args:{size:"custom",width:200,height:50,color:"primary",clickable:!1},parameters:{docs:{description:{story:"Custom size logo with specific width and height dimensions."}}}},a={args:{size:"custom",width:300,color:"primary",clickable:!1},parameters:{docs:{description:{story:"Custom size logo with only width specified. Height is automatically calculated to maintain aspect ratio using AspectRatio component."}}}},l={args:{size:"custom",height:60,color:"primary",clickable:!1},parameters:{docs:{description:{story:"Custom size logo with only height specified. Width is automatically calculated to maintain aspect ratio using AspectRatio component."}}}},c={args:{size:"medium",color:"primary",clickable:!0}},n={args:{size:"medium",color:"white",clickable:!1},parameters:{backgrounds:{default:"dark"}}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"small"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)"},children:"Small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"medium"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)"},children:"Medium"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"large"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)"},children:"Large"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"custom",width:150,height:40}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)"},children:"Custom (150x40)"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"custom",width:250}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)"},children:"Custom (250px width)"})]})]}),parameters:{docs:{description:{story:"Different size variants of the logo component, including custom sizes."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs("div",{style:{padding:"1rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid var(--t-color-border-primary)"},children:[e.jsx(r,{color:"primary"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)",marginTop:"0.5rem"},children:"Primary"})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--t-color-bg-primary)",borderRadius:"0.5rem"},children:[e.jsx(r,{color:"white"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"var(--t-color-text-inverse)",marginTop:"0.5rem"},children:"White"})]}),e.jsxs("div",{style:{padding:"1rem",color:"var(--t-color-brand-primary)",borderRadius:"0.5rem",border:"1px solid var(--t-color-border-primary)"},children:[e.jsx(r,{color:"inherit"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"var(--t-color-text-secondary)",marginTop:"0.5rem"},children:"Inherit"})]})]}),parameters:{docs:{description:{story:"Different color variants of the logo component."}}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    clickable: false
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'primary',
    clickable: false
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'primary',
    clickable: false
  }
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var b,S,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'custom',
    width: 200,
    height: 50,
    color: 'primary',
    clickable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with specific width and height dimensions.'
      }
    }
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,C,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'custom',
    width: 300,
    color: 'primary',
    clickable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with only width specified. Height is automatically calculated to maintain aspect ratio using AspectRatio component.'
      }
    }
  }
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var D,L,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'custom',
    height: 60,
    color: 'primary',
    clickable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom size logo with only height specified. Width is automatically calculated to maintain aspect ratio using AspectRatio component.'
      }
    }
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var _,R,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    clickable: true
  }
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,T,O;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'white',
    clickable: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,E,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <Logo size="small" />
        <span style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)'
      }}>Small</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <Logo size="medium" />
        <span style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)'
      }}>Medium</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <Logo size="large" />
        <span style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)'
      }}>Large</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <Logo size="custom" width={150} height={40} />
        <span style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)'
      }}>Custom (150x40)</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
        <Logo size="custom" width={250} />
        <span style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)'
      }}>Custom (250px width)</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the logo component, including custom sizes.'
      }
    }
  }
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,V,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div style={{
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      border: '1px solid var(--t-color-border-primary)'
    }}>
        <Logo color="primary" />
        <div style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)',
        marginTop: '0.5rem'
      }}>Primary</div>
      </div>
      <div style={{
      padding: '1rem',
      backgroundColor: 'var(--t-color-bg-primary)',
      borderRadius: '0.5rem'
    }}>
        <Logo color="white" />
        <div style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-inverse)',
        marginTop: '0.5rem'
      }}>White</div>
      </div>
      <div style={{
      padding: '1rem',
      color: 'var(--t-color-brand-primary)',
      borderRadius: '0.5rem',
      border: '1px solid var(--t-color-border-primary)'
    }}>
        <Logo color="inherit" />
        <div style={{
        fontSize: '0.75rem',
        color: 'var(--t-color-text-secondary)',
        marginTop: '0.5rem'
      }}>Inherit</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants of the logo component.'
      }
    }
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const G=["Default","Small","Large","CustomSize","CustomWidthOnly","CustomHeightOnly","Clickable","White","AllSizes","ColorVariants"],Q=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:d,Clickable:c,ColorVariants:m,CustomHeightOnly:l,CustomSize:t,CustomWidthOnly:a,Default:o,Large:i,Small:s,White:n,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{d as A,t as C,o as D,Q as L,a,l as b,m as c,c as d};
