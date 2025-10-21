const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Modal-DSXYIm9z.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Modal-C3Y6YLke.js","./Drawer-CJqTAku3.js","./clsx-B-dksMZM.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-N3eucVg6.js","./index-DavpLpmr.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-BTe66ZhM.js","./Button-CoP_mZBT.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./ScrollArea-CS41QZ1X.js","./index-YtIeenAn.js","./index-BdQq_4o_.js","./ScrollArea--7mshJD0.css","./Modal-BbL2DAug.css","./Select-Bnkvnb3h.js","./index-9FI6h9_9.js","./index-DXU_LAI1.js","./index-ComwvWTa.js","./index-QFq3N9B_.js","./TextInput-CRZDgAAp.js","./IconExclamationCircle-BYkI5IG6.js","./TextInput-Ci27RXeL.css","./IconChevronDown-D1vfiZl2.js","./IconChevronUp-BrVbvfGP.js","./IconSearch-BrVn1Pri.js","./IconCheck-DgTGwIHb.js","./Select-zmZD4YxI.css"])))=>i.map(i=>d[i]);
import{_ as Ie}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as D}from"./index-D4H_InIO.js";import{M as W}from"./Modal-C3Y6YLke.js";import{B as a}from"./Button-CoP_mZBT.js";import{S as M}from"./Select-Bnkvnb3h.js";import{T as z}from"./TextInput-CRZDgAAp.js";const Ee={title:"Components/Modal",component:W,parameters:{layout:"centered",docs:{page:()=>Ie(()=>import("./Modal-DSXYIm9z.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]),import.meta.url)}},tags:[],argTypes:{size:{control:"select",options:["default","fullscreen"]},width:{control:"select",options:["small","medium","large","custom"]},customWidth:{control:"text"},minWidth:{control:"text"},maxWidth:{control:"text"},contentPadding:{control:"text"},showTitle:{control:"boolean"},showFooter:{control:"boolean"},footerVariant:{control:"select",options:["cancelAndActions","swapAndActions","actionsOnly"]},showPrimaryButton:{control:"boolean"},showSecondaryButton:{control:"boolean"},rtl:{control:"boolean"},scrollable:{control:"boolean"},maxHeight:{control:"text"}}},t={args:{title:"Title",showTitle:!0,showFooter:!0,footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Label",secondaryLabel:"Label",showPrimaryButton:!0,showSecondaryButton:!0,size:"default",children:e.jsx("div",{style:{textAlign:"center",padding:"16px"},children:"Modal Content"}),trigger:e.jsx(a,{children:"Open Modal"})}},g={args:{...t.args,showTitle:!1}},p={args:{...t.args,showFooter:!1}},m={args:{...t.args,title:"العنوان",cancelLabel:"إلغاء",primaryLabel:"تأكيد",secondaryLabel:"ثانوي",children:e.jsx("div",{style:{padding:"16px",textAlign:"right",direction:"rtl"},children:"محتوى النافذة المنبثقة باللغة العربية. يمكنك تبديل الاتجاه من شريط الأدوات لرؤية التخطيط الصحيح."}),trigger:e.jsx(a,{children:"فتح النافذة"})},parameters:{docs:{description:{story:"Modal with Arabic content - switch to RTL mode in the Storybook toolbar to see proper layout mirroring"}}}},h={args:{...t.args,footerVariant:"cancelAndActions",trigger:e.jsx(a,{children:"Cancel & Actions Footer"})}},f={args:{...t.args,footerVariant:"swapAndActions",trigger:e.jsx(a,{children:"Swap & Actions Footer"})}},y={args:{...t.args,footerVariant:"actionsOnly",trigger:e.jsx(a,{children:"Actions Only Footer"})}},b={args:{...t.args,footerVariant:"cancelAndActions",showSecondaryButton:!1,trigger:e.jsx(a,{children:"Single Button Footer"})}},v={args:{...t.args,footerVariant:"swapAndActions",swapContent:e.jsx("span",{style:{color:"blue",fontWeight:"bold"},children:"Custom Content"}),trigger:e.jsx(a,{children:"Custom Swap Content"})}},x={args:{...t.args,width:"small",trigger:e.jsx(a,{children:"Open Small Modal"})}},C={args:{...t.args,width:"medium",trigger:e.jsx(a,{children:"Open Medium Modal"})}},w={args:{...t.args,width:"large",trigger:e.jsx(a,{children:"Open Large Modal"})}},S={args:{...t.args,width:"custom",customWidth:"50rem",trigger:e.jsx(a,{children:"Open Custom Width Modal"})}},A={args:{...t.args,width:"custom",customWidth:"70%",minWidth:"20rem",maxWidth:"60rem",trigger:e.jsx(a,{children:"Open Modal with Min/Max Width"})}},j={args:{...t.args,contentPadding:"var(--t-space-700)",trigger:e.jsx(a,{children:"Open Modal with Custom Padding"})}},B={args:{...t.args,contentPadding:"0",trigger:e.jsx(a,{children:"Open Modal with No Padding"})}},O={render:V=>{const[c,d]=D.useState(!1),[o,r]=D.useState({name:"",email:"",country:"",language:"",category:""}),u=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"sa",label:"Saudi Arabia"},{value:"ae",label:"United Arab Emirates"}],P=[{value:"en",label:"English"},{value:"ar",label:"العربية"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"es",label:"Español"}],n=[{value:"tech",label:"Technology"},{value:"business",label:"Business"},{value:"education",label:"Education"},{value:"healthcare",label:"Healthcare"},{value:"finance",label:"Finance"},{value:"retail",label:"Retail"}],l=()=>{console.log("Form submitted:",o),d(!1)};return e.jsx(W,{...V,open:c,onOpenChange:d,trigger:e.jsx(a,{children:"Open Form with Select"}),title:"User Registration Form",footerVariant:"cancelAndActions",cancelLabel:"Cancel",primaryLabel:"Register",showPrimaryButton:!0,showSecondaryButton:!1,scrollable:!0,maxHeight:"400px",onCancel:()=>d(!1),onPrimary:l,children:e.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(z,{label:"Full Name",placeholder:"Enter your full name",value:o.name,onChange:s=>r(i=>({...i,name:s.target.value})),required:!0}),e.jsx(z,{label:"Email Address",type:"email",placeholder:"Enter your email",value:o.email,onChange:s=>r(i=>({...i,email:s.target.value})),required:!0}),e.jsx(M,{label:"Country",placeholder:"Select your country...",options:u,value:o.country,onValueChange:s=>r(i=>({...i,country:s})),helpText:"This Select dropdown should appear above the modal overlay"}),e.jsx(M,{label:"Preferred Language",placeholder:"Select language...",options:P,value:o.language,onValueChange:s=>r(i=>({...i,language:s})),searchable:!0,searchPlaceholder:"Search languages..."}),e.jsx(M,{label:"Category",placeholder:"Select a category...",options:n,value:o.category,onValueChange:s=>r(i=>({...i,category:s})),helpText:"Testing multiple Select components in the same modal"}),e.jsxs("div",{style:{marginTop:"8px",padding:"12px",backgroundColor:"var(--t-color-fill-success-secondary)",borderRadius:"var(--t-border-radius-200)",fontSize:"var(--t-font-size-300)",color:"var(--t-color-text-success)"},children:[e.jsx("strong",{children:"Z-Index Test:"})," Open any Select dropdown above. The dropdown should appear above the modal overlay, not behind it."]})]})})},parameters:{docs:{description:{story:"Tests the Select component integration with Modal. Select dropdowns should appear above the modal overlay thanks to automatic z-index detection."}}}},F={render:V=>{const[c,d]=D.useState(!1),[o,r]=D.useState({showCancel:!0,showSecondary:!0,showPrimary:!0,footerVariant:"cancelAndActions",customContent:""}),u=n=>{r(l=>({...l,[n]:!l[n]}))},P=n=>{r(l=>({...l,footerVariant:n}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{padding:"16px",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-200)",display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"var(--t-font-size-400)"},children:"Footer Configuration"}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"var(--t-font-size-300)",fontWeight:"var(--t-font-weight-medium)"},children:"Footer Variant:"}),e.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"4px"},children:["cancelAndActions","swapAndActions","actionsOnly"].map(n=>e.jsx(a,{size:"micro",variant:o.footerVariant===n?"primary":"secondary",onClick:()=>P(n),children:n},n))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{style:{fontSize:"var(--t-font-size-300)",fontWeight:"var(--t-font-weight-medium)"},children:"Button Visibility:"}),o.footerVariant!=="actionsOnly"&&e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--t-font-size-300)"},children:[e.jsx("input",{type:"checkbox",checked:o.showCancel,onChange:()=>u("showCancel")}),"Show Cancel Button"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--t-font-size-300)"},children:[e.jsx("input",{type:"checkbox",checked:o.showSecondary,onChange:()=>u("showSecondary")}),"Show Secondary Button"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"var(--t-font-size-300)"},children:[e.jsx("input",{type:"checkbox",checked:o.showPrimary,onChange:()=>u("showPrimary")}),"Show Primary Button"]})]}),o.footerVariant==="swapAndActions"&&e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"var(--t-font-size-300)",fontWeight:"var(--t-font-weight-medium)"},children:"Custom Swap Content:"}),e.jsx("input",{type:"text",value:o.customContent,onChange:n=>r(l=>({...l,customContent:n.target.value})),placeholder:"Enter custom content...",style:{marginTop:"4px",padding:"8px",border:"1px solid var(--t-color-border-secondary)",borderRadius:"var(--t-border-radius-100)",width:"100%"}})]})]}),e.jsx(W,{...V,open:c,onOpenChange:d,trigger:e.jsx(a,{children:"Open Dynamic Footer Modal"}),title:"Dynamic Footer Control",showFooter:o.showPrimary||o.showSecondary||o.showCancel,footerVariant:o.footerVariant,cancelLabel:o.showCancel?"Cancel":void 0,onCancel:o.showCancel?()=>d(!1):void 0,secondaryLabel:o.showSecondary?"Draft":void 0,showSecondaryButton:o.showSecondary,onSecondary:o.showSecondary?()=>console.log("Secondary action"):void 0,primaryLabel:o.showPrimary?"Save":void 0,showPrimaryButton:o.showPrimary,onPrimary:o.showPrimary?()=>console.log("Primary action"):void 0,swapContent:o.footerVariant==="swapAndActions"&&o.customContent?e.jsx("span",{style:{fontStyle:"italic",color:"var(--t-color-text-secondary)"},children:o.customContent}):void 0,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("p",{children:"This modal demonstrates dynamic footer control:"}),e.jsxs("ul",{style:{marginLeft:"20px",lineHeight:1.6},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Footer Variants:"})," Switch between cancelAndActions, swapAndActions, and actionsOnly"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Button Visibility:"})," Toggle individual buttons on/off"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Content:"})," Add custom content to the swap area"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"RTL Support:"})," All variants work correctly in RTL mode"]})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",fontSize:"var(--t-font-size-300)"},children:[e.jsx("strong",{children:"Current Configuration:"}),e.jsx("br",{}),"• Variant: ",o.footerVariant,e.jsx("br",{}),"• Cancel: ",o.showCancel?"✓":"✗",e.jsx("br",{}),"• Secondary: ",o.showSecondary?"✓":"✗",e.jsx("br",{}),"• Primary: ",o.showPrimary?"✓":"✗",o.footerVariant==="swapAndActions"&&o.customContent&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),'• Custom Content: "',o.customContent,'"']})]})]})})]})},parameters:{docs:{description:{story:"Demonstrates complete dynamic control over the Modal footer. Toggle button visibility, switch footer variants, and add custom content in real-time."}}}},T={args:{...t.args,title:"Scrollable Modal Content",scrollable:!0,maxHeight:"300px",trigger:e.jsx(a,{children:"Open Scrollable Modal"}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("p",{children:"This modal demonstrates the ScrollArea integration for long content."}),Array.from({length:20},(V,c)=>e.jsxs("div",{style:{padding:"12px",backgroundColor:c%2===0?"var(--t-color-fill-secondary)":"var(--t-color-fill-tertiary)",borderRadius:"var(--t-border-radius-100)",border:"1px solid var(--t-color-border-secondary)"},children:[e.jsxs("strong",{children:["Item ",c+1,":"]})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."]},c)),e.jsx("div",{style:{padding:"16px",backgroundColor:"var(--t-color-fill-brand-secondary)",borderRadius:"var(--t-border-radius-200)",textAlign:"center",fontWeight:"var(--t-font-weight-medium)"},children:"🎉 You've reached the end of the scrollable content!"})]})},parameters:{docs:{description:{story:"Modal with scrollable content using the ScrollArea component. The content area is limited to a specific height and provides custom scrollbars when needed."}}}};var L,k,R;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    showTitle: true,
    showFooter: true,
    footerVariant: 'cancelAndActions',
    cancelLabel: 'Cancel',
    primaryLabel: 'Label',
    secondaryLabel: 'Label',
    showPrimaryButton: true,
    showSecondaryButton: true,
    size: 'default',
    children: <div style={{
      textAlign: 'center',
      padding: '16px'
    }}>Modal Content</div>,
    trigger: <Button>Open Modal</Button>
  }
}`,...(R=(k=t.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,E,_;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showTitle: false
  }
}`,...(_=(E=g.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var U,H,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFooter: false
  }
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var N,G,K;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'العنوان',
    cancelLabel: 'إلغاء',
    primaryLabel: 'تأكيد',
    secondaryLabel: 'ثانوي',
    children: <div style={{
      padding: '16px',
      textAlign: 'right',
      direction: 'rtl'
    }}>
        محتوى النافذة المنبثقة باللغة العربية. يمكنك تبديل الاتجاه من شريط الأدوات لرؤية التخطيط الصحيح.
      </div>,
    trigger: <Button>فتح النافذة</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with Arabic content - switch to RTL mode in the Storybook toolbar to see proper layout mirroring'
      }
    }
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Y,Z,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footerVariant: 'cancelAndActions',
    trigger: <Button>Cancel & Actions Footer</Button>
  }
}`,...(J=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,$;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footerVariant: 'swapAndActions',
    trigger: <Button>Swap & Actions Footer</Button>
  }
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,oe,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footerVariant: 'actionsOnly',
    trigger: <Button>Actions Only Footer</Button>
  }
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ae,ne,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footerVariant: 'cancelAndActions',
    showSecondaryButton: false,
    trigger: <Button>Single Button Footer</Button>
  }
}`,...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footerVariant: 'swapAndActions',
    swapContent: <span style={{
      color: 'blue',
      fontWeight: 'bold'
    }}>Custom Content</span>,
    trigger: <Button>Custom Swap Content</Button>
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 'small',
    trigger: <Button>Open Small Modal</Button>
  }
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ge,pe,me;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 'medium',
    trigger: <Button>Open Medium Modal</Button>
  }
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 'large',
    trigger: <Button>Open Large Modal</Button>
  }
}`,...(ye=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,ve,xe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 'custom',
    customWidth: '50rem',
    trigger: <Button>Open Custom Width Modal</Button>
  }
}`,...(xe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ce,we,Se;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 'custom',
    customWidth: '70%',
    minWidth: '20rem',
    maxWidth: '60rem',
    trigger: <Button>Open Modal with Min/Max Width</Button>
  }
}`,...(Se=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ae,je,Be;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    contentPadding: 'var(--t-space-700)',
    trigger: <Button>Open Modal with Custom Padding</Button>
  }
}`,...(Be=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var Oe,Fe,Te;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    contentPadding: '0',
    trigger: <Button>Open Modal with No Padding</Button>
  }
}`,...(Te=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var Ve,De,Pe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      country: '',
      language: '',
      category: ''
    });
    const countryOptions = [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }, {
      value: 'sa',
      label: 'Saudi Arabia'
    }, {
      value: 'ae',
      label: 'United Arab Emirates'
    }];
    const languageOptions = [{
      value: 'en',
      label: 'English'
    }, {
      value: 'ar',
      label: 'العربية'
    }, {
      value: 'fr',
      label: 'Français'
    }, {
      value: 'de',
      label: 'Deutsch'
    }, {
      value: 'es',
      label: 'Español'
    }];
    const categoryOptions = [{
      value: 'tech',
      label: 'Technology'
    }, {
      value: 'business',
      label: 'Business'
    }, {
      value: 'education',
      label: 'Education'
    }, {
      value: 'healthcare',
      label: 'Healthcare'
    }, {
      value: 'finance',
      label: 'Finance'
    }, {
      value: 'retail',
      label: 'Retail'
    }];
    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      setIsOpen(false);
    };
    return <Modal {...args} open={isOpen} onOpenChange={setIsOpen} trigger={<Button>Open Form with Select</Button>} title="User Registration Form" footerVariant="cancelAndActions" cancelLabel="Cancel" primaryLabel="Register" showPrimaryButton={true} showSecondaryButton={false} scrollable={true} maxHeight="400px" onCancel={() => setIsOpen(false)} onPrimary={handleSubmit}>
        <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <TextInput label="Full Name" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData(prev => ({
          ...prev,
          name: e.target.value
        }))} required />
          
          <TextInput label="Email Address" type="email" placeholder="Enter your email" value={formData.email} onChange={e => setFormData(prev => ({
          ...prev,
          email: e.target.value
        }))} required />
          
          <Select label="Country" placeholder="Select your country..." options={countryOptions} value={formData.country} onValueChange={value => setFormData(prev => ({
          ...prev,
          country: value
        }))} helpText="This Select dropdown should appear above the modal overlay" />
          
          <Select label="Preferred Language" placeholder="Select language..." options={languageOptions} value={formData.language} onValueChange={value => setFormData(prev => ({
          ...prev,
          language: value
        }))} searchable searchPlaceholder="Search languages..." />
          
          <Select label="Category" placeholder="Select a category..." options={categoryOptions} value={formData.category} onValueChange={value => setFormData(prev => ({
          ...prev,
          category: value
        }))} helpText="Testing multiple Select components in the same modal" />
          
          <div style={{
          marginTop: '8px',
          padding: '12px',
          backgroundColor: 'var(--t-color-fill-success-secondary)',
          borderRadius: 'var(--t-border-radius-200)',
          fontSize: 'var(--t-font-size-300)',
          color: 'var(--t-color-text-success)'
        }}>
            <strong>Z-Index Test:</strong> Open any Select dropdown above. The dropdown should appear above the modal overlay, not behind it.
          </div>
        </div>
      </Modal>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests the Select component integration with Modal. Select dropdowns should appear above the modal overlay thanks to automatic z-index detection.'
      }
    }
  }
}`,...(Pe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Me,We,ze;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [footerConfig, setFooterConfig] = useState<{
      showCancel: boolean;
      showSecondary: boolean;
      showPrimary: boolean;
      footerVariant: 'cancelAndActions' | 'swapAndActions' | 'actionsOnly';
      customContent: string;
    }>({
      showCancel: true,
      showSecondary: true,
      showPrimary: true,
      footerVariant: 'cancelAndActions',
      customContent: ''
    });
    const handleToggle = (key: keyof typeof footerConfig) => {
      setFooterConfig(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    const handleVariantChange = (variant: 'cancelAndActions' | 'swapAndActions' | 'actionsOnly') => {
      setFooterConfig(prev => ({
        ...prev,
        footerVariant: variant
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
        {/* Footer Controls */}
        <div style={{
        padding: '16px',
        border: '1px solid var(--t-color-border-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '400px'
      }}>
          <h4 style={{
          margin: 0,
          fontSize: 'var(--t-font-size-400)'
        }}>Footer Configuration</h4>
          
          {/* Footer Variant Selection */}
          <div>
            <label style={{
            fontSize: 'var(--t-font-size-300)',
            fontWeight: 'var(--t-font-weight-medium)'
          }}>
              Footer Variant:
            </label>
            <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '4px'
          }}>
              {(['cancelAndActions', 'swapAndActions', 'actionsOnly'] as const).map(variant => <Button key={variant} size="micro" variant={footerConfig.footerVariant === variant ? 'primary' : 'secondary'} onClick={() => handleVariantChange(variant)}>
                  {variant}
                </Button>)}
            </div>
          </div>

          {/* Button Visibility Controls */}
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <label style={{
            fontSize: 'var(--t-font-size-300)',
            fontWeight: 'var(--t-font-weight-medium)'
          }}>
              Button Visibility:
            </label>
            
            {footerConfig.footerVariant !== 'actionsOnly' && <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--t-font-size-300)'
          }}>
                <input type="checkbox" checked={footerConfig.showCancel} onChange={() => handleToggle('showCancel')} />
                Show Cancel Button
              </label>}
            
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--t-font-size-300)'
          }}>
              <input type="checkbox" checked={footerConfig.showSecondary} onChange={() => handleToggle('showSecondary')} />
              Show Secondary Button
            </label>
            
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--t-font-size-300)'
          }}>
              <input type="checkbox" checked={footerConfig.showPrimary} onChange={() => handleToggle('showPrimary')} />
              Show Primary Button
            </label>
          </div>

          {/* Custom Content for Swap Area */}
          {footerConfig.footerVariant === 'swapAndActions' && <div>
              <label style={{
            fontSize: 'var(--t-font-size-300)',
            fontWeight: 'var(--t-font-weight-medium)'
          }}>
                Custom Swap Content:
              </label>
              <input type="text" value={footerConfig.customContent} onChange={e => setFooterConfig(prev => ({
            ...prev,
            customContent: e.target.value
          }))} placeholder="Enter custom content..." style={{
            marginTop: '4px',
            padding: '8px',
            border: '1px solid var(--t-color-border-secondary)',
            borderRadius: 'var(--t-border-radius-100)',
            width: '100%'
          }} />
            </div>}
        </div>

        <Modal {...args} open={isOpen} onOpenChange={setIsOpen} trigger={<Button>Open Dynamic Footer Modal</Button>} title="Dynamic Footer Control" showFooter={footerConfig.showPrimary || footerConfig.showSecondary || footerConfig.showCancel} footerVariant={footerConfig.footerVariant}

      // Cancel button visibility (only for cancelAndActions and swapAndActions)
      cancelLabel={footerConfig.showCancel ? "Cancel" : undefined} onCancel={footerConfig.showCancel ? () => setIsOpen(false) : undefined}

      // Secondary button visibility
      secondaryLabel={footerConfig.showSecondary ? "Draft" : undefined} showSecondaryButton={footerConfig.showSecondary} onSecondary={footerConfig.showSecondary ? () => console.log('Secondary action') : undefined}

      // Primary button visibility
      primaryLabel={footerConfig.showPrimary ? "Save" : undefined} showPrimaryButton={footerConfig.showPrimary} onPrimary={footerConfig.showPrimary ? () => console.log('Primary action') : undefined}

      // Custom swap content
      swapContent={footerConfig.footerVariant === 'swapAndActions' && footerConfig.customContent ? <span style={{
        fontStyle: 'italic',
        color: 'var(--t-color-text-secondary)'
      }}>
                  {footerConfig.customContent}
                </span> : undefined}>
          <div style={{
          padding: '16px'
        }}>
            <p>This modal demonstrates dynamic footer control:</p>
            <ul style={{
            marginLeft: '20px',
            lineHeight: 1.6
          }}>
              <li><strong>Footer Variants:</strong> Switch between cancelAndActions, swapAndActions, and actionsOnly</li>
              <li><strong>Button Visibility:</strong> Toggle individual buttons on/off</li>
              <li><strong>Custom Content:</strong> Add custom content to the swap area</li>
              <li><strong>RTL Support:</strong> All variants work correctly in RTL mode</li>
            </ul>
            
            <div style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: 'var(--t-color-fill-brand-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            fontSize: 'var(--t-font-size-300)'
          }}>
              <strong>Current Configuration:</strong>
              <br />• Variant: {footerConfig.footerVariant}
              <br />• Cancel: {footerConfig.showCancel ? '✓' : '✗'}
              <br />• Secondary: {footerConfig.showSecondary ? '✓' : '✗'}
              <br />• Primary: {footerConfig.showPrimary ? '✓' : '✗'}
              {footerConfig.footerVariant === 'swapAndActions' && footerConfig.customContent && <>
                  <br />• Custom Content: "{footerConfig.customContent}"
                </>}
            </div>
          </div>
        </Modal>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates complete dynamic control over the Modal footer. Toggle button visibility, switch footer variants, and add custom content in real-time.'
      }
    }
  }
}`,...(ze=(We=F.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Le,ke,Re;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Scrollable Modal Content',
    scrollable: true,
    maxHeight: '300px',
    trigger: <Button>Open Scrollable Modal</Button>,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <p>This modal demonstrates the ScrollArea integration for long content.</p>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} style={{
        padding: '12px',
        backgroundColor: i % 2 === 0 ? 'var(--t-color-fill-secondary)' : 'var(--t-color-fill-tertiary)',
        borderRadius: 'var(--t-border-radius-100)',
        border: '1px solid var(--t-color-border-secondary)'
      }}>
            <strong>Item {i + 1}:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </div>)}
        <div style={{
        padding: '16px',
        backgroundColor: 'var(--t-color-fill-brand-secondary)',
        borderRadius: 'var(--t-border-radius-200)',
        textAlign: 'center',
        fontWeight: 'var(--t-font-weight-medium)'
      }}>
          🎉 You've reached the end of the scrollable content!
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with scrollable content using the ScrollArea component. The content area is limited to a specific height and provides custom scrollbars when needed.'
      }
    }
  }
}`,...(Re=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};const _e=["Default","WithoutTitle","WithoutFooter","ArabicContent","CancelAndActions","SwapAndActions","ActionsOnly","SingleButton","CustomSwapContent","SmallWidth","MediumWidth","LargeWidth","CustomWidth","WithMinMaxWidth","CustomContentPadding","NoContentPadding","FormWithSelect","DynamicFooter","ScrollableContent"],Ze=Object.freeze(Object.defineProperty({__proto__:null,ActionsOnly:y,ArabicContent:m,CancelAndActions:h,CustomContentPadding:j,CustomSwapContent:v,CustomWidth:S,Default:t,DynamicFooter:F,FormWithSelect:O,LargeWidth:w,MediumWidth:C,NoContentPadding:B,ScrollableContent:T,SingleButton:b,SmallWidth:x,SwapAndActions:f,WithMinMaxWidth:A,WithoutFooter:p,WithoutTitle:g,__namedExportsOrder:_e,default:Ee},Symbol.toStringTag,{value:"Module"}));export{m as A,S as C,t as D,O as F,w as L,Ze as M,B as N,x as S,g as W,C as a,j as b,T as c,p as d,F as e,h as f,f as g,y as h};
