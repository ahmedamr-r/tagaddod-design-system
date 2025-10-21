import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as d,C as e,A as a}from"./index-BCgJJ4rA.js";import{T as o,D as s,A as c,a as p,R as h,B as x,L as u,b as m,c as j,d as T,W as g,I as f,e as L,M as y,f as v,g as R}from"./Tooltip.stories-CWQyJiG8.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Tooltip-DU82b37Z.js";import"./index-DW48STyt.js";import"./index-D7-T4lOe.js";import"./index-CxljV1N8.js";import"./index-DAnQV6hb.js";import"./index-D5cGTUkh.js";import"./index-N3eucVg6.js";import"./index-BTe66ZhM.js";import"./index-DavpLpmr.js";import"./index-ComwvWTa.js";import"./clsx-B-dksMZM.js";import"./Button-CoP_mZBT.js";import"./createReactComponent-CKk3lApD.js";import"./IconSettings-cjygYtAZ.js";import"./IconHelp-DOQf5BnN.js";import"./IconAlertTriangle-CKuJFN8q.js";function l(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o}),`
`,n.jsx(i.h1,{id:"realm-agent-navigation-index",children:"REALM AGENT NAVIGATION INDEX"}),`
`,n.jsx(i.p,{children:"Quick Reference for Claude Code Agents:"}),`
`,n.jsx(i.p,{children:"🎯 BASIC USAGE (Lines 10-16)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Default tooltip implementation"}),`
`,n.jsx(i.li,{children:"Automatic positioning feature"}),`
`]}),`
`,n.jsx(i.p,{children:"📖 WHEN TO USE (Lines 18-30)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Icon-only buttons explanation"}),`
`,n.jsx(i.li,{children:"Form field context"}),`
`,n.jsx(i.li,{children:"Abbreviated text clarification"}),`
`,n.jsx(i.li,{children:"Truncated content display"}),`
`,n.jsx(i.li,{children:"Mobile considerations"}),`
`]}),`
`,n.jsx(i.p,{children:"📋 EXAMPLES (Lines 31-78)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Basic Usage (Line 33): Default implementation"}),`
`,n.jsx(i.li,{children:"Automatic Positioning (Line 37): Smart placement"}),`
`,n.jsx(i.li,{children:"Positioning (Lines 41-48): Top, Right, Bottom, Left"}),`
`,n.jsx(i.li,{children:"Alignment (Lines 50-56): Start, Center, End"}),`
`,n.jsx(i.li,{children:"With Icons (Lines 58-63): Icon buttons"}),`
`,n.jsx(i.li,{children:"Long Content (Line 67): Text wrapping"}),`
`,n.jsx(i.li,{children:"Multiple Tooltips (Line 71): Group usage"}),`
`,n.jsx(i.li,{children:"All Positions (Line 75): Complete showcase"}),`
`]}),`
`,n.jsx(i.p,{children:"🌍 RTL SUPPORT (Lines 79-83)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Right-to-left layout support"}),`
`,n.jsx(i.li,{children:"Text alignment and positioning"}),`
`]}),`
`,n.jsx(i.p,{children:"⚙️ IMPLEMENTATION (Lines 85-132)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"TooltipProvider (Lines 87-103): Required wrapper"}),`
`,n.jsx(i.li,{children:"Basic Tooltip (Lines 105-111): Auto-positioning"}),`
`,n.jsx(i.li,{children:"Custom Positioning (Lines 113-124): Side and alignment"}),`
`,n.jsx(i.li,{children:"Disabled State (Lines 126-132): Conditional display"}),`
`]}),`
`,n.jsx(i.p,{children:"♿ ACCESSIBILITY (Lines 134-140)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Screen reader announcements"}),`
`,n.jsx(i.li,{children:"Focus management"}),`
`,n.jsx(i.li,{children:"Content guidelines"}),`
`]}),`
`,n.jsx(i.p,{children:"📋 PROPS (Lines 142-143)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Component properties reference"}),`
`]}),`
`,n.jsx(i.p,{children:"🎨 DESIGN TOKENS (Lines 145-155)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"CSS variables and styling tokens"}),`
`,n.jsx(i.li,{children:"Background, text, typography"}),`
`,n.jsx(i.li,{children:"Spacing and border radius"}),`
`]}),`
`,n.jsx(i.p,{children:"QUICK IMPLEMENTATION EXAMPLES:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Basic tooltip: Lines 108-110"}),`
`,n.jsx(i.li,{children:"Custom position: Lines 116-123"}),`
`,n.jsx(i.li,{children:"With TooltipProvider: Lines 96-101"}),`
`,n.jsx(i.li,{children:"Icon button: Lines 58-63"}),`
`,n.jsx(i.li,{children:"RTL content: Line 83"}),`
`]}),`
`,n.jsx(i.p,{children:`⚠️ PROVIDER NOTE:
Tooltip requires TooltipProvider wrapper at application level to enable functionality. Always wrap your app or tooltip group with TooltipProvider.`}),`
`,n.jsx(i.p,{children:`⚠️ FALLBACK INSTRUCTION:
If you cannot find what you're looking for in the sections above,
read the ENTIRE document from start to finish to ensure complete
understanding of all Tooltip component capabilities and patterns.`}),`
`,n.jsx(i.h1,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(i.p,{children:"A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(i.p,{children:"Tooltips are used to provide additional context or helpful information about UI elements without cluttering the interface. They should be concise and appear quickly when users need them."}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Automatic Positioning"}),": By default, tooltips automatically position themselves based on available viewport space. You can optionally specify a preferred side if needed."]}),`
`,n.jsx(i.h3,{id:"when-to-use-tooltips",children:"When to use tooltips"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"To explain the purpose of icon-only buttons"}),`
`,n.jsx(i.li,{children:"To provide additional context for form fields"}),`
`,n.jsx(i.li,{children:"To clarify abbreviated text or technical terms"}),`
`,n.jsx(i.li,{children:"To show the full text when content is truncated"}),`
`]}),`
`,n.jsx(i.h3,{id:"when-not-to-use-tooltips",children:"When not to use tooltips"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"For critical information that users must see"}),`
`,n.jsx(i.li,{children:"On mobile devices where hover interactions don't exist"}),`
`,n.jsx(i.li,{children:"When the tooltip content is longer than a few sentences"}),`
`]}),`
`,n.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(i.h3,{id:"automatic-positioning",children:"Automatic Positioning"}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(i.h3,{id:"positioning",children:"Positioning"}),`
`,n.jsx(i.p,{children:"Tooltips can be positioned on any side of the trigger element:"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(i.h3,{id:"alignment",children:"Alignment"}),`
`,n.jsx(i.p,{children:"Control how the tooltip aligns relative to its trigger:"}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(e,{of:T}),`
`,n.jsx(i.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(i.p,{children:"Tooltips work well with icon buttons and informational elements:"}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(i.h3,{id:"long-content",children:"Long Content"}),`
`,n.jsx(i.p,{children:"Tooltips automatically wrap longer content:"}),`
`,n.jsx(e,{of:L}),`
`,n.jsx(i.h3,{id:"multiple-tooltips",children:"Multiple Tooltips"}),`
`,n.jsx(e,{of:y}),`
`,n.jsx(i.h3,{id:"all-positions",children:"All Positions"}),`
`,n.jsx(e,{of:v}),`
`,n.jsx(i.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,n.jsxs(i.p,{children:["The Tooltip component provides comprehensive Right-to-Left (RTL) language support when used with the ",n.jsx(i.code,{children:"ThemeProvider"}),". This includes automatic font switching, proper positioning, and directional tooltip display."]}),`
`,n.jsx(i.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,n.jsxs(i.p,{children:["For full RTL support, wrap your application with ",n.jsx(i.code,{children:"ThemeProvider"}),":"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`import { ThemeProvider, Tooltip, Button } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <TooltipProvider>
        <Tooltip content="معلومات مفيدة حول هذا الزر">
          <Button>زر عربي</Button>
        </Tooltip>
      </TooltipProvider>
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,n.jsx(i.p,{children:"When RTL is enabled via ThemeProvider, the Tooltip component automatically:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Text Alignment"}),": Changes to right-aligned text for Arabic content"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Position Mirroring"}),": Tooltip positions adapt naturally to RTL reading patterns"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Line Height"}),": Applies appropriate line height for Arabic text rendering"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Layout Direction"}),": Maintains proper visual hierarchy in RTL contexts"]}),`
`]}),`
`,n.jsx(i.h3,{id:"icon-button-tooltips-in-rtl",children:"Icon Button Tooltips in RTL"}),`
`,n.jsx(i.p,{children:"For icon buttons with Arabic tooltips:"}),`
`,n.jsx(e,{of:R}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';
import { IconSave, IconDelete, IconEdit } from '@tabler/icons-react';

function RTLIconButtons() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      direction: isRTL ? 'rtl' : 'ltr' 
    }}>
      <Tooltip content={isRTL ? 'حفظ المستند' : 'Save document'}>
        <Button variant="outlined" size="sm">
          <IconSave size={16} />
        </Button>
      </Tooltip>
      
      <Tooltip content={isRTL ? 'تحرير المحتوى' : 'Edit content'}>
        <Button variant="outlined" size="sm">
          <IconEdit size={16} />
        </Button>
      </Tooltip>
      
      <Tooltip content={isRTL ? 'حذف العنصر' : 'Delete item'} side="top">
        <Button variant="outlined" size="sm">
          <IconDelete size={16} />
        </Button>
      </Tooltip>
    </div>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"form-field-tooltips-in-rtl",children:"Form Field Tooltips in RTL"}),`
`,n.jsx(i.p,{children:"For form fields with contextual help in Arabic:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`function RTLFormTooltips() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isRTL ? 'كلمة المرور' : 'Password'}
            <Tooltip 
              content={isRTL ? 'يجب أن تحتوي على 8 أحرف على الأقل مع أرقام ورموز' : 'Must contain at least 8 characters with numbers and symbols'}
              side={isRTL ? "left" : "right"}
            >
              <IconHelp size={14} style={{ color: 'var(--t-color-text-subtle)' }} />
            </Tooltip>
          </label>
          <TextInput type="password" />
        </div>
        
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isRTL ? 'البريد الإلكتروني' : 'Email'}
            <Tooltip 
              content={isRTL ? 'سنستخدم هذا البريد للتواصل معك' : 'We will use this email to contact you'}
              side={isRTL ? "left" : "right"}
            >
              <IconInfo size={14} style={{ color: 'var(--t-color-text-subtle)' }} />
            </Tooltip>
          </label>
          <TextInput type="email" />
        </div>
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"data-display-tooltips-in-rtl",children:"Data Display Tooltips in RTL"}),`
`,n.jsx(i.p,{children:"For data tables and information displays:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`function RTLDataTooltips() {
  const { isRTL } = useTheme();
  
  const data = isRTL ? [
    { name: 'أحمد محمد', role: 'مطور أول', status: 'متاح' },
    { name: 'فاطمة أحمد', role: 'مصممة UI/UX', status: 'مشغول' },
    { name: 'محمود علي', role: 'مدير المنتج', status: 'في اجتماع' }
  ] : [
    { name: 'Ahmed Mohamed', role: 'Senior Developer', status: 'Available' },
    { name: 'Fatima Ahmed', role: 'UI/UX Designer', status: 'Busy' },
    { name: 'Mahmoud Ali', role: 'Product Manager', status: 'In meeting' }
  ];
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>{isRTL ? 'الاسم' : 'Name'}</th>
            <th>{isRTL ? 'الوظيفة' : 'Role'}</th>
            <th>{isRTL ? 'الحالة' : 'Status'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Tooltip 
                  content={isRTL ? \`الملف الشخصي لـ \${item.name}\` : \`\${item.name}'s profile\`}
                >
                  <span style={{ textDecoration: 'underline', cursor: 'help' }}>
                    {item.name}
                  </span>
                </Tooltip>
              </td>
              <td>{item.role}</td>
              <td>
                <Tooltip 
                  content={isRTL ? \`آخر تحديث: منذ 5 دقائق\` : \`Last updated: 5 minutes ago\`}
                >
                  <Badge variant={item.status === (isRTL ? 'متاح' : 'Available') ? 'success' : 'secondary'}>
                    {item.status}
                  </Badge>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"truncated-content-tooltips-in-rtl",children:"Truncated Content Tooltips in RTL"}),`
`,n.jsx(i.p,{children:"For showing full text when content is truncated:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`function RTLTruncatedTooltips() {
  const { isRTL } = useTheme();
  
  const longTexts = isRTL ? [
    'هذا نص طويل جداً يحتوي على معلومات مهمة ولكنه مقطوع في العرض المحدود',
    'عنوان طويل للمقال يتحدث عن التكنولوجيا الحديثة وتأثيرها على المجتمع',
    'وصف مفصل للمنتج يشمل جميع الخصائص والمميزات التي يقدمها'
  ] : [
    'This is a very long text that contains important information but is truncated in limited display',
    'Long article title discussing modern technology and its impact on society',
    'Detailed product description including all features and benefits it offers'
  ];
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', maxWidth: '300px' }}>
      <h3>{isRTL ? 'محتوى مقطوع' : 'Truncated Content'}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {longTexts.map((text, index) => (
          <Tooltip key={index} content={text}>
            <div style={{
              padding: '8px',
              border: '1px solid var(--t-color-border-secondary)',
              borderRadius: '4px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              cursor: 'help'
            }}>
              {text}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"position-adjustment-in-rtl",children:"Position Adjustment in RTL"}),`
`,n.jsx(i.p,{children:"Tooltip positions adapt automatically to RTL reading patterns:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-jsx",children:`function RTLPositionTooltips() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ 
      direction: isRTL ? 'rtl' : 'ltr',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      padding: '40px'
    }}>
      <Tooltip 
        content={isRTL ? 'أعلى' : 'Top'} 
        side="top"
      >
        <Button>{isRTL ? 'أعلى' : 'Top'}</Button>
      </Tooltip>
      
      <Tooltip 
        content={isRTL ? 'يمين' : 'Right'} 
        side={isRTL ? "left" : "right"}
      >
        <Button>{isRTL ? 'يمين' : 'Right'}</Button>
      </Tooltip>
      
      <Tooltip 
        content={isRTL ? 'أسفل' : 'Bottom'} 
        side="bottom"
      >
        <Button>{isRTL ? 'أسفل' : 'Bottom'}</Button>
      </Tooltip>
    </div>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Test with actual Arabic content"})," to ensure proper text rendering and wrapping"]}),`
`,n.jsxs(i.li,{children:[n.jsxs(i.strong,{children:["Use ",n.jsx(i.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Consider tooltip positioning"})," - choose sides that feel natural for RTL reading patterns"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Test in form contexts"})," where tooltips provide contextual help"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Validate truncated content"})," to ensure full text is readable in tooltips"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Test multi-line content"})," to ensure proper line height and spacing"]}),`
`]}),`
`,n.jsx(i.h2,{id:"implementation",children:"Implementation"}),`
`,n.jsx(i.h3,{id:"tooltipprovider",children:"TooltipProvider"}),`
`,n.jsxs(i.p,{children:["Wrap your application or tooltip group with ",n.jsx(i.code,{children:"TooltipProvider"})," to enable tooltip functionality:"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { TooltipProvider, Tooltip } from '@tagaddod-design/react';

function App() {
  return (
    <TooltipProvider>
      <Tooltip content="Helpful information">
        <button>Hover me</button>
      </Tooltip>
    </TooltipProvider>
  );
}
`})}),`
`,n.jsx(i.h3,{id:"basic-tooltip-auto-positioning",children:"Basic Tooltip (Auto-positioning)"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Tooltip content="This explains what the button does">
  <Button>Action</Button>
</Tooltip>
`})}),`
`,n.jsx(i.h3,{id:"custom-positioning",children:"Custom Positioning"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Tooltip
  content="Tooltip content"
  side="right"
  align="start"
  sideOffset={12}
>
  <Button>Positioned tooltip</Button>
</Tooltip>
`})}),`
`,n.jsx(i.h3,{id:"disabled-state",children:"Disabled State"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Tooltip content="This won't show" disabled>
  <Button>Disabled tooltip</Button>
</Tooltip>
`})}),`
`,n.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tooltips are announced by screen readers when the trigger receives focus"}),`
`,n.jsxs(i.li,{children:["Use ",n.jsx(i.code,{children:"aria-label"})," on trigger elements when the tooltip provides essential information"]}),`
`,n.jsx(i.li,{children:"Ensure tooltip content is concise and meaningful"}),`
`,n.jsx(i.li,{children:"Tooltips automatically hide when focus leaves the trigger element"}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(i.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(i.p,{children:"The tooltip component uses the following design tokens:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-color-overlay-dark-85"}),": Background color (semi-transparent dark)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--color-text-on-bg-fill"}),": Text color (white)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-typography-body-sm-default"}),": Typography (font family, size, weight)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-font-family-primary"}),": Font family for LTR text"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-font-family-arabic"}),": Font family for RTL text"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-space-200"}),": Internal padding"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"--t-border-radius-200"}),": Border radius"]}),`
`]})]})}function _(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(l,{...t})}):l(t)}export{_ as default};
