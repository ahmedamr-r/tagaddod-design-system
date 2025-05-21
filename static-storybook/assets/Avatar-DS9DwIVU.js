import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-DI2gBlDf.js";import{M as c,A as d,C as i}from"./index-BPXrzZIR.js";import{A as h,a as p,W as s,b as r,c as t,S as x,d as m,e as j}from"./Avatar.stories-DwsGWBXi.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CfQheYXo.js";import"./index-DZCApzUK.js";import"./clsx-B-dksMZM.js";import"./IconUser-C1LEUmMM.js";import"./createReactComponent-GuN14Mgc.js";function l(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(n.h1,{id:"avatar-component",children:"Avatar Component"}),`
`,e.jsx(n.p,{children:"The Avatar component displays a user's profile picture, initials, or a fallback icon when no image or initial is available."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The Avatar component is used to represent people in the interface, displaying either a profile image, the user's initial, or a generic user icon as a fallback. It supports multiple sizes and handles image loading states."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Avatar } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  alt="User profile picture"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-initial",children:"With Initial"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="initial"
  initial="U"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-fallback-icon",children:"With Fallback Icon"}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar type="icon" />
`})}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"The Avatar component supports three types:"}),`
`,e.jsx(n.h3,{id:"image-avatar",children:"Image Avatar"}),`
`,e.jsx(n.p,{children:"Displays a user's profile picture."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  alt="User profile picture"
/>
`})}),`
`,e.jsx(n.h3,{id:"initial-avatar",children:"Initial Avatar"}),`
`,e.jsx(n.p,{children:"Displays the first letter of a user's name."}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="initial"
  initial="U"
/>
`})}),`
`,e.jsx(n.h3,{id:"icon-avatar",children:"Icon Avatar"}),`
`,e.jsx(n.p,{children:"Displays a default user icon when no image or initial is available."}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar type="icon" />
`})}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"The Avatar component comes in four sizes:"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar size="sm" type="initial" initial="S" />
<Avatar size="md" type="initial" initial="M" />
<Avatar size="lg" type="initial" initial="L" />
<Avatar size="xl" type="initial" initial="X" />
`})}),`
`,e.jsxs(n.p,{children:[`| Size | Dimensions | Use Case |
|------|------------|----------|
| `,e.jsx(n.code,{children:"sm"}),` | 24px | Dense UI elements, compact lists |
| `,e.jsx(n.code,{children:"md"}),` | 32px | Default size, most UI contexts |
| `,e.jsx(n.code,{children:"lg"}),` | 40px | Featured content, headers |
| `,e.jsx(n.code,{children:"xl"})," | 64px | Profile pages, detailed views |"]}),`
`,e.jsx(n.h2,{id:"handling-image-loading-and-errors",children:"Handling Image Loading and Errors"}),`
`,e.jsx(n.p,{children:"The Avatar component automatically handles image loading states and errors:"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://invalid-image-url.com/not-found.jpg"
  alt="User profile with fallback"
  // Will show fallback icon after 600ms
/>
`})}),`
`,e.jsxs(n.p,{children:["You can customize the delay before showing the fallback with the ",e.jsx(n.code,{children:"delayMs"})," prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://example.com/profile.jpg"
  alt="User profile"
  delayMs={1000} // Wait 1 second before showing fallback
/>
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"The Avatar component properly handles Right-to-Left (RTL) languages automatically for initial-type avatars by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Applying appropriate line height for Arabic text"}),`
`,e.jsx(n.li,{children:"Ensuring correct vertical alignment of initials"}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div dir="rtl">
  <Avatar 
    type="initial"
    initial="أ"
  />
</div>
`})}),`
`,e.jsx(n.h2,{id:"use-cases",children:"Use Cases"}),`
`,e.jsx(n.h3,{id:"user-profiles",children:"User Profiles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
  <Avatar 
    type="image"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    alt="User profile"
    size="lg"
  />
  <div>
    <h3>John Doe</h3>
    <p>Product Manager</p>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"comment-sections",children:"Comment Sections"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
  <Avatar 
    type="initial"
    initial="J"
    size="md"
  />
  <div>
    <p><strong>John Doe</strong> • 2 hours ago</p>
    <p>This looks great! I'm excited to try it out.</p>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"user-lists",children:"User Lists"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ul style={{ listStyle: 'none', padding: 0 }}>
  {users.map(user => (
    <li key={user.id} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
      <Avatar 
        type={user.avatar ? "image" : "initial"}
        src={user.avatar}
        initial={user.name.charAt(0)}
        size="sm"
      />
      <span>{user.name}</span>
    </li>
  ))}
</ul>
`})}),`
`,e.jsx(n.h3,{id:"avatar-groups",children:"Avatar Groups"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ display: 'flex' }}>
  {users.slice(0, 3).map((user, index) => (
    <div
      key={user.id}
      style={{ marginLeft: index === 0 ? 0 : '-8px' }}
    >
      <Avatar 
        type={user.avatar ? "image" : "initial"}
        src={user.avatar}
        initial={user.name.charAt(0)}
        size="md"
      />
    </div>
  ))}
  {users.length > 3 && (
    <div style={{ marginLeft: '-8px' }}>
      <Avatar 
        type="initial"
        initial={\`+\${users.length - 3}\`}
        size="md"
      />
    </div>
  )}
</div>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Include meaningful ",e.jsx(n.code,{children:"alt"})," text for image avatars to describe the user"]}),`
`,e.jsx(n.li,{children:"The component uses Radix UI's Avatar primitive, which provides accessible fallbacks"}),`
`,e.jsx(n.li,{children:"Initial avatars are properly labeled for screen readers through the Avatar implementation"}),`
`,e.jsx(n.li,{children:"Focus states are properly managed for keyboard navigation"}),`
`,e.jsx(n.li,{children:"Color contrast meets WCAG standards for readability of initials"}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The Avatar component uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-size-*"}),` | Dimensions for different avatar sizes |
| `,e.jsx(n.code,{children:"--t-border-radius-full"}),` | Circular border radius |
| `,e.jsx(n.code,{children:"--t-color-fill-brand-secondary"}),` | Background color for non-image avatars |
| `,e.jsx(n.code,{children:"--t-color-text-primary"}),` | Text color for initials |
| `,e.jsx(n.code,{children:"--t-font-family-primary"}),` | Font family for initial text |
| `,e.jsx(n.code,{children:"--t-font-weight-medium"}),` | Font weight for initial text |
| `,e.jsx(n.code,{children:"--t-font-size-*"}),` | Font sizes for different avatar sizes |
| `,e.jsx(n.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,e.jsx(n.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,e.jsx(n.h3,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"The component is built on Radix UI's Avatar component which provides:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Proper handling of image loading states"}),`
`,e.jsx(n.li,{children:"Automatic fallback rendering when images fail to load"}),`
`,e.jsx(n.li,{children:"Accessible implementation with proper ARIA attributes"}),`
`]}),`
`,e.jsx(n.p,{children:"The Tagaddod implementation extends this with:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Design system integration with tokens"}),`
`,e.jsx(n.li,{children:"Support for multiple sizes"}),`
`,e.jsx(n.li,{children:"Initial avatar option with proper text rendering"}),`
`,e.jsx(n.li,{children:"RTL language support"}),`
`,e.jsx(n.li,{children:"Consistent styling across all variants"}),`
`]}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(n.p,{children:"The Avatar component is compatible with all modern browsers and includes RTL language support."})]})}function S(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}export{S as default};
