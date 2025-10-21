import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as o}from"./index-BqIVwv1J.js";import{M as l,A as d,C as i}from"./index-BCgJJ4rA.js";import{A as c,D as r,W as h,a as s,P as p,C as m}from"./AspectRatio.stories-TgwLwQQH.js";import{A as x}from"./AspectRatio-BLaXxon9.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";function a(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(e.h1,{id:"realm-agent-navigation-index",children:`<
REALM AGENT NAVIGATION INDEX`}),`
`,n.jsx(e.p,{children:"Quick Reference for Claude Code Agents:"}),`
`,n.jsx(e.p,{children:"📦 IMPORT & SETUP (Lines 15-24)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Basic import pattern"}),`
`,n.jsx(e.li,{children:"Props documentation"}),`
`]}),`
`,n.jsx(e.p,{children:"🎯 BASIC USAGE (Lines 25-43)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default 1:1 ratio implementation"}),`
`,n.jsx(e.li,{children:"Basic content styling"}),`
`]}),`
`,n.jsx(e.p,{children:"📐 COMMON RATIOS (Lines 45-85)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1:1 Square (Lines 47-55)"}),`
`,n.jsx(e.li,{children:"16:9 Widescreen (Lines 57-65): Video/media content"}),`
`,n.jsx(e.li,{children:"4:3 Standard (Lines 67-75): Traditional format"}),`
`,n.jsx(e.li,{children:"2:3 Portrait (Lines 77-85): Vertical content"}),`
`]}),`
`,n.jsx(e.p,{children:"💼 USE CASES (Lines 87-167)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Images with Consistent Ratios (Lines 89-105)"}),`
`,n.jsx(e.li,{children:"Cards with Media (Lines 107-134): Card layouts"}),`
`,n.jsx(e.li,{children:"Videos and Embeds (Lines 136-151): YouTube, video content"}),`
`,n.jsx(e.li,{children:"Maps (Lines 153-167): Embedded maps"}),`
`]}),`
`,n.jsx(e.p,{children:"🔧 CUSTOMIZATION (Lines 169-185)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Custom classes and styling"}),`
`,n.jsx(e.li,{children:"Container styling options"}),`
`]}),`
`,n.jsx(e.p,{children:"♿ ACCESSIBILITY (Lines 187-191)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alt text requirements"}),`
`,n.jsx(e.li,{children:"ARIA attributes for content"}),`
`]}),`
`,n.jsx(e.p,{children:"⚙️ TECHNICAL DETAILS (Lines 193-223)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"CSS Variables (Lines 195-203)"}),`
`,n.jsx(e.li,{children:"Browser Compatibility (Lines 205-212): Modern vs legacy"}),`
`,n.jsx(e.li,{children:"Implementation Details (Lines 214-223): Runtime detection"}),`
`]}),`
`,n.jsx(e.p,{children:"QUICK IMPLEMENTATION EXAMPLES:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Basic square: Line 30 (ratio=",1,")"]}),`
`,n.jsxs(e.li,{children:["Widescreen: Line 62 (ratio=",16/9,")"]}),`
`,n.jsx(e.li,{children:"With image: Lines 94-104"}),`
`,n.jsx(e.li,{children:"Card layout: Lines 112-133"}),`
`]}),`
`,n.jsx(e.p,{children:`⚠️ FALLBACK INSTRUCTION:
If you cannot find what you're looking for in the sections above,
read the ENTIRE document from start to finish to ensure complete
understanding of all AspectRatio component capabilities and patterns.`}),`
`,n.jsx(e.blockquote,{children:`
`}),`
`,n.jsx(e.h1,{id:"aspectratio-component",children:"AspectRatio Component"}),`
`,n.jsx(e.p,{children:"The AspectRatio component maintains a consistent width-to-height ratio for its children, regardless of the container's dimensions."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The AspectRatio component is useful for maintaining consistent proportions for content like images, videos, maps, or embedded content. It ensures that content maintains its shape as its container resizes."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { AspectRatio } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{of:x}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={1}>
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
`,n.jsx(e.h2,{id:"common-ratios",children:"Common Ratios"}),`
`,n.jsx(e.h3,{id:"11-square",children:"1:1 (Square)"}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={1}>
  {/* Content */}
</AspectRatio>
`})}),`
`,n.jsx(e.h3,{id:"169-widescreen",children:"16:9 (Widescreen)"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={16/9}>
  {/* Content */}
</AspectRatio>
`})}),`
`,n.jsx(e.h3,{id:"43-standard",children:"4:3 (Standard)"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
  {/* Content */}
</AspectRatio>
`})}),`
`,n.jsx(e.h3,{id:"23-portrait",children:"2:3 (Portrait)"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={2/3}>
  {/* Content */}
</AspectRatio>
`})}),`
`,n.jsx(e.h2,{id:"use-cases",children:"Use Cases"}),`
`,n.jsx(e.h3,{id:"images-with-consistent-ratios",children:"Images with Consistent Ratios"}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
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
`,n.jsx(e.h3,{id:"cards-with-media",children:"Cards with Media"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div style={{
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
`,n.jsx(e.h3,{id:"videos-and-embeds",children:"Videos and Embeds"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={16/9}>
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
`,n.jsx(e.h3,{id:"maps",children:"Maps"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio ratio={4/3}>
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
`,n.jsx(e.h2,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:["The AspectRatio component accepts standard HTML div attributes such as ",n.jsx(e.code,{children:"className"})," and ",n.jsx(e.code,{children:"style"})," for customization."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<AspectRatio 
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
`,n.jsx(e.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,n.jsxs(e.p,{children:["The AspectRatio component provides comprehensive Right-to-Left (RTL) language support when used with the ",n.jsx(e.code,{children:"ThemeProvider"}),". While being primarily a layout component, it ensures proper content display and maintains consistent ratios in RTL contexts."]}),`
`,n.jsx(e.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,n.jsxs(e.p,{children:["For full RTL support, wrap your application with ",n.jsx(e.code,{children:"ThemeProvider"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider, AspectRatio } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <AspectRatio ratio={16/9}>
        <img 
          src="/arabic-content-image.jpg" 
          alt="صورة محتوى عربي" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </AspectRatio>
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,n.jsx(e.p,{children:"When RTL is enabled via ThemeProvider, the AspectRatio component automatically:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font for any text content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout Direction"}),": Maintains proper aspect ratios while respecting RTL content flow"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Positioning"}),": Ensures proper positioning of child elements in RTL contexts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Line Height"}),": Applies appropriate line height for Arabic text within the ratio container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text Alignment"}),": Supports right-aligned text for Arabic content"]}),`
`]}),`
`,n.jsx(e.h3,{id:"media-content-in-rtl",children:"Media Content in RTL"}),`
`,n.jsx(e.p,{children:"For images and videos with Arabic captions or overlays:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useTheme } from '@tagaddod-design/react';

function RTLMediaContent() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', maxWidth: '600px' }}>
      <AspectRatio ratio={16/9}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img 
            src="https://picsum.photos/800/450" 
            alt={isRTL ? 'صورة توضيحية للمحتوى' : 'Illustrative content image'} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '16px',
            [isRTL ? 'right' : 'left']: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
          }}>
            {isRTL ? 'عنوان الصورة العربي' : 'English Image Caption'}
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"card-layouts-in-rtl",children:"Card Layouts in RTL"}),`
`,n.jsx(e.p,{children:"For card components with proper RTL layout:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function RTLCardLayout() {
  const { isRTL } = useTheme();
  
  const cardData = isRTL ? [
    { title: 'تطوير الويب الحديث', description: 'تعلم أحدث تقنيات تطوير المواقع والتطبيقات', image: '/web-dev-ar.jpg' },
    { title: 'التصميم التفاعلي', description: 'مبادئ التصميم وتجربة المستخدم المتقدمة', image: '/design-ar.jpg' },
    { title: 'الذكاء الاصطناعي', description: 'مقدمة شاملة في مجال الذكاء الاصطناعي', image: '/ai-ar.jpg' }
  ] : [
    { title: 'Modern Web Development', description: 'Learn the latest web and app development techniques', image: '/web-dev-en.jpg' },
    { title: 'Interactive Design', description: 'Advanced design principles and user experience', image: '/design-en.jpg' },
    { title: 'Artificial Intelligence', description: 'Comprehensive introduction to AI field', image: '/ai-en.jpg' }
  ];
  
  return (
    <div style={{ 
      direction: isRTL ? 'rtl' : 'ltr',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }}>
      {cardData.map((card, index) => (
        <div key={index} style={{
          border: '1px solid var(--t-color-border-primary)',
          borderRadius: 'var(--t-border-radius-300)',
          overflow: 'hidden',
          backgroundColor: 'var(--t-color-surface-primary)'
        }}>
          <AspectRatio ratio={4/3}>
            <img 
              src={card.image || "https://picsum.photos/400/300?random=" + index} 
              alt={card.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </AspectRatio>
          <div style={{ padding: 'var(--t-space-300)' }}>
            <h3 style={{
              margin: '0 0 8px 0',
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              textAlign: isRTL ? 'right' : 'left'
            }}>
              {card.title}
            </h3>
            <p style={{
              margin: 0,
              color: 'var(--t-color-text-subtle)',
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              textAlign: isRTL ? 'right' : 'left'
            }}>
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"video-embeds-in-rtl",children:"Video Embeds in RTL"}),`
`,n.jsx(e.p,{children:"For embedded videos with Arabic titles and controls:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function RTLVideoEmbed() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', maxWidth: '800px' }}>
      <h2 style={{
        fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
        lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
        textAlign: isRTL ? 'right' : 'left',
        marginBottom: '16px'
      }}>
        {isRTL ? 'فيديو تعليمي: مقدمة في البرمجة' : 'Tutorial Video: Introduction to Programming'}
      </h2>
      
      <AspectRatio ratio={16/9}>
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title={isRTL ? 'فيديو تعليمي' : 'Tutorial video'}
          allowFullScreen
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            borderRadius: 'var(--t-border-radius-200)'
          }}
        />
      </AspectRatio>
      
      <p style={{
        marginTop: '12px',
        fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
        lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
        textAlign: isRTL ? 'right' : 'left',
        color: 'var(--t-color-text-subtle)'
      }}>
        {isRTL ? 'هذا فيديو تعليمي يشرح أساسيات البرمجة للمبتدئين' : 'This tutorial video explains programming basics for beginners'}
      </p>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"maps-integration-in-rtl",children:"Maps Integration in RTL"}),`
`,n.jsx(e.p,{children:"For map embeds with Arabic labels and proper RTL positioning:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function RTLMapEmbed() {
  const { isRTL } = useTheme();
  
  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px'
      }}>
        <div>
          <h3 style={{
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
            textAlign: isRTL ? 'right' : 'left',
            margin: '0 0 8px 0'
          }}>
            {isRTL ? 'موقعنا على الخريطة' : 'Our Location'}
          </h3>
          
          <AspectRatio ratio={4/3}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.233882!3d30.044409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTQnMDIuMCJF!5e0!3m2!1sen!2seg!4v1234567890" 
              title={isRTL ? 'خريطة الموقع' : 'Location map'}
              style={{ 
                width: '100%', 
                height: '100%', 
                border: 'none',
                borderRadius: 'var(--t-border-radius-200)'
              }}
            />
          </AspectRatio>
          
          <div style={{
            marginTop: '12px',
            padding: '12px',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-200)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            <p style={{
              margin: '0 0 8px 0',
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              fontWeight: 600
            }}>
              {isRTL ? 'العنوان:' : 'Address:'}
            </p>
            <p style={{
              margin: 0,
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              color: 'var(--t-color-text-subtle)'
            }}>
              {isRTL ? 'شارع التحرير، وسط البلد، القاهرة، مصر' : 'Tahrir Street, Downtown, Cairo, Egypt'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"profile-images-in-rtl",children:"Profile Images in RTL"}),`
`,n.jsx(e.p,{children:"For user profiles and avatar displays with consistent ratios:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function RTLProfileImages() {
  const { isRTL } = useTheme();
  
  const profiles = isRTL ? [
    { name: 'أحمد محمود', role: 'مطور أول', avatar: '/ahmed.jpg' },
    { name: 'فاطمة أحمد', role: 'مصممة UI', avatar: '/fatima.jpg' },
    { name: 'محمد علي', role: 'مدير المنتج', avatar: '/mohamed.jpg' }
  ] : [
    { name: 'Ahmed Mahmoud', role: 'Senior Developer', avatar: '/ahmed.jpg' },
    { name: 'Fatima Ahmed', role: 'UI Designer', avatar: '/fatima.jpg' },
    { name: 'Mohamed Ali', role: 'Product Manager', avatar: '/mohamed.jpg' }
  ];
  
  return (
    <div style={{ 
      direction: isRTL ? 'rtl' : 'ltr',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h3 style={{
        fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
        lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
        textAlign: isRTL ? 'right' : 'left'
      }}>
        {isRTL ? 'فريق العمل' : 'Team Members'}
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        {profiles.map((profile, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isRTL ? 'flex-end' : 'flex-start',
            padding: '16px',
            border: '1px solid var(--t-color-border-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            <div style={{ width: '80px', marginBottom: '12px' }}>
              <AspectRatio ratio={1}>
                <img 
                  src={profile.avatar || \`https://picsum.photos/80/80?random=\${index}\`} 
                  alt={profile.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }} 
                />
              </AspectRatio>
            </div>
            
            <h4 style={{
              margin: '0 0 4px 0',
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              fontSize: '16px'
            }}>
              {profile.name}
            </h4>
            
            <p style={{
              margin: 0,
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              fontSize: '14px',
              color: 'var(--t-color-text-subtle)'
            }}>
              {profile.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"custom-ratio-content-in-rtl",children:"Custom Ratio Content in RTL"}),`
`,n.jsx(e.p,{children:"For custom aspect ratios with RTL-specific content:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function RTLCustomRatios() {
  const { isRTL } = useTheme();
  
  const ratios = [
    { ratio: 1, label: isRTL ? 'مربع (1:1)' : 'Square (1:1)' },
    { ratio: 16/9, label: isRTL ? 'عريض (16:9)' : 'Widescreen (16:9)' },
    { ratio: 4/3, label: isRTL ? 'قياسي (4:3)' : 'Standard (4:3)' },
    { ratio: 2/3, label: isRTL ? 'عمودي (2:3)' : 'Portrait (2:3)' }
  ];
  
  return (
    <div style={{ 
      direction: isRTL ? 'rtl' : 'ltr',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px'
    }}>
      {ratios.map((item, index) => (
        <div key={index}>
          <h4 style={{
            marginBottom: '8px',
            fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
            lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
            {item.label}
          </h4>
          
          <AspectRatio ratio={item.ratio}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--t-color-fill-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--t-color-text-on-fill)',
              fontFamily: isRTL ? 'var(--t-font-family-arabic)' : 'var(--t-font-family-primary)',
              lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
              borderRadius: 'var(--t-border-radius-200)',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {item.ratio.toFixed(2)}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with Arabic content overlays"})," to ensure proper text positioning and alignment"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider content positioning"})," - captions, overlays, and controls should respect RTL layout"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test media embeds"})," to ensure proper display and accessibility in RTL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Validate responsive behavior"})," across different aspect ratios in RTL contexts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ensure proper text rendering"})," with Arabic fonts and line heights for any text content"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The AspectRatio component is a presentational wrapper that doesn't affect the accessibility of its children"}),`
`,n.jsx(e.li,{children:"Ensure that content placed inside AspectRatio (especially images) has appropriate alt text and ARIA attributes"}),`
`,n.jsx(e.li,{children:"For iframe content, always provide a descriptive title attribute"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The AspectRatio component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-border-radius-200"}),` | Border radius for the container |
| `,n.jsx(e.code,{children:"--t-duration-base"}),` | Duration for transitions |
| `,n.jsx(e.code,{children:"--t-easing-in-out"})," | Easing function for transitions |"]}),`
`,n.jsx(e.h3,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,n.jsx(e.p,{children:"The AspectRatio component has been designed with browser compatibility in mind:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Modern browsers: Uses the CSS ",n.jsx(e.code,{children:"aspect-ratio"})," property for simple, efficient aspect ratio control"]}),`
`,n.jsx(e.li,{children:`Legacy browsers: Falls back to the "padding-top hack" technique where the modern property isn't supported`}),`
`]}),`
`,n.jsx(e.p,{children:"The fallback is applied automatically through feature detection, providing consistent behavior across all supported browsers."}),`
`,n.jsx(e.h3,{id:"technical-implementation",children:"Technical Implementation"}),`
`,n.jsx(e.p,{children:"The AspectRatio component:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Checks for ",n.jsx(e.code,{children:"aspect-ratio"})," CSS support at runtime"]}),`
`,n.jsxs(e.li,{children:["For modern browsers, applies the ",n.jsx(e.code,{children:"aspect-ratio"})," CSS property directly"]}),`
`,n.jsx(e.li,{children:"For legacy browsers, calculates a percentage-based padding-top value based on the ratio (e.g., a 16:9 ratio becomes padding-top: 56.25%)"}),`
`,n.jsx(e.li,{children:"Ensures children are positioned correctly within the ratio container"}),`
`]}),`
`,n.jsx(e.p,{children:"This dual approach ensures the most efficient implementation is used when available, while maintaining support for older browsers."})]})}function C(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{C as default};
