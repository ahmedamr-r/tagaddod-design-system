import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as o}from"./index-BqIVwv1J.js";import{M as l,C as i,A as a}from"./index-BCgJJ4rA.js";import{T as s,F as c,D as d,a as h,G as x,R as j,b as m,C as g,N as u,W as p,L as f}from"./ThemeProvider.stories-Do5Y-w_U.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./ThemeProvider-BLGS4FWZ.js";import"./Button-CoP_mZBT.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-CKk3lApD.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(n.h1,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," is a context provider that manages theme, direction, locale, and typography preferences throughout the application. It enables runtime switching between brands (Tagaddod/GreenPan), text directions (LTR/RTL), locales (en/ar), and ",e.jsx(n.strong,{children:"automatically switches fonts"})," between Outfit (English) and Tajawal (Arabic) without requiring a page reload."]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," is a foundational component of the Tagaddod Design System that provides comprehensive theming capabilities across the entire component library. It:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Applies brand-specific design tokens"}),`
`,e.jsx(n.li,{children:"✅ Handles Right-to-Left (RTL) text direction"}),`
`,e.jsx(n.li,{children:"✅ Manages locale settings with automatic font switching"}),`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Switches between Outfit (English) and Tajawal (Arabic) fonts"})]}),`
`,e.jsx(n.li,{children:"✅ Persists user preferences in localStorage"}),`
`,e.jsx(n.li,{children:"✅ Provides hooks for descendants to access and modify theme state"}),`
`]}),`
`,e.jsx(n.h2,{id:"font-system-architecture",children:"Font System Architecture"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," includes an intelligent ",e.jsx(n.strong,{children:"bilingual font system"})," that automatically switches fonts based on language:"]}),`
`,e.jsx(n.h3,{id:"english-ltr",children:"English (LTR)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Family"}),": Outfit (sans-serif)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Weights"}),": 400 (regular), 500 (medium), 600 (semibold), 700 (bold)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Selector"}),": ",e.jsx(n.code,{children:'html[lang="en"]'})]}),`
`]}),`
`,e.jsx(n.h3,{id:"arabic-rtl",children:"Arabic (RTL)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Family"}),": Tajawal (sans-serif)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Weights"}),": 500 (regular), 700 (medium/semibold/bold)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Selector"}),": ",e.jsx(n.code,{children:'html[lang="ar"]'})]}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider, useTheme, useThemeClasses } from '@tagaddod-design/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["Wrap your application with the ",e.jsx(n.code,{children:"ThemeProvider"})," to enable theme and font support:"]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider>
      <YourApplication />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"theme-options",children:"Theme Options"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," supports two brands with identical font behavior:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tagaddod"}),": The primary brand (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GreenPan"}),": Secondary brand with its own color palette"]}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Explicitly set Tagaddod theme (though it's the default)
<ThemeProvider defaultTheme="tagaddod">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Set GreenPan theme - fonts work the same way
<ThemeProvider defaultTheme="greenpan">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"direction-locale-and-font-switching",children:"Direction, Locale, and Font Switching"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"})," supports both Left-to-Right (LTR) and Right-to-Left (RTL) text directions, with ",e.jsx(n.strong,{children:"automatic font switching"}),":"]}),`
`,e.jsx(n.h3,{id:"ltr-mode-english",children:"LTR Mode (English)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Direction"}),": ",e.jsx(n.code,{children:"ltr"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale"}),": ",e.jsx(n.code,{children:"en"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font"}),": Outfit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usage"}),": Used for English content (default)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"rtl-mode-arabic",children:"RTL Mode (Arabic)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Direction"}),": ",e.jsx(n.code,{children:"rtl"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale"}),": ",e.jsx(n.code,{children:"ar"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font"}),": Tajawal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Usage"}),": Used for Arabic content"]}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Set RTL direction - automatically switches to Tajawal font
<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"typography-examples",children:"Typography Examples"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.p,{children:"The font switching happens automatically when you change direction. Notice how:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"English text"})," renders with the ",e.jsx(n.strong,{children:"Outfit"})," font family"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arabic text"})," renders with the ",e.jsx(n.strong,{children:"Tajawal"})," font family"]}),`
`,e.jsx(n.li,{children:"Font weights are adjusted for optimal readability in each language"}),`
`]}),`
`,e.jsx(n.h2,{id:"how-font-switching-works",children:"How Font Switching Works"}),`
`,e.jsx(n.h3,{id:"1-html-language-attribute",children:"1. HTML Language Attribute"}),`
`,e.jsxs(n.p,{children:["The provider sets the ",e.jsx(n.code,{children:"lang"})," attribute on the ",e.jsx(n.code,{children:"<html>"})," element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- English Mode -->
<html lang="en" dir="ltr">

<!-- Arabic Mode -->
<html lang="ar" dir="rtl">
`})}),`
`,e.jsx(n.h3,{id:"2-css-font-selectors",children:"2. CSS Font Selectors"}),`
`,e.jsx(n.p,{children:"Locale-specific CSS files contain font overrides:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* English font (en.css) */
html[lang="en"] {
  --t-font-family-primary: Outfit, sans-serif;
  --t-font-weight-regular: 400;
  --t-font-weight-medium: 500;
  --t-font-weight-semibold: 600;
  --t-font-weight-bold: 700;
}

/* Arabic font (ar.css) */
html[lang="ar"] {
  --t-font-family-primary: Tajawal, sans-serif;
  --t-font-weight-regular: 500;
  --t-font-weight-medium: 700;
  --t-font-weight-semibold: 700;
  --t-font-weight-bold: 700;
}
`})}),`
`,e.jsx(n.h3,{id:"3-component-font-application",children:"3. Component Font Application"}),`
`,e.jsx(n.p,{children:"All components use the CSS variable:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.Button {
  font-family: var(--t-font-family-primary);
  font-weight: var(--t-font-weight-medium);
}
`})}),`
`,e.jsx(n.h3,{id:"4-automatic-direction-locale-sync",children:"4. Automatic Direction-Locale Sync"}),`
`,e.jsx(n.p,{children:"Changing direction automatically updates locale and triggers font switching:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Inside ThemeProvider
useEffect(() => {
  const expectedLocale = getLocaleFromDirection(direction);
  if (locale !== expectedLocale) {
    setLocale(expectedLocale);
  }
}, [direction, locale]);
`})}),`
`,e.jsx(n.h2,{id:"persistent-storage",children:"Persistent Storage"}),`
`,e.jsxs(n.p,{children:["Theme preferences (including font/locale) are automatically stored in ",e.jsx(n.code,{children:"localStorage"}),":"]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Use a custom localStorage key
<ThemeProvider storageKey="my-app-theme-preferences">
  <YourApplication />
</ThemeProvider>
`})}),`
`,e.jsx(n.p,{children:"The stored preferences include:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "theme": "tagaddod",
  "direction": "rtl", 
  "locale": "ar"
}
`})}),`
`,e.jsx(n.h2,{id:"nested-providers",children:"Nested Providers"}),`
`,e.jsxs(n.p,{children:["You can nest ",e.jsx(n.code,{children:"ThemeProvider"}),"s to apply different themes/fonts to specific sections:"]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ThemeProvider defaultTheme="tagaddod" defaultDirection="ltr">
  {/* Outer content uses Tagaddod theme + Outfit font */}
  <Header />
  <MainContent />
  
  {/* A specific section uses GreenPan theme + Tajawal font */}
  <ThemeProvider defaultTheme="greenpan" defaultDirection="rtl">
    <GreenPanSection /> {/* This will use Arabic font */}
  </ThemeProvider>
  
  <Footer />
</ThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usetheme",children:"useTheme"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTheme"})," hook provides access to the current theme context and methods to update it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';

function ThemeSwitcher() {
  const { 
    theme,         // Current theme ('tagaddod' | 'greenpan')
    setTheme,      // Function to update theme
    direction,     // Current direction ('ltr' | 'rtl')
    setDirection,  // Function to update direction (triggers font switch)
    locale,        // Current locale ('en' | 'ar')
    setLocale      // Function to update locale (triggers font switch)
  } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('tagaddod')}>Tagaddod</button>
      <button onClick={() => setTheme('greenpan')}>GreenPan</button>
      
      <p>Font: {locale === 'en' ? 'Outfit' : 'Tajawal'}</p>
      <button onClick={() => setDirection('ltr')}>English (Outfit)</button>
      <button onClick={() => setDirection('rtl')}>Arabic (Tajawal)</button>
    </div>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"usethemeclasses",children:"useThemeClasses"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useThemeClasses"})," hook returns CSS class names and other utility values for theme-based styling:"]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useThemeClasses } from '@tagaddod-design/react';

function ThemedComponent() {
  const { 
    theme,         // Current theme value
    direction,     // Current direction value
    locale,        // Current locale value ('en' = Outfit, 'ar' = Tajawal)
    isRTL,         // Boolean: true if direction is 'rtl'
    themeClass,    // CSS class for current theme (e.g., 'theme-tagaddod')
    dirClass,      // CSS class for direction (e.g., 'dir-ltr')
    localeClass    // CSS class for locale (e.g., 'locale-en')
  } = useThemeClasses();
  
  const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
  
  return (
    <div className={\`my-component \${themeClass} \${dirClass}\`}>
      <p>Current font: {currentFont}</p>
      {/* Component content */}
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"languagefont-switcher-demo",children:"Language/Font Switcher Demo"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function LanguageFontSwitcher() {
  const { locale, direction, setDirection } = useTheme();
  
  const switchLanguage = () => {
    // Direction change will automatically update locale and font
    setDirection(locale === 'en' ? 'rtl' : 'ltr');
  };
  
  const currentFont = locale === 'en' ? 'Outfit' : 'Tajawal';
  
  return (
    <div>
      <p>Current: {locale === 'en' ? 'English' : 'Arabic'} ({currentFont})</p>
      <button onClick={switchLanguage}>
        {locale === 'en' ? 'العربية (Tajawal)' : 'English (Outfit)'}
      </button>
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"typography-best-practices",children:"Typography Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Always use CSS variables"})," for font properties to enable automatic switching:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✅ Good - automatically switches fonts */
.element {
  font-family: var(--t-font-family-primary);
  font-weight: var(--t-font-weight-medium);
}

/* ❌ Bad - hardcoded font won't switch */
.element {
  font-family: Outfit, sans-serif;
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test typography in both languages"})," to ensure readability and visual balance"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use semantic font weight tokens"})," rather than numeric values"]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"general-best-practices",children:"General Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Always use the ",e.jsx(n.code,{children:"ThemeProvider"})," at the root level"]})," of your application"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use logical CSS properties"})," for directional styles to support RTL languages:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* ✅ Good - automatically flips in RTL */
.element {
  margin-inline-start: 16px;
}

/* ❌ Bad - doesn't change in RTL */
.element {
  margin-left: 16px;
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test components in all combinations"}),": Both themes, directions, and fonts"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Avoid directly manipulating HTML attributes"}),"; use the provided context methods"]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"font-not-switching",children:"Font Not Switching"}),`
`,e.jsx(n.p,{children:"If fonts aren't switching properly:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Check HTML ",e.jsx(n.code,{children:"lang"})," attribute"]}),": Verify it's set to ",e.jsx(n.code,{children:"en"})," or ",e.jsx(n.code,{children:"ar"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verify CSS imports"}),": Ensure locale-specific CSS files are imported"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check font loading"}),": Verify both Outfit and Tajawal are loaded in document head"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inspect CSS variables"}),": Use DevTools to check ",e.jsx(n.code,{children:"--t-font-family-primary"})," value"]}),`
`]}),`
`,e.jsx(n.h3,{id:"rtl-layout-issues",children:"RTL Layout Issues"}),`
`,e.jsx(n.p,{children:"For RTL layout problems:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use logical properties"}),": Replace ",e.jsx(n.code,{children:"margin-left"})," with ",e.jsx(n.code,{children:"margin-inline-start"})]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Check ",e.jsx(n.code,{children:"dir"})," attribute"]}),": Should be ",e.jsx(n.code,{children:"rtl"})," for Arabic content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test text alignment"}),": Use ",e.jsx(n.code,{children:"text-align: start"})," instead of ",e.jsx(n.code,{children:"text-align: left"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"related",children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/tokens-intro--documentation",children:"Design Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/typography-intro--documentation",children:"Typography System"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/i18n-intro--documentation",children:"Internationalization"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/styles-intro--documentation",children:"Global Styles"})}),`
`]})]})}function k(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
