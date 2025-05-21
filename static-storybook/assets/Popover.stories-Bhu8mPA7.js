import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as t,a as p,b as C,c as w,d as b,e as B}from"./Popover-CgPZskr3.js";import{B as o}from"./Button-b6PCfnH9.js";const T={title:"Components/Popover",component:t,parameters:{layout:"centered"},tags:[],argTypes:{type:{control:"radio",options:["default","with-scrollbar"],description:"Display a scrollbar to indicate overflow content in the popover"},side:{control:"select",options:["top","right","bottom","left"],description:"The side where the popover appears relative to the trigger"},align:{control:"select",options:["start","center","end"],description:"The alignment of the popover relative to the trigger"},showArrow:{control:"boolean",description:"Whether to show the arrow pointing to the trigger"}}},y=a=>e.jsx(t,{...a,content:a.content,children:e.jsx(o,{children:"Click me"})}),r={render:y,args:{content:"This is a basic popover content",type:"default",side:"bottom",align:"center",showArrow:!0}},n={render:y,args:{content:e.jsxs("div",{children:[e.jsx("p",{children:"This popover has a lot of content that might require scrolling."}),e.jsx("p",{children:"You can see how the scrollbar appears when the content exceeds the maximum height."}),e.jsx("p",{children:"This is useful for displaying larger amounts of information without taking up too much screen space."}),e.jsx("p",{children:"The popover will automatically handle overflow content."}),e.jsx("p",{children:"This is line 5 of the content."}),e.jsx("p",{children:"This is line 6 of the content."}),e.jsx("p",{children:"This is line 7 of the content."}),e.jsx("p",{children:"This is line 8 of the content."})]}),type:"with-scrollbar",side:"bottom",align:"center",showArrow:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(t,{content:"This popover appears on top",side:"top",align:"center",children:e.jsx(o,{children:"Top"})}),e.jsx(t,{content:"This popover appears on the right",side:"right",align:"center",children:e.jsx(o,{children:"Right"})}),e.jsx(t,{content:"This popover appears on the bottom",side:"bottom",align:"center",children:e.jsx(o,{children:"Bottom"})}),e.jsx(t,{content:"This popover appears on the left",side:"left",align:"center",children:e.jsx(o,{children:"Left"})})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(t,{content:e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem"},children:"Popover Title"}),e.jsx("p",{style:{margin:"0 0 1rem"},children:"This popover contains a title and action buttons."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem"},children:[e.jsx(p,{asChild:!0,children:e.jsx(o,{variant:"secondary",size:"sm",children:"Cancel"})}),e.jsx(p,{asChild:!0,children:e.jsx(o,{size:"sm",children:"Confirm"})})]})]}),children:e.jsx(o,{children:"With Buttons"})}),e.jsxs(C,{children:[e.jsx(w,{asChild:!0,children:e.jsx(o,{children:"Custom Composition"})}),e.jsx(b,{className:T.component.name,sideOffset:5,children:e.jsxs("div",{style:{padding:"0.5rem"},children:[e.jsx("h4",{children:"Custom Components"}),e.jsx("p",{children:"Using PopoverRoot, PopoverTrigger, and PopoverContent for more control."}),e.jsx(B,{})]})})]})]})};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: 'This is a basic popover content',
    type: 'default',
    side: 'bottom',
    align: 'center',
    showArrow: true
  }
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var d,m,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: <div>
        <p>This popover has a lot of content that might require scrolling.</p>
        <p>You can see how the scrollbar appears when the content exceeds the maximum height.</p>
        <p>This is useful for displaying larger amounts of information without taking up too much screen space.</p>
        <p>The popover will automatically handle overflow content.</p>
        <p>This is line 5 of the content.</p>
        <p>This is line 6 of the content.</p>
        <p>This is line 7 of the content.</p>
        <p>This is line 8 of the content.</p>
      </div>,
    type: 'with-scrollbar',
    side: 'bottom',
    align: 'center',
    showArrow: true
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Popover content="This popover appears on top" side="top" align="center">
        <Button>Top</Button>
      </Popover>
      
      <Popover content="This popover appears on the right" side="right" align="center">
        <Button>Right</Button>
      </Popover>
      
      <Popover content="This popover appears on the bottom" side="bottom" align="center">
        <Button>Bottom</Button>
      </Popover>
      
      <Popover content="This popover appears on the left" side="left" align="center">
        <Button>Left</Button>
      </Popover>
    </div>
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,j,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Popover content={<div>
            <h4 style={{
        margin: '0 0 0.5rem'
      }}>Popover Title</h4>
            <p style={{
        margin: '0 0 1rem'
      }}>This popover contains a title and action buttons.</p>
            <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.5rem'
      }}>
              <PopoverClose asChild>
                <Button variant="secondary" size="sm">Cancel</Button>
              </PopoverClose>
              <PopoverClose asChild>
                <Button size="sm">Confirm</Button>
              </PopoverClose>
            </div>
          </div>}>
        <Button>With Buttons</Button>
      </Popover>

      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button>Custom Composition</Button>
        </PopoverTrigger>
        <PopoverContent className={meta.component.name} sideOffset={5}>
          <div style={{
          padding: '0.5rem'
        }}>
            <h4>Custom Components</h4>
            <p>Using PopoverRoot, PopoverTrigger, and PopoverContent for more control.</p>
            <PopoverArrow />
          </div>
        </PopoverContent>
      </PopoverRoot>
    </div>
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const S=["Default","WithScrollbar","Different_Positions","Compositions"],A=Object.freeze(Object.defineProperty({__proto__:null,Compositions:i,Default:r,Different_Positions:s,WithScrollbar:n,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{i as C,r as D,A as P,n as W,s as a};
