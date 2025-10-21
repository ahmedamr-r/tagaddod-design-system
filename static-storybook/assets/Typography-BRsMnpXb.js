import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as o}from"./index-BCgJJ4rA.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Foundation/Typography"}),`
`,n.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,n.jsx(e.p,{children:"The Tagaddod Design System uses Google Fonts for consistent typography across all implementations. Fonts are loaded via Google's CDN for optimal performance and global availability."}),`
`,n.jsx(e.h2,{id:"font-families",children:"Font Families"}),`
`,n.jsx(e.p,{children:"The design system uses two main font families:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Outfit"})," - Used for Latin/English (LTR) text"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clean, modern sans-serif font"}),`
`,n.jsx(e.li,{children:"Weights: Regular (400), Medium (500), SemiBold (600), and Bold (700)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tajawal"})," - Used for Arabic (RTL) text"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Elegant Arabic typeface with excellent readability"}),`
`,n.jsx(e.li,{children:"Weights: Regular (400), Medium (500), and Bold (700)"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"automatic-font-selection",children:"Automatic Font Selection"}),`
`,n.jsx(e.p,{children:"The ThemeProvider automatically selects the appropriate font based on the current direction:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"In LTR mode (English): Outfit is used as the primary font"}),`
`,n.jsx(e.li,{children:"In RTL mode (Arabic): Tajawal is used as the primary font"}),`
`]}),`
`,n.jsx(e.h2,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The font families are exposed as CSS variables:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Default variable (changes based on direction) */
--t-font-family-primary: 'Outfit', system-ui, sans-serif;  /* in LTR mode */
--t-font-family-primary: 'Tajawal', system-ui, sans-serif; /* in RTL mode */

/* Specific font family variables */
--t-font-family-arabic: 'Tajawal', system-ui, sans-serif;
`})}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"google-fonts-loading",children:"Google Fonts Loading"}),`
`,n.jsx(e.p,{children:"To use the Tagaddod Design System fonts, include the Google Fonts link in your HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
`})}),`
`,n.jsx(e.p,{children:"This loads both Outfit and Tajawal fonts with all the required weights."}),`
`,n.jsx(e.h3,{id:"css-font-definitions",children:"CSS Font Definitions"}),`
`,n.jsx(e.p,{children:"The CSS in the design system references these loaded fonts:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Font family definitions using Google Fonts */
:root {
  --t-font-family-primary: 'Outfit', system-ui, sans-serif;
  --t-font-family-arabic: 'Tajawal', system-ui, sans-serif;
}

/* Apply Arabic font when direction is RTL */
[dir="rtl"] {
  --t-font-family-primary: 'Tajawal', system-ui, sans-serif;
}
`})}),`
`,n.jsx(e.h2,{id:"usage-in-projects",children:"Usage in Projects"}),`
`,n.jsx(e.h3,{id:"include-google-fonts",children:"Include Google Fonts"}),`
`,n.jsx(e.p,{children:"First, add the Google Fonts link to your HTML head:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<head>
  <!-- Other head elements -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
</head>
`})}),`
`,n.jsx(e.h3,{id:"import-the-styles",children:"Import the Styles"}),`
`,n.jsx(e.p,{children:"Then import the design system styles:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Import the design system styles
import '@tagaddod-design/react/styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <div>Your application content</div>
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"switching-languages",children:"Switching Languages"}),`
`,n.jsx(e.p,{children:"When you switch between LTR and RTL modes, the font family will automatically switch:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// English with Outfit font
<ThemeProvider defaultDirection="ltr">
  <Button>Submit</Button>
</ThemeProvider>

// Arabic with Tajawal font
<ThemeProvider defaultDirection="rtl">
  <Button>إرسال</Button>
</ThemeProvider>
`})}),`
`,n.jsx(e.h2,{id:"benefits-of-google-fonts",children:"Benefits of Google Fonts"}),`
`,n.jsx(e.p,{children:"Using Google Fonts provides several benefits:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global CDN"}),": Fast loading times across different regions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Updates"}),": Font improvements are automatically applied"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Optimal Performance"}),": Google's CDN uses modern compression and browser caching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Wide Browser Support"}),": Works across all modern browsers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dynamic Subsetting"}),": Only the character sets needed are loaded"]}),`
`]}),`
`,n.jsx(e.h2,{id:"typography-best-practices",children:"Typography Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use the design system's typography tokens"})," rather than setting font properties directly"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Let the ThemeProvider handle direction changes"})," rather than manually changing fonts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test both LTR and RTL layouts"})," to ensure good typography in both languages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Don't override the font-family"})," in your application to maintain design consistency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use the font-display: swap"})," attribute (already included in Google Fonts) to prevent FOUT (Flash of Unstyled Text)"]}),`
`]})]})}function f(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{f as default};
