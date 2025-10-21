const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Page-DNYJmwZG.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./clsx-B-dksMZM.js","./TopBar-DHDBH0t-.js","./createReactComponent-CKk3lApD.js","./Separator-DDuP3uRh.js","./Separator-Tp2ElSza.css","./IconUsers-CM3_DD69.js","./Popover-B4T-UWsl.js","./index-Dcu5jVSv.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-N3eucVg6.js","./index-BTe66ZhM.js","./index-DavpLpmr.js","./Drawer-CJqTAku3.js","./Button-CoP_mZBT.js","./Button-BkO63AX8.css","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./Popover-BL_lnscC.css","./IconChevronDown-D1vfiZl2.js","./Logo-DZFxyD9b.js","./AspectRatio-BLaXxon9.js","./AspectRatio-BnjZEaot.css","./Logo-BpEKDq6D.css","./TopBar-BSQdCjgz.css","./Sidebar-B4HhY5gV.js","./IconHome-DqBDdcGV.js","./IconChartBar-CIBZkQ6D.js","./IconSettings-cjygYtAZ.js","./IconChevronRight-D3J9D-fl.js","./Sidebar-XJ-IZT0t.css"])))=>i.map(i=>d[i]);
import{_ as Ne}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as c,R as Oe}from"./index-D4H_InIO.js";import{c as w}from"./clsx-B-dksMZM.js";import{T as Fe}from"./TopBar-DHDBH0t-.js";import{S as Xe,I as qe}from"./Sidebar-B4HhY5gV.js";import{I as Ue}from"./IconSettings-cjygYtAZ.js";import{I as $e,a as Ge}from"./IconUsers-CM3_DD69.js";import{c as Je}from"./createReactComponent-CKk3lApD.js";import{I as Ke}from"./IconHome-DqBDdcGV.js";import{I as Ee}from"./IconChartBar-CIBZkQ6D.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5",key:"svg-2"}]],Ye=Je("outline","truck","Truck",Qe),Ze="_page_de3jw_2",er="_pageBody_de3jw_12",rr="_content_de3jw_20",tr="_container_de3jw_30",ar="_sidebar_de3jw_49",or="_topBar_de3jw_55",sr="_sidebarMobile_de3jw_61",ir="_sidebarMobileOpen_de3jw_79",nr="_backdrop_de3jw_88",dr="_fadeIn_de3jw_1",lr="_pageWithMobileSidebar_de3jw_139",n={page:Ze,pageBody:er,content:rr,container:tr,sidebar:ar,topBar:or,sidebarMobile:sr,sidebarMobileOpen:ir,backdrop:nr,fadeIn:dr,"breakpoint-xl":"_breakpoint-xl_de3jw_109","breakpoint-l":"_breakpoint-l_de3jw_115","breakpoint-md":"_breakpoint-md_de3jw_121","breakpoint-sm":"_breakpoint-sm_de3jw_127","breakpoint-xs":"_breakpoint-xs_de3jw_133",pageWithMobileSidebar:lr},cr=(r=!1)=>{const[t,d]=c.useState("xl");return c.useEffect(()=>{if(r||typeof window>"u")return;const g=()=>{const l=window.innerWidth;return l>=1440?"xl":l>=1220?"l":l>=768?"md":l>=490?"sm":"xs"},m=()=>{d(g())};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[r]),t},z=c.forwardRef(({children:r,sidebarProps:t={},topBarProps:d={},showSidebar:g=!0,showTopBar:m=!0,containerMaxWidth:l="1240px",disableResponsive:u=!1,className:N,containerClassName:y,contentClassName:A,mobileSidebarOpen:h,onMobileSidebarToggle:f,currentBreakpoint:E,onBreakpointChange:p,...X},b)=>{const s=cr(u),a=E||s,[Te,ze]=c.useState(!1),x=h!==void 0?h:Te;c.useEffect(()=>{p==null||p(a)},[a,p]);const O={lineHeight:typeof document<"u"&&(document.dir==="rtl"||document.documentElement.dir==="rtl")?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)"},De=a==="xl"||a==="l",q=a==="md",T=a==="sm"||a==="xs",F=()=>{const U=!x;h===void 0&&ze(U),f==null||f(U)};c.useEffect(()=>{!T&&x&&F()},[a]);const He={...t,expanded:u||De?!0:q?!1:void 0,hoverExpand:!u&&q,className:w(n.sidebar,T&&n.sidebarMobile,x&&n.sidebarMobileOpen,t.className)},Ve={...d,showHamburgerMenu:!u&&T,isMobileSidebarOpen:x,onHamburgerMenuClick:F,className:w(n.topBar,d.className)};return e.jsxs("div",{ref:b,className:w(n.page,n[`breakpoint-${a}`],x&&n.pageWithMobileSidebar,N),style:{...O,"--container-max-width":l},"data-breakpoint":a,...X,children:[T&&x&&e.jsx("div",{className:n.backdrop,onClick:F,"aria-hidden":"true"}),m&&e.jsx(Fe,{...Ve}),e.jsxs("div",{className:n.pageBody,children:[g&&e.jsx(Xe,{...He}),e.jsx("main",{className:w(n.content,A),style:O,children:e.jsx("div",{className:w(n.container,y),style:O,children:r})})]})]})});z.displayName="Page";try{z.displayName="Page",z.__docgenInfo={description:"",displayName:"Page",props:{children:{defaultValue:null,description:"Content to display in the main area",name:"children",required:!0,type:{name:"ReactNode"}},sidebarProps:{defaultValue:{value:"{}"},description:`Props to pass to the Sidebar component
All sidebar configuration (menuItems, handlers, etc.) passed through here`,name:"sidebarProps",required:!1,type:{name:"Partial<SidebarProps> | undefined"}},topBarProps:{defaultValue:{value:"{}"},description:`Props to pass to the TopBar component
All topbar configuration (warehouse, center content, etc.) passed through here`,name:"topBarProps",required:!1,type:{name:"Partial<TopBarProps> | undefined"}},showSidebar:{defaultValue:{value:"true"},description:"Whether to show the sidebar",name:"showSidebar",required:!1,type:{name:"boolean | undefined"}},showTopBar:{defaultValue:{value:"true"},description:"Whether to show the top bar",name:"showTopBar",required:!1,type:{name:"boolean | undefined"}},containerMaxWidth:{defaultValue:{value:"1240px"},description:"Maximum width for the content container",name:"containerMaxWidth",required:!1,type:{name:"string | undefined"}},disableResponsive:{defaultValue:{value:"false"},description:"Disable responsive behavior and use desktop layout",name:"disableResponsive",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Custom class name for the page container",name:"className",required:!1,type:{name:"string | undefined"}},containerClassName:{defaultValue:null,description:"Custom class name for the content container",name:"containerClassName",required:!1,type:{name:"string | undefined"}},contentClassName:{defaultValue:null,description:"Custom class name for the main content area",name:"contentClassName",required:!1,type:{name:"string | undefined"}},mobileSidebarOpen:{defaultValue:null,description:"Controlled mobile sidebar state",name:"mobileSidebarOpen",required:!1,type:{name:"boolean | undefined"}},onMobileSidebarToggle:{defaultValue:null,description:"Callback when mobile sidebar open state changes",name:"onMobileSidebarToggle",required:!1,type:{name:"((open: boolean) => void) | undefined"}},currentBreakpoint:{defaultValue:null,description:"Current breakpoint (for external control)",name:"currentBreakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},onBreakpointChange:{defaultValue:null,description:"Callback when breakpoint changes",name:"onBreakpointChange",required:!1,type:{name:"((breakpoint: PageBreakpoint) => void) | undefined"}}}}}catch{}const pr={title:"Layout/Page",component:z,parameters:{layout:"fullscreen",docs:{page:()=>Ne(()=>import("./Page-DNYJmwZG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]),import.meta.url)}},argTypes:{children:{control:!1,description:"Content to display in the main area"},showSidebar:{control:"boolean",description:"Whether to show the sidebar"},showTopBar:{control:"boolean",description:"Whether to show the top bar"},containerMaxWidth:{control:"text",description:"Maximum width for the content container"},disableResponsive:{control:"boolean",description:"Disable responsive behavior and use desktop layout"}}},D=[{id:"dashboard",icon:Ke,label:"Dashboard",labelEn:"Dashboard",labelAr:"لوحة القيادة"},{id:"analytics",icon:Ee,label:"Analytics",labelEn:"Analytics",labelAr:"التحليلات"},{id:"inventory",icon:qe,label:"Inventory",labelEn:"Inventory",labelAr:"المخزون",hasChildren:!0,children:[{id:"products",label:"Products",labelEn:"Products",labelAr:"المنتجات"},{id:"categories",label:"Categories",labelEn:"Categories",labelAr:"الفئات"}]}],H=[{id:"users",icon:Ge,label:"Users",labelEn:"Users",labelAr:"المستخدمون"},{id:"shipping",icon:Ye,label:"Shipping",labelEn:"Shipping",labelAr:"الشحن"}],V=[{id:"settings",icon:Ue,label:"Settings",labelEn:"Settings",labelAr:"الإعدادات"},{id:"logout",icon:$e,label:"Logout",labelEn:"Logout",labelAr:"تسجيل الخروج"}],mr=({title:r="Live Responsive Demo"})=>{const[t,d]=c.useState({width:0,height:0}),[g,m]=c.useState({width:0,height:0}),l=c.useRef(null);c.useEffect(()=>{const s=()=>{if(d({width:window.innerWidth,height:window.innerHeight}),l.current){const a=l.current.getBoundingClientRect();m({width:Math.round(a.width),height:Math.round(a.height)})}};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const u=240,N=56,y=t.width-u,A=1240,h=24,f=y-h*2,E=Math.min(A,f),p=(y-E)/2,b=(s=>s>=1440?{name:"XL",description:"Extra Large (>1440px)",color:"#10B981"}:s>=1220?{name:"L",description:"Large (1220-1439px)",color:"#3B82F6"}:s>=768?{name:"MD",description:"Medium (768-1219px)",color:"#F59E0B"}:s>=490?{name:"SM",description:"Small (490-767px)",color:"#EF4444"}:{name:"XS",description:"Extra Small (<490px)",color:"#8B5CF6"})(t.width);return e.jsxs("div",{ref:l,style:{padding:"2rem",backgroundColor:"var(--t-color-surface-secondary, #f8f9fa)",borderRadius:"var(--t-border-radius-200, 8px)",minHeight:"600px",border:"2px dashed var(--t-color-border-brand, #16161d)",position:"relative"},children:[e.jsxs("div",{style:{position:"absolute",top:"8px",right:"8px",background:"var(--t-color-surface-primary, #ffffff)",padding:"8px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:600,border:"1px solid var(--t-color-border-secondary, #e2e8f0)",fontFamily:"monospace"},children:["Container: ",g.width,"×",g.height,"px"]}),e.jsx("h1",{style:{margin:"0 0 2rem 0",fontSize:"var(--t-font-size-heading-lg, 2rem)",fontWeight:"var(--t-font-weight-semibold, 600)",color:"var(--t-color-text-primary, #16161d)",textAlign:"center"},children:r}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--t-color-surface-primary, #ffffff)",borderRadius:"var(--t-border-radius-200, 8px)",border:"1px solid var(--t-color-border-secondary, #e2e8f0)"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",color:"var(--t-color-text-primary, #16161d)"},children:"🪟 Window Size"}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"0.5rem"},children:[t.width," × ",t.height,"px"]}),e.jsxs("div",{style:{display:"inline-block",padding:"4px 8px",borderRadius:"4px",background:b.color,color:"white",fontSize:"0.875rem",fontWeight:600},children:[b.name,": ",b.description]})]}),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--t-color-surface-primary, #ffffff)",borderRadius:"var(--t-border-radius-200, 8px)",border:"1px solid var(--t-color-border-secondary, #e2e8f0)"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",color:"var(--t-color-text-primary, #16161d)"},children:"📐 Container Logic"}),e.jsxs("div",{style:{fontSize:"0.875rem",lineHeight:1.6},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Max Container:"})," ",e.jsxs("code",{children:[A,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Available Space:"})," ",e.jsxs("code",{children:[f,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Actual Container:"})," ",e.jsxs("code",{style:{color:b.color,fontWeight:"bold"},children:[E,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Side Margins:"})," ",e.jsxs("code",{children:[Math.round(p),"px each"]})]})]})]}),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--t-color-surface-primary, #ffffff)",borderRadius:"var(--t-border-radius-200, 8px)",border:"1px solid var(--t-color-border-secondary, #e2e8f0)"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",color:"var(--t-color-text-primary, #16161d)"},children:"🎛️ Layout State"}),e.jsxs("div",{style:{fontSize:"0.875rem",lineHeight:1.6},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Sidebar:"})," ",e.jsxs("code",{children:[u,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"TopBar:"})," ",e.jsxs("code",{children:[N,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Content Width:"})," ",e.jsxs("code",{children:[y,"px"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Margin Behavior:"})," ",e.jsx("code",{style:{color:p>=h?"#10B981":"#EF4444",fontWeight:"bold"},children:p>=h?"Flexible":"Fixed"})]})]})]})]}),e.jsxs("div",{style:{background:"linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)",padding:"2rem",borderRadius:"8px",border:"2px dashed #10B981",textAlign:"center",marginBottom:"2rem"},children:[e.jsx("h2",{style:{margin:"0 0 1rem 0",color:"#10B981"},children:"Content Area Visualization"}),e.jsxs("p",{style:{margin:0,fontSize:"0.875rem",color:"#6B7280"},children:["This green area represents your actual content container.",e.jsx("br",{}),"Resize the window to see how margins adapt at different viewport widths."]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[{title:"Extreme Width Test",desc:"Watch margins grow on ultra-wide screens"},{title:"Container Logic",desc:"Max 1240px width with smart margins"},{title:"Responsive Behavior",desc:"Automatic breakpoint adaptation"},{title:"Margin Calculation",desc:"Dynamic spacing based on available space"},{title:"Layout Orchestration",desc:"Sidebar + TopBar + Content integration"},{title:"Real-time Demo",desc:"Live metrics update as you resize"}].map((s,a)=>e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--t-color-surface-primary, #ffffff)",borderRadius:"var(--t-border-radius-200, 8px)",border:"1px solid var(--t-color-border-secondary, #e2e8f0)"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"1rem",color:b.color},children:s.title}),e.jsx("p",{style:{margin:0,color:"var(--t-color-text-secondary, #64748b)",fontSize:"0.875rem"},children:s.desc})]},a))}),e.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",backgroundColor:"var(--t-color-surface-warning, #FEF3C7)",borderRadius:"8px",border:"1px solid var(--t-color-border-warning, #F59E0B)",textAlign:"center"},children:[e.jsx("strong",{children:"🎯 Testing Instructions:"}),e.jsx("br",{}),"Resize your browser window to see real-time responsive behavior. On ultra-wide screens, watch the margins grow while keeping the container at max 1240px."]})]})},i=({title:r="Page Content",description:t="This is the main content area"})=>e.jsxs("div",{style:{padding:"2rem",backgroundColor:"var(--t-color-surface-secondary, #f8f9fa)",borderRadius:"var(--t-border-radius-200, 8px)",minHeight:"600px"},children:[e.jsx("h1",{style:{margin:"0 0 1rem 0",fontSize:"var(--t-font-size-heading-lg, 2rem)",fontWeight:"var(--t-font-weight-semibold, 600)",color:"var(--t-color-text-primary, #16161d)"},children:r}),e.jsx("p",{style:{margin:"0 0 2rem 0",fontSize:"var(--t-font-size-body-md, 1rem)",color:"var(--t-color-text-secondary, #64748b)",lineHeight:"var(--t-line-height-english, 1.5)"},children:t}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[1,2,3,4,5,6].map(d=>e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--t-color-surface-primary, #ffffff)",borderRadius:"var(--t-border-radius-200, 8px)",border:"1px solid var(--t-color-border-secondary, #e2e8f0)"},children:[e.jsxs("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.125rem"},children:["Card ",d]}),e.jsxs("p",{style:{margin:0,color:"var(--t-color-text-secondary, #64748b)"},children:["Sample content for card ",d,". This demonstrates how content flows within the responsive container."]})]},d))})]}),o={args:{children:e.jsx(i,{}),sidebarProps:{menuItems:D,secondaryItems:H,bottomItems:V,showBottomSection:!0,selectedItem:"dashboard"},topBarProps:{selectedWarehouse:"Al Haram Warehouse",warehouses:["Al Haram Warehouse","Main Warehouse","Secondary Warehouse"]}}},v={args:{...o.args,children:e.jsx(i,{title:"XL Breakpoint (>1440px)",description:"Full sidebar expanded, 1240px max container with flexible margins"})},parameters:{viewport:{defaultViewport:"desktop"},docs:{description:{story:"XL breakpoint showing full expanded sidebar with maximum container width and flexible margins."}}}},S={args:{...o.args,children:e.jsx(i,{title:"L Breakpoint (1220-1439px)",description:"Full sidebar expanded, 1240px container with 24px minimum margins"})},parameters:{viewport:{defaultViewport:"laptop"},docs:{description:{story:"L breakpoint maintaining full sidebar with 24px minimum margins."}}}},j={args:{...o.args,children:e.jsx(i,{title:"MD Breakpoint (768-1219px)",description:"Icon-only sidebar with hover expansion, 24px margins"})},parameters:{viewport:{defaultViewport:"tablet"},docs:{description:{story:"MD breakpoint with icon-only sidebar that expands on hover. Hover over the sidebar to see the expansion behavior."}}}},k={args:{...o.args,children:e.jsx(i,{title:"SM Breakpoint (490-767px)",description:"Hidden sidebar with mobile overlay, 16px margins"})},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"SM breakpoint with hidden sidebar accessible via hamburger menu. Click the hamburger icon to open the mobile sidebar."}}}},B={args:{...o.args,children:e.jsx(i,{title:"XS Breakpoint (<490px)",description:"Hidden sidebar with mobile overlay, 16px margins, smallest screens"})},parameters:{viewport:{defaultViewport:"mobile2"},docs:{description:{story:"XS breakpoint for the smallest mobile devices with optimized spacing."}}}},C={args:{...o.args,children:e.jsx(i,{title:"دعم اللغة العربية",description:"هذا مثال على كيفية عمل المكون مع النصوص العربية واتجاه النص من اليمين إلى اليسار. يتم تطبيق الخط العربي تلقائياً وضبط ارتفاع الأسطر."}),sidebarProps:{menuItems:D.map(r=>({...r,label:r.labelAr||r.label})),secondaryItems:H.map(r=>({...r,label:r.labelAr||r.label})),bottomItems:V.map(r=>({...r,label:r.labelAr||r.label})),showBottomSection:!0,selectedItem:"dashboard"},topBarProps:{selectedWarehouse:"مستودع الحرم",warehouses:["مستودع الحرم","المستودع الرئيسي","المستودع الثانوي"]}},parameters:{direction:"rtl",docs:{description:{story:"RTL (Right-to-Left) support with Arabic content, proper font switching, and layout adjustments."}}}},I={args:{...o.args,showSidebar:!1,children:e.jsx(i,{title:"Without Sidebar",description:"Page layout with only TopBar and content area, no sidebar"})},parameters:{docs:{description:{story:"Page layout with sidebar hidden, useful for landing pages or simple layouts."}}}},W={args:{...o.args,showTopBar:!1,children:e.jsx(i,{title:"Without TopBar",description:"Page layout with only Sidebar and content area, no top bar"})},parameters:{docs:{description:{story:"Page layout with TopBar hidden, useful for full-screen applications."}}}},_={args:{showSidebar:!1,showTopBar:!1,children:e.jsx(i,{title:"Minimal Layout",description:"Only content area with responsive container, no sidebar or topbar"})},parameters:{docs:{description:{story:"Minimal layout with only the responsive content container."}}}},M={args:{...o.args,containerMaxWidth:"800px",children:e.jsx(i,{title:"Custom Container Width",description:"Using custom container max-width of 800px instead of default 1240px"})},parameters:{docs:{description:{story:"Page with custom container max-width (800px) to demonstrate the flexibility of the container system."}}}},R={args:{...o.args,disableResponsive:!0,children:e.jsx(i,{title:"Responsive Disabled",description:"Desktop layout maintained at all screen sizes"})},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Page with responsive behavior disabled, maintaining desktop layout even on mobile viewports."}}}},L={args:{children:e.jsx(mr,{title:"🎯 Live Responsive Demo - Resize Window to Test"}),sidebarProps:{menuItems:D,secondaryItems:H,bottomItems:V,showBottomSection:!0,selectedItem:"analytics"},topBarProps:{selectedWarehouse:"Al Haram Warehouse",warehouses:["Al Haram Warehouse","Main Warehouse","Secondary Warehouse"]}},decorators:[r=>(Oe.useEffect(()=>{const t=document.createElement("style");return t.textContent=`
          .sb-main-padded,
          .sb-show-main.sb-main-padded {
            padding: 0 !important;
            margin: 0 !important;
          }
          .sb-show-main {
            padding: 0 !important;
            margin: 0 !important;
          }
        `,document.head.appendChild(t),()=>{document.head.removeChild(t)}},[]),e.jsx(r,{}))],parameters:{layout:"fullscreen",docs:{description:{story:"Live demo showing real-time window dimensions and container behavior. Resize your browser window to see the responsive behavior and margin calculations in action. Perfect for testing extreme widths and understanding how the container system adapts."}}}},P={args:{children:e.jsx(i,{title:"Complex Sidebar",description:"Demonstrating advanced sidebar configuration with nested items and custom handlers"}),sidebarProps:{menuItems:[...D,{id:"reports",icon:Ee,label:"Reports",labelEn:"Reports",labelAr:"التقارير",hasChildren:!0,children:[{id:"sales-report",label:"Sales Report",labelEn:"Sales Report",labelAr:"تقرير المبيعات"},{id:"inventory-report",label:"Inventory Report",labelEn:"Inventory Report",labelAr:"تقرير المخزون"},{id:"user-report",label:"User Report",labelEn:"User Report",labelAr:"تقرير المستخدمين"}]}],secondaryItems:H,bottomItems:V,showBottomSection:!0,selectedItem:"sales-report",onItemChange:r=>{console.log("Selected item:",r)}},topBarProps:{selectedWarehouse:"Al Haram Warehouse",warehouses:["Al Haram Warehouse","Main Warehouse","Secondary Warehouse"],showLogoutOption:!0,onWarehouseChange:r=>{console.log("Warehouse changed:",r)},onLogoutClick:()=>{console.log("Logout clicked")}}},parameters:{docs:{description:{story:"Complex sidebar configuration with nested menu items, custom handlers, and a selected child item."}}}};var $,G,J;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <SampleContent />,
    sidebarProps: {
      menuItems: sampleMenuItems,
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'dashboard'
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse']
    }
  }
}`,...(J=(G=o.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="XL Breakpoint (>1440px)" description="Full sidebar expanded, 1240px max container with flexible margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'XL breakpoint showing full expanded sidebar with maximum container width and flexible margins.'
      }
    }
  }
}`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="L Breakpoint (1220-1439px)" description="Full sidebar expanded, 1240px container with 24px minimum margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'laptop'
    },
    docs: {
      description: {
        story: 'L breakpoint maintaining full sidebar with 24px minimum margins.'
      }
    }
  }
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="MD Breakpoint (768-1219px)" description="Icon-only sidebar with hover expansion, 24px margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'MD breakpoint with icon-only sidebar that expands on hover. Hover over the sidebar to see the expansion behavior.'
      }
    }
  }
}`,...(oe=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,ne;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="SM Breakpoint (490-767px)" description="Hidden sidebar with mobile overlay, 16px margins" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'SM breakpoint with hidden sidebar accessible via hamburger menu. Click the hamburger icon to open the mobile sidebar.'
      }
    }
  }
}`,...(ne=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var de,le,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="XS Breakpoint (<490px)" description="Hidden sidebar with mobile overlay, 16px margins, smallest screens" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    docs: {
      description: {
        story: 'XS breakpoint for the smallest mobile devices with optimized spacing.'
      }
    }
  }
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,me,ue;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <SampleContent title="دعم اللغة العربية" description="هذا مثال على كيفية عمل المكون مع النصوص العربية واتجاه النص من اليمين إلى اليسار. يتم تطبيق الخط العربي تلقائياً وضبط ارتفاع الأسطر." />,
    sidebarProps: {
      menuItems: sampleMenuItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      secondaryItems: sampleSecondaryItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      bottomItems: sampleBottomItems.map(item => ({
        ...item,
        label: item.labelAr || item.label
      })),
      showBottomSection: true,
      selectedItem: 'dashboard'
    },
    topBarProps: {
      selectedWarehouse: 'مستودع الحرم',
      warehouses: ['مستودع الحرم', 'المستودع الرئيسي', 'المستودع الثانوي']
    }
  },
  parameters: {
    direction: 'rtl',
    docs: {
      description: {
        story: 'RTL (Right-to-Left) support with Arabic content, proper font switching, and layout adjustments.'
      }
    }
  }
}`,...(ue=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,be,ge;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSidebar: false,
    children: <SampleContent title="Without Sidebar" description="Page layout with only TopBar and content area, no sidebar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page layout with sidebar hidden, useful for landing pages or simple layouts.'
      }
    }
  }
}`,...(ge=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,xe,ye;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showTopBar: false,
    children: <SampleContent title="Without TopBar" description="Page layout with only Sidebar and content area, no top bar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page layout with TopBar hidden, useful for full-screen applications.'
      }
    }
  }
}`,...(ye=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ve,Se;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    showSidebar: false,
    showTopBar: false,
    children: <SampleContent title="Minimal Layout" description="Only content area with responsive container, no sidebar or topbar" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal layout with only the responsive content container.'
      }
    }
  }
}`,...(Se=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var je,ke,Be;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerMaxWidth: '800px',
    children: <SampleContent title="Custom Container Width" description="Using custom container max-width of 800px instead of default 1240px" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page with custom container max-width (800px) to demonstrate the flexibility of the container system.'
      }
    }
  }
}`,...(Be=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Ce,Ie,We;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disableResponsive: true,
    children: <SampleContent title="Responsive Disabled" description="Desktop layout maintained at all screen sizes" />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Page with responsive behavior disabled, maintaining desktop layout even on mobile viewports.'
      }
    }
  }
}`,...(We=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var _e,Me,Re;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    children: <LiveDimensionsContent title="🎯 Live Responsive Demo - Resize Window to Test" />,
    sidebarProps: {
      menuItems: sampleMenuItems,
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'analytics'
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse']
    }
  },
  decorators: [Story => {
    // Add CSS to remove Storybook padding for true fullscreen experience
    React.useEffect(() => {
      const style = document.createElement('style');
      style.textContent = \`
          .sb-main-padded,
          .sb-show-main.sb-main-padded {
            padding: 0 !important;
            margin: 0 !important;
          }
          .sb-show-main {
            padding: 0 !important;
            margin: 0 !important;
          }
        \`;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);
    return <Story />;
  }],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Live demo showing real-time window dimensions and container behavior. Resize your browser window to see the responsive behavior and margin calculations in action. Perfect for testing extreme widths and understanding how the container system adapts.'
      }
    }
  }
}`,...(Re=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var Le,Pe,Ae;P.parameters={...P.parameters,docs:{...(Le=P.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    children: <SampleContent title="Complex Sidebar" description="Demonstrating advanced sidebar configuration with nested items and custom handlers" />,
    sidebarProps: {
      menuItems: [...sampleMenuItems, {
        id: 'reports',
        icon: IconChartBar,
        label: 'Reports',
        labelEn: 'Reports',
        labelAr: 'التقارير',
        hasChildren: true,
        children: [{
          id: 'sales-report',
          label: 'Sales Report',
          labelEn: 'Sales Report',
          labelAr: 'تقرير المبيعات'
        }, {
          id: 'inventory-report',
          label: 'Inventory Report',
          labelEn: 'Inventory Report',
          labelAr: 'تقرير المخزون'
        }, {
          id: 'user-report',
          label: 'User Report',
          labelEn: 'User Report',
          labelAr: 'تقرير المستخدمين'
        }]
      }],
      secondaryItems: sampleSecondaryItems,
      bottomItems: sampleBottomItems,
      showBottomSection: true,
      selectedItem: 'sales-report',
      onItemChange: (itemId: string) => {
        console.log('Selected item:', itemId);
      }
    },
    topBarProps: {
      selectedWarehouse: 'Al Haram Warehouse',
      warehouses: ['Al Haram Warehouse', 'Main Warehouse', 'Secondary Warehouse'],
      showLogoutOption: true,
      onWarehouseChange: (warehouse: string) => {
        console.log('Warehouse changed:', warehouse);
      },
      onLogoutClick: () => {
        console.log('Logout clicked');
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex sidebar configuration with nested menu items, custom handlers, and a selected child item.'
      }
    }
  }
}`,...(Ae=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};const ur=["Default","XLBreakpoint","LBreakpoint","MDBreakpoint","SMBreakpoint","XSBreakpoint","RTLSupport","WithoutSidebar","WithoutTopBar","MinimalLayout","CustomContainerWidth","DisabledResponsive","LiveDemo","ComplexSidebar"],Cr=Object.freeze(Object.defineProperty({__proto__:null,ComplexSidebar:P,CustomContainerWidth:M,Default:o,DisabledResponsive:R,LBreakpoint:S,LiveDemo:L,MDBreakpoint:j,MinimalLayout:_,RTLSupport:C,SMBreakpoint:k,WithoutSidebar:I,WithoutTopBar:W,XLBreakpoint:v,XSBreakpoint:B,__namedExportsOrder:ur,default:pr},Symbol.toStringTag,{value:"Module"}));export{o as D,S as L,j as M,Cr as P,C as R,k as S,v as X,B as a};
