import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{t as Je,c as Ke,d as Qe,T as s,e as i,a,b as t,s as Xe}from"./Tabs-CVJSb24g.js";import{c as H}from"./createReactComponent-GuN14Mgc.js";import{I as l}from"./IconUser-C1LEUmMM.js";/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=H("outline","bell","IconBell",[["path",{d:"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",key:"svg-0"}],["path",{d:"M9 17v1a3 3 0 0 0 6 0v-1",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ye=H("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var c=H("outline","home","IconHome",[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var V=H("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var b=H("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]);const Ze={title:"Components/Tabs",component:s,parameters:{layout:"padded",docs:{description:{component:"A set of layered sections of content—known as tab panels—that are displayed one at a time. The component follows WAI-ARIA guidelines for tabs with keyboard navigation support and proper ARIA roles and attributes."}}},tags:[],argTypes:{variant:{control:"select",options:Qe,description:"Visual appearance style"},fitted:{control:"boolean",description:"Whether tabs should take up full width"},count:{control:"select",options:Ke,description:"Number of tabs"},orientation:{control:"radio",options:Je,description:"Tab orientation (horizontal or vertical)"},defaultValue:{control:"text",description:"Default selected tab"},dir:{control:"radio",options:["ltr","rtl"],description:"Text direction"},ariaLabel:{control:"text",description:"Accessible label for the tab list"},ariaLabelledby:{control:"text",description:"ID of element that labels the tab list"}},args:{variant:"primary",fitted:!1,count:3,orientation:"horizontal",defaultValue:"tab1",ariaLabel:"Content tabs"}},g={name:"Tabs Playground",render:r=>{const B=(d,u=!1,M=!1)=>{const n=[],N=[e.jsx(c,{size:18}),e.jsx(l,{size:18}),e.jsx(b,{size:18}),e.jsx(D,{size:18}),e.jsx(Ye,{size:18}),e.jsx(V,{size:18})],W=o=>r.dir==="rtl"?["الرئيسية","الملف الشخصي","الإعدادات","التنبيهات","التقويم","الرسائل"][o]||`Tab ${o+1}`:["Home","Profile","Settings","Notifications","Calendar","Messages"][o]||`Tab ${o+1}`;for(let o=0;o<d;o++)n.push(e.jsx(a,{value:`tab${o+1}`,icon:u?N[o]:void 0,badge:M&&o===1?"3":void 0,description:`Description for ${W(o)}`,children:W(o)},`tab${o+1}`));return n},F=d=>{const u=[],M=n=>r.dir==="rtl"?["محتوى الرئيسية","محتوى الملف الشخصي","محتوى الإعدادات","محتوى التنبيهات","محتوى التقويم","محتوى الرسائل"][n]||`محتوى التبويب ${n+1}`:`Content for tab ${n+1}`;for(let n=0;n<d;n++)u.push(e.jsx(t,{value:`tab${n+1}`,children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:r.orientation==="vertical"?"200px":"auto"},children:[e.jsx("h4",{children:Ge(n)}),e.jsx("p",{children:M(n)}),e.jsxs("p",{children:["This tab demonstrates the ",r.variant," variant with ",r.orientation," orientation."]}),r.fitted&&e.jsx("p",{children:"These tabs are fitted to take full width."})]})},`content${n+1}`));return u},Ge=d=>r.dir==="rtl"?["الرئيسية","الملف الشخصي","الإعدادات","التنبيهات","التقويم","الرسائل"][d]||`Tab ${d+1}`:["Home","Profile","Settings","Notifications","Calendar","Messages"][d]||`Tab ${d+1}`;return r.orientation==="vertical"?e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsxs(s,{...r,children:[e.jsx(i,{style:{flexDirection:"column",alignItems:"flex-start"},children:B(r.count,!0,!0)}),F(r.count)]})}):e.jsxs(s,{...r,children:[e.jsx(i,{children:B(r.count,!0,!0)}),F(r.count)]})}},p={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},x={args:{variant:"primary"},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary variant - Tab three content"})})]})},h={args:{variant:"secondary"},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary variant - Tab three content"})})]})},f={args:{fitted:!0},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Fitted tabs - Tab three content"})})]})},T={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",badge:"3",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content with badge"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},v={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(c,{size:18}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(l,{size:18}),children:"Profile"}),e.jsx(a,{value:"tab3",icon:e.jsx(b,{size:18}),children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Profile tab content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content"})})]})},y={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(c,{size:18}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(D,{size:18}),badge:"5",children:"Notifications"}),e.jsx(a,{value:"tab3",icon:e.jsx(b,{size:18}),children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Notifications tab content with 5 new notifications"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content"})})]})},j={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",disabled:!0,children:"Tab 2 (Disabled)"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab two content (disabled)"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab three content"})})]})},m={args:{dir:"rtl"},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(c,{size:18}),children:"الرئيسية"}),e.jsx(a,{value:"tab2",icon:e.jsx(l,{size:18}),badge:"3",children:"الملف الشخصي"}),e.jsx(a,{value:"tab3",icon:e.jsx(b,{size:18}),children:"الإعدادات"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الأول"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الثاني"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"محتوى التبويب الثالث"})})]})},C={args:{orientation:"vertical",variant:"secondary"},render:r=>e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",children:"Security"}),e.jsx(a,{value:"tab3",children:"Notifications"})]}),e.jsx(t,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account information."})]})}),e.jsx(t,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Security Settings"}),e.jsx("p",{children:"Update your password and security preferences."})]})}),e.jsx(t,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"150px"},children:[e.jsx("h3",{children:"Notification Settings"}),e.jsx("p",{children:"Control how you receive notifications."})]})})]})})},k={render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",description:"View and edit your profile information",children:"Profile"}),e.jsx(a,{value:"tab2",description:"Manage account security settings",children:"Security"}),e.jsx(a,{value:"tab3",description:"Configure your notification preferences",children:"Notifications"})]}),e.jsx(t,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"Edit your personal information and preferences."})]})}),e.jsx(t,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Update your password and security settings."})]})}),e.jsx(t,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"Control how you receive notifications."})]})})]}),parameters:{docs:{description:{story:"Tabs with descriptions for screen readers. The descriptions are not visible but are announced by screen readers."}}}},R={args:{count:2},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 1 content - 2 tabs total"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 2 content - 2 tabs total"})})]})},w={args:{count:4},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 1 content - 4 tabs total"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 2 content - 4 tabs total"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 3 content - 4 tabs total"})}),e.jsx(t,{value:"tab4",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Tab 4 content - 4 tabs total"})})]})},S={args:{count:6},render:r=>e.jsxs(s,{...r,children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",icon:e.jsx(c,{size:16}),children:"Home"}),e.jsx(a,{value:"tab2",icon:e.jsx(l,{size:16}),children:"Profile"}),e.jsx(a,{value:"tab3",icon:e.jsx(D,{size:16}),children:"Alerts"}),e.jsx(a,{value:"tab4",icon:e.jsx(Ye,{size:16}),children:"Calendar"}),e.jsx(a,{value:"tab5",icon:e.jsx(V,{size:16}),children:"Messages"}),e.jsx(a,{value:"tab6",icon:e.jsx(b,{size:16}),children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Home tab content - 6 tabs total"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Profile tab content - 6 tabs total"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Alerts tab content - 6 tabs total"})}),e.jsx(t,{value:"tab4",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Calendar tab content - 6 tabs total"})}),e.jsx(t,{value:"tab5",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Messages tab content - 6 tabs total"})}),e.jsx(t,{value:"tab6",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Settings tab content - 6 tabs total"})})]})},L={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Tab Animation"}),e.jsx("p",{children:"Click different tabs to see the animation in action."}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",ariaLabel:"Animation showcase - primary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 1 Content"}),e.jsx("p",{children:"Notice the slide-in underline animation and the fade-in of this content."})]})}),e.jsx(t,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 2 Content"}),e.jsx("p",{children:"Watch how the underline transitions from Tab 1 to Tab 2."})]})}),e.jsx(t,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 3 Content"}),e.jsx("p",{children:"Smooth animation respects the 'prefers-reduced-motion' setting."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Tab Animation"}),e.jsx("p",{children:"Click different tabs to see the animation in action."}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",ariaLabel:"Animation showcase - secondary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 1 Content"}),e.jsx("p",{children:"Notice the scale-in animation of the tab and fade-in of this content."})]})}),e.jsx(t,{value:"tab2",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 2 Content"}),e.jsx("p",{children:"Watch how the tab scales in when activated."})]})}),e.jsx(t,{value:"tab3",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",height:"100px"},children:[e.jsx("h4",{children:"Tab 3 Content"}),e.jsx("p",{children:"The content also has a slight slide-in transition from top."})]})})]})]})]}),parameters:{docs:{description:{story:"Showcase of tab animations with different variants. The animations respect user preferences with `prefers-reduced-motion` media query."}}}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",ariaLabel:"Primary tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",ariaLabel:"Secondary tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Primary Fitted Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"primary",fitted:!0,ariaLabel:"Primary fitted tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Primary fitted tabs - Tab three content"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary Fitted Tabs"}),e.jsxs(s,{defaultValue:"tab1",variant:"secondary",fitted:!0,ariaLabel:"Secondary fitted tabs example",children:[e.jsxs(i,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(t,{value:"tab1",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab one content"})}),e.jsx(t,{value:"tab2",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab two content"})}),e.jsx(t,{value:"tab3",children:e.jsx("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:"Secondary fitted tabs - Tab three content"})})]})]})]})},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx("h3",{children:"Badge States in Different Tab States"}),e.jsx("p",{children:"This showcase demonstrates how badges appear in different tab states."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h4",{children:"Default/Rest State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"rest",badge:"3",children:"Label"})}),e.jsx("p",{children:"Badge has a light gray background (fill-hover) with text-secondary color"})]}),e.jsx("h4",{children:"Hover State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#f9f9fa"},children:e.jsx(a,{value:"hover",badge:"3",className:Xe.tabsTriggerHover,children:"Label"})}),e.jsx("p",{children:"Badge has a darker gray background (fill-active) with text-primary color"})]}),e.jsx("h4",{children:"Active State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"active",badge:"3","data-state":"active",children:"Label"})}),e.jsx("p",{children:"Badge has a brand-secondary background with text-link color"})]}),e.jsx("h4",{children:"Disabled State"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{padding:"12px 16px",borderRadius:"8px",background:"#fff"},children:e.jsx(a,{value:"disabled",badge:"3",disabled:!0,children:"Label"})}),e.jsx("p",{children:"Badge has background-primary and text-secondary color"})]})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs(s,{defaultValue:"rest",variant:"primary",children:[e.jsxs(i,{children:[e.jsx(a,{value:"rest",badge:"3",children:"Rest"}),e.jsx(a,{value:"hover",badge:"3",children:"Hover"}),e.jsx(a,{value:"active",badge:"3",children:"Active"}),e.jsx(a,{value:"disabled",badge:"3",disabled:!0,children:"Disabled"})]}),e.jsx(t,{value:"rest",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Rest State Badge"}),e.jsx("p",{children:"In its default state, the badge has a subtle light gray background and secondary text color to blend with the rest of the tab."})]})}),e.jsx(t,{value:"hover",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Hover State Badge"}),e.jsx("p",{children:"When hovering, the badge background becomes slightly darker and the text becomes more prominent."})]})}),e.jsx(t,{value:"active",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Active State Badge"}),e.jsx("p",{children:"When the tab is active, the badge uses brand colors to increase visibility and emphasis."})]})}),e.jsx(t,{value:"disabled",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Disabled State Badge"}),e.jsx("p",{children:"When disabled, the badge has a more subtle appearance with reduced contrast."})]})})]})})]}),parameters:{docs:{description:{story:"This showcase demonstrates how badges appear in different tab states (rest, hover, active, disabled)."}}}},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Navigation Tabs"}),e.jsxs(s,{defaultValue:"home",variant:"primary",fitted:!0,ariaLabel:"Main navigation",children:[e.jsxs(i,{children:[e.jsx(a,{value:"home",icon:e.jsx(c,{size:18}),description:"View your dashboard",children:"Home"}),e.jsx(a,{value:"profile",icon:e.jsx(l,{size:18}),description:"View and edit your profile",children:"Profile"}),e.jsx(a,{value:"messages",icon:e.jsx(V,{size:18}),badge:"3",description:"Read your messages",children:"Messages"}),e.jsx(a,{value:"settings",icon:e.jsx(b,{size:18}),description:"Configure your account settings",children:"Settings"})]}),e.jsx(t,{value:"home",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Welcome to the Dashboard"}),e.jsx("p",{children:"This is the main view of your application."})]})}),e.jsx(t,{value:"profile",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"User Profile"}),e.jsx("p",{children:"View and edit your profile information."})]})}),e.jsx(t,{value:"messages",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Messages"}),e.jsx("p",{children:"You have 3 unread messages."})]})}),e.jsx(t,{value:"settings",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Settings"}),e.jsx("p",{children:"Manage your account settings and preferences."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Form Sections"}),e.jsxs(s,{defaultValue:"personal",variant:"secondary",ariaLabel:"Registration form sections",children:[e.jsxs(i,{children:[e.jsx(a,{value:"personal",description:"Fill in personal information",children:"Personal Info"}),e.jsx(a,{value:"address",description:"Fill in address details",children:"Address"}),e.jsx(a,{value:"payment",description:"Add payment information",children:"Payment"})]}),e.jsx(t,{value:"personal",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Personal Information"}),e.jsx("p",{children:"Form fields for name, email, phone, etc. would go here."})]})}),e.jsx(t,{value:"address",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Address Information"}),e.jsx("p",{children:"Form fields for street, city, state, etc. would go here."})]})}),e.jsx(t,{value:"payment",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Payment Details"}),e.jsx("p",{children:"Form fields for card information, billing address, etc. would go here."})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Settings Panel with Vertical Tabs"}),e.jsx(s,{defaultValue:"account",variant:"secondary",orientation:"vertical",ariaLabel:"Settings navigation",children:e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs(i,{style:{flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(a,{value:"account",icon:e.jsx(l,{size:18}),description:"Manage account settings",children:"Account"}),e.jsx(a,{value:"security",icon:e.jsx(b,{size:18}),description:"Adjust security options",children:"Security"}),e.jsx(a,{value:"notifications",icon:e.jsx(D,{size:18}),badge:"2",description:"Configure notifications",children:"Notifications"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{value:"account",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Account Settings"}),e.jsx("p",{children:"Manage your account information, profile picture, and personal details."})]})}),e.jsx(t,{value:"security",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Security Settings"}),e.jsx("p",{children:"Change your password, enable two-factor authentication, and review login activity."})]})}),e.jsx(t,{value:"notifications",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px",minHeight:"200px"},children:[e.jsx("h4",{children:"Notification Settings"}),e.jsx("p",{children:"Configure how you receive notifications via email, mobile, and in-app alerts."})]})})]})]})})]})]})},z={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:e.jsxs("div",{children:[e.jsx("h3",{children:"Accessibility Features"}),e.jsx("p",{children:"This component implements the following accessibility features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Correct ARIA roles (tablist, tab, tabpanel)"}),e.jsx("li",{children:"Proper keyboard navigation (arrow keys, Tab, Home, End)"}),e.jsx("li",{children:"Descriptive labels for screen readers"}),e.jsx("li",{children:'Tab indicators that respect "prefers-reduced-motion"'}),e.jsx("li",{children:"Focus management with proper focus indicators"})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs(s,{defaultValue:"account",variant:"primary",ariaLabel:"Account management tabs",children:[e.jsxs(i,{children:[e.jsx(a,{value:"account",description:"View and edit your account information",children:"Account Info"}),e.jsx(a,{value:"password",description:"Change your account password",children:"Password"}),e.jsx(a,{value:"preferences",description:"Manage your email and notification settings",children:"Preferences"})]}),e.jsx(t,{value:"account",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Account Information"}),e.jsx("p",{children:"This section demonstrates the TabsContent component with proper ARIA attributes and keyboard focus management."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Try navigating with Tab key"}),e.jsx("li",{children:"Use arrow keys to switch between tabs when focus is on a tab"}),e.jsx("li",{children:"Notice how focus moves appropriately"})]})]})}),e.jsx(t,{value:"password",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"Password Management"}),e.jsx("p",{children:"When you activate this tab with keyboard, the focus moves to the content area to maintain proper focus management."})]})}),e.jsx(t,{value:"preferences",children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[e.jsx("h4",{children:"User Preferences"}),e.jsx("p",{children:'The tab indicators and content transitions respect the "prefers-reduced-motion" setting for users with motion sensitivity.'})]})})]})})]})}),parameters:{docs:{description:{story:"Showcases the accessibility features of the Tabs component, including keyboard navigation, ARIA attributes, and focus management."}}}};var $,U,E;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
            <TabsList style={{
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
              {createTabs(args.count, true, true)}
            </TabsList>
            {createTabContent(args.count)}
          </Tabs>
        </div>;
    }

    // Standard horizontal layout
    return <Tabs {...args}>
        <TabsList>
          {createTabs(args.count, true, true)}
        </TabsList>
        {createTabContent(args.count)}
      </Tabs>;
  }
}`,...(E=(U=g.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var O,_,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Y,G,J;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
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
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ne,oe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var de,be,le;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(le=(be=y.parameters)==null?void 0:be.docs)==null?void 0:le.source}}};var ce,ue,ge;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,xe,he;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Te,ve;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var ye,je,me;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(me=(je=k.parameters)==null?void 0:je.docs)==null?void 0:me.source}}};var Ce,ke,Re;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var we,Se,Le;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Le=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Ie,Pe,Ae;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=S.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var ze,He,Me;L.parameters={...L.parameters,docs:{...(ze=L.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => <div style={{
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
}`,...(Me=(He=L.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var De,Ve,Be;I.parameters={...I.parameters,docs:{...(De=I.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Be=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var Fe,Ne,We;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(We=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var $e,Ue,Ee;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
            <TabsList style={{
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
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
}`,...(Ee=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Ee.source}}};var Oe,_e,qe;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};const ea=["Playground","Default","Primary","Secondary","Fitted","WithBadge","WithIcon","WithIconAndBadge","DisabledTab","RTL","VerticalOrientation","WithTabDescription","Count2","Count4","Count6","AnimationShowcase","AllVariants","BadgeStatesShowcase","CommonUseCases","AccessibilityFeatures"],oa=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFeatures:z,AllVariants:I,AnimationShowcase:L,BadgeStatesShowcase:P,CommonUseCases:A,Count2:R,Count4:w,Count6:S,Default:p,DisabledTab:j,Fitted:f,Playground:g,Primary:x,RTL:m,Secondary:h,VerticalOrientation:C,WithBadge:T,WithIcon:v,WithIconAndBadge:y,WithTabDescription:k,__namedExportsOrder:ea,default:Ze},Symbol.toStringTag,{value:"Module"}));export{z as A,P as B,R as C,p as D,f as F,x as P,m as R,h as S,oa as T,C as V,T as W,v as a,y as b,j as c,w as d,S as e,A as f,L as g};
