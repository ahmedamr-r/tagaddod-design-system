const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ThemeProvider-Cc3ZYUPT.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./ThemeProvider-BLGS4FWZ.js","./Button-CoP_mZBT.js","./clsx-B-dksMZM.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css"])))=>i.map(i=>d[i]);
import{_ as ne}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as oe}from"./index-D4H_InIO.js";import{T as n,u as v}from"./ThemeProvider-BLGS4FWZ.js";import{B as t}from"./Button-CoP_mZBT.js";const a=()=>{const{theme:r,setTheme:i,direction:o,setDirection:s,locale:l}=v(),j=l==="en"?"Outfit":"Tajawal";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)",fontFamily:"var(--t-font-family-primary)"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginTop:0,color:"var(--t-color-text-primary)"},children:"Current Settings"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,color:"var(--t-color-text-secondary)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Theme:"})," ",r]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Direction:"})," ",o]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Locale:"})," ",l]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Font Family:"})," ",j]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CSS Font Variable:"})," var(--t-font-family-primary)"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)"},children:"Theme Control"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{variant:r==="tagaddod"?"primary":"secondary",onClick:()=>i("tagaddod"),children:"Tagaddod"}),e.jsx(t,{variant:r==="greenpan"?"primary":"secondary",onClick:()=>i("greenpan"),children:"GreenPan"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)"},children:"Font & Direction Control"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{variant:o==="ltr"?"primary":"secondary",onClick:()=>s("ltr"),children:"English (Outfit)"}),e.jsx(t,{variant:o==="rtl"?"primary":"secondary",onClick:()=>s("rtl"),children:"العربية (Tajawal)"})]})]}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)"},children:"Sample UI in current theme & font"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary Button"}),e.jsx(t,{variant:"secondary",children:"Secondary Button"}),e.jsx(t,{variant:"tertiary",children:"Tertiary Button"})]})]})]})},T=()=>{const{direction:r,setDirection:i,locale:o}=v(),s=o==="en"?"Outfit":"Tajawal";return e.jsxs("div",{style:{padding:"24px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)",textAlign:r==="rtl"?"right":"left"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{fontFamily:"var(--t-font-family-primary)",fontWeight:"var(--t-font-weight-semibold)",color:"var(--t-color-text-primary)",margin:"0 0 8px 0"},children:"Font Switching Demo"}),e.jsxs("p",{style:{fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-350)",margin:0},children:["Current Font: ",e.jsx("strong",{children:s})," | Direction: ",e.jsx("strong",{children:r.toUpperCase()})]})]}),e.jsx("div",{style:{fontFamily:"var(--t-font-family-primary)",fontSize:"var(--t-font-size-400)",lineHeight:"var(--t-font-line-height-600)",color:"var(--t-color-text-primary)",marginBottom:"20px"},children:o==="en"?e.jsxs("div",{children:[e.jsx("h4",{style:{fontWeight:"var(--t-font-weight-medium)",margin:"0 0 12px 0"},children:"This text uses the Outfit font family"}),e.jsx("p",{style:{margin:"0 0 16px 0"},children:"Outfit is a geometric sans-serif font designed for optimal readability in English text. It provides excellent clarity for both headings and body text, with a modern appearance that works well for digital interfaces."}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"var(--t-font-weight-regular)"},children:"Regular"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-medium)"},children:"Medium"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-semibold)"},children:"Semibold"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-bold)"},children:"Bold"})]})]}):e.jsxs("div",{children:[e.jsx("h4",{style:{fontWeight:"var(--t-font-weight-medium)",margin:"0 0 12px 0"},children:"هذا النص يستخدم خط تجوال"}),e.jsx("p",{style:{margin:"0 0 16px 0"},children:"تجوال هو خط عربي حديث مصمم خصيصاً لسهولة القراءة في النصوص العربية. يوفر وضوحاً ممتازاً للعناوين والنصوص، مع مظهر عصري يناسب الواجهات الرقمية."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexDirection:"row-reverse"},children:[e.jsx("span",{style:{fontWeight:"var(--t-font-weight-regular)"},children:"عادي"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-medium)"},children:"متوسط"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-semibold)"},children:"نصف غامق"}),e.jsx("span",{style:{fontWeight:"var(--t-font-weight-bold)"},children:"غامق"})]})]})}),e.jsx(t,{onClick:()=>i(r==="ltr"?"rtl":"ltr"),variant:"primary",children:o==="en"?"Switch to Arabic (Tajawal)":"التبديل للإنجليزية (Outfit)"})]})},b=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[e.jsx(n,{defaultDirection:"ltr",defaultLocale:"en",children:e.jsxs("div",{style:{padding:"20px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)"},children:[e.jsx("h3",{style:{fontFamily:"var(--t-font-family-primary)",fontWeight:"var(--t-font-weight-semibold)",color:"var(--t-color-text-primary)",margin:"0 0 16px 0",textAlign:"left"},children:"English - Outfit Font"}),e.jsxs("div",{style:{fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-primary)"},children:[e.jsx("h1",{style:{fontSize:"var(--t-font-size-800)",fontWeight:"var(--t-font-weight-bold)",margin:"0 0 8px 0"},children:"Heading 1"}),e.jsx("h2",{style:{fontSize:"var(--t-font-size-600)",fontWeight:"var(--t-font-weight-semibold)",margin:"0 0 8px 0"},children:"Heading 2"}),e.jsx("h3",{style:{fontSize:"var(--t-font-size-500)",fontWeight:"var(--t-font-weight-medium)",margin:"0 0 12px 0"},children:"Heading 3"}),e.jsx("p",{style:{fontSize:"var(--t-font-size-400)",fontWeight:"var(--t-font-weight-regular)",margin:"0 0 12px 0",lineHeight:1.6},children:"This is body text using the Outfit font family. It's designed for optimal readability in digital interfaces and provides excellent clarity for extended reading."}),e.jsx("p",{style:{fontSize:"var(--t-font-size-350)",color:"var(--t-color-text-secondary)",margin:"0 0 16px 0"},children:"This is smaller text demonstrating different font sizes and weights available in Outfit."}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{variant:"primary",size:"micro",children:"Primary"}),e.jsx(t,{variant:"secondary",size:"micro",children:"Secondary"})]})]})]})}),e.jsx(n,{defaultDirection:"rtl",defaultLocale:"ar",children:e.jsxs("div",{style:{padding:"20px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)"},children:[e.jsx("h3",{style:{fontFamily:"var(--t-font-family-primary)",fontWeight:"var(--t-font-weight-semibold)",color:"var(--t-color-text-primary)",margin:"0 0 16px 0",textAlign:"right"},children:"العربية - خط تجوال"}),e.jsxs("div",{style:{fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-primary)",textAlign:"right"},children:[e.jsx("h1",{style:{fontSize:"var(--t-font-size-800)",fontWeight:"var(--t-font-weight-bold)",margin:"0 0 8px 0"},children:"العنوان الأول"}),e.jsx("h2",{style:{fontSize:"var(--t-font-size-600)",fontWeight:"var(--t-font-weight-semibold)",margin:"0 0 8px 0"},children:"العنوان الثاني"}),e.jsx("h3",{style:{fontSize:"var(--t-font-size-500)",fontWeight:"var(--t-font-weight-medium)",margin:"0 0 12px 0"},children:"العنوان الثالث"}),e.jsx("p",{style:{fontSize:"var(--t-font-size-400)",fontWeight:"var(--t-font-weight-regular)",margin:"0 0 12px 0",lineHeight:1.6},children:"هذا نص أساسي يستخدم خط تجوال. تم تصميمه لتحسين القراءة في الواجهات الرقمية ويوفر وضوحاً ممتازاً للقراءة المطولة باللغة العربية."}),e.jsx("p",{style:{fontSize:"var(--t-font-size-350)",color:"var(--t-color-text-secondary)",margin:"0 0 16px 0"},children:"هذا نص أصغر يوضح أحجام الخطوط والأوزان المختلفة المتاحة في خط تجوال."}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"secondary",size:"micro",children:"ثانوي"}),e.jsx(t,{variant:"primary",size:"micro",children:"أساسي"})]})]})]})})]}),C=()=>{const{locale:r,direction:i,setDirection:o}=v(),s=r==="en"?"Outfit":"Tajawal",l=()=>{o(r==="en"?"rtl":"ltr")};return e.jsxs("div",{style:{padding:"24px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)",textAlign:i==="rtl"?"right":"left",fontFamily:"var(--t-font-family-primary)"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{fontWeight:"var(--t-font-weight-semibold)",color:"var(--t-color-text-primary)",margin:"0 0 8px 0"},children:r==="en"?"Language & Font Switcher":"مبدل اللغة والخط"}),e.jsxs("div",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-350)",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:r==="en"?"Current Language:":"اللغة الحالية:"})," ",r==="en"?"English":"العربية"]}),e.jsxs("div",{children:[e.jsx("strong",{children:r==="en"?"Current Font:":"الخط الحالي:"})," ",s]}),e.jsxs("div",{children:[e.jsx("strong",{children:r==="en"?"Direction:":"الاتجاه:"})," ",i.toUpperCase()]})]})]}),e.jsx("div",{style:{fontSize:"var(--t-font-size-400)",lineHeight:"var(--t-font-line-height-600)",color:"var(--t-color-text-primary)",marginBottom:"20px"},children:r==="en"?e.jsxs("p",{children:["This content is currently displayed in English using the ",e.jsx("strong",{children:"Outfit"})," font family. Click the button below to switch to Arabic with the ",e.jsx("strong",{children:"Tajawal"})," font family."]}):e.jsxs("p",{children:["يتم عرض هذا المحتوى حالياً باللغة العربية باستخدام خط ",e.jsx("strong",{children:"تجوال"}),". انقر على الزر أدناه للتبديل إلى الإنجليزية باستخدام خط ",e.jsx("strong",{children:"Outfit"}),"."]})}),e.jsx(t,{onClick:l,variant:"primary",children:r==="en"?"العربية (Tajawal) ←":"English (Outfit) →"})]})},ie=()=>(oe.useEffect(()=>()=>{document.documentElement.setAttribute("data-theme","tagaddod"),document.documentElement.setAttribute("dir","ltr"),document.documentElement.setAttribute("lang","en"),document.documentElement.setAttribute("data-locale","en"),document.dir="ltr"},[]),null),ae={title:"Providers/ThemeProvider",component:n,parameters:{layout:"centered",docs:{page:()=>ne(()=>import("./ThemeProvider-Cc3ZYUPT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url)}},decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx(ie,{}),e.jsx(r,{})]})],tags:["providers"],argTypes:{defaultTheme:{control:"radio",options:["tagaddod","greenpan"],description:"Initial theme value"},defaultDirection:{control:"radio",options:["ltr","rtl"],description:"Initial text direction (also determines font: ltr=Outfit, rtl=Tajawal)"},defaultLocale:{control:"radio",options:["en","ar"],description:"Initial locale (en=Outfit font, ar=Tajawal font)"},storageKey:{control:"text",description:"localStorage key for persisting theme preferences"},children:{control:!1,description:"React children to render inside the provider"}},args:{defaultTheme:"tagaddod",defaultDirection:"ltr",defaultLocale:"en",storageKey:"tagaddod-theme",children:e.jsx("div",{children:"Theme Provider Content"})}},d={render:r=>e.jsx(n,{...r,children:e.jsx(a,{})})},c={name:"🎨 Font Switching Demo",args:{children:e.jsx(T,{})},render:()=>e.jsx(n,{children:e.jsx(T,{})})},m={name:"📝 Typography Comparison",args:{children:e.jsx(b,{})},parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(b,{})})},h={name:"🌐 Language & Font Switcher",args:{children:e.jsx(C,{})},render:()=>e.jsx(n,{children:e.jsx(C,{})})},p={args:{defaultTheme:"tagaddod",children:e.jsx(a,{})},render:r=>e.jsx(n,{...r,children:e.jsx(a,{})})},g={args:{defaultTheme:"greenpan",children:e.jsx(a,{})},render:r=>e.jsx(n,{...r,children:e.jsx(a,{})})},x={name:"RTL Direction (Arabic/Tajawal)",args:{defaultDirection:"rtl",defaultLocale:"ar",children:e.jsx(a,{})},render:r=>e.jsx(n,{...r,children:e.jsx(a,{})})},y={args:{storageKey:"custom-theme-storage-key",children:e.jsx(a,{})},render:r=>e.jsx(n,{...r,children:e.jsx(a,{})})},f={name:"Nested Providers (Mixed Fonts)",args:{children:e.jsx("div",{children:"Nested content"})},render:()=>e.jsx(n,{defaultTheme:"tagaddod",defaultDirection:"ltr",children:e.jsxs("div",{style:{padding:"20px",border:"2px solid var(--t-color-border-primary)",marginBottom:"20px",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)"},children:[e.jsx("h3",{style:{fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-primary)"},children:"Outer Provider (Tagaddod, LTR, Outfit Font)"}),e.jsx("p",{style:{fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-secondary)"},children:"This content uses the Outfit font family in left-to-right direction."}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"20px"},children:[e.jsx(t,{variant:"primary",children:"Tagaddod Button"}),e.jsx(t,{variant:"secondary",children:"Secondary Button"})]}),e.jsx("div",{style:{marginTop:"20px",padding:"20px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-secondary)"},children:e.jsxs(n,{defaultTheme:"greenpan",defaultDirection:"rtl",children:[e.jsx("h3",{style:{textAlign:"right",fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-primary)"},children:"Inner Provider (GreenPan, RTL, Tajawal Font)"}),e.jsx("p",{style:{textAlign:"right",fontFamily:"var(--t-font-family-primary)",color:"var(--t-color-text-secondary)"},children:"هذا المحتوى يستخدم خط تجوال في الاتجاه من اليمين إلى اليسار."}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"secondary",children:"زر ثانوي"}),e.jsx(t,{variant:"primary",children:"زر أساسي"})]})]})})]})})},u={name:"useThemeClasses Hook",args:{children:e.jsx("div",{children:"Theme classes content"})},render:()=>{const r=()=>{const{theme:i,setTheme:o,themeClass:s,dirClass:l,localeClass:j,isRTL:ee,locale:re}=v(),te=re==="en"?"Outfit":"Tajawal";return e.jsxs("div",{style:{padding:"20px",border:"2px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-200)",backgroundColor:"var(--t-color-surface-primary)",fontFamily:"var(--t-font-family-primary)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)"},children:"useThemeClasses Hook Demo"}),e.jsxs("div",{style:{color:"var(--t-color-text-secondary)"},children:[e.jsx("p",{children:"Current theme classes and values:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"themeClass"}),": ",e.jsx("strong",{children:s})]}),e.jsxs("li",{children:[e.jsx("code",{children:"dirClass"}),": ",e.jsx("strong",{children:l})]}),e.jsxs("li",{children:[e.jsx("code",{children:"localeClass"}),": ",e.jsx("strong",{children:j})]}),e.jsxs("li",{children:[e.jsx("code",{children:"isRTL"}),": ",e.jsx("strong",{children:ee?"true":"false"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"currentFont"}),": ",e.jsx("strong",{children:te})]})]})]}),e.jsx("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:e.jsx(t,{onClick:()=>o(i==="tagaddod"?"greenpan":"tagaddod"),children:"Toggle Theme"})})]})};return e.jsx(n,{children:e.jsx(r,{})})}};var w,F,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var D,P,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '🎨 Font Switching Demo',
  args: {
    children: <FontSwitchingDemoComponent />
  },
  render: () => <ThemeProvider>
      <FontSwitchingDemoComponent />
    </ThemeProvider>
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var L,R,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '📝 Typography Comparison',
  args: {
    children: <TypographyComparisonComponent />
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    padding: '20px'
  }}>
      <TypographyComparisonComponent />
    </div>
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var k,O,W;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '🌐 Language & Font Switcher',
  args: {
    children: <LanguageFontSwitcherComponent />
  },
  render: () => <ThemeProvider>
      <LanguageFontSwitcherComponent />
    </ThemeProvider>
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var A,E,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'tagaddod',
    children: <ThemeDemo />
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var H,I,N;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'greenpan',
    children: <ThemeDemo />
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var G,K,M;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'RTL Direction (Arabic/Tajawal)',
  args: {
    defaultDirection: 'rtl',
    defaultLocale: 'ar',
    children: <ThemeDemo />
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(M=(K=x.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,V,q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    storageKey: 'custom-theme-storage-key',
    children: <ThemeDemo />
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Nested Providers (Mixed Fonts)',
  args: {
    children: <div>Nested content</div>
  },
  render: () => <ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
      <div style={{
      padding: '20px',
      border: '2px solid var(--t-color-border-primary)',
      marginBottom: '20px',
      borderRadius: 'var(--t-border-radius-200)',
      backgroundColor: 'var(--t-color-surface-primary)'
    }}>
        <h3 style={{
        fontFamily: 'var(--t-font-family-primary)',
        color: 'var(--t-color-text-primary)'
      }}>
          Outer Provider (Tagaddod, LTR, Outfit Font)
        </h3>
        <p style={{
        fontFamily: 'var(--t-font-family-primary)',
        color: 'var(--t-color-text-secondary)'
      }}>
          This content uses the Outfit font family in left-to-right direction.
        </p>
        <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px'
      }}>
          <Button variant="primary">Tagaddod Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        <div style={{
        marginTop: '20px',
        padding: '20px',
        border: '2px solid var(--t-color-border-primary)',
        borderRadius: 'var(--t-border-radius-200)',
        backgroundColor: 'var(--t-color-surface-secondary)'
      }}>
          <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
            <h3 style={{
            textAlign: 'right',
            fontFamily: 'var(--t-font-family-primary)',
            color: 'var(--t-color-text-primary)'
          }}>
              Inner Provider (GreenPan, RTL, Tajawal Font)
            </h3>
            <p style={{
            textAlign: 'right',
            fontFamily: 'var(--t-font-family-primary)',
            color: 'var(--t-color-text-secondary)'
          }}>
              هذا المحتوى يستخدم خط تجوال في الاتجاه من اليمين إلى اليسار.
            </p>
            <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'flex-end'
          }}>
              <Button variant="secondary">زر ثانوي</Button>
              <Button variant="primary">زر أساسي</Button>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'useThemeClasses Hook',
  args: {
    children: <div>Theme classes content</div>
  },
  render: () => {
    const ThemeClassesDemo = () => {
      const {
        theme,
        setTheme,
        themeClass,
        dirClass,
        localeClass,
        isRTL,
        locale
      } = useTheme();
      const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
      return <div style={{
        padding: '20px',
        border: '2px solid var(--t-color-border-primary)',
        borderRadius: 'var(--t-border-radius-200)',
        backgroundColor: 'var(--t-color-surface-primary)',
        fontFamily: 'var(--t-font-family-primary)'
      }}>
          <h3 style={{
          color: 'var(--t-color-text-primary)'
        }}>useThemeClasses Hook Demo</h3>
          <div style={{
          color: 'var(--t-color-text-secondary)'
        }}>
            <p>Current theme classes and values:</p>
            <ul>
              <li><code>themeClass</code>: <strong>{themeClass}</strong></li>
              <li><code>dirClass</code>: <strong>{dirClass}</strong></li>
              <li><code>localeClass</code>: <strong>{localeClass}</strong></li>
              <li><code>isRTL</code>: <strong>{isRTL ? 'true' : 'false'}</strong></li>
              <li><code>currentFont</code>: <strong>{currentFont}</strong></li>
            </ul>
          </div>
          
          <div style={{
          marginTop: '16px',
          display: 'flex',
          gap: '8px'
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
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const se=["Default","FontSwitchingDemo","TypographyComparison","LanguageFontSwitcher","TagaddodTheme","GreenPanTheme","RtlDirection","CustomStorageKey","NestedThemeProviders","WithThemeClasses"],pe=Object.freeze(Object.defineProperty({__proto__:null,CustomStorageKey:y,Default:d,FontSwitchingDemo:c,GreenPanTheme:g,LanguageFontSwitcher:h,NestedThemeProviders:f,RtlDirection:x,TagaddodTheme:p,TypographyComparison:m,WithThemeClasses:u,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{y as C,d as D,c as F,g as G,h as L,f as N,x as R,pe as T,u as W,p as a,m as b};
