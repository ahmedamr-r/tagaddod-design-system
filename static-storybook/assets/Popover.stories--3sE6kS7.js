import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{P as n,a as f,b as ie,c as se,d as ae,e as re}from"./Popover-B4T-UWsl.js";import{B as t}from"./Button-CoP_mZBT.js";const ce={title:"Components/Popover",component:n,parameters:{layout:"centered"},tags:[],argTypes:{type:{control:"radio",options:["default","with-scrollbar"],description:"Display a scrollbar to indicate overflow content in the popover"},side:{control:"select",options:["top","right","bottom","left"],description:"The side where the popover appears relative to the trigger"},align:{control:"select",options:["start","center","end"],description:"The alignment of the popover relative to the trigger"},showArrow:{control:"boolean",description:"Whether to show the arrow pointing to the trigger"},margin:{control:"select",options:["none","small","medium","large"],description:"Custom margin for the popover content"},useListbox:{control:"boolean",description:"Enable listbox mode for dropdown functionality"},listboxShowIcons:{control:"boolean",description:"Whether to show icons for listbox items by default"},listboxMaxItems:{control:"number",description:"Maximum number of visible options in the listbox"},listboxMultiple:{control:"boolean",description:"Whether the listbox supports multiple selection"},listboxItemPaddingVertical:{control:"number",description:"Custom vertical padding (top and bottom) for listbox items in pixels"},listboxItemPaddingHorizontal:{control:"number",description:"Custom horizontal padding (left and right) for listbox items in pixels"}}},i=o=>e.jsx(n,{...o,content:o.content,children:e.jsx(t,{children:"Click me"})}),s={render:i,args:{content:"This is a basic popover content",type:"default",side:"bottom",align:"center",showArrow:!0}},a={render:i,args:{content:e.jsxs("div",{children:[e.jsx("p",{children:"This popover has a lot of content that might require scrolling."}),e.jsx("p",{children:"You can see how the scrollbar appears when the content exceeds the maximum height."}),e.jsx("p",{children:"This is useful for displaying larger amounts of information without taking up too much screen space."}),e.jsx("p",{children:"The popover will automatically handle overflow content."}),e.jsx("p",{children:"This is line 5 of the content."}),e.jsx("p",{children:"This is line 6 of the content."}),e.jsx("p",{children:"This is line 7 of the content."}),e.jsx("p",{children:"This is line 8 of the content."})]}),type:"with-scrollbar",side:"bottom",align:"center",showArrow:!0}},r={render:i,args:{useListbox:!0,listboxOptions:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],listboxMaxItems:5,side:"bottom",align:"center",showArrow:!0,onListboxSelect:o=>console.log("Selected:",o)}},c={render:i,args:{useListbox:!0,listboxShowIcons:!0,listboxDefaultIcon:"📄",listboxOptions:[{label:"Documents",value:"docs"},{label:"Images",value:"images",icon:"🖼️"},{label:"Videos",value:"videos",icon:"🎥"},{label:"Music",value:"music",icon:"🎵"},{label:"Downloads",value:"downloads"}],listboxMaxItems:5,side:"bottom",align:"center",showArrow:!0,onListboxSelect:o=>console.log("Selected:",o)}},p={render:i,args:{useListbox:!0,listboxShowIcons:!1,listboxOptions:[{label:"Home",value:"home",showIcon:!0,icon:"🏠"},{label:"Profile",value:"profile"},{label:"Settings",value:"settings",showIcon:!0,icon:"⚙️"},{label:"Help",value:"help"},{label:"Logout",value:"logout",showIcon:!0,icon:"🚪"}],listboxMaxItems:5,side:"bottom",align:"center",showArrow:!0,onListboxSelect:o=>console.log("Selected:",o)}},u={render:i,args:{useListbox:!0,type:"with-scrollbar",listboxOptions:Array.from({length:15},(o,l)=>({label:`Option ${l+1}`,value:`option-${l+1}`,helpText:l%3===0?`This is help text for option ${l+1}`:void 0})),listboxMaxItems:6,side:"bottom",align:"center",showArrow:!0,onListboxSelect:o=>console.log("Selected:",o)}},d={render:i,args:{useListbox:!0,type:"with-scrollbar",listboxShowIcons:!0,listboxOptions:[{label:"Document.pdf",value:"doc1",icon:"📄",helpText:"Modified 2 hours ago"},{label:"Presentation.pptx",value:"pres1",icon:"📊",helpText:"Modified 1 day ago"},{label:"Spreadsheet.xlsx",value:"sheet1",icon:"📈",helpText:"Modified 3 days ago"},{label:"Project Plans",value:"fav1",icon:"⭐",divider:!0},{label:"Team Photos",value:"fav2",icon:"⭐"},{label:"Budget 2024",value:"fav3",icon:"⭐"},{label:"Calculator",value:"app1",icon:"🧮",divider:!0},{label:"Calendar",value:"app2",icon:"📅"},{label:"Notes",value:"app3",icon:"📝"},{label:"Weather",value:"app4",icon:"🌤️"},{label:"Music Player",value:"app5",icon:"🎵"},{label:"Photo Editor",value:"app6",icon:"🖼️"},{label:"Video Player",value:"app7",icon:"🎬"},{label:"Terminal",value:"app8",icon:"💻"},{label:"Text Editor",value:"app9",icon:"📄"},{label:"Web Browser",value:"app10",icon:"🌐"},{label:"File Manager",value:"app11",icon:"📁"},{label:"System Settings",value:"app12",icon:"⚙️"}],listboxMaxItems:8,side:"bottom",align:"start",showArrow:!0,margin:"small",onListboxSelect:o=>console.log("Selected:",o)}},b={render:i,args:{useListbox:!0,listboxMultiple:!0,listboxSelectedValue:["1","3"],listboxOptions:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],listboxMaxItems:5,side:"bottom",align:"center",showArrow:!0,onListboxMultiSelect:o=>console.log("Selected values:",o)}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(n,{content:"No margin",margin:"none",children:e.jsx(t,{children:"No Margin"})}),e.jsx(n,{content:"Small margin",margin:"small",children:e.jsx(t,{children:"Small"})}),e.jsx(n,{content:"Medium margin (default)",margin:"medium",children:e.jsx(t,{children:"Medium"})}),e.jsx(n,{content:"Large margin",margin:"large",children:e.jsx(t,{children:"Large"})}),e.jsx(n,{content:"Custom 20px margin",margin:20,children:e.jsx(t,{children:"Custom (20px)"})})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{useListbox:!0,margin:"none",listboxOptions:[{label:"Compact Option 1",value:"1"},{label:"Compact Option 2",value:"2"},{label:"Compact Option 3",value:"3"}],onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"No Margin Listbox"})}),e.jsx(n,{useListbox:!0,margin:10,listboxShowIcons:!0,listboxDefaultIcon:"⭐",listboxOptions:[{label:"Custom Margin 1",value:"1"},{label:"Custom Margin 2",value:"2"},{label:"Custom Margin 3",value:"3"}],onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"Custom Margin"})})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(n,{useListbox:!0,listboxItemPaddingVertical:8,listboxItemPaddingHorizontal:12,listboxOptions:[{label:"Compact Item 1",value:"1"},{label:"Compact Item 2",value:"2"},{label:"Compact Item 3",value:"3"}],onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"Compact Padding"})}),e.jsx(n,{useListbox:!0,listboxItemPaddingVertical:20,listboxItemPaddingHorizontal:24,listboxShowIcons:!0,listboxDefaultIcon:"📄",listboxOptions:[{label:"Spacious Item 1",value:"1"},{label:"Spacious Item 2",value:"2"},{label:"Spacious Item 3",value:"3"}],onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"Spacious Padding"})}),e.jsx(n,{useListbox:!0,listboxItemPaddingVertical:4,listboxItemPaddingHorizontal:32,listboxShowIcons:!0,listboxOptions:[{label:"Narrow Height",value:"1",icon:"🔥"},{label:"Wide Sides",value:"2",icon:"⚡"},{label:"Custom Shape",value:"3",icon:"🎯"}],onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"Custom Shape"})}),e.jsx(n,{useListbox:!0,type:"with-scrollbar",listboxItemPaddingVertical:16,listboxItemPaddingHorizontal:20,listboxMaxItems:5,listboxShowIcons:!0,listboxOptions:Array.from({length:12},(o,l)=>({label:`Padded Option ${l+1}`,value:`option-${l+1}`,icon:l%3===0?"📁":l%3===1?"📄":"🖼️",helpText:l%4===0?`Help text for option ${l+1}`:void 0})),onListboxSelect:o=>console.log("Selected:",o),children:e.jsx(t,{children:"Scrollable Custom Padding"})})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(n,{content:"This popover appears on top",side:"top",align:"center",children:e.jsx(t,{children:"Top"})}),e.jsx(n,{content:"This popover appears on the right",side:"right",align:"center",children:e.jsx(t,{children:"Right"})}),e.jsx(n,{content:"This popover appears on the bottom",side:"bottom",align:"center",children:e.jsx(t,{children:"Bottom"})}),e.jsx(n,{content:"This popover appears on the left",side:"left",align:"center",children:e.jsx(t,{children:"Left"})})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{content:e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem"},children:"Popover Title"}),e.jsx("p",{style:{margin:"0 0 1rem"},children:"This popover contains a title and action buttons."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem"},children:[e.jsx(f,{asChild:!0,children:e.jsx(t,{variant:"secondary",size:"micro",children:"Cancel"})}),e.jsx(f,{asChild:!0,children:e.jsx(t,{size:"micro",children:"Confirm"})})]})]}),children:e.jsx(t,{children:"With Buttons"})}),e.jsxs(ie,{children:[e.jsx(se,{asChild:!0,children:e.jsx(t,{children:"Custom Composition"})}),e.jsx(ae,{sideOffset:5,children:e.jsxs("div",{style:{padding:"0.5rem"},children:[e.jsx("h4",{children:"Custom Components"}),e.jsx("p",{children:"Using PopoverRoot, PopoverTrigger, and PopoverContent for more control."}),e.jsx(re,{})]})})]})]})};var S,P,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    content: 'This is a basic popover content',
    type: 'default',
    side: 'bottom',
    align: 'center',
    showArrow: true
  }
}`,...(w=(P=s.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var C,I,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(I=a.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var y,L,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    listboxOptions: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }, {
      label: 'Option 4',
      value: '4'
    }, {
      label: 'Option 5',
      value: '5'
    }],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: value => console.log('Selected:', value)
  }
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var O,M,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    listboxShowIcons: true,
    listboxDefaultIcon: '📄',
    listboxOptions: [{
      label: 'Documents',
      value: 'docs'
    }, {
      label: 'Images',
      value: 'images',
      icon: '🖼️'
    }, {
      label: 'Videos',
      value: 'videos',
      icon: '🎥'
    }, {
      label: 'Music',
      value: 'music',
      icon: '🎵'
    }, {
      label: 'Downloads',
      value: 'downloads'
    }],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: value => console.log('Selected:', value)
  }
}`,...(B=(M=c.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var W,A,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    listboxShowIcons: false,
    // Global setting is false
    listboxOptions: [{
      label: 'Home',
      value: 'home',
      showIcon: true,
      icon: '🏠'
    }, {
      label: 'Profile',
      value: 'profile'
    },
    // No icon
    {
      label: 'Settings',
      value: 'settings',
      showIcon: true,
      icon: '⚙️'
    }, {
      label: 'Help',
      value: 'help'
    },
    // No icon
    {
      label: 'Logout',
      value: 'logout',
      showIcon: true,
      icon: '🚪'
    }],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: value => console.log('Selected:', value)
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,z,V;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    type: 'with-scrollbar',
    listboxOptions: Array.from({
      length: 15
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`option-\${i + 1}\`,
      helpText: i % 3 === 0 ? \`This is help text for option \${i + 1}\` : undefined
    })),
    listboxMaxItems: 6,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxSelect: value => console.log('Selected:', value)
  }
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var N,_,$;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    type: 'with-scrollbar',
    listboxShowIcons: true,
    listboxOptions: [
    // Recent Files Section
    {
      label: 'Document.pdf',
      value: 'doc1',
      icon: '📄',
      helpText: 'Modified 2 hours ago'
    }, {
      label: 'Presentation.pptx',
      value: 'pres1',
      icon: '📊',
      helpText: 'Modified 1 day ago'
    }, {
      label: 'Spreadsheet.xlsx',
      value: 'sheet1',
      icon: '📈',
      helpText: 'Modified 3 days ago'
    },
    // Favorites Section  
    {
      label: 'Project Plans',
      value: 'fav1',
      icon: '⭐',
      divider: true
    }, {
      label: 'Team Photos',
      value: 'fav2',
      icon: '⭐'
    }, {
      label: 'Budget 2024',
      value: 'fav3',
      icon: '⭐'
    },
    // Applications Section
    {
      label: 'Calculator',
      value: 'app1',
      icon: '🧮',
      divider: true
    }, {
      label: 'Calendar',
      value: 'app2',
      icon: '📅'
    }, {
      label: 'Notes',
      value: 'app3',
      icon: '📝'
    }, {
      label: 'Weather',
      value: 'app4',
      icon: '🌤️'
    }, {
      label: 'Music Player',
      value: 'app5',
      icon: '🎵'
    }, {
      label: 'Photo Editor',
      value: 'app6',
      icon: '🖼️'
    }, {
      label: 'Video Player',
      value: 'app7',
      icon: '🎬'
    }, {
      label: 'Terminal',
      value: 'app8',
      icon: '💻'
    }, {
      label: 'Text Editor',
      value: 'app9',
      icon: '📄'
    }, {
      label: 'Web Browser',
      value: 'app10',
      icon: '🌐'
    }, {
      label: 'File Manager',
      value: 'app11',
      icon: '📁'
    }, {
      label: 'System Settings',
      value: 'app12',
      icon: '⚙️'
    }],
    listboxMaxItems: 8,
    side: 'bottom',
    align: 'start',
    showArrow: true,
    margin: 'small',
    onListboxSelect: value => console.log('Selected:', value)
  }
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,R,F;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    useListbox: true,
    listboxMultiple: true,
    listboxSelectedValue: ['1', '3'],
    listboxOptions: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }, {
      label: 'Option 4',
      value: '4'
    }, {
      label: 'Option 5',
      value: '5'
    }],
    listboxMaxItems: 5,
    side: 'bottom',
    align: 'center',
    showArrow: true,
    onListboxMultiSelect: values => console.log('Selected values:', values)
  }
}`,...(F=(R=b.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var k,q,U;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Popover content="No margin" margin="none">
        <Button>No Margin</Button>
      </Popover>
      
      <Popover content="Small margin" margin="small">
        <Button>Small</Button>
      </Popover>
      
      <Popover content="Medium margin (default)" margin="medium">
        <Button>Medium</Button>
      </Popover>
      
      <Popover content="Large margin" margin="large">
        <Button>Large</Button>
      </Popover>
      
      <Popover content="Custom 20px margin" margin={20}>
        <Button>Custom (20px)</Button>
      </Popover>
    </div>
}`,...(U=(q=m.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var Y,G,J;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Popover useListbox margin="none" listboxOptions={[{
      label: 'Compact Option 1',
      value: '1'
    }, {
      label: 'Compact Option 2',
      value: '2'
    }, {
      label: 'Compact Option 3',
      value: '3'
    }]} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>No Margin Listbox</Button>
      </Popover>
      
      <Popover useListbox margin={10} listboxShowIcons listboxDefaultIcon="⭐" listboxOptions={[{
      label: 'Custom Margin 1',
      value: '1'
    }, {
      label: 'Custom Margin 2',
      value: '2'
    }, {
      label: 'Custom Margin 3',
      value: '3'
    }]} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>Custom Margin</Button>
      </Popover>
    </div>
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Popover useListbox listboxItemPaddingVertical={8} listboxItemPaddingHorizontal={12} listboxOptions={[{
      label: 'Compact Item 1',
      value: '1'
    }, {
      label: 'Compact Item 2',
      value: '2'
    }, {
      label: 'Compact Item 3',
      value: '3'
    }]} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>Compact Padding</Button>
      </Popover>
      
      <Popover useListbox listboxItemPaddingVertical={20} listboxItemPaddingHorizontal={24} listboxShowIcons listboxDefaultIcon="📄" listboxOptions={[{
      label: 'Spacious Item 1',
      value: '1'
    }, {
      label: 'Spacious Item 2',
      value: '2'
    }, {
      label: 'Spacious Item 3',
      value: '3'
    }]} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>Spacious Padding</Button>
      </Popover>
      
      <Popover useListbox listboxItemPaddingVertical={4} listboxItemPaddingHorizontal={32} listboxShowIcons listboxOptions={[{
      label: 'Narrow Height',
      value: '1',
      icon: '🔥'
    }, {
      label: 'Wide Sides',
      value: '2',
      icon: '⚡'
    }, {
      label: 'Custom Shape',
      value: '3',
      icon: '🎯'
    }]} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>Custom Shape</Button>
      </Popover>
      
      <Popover useListbox type="with-scrollbar" listboxItemPaddingVertical={16} listboxItemPaddingHorizontal={20} listboxMaxItems={5} listboxShowIcons listboxOptions={Array.from({
      length: 12
    }, (_, i) => ({
      label: \`Padded Option \${i + 1}\`,
      value: \`option-\${i + 1}\`,
      icon: i % 3 === 0 ? '📁' : i % 3 === 1 ? '📄' : '🖼️',
      helpText: i % 4 === 0 ? \`Help text for option \${i + 1}\` : undefined
    }))} onListboxSelect={value => console.log('Selected:', value)}>
        <Button>Scrollable Custom Padding</Button>
      </Popover>
    </div>
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(oe=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
                <Button variant="secondary" size="micro">Cancel</Button>
              </PopoverClose>
              <PopoverClose asChild>
                <Button size="micro">Confirm</Button>
              </PopoverClose>
            </div>
          </div>}>
        <Button>With Buttons</Button>
      </Popover>

      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button>Custom Composition</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={5}>
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
}`,...(le=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const pe=["Default","WithScrollbar","WithListbox","WithListboxIcons","WithMixedIcons","WithScrollableListbox","EnhancedScrollableDropdown","WithMultipleSelection","CustomMargins","ListboxWithCustomMargins","ListboxWithCustomPadding","Different_Positions","Compositions"],me=Object.freeze(Object.defineProperty({__proto__:null,Compositions:g,CustomMargins:m,Default:s,Different_Positions:v,EnhancedScrollableDropdown:d,ListboxWithCustomMargins:x,ListboxWithCustomPadding:h,WithListbox:r,WithListboxIcons:c,WithMixedIcons:p,WithMultipleSelection:b,WithScrollableListbox:u,WithScrollbar:a,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{g as C,s as D,d as E,x as L,me as P,a as W,v as a,r as b,c,p as d,u as e,b as f,m as g,h};
