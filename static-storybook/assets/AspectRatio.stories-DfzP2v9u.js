const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AspectRatio-BrV6l_kJ.js","./jsx-runtime-Cf8x2fCZ.js","./index-yBjzXJbu.js","./index-DI2gBlDf.js","./index-BlmOqGMO.js","./index-BPXrzZIR.js","./iframe-BpZEF_5K.js","./index-DybOl1hA.js","./index-fNjTmf9T.js","./index-CXQShRbs.js","./index-DrFu-skq.js","./clsx-B-dksMZM.js"])))=>i.map(i=>d[i]);
import{_ as D}from"./iframe-BpZEF_5K.js";import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BlmOqGMO.js";import{c as F}from"./clsx-B-dksMZM.js";const O="_container_sfobc_3",V="_fallback_sfobc_19",u={container:O,fallback:V},q=()=>typeof window>"u"?!0:CSS.supports("aspect-ratio","1"),p=m.forwardRef(({ratio:e=1,className:z="",children:E,style:f={},...N},l)=>{const r=m.useRef(null),h=q(),P=h?{aspectRatio:`${e}`,...f}:{...f};m.useEffect(()=>{if(h||!r.current)return;const a=`${1/e*100}%`;r.current.style.setProperty("padding-top",a);const o=r.current.firstElementChild;return o&&(o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%"),()=>{r.current&&r.current.style.removeProperty("padding-top")}},[e,h]);const T=a=>{r.current=a,l&&(typeof l=="function"?l(a):l.current=a)};return t.jsx("div",{ref:T,className:F(u.container,!h&&u.fallback,z),style:P,...N,children:E})});p.displayName="AspectRatio";try{p.displayName="AspectRatio",p.__docgenInfo={description:"",displayName:"AspectRatio",props:{ratio:{defaultValue:{value:"1"},description:"The ratio of the container's width to height (e.g., 16/9, 4/3, 1, etc.)",name:"ratio",required:!1,type:{name:"number | undefined"}},className:{defaultValue:{value:""},description:"Custom class name for the container",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Content to be displayed within the aspect ratio container",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const B={title:"Components/AspectRatio",component:p,parameters:{layout:"centered",docs:{page:()=>D(()=>import("./AspectRatio-BrV6l_kJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)}},tags:[],argTypes:{ratio:{control:{type:"number",step:.1},description:"The ratio of width to height"},className:{control:"text"},children:{control:"text"}}},s={args:{ratio:1,children:t.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--t-color-fill-brand)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--t-color-text-on-fill)",fontWeight:"var(--t-font-weight-semibold)"},children:"1:1"}),style:{width:"300px",boxShadow:"var(--t-shadow-200)"}}},i={args:{ratio:16/9,children:t.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--t-color-fill-brand-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--t-color-text-link)",fontWeight:"var(--t-font-weight-semibold)"},children:"16:9"}),style:{width:"300px",boxShadow:"var(--t-shadow-200)"}}},n={args:{ratio:4/3,children:t.jsx("img",{src:"https://placekitten.com/800/600",alt:"A kitten",style:{width:"100%",height:"100%",objectFit:"cover"}}),style:{width:"300px",boxShadow:"var(--t-shadow-200)"}}},c={args:{ratio:2/3,children:t.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--t-color-fill-success-secondary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--t-color-text-success)",fontWeight:"var(--t-font-weight-semibold)"},children:"2:3"}),style:{width:"200px",boxShadow:"var(--t-shadow-200)"}}},d={args:{ratio:16/9,children:t.jsx("img",{src:"https://placekitten.com/1600/900",alt:"A cute kitten",style:{width:"100%",height:"100%",objectFit:"cover"}}),style:{width:"100%",maxWidth:"400px",boxShadow:"var(--t-shadow-200)"}},decorators:[e=>t.jsxs("div",{style:{maxWidth:"400px",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-300)",overflow:"hidden"},children:[t.jsx(e,{}),t.jsxs("div",{style:{padding:"var(--t-space-300)"},children:[t.jsx("h3",{style:{margin:0,marginBottom:"var(--t-space-200)",fontSize:"var(--t-font-size-400)",fontWeight:"var(--t-font-weight-semibold)",color:"var(--t-color-text-primary)"},children:"Card with AspectRatio"}),t.jsx("p",{style:{margin:0,fontSize:"var(--t-font-size-300)",color:"var(--t-color-text-secondary)"},children:"This card uses the AspectRatio component to maintain a consistent 16:9 ratio for the image, regardless of the card width."})]})]})]};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--t-color-fill-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--t-color-text-on-fill)',
      fontWeight: 'var(--t-font-weight-semibold)'
    }}>
        1:1
      </div>,
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,w,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--t-color-fill-brand-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--t-color-text-link)',
      fontWeight: 'var(--t-font-weight-semibold)'
    }}>
        16:9
      </div>,
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var S,_,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3,
    children: <img src="https://placekitten.com/800/600" alt="A kitten" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />,
    style: {
      width: '300px',
      boxShadow: 'var(--t-shadow-200)'
    }
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var C,R,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ratio: 2 / 3,
    children: <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--t-color-fill-success-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--t-color-text-success)',
      fontWeight: 'var(--t-font-weight-semibold)'
    }}>
        2:3
      </div>,
    style: {
      width: '200px',
      boxShadow: 'var(--t-shadow-200)'
    }
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var A,W,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <img src="https://placekitten.com/1600/900" alt="A cute kitten" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />,
    style: {
      width: '100%',
      maxWidth: '400px',
      boxShadow: 'var(--t-shadow-200)'
    }
  },
  decorators: [Story => <div style={{
    maxWidth: '400px',
    border: \`1px solid var(--t-color-border-primary)\`,
    borderRadius: 'var(--t-border-radius-300)',
    overflow: 'hidden'
  }}>
        <Story />
        <div style={{
      padding: 'var(--t-space-300)'
    }}>
          <h3 style={{
        margin: 0,
        marginBottom: 'var(--t-space-200)',
        fontSize: 'var(--t-font-size-400)',
        fontWeight: 'var(--t-font-weight-semibold)',
        color: 'var(--t-color-text-primary)'
      }}>
            Card with AspectRatio
          </h3>
          <p style={{
        margin: 0,
        fontSize: 'var(--t-font-size-300)',
        color: 'var(--t-color-text-secondary)'
      }}>
            This card uses the AspectRatio component to maintain a consistent 16:9 ratio for the image, regardless of the card width.
          </p>
        </div>
      </div>]
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const $=["Default","Widescreen","WithImage","Portrait","CardExample"],J=Object.freeze(Object.defineProperty({__proto__:null,CardExample:d,Default:s,Portrait:c,Widescreen:i,WithImage:n,__namedExportsOrder:$,default:B},Symbol.toStringTag,{value:"Module"}));export{J as A,d as C,s as D,c as P,i as W,p as a,n as b};
