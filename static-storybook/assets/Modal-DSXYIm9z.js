import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as l}from"./index-BqIVwv1J.js";import{M as r,A as s,C as t}from"./index-BCgJJ4rA.js";import{M as d,D as i,S as c,a as h,L as p,C as m,b as u,N as x,F as j,c as g,A as f,W as C,d as b,e as M,f as v,g as y,h as A}from"./Modal.stories-Cv3HNlDG.js";import{M as S}from"./Modal-C3Y6YLke.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-CoP_mZBT.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-CKk3lApD.js";import"./Select-Bnkvnb3h.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-9FI6h9_9.js";import"./index-D7-T4lOe.js";import"./index-YtIeenAn.js";import"./index-CxljV1N8.js";import"./index-DAnQV6hb.js";import"./index-D5cGTUkh.js";import"./Combination-ZMr3b_jV.js";import"./index-N3eucVg6.js";import"./index-DavpLpmr.js";import"./index-DXU_LAI1.js";import"./index-ComwvWTa.js";import"./index-QFq3N9B_.js";import"./TextInput-CRZDgAAp.js";import"./IconExclamationCircle-BYkI5IG6.js";import"./IconX-DigCVOFI.js";import"./IconChevronDown-D1vfiZl2.js";import"./IconChevronUp-BrVbvfGP.js";import"./IconSearch-BrVn1Pri.js";import"./IconCheck-DgTGwIHb.js";import"./Drawer-CJqTAku3.js";import"./index-BTe66ZhM.js";import"./IconArrowRight-Bc4wwjT_.js";import"./IconArrowLeft-DFM-AXyG.js";import"./ScrollArea-CS41QZ1X.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"-ai-coding-agent---critical-implementation-guide-",children:"🚨 AI CODING AGENT - CRITICAL IMPLEMENTATION GUIDE 🚨"}),`
`,n.jsx(e.h2,{id:"modal-component-architecture---read-first",children:"MODAL COMPONENT ARCHITECTURE - READ FIRST"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────┐
│ HEADER (Controlled by Props)       │ ← title, showTitle, close button
├─────────────────────────────────────┤
│ BODY (Your Content Goes Here)      │ ← children prop ONLY
├─────────────────────────────────────┤
│ FOOTER (Controlled by Props)       │ ← footerVariant, primaryLabel, etc.
└─────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"-critical-mistakes-to-avoid",children:"❌ CRITICAL MISTAKES TO AVOID"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER create manual FOOTER action buttons in children"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER create modal-level Cancel/Save/Submit buttons in children"})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER create ",n.jsx(e.code,{children:'<div className="footer">'})," in children"]})}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NOTE:"})," Buttons ",n.jsx(e.strong,{children:"within your content"}),' (like "Add Item", "Delete Row", etc.) are perfectly fine in children!']}),`
`,n.jsx(e.h2,{id:"-correct-implementation-pattern",children:"✅ CORRECT IMPLEMENTATION PATTERN"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Content buttons are fine, no footer buttons
<Modal
  title="User Management"
  primaryLabel="Close"
  onPrimary={() => setOpen(false)}
>
  {/* Content with action buttons - THIS IS FINE! */}
  <div>
    <h3>Users List</h3>
    <Button onClick={handleAddUser}>Add New User</Button>

    <UserList>
      {users.map(user => (
        <UserRow key={user.id}>
          {user.name}
          <Button onClick={() => handleEdit(user)}>Edit</Button>
          <Button onClick={() => handleDelete(user)}>Delete</Button>
        </UserRow>
      ))}
    </UserList>
  </div>
</Modal>

// ✅ CORRECT - Footer props for modal-level actions
<Modal
  title="Edit User"
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel="Save Changes"
  onCancel={() => setOpen(false)}
  onPrimary={handleSave}
>
  {/* Content can have its own buttons too! */}
  <form>
    <input placeholder="Name" />
    <Button onClick={generatePassword}>Generate Password</Button>
  </form>
</Modal>

// ❌ WRONG - Manual modal-level footer buttons
<Modal title="Edit User">
  <form>
    <input placeholder="Name" />
  </form>
  {/* ❌ DON'T CREATE MODAL FOOTER BUTTONS HERE */}
  <div style={{ position: 'sticky', bottom: 0 }}>
    <button>Cancel</button>  {/* Use footer props instead! */}
    <button>Save</button>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"-ai-implementation-checklist",children:"🎯 AI IMPLEMENTATION CHECKLIST"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"children"})," for body content (including content-level buttons)"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsxs(e.strong,{children:["DEFAULT: Use single button with ",n.jsx(e.code,{children:"primaryLabel"})," only"]})]}),`
`,n.jsx(e.li,{children:"[ ] Use footer props for modal-level actions (Cancel, Save, Submit)"}),`
`,n.jsxs(e.li,{children:["[ ] Content buttons (Add, Edit, Delete items) go in ",n.jsx(e.code,{children:"children"})," - that's fine!"]}),`
`,n.jsx(e.li,{children:"[ ] Never create manual modal footer bars"}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"showFooter={false}"})," if no footer needed"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"modal-component",children:"Modal Component"}),`
`,n.jsx(e.p,{children:"The Modal component is a dialog that appears on top of the main content to provide critical information or request user input."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Modal } from '@tagaddod-design/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(s,{of:S}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Single button pattern (most common)
<Modal
  trigger={<Button>Open Modal</Button>}
  title="Modal Title"
  primaryLabel="OK"           // Single button (DEFAULT)
  onPrimary={() => closeModal()}
>
  <div style={{ padding: '16px' }}>
    Modal content goes here
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"-common-ai-agent-mistakes",children:"❌ COMMON AI AGENT MISTAKES"}),`
`,n.jsx(e.h3,{id:"mistake-1-manual-modal-footer-creation",children:"Mistake 1: Manual Modal Footer Creation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Don't create modal-level footer buttons manually
<Modal title="Delete Confirmation">
  <p>Are you sure?</p>
  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
    <button>Cancel</button>  {/* Modal-level action - use footer props! */}
    <button>Delete</button>
  </div>
</Modal>

// ✅ CORRECT - Use footer props for modal actions
<Modal
  title="Delete Confirmation"
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel="Delete"
  onCancel={() => setOpen(false)}
  onPrimary={handleDelete}
>
  <p>Are you sure you want to delete this item?</p>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"mistake-2-confusing-content-buttons-with-footer-buttons",children:"Mistake 2: Confusing Content Buttons with Footer Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Content buttons inside children are fine!
<Modal title="User Management" primaryLabel="Close" onPrimary={() => setOpen(false)}>
  <div>
    <h3>Users</h3>
    <Button onClick={handleAddUser}>Add New User</Button>  {/* ✅ Content button - OK! */}

    {users.map(user => (
      <div key={user.id}>
        {user.name}
        <Button onClick={() => editUser(user)}>Edit</Button>  {/* ✅ Content button - OK! */}
      </div>
    ))}
  </div>
</Modal>

// ❌ WRONG - Modal-level footer actions in children
<Modal title="Edit Form">
  <form>
    <input name="email" />
  </form>
  <div style={{position: 'sticky', bottom: 0}}>
    <button>Cancel</button>  {/* ❌ Use footer props instead! */}
    <button>Save</button>
  </div>
</Modal>

// ✅ CORRECT - Footer props for modal actions, content buttons in children
<Modal
  title="Edit Form"
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel="Save"
  onCancel={() => setOpen(false)}
  onPrimary={handleSave}
>
  <form>
    <input name="email" />
    <Button onClick={generateEmail}>Generate Email</Button>  {/* ✅ Content button - OK! */}
  </form>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"step-by-step-implementation",children:"STEP-BY-STEP IMPLEMENTATION"}),`
`,n.jsx(e.h3,{id:"step-1-simple-confirmation-dialog",children:"Step 1: Simple Confirmation Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Single button for simple confirmations
<Modal
  title="Confirm Action"
  primaryLabel="Continue"        // Single button (DEFAULT)
  onPrimary={() => {
    performAction();
    setShowModal(false);
  }}
  open={showModal}
  onOpenChange={setShowModal}
>
  <div style={{ padding: '16px' }}>
    <p>Click Continue to perform this action.</p>
  </div>
</Modal>

// Only use multiple buttons when user needs choice
<Modal
  title="Confirm Deletion"
  footerVariant="cancelAndActions"  // When user needs to cancel
  cancelLabel="No, Cancel"
  primaryLabel="Yes, Delete"
  onCancel={() => setShowModal(false)}
  onPrimary={() => {
    performAction();
    setShowModal(false);
  }}
>
  <div style={{ padding: '16px' }}>
    <p>Are you sure you want to delete this item?</p>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"step-2-form-modal",children:"Step 2: Form Modal"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Single button for forms
<Modal
  title="Add New User"
  primaryLabel="Add User"         // Single submit button (DEFAULT)
  onPrimary={() => submitUser(formData)}
>
  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <input
      placeholder="Full Name"
      value={formData.name}
      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
    />
    <input
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
    />
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"step-3-scrollable-content",children:"Step 3: Scrollable Content"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Single button for simple acceptance
<Modal
  title="Terms and Conditions"
  scrollable={true}
  maxHeight="60vh"
  primaryLabel="I Understand"     // Single button (DEFAULT)
  onPrimary={() => acceptTerms()}
>
  <div>
    <h3>1. Introduction</h3>
    <p>Long content that will scroll...</p>
    {/* More content sections */}
  </div>
</Modal>

// Use multiple buttons only when user needs choice
<Modal
  title="Terms and Conditions"
  scrollable={true}
  maxHeight="60vh"
  footerVariant="cancelAndActions"  // When user can decline
  cancelLabel="Decline"
  primaryLabel="Accept"
  onCancel={() => setShowModal(false)}
  onPrimary={() => acceptTerms()}
>
  <div>
    <h3>1. Introduction</h3>
    <p>Long content that will scroll...</p>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"footer-variants",children:"Footer Variants"}),`
`,n.jsx(e.h3,{id:"default-single-button-most-common",children:"Default: Single Button (Most Common)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ DEFAULT: Use this pattern first
<Modal
  primaryLabel="Save"         // Single button (DEFAULT)
  onPrimary={handleSave}
>
  {/* Content only */}
</Modal>
// Renders:                   [Save]
`})}),`
`,n.jsx(e.h3,{id:"cancelandactions-use-only-when-multiple-buttons-needed",children:"cancelAndActions (Use Only When Multiple Buttons Needed)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Use only when user needs choice between cancel and action
<Modal
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"        // Left side
  primaryLabel="Save"         // Right side
  secondaryLabel="Draft"      // Right side
>
  {/* Content only */}
</Modal>
// Renders: [Cancel]           [Draft] [Save]
`})}),`
`,n.jsx(e.h3,{id:"swapandactions",children:"swapAndActions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  footerVariant="swapAndActions"
  swapContent={<span>Auto-saved</span>}  // Left side
  primaryLabel="Publish"                 // Right side
>
  {/* Content only */}
</Modal>
// Renders: [Auto-saved]       [Publish]
`})}),`
`,n.jsx(e.h3,{id:"actionsonly",children:"actionsOnly"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  footerVariant="actionsOnly"
  primaryLabel="Continue"     // Right side
  secondaryLabel="Back"       // Right side
>
  {/* Content only */}
</Modal>
// Renders:                   [Back] [Continue]
`})}),`
`,n.jsx(e.h2,{id:"width-sizes",children:"Width Sizes"}),`
`,n.jsx(e.h3,{id:"small-width-424px",children:"Small Width (424px)"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal width="small" title="Small Modal">
  <div style={{ padding: '16px' }}>Perfect for confirmations</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"medium-width-620px---default",children:"Medium Width (620px) - Default"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal width="medium" title="Medium Modal">
  <div style={{ padding: '16px' }}>Ideal for most content</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"large-width-980px",children:"Large Width (980px)"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal width="large" title="Large Modal">
  <div style={{ padding: '16px' }}>For complex content</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"custom-width",children:"Custom Width"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal width="custom" customWidth="50rem" title="Custom Width">
  <div style={{ padding: '16px' }}>Custom dimensions</div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"content-padding-control",children:"Content Padding Control"}),`
`,n.jsx(e.h3,{id:"default-padding",children:"Default Padding"}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal title="Default Padding">
  <div>Content with default padding (--t-space-500)</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"custom-padding",children:"Custom Padding"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal contentPadding="var(--t-space-700)" title="Custom Padding">
  <div>Content with larger padding</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"no-padding",children:"No Padding"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal contentPadding="0" title="No Padding">
  <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
    Custom layout control
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"component-integration",children:"Component Integration"}),`
`,n.jsx(e.h3,{id:"with-select-components",children:"With Select Components"}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title="User Preferences"
  scrollable={true}
  maxHeight="500px"
  footerVariant="cancelAndActions"
  primaryLabel="Save"
>
  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select
      label="Country"
      options={countryOptions}
      value={preferences.country}
      onValueChange={(value) => setPreferences(prev => ({ ...prev, country: value }))}
    />
    <Select
      label="Language"
      options={languageOptions}
      value={preferences.language}
      onValueChange={(value) => setPreferences(prev => ({ ...prev, language: value }))}
    />
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"scrollable-content-example",children:"Scrollable Content Example"}),`
`,n.jsx(t,{of:g}),`
`,n.jsx(e.h2,{id:"rtl-support",children:"RTL Support"}),`
`,n.jsx(e.p,{children:"The Modal automatically supports RTL when used with ThemeProvider:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider } from '@tagaddod-design/react';

<ThemeProvider defaultDirection="rtl" defaultLocale="ar">
  <Modal
    title="عنوان النافذة"
    cancelLabel="إلغاء"
    primaryLabel="تأكيد"
  >
    <div style={{ padding: '16px', textAlign: 'right' }}>
      محتوى النافذة باللغة العربية
    </div>
  </Modal>
</ThemeProvider>
`})}),`
`,n.jsx(e.h3,{id:"arabic-content-example",children:"Arabic Content Example"}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"confirmation-dialog",children:"Confirmation Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const DeleteConfirmation = ({ item, onConfirm }) => (
  <Modal
    title="Confirm Deletion"
    width="small"
    footerVariant="cancelAndActions"
    cancelLabel="Keep Item"
    primaryLabel={\`Delete \${item.type}\`}
    onCancel={closeModal}
    onPrimary={() => onConfirm(item.id)}
  >
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <p>Delete <strong>{item.name}</strong>?</p>
    </div>
  </Modal>
);
`})}),`
`,n.jsx(e.h3,{id:"information-display",children:"Information Display"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title="User Details"
  showFooter={false}  // No modal-level actions needed
>
  <div style={{ padding: '16px' }}>
    <h3>John Doe</h3>
    <p><strong>Email:</strong> john@example.com</p>
    <p><strong>Role:</strong> Administrator</p>

    {/* Content buttons are fine in children! */}
    <Button onClick={handleResetPassword}>Reset Password</Button>
    <Button onClick={handleSendEmail}>Send Email</Button>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"content-management-with-action-buttons",children:"Content Management with Action Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title="User Management"
  primaryLabel="Close"
  onPrimary={() => setOpen(false)}
>
  <div style={{ padding: '16px' }}>
    <div style={{ marginBottom: '16px' }}>
      <Button onClick={handleAddUser}>Add New User</Button>
    </div>

    {users.map(user => (
      <div key={user.id} style={{ display: 'flex', gap: '8px', padding: '8px', borderBottom: '1px solid #eee' }}>
        <span>{user.name}</span>
        <Button variant="plain" onClick={() => handleEdit(user)}>Edit</Button>
        <Button variant="plain" tone="critical" onClick={() => handleDelete(user)}>Delete</Button>
      </div>
    ))}
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"multi-step-form",children:"Multi-Step Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title={\`Step \${currentStep} of 3\`}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel={currentStep === 3 ? "Complete" : "Next"}
  secondaryLabel={currentStep > 1 ? "Back" : undefined}
  showSecondaryButton={currentStep > 1}
  onCancel={closeModal}
  onPrimary={currentStep === 3 ? completeForm : nextStep}
  onSecondary={previousStep}
>
  <div style={{ padding: '16px' }}>
    {/* Step content based on currentStep */}
    {currentStep === 1 && <PersonalInfoForm />}
    {currentStep === 2 && <AddressForm />}
    {currentStep === 3 && <ReviewForm />}
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"headerfooter-control",children:"Header/Footer Control"}),`
`,n.jsx(e.h3,{id:"without-title",children:"Without Title"}),`
`,n.jsx(t,{of:C}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal showTitle={false}>
  <div style={{ padding: '16px' }}>Content without title bar</div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"without-footer",children:"Without Footer"}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal title="Info Modal" showFooter={false}>
  <div style={{ padding: '16px' }}>
    Content without action buttons
    <div style={{ marginTop: '16px', textAlign: 'right' }}>
      <Button onClick={closeModal}>Close</Button>
    </div>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,n.jsx(e.h3,{id:"dynamic-footer-control",children:"Dynamic Footer Control"}),`
`,n.jsx(t,{of:M}),`
`,n.jsx(e.h3,{id:"footer-variants-showcase",children:"Footer Variants Showcase"}),`
`,n.jsx(t,{of:v}),`
`,n.jsx(t,{of:y}),`
`,n.jsx(t,{of:A}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Modal component provides comprehensive accessibility:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built on Radix UI Dialog primitive"}),`
`,n.jsx(e.li,{children:"Focus management and trapping"}),`
`,n.jsx(e.li,{children:"Keyboard navigation (Tab, Escape)"}),`
`,n.jsx(e.li,{children:"Proper ARIA attributes"}),`
`,n.jsx(e.li,{children:"Screen reader support"}),`
`,n.jsx(e.li,{children:"Background scroll prevention"}),`
`]}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-z-modal: 1050"})," - Modal z-index"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-z-drawer-modal: 1070"})," - Higher z-index when opened from drawer"]}),`
`,n.jsx(e.li,{children:"Design tokens for colors, spacing, typography"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"Compatible with all modern browsers with full RTL support."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-reference-for-ai-agents",children:"🎯 QUICK REFERENCE FOR AI AGENTS"}),`
`,n.jsx(e.h3,{id:"-do-this-content-with-buttons",children:"✅ DO THIS (Content with buttons):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title="User Management"
  primaryLabel="Close"
  onPrimary={() => setOpen(false)}
>
  <div>
    {/* ✅ Content buttons are fine! */}
    <Button onClick={addUser}>Add User</Button>
    <Button onClick={deleteUser}>Delete</Button>
  </div>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"-with-footer-modal-level-actions",children:"✅ With footer (modal-level actions):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal
  title="Edit Form"
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"  // Modal footer button
  primaryLabel="Save"   // Modal footer button
  onCancel={handleCancel}
  onPrimary={handleSave}
>
  <form>
    {/* ✅ Content buttons are fine here too! */}
    <Button onClick={generatePassword}>Generate Password</Button>
  </form>
</Modal>
`})}),`
`,n.jsx(e.h3,{id:"-never-do-this",children:"❌ NEVER DO THIS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Modal title="Edit Form">
  <form>Content</form>
  {/* ❌ Don't create modal footer buttons manually */}
  <div className="footer">
    <button>Cancel</button>  {/* Use footer props! */}
    <button>Save</button>
  </div>
</Modal>
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Remember: Content buttons go in ",n.jsx(e.code,{children:"children"})," (✅), modal footer buttons use props (✅), manual modal footers are wrong (❌)!"]})})]})}function un(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{un as default};
