const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RangeSlider-BqaJGrqh.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./RangeSlider-BW_RzN1X.js","./index-BdQq_4o_.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-DavpLpmr.js","./index-YtIeenAn.js","./index-DXU_LAI1.js","./index-D5cGTUkh.js","./index-9FI6h9_9.js","./clsx-B-dksMZM.js","./IconExclamationCircle-BYkI5IG6.js","./createReactComponent-CKk3lApD.js","./RangeSlider-ElbuP06A.css"])))=>i.map(i=>d[i]);
import{_ as it}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as n}from"./index-D4H_InIO.js";import{R as i}from"./RangeSlider-BW_RzN1X.js";const nt={title:"Components/RangeSlider",component:i,parameters:{layout:"centered",docs:{page:()=>it(()=>import("./RangeSlider-BqaJGrqh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url)}},tags:[],argTypes:{value:{control:!1,description:"The controlled value of the slider"},defaultValue:{control:"object",description:"The default value when initially rendered"},min:{control:"number",description:"The minimum value of the slider"},max:{control:"number",description:"The maximum value of the slider"},step:{control:"number",description:"The step increment of the slider"},type:{control:"select",options:["single thumb","dual thumb"],description:"Type of slider - single or dual thumb"},state:{control:"select",options:["rest","focus","active","disabled","error"],description:"Current state of the slider"},disabled:{control:"boolean",description:"Whether the slider is disabled"},label:{control:"text",description:"Text label displayed above the slider"},prefix:{control:"text",description:"Content to display before the slider"},suffix:{control:"text",description:"Content to display after the slider"},errorMessage:{control:"text",description:"Error message to display below the slider"},formatValue:{control:!1,description:"Custom formatter for displaying values in tooltip"},"aria-label":{control:"text",description:"Aria label for the slider"},className:{control:"text",description:"Additional CSS classes"},showTooltip:{control:"boolean",description:"Whether to show tooltip on active state"}},args:{min:0,max:100,step:1,type:"single thumb",state:"rest",disabled:!1,label:"Label",showTooltip:!0,"aria-label":"Range slider"}},d={name:"Single Thumb - Rest",args:{type:"single thumb",state:"rest",label:"Label"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},p={name:"Single Thumb - Focus",args:{type:"single thumb",state:"focus",label:"Label"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},u={name:"Single Thumb - Active (with Tooltip)",args:{type:"single thumb",state:"active",label:"Label",formatValue:t=>t.toString()},render:t=>{const[r,a]=n.useState([56]);return e.jsx("div",{style:{width:"400px",padding:"60px 20px 20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},x={name:"Single Thumb - Disabled",args:{type:"single thumb",state:"disabled",disabled:!0,label:"Label",defaultValue:[70]},render:t=>e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t})})},g={name:"Single Thumb - Error",args:{type:"single thumb",state:"error",label:"Label",errorMessage:"Error message"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},c={name:"Dual Thumb - Rest",args:{type:"dual thumb",state:"rest",label:"Label"},render:t=>{const[r,a]=n.useState([25,75]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},h={name:"Dual Thumb - Focus",args:{type:"dual thumb",state:"focus",label:"Label"},render:t=>{const[r,a]=n.useState([25,75]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},m={name:"Dual Thumb - Active (with Tooltip)",args:{type:"dual thumb",state:"active",label:"Label",formatValue:t=>t.toString()},render:t=>{const[r,a]=n.useState([25,56]);return e.jsx("div",{style:{width:"400px",padding:"60px 20px 20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},f={name:"Dual Thumb - Disabled",args:{type:"dual thumb",state:"disabled",disabled:!0,label:"Label",defaultValue:[25,75]},render:t=>e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t})})},v={name:"Dual Thumb - Error",args:{type:"dual thumb",state:"error",label:"Label",errorMessage:"Error message"},render:t=>{const[r,a]=n.useState([25,75]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},b={name:"With Prefix",args:{type:"single thumb",state:"rest",label:"Label",prefix:"$"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},S={name:"With Suffix",args:{type:"single thumb",state:"rest",label:"Label",suffix:"99"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},y={name:"With Prefix and Suffix",args:{type:"single thumb",state:"rest",label:"Label",prefix:"$",suffix:"99"},render:t=>{const[r,a]=n.useState([70]);return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(i,{...t,value:r,onValueChange:a})})}},T={name:"Interactive Demo",render:()=>{const[t,r]=n.useState([50]),[a,l]=n.useState([25,75]),[s,P]=n.useState([213,450]);return e.jsxs("div",{style:{width:"400px",padding:"20px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:600},children:"Single Thumb Slider"}),e.jsx(i,{type:"single thumb",label:"Volume",value:t,onValueChange:r,formatValue:o=>`${o}%`,"aria-label":"Volume control"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["Value: ",t[0],"%"]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:600},children:"Dual Thumb Range Slider"}),e.jsx(i,{type:"dual thumb",label:"Price Range",value:a,onValueChange:l,formatValue:o=>`$${o}`,"aria-label":"Price range"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["Range: $",a[0]," - $",a[1]]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:600},children:"Money Range Filter (From Figma)"}),e.jsx(i,{type:"dual thumb",label:"Money spent is between",value:s,onValueChange:P,min:213,max:500,step:1,prefix:"$","aria-label":"Money spent range"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["Range: $",s[0]," - $",s[1]]})]})]})}},R={name:"RTL Support",args:{type:"dual thumb",state:"rest",label:"شريط التمرير للنطاق",formatValue:t=>`${t}%`},render:t=>{const[r,a]=n.useState([30,70]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx("h3",{style:{marginBottom:"10px",fontSize:"16px",fontWeight:"bold"},children:"Basic RTL Slider Support"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"This demonstrates the fundamental RTL behavior: proper Arabic text rendering, right-to-left text alignment, and intuitive slider interaction."})]}),e.jsxs("div",{dir:"rtl",style:{width:"100%",padding:"20px",border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:[e.jsx(i,{...t,value:r,onValueChange:a}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right"},children:[e.jsxs("p",{children:["النطاق المحدد: ",t.formatValue(r[0])," - ",t.formatValue(r[1])]}),e.jsx("p",{children:"اتجاه النص: من اليمين إلى اليسار"})]})]})]})},parameters:{globals:{direction:"rtl"}}},V={name:"RTL - Complete Positioning Demo",render:()=>{const[t,r]=n.useState([40,80]),[a,l]=n.useState([25,75]),[s,P]=n.useState([60]),[o,rt]=n.useState([30,85]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"900px"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{marginBottom:"15px",fontSize:"18px",fontWeight:"bold"},children:"RTL Positioning Demonstration - All Combinations"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"This comprehensive demo shows how prefix and suffix positioning works in RTL layout. Notice how elements maintain logical order while respecting RTL flow."})]}),e.jsxs("div",{style:{display:"grid",gap:"30px"},children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"600",color:"#333"},children:"1. Basic RTL Slider (No Prefix/Suffix)"}),e.jsxs("div",{dir:"rtl",style:{width:"100%"},children:[e.jsx(i,{type:"dual thumb",label:"شريط أساسي",value:t,onValueChange:r,formatValue:at=>`${at}%`}),e.jsxs("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666",textAlign:"right"},children:["النطاق: ",t[0],"% - ",t[1],"%"]})]})]}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #e8f5e8",borderRadius:"8px",backgroundColor:"#f8fff8"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"600",color:"#2e7d32"},children:'2. RTL with Prefix - "ر.س" appears on the right'}),e.jsxs("div",{dir:"rtl",style:{width:"100%"},children:[e.jsx(i,{type:"dual thumb",label:"مع بادئة",prefix:"ر.س",value:a,onValueChange:l}),e.jsxs("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666",textAlign:"right"},children:["المبلغ: ر.س",a[0]," - ر.س",a[1]]})]})]}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #e3f2fd",borderRadius:"8px",backgroundColor:"#f8faff"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"600",color:"#1976d2"},children:'3. RTL with Suffix - "%" appears on the left'}),e.jsxs("div",{dir:"rtl",style:{width:"100%"},children:[e.jsx(i,{type:"single thumb",label:"مع لاحقة",suffix:"%",value:s,onValueChange:P}),e.jsxs("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666",textAlign:"right"},children:["النسبة: ",s[0],"%"]})]})]}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #fce4ec",borderRadius:"8px",backgroundColor:"#fef7f7"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"600",color:"#c2185b"},children:"4. RTL with Both - Prefix right, Suffix left"}),e.jsxs("div",{dir:"rtl",style:{width:"100%"},children:[e.jsx(i,{type:"dual thumb",label:"مع البادئة واللاحقة",prefix:"ر.س",suffix:"ألف",value:o,onValueChange:rt}),e.jsxs("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666",textAlign:"right"},children:["المدى: ر.س",o[0]," ألف - ر.س",o[1]," ألف"]})]})]})]}),e.jsxs("div",{style:{marginTop:"40px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"600"},children:"📐 RTL Layout Guide"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",fontSize:"14px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Text Flow:"}),e.jsx("p",{style:{color:"#666",margin:"5px 0"},children:"Arabic text flows right-to-left"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Prefix Position:"}),e.jsx("p",{style:{color:"#666",margin:"5px 0"},children:"Appears after slider (right side)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Suffix Position:"}),e.jsx("p",{style:{color:"#666",margin:"5px 0"},children:"Appears before slider (left side)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mouse Interaction:"}),e.jsx("p",{style:{color:"#666",margin:"5px 0"},children:"Right = increase, Left = decrease"})]})]})]})]})},parameters:{globals:{direction:"rtl"}}},j={name:"RTL - With Suffix",args:{type:"single thumb",state:"rest",label:"مع لاحقة",suffix:"%"},render:t=>{const[r,a]=n.useState([75]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx("h3",{style:{marginBottom:"10px",fontSize:"16px",fontWeight:"bold"},children:"RTL Slider with Suffix Demo"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"In RTL layout, the suffix (%) should appear on the LEFT side of the slider, and the slider should start from the right (100%) and decrease to the left (0%). Moving the mouse RIGHT should increase the value."})]}),e.jsxs("div",{dir:"rtl",style:{padding:"20px",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx(i,{...t,value:r,onValueChange:a,min:0,max:100,step:5,"aria-label":"نسبة مئوية"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right",fontFamily:"Tajawal, system-ui, sans-serif"},children:["القيمة الحالية: ",r[0],"%"]})]}),e.jsx("div",{style:{marginTop:"20px",fontSize:"12px",color:"#999"},children:'Expected behavior: Suffix "%" on LEFT, slider flows right-to-left, mouse right = value increase'})]})}},L={name:"RTL - With Prefix",args:{type:"dual thumb",state:"rest",label:"نطاق الراتب الشهري",prefix:"ر.س"},render:t=>{const[r,a]=n.useState([3e3,8e3]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx("h3",{style:{marginBottom:"10px",fontSize:"16px",fontWeight:"bold"},children:"RTL Slider with Prefix Demo"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"In RTL layout, the prefix (ر.س) should appear on the RIGHT side of the slider. The dual thumb range should work intuitively with proper RTL behavior."})]}),e.jsxs("div",{dir:"rtl",style:{padding:"20px",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx(i,{...t,value:r,onValueChange:a,min:1e3,max:15e3,step:100,formatValue:l=>l.toLocaleString("ar-SA"),"aria-label":"نطاق الراتب"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right",fontFamily:"Tajawal, system-ui, sans-serif"},children:["النطاق المحدد: ",r[0].toLocaleString("ar-SA")," ر.س - ",r[1].toLocaleString("ar-SA")," ر.س"]})]}),e.jsx("div",{style:{marginTop:"20px",fontSize:"12px",color:"#999"},children:'Expected behavior: Prefix "ر.س" on RIGHT, dual thumb range flows right-to-left'})]})}},w={name:"RTL - With Prefix & Suffix",args:{type:"single thumb",state:"rest",label:"مع بادئة ولاحقة",prefix:"$",suffix:"USD"},render:t=>{const[r,a]=n.useState([250]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx("h3",{style:{marginBottom:"10px",fontSize:"16px",fontWeight:"bold"},children:"RTL Slider with Both Prefix & Suffix"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"20px"},children:"In RTL layout: prefix ($) on RIGHT, slider in middle, suffix (USD) on LEFT. Order should be: USD [slider] $"})]}),e.jsxs("div",{dir:"rtl",style:{padding:"20px",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx(i,{...t,value:r,onValueChange:a,min:0,max:500,step:10,"aria-label":"مبلغ بالدولار"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right",fontFamily:"Tajawal, system-ui, sans-serif"},children:["المبلغ: $",r[0]," USD"]})]}),e.jsx("div",{style:{marginTop:"20px",fontSize:"12px",color:"#999"},children:"Expected layout: USD [slider] $"})]})}},z={name:"RTL - Active State with Tooltip",args:{type:"dual thumb",state:"active",label:"شريط التمرير النشط",formatValue:t=>`${t}%`},render:t=>{const[r,a]=n.useState([40,80]);return e.jsxs("div",{dir:"rtl",style:{width:"400px",padding:"60px 20px 20px"},children:[e.jsx(i,{...t,value:r,onValueChange:a}),e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right"},children:["يظهر التلميح عند السحب: ",t.formatValue(r[0])," - ",t.formatValue(r[1])]})]})},parameters:{globals:{direction:"rtl"}}},C={name:"RTL - Error State",args:{type:"single thumb",state:"error",label:"مستوى الصوت",errorMessage:"القيمة خارج النطاق المسموح",suffix:"%"},render:t=>{const[r,a]=n.useState([95]);return e.jsxs("div",{dir:"rtl",style:{width:"400px",padding:"20px"},children:[e.jsx(i,{...t,value:r,onValueChange:a}),e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right"},children:["المستوى المحدد: ",r[0],"%"]})]})},parameters:{globals:{direction:"rtl"}}},W={name:"RTL - Money Range (Real Use Case)",args:{type:"dual thumb",state:"rest",label:"المبلغ المنفق يتراوح بين",prefix:"ر.س"},render:t=>{const[r,a]=n.useState([500,1500]);return e.jsxs("div",{dir:"rtl",style:{width:"400px",padding:"20px"},children:[e.jsx(i,{...t,value:r,onValueChange:a,min:100,max:2e3,step:50,"aria-label":"نطاق المبلغ المنفق"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right"},children:[e.jsxs("p",{children:["النطاق المحدد: ر.س",r[0]," - ر.س",r[1]]}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"8px"},children:"استخدم هذا النطاق لفلترة النتائج حسب المبلغ المنفق"})]})]})},parameters:{globals:{direction:"rtl"}}},A={name:"RTL - Native Radix UI Direction",args:{type:"dual thumb",state:"rest",label:"مثال شامل للاتجاه الطبيعي من اليمين إلى اليسار",prefix:"ر.س",suffix:"SAR"},render:t=>{const[r,a]=n.useState([200,800]);return e.jsxs("div",{style:{padding:"40px",maxWidth:"800px"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("h3",{style:{marginBottom:"20px",fontSize:"18px",fontWeight:"bold",color:"#2563eb"},children:"✅ RTL RangeSlider - Native Radix UI Implementation"}),e.jsxs("p",{style:{marginBottom:"20px",fontSize:"14px",color:"#666"},children:["This demonstrates the ",e.jsx("strong",{children:"correct RTL implementation"})," using Radix UI's native direction support:"]}),e.jsxs("ul",{style:{fontSize:"14px",color:"#666",marginBottom:"20px",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Native dir Prop:"})," Uses Radix UI's ",e.jsx("code",{children:'dir="rtl"'})," prop on Slider.Root"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Proper Range Fill:"})," Range fills from right-to-left correctly"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Intuitive Interaction:"})," Moving mouse RIGHT increases value naturally"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Correct Layout:"})," Suffix (SAR) → Slider → Prefix (ر.س)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No CSS Conflicts:"})," Removed conflicting direction styles"]})]})]}),e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"bold",color:"#dc2626"},children:"🔧 Fixed: RTL Range Fill Direction"}),e.jsxs("div",{dir:"rtl",style:{width:"100%",padding:"20px",border:"2px solid #fecaca",borderRadius:"8px",backgroundColor:"#fef2f2"},children:[e.jsx(i,{...t,value:r,onValueChange:a,min:100,max:1e3,step:25,"aria-label":"نطاق الأسعار بالريال السعودي"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right",fontFamily:"Tajawal, system-ui, sans-serif"},children:["النطاق المحدد: ر.س",r[0]," - ر.س",r[1]," SAR"]}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"#dc2626",textAlign:"right",fontFamily:"Tajawal, system-ui, sans-serif"},children:"✅ الآن يملأ الشريط من اليمين إلى اليسار بشكل صحيح"})]})]}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx("h4",{style:{marginBottom:"15px",fontSize:"16px",fontWeight:"bold",color:"#059669"},children:"📊 LTR Layout (For Comparison)"}),e.jsxs("div",{dir:"ltr",style:{width:"100%",padding:"20px",border:"2px solid #bbf7d0",borderRadius:"8px",backgroundColor:"#f0fdf4"},children:[e.jsx(i,{type:"dual thumb",state:"rest",label:"Price Range Comparison",prefix:"$",suffix:"USD",value:[r[0],r[1]],onValueChange:a,min:100,max:1e3,step:25,"aria-label":"Price range in USD"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"left",fontFamily:"system-ui, sans-serif"},children:["Selected range: $",r[0]," - $",r[1]," USD"]}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"#059669",textAlign:"left"},children:"✅ Range fills left-to-right correctly"})]})]}),e.jsxs("div",{style:{marginTop:"30px",padding:"20px",backgroundColor:"#eff6ff",borderRadius:"8px",border:"1px solid #3b82f6"},children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"bold",color:"#1d4ed8",margin:"0 0 10px 0"},children:"🛠️ Technical Implementation Fix"}),e.jsxs("div",{style:{fontSize:"12px",color:"#666",lineHeight:"1.6"},children:[e.jsxs("p",{style:{margin:"0 0 8px 0"},children:[e.jsx("strong",{children:"Before:"})," Used CSS ",e.jsx("code",{children:"direction: rtl"})," which caused conflicts"]}),e.jsxs("p",{style:{margin:"0 0 8px 0"},children:[e.jsx("strong",{children:"After:"})," Uses Radix UI native ",e.jsx("code",{children:'dir="rtl"'})," prop on Slider.Root"]}),e.jsxs("p",{style:{margin:"0"},children:[e.jsx("strong",{children:"Result:"})," Proper range fill direction, intuitive mouse interaction, and optimal performance"]})]})]})]})}},B={name:"RTL vs LTR - Side by Side",args:{type:"dual thumb",state:"rest",formatValue:t=>`${t}%`},render:t=>{const[r,a]=n.useState([30,70]),[l,s]=n.useState([30,70]);return e.jsxs("div",{style:{padding:"40px",display:"flex",gap:"40px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginBottom:"20px",fontSize:"16px",fontWeight:"bold"},children:"Left-to-Right (English)"}),e.jsxs("div",{dir:"ltr",style:{width:"100%",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx(i,{...t,label:"Price Range",prefix:"$",suffix:"USD",value:r,onValueChange:a,"aria-label":"Price range selector"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666"},children:[e.jsxs("p",{children:["Selected range: $",r[0]," - $",r[1]]}),e.jsxs("p",{children:["Average: $",Math.round((r[0]+r[1])/2)]})]})]})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginBottom:"20px",fontSize:"16px",fontWeight:"bold"},children:"Right-to-Left (Arabic)"}),e.jsxs("div",{dir:"rtl",style:{width:"100%",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx(i,{...t,label:"نطاق السعر",prefix:"ر.س",suffix:"SAR",value:l,onValueChange:s,"aria-label":"محدد نطاق السعر"}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"14px",color:"#666",textAlign:"right"},children:[e.jsxs("p",{children:["النطاق المحدد: ر.س",l[0]," - ر.س",l[1]]}),e.jsxs("p",{children:["متوسط: ر.س",Math.round((l[0]+l[1])/2)]})]})]})]})]})}},D=d;var $,F,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Single Thumb - Rest',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var E,U,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Single Thumb - Focus',
  args: {
    type: 'single thumb',
    state: 'focus',
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var k,_,G;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Single Thumb - Active (with Tooltip)',
  args: {
    type: 'single thumb',
    state: 'active',
    label: 'Label',
    formatValue: (value: number) => value.toString()
  },
  render: args => {
    const [value, setValue] = useState([56]);
    return <div style={{
      width: '400px',
      padding: '60px 20px 20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var N,H,O;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Single Thumb - Disabled',
  args: {
    type: 'single thumb',
    state: 'disabled',
    disabled: true,
    label: 'Label',
    defaultValue: [70]
  },
  render: args => {
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} />
      </div>;
  }
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Single Thumb - Error',
  args: {
    type: 'single thumb',
    state: 'error',
    label: 'Label',
    errorMessage: 'Error message'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Dual Thumb - Rest',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = useState([25, 75]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Dual Thumb - Focus',
  args: {
    type: 'dual thumb',
    state: 'focus',
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = useState([25, 75]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,ie;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Dual Thumb - Active (with Tooltip)',
  args: {
    type: 'dual thumb',
    state: 'active',
    label: 'Label',
    formatValue: (value: number) => value.toString()
  },
  render: args => {
    const [value, setValue] = useState([25, 56]);
    return <div style={{
      width: '400px',
      padding: '60px 20px 20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(ie=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,le,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Dual Thumb - Disabled',
  args: {
    type: 'dual thumb',
    state: 'disabled',
    disabled: true,
    label: 'Label',
    defaultValue: [25, 75]
  },
  render: args => {
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} />
      </div>;
  }
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,de,pe;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Dual Thumb - Error',
  args: {
    type: 'dual thumb',
    state: 'error',
    label: 'Label',
    errorMessage: 'Error message'
  },
  render: args => {
    const [value, setValue] = useState([25, 75]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,xe,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Prefix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    prefix: '$'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(ge=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ce,he,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'With Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    suffix: '99'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(me=(he=S.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var fe,ve,be;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'With Prefix and Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    prefix: '$',
    suffix: '99'
  },
  render: args => {
    const [value, setValue] = useState([70]);
    return <div style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...(be=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Se,ye,Te;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Interactive Demo',
  render: () => {
    const [singleValue, setSingleValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    const [priceValue, setPriceValue] = useState([213, 450]);
    return <div style={{
      width: '400px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <h4 style={{
          margin: '0 0 16px 0',
          fontSize: '16px',
          fontWeight: 600
        }}>
            Single Thumb Slider
          </h4>
          <RangeSlider type="single thumb" label="Volume" value={singleValue} onValueChange={setSingleValue} formatValue={value => \`\${value}%\`} aria-label="Volume control" />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#666'
        }}>
            Value: {singleValue[0]}%
          </p>
        </div>
        
        <div>
          <h4 style={{
          margin: '0 0 16px 0',
          fontSize: '16px',
          fontWeight: 600
        }}>
            Dual Thumb Range Slider
          </h4>
          <RangeSlider type="dual thumb" label="Price Range" value={rangeValue} onValueChange={setRangeValue} formatValue={value => \`$\${value}\`} aria-label="Price range" />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#666'
        }}>
            Range: \${rangeValue[0]} - \${rangeValue[1]}
          </p>
        </div>
        
        <div>
          <h4 style={{
          margin: '0 0 16px 0',
          fontSize: '16px',
          fontWeight: 600
        }}>
            Money Range Filter (From Figma)
          </h4>
          <RangeSlider type="dual thumb" label="Money spent is between" value={priceValue} onValueChange={setPriceValue} min={213} max={500} step={1} prefix="$" aria-label="Money spent range" />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#666'
        }}>
            Range: \${priceValue[0]} - \${priceValue[1]}
          </p>
        </div>
      </div>;
  }
}`,...(Te=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var Re,Ve,je;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'RTL Support',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'شريط التمرير للنطاق',
    formatValue: (value: number) => \`\${value}%\`
  },
  render: args => {
    const [value, setValue] = useState([30, 70]);
    return <div style={{
      padding: '40px',
      maxWidth: '600px'
    }}>
        <div style={{
        marginBottom: '30px'
      }}>
          <h3 style={{
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            Basic RTL Slider Support
          </h3>
          <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
            This demonstrates the fundamental RTL behavior: proper Arabic text rendering, 
            right-to-left text alignment, and intuitive slider interaction.
          </p>
        </div>
        
        <div dir="rtl" style={{
        width: '100%',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
          <RangeSlider {...args} value={value} onValueChange={setValue} />
          <div style={{
          marginTop: '16px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'right'
        }}>
            <p>النطاق المحدد: {args.formatValue!(value[0])} - {args.formatValue!(value[1])}</p>
            <p>اتجاه النص: من اليمين إلى اليسار</p>
          </div>
        </div>
      </div>;
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(je=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Le,we,ze;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'RTL - Complete Positioning Demo',
  render: () => {
    const [basicValue, setBasicValue] = useState([40, 80]);
    const [prefixValue, setPrefixValue] = useState([25, 75]);
    const [suffixValue, setSuffixValue] = useState([60]);
    const [bothValue, setBothValue] = useState([30, 85]);
    return <div style={{
      padding: '40px',
      maxWidth: '900px'
    }}>
        <div style={{
        marginBottom: '40px'
      }}>
          <h3 style={{
          marginBottom: '15px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
            RTL Positioning Demonstration - All Combinations
          </h3>
          <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
            This comprehensive demo shows how prefix and suffix positioning works in RTL layout.
            Notice how elements maintain logical order while respecting RTL flow.
          </p>
        </div>

        <div style={{
        display: 'grid',
        gap: '30px'
      }}>
          {/* Basic RTL */}
          <div style={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        }}>
            <h4 style={{
            marginBottom: '15px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#333'
          }}>
              1. Basic RTL Slider (No Prefix/Suffix)
            </h4>
            <div dir="rtl" style={{
            width: '100%'
          }}>
              <RangeSlider type="dual thumb" label="شريط أساسي" value={basicValue} onValueChange={setBasicValue} formatValue={value => \`\${value}%\`} />
              <p style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'right'
            }}>
                النطاق: {basicValue[0]}% - {basicValue[1]}%
              </p>
            </div>
          </div>

          {/* With Prefix */}
          <div style={{
          padding: '20px',
          border: '1px solid #e8f5e8',
          borderRadius: '8px',
          backgroundColor: '#f8fff8'
        }}>
            <h4 style={{
            marginBottom: '15px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#2e7d32'
          }}>
              2. RTL with Prefix - "ر.س" appears on the right
            </h4>
            <div dir="rtl" style={{
            width: '100%'
          }}>
              <RangeSlider type="dual thumb" label="مع بادئة" prefix="ر.س" value={prefixValue} onValueChange={setPrefixValue} />
              <p style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'right'
            }}>
                المبلغ: ر.س{prefixValue[0]} - ر.س{prefixValue[1]}
              </p>
            </div>
          </div>

          {/* With Suffix */}
          <div style={{
          padding: '20px',
          border: '1px solid #e3f2fd',
          borderRadius: '8px',
          backgroundColor: '#f8faff'
        }}>
            <h4 style={{
            marginBottom: '15px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1976d2'
          }}>
              3. RTL with Suffix - "%" appears on the left
            </h4>
            <div dir="rtl" style={{
            width: '100%'
          }}>
              <RangeSlider type="single thumb" label="مع لاحقة" suffix="%" value={suffixValue} onValueChange={setSuffixValue} />
              <p style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'right'
            }}>
                النسبة: {suffixValue[0]}%
              </p>
            </div>
          </div>

          {/* With Both */}
          <div style={{
          padding: '20px',
          border: '1px solid #fce4ec',
          borderRadius: '8px',
          backgroundColor: '#fef7f7'
        }}>
            <h4 style={{
            marginBottom: '15px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#c2185b'
          }}>
              4. RTL with Both - Prefix right, Suffix left
            </h4>
            <div dir="rtl" style={{
            width: '100%'
          }}>
              <RangeSlider type="dual thumb" label="مع البادئة واللاحقة" prefix="ر.س" suffix="ألف" value={bothValue} onValueChange={setBothValue} />
              <p style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'right'
            }}>
                المدى: ر.س{bothValue[0]} ألف - ر.س{bothValue[1]} ألف
              </p>
            </div>
          </div>
        </div>

        {/* Visual Guide */}
        <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <h4 style={{
          marginBottom: '15px',
          fontSize: '16px',
          fontWeight: '600'
        }}>
            📐 RTL Layout Guide
          </h4>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          fontSize: '14px'
        }}>
            <div>
              <strong>Text Flow:</strong>
              <p style={{
              color: '#666',
              margin: '5px 0'
            }}>Arabic text flows right-to-left</p>
            </div>
            <div>
              <strong>Prefix Position:</strong>
              <p style={{
              color: '#666',
              margin: '5px 0'
            }}>Appears after slider (right side)</p>
            </div>
            <div>
              <strong>Suffix Position:</strong>
              <p style={{
              color: '#666',
              margin: '5px 0'
            }}>Appears before slider (left side)</p>
            </div>
            <div>
              <strong>Mouse Interaction:</strong>
              <p style={{
              color: '#666',
              margin: '5px 0'
            }}>Right = increase, Left = decrease</p>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(ze=(we=V.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Ce,We,Ae;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'RTL - With Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'مع لاحقة',
    suffix: '%'
  },
  render: args => {
    const [value, setValue] = useState([75]);
    return <div style={{
      padding: '40px',
      maxWidth: '600px'
    }}>
        <div style={{
        marginBottom: '30px'
      }}>
          <h3 style={{
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            RTL Slider with Suffix Demo
          </h3>
          <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
            In RTL layout, the suffix (%) should appear on the LEFT side of the slider,
            and the slider should start from the right (100%) and decrease to the left (0%).
            Moving the mouse RIGHT should increase the value.
          </p>
        </div>
        
        <div dir="rtl" style={{
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
          <RangeSlider {...args} value={value} onValueChange={setValue} min={0} max={100} step={5} aria-label="نسبة مئوية" />
          <div style={{
          marginTop: '16px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'right',
          fontFamily: 'Tajawal, system-ui, sans-serif'
        }}>
            القيمة الحالية: {value[0]}%
          </div>
        </div>
        
        <div style={{
        marginTop: '20px',
        fontSize: '12px',
        color: '#999'
      }}>
          Expected behavior: Suffix "%" on LEFT, slider flows right-to-left, mouse right = value increase
        </div>
      </div>;
  }
}`,...(Ae=(We=j.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Be,De,Pe;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'RTL - With Prefix',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'نطاق الراتب الشهري',
    prefix: 'ر.س'
  },
  render: args => {
    const [value, setValue] = useState([3000, 8000]);
    return <div style={{
      padding: '40px',
      maxWidth: '600px'
    }}>
        <div style={{
        marginBottom: '30px'
      }}>
          <h3 style={{
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            RTL Slider with Prefix Demo
          </h3>
          <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
            In RTL layout, the prefix (ر.س) should appear on the RIGHT side of the slider.
            The dual thumb range should work intuitively with proper RTL behavior.
          </p>
        </div>
        
        <div dir="rtl" style={{
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
          <RangeSlider {...args} value={value} onValueChange={setValue} min={1000} max={15000} step={100} formatValue={val => val.toLocaleString('ar-SA')} aria-label="نطاق الراتب" />
          <div style={{
          marginTop: '16px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'right',
          fontFamily: 'Tajawal, system-ui, sans-serif'
        }}>
            النطاق المحدد: {value[0].toLocaleString('ar-SA')} ر.س - {value[1].toLocaleString('ar-SA')} ر.س
          </div>
        </div>
        
        <div style={{
        marginTop: '20px',
        fontSize: '12px',
        color: '#999'
      }}>
          Expected behavior: Prefix "ر.س" on RIGHT, dual thumb range flows right-to-left
        </div>
      </div>;
  }
}`,...(Pe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var $e,Fe,Ie;w.parameters={...w.parameters,docs:{...($e=w.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'RTL - With Prefix & Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'مع بادئة ولاحقة',
    prefix: '$',
    suffix: 'USD'
  },
  render: args => {
    const [value, setValue] = useState([250]);
    return <div style={{
      padding: '40px',
      maxWidth: '600px'
    }}>
        <div style={{
        marginBottom: '30px'
      }}>
          <h3 style={{
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            RTL Slider with Both Prefix & Suffix
          </h3>
          <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px'
        }}>
            In RTL layout: prefix ($) on RIGHT, slider in middle, suffix (USD) on LEFT.
            Order should be: USD [slider] $
          </p>
        </div>
        
        <div dir="rtl" style={{
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
          <RangeSlider {...args} value={value} onValueChange={setValue} min={0} max={500} step={10} aria-label="مبلغ بالدولار" />
          <div style={{
          marginTop: '16px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'right',
          fontFamily: 'Tajawal, system-ui, sans-serif'
        }}>
            المبلغ: \${value[0]} USD
          </div>
        </div>
        
        <div style={{
        marginTop: '20px',
        fontSize: '12px',
        color: '#999'
      }}>
          Expected layout: USD [slider] $
        </div>
      </div>;
  }
}`,...(Ie=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var Ee,Ue,Me;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'RTL - Active State with Tooltip',
  args: {
    type: 'dual thumb',
    state: 'active',
    label: 'شريط التمرير النشط',
    formatValue: (value: number) => \`\${value}%\`
  },
  render: args => {
    const [value, setValue] = useState([40, 80]);
    return <div dir="rtl" style={{
      width: '400px',
      padding: '60px 20px 20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
        <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#666',
        textAlign: 'right'
      }}>
          يظهر التلميح عند السحب: {args.formatValue!(value[0])} - {args.formatValue!(value[1])}
        </p>
      </div>;
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(Me=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Me.source}}};var ke,_e,Ge;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'RTL - Error State',
  args: {
    type: 'single thumb',
    state: 'error',
    label: 'مستوى الصوت',
    errorMessage: 'القيمة خارج النطاق المسموح',
    suffix: '%'
  },
  render: args => {
    const [value, setValue] = useState([95]);
    return <div dir="rtl" style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} />
        <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#666',
        textAlign: 'right'
      }}>
          المستوى المحدد: {value[0]}%
        </p>
      </div>;
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(Ge=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Ne,He,Oe;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'RTL - Money Range (Real Use Case)',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'المبلغ المنفق يتراوح بين',
    prefix: 'ر.س'
  },
  render: args => {
    const [value, setValue] = useState([500, 1500]);
    return <div dir="rtl" style={{
      width: '400px',
      padding: '20px'
    }}>
        <RangeSlider {...args} value={value} onValueChange={setValue} min={100} max={2000} step={50} aria-label="نطاق المبلغ المنفق" />
        <div style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#666',
        textAlign: 'right'
      }}>
          <p>النطاق المحدد: ر.س{value[0]} - ر.س{value[1]}</p>
          <p style={{
          fontSize: '12px',
          color: '#999',
          marginTop: '8px'
        }}>
            استخدم هذا النطاق لفلترة النتائج حسب المبلغ المنفق
          </p>
        </div>
      </div>;
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(Oe=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var qe,Je,Ke;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'RTL - Native Radix UI Direction',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'مثال شامل للاتجاه الطبيعي من اليمين إلى اليسار',
    prefix: 'ر.س',
    suffix: 'SAR'
  },
  render: args => {
    const [value, setValue] = useState([200, 800]);
    return <div style={{
      padding: '40px',
      maxWidth: '800px'
    }}>
        <div style={{
        marginBottom: '40px'
      }}>
          <h3 style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#2563eb'
        }}>
            ✅ RTL RangeSlider - Native Radix UI Implementation
          </h3>
          <p style={{
          marginBottom: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
            This demonstrates the <strong>correct RTL implementation</strong> using Radix UI's native direction support:
          </p>
          <ul style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingLeft: '20px'
        }}>
            <li><strong>Native dir Prop:</strong> Uses Radix UI's <code>dir="rtl"</code> prop on Slider.Root</li>
            <li><strong>Proper Range Fill:</strong> Range fills from right-to-left correctly</li>
            <li><strong>Intuitive Interaction:</strong> Moving mouse RIGHT increases value naturally</li>
            <li><strong>Correct Layout:</strong> Suffix (SAR) → Slider → Prefix (ر.س)</li>
            <li><strong>No CSS Conflicts:</strong> Removed conflicting direction styles</li>
          </ul>
        </div>
        
        <div style={{
        marginBottom: '30px'
      }}>
          <h4 style={{
          marginBottom: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#dc2626'
        }}>
            🔧 Fixed: RTL Range Fill Direction
          </h4>
          <div dir="rtl" style={{
          width: '100%',
          padding: '20px',
          border: '2px solid #fecaca',
          borderRadius: '8px',
          backgroundColor: '#fef2f2'
        }}>
            <RangeSlider {...args} value={value} onValueChange={setValue} min={100} max={1000} step={25} aria-label="نطاق الأسعار بالريال السعودي" />
            <div style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'right',
            fontFamily: 'Tajawal, system-ui, sans-serif'
          }}>
              النطاق المحدد: ر.س{value[0]} - ر.س{value[1]} SAR
            </div>
            <div style={{
            marginTop: '8px',
            fontSize: '12px',
            color: '#dc2626',
            textAlign: 'right',
            fontFamily: 'Tajawal, system-ui, sans-serif'
          }}>
              ✅ الآن يملأ الشريط من اليمين إلى اليسار بشكل صحيح
            </div>
          </div>
        </div>
        
        <div style={{
        marginTop: '30px'
      }}>
          <h4 style={{
          marginBottom: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#059669'
        }}>
            📊 LTR Layout (For Comparison)
          </h4>
          <div dir="ltr" style={{
          width: '100%',
          padding: '20px',
          border: '2px solid #bbf7d0',
          borderRadius: '8px',
          backgroundColor: '#f0fdf4'
        }}>
            <RangeSlider type="dual thumb" state="rest" label="Price Range Comparison" prefix="$" suffix="USD" value={[value[0], value[1]]} onValueChange={setValue} min={100} max={1000} step={25} aria-label="Price range in USD" />
            <div style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'left',
            fontFamily: 'system-ui, sans-serif'
          }}>
              Selected range: \${value[0]} - \${value[1]} USD
            </div>
            <div style={{
            marginTop: '8px',
            fontSize: '12px',
            color: '#059669',
            textAlign: 'left'
          }}>
              ✅ Range fills left-to-right correctly
            </div>
          </div>
        </div>
        
        <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#eff6ff',
        borderRadius: '8px',
        border: '1px solid #3b82f6'
      }}>
          <h4 style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1d4ed8',
          margin: '0 0 10px 0'
        }}>
            🛠️ Technical Implementation Fix
          </h4>
          <div style={{
          fontSize: '12px',
          color: '#666',
          lineHeight: '1.6'
        }}>
            <p style={{
            margin: '0 0 8px 0'
          }}>
              <strong>Before:</strong> Used CSS <code>direction: rtl</code> which caused conflicts
            </p>
            <p style={{
            margin: '0 0 8px 0'
          }}>
              <strong>After:</strong> Uses Radix UI native <code>dir="rtl"</code> prop on Slider.Root
            </p>
            <p style={{
            margin: '0'
          }}>
              <strong>Result:</strong> Proper range fill direction, intuitive mouse interaction, and optimal performance
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(Ke=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;B.parameters={...B.parameters,docs:{...(Qe=B.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'RTL vs LTR - Side by Side',
  args: {
    type: 'dual thumb',
    state: 'rest',
    formatValue: (value: number) => \`\${value}%\`
  },
  render: args => {
    const [ltrValue, setLtrValue] = useState([30, 70]);
    const [rtlValue, setRtlValue] = useState([30, 70]);
    return <div style={{
      padding: '40px',
      display: 'flex',
      gap: '40px',
      maxWidth: '1200px'
    }}>
        {/* LTR Side */}
        <div style={{
        flex: 1
      }}>
          <h3 style={{
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            Left-to-Right (English)
          </h3>
          <div dir="ltr" style={{
          width: '100%',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}>
            <RangeSlider {...args} label="Price Range" prefix="$" suffix="USD" value={ltrValue} onValueChange={setLtrValue} aria-label="Price range selector" />
            <div style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#666'
          }}>
              <p>Selected range: \${ltrValue[0]} - \${ltrValue[1]}</p>
              <p>Average: \${Math.round((ltrValue[0] + ltrValue[1]) / 2)}</p>
            </div>
          </div>
        </div>
        
        {/* RTL Side */}
        <div style={{
        flex: 1
      }}>
          <h3 style={{
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
            Right-to-Left (Arabic)
          </h3>
          <div dir="rtl" style={{
          width: '100%',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}>
            <RangeSlider {...args} label="نطاق السعر" prefix="ر.س" suffix="SAR" value={rtlValue} onValueChange={setRtlValue} aria-label="محدد نطاق السعر" />
            <div style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'right'
          }}>
              <p>النطاق المحدد: ر.س{rtlValue[0]} - ر.س{rtlValue[1]}</p>
              <p>متوسط: ر.س{Math.round((rtlValue[0] + rtlValue[1]) / 2)}</p>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Ye=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;D.parameters={...D.parameters,docs:{...(Ze=D.parameters)==null?void 0:Ze.docs,source:{originalSource:"SingleThumbRest",...(tt=(et=D.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const lt=["SingleThumbRest","SingleThumbFocus","SingleThumbActive","SingleThumbDisabled","SingleThumbError","DualThumbRest","DualThumbFocus","DualThumbActive","DualThumbDisabled","DualThumbError","WithPrefix","WithSuffix","WithPrefixAndSuffix","InteractiveDemo","RTLExample","RTLPositioningDemo","RTLWithSuffix","RTLWithPrefix","RTLWithPrefixAndSuffix","RTLActiveState","RTLErrorState","RTLMoneyRangeExample","RTLComprehensiveDemo","RTLVsLTRComparison","Default"],ut=Object.freeze(Object.defineProperty({__proto__:null,Default:D,DualThumbActive:m,DualThumbDisabled:f,DualThumbError:v,DualThumbFocus:h,DualThumbRest:c,InteractiveDemo:T,RTLActiveState:z,RTLComprehensiveDemo:A,RTLErrorState:C,RTLExample:R,RTLMoneyRangeExample:W,RTLPositioningDemo:V,RTLVsLTRComparison:B,RTLWithPrefix:L,RTLWithPrefixAndSuffix:w,RTLWithSuffix:j,SingleThumbActive:u,SingleThumbDisabled:x,SingleThumbError:g,SingleThumbFocus:p,SingleThumbRest:d,WithPrefix:b,WithPrefixAndSuffix:y,WithSuffix:S,__namedExportsOrder:lt,default:nt},Symbol.toStringTag,{value:"Module"}));export{D,T as I,ut as R,d as S,b as W,c as a,p as b,u as c,x as d,g as e,S as f,y as g,R as h,L as i,j,A as k,B as l};
