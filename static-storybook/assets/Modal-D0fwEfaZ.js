import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-DI2gBlDf.js";import{M as r,A as s,C as o}from"./index-BPXrzZIR.js";import{M as d,a as c,D as l,W as h,b as p,F as x,c as m,d as u,I as g,e as j,S as f,R as M}from"./Modal.stories-C4_VCJjC.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-BY2_vhv5.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-pvuVTQ3b.js";import"./index-B2x4RDPN.js";import"./index-DUtlJRZ9.js";import"./index-DZCApzUK.js";import"./index-Dh73ENUf.js";import"./clsx-B-dksMZM.js";import"./Button-b6PCfnH9.js";import"./createReactComponent-GuN14Mgc.js";import"./IconX-5Dn7YNlv.js";import"./IconCheck-PO1-3gxX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"modal-component",children:"Modal Component"}),`
`,n.jsx(e.p,{children:"The Modal component is a dialog that appears on top of the main content to provide critical information or request user input."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Modals are used to focus user attention on a specific task or piece of information without navigating away from the current screen. They're ideal for confirmations, alerts, and short forms."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Modal } from '@tagaddod/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Modal, Button } from '@tagaddod/react';

<Modal
  trigger={<Button>Open Modal</Button>}
  title="Modal Title"
>
  <div style={{ textAlign: 'center', padding: '16px' }}>
    Modal content goes here
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"modal-variants",children:"Modal Variants"}),`
`,n.jsx(e.h3,{id:"default-modal",children:"Default Modal"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  title="Modal Title"
  showTitle={true}
  showFooter={true}
  cancelLabel="Cancel"
  confirmLabel="Confirm"
  onCancel={() => console.log('Cancelled')}
  onConfirm={() => console.log('Confirmed')}
>
  <div style={{ padding: '16px' }}>
    Modal content goes here
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"without-title",children:"Without Title"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  showTitle={false}
  showFooter={true}
  cancelLabel="Cancel"
  confirmLabel="Confirm"
>
  <div style={{ padding: '16px' }}>
    Modal without a title bar
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"without-footer",children:"Without Footer"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  title="Modal Without Footer"
  showTitle={true}
  showFooter={false}
>
  <div style={{ padding: '16px' }}>
    Modal without action buttons in footer
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"fullscreen-modal",children:"Fullscreen Modal"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Fullscreen Modal</Button>}
  title="Fullscreen Modal"
  size="fullscreen"
>
  <div style={{ padding: '16px' }}>
    This modal takes up the entire screen
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"footer-styles",children:"Footer Styles"}),`
`,n.jsx(e.h3,{id:"default-footer",children:"Default Footer"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  title="Default Footer"
  footerStyle="default"
  cancelLabel="Cancel"
  confirmLabel="Confirm"
>
  <div style={{ padding: '16px' }}>
    Modal with default footer style
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"footer-style-1",children:"Footer Style 1"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  title="Footer Style 1"
  footerStyle="style1"
  cancelLabel="Cancel"
  confirmLabel="Confirm"
>
  <div style={{ padding: '16px' }}>
    Modal with footer style 1 (content on left, buttons on right)
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"footer-style-2",children:"Footer Style 2"}),`
`,n.jsx(o,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>Open Modal</Button>}
  title="Footer Style 2"
  footerStyle="style2"
  cancelLabel="Cancel"
  confirmLabel="Confirm"
>
  <div style={{ padding: '16px' }}>
    Modal with footer style 2 (centered buttons)
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"contextual-modals",children:"Contextual Modals"}),`
`,n.jsx(e.h3,{id:"information-modal",children:"Information Modal"}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconInfoCircle } from '@tabler/icons-react';

<Modal
  trigger={<Button prefixIcon={<IconInfoCircle />}>Open Info Modal</Button>}
  title={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconInfoCircle size={20} color="#0066ff" />
      Information
    </div>
  }
  showFooter={true}
  cancelLabel="Close"
  confirmLabel="Got it"
>
  <div style={{ padding: '16px' }}>
    This is an informational message.
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"warning-modal",children:"Warning Modal"}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconAlertTriangle } from '@tabler/icons-react';

<Modal
  trigger={<Button tone="warning" prefixIcon={<IconAlertTriangle />}>Open Warning Modal</Button>}
  title={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconAlertTriangle size={20} color="#ff9800" />
      Warning
    </div>
  }
  showFooter={true}
  cancelLabel="Cancel"
  confirmLabel="Proceed"
>
  <div style={{ padding: '16px' }}>
    Please be careful with this action.
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"success-modal",children:"Success Modal"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { IconCheck } from '@tabler/icons-react';

<Modal
  trigger={<Button tone="success" prefixIcon={<IconCheck />}>Open Success Modal</Button>}
  title={
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <IconCheck size={20} color="#4caf50" />
      Success
    </div>
  }
  showFooter={false}
>
  <div style={{ padding: '16px' }}>
    Operation completed successfully!
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"internationalization",children:"Internationalization"}),`
`,n.jsx(e.p,{children:"The Modal component supports Right-to-Left (RTL) languages:"}),`
`,n.jsx(o,{of:M}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>افتح النافذة</Button>}
  title="العنوان"
  rtl={true}
  cancelLabel="إلغاء"
  confirmLabel="تأكيد"
>
  <div style={{ padding: '16px', textAlign: 'right' }}>
    هذا هو محتوى النافذة المنبثقة
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"use-cases",children:"Use Cases"}),`
`,n.jsx(e.h3,{id:"confirmation-dialog",children:"Confirmation Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button tone="critical">Delete Item</Button>}
  title="Confirm Deletion"
  cancelLabel="Cancel"
  confirmLabel="Delete"
  onCancel={() => console.log('Cancelled deletion')}
  onConfirm={() => handleDelete()}
>
  <div style={{ padding: '16px' }}>
    Are you sure you want to delete this item? This action cannot be undone.
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"form-modal",children:"Form Modal"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function FormModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {
    // Form submission logic
    console.log({ name, email });
  };
  
  return (
    <Modal
      trigger={<Button>Add User</Button>}
      title="Add New User"
      cancelLabel="Cancel"
      confirmLabel="Save"
      onConfirm={handleSubmit}
    >
      <div style={{ padding: '16px' }}>
        <form>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="name">Name</label>
            <input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ display: 'block', width: '100%', marginTop: '4px', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: 'block', width: '100%', marginTop: '4px', padding: '8px' }}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"information-display",children:"Information Display"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  trigger={<Button>View Details</Button>}
  title="User Details"
  showFooter={false}
>
  <div style={{ padding: '16px' }}>
    <h3>John Doe</h3>
    <div>
      <strong>Email:</strong> john.doe@example.com
    </div>
    <div>
      <strong>Role:</strong> Administrator
    </div>
    <div>
      <strong>Joined:</strong> January 15, 2023
    </div>
    
    <div style={{ marginTop: '24px', textAlign: 'right' }}>
      <Button variant="secondary" onClick={() => console.log('Close')}>Close</Button>
    </div>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Modal component follows accessibility best practices:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built on Radix UI's Dialog primitive for robust accessibility"}),`
`,n.jsx(e.li,{children:"Properly manages focus when opened and closed"}),`
`,n.jsx(e.li,{children:"Traps focus within the modal"}),`
`,n.jsx(e.li,{children:"Supports keyboard navigation (Tab, Escape)"}),`
`,n.jsx(e.li,{children:"Uses proper ARIA roles and attributes"}),`
`,n.jsx(e.li,{children:"Correctly handles screen reader announcements"}),`
`,n.jsx(e.li,{children:"Supports closing with the Escape key"}),`
`,n.jsx(e.li,{children:"Background scroll is prevented when modal is open"}),`
`,n.jsx(e.li,{children:"Properly labeled close button"}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(e.p,{children:"The Modal component uses the following token CSS variables:"}),`
`,n.jsxs(e.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,n.jsx(e.code,{children:"--t-color-overlay"}),` | Background overlay color |
| `,n.jsx(e.code,{children:"--t-color-bg"}),` | Modal background color |
| `,n.jsx(e.code,{children:"--t-color-border"}),` | Border color for header and footer dividers |
| `,n.jsx(e.code,{children:"--t-color-text-primary"}),` | Title and primary text color |
| `,n.jsx(e.code,{children:"--t-color-text-secondary"}),` | Secondary text color |
| `,n.jsx(e.code,{children:"--t-color-bg-hover"}),` | Hover state for close button |
| `,n.jsx(e.code,{children:"--t-border-radius-200"}),` | Border radius |
| `,n.jsx(e.code,{children:"--t-shadow-400"}),` | Shadow for the modal |
| `,n.jsx(e.code,{children:"--t-font-size-headline-sm"}),` | Title font size |
| `,n.jsx(e.code,{children:"--t-font-weight-bold"}),` | Title font weight |
| `,n.jsx(e.code,{children:"--t-line-height-normal"}),` | Line height for text |
| `,n.jsx(e.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,n.jsx(e.code,{children:"--t-z-index-modal"}),` | Z-index for the modal |
| `,n.jsx(e.code,{children:"--t-z-index-modal-overlay"}),` | Z-index for the overlay |
| `,n.jsx(e.code,{children:"--t-modal-width"})," | Default modal width |"]}),`
`,n.jsx(e.h3,{id:"architecture",children:"Architecture"}),`
`,n.jsx(e.p,{children:"The Modal component is built on Radix UI's Dialog component, which provides:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Focus management"}),`
`,n.jsx(e.li,{children:"Keyboard interactions"}),`
`,n.jsx(e.li,{children:"Focus trapping"}),`
`,n.jsx(e.li,{children:"Proper ARIA attributes"}),`
`,n.jsx(e.li,{children:"Animation support"}),`
`]}),`
`,n.jsx(e.p,{children:"The Tagaddod implementation extends this with:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Multiple footer styles"}),`
`,n.jsx(e.li,{children:"Size variants (default and fullscreen)"}),`
`,n.jsx(e.li,{children:"RTL support"}),`
`,n.jsx(e.li,{children:"Customizable header and footer"}),`
`]}),`
`,n.jsx(e.h3,{id:"animations",children:"Animations"}),`
`,n.jsx(e.p,{children:"The Modal includes smooth animations for:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Overlay fade-in and fade-out"}),`
`,n.jsx(e.li,{children:"Modal scale and fade transitions"}),`
`,n.jsx(e.li,{children:"RTL-specific animations"}),`
`]}),`
`,n.jsx(e.p,{children:"These animations are disabled when the user prefers reduced motion."}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"The Modal component is compatible with all modern browsers and includes RTL language support."})]})}function X(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{X as default};
