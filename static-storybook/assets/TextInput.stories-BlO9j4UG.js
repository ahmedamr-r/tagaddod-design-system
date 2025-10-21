const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TextInput-DsAm233J.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./TextInput-CRZDgAAp.js","./index-QFq3N9B_.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-N3eucVg6.js","./clsx-B-dksMZM.js","./IconExclamationCircle-BYkI5IG6.js","./createReactComponent-CKk3lApD.js","./IconX-DigCVOFI.js","./TextInput-Ci27RXeL.css","./IconSearch-BrVn1Pri.js","./IconCurrencyDollar-E96oMeB2.js","./IconUser-CxX_vdyQ.js"])))=>i.map(i=>d[i]);
import{_ as er}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as F}from"./index-D4H_InIO.js";import{T as r}from"./TextInput-CRZDgAAp.js";import{c as rr}from"./createReactComponent-CKk3lApD.js";import{I as s}from"./IconSearch-BrVn1Pri.js";import{I as ar}from"./IconCurrencyDollar-E96oMeB2.js";import{I as lr}from"./IconUser-CxX_vdyQ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]],Ze=rr("outline","mail","Mail",sr),tr={title:"Components/TextInput",component:r,parameters:{layout:"centered",docs:{page:()=>er(()=>import("./TextInput-DsAm233J.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url)}},tags:[],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]}}},n={args:{label:"Name",placeholder:"Enter your name"}},i={args:{label:"Email",placeholder:"Enter your email",helpText:"We will never share your email with anyone else."}},p={args:{label:"Password",placeholder:"Enter your password",errorMessage:"Password must be at least 8 characters long",type:"password"}},c={args:{label:"Email",placeholder:"Enter your email",helpText:"We will never share your email with anyone else.",errorMessage:"Please enter a valid email address"}},u={args:{label:"Username",placeholder:"Enter your username",required:!0}},d={args:{label:"Phone Number",placeholder:"Enter your phone number",optional:!0}},m={args:{label:"Disabled Input",placeholder:"You cannot edit this field",disabled:!0}},x={args:{label:"Read-only Input",value:"This is read-only text",readOnly:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"Email",placeholder:"Enter your email address",prefix:e.jsx(Ze,{size:18})}),e.jsx(r,{label:"Search",placeholder:"Search for something",prefix:e.jsx(s,{size:18})}),e.jsx(r,{label:"Amount",placeholder:"0.00",prefix:"$"})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"USD Amount",placeholder:"0.00",prefix:"$"}),e.jsx(r,{label:"Euro Amount",placeholder:"0.00",prefix:"€"}),e.jsx(r,{label:"British Pound",placeholder:"0.00",prefix:"£"}),e.jsx(r,{label:"Egyptian Pound",placeholder:"0.00",prefix:"EGP"}),e.jsx(r,{label:"Japanese Yen",placeholder:"0.00",prefix:"¥"}),e.jsx(r,{label:"Custom Currency",placeholder:"0.00",prefix:"CUSTOM"})]})},g={render:()=>{const[l,t]=F.useState("$");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"prefix-selector",style:{marginRight:"8px"},children:"Choose prefix:"}),e.jsxs("select",{id:"prefix-selector",value:l,onChange:a=>t(a.target.value),children:[e.jsx("option",{value:"$",children:"$ (Dollar)"}),e.jsx("option",{value:"€",children:"€ (Euro)"}),e.jsx("option",{value:"£",children:"£ (Pound)"}),e.jsx("option",{value:"¥",children:"¥ (Yen)"}),e.jsx("option",{value:"EGP",children:"EGP (Egyptian Pound)"}),e.jsx("option",{value:"USD",children:"USD (US Dollar)"}),e.jsx("option",{value:"CUSTOM",children:"CUSTOM"})]})]}),e.jsx(r,{label:"Amount with Dynamic Prefix",placeholder:"0.00",prefix:l})]})}},b={args:{label:"Amount",placeholder:"Enter amount",suffix:e.jsx(ar,{size:18})}},S={args:{label:"Email",placeholder:"username",prefix:e.jsx(Ze,{size:18}),suffix:e.jsx("span",{children:"@example.com"})}},y={args:{label:"Clearable Input",placeholder:"Type something to show clear button",defaultValue:"Clear me",clearable:!0}},v={args:{label:"Password",placeholder:"Enter your password",type:"password"}},E={args:{label:"Username",placeholder:"Enter your username",prefix:e.jsx(lr,{size:18}),clearable:!0,defaultValue:"@username"}},T={args:{label:"Search",placeholder:"Type and press Enter to search",prefix:e.jsx(s,{size:18}),isSearchInput:!0,onEnterPress:(l,t)=>{alert(`Searching for: "${t}"`)}}},z={render:()=>{const[l,t]=F.useState({firstName:"",lastName:"",email:"",phone:""}),a=N=>U=>{t(M=>({...M,[N]:U.target.value}))},o=N=>(U,M)=>{console.log(`Enter pressed in ${N}: "${M}"`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx("h3",{children:"Form Navigation Demo"}),e.jsx("p",{children:"Press Enter to move to next field automatically"}),e.jsx(r,{label:"First Name",placeholder:"Enter first name",value:l.firstName,onChange:a("firstName"),onEnterPress:o("firstName"),autoFocusNext:!0}),e.jsx(r,{label:"Last Name",placeholder:"Enter last name",value:l.lastName,onChange:a("lastName"),onEnterPress:o("lastName"),autoFocusNext:!0}),e.jsx(r,{label:"Email",placeholder:"Enter email",type:"email",value:l.email,onChange:a("email"),onEnterPress:o("email"),autoFocusNext:!0}),e.jsx(r,{label:"Phone",placeholder:"Enter phone number",type:"tel",value:l.phone,onChange:a("phone"),onEnterPress:o("phone"),autoFocusNext:!0}),e.jsx("button",{type:"submit",children:"Submit"})]})}},j={render:()=>{const[l,t]=F.useState("");return e.jsx("form",{onSubmit:a=>{a.preventDefault(),alert("Form submitted!")},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx("h3",{children:"Prevent Form Submit Demo"}),e.jsx("p",{children:"Enter key will NOT submit the form"}),e.jsx(r,{label:"Input with prevented submit",placeholder:"Press Enter (won't submit form)",value:l,onChange:a=>t(a.target.value),onEnterPress:(a,o)=>{alert(`Enter pressed with value: "${o}"`)},preventFormSubmit:!0}),e.jsx("button",{type:"submit",children:"Submit Form"})]})})}},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"350px"},children:[e.jsx(r,{label:"XLarge (56px)",placeholder:"XLarge size input",size:"xlarge",helpText:"Uses body-large-default font size with 24px icons"}),e.jsx(r,{label:"Large (48px)",placeholder:"Large size input",size:"large",helpText:"Uses body-md-default font size with 20px icons"}),e.jsx(r,{label:"Medium (40px)",placeholder:"Medium size input (default)",size:"medium",helpText:"Uses body-md-default font size with 16px icons"}),e.jsx(r,{label:"Small (32px)",placeholder:"Small size input",size:"small",helpText:"Uses body-sm-default font size with 16px icons"}),e.jsx(r,{label:"XSmall (28px)",placeholder:"XSmall size input",size:"xsmall",helpText:"Uses caption-lg-default font size with 16px icons"})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(r,{label:"XLarge Search",placeholder:"Search...",size:"xlarge",prefix:e.jsx(s,{size:24}),errorMessage:"24px icons in XLarge size"}),e.jsx(r,{label:"Large Search",placeholder:"Search...",size:"large",prefix:e.jsx(s,{size:20}),errorMessage:"20px icons in Large size"}),e.jsx(r,{label:"Medium Search",placeholder:"Search...",size:"medium",prefix:e.jsx(s,{size:16}),errorMessage:"16px icons in Medium size"}),e.jsx(r,{label:"Small Search",placeholder:"Search...",size:"small",prefix:e.jsx(s,{size:16}),errorMessage:"16px icons in Small size"}),e.jsx(r,{label:"XSmall Search",placeholder:"Search...",size:"xsmall",prefix:e.jsx(s,{size:16}),errorMessage:"16px icons in XSmall size"})]})},w={args:{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0},parameters:{layout:"padded"}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"Default",placeholder:"Regular state"}),e.jsx(r,{label:"Hover",placeholder:"Hover over me",className:"hover"}),e.jsx(r,{label:"Focus",placeholder:"Click to focus",autoFocus:!0}),e.jsx(r,{label:"Disabled",placeholder:"Cannot be edited",disabled:!0}),e.jsx(r,{label:"Read-only",value:"This is read-only",readOnly:!0}),e.jsx(r,{label:"Error",placeholder:"With error message",errorMessage:"Something went wrong"})]})},D={render:()=>e.jsx("div",{dir:"rtl",style:{width:"300px"},children:e.jsx(r,{label:"البحث",placeholder:"ابحث هنا...",prefix:e.jsx(s,{size:18}),clearable:!0})})};var W,L,_;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...(_=(L=n.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,R,A;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helpText: "We will never share your email with anyone else."
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var $,X,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    errorMessage: 'Password must be at least 8 characters long',
    type: 'password'
  }
}`,...(V=(X=p.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var H,k,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helpText: 'We will never share your email with anyone else.',
    errorMessage: 'Please enter a valid email address'
  }
}`,...(G=(k=c.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var Y,q,B;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    required: true
  }
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    optional: true
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this field',
    disabled: true
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,le,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Input',
    value: 'This is read-only text',
    readOnly: true
  }
}`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var te,oe,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextInput label="Email" placeholder="Enter your email address" prefix={<IconMail size={18} />} />
      <TextInput label="Search" placeholder="Search for something" prefix={<IconSearch size={18} />} />
      <TextInput label="Amount" placeholder="0.00" prefix="$" />
    </div>
}`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,pe,ce;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextInput label="USD Amount" placeholder="0.00" prefix="$" />
      <TextInput label="Euro Amount" placeholder="0.00" prefix="€" />
      <TextInput label="British Pound" placeholder="0.00" prefix="£" />
      <TextInput label="Egyptian Pound" placeholder="0.00" prefix="EGP" />
      <TextInput label="Japanese Yen" placeholder="0.00" prefix="¥" />
      <TextInput label="Custom Currency" placeholder="0.00" prefix="CUSTOM" />
    </div>
}`,...(ce=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,de,me;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [prefix, setPrefix] = useState('$');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <div>
          <label htmlFor="prefix-selector" style={{
          marginRight: '8px'
        }}>Choose prefix:</label>
          <select id="prefix-selector" value={prefix} onChange={e => setPrefix(e.target.value)}>
            <option value="$">$ (Dollar)</option>
            <option value="€">€ (Euro)</option>
            <option value="£">£ (Pound)</option>
            <option value="¥">¥ (Yen)</option>
            <option value="EGP">EGP (Egyptian Pound)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="CUSTOM">CUSTOM</option>
          </select>
        </div>
        
        <TextInput label="Amount with Dynamic Prefix" placeholder="0.00" prefix={prefix} />
      </div>;
  }
}`,...(me=(de=g.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var xe,he,fe;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
    suffix: <IconCurrencyDollar size={18} />
  }
}`,...(fe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,be,Se;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'username',
    prefix: <IconMail size={18} />,
    suffix: <span>@example.com</span>
  }
}`,...(Se=(be=S.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ye,ve,Ee;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Clearable Input',
    placeholder: 'Type something to show clear button',
    defaultValue: 'Clear me',
    clearable: true
  }
}`,...(Ee=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var Te,ze,je;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
}`,...(je=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var Pe,Ie,we;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    prefix: <IconUser size={18} />,
    clearable: true,
    defaultValue: '@username'
  }
}`,...(we=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ce,De,Ne;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Type and press Enter to search',
    prefix: <IconSearch size={18} />,
    isSearchInput: true,
    onEnterPress: (_, value) => {
      alert(\`Searching for: "\${value}"\`);
    }
  }
}`,...(Ne=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Me,Fe,Ue;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    const handleEnterPress = (field: string) => (_: React.KeyboardEvent<HTMLInputElement>, value: string) => {
      console.log(\`Enter pressed in \${field}: "\${value}"\`);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <h3>Form Navigation Demo</h3>
        <p>Press Enter to move to next field automatically</p>
        
        <TextInput label="First Name" placeholder="Enter first name" value={values.firstName} onChange={handleChange('firstName')} onEnterPress={handleEnterPress('firstName')} autoFocusNext={true} />
        
        <TextInput label="Last Name" placeholder="Enter last name" value={values.lastName} onChange={handleChange('lastName')} onEnterPress={handleEnterPress('lastName')} autoFocusNext={true} />
        
        <TextInput label="Email" placeholder="Enter email" type="email" value={values.email} onChange={handleChange('email')} onEnterPress={handleEnterPress('email')} autoFocusNext={true} />
        
        <TextInput label="Phone" placeholder="Enter phone number" type="tel" value={values.phone} onChange={handleChange('phone')} onEnterPress={handleEnterPress('phone')} autoFocusNext={true} />
        
        <button type="submit">Submit</button>
      </div>;
  }
}`,...(Ue=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Ue.source}}};var We,Le,_e;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <form onSubmit={e => {
      e.preventDefault();
      alert('Form submitted!');
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px'
      }}>
          <h3>Prevent Form Submit Demo</h3>
          <p>Enter key will NOT submit the form</p>
          
          <TextInput label="Input with prevented submit" placeholder="Press Enter (won't submit form)" value={value} onChange={e => setValue(e.target.value)} onEnterPress={(_, value) => {
          alert(\`Enter pressed with value: "\${value}"\`);
        }} preventFormSubmit={true} />
          
          <button type="submit">Submit Form</button>
        </div>
      </form>;
  }
}`,...(_e=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var Oe,Re,Ae;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '350px'
  }}>
      <TextInput label="XLarge (56px)" placeholder="XLarge size input" size="xlarge" helpText="Uses body-large-default font size with 24px icons" />
      <TextInput label="Large (48px)" placeholder="Large size input" size="large" helpText="Uses body-md-default font size with 20px icons" />
      <TextInput label="Medium (40px)" placeholder="Medium size input (default)" size="medium" helpText="Uses body-md-default font size with 16px icons" />
      <TextInput label="Small (32px)" placeholder="Small size input" size="small" helpText="Uses body-sm-default font size with 16px icons" />
      <TextInput label="XSmall (28px)" placeholder="XSmall size input" size="xsmall" helpText="Uses caption-lg-default font size with 16px icons" />
    </div>
}`,...(Ae=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var $e,Xe,Ve;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>
      <TextInput label="XLarge Search" placeholder="Search..." size="xlarge" prefix={<IconSearch size={24} />} errorMessage="24px icons in XLarge size" />
      <TextInput label="Large Search" placeholder="Search..." size="large" prefix={<IconSearch size={20} />} errorMessage="20px icons in Large size" />
      <TextInput label="Medium Search" placeholder="Search..." size="medium" prefix={<IconSearch size={16} />} errorMessage="16px icons in Medium size" />
      <TextInput label="Small Search" placeholder="Search..." size="small" prefix={<IconSearch size={16} />} errorMessage="16px icons in Small size" />
      <TextInput label="XSmall Search" placeholder="Search..." size="xsmall" prefix={<IconSearch size={16} />} errorMessage="16px icons in XSmall size" />
    </div>
}`,...(Ve=(Xe=I.parameters)==null?void 0:Xe.docs)==null?void 0:Ve.source}}};var He,ke,Ge;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(Ge=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var Ye,qe,Be;C.parameters={...C.parameters,docs:{...(Ye=C.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextInput label="Default" placeholder="Regular state" />
      <TextInput label="Hover" placeholder="Hover over me" className="hover" />
      <TextInput label="Focus" placeholder="Click to focus" autoFocus />
      <TextInput label="Disabled" placeholder="Cannot be edited" disabled />
      <TextInput label="Read-only" value="This is read-only" readOnly />
      <TextInput label="Error" placeholder="With error message" errorMessage="Something went wrong" />
    </div>
}`,...(Be=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:Be.source}}};var Je,Ke,Qe;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <div dir="rtl" style={{
    width: '300px'
  }}>
      <TextInput label="البحث" placeholder="ابحث هنا..." prefix={<IconSearch size={18} />} clearable />
    </div>
}`,...(Qe=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};const or=["Default","WithHelpText","WithError","WithErrorAndHelpText","Required","Optional","Disabled","ReadOnly","PrefixExamples","CurrencyPrefixes","DynamicTextPrefix","WithSuffix","WithPrefixAndSuffix","Clearable","Password","WithPrefixAndClearable","SearchInput","FormNavigation","PreventFormSubmit","Sizes","SizesWithPrefix","FullWidth","AllStates","RTLExample"],hr=Object.freeze(Object.defineProperty({__proto__:null,AllStates:C,Clearable:y,CurrencyPrefixes:f,Default:n,Disabled:m,DynamicTextPrefix:g,FormNavigation:z,FullWidth:w,Optional:d,Password:v,PrefixExamples:h,PreventFormSubmit:j,RTLExample:D,ReadOnly:x,Required:u,SearchInput:T,Sizes:P,SizesWithPrefix:I,WithError:p,WithErrorAndHelpText:c,WithHelpText:i,WithPrefixAndClearable:E,WithPrefixAndSuffix:S,WithSuffix:b,__namedExportsOrder:or,default:tr},Symbol.toStringTag,{value:"Module"}));export{y as C,n as D,w as F,d as O,h as P,u as R,P as S,hr as T,i as W,p as a,m as b,x as c,I as d,b as e,S as f,v as g,D as h};
