const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TextInput-C5wRZSTd.js","./jsx-runtime-Cf8x2fCZ.js","./index-yBjzXJbu.js","./index-DI2gBlDf.js","./index-BlmOqGMO.js","./index-BPXrzZIR.js","./iframe-BpZEF_5K.js","./index-DybOl1hA.js","./index-fNjTmf9T.js","./index-CXQShRbs.js","./index-DrFu-skq.js","./TextInput-BC0Qh9vv.js","./index-DW48STyt.js","./index-CfQheYXo.js","./index-pvuVTQ3b.js","./clsx-B-dksMZM.js","./createReactComponent-GuN14Mgc.js","./IconX-5Dn7YNlv.js","./TextInput-9V7gasd_.css","./IconSearch-vd-jVdmq.js","./IconUser-C1LEUmMM.js"])))=>i.map(i=>d[i]);
import{_ as Er}from"./iframe-BpZEF_5K.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as jr}from"./index-BlmOqGMO.js";import{T as r}from"./TextInput-BC0Qh9vv.js";import{c as zr}from"./createReactComponent-GuN14Mgc.js";import{I as s}from"./IconSearch-vd-jVdmq.js";import{I as Mr}from"./IconUser-C1LEUmMM.js";/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pr=zr("outline","currency-dollar","IconCurrencyDollar",[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var a=zr("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);const Tr={title:"Components/TextInput",component:r,parameters:{layout:"centered",docs:{page:()=>Er(()=>import("./TextInput-C5wRZSTd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url)}},tags:[],argTypes:{size:{control:"select",options:["micro","medium","large"]}}},l={args:{label:"Name",placeholder:"Enter your name"}},o={args:{label:"Email",placeholder:"Enter your email",helpText:"We will never share your email with anyone else."}},i={args:{label:"Password",placeholder:"Enter your password",errorMessage:"Password must be at least 8 characters long",type:"password"}},t={args:{label:"Username",placeholder:"Enter your username",required:!0}},n={args:{label:"Phone Number",placeholder:"Enter your phone number",optional:!0}},c={args:{label:"Disabled Input",placeholder:"You cannot edit this field",disabled:!0}},p={args:{label:"Read-only Input",value:"This is read-only text",readOnly:!0}},d={args:{label:"Email",placeholder:"Enter your email address",prefix:e.jsx(a,{size:18})}},u={args:{label:"Search",placeholder:"Search for something",prefix:e.jsx(s,{size:18})}},m={args:{label:"Amount",placeholder:"0.00",prefix:"$"}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"USD Amount",placeholder:"0.00",prefix:"$"}),e.jsx(r,{label:"Euro Amount",placeholder:"0.00",prefix:"€"}),e.jsx(r,{label:"British Pound",placeholder:"0.00",prefix:"£"}),e.jsx(r,{label:"Egyptian Pound",placeholder:"0.00",prefix:"EGP"}),e.jsx(r,{label:"Japanese Yen",placeholder:"0.00",prefix:"¥"}),e.jsx(r,{label:"Custom Currency",placeholder:"0.00",prefix:"CUSTOM"})]})},h={render:()=>{const[L,vr]=jr.useState("$");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"prefix-selector",style:{marginRight:"8px"},children:"Choose prefix:"}),e.jsxs("select",{id:"prefix-selector",value:L,onChange:Ir=>vr(Ir.target.value),children:[e.jsx("option",{value:"$",children:"$ (Dollar)"}),e.jsx("option",{value:"€",children:"€ (Euro)"}),e.jsx("option",{value:"£",children:"£ (Pound)"}),e.jsx("option",{value:"¥",children:"¥ (Yen)"}),e.jsx("option",{value:"EGP",children:"EGP (Egyptian Pound)"}),e.jsx("option",{value:"USD",children:"USD (US Dollar)"}),e.jsx("option",{value:"CUSTOM",children:"CUSTOM"})]})]}),e.jsx(r,{label:"Amount with Dynamic Prefix",placeholder:"0.00",prefix:L})]})}},g={args:{label:"Amount",placeholder:"Enter amount",suffix:e.jsx(Pr,{size:18})}},f={args:{label:"Email",placeholder:"username",prefix:e.jsx(a,{size:18}),suffix:e.jsx("span",{children:"@example.com"})}},b={args:{label:"Clearable Input",placeholder:"Type something to show clear button",defaultValue:"Clear me",clearable:!0}},y={args:{label:"Password",placeholder:"Enter your password",type:"password"}},S={args:{label:"Username",placeholder:"Enter your username",prefix:e.jsx(Mr,{size:18}),clearable:!0,defaultValue:"@username"}},z={args:{label:"Micro Input",placeholder:"Micro size (20px)",size:"micro"}},v={args:{label:"Medium Input",placeholder:"Medium size (32px, default)",size:"medium"}},I={args:{label:"Large Input",placeholder:"Large size (40px)",size:"large"}},E={args:{label:"Micro Search",placeholder:"Search...",size:"micro",prefix:e.jsx(s,{size:14})}},j={args:{label:"Medium Search",placeholder:"Search...",size:"medium",prefix:e.jsx(s,{size:18})}},M={args:{label:"Large Search",placeholder:"Search...",size:"large",prefix:e.jsx(s,{size:22})}},P={args:{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0},parameters:{layout:"padded"}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"Default",placeholder:"Regular state"}),e.jsx(r,{label:"Hover",placeholder:"Hover over me",className:"hover"}),e.jsx(r,{label:"Focus",placeholder:"Click to focus",autoFocus:!0}),e.jsx(r,{label:"Disabled",placeholder:"Cannot be edited",disabled:!0}),e.jsx(r,{label:"Read-only",value:"This is read-only",readOnly:!0}),e.jsx(r,{label:"Error",placeholder:"With error message",errorMessage:"Something went wrong"})]})},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"Micro (20px)",placeholder:"Micro input",size:"micro"}),e.jsx(r,{label:"Medium (32px)",placeholder:"Medium input",size:"medium"}),e.jsx(r,{label:"Large (40px)",placeholder:"Large input",size:"large"})]})},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{label:"Email (Micro)",placeholder:"email@example.com",size:"micro",prefix:e.jsx(a,{size:14})}),e.jsx(r,{label:"Email (Medium)",placeholder:"email@example.com",size:"medium",prefix:e.jsx(a,{size:18})}),e.jsx(r,{label:"Email (Large)",placeholder:"email@example.com",size:"large",prefix:e.jsx(a,{size:22})})]})},C={render:()=>e.jsx("div",{dir:"rtl",style:{width:"300px"},children:e.jsx(r,{label:"البحث",placeholder:"ابحث هنا...",prefix:e.jsx(s,{size:18}),clearable:!0})})},W={args:{label:"Email",placeholder:"Enter you@example.com",prefix:e.jsx(a,{size:18}),size:"medium"}},A={args:{label:"Search",placeholder:"Search for something",prefix:e.jsx(s,{size:18}),size:"medium"}},U={args:{label:"Amount",placeholder:"0.00",prefix:"$",size:"medium"}};var O,R,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,F,k;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helpText: "We will never share your email with anyone else."
  }
}`,...(k=(F=o.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var G,H,N;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    errorMessage: 'Password must be at least 8 characters long',
    type: 'password'
  }
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Y,V,q;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    required: true
  }
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,J,K;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    optional: true
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this field',
    disabled: true
  }
}`,...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Input',
    value: 'This is read-only text',
    readOnly: true
  }
}`,...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,le,oe;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email address',
    prefix: <IconMail size={18} />
  }
}`,...(oe=(le=d.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,te,ne;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search for something',
    prefix: <IconSearch size={18} />
  }
}`,...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ce,pe,de;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    placeholder: '0.00',
    prefix: '$'
  }
}`,...(de=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,xe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var he,ge,fe;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,ye,Se;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
    suffix: <IconCurrencyDollar size={18} />
  }
}`,...(Se=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var ze,ve,Ie;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'username',
    prefix: <IconMail size={18} />,
    suffix: <span>@example.com</span>
  }
}`,...(Ie=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var Ee,je,Me;b.parameters={...b.parameters,docs:{...(Ee=b.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: 'Clearable Input',
    placeholder: 'Type something to show clear button',
    defaultValue: 'Clear me',
    clearable: true
  }
}`,...(Me=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var Pe,Te,we;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
}`,...(we=(Te=y.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var De,Ce,We;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    prefix: <IconUser size={18} />,
    clearable: true,
    defaultValue: '@username'
  }
}`,...(We=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};var Ae,Ue,Le;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    label: 'Micro Input',
    placeholder: 'Micro size (20px)',
    size: 'micro'
  }
}`,...(Le=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Le.source}}};var Oe,Re,_e;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size (32px, default)',
    size: 'medium'
  }
}`,...(_e=(Re=v.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var $e,Fe,ke;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    placeholder: 'Large size (40px)',
    size: 'large'
  }
}`,...(ke=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var Ge,He,Ne;E.parameters={...E.parameters,docs:{...(Ge=E.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: 'Micro Search',
    placeholder: 'Search...',
    size: 'micro',
    prefix: <IconSearch size={14} />
  }
}`,...(Ne=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Ye,Ve,qe;j.parameters={...j.parameters,docs:{...(Ye=j.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    label: 'Medium Search',
    placeholder: 'Search...',
    size: 'medium',
    prefix: <IconSearch size={18} />
  }
}`,...(qe=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var Be,Je,Ke;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: 'Large Search',
    placeholder: 'Search...',
    size: 'large',
    prefix: <IconSearch size={22} />
  }
}`,...(Ke=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ze;P.parameters={...P.parameters,docs:{...(Qe=P.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(Ze=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var er,rr,ar;T.parameters={...T.parameters,docs:{...(er=T.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(ar=(rr=T.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var sr,lr,or;w.parameters={...w.parameters,docs:{...(sr=w.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextInput label="Micro (20px)" placeholder="Micro input" size="micro" />
      <TextInput label="Medium (32px)" placeholder="Medium input" size="medium" />
      <TextInput label="Large (40px)" placeholder="Large input" size="large" />
    </div>
}`,...(or=(lr=w.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,tr,nr;D.parameters={...D.parameters,docs:{...(ir=D.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextInput label="Email (Micro)" placeholder="email@example.com" size="micro" prefix={<IconMail size={14} />} />
      <TextInput label="Email (Medium)" placeholder="email@example.com" size="medium" prefix={<IconMail size={18} />} />
      <TextInput label="Email (Large)" placeholder="email@example.com" size="large" prefix={<IconMail size={22} />} />
    </div>
}`,...(nr=(tr=D.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var cr,pr,dr;C.parameters={...C.parameters,docs:{...(cr=C.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  render: () => <div dir="rtl" style={{
    width: '300px'
  }}>
      <TextInput label="البحث" placeholder="ابحث هنا..." prefix={<IconSearch size={18} />} clearable />
    </div>
}`,...(dr=(pr=C.parameters)==null?void 0:pr.docs)==null?void 0:dr.source}}};var ur,mr,xr;W.parameters={...W.parameters,docs:{...(ur=W.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter you@example.com",
    prefix: <IconMail size={18} />,
    size: "medium"
  }
}`,...(xr=(mr=W.parameters)==null?void 0:mr.docs)==null?void 0:xr.source}}};var hr,gr,fr;A.parameters={...A.parameters,docs:{...(hr=A.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search for something",
    prefix: <IconSearch size={18} />,
    size: "medium"
  }
}`,...(fr=(gr=A.parameters)==null?void 0:gr.docs)==null?void 0:fr.source}}};var br,yr,Sr;U.parameters={...U.parameters,docs:{...(br=U.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    label: "Amount",
    placeholder: "0.00",
    prefix: "$",
    size: "medium"
  }
}`,...(Sr=(yr=U.parameters)==null?void 0:yr.docs)==null?void 0:Sr.source}}};const wr=["Default","WithHelpText","WithError","Required","Optional","Disabled","ReadOnly","EmailWithPrefix","SearchWithPrefix","TextPrefix","CurrencyPrefixes","DynamicTextPrefix","WithSuffix","WithPrefixAndSuffix","Clearable","Password","WithPrefixAndClearable","Micro","Medium","Large","MicroWithPrefix","MediumWithPrefix","LargeWithPrefix","FullWidth","AllStates","AllSizes","PrefixComparison","RTLExample","EmailInput","SearchInput","AmountInput"],Rr=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:w,AllStates:T,AmountInput:U,Clearable:b,CurrencyPrefixes:x,Default:l,Disabled:c,DynamicTextPrefix:h,EmailInput:W,EmailWithPrefix:d,FullWidth:P,Large:I,LargeWithPrefix:M,Medium:v,MediumWithPrefix:j,Micro:z,MicroWithPrefix:E,Optional:n,Password:y,PrefixComparison:D,RTLExample:C,ReadOnly:p,Required:t,SearchInput:A,SearchWithPrefix:u,TextPrefix:m,WithError:i,WithHelpText:o,WithPrefixAndClearable:S,WithPrefixAndSuffix:f,WithSuffix:g,__namedExportsOrder:wr,default:Tr},Symbol.toStringTag,{value:"Module"}));export{w as A,b as C,l as D,d as E,P as F,n as O,y as P,t as R,A as S,Rr as T,o as W,i as a,c as b,p as c,m as d,g as e,f,W as g,U as h,C as i};
