const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Listbox-DC55ewj_.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Popover-B4T-UWsl.js","./index-Dcu5jVSv.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-N3eucVg6.js","./index-BTe66ZhM.js","./index-DavpLpmr.js","./clsx-B-dksMZM.js","./Drawer-CJqTAku3.js","./Button-CoP_mZBT.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./Popover-BL_lnscC.css","./Checkbox-DjaPL8aZ.js","./index-DXU_LAI1.js","./IconCheck-DgTGwIHb.js","./Checkbox-DqeUufLc.css","./Separator-DDuP3uRh.js","./Separator-Tp2ElSza.css","./IconStar-D1r8GqcS.js","./IconChevronDown-D1vfiZl2.js"])))=>i.map(i=>d[i]);
import{_ as ae}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as g}from"./index-D4H_InIO.js";import{C as a}from"./Checkbox-DjaPL8aZ.js";import{S as m}from"./Separator-DDuP3uRh.js";import{L as n,b as se,c as ie,d as de}from"./Popover-B4T-UWsl.js";import{I as S}from"./IconCheck-DgTGwIHb.js";import{c as pe}from"./createReactComponent-CKk3lApD.js";import{I as y}from"./IconStar-D1r8GqcS.js";import{I as ce}from"./IconChevronDown-D1vfiZl2.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]],C=pe("outline","tag","Tag",ue),be={title:"Components/Listbox",component:n,parameters:{layout:"centered",docs:{page:()=>ae(()=>import("./Listbox-DC55ewj_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]),import.meta.url)}},tags:[],argTypes:{options:{control:"object"},selectedValue:{control:"text"},maxVisibleOptions:{control:"number"},multiple:{control:"boolean"},inPopover:{control:"boolean"},itemPaddingVertical:{control:"number",description:"Custom vertical padding (top and bottom) for listbox items in pixels"},itemPaddingHorizontal:{control:"number",description:"Custom horizontal padding (left and right) for listbox items in pixels"}}},s={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"}],selectedValue:"option1",inPopover:!1},decorators:[t=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})]},i={args:{options:[{label:"Selected Option",value:"selected",prefix:e.jsx(S,{size:16})},{label:"Tagged Items",value:"tagged",prefix:e.jsx(C,{size:16}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"12"})},{label:"Favorites",value:"favorites",prefix:e.jsx(y,{size:16}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"5"})}],selectedValue:"selected",inPopover:!1},decorators:[t=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})]},d={args:{options:[{label:"Product Settings",value:"product",helpText:"Manage product inventory and variations"},{label:"User Accounts",value:"users",helpText:"Modify user permissions and access"},{label:"Payment Options",value:"payment",helpText:"Configure available payment methods"}],selectedValue:"product",inPopover:!1},decorators:[t=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})]},p={args:{options:[],inPopover:!1},render:()=>{const[t,o]=g.useState(["option1","option3"]);return e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Option 1",value:"option1",prefix:e.jsx(a,{checked:t.includes("option1"),onCheckedChange:l=>{o(l?[...t,"option1"]:t.filter(r=>r!=="option1"))},hideLabel:!0})},{label:"Option 2",value:"option2",prefix:e.jsx(a,{checked:t.includes("option2"),onCheckedChange:l=>{o(l?[...t,"option2"]:t.filter(r=>r!=="option2"))},hideLabel:!0})},{label:"Option 3",value:"option3",prefix:e.jsx(a,{checked:t.includes("option3"),onCheckedChange:l=>{o(l?[...t,"option3"]:t.filter(r=>r!=="option3"))},hideLabel:!0})},{label:"Option 4",value:"option4",prefix:e.jsx(a,{checked:t.includes("option4"),onCheckedChange:l=>{o(l?[...t,"option4"]:t.filter(r=>r!=="option4"))},hideLabel:!0})}],selectedValue:t,multiple:!0,onMultiSelect:l=>o(l),inPopover:!1})})}},c={args:{options:[],inPopover:!1},render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"Compact Padding (8px/12px)"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Compact Item 1",value:"1"},{label:"Compact Item 2",value:"2"},{label:"Compact Item 3",value:"3"}],itemPaddingVertical:8,itemPaddingHorizontal:12,selectedValue:"1",inPopover:!1})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"Spacious Padding (20px/24px)"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Spacious Item 1",value:"1",prefix:e.jsx(y,{size:16})},{label:"Spacious Item 2",value:"2",prefix:e.jsx(C,{size:16})},{label:"Spacious Item 3",value:"3",prefix:e.jsx(S,{size:16})}],itemPaddingVertical:20,itemPaddingHorizontal:24,selectedValue:"2",inPopover:!1})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"Custom Shape (4px/32px)"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Narrow Height",value:"1",prefix:e.jsx(y,{size:16})},{label:"Wide Sides",value:"2",prefix:e.jsx(C,{size:16})},{label:"Custom Shape",value:"3",prefix:e.jsx(S,{size:16})}],itemPaddingVertical:4,itemPaddingHorizontal:32,selectedValue:"3",inPopover:!1})})]})]})},u={args:{options:[{label:"الخيار الأول",value:"option1"},{label:"الخيار الثاني",value:"option2"},{label:"الخيار الثالث",value:"option3",helpText:"نص توضيحي للمساعدة"}],selectedValue:"option1",inPopover:!1},parameters:{globals:{direction:"rtl"}},decorators:[t=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})]},b={args:{options:[{label:"العناصر المحددة",value:"selected",prefix:e.jsx(S,{size:16}),helpText:"العناصر التي تم اختيارها"},{label:"العناصر المميزة",value:"tagged",prefix:e.jsx(C,{size:16}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"١٢"}),helpText:"العناصر التي تم تمييزها"},{label:"المفضلة",value:"favorites",prefix:e.jsx(y,{size:16}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"٥"})}],selectedValue:"selected",inPopover:!1},parameters:{globals:{direction:"rtl"}},decorators:[t=>e.jsx("div",{style:{width:"280px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})],render:()=>{const[t,o]=g.useState(["selected"]);return e.jsx("div",{style:{width:"280px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"العناصر المحددة",value:"selected",prefix:e.jsx(a,{checked:t.includes("selected"),onCheckedChange:l=>{o(l?[...t,"selected"]:t.filter(r=>r!=="selected"))},hideLabel:!0}),helpText:"العناصر التي تم اختيارها"},{label:"العناصر المميزة",value:"tagged",prefix:e.jsx(a,{checked:t.includes("tagged"),onCheckedChange:l=>{o(l?[...t,"tagged"]:t.filter(r=>r!=="tagged"))},hideLabel:!0}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"١٢"}),helpText:"العناصر التي تم تمييزها"},{label:"المفضلة",value:"favorites",prefix:e.jsx(a,{checked:t.includes("favorites"),onCheckedChange:l=>{o(l?[...t,"favorites"]:t.filter(r=>r!=="favorites"))},hideLabel:!0}),suffix:e.jsx("span",{style:{fontSize:"12px",color:"var(--t-color-text-subtle)"},children:"٥"})}],selectedValue:t,multiple:!0,onMultiSelect:l=>o(l),inPopover:!1})})}},v={args:{options:[{label:"Available Option",value:"available"},{label:"Disabled Option",value:"disabled",disabled:!0},{label:"Another Available",value:"another"},{label:"Currently Unavailable",value:"unavailable",disabled:!0}],selectedValue:"available",inPopover:!1},decorators:[t=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(t,{})})]},x={args:{options:[],inPopover:!1},render:()=>e.jsx("div",{style:{width:"240px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Recent",value:"recent"},{label:"",value:"separator1",disabled:!0,customContent:e.jsx(m,{decorative:!0,spacing:"none"})},{label:"Yesterday",value:"yesterday"},{label:"Last Week",value:"lastWeek"},{label:"",value:"separator2",disabled:!0,customContent:e.jsx(m,{decorative:!0,spacing:"none"})},{label:"Last Month",value:"lastMonth"},{label:"Older",value:"older"}],selectedValue:"yesterday",inPopover:!1})})},h={args:{options:[],inPopover:!1},render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"No Spacing"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Item 1",value:"1"},{label:"",value:"sep1",disabled:!0,customContent:e.jsx(m,{decorative:!0,spacing:"none"})},{label:"Item 2",value:"2"}],selectedValue:"1",inPopover:!1})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"Compact Spacing"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Item 1",value:"1"},{label:"",value:"sep1",disabled:!0,customContent:e.jsx(m,{decorative:!0,spacing:"compact"})},{label:"Item 2",value:"2"}],selectedValue:"1",inPopover:!1})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"14px",fontWeight:600},children:"Custom Spacing (8px)"}),e.jsx("div",{style:{width:"200px",border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px"},children:e.jsx(n,{options:[{label:"Item 1",value:"1"},{label:"",value:"sep1",disabled:!0,customContent:e.jsx(m,{decorative:!0,spacing:8})},{label:"Item 2",value:"2"}],selectedValue:"1",inPopover:!1})})]})]})},f={args:{options:[],inPopover:!0},render:()=>{var z;const[t,o]=g.useState("filter1"),[l,r]=g.useState(!1),P=[{label:"Filter by Date",value:"filter1"},{label:"Filter by Status",value:"filter2"},{label:"Filter by Category",value:"filter3"},{label:"Filter by Priority",value:"filter4"},{label:"Filter by Assignee",value:"filter5"}],ne=((z=P.find(j=>j.value===t))==null?void 0:z.label)||"Select...";return e.jsxs(se,{open:l,onOpenChange:r,children:[e.jsx(ie,{asChild:!0,children:e.jsxs("button",{style:{display:"inline-flex",alignItems:"center",padding:"8px 16px",backgroundColor:"var(--t-color-surface-secondary)",color:"var(--t-color-text-primary)",border:"1px solid var(--t-color-border-default)",borderRadius:"var(--t-border-radius-200)",cursor:"pointer",gap:"8px",fontSize:"var(--t-font-size-body-md)"},children:[ne,e.jsx(ce,{size:16})]})}),e.jsx(de,{children:e.jsx(n,{options:P,selectedValue:t,onSelect:j=>{o(j.toString()),r(!1)},inPopover:!0})})]})}};var k,I,O;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }],
    selectedValue: 'option1',
    inPopover: false
  },
  decorators: [Story => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,L,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Selected Option',
      value: 'selected',
      prefix: <IconCheck size={16} />
    }, {
      label: 'Tagged Items',
      value: 'tagged',
      prefix: <IconTag size={16} />,
      suffix: <span style={{
        fontSize: '12px',
        color: 'var(--t-color-text-subtle)'
      }}>12</span>
    }, {
      label: 'Favorites',
      value: 'favorites',
      prefix: <IconStar size={16} />,
      suffix: <span style={{
        fontSize: '12px',
        color: 'var(--t-color-text-subtle)'
      }}>5</span>
    }],
    selectedValue: 'selected',
    inPopover: false
  },
  decorators: [Story => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(V=(L=i.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var w,T,W;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Product Settings',
      value: 'product',
      helpText: 'Manage product inventory and variations'
    }, {
      label: 'User Accounts',
      value: 'users',
      helpText: 'Modify user permissions and access'
    }, {
      label: 'Payment Options',
      value: 'payment',
      helpText: 'Configure available payment methods'
    }],
    selectedValue: 'product',
    inPopover: false
  },
  decorators: [Story => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var M,A,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: [],
    inPopover: false
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>(['option1', 'option3']);
    return <div style={{
      width: '240px',
      border: '1px solid var(--t-color-border-subtle)',
      borderRadius: '8px'
    }}>
        <Listbox options={[{
        label: 'Option 1',
        value: 'option1',
        prefix: <Checkbox checked={selected.includes('option1')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'option1']);
          } else {
            setSelected(selected.filter(v => v !== 'option1'));
          }
        }} hideLabel={true} />
      }, {
        label: 'Option 2',
        value: 'option2',
        prefix: <Checkbox checked={selected.includes('option2')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'option2']);
          } else {
            setSelected(selected.filter(v => v !== 'option2'));
          }
        }} hideLabel={true} />
      }, {
        label: 'Option 3',
        value: 'option3',
        prefix: <Checkbox checked={selected.includes('option3')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'option3']);
          } else {
            setSelected(selected.filter(v => v !== 'option3'));
          }
        }} hideLabel={true} />
      }, {
        label: 'Option 4',
        value: 'option4',
        prefix: <Checkbox checked={selected.includes('option4')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'option4']);
          } else {
            setSelected(selected.filter(v => v !== 'option4'));
          }
        }} hideLabel={true} />
      }]} selectedValue={selected} multiple={true} onMultiSelect={values => setSelected(values as string[])} inPopover={false} />
      </div>;
  }
}`,...(_=(A=p.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var F,H,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: [],
    inPopover: false
  },
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Compact Padding (8px/12px)</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Compact Item 1',
          value: '1'
        }, {
          label: 'Compact Item 2',
          value: '2'
        }, {
          label: 'Compact Item 3',
          value: '3'
        }]} itemPaddingVertical={8} itemPaddingHorizontal={12} selectedValue="1" inPopover={false} />
        </div>
      </div>
      
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Spacious Padding (20px/24px)</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Spacious Item 1',
          value: '1',
          prefix: <IconStar size={16} />
        }, {
          label: 'Spacious Item 2',
          value: '2',
          prefix: <IconTag size={16} />
        }, {
          label: 'Spacious Item 3',
          value: '3',
          prefix: <IconCheck size={16} />
        }]} itemPaddingVertical={20} itemPaddingHorizontal={24} selectedValue="2" inPopover={false} />
        </div>
      </div>
      
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Custom Shape (4px/32px)</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Narrow Height',
          value: '1',
          prefix: <IconStar size={16} />
        }, {
          label: 'Wide Sides',
          value: '2',
          prefix: <IconTag size={16} />
        }, {
          label: 'Custom Shape',
          value: '3',
          prefix: <IconCheck size={16} />
        }]} itemPaddingVertical={4} itemPaddingHorizontal={32} selectedValue="3" inPopover={false} />
        </div>
      </div>
    </div>
}`,...(D=(H=c.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var B,E,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'الخيار الأول',
      value: 'option1'
    }, {
      label: 'الخيار الثاني',
      value: 'option2'
    }, {
      label: 'الخيار الثالث',
      value: 'option3',
      helpText: 'نص توضيحي للمساعدة'
    }],
    selectedValue: 'option1',
    inPopover: false
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  },
  decorators: [Story => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var U,Y,q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'العناصر المحددة',
      value: 'selected',
      prefix: <IconCheck size={16} />,
      helpText: 'العناصر التي تم اختيارها'
    }, {
      label: 'العناصر المميزة',
      value: 'tagged',
      prefix: <IconTag size={16} />,
      suffix: <span style={{
        fontSize: '12px',
        color: 'var(--t-color-text-subtle)'
      }}>١٢</span>,
      helpText: 'العناصر التي تم تمييزها'
    }, {
      label: 'المفضلة',
      value: 'favorites',
      prefix: <IconStar size={16} />,
      suffix: <span style={{
        fontSize: '12px',
        color: 'var(--t-color-text-subtle)'
      }}>٥</span>
    }],
    selectedValue: 'selected',
    inPopover: false
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  },
  decorators: [Story => <div style={{
    width: '280px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>],
  render: () => {
    const [selected, setSelected] = useState<string[]>(['selected']);
    return <div style={{
      width: '280px',
      border: '1px solid var(--t-color-border-subtle)',
      borderRadius: '8px'
    }}>
        <Listbox options={[{
        label: 'العناصر المحددة',
        value: 'selected',
        prefix: <Checkbox checked={selected.includes('selected')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'selected']);
          } else {
            setSelected(selected.filter(v => v !== 'selected'));
          }
        }} hideLabel={true} />,
        helpText: 'العناصر التي تم اختيارها'
      }, {
        label: 'العناصر المميزة',
        value: 'tagged',
        prefix: <Checkbox checked={selected.includes('tagged')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'tagged']);
          } else {
            setSelected(selected.filter(v => v !== 'tagged'));
          }
        }} hideLabel={true} />,
        suffix: <span style={{
          fontSize: '12px',
          color: 'var(--t-color-text-subtle)'
        }}>١٢</span>,
        helpText: 'العناصر التي تم تمييزها'
      }, {
        label: 'المفضلة',
        value: 'favorites',
        prefix: <Checkbox checked={selected.includes('favorites')} onCheckedChange={checked => {
          if (checked) {
            setSelected([...selected, 'favorites']);
          } else {
            setSelected(selected.filter(v => v !== 'favorites'));
          }
        }} hideLabel={true} />,
        suffix: <span style={{
          fontSize: '12px',
          color: 'var(--t-color-text-subtle)'
        }}>٥</span>
      }]} selectedValue={selected} multiple={true} onMultiSelect={values => setSelected(values as string[])} inPopover={false} />
      </div>;
  }
}`,...(q=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Available Option',
      value: 'available'
    }, {
      label: 'Disabled Option',
      value: 'disabled',
      disabled: true
    }, {
      label: 'Another Available',
      value: 'another'
    }, {
      label: 'Currently Unavailable',
      value: 'unavailable',
      disabled: true
    }],
    selectedValue: 'available',
    inPopover: false
  },
  decorators: [Story => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: [],
    inPopover: false
  },
  render: () => <div style={{
    width: '240px',
    border: '1px solid var(--t-color-border-subtle)',
    borderRadius: '8px'
  }}>
      <Listbox options={[{
      label: 'Recent',
      value: 'recent'
    }, {
      label: '',
      value: 'separator1',
      disabled: true,
      customContent: <Separator decorative={true} spacing="none" />
    }, {
      label: 'Yesterday',
      value: 'yesterday'
    }, {
      label: 'Last Week',
      value: 'lastWeek'
    }, {
      label: '',
      value: 'separator2',
      disabled: true,
      customContent: <Separator decorative={true} spacing="none" />
    }, {
      label: 'Last Month',
      value: 'lastMonth'
    }, {
      label: 'Older',
      value: 'older'
    }]} selectedValue="yesterday" inPopover={false} />
    </div>
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: [],
    inPopover: false
  },
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>No Spacing</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Item 1',
          value: '1'
        }, {
          label: '',
          value: 'sep1',
          disabled: true,
          customContent: <Separator decorative={true} spacing="none" />
        }, {
          label: 'Item 2',
          value: '2'
        }]} selectedValue="1" inPopover={false} />
        </div>
      </div>
      
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Compact Spacing</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Item 1',
          value: '1'
        }, {
          label: '',
          value: 'sep1',
          disabled: true,
          customContent: <Separator decorative={true} spacing="compact" />
        }, {
          label: 'Item 2',
          value: '2'
        }]} selectedValue="1" inPopover={false} />
        </div>
      </div>
      
      <div>
        <h4 style={{
        margin: '0 0 0.5rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Custom Spacing (8px)</h4>
        <div style={{
        width: '200px',
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px'
      }}>
          <Listbox options={[{
          label: 'Item 1',
          value: '1'
        }, {
          label: '',
          value: 'sep1',
          disabled: true,
          customContent: <Separator decorative={true} spacing={8} />
        }, {
          label: 'Item 2',
          value: '2'
        }]} selectedValue="1" inPopover={false} />
        </div>
      </div>
    </div>
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,le,re;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: [],
    inPopover: true
  },
  render: () => {
    const [selectedOption, setSelectedOption] = useState('filter1');
    const [open, setOpen] = useState(false);
    const options = [{
      label: 'Filter by Date',
      value: 'filter1'
    }, {
      label: 'Filter by Status',
      value: 'filter2'
    }, {
      label: 'Filter by Category',
      value: 'filter3'
    }, {
      label: 'Filter by Priority',
      value: 'filter4'
    }, {
      label: 'Filter by Assignee',
      value: 'filter5'
    }];
    const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || 'Select...';
    return <PopoverRoot open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {/* 
            We're using a simple HTML button element instead of the Button component 
            because Radix UI's asChild prop expects exactly one child with no children of its own.
            The Button component adds spans inside, which causes the error.
           */}
          <button style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 16px',
          backgroundColor: 'var(--t-color-surface-secondary)',
          color: 'var(--t-color-text-primary)',
          border: '1px solid var(--t-color-border-default)',
          borderRadius: 'var(--t-border-radius-200)',
          cursor: 'pointer',
          gap: '8px',
          fontSize: 'var(--t-font-size-body-md)'
        }}>
            {selectedLabel}
            <IconChevronDown size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Listbox options={options} selectedValue={selectedOption} onSelect={value => {
          setSelectedOption(value.toString());
          setOpen(false);
        }} inPopover={true} />
        </PopoverContent>
      </PopoverRoot>;
  }
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const ve=["Basic","WithIcons","WithHelpText","MultiSelect","WithCustomPadding","ArabicRTL","ArabicRTLWithPrefixes","WithDisabledOptions","WithDividers","SeparatorSpacingComparison","InPopover"],ze=Object.freeze(Object.defineProperty({__proto__:null,ArabicRTL:u,ArabicRTLWithPrefixes:b,Basic:s,InPopover:f,MultiSelect:p,SeparatorSpacingComparison:h,WithCustomPadding:c,WithDisabledOptions:v,WithDividers:x,WithHelpText:d,WithIcons:i,__namedExportsOrder:ve,default:be},Symbol.toStringTag,{value:"Module"}));export{u as A,s as B,f as I,ze as L,p as M,h as S,i as W,d as a,v as b,x as c,c as d};
