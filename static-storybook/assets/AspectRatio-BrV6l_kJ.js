import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-DI2gBlDf.js";import{M as c,A as d,C as i}from"./index-BPXrzZIR.js";import{A as l,a as h,D as s,W as p,b as a,P as m,C as x}from"./AspectRatio.stories-DfzP2v9u.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(n.h1,{id:"aspectratio-component",children:"AspectRatio Component"}),`
`,e.jsx(n.p,{children:"The AspectRatio component maintains a consistent width-to-height ratio for its children, regardless of the container's dimensions."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The AspectRatio component is useful for maintaining consistent proportions for content like images, videos, maps, or embedded content. It ensures that content maintains its shape as its container resizes."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { AspectRatio } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={1}>
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--t-color-fill-brand)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--t-color-text-on-fill)',
  }}>
    1:1
  </div>
</AspectRatio>
`})}),`
`,e.jsx(n.h2,{id:"common-ratios",children:"Common Ratios"}),`
`,e.jsx(n.h3,{id:"11-square",children:"1:1 (Square)"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={1}>
  {/* Content */}
</AspectRatio>
`})}),`
`,e.jsx(n.h3,{id:"169-widescreen",children:"16:9 (Widescreen)"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={16/9}>
  {/* Content */}
</AspectRatio>
`})}),`
`,e.jsx(n.h3,{id:"43-standard",children:"4:3 (Standard)"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
  {/* Content */}
</AspectRatio>
`})}),`
`,e.jsx(n.h3,{id:"23-portrait",children:"2:3 (Portrait)"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={2/3}>
  {/* Content */}
</AspectRatio>
`})}),`
`,e.jsx(n.h2,{id:"use-cases",children:"Use Cases"}),`
`,e.jsx(n.h3,{id:"images-with-consistent-ratios",children:"Images with Consistent Ratios"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
  <img 
    src="https://placekitten.com/800/600" 
    alt="A kitten" 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover' 
    }} 
  />
</AspectRatio>
`})}),`
`,e.jsx(n.h3,{id:"cards-with-media",children:"Cards with Media"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{
  maxWidth: '400px',
  border: '1px solid var(--t-color-border-primary)',
  borderRadius: 'var(--t-border-radius-300)',
  overflow: 'hidden'
}}>
  <AspectRatio ratio={16/9}>
    <img 
      src="https://placekitten.com/1600/900" 
      alt="A cute kitten" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover' 
      }} 
    />
  </AspectRatio>
  <div style={{ padding: 'var(--t-space-300)' }}>
    <h3>Card with AspectRatio</h3>
    <p>This card uses the AspectRatio component to maintain a consistent 16:9 ratio for the image.</p>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"videos-and-embeds",children:"Videos and Embeds"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={16/9}>
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="Video"
    allowFullScreen
    style={{ 
      width: '100%', 
      height: '100%', 
      border: 'none' 
    }}
  />
</AspectRatio>
`})}),`
`,e.jsx(n.h3,{id:"maps",children:"Maps"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.575412963273!2d31.233882!3d30.044409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409d7064e783%3A0x5eeb83030d45206!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1652813095591!5m2!1sen!2sus" 
    title="Map"
    style={{ 
      width: '100%', 
      height: '100%', 
      border: 'none' 
    }}
  />
</AspectRatio>
`})}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:["The AspectRatio component accepts standard HTML div attributes such as ",e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"})," for customization."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AspectRatio 
  ratio={16/9}
  className="custom-container"
  style={{ 
    maxWidth: '600px',
    boxShadow: 'var(--t-shadow-200)',
    borderRadius: 'var(--t-border-radius-200)'
  }}
>
  {/* Content */}
</AspectRatio>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The AspectRatio component is a presentational wrapper that doesn't affect the accessibility of its children"}),`
`,e.jsx(n.li,{children:"Ensure that content placed inside AspectRatio (especially images) has appropriate alt text and ARIA attributes"}),`
`,e.jsx(n.li,{children:"For iframe content, always provide a descriptive title attribute"}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The AspectRatio component uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-border-radius-200"}),` | Border radius for the container |
| `,e.jsx(n.code,{children:"--t-duration-base"}),` | Duration for transitions |
| `,e.jsx(n.code,{children:"--t-easing-in-out"})," | Easing function for transitions |"]}),`
`,e.jsx(n.h3,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,e.jsx(n.p,{children:"The AspectRatio component has been designed with browser compatibility in mind:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Modern browsers: Uses the CSS ",e.jsx(n.code,{children:"aspect-ratio"})," property for simple, efficient aspect ratio control"]}),`
`,e.jsx(n.li,{children:`Legacy browsers: Falls back to the "padding-top hack" technique where the modern property isn't supported`}),`
`]}),`
`,e.jsx(n.p,{children:"The fallback is applied automatically through feature detection, providing consistent behavior across all supported browsers."}),`
`,e.jsx(n.h3,{id:"technical-implementation",children:"Technical Implementation"}),`
`,e.jsx(n.p,{children:"The AspectRatio component:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Checks for ",e.jsx(n.code,{children:"aspect-ratio"})," CSS support at runtime"]}),`
`,e.jsxs(n.li,{children:["For modern browsers, applies the ",e.jsx(n.code,{children:"aspect-ratio"})," CSS property directly"]}),`
`,e.jsx(n.li,{children:"For legacy browsers, calculates a percentage-based padding-top value based on the ratio (e.g., a 16:9 ratio becomes padding-top: 56.25%)"}),`
`,e.jsx(n.li,{children:"Ensures children are positioned correctly within the ratio container"}),`
`]}),`
`,e.jsx(n.p,{children:"This dual approach ensures the most efficient implementation is used when available, while maintaining support for older browsers."})]})}function N(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{N as default};
