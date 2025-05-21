import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DI2gBlDf.js";import{M as o,A as a,C as r}from"./index-BPXrzZIR.js";import{T as c,D as d,a as l,G as h,R as m,C as x,N as p,W as j}from"./ThemeProvider.stories-C9AFemeT.js";import{T as u}from"./ThemeProvider-Dmftu6TH.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-b6PCfnH9.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-GuN14Mgc.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," is a context provider that manages theme, direction, and locale preferences throughout the application. It enables runtime switching between brands (Tagaddod/GreenPan), text directions (LTR/RTL), and locales (en/ar) without requiring a page reload."]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," is a foundational component of the Tagaddod Design System that provides theming capabilities across the entire component library. It:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Applies brand-specific design tokens"}),`
`,e.jsx(n.li,{children:"Handles Right-to-Left (RTL) text direction"}),`
`,e.jsx(n.li,{children:"Manages locale settings"}),`
`,e.jsx(n.li,{children:"Persists user preferences in localStorage"}),`
`,e.jsx(n.li,{children:"Provides hooks for descendants to access and modify theme state"}),`
`]}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider, useTheme, useThemeClasses } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["Wrap your application with the ",e.jsx(n.code,{children:"ThemeProvider"})," to enable theme support:"]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider } from '@tagaddod/react';

function App() {
  return (
    <ThemeProvider>
      <YourApplication />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"theme-options",children:"Theme Options"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," supports two brands:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tagaddod"}),": The primary brand (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GreenPan"}),": Secondary brand with its own color palette"]}),`
`]}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Explicitly set Tagaddod theme (though it's the default)
<ThemeProvider defaultTheme="tagaddod">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Set GreenPan theme
<ThemeProvider defaultTheme="greenpan">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"direction-and-locale",children:"Direction and Locale"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," supports both Left-to-Right (LTR) and Right-to-Left (RTL) text directions, with corresponding locale settings:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LTR"}),": Used for English (en) content (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RTL"}),": Used for Arabic (ar) content"]}),`
`]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Set RTL direction and Arabic locale
<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"persistent-storage",children:"Persistent Storage"}),`
`,e.jsxs(n.p,{children:["Theme preferences are automatically stored in ",e.jsx(n.code,{children:"localStorage"})," to persist across page reloads. You can customize the storage key:"]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Use a custom localStorage key
<ThemeProvider storageKey="my-app-theme-preferences">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"nested-providers",children:"Nested Providers"}),`
`,e.jsxs(n.p,{children:["You can nest ",e.jsx(n.code,{children:"ThemeProvider"}),"s to apply different themes to specific sections of your application:"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
  {/* Outer content uses Tagaddod theme */}
  <Header />
  <MainContent />
  
  {/* A specific section uses GreenPan theme */}
  <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
    <GreenPanSection />
  </ThemeProvider>
  
  <Footer />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usetheme",children:"useTheme"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTheme"})," hook provides access to the current theme context and methods to update it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod/react';

function ThemeSwitcher() {
  const { 
    theme,         // Current theme ('tagaddod' | 'greenpan')
    setTheme,      // Function to update theme
    direction,     // Current direction ('ltr' | 'rtl')
    setDirection,  // Function to update direction
    locale,        // Current locale ('en' | 'ar')
    setLocale      // Function to update locale
  } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('tagaddod')}>Tagaddod</button>
      <button onClick={() => setTheme('greenpan')}>GreenPan</button>
      
      <p>Text direction: {direction}</p>
      <button onClick={() => setDirection('ltr')}>LTR</button>
      <button onClick={() => setDirection('rtl')}>RTL</button>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"usethemeclasses",children:"useThemeClasses"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useThemeClasses"})," hook returns CSS class names and other utility values for theme-based styling:"]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useThemeClasses } from '@tagaddod/react';

function ThemedComponent() {
  const { 
    theme,         // Current theme value
    direction,     // Current direction value
    locale,        // Current locale value
    isRTL,         // Boolean: true if direction is 'rtl'
    themeClass,    // CSS class for current theme (e.g., 'theme-tagaddod')
    dirClass,      // CSS class for direction (e.g., 'dir-ltr')
    localeClass    // CSS class for locale (e.g., 'locale-en')
  } = useThemeClasses();
  
  return (
    <div className={\`my-component \${themeClass} \${dirClass}\`}>
      {/* Component content */}
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," operates through several mechanisms:"]}),`
`,e.jsx(n.h3,{id:"1-html-attributes",children:"1. HTML Attributes"}),`
`,e.jsx(n.p,{children:"When the theme, direction, or locale changes, the provider updates the following HTML attributes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html data-theme="tagaddod" dir="ltr" data-locale="en">
`})}),`
`,e.jsx(n.h3,{id:"2-css-variables",children:"2. CSS Variables"}),`
`,e.jsxs(n.p,{children:["Theme-specific CSS variables with the ",e.jsx(n.code,{children:"--t-"})," prefix are applied via the ",e.jsx(n.code,{children:"data-theme"})," attribute:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* In your CSS */
[data-theme="tagaddod"] {
  --t-color-primary: #25b24b;
  /* other variables */
}

[data-theme="greenpan"] {
  --t-color-primary: #009f4d;
  /* other variables */
}
`})}),`
`,e.jsx(n.h3,{id:"3-direction-synchronization",children:"3. Direction Synchronization"}),`
`,e.jsxs(n.p,{children:["The provider automatically sets both the ",e.jsx(n.code,{children:"dir"})," attribute and the ",e.jsx(n.code,{children:"direction"})," property on the document:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document.documentElement.setAttribute('dir', direction);
document.dir = direction;
`})}),`
`,e.jsx(n.h3,{id:"4-locale-direction-coordination",children:"4. Locale-Direction Coordination"}),`
`,e.jsx(n.p,{children:"Changing the direction automatically updates the locale to match (RTL → Arabic, LTR → English):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Inside ThemeProvider
useEffect(() => {
  const expectedLocale = getLocaleFromDirection(direction);
  if (locale !== expectedLocale) {
    setLocale(expectedLocale);
  }
}, [direction, locale]);
`})}),`
`,e.jsx(n.h3,{id:"5-localstorage-persistence",children:"5. LocalStorage Persistence"}),`
`,e.jsxs(n.p,{children:["Theme preferences are stored in and retrieved from ",e.jsx(n.code,{children:"localStorage"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`localStorage.setItem(storageKey, JSON.stringify({ theme, direction, locale }));
`})}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs(n.p,{children:["All components should reference CSS variables with the ",e.jsx(n.code,{children:"--t-"})," prefix to enable theme switching:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.Button {
  background-color: var(--t-color-primary);
  color: var(--t-color-text-on-primary);
}
`})}),`
`,e.jsx(n.h3,{id:"theme-switching-mechanism",children:"Theme Switching Mechanism"}),`
`,e.jsxs(n.p,{children:["Theme switching works by changing the ",e.jsx(n.code,{children:"data-theme"})," attribute, which triggers CSS variable overrides:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," sets ",e.jsx(n.code,{children:'data-theme="greenpan"'})," on the ",e.jsx(n.code,{children:"<html>"})," element"]}),`
`,e.jsxs(n.li,{children:["CSS selectors like ",e.jsx(n.code,{children:'[data-theme="greenpan"]'})," apply GreenPan-specific variables"]}),`
`,e.jsxs(n.li,{children:["Components using ",e.jsx(n.code,{children:"var(--t-*)"})," automatically reflect the new values"]}),`
`]}),`
`,e.jsx(n.h3,{id:"rtl-support-pattern",children:"RTL Support Pattern"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"direction"})," state is synchronized with the ",e.jsx(n.code,{children:"dir"})," attribute, enabling:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["CSS logical properties (",e.jsx(n.code,{children:"margin-inline"}),", ",e.jsx(n.code,{children:"padding-inline-start"}),", etc.)"]}),`
`,e.jsx(n.li,{children:"Automatic text alignment and flow"}),`
`,e.jsx(n.li,{children:"Icon flipping through CSS transforms"}),`
`,e.jsx(n.li,{children:"Proper scrollbar positioning"}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," ensures accessibility by:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Setting the proper document ",e.jsx(n.code,{children:"dir"})," attribute for assistive technologies"]}),`
`,e.jsx(n.li,{children:"Maintaining proper text alignment in RTL mode"}),`
`,e.jsx(n.li,{children:"Preserving logical key navigation in RTL contexts"}),`
`,e.jsx(n.li,{children:"Providing programmatic access to current theme settings"}),`
`]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsx(n.h3,{id:"theme-toggle-button",children:"Theme Toggle Button"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button 
      onClick={() => setTheme(theme === 'tagaddod' ? 'greenpan' : 'tagaddod')}
      aria-label={\`Switch to \${theme === 'tagaddod' ? 'GreenPan' : 'Tagaddod'} theme\`}
    >
      {theme === 'tagaddod' ? 'Switch to GreenPan' : 'Switch to Tagaddod'}
    </button>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"language-switcher-with-direction",children:"Language Switcher with Direction"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function LanguageSwitcher() {
  const { locale, setDirection } = useTheme();
  
  const switchLanguage = () => {
    // Direction change will automatically update locale due to the internal effect
    setDirection(locale === 'en' ? 'rtl' : 'ltr');
  };
  
  return (
    <button onClick={switchLanguage}>
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"theme-aware-component",children:"Theme-Aware Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function ThemedCard({ children }) {
  const { theme } = useTheme();
  
  return (
    <div className="card">
      {theme === 'greenpan' && <GreenPanLogo className="card-logo" />}
      {theme === 'tagaddod' && <TagaddodLogo className="card-logo" />}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Always use the ",e.jsx(n.code,{children:"ThemeProvider"})," at the root level"]})," of your application to ensure consistent theming."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Reference theme values through CSS variables"})," rather than hardcoding colors or other visual properties."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use logical CSS properties"})," for directional styles to support RTL languages:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Good - automatically flips in RTL */
.element {
  margin-inline-start: 16px;
}

/* Bad - doesn't change in RTL */
.element {
  margin-left: 16px;
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test components in both themes and directions"})," to ensure they adapt correctly."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Avoid directly manipulating ",e.jsx(n.code,{children:"data-theme"})," or ",e.jsx(n.code,{children:"dir"})]})," attributes; use the provided context methods."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Consider nested providers carefully"})," - they can create confusing hierarchies that are hard to debug."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"browser-support",children:"Browser Support"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," works in all modern browsers that support:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"CSS Custom Properties (Variables)"}),`
`,e.jsx(n.li,{children:"CSS Logical Properties"}),`
`,e.jsx(n.li,{children:"Context API"}),`
`,e.jsx(n.li,{children:"localStorage"}),`
`]}),`
`,e.jsx(n.h2,{id:"related",children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/tokens-intro--documentation",children:"Design Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/styles-intro--documentation",children:"Global Styles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/i18n-intro--documentation",children:"Internationalization"})}),`
`]})]})}function A(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{A as default};
