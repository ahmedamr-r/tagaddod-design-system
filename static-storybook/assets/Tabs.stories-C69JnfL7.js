import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as F}from"./index-D4H_InIO.js";import{t as oa,c as da,d as la,T as s,e as i,a,b as r,s as ca}from"./Tabs-CvWue2XV.js";import{I as b}from"./IconHome-DqBDdcGV.js";import{I as p}from"./IconUser-CxX_vdyQ.js";import{I as c}from"./IconSettings-cjygYtAZ.js";import{I as N}from"./IconBell-CK5J1bJB.js";import{I as ia}from"./IconCalendar-DOlNLz5K.js";import{c as ba}from"./createReactComponent-CKk3lApD.js";import{I as pa}from"./IconChartBar-CIBZkQ6D.js";import{I as ga}from"./IconFileText-BstruwGL.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]],M=ba("outline","message","Message",ua),ha={title:"Components/Tabs",component:s,parameters:{layout:"padded",docs:{description:{component:"A set of layered sections of content—known as tab panels—that are displayed one at a time. The component follows WAI-ARIA guidelines for tabs with keyboard navigation support and proper ARIA roles and attributes."}}},tags:[],argTypes:{variant:{control:"select",options:la,description:"Visual appearance style"},fitted:{control:"boolean",description:"Whether tabs should take up full width"},count:{control:"select",options:da,description:"Number of tabs"},orientation:{control:"radio",options:oa,description:"Tab orientation (horizontal or vertical)"},defaultValue:{control:"text",description:"Default selected tab"},dir:{control:"radio",options:["ltr","rtl"],description:"Text direction"},ariaLabel:{control:"text",description:"Accessible label for the tab list"},ariaLabelledby:{control:"text",description:"ID of element that labels the tab list"}},args:{variant:"primary",fitted:!1,count:3,orientation:"horizontal",defaultValue:"tab1",ariaLabel:"Content tabs",children:e.jsx("div",{children:"Tabs content"})}},u={name:"Tabs Playground",render:t=>{const d=(l,g=!1,B=!1)=>{const n=[],$=[e.jsx(b,{size:18}),e.jsx(p,{size:18}),e.jsx(c,{size:18}),e.jsx(N,{size:18}),e.jsx(ia,{size:18}),e.jsx(M,{size:18})],E=o=>t.dir==="rtl"?["الرئيسية","الملف الشخصي","الإعدادات","التنبيهات","التقويم","الرسائل"][o]||`Tab ${o+1}`:["Home","Profile","Settings","Notifications","Calendar","Messages"][o]||`Tab ${o+1}`;for(let o=0;o<l;o++)n.push(e.jsx(a,{value:`tab${o+1}`,icon:g?$[o]:void 0,badge:B&&o===1?"3":void 0,description:`Description for ${E(o)}`,children:E(o)},`tab${o+1}`));return n},W=l=>{const g=[],B=n=>t.dir==="rtl"?["محتوى الرئيسية","محتوى الملف الشخصي","محتوى الإعدادات","محتوى التنبيهات","محتوى التقويم","محتوى الرسائل"][n]||`محتوى التبويب ${n+1}`:`Content for tab ${n+1}`;for(let n=0;n<l;n++)g.push(e.jsx(r,{value:`tab${n+1}`,children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:t.orientation==="vertical"?"200px":"auto"},children:[e.jsx("h4",{children:na(n)}),e.jsx("p",{children:B(n)}),e.jsxs("p",{children:["This tab demonstrates the ",t.variant," variant with ",t.orientation," orientation."]}),t.fitted&&e.jsx("p",{children:"These tabs are fitted to take full width."})]})},`content${n+1}`));return g},na=l=>t.dir==="rtl"?["الرئيسية","الملف الشخصي","الإعدادات","التنبيهات","التقويم","الرسائل"][l]||`Tab ${l+1}`:["Home","Profile","Settings","Notifications","Calendar","Messages"][l]||`Tab ${l+1}`;return t.orientation==="vertical"?e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsxs(s,{...t,children:[e.jsx(i,{children:d(t.count||3,!0,!0)}),W(t.count||3)]})}):e.jsxs(s,{...t,children:[e.jsx(i,{children:d(t.count||3,!0,!0)}),W(t.count||3)]})}},h={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},x={args:{variant:"primary",children:e.jsx("div",{children:"Primary tabs content"})},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab three content"})})]})},f={args:{variant:"secondary"},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab three content"})})]})},v={args:{fitted:!0},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab three content"})})]})},T={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",badge:"3",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content with badge"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},m={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(b,{size:18}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(p,{size:18}),children:"Profile"}),e.jsx(a,{value:"tab3",icon:e.jsx(c,{size:18}),children:"Settings"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Profile tab content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content"})})]})},y={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(b,{size:18}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(N,{size:18}),badge:"5",children:"Notifications"}),e.jsx(a,{value:"tab3",icon:e.jsx(c,{size:18}),children:"Settings"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Notifications tab content with 5 new notifications"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content"})})]})},j={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",disabled:!0,children:"Tab 2 (Disabled)"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content (disabled)"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},C={args:{dir:"rtl"},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(b,{size:18}),children:"الرئيسية"}),e.jsx(a,{value:"tab2",icon:e.jsx(p,{size:18}),badge:"3",children:"الملف الشخصي"}),e.jsx(a,{value:"tab3",icon:e.jsx(c,{size:18}),children:"الإعدادات"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الأول"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الثاني"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الثالث"})})]})},R={args:{orientation:"vertical",variant:"secondary"},render:t=>e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",children:"Security"}),e.jsx(a,{value:"tab3",children:"Notifications"})]}),e.jsx(r,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account information."})]})}),e.jsx(r,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Security Settings"}),e.jsx("p",{children:"Update your password and security preferences."})]})}),e.jsx(r,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Notification Settings"}),e.jsx("p",{children:"Control how you receive notifications."})]})})]})})},k={render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",description:"View and edit your profile information",children:"Profile"}),e.jsx(a,{value:"tab2",description:"Manage account security settings",children:"Security"}),e.jsx(a,{value:"tab3",description:"Configure your notification preferences",children:"Notifications"})]}),e.jsx(r,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"Edit your personal information and preferences."})]})}),e.jsx(r,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Update your password and security settings."})]})}),e.jsx(r,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Control how you receive notifications."})]})})]}),parameters:{docs:{description:{story:"Tabs with descriptions for screen readers. The descriptions are not visible but are announced by screen readers."}}}},w={args:{count:2},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 1 content - 2 tabs total"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 2 content - 2 tabs total"})})]})},L={args:{count:4},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 1 content - 4 tabs total"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 2 content - 4 tabs total"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 3 content - 4 tabs total"})}),e.jsx(r,{value:"tab4",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 4 content - 4 tabs total"})})]})},S={args:{count:6},render:t=>e.jsxs(s,{...t,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(b,{size:16}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(p,{size:16}),children:"Profile"}),e.jsx(a,{value:"tab3",icon:e.jsx(N,{size:16}),children:"Alerts"}),e.jsx(a,{value:"tab4",icon:e.jsx(ia,{size:16}),children:"Calendar"}),e.jsx(a,{value:"tab5",icon:e.jsx(M,{size:16}),children:"Messages"}),e.jsx(a,{value:"tab6",icon:e.jsx(c,{size:16}),children:"Settings"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content - 6 tabs total"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Profile tab content - 6 tabs total"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Alerts tab content - 6 tabs total"})}),e.jsx(r,{value:"tab4",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Calendar tab content - 6 tabs total"})}),e.jsx(r,{value:"tab5",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Messages tab content - 6 tabs total"})}),e.jsx(r,{value:"tab6",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content - 6 tabs total"})})]})},U={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Tab Animation"}),e.jsx("p",{children:"Click different tabs to see the animation in action."}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",ariaLabel:"Animation showcase - primary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 1 Content"}),e.jsx("p",{children:"Notice the slide-in underline animation and the fade-in of this content."})]})}),e.jsx(r,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 2 Content"}),e.jsx("p",{children:"Watch how the underline transitions from Tab 1 to Tab 2."})]})}),e.jsx(r,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 3 Content"}),e.jsx("p",{children:"Smooth animation respects the 'prefers-reduced-motion' setting."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Tab Animation"}),e.jsx("p",{children:"Click different tabs to see the animation in action."}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",ariaLabel:"Animation showcase - secondary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 1 Content"}),e.jsx("p",{children:"Notice the scale-in animation of the tab and fade-in of this content."})]})}),e.jsx(r,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 2 Content"}),e.jsx("p",{children:"Watch how the tab scales in when activated."})]})}),e.jsx(r,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 3 Content"}),e.jsx("p",{children:"The content also has a slight slide-in transition from top."})]})})]})]})]}),parameters:{docs:{description:{story:"Showcase of tab animations with different variants. The animations respect user preferences with `prefers-reduced-motion` media query."}}}},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",ariaLabel:"Primary tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",ariaLabel:"Secondary tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Fitted Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",fitted:!0,ariaLabel:"Primary fitted tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Fitted Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",fitted:!0,ariaLabel:"Secondary fitted tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(r,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab one content"})}),e.jsx(r,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab two content"})}),e.jsx(r,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab three content"})})]})]})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx("h3",{children:"Badge States in Different Tab States"}),e.jsx("p",{children:"This showcase demonstrates how badges appear in different tab states."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h4",{children:"Default/Rest State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"rest",badge:"3",children:"Label"})}),e.jsx("p",{children:"Badge has a light gray background (fill-hover) with text-secondary color"})]}),e.jsx("h4",{children:"Hover State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#f9f9fa"},children:e.jsx(a,{value:"hover",badge:"3",className:ca.tabsTriggerHover,children:"Label"})}),e.jsx("p",{children:"Badge has a darker gray background (fill-active) with text-primary color"})]}),e.jsx("h4",{children:"Active State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"active",badge:"3","data-state":"active",children:"Label"})}),e.jsx("p",{children:"Badge has a brand-secondary background with text-link color"})]}),e.jsx("h4",{children:"Disabled State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"disabled",badge:"3",disabled:!0,children:"Label"})}),e.jsx("p",{children:"Badge has background-primary and text-secondary color"})]})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs(s,{defaultValue:"rest",variant:"primary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"rest",badge:"3",children:"Rest"}),e.jsx(a,{value:"hover",badge:"3",children:"Hover"}),e.jsx(a,{value:"active",badge:"3",children:"Active"}),e.jsx(a,{value:"disabled",badge:"3",disabled:!0,children:"Disabled"})]}),e.jsx(r,{value:"rest",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Rest State Badge"}),e.jsx("p",{children:"In its default state, the badge has a subtle light gray background and secondary text color to blend with the rest of the tab."})]})}),e.jsx(r,{value:"hover",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Hover State Badge"}),e.jsx("p",{children:"When hovering, the badge background becomes slightly darker and the text becomes more prominent."})]})}),e.jsx(r,{value:"active",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Active State Badge"}),e.jsx("p",{children:"When the tab is active, the badge uses brand colors to increase visibility and emphasis."})]})}),e.jsx(r,{value:"disabled",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Disabled State Badge"}),e.jsx("p",{children:"When disabled, the badge has a more subtle appearance with reduced contrast."})]})})]})})]}),parameters:{docs:{description:{story:"This showcase demonstrates how badges appear in different tab states (rest, hover, active, disabled)."}}}},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Navigation Tabs"}),e.jsxs(s,{defaultValue:"home",variant:"primary",fitted:!0,ariaLabel:"Main navigation",children:[e.jsxs(i,{children:[e.jsx(a,{value:"home",icon:e.jsx(b,{size:18}),description:"View your dashboard",children:"Home"}),e.jsx(a,{value:"profile",icon:e.jsx(p,{size:18}),description:"View and edit your profile",children:"Profile"}),e.jsx(a,{value:"messages",icon:e.jsx(M,{size:18}),badge:"3",description:"Read your messages",children:"Messages"}),e.jsx(a,{value:"settings",icon:e.jsx(c,{size:18}),description:"Configure your account settings",children:"Settings"})]}),e.jsx(r,{value:"home",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Welcome to the Dashboard"}),e.jsx("p",{children:"This is the main view of your application."})]})}),e.jsx(r,{value:"profile",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"User Profile"}),e.jsx("p",{children:"View and edit your profile information."})]})}),e.jsx(r,{value:"messages",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Messages"}),e.jsx("p",{children:"You have 3 unread messages."})]})}),e.jsx(r,{value:"settings",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Settings"}),e.jsx("p",{children:"Manage your account settings and preferences."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Form Sections"}),e.jsxs(s,{defaultValue:"personal",variant:"secondary",ariaLabel:"Registration form sections",children:[e.jsxs(i,{children:[e.jsx(a,{value:"personal",description:"Fill in personal information",children:"Personal Info"}),e.jsx(a,{value:"address",description:"Fill in address details",children:"Address"}),e.jsx(a,{value:"payment",description:"Add payment information",children:"Payment"})]}),e.jsx(r,{value:"personal",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Personal Information"}),e.jsx("p",{children:"Form fields for name, email, phone, etc. would go here."})]})}),e.jsx(r,{value:"address",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Address Information"}),e.jsx("p",{children:"Form fields for street, city, state, etc. would go here."})]})}),e.jsx(r,{value:"payment",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Payment Details"}),e.jsx("p",{children:"Form fields for card information, billing address, etc. would go here."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Settings Panel with Vertical Tabs"}),e.jsx(s,{defaultValue:"account",variant:"secondary",orientation:"vertical",ariaLabel:"Settings navigation",children:e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(i,{children:[e.jsx(a,{value:"account",icon:e.jsx(p,{size:18}),description:"Manage account settings",children:"Account"}),e.jsx(a,{value:"security",icon:e.jsx(c,{size:18}),description:"Adjust security options",children:"Security"}),e.jsx(a,{value:"notifications",icon:e.jsx(N,{size:18}),badge:"2",description:"Configure notifications",children:"Notifications"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx(r,{value:"account",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account information, profile picture, and personal details."})]})}),e.jsx(r,{value:"security",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Security Settings"}),e.jsx("p",{children:"Change your password, enable two-factor authentication, and review login activity."})]})}),e.jsx(r,{value:"notifications",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Notification Settings"}),e.jsx("p",{children:"Configure how you receive notifications via email, mobile, and in-app alerts."})]})})]})]})})]})]})},z={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:e.jsxs("div",{children:[e.jsx("h3",{children:"Accessibility Features"}),e.jsx("p",{children:"This component implements the following accessibility features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Correct ARIA roles (tablist, tab, tabpanel)"}),e.jsx("li",{children:"Proper keyboard navigation (arrow keys, Tab, Home, End)"}),e.jsx("li",{children:"Descriptive labels for screen readers"}),e.jsx("li",{children:'Tab indicators that respect "prefers-reduced-motion"'}),e.jsx("li",{children:"Focus management with proper focus indicators"})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs(s,{defaultValue:"account",variant:"primary",ariaLabel:"Account management tabs",children:[e.jsxs(i,{children:[e.jsx(a,{value:"account",description:"View and edit your account information",children:"Account Info"}),e.jsx(a,{value:"password",description:"Change your account password",children:"Password"}),e.jsx(a,{value:"preferences",description:"Manage your email and notification settings",children:"Preferences"})]}),e.jsx(r,{value:"account",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Account Information"}),e.jsx("p",{children:"This section demonstrates the TabsContent component with proper ARIA attributes and keyboard focus management."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Try navigating with Tab key"}),e.jsx("li",{children:"Use arrow keys to switch between tabs when focus is on a tab"}),e.jsx("li",{children:"Notice how focus moves appropriately"})]})]})}),e.jsx(r,{value:"password",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Password Management"}),e.jsx("p",{children:"When you activate this tab with keyboard, the focus moves to the content area to maintain proper focus management."})]})}),e.jsx(r,{value:"preferences",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"User Preferences"}),e.jsx("p",{children:'The tab indicators and content transitions respect the "prefers-reduced-motion" setting for users with motion sensitivity.'})]})})]})})]})}),parameters:{docs:{description:{story:"Showcases the accessibility features of the Tabs component, including keyboard navigation, ARIA attributes, and focus management."}}}},V={render:()=>{const[t,d]=F.useState("overview");return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#e0f2fe",borderRadius:"4px"},children:[e.jsx("strong",{children:"Current URL will show:"})," ?tab=",t,e.jsx("br",{}),e.jsx("small",{children:"Try changing tabs and using browser back/forward buttons!"})]}),e.jsxs(s,{value:t,onValueChange:d,syncWithUrl:!0,variant:"primary",fitted:!0,ariaLabel:"Dashboard navigation with URL routing",children:[e.jsxs(i,{children:[e.jsx(a,{value:"overview",icon:e.jsx(b,{size:18}),children:"Overview"}),e.jsx(a,{value:"analytics",icon:e.jsx(pa,{size:18}),children:"Analytics"}),e.jsx(a,{value:"reports",icon:e.jsx(ga,{size:18}),children:"Reports"}),e.jsx(a,{value:"settings",icon:e.jsx(c,{size:18}),children:"Settings"})]}),e.jsx(r,{value:"overview",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Dashboard Overview"}),e.jsx("p",{children:"This tab is synced with the URL. Check your browser's address bar!"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?tab=overview"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Browser back/forward buttons work"}),e.jsx("li",{children:"Bookmark this URL to return to this tab"}),e.jsx("li",{children:"Share this URL to let others see this tab"}),e.jsx("li",{children:"Page reload maintains tab selection"})]})]})}),e.jsx(r,{value:"analytics",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Analytics Dashboard"}),e.jsx("p",{children:"URL updated to: ?tab=analytics"}),e.jsx("p",{children:"Try clicking the browser back button to return to the previous tab!"})]})}),e.jsx(r,{value:"reports",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Generated Reports"}),e.jsx("p",{children:"URL updated to: ?tab=reports"}),e.jsx("p",{children:"Each tab change creates a new browser history entry."})]})}),e.jsx(r,{value:"settings",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Dashboard Settings"}),e.jsx("p",{children:"URL updated to: ?tab=settings"}),e.jsx("p",{children:"Users can bookmark this exact URL to return directly to the settings tab."})]})})]}),e.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsx("h4",{children:"Try This:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Click through the tabs above"}),e.jsx("li",{children:"Notice how the URL changes in your browser"}),e.jsx("li",{children:"Use the browser's back button to navigate through tab history"}),e.jsx("li",{children:"Refresh the page - the selected tab persists!"}),e.jsx("li",{children:"Bookmark a tab and reopen it later"})]})]})]})},parameters:{docs:{description:{story:"Basic URL routing example with syncWithUrl enabled. Each tab change updates the URL with ?tab=value, creating browser history entries for back/forward navigation."}}}},H={render:()=>{const[t,d]=F.useState("products");return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#fef3c7",borderRadius:"4px"},children:[e.jsx("strong",{children:"Custom URL parameter:"})," ?section=",t,e.jsx("br",{}),e.jsxs("small",{children:["Using ",e.jsx("code",{children:'urlParamName="section"'}),' instead of the default "tab"']})]}),e.jsxs(s,{value:t,onValueChange:d,syncWithUrl:!0,urlParamName:"section",variant:"secondary",ariaLabel:"Store management with custom URL parameter",children:[e.jsxs(i,{children:[e.jsx(a,{value:"products",children:"Products"}),e.jsx(a,{value:"orders",badge:"12",children:"Orders"}),e.jsx(a,{value:"customers",children:"Customers"}),e.jsx(a,{value:"analytics",children:"Analytics"})]}),e.jsx(r,{value:"products",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Product Catalog"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?section=products"]}),e.jsx("p",{children:"The URL parameter name can be customized to match your application's routing conventions."})]})}),e.jsx(r,{value:"orders",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Orders Management"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?section=orders"]}),e.jsx("p",{children:"Useful when you have multiple tab groups on the same page with different parameter names."})]})}),e.jsx(r,{value:"customers",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Customer Directory"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?section=customers"]}),e.jsx("p",{children:"Custom parameter names make URLs more semantic and easier to understand."})]})}),e.jsx(r,{value:"analytics",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Store Analytics"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?section=analytics"]}),e.jsx("p",{children:"All URL routing features work the same with custom parameter names."})]})})]}),e.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsx("p",{children:e.jsx("strong",{children:"Use Cases for Custom Parameters:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:'urlParamName="view"'})," - For different view modes"]}),e.jsxs("li",{children:[e.jsx("code",{children:'urlParamName="step"'})," - For wizard/multi-step forms"]}),e.jsxs("li",{children:[e.jsx("code",{children:'urlParamName="category"'})," - For category navigation"]}),e.jsxs("li",{children:[e.jsx("code",{children:'urlParamName="panel"'})," - For settings panels"]})]})]})]})},parameters:{docs:{description:{story:'Example using a custom URL parameter name with urlParamName="section" instead of the default "tab". Useful for semantic URLs or when multiple tab groups exist on the same page.'}}}},D={render:()=>{const[t,d]=F.useState("grid");return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#fef2f2",borderRadius:"4px"},children:[e.jsx("strong",{children:"Replace History Mode:"})," ?view=",t,e.jsx("br",{}),e.jsx("small",{children:"URL updates without creating new browser history entries"})]}),e.jsxs(s,{value:t,onValueChange:d,syncWithUrl:!0,urlParamName:"view",replaceHistory:!0,variant:"primary",ariaLabel:"View mode switcher",children:[e.jsxs(i,{children:[e.jsx(a,{value:"grid",children:"Grid View"}),e.jsx(a,{value:"list",children:"List View"}),e.jsx(a,{value:"compact",children:"Compact View"})]}),e.jsx(r,{value:"grid",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Grid View"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?view=grid"]}),e.jsxs("p",{children:["With ",e.jsx("code",{children:"replaceHistory=true"}),", switching tabs updates the URL but doesn't add to browser history."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Try this:"})," Switch between views multiple times, then click the browser back button. You'll skip all the view changes!"]})]})}),e.jsx(r,{value:"list",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"List View"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?view=list"]}),e.jsx("p",{children:"This is useful for UI state that users shouldn't navigate back through, like view mode toggles or filter panels."})]})}),e.jsx(r,{value:"compact",children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff",borderRadius:"8px",marginTop:"16px"},children:[e.jsx("h4",{children:"Compact View"}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ?view=compact"]}),e.jsx("p",{children:"URL persists across page reloads, but switching views doesn't clutter browser history."})]})})]}),e.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#fff",borderRadius:"8px"},children:[e.jsx("p",{children:e.jsxs("strong",{children:["When to use ",e.jsx("code",{children:"replaceHistory=true"}),":"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View mode toggles"})," - Grid/list/compact views"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filter panels"})," - Different filter configurations"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sort options"})," - Changing sort order"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UI preferences"})," - Theme toggles, density settings"]})]}),e.jsx("p",{children:e.jsxs("strong",{children:["When to use ",e.jsx("code",{children:"replaceHistory=false"})," (default):"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Page navigation"})," - Main sections or pages"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Content categories"})," - Different types of content"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Workflow steps"})," - Multi-step processes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Settings sections"})," - Different settings panels"]})]})]})]})},parameters:{docs:{description:{story:"Example using replaceHistory=true to update the URL without creating new browser history entries. Perfect for view modes, filters, or UI state that users shouldn't navigate back through."}}}};var O,G,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Tabs Playground',
  render: args => {
    // Helper function to create tab elements based on count
    const createTabs = (count: number, useIcons: boolean = false, withBadges: boolean = false) => {
      const tabs = [];

      // Tab Icons
      const icons = [<IconHome size={18} />, <IconUser size={18} />, <IconSettings size={18} />, <IconBell size={18} />, <IconCalendar size={18} />, <IconMessage size={18} />];

      // Labels based on direction
      const getLabel = (index: number) => {
        if (args.dir === 'rtl') {
          const arabicLabels = ['الرئيسية', 'الملف الشخصي', 'الإعدادات', 'التنبيهات', 'التقويم', 'الرسائل'];
          return arabicLabels[index] || \`Tab \${index + 1}\`;
        }
        const englishLabels = ['Home', 'Profile', 'Settings', 'Notifications', 'Calendar', 'Messages'];
        return englishLabels[index] || \`Tab \${index + 1}\`;
      };
      for (let i = 0; i < count; i++) {
        tabs.push(<TabsTrigger key={\`tab\${i + 1}\`} value={\`tab\${i + 1}\`} icon={useIcons ? icons[i] : undefined} badge={withBadges && i === 1 ? '3' : undefined} description={\`Description for \${getLabel(i)}\`}>
            {getLabel(i)}
          </TabsTrigger>);
      }
      return tabs;
    };

    // Helper function to create tab content elements based on count
    const createTabContent = (count: number) => {
      const contents = [];

      // Content based on direction
      const getContent = (index: number) => {
        if (args.dir === 'rtl') {
          const arabicContent = ['محتوى الرئيسية', 'محتوى الملف الشخصي', 'محتوى الإعدادات', 'محتوى التنبيهات', 'محتوى التقويم', 'محتوى الرسائل'];
          return arabicContent[index] || \`محتوى التبويب \${index + 1}\`;
        }
        return \`Content for tab \${index + 1}\`;
      };
      for (let i = 0; i < count; i++) {
        contents.push(<TabsContent key={\`content\${i + 1}\`} value={\`tab\${i + 1}\`}>
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            minHeight: args.orientation === 'vertical' ? '200px' : 'auto'
          }}>
              <h4>{getLabel(i)}</h4>
              <p>{getContent(i)}</p>
              <p>This tab demonstrates the {args.variant} variant with {args.orientation} orientation.</p>
              {args.fitted && <p>These tabs are fitted to take full width.</p>}
            </div>
          </TabsContent>);
      }
      return contents;
    };

    // Helper function for getting labels based on direction and index
    const getLabel = (index: number) => {
      if (args.dir === 'rtl') {
        const arabicLabels = ['الرئيسية', 'الملف الشخصي', 'الإعدادات', 'التنبيهات', 'التقويم', 'الرسائل'];
        return arabicLabels[index] || \`Tab \${index + 1}\`;
      }
      const englishLabels = ['Home', 'Profile', 'Settings', 'Notifications', 'Calendar', 'Messages'];
      return englishLabels[index] || \`Tab \${index + 1}\`;
    };

    // For vertical orientation, we need a different layout
    if (args.orientation === 'vertical') {
      return <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          <Tabs {...args}>
            <TabsList>
              {createTabs(args.count || 3, true, true)}
            </TabsList>
            {createTabContent(args.count || 3)}
          </Tabs>
        </div>;
    }

    // Standard horizontal layout
    return <Tabs {...args}>
        <TabsList>
          {createTabs(args.count || 3, true, true)}
        </TabsList>
        {createTabContent(args.count || 3)}
      </Tabs>;
  }
}`,...(_=(G=u.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var Y,q,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: <div>Primary tabs content</div>
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Primary variant - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Primary variant - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Primary variant - Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Secondary variant - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Secondary variant - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Secondary variant - Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    fitted: true
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Fitted tabs - Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Fitted tabs - Tab two content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Fitted tabs - Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,ne,oe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" badge="3">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab two content with badge
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var de,le,ce;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={18} />}>Profile</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Home tab content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Profile tab content
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Settings tab content
        </div>
      </TabsContent>
    </Tabs>
}`,...(ce=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var be,pe,ge;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconBell size={18} />} badge="5">Notifications</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Home tab content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Notifications tab content with 5 new notifications
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Settings tab content
        </div>
      </TabsContent>
    </Tabs>
}`,...(ge=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,he,xe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Tab 2 (Disabled)</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab one content
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab two content (disabled)
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab three content
        </div>
      </TabsContent>
    </Tabs>
}`,...(xe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,ve,Te;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    dir: 'rtl'
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={18} />}>الرئيسية</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={18} />} badge="3">الملف الشخصي</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconSettings size={18} />}>الإعدادات</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          محتوى التبويب الأول
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          محتوى التبويب الثاني
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          محتوى التبويب الثالث
        </div>
      </TabsContent>
    </Tabs>
}`,...(Te=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var me,ye,je;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    variant: 'secondary' // Vertical works better with secondary style
  },
  render: args => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Security</TabsTrigger>
          <TabsTrigger value="tab3">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          minHeight: '150px'
        }}>
            <h3>Account Settings</h3>
            <p>Manage your account information.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          minHeight: '150px'
        }}>
            <h3>Security Settings</h3>
            <p>Update your password and security preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          minHeight: '150px'
        }}>
            <h3>Notification Settings</h3>
            <p>Control how you receive notifications.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
}`,...(je=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var Ce,Re,ke;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" description="View and edit your profile information">
          Profile
        </TabsTrigger>
        <TabsTrigger value="tab2" description="Manage account security settings">
          Security
        </TabsTrigger>
        <TabsTrigger value="tab3" description="Configure your notification preferences">
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          <h3>Profile</h3>
          <p>Edit your personal information and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          <h3>Security</h3>
          <p>Update your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          <h3>Notifications</h3>
          <p>Control how you receive notifications.</p>
        </div>
      </TabsContent>
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with descriptions for screen readers. The descriptions are not visible but are announced by screen readers.'
      }
    }
  }
}`,...(ke=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var we,Le,Se;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    count: 2
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 1 content - 2 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 2 content - 2 tabs total
        </div>
      </TabsContent>
    </Tabs>
}`,...(Se=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var Ue,Pe,Ie;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    count: 4
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 1 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 2 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 3 content - 4 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Tab 4 content - 4 tabs total
        </div>
      </TabsContent>
    </Tabs>
}`,...(Ie=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var Ae,ze,Ve;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    count: 6
  },
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1" icon={<IconHome size={16} />}>Home</TabsTrigger>
        <TabsTrigger value="tab2" icon={<IconUser size={16} />}>Profile</TabsTrigger>
        <TabsTrigger value="tab3" icon={<IconBell size={16} />}>Alerts</TabsTrigger>
        <TabsTrigger value="tab4" icon={<IconCalendar size={16} />}>Calendar</TabsTrigger>
        <TabsTrigger value="tab5" icon={<IconMessage size={16} />}>Messages</TabsTrigger>
        <TabsTrigger value="tab6" icon={<IconSettings size={16} />}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Home tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Profile tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Alerts tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Calendar tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab5">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Messages tab content - 6 tabs total
        </div>
      </TabsContent>
      <TabsContent value="tab6">
        <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px'
      }}>
          Settings tab content - 6 tabs total
        </div>
      </TabsContent>
    </Tabs>
}`,...(Ve=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var He,De,Be;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>
      <div>
        <h3>Primary Tab Animation</h3>
        <p>Click different tabs to see the animation in action.</p>
        <Tabs defaultValue="tab1" variant="primary" ariaLabel="Animation showcase - primary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 1 Content</h4>
              <p>Notice the slide-in underline animation and the fade-in of this content.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 2 Content</h4>
              <p>Watch how the underline transitions from Tab 1 to Tab 2.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 3 Content</h4>
              <p>Smooth animation respects the 'prefers-reduced-motion' setting.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Tab Animation</h3>
        <p>Click different tabs to see the animation in action.</p>
        <Tabs defaultValue="tab1" variant="secondary" ariaLabel="Animation showcase - secondary">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 1 Content</h4>
              <p>Notice the scale-in animation of the tab and fade-in of this content.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 2 Content</h4>
              <p>Watch how the tab scales in when activated.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            height: '100px'
          }}>
              <h4>Tab 3 Content</h4>
              <p>The content also has a slight slide-in transition from top.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of tab animations with different variants. The animations respect user preferences with \`prefers-reduced-motion\` media query.'
      }
    }
  }
}`,...(Be=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Ne,Fe,Me;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  }}>
      <div>
        <h3>Primary Tabs</h3>
        <Tabs defaultValue="tab1" variant="primary" ariaLabel="Primary tabs example">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Tabs</h3>
        <Tabs defaultValue="tab1" variant="secondary" ariaLabel="Secondary tabs example">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Primary Fitted Tabs</h3>
        <Tabs defaultValue="tab1" variant="primary" fitted ariaLabel="Primary fitted tabs example">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary fitted tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary fitted tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Primary fitted tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Secondary Fitted Tabs</h3>
        <Tabs defaultValue="tab1" variant="secondary" fitted ariaLabel="Secondary fitted tabs example">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary fitted tabs - Tab one content
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary fitted tabs - Tab two content
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              Secondary fitted tabs - Tab three content
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
}`,...(Me=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var We,$e,Ee;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <h3>Badge States in Different Tab States</h3>
      <p>This showcase demonstrates how badges appear in different tab states.</p>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h4>Default/Rest State</h4>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
          <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          background: '#fff'
        }}>
            <TabsTrigger value="rest" badge="3">Label</TabsTrigger>
          </div>
          <p>Badge has a light gray background (fill-hover) with text-secondary color</p>
        </div>
        
        <h4>Hover State</h4>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
          <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          background: '#f9f9fa'
        }}>
            <TabsTrigger value="hover" badge="3"
          // Force hover styles to be applied
          className={styles.tabsTriggerHover}>Label</TabsTrigger>
          </div>
          <p>Badge has a darker gray background (fill-active) with text-primary color</p>
        </div>
        
        <h4>Active State</h4>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
          <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          background: '#fff'
        }}>
            <TabsTrigger value="active" badge="3" data-state="active">Label</TabsTrigger>
          </div>
          <p>Badge has a brand-secondary background with text-link color</p>
        </div>
        
        <h4>Disabled State</h4>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
          <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          background: '#fff'
        }}>
            <TabsTrigger value="disabled" badge="3" disabled>Label</TabsTrigger>
          </div>
          <p>Badge has background-primary and text-secondary color</p>
        </div>
      </div>

      <div style={{
      marginTop: '20px'
    }}>
        <Tabs defaultValue="rest" variant="primary">
          <TabsList>
            <TabsTrigger value="rest" badge="3">Rest</TabsTrigger>
            <TabsTrigger value="hover" badge="3">Hover</TabsTrigger>
            <TabsTrigger value="active" badge="3">Active</TabsTrigger>
            <TabsTrigger value="disabled" badge="3" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="rest">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Rest State Badge</h4>
              <p>In its default state, the badge has a subtle light gray background and secondary text color to blend with the rest of the tab.</p>
            </div>
          </TabsContent>
          <TabsContent value="hover">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Hover State Badge</h4>
              <p>When hovering, the badge background becomes slightly darker and the text becomes more prominent.</p>
            </div>
          </TabsContent>
          <TabsContent value="active">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Active State Badge</h4>
              <p>When the tab is active, the badge uses brand colors to increase visibility and emphasis.</p>
            </div>
          </TabsContent>
          <TabsContent value="disabled">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Disabled State Badge</h4>
              <p>When disabled, the badge has a more subtle appearance with reduced contrast.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This showcase demonstrates how badges appear in different tab states (rest, hover, active, disabled).'
      }
    }
  }
}`,...(Ee=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Ee.source}}};var Oe,Ge,_e;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  }}>
      <div>
        <h3>Navigation Tabs</h3>
        <Tabs defaultValue="home" variant="primary" fitted ariaLabel="Main navigation">
          <TabsList>
            <TabsTrigger value="home" icon={<IconHome size={18} />} description="View your dashboard">Home</TabsTrigger>
            <TabsTrigger value="profile" icon={<IconUser size={18} />} description="View and edit your profile">Profile</TabsTrigger>
            <TabsTrigger value="messages" icon={<IconMessage size={18} />} badge="3" description="Read your messages">Messages</TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings size={18} />} description="Configure your account settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Welcome to the Dashboard</h4>
              <p>This is the main view of your application.</p>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>User Profile</h4>
              <p>View and edit your profile information.</p>
            </div>
          </TabsContent>
          <TabsContent value="messages">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Messages</h4>
              <p>You have 3 unread messages.</p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Settings</h4>
              <p>Manage your account settings and preferences.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3>Form Sections</h3>
        <Tabs defaultValue="personal" variant="secondary" ariaLabel="Registration form sections">
          <TabsList>
            <TabsTrigger value="personal" description="Fill in personal information">Personal Info</TabsTrigger>
            <TabsTrigger value="address" description="Fill in address details">Address</TabsTrigger>
            <TabsTrigger value="payment" description="Add payment information">Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Personal Information</h4>
              <p>Form fields for name, email, phone, etc. would go here.</p>
            </div>
          </TabsContent>
          <TabsContent value="address">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Address Information</h4>
              <p>Form fields for street, city, state, etc. would go here.</p>
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <div style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
              <h4>Payment Details</h4>
              <p>Form fields for card information, billing address, etc. would go here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3>Settings Panel with Vertical Tabs</h3>
        <Tabs defaultValue="account" variant="secondary" orientation="vertical" ariaLabel="Settings navigation">
          <div style={{
          display: 'flex',
          gap: '20px'
        }}>
            <TabsList>
              <TabsTrigger value="account" icon={<IconUser size={18} />} description="Manage account settings">Account</TabsTrigger>
              <TabsTrigger value="security" icon={<IconSettings size={18} />} description="Adjust security options">Security</TabsTrigger>
              <TabsTrigger value="notifications" icon={<IconBell size={18} />} badge="2" description="Configure notifications">Notifications</TabsTrigger>
            </TabsList>
            <div style={{
            flex: 1
          }}>
              <TabsContent value="account">
                <div style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                minHeight: '200px'
              }}>
                  <h4>Account Settings</h4>
                  <p>Manage your account information, profile picture, and personal details.</p>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                minHeight: '200px'
              }}>
                  <h4>Security Settings</h4>
                  <p>Change your password, enable two-factor authentication, and review login activity.</p>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                minHeight: '200px'
              }}>
                  <h4>Notification Settings</h4>
                  <p>Configure how you receive notifications via email, mobile, and in-app alerts.</p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
}`,...(_e=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Ye,qe,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>
      <div>
        <h3>Accessibility Features</h3>
        <p>This component implements the following accessibility features:</p>
        <ul>
          <li>Correct ARIA roles (tablist, tab, tabpanel)</li>
          <li>Proper keyboard navigation (arrow keys, Tab, Home, End)</li>
          <li>Descriptive labels for screen readers</li>
          <li>Tab indicators that respect "prefers-reduced-motion"</li>
          <li>Focus management with proper focus indicators</li>
        </ul>
        
        <div style={{
        marginTop: '20px'
      }}>
          <Tabs defaultValue="account" variant="primary" ariaLabel="Account management tabs">
            <TabsList>
              <TabsTrigger value="account" description="View and edit your account information">
                Account Info
              </TabsTrigger>
              <TabsTrigger value="password" description="Change your account password">
                Password
              </TabsTrigger>
              <TabsTrigger value="preferences" description="Manage your email and notification settings">
                Preferences
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
                <h4>Account Information</h4>
                <p>This section demonstrates the TabsContent component with proper ARIA attributes and keyboard focus management.</p>
                <ul>
                  <li>Try navigating with Tab key</li>
                  <li>Use arrow keys to switch between tabs when focus is on a tab</li>
                  <li>Notice how focus moves appropriately</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
                <h4>Password Management</h4>
                <p>When you activate this tab with keyboard, the focus moves to the content area to maintain proper focus management.</p>
              </div>
            </TabsContent>
            <TabsContent value="preferences">
              <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
                <h4>User Preferences</h4>
                <p>The tab indicators and content transitions respect the "prefers-reduced-motion" setting for users with motion sensitivity.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Showcases the accessibility features of the Tabs component, including keyboard navigation, ARIA attributes, and focus management.'
      }
    }
  }
}`,...(Je=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    return <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
        <div style={{
        marginBottom: '16px',
        padding: '12px',
        backgroundColor: '#e0f2fe',
        borderRadius: '4px'
      }}>
          <strong>Current URL will show:</strong> ?tab={activeTab}
          <br />
          <small>Try changing tabs and using browser back/forward buttons!</small>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} syncWithUrl={true} variant="primary" fitted ariaLabel="Dashboard navigation with URL routing">
          <TabsList>
            <TabsTrigger value="overview" icon={<IconHome size={18} />}>
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" icon={<IconChartBar size={18} />}>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" icon={<IconFileText size={18} />}>
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" icon={<IconSettings size={18} />}>
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Dashboard Overview</h4>
              <p>This tab is synced with the URL. Check your browser's address bar!</p>
              <p><strong>URL:</strong> ?tab=overview</p>
              <ul>
                <li>Browser back/forward buttons work</li>
                <li>Bookmark this URL to return to this tab</li>
                <li>Share this URL to let others see this tab</li>
                <li>Page reload maintains tab selection</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Analytics Dashboard</h4>
              <p>URL updated to: ?tab=analytics</p>
              <p>Try clicking the browser back button to return to the previous tab!</p>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Generated Reports</h4>
              <p>URL updated to: ?tab=reports</p>
              <p>Each tab change creates a new browser history entry.</p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Dashboard Settings</h4>
              <p>URL updated to: ?tab=settings</p>
              <p>Users can bookmark this exact URL to return directly to the settings tab.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }}>
          <h4>Try This:</h4>
          <ol>
            <li>Click through the tabs above</li>
            <li>Notice how the URL changes in your browser</li>
            <li>Use the browser's back button to navigate through tab history</li>
            <li>Refresh the page - the selected tab persists!</li>
            <li>Bookmark a tab and reopen it later</li>
          </ol>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic URL routing example with syncWithUrl enabled. Each tab change updates the URL with ?tab=value, creating browser history entries for back/forward navigation.'
      }
    }
  }
}`,...(Xe=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,ea,aa;H.parameters={...H.parameters,docs:{...(Ze=H.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState('products');
    return <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
        <div style={{
        marginBottom: '16px',
        padding: '12px',
        backgroundColor: '#fef3c7',
        borderRadius: '4px'
      }}>
          <strong>Custom URL parameter:</strong> ?section={activeSection}
          <br />
          <small>Using <code>urlParamName="section"</code> instead of the default "tab"</small>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} syncWithUrl={true} urlParamName="section" variant="secondary" ariaLabel="Store management with custom URL parameter">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders" badge="12">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Product Catalog</h4>
              <p><strong>URL:</strong> ?section=products</p>
              <p>The URL parameter name can be customized to match your application's routing conventions.</p>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Orders Management</h4>
              <p><strong>URL:</strong> ?section=orders</p>
              <p>Useful when you have multiple tab groups on the same page with different parameter names.</p>
            </div>
          </TabsContent>

          <TabsContent value="customers">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Customer Directory</h4>
              <p><strong>URL:</strong> ?section=customers</p>
              <p>Custom parameter names make URLs more semantic and easier to understand.</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Store Analytics</h4>
              <p><strong>URL:</strong> ?section=analytics</p>
              <p>All URL routing features work the same with custom parameter names.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }}>
          <p><strong>Use Cases for Custom Parameters:</strong></p>
          <ul>
            <li><code>urlParamName="view"</code> - For different view modes</li>
            <li><code>urlParamName="step"</code> - For wizard/multi-step forms</li>
            <li><code>urlParamName="category"</code> - For category navigation</li>
            <li><code>urlParamName="panel"</code> - For settings panels</li>
          </ul>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using a custom URL parameter name with urlParamName="section" instead of the default "tab". Useful for semantic URLs or when multiple tab groups exist on the same page.'
      }
    }
  }
}`,...(aa=(ea=H.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,ta,sa;D.parameters={...D.parameters,docs:{...(ra=D.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => {
    const [activeView, setActiveView] = useState('grid');
    return <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
        <div style={{
        marginBottom: '16px',
        padding: '12px',
        backgroundColor: '#fef2f2',
        borderRadius: '4px'
      }}>
          <strong>Replace History Mode:</strong> ?view={activeView}
          <br />
          <small>URL updates without creating new browser history entries</small>
        </div>

        <Tabs value={activeView} onValueChange={setActiveView} syncWithUrl={true} urlParamName="view" replaceHistory={true} variant="primary" ariaLabel="View mode switcher">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="compact">Compact View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Grid View</h4>
              <p><strong>URL:</strong> ?view=grid</p>
              <p>With <code>replaceHistory=true</code>, switching tabs updates the URL but doesn't add to browser history.</p>
              <p><strong>Try this:</strong> Switch between views multiple times, then click the browser back button. You'll skip all the view changes!</p>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>List View</h4>
              <p><strong>URL:</strong> ?view=list</p>
              <p>This is useful for UI state that users shouldn't navigate back through, like view mode toggles or filter panels.</p>
            </div>
          </TabsContent>

          <TabsContent value="compact">
            <div style={{
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            marginTop: '16px'
          }}>
              <h4>Compact View</h4>
              <p><strong>URL:</strong> ?view=compact</p>
              <p>URL persists across page reloads, but switching views doesn't clutter browser history.</p>
            </div>
          </TabsContent>
        </Tabs>

        <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }}>
          <p><strong>When to use <code>replaceHistory=true</code>:</strong></p>
          <ul>
            <li><strong>View mode toggles</strong> - Grid/list/compact views</li>
            <li><strong>Filter panels</strong> - Different filter configurations</li>
            <li><strong>Sort options</strong> - Changing sort order</li>
            <li><strong>UI preferences</strong> - Theme toggles, density settings</li>
          </ul>
          <p><strong>When to use <code>replaceHistory=false</code> (default):</strong></p>
          <ul>
            <li><strong>Page navigation</strong> - Main sections or pages</li>
            <li><strong>Content categories</strong> - Different types of content</li>
            <li><strong>Workflow steps</strong> - Multi-step processes</li>
            <li><strong>Settings sections</strong> - Different settings panels</li>
          </ul>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using replaceHistory=true to update the URL without creating new browser history entries. Perfect for view modes, filters, or UI state that users shouldn\\'t navigate back through.'
      }
    }
  }
}`,...(sa=(ta=D.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};const xa=["Playground","Default","Primary","Secondary","Fitted","WithBadge","WithIcon","WithIconAndBadge","DisabledTab","RTL","VerticalOrientation","WithTabDescription","Count2","Count4","Count6","AnimationShowcase","AllVariants","BadgeStatesShowcase","CommonUseCases","AccessibilityFeatures","URLRoutingBasic","URLRoutingCustomParam","URLRoutingReplaceHistory"],Pa=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFeatures:z,AllVariants:P,AnimationShowcase:U,BadgeStatesShowcase:I,CommonUseCases:A,Count2:w,Count4:L,Count6:S,Default:h,DisabledTab:j,Fitted:v,Playground:u,Primary:x,RTL:C,Secondary:f,URLRoutingBasic:V,URLRoutingCustomParam:H,URLRoutingReplaceHistory:D,VerticalOrientation:R,WithBadge:T,WithIcon:m,WithIconAndBadge:y,WithTabDescription:k,__namedExportsOrder:xa,default:ha},Symbol.toStringTag,{value:"Module"}));export{z as A,I as B,w as C,h as D,v as F,x as P,C as R,f as S,Pa as T,R as V,T as W,m as a,y as b,j as c,L as d,S as e,A as f,U as g};
