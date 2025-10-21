const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ScrollArea-BPODfAwA.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./ScrollArea-CS41QZ1X.js","./index-D7-T4lOe.js","./index-BTe66ZhM.js","./index-DAnQV6hb.js","./index-YtIeenAn.js","./index-BdQq_4o_.js","./index-DW48STyt.js","./clsx-B-dksMZM.js","./ScrollArea--7mshJD0.css"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as i}from"./ScrollArea-CS41QZ1X.js";const G={title:"Components/ScrollArea",component:i,parameters:{layout:"centered",docs:{page:()=>N(()=>import("./ScrollArea-BPODfAwA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url)}},tags:[],argTypes:{type:{control:"radio",options:["always","scroll","hover","auto"]},scrollHideDelay:{control:{type:"range",min:0,max:2e3,step:100}},height:{control:"text"},width:{control:"text"},horizontal:{control:"boolean"},vertical:{control:"boolean"},dir:{control:"radio",options:["ltr","rtl"]}}},t=Array.from({length:20},(h,r)=>e.jsxs("p",{style:{margin:"16px 0",lineHeight:"1.6"},children:["This is paragraph ",r+1,". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]},r)),k=e.jsxs("div",{style:{width:"800px",padding:"16px"},children:[e.jsx("h3",{children:"Wide Content Example"}),e.jsx("p",{children:"This content is wider than the scroll area container, demonstrating horizontal scrolling capabilities."}),e.jsx("div",{style:{display:"flex",gap:"16px",marginTop:"16px"},children:Array.from({length:10},(h,r)=>e.jsxs("div",{style:{minWidth:"120px",padding:"12px",backgroundColor:"#f0f0f0",borderRadius:"8px",textAlign:"center"},children:["Card ",r+1]},r))})]}),l={args:{type:"hover",height:"200px",width:"300px",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h4",{children:"Scrollable Content"}),t.slice(0,10)]})}},d={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",width:"800px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Type: Hover (default)"}),e.jsx(i,{type:"hover",height:"150px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:t.slice(0,8)})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Type: Always"}),e.jsx(i,{type:"always",height:"150px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:t.slice(0,8)})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Type: Scroll"}),e.jsx(i,{type:"scroll",height:"150px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:t.slice(0,8)})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Type: Auto"}),e.jsx(i,{type:"auto",height:"150px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:t.slice(0,8)})})]})]})},s={args:{type:"hover",height:"200px",width:"400px",horizontal:!0,vertical:!1,children:k}},n={args:{type:"hover",height:"200px",width:"300px",horizontal:!0,vertical:!0,children:e.jsxs("div",{style:{width:"600px",padding:"16px"},children:[e.jsx("h4",{children:"Both Horizontal and Vertical Scrolling"}),t,e.jsx("div",{style:{marginTop:"20px"},children:e.jsx("p",{children:"This content extends both vertically and horizontally to demonstrate both scrollbars working together."})})]})}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Small (200x150px)"}),e.jsx(i,{height:"150px",width:"200px",children:e.jsx("div",{style:{padding:"12px"},children:t.slice(0,6)})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Medium (300x200px)"}),e.jsx(i,{height:"200px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:t.slice(0,8)})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Large (400x250px)"}),e.jsx(i,{height:"250px",width:"400px",children:e.jsx("div",{style:{padding:"20px"},children:t.slice(0,10)})})]})]})},a={args:{type:"always",height:"200px",width:"300px",dir:"rtl",children:e.jsxs("div",{style:{padding:"16px",textAlign:"right",direction:"rtl"},children:[e.jsx("h4",{children:"محتوى عربي قابل للتمرير"}),e.jsx("p",{children:"هذا نص تجريبي باللغة العربية لاختبار دعم الاتجاه من اليمين إلى اليسار."}),e.jsx("p",{children:"يحتوي هذا المكون على محتوى طويل يتطلب التمرير للعرض الكامل."}),e.jsx("p",{children:"النص العربي يتدفق من اليمين إلى اليسار ويجب أن يعمل التمرير بشكل صحيح."}),e.jsx("p",{children:"هذه فقرة إضافية لإظهار كيفية عمل التمرير العمودي مع النص العربي."}),e.jsx("p",{children:"المزيد من النص لجعل المحتوى أطول ويتطلب التمرير."}),e.jsx("p",{children:"فقرة أخيرة لإكمال المثال على النص العربي الطويل."})]})},parameters:{globals:{direction:"rtl"}}},p={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",width:"700px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"List Content"}),e.jsx(i,{height:"200px",width:"300px",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h5",{children:"Todo List"}),Array.from({length:15},(h,r)=>e.jsxs("div",{style:{padding:"8px 0",borderBottom:"1px solid #eee",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox"}),e.jsxs("span",{children:["Task ",r+1,": Complete project milestone"]})]},r))]})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px"},children:"Card Grid"}),e.jsx(i,{height:"200px",width:"300px",children:e.jsx("div",{style:{padding:"16px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:Array.from({length:20},(h,r)=>e.jsxs("div",{style:{padding:"12px",backgroundColor:"#f8f9fa",borderRadius:"8px",textAlign:"center",border:"1px solid #dee2e6"},children:[e.jsxs("strong",{children:["Card ",r+1]}),e.jsx("p",{style:{fontSize:"12px",margin:"4px 0 0"},children:"Sample content"})]},r))})})})]})]})};var c,x,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'hover',
    height: '200px',
    width: '300px',
    children: <div style={{
      padding: '16px'
    }}>
        <h4>Scrollable Content</h4>
        {LONG_TEXT.slice(0, 10)}
      </div>
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var m,y,v;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    width: '800px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Type: Hover (default)</h4>
        <ScrollArea type="hover" height="150px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Type: Always</h4>
        <ScrollArea type="always" height="150px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Type: Scroll</h4>
        <ScrollArea type="scroll" height="150px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Type: Auto</h4>
        <ScrollArea type="auto" height="150px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var u,j,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'hover',
    height: '200px',
    width: '400px',
    horizontal: true,
    vertical: false,
    children: WIDE_CONTENT
  }
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var S,f,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'hover',
    height: '200px',
    width: '300px',
    horizontal: true,
    vertical: true,
    children: <div style={{
      width: '600px',
      padding: '16px'
    }}>
        <h4>Both Horizontal and Vertical Scrolling</h4>
        {LONG_TEXT}
        <div style={{
        marginTop: '20px'
      }}>
          <p>This content extends both vertically and horizontally to demonstrate both scrollbars working together.</p>
        </div>
      </div>
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var A,b,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Small (200x150px)</h4>
        <ScrollArea height="150px" width="200px">
          <div style={{
          padding: '12px'
        }}>
            {LONG_TEXT.slice(0, 6)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Medium (300x200px)</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            {LONG_TEXT.slice(0, 8)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Large (400x250px)</h4>
        <ScrollArea height="250px" width="400px">
          <div style={{
          padding: '20px'
        }}>
            {LONG_TEXT.slice(0, 10)}
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var C,B,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'always',
    height: '200px',
    width: '300px',
    dir: 'rtl',
    children: <div style={{
      padding: '16px',
      textAlign: 'right',
      direction: 'rtl'
    }}>
        <h4>محتوى عربي قابل للتمرير</h4>
        <p>هذا نص تجريبي باللغة العربية لاختبار دعم الاتجاه من اليمين إلى اليسار.</p>
        <p>يحتوي هذا المكون على محتوى طويل يتطلب التمرير للعرض الكامل.</p>
        <p>النص العربي يتدفق من اليمين إلى اليسار ويجب أن يعمل التمرير بشكل صحيح.</p>
        <p>هذه فقرة إضافية لإظهار كيفية عمل التمرير العمودي مع النص العربي.</p>
        <p>المزيد من النص لجعل المحتوى أطول ويتطلب التمرير.</p>
        <p>فقرة أخيرة لإكمال المثال على النص العربي الطويل.</p>
      </div>
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(L=(B=a.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,z,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    width: '700px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>List Content</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            <h5>Todo List</h5>
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} style={{
            padding: '8px 0',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
                <input type="checkbox" />
                <span>Task {i + 1}: Complete project milestone</span>
              </div>)}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 style={{
        marginBottom: '8px'
      }}>Card Grid</h4>
        <ScrollArea height="200px" width="300px">
          <div style={{
          padding: '16px'
        }}>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
              {Array.from({
              length: 20
            }, (_, i) => <div key={i} style={{
              padding: '12px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #dee2e6'
            }}>
                  <strong>Card {i + 1}</strong>
                  <p style={{
                fontSize: '12px',
                margin: '4px 0 0'
              }}>Sample content</p>
                </div>)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const X=["Default","Types","HorizontalScrolling","BothScrollbars","Sizes","RTLSupport","CustomContent"],I=Object.freeze(Object.defineProperty({__proto__:null,BothScrollbars:n,CustomContent:p,Default:l,HorizontalScrolling:s,RTLSupport:a,Sizes:o,Types:d,__namedExportsOrder:X,default:G},Symbol.toStringTag,{value:"Module"}));export{n as B,p as C,l as D,s as H,a as R,I as S,d as T,o as a};
