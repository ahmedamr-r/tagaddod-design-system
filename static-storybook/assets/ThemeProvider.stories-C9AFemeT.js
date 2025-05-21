const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ThemeProvider-De_L3O3o.js","./jsx-runtime-Cf8x2fCZ.js","./index-yBjzXJbu.js","./index-DI2gBlDf.js","./index-BlmOqGMO.js","./index-BPXrzZIR.js","./iframe-BpZEF_5K.js","./index-DybOl1hA.js","./index-fNjTmf9T.js","./index-CXQShRbs.js","./index-DrFu-skq.js","./ThemeProvider-Dmftu6TH.js","./Button-b6PCfnH9.js","./clsx-B-dksMZM.js","./createReactComponent-GuN14Mgc.js","./Button-DIUIaMCV.css"])))=>i.map(i=>d[i]);
import{_ as w}from"./iframe-BpZEF_5K.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as z}from"./index-BlmOqGMO.js";import{T as t,u as W}from"./ThemeProvider-Dmftu6TH.js";import{B as s}from"./Button-b6PCfnH9.js";const h=()=>{const{theme:r,setTheme:p,direction:n,setDirection:u,locale:g,setLocale:x}=W();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"var(--t-border-radius-200)",background:"var(--t-color-background-subtle)"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginTop:0},children:"Current Settings"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Theme:"})," ",r]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Direction:"})," ",n]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Locale:"})," ",g]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Theme Control"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(s,{variant:r==="tagaddod"?"primary":"secondary",onClick:()=>p("tagaddod"),children:"Tagaddod"}),e.jsx(s,{variant:r==="greenpan"?"primary":"secondary",onClick:()=>p("greenpan"),children:"GreenPan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Direction Control"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(s,{variant:n==="ltr"?"primary":"secondary",onClick:()=>u("ltr"),children:"LTR (English)"}),e.jsx(s,{variant:n==="rtl"?"primary":"secondary",onClick:()=>u("rtl"),children:"RTL (Arabic)"})]})]}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("h3",{children:"Sample UI in current theme"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(s,{variant:"primary",children:"Primary Button"}),e.jsx(s,{variant:"secondary",children:"Secondary Button"}),e.jsx(s,{variant:"tertiary",children:"Tertiary Button"})]})]})]})},F=()=>(z.useEffect(()=>()=>{document.documentElement.setAttribute("data-theme","tagaddod"),document.documentElement.setAttribute("dir","ltr"),document.documentElement.setAttribute("data-locale","en"),document.dir="ltr"},[]),null),M={title:"Providers/ThemeProvider",component:t,parameters:{layout:"centered",docs:{page:()=>w(()=>import("./ThemeProvider-De_L3O3o.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)}},decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(r,{})]})],tags:["providers"],argTypes:{defaultTheme:{control:"radio",options:["tagaddod","greenpan"],description:"Initial theme value"},defaultDirection:{control:"radio",options:["ltr","rtl"],description:"Initial text direction"},defaultLocale:{control:"radio",options:["en","ar"],description:"Initial locale"},storageKey:{control:"text",description:"localStorage key for persisting theme preferences"},children:{control:!1,description:"React children to render inside the provider"}},args:{defaultTheme:"tagaddod",defaultDirection:"ltr",defaultLocale:"en",storageKey:"tagaddod-theme"}},a={render:r=>e.jsx(t,{...r,children:e.jsx(h,{})})},d={args:{defaultTheme:"tagaddod"},render:r=>e.jsx(t,{...r,children:e.jsx(h,{})})},o={args:{defaultTheme:"greenpan"},render:r=>e.jsx(t,{...r,children:e.jsx(h,{})})},i={args:{defaultDirection:"rtl",defaultLocale:"ar"},render:r=>e.jsx(t,{...r,children:e.jsx(h,{})})},l={args:{storageKey:"custom-theme-storage-key"},render:r=>e.jsx(t,{...r,children:e.jsx(h,{})})},c={render:()=>e.jsx(t,{defaultTheme:"tagaddod",defaultDirection:"ltr",children:e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--t-color-border-subtle)",marginBottom:"20px"},children:[e.jsx("h3",{children:"Outer Provider (Tagaddod, LTR)"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(s,{variant:"primary",children:"Tagaddod Button"}),e.jsx(s,{variant:"secondary",children:"Secondary Button"})]}),e.jsx("div",{style:{marginTop:"20px",padding:"20px",border:"1px solid var(--t-color-border-subtle)"},children:e.jsxs(t,{defaultTheme:"greenpan",defaultDirection:"rtl",children:[e.jsx("h3",{style:{textAlign:"right"},children:"Inner Provider (GreenPan, RTL)"}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(s,{variant:"primary",children:"زر خضر"}),e.jsx(s,{variant:"secondary",children:"زر ثانوي"})]})]})})]})})},m={render:()=>{const r=()=>{const{theme:p,setTheme:n,themeClass:u,dirClass:g,localeClass:x,isRTL:N}=W();return e.jsxs("div",{style:{padding:"20px",border:"1px solid var(--t-color-border-subtle)"},children:[e.jsx("h3",{children:"Theme Classes"}),e.jsxs("div",{children:[e.jsx("p",{children:"Current theme classes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"themeClass"}),": ",e.jsx("strong",{children:u})]}),e.jsxs("li",{children:[e.jsx("code",{children:"dirClass"}),": ",e.jsx("strong",{children:g})]}),e.jsxs("li",{children:[e.jsx("code",{children:"localeClass"}),": ",e.jsx("strong",{children:x})]}),e.jsxs("li",{children:[e.jsx("code",{children:"isRTL"}),": ",e.jsx("strong",{children:N?"true":"false"})]})]})]}),e.jsx("div",{style:{marginTop:"16px"},children:e.jsx(s,{onClick:()=>n(p==="tagaddod"?"greenpan":"tagaddod"),children:"Toggle Theme"})})]})};return e.jsx(t,{children:e.jsx(r,{})})}};var T,v,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,f,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'tagaddod'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var P,b,D;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'greenpan'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var B,R,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultDirection: 'rtl',
    defaultLocale: 'ar'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var L,_,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    storageKey: 'custom-theme-storage-key'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var E,A,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
      <div style={{
      padding: '20px',
      border: '1px solid var(--t-color-border-subtle)',
      marginBottom: '20px'
    }}>
        <h3>Outer Provider (Tagaddod, LTR)</h3>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button variant="primary">Tagaddod Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        <div style={{
        marginTop: '20px',
        padding: '20px',
        border: '1px solid var(--t-color-border-subtle)'
      }}>
          <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
            <h3 style={{
            textAlign: 'right'
          }}>Inner Provider (GreenPan, RTL)</h3>
            <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'flex-end'
          }}>
              <Button variant="primary">زر خضر</Button>
              <Button variant="secondary">زر ثانوي</Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,G,K;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ThemeClassesDemo = () => {
      const {
        theme,
        setTheme,
        themeClass,
        dirClass,
        localeClass,
        isRTL
      } = useTheme();
      return <div style={{
        padding: '20px',
        border: '1px solid var(--t-color-border-subtle)'
      }}>
          <h3>Theme Classes</h3>
          <div>
            <p>Current theme classes:</p>
            <ul>
              <li><code>themeClass</code>: <strong>{themeClass}</strong></li>
              <li><code>dirClass</code>: <strong>{dirClass}</strong></li>
              <li><code>localeClass</code>: <strong>{localeClass}</strong></li>
              <li><code>isRTL</code>: <strong>{isRTL ? 'true' : 'false'}</strong></li>
            </ul>
          </div>
          
          <div style={{
          marginTop: '16px'
        }}>
            <Button onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}>
              Toggle Theme
            </Button>
          </div>
        </div>;
    };
    return <ThemeProvider>
        <ThemeClassesDemo />
      </ThemeProvider>;
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const U=["Default","TagaddodTheme","GreenPanTheme","RtlDirection","CustomStorageKey","NestedThemeProviders","WithThemeClasses"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomStorageKey:l,Default:a,GreenPanTheme:o,NestedThemeProviders:c,RtlDirection:i,TagaddodTheme:d,WithThemeClasses:m,__namedExportsOrder:U,default:M},Symbol.toStringTag,{value:"Module"}));export{l as C,a as D,o as G,c as N,i as R,X as T,m as W,d as a};
