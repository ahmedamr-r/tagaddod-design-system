import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as a}from"./index-BqIVwv1J.js";import{M as s,A as l,C as t}from"./index-BCgJJ4rA.js";import{D as d,a as o,b as c,C as h,W as p,S as m,F as u,c as x,d as w,e as g,f as j,g as f,U as D,R as C,h as v}from"./Drawer.stories-Ba-lVMYl.js";import{D as b}from"./Drawer-CJqTAku3.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-CoP_mZBT.js";import"./clsx-B-dksMZM.js";import"./createReactComponent-CKk3lApD.js";import"./Badge-BhZgywnl.js";import"./TextInput-CRZDgAAp.js";import"./index-QFq3N9B_.js";import"./index-DW48STyt.js";import"./index-D7-T4lOe.js";import"./index-N3eucVg6.js";import"./IconExclamationCircle-BYkI5IG6.js";import"./IconX-DigCVOFI.js";import"./Modal-C3Y6YLke.js";import"./ScrollArea-CS41QZ1X.js";import"./index-BTe66ZhM.js";import"./index-DAnQV6hb.js";import"./index-YtIeenAn.js";import"./index-BdQq_4o_.js";import"./Select-Bnkvnb3h.js";import"./index-9FI6h9_9.js";import"./index-CxljV1N8.js";import"./index-D5cGTUkh.js";import"./Combination-ZMr3b_jV.js";import"./index-DavpLpmr.js";import"./index-DXU_LAI1.js";import"./index-ComwvWTa.js";import"./IconChevronDown-D1vfiZl2.js";import"./IconChevronUp-BrVbvfGP.js";import"./IconSearch-BrVn1Pri.js";import"./IconCheck-DgTGwIHb.js";import"./IconArrowRight-Bc4wwjT_.js";import"./IconArrowLeft-DFM-AXyG.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(e.h1,{id:"-ai-coding-agent---critical-implementation-guide-",children:"🚨 AI CODING AGENT - CRITICAL IMPLEMENTATION GUIDE 🚨"}),`
`,n.jsx(e.h2,{id:"drawer-component-architecture---read-first",children:"DRAWER COMPONENT ARCHITECTURE - READ FIRST"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────┐
│ HEADER (Controlled by Props)       │ ← title, showTitle, headerPrefix, headerSuffix
├─────────────────────────────────────┤
│ BODY (Your Content Goes Here)      │ ← children prop ONLY
├─────────────────────────────────────┤
│ FOOTER (Controlled by Props)       │ ← footerVariant, primaryLabel, etc.
└─────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"-critical-mistakes-to-avoid",children:"❌ CRITICAL MISTAKES TO AVOID"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER create manual FOOTER action buttons in children"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER create drawer-level Cancel/Save/Submit buttons in children"})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER create ",n.jsx(e.code,{children:'<div className="footer">'})," in children"]})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER manually manage z-index for nested modals"})}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NOTE:"})," Buttons ",n.jsx(e.strong,{children:"within your content"}),' (like "Add Item", "Delete Row", etc.) are perfectly fine in children!']}),`
`,n.jsx(e.h2,{id:"-correct-implementation-pattern",children:"✅ CORRECT IMPLEMENTATION PATTERN"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Content buttons are fine, no footer buttons
<Drawer
  open={open}
  onOpenChange={setOpen}
  title="User Management"
  showFooter={false}
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
</Drawer>

// ✅ CORRECT - Footer props for drawer-level actions
<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Edit User"
  showFooter={true}
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
</Drawer>

// ❌ WRONG - Manual drawer-level footer buttons
<Drawer title="Edit User">
  <form>
    <input placeholder="Name" />
  </form>
  {/* ❌ DON'T CREATE DRAWER FOOTER BUTTONS HERE */}
  <div style={{ position: 'sticky', bottom: 0 }}>
    <button>Cancel</button>  {/* Use footer props instead! */}
    <button>Save</button>
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"-ai-implementation-checklist",children:"🎯 AI IMPLEMENTATION CHECKLIST"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"children"})," for body content (including content-level buttons)"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsxs(e.strong,{children:["DEFAULT: Use ",n.jsx(e.code,{children:"showFooter={false}"})," for simple content display"]})]}),`
`,n.jsx(e.li,{children:"[ ] Use footer props for drawer-level actions (Cancel, Save, Submit)"}),`
`,n.jsxs(e.li,{children:["[ ] Content buttons (Add, Edit, Delete items) go in ",n.jsx(e.code,{children:"children"})," - that's fine!"]}),`
`,n.jsx(e.li,{children:"[ ] Never create manual drawer footer bars"}),`
`,n.jsxs(e.li,{children:["[ ] Use ",n.jsx(e.code,{children:"useDrawerContext"})," automatically handles modal z-index"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"ALWAYS use default width first, custom width only when necessary"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"drawer-component",children:"Drawer Component"}),`
`,n.jsx(e.p,{children:"The Drawer component is a side panel that slides in from the edge of the screen to provide additional content or actions without navigating away from the current page. It includes sophisticated z-index management for complex component nesting."}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer, useDrawerContext } from '@tagaddod-design/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{of:b}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: Simple drawer without footer
import { useState } from 'react';
import { Drawer, Button } from '@tagaddod-design/react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Drawer Title"
      >
        <div>
          <p>This is a default drawer content.</p>
          <p>You can place any content here.</p>
        </div>
      </Drawer>
    </>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-common-ai-agent-mistakes",children:"❌ COMMON AI AGENT MISTAKES"}),`
`,n.jsx(e.h3,{id:"mistake-1-manual-drawer-footer-creation",children:"Mistake 1: Manual Drawer Footer Creation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Don't create drawer-level footer buttons manually
<Drawer title="Confirm Deletion">
  <p>Are you sure?</p>
  <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
    <button>Cancel</button>  {/* Drawer-level action - use footer props! */}
    <button>Delete</button>
  </div>
</Drawer>

// ✅ CORRECT - Use footer props for drawer actions
<Drawer
  title="Confirm Deletion"
  showFooter={true}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel="Delete"
  onCancel={() => setOpen(false)}
  onPrimary={handleDelete}
>
  <p>Are you sure you want to delete this item?</p>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"mistake-2-confusing-content-buttons-with-footer-buttons",children:"Mistake 2: Confusing Content Buttons with Footer Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Content buttons inside children are fine!
<Drawer title="User Management" showFooter={false}>
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
</Drawer>

// ❌ WRONG - Drawer-level footer actions in children
<Drawer title="Edit Form">
  <form>
    <input name="email" />
  </form>
  <div style={{position: 'sticky', bottom: 0}}>
    <button>Cancel</button>  {/* ❌ Use footer props instead! */}
    <button>Save</button>
  </div>
</Drawer>

// ✅ CORRECT - Footer props for drawer actions, content buttons in children
<Drawer
  title="Edit Form"
  showFooter={true}
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
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"mistake-3-manual-z-index-management",children:"Mistake 3: Manual Z-Index Management"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Manual z-index configuration
<Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
  <Modal
    open={modalOpen}
    onOpenChange={setModalOpen}
    style={{ zIndex: 9999 }}  // ❌ Don't do this
  >
    <Select options={options} />
  </Modal>
</Drawer>

// ✅ CORRECT - Automatic z-index via context
<Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
  <Modal open={modalOpen} onOpenChange={setModalOpen}>
    {/* Modal automatically uses correct z-index */}
    <Select options={options} />
  </Modal>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"step-by-step-implementation",children:"STEP-BY-STEP IMPLEMENTATION"}),`
`,n.jsx(e.h3,{id:"step-1-simple-information-display",children:"Step 1: Simple Information Display"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// DEFAULT: No footer for info display
<Drawer
  open={open}
  onOpenChange={setOpen}
  title="User Details"
  showFooter={false}  // No actions needed
>
  <div>
    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Email:</strong> john@example.com</p>
    <p><strong>Role:</strong> Administrator</p>
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"step-2-form-with-actions",children:"Step 2: Form with Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Use footer only for form submissions
<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Edit User"
  showFooter={true}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel="Save Changes"
  onCancel={() => setOpen(false)}
  onPrimary={() => submitForm(formData)}
>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"step-3-multi-step-flow",children:"Step 3: Multi-Step Flow"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Use back button for multi-step workflows
<Drawer
  open={open}
  onOpenChange={setOpen}
  title={\`Step \${step} of 3\`}
  showBackButton={true}
  step={step}
  onBackClick={() => setStep(step - 1)}
  showFooter={true}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"
  primaryLabel={step === 3 ? "Complete" : "Next"}
  onCancel={() => setOpen(false)}
  onPrimary={() => step === 3 ? complete() : setStep(step + 1)}
>
  <div>
    <p>This is step {step} of a multi-step drawer.</p>
    {/* Step-specific content */}
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"width-configuration",children:"Width Configuration"}),`
`,n.jsx(e.h3,{id:"default-width-recommended",children:"Default Width (Recommended)"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="Default Width Drawer"
  width="default"  // 28.125rem (450px) - optimal for most cases
>
  <div>Content with optimal width</div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"custom-width",children:"Custom Width"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Fixed width
<Drawer
  title="Custom Width"
  width="custom"
  customWidth="35rem"
  minWidth="25rem"  // Always enforced (400px minimum)
>
  <div>Custom sized content</div>
</Drawer>

// Responsive width
<Drawer
  width="custom"
  customWidth="clamp(25rem, 40vw, 50rem)"
>
  <div>Responsive content</div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"position",children:"Position"}),`
`,n.jsx(e.h3,{id:"right-default",children:"Right (Default)"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer position="right" title="Right Drawer">
  <div>Opens from right side</div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"left",children:"Left"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer position="left" title="Left Drawer">
  <div>Opens from left side</div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"header-configuration",children:"Header Configuration"}),`
`,n.jsx(e.h3,{id:"with-back-button",children:"With Back Button"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="Step 1 of 3"
  showBackButton={true}
  step={1}
  onBackClick={handleBack}
>
  <div>Multi-step content</div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"with-header-components",children:"With Header Components"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Badge, Button } from '@tagaddod-design/react';

<Drawer
  title="Document Title"
  headerPrefix={<Badge tone="info">Draft</Badge>}
  headerSuffix={<Button variant="plain" size="xSmall">Edit</Button>}
>
  <div>Content with header badges and actions</div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"footer-variants",children:"Footer Variants"}),`
`,n.jsx(e.h3,{id:"default-no-footer-most-common-for-info-display",children:"Default: No Footer (Most Common for Info Display)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ DEFAULT: Use this pattern for simple content
<Drawer
  title="Information"
  showFooter={false}  // Default, can be omitted
>
  <div>Content only</div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"cancelandactions-for-forms",children:"cancelAndActions (For Forms)"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Use only when form needs submit/cancel actions
<Drawer
  title="Edit Form"
  showFooter={true}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"        // Left side
  primaryLabel="Save"         // Right side
  secondaryLabel="Draft"      // Right side
  onCancel={() => setOpen(false)}
  onPrimary={handleSave}
  onSecondary={handleDraft}
>
  {/* Form content only */}
</Drawer>
// Renders: [Cancel]           [Draft] [Save]
`})}),`
`,n.jsx(e.h3,{id:"swapandactions",children:"swapAndActions"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  showFooter={true}
  footerVariant="swapAndActions"
  swapContent={<span>Auto-saved</span>}  // Left side
  primaryLabel="Publish"                 // Right side
>
  {/* Content only */}
</Drawer>
// Renders: [Auto-saved]       [Publish]
`})}),`
`,n.jsx(e.h3,{id:"actionsonly",children:"actionsOnly"}),`
`,n.jsx(t,{of:w}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  showFooter={true}
  footerVariant="actionsOnly"
  primaryLabel="Continue"     // Right side
  secondaryLabel="Back"       // Right side
>
  {/* Content only */}
</Drawer>
// Renders:                   [Back] [Continue]
`})}),`
`,n.jsx(e.h3,{id:"single-button-examples",children:"Single Button Examples"}),`
`,n.jsx(t,{of:g}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.h2,{id:"content-padding-control",children:"Content Padding Control"}),`
`,n.jsx(e.h3,{id:"default-padding",children:"Default Padding"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer title="Default Padding">
  <div>Content with default padding (var(--t-space-500) = 20px)</div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"custom-padding",children:"Custom Padding"}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="Custom Padding"
  contentPadding="var(--t-space-600)"  // 24px
>
  <div>Content with larger padding</div>
</Drawer>

// Available spacing tokens:
// var(--t-space-300) = 12px
// var(--t-space-400) = 16px
// var(--t-space-500) = 20px (default)
// var(--t-space-600) = 24px
// var(--t-space-700) = 32px

// Or use custom values
<Drawer contentPadding="2rem 1rem">
  <div>Custom asymmetric padding</div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"z-index-management--modal-integration",children:"Z-Index Management & Modal Integration"}),`
`,n.jsxs(e.p,{children:["The Drawer automatically manages z-index for nested components through ",n.jsx(e.code,{children:"DrawerContext"}),". ",n.jsx(e.strong,{children:"No manual configuration required."})]}),`
`,n.jsx(e.h3,{id:"automatic-z-index-for-nested-modals",children:"Automatic Z-Index for Nested Modals"}),`
`,n.jsx(t,{of:D}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer, Modal, Select, Button } from '@tagaddod-design/react';

// ✅ CORRECT - Automatic z-index management
function DrawerWithModal() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>

      <Drawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title="Employee Management"
      >
        <div>
          <Button onClick={() => setModalOpen(true)}>
            Add New Employee
          </Button>

          {/* Modal automatically detects drawer context and uses z-index: 1070 */}
          <Modal
            open={modalOpen}
            onOpenChange={setModalOpen}
            title="Add New Employee"
          >
            <div style={{ padding: '16px' }}>
              {/* Select automatically uses maximum z-index when in modal */}
              <Select
                label="Department"
                options={departmentOptions}
                searchable
              />
              <Select
                label="Position"
                options={positionOptions}
              />
            </div>
          </Modal>
        </div>
      </Drawer>
    </>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"z-index-hierarchy-automatic",children:"Z-Index Hierarchy (Automatic)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Automatically managed by the component */
Drawer Overlay:     z-index: 1019
Drawer Content:     z-index: 1020
Regular Modals:     z-index: 1050
Modals in Drawer:   z-index: 1070 (automatic)
Select Dropdowns:   z-index: 2147483647 (automatic)
`})}),`
`,n.jsx(e.h3,{id:"usedrawercontext-hook-optional---for-custom-components",children:"useDrawerContext Hook (Optional - For Custom Components)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useDrawerContext } from '@tagaddod-design/react';

function CustomComponentInDrawer() {
  const { isInsideDrawer, drawerZIndex } = useDrawerContext();

  // Only needed for custom modal-like components
  // Built-in components (Modal, Select) handle this automatically
  if (isInsideDrawer) {
    // Component is inside a drawer
    // drawerZIndex = 1070
  }

  return <div>Component content</div>;
}
`})}),`
`,n.jsx(e.h2,{id:"internationalization-and-rtl-support",children:"Internationalization and RTL Support"}),`
`,n.jsxs(e.p,{children:["The Drawer component provides comprehensive Right-to-Left (RTL) language support when used with the ",n.jsx(e.code,{children:"ThemeProvider"}),". This includes automatic font switching, proper drawer positioning, and directional icon handling."]}),`
`,n.jsx(e.h3,{id:"using-with-themeprovider",children:"Using with ThemeProvider"}),`
`,n.jsxs(e.p,{children:["For full RTL support, wrap your application with ",n.jsx(e.code,{children:"ThemeProvider"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider, Drawer, Button } from '@tagaddod-design/react';

function App() {
  return (
    <ThemeProvider defaultDirection="rtl" defaultLocale="ar">
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        title="درج جانبي"
        showFooter={true}
        cancelLabel="إلغاء"
        primaryLabel="حفظ"
      >
        <p>محتوى الدرج باللغة العربية</p>
      </Drawer>
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"automatic-rtl-adjustments",children:"Automatic RTL Adjustments"}),`
`,n.jsx(e.p,{children:"When RTL is enabled via ThemeProvider, the Drawer component automatically:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font Switching"}),": Changes from Outfit (English) to Tajawal (Arabic) font"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Drawer Position"}),": Always opens from left in RTL (following reading direction)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Header Layout"}),": Repositions title, prefix, and suffix elements for RTL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Line Height"}),": Applies ",n.jsx(e.code,{children:"var(--t-line-height-arabic, 1.5)"})," for Arabic text"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Direction"}),": Sets ",n.jsx(e.code,{children:'dir="rtl"'})," attribute on drawer content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Animation Direction"}),": Slide animations respect RTL reading direction"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button Labels"}),": Automatically applies Arabic aria-labels"]}),`
`]}),`
`,n.jsx(e.h3,{id:"directional-icon-handling",children:"Directional Icon Handling"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important"}),": The Drawer automatically handles back arrow direction. The back button icon automatically points in the correct direction based on the current language:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer, Button } from '@tagaddod-design/react';

function DirectionalDrawer() {
  // The drawer automatically handles back arrow direction internally:
  // In RTL: back arrow points right (→) - IconArrowRight
  // In LTR: back arrow points left (←) - IconArrowLeft

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      title={isRTL ? 'الإعدادات' : 'Settings'}
      showBackButton={true}
      onBackClick={handleBack}
      showFooter={true}
      primaryLabel={isRTL ? 'حفظ' : 'Save'}
      cancelLabel={isRTL ? 'إلغاء' : 'Cancel'}
    >
      <div>
        <p>{isRTL ? 'محتوى الإعدادات' : 'Settings content'}</p>
      </div>
    </Drawer>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"common-directional-icon-patterns",children:"Common Directional Icon Patterns"}),`
`,n.jsx(e.h4,{id:"back-navigation",children:'"Back" Navigation'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// English: ← Back (arrow points left)
// Arabic: رجوع → (arrow points right, matching RTL reading direction)
// Automatically handled by showBackButton prop

<Drawer
  showBackButton={true}
  onBackClick={handleBack}
  title={isRTL ? 'رجوع' : 'Back'}
>
  {/* Content */}
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"rtl-testing-example",children:"RTL Testing Example"}),`
`,n.jsx(t,{of:C}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div dir="rtl">
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="عنوان الدرج"
    showBackButton={true}
    showFooter={true}
    footerVariant="cancelAndActions"
    primaryLabel="حفظ"
    cancelLabel="إلغاء"
    onPrimary={() => setOpen(false)}
    onCancel={() => setOpen(false)}
  >
    <div style={{ textAlign: 'right' }}>
      <p>هذا محتوى الدرج باللغة العربية.</p>
      <p>يتم عرض النص بشكل صحيح مع المحاذاة المناسبة.</p>
    </div>
  </Drawer>
</div>
`})}),`
`,n.jsx(e.h3,{id:"rtl-best-practices",children:"RTL Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Always use ThemeProvider"})," for proper RTL support and font switching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Let drawer handle positioning"})," - it automatically adjusts slide direction for RTL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test with actual Arabic content"})," to ensure proper text rendering"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"useTheme"})," hook"]})," to access RTL state and theme information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Back button direction"})," is automatic - no manual icon selection needed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Direction follows reading flow"})," - not physical direction on screen"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test nested components"})," - ensure modals, selects work correctly in RTL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use semantic HTML"})," - apply ",n.jsx(e.code,{children:'dir="rtl"'})," to content containers when needed"]}),`
`]}),`
`,n.jsx(e.h2,{id:"full-height-control",children:"Full Height Control"}),`
`,n.jsx(t,{of:v}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="Full Height Drawer"
  fullHeight={true}  // Default, spans full viewport height
>
  <div>
    <div style={{ height: '1000px' }}>
      <p>This content area scrolls while header and footer remain fixed.</p>
    </div>
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"information-display",children:"Information Display"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const UserDetails = ({ user }) => (
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="User Details"
    showFooter={false}  // No drawer-level actions needed
  >
    <div>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      {/* Content buttons are fine in children! */}
      <Button onClick={handleResetPassword}>Reset Password</Button>
      <Button onClick={handleSendEmail}>Send Email</Button>
    </div>
  </Drawer>
);
`})}),`
`,n.jsx(e.h3,{id:"content-management-with-action-buttons",children:"Content Management with Action Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const UserManagement = ({ users }) => (
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="User Management"
    showFooter={false}  // No drawer footer - using content buttons instead
  >
    <div>
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
  </Drawer>
);
`})}),`
`,n.jsx(e.h3,{id:"form-entry",children:"Form Entry"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const EditForm = ({ data }) => (
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="Edit User"
    showFooter={true}
    footerVariant="cancelAndActions"
    cancelLabel="Cancel"
    primaryLabel="Save Changes"
    onCancel={() => setOpen(false)}
    onPrimary={handleSave}
  >
    <form>
      <input name="name" defaultValue={data.name} />
      <input name="email" defaultValue={data.email} />
    </form>
  </Drawer>
);
`})}),`
`,n.jsx(e.h3,{id:"multi-step-wizard",children:"Multi-Step Wizard"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MultiStepWizard = () => {
  const [step, setStep] = useState(1);

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      title={\`Step \${step} of 3\`}
      showBackButton={step > 1}
      step={step}
      onBackClick={() => setStep(step - 1)}
      showFooter={true}
      footerVariant="cancelAndActions"
      cancelLabel="Cancel"
      primaryLabel={step === 3 ? "Complete" : "Next"}
      onCancel={() => setOpen(false)}
      onPrimary={() => step === 3 ? complete() : setStep(step + 1)}
    >
      <div>
        {/* Step-specific content */}
        {step === 1 && <PersonalInfo />}
        {step === 2 && <AddressInfo />}
        {step === 3 && <Review />}
      </div>
    </Drawer>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"settings-panel",children:"Settings Panel"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const SettingsPanel = () => (
  <Drawer
    open={open}
    onOpenChange={setOpen}
    title="Settings"
    width="default"
    position="right"
  >
    <div>
      {/* Settings options */}
      <section>
        <h4>Preferences</h4>
        {/* Settings controls */}
      </section>
    </div>
  </Drawer>
);
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Drawer component provides comprehensive accessibility:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built on Vaul Drawer primitive for proper focus management"}),`
`,n.jsx(e.li,{children:"Focus trapping within drawer when open"}),`
`,n.jsx(e.li,{children:"Keyboard navigation (Tab, Escape)"}),`
`,n.jsx(e.li,{children:"Proper ARIA attributes"}),`
`,n.jsx(e.li,{children:"Screen reader support"}),`
`,n.jsx(e.li,{children:"Background scroll prevention"}),`
`,n.jsx(e.li,{children:"Proper heading hierarchy"}),`
`,n.jsx(e.li,{children:"Labeled buttons (back, close)"}),`
`]}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-z-drawer: 1020"})," - Drawer base z-index"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--t-z-drawer-modal: 1070"})," - Higher z-index for modals in drawer"]}),`
`,n.jsx(e.li,{children:"Design tokens for colors, spacing, typography"}),`
`,n.jsx(e.li,{children:"RTL-specific variables for line height and fonts"}),`
`]}),`
`,n.jsx(e.h3,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"Compatible with all modern browsers with full RTL support."}),`
`,n.jsx(e.h3,{id:"mobile-behavior",children:"Mobile Behavior"}),`
`,n.jsx(e.p,{children:"On smaller screens (below 640px):"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Full width drawer"}),`
`,n.jsx(e.li,{children:"Slides up from bottom"}),`
`,n.jsx(e.li,{children:"Maximum height of 80% viewport"}),`
`,n.jsx(e.li,{children:"Rounded corners at top"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-reference-for-ai-agents",children:"🎯 QUICK REFERENCE FOR AI AGENTS"}),`
`,n.jsx(e.h3,{id:"-do-this-content-with-buttons",children:"✅ DO THIS (Content with buttons):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="User Management"
  showFooter={false}  // No drawer footer needed
>
  <div>
    {/* ✅ Content buttons are fine! */}
    <Button onClick={addUser}>Add User</Button>
    <Button onClick={deleteUser}>Delete</Button>
  </div>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"-with-footer-drawer-level-actions",children:"✅ With footer (drawer-level actions):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer
  title="Edit Form"
  showFooter={true}
  footerVariant="cancelAndActions"
  cancelLabel="Cancel"  // Drawer footer button
  primaryLabel="Save"   // Drawer footer button
  onCancel={handleCancel}
  onPrimary={handleSave}
>
  <form>
    {/* ✅ Content buttons are fine here too! */}
    <Button onClick={generatePassword}>Generate Password</Button>
  </form>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"-nested-modal-automatic-z-index",children:"✅ Nested modal (automatic z-index):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
  <Modal open={modalOpen} onOpenChange={setModalOpen}>
    {/* Automatic z-index management */}
    <Select options={options} />
  </Modal>
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"-never-do-this",children:"❌ NEVER DO THIS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer title="Edit Form">
  <form>Content</form>
  {/* ❌ Don't create drawer footer buttons manually */}
  <div className="footer">
    <button>Cancel</button>  {/* Use footer props! */}
    <button>Save</button>
  </div>
</Drawer>
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Remember: Content buttons go in ",n.jsx(e.code,{children:"children"})," (✅), drawer footer buttons use props (✅), manual drawer footers are wrong (❌)!"]})})]})}function mn(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{mn as default};
