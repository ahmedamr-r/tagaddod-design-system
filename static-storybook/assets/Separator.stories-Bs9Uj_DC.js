const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Separator-B_QPTChV.js","./jsx-runtime-BO8uF4Og.js","./index-D4H_InIO.js","./index-BqIVwv1J.js","./index-BCgJJ4rA.js","./iframe-BpBrZJOc.js","./index-C-Cn8Fdj.js","./index-DzKAYa42.js","./index-DgH-xKnr.js","./index-DrFu-skq.js","./Separator-DDuP3uRh.js","./clsx-B-dksMZM.js","./Separator-Tp2ElSza.css"])))=>i.map(i=>d[i]);
import{_ as Y}from"./iframe-BpBrZJOc.js";import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{s as Z,S as r}from"./Separator-DDuP3uRh.js";const $={title:"Components/Separator",component:r,parameters:{layout:"centered",docs:{page:()=>Y(()=>import("./Separator-B_QPTChV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)}},tags:[],argTypes:{orientation:{control:"select",options:Z,description:"The orientation of the separator"},decorative:{control:"boolean",description:"When true, the separator is purely decorative and ignored by screen readers"},className:{control:"text",description:"Additional CSS classes"}},args:{orientation:"horizontal",decorative:!1}},i={render:t=>e.jsxs("div",{style:{width:"300px",padding:"20px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:"Content above"}),e.jsx(r,{...t}),e.jsx("div",{style:{marginTop:"16px"},children:"Content below"})]})},a={args:{orientation:"horizontal"},render:t=>e.jsxs("div",{style:{width:"300px",padding:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Section Title"}),e.jsx("p",{style:{margin:"0 0 16px 0"},children:"This is some content that appears before the separator."}),e.jsx(r,{...t}),e.jsx("p",{style:{margin:"16px 0 0 0"},children:"This is content that appears after the separator."})]})},n={args:{orientation:"vertical"},render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"80px",padding:"20px",gap:"0"},children:[e.jsx("div",{style:{padding:"0 16px"},children:"Left content"}),e.jsx(r,{...t}),e.jsx("div",{style:{padding:"0 16px"},children:"Right content"})]})},s={args:{decorative:!0},render:t=>e.jsxs("div",{style:{width:"300px",padding:"20px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:"This separator is purely decorative"}),e.jsx(r,{...t}),e.jsx("div",{style:{marginTop:"16px"},children:"Screen readers will ignore it"})]}),parameters:{docs:{description:{story:'When decorative is true, the separator uses role="presentation" and is ignored by screen readers.'}}}},o={args:{decorative:!1},render:t=>e.jsxs("div",{style:{width:"300px",padding:"20px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:"This separator is semantic"}),e.jsx(r,{...t}),e.jsx("div",{style:{marginTop:"16px"},children:"Screen readers will announce it"})]}),parameters:{docs:{description:{story:'When decorative is false, the separator uses role="separator" and will be announced by screen readers.'}}}},d={render:()=>e.jsxs("nav",{style:{display:"flex",alignItems:"center",padding:"16px",backgroundColor:"var(--t-color-surface-background, #f8f9fa)",borderRadius:"8px"},children:[e.jsx("a",{href:"#",style:{textDecoration:"none",padding:"0 16px"},children:"Home"}),e.jsx(r,{orientation:"vertical",decorative:!0}),e.jsx("a",{href:"#",style:{textDecoration:"none",padding:"0 16px"},children:"About"}),e.jsx(r,{orientation:"vertical",decorative:!0}),e.jsx("a",{href:"#",style:{textDecoration:"none",padding:"0 16px"},children:"Contact"})]}),parameters:{docs:{description:{story:"Common usage in navigation with vertical separators between menu items."}}}},p={render:()=>e.jsxs("article",{style:{width:"400px",padding:"24px"},children:[e.jsx("h2",{style:{margin:"0 0 16px 0"},children:"Article Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"Published on January 15, 2024"}),e.jsx(r,{decorative:!1}),e.jsx("p",{style:{margin:"16px 0"},children:"This is the article content. The separator above helps distinguish the metadata from the main content while being semantically meaningful for screen readers."}),e.jsx(r,{decorative:!1}),e.jsx("footer",{style:{margin:"16px 0 0 0",fontSize:"14px",color:"#666"},children:"Tags: React, TypeScript, Design System"})]}),parameters:{docs:{description:{story:"Example of using separators to structure content sections in an article."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Horizontal Separator"}),e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(r,{orientation:"horizontal"}),e.jsx("div",{children:"Content below"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Vertical Separator"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"60px"},children:[e.jsx("div",{style:{padding:"0 16px"},children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{style:{padding:"0 16px"},children:"Center"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{style:{padding:"0 16px"},children:"Right"})]})]})]})},c={render:()=>e.jsxs("div",{style:{width:"300px",padding:"20px"},children:[e.jsx("div",{style:{marginBottom:"16px",textAlign:"right"},children:"محتوى عربي أعلى"}),e.jsx(r,{}),e.jsx("div",{style:{marginTop:"16px",textAlign:"right"},children:"محتوى عربي أسفل"})]}),parameters:{globals:{direction:"rtl"},docs:{description:{story:"Separator component with Arabic content - switch to RTL mode to see proper alignment."}}}},x={render:()=>e.jsxs("div",{style:{width:"500px",padding:"24px",border:"1px solid var(--t-color-border-primary, #e0e0e0)",borderRadius:"8px"},children:[e.jsxs("header",{style:{marginBottom:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 8px 0"},children:"Dashboard"}),e.jsx("p",{style:{margin:"0",color:"#666"},children:"Welcome back, User!"})]}),e.jsx(r,{}),e.jsx("main",{style:{margin:"16px 0"},children:e.jsxs("div",{style:{display:"flex",gap:"0",alignItems:"stretch"},children:[e.jsxs("aside",{style:{padding:"0 16px 0 0",minWidth:"120px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px"},children:"Navigation"}),e.jsxs("ul",{style:{margin:0,padding:0,listStyle:"none"},children:[e.jsx("li",{style:{margin:"0 0 8px 0"},children:e.jsx("a",{href:"#",children:"Dashboard"})}),e.jsx("li",{style:{margin:"0 0 8px 0"},children:e.jsx("a",{href:"#",children:"Analytics"})}),e.jsx("li",{style:{margin:"0 0 8px 0"},children:e.jsx("a",{href:"#",children:"Settings"})})]})]}),e.jsx(r,{orientation:"vertical"}),e.jsxs("section",{style:{padding:"0 0 0 16px",flex:1},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px"},children:"Recent Activity"}),e.jsx("p",{style:{margin:"0 0 8px 0"},children:"• Project updated"}),e.jsx("p",{style:{margin:"0 0 8px 0"},children:"• New team member added"}),e.jsx("p",{style:{margin:"0"},children:"• Report generated"})]})]})}),e.jsx(r,{}),e.jsx("footer",{style:{marginTop:"16px",fontSize:"14px",color:"#666"},children:"Last updated: 2 hours ago"})]}),parameters:{docs:{description:{story:"Complex layout example showing both horizontal and vertical separators in a dashboard-like interface."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:"200px"},children:[e.jsx("h4",{style:{margin:"0 0 1rem",fontSize:"14px",fontWeight:600},children:"Default Spacing"}),e.jsxs("div",{style:{border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(r,{spacing:"default"}),e.jsx("div",{children:"Content below"})]})]}),e.jsxs("div",{style:{width:"200px"},children:[e.jsx("h4",{style:{margin:"0 0 1rem",fontSize:"14px",fontWeight:600},children:"Compact Spacing"}),e.jsxs("div",{style:{border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(r,{spacing:"compact"}),e.jsx("div",{children:"Content below"})]})]}),e.jsxs("div",{style:{width:"200px"},children:[e.jsx("h4",{style:{margin:"0 0 1rem",fontSize:"14px",fontWeight:600},children:"No Spacing"}),e.jsxs("div",{style:{border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(r,{spacing:"none"}),e.jsx("div",{children:"Content below"})]})]}),e.jsxs("div",{style:{width:"200px"},children:[e.jsx("h4",{style:{margin:"0 0 1rem",fontSize:"14px",fontWeight:600},children:"Custom Spacing (8px)"}),e.jsxs("div",{style:{border:"1px solid var(--t-color-border-subtle)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(r,{spacing:8}),e.jsx("div",{children:"Content below"})]})]})]}),parameters:{docs:{description:{story:"Demonstrates different spacing options for the Separator component."}}}},m={render:()=>e.jsxs("div",{style:{width:"400px",padding:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Accessibility Examples"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Semantic Separator"}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:["This separator has ",e.jsx("code",{children:'role="separator"'})," and will be announced by screen readers."]}),e.jsx("div",{children:"Section 1 content"}),e.jsx(r,{decorative:!1}),e.jsx("div",{children:"Section 2 content"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Decorative Separator"}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:["This separator has ",e.jsx("code",{children:'role="presentation"'})," and will be ignored by screen readers."]}),e.jsx("div",{children:"Visually separated content"}),e.jsx(r,{decorative:!0}),e.jsx("div",{children:"More visually separated content"})]})]}),parameters:{docs:{description:{story:"Demonstrates the difference between semantic and decorative separators for accessibility."}}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    padding: '20px'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>Content above</div>
      <Separator {...args} />
      <div style={{
      marginTop: '16px'
    }}>Content below</div>
    </div>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var u,f,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div style={{
    width: '300px',
    padding: '20px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0'
    }}>Section Title</h3>
      <p style={{
      margin: '0 0 16px 0'
    }}>This is some content that appears before the separator.</p>
      <Separator {...args} />
      <p style={{
      margin: '16px 0 0 0'
    }}>This is content that appears after the separator.</p>
    </div>
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,S,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    padding: '20px',
    gap: '0'
  }}>
      <div style={{
      padding: '0 16px'
    }}>Left content</div>
      <Separator {...args} />
      <div style={{
      padding: '0 16px'
    }}>Right content</div>
    </div>
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,T,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    decorative: true
  },
  render: args => <div style={{
    width: '300px',
    padding: '20px'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>This separator is purely decorative</div>
      <Separator {...args} />
      <div style={{
      marginTop: '16px'
    }}>Screen readers will ignore it</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'When decorative is true, the separator uses role="presentation" and is ignored by screen readers.'
      }
    }
  }
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var R,D,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    decorative: false
  },
  render: args => <div style={{
    width: '300px',
    padding: '20px'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>This separator is semantic</div>
      <Separator {...args} />
      <div style={{
      marginTop: '16px'
    }}>Screen readers will announce it</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'When decorative is false, the separator uses role="separator" and will be announced by screen readers.'
      }
    }
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var W,E,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <nav style={{
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'var(--t-color-surface-background, #f8f9fa)',
    borderRadius: '8px'
  }}>
      <a href="#" style={{
      textDecoration: 'none',
      padding: '0 16px'
    }}>Home</a>
      <Separator orientation="vertical" decorative />
      <a href="#" style={{
      textDecoration: 'none',
      padding: '0 16px'
    }}>About</a>
      <Separator orientation="vertical" decorative />
      <a href="#" style={{
      textDecoration: 'none',
      padding: '0 16px'
    }}>Contact</a>
    </nav>,
  parameters: {
    docs: {
      description: {
        story: 'Common usage in navigation with vertical separators between menu items.'
      }
    }
  }
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var L,B,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <article style={{
    width: '400px',
    padding: '24px'
  }}>
      <h2 style={{
      margin: '0 0 16px 0'
    }}>Article Title</h2>
      <p style={{
      margin: '0 0 16px 0',
      color: '#666'
    }}>Published on January 15, 2024</p>
      
      <Separator decorative={false} />
      
      <p style={{
      margin: '16px 0'
    }}>
        This is the article content. The separator above helps distinguish the metadata 
        from the main content while being semantically meaningful for screen readers.
      </p>
      
      <Separator decorative={false} />
      
      <footer style={{
      margin: '16px 0 0 0',
      fontSize: '14px',
      color: '#666'
    }}>
        Tags: React, TypeScript, Design System
      </footer>
    </article>,
  parameters: {
    docs: {
      description: {
        story: 'Example of using separators to structure content sections in an article.'
      }
    }
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var O,I,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '20px'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>Horizontal Separator</h3>
        <div style={{
        width: '300px'
      }}>
          <div>Content above</div>
          <Separator orientation="horizontal" />
          <div>Content below</div>
        </div>
      </div>
      
      <div>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>Vertical Separator</h3>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '60px'
      }}>
          <div style={{
          padding: '0 16px'
        }}>Left</div>
          <Separator orientation="vertical" />
          <div style={{
          padding: '0 16px'
        }}>Center</div>
          <Separator orientation="vertical" />
          <div style={{
          padding: '0 16px'
        }}>Right</div>
        </div>
      </div>
    </div>
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var H,V,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    padding: '20px'
  }}>
      <div style={{
      marginBottom: '16px',
      textAlign: 'right'
    }}>محتوى عربي أعلى</div>
      <Separator />
      <div style={{
      marginTop: '16px',
      textAlign: 'right'
    }}>محتوى عربي أسفل</div>
    </div>,
  parameters: {
    globals: {
      direction: 'rtl'
    },
    docs: {
      description: {
        story: 'Separator component with Arabic content - switch to RTL mode to see proper alignment.'
      }
    }
  }
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var M,J,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px',
    padding: '24px',
    border: '1px solid var(--t-color-border-primary, #e0e0e0)',
    borderRadius: '8px'
  }}>
      {/* Header */}
      <header style={{
      marginBottom: '16px'
    }}>
        <h2 style={{
        margin: '0 0 8px 0'
      }}>Dashboard</h2>
        <p style={{
        margin: '0',
        color: '#666'
      }}>Welcome back, User!</p>
      </header>
      
      <Separator />
      
      {/* Main content area */}
      <main style={{
      margin: '16px 0'
    }}>
        <div style={{
        display: 'flex',
        gap: '0',
        alignItems: 'stretch'
      }}>
          {/* Sidebar */}
          <aside style={{
          padding: '0 16px 0 0',
          minWidth: '120px'
        }}>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px'
          }}>Navigation</h3>
            <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
              <li style={{
              margin: '0 0 8px 0'
            }}><a href="#">Dashboard</a></li>
              <li style={{
              margin: '0 0 8px 0'
            }}><a href="#">Analytics</a></li>
              <li style={{
              margin: '0 0 8px 0'
            }}><a href="#">Settings</a></li>
            </ul>
          </aside>
          
          <Separator orientation="vertical" />
          
          {/* Content */}
          <section style={{
          padding: '0 0 0 16px',
          flex: 1
        }}>
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px'
          }}>Recent Activity</h3>
            <p style={{
            margin: '0 0 8px 0'
          }}>• Project updated</p>
            <p style={{
            margin: '0 0 8px 0'
          }}>• New team member added</p>
            <p style={{
            margin: '0'
          }}>• Report generated</p>
          </section>
        </div>
      </main>
      
      <Separator />
      
      {/* Footer */}
      <footer style={{
      marginTop: '16px',
      fontSize: '14px',
      color: '#666'
    }}>
        Last updated: 2 hours ago
      </footer>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complex layout example showing both horizontal and vertical separators in a dashboard-like interface.'
      }
    }
  }
}`,...(U=(J=x.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var F,q,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: '200px'
    }}>
        <h4 style={{
        margin: '0 0 1rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Default Spacing</h4>
        <div style={{
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px',
        padding: '16px'
      }}>
          <div>Content above</div>
          <Separator spacing="default" />
          <div>Content below</div>
        </div>
      </div>
      
      <div style={{
      width: '200px'
    }}>
        <h4 style={{
        margin: '0 0 1rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Compact Spacing</h4>
        <div style={{
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px',
        padding: '16px'
      }}>
          <div>Content above</div>
          <Separator spacing="compact" />
          <div>Content below</div>
        </div>
      </div>
      
      <div style={{
      width: '200px'
    }}>
        <h4 style={{
        margin: '0 0 1rem',
        fontSize: '14px',
        fontWeight: 600
      }}>No Spacing</h4>
        <div style={{
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px',
        padding: '16px'
      }}>
          <div>Content above</div>
          <Separator spacing="none" />
          <div>Content below</div>
        </div>
      </div>
      
      <div style={{
      width: '200px'
    }}>
        <h4 style={{
        margin: '0 0 1rem',
        fontSize: '14px',
        fontWeight: 600
      }}>Custom Spacing (8px)</h4>
        <div style={{
        border: '1px solid var(--t-color-border-subtle)',
        borderRadius: '8px',
        padding: '16px'
      }}>
          <div>Content above</div>
          <Separator spacing={8} />
          <div>Content below</div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different spacing options for the Separator component.'
      }
    }
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    padding: '20px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0'
    }}>Accessibility Examples</h3>
      
      <div style={{
      marginBottom: '24px'
    }}>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '16px'
      }}>Semantic Separator</h4>
        <p style={{
        margin: '0 0 8px 0',
        fontSize: '14px'
      }}>
          This separator has <code>role="separator"</code> and will be announced by screen readers.
        </p>
        <div>Section 1 content</div>
        <Separator decorative={false} />
        <div>Section 2 content</div>
      </div>
      
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '16px'
      }}>Decorative Separator</h4>
        <p style={{
        margin: '0 0 8px 0',
        fontSize: '14px'
      }}>
          This separator has <code>role="presentation"</code> and will be ignored by screen readers.
        </p>
        <div>Visually separated content</div>
        <Separator decorative={true} />
        <div>More visually separated content</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the difference between semantic and decorative separators for accessibility.'
      }
    }
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ee=["Default","Horizontal","Vertical","Decorative","Semantic","NavigationExample","ContentSectionExample","OrientationComparison","RTLExample","ComplexLayoutExample","SpacingOptions","AccessibilityShowcase"],ae=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityShowcase:m,ComplexLayoutExample:x,ContentSectionExample:p,Decorative:s,Default:i,Horizontal:a,NavigationExample:d,OrientationComparison:l,RTLExample:c,Semantic:o,SpacingOptions:h,Vertical:n,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{m as A,p as C,i as D,a as H,d as N,l as O,c as R,ae as S,n as V,o as a,s as b,h as c,x as d};
