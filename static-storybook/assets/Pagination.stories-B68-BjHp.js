import{j as M}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l,R as q}from"./index-BlmOqGMO.js";import{P as d}from"./Pagination-DyjDaROw.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Button-b6PCfnH9.js";import"./createReactComponent-GuN14Mgc.js";const N={title:"Components/Pagination",component:d,parameters:{layout:"padded"},tags:["autodocs"]},t={render:i=>{const[r,_]=l.useState(1),[O,m]=l.useState(10),k=(e,g)=>{console.log(`Page changed to ${e}, size: ${g}`),_(e),g&&m(g)};return M.jsx(d,{...i,current:r,pageSize:O,onChange:k,onPageSizeChange:e=>{console.log(`Page size changed to ${e}`),m(e)}})},args:{total:100,showCount:!0,showRowsInPage:!0,countType:"long"}},n={args:{total:500,current:6,countType:"long"}},o={args:{total:80,current:3,countType:"short"}},a={args:{total:100,current:1,showCount:!1}},s={args:{total:100,current:1,showRowsInPage:!1}},c={render:i=>(q.useEffect(()=>{const r=document.dir;return document.dir="rtl",document.documentElement.dir="rtl",()=>{document.dir=r,document.documentElement.dir=r}},[]),M.jsx(d,{...i})),args:{total:100,current:5}},u={args:{total:15,current:1}};var p,h,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var P,C,z;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    total: 500,
    current: 6,
    countType: 'long'
  }
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var f,w,R;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    total: 80,
    current: 3,
    countType: 'short'
  }
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var T,y,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 1,
    showCount: false
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var x,$,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 1,
    showRowsInPage: false
  }
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var j,v,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
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
    return <Pagination {...args} />;
  },
  args: {
    total: 100,
    current: 5
  }
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var I,W,b;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    total: 15,
    current: 1
  }
}`,...(b=(W=u.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};const Q=["Controlled","LongPagination","ShortPagination","WithoutCount","WithoutRowsSelector","RTLMode","SmallTotal"];export{t as Controlled,n as LongPagination,c as RTLMode,o as ShortPagination,u as SmallTotal,a as WithoutCount,s as WithoutRowsSelector,Q as __namedExportsOrder,N as default};
