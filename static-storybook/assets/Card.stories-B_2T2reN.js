import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as Ue}from"./index-D4H_InIO.js";import{c as qe}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-CoP_mZBT.js";import{B as Ge}from"./Badge-BhZgywnl.js";import{A as Oe}from"./Avatar-BuzOK5mh.js";import{I as T}from"./IconArrowRight-Bc4wwjT_.js";import{c as Ve}from"./createReactComponent-CKk3lApD.js";import{I as We}from"./IconPlus-C8LpY_EU.js";import{I as Ye}from"./IconSettings-cjygYtAZ.js";import{I as Je}from"./IconArrowLeft-DFM-AXyG.js";import{I as Qe}from"./IconUser-CxX_vdyQ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M3 12h4l3 8l4 -16l3 8h4",key:"svg-0"}]],_e=Ve("outline","activity","Activity",$e),Ke="_card_1palg_2",Xe="_variantElevated_1palg_13",Ze="_variantOutlined_1palg_18",er="_variantGhost_1palg_24",rr="_interactive_1palg_31",ar="_clickable_1palg_64",tr="_sizeSmall_1palg_108",ir="_sizeMedium_1palg_113",sr="_sizeLarge_1palg_118",nr="_fullWidth_1palg_124",or="_header_1palg_129",dr="_body_1palg_136",lr="_footer_1palg_142",i={card:Ke,variantElevated:Xe,variantOutlined:Ze,variantGhost:er,interactive:rr,clickable:ar,sizeSmall:tr,sizeMedium:ir,sizeLarge:sr,fullWidth:nr,header:or,body:dr,footer:lr},a=Ue.forwardRef(({children:r,header:n,footer:t,variant:o="elevated",size:P="medium",interactive:Re=!1,fullWidth:Le=!1,clickable:Be=!1,containerPadding:A,contentPadding:I,className:Ee="",...Ne},Me)=>{const De={lineHeight:typeof document<"u"&&(document.dir==="rtl"||document.documentElement.dir==="rtl")?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)"},He=qe(i.card,i[`variant${o.charAt(0).toUpperCase()+o.slice(1)}`],i[`size${P.charAt(0).toUpperCase()+P.slice(1)}`],Re&&i.interactive,Be&&i.clickable,Le&&i.fullWidth,Ee),Fe={...De,...A&&{padding:A}},S=I?{padding:I}:void 0;return e.jsxs("div",{ref:Me,className:He,style:Fe,...Ne,children:[n&&e.jsx("div",{className:i.header,style:S,children:n}),e.jsx("div",{className:i.body,style:S,children:r}),t&&e.jsx("div",{className:i.footer,style:S,children:t})]})});a.displayName="Card";try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{children:{defaultValue:null,description:"Main content area - can be any React node",name:"children",required:!0,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Optional header content - shows at top of card",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Optional footer content - shows at bottom of card",name:"footer",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"elevated"},description:"Card visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"outlined"'},{value:'"elevated"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"medium"},description:"Card size affects padding and spacing",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},interactive:{defaultValue:{value:"false"},description:"Makes the card interactive with hover/focus states",name:"interactive",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"Full width card (100% of container)",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},clickable:{defaultValue:{value:"false"},description:"Makes the entire card clickable with enhanced hover/click effects",name:"clickable",required:!1,type:{name:"boolean | undefined"}},containerPadding:{defaultValue:null,description:`Custom padding for the entire card container
Overrides the size-based padding when provided`,name:"containerPadding",required:!1,type:{name:"string | undefined"}},contentPadding:{defaultValue:null,description:`Custom padding for the card content (header, body, footer)
Overrides the default content spacing when provided`,name:"contentPadding",required:!1,type:{name:"string | undefined"}}}}}catch{}const cr={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"A flexible Card component that serves as a versatile container for any content. Features optional header and footer sections with RTL support and multiple visual variants."}}},argTypes:{children:{description:"Main content area - accepts any React node",control:{type:"text"}},header:{description:"Optional header content displayed at the top",control:{type:"text"}},footer:{description:"Optional footer content displayed at the bottom",control:{type:"text"}},variant:{description:"Visual variant of the card",control:{type:"select"},options:["elevated","outlined","ghost"]},size:{description:"Size affects padding and spacing",control:{type:"select"},options:["small","medium","large"]},interactive:{description:"Makes the card interactive with hover states",control:{type:"boolean"}},fullWidth:{description:"Makes the card take full width of container",control:{type:"boolean"}},clickable:{description:"Makes the entire card clickable with enhanced hover/click effects",control:{type:"boolean"}},containerPadding:{description:"Custom padding for the entire card container (overrides size-based padding)",control:{type:"text"}},contentPadding:{description:"Custom padding for card content sections (header, body, footer)",control:{type:"text"}}}},d={args:{children:"This is the main content area of the card. It can contain any React components or content."}},l={args:{header:"Card Header",children:"This card has a header section that can display titles, actions, or other header content."}},c={args:{children:"This card has a footer section perfect for actions, metadata, or supplementary information.",footer:"Card Footer"}},p={args:{header:"Complete Card Example",children:"This card demonstrates all sections: header, body (this content), and footer working together.",footer:"Footer with actions or metadata"}},h={render:r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",maxWidth:"800px"},children:[e.jsxs(a,{variant:"elevated",...r,children:[e.jsx("h4",{children:"Elevated"}),e.jsx("p",{children:"Card with shadow and subtle border"})]}),e.jsxs(a,{variant:"outlined",...r,children:[e.jsx("h4",{children:"Outlined"}),e.jsx("p",{children:"Card with visible border, no shadow"})]}),e.jsxs(a,{variant:"ghost",...r,children:[e.jsx("h4",{children:"Ghost"}),e.jsx("p",{children:"Minimal card with no border or shadow"})]})]})},m={render:r=>e.jsxs("div",{style:{display:"grid",gap:"1rem",maxWidth:"600px"},children:[e.jsx(a,{size:"small",header:"Small Card",...r,children:e.jsx("p",{children:"Compact spacing for tight layouts"})}),e.jsx(a,{size:"medium",header:"Medium Card",...r,children:e.jsx("p",{children:"Default spacing for most use cases"})}),e.jsx(a,{size:"large",header:"Large Card",...r,children:e.jsx("p",{children:"Generous spacing for prominent content"})})]})},g={args:{interactive:!0,header:"Interactive Card",children:"Hover to see the 0.2s ease-in-out transition with surface-hover background. Perfect for clickable cards or navigation items.",footer:"Notice the smooth animation and background change"}},v={render:r=>e.jsx(a,{variant:"elevated",size:"medium",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(_e,{size:20}),e.jsx("span",{children:"Analytics Overview"})]}),footer:e.jsx(s,{variant:"plain",size:"small",suffixIcon:e.jsx(T,{size:14}),children:"View Details"}),...r,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",textAlign:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"var(--t-color-text-primary)"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Total Users"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"var(--t-color-text-primary)"},children:"567"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Active Today"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"var(--t-color-text-primary)"},children:"89%"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Engagement"})]})]})})},u={render:r=>e.jsx(a,{variant:"outlined",size:"medium",clickable:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx(Oe,{size:"medium"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:"Sarah Johnson"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Product Manager"})]}),e.jsx(Ge,{variant:"success",style:{marginLeft:"auto"},children:"Online"})]}),footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(s,{variant:"primary",size:"small",children:"Message"}),e.jsx(s,{variant:"outlined",size:"small",children:"View Profile"})]}),onClick:()=>alert("Profile card clicked!"),...r,children:e.jsx("p",{children:"Experienced product manager with 8+ years in tech. Currently leading the design system initiative and focusing on user experience improvements."})})},f={render:r=>e.jsx(a,{variant:"ghost",size:"large",interactive:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(We,{size:20}),e.jsx("span",{children:"Create New Project"})]}),...r,children:e.jsx("p",{style:{color:"var(--t-color-text-secondary)"},children:"Start a new project from scratch or use one of our templates to get up and running quickly."})})},x={render:r=>e.jsx(a,{variant:"elevated",size:"medium",header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(Ye,{size:20}),e.jsx("span",{children:"Account Settings"})]}),...r,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Email Notifications"}),e.jsx(s,{variant:"outlined",size:"small",children:"Configure"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Privacy Settings"}),e.jsx(s,{variant:"outlined",size:"small",children:"Manage"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Security"}),e.jsx(s,{variant:"outlined",size:"small",children:"Update"})]})]})})},y={render:r=>{var o;const n=((o=r.globals)==null?void 0:o.direction)||"ltr",t=n==="rtl";return e.jsxs("div",{style:{display:"grid",gap:"1rem",maxWidth:"500px"},children:[e.jsx(a,{variant:"elevated",header:t?"رأس البطاقة":"Card Header",footer:t?"تذييل البطاقة":"Card Footer",...r,children:e.jsx("p",{style:{lineHeight:t?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)",fontFamily:t?"var(--t-font-family-arabic)":"var(--t-font-family-primary)",textAlign:t?"right":"left",direction:n},children:t?"هذا مثال على بطاقة تدعم اللغة العربية مع التخطيط من اليمين إلى اليسار وارتفاع الخط المناسب للنص العربي.":"This card demonstrates proper RTL support with appropriate font family, text alignment, and line height adjustments for Arabic text."})}),e.jsx(a,{variant:"outlined",interactive:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(Qe,{size:20}),e.jsx("span",{children:t?"ملف المستخدم":"User Profile"})]}),footer:e.jsx(s,{variant:"primary",suffixIcon:t?e.jsx(Je,{size:14}):e.jsx(T,{size:14}),children:t?"التالي":"Next"}),...r,children:e.jsx("p",{style:{lineHeight:t?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)",fontFamily:t?"var(--t-font-family-arabic)":"var(--t-font-family-primary)",textAlign:t?"right":"left",direction:n},children:t?"بطاقة تفاعلية مع دعم كامل للغة العربية ومحاذاة صحيحة للأيقونات.":"Interactive card with full RTL support and proper icon alignment."})})]})}},C={args:{fullWidth:!0,variant:"outlined",header:"Full Width Card",children:"This card takes the full width of its container, making it perfect for layouts where cards need to stretch across available space.",footer:"Perfect for dashboard layouts"}},j={render:r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem",maxWidth:"800px"},children:[e.jsxs(a,{variant:"elevated",size:"small",header:"Quick Stats",...r,children:[e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"42"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Active Projects"})]}),e.jsxs(a,{variant:"outlined",size:"small",header:"Recent Activity",...r,children:[e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"15"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Updates Today"})]}),e.jsxs(a,{variant:"ghost",size:"small",header:"Performance",...r,children:[e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"98%"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Uptime"})]})]})},b={render:r=>e.jsxs("div",{style:{display:"grid",gap:"2rem",maxWidth:"900px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Hover Effects with 0.2s Ease-In-Out Transitions"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[e.jsx(a,{variant:"elevated",interactive:!0,header:"Interactive Card",footer:"Hover for surface-hover background",...r,children:e.jsx("p",{children:"Interactive cards get surface-hover background on hover with smooth 0.2s ease-in-out transition. No drop shadow for interactive cards."})}),e.jsx(a,{variant:"outlined",clickable:!0,header:"Clickable Card",footer:"Hover for drop shadow + lift",onClick:()=>console.log("Clicked!"),...r,children:e.jsx("p",{children:"Clickable cards get surface-hover background, drop shadow, and 2px lift on hover. All animations use 0.2s ease-in-out."})}),e.jsx(a,{variant:"ghost",clickable:!0,header:"Ghost Clickable",footer:"Watch the transformation",onClick:()=>console.log("Ghost clicked!"),...r,children:e.jsx("p",{children:"Ghost cards gain background and shadow on hover, transforming from minimal to elevated with smooth animation."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Transition Details"}),e.jsx(a,{variant:"elevated",size:"large",clickable:!0,header:"Animation Technical Details",footer:"Try hovering and clicking",onClick:()=>console.log("Technical card clicked!"),...r,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{children:e.jsx("strong",{children:"Hover Effects:"})}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:["Background changes to ",e.jsx("code",{children:"var(--t-color-surface-hover)"})]}),e.jsxs("li",{children:["Clickable cards get ",e.jsx("code",{children:"var(--t-shadow-200)"})," drop shadow"]}),e.jsxs("li",{children:["Transform: ",e.jsx("code",{children:"translateY(-2px)"})," for clickable, ",e.jsx("code",{children:"translateY(-1px)"})," for interactive"]}),e.jsxs("li",{children:["All transitions use ",e.jsx("code",{children:"0.2s ease-in-out"})]})]}),e.jsx("div",{children:e.jsx("strong",{children:"Active State:"})}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:["Reduces lift to ",e.jsx("code",{children:"translateY(-1px)"})]}),e.jsxs("li",{children:["Faster transition: ",e.jsx("code",{children:"0.1s ease-in-out"})]})]})]})})]})]})},z={render:r=>e.jsxs("div",{style:{display:"grid",gap:"1rem",maxWidth:"600px"},children:[e.jsx(a,{variant:"elevated",size:"medium",clickable:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(_e,{size:20}),e.jsx("span",{children:"Clickable Analytics Card"})]}),footer:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--t-color-text-tertiary)"},children:"Updated 2 minutes ago"}),e.jsx(T,{size:16})]}),onClick:()=>alert("Card clicked!"),...r,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",textAlign:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"var(--t-color-text-primary)"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Total Users"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"var(--t-color-text-primary)"},children:"89%"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--t-color-text-secondary)"},children:"Engagement"})]})]})}),e.jsx(a,{variant:"outlined",size:"medium",clickable:!0,header:"Navigation Card with Drop Shadow",onClick:()=>alert("Navigation clicked!"),...r,children:e.jsx("p",{children:"Click this entire card to navigate. Notice the enhanced hover effects: surface-hover background, drop shadow (0.2s ease-in-out), and smooth 2px lift animation."})}),e.jsx(a,{variant:"ghost",size:"medium",clickable:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(We,{size:20}),e.jsx("span",{children:"Create New"})]}),onClick:()=>alert("Create new clicked!"),...r,children:e.jsx("p",{children:"Ghost variant with clickable functionality. Watch the ghost card gain surface-hover background and drop shadow on hover with smooth 0.2s ease-in-out transition."})})]})},k={render:r=>e.jsx("div",{style:{display:"grid",gap:"2rem",maxWidth:"800px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Equal 12px Padding on All Sides (All Card Sizes)"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsx(a,{variant:"outlined",size:"medium",header:"Equal Padding Demo",footer:"All sides have equal padding",style:{border:"2px dashed var(--t-color-border-tertiary)"},...r,children:e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"8px",borderRadius:"4px"},children:e.jsx("p",{style:{margin:0},children:"All card sizes now use 12px (var(--t-space-300)) padding on all four sides: top, bottom, left, and right. This creates perfect symmetry and makes the card ideal for AI agents to use consistently."})})}),e.jsx(a,{variant:"elevated",size:"large",header:"Large Size Equal Padding",footer:"Consistent spacing maintained",style:{border:"2px dashed var(--t-color-border-tertiary)"},...r,children:e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"8px",borderRadius:"4px"},children:e.jsx("p",{style:{margin:0},children:"Large size cards maintain the same 12px base padding on all sides, ensuring predictable and harmonious layouts across all sizes."})})})]})]})})},w={render:r=>e.jsxs("div",{style:{display:"grid",gap:"2rem",maxWidth:"800px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Container Padding Customization"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsx(a,{variant:"elevated",header:"Default Padding",footer:"Standard spacing",...r,children:e.jsx("p",{children:"This card uses the default 12px padding (var(--t-space-300)) on all sides."})}),e.jsx(a,{variant:"elevated",header:"Custom Container Padding",footer:"Tight spacing",containerPadding:"8px",...r,children:e.jsx("p",{children:"This card overrides container padding to 8px for all sections."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Content Padding Customization"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsx(a,{variant:"outlined",header:"Custom Content Padding",footer:"Generous spacing",contentPadding:"24px",...r,children:e.jsx("p",{children:"This card uses custom content padding (24px) for header, body, and footer sections."})}),e.jsx(a,{variant:"outlined",header:"Mixed Padding Control",footer:"Precise control",containerPadding:"4px",contentPadding:"20px 16px",...r,children:e.jsx("p",{children:"Container has 4px padding, content has 20px vertical and 16px horizontal padding."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Advanced Padding Examples"}),e.jsx(a,{variant:"ghost",header:"Asymmetric Padding",footer:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Custom footer content"}),e.jsx(s,{variant:"primary",size:"small",children:"Action"})]}),containerPadding:"0",contentPadding:"32px 24px 16px 24px",style:{border:"2px dashed var(--t-color-border-tertiary)"},...r,children:e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("p",{children:"This card demonstrates:"}),e.jsxs("ul",{style:{marginLeft:"16px",marginTop:"8px"},children:[e.jsx("li",{children:"Container padding: 0 (no outer padding)"}),e.jsx("li",{children:"Content padding: 32px top, 24px sides, 16px bottom"}),e.jsx("li",{children:"Visual border to show the container boundaries"})]})]})})]})]})};var W,_,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'This is the main content area of the card. It can contain any React components or content.'
  }
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var L,B,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    header: 'Card Header',
    children: 'This card has a header section that can display titles, actions, or other header content.'
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,M,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'This card has a footer section perfect for actions, metadata, or supplementary information.',
    footer: 'Card Footer'
  }
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,F,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    header: 'Complete Card Example',
    children: 'This card demonstrates all sections: header, body (this content), and footer working together.',
    footer: 'Footer with actions or metadata'
  }
}`,...(U=(F=p.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var q,G,O;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    maxWidth: '800px'
  }}>
      <Card variant="elevated" {...args}>
        <h4>Elevated</h4>
        <p>Card with shadow and subtle border</p>
      </Card>
      <Card variant="outlined" {...args}>
        <h4>Outlined</h4>
        <p>Card with visible border, no shadow</p>
      </Card>
      <Card variant="ghost" {...args}>
        <h4>Ghost</h4>
        <p>Minimal card with no border or shadow</p>
      </Card>
    </div>
}`,...(O=(G=h.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,Y,J;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '600px'
  }}>
      <Card size="small" header="Small Card" {...args}>
        <p>Compact spacing for tight layouts</p>
      </Card>
      <Card size="medium" header="Medium Card" {...args}>
        <p>Default spacing for most use cases</p>
      </Card>
      <Card size="large" header="Large Card" {...args}>
        <p>Generous spacing for prominent content</p>
      </Card>
    </div>
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,$,K;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    interactive: true,
    header: 'Interactive Card',
    children: 'Hover to see the 0.2s ease-in-out transition with surface-hover background. Perfect for clickable cards or navigation items.',
    footer: 'Notice the smooth animation and background change'
  }
}`,...(K=($=g.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Card variant="elevated" size="medium" header={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
          <IconActivity size={20} />
          <span>Analytics Overview</span>
        </div>} footer={<Button variant="plain" size="small" suffixIcon={<IconArrowRight size={14} />}>
          View Details
        </Button>} {...args}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      textAlign: 'center'
    }}>
        <div>
          <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'var(--t-color-text-primary)'
        }}>1,234</div>
          <div style={{
          fontSize: '0.875rem',
          color: 'var(--t-color-text-secondary)'
        }}>Total Users</div>
        </div>
        <div>
          <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'var(--t-color-text-primary)'
        }}>567</div>
          <div style={{
          fontSize: '0.875rem',
          color: 'var(--t-color-text-secondary)'
        }}>Active Today</div>
        </div>
        <div>
          <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'var(--t-color-text-primary)'
        }}>89%</div>
          <div style={{
          fontSize: '0.875rem',
          color: 'var(--t-color-text-secondary)'
        }}>Engagement</div>
        </div>
      </div>
    </Card>
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <Card variant="outlined" size="medium" clickable={true} header={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  }}>
          <Avatar size="medium" />
          <div>
            <div style={{
        fontWeight: 'bold'
      }}>Sarah Johnson</div>
            <div style={{
        fontSize: '0.875rem',
        color: 'var(--t-color-text-secondary)'
      }}>Product Manager</div>
          </div>
          <Badge variant="success" style={{
      marginLeft: 'auto'
    }}>Online</Badge>
        </div>} footer={<div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
          <Button variant="primary" size="small">
            Message
          </Button>
          <Button variant="outlined" size="small">
            View Profile
          </Button>
        </div>} onClick={() => alert('Profile card clicked!')} {...args}>
      <p>Experienced product manager with 8+ years in tech. Currently leading the design system initiative and focusing on user experience improvements.</p>
    </Card>
}`,...(te=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,se,ne;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <Card variant="ghost" size="large" interactive={true} header={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
          <IconPlus size={20} />
          <span>Create New Project</span>
        </div>} {...args}>
      <p style={{
      color: 'var(--t-color-text-secondary)'
    }}>
        Start a new project from scratch or use one of our templates to get up and running quickly.
      </p>
    </Card>
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,de,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <Card variant="elevated" size="medium" header={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
          <IconSettings size={20} />
          <span>Account Settings</span>
        </div>} {...args}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Email Notifications</span>
          <Button variant="outlined" size="small">Configure</Button>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Privacy Settings</span>
          <Button variant="outlined" size="small">Manage</Button>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Security</span>
          <Button variant="outlined" size="small">Update</Button>
        </div>
      </div>
    </Card>
}`,...(le=(de=x.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,pe,he;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => {
    const direction = args.globals?.direction || 'ltr';
    const isRTL = direction === 'rtl';
    return <div style={{
      display: 'grid',
      gap: '1rem',
      maxWidth: '500px'
    }}>
        <Card variant="elevated" header={isRTL ? 'رأس البطاقة' : 'Card Header'} footer={isRTL ? 'تذييل البطاقة' : 'Card Footer'} {...args}>
          <p style={{
          lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
          fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
          textAlign: isRTL ? 'right' : 'left',
          direction: direction
        }}>
            {isRTL ? 'هذا مثال على بطاقة تدعم اللغة العربية مع التخطيط من اليمين إلى اليسار وارتفاع الخط المناسب للنص العربي.' : 'This card demonstrates proper RTL support with appropriate font family, text alignment, and line height adjustments for Arabic text.'}
          </p>
        </Card>

        <Card variant="outlined" interactive={true} header={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
              <IconUser size={20} />
              <span>{isRTL ? 'ملف المستخدم' : 'User Profile'}</span>
            </div>} footer={<Button variant="primary" suffixIcon={isRTL ? <IconArrowLeft size={14} /> : <IconArrowRight size={14} />}>
              {isRTL ? 'التالي' : 'Next'}
            </Button>} {...args}>
          <p style={{
          lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
          fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
          textAlign: isRTL ? 'right' : 'left',
          direction: direction
        }}>
            {isRTL ? 'بطاقة تفاعلية مع دعم كامل للغة العربية ومحاذاة صحيحة للأيقونات.' : 'Interactive card with full RTL support and proper icon alignment.'}
          </p>
        </Card>
      </div>;
  }
}`,...(he=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,ge,ve;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    variant: 'outlined',
    header: 'Full Width Card',
    children: 'This card takes the full width of its container, making it perfect for layouts where cards need to stretch across available space.',
    footer: 'Perfect for dashboard layouts'
  }
}`,...(ve=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ue,fe,xe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    maxWidth: '800px'
  }}>
      <Card variant="elevated" size="small" header="Quick Stats" {...args}>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>42</div>
        <div style={{
        fontSize: '0.875rem',
        color: 'var(--t-color-text-secondary)'
      }}>Active Projects</div>
      </Card>

      <Card variant="outlined" size="small" header="Recent Activity" {...args}>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>15</div>
        <div style={{
        fontSize: '0.875rem',
        color: 'var(--t-color-text-secondary)'
      }}>Updates Today</div>
      </Card>

      <Card variant="ghost" size="small" header="Performance" {...args}>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>98%</div>
        <div style={{
        fontSize: '0.875rem',
        color: 'var(--t-color-text-secondary)'
      }}>Uptime</div>
      </Card>
    </div>
}`,...(xe=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ye,Ce,je;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    maxWidth: '900px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Hover Effects with 0.2s Ease-In-Out Transitions</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}>
          <Card variant="elevated" interactive={true} header="Interactive Card" footer="Hover for surface-hover background" {...args}>
            <p>Interactive cards get surface-hover background on hover with smooth 0.2s ease-in-out transition. No drop shadow for interactive cards.</p>
          </Card>

          <Card variant="outlined" clickable={true} header="Clickable Card" footer="Hover for drop shadow + lift" onClick={() => console.log('Clicked!')} {...args}>
            <p>Clickable cards get surface-hover background, drop shadow, and 2px lift on hover. All animations use 0.2s ease-in-out.</p>
          </Card>

          <Card variant="ghost" clickable={true} header="Ghost Clickable" footer="Watch the transformation" onClick={() => console.log('Ghost clicked!')} {...args}>
            <p>Ghost cards gain background and shadow on hover, transforming from minimal to elevated with smooth animation.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Transition Details</h3>
        <Card variant="elevated" size="large" clickable={true} header="Animation Technical Details" footer="Try hovering and clicking" onClick={() => console.log('Technical card clicked!')} {...args}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <div><strong>Hover Effects:</strong></div>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>Background changes to <code>var(--t-color-surface-hover)</code></li>
              <li>Clickable cards get <code>var(--t-shadow-200)</code> drop shadow</li>
              <li>Transform: <code>translateY(-2px)</code> for clickable, <code>translateY(-1px)</code> for interactive</li>
              <li>All transitions use <code>0.2s ease-in-out</code></li>
            </ul>
            <div><strong>Active State:</strong></div>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>Reduces lift to <code>translateY(-1px)</code></li>
              <li>Faster transition: <code>0.1s ease-in-out</code></li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
}`,...(je=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var be,ze,ke;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '600px'
  }}>
      <Card variant="elevated" size="medium" clickable={true} header={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
            <IconActivity size={20} />
            <span>Clickable Analytics Card</span>
          </div>} footer={<div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
            <span style={{
        fontSize: '0.875rem',
        color: 'var(--t-color-text-tertiary)'
      }}>Updated 2 minutes ago</span>
            <IconArrowRight size={16} />
          </div>} onClick={() => alert('Card clicked!')} {...args}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        textAlign: 'center'
      }}>
          <div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--t-color-text-primary)'
          }}>1,234</div>
            <div style={{
            fontSize: '0.875rem',
            color: 'var(--t-color-text-secondary)'
          }}>Total Users</div>
          </div>
          <div>
            <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--t-color-text-primary)'
          }}>89%</div>
            <div style={{
            fontSize: '0.875rem',
            color: 'var(--t-color-text-secondary)'
          }}>Engagement</div>
          </div>
        </div>
      </Card>

      <Card variant="outlined" size="medium" clickable={true} header="Navigation Card with Drop Shadow" onClick={() => alert('Navigation clicked!')} {...args}>
        <p>Click this entire card to navigate. Notice the enhanced hover effects: surface-hover background, drop shadow (0.2s ease-in-out), and smooth 2px lift animation.</p>
      </Card>

      <Card variant="ghost" size="medium" clickable={true} header={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
            <IconPlus size={20} />
            <span>Create New</span>
          </div>} onClick={() => alert('Create new clicked!')} {...args}>
        <p>Ghost variant with clickable functionality. Watch the ghost card gain surface-hover background and drop shadow on hover with smooth 0.2s ease-in-out transition.</p>
      </Card>
    </div>
}`,...(ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var we,Se,Te;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    maxWidth: '800px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Equal 12px Padding on All Sides (All Card Sizes)</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
          <Card variant="outlined" size="medium" header="Equal Padding Demo" footer="All sides have equal padding" style={{
          border: '2px dashed var(--t-color-border-tertiary)'
        }} {...args}>
            <div style={{
            backgroundColor: 'var(--t-color-surface-secondary)',
            padding: '8px',
            borderRadius: '4px'
          }}>
              <p style={{
              margin: 0
            }}>
                All card sizes now use 12px (var(--t-space-300)) padding on all four sides: top, bottom, left, and right.
                This creates perfect symmetry and makes the card ideal for AI agents to use consistently.
              </p>
            </div>
          </Card>

          <Card variant="elevated" size="large" header="Large Size Equal Padding" footer="Consistent spacing maintained" style={{
          border: '2px dashed var(--t-color-border-tertiary)'
        }} {...args}>
            <div style={{
            backgroundColor: 'var(--t-color-surface-secondary)',
            padding: '8px',
            borderRadius: '4px'
          }}>
              <p style={{
              margin: 0
            }}>
                Large size cards maintain the same 12px base padding on all sides,
                ensuring predictable and harmonious layouts across all sizes.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
}`,...(Te=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Pe,Ae,Ie;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    maxWidth: '800px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Container Padding Customization</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
          <Card variant="elevated" header="Default Padding" footer="Standard spacing" {...args}>
            <p>This card uses the default 12px padding (var(--t-space-300)) on all sides.</p>
          </Card>

          <Card variant="elevated" header="Custom Container Padding" footer="Tight spacing" containerPadding="8px" {...args}>
            <p>This card overrides container padding to 8px for all sections.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Content Padding Customization</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
          <Card variant="outlined" header="Custom Content Padding" footer="Generous spacing" contentPadding="24px" {...args}>
            <p>This card uses custom content padding (24px) for header, body, and footer sections.</p>
          </Card>

          <Card variant="outlined" header="Mixed Padding Control" footer="Precise control" containerPadding="4px" contentPadding="20px 16px" {...args}>
            <p>Container has 4px padding, content has 20px vertical and 16px horizontal padding.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '1rem'
      }}>Advanced Padding Examples</h3>
        <Card variant="ghost" header="Asymmetric Padding" footer={<div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
              <span>Custom footer content</span>
              <Button variant="primary" size="small">Action</Button>
            </div>} containerPadding="0" contentPadding="32px 24px 16px 24px" style={{
        border: '2px dashed var(--t-color-border-tertiary)'
      }} {...args}>
          <div style={{
          marginBottom: '16px'
        }}>
            <p>This card demonstrates:</p>
            <ul style={{
            marginLeft: '16px',
            marginTop: '8px'
          }}>
              <li>Container padding: 0 (no outer padding)</li>
              <li>Content padding: 32px top, 24px sides, 16px bottom</li>
              <li>Visual border to show the container boundaries</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
}`,...(Ie=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};const pr=["Default","WithHeader","WithFooter","Complete","Variants","Sizes","Interactive","AnalyticsCard","UserProfileCard","ActionCard","SettingsCard","RTLSupport","FullWidth","GridLayout","AnimationShowcase","ClickableCards","PaddingDemo","CustomPadding"],wr=Object.freeze(Object.defineProperty({__proto__:null,ActionCard:f,AnalyticsCard:v,AnimationShowcase:b,ClickableCards:z,Complete:p,CustomPadding:w,Default:d,FullWidth:C,GridLayout:j,Interactive:g,PaddingDemo:k,RTLSupport:y,SettingsCard:x,Sizes:m,UserProfileCard:u,Variants:h,WithFooter:c,WithHeader:l,__namedExportsOrder:pr,default:cr},Symbol.toStringTag,{value:"Module"}));export{b as A,wr as C,d as D,C as F,j as G,g as I,k as P,y as R,m as S,u as U,h as V,a,z as b,w as c,v as d,x as e};
