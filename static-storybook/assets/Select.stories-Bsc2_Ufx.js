const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Select-BLgAKqga.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Select-Bnkvnb3h.js","./index-BdQq_4o_.js","./index-DW48STyt.js","./index-9FI6h9_9.js","./index-D7-T4lOe.js","./index-YtIeenAn.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-N3eucVg6.js","./index-DavpLpmr.js","./index-DXU_LAI1.js","./index-ComwvWTa.js","./index-QFq3N9B_.js","./clsx-B-dksMZM.js","./TextInput-CRZDgAAp.js","./IconExclamationCircle-BYkI5IG6.js","./createReactComponent-CKk3lApD.js","./IconX-DigCVOFI.js","./TextInput-Ci27RXeL.css","./IconChevronDown-D1vfiZl2.js","./IconChevronUp-BrVbvfGP.js","./IconSearch-BrVn1Pri.js","./IconCheck-DgTGwIHb.js","./Select-zmZD4YxI.css","./IconUser-CxX_vdyQ.js"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as l}from"./Select-Bnkvnb3h.js";import{I as i}from"./IconSearch-BrVn1Pri.js";import{I as G}from"./IconUser-CxX_vdyQ.js";const r=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape",disabled:!0},{value:"honeydew",label:"Honeydew"}],x=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"br",label:"Brazil"},{value:"ar",label:"Argentina"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"it",label:"Italy"},{value:"es",label:"Spain"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"au",label:"Australia"},{value:"nz",label:"New Zealand"},{value:"za",label:"South Africa"},{value:"eg",label:"Egypt"},{value:"ng",label:"Nigeria"},{value:"ke",label:"Kenya"}],K={title:"Components/Select",component:l,parameters:{layout:"centered",docs:{page:()=>N(()=>import("./Select-BLgAKqga.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url)}},tags:[],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"],description:"Size of the select field"},label:{control:"text",description:"Text label for the select"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},helpText:{control:"text",description:"Help text displayed below the select"},errorMessage:{control:"text",description:"Error message displayed below the select"},disabled:{control:"boolean",description:"Whether the select is disabled"},required:{control:"boolean",description:"Whether the field is required"},optional:{control:"boolean",description:"Mark the field as optional"},fullWidth:{control:"boolean",description:"Whether the select should take full width"},hideLabel:{control:"boolean",description:"Whether to hide the label visually"},options:{control:"object",description:"Array of options to display"},searchable:{control:"boolean",description:"Whether to show search input for long lists"},searchPlaceholder:{control:"text",description:"Placeholder text for search input"},maxWidth:{control:"text",description:"Maximum width of the select component"},minWidth:{control:"text",description:"Minimum width of the select component"}},args:{options:r,size:"medium",disabled:!1,required:!1,optional:!1,fullWidth:!1,hideLabel:!1,searchable:!1,searchPlaceholder:"Search options..."}},o={args:{label:"Favorite Fruit",placeholder:"Select a fruit..."}},s={name:"Size Variants",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",minWidth:"350px"},children:[e.jsx(l,{...a,label:"XLarge (56px)",size:"xlarge",placeholder:"XLarge select...",helpText:"Uses body-large-default font size with 24px icons"}),e.jsx(l,{...a,label:"Large (48px)",size:"large",placeholder:"Large select...",helpText:"Uses body-md-default font size with 20px icons"}),e.jsx(l,{...a,label:"Medium (40px)",size:"medium",placeholder:"Medium select (default)...",helpText:"Uses body-md-default font size with 16px icons"}),e.jsx(l,{...a,label:"Small (32px)",size:"small",placeholder:"Small select...",helpText:"Uses body-sm-default font size with 16px icons"}),e.jsx(l,{...a,label:"XSmall (28px)",size:"xsmall",placeholder:"XSmall select...",helpText:"Uses caption-lg-default font size with 16px icons"})]}),args:{options:r},parameters:{controls:{exclude:["size","label","placeholder"]}}},t={name:"Sizes with Prefix Icons",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(l,{label:"XLarge with Icon",placeholder:"Search...",size:"xlarge",prefix:e.jsx(i,{size:24}),options:r,errorMessage:"24px icons in XLarge size"}),e.jsx(l,{label:"Large with Icon",placeholder:"Search...",size:"large",prefix:e.jsx(i,{size:20}),options:r,errorMessage:"20px icons in Large size"}),e.jsx(l,{label:"Medium with Icon",placeholder:"Search...",size:"medium",prefix:e.jsx(i,{size:16}),options:r,errorMessage:"16px icons in Medium size"}),e.jsx(l,{label:"Small with Icon",placeholder:"Search...",size:"small",prefix:e.jsx(i,{size:16}),options:r,errorMessage:"16px icons in Small size"}),e.jsx(l,{label:"XSmall with Icon",placeholder:"Search...",size:"xsmall",prefix:e.jsx(i,{size:16}),options:r,errorMessage:"16px icons in XSmall size"})]})},n={name:"Component States",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"300px"},children:[e.jsx(l,{...a,label:"Required Field",placeholder:"This field is required"}),e.jsx(l,{...a,label:"Optional Field",placeholder:"This field is optional",optional:!0}),e.jsx(l,{...a,label:"Disabled Field",placeholder:"Cannot interact with this",disabled:!0}),e.jsx(l,{...a,label:"Error State",placeholder:"This has an error",errorMessage:"This field is required."}),e.jsx(l,{...a,label:"With Help Text",placeholder:"Select an option...",helpText:"This is helpful information about the field."})]}),args:{options:r},parameters:{controls:{exclude:["label","placeholder","required","optional","disabled","errorMessage","helpText"]}}},c={name:"Prefix & Search Features",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"350px"},children:[e.jsx(l,{...a,label:"With Prefix Icon",prefix:e.jsx(G,{size:18}),placeholder:"Select user type...",options:[{value:"admin",label:"Administrator"},{value:"user",label:"Regular User"},{value:"guest",label:"Guest"}]}),e.jsx(l,{...a,label:"Searchable Select",placeholder:"Search countries...",searchable:!0,searchPlaceholder:"Type to search...",options:x,helpText:"Start typing to filter options"}),e.jsx(l,{...a,label:"Searchable with Prefix",prefix:e.jsx(i,{size:18}),placeholder:"Search users...",searchable:!0,searchPlaceholder:"Type to search users...",options:[{value:"john",label:"John Smith"},{value:"jane",label:"Jane Doe"},{value:"bob",label:"Bob Johnson"},{value:"alice",label:"Alice Brown"},{value:"charlie",label:"Charlie Davis"},{value:"diana",label:"Diana Wilson"}]})]}),parameters:{controls:{exclude:["label","placeholder","prefix","searchable","searchPlaceholder","options","helpText"]}}},p={name:"Width Control",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"100%"},children:[e.jsx(l,{...a,label:"Default Width",placeholder:"Default width..."}),e.jsx(l,{...a,label:"Min Width (200px)",placeholder:"Has minimum width...",minWidth:200}),e.jsx(l,{...a,label:"Max Width (300px)",placeholder:"Has maximum width...",maxWidth:300}),e.jsx(l,{...a,label:"Full Width",placeholder:"Takes full container width...",fullWidth:!0})]}),args:{options:r},parameters:{layout:"padded",controls:{exclude:["label","placeholder","minWidth","maxWidth","fullWidth"]}}},d={name:"RTL Support",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"350px"},children:[e.jsx(l,{...a,label:"اختر الفاكهة المفضلة",placeholder:"اختر فاكهة...",helpText:"هذا نص المساعدة باللغة العربية",options:[{value:"apple",label:"تفاح"},{value:"banana",label:"موز"},{value:"cherry",label:"كرز"},{value:"date",label:"تمر"},{value:"grape",label:"عنب"}]}),e.jsx(l,{...a,label:"حقل مطلوب",placeholder:"يرجى اختيار خيار...",errorMessage:"هذا الحقل مطلوب.",options:[{value:"apple",label:"تفاح"},{value:"banana",label:"موز"},{value:"cherry",label:"كرز"}]}),e.jsx(l,{...a,label:"حقل اختياري",placeholder:"اختياري...",optional:!0,options:[{value:"option1",label:"خيار أول"},{value:"option2",label:"خيار ثاني"},{value:"option3",label:"خيار ثالث"}]})]}),parameters:{globals:{direction:"rtl"},controls:{exclude:["label","placeholder","helpText","errorMessage","required","optional","options"]}}},h={name:"Advanced Features",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"350px"},children:[e.jsx(l,{...a,label:"Long Option List",placeholder:"Scroll through many options...",options:x,helpText:"This list has scroll behavior for many options"}),e.jsx(l,{...a,label:"Disabled Options",placeholder:"Some options are disabled...",options:[{value:"available1",label:"Available Option 1"},{value:"disabled1",label:"Disabled Option 1",disabled:!0},{value:"available2",label:"Available Option 2"},{value:"disabled2",label:"Disabled Option 2",disabled:!0},{value:"available3",label:"Available Option 3"}]}),e.jsx(l,{...a,label:"Hidden Label",placeholder:"Label is visually hidden but accessible...",hideLabel:!0,options:r,helpText:"Label exists for screen readers"})]}),parameters:{controls:{exclude:["label","placeholder","options","helpText","hideLabel"]}}},u={name:"Real-world: Contact Form",parameters:{layout:"padded",controls:{hideNoControlsWarning:!0}},render:()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"How did you hear about us?",placeholder:"Select one...",options:[{value:"search",label:"Search Engine"},{value:"social",label:"Social Media"},{value:"friend",label:"Friend/Colleague"},{value:"advertisement",label:"Advertisement"},{value:"other",label:"Other"}],helpText:"This helps us understand our reach better."}),e.jsx(l,{label:"Priority Level",options:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"urgent",label:"Urgent"}]})]})},b={name:"Real-world: User Profile",parameters:{layout:"padded",controls:{hideNoControlsWarning:!0}},render:()=>e.jsxs("div",{style:{maxWidth:"500px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{label:"Country",size:"medium",prefix:e.jsx(i,{size:16}),placeholder:"Search and select your country...",searchable:!0,searchPlaceholder:"Type to search countries...",options:x,fullWidth:!0,helpText:"We'll use this to show relevant content and pricing."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(l,{label:"Time Zone",size:"small",options:[{value:"est",label:"Eastern Time (EST)"},{value:"cst",label:"Central Time (CST)"},{value:"mst",label:"Mountain Time (MST)"},{value:"pst",label:"Pacific Time (PST)"}],optional:!0}),e.jsx(l,{label:"Language",size:"small",options:[{value:"en",label:"English"},{value:"es",label:"Español"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"ar",label:"العربية"}]})]})]})};var m,v,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit...'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,S,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    minWidth: '350px'
  }}>
      <Select {...args} label="XLarge (56px)" size="xlarge" placeholder="XLarge select..." helpText="Uses body-large-default font size with 24px icons" />
      <Select {...args} label="Large (48px)" size="large" placeholder="Large select..." helpText="Uses body-md-default font size with 20px icons" />
      <Select {...args} label="Medium (40px)" size="medium" placeholder="Medium select (default)..." helpText="Uses body-md-default font size with 16px icons" />
      <Select {...args} label="Small (32px)" size="small" placeholder="Small select..." helpText="Uses body-sm-default font size with 16px icons" />
      <Select {...args} label="XSmall (28px)" size="xsmall" placeholder="XSmall select..." helpText="Uses caption-lg-default font size with 16px icons" />
    </div>,
  args: {
    options: sampleOptions
  },
  parameters: {
    controls: {
      exclude: ['size', 'label', 'placeholder']
    }
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,z,W;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sizes with Prefix Icons',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>
      <Select label="XLarge with Icon" placeholder="Search..." size="xlarge" prefix={<IconSearch size={24} />} options={sampleOptions} errorMessage="24px icons in XLarge size" />
      <Select label="Large with Icon" placeholder="Search..." size="large" prefix={<IconSearch size={20} />} options={sampleOptions} errorMessage="20px icons in Large size" />
      <Select label="Medium with Icon" placeholder="Search..." size="medium" prefix={<IconSearch size={16} />} options={sampleOptions} errorMessage="16px icons in Medium size" />
      <Select label="Small with Icon" placeholder="Search..." size="small" prefix={<IconSearch size={16} />} options={sampleOptions} errorMessage="16px icons in Small size" />
      <Select label="XSmall with Icon" placeholder="Search..." size="xsmall" prefix={<IconSearch size={16} />} options={sampleOptions} errorMessage="16px icons in XSmall size" />
    </div>
}`,...(W=(z=t.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,w,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Component States',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '300px'
  }}>
      <Select {...args} label="Required Field" placeholder="This field is required" />
      <Select {...args} label="Optional Field" placeholder="This field is optional" optional />
      <Select {...args} label="Disabled Field" placeholder="Cannot interact with this" disabled />
      <Select {...args} label="Error State" placeholder="This has an error" errorMessage="This field is required." />
      <Select {...args} label="With Help Text" placeholder="Select an option..." helpText="This is helpful information about the field." />
    </div>,
  args: {
    options: sampleOptions
  },
  parameters: {
    controls: {
      exclude: ['label', 'placeholder', 'required', 'optional', 'disabled', 'errorMessage', 'helpText']
    }
  }
}`,...(M=(w=n.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,L,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Prefix & Search Features',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '350px'
  }}>
      <Select {...args} label="With Prefix Icon" prefix={<IconUser size={18} />} placeholder="Select user type..." options={[{
      value: 'admin',
      label: 'Administrator'
    }, {
      value: 'user',
      label: 'Regular User'
    }, {
      value: 'guest',
      label: 'Guest'
    }]} />
      <Select {...args} label="Searchable Select" placeholder="Search countries..." searchable searchPlaceholder="Type to search..." options={countryOptions} helpText="Start typing to filter options" />
      <Select {...args} label="Searchable with Prefix" prefix={<IconSearch size={18} />} placeholder="Search users..." searchable searchPlaceholder="Type to search users..." options={[{
      value: 'john',
      label: 'John Smith'
    }, {
      value: 'jane',
      label: 'Jane Doe'
    }, {
      value: 'bob',
      label: 'Bob Johnson'
    }, {
      value: 'alice',
      label: 'Alice Brown'
    }, {
      value: 'charlie',
      label: 'Charlie Davis'
    }, {
      value: 'diana',
      label: 'Diana Wilson'
    }]} />
    </div>,
  parameters: {
    controls: {
      exclude: ['label', 'placeholder', 'prefix', 'searchable', 'searchPlaceholder', 'options', 'helpText']
    }
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var O,C,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Width Control',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '100%'
  }}>
      <Select {...args} label="Default Width" placeholder="Default width..." />
      <Select {...args} label="Min Width (200px)" placeholder="Has minimum width..." minWidth={200} />
      <Select {...args} label="Max Width (300px)" placeholder="Has maximum width..." maxWidth={300} />
      <Select {...args} label="Full Width" placeholder="Takes full container width..." fullWidth />
    </div>,
  args: {
    options: sampleOptions
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['label', 'placeholder', 'minWidth', 'maxWidth', 'fullWidth']
    }
  }
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var F,A,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'RTL Support',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '350px'
  }}>
      <Select {...args} label="اختر الفاكهة المفضلة" placeholder="اختر فاكهة..." helpText="هذا نص المساعدة باللغة العربية" options={[{
      value: 'apple',
      label: 'تفاح'
    }, {
      value: 'banana',
      label: 'موز'
    }, {
      value: 'cherry',
      label: 'كرز'
    }, {
      value: 'date',
      label: 'تمر'
    }, {
      value: 'grape',
      label: 'عنب'
    }]} />
      <Select {...args} label="حقل مطلوب" placeholder="يرجى اختيار خيار..." errorMessage="هذا الحقل مطلوب." options={[{
      value: 'apple',
      label: 'تفاح'
    }, {
      value: 'banana',
      label: 'موز'
    }, {
      value: 'cherry',
      label: 'كرز'
    }]} />
      <Select {...args} label="حقل اختياري" placeholder="اختياري..." optional options={[{
      value: 'option1',
      label: 'خيار أول'
    }, {
      value: 'option2',
      label: 'خيار ثاني'
    }, {
      value: 'option3',
      label: 'خيار ثالث'
    }]} />
    </div>,
  parameters: {
    globals: {
      direction: 'rtl'
    },
    controls: {
      exclude: ['label', 'placeholder', 'helpText', 'errorMessage', 'required', 'optional', 'options']
    }
  }
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var E,X,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Advanced Features',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '350px'
  }}>
      <Select {...args} label="Long Option List" placeholder="Scroll through many options..." options={countryOptions} helpText="This list has scroll behavior for many options" />
      <Select {...args} label="Disabled Options" placeholder="Some options are disabled..." options={[{
      value: 'available1',
      label: 'Available Option 1'
    }, {
      value: 'disabled1',
      label: 'Disabled Option 1',
      disabled: true
    }, {
      value: 'available2',
      label: 'Available Option 2'
    }, {
      value: 'disabled2',
      label: 'Disabled Option 2',
      disabled: true
    }, {
      value: 'available3',
      label: 'Available Option 3'
    }]} />
      <Select {...args} label="Hidden Label" placeholder="Label is visually hidden but accessible..." hideLabel options={sampleOptions} helpText="Label exists for screen readers" />
    </div>,
  parameters: {
    controls: {
      exclude: ['label', 'placeholder', 'options', 'helpText', 'hideLabel']
    }
  }
}`,...(R=(X=h.parameters)==null?void 0:X.docs)==null?void 0:R.source}}};var H,_,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Real-world: Contact Form',
  parameters: {
    layout: 'padded',
    controls: {
      hideNoControlsWarning: true
    }
  },
  render: () => <div style={{
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Select label="How did you hear about us?" placeholder="Select one..." options={[{
      value: 'search',
      label: 'Search Engine'
    }, {
      value: 'social',
      label: 'Social Media'
    }, {
      value: 'friend',
      label: 'Friend/Colleague'
    }, {
      value: 'advertisement',
      label: 'Advertisement'
    }, {
      value: 'other',
      label: 'Other'
    }]} helpText="This helps us understand our reach better." />
      
      <Select label="Priority Level" options={[{
      value: 'low',
      label: 'Low'
    }, {
      value: 'medium',
      label: 'Medium'
    }, {
      value: 'high',
      label: 'High'
    }, {
      value: 'urgent',
      label: 'Urgent'
    }]} />
    </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var k,J,B;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Real-world: User Profile',
  parameters: {
    layout: 'padded',
    controls: {
      hideNoControlsWarning: true
    }
  },
  render: () => <div style={{
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Select label="Country" size="medium" prefix={<IconSearch size={16} />} placeholder="Search and select your country..." searchable={true} searchPlaceholder="Type to search countries..." options={countryOptions} fullWidth helpText="We'll use this to show relevant content and pricing." />
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>
        <Select label="Time Zone" size="small" options={[{
        value: 'est',
        label: 'Eastern Time (EST)'
      }, {
        value: 'cst',
        label: 'Central Time (CST)'
      }, {
        value: 'mst',
        label: 'Mountain Time (MST)'
      }, {
        value: 'pst',
        label: 'Pacific Time (PST)'
      }]} optional />
        
        <Select label="Language" size="small" options={[{
        value: 'en',
        label: 'English'
      }, {
        value: 'es',
        label: 'Español'
      }, {
        value: 'fr',
        label: 'Français'
      }, {
        value: 'de',
        label: 'Deutsch'
      }, {
        value: 'ar',
        label: 'العربية'
      }]} />
      </div>
    </div>
}`,...(B=(J=b.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};const V=["Default","Sizes","SizesWithPrefix","States","PrefixAndSearch","WidthControl","RTLSupport","AdvancedFeatures","ContactForm","UserProfile"],le=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFeatures:h,ContactForm:u,Default:o,PrefixAndSearch:c,RTLSupport:d,Sizes:s,SizesWithPrefix:t,States:n,UserProfile:b,WidthControl:p,__namedExportsOrder:V,default:K},Symbol.toStringTag,{value:"Module"}));export{h as A,u as C,o as D,c as P,d as R,le as S,b as U,p as W,s as a,n as b};
