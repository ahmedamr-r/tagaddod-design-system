const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Pagination-CIrb1sE2.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Pagination-Dn8wtTIX.js","./clsx-B-dksMZM.js","./Button-CoP_mZBT.js","./createReactComponent-CKk3lApD.js","./Button-BkO63AX8.css","./Popover-B4T-UWsl.js","./index-Dcu5jVSv.js","./index-DW48STyt.js","./index-D7-T4lOe.js","./index-CxljV1N8.js","./index-DAnQV6hb.js","./index-D5cGTUkh.js","./Combination-ZMr3b_jV.js","./index-N3eucVg6.js","./index-BTe66ZhM.js","./index-DavpLpmr.js","./Drawer-CJqTAku3.js","./IconArrowRight-Bc4wwjT_.js","./IconArrowLeft-DFM-AXyG.js","./IconX-DigCVOFI.js","./Drawer-COyGmWi0.css","./Popover-BL_lnscC.css","./IconChevronLeft-BDjp6y3L.js","./IconChevronRight-D3J9D-fl.js","./IconChevronDown-D1vfiZl2.js","./Pagination-NtJZP_g0.css"])))=>i.map(i=>d[i]);
import{_ as k}from"./iframe-BpBrZJOc.js";import{j as V}from"./jsx-runtime-BO8uF4Og.js";import{r as P,R as h}from"./index-D4H_InIO.js";import{P as S}from"./Pagination-Dn8wtTIX.js";const q={title:"Components/Pagination",component:S,parameters:{layout:"padded",docs:{page:()=>k(()=>import("./Pagination-CIrb1sE2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]),import.meta.url)}},tags:[]},r={render:i=>{const[l,d]=P.useState(1),[m,t]=P.useState(10),p=(e,n)=>{console.log(`Page changed to ${e}, size: ${n}`),d(e),n&&t(n)};return V.jsx(S,{...i,current:l,pageSize:m,onChange:p,onPageSizeChange:e=>{console.log(`Page size changed to ${e}`),t(e)}})},args:{total:100,showCount:!0,showRowsInPage:!0,countType:"long"}},o={args:{total:500,current:6,countType:"long"}},a={args:{total:80,current:3,countType:"short"}},s={args:{total:100,current:1,showCount:!1}},c={args:{total:100,current:1,showRowsInPage:!1}},u={render:i=>{const[l,d]=h.useState(5),[m,t]=h.useState(10);h.useEffect(()=>{const e=document.dir;return document.dir="rtl",document.documentElement.dir="rtl",()=>{document.dir=e,document.documentElement.dir=e}},[]);const p=(e,n)=>{console.log(`Page changed to ${e}, size: ${n}`),d(e),n&&t(n)};return V.jsx(S,{...i,current:l,pageSize:m,onChange:p,onPageSizeChange:e=>{console.log(`Page size changed to ${e}`),t(e)},showCount:!0,showRowsInPage:!0})},args:{total:100}},g={args:{total:15,current:1}};var z,C,f;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const handleChange = (page: number, size?: number) => {
      console.log(\`Page changed to \${page}, size: \${size}\`);
      setCurrent(page);
      if (size) setPageSize(size);
    };
    return <Pagination {...args} current={current} pageSize={pageSize} onChange={handleChange} onPageSizeChange={size => {
      console.log(\`Page size changed to \${size}\`);
      setPageSize(size);
    }} />;
  },
  args: {
    total: 100,
    showCount: true,
    showRowsInPage: true,
    countType: 'long'
  }
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var w,R,_;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    total: 500,
    current: 6,
    countType: 'long'
  }
}`,...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var T,$,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    total: 80,
    current: 3,
    countType: 'short'
  }
}`,...(y=($=a.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var E,b,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 1,
    showCount: false
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,I,L;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 1,
    showRowsInPage: false
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var j,D,W;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = React.useState(5);
    const [pageSize, setPageSize] = React.useState(10);

    // Set RTL for this story only
    React.useEffect(() => {
      const prevDir = document.dir;
      document.dir = 'rtl';
      document.documentElement.dir = 'rtl';
      return () => {
        document.dir = prevDir;
        document.documentElement.dir = prevDir;
      };
    }, []);
    const handleChange = (page: number, size?: number) => {
      console.log(\`Page changed to \${page}, size: \${size}\`);
      setCurrent(page);
      if (size) setPageSize(size);
    };
    return <Pagination {...args} current={current} pageSize={pageSize} onChange={handleChange} onPageSizeChange={size => {
      console.log(\`Page size changed to \${size}\`);
      setPageSize(size);
    }} showCount={true} showRowsInPage={true} />;
  },
  args: {
    total: 100
  }
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var O,M,A;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    total: 15,
    current: 1
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const B=["Controlled","LongPagination","ShortPagination","WithoutCount","WithoutRowsSelector","RTLMode","SmallTotal"],K=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,LongPagination:o,RTLMode:u,ShortPagination:a,SmallTotal:g,WithoutCount:s,WithoutRowsSelector:c,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{r as C,o as L,K as P,u as R,a as S,s as W,c as a};
