const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TopBar-Bt79mdom.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./TopBar-DHDBH0t-.js","./clsx-B-dksMZM.js","./createReactComponent-CKk3lApD.js","./Separator-DDuP3uRh.js","./Separator-Tp2ElSza.css","./IconUsers-CM3_DD69.js","./Popover-B4T-UWsl.js","./index-Dcu5jVSv.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-N3eucVg6.js","./index-BTe66ZhM.js","./index-DavpLpmr.js","./Drawer-CJqTAku3.js","./Button-CoP_mZBT.js","./Button-BkO63AX8.css","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./Popover-BL_lnscC.css","./IconChevronDown-D1vfiZl2.js","./Logo-DZFxyD9b.js","./AspectRatio-BLaXxon9.js","./AspectRatio-BnjZEaot.css","./Logo-BpEKDq6D.css","./TopBar-BSQdCjgz.css","./IconHome-DqBDdcGV.js","./IconSearch-BrVn1Pri.js","./TextInput-CRZDgAAp.js","./index-QFq3N9B_.js","./IconExclamationCircle-BYkI5IG6.js","./TextInput-Ci27RXeL.css","./IconPlus-C8LpY_EU.js","./IconBell-CK5J1bJB.js","./IconFilter-BzvXx6-K.js","./IconSettings-cjygYtAZ.js","./IconHelp-DOQf5BnN.js"])))=>i.map(i=>d[i]);
import{_ as ce}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as l}from"./index-D4H_InIO.js";import{T as d,I as B,a as de}from"./TopBar-DHDBH0t-.js";import{B as t}from"./Button-CoP_mZBT.js";import{I as S}from"./IconHome-DqBDdcGV.js";import{c as ie}from"./createReactComponent-CKk3lApD.js";import{a as se}from"./IconUsers-CM3_DD69.js";import{I as u}from"./IconSearch-BrVn1Pri.js";import{T as k}from"./TextInput-CRZDgAAp.js";import{I as pe}from"./IconPlus-C8LpY_EU.js";import{I as T}from"./IconBell-CK5J1bJB.js";import{I as z}from"./IconFilter-BzvXx6-K.js";import{I as he}from"./IconSettings-cjygYtAZ.js";import{I as ue}from"./IconHelp-DOQf5BnN.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",key:"svg-1"}],["path",{d:"M5 21l0 -10.15",key:"svg-2"}],["path",{d:"M19 21l0 -10.15",key:"svg-3"}],["path",{d:"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",key:"svg-4"}]],ge=ie("outline","building-store","BuildingStore",ve);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M4 6l7 0",key:"svg-0"}],["path",{d:"M4 12l7 0",key:"svg-1"}],["path",{d:"M4 18l9 0",key:"svg-2"}],["path",{d:"M15 9l3 -3l3 3",key:"svg-3"}],["path",{d:"M18 6l0 12",key:"svg-4"}]],ye=ie("outline","sort-ascending","SortAscending",xe),be={title:"Components/TopBar",component:d,parameters:{layout:"fullscreen",docs:{page:()=>ce(()=>import("./TopBar-Bt79mdom.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]),import.meta.url)}},tags:[],argTypes:{selectedWarehouse:{control:"text",description:"The currently selected warehouse name"},warehouses:{control:"object",description:"Array of available warehouse names"},logoClickable:{control:"boolean",description:"Whether the logo should be clickable"},showHamburgerMenu:{control:"boolean",description:"Whether to show hamburger menu on small devices"},showLogoutOption:{control:"boolean",description:"Whether to show logout option in dropdown"}}},v={render:()=>e.jsx(d,{logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard")}),parameters:{docs:{description:{story:"Basic TopBar layout with just logo and hamburger menu. The center and end sections are empty by default, providing a clean slate for customization."}}}},g={render:()=>{const[r,o]=l.useState("Main Warehouse"),a=["Main Warehouse","Secondary Warehouse","Distribution Center"];return e.jsx(d,{showWarehouseDropdown:!0,selectedWarehouse:r,warehouses:a,logoClickable:!0,onWarehouseChange:o,onLogoClick:()=>alert("Navigate to dashboard"),onLogoutClick:()=>alert("User logged out"),showLogoutOption:!0,popoverSide:"bottom",popoverAlign:"end"})},parameters:{docs:{description:{story:"TopBar with the optional warehouse dropdown enabled via showWarehouseDropdown prop. This is just an example - you can replace the end section with any custom component."}}}},x={render:()=>{const[r,o]=l.useState("userProfile"),a={userProfile:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)"},children:[e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(T,{size:18}),"aria-label":"Notifications",children:"3"}),e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"var(--t-color-fill-brand-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"var(--t-font-weight-medium)",fontSize:"var(--t-font-size-250)",cursor:"pointer"},children:"JD"})]}),actions:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-200)"},children:[e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(pe,{size:16}),children:"New"}),e.jsx(t,{variant:"primary",size:"small",children:"Export"})]}),warehouseExample:e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(B,{size:16}),children:"Main Warehouse"}),empty:null};return e.jsxs("div",{children:[e.jsx(d,{logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard"),endContent:a[r]}),e.jsxs("div",{style:{padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",minHeight:"400px"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"🔄 Swappable End Content"}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",margin:"0 0 var(--t-space-500) 0"},children:"The end section is fully swappable - you can place ANY component there. Try switching between different content types:"}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",flexWrap:"wrap"},children:[e.jsx(t,{variant:r==="userProfile"?"primary":"outlined",onClick:()=>o("userProfile"),children:"User Profile"}),e.jsx(t,{variant:r==="actions"?"primary":"outlined",onClick:()=>o("actions"),children:"Action Buttons"}),e.jsx(t,{variant:r==="warehouseExample"?"primary":"outlined",onClick:()=>o("warehouseExample"),children:"Warehouse Example"}),e.jsx(t,{variant:r==="empty"?"primary":"outlined",onClick:()=>o("empty"),children:"Empty (null)"})]}),e.jsxs("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-info-secondary)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-info)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-info)",margin:"0 0 var(--t-space-300) 0"},children:"✨ End Section Capabilities"}),e.jsxs("ul",{style:{color:"var(--t-color-text-info)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsx("li",{children:"Accepts any React component or element"}),e.jsx("li",{children:"Default value is null (no content)"}),e.jsx("li",{children:"Can contain user profiles, actions, dropdowns, or custom components"}),e.jsx("li",{children:"Automatically aligns to the right edge (left in RTL)"}),e.jsx("li",{children:"Warehouse dropdown is just an optional example via showWarehouseDropdown prop"})]})]})]})]})},parameters:{layout:"fullscreen",docs:{description:{story:"Demonstrates the swappable end content slot. The end section can contain user profiles, action buttons, dropdowns, or any custom component. By default, it is empty (null)."}}}},y={render:()=>{const[r,o]=l.useState("search"),a={search:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",minWidth:"300px"},children:e.jsx(k,{placeholder:"Search products, orders, customers...",prefixIcon:e.jsx(u,{size:18}),style:{flex:1}})}),navigation:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-400)",alignItems:"center",padding:"0 var(--t-space-400)",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-300)",height:"40px"},children:[e.jsx(t,{variant:"plain",size:"small",children:"Dashboard"}),e.jsx(t,{variant:"plain",size:"small",children:"Orders"}),e.jsx(t,{variant:"plain",size:"small",children:"Inventory"})]}),status:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",padding:"0 var(--t-space-400)",backgroundColor:"var(--t-color-fill-success-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-success)",height:"40px"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"var(--t-color-icon-success)"}}),"All Systems Operational"]})};return e.jsxs("div",{children:[e.jsx(d,{showCenterSection:!0,centerContent:a[r],logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard")}),e.jsxs("div",{style:{padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",minHeight:"400px"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"🔄 Swappable Center Content"}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",margin:"0 0 var(--t-space-500) 0"},children:"The center section uses absolute positioning and can contain any content. Try switching between different content types:"}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",flexWrap:"wrap"},children:[e.jsx(t,{variant:r==="search"?"primary":"outlined",onClick:()=>o("search"),children:"Search Bar"}),e.jsx(t,{variant:r==="navigation"?"primary":"outlined",onClick:()=>o("navigation"),children:"Navigation Menu"}),e.jsx(t,{variant:r==="status"?"primary":"outlined",onClick:()=>o("status"),children:"Status Indicator"})]}),e.jsxs("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-info-secondary)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-info)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-info)",margin:"0 0 var(--t-space-300) 0"},children:"✨ Key Features"}),e.jsxs("ul",{style:{color:"var(--t-color-text-info)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsx("li",{children:"Center content is always perfectly centered (50% of TopBar width)"}),e.jsx("li",{children:"Independent of start and end section widths"}),e.jsx("li",{children:"End section stays anchored to the right edge"}),e.jsx("li",{children:"Supports any type of center content"})]})]})]})]})},parameters:{layout:"fullscreen",docs:{description:{story:"Demonstrates the swappable center content area with absolute positioning. The center content is always perfectly centered regardless of what it contains."}}}},b={render:()=>{const[r,o]=l.useState("Mobile Distribution Center"),[a,n]=l.useState(!1),i=["Mobile Distribution Center","Tablet Storage Hub"];return e.jsxs("div",{style:{position:"relative",minHeight:"100vh"},children:[e.jsx(d,{selectedWarehouse:r,warehouses:i,showCenterSection:!0,centerContent:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-info-secondary)",padding:"0 var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-info)",fontSize:"var(--t-font-size-300)",height:"36px",whiteSpace:"nowrap"},children:[e.jsx(S,{size:16}),e.jsx("span",{style:{display:"var(--display-mobile-hidden, inline)"},children:"Dashboard"})]}),logoClickable:!0,showHamburgerMenu:!0,onWarehouseChange:o,onLogoClick:()=>alert("Navigate to dashboard"),onHamburgerClick:()=>n(!a),onLogoutClick:()=>alert("User logged out"),showLogoutOption:!0}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",top:"var(--t-topbar-height, 64px)",left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",zIndex:40},onClick:()=>n(!1)}),e.jsxs("div",{style:{position:"fixed",top:"var(--t-topbar-height, 64px)",left:0,width:"280px",bottom:0,backgroundColor:"var(--t-color-surface-primary)",borderRight:"1px solid var(--t-color-border-secondary)",zIndex:50,padding:"var(--t-space-400)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"📱 Mobile Navigation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:[e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Dashboard"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Orders"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Inventory"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Reports"})]})]})]}),e.jsx("div",{style:{padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",minHeight:"calc(100vh - var(--t-topbar-height, 64px))"},children:e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h1",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"📱 Responsive TopBar"}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-warning-secondary)",padding:"var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-warning)",marginBottom:"var(--t-space-500)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-warning)",margin:"0 0 var(--t-space-300) 0"},children:"📐 Resize your browser to see responsive behavior"}),e.jsxs("ul",{style:{color:"var(--t-color-text-warning)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop (768px+):"})," Full layout with all content visible"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tablet (< 768px):"})," Hamburger menu appears, warehouse text may hide"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile:"})," Compact layout with essential elements only"]})]})]}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",marginBottom:"var(--t-space-400)"},children:"The center section maintains its absolute positioning across all breakpoints, ensuring consistent centering regardless of screen size. The hamburger menu provides access to navigation on smaller screens."}),e.jsxs(t,{onClick:()=>n(!a),children:[a?"Close":"Open"," Mobile Sidebar"]})]})})]})},parameters:{layout:"fullscreen",docs:{description:{story:"Shows responsive behavior with hamburger menu appearing at tablet breakpoint (768px). Resize the viewport to see how the TopBar adapts while maintaining absolute center positioning."}}}},m={render:()=>e.jsxs("div",{children:[e.jsx(d,{showCenterSection:!0,centerContent:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",padding:"0 var(--t-space-500)",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-400)",color:"var(--t-color-text-brand)",fontWeight:"var(--t-font-weight-medium)",height:"42px"},children:[e.jsx(B,{size:18}),"Centered Application Title"]}),logoClickable:!0,onLogoClick:()=>alert("Navigate to home")}),e.jsxs("div",{style:{padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",minHeight:"400px"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"🎯 Perfect Center Alignment"}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",margin:"0"},children:"TopBar with only logo and center content. Shows how absolute positioning keeps center content perfectly centered even when the end section is completely empty. The center content is positioned at exactly 50% of the TopBar width."})]})]}),parameters:{docs:{description:{story:"TopBar with only logo and center content. Shows how absolute positioning keeps center content perfectly centered even when the end section is empty."}}}},f={render:()=>{var h;const[r,o]=l.useState("dashboard"),[a]=l.useState("Enterprise Hub"),n=["Enterprise Hub","Regional Center"],i=[{id:"dashboard",label:"Dashboard",icon:S},{id:"orders",label:"Orders",icon:ge},{id:"inventory",label:"Inventory",icon:B},{id:"users",label:"Users",icon:se}];return e.jsxs("div",{children:[e.jsx(d,{selectedWarehouse:a,warehouses:n,showCenterSection:!0,centerContent:e.jsx("div",{style:{display:"flex",gap:"var(--t-space-200)",padding:"0 var(--t-space-400)",backgroundColor:"var(--t-color-surface-primary)",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-400)",height:"44px",alignItems:"center"},children:i.map(c=>{const p=c.icon;return e.jsxs("button",{onClick:()=>o(c.id),style:{display:"flex",alignItems:"center",gap:"var(--t-space-200)",padding:"0 var(--t-space-300)",height:"36px",border:"none",borderRadius:"var(--t-border-radius-300)",backgroundColor:r===c.id?"var(--t-color-fill-brand-secondary)":"transparent",color:r===c.id?"var(--t-color-text-brand)":"var(--t-color-text-secondary)",cursor:"pointer",fontSize:"var(--t-font-size-300)",fontWeight:r===c.id?"var(--t-font-weight-medium)":"var(--t-font-weight-normal)",transition:"all 0.2s ease"},children:[e.jsx(p,{size:16}),c.label]},c.id)})}),logoClickable:!0,onLogoClick:()=>alert("Navigate to home"),onLogoutClick:()=>alert("User logged out"),showLogoutOption:!0}),e.jsxs("div",{style:{padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",minHeight:"400px"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"🧭 Wide Tab Navigation"}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",margin:"0 0 var(--t-space-400) 0"},children:"TopBar with wide center content showing navigation tabs. The absolute positioning ensures the tabs stay perfectly centered regardless of the warehouse dropdown width or any changes to the end section."}),e.jsxs("div",{style:{padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-success-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-success)"},children:[e.jsx("strong",{children:"Current Tab:"})," ",(h=i.find(c=>c.id===r))==null?void 0:h.label]})]})]})},parameters:{docs:{description:{story:"TopBar with wide center content showing navigation tabs. The absolute positioning ensures the tabs stay centered regardless of the warehouse dropdown width."}}}},C={render:()=>{const[r,o]=l.useState("Mobile Store"),[a,n]=l.useState(!1),[i,h]=l.useState(""),c=["Mobile Store","Tablet Hub","Desktop Center"];return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--t-color-bg-primary)"},children:[e.jsx(d,{selectedWarehouse:r,warehouses:c,onWarehouseChange:o,onLogoutClick:()=>alert("User logged out"),showCenterSection:!0,showCenterSectionOnMobile:!1,showCenterSectionOnTablet:!0,centerContent:e.jsx(k,{placeholder:"Search products, orders, customers...",prefixIcon:e.jsx(u,{size:18}),style:{minWidth:"300px",width:"100%"}}),isExpanded:a,onExpandToggle:n,expandedContent:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",alignItems:"center"},children:[e.jsx(k,{placeholder:"Search products, orders, customers...",value:i,onChange:p=>h(p.target.value),prefixIcon:e.jsx(u,{size:18}),style:{flex:1},autoFocus:a}),e.jsx(t,{variant:"primary",size:"small",onClick:()=>{alert(`Searching for: "${i}"`),n(!1)},children:"Search"})]}),mobileActionContent:e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(u,{size:18}),"aria-label":"Search"}),expansionDuration:300,logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard")}),e.jsx("div",{style:{padding:"var(--t-space-600)"},children:e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h1",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"📱 Mobile Expandable Search"}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-info-secondary)",padding:"var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-info)",marginBottom:"var(--t-space-500)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-info)",margin:"0 0 var(--t-space-300) 0"},children:"📐 Resize to mobile view (≤768px) to see the magic!"}),e.jsxs("ul",{style:{color:"var(--t-color-text-info)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop/Tablet:"})," Search bar visible in center"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile:"})," Search icon appears, click to expand"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expanded:"})," Full search bar with action button"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Animation:"})," Smooth height transition (300ms)"]})]})]}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",marginBottom:"var(--t-space-400)"},children:"This demonstrates the mobile search expansion pattern. The search bar is hidden on mobile and replaced with a search icon button. Clicking it expands the TopBar height to reveal the full search interface."}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",flexWrap:"wrap"},children:[e.jsx(t,{variant:a?"primary":"outlined",onClick:()=>n(!a),children:a?"Collapse Search":"Expand Search"}),e.jsx(t,{variant:"plain",onClick:()=>h(""),children:"Clear Search"})]}),i&&e.jsxs("div",{style:{marginTop:"var(--t-space-400)",padding:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-warning-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-warning)"},children:[e.jsx("strong",{children:"Search Query:"}),' "',i,'"']})]})})]})},parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1",viewports:{mobile1:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1024px",height:"768px"}}}},docs:{description:{story:"Demonstrates the mobile expandable search pattern. The search bar is hidden on mobile and replaced with a search icon. Clicking the icon expands the TopBar height to show the full search interface with smooth animations."}}}},w={render:()=>{const[r,o]=l.useState("Responsive Hub"),[a,n]=l.useState(!1),i=["Responsive Hub","Breakpoint Center","Adaptive Store"];return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--t-color-bg-primary)"},children:[e.jsx(d,{selectedWarehouse:r,warehouses:i,onWarehouseChange:o,onLogoutClick:()=>alert("User logged out"),showCenterSection:!0,showCenterSectionOnTablet:!0,showCenterSectionOnMobile:!1,centerContent:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-brand-secondary)",padding:"0 var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-brand)",height:"36px",whiteSpace:"nowrap",fontSize:"var(--t-font-size-300)",fontWeight:"var(--t-font-weight-medium)"},children:[e.jsx(S,{size:16}),e.jsx("span",{children:"Responsive Navigation"})]}),showHamburgerMenu:!0,isMobileSidebarOpen:a,onHamburgerMenuClick:()=>n(!a),logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard")}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",top:"var(--t-topbar-height, 64px)",left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",zIndex:40},onClick:()=>n(!1)}),e.jsxs("div",{style:{position:"fixed",top:"var(--t-topbar-height, 64px)",left:0,width:"280px",bottom:0,backgroundColor:"var(--t-color-surface-primary)",borderRight:"1px solid var(--t-color-border-secondary)",zIndex:50,padding:"var(--t-space-400)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"📱 Mobile Navigation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:[e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Dashboard"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Analytics"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Orders"}),e.jsx(t,{variant:"plain",style:{justifyContent:"flex-start"},children:"Settings"})]})]})]}),e.jsx("div",{style:{padding:"var(--t-space-600)",minHeight:"calc(100vh - var(--t-topbar-height, 64px))"},children:e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx("h1",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"📐 Responsive Breakpoints"}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-warning-secondary)",padding:"var(--t-space-500)",borderRadius:"var(--t-border-radius-400)",border:"1px solid var(--t-color-border-warning)",marginBottom:"var(--t-space-600)"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-warning)",margin:"0 0 var(--t-space-400) 0"},children:"🎯 Resize your browser to see responsive behavior!"}),e.jsxs("div",{style:{display:"grid",gap:"var(--t-space-400)",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-warning)",margin:"0 0 var(--t-space-200) 0"},children:"🖥️ Desktop (1024px+)"}),e.jsxs("ul",{style:{color:"var(--t-color-text-warning)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsx("li",{children:"Center section fully visible"}),e.jsx("li",{children:"No hamburger menu"}),e.jsx("li",{children:"Full warehouse text shown"}),e.jsx("li",{children:"Optimal spacing"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-warning)",margin:"0 0 var(--t-space-200) 0"},children:"📱 Tablet (768px-1024px)"}),e.jsxs("ul",{style:{color:"var(--t-color-text-warning)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsx("li",{children:"Center section shrinks"}),e.jsx("li",{children:"Hamburger menu appears"}),e.jsx("li",{children:"Warehouse text may hide"}),e.jsx("li",{children:"Compressed layout"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-warning)",margin:"0 0 var(--t-space-200) 0"},children:"📱 Mobile (≤768px)"}),e.jsxs("ul",{style:{color:"var(--t-color-text-warning)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsx("li",{children:"Center section hidden"}),e.jsx("li",{children:"Hamburger menu active"}),e.jsx("li",{children:"Icon-only warehouse"}),e.jsx("li",{children:"Mobile-first design"})]})]})]})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-info-secondary)",padding:"var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-info)",marginBottom:"var(--t-space-500)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-info)",margin:"0 0 var(--t-space-300) 0"},children:"✨ Key Responsive Features"}),e.jsxs("ul",{style:{color:"var(--t-color-text-info)",margin:0,paddingLeft:"var(--t-space-400)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Center Section Flexibility:"})," Can be shown/hidden per breakpoint"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Absolute Positioning:"})," Always centered regardless of content"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile Action Support:"})," Expandable functionality ready"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Progressive Enhancement:"})," Works without JavaScript"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"AI Agent Friendly:"})," Fully configurable behavior"]})]})]}),e.jsx("p",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-400)",lineHeight:1.6},children:"The TopBar component automatically adapts to different screen sizes using CSS media queries and configurable props. This ensures optimal user experience across all devices while maintaining the design system's visual consistency."}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",flexWrap:"wrap",marginTop:"var(--t-space-500)"},children:[e.jsxs(t,{onClick:()=>n(!a),variant:"outlined",children:[a?"Close":"Open"," Mobile Sidebar"]}),e.jsx(t,{onClick:()=>o(i[Math.floor(Math.random()*i.length)]),variant:"plain",children:"Random Warehouse"})]})]})})]})},parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive demonstration of responsive breakpoints. Shows how the TopBar adapts to desktop (1024px+), tablet (768px-1024px), and mobile (≤768px) viewports with configurable center section visibility."}}}},j={render:()=>{const[r,o]=l.useState({showCenterOnMobile:!1,showCenterOnTablet:!0,isExpanded:!1,expansionDuration:300,actionType:"search"}),[a,n]=l.useState("AI Warehouse"),[i,h]=l.useState(""),c=["AI Warehouse","ML Hub","Data Center"],p={search:{button:e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(u,{size:18}),"aria-label":"Search"}),expandedContent:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",alignItems:"center"},children:[e.jsx(k,{placeholder:"AI-powered search...",value:i,onChange:s=>h(s.target.value),prefixIcon:e.jsx(u,{size:18}),style:{flex:1}}),e.jsx(t,{variant:"primary",size:"small",children:"Search"})]})},menu:{button:e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(de,{size:18}),"aria-label":"Menu"}),expandedContent:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-400)",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(S,{}),children:"Dashboard"}),e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(he,{}),children:"Settings"}),e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(se,{}),children:"Users"}),e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(ue,{}),children:"Help"})]})},filter:{button:e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(z,{size:18}),"aria-label":"Filters"}),expandedContent:e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(ye,{}),children:"Sort A-Z"}),e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(z,{}),children:"Price Range"}),e.jsx(t,{variant:"outlined",size:"small",prefixIcon:e.jsx(T,{}),children:"In Stock"}),e.jsx(t,{variant:"primary",size:"small",children:"Apply Filters"})]})},notification:{button:e.jsx(t,{variant:"plain",size:"small",prefixIcon:e.jsx(T,{size:18}),"aria-label":"Notifications"}),expandedContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-300)",padding:"var(--t-space-200) 0"},children:[e.jsx("div",{style:{padding:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-info-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-info)"},children:"📦 New order #1234 received"}),e.jsx("div",{style:{padding:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-warning-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-warning)"},children:"⚠️ Low stock alert for Product X"}),e.jsx(t,{variant:"primary",size:"small",children:"View All"})]})}},I=p[r.actionType];return e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--t-color-bg-primary)"},children:[e.jsx(d,{selectedWarehouse:a,warehouses:c,onWarehouseChange:n,onLogoutClick:()=>alert("User logged out"),showCenterSection:!0,showCenterSectionOnTablet:r.showCenterOnTablet,showCenterSectionOnMobile:r.showCenterOnMobile,centerContent:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-300)",backgroundColor:"var(--t-color-fill-success-secondary)",padding:"0 var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-success)",height:"36px",fontSize:"var(--t-font-size-300)",fontWeight:"var(--t-font-weight-medium)"},children:"🤖 AI Agent Configured"}),isExpanded:r.isExpanded,onExpandToggle:s=>o({...r,isExpanded:s}),expandedContent:I.expandedContent,mobileActionContent:I.button,expansionDuration:r.expansionDuration,logoClickable:!0,onLogoClick:()=>alert("Navigate to dashboard")}),e.jsx("div",{style:{padding:"var(--t-space-600)"},children:e.jsxs("div",{style:{maxWidth:"900px"},children:[e.jsx("h1",{style:{color:"var(--t-color-text-primary)",margin:"0 0 var(--t-space-400) 0"},children:"🤖 AI Agent Flexible Configuration"}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-success-secondary)",padding:"var(--t-space-500)",borderRadius:"var(--t-border-radius-400)",border:"1px solid var(--t-color-border-success)",marginBottom:"var(--t-space-600)"},children:[e.jsx("h2",{style:{color:"var(--t-color-text-success)",margin:"0 0 var(--t-space-400) 0"},children:"⚙️ Live Configuration Panel"}),e.jsx("p",{style:{color:"var(--t-color-text-success)",marginBottom:"var(--t-space-400)"},children:"This demonstrates how AI agents can dynamically configure the TopBar behavior. Try different combinations to see the flexibility in action!"}),e.jsxs("div",{style:{display:"grid",gap:"var(--t-space-400)",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-success)",margin:"0 0 var(--t-space-300) 0"},children:"📱 Responsive Visibility"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-200)",color:"var(--t-color-text-success)"},children:[e.jsx("input",{type:"checkbox",checked:r.showCenterOnTablet,onChange:s=>o({...r,showCenterOnTablet:s.target.checked})}),"Show center on tablet"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-200)",color:"var(--t-color-text-success)"},children:[e.jsx("input",{type:"checkbox",checked:r.showCenterOnMobile,onChange:s=>o({...r,showCenterOnMobile:s.target.checked})}),"Show center on mobile"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-success)",margin:"0 0 var(--t-space-300) 0"},children:"🔧 Mobile Action Type"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:Object.keys(p).map(s=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"var(--t-space-200)",color:"var(--t-color-text-success)"},children:[e.jsx("input",{type:"radio",name:"actionType",value:s,checked:r.actionType===s,onChange:le=>o({...r,actionType:le.target.value})}),s.charAt(0).toUpperCase()+s.slice(1)]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"var(--t-color-text-success)",margin:"0 0 var(--t-space-300) 0"},children:"⏱️ Animation Settings"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--t-space-200)"},children:e.jsxs("label",{style:{color:"var(--t-color-text-success)"},children:["Duration: ",r.expansionDuration,"ms",e.jsx("input",{type:"range",min:"100",max:"1000",step:"50",value:r.expansionDuration,onChange:s=>o({...r,expansionDuration:parseInt(s.target.value)}),style:{width:"100%",marginTop:"var(--t-space-100)"}})]})})]})]})]}),e.jsxs("div",{style:{backgroundColor:"var(--t-color-fill-info-secondary)",padding:"var(--t-space-400)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-info)",marginBottom:"var(--t-space-500)"},children:[e.jsx("h3",{style:{color:"var(--t-color-text-info)",margin:"0 0 var(--t-space-300) 0"},children:"🚀 AI Agent Use Cases"}),e.jsxs("div",{style:{display:"grid",gap:"var(--t-space-300)",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))"},children:[e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--t-color-text-info)"},children:"Adaptive UI:"}),e.jsx("p",{style:{color:"var(--t-color-text-info)",margin:"var(--t-space-100) 0 0 0"},children:"AI can detect user behavior patterns and automatically adjust responsive breakpoints."})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--t-color-text-info)"},children:"Context-Aware Actions:"}),e.jsx("p",{style:{color:"var(--t-color-text-info)",margin:"var(--t-space-100) 0 0 0"},children:"Mobile actions can change based on current user context or workflow."})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--t-color-text-info)"},children:"Dynamic Content:"}),e.jsx("p",{style:{color:"var(--t-color-text-info)",margin:"var(--t-space-100) 0 0 0"},children:"Center and expanded content can be generated or modified programmatically."})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{color:"var(--t-color-text-info)"},children:"Performance Optimization:"}),e.jsx("p",{style:{color:"var(--t-color-text-info)",margin:"var(--t-space-100) 0 0 0"},children:"Animation durations can be adjusted based on device capabilities."})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--t-space-300)",flexWrap:"wrap"},children:[e.jsxs(t,{variant:r.isExpanded?"primary":"outlined",onClick:()=>o({...r,isExpanded:!r.isExpanded}),children:[r.isExpanded?"Collapse":"Expand"," Mobile Action"]}),e.jsx(t,{variant:"plain",onClick:()=>o({showCenterOnMobile:Math.random()>.5,showCenterOnTablet:Math.random()>.3,isExpanded:!1,expansionDuration:Math.floor(Math.random()*500)+200,actionType:Object.keys(p)[Math.floor(Math.random()*Object.keys(p).length)]}),children:"🎲 Random Configuration"}),e.jsx(t,{variant:"plain",onClick:()=>o({showCenterOnMobile:!1,showCenterOnTablet:!0,isExpanded:!1,expansionDuration:300,actionType:"search"}),children:"Reset to Defaults"})]}),r.isExpanded&&e.jsxs("div",{style:{marginTop:"var(--t-space-400)",padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-warning-secondary)",borderRadius:"var(--t-border-radius-300)",color:"var(--t-color-text-warning)"},children:[e.jsx("strong",{children:"Current Expansion State:"}),' TopBar is expanded with "',r.actionType,'" content']})]})})]})},parameters:{layout:"fullscreen",docs:{description:{story:"Demonstrates the full flexibility of TopBar for AI agents. Shows dynamic configuration of responsive behavior, mobile actions, expansion content, and animation settings. Perfect for AI-driven adaptive interfaces."}}}};var W,M,O;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <TopBar logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic TopBar layout with just logo and hamburger menu. The center and end sections are empty by default, providing a clean slate for customization.'
      }
    }
  }
}`,...(O=(M=v.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var A,R,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Main Warehouse");
    const warehouses = ["Main Warehouse", "Secondary Warehouse", "Distribution Center"];
    return <TopBar showWarehouseDropdown={true} selectedWarehouse={selectedWarehouse} warehouses={warehouses} logoClickable={true} onWarehouseChange={setSelectedWarehouse} onLogoClick={() => alert('Navigate to dashboard')} onLogoutClick={() => alert('User logged out')} showLogoutOption={true} popoverSide="bottom" popoverAlign="end" />;
  },
  parameters: {
    docs: {
      description: {
        story: 'TopBar with the optional warehouse dropdown enabled via showWarehouseDropdown prop. This is just an example - you can replace the end section with any custom component.'
      }
    }
  }
}`,...(E=(R=g.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var D,L,H;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [endContentType, setEndContentType] = useState("userProfile");
    const endContentOptions = {
      userProfile: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)'
      }}>
          <Button variant="plain" size="small" prefixIcon={<IconBell size={18} />} aria-label="Notifications">
            3
          </Button>
          <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'var(--t-color-fill-brand-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'var(--t-font-weight-medium)',
          fontSize: 'var(--t-font-size-250)',
          cursor: 'pointer'
        }}>
            JD
          </div>
        </div>,
      actions: <div style={{
        display: 'flex',
        gap: 'var(--t-space-200)'
      }}>
          <Button variant="outlined" size="small" prefixIcon={<IconPlus size={16} />}>
            New
          </Button>
          <Button variant="primary" size="small">
            Export
          </Button>
        </div>,
      warehouseExample: <Button variant="outlined" size="small" prefixIcon={<IconBuilding size={16} />}>
          Main Warehouse
        </Button>,
      empty: null
    };
    return <div>
        <TopBar logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} endContent={endContentOptions[endContentType]} />

        {/* Demo controls */}
        <div style={{
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        minHeight: '400px'
      }}>
          <h2 style={{
          color: 'var(--t-color-text-primary)',
          margin: '0 0 var(--t-space-400) 0'
        }}>
            🔄 Swappable End Content
          </h2>
          <p style={{
          color: 'var(--t-color-text-secondary)',
          margin: '0 0 var(--t-space-500) 0'
        }}>
            The end section is fully swappable - you can place ANY component there. Try switching between different content types:
          </p>
          <div style={{
          display: 'flex',
          gap: 'var(--t-space-300)',
          flexWrap: 'wrap'
        }}>
            <Button variant={endContentType === 'userProfile' ? 'primary' : 'outlined'} onClick={() => setEndContentType('userProfile')}>
              User Profile
            </Button>
            <Button variant={endContentType === 'actions' ? 'primary' : 'outlined'} onClick={() => setEndContentType('actions')}>
              Action Buttons
            </Button>
            <Button variant={endContentType === 'warehouseExample' ? 'primary' : 'outlined'} onClick={() => setEndContentType('warehouseExample')}>
              Warehouse Example
            </Button>
            <Button variant={endContentType === 'empty' ? 'primary' : 'outlined'} onClick={() => setEndContentType('empty')}>
              Empty (null)
            </Button>
          </div>

          <div style={{
          marginTop: 'var(--t-space-500)',
          padding: 'var(--t-space-400)',
          backgroundColor: 'var(--t-color-fill-info-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          border: '1px solid var(--t-color-border-info)'
        }}>
            <h3 style={{
            color: 'var(--t-color-text-info)',
            margin: '0 0 var(--t-space-300) 0'
          }}>
              ✨ End Section Capabilities
            </h3>
            <ul style={{
            color: 'var(--t-color-text-info)',
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li>Accepts any React component or element</li>
              <li>Default value is null (no content)</li>
              <li>Can contain user profiles, actions, dropdowns, or custom components</li>
              <li>Automatically aligns to the right edge (left in RTL)</li>
              <li>Warehouse dropdown is just an optional example via showWarehouseDropdown prop</li>
            </ul>
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates the swappable end content slot. The end section can contain user profiles, action buttons, dropdowns, or any custom component. By default, it is empty (null).'
      }
    }
  }
}`,...(H=(L=x.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var N,P,F;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [currentContent, setCurrentContent] = useState("search");
    const contentOptions = {
      search: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)',
        minWidth: '300px'
      }}>
          <TextInput placeholder="Search products, orders, customers..." prefixIcon={<IconSearch size={18} />} style={{
          flex: 1
        }} />
        </div>,
      navigation: <div style={{
        display: 'flex',
        gap: 'var(--t-space-400)',
        alignItems: 'center',
        padding: '0 var(--t-space-400)',
        backgroundColor: 'var(--t-color-fill-brand-secondary)',
        borderRadius: 'var(--t-border-radius-300)',
        height: '40px'
      }}>
          <Button variant="plain" size="small">Dashboard</Button>
          <Button variant="plain" size="small">Orders</Button>
          <Button variant="plain" size="small">Inventory</Button>
        </div>,
      status: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)',
        padding: '0 var(--t-space-400)',
        backgroundColor: 'var(--t-color-fill-success-secondary)',
        borderRadius: 'var(--t-border-radius-300)',
        color: 'var(--t-color-text-success)',
        height: '40px'
      }}>
          <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--t-color-icon-success)'
        }} />
          All Systems Operational
        </div>
    };
    return <div>
        <TopBar showCenterSection={true} centerContent={contentOptions[currentContent]} logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} />

        {/* Demo controls */}
        <div style={{
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        minHeight: '400px'
      }}>
          <h2 style={{
          color: 'var(--t-color-text-primary)',
          margin: '0 0 var(--t-space-400) 0'
        }}>
            🔄 Swappable Center Content
          </h2>
          <p style={{
          color: 'var(--t-color-text-secondary)',
          margin: '0 0 var(--t-space-500) 0'
        }}>
            The center section uses absolute positioning and can contain any content. Try switching between different content types:
          </p>
          <div style={{
          display: 'flex',
          gap: 'var(--t-space-300)',
          flexWrap: 'wrap'
        }}>
            <Button variant={currentContent === 'search' ? 'primary' : 'outlined'} onClick={() => setCurrentContent('search')}>
              Search Bar
            </Button>
            <Button variant={currentContent === 'navigation' ? 'primary' : 'outlined'} onClick={() => setCurrentContent('navigation')}>
              Navigation Menu
            </Button>
            <Button variant={currentContent === 'status' ? 'primary' : 'outlined'} onClick={() => setCurrentContent('status')}>
              Status Indicator
            </Button>
          </div>

          <div style={{
          marginTop: 'var(--t-space-500)',
          padding: 'var(--t-space-400)',
          backgroundColor: 'var(--t-color-fill-info-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          border: '1px solid var(--t-color-border-info)'
        }}>
            <h3 style={{
            color: 'var(--t-color-text-info)',
            margin: '0 0 var(--t-space-300) 0'
          }}>
              ✨ Key Features
            </h3>
            <ul style={{
            color: 'var(--t-color-text-info)',
            margin: 0,
            paddingLeft: 'var(--t-space-400)'
          }}>
              <li>Center content is always perfectly centered (50% of TopBar width)</li>
              <li>Independent of start and end section widths</li>
              <li>End section stays anchored to the right edge</li>
              <li>Supports any type of center content</li>
            </ul>
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates the swappable center content area with absolute positioning. The center content is always perfectly centered regardless of what it contains.'
      }
    }
  }
}`,...(F=(P=y.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var U,Q,_;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Mobile Distribution Center");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const warehouses = ["Mobile Distribution Center", "Tablet Storage Hub"];
    return <div style={{
      position: 'relative',
      minHeight: '100vh'
    }}>
        <TopBar selectedWarehouse={selectedWarehouse} warehouses={warehouses} showCenterSection={true} centerContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)',
        backgroundColor: 'var(--t-color-fill-info-secondary)',
        padding: '0 var(--t-space-400)',
        borderRadius: 'var(--t-border-radius-300)',
        color: 'var(--t-color-text-info)',
        fontSize: 'var(--t-font-size-300)',
        height: '36px',
        whiteSpace: 'nowrap'
      }}>
              <IconHome size={16} />
              <span style={{
          display: 'var(--display-mobile-hidden, inline)'
        }}>Dashboard</span>
            </div>} logoClickable={true} showHamburgerMenu={true} onWarehouseChange={setSelectedWarehouse} onLogoClick={() => alert('Navigate to dashboard')} onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} onLogoutClick={() => alert('User logged out')} showLogoutOption={true} />

        {/* Sidebar overlay */}
        {sidebarOpen && <>
            <div style={{
          position: 'fixed',
          top: 'var(--t-topbar-height, 64px)',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 40
        }} onClick={() => setSidebarOpen(false)} />
            <div style={{
          position: 'fixed',
          top: 'var(--t-topbar-height, 64px)',
          left: 0,
          width: '280px',
          bottom: 0,
          backgroundColor: 'var(--t-color-surface-primary)',
          borderRight: '1px solid var(--t-color-border-secondary)',
          zIndex: 50,
          padding: 'var(--t-space-400)'
        }}>
              <h3 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
                📱 Mobile Navigation
              </h3>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--t-space-200)'
          }}>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Dashboard</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Orders</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Inventory</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Reports</Button>
              </div>
            </div>
          </>}

        {/* Content area */}
        <div style={{
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        minHeight: 'calc(100vh - var(--t-topbar-height, 64px))'
      }}>
          <div style={{
          maxWidth: '600px'
        }}>
            <h1 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
              📱 Responsive TopBar
            </h1>
            <div style={{
            backgroundColor: 'var(--t-color-fill-warning-secondary)',
            padding: 'var(--t-space-400)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-warning)',
            marginBottom: 'var(--t-space-500)'
          }}>
              <h3 style={{
              color: 'var(--t-color-text-warning)',
              margin: '0 0 var(--t-space-300) 0'
            }}>
                📐 Resize your browser to see responsive behavior
              </h3>
              <ul style={{
              color: 'var(--t-color-text-warning)',
              margin: 0,
              paddingLeft: 'var(--t-space-400)'
            }}>
                <li><strong>Desktop (768px+):</strong> Full layout with all content visible</li>
                <li><strong>Tablet (&lt; 768px):</strong> Hamburger menu appears, warehouse text may hide</li>
                <li><strong>Mobile:</strong> Compact layout with essential elements only</li>
              </ul>
            </div>
            <p style={{
            color: 'var(--t-color-text-secondary)',
            marginBottom: 'var(--t-space-400)'
          }}>
              The center section maintains its absolute positioning across all breakpoints,
              ensuring consistent centering regardless of screen size. The hamburger menu
              provides access to navigation on smaller screens.
            </p>
            <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? 'Close' : 'Open'} Mobile Sidebar
            </Button>
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Shows responsive behavior with hamburger menu appearing at tablet breakpoint (768px). Resize the viewport to see how the TopBar adapts while maintaining absolute center positioning.'
      }
    }
  }
}`,...(_=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var V,J,K;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div>
      <TopBar showCenterSection={true} centerContent={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--t-space-300)',
      padding: '0 var(--t-space-500)',
      backgroundColor: 'var(--t-color-fill-brand-secondary)',
      borderRadius: 'var(--t-border-radius-400)',
      color: 'var(--t-color-text-brand)',
      fontWeight: 'var(--t-font-weight-medium)',
      height: '42px'
    }}>
            <IconBuilding size={18} />
            Centered Application Title
          </div>} logoClickable={true} onLogoClick={() => alert('Navigate to home')} />

      <div style={{
      padding: 'var(--t-space-600)',
      backgroundColor: 'var(--t-color-bg-primary)',
      minHeight: '400px'
    }}>
        <h2 style={{
        color: 'var(--t-color-text-primary)',
        margin: '0 0 var(--t-space-400) 0'
      }}>
          🎯 Perfect Center Alignment
        </h2>
        <p style={{
        color: 'var(--t-color-text-secondary)',
        margin: '0'
      }}>
          TopBar with only logo and center content. Shows how absolute positioning keeps
          center content perfectly centered even when the end section is completely empty.
          The center content is positioned at exactly 50% of the TopBar width.
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'TopBar with only logo and center content. Shows how absolute positioning keeps center content perfectly centered even when the end section is empty.'
      }
    }
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var $,q,X;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedWarehouse] = useState("Enterprise Hub");
    const warehouses = ["Enterprise Hub", "Regional Center"];
    const tabs = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: IconHome
    }, {
      id: 'orders',
      label: 'Orders',
      icon: IconBuildingStore
    }, {
      id: 'inventory',
      label: 'Inventory',
      icon: IconBuilding
    }, {
      id: 'users',
      label: 'Users',
      icon: IconUsers
    }];
    return <div>
        <TopBar selectedWarehouse={selectedWarehouse} warehouses={warehouses} showCenterSection={true} centerContent={<div style={{
        display: 'flex',
        gap: 'var(--t-space-200)',
        padding: '0 var(--t-space-400)',
        backgroundColor: 'var(--t-color-surface-primary)',
        border: '1px solid var(--t-color-border-secondary)',
        borderRadius: 'var(--t-border-radius-400)',
        height: '44px',
        alignItems: 'center'
      }}>
              {tabs.map(tab => {
          const Icon = tab.icon;
          return <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--t-space-200)',
            padding: '0 var(--t-space-300)',
            height: '36px',
            border: 'none',
            borderRadius: 'var(--t-border-radius-300)',
            backgroundColor: activeTab === tab.id ? 'var(--t-color-fill-brand-secondary)' : 'transparent',
            color: activeTab === tab.id ? 'var(--t-color-text-brand)' : 'var(--t-color-text-secondary)',
            cursor: 'pointer',
            fontSize: 'var(--t-font-size-300)',
            fontWeight: activeTab === tab.id ? 'var(--t-font-weight-medium)' : 'var(--t-font-weight-normal)',
            transition: 'all 0.2s ease'
          }}>
                    <Icon size={16} />
                    {tab.label}
                  </button>;
        })}
            </div>} logoClickable={true} onLogoClick={() => alert('Navigate to home')} onLogoutClick={() => alert('User logged out')} showLogoutOption={true} />

        <div style={{
        padding: 'var(--t-space-600)',
        backgroundColor: 'var(--t-color-bg-primary)',
        minHeight: '400px'
      }}>
          <h2 style={{
          color: 'var(--t-color-text-primary)',
          margin: '0 0 var(--t-space-400) 0'
        }}>
            🧭 Wide Tab Navigation
          </h2>
          <p style={{
          color: 'var(--t-color-text-secondary)',
          margin: '0 0 var(--t-space-400) 0'
        }}>
            TopBar with wide center content showing navigation tabs. The absolute positioning
            ensures the tabs stay perfectly centered regardless of the warehouse dropdown width
            or any changes to the end section.
          </p>
          <div style={{
          padding: 'var(--t-space-400)',
          backgroundColor: 'var(--t-color-fill-success-secondary)',
          borderRadius: 'var(--t-border-radius-300)',
          color: 'var(--t-color-text-success)'
        }}>
            <strong>Current Tab:</strong> {tabs.find(t => t.id === activeTab)?.label}
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'TopBar with wide center content showing navigation tabs. The absolute positioning ensures the tabs stay centered regardless of the warehouse dropdown width.'
      }
    }
  }
}`,...(X=(q=f.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var Y,Z,G;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Mobile Store");
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const warehouses = ["Mobile Store", "Tablet Hub", "Desktop Center"];
    return <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--t-color-bg-primary)'
    }}>
        <TopBar selectedWarehouse={selectedWarehouse} warehouses={warehouses} onWarehouseChange={setSelectedWarehouse} onLogoutClick={() => alert('User logged out')}
      // Center section configuration
      showCenterSection={true} showCenterSectionOnMobile={false} // Hidden on mobile by default
      showCenterSectionOnTablet={true} // Visible on tablet
      centerContent={<TextInput placeholder="Search products, orders, customers..." prefixIcon={<IconSearch size={18} />} style={{
        minWidth: '300px',
        width: '100%'
      }} />}
      // Expansion configuration
      isExpanded={isExpanded} onExpandToggle={setIsExpanded} expandedContent={<div style={{
        display: 'flex',
        gap: 'var(--t-space-300)',
        alignItems: 'center'
      }}>
              <TextInput placeholder="Search products, orders, customers..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} prefixIcon={<IconSearch size={18} />} style={{
          flex: 1
        }} autoFocus={isExpanded} />
              <Button variant="primary" size="small" onClick={() => {
          alert(\`Searching for: "\${searchQuery}"\`);
          setIsExpanded(false);
        }}>
                Search
              </Button>
            </div>}
      // Mobile action button
      mobileActionContent={<Button variant="plain" size="small" prefixIcon={<IconSearch size={18} />} aria-label="Search" />} expansionDuration={300} logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} />

        {/* Demo content */}
        <div style={{
        padding: 'var(--t-space-600)'
      }}>
          <div style={{
          maxWidth: '600px'
        }}>
            <h1 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
              📱 Mobile Expandable Search
            </h1>

            <div style={{
            backgroundColor: 'var(--t-color-fill-info-secondary)',
            padding: 'var(--t-space-400)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-info)',
            marginBottom: 'var(--t-space-500)'
          }}>
              <h3 style={{
              color: 'var(--t-color-text-info)',
              margin: '0 0 var(--t-space-300) 0'
            }}>
                📐 Resize to mobile view (≤768px) to see the magic!
              </h3>
              <ul style={{
              color: 'var(--t-color-text-info)',
              margin: 0,
              paddingLeft: 'var(--t-space-400)'
            }}>
                <li><strong>Desktop/Tablet:</strong> Search bar visible in center</li>
                <li><strong>Mobile:</strong> Search icon appears, click to expand</li>
                <li><strong>Expanded:</strong> Full search bar with action button</li>
                <li><strong>Animation:</strong> Smooth height transition (300ms)</li>
              </ul>
            </div>

            <p style={{
            color: 'var(--t-color-text-secondary)',
            marginBottom: 'var(--t-space-400)'
          }}>
              This demonstrates the mobile search expansion pattern. The search bar is hidden on mobile
              and replaced with a search icon button. Clicking it expands the TopBar height to reveal
              the full search interface.
            </p>

            <div style={{
            display: 'flex',
            gap: 'var(--t-space-300)',
            flexWrap: 'wrap'
          }}>
              <Button variant={isExpanded ? "primary" : "outlined"} onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Collapse Search' : 'Expand Search'}
              </Button>
              <Button variant="plain" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </div>

            {searchQuery && <div style={{
            marginTop: 'var(--t-space-400)',
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-fill-warning-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            color: 'var(--t-color-text-warning)'
          }}>
                <strong>Search Query:</strong> "{searchQuery}"
              </div>}
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
      viewports: {
        mobile1: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px'
          }
        }
      }
    },
    docs: {
      description: {
        story: 'Demonstrates the mobile expandable search pattern. The search bar is hidden on mobile and replaced with a search icon. Clicking the icon expands the TopBar height to show the full search interface with smooth animations.'
      }
    }
  }
}`,...(G=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var ee,te,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState("Responsive Hub");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const warehouses = ["Responsive Hub", "Breakpoint Center", "Adaptive Store"];
    return <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--t-color-bg-primary)'
    }}>
        <TopBar selectedWarehouse={selectedWarehouse} warehouses={warehouses} onWarehouseChange={setSelectedWarehouse} onLogoutClick={() => alert('User logged out')}
      // Center section with responsive behavior
      showCenterSection={true} showCenterSectionOnTablet={true} // Visible on tablet (768px-1024px)
      showCenterSectionOnMobile={false} // Hidden on mobile (< 768px)
      centerContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)',
        backgroundColor: 'var(--t-color-fill-brand-secondary)',
        padding: '0 var(--t-space-400)',
        borderRadius: 'var(--t-border-radius-300)',
        color: 'var(--t-color-text-brand)',
        height: '36px',
        whiteSpace: 'nowrap',
        fontSize: 'var(--t-font-size-300)',
        fontWeight: 'var(--t-font-weight-medium)'
      }}>
              <IconHome size={16} />
              <span>Responsive Navigation</span>
            </div>}
      // Mobile hamburger menu
      showHamburgerMenu={true} isMobileSidebarOpen={sidebarOpen} onHamburgerMenuClick={() => setSidebarOpen(!sidebarOpen)} logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} />

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && <>
            <div style={{
          position: 'fixed',
          top: 'var(--t-topbar-height, 64px)',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 40
        }} onClick={() => setSidebarOpen(false)} />
            <div style={{
          position: 'fixed',
          top: 'var(--t-topbar-height, 64px)',
          left: 0,
          width: '280px',
          bottom: 0,
          backgroundColor: 'var(--t-color-surface-primary)',
          borderRight: '1px solid var(--t-color-border-secondary)',
          zIndex: 50,
          padding: 'var(--t-space-400)'
        }}>
              <h3 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
                📱 Mobile Navigation
              </h3>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--t-space-200)'
          }}>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Dashboard</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Analytics</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Orders</Button>
                <Button variant="plain" style={{
              justifyContent: 'flex-start'
            }}>Settings</Button>
              </div>
            </div>
          </>}

        {/* Content Area */}
        <div style={{
        padding: 'var(--t-space-600)',
        minHeight: 'calc(100vh - var(--t-topbar-height, 64px))'
      }}>
          <div style={{
          maxWidth: '800px'
        }}>
            <h1 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
              📐 Responsive Breakpoints
            </h1>

            <div style={{
            backgroundColor: 'var(--t-color-fill-warning-secondary)',
            padding: 'var(--t-space-500)',
            borderRadius: 'var(--t-border-radius-400)',
            border: '1px solid var(--t-color-border-warning)',
            marginBottom: 'var(--t-space-600)'
          }}>
              <h2 style={{
              color: 'var(--t-color-text-warning)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
                🎯 Resize your browser to see responsive behavior!
              </h2>
              <div style={{
              display: 'grid',
              gap: 'var(--t-space-400)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
            }}>
                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-warning)',
                  margin: '0 0 var(--t-space-200) 0'
                }}>
                    🖥️ Desktop (1024px+)
                  </h3>
                  <ul style={{
                  color: 'var(--t-color-text-warning)',
                  margin: 0,
                  paddingLeft: 'var(--t-space-400)'
                }}>
                    <li>Center section fully visible</li>
                    <li>No hamburger menu</li>
                    <li>Full warehouse text shown</li>
                    <li>Optimal spacing</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-warning)',
                  margin: '0 0 var(--t-space-200) 0'
                }}>
                    📱 Tablet (768px-1024px)
                  </h3>
                  <ul style={{
                  color: 'var(--t-color-text-warning)',
                  margin: 0,
                  paddingLeft: 'var(--t-space-400)'
                }}>
                    <li>Center section shrinks</li>
                    <li>Hamburger menu appears</li>
                    <li>Warehouse text may hide</li>
                    <li>Compressed layout</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-warning)',
                  margin: '0 0 var(--t-space-200) 0'
                }}>
                    📱 Mobile (≤768px)
                  </h3>
                  <ul style={{
                  color: 'var(--t-color-text-warning)',
                  margin: 0,
                  paddingLeft: 'var(--t-space-400)'
                }}>
                    <li>Center section hidden</li>
                    <li>Hamburger menu active</li>
                    <li>Icon-only warehouse</li>
                    <li>Mobile-first design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{
            backgroundColor: 'var(--t-color-fill-info-secondary)',
            padding: 'var(--t-space-400)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-info)',
            marginBottom: 'var(--t-space-500)'
          }}>
              <h3 style={{
              color: 'var(--t-color-text-info)',
              margin: '0 0 var(--t-space-300) 0'
            }}>
                ✨ Key Responsive Features
              </h3>
              <ul style={{
              color: 'var(--t-color-text-info)',
              margin: 0,
              paddingLeft: 'var(--t-space-400)'
            }}>
                <li><strong>Center Section Flexibility:</strong> Can be shown/hidden per breakpoint</li>
                <li><strong>Absolute Positioning:</strong> Always centered regardless of content</li>
                <li><strong>Mobile Action Support:</strong> Expandable functionality ready</li>
                <li><strong>Progressive Enhancement:</strong> Works without JavaScript</li>
                <li><strong>AI Agent Friendly:</strong> Fully configurable behavior</li>
              </ul>
            </div>

            <p style={{
            color: 'var(--t-color-text-secondary)',
            fontSize: 'var(--t-font-size-400)',
            lineHeight: 1.6
          }}>
              The TopBar component automatically adapts to different screen sizes using CSS media queries
              and configurable props. This ensures optimal user experience across all devices while
              maintaining the design system's visual consistency.
            </p>

            <div style={{
            display: 'flex',
            gap: 'var(--t-space-300)',
            flexWrap: 'wrap',
            marginTop: 'var(--t-space-500)'
          }}>
              <Button onClick={() => setSidebarOpen(!sidebarOpen)} variant="outlined">
                {sidebarOpen ? 'Close' : 'Open'} Mobile Sidebar
              </Button>
              <Button onClick={() => setSelectedWarehouse(warehouses[Math.floor(Math.random() * warehouses.length)])} variant="plain">
                Random Warehouse
              </Button>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive demonstration of responsive breakpoints. Shows how the TopBar adapts to desktop (1024px+), tablet (768px-1024px), and mobile (≤768px) viewports with configurable center section visibility.'
      }
    }
  }
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ae,ne;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [config, setConfig] = useState({
      showCenterOnMobile: false,
      showCenterOnTablet: true,
      isExpanded: false,
      expansionDuration: 300,
      actionType: 'search'
    });
    const [selectedWarehouse, setSelectedWarehouse] = useState("AI Warehouse");
    const [searchQuery, setSearchQuery] = useState('');
    const warehouses = ["AI Warehouse", "ML Hub", "Data Center"];
    const actionConfigurations = {
      search: {
        button: <Button variant="plain" size="small" prefixIcon={<IconSearch size={18} />} aria-label="Search" />,
        expandedContent: <div style={{
          display: 'flex',
          gap: 'var(--t-space-300)',
          alignItems: 'center'
        }}>
            <TextInput placeholder="AI-powered search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} prefixIcon={<IconSearch size={18} />} style={{
            flex: 1
          }} />
            <Button variant="primary" size="small">Search</Button>
          </div>
      },
      menu: {
        button: <Button variant="plain" size="small" prefixIcon={<IconMenu2 size={18} />} aria-label="Menu" />,
        expandedContent: <div style={{
          display: 'flex',
          gap: 'var(--t-space-400)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
            <Button variant="outlined" size="small" prefixIcon={<IconHome />}>Dashboard</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconSettings />}>Settings</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconUsers />}>Users</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconHelp />}>Help</Button>
          </div>
      },
      filter: {
        button: <Button variant="plain" size="small" prefixIcon={<IconFilter size={18} />} aria-label="Filters" />,
        expandedContent: <div style={{
          display: 'flex',
          gap: 'var(--t-space-300)',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
            <Button variant="outlined" size="small" prefixIcon={<IconSortAscending />}>Sort A-Z</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconFilter />}>Price Range</Button>
            <Button variant="outlined" size="small" prefixIcon={<IconBell />}>In Stock</Button>
            <Button variant="primary" size="small">Apply Filters</Button>
          </div>
      },
      notification: {
        button: <Button variant="plain" size="small" prefixIcon={<IconBell size={18} />} aria-label="Notifications" />,
        expandedContent: <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--t-space-300)',
          padding: 'var(--t-space-200) 0'
        }}>
            <div style={{
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-fill-info-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            color: 'var(--t-color-text-info)'
          }}>
              📦 New order #1234 received
            </div>
            <div style={{
            padding: 'var(--t-space-300)',
            backgroundColor: 'var(--t-color-fill-warning-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            color: 'var(--t-color-text-warning)'
          }}>
              ⚠️ Low stock alert for Product X
            </div>
            <Button variant="primary" size="small">View All</Button>
          </div>
      }
    };
    const currentAction = actionConfigurations[config.actionType];
    return <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--t-color-bg-primary)'
    }}>
        <TopBar selectedWarehouse={selectedWarehouse} warehouses={warehouses} onWarehouseChange={setSelectedWarehouse} onLogoutClick={() => alert('User logged out')}
      // Responsive configuration
      showCenterSection={true} showCenterSectionOnTablet={config.showCenterOnTablet} showCenterSectionOnMobile={config.showCenterOnMobile} centerContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--t-space-300)',
        backgroundColor: 'var(--t-color-fill-success-secondary)',
        padding: '0 var(--t-space-400)',
        borderRadius: 'var(--t-border-radius-300)',
        color: 'var(--t-color-text-success)',
        height: '36px',
        fontSize: 'var(--t-font-size-300)',
        fontWeight: 'var(--t-font-weight-medium)'
      }}>
              🤖 AI Agent Configured
            </div>}
      // Expansion configuration
      isExpanded={config.isExpanded} onExpandToggle={expanded => setConfig({
        ...config,
        isExpanded: expanded
      })} expandedContent={currentAction.expandedContent} mobileActionContent={currentAction.button} expansionDuration={config.expansionDuration} logoClickable={true} onLogoClick={() => alert('Navigate to dashboard')} />

        {/* Configuration Panel */}
        <div style={{
        padding: 'var(--t-space-600)'
      }}>
          <div style={{
          maxWidth: '900px'
        }}>
            <h1 style={{
            color: 'var(--t-color-text-primary)',
            margin: '0 0 var(--t-space-400) 0'
          }}>
              🤖 AI Agent Flexible Configuration
            </h1>

            <div style={{
            backgroundColor: 'var(--t-color-fill-success-secondary)',
            padding: 'var(--t-space-500)',
            borderRadius: 'var(--t-border-radius-400)',
            border: '1px solid var(--t-color-border-success)',
            marginBottom: 'var(--t-space-600)'
          }}>
              <h2 style={{
              color: 'var(--t-color-text-success)',
              margin: '0 0 var(--t-space-400) 0'
            }}>
                ⚙️ Live Configuration Panel
              </h2>
              <p style={{
              color: 'var(--t-color-text-success)',
              marginBottom: 'var(--t-space-400)'
            }}>
                This demonstrates how AI agents can dynamically configure the TopBar behavior.
                Try different combinations to see the flexibility in action!
              </p>

              <div style={{
              display: 'grid',
              gap: 'var(--t-space-400)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}>
                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-success)',
                  margin: '0 0 var(--t-space-300) 0'
                }}>
                    📱 Responsive Visibility
                  </h3>
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--t-space-200)'
                }}>
                    <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--t-space-200)',
                    color: 'var(--t-color-text-success)'
                  }}>
                      <input type="checkbox" checked={config.showCenterOnTablet} onChange={e => setConfig({
                      ...config,
                      showCenterOnTablet: e.target.checked
                    })} />
                      Show center on tablet
                    </label>
                    <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--t-space-200)',
                    color: 'var(--t-color-text-success)'
                  }}>
                      <input type="checkbox" checked={config.showCenterOnMobile} onChange={e => setConfig({
                      ...config,
                      showCenterOnMobile: e.target.checked
                    })} />
                      Show center on mobile
                    </label>
                  </div>
                </div>

                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-success)',
                  margin: '0 0 var(--t-space-300) 0'
                }}>
                    🔧 Mobile Action Type
                  </h3>
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--t-space-200)'
                }}>
                    {Object.keys(actionConfigurations).map(key => <label key={key} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--t-space-200)',
                    color: 'var(--t-color-text-success)'
                  }}>
                        <input type="radio" name="actionType" value={key} checked={config.actionType === key} onChange={e => setConfig({
                      ...config,
                      actionType: e.target.value
                    })} />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>)}
                  </div>
                </div>

                <div>
                  <h3 style={{
                  color: 'var(--t-color-text-success)',
                  margin: '0 0 var(--t-space-300) 0'
                }}>
                    ⏱️ Animation Settings
                  </h3>
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--t-space-200)'
                }}>
                    <label style={{
                    color: 'var(--t-color-text-success)'
                  }}>
                      Duration: {config.expansionDuration}ms
                      <input type="range" min="100" max="1000" step="50" value={config.expansionDuration} onChange={e => setConfig({
                      ...config,
                      expansionDuration: parseInt(e.target.value)
                    })} style={{
                      width: '100%',
                      marginTop: 'var(--t-space-100)'
                    }} />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
            backgroundColor: 'var(--t-color-fill-info-secondary)',
            padding: 'var(--t-space-400)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-info)',
            marginBottom: 'var(--t-space-500)'
          }}>
              <h3 style={{
              color: 'var(--t-color-text-info)',
              margin: '0 0 var(--t-space-300) 0'
            }}>
                🚀 AI Agent Use Cases
              </h3>
              <div style={{
              display: 'grid',
              gap: 'var(--t-space-300)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
            }}>
                <div>
                  <strong style={{
                  color: 'var(--t-color-text-info)'
                }}>Adaptive UI:</strong>
                  <p style={{
                  color: 'var(--t-color-text-info)',
                  margin: 'var(--t-space-100) 0 0 0'
                }}>
                    AI can detect user behavior patterns and automatically adjust responsive breakpoints.
                  </p>
                </div>
                <div>
                  <strong style={{
                  color: 'var(--t-color-text-info)'
                }}>Context-Aware Actions:</strong>
                  <p style={{
                  color: 'var(--t-color-text-info)',
                  margin: 'var(--t-space-100) 0 0 0'
                }}>
                    Mobile actions can change based on current user context or workflow.
                  </p>
                </div>
                <div>
                  <strong style={{
                  color: 'var(--t-color-text-info)'
                }}>Dynamic Content:</strong>
                  <p style={{
                  color: 'var(--t-color-text-info)',
                  margin: 'var(--t-space-100) 0 0 0'
                }}>
                    Center and expanded content can be generated or modified programmatically.
                  </p>
                </div>
                <div>
                  <strong style={{
                  color: 'var(--t-color-text-info)'
                }}>Performance Optimization:</strong>
                  <p style={{
                  color: 'var(--t-color-text-info)',
                  margin: 'var(--t-space-100) 0 0 0'
                }}>
                    Animation durations can be adjusted based on device capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
            display: 'flex',
            gap: 'var(--t-space-300)',
            flexWrap: 'wrap'
          }}>
              <Button variant={config.isExpanded ? "primary" : "outlined"} onClick={() => setConfig({
              ...config,
              isExpanded: !config.isExpanded
            })}>
                {config.isExpanded ? 'Collapse' : 'Expand'} Mobile Action
              </Button>
              <Button variant="plain" onClick={() => setConfig({
              showCenterOnMobile: Math.random() > 0.5,
              showCenterOnTablet: Math.random() > 0.3,
              isExpanded: false,
              expansionDuration: Math.floor(Math.random() * 500) + 200,
              actionType: Object.keys(actionConfigurations)[Math.floor(Math.random() * Object.keys(actionConfigurations).length)]
            })}>
                🎲 Random Configuration
              </Button>
              <Button variant="plain" onClick={() => setConfig({
              showCenterOnMobile: false,
              showCenterOnTablet: true,
              isExpanded: false,
              expansionDuration: 300,
              actionType: 'search'
            })}>
                Reset to Defaults
              </Button>
            </div>

            {config.isExpanded && <div style={{
            marginTop: 'var(--t-space-400)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-warning-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            color: 'var(--t-color-text-warning)'
          }}>
                <strong>Current Expansion State:</strong> TopBar is expanded with "{config.actionType}" content
              </div>}
          </div>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstrates the full flexibility of TopBar for AI agents. Shows dynamic configuration of responsive behavior, mobile actions, expansion content, and animation settings. Perfect for AI-driven adaptive interfaces.'
      }
    }
  }
}`,...(ne=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const me=["BasicLayout","WithWarehouseDropdown","EndContentSwappable","CenterContentSwappable","ResponsiveBehavior","NoEndSection","WideTabNavigation","MobileExpandableSearch","ResponsiveBreakpoints","AIAgentFlexible"],Ee=Object.freeze(Object.defineProperty({__proto__:null,AIAgentFlexible:j,BasicLayout:v,CenterContentSwappable:y,EndContentSwappable:x,MobileExpandableSearch:C,NoEndSection:m,ResponsiveBehavior:b,ResponsiveBreakpoints:w,WideTabNavigation:f,WithWarehouseDropdown:g,__namedExportsOrder:me,default:be},Symbol.toStringTag,{value:"Module"}));export{v as B,y as C,x as E,C as M,b as R,Ee as T,g as W};
