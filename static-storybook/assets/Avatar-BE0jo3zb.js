import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as o}from"./index-BqIVwv1J.js";import{M as c,A as d,C as i}from"./index-BCgJJ4rA.js";import{A as h,W as r,a,b as t,S as p,c as x,d as j}from"./Avatar.stories-DN2JK_AU.js";import{A as m}from"./Avatar-BuzOK5mh.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D7-T4lOe.js";import"./index-DAnQV6hb.js";import"./clsx-B-dksMZM.js";import"./IconUser-CxX_vdyQ.js";import"./createReactComponent-CKk3lApD.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:h}),`
`,n.jsx(e.h1,{id:"realm-agent-navigation-index",children:"REALM AGENT NAVIGATION INDEX"}),`
`,n.jsx(e.p,{children:"Quick Reference for Claude Code Agents:"}),`
`,n.jsx(e.p,{children:"📦 IMPORT & SETUP (Lines 15-24)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Basic import pattern"}),`
`,n.jsx(e.li,{children:"Props documentation"}),`
`]}),`
`,n.jsx(e.p,{children:"🎯 BASIC USAGE (Lines 25-57)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"With Image (Lines 27-37): Profile pictures"}),`
`,n.jsx(e.li,{children:"With Initial (Lines 39-48): First letter display"}),`
`,n.jsx(e.li,{children:"With Fallback Icon (Lines 50-56): Default user icon"}),`
`]}),`
`,n.jsx(e.p,{children:"🎭 AVATAR TYPES (Lines 58-98)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image Avatar (Lines 62-74): User profile pictures"}),`
`,n.jsx(e.li,{children:"Initial Avatar (Lines 76-87): Name first letter"}),`
`,n.jsx(e.li,{children:"Icon Avatar (Lines 89-97): Default fallback"}),`
`]}),`
`,n.jsx(e.p,{children:"📏 SIZES (Lines 99-117)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Four sizes: sm (24px), md (32px), lg (40px), xl (64px)"}),`
`,n.jsx(e.li,{children:"Use cases and dimensions table"}),`
`]}),`
`,n.jsx(e.p,{children:"⚠️ ERROR HANDLING (Lines 119-143)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image loading states and fallbacks"}),`
`,n.jsx(e.li,{children:"Custom delay with delayMs prop"}),`
`,n.jsx(e.li,{children:"Automatic fallback behavior"}),`
`]}),`
`,n.jsx(e.p,{children:"🌍 INTERNATIONALIZATION (Lines 145-161)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"RTL language support"}),`
`,n.jsx(e.li,{children:"Arabic text handling"}),`
`,n.jsx(e.li,{children:"Proper alignment for all languages"}),`
`]}),`
`,n.jsx(e.p,{children:"💼 USE CASES (Lines 163-243)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"User Profiles (Lines 165-180): Profile displays"}),`
`,n.jsx(e.li,{children:"Comment Sections (Lines 182-196): Discussion threads"}),`
`,n.jsx(e.li,{children:"User Lists (Lines 198-214): Directory listings"}),`
`,n.jsx(e.li,{children:"Avatar Groups (Lines 216-243): Multiple user display"}),`
`]}),`
`,n.jsx(e.p,{children:"♿ ACCESSIBILITY (Lines 245-251)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alt text requirements"}),`
`,n.jsx(e.li,{children:"Radix UI accessibility features"}),`
`,n.jsx(e.li,{children:"Screen reader support"}),`
`]}),`
`,n.jsx(e.p,{children:"⚙️ TECHNICAL DETAILS (Lines 253-289)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"CSS Variables (Lines 255-269): Design tokens used"}),`
`,n.jsx(e.li,{children:"Architecture (Lines 271-285): Radix UI foundation"}),`
`,n.jsx(e.li,{children:"Browser Support (Lines 287-289)"}),`
`]}),`
`,n.jsx(e.p,{children:"QUICK IMPLEMENTATION EXAMPLES:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Image avatar: Lines 32-36 (type="image", src, alt)'}),`
`,n.jsx(e.li,{children:'Initial avatar: Lines 44-47 (type="initial", initial="U")'}),`
`,n.jsx(e.li,{children:'Icon avatar: Line 55 (type="icon")'}),`
`,n.jsx(e.li,{children:"Different sizes: Lines 106-109"}),`
`]}),`
`,n.jsx(e.p,{children:`⚠️ FALLBACK INSTRUCTION:
If you cannot find what you're looking for in the sections above,
read the ENTIRE document from start to finish to ensure complete
understanding of all Avatar component capabilities and patterns.`}),`
`,n.jsx(e.h1,{id:"avatar-component",children:"Avatar Component"}),`
`,n.jsx(e.p,{children:"The Avatar component displays a user's profile picture, initials, or a fallback icon when no image or initial is available."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Avatar component is used to represent people in the interface, displaying either a profile image, the user's initial, or a generic user icon as a fallback. It supports multiple sizes and handles image loading states."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Avatar } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{of:m}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.h3,{id:"with-image",children:"With Image"}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  alt="User profile picture"
/>
`})}),`
`,n.jsx(e.h3,{id:"with-initial",children:"With Initial"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="initial"
  initial="U"
/>
`})}),`
`,n.jsx(e.h3,{id:"with-fallback-icon",children:"With Fallback Icon"}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar type="icon" />
`})}),`
`,n.jsx(e.h2,{id:"types",children:"Types"}),`
`,n.jsx(e.p,{children:"The Avatar component supports three types:"}),`
`,n.jsx(e.h3,{id:"image-avatar",children:"Image Avatar"}),`
`,n.jsx(e.p,{children:"Displays a user's profile picture."}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  alt="User profile picture"
/>
`})}),`
`,n.jsx(e.h3,{id:"initial-avatar",children:"Initial Avatar"}),`
`,n.jsx(e.p,{children:"Displays the first letter of a user's name."}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="initial"
  initial="U"
/>
`})}),`
`,n.jsx(e.h3,{id:"icon-avatar",children:"Icon Avatar"}),`
`,n.jsx(e.p,{children:"Displays a default user icon when no image or initial is available."}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar type="icon" />
`})}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(e.p,{children:"The Avatar component comes in four sizes:"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar size="sm" type="initial" initial="S" />
<Avatar size="md" type="initial" initial="M" />
<Avatar size="lg" type="initial" initial="L" />
<Avatar size="xl" type="initial" initial="X" />
`})}),`
`,n.jsxs(e.p,{children:[`| Size | Dimensions | Use Case |
|------|------------|----------|
| `,n.jsx(e.code,{children:"sm"}),` | 24px | Dense UI elements, compact lists |
| `,n.jsx(e.code,{children:"md"}),` | 32px | Default size, most UI contexts |
| `,n.jsx(e.code,{children:"lg"}),` | 40px | Featured content, headers |
| `,n.jsx(e.code,{children:"xl"})," | 64px | Profile pages, detailed views |"]}),`
`,n.jsx(e.h2,{id:"handling-image-loading-and-errors",children:"Handling Image Loading and Errors"}),`
`,n.jsx(e.p,{children:"The Avatar component automatically handles image loading states and errors:"}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://invalid-image-url.com/not-found.jpg"
  alt="User profile with fallback"
  // Will show fallback icon after 600ms
/>
`})}),`
`,n.jsxs(e.p,{children:["You can customize the delay before showing the fallback with the ",n.jsx(e.code,{children:"delayMs"})," prop:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Avatar 
  type="image"
  src="https://example.com/profile.jpg"
  alt="User profile"
  delayMs={1000} // Wait 1 second before showing fallback
/>
`})}),`
`,n.jsx(e.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,n.jsxs(e.p,{children:["The Avatar component provides comprehensive Right-to-Left (RTL) language support when used with the ",n.jsx(e.code,{children:"ThemeProvider"}),". This includes automatic font switching, proper icon positioning, and Arabic text rendering."]}),`
`,n.jsx(e.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,n.jsxs(e.p,{children:["For full RTL support, wrap your application with ",n.jsx(e.code,{children:"ThemeProvider"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider, Avatar } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <Avatar 
        type="initial"
        initial="أ"
        size="lg"
      />
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,n.jsx(e.p,{children:"When RTL is enabled via ThemeProvider, the Avatar component automatically:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font for initial avatars"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Line Height"}),": Applies appropriate line height for Arabic text rendering in initial display"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout Direction"}),": Maintains proper positioning in RTL mode"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text Alignment"}),": Ensures proper vertical centering of Arabic initials"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fallback Behavior"}),": Consistent fallback handling in both LTR and RTL modes"]}),`
`]}),`
`,n.jsx(e.h3,{id:"arabic-initial-handling",children:"Arabic Initial Handling"}),`
`,n.jsx(e.p,{children:"The Avatar component handles Arabic initials with proper font and line height adjustments:"}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';

function UserAvatar({ user }) {
  const { isRTL } = useTheme();
  
  return (
    <Avatar 
      type={user.profileImage ? "image" : "initial"}
      src={user.profileImage}
      initial={isRTL ? user.arabicName?.charAt(0) : user.englishName?.charAt(0)}
      alt={isRTL ? \`صورة \${user.arabicName}\` : \`\${user.englishName}'s profile picture\`}
      size="md"
    />
  );
}
`})}),`
`,n.jsx(e.h3,{id:"rtl-layout-examples",children:"RTL Layout Examples"}),`
`,n.jsx(e.p,{children:"For user profiles in RTL layouts:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function UserProfile() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Avatar 
        type="initial"
        initial={isRTL ? "م" : "M"}
        size="lg"
      />
      <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
        <h3>{isRTL ? 'محمد أحمد' : 'Mohamed Ahmed'}</h3>
        <p>{isRTL ? 'مدير المنتج' : 'Product Manager'}</p>
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with actual Arabic content"})," to ensure proper text rendering and alignment"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider context-aware initials"})," - use Arabic names for Arabic initials in RTL mode"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Provide proper alt text"})," in the appropriate language for accessibility"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test avatar groups"})," in RTL mode to ensure proper spacing and alignment"]}),`
`]}),`
`,n.jsx(e.h2,{id:"use-cases",children:"Use Cases"}),`
`,n.jsx(e.h3,{id:"user-profiles",children:"User Profiles"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
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
`,n.jsx(e.h3,{id:"comment-sections",children:"Comment Sections"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
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
`,n.jsx(e.h3,{id:"user-lists",children:"User Lists"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<ul style={{ listStyle: 'none', padding: 0 }}>
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
`,n.jsx(e.h3,{id:"avatar-groups",children:"Avatar Groups"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div style={{ display: 'flex' }}>
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
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Include meaningful ",n.jsx(e.code,{children:"alt"})," text for image avatars to describe the user"]}),`
`,n.jsx(e.li,{children:"The component uses Radix UI's Avatar primitive, which provides accessible fallbacks"}),`
`,n.jsx(e.li,{children:"Initial avatars are properly labeled for screen readers through the Avatar implementation"}),`
`,n.jsx(e.li,{children:"Focus states are properly managed for keyboard navigation"}),`
`,n.jsx(e.li,{children:"Color contrast meets WCAG standards for readability of initials"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Avatar component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-size-*"}),` | Dimensions for different avatar sizes |
| `,n.jsx(e.code,{children:"--t-border-radius-full"}),` | Circular border radius |
| `,n.jsx(e.code,{children:"--t-color-fill-brand-secondary"}),` | Background color for non-image avatars |
| `,n.jsx(e.code,{children:"--t-color-text-primary"}),` | Text color for initials |
| `,n.jsx(e.code,{children:"--t-font-family-primary"}),` | Font family for initial text |
| `,n.jsx(e.code,{children:"--t-font-weight-medium"}),` | Font weight for initial text |
| `,n.jsx(e.code,{children:"--t-font-size-*"}),` | Font sizes for different avatar sizes |
| `,n.jsx(e.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,n.jsx(e.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,n.jsx(e.h3,{id:"architecture",children:"Architecture"}),`
`,n.jsx(e.p,{children:"The component is built on Radix UI's Avatar component which provides:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Proper handling of image loading states"}),`
`,n.jsx(e.li,{children:"Automatic fallback rendering when images fail to load"}),`
`,n.jsx(e.li,{children:"Accessible implementation with proper ARIA attributes"}),`
`]}),`
`,n.jsx(e.p,{children:"The Tagaddod implementation extends this with:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Design system integration with tokens"}),`
`,n.jsx(e.li,{children:"Support for multiple sizes"}),`
`,n.jsx(e.li,{children:"Initial avatar option with proper text rendering"}),`
`,n.jsx(e.li,{children:"RTL language support"}),`
`,n.jsx(e.li,{children:"Consistent styling across all variants"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Avatar component is compatible with all modern browsers and includes RTL language support."})]})}function z(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{z as default};
