const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Drawer-CH4BZJUA.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Drawer-CJqTAku3.js","./clsx-B-dksMZM.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-N3eucVg6.js","./index-DavpLpmr.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-BTe66ZhM.js","./Button-CoP_mZBT.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./Badge-BhZgywnl.js","./Badge-BLbOHE26.css","./TextInput-CRZDgAAp.js","./index-QFq3N9B_.js","./IconExclamationCircle-BYkI5IG6.js","./TextInput-Ci27RXeL.css","./Modal-C3Y6YLke.js","./ScrollArea-CS41QZ1X.js","./index-YtIeenAn.js","./index-BdQq_4o_.js","./ScrollArea--7mshJD0.css","./Modal-BbL2DAug.css","./Select-Bnkvnb3h.js","./index-9FI6h9_9.js","./index-DXU_LAI1.js","./index-ComwvWTa.js","./IconChevronDown-D1vfiZl2.js","./IconChevronUp-BrVbvfGP.js","./IconSearch-BrVn1Pri.js","./IconCheck-DgTGwIHb.js","./Select-zmZD4YxI.css"])))=>i.map(i=>d[i]);
import{_ as ze}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as o,R as Ae}from"./index-D4H_InIO.js";import{D as c}from"./Drawer-CJqTAku3.js";import{B as n}from"./Button-CoP_mZBT.js";import{B as M}from"./Badge-BhZgywnl.js";import{T as L}from"./TextInput-CRZDgAAp.js";import{M as Pe}from"./Modal-C3Y6YLke.js";import{S as y}from"./Select-Bnkvnb3h.js";const Le={title:"Components/Drawer",component:c,parameters:{layout:"centered",docs:{page:()=>ze(()=>import("./Drawer-CH4BZJUA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url)}},tags:[],argTypes:{title:{control:"text",description:"The title displayed in the drawer header"},size:{options:["small","medium","large"],control:{type:"radio"},description:"The size of the drawer"},position:{options:["right","left"],control:{type:"radio"},description:"The position of the drawer"},showBackButton:{control:"boolean",description:"Show or hide the back button"},showTitle:{control:"boolean",description:"Show or hide the title"},showClose:{control:"boolean",description:"Show or hide the close button"},showFooter:{control:"boolean",description:"Show or hide the footer"},headerPrefix:{control:{type:"text"},description:"Element to display before the title"},headerSuffix:{control:{type:"text"},description:"Element to display after the title"},useSurfaceBackground:{control:"boolean",description:"Whether to use the surface background color (--t-color-surface-background)"},fullHeight:{control:"boolean",description:"Whether to use full viewport height"},contentPadding:{control:"text",description:"Custom padding for the drawer content"},footerVariant:{options:["cancelAndActions","swapAndActions","actionsOnly"],control:{type:"radio"},description:"The footer variant layout"},cancelLabel:{control:"text",description:"Label for the cancel button"},primaryLabel:{control:"text",description:"Label for the primary button"},secondaryLabel:{control:"text",description:"Label for the secondary button"},showPrimaryButton:{control:"boolean",description:"Show or hide the primary button"},showSecondaryButton:{control:"boolean",description:"Show or hide the secondary button"},width:{options:["default","custom"],control:{type:"radio"},description:"The width variant of the drawer"},customWidth:{control:"text",description:'Custom width value (used when width is "custom")'},minWidth:{control:"text",description:"Minimum width for the drawer (default: 25rem/400px)"},maxWidth:{control:"text",description:"Maximum width for the drawer"}}},f={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(c,{...t,open:a,onOpenChange:r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This is a default drawer content."}),e.jsx("p",{children:"You can place any content here."})]})})]})},args:{title:"Drawer Title",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,useSurfaceBackground:!0,fullHeight:!0}},x={render:t=>{const[a,r]=o.useState(!1),[s,u]=o.useState(1),i=()=>{s>1?u(s-1):r(!1)};return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>{r(!0),u(1)},children:"Open Multi-step Drawer"}),e.jsx(c,{...t,open:a,onOpenChange:r,showBackButton:!0,onBackClick:i,title:`Step ${s} of 3`,step:s,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This is step ",s," of a multi-step drawer."]}),s<3&&e.jsx(n,{onClick:()=>u(s+1),style:{marginTop:"16px"},children:"Next Step"})]})})]})},args:{size:"medium",position:"right",showTitle:!0,showClose:!0,showFooter:!1,useSurfaceBackground:!0,fullHeight:!0}},b={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Drawer with Footer"}),e.jsx(c,{...t,open:a,onOpenChange:r,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Save",secondaryLabel:"Secondary",onCancel:()=>r(!1),onPrimary:()=>{alert("Saved!"),r(!1)},onSecondary:()=>alert("Secondary action"),showPrimaryButton:!0,showSecondaryButton:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"This drawer has a footer with action buttons and custom content."}),e.jsx("p",{children:"Click Save or Cancel to close the drawer."})]})})]})},args:{title:"Drawer with Footer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Save",secondaryLabel:"Secondary",showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},w={render:t=>{const[a,r]=o.useState(!1);return Ae.useEffect(()=>{const s=document.documentElement.dir;return document.documentElement.dir="rtl",()=>{document.documentElement.dir=s}},[]),e.jsxs("div",{dir:"rtl",children:[e.jsx(n,{onClick:()=>r(!0),children:"افتح الدرج"}),e.jsx(c,{...t,open:a,onOpenChange:r,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"إلغاء",primaryLabel:"حفظ",secondaryLabel:"ثانوي",onCancel:()=>r(!1),onPrimary:()=>{alert("تم الحفظ!"),r(!1)},onSecondary:()=>alert("إجراء ثانوي"),showPrimaryButton:!0,showSecondaryButton:!0,children:e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("p",{children:"هذا محتوى الدرج باللغة العربية."}),e.jsx("p",{children:"يمكنك وضع أي محتوى هنا."})]})})]})},args:{title:"عنوان الدرج",size:"medium",position:"right",showBackButton:!0,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"إلغاء",primaryLabel:"حفظ",secondaryLabel:"ثانوي",showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},S={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Full Height Drawer"}),e.jsx(c,{...t,open:a,onOpenChange:r,fullHeight:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"This drawer spans the full height of the viewport."}),e.jsx("p",{children:"It's ideal for displaying large amounts of content or for applications that need the drawer to match the page height."}),e.jsx("div",{style:{height:"1000px",background:"var(--t-color-fill-brand-secondary)",marginTop:"20px",padding:"20px"},children:e.jsx("p",{children:"This content area can be scrolled while the header and footer remain fixed."})})]})})]})},args:{title:"Full Height Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Save",secondaryLabel:"Secondary",onCancel:()=>{},onPrimary:()=>alert("Saved!"),onSecondary:()=>{},showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},j={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Cancel and Actions Footer"}),e.jsx(c,{...t,open:a,onOpenChange:r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This footer shows a cancel button on the left and action buttons on the right."}),e.jsx("p",{children:"This is the most common footer pattern for forms and dialogs."})]})})]})},args:{title:"Cancel and Actions Footer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Save Changes",secondaryLabel:"Save Draft",showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},C={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Swap and Actions Footer"}),e.jsx(c,{...t,open:a,onOpenChange:r,swapContent:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-200)"},children:e.jsx("span",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-body-sm)"},children:"Status: Draft"})}),children:e.jsxs("div",{children:[e.jsx("p",{children:"This footer shows custom content on the left and action buttons on the right."}),e.jsx("p",{children:"Useful for showing status, metadata, or other contextual information."})]})})]})},args:{title:"Swap and Actions Footer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"swapAndActions",primaryLabel:"Publish",secondaryLabel:"Save Draft",showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},B={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Actions Only Footer"}),e.jsx(c,{...t,open:a,onOpenChange:r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This footer shows only action buttons aligned to the right."}),e.jsx("p",{children:"Perfect for workflows where canceling is done via the close button or back button."})]})})]})},args:{title:"Actions Only Footer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"actionsOnly",primaryLabel:"Confirm",secondaryLabel:"Review",showPrimaryButton:!0,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},k={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Primary Button Only"}),e.jsx(c,{...t,open:a,onOpenChange:r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This footer shows only a primary action button."}),e.jsx("p",{children:"Used for simple confirmations or single-action workflows."})]})})]})},args:{title:"Primary Button Only",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"actionsOnly",primaryLabel:"Understand",showPrimaryButton:!0,showSecondaryButton:!1,useSurfaceBackground:!0,fullHeight:!0}},T={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Secondary Button Only"}),e.jsx(c,{...t,open:a,onOpenChange:r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This footer shows only a secondary action button."}),e.jsx("p",{children:"Used for less prominent actions or optional workflows."})]})})]})},args:{title:"Secondary Button Only",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"actionsOnly",secondaryLabel:"Maybe Later",showPrimaryButton:!1,showSecondaryButton:!0,useSurfaceBackground:!0,fullHeight:!0}},D={render:t=>{const[a,r]=o.useState(!1),[s,u]=o.useState("35rem"),[i,p]=o.useState("25rem"),[v,g]=o.useState("50rem");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-400)"},children:[e.jsxs("div",{style:{padding:"var(--t-space-400)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-300) 0"},children:"Test Custom Width Settings"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"var(--t-space-300)",marginBottom:"var(--t-space-300)"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--t-space-100)",fontWeight:"600"},children:"Custom Width:"}),e.jsx("input",{type:"text",value:s,onChange:h=>u(h.target.value),style:{width:"100%",padding:"var(--t-space-200)",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-100)"},placeholder:"e.g., 35rem, 600px, 40vw"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--t-space-100)",fontWeight:"600"},children:"Min Width:"}),e.jsx("input",{type:"text",value:i,onChange:h=>p(h.target.value),style:{width:"100%",padding:"var(--t-space-200)",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-100)"},placeholder:"e.g., 25rem, 400px"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--t-space-100)",fontWeight:"600"},children:"Max Width:"}),e.jsx("input",{type:"text",value:v,onChange:h=>g(h.target.value),style:{width:"100%",padding:"var(--t-space-200)",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-100)"},placeholder:"e.g., 50rem, 800px"})]})]}),e.jsxs("div",{style:{padding:"var(--t-space-200)",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-100)",fontSize:"var(--t-font-size-body-sm)",marginBottom:"var(--t-space-300)"},children:[e.jsx("strong",{children:"Current Settings:"}),' width="',s,'", min="',i,'", max="',v,'"']})]}),e.jsx(n,{onClick:()=>r(!0),children:"Test Custom Width Drawer"}),e.jsxs(c,{...t,open:a,onOpenChange:r,width:"custom",customWidth:s,minWidth:i,maxWidth:v,children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",padding:"var(--t-space-300)",marginBottom:"var(--t-space-400)"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Width Testing Drawer"})}),e.jsx("p",{children:"This drawer allows you to test different width configurations in real-time."}),e.jsx("p",{children:"Change the values in the controls above and reopen the drawer to see the effects."})]}),e.jsxs("div",{style:{marginBottom:"var(--t-space-400)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-primary)"},children:"Current Configuration:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Width variant:"})," ",e.jsx("code",{children:"custom"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom width:"})," ",e.jsx("code",{children:s})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Min width:"})," ",e.jsx("code",{children:i})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Max width:"})," ",e.jsx("code",{children:v})]})]})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)",marginBottom:"var(--t-space-400)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Try These Examples:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"30rem"})," - Fixed rem-based width"]}),e.jsxs("li",{children:[e.jsx("code",{children:"500px"})," - Fixed pixel width"]}),e.jsxs("li",{children:[e.jsx("code",{children:"40vw"})," - Viewport width percentage"]}),e.jsxs("li",{children:[e.jsx("code",{children:"clamp(25rem, 40vw, 50rem)"})," - Responsive width"]})]})]}),e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-tertiary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:e.jsxs("p",{style:{margin:0,fontSize:"var(--t-font-size-body-sm)"},children:[e.jsx("strong",{children:"Note:"})," The drawer will always respect the minimum width constraint. If your custom width is smaller than the minimum, the minimum will be used instead."]})})]})]})},args:{title:"Width Testing Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Close",primaryLabel:"Apply Changes",showPrimaryButton:!0,showSecondaryButton:!1,width:"custom",customWidth:"35rem",minWidth:"25rem",maxWidth:"50rem",useSurfaceBackground:!0,fullHeight:!0}},O={render:t=>{const[a,r]=o.useState(!1),[s,u]=o.useState(!0),[i,p]=o.useState(!0),[v,g]=o.useState("badge"),[h,F]=o.useState("action"),W=()=>{if(!s)return null;switch(v){case"badge":return e.jsx(M,{tone:"info",children:"Draft"});case"status":return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-100)"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"var(--t-color-status-success)"}}),e.jsx("span",{style:{fontSize:"var(--t-font-size-body-sm)",color:"var(--t-color-text-secondary)"},children:"Active"})]});case"icon":return e.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"var(--t-border-radius-100)",backgroundColor:"var(--t-color-fill-secondary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"},children:"📄"});case"textinput":return e.jsx(L,{placeholder:"Search...",size:"xsmall",hideLabel:!0,style:{minWidth:"120px"}});default:return null}},R=()=>{if(!i)return null;switch(h){case"action":return e.jsx(n,{variant:"plain",size:"xSmall",tone:"neutral",children:"Edit"});case"badge":return e.jsx(M,{tone:"warning",children:"Updated"});case"menu":return e.jsx(n,{variant:"plain",size:"xSmall",tone:"neutral",prefixIcon:"⋯"});case"textinput":return e.jsx(L,{placeholder:"Filter...",size:"xsmall",hideLabel:!0,style:{minWidth:"100px"}});default:return null}};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-400)"},children:[e.jsxs("div",{style:{padding:"var(--t-space-400)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-300) 0"},children:"Header Swappable Areas Configuration"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--t-space-400)",marginBottom:"var(--t-space-300)"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Header Prefix (Left Area)"}),e.jsx("div",{style:{marginBottom:"var(--t-space-200)"},children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-100)"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:m=>u(m.target.checked)}),"Show Prefix"]})}),s&&e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--t-space-100)",fontWeight:"600"},children:"Type:"}),e.jsxs("select",{value:v,onChange:m=>g(m.target.value),style:{width:"100%",padding:"var(--t-space-100)",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-100)"},children:[e.jsx("option",{value:"badge",children:"Status Badge"}),e.jsx("option",{value:"status",children:"Status Indicator"}),e.jsx("option",{value:"icon",children:"Document Icon"}),e.jsx("option",{value:"textinput",children:"Text Input"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Header Suffix (Right Area)"}),e.jsx("div",{style:{marginBottom:"var(--t-space-200)"},children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-100)"},children:[e.jsx("input",{type:"checkbox",checked:i,onChange:m=>p(m.target.checked)}),"Show Suffix"]})}),i&&e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"var(--t-space-100)",fontWeight:"600"},children:"Type:"}),e.jsxs("select",{value:h,onChange:m=>F(m.target.value),style:{width:"100%",padding:"var(--t-space-100)",border:"1px solid var(--t-color-border-primary)",borderRadius:"var(--t-border-radius-100)"},children:[e.jsx("option",{value:"action",children:"Action Button"}),e.jsx("option",{value:"badge",children:"Info Badge"}),e.jsx("option",{value:"menu",children:"Menu Button"}),e.jsx("option",{value:"textinput",children:"Text Input"})]})]})]})]}),e.jsxs("div",{style:{padding:"var(--t-space-200)",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-100)",fontSize:"var(--t-font-size-body-sm)"},children:[e.jsx("strong",{children:"Current Config:"}),"Prefix: ",s?v:"none"," | Suffix: ",i?h:"none"]})]}),e.jsx(n,{onClick:()=>r(!0),children:"Test Header Swappable Areas"}),e.jsxs(c,{...t,open:a,onOpenChange:r,headerPrefix:W(),headerSuffix:R(),children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",padding:"var(--t-space-300)",marginBottom:"var(--t-space-400)"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Header Swappable Areas Demo"})}),e.jsx("p",{children:"This drawer demonstrates the two customizable header areas that can be swapped with different content."})]}),e.jsxs("div",{style:{marginBottom:"var(--t-space-400)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-primary)"},children:"Header Layout:"}),e.jsx("div",{style:{padding:"var(--t-space-300)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)",fontFamily:"monospace",fontSize:"var(--t-font-size-body-sm)"},children:"[Group 1: Back Title Prefix] [Group 2: Suffix Close]"})]}),e.jsxs("div",{style:{marginBottom:"var(--t-space-400)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Header Groups:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Group 1 (Left):"})," Back button, Title, Prefix - all with var(--t-space-200) gaps"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Group 2 (Right):"})," Suffix, Close button - with var(--t-space-200) gap"]})]})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)",marginBottom:"var(--t-space-400)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Common Use Cases:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Status badges:"})," Draft, Published, Updated"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Action buttons:"})," Edit, Share, More options"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Indicators:"})," Status dots, progress indicators"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Icons:"})," File type, priority level"]})]})]}),e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-tertiary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:e.jsxs("p",{style:{margin:0,fontSize:"var(--t-font-size-body-sm)"},children:[e.jsx("strong",{children:"Note:"})," Both areas are optional and automatically adjust the title width to prevent text overflow."]})})]})]})},args:{title:"Document Title",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,useSurfaceBackground:!0,fullHeight:!0}},z={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Default Width Drawer"}),e.jsxs(c,{...t,open:a,onOpenChange:r,children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",padding:"var(--t-space-300)",marginBottom:"var(--t-space-400)"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Default Width Demo"})}),e.jsxs("p",{children:["This drawer uses the default width of ",e.jsx("code",{children:"28.125rem"})," (450px)."]}),e.jsxs("p",{children:["The minimum width is always ",e.jsx("code",{children:"25rem"})," (400px) to ensure usability."]})]}),e.jsxs("div",{style:{marginBottom:"var(--t-space-400)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-primary)"},children:"Width Configuration:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Width variant:"})," ",e.jsx("code",{children:"default"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default width:"})," ",e.jsx("code",{children:"28.125rem"})," (450px)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Min width:"})," ",e.jsx("code",{children:"25rem"})," (400px)"]})]})]}),e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:e.jsx("p",{style:{margin:0},children:"This is the recommended width for most use cases, providing a good balance between content space and screen real estate."})})]})]})},args:{title:"Default Width Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,width:"default",useSurfaceBackground:!0,fullHeight:!0}},A={render:t=>{const[a,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open with Custom Padding"}),e.jsxs(c,{...t,open:a,onOpenChange:r,contentPadding:"var(--t-space-600)",children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",padding:"var(--t-space-300)",marginBottom:"var(--t-space-400)"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Custom Content Padding Demo"})}),e.jsxs("p",{children:["This drawer uses ",e.jsx("code",{children:"var(--t-space-600)"})," (24px) for content padding instead of the default ",e.jsx("code",{children:"var(--t-space-500)"})," (20px)."]})]}),e.jsxs("div",{style:{marginBottom:"var(--t-space-400)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-primary)"},children:"Available Spacing Tokens:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"var(--t-space-300)"})," = 12px (0.75rem)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var(--t-space-400)"})," = 16px (1rem)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var(--t-space-500)"})," = 20px (1.25rem) - default"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var(--t-space-600)"})," = 24px (1.5rem) - current"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var(--t-space-700)"})," = 32px (2rem)"]})]})]}),e.jsx("div",{style:{backgroundColor:"var(--t-color-surface-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:e.jsxs("p",{style:{margin:0},children:["You can also use custom values like ",e.jsx("code",{children:'"2rem 1rem"'})," for different horizontal and vertical padding."]})})]})]})},args:{title:"Custom Padding Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,useSurfaceBackground:!0,fullHeight:!0,contentPadding:"var(--t-space-600)"}},P={render:t=>{const[a,r]=o.useState(!1),[s,u]=o.useState(!1),[i,p]=o.useState({name:"",email:"",company:"",position:"",department:"",experience:"",skills:"",location:""}),v=()=>{console.log("Modal form submitted:",i),u(!1)},g=()=>{r(!1),u(!1)},h=[{value:"tech-corp",label:"TechCorp Inc."},{value:"design-studio",label:"Design Studio Ltd."},{value:"startup-inc",label:"Startup Inc."},{value:"enterprise-co",label:"Enterprise Co."},{value:"innovation-labs",label:"Innovation Labs"}],F=[{value:"frontend",label:"Frontend Developer"},{value:"backend",label:"Backend Developer"},{value:"fullstack",label:"Full Stack Developer"},{value:"designer",label:"UI/UX Designer"},{value:"product-manager",label:"Product Manager"},{value:"data-scientist",label:"Data Scientist"}],W=[{value:"engineering",label:"Engineering"},{value:"design",label:"Design"},{value:"product",label:"Product"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"}],R=[{value:"junior",label:"Junior (0-2 years)"},{value:"mid",label:"Mid-level (2-5 years)"},{value:"senior",label:"Senior (5-8 years)"},{value:"lead",label:"Lead (8+ years)"},{value:"principal",label:"Principal (10+ years)"}],m=[{value:"react",label:"React"},{value:"vue",label:"Vue.js"},{value:"angular",label:"Angular"},{value:"node",label:"Node.js"},{value:"python",label:"Python"},{value:"typescript",label:"TypeScript"},{value:"figma",label:"Figma"},{value:"sketch",label:"Sketch"}],Oe=[{value:"us-ny",label:"New York, USA"},{value:"us-sf",label:"San Francisco, USA"},{value:"uk-london",label:"London, UK"},{value:"de-berlin",label:"Berlin, Germany"},{value:"ca-toronto",label:"Toronto, Canada"},{value:"au-sydney",label:"Sydney, Australia"},{value:"sg-singapore",label:"Singapore"},{value:"jp-tokyo",label:"Tokyo, Japan"}];return e.jsxs("div",{children:[e.jsxs("div",{style:{padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-critical-secondary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-critical)",marginBottom:"var(--t-space-400)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-critical)"},children:"🧪 Ultimate Z-Index Stress Test"}),e.jsxs("p",{style:{margin:"0",fontSize:"var(--t-font-size-350)"},children:["This test creates the most complex layering scenario: ",e.jsx("strong",{children:"Drawer → Modal → Select dropdowns"})]}),e.jsx("p",{style:{margin:"var(--t-space-200) 0 0 0",fontSize:"var(--t-font-size-300)",fontStyle:"italic"},children:"All Select dropdowns should appear above both the Modal overlay AND the Drawer overlay."})]}),e.jsx(n,{onClick:()=>r(!0),children:"🚀 Start Z-Index Stress Test"}),e.jsx(c,{...t,open:a,onOpenChange:g,title:"Employee Management",showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Close",primaryLabel:"View All Employees",showPrimaryButton:!0,showSecondaryButton:!1,onCancel:g,onPrimary:()=>console.log("View all employees"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-400)"},children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",padding:"var(--t-space-300)"},children:[e.jsx("h3",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Employee Management Dashboard"}),e.jsx("p",{style:{margin:0},children:"Manage employee information and add new team members to your organization."})]}),e.jsxs("div",{style:{padding:"var(--t-space-300)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Quick Actions"}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-200)"},children:[e.jsx(n,{variant:"tonal",size:"medium",children:"Import Employees"}),e.jsx(n,{variant:"tonal",size:"medium",children:"Export Data"}),e.jsx(Pe,{trigger:e.jsx(n,{variant:"primary",size:"medium",children:"➕ Add New Employee"}),open:s,onOpenChange:u,title:"Add New Employee",width:"large",footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Add Employee",showPrimaryButton:!0,showSecondaryButton:!1,onCancel:()=>u(!1),onPrimary:v,children:e.jsxs("div",{style:{padding:"var(--t-space-400)",display:"flex",flexDirection:"column",gap:"var(--t-space-400)"},children:[e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-warning-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-warning)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-100) 0",color:"var(--t-color-text-warning)"},children:"⚡ Z-Index Test in Progress"}),e.jsx("p",{style:{margin:0,fontSize:"var(--t-font-size-300)"},children:"This Modal is inside a Drawer. All Select dropdowns below should appear above BOTH overlays."})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--t-space-300)"},children:[e.jsx(L,{label:"Full Name",placeholder:"Enter full name",value:i.name,onChange:l=>p(d=>({...d,name:l.target.value})),required:!0}),e.jsx(L,{label:"Email Address",type:"email",placeholder:"Enter email",value:i.email,onChange:l=>p(d=>({...d,email:l.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--t-space-300)"},children:[e.jsx(y,{label:"Company",placeholder:"Select company...",options:h,value:i.company,onValueChange:l=>p(d=>({...d,company:l})),helpText:"🎯 Test: Should appear above Drawer + Modal"}),e.jsx(y,{label:"Position",placeholder:"Select position...",options:F,value:i.position,onValueChange:l=>p(d=>({...d,position:l})),searchable:!0,searchPlaceholder:"Search positions...",helpText:"🔍 Searchable dropdown test"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--t-space-300)"},children:[e.jsx(y,{label:"Department",placeholder:"Select department...",options:W,value:i.department,onValueChange:l=>p(d=>({...d,department:l}))}),e.jsx(y,{label:"Experience Level",placeholder:"Select experience...",options:R,value:i.experience,onValueChange:l=>p(d=>({...d,experience:l}))})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--t-space-300)"},children:[e.jsx(y,{label:"Primary Skills",placeholder:"Select primary skill...",options:m,value:i.skills,onValueChange:l=>p(d=>({...d,skills:l})),searchable:!0,searchPlaceholder:"Search skills..."}),e.jsx(y,{label:"Location",placeholder:"Select location...",options:Oe,value:i.location,onValueChange:l=>p(d=>({...d,location:l})),searchable:!0,searchPlaceholder:"Search locations..."})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-success-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-success)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-100) 0",color:"var(--t-color-text-success)"},children:"✅ Z-Index Hierarchy Test"}),e.jsx("p",{style:{margin:0,fontSize:"var(--t-font-size-300)"},children:"Expected layering (bottom to top):"}),e.jsxs("ol",{style:{margin:"var(--t-space-100) 0 0 0",paddingLeft:"var(--t-space-400)",fontSize:"var(--t-font-size-300)"},children:[e.jsx("li",{children:"Drawer overlay (z-index: ~1000)"}),e.jsx("li",{children:"Modal overlay (z-index: 1050)"}),e.jsx("li",{children:"Modal content (z-index: 1051)"}),e.jsx("li",{children:e.jsx("strong",{children:"Select dropdowns (z-index: 2147483647)"})})]})]})]})})]})]}),e.jsxs("div",{style:{padding:"var(--t-space-300)",backgroundColor:"var(--t-color-surface-tertiary)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0"},children:"Recent Employees"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:[{name:"Sarah Johnson",role:"Frontend Developer",dept:"Engineering"},{name:"Mike Chen",role:"UI Designer",dept:"Design"},{name:"Alex Rodriguez",role:"Product Manager",dept:"Product"}].map((l,d)=>e.jsxs("div",{style:{padding:"var(--t-space-200)",backgroundColor:"var(--t-color-surface-primary)",borderRadius:"var(--t-border-radius-100)",border:"1px solid var(--t-color-border-secondary)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"var(--t-font-weight-medium)"},children:l.name}),e.jsxs("div",{style:{fontSize:"var(--t-font-size-300)",color:"var(--t-color-text-secondary)"},children:[l.role," • ",l.dept]})]}),e.jsx(n,{variant:"plain",size:"xSmall",tone:"neutral",children:"Edit"})]},d))})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-magic-secondary)",padding:"var(--t-space-300)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-magic)"},children:[e.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0",color:"var(--t-color-text-magic)"},children:"🧪 Test Instructions"}),e.jsxs("ol",{style:{margin:0,paddingLeft:"var(--t-space-400)",fontSize:"var(--t-font-size-300)"},children:[e.jsx("li",{children:'Click "Add New Employee" to open the Modal'}),e.jsx("li",{children:"Try opening each Select dropdown in the form"}),e.jsx("li",{children:"Verify dropdowns appear above BOTH overlays"}),e.jsx("li",{children:"Test searchable Select components"}),e.jsx("li",{children:"Try scrolling within dropdowns"})]})]})]})})]})},args:{size:"large",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,useSurfaceBackground:!0,fullHeight:!0},parameters:{docs:{description:{story:"Ultimate z-index stress test: Drawer → Modal → Select. Tests the most complex layering scenario where Select dropdowns must appear above both Drawer and Modal overlays."}}}};var H,I,E;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div>
            <p>This is a default drawer content.</p>
            <p>You can place any content here.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Drawer Title',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(E=(I=f.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var V,U,N;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const handleBack = () => {
      if (step > 1) {
        setStep(step - 1);
      } else {
        setOpen(false);
      }
    };
    return <div>
        <Button onClick={() => {
        setOpen(true);
        setStep(1);
      }}>Open Multi-step Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showBackButton={true} onBackClick={handleBack} title={\`Step \${step} of 3\`} step={step}>
          <div>
            <p>This is step {step} of a multi-step drawer.</p>
            {step < 3 && <Button onClick={() => setStep(step + 1)} style={{
            marginTop: '16px'
          }}>
                Next Step
              </Button>}
          </div>
        </Drawer>
      </div>;
  },
  args: {
    size: 'medium',
    position: 'right',
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(N=(U=x.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var _,G,Z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Footer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showFooter={true} footerVariant="cancelAndActions" cancelLabel="Cancel" primaryLabel="Save" secondaryLabel="Secondary" onCancel={() => setOpen(false)} onPrimary={() => {
        alert('Saved!');
        setOpen(false);
      }} onSecondary={() => alert('Secondary action')} showPrimaryButton={true} showSecondaryButton={true}>
          <div>
            <p>This drawer has a footer with action buttons and custom content.</p>
            <p>Click Save or Cancel to close the drawer.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Drawer with Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(Z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var J,Y,q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);

    // Toggle direction for this story only
    React.useEffect(() => {
      const originalDir = document.documentElement.dir;
      document.documentElement.dir = 'rtl';
      return () => {
        document.documentElement.dir = originalDir;
      };
    }, []);
    return <div dir="rtl">
        <Button onClick={() => setOpen(true)}>افتح الدرج</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showFooter={true} footerVariant="cancelAndActions" cancelLabel="إلغاء" primaryLabel="حفظ" secondaryLabel="ثانوي" onCancel={() => setOpen(false)} onPrimary={() => {
        alert('تم الحفظ!');
        setOpen(false);
      }} onSecondary={() => alert('إجراء ثانوي')} showPrimaryButton={true} showSecondaryButton={true}>
          <div style={{
          textAlign: 'right'
        }}>
            <p>هذا محتوى الدرج باللغة العربية.</p>
            <p>يمكنك وضع أي محتوى هنا.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'عنوان الدرج',
    size: 'medium',
    position: 'right',
    // will be adjusted to 'left' in RTL
    showBackButton: true,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'إلغاء',
    primaryLabel: 'حفظ',
    secondaryLabel: 'ثانوي',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(q=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Full Height Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} fullHeight={true}>
          <div>
            <p>This drawer spans the full height of the viewport.</p>
            <p>It's ideal for displaying large amounts of content or for applications that need the drawer to match the page height.</p>
            <div style={{
            height: '1000px',
            background: 'var(--t-color-fill-brand-secondary)',
            marginTop: '20px',
            padding: '20px'
          }}>
              <p>This content area can be scrolled while the header and footer remain fixed.</p>
            </div>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Full Height Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save',
    secondaryLabel: 'Secondary',
    onCancel: () => {},
    onPrimary: () => alert('Saved!'),
    onSecondary: () => {},
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,ee,re;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Cancel and Actions Footer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div>
            <p>This footer shows a cancel button on the left and action buttons on the right.</p>
            <p>This is the most common footer pattern for forms and dialogs.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Cancel and Actions Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Save Changes',
    secondaryLabel: 'Save Draft',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Swap and Actions Footer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} swapContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-200)'
      }}>
              <span style={{
          color: 'var(--t-color-text-secondary)',
          fontSize: 'var(--t-font-size-body-sm)'
        }}>
                Status: Draft
              </span>
            </div>}>
          <div>
            <p>This footer shows custom content on the left and action buttons on the right.</p>
            <p>Useful for showing status, metadata, or other contextual information.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Swap and Actions Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'swapAndActions',
    primaryLabel: 'Publish',
    secondaryLabel: 'Save Draft',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,ie;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Actions Only Footer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div>
            <p>This footer shows only action buttons aligned to the right.</p>
            <p>Perfect for workflows where canceling is done via the close button or back button.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Actions Only Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    primaryLabel: 'Confirm',
    secondaryLabel: 'Review',
    showPrimaryButton: true,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(ie=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,de,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Primary Button Only</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div>
            <p>This footer shows only a primary action button.</p>
            <p>Used for simple confirmations or single-action workflows.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Primary Button Only',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    primaryLabel: 'Understand',
    showPrimaryButton: true,
    showSecondaryButton: false,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Secondary Button Only</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div>
            <p>This footer shows only a secondary action button.</p>
            <p>Used for less prominent actions or optional workflows.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Secondary Button Only',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'actionsOnly',
    secondaryLabel: 'Maybe Later',
    showPrimaryButton: false,
    showSecondaryButton: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ve,me,ge;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [customWidth, setCustomWidth] = useState('35rem');
    const [minWidth, setMinWidth] = useState('25rem');
    const [maxWidth, setMaxWidth] = useState('50rem');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--t-space-400)'
    }}>
        <div style={{
        padding: 'var(--t-space-400)',
        backgroundColor: 'var(--t-color-surface-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        border: '1px solid var(--t-color-border-secondary)'
      }}>
          <h3 style={{
          margin: '0 0 var(--t-space-300) 0'
        }}>Test Custom Width Settings</h3>
          
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 'var(--t-space-300)',
          marginBottom: 'var(--t-space-300)'
        }}>
            <div>
              <label style={{
              display: 'block',
              marginBottom: 'var(--t-space-100)',
              fontWeight: '600'
            }}>Custom Width:</label>
              <input type="text" value={customWidth} onChange={e => setCustomWidth(e.target.value)} style={{
              width: '100%',
              padding: 'var(--t-space-200)',
              border: '1px solid var(--t-color-border-primary)',
              borderRadius: 'var(--t-border-radius-100)'
            }} placeholder="e.g., 35rem, 600px, 40vw" />
            </div>
            
            <div>
              <label style={{
              display: 'block',
              marginBottom: 'var(--t-space-100)',
              fontWeight: '600'
            }}>Min Width:</label>
              <input type="text" value={minWidth} onChange={e => setMinWidth(e.target.value)} style={{
              width: '100%',
              padding: 'var(--t-space-200)',
              border: '1px solid var(--t-color-border-primary)',
              borderRadius: 'var(--t-border-radius-100)'
            }} placeholder="e.g., 25rem, 400px" />
            </div>
            
            <div>
              <label style={{
              display: 'block',
              marginBottom: 'var(--t-space-100)',
              fontWeight: '600'
            }}>Max Width:</label>
              <input type="text" value={maxWidth} onChange={e => setMaxWidth(e.target.value)} style={{
              width: '100%',
              padding: 'var(--t-space-200)',
              border: '1px solid var(--t-color-border-primary)',
              borderRadius: 'var(--t-border-radius-100)'
            }} placeholder="e.g., 50rem, 800px" />
            </div>
          </div>
          
          <div style={{
          padding: 'var(--t-space-200)',
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-100)',
          fontSize: 'var(--t-font-size-body-sm)',
          marginBottom: 'var(--t-space-300)'
        }}>
            <strong>Current Settings:</strong> width="{customWidth}", min="{minWidth}", max="{maxWidth}"
          </div>
        </div>

        <Button onClick={() => setOpen(true)}>Test Custom Width Drawer</Button>
        
        <Drawer {...args} open={open} onOpenChange={setOpen} width="custom" customWidth={customWidth} minWidth={minWidth} maxWidth={maxWidth}>
          <div style={{
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          padding: 'var(--t-space-300)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <p><strong>Width Testing Drawer</strong></p>
            <p>This drawer allows you to test different width configurations in real-time.</p>
            <p>Change the values in the controls above and reopen the drawer to see the effects.</p>
          </div>
          
          <div style={{
          marginBottom: 'var(--t-space-400)'
        }}>
            <h3 style={{
            margin: '0 0 var(--t-space-200) 0',
            color: 'var(--t-color-text-primary)'
          }}>Current Configuration:</h3>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><strong>Width variant:</strong> <code>custom</code></li>
              <li><strong>Custom width:</strong> <code>{customWidth}</code></li>
              <li><strong>Min width:</strong> <code>{minWidth}</code></li>
              <li><strong>Max width:</strong> <code>{maxWidth}</code></li>
            </ul>
          </div>
          
          <div style={{
          backgroundColor: 'var(--t-color-surface-secondary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <h4 style={{
            margin: '0 0 var(--t-space-200) 0'
          }}>Try These Examples:</h4>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><code>30rem</code> - Fixed rem-based width</li>
              <li><code>500px</code> - Fixed pixel width</li>
              <li><code>40vw</code> - Viewport width percentage</li>
              <li><code>clamp(25rem, 40vw, 50rem)</code> - Responsive width</li>
            </ul>
          </div>

          <div style={{
          backgroundColor: 'var(--t-color-surface-tertiary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
            <p style={{
            margin: 0,
            fontSize: 'var(--t-font-size-body-sm)'
          }}>
              <strong>Note:</strong> The drawer will always respect the minimum width constraint. 
              If your custom width is smaller than the minimum, the minimum will be used instead.
            </p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Width Testing Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Close',
    primaryLabel: 'Apply Changes',
    showPrimaryButton: true,
    showSecondaryButton: false,
    width: 'custom',
    customWidth: '35rem',
    minWidth: '25rem',
    maxWidth: '50rem',
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(ge=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,fe,xe;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [showPrefix, setShowPrefix] = useState(true);
    const [showSuffix, setShowSuffix] = useState(true);
    const [prefixType, setPrefixType] = useState('badge');
    const [suffixType, setSuffixType] = useState('action');
    const createPrefixContent = () => {
      if (!showPrefix) return null;
      switch (prefixType) {
        case 'badge':
          return <Badge tone="info">
              Draft
            </Badge>;
        case 'status':
          return <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--t-space-100)'
          }}>
              <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--t-color-status-success)'
            }} />
              <span style={{
              fontSize: 'var(--t-font-size-body-sm)',
              color: 'var(--t-color-text-secondary)'
            }}>
                Active
              </span>
            </div>;
        case 'icon':
          return <div style={{
            width: '24px',
            height: '24px',
            borderRadius: 'var(--t-border-radius-100)',
            backgroundColor: 'var(--t-color-fill-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }}>
              📄
            </div>;
        case 'textinput':
          return <TextInput placeholder="Search..." size="xsmall" hideLabel style={{
            minWidth: '120px'
          }} />;
        default:
          return null;
      }
    };
    const createSuffixContent = () => {
      if (!showSuffix) return null;
      switch (suffixType) {
        case 'action':
          return <Button variant="plain" size="xSmall" tone="neutral">
              Edit
            </Button>;
        case 'badge':
          return <Badge tone="warning">
              Updated
            </Badge>;
        case 'menu':
          return <Button variant="plain" size="xSmall" tone="neutral" prefixIcon="⋯">
            </Button>;
        case 'textinput':
          return <TextInput placeholder="Filter..." size="xsmall" hideLabel style={{
            minWidth: '100px'
          }} />;
        default:
          return null;
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--t-space-400)'
    }}>
        <div style={{
        padding: 'var(--t-space-400)',
        backgroundColor: 'var(--t-color-surface-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        border: '1px solid var(--t-color-border-secondary)'
      }}>
          <h3 style={{
          margin: '0 0 var(--t-space-300) 0'
        }}>Header Swappable Areas Configuration</h3>
          
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--t-space-400)',
          marginBottom: 'var(--t-space-300)'
        }}>
            <div>
              <h4 style={{
              margin: '0 0 var(--t-space-200) 0'
            }}>Header Prefix (Left Area)</h4>
              <div style={{
              marginBottom: 'var(--t-space-200)'
            }}>
                <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--t-space-100)'
              }}>
                  <input type="checkbox" checked={showPrefix} onChange={e => setShowPrefix(e.target.checked)} />
                  Show Prefix
                </label>
              </div>
              {showPrefix && <div>
                  <label style={{
                display: 'block',
                marginBottom: 'var(--t-space-100)',
                fontWeight: '600'
              }}>Type:</label>
                  <select value={prefixType} onChange={e => setPrefixType(e.target.value)} style={{
                width: '100%',
                padding: 'var(--t-space-100)',
                border: '1px solid var(--t-color-border-primary)',
                borderRadius: 'var(--t-border-radius-100)'
              }}>
                    <option value="badge">Status Badge</option>
                    <option value="status">Status Indicator</option>
                    <option value="icon">Document Icon</option>
                    <option value="textinput">Text Input</option>
                  </select>
                </div>}
            </div>
            
            <div>
              <h4 style={{
              margin: '0 0 var(--t-space-200) 0'
            }}>Header Suffix (Right Area)</h4>
              <div style={{
              marginBottom: 'var(--t-space-200)'
            }}>
                <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--t-space-100)'
              }}>
                  <input type="checkbox" checked={showSuffix} onChange={e => setShowSuffix(e.target.checked)} />
                  Show Suffix
                </label>
              </div>
              {showSuffix && <div>
                  <label style={{
                display: 'block',
                marginBottom: 'var(--t-space-100)',
                fontWeight: '600'
              }}>Type:</label>
                  <select value={suffixType} onChange={e => setSuffixType(e.target.value)} style={{
                width: '100%',
                padding: 'var(--t-space-100)',
                border: '1px solid var(--t-color-border-primary)',
                borderRadius: 'var(--t-border-radius-100)'
              }}>
                    <option value="action">Action Button</option>
                    <option value="badge">Info Badge</option>
                    <option value="menu">Menu Button</option>
                    <option value="textinput">Text Input</option>
                  </select>
                </div>}
            </div>
          </div>
          
          <div style={{
          padding: 'var(--t-space-200)',
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-100)',
          fontSize: 'var(--t-font-size-body-sm)'
        }}>
            <strong>Current Config:</strong> 
            Prefix: {showPrefix ? prefixType : 'none'} | 
            Suffix: {showSuffix ? suffixType : 'none'}
          </div>
        </div>

        <Button onClick={() => setOpen(true)}>Test Header Swappable Areas</Button>
        
        <Drawer {...args} open={open} onOpenChange={setOpen} headerPrefix={createPrefixContent()} headerSuffix={createSuffixContent()}>
          <div style={{
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          padding: 'var(--t-space-300)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <p><strong>Header Swappable Areas Demo</strong></p>
            <p>This drawer demonstrates the two customizable header areas that can be swapped with different content.</p>
          </div>
          
          <div style={{
          marginBottom: 'var(--t-space-400)'
        }}>
            <h3 style={{
            margin: '0 0 var(--t-space-200) 0',
            color: 'var(--t-color-text-primary)'
          }}>Header Layout:</h3>
            <div style={{
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)',
            fontFamily: 'monospace',
            fontSize: 'var(--t-font-size-body-sm)'
          }}>
              [Group 1: Back Title Prefix] [Group 2: Suffix Close]
            </div>
          </div>
          
          <div style={{
          marginBottom: 'var(--t-space-400)'
        }}>
            <h4 style={{
            margin: '0 0 var(--t-space-200) 0'
          }}>Header Groups:</h4>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><strong>Group 1 (Left):</strong> Back button, Title, Prefix - all with var(--t-space-200) gaps</li>
              <li><strong>Group 2 (Right):</strong> Suffix, Close button - with var(--t-space-200) gap</li>
            </ul>
          </div>

          <div style={{
          backgroundColor: 'var(--t-color-surface-secondary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <h4 style={{
            margin: '0 0 var(--t-space-200) 0'
          }}>Common Use Cases:</h4>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><strong>Status badges:</strong> Draft, Published, Updated</li>
              <li><strong>Action buttons:</strong> Edit, Share, More options</li>
              <li><strong>Indicators:</strong> Status dots, progress indicators</li>
              <li><strong>Icons:</strong> File type, priority level</li>
            </ul>
          </div>

          <div style={{
          backgroundColor: 'var(--t-color-surface-tertiary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
            <p style={{
            margin: 0,
            fontSize: 'var(--t-font-size-body-sm)'
          }}>
              <strong>Note:</strong> Both areas are optional and automatically adjust the title width to prevent text overflow.
            </p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Document Title',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(xe=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var be,we,Se;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Default Width Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div style={{
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          padding: 'var(--t-space-300)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <p><strong>Default Width Demo</strong></p>
            <p>This drawer uses the default width of <code>28.125rem</code> (450px).</p>
            <p>The minimum width is always <code>25rem</code> (400px) to ensure usability.</p>
          </div>
          
          <div style={{
          marginBottom: 'var(--t-space-400)'
        }}>
            <h3 style={{
            margin: '0 0 var(--t-space-200) 0',
            color: 'var(--t-color-text-primary)'
          }}>Width Configuration:</h3>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><strong>Width variant:</strong> <code>default</code></li>
              <li><strong>Default width:</strong> <code>28.125rem</code> (450px)</li>
              <li><strong>Min width:</strong> <code>25rem</code> (400px)</li>
            </ul>
          </div>
          
          <div style={{
          backgroundColor: 'var(--t-color-surface-secondary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
            <p style={{
            margin: 0
          }}>This is the recommended width for most use cases, providing a good balance between content space and screen real estate.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Default Width Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    width: 'default',
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(Se=(we=z.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var je,Ce,Be;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open with Custom Padding</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} contentPadding="var(--t-space-600)" // 24px padding (1.5rem)
      >
          <div style={{
          backgroundColor: 'var(--t-color-fill-brand-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          padding: 'var(--t-space-300)',
          marginBottom: 'var(--t-space-400)'
        }}>
            <p><strong>Custom Content Padding Demo</strong></p>
            <p>This drawer uses <code>var(--t-space-600)</code> (24px) for content padding instead of the default <code>var(--t-space-500)</code> (20px).</p>
          </div>
          
          <div style={{
          marginBottom: 'var(--t-space-400)'
        }}>
            <h3 style={{
            margin: '0 0 var(--t-space-200) 0',
            color: 'var(--t-color-text-primary)'
          }}>Available Spacing Tokens:</h3>
            <ul style={{
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li><code>var(--t-space-300)</code> = 12px (0.75rem)</li>
              <li><code>var(--t-space-400)</code> = 16px (1rem)</li>
              <li><code>var(--t-space-500)</code> = 20px (1.25rem) - default</li>
              <li><code>var(--t-space-600)</code> = 24px (1.5rem) - current</li>
              <li><code>var(--t-space-700)</code> = 32px (2rem)</li>
            </ul>
          </div>
          
          <div style={{
          backgroundColor: 'var(--t-color-surface-secondary)',
          padding: 'var(--t-space-300)',
          borderRadius: 'var(--t-border-radius-200)',
          border: '1px solid var(--t-color-border-secondary)'
        }}>
            <p style={{
            margin: 0
          }}>You can also use custom values like <code>"2rem 1rem"</code> for different horizontal and vertical padding.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Custom Padding Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    useSurfaceBackground: true,
    fullHeight: true,
    contentPadding: 'var(--t-space-600)' // 24px padding
  }
}`,...(Be=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ke,Te,De;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      position: '',
      department: '',
      experience: '',
      skills: '',
      location: ''
    });
    const handleModalSubmit = () => {
      console.log('Modal form submitted:', formData);
      setModalOpen(false);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
      setModalOpen(false); // Close modal when drawer closes
    };

    // Form options
    const companyOptions = [{
      value: 'tech-corp',
      label: 'TechCorp Inc.'
    }, {
      value: 'design-studio',
      label: 'Design Studio Ltd.'
    }, {
      value: 'startup-inc',
      label: 'Startup Inc.'
    }, {
      value: 'enterprise-co',
      label: 'Enterprise Co.'
    }, {
      value: 'innovation-labs',
      label: 'Innovation Labs'
    }];
    const positionOptions = [{
      value: 'frontend',
      label: 'Frontend Developer'
    }, {
      value: 'backend',
      label: 'Backend Developer'
    }, {
      value: 'fullstack',
      label: 'Full Stack Developer'
    }, {
      value: 'designer',
      label: 'UI/UX Designer'
    }, {
      value: 'product-manager',
      label: 'Product Manager'
    }, {
      value: 'data-scientist',
      label: 'Data Scientist'
    }];
    const departmentOptions = [{
      value: 'engineering',
      label: 'Engineering'
    }, {
      value: 'design',
      label: 'Design'
    }, {
      value: 'product',
      label: 'Product'
    }, {
      value: 'marketing',
      label: 'Marketing'
    }, {
      value: 'sales',
      label: 'Sales'
    }, {
      value: 'hr',
      label: 'Human Resources'
    }];
    const experienceOptions = [{
      value: 'junior',
      label: 'Junior (0-2 years)'
    }, {
      value: 'mid',
      label: 'Mid-level (2-5 years)'
    }, {
      value: 'senior',
      label: 'Senior (5-8 years)'
    }, {
      value: 'lead',
      label: 'Lead (8+ years)'
    }, {
      value: 'principal',
      label: 'Principal (10+ years)'
    }];
    const skillsOptions = [{
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue.js'
    }, {
      value: 'angular',
      label: 'Angular'
    }, {
      value: 'node',
      label: 'Node.js'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'figma',
      label: 'Figma'
    }, {
      value: 'sketch',
      label: 'Sketch'
    }];
    const locationOptions = [{
      value: 'us-ny',
      label: 'New York, USA'
    }, {
      value: 'us-sf',
      label: 'San Francisco, USA'
    }, {
      value: 'uk-london',
      label: 'London, UK'
    }, {
      value: 'de-berlin',
      label: 'Berlin, Germany'
    }, {
      value: 'ca-toronto',
      label: 'Toronto, Canada'
    }, {
      value: 'au-sydney',
      label: 'Sydney, Australia'
    }, {
      value: 'sg-singapore',
      label: 'Singapore'
    }, {
      value: 'jp-tokyo',
      label: 'Tokyo, Japan'
    }];
    return <div>
        <div style={{
        padding: 'var(--t-space-400)',
        backgroundColor: 'var(--t-color-fill-critical-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        border: '1px solid var(--t-color-border-critical)',
        marginBottom: 'var(--t-space-400)'
      }}>
          <h3 style={{
          margin: '0 0 var(--t-space-200) 0',
          color: 'var(--t-color-text-critical)'
        }}>
            🧪 Ultimate Z-Index Stress Test
          </h3>
          <p style={{
          margin: '0',
          fontSize: 'var(--t-font-size-350)'
        }}>
            This test creates the most complex layering scenario: <strong>Drawer → Modal → Select dropdowns</strong>
          </p>
          <p style={{
          margin: 'var(--t-space-200) 0 0 0',
          fontSize: 'var(--t-font-size-300)',
          fontStyle: 'italic'
        }}>
            All Select dropdowns should appear above both the Modal overlay AND the Drawer overlay.
          </p>
        </div>

        <Button onClick={() => setDrawerOpen(true)}>🚀 Start Z-Index Stress Test</Button>
        
        <Drawer {...args} open={drawerOpen} onOpenChange={handleDrawerClose} title="Employee Management" showFooter={true} footerVariant="cancelAndActions" cancelLabel="Close" primaryLabel="View All Employees" showPrimaryButton={true} showSecondaryButton={false} onCancel={handleDrawerClose} onPrimary={() => console.log('View all employees')}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--t-space-400)'
        }}>
            <div style={{
            backgroundColor: 'var(--t-color-fill-brand-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            padding: 'var(--t-space-300)'
          }}>
              <h3 style={{
              margin: '0 0 var(--t-space-200) 0'
            }}>Employee Management Dashboard</h3>
              <p style={{
              margin: 0
            }}>
                Manage employee information and add new team members to your organization.
              </p>
            </div>

            <div style={{
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
              <h4 style={{
              margin: '0 0 var(--t-space-200) 0'
            }}>Quick Actions</h4>
              <div style={{
              display: 'flex',
              gap: 'var(--t-space-200)'
            }}>
                <Button variant="tonal" size="medium">
                  Import Employees
                </Button>
                <Button variant="tonal" size="medium">
                  Export Data
                </Button>
                <Modal trigger={<Button variant="primary" size="medium">
                      ➕ Add New Employee
                    </Button>} open={modalOpen} onOpenChange={setModalOpen} title="Add New Employee" width="large" footerVariant="cancelAndActions" cancelLabel="Cancel" primaryLabel="Add Employee" showPrimaryButton={true} showSecondaryButton={false} onCancel={() => setModalOpen(false)} onPrimary={handleModalSubmit}>
                  <div style={{
                  padding: 'var(--t-space-400)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--t-space-400)'
                }}>
                    <div style={{
                    backgroundColor: 'var(--t-color-fill-warning-secondary)',
                    padding: 'var(--t-space-300)',
                    borderRadius: 'var(--t-border-radius-200)',
                    border: '1px solid var(--t-color-border-warning)'
                  }}>
                      <h4 style={{
                      margin: '0 0 var(--t-space-100) 0',
                      color: 'var(--t-color-text-warning)'
                    }}>
                        ⚡ Z-Index Test in Progress
                      </h4>
                      <p style={{
                      margin: 0,
                      fontSize: 'var(--t-font-size-300)'
                    }}>
                        This Modal is inside a Drawer. All Select dropdowns below should appear above BOTH overlays.
                      </p>
                    </div>

                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--t-space-300)'
                  }}>
                      <TextInput label="Full Name" placeholder="Enter full name" value={formData.name} onChange={e => setFormData(prev => ({
                      ...prev,
                      name: e.target.value
                    }))} required />
                      
                      <TextInput label="Email Address" type="email" placeholder="Enter email" value={formData.email} onChange={e => setFormData(prev => ({
                      ...prev,
                      email: e.target.value
                    }))} required />
                    </div>

                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--t-space-300)'
                  }}>
                      <Select label="Company" placeholder="Select company..." options={companyOptions} value={formData.company} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      company: value
                    }))} helpText="🎯 Test: Should appear above Drawer + Modal" />
                      
                      <Select label="Position" placeholder="Select position..." options={positionOptions} value={formData.position} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      position: value
                    }))} searchable searchPlaceholder="Search positions..." helpText="🔍 Searchable dropdown test" />
                    </div>

                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--t-space-300)'
                  }}>
                      <Select label="Department" placeholder="Select department..." options={departmentOptions} value={formData.department} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      department: value
                    }))} />
                      
                      <Select label="Experience Level" placeholder="Select experience..." options={experienceOptions} value={formData.experience} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      experience: value
                    }))} />
                    </div>

                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--t-space-300)'
                  }}>
                      <Select label="Primary Skills" placeholder="Select primary skill..." options={skillsOptions} value={formData.skills} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      skills: value
                    }))} searchable searchPlaceholder="Search skills..." />
                      
                      <Select label="Location" placeholder="Select location..." options={locationOptions} value={formData.location} onValueChange={value => setFormData(prev => ({
                      ...prev,
                      location: value
                    }))} searchable searchPlaceholder="Search locations..." />
                    </div>

                    <div style={{
                    backgroundColor: 'var(--t-color-fill-success-secondary)',
                    padding: 'var(--t-space-300)',
                    borderRadius: 'var(--t-border-radius-200)',
                    border: '1px solid var(--t-color-border-success)'
                  }}>
                      <h4 style={{
                      margin: '0 0 var(--t-space-100) 0',
                      color: 'var(--t-color-text-success)'
                    }}>
                        ✅ Z-Index Hierarchy Test
                      </h4>
                      <p style={{
                      margin: 0,
                      fontSize: 'var(--t-font-size-300)'
                    }}>
                        Expected layering (bottom to top):
                      </p>
                      <ol style={{
                      margin: 'var(--t-space-100) 0 0 0',
                      paddingLeft: 'var(--t-space-400)',
                      fontSize: 'var(--t-font-size-300)'
                    }}>
                        <li>Drawer overlay (z-index: ~1000)</li>
                        <li>Modal overlay (z-index: 1050)</li>
                        <li>Modal content (z-index: 1051)</li>
                        <li><strong>Select dropdowns (z-index: 2147483647)</strong></li>
                      </ol>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>

            <div style={{
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-surface-tertiary)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
              <h4 style={{
              margin: '0 0 var(--t-space-200) 0'
            }}>Recent Employees</h4>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--t-space-200)'
            }}>
                {[{
                name: 'Sarah Johnson',
                role: 'Frontend Developer',
                dept: 'Engineering'
              }, {
                name: 'Mike Chen',
                role: 'UI Designer',
                dept: 'Design'
              }, {
                name: 'Alex Rodriguez',
                role: 'Product Manager',
                dept: 'Product'
              }].map((employee, index) => <div key={index} style={{
                padding: 'var(--t-space-200)',
                backgroundColor: 'var(--t-color-surface-primary)',
                borderRadius: 'var(--t-border-radius-100)',
                border: '1px solid var(--t-color-border-secondary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                    <div>
                      <div style={{
                    fontWeight: 'var(--t-font-weight-medium)'
                  }}>{employee.name}</div>
                      <div style={{
                    fontSize: 'var(--t-font-size-300)',
                    color: 'var(--t-color-text-secondary)'
                  }}>
                        {employee.role} • {employee.dept}
                      </div>
                    </div>
                    <Button variant="plain" size="xSmall" tone="neutral">
                      Edit
                    </Button>
                  </div>)}
              </div>
            </div>

            <div style={{
            backgroundColor: 'var(--t-color-fill-magic-secondary)',
            padding: 'var(--t-space-300)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-magic)'
          }}>
              <h4 style={{
              margin: '0 0 var(--t-space-200) 0',
              color: 'var(--t-color-text-magic)'
            }}>
                🧪 Test Instructions
              </h4>
              <ol style={{
              margin: 0,
              paddingLeft: 'var(--t-space-400)',
              fontSize: 'var(--t-font-size-300)'
            }}>
                <li>Click "Add New Employee" to open the Modal</li>
                <li>Try opening each Select dropdown in the form</li>
                <li>Verify dropdowns appear above BOTH overlays</li>
                <li>Test searchable Select components</li>
                <li>Try scrolling within dropdowns</li>
              </ol>
            </div>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    size: 'large',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    useSurfaceBackground: true,
    fullHeight: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Ultimate z-index stress test: Drawer → Modal → Select. Tests the most complex layering scenario where Select dropdowns must appear above both Drawer and Modal overlays.'
      }
    }
  }
}`,...(De=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const Fe=["Default","WithBackButton","WithFooter","RTLDrawer","FullHeightDrawer","FooterCancelAndActions","FooterSwapAndActions","FooterActionsOnly","FooterPrimaryOnly","FooterSecondaryOnly","CustomWidthTester","SwappableHeaderAreas","DefaultWidth","CustomPadding","UltimateZIndexTest"],_e=Object.freeze(Object.defineProperty({__proto__:null,CustomPadding:A,CustomWidthTester:D,Default:f,DefaultWidth:z,FooterActionsOnly:B,FooterCancelAndActions:j,FooterPrimaryOnly:k,FooterSecondaryOnly:T,FooterSwapAndActions:C,FullHeightDrawer:S,RTLDrawer:w,SwappableHeaderAreas:O,UltimateZIndexTest:P,WithBackButton:x,WithFooter:b,__namedExportsOrder:Fe,default:Le},Symbol.toStringTag,{value:"Module"}));export{D as C,_e as D,j as F,w as R,O as S,P as U,x as W,f as a,z as b,C as c,B as d,k as e,T as f,A as g,S as h};
