import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-DI2gBlDf.js";import{M as s,A as a,C as o}from"./index-BPXrzZIR.js";import{L as r,a as c,B as d,W as p,b as u,M as h,c as x,d as b,I as m,A as v}from"./Listbox.stories-vTjYswj5.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-BpZEF_5K.js";import"./index-DybOl1hA.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./IconCheck-PO1-3gxX.js";import"./createReactComponent-GuN14Mgc.js";import"./Popover-CgPZskr3.js";import"./index-DW48STyt.js";import"./index-CfQheYXo.js";import"./index-DUtlJRZ9.js";import"./index-DZCApzUK.js";import"./index-pvuVTQ3b.js";import"./index-BEsdyKtK.js";import"./index-Dh73ENUf.js";import"./index-B2x4RDPN.js";import"./IconChevronDown-BX0-z2hI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r}),`
`,e.jsx(n.h1,{id:"listbox-component",children:"Listbox Component"}),`
`,e.jsx(n.p,{children:"The Listbox component displays a list of selectable options, supporting both single and multiple selection modes."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Listboxes are used to present a list of options for users to select from. They're commonly used in dropdowns, menus, and selection contexts. The Listbox component supports rich features like icons, help text, dividers, and multi-select behavior."}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Listbox } from '@tagaddod/react';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ]}
  selectedValue="option1"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With Icons"}),`
`,e.jsx(n.p,{children:"You can add icons before options (prefix) and additional content after options (suffix)."}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { IconCheck, IconTag, IconStar } from '@tabler/icons-react';

<Listbox
  options={[
    { 
      label: 'Selected Option', 
      value: 'selected',
      prefix: <IconCheck size={16} />
    },
    { 
      label: 'Tagged Items', 
      value: 'tagged',
      prefix: <IconTag size={16} />,
      suffix: <span style={{fontSize: '12px', color: 'var(--t-color-text-subtle)'}}>12</span>
    },
    { 
      label: 'Favorites', 
      value: 'favorites',
      prefix: <IconStar size={16} />,
      suffix: <span style={{fontSize: '12px', color: 'var(--t-color-text-subtle)'}}>5</span>
    },
  ]}
  selectedValue="selected"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"with-help-text",children:"With Help Text"}),`
`,e.jsx(n.p,{children:"The Listbox supports adding descriptive help text to options."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { 
      label: 'Product Settings', 
      value: 'product',
      helpText: 'Manage product inventory and variations'
    },
    { 
      label: 'User Accounts', 
      value: 'users',
      helpText: 'Modify user permissions and access'
    },
    { 
      label: 'Payment Options', 
      value: 'payment',
      helpText: 'Configure available payment methods'
    },
  ]}
  selectedValue="product"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"multiple-selection",children:"Multiple Selection"}),`
`,e.jsx(n.p,{children:"The Listbox can be configured to allow multiple selections."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { IconSquareCheck, IconSquare } from '@tabler/icons-react';

function MultiSelectExample() {
  const [selected, setSelected] = useState(['option1', 'option3']);
  
  return (
    <Listbox
      options={[
        { 
          label: 'Option 1', 
          value: 'option1',
          prefix: selected.includes('option1') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
        },
        { 
          label: 'Option 2', 
          value: 'option2',
          prefix: selected.includes('option2') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
        },
        { 
          label: 'Option 3', 
          value: 'option3',
          prefix: selected.includes('option3') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
        },
        { 
          label: 'Option 4', 
          value: 'option4',
          prefix: selected.includes('option4') ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
        },
      ]}
      selectedValue={selected}
      multiple={true}
      onMultiSelect={setSelected}
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"disabled-options",children:"Disabled Options"}),`
`,e.jsx(n.p,{children:"Individual options can be disabled."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { label: 'Available Option', value: 'available' },
    { label: 'Disabled Option', value: 'disabled', disabled: true },
    { label: 'Another Available', value: 'another' },
    { label: 'Currently Unavailable', value: 'unavailable', disabled: true },
  ]}
  selectedValue="available"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"with-dividers",children:"With Dividers"}),`
`,e.jsx(n.p,{children:"Add dividers to visually separate groups of options."}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { label: 'Recent', value: 'recent', divider: true },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last Week', value: 'lastWeek', divider: true },
    { label: 'Last Month', value: 'lastMonth' },
    { label: 'Older', value: 'older' },
  ]}
  selectedValue="yesterday"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"in-popover",children:"In Popover"}),`
`,e.jsx(n.p,{children:"The Listbox component can be used inside a Popover for dropdown menus."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger, 
  PopoverRoot 
} from '@tagaddod/react';
import { IconChevronDown } from '@tabler/icons-react';

function DropdownExample() {
  const [selectedOption, setSelectedOption] = useState('filter1');
  const [open, setOpen] = useState(false);
  
  const options = [
    { label: 'Filter by Date', value: 'filter1' },
    { label: 'Filter by Status', value: 'filter2' },
    { label: 'Filter by Category', value: 'filter3' },
    { label: 'Filter by Priority', value: 'filter4' },
    { label: 'Filter by Assignee', value: 'filter5' },
  ];
  
  const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || 'Select...';
  
  return (
    <PopoverRoot open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="dropdown-button">
          {selectedLabel}
          <IconChevronDown size={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Listbox
          options={options}
          selectedValue={selectedOption}
          onSelect={(value) => {
            setSelectedOption(value.toString());
            setOpen(false);
          }}
          inPopover={true}
        />
      </PopoverContent>
    </PopoverRoot>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"The Listbox component properly handles Right-to-Left (RTL) languages by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Adjusting layout direction for RTL text flow"}),`
`,e.jsx(n.li,{children:"Applying appropriate line height for Arabic text"}),`
`,e.jsx(n.li,{children:"Correctly aligning text and content in RTL contexts"}),`
`]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div dir="rtl">
  <Listbox
    options={[
      { label: 'الخيار الأول', value: 'option1' },
      { label: 'الخيار الثاني', value: 'option2' },
      { label: 'الخيار الثالث', value: 'option3', helpText: 'نص توضيحي للمساعدة' },
    ]}
    selectedValue="option1"
    onSelect={(value) => console.log('Selected:', value)}
  />
</div>
`})}),`
`,e.jsx(n.h2,{id:"custom-content",children:"Custom Content"}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"customContent"})," prop to provide completely custom content for list options:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { 
      label: "Custom Option", // Required but not shown
      value: "custom1", 
      customContent: (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          padding: '4px 0'
        }}>
          <span style={{ fontWeight: 'bold' }}>Custom Option</span>
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            alignItems: 'center',
            marginTop: '4px' 
          }}>
            <span style={{ 
              background: '#e8f6ff', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              Tag 1
            </span>
            <span style={{ 
              background: '#fff0e8', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              Tag 2
            </span>
          </div>
        </div>
      )
    },
    // More options...
  ]}
  selectedValue="custom1"
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"max-visible-options",children:"Max Visible Options"}),`
`,e.jsxs(n.p,{children:["You can limit the number of visible options with the ",e.jsx(n.code,{children:"maxVisibleOptions"})," prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
    { label: 'Option 7', value: 'option7' },
  ]}
  selectedValue="option1"
  maxVisibleOptions={3}
  onSelect={(value) => console.log('Selected:', value)}
/>
`})}),`
`,e.jsx(n.h2,{id:"use-cases",children:"Use Cases"}),`
`,e.jsx(n.h3,{id:"dropdown-menus",children:"Dropdown Menus"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<PopoverRoot>
  <PopoverTrigger>
    <Button>Open Menu</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Listbox
      options={[
        { label: 'Edit', value: 'edit', prefix: <IconEdit size={16} /> },
        { label: 'Duplicate', value: 'duplicate', prefix: <IconCopy size={16} /> },
        { label: 'Archive', value: 'archive', prefix: <IconArchive size={16} /> },
        { label: 'Delete', value: 'delete', prefix: <IconTrash size={16} /> },
      ]}
      onSelect={handleMenuAction}
      inPopover={true}
    />
  </PopoverContent>
</PopoverRoot>
`})}),`
`,e.jsx(n.h3,{id:"filter-selections",children:"Filter Selections"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={[
    { 
      label: 'All Tasks', 
      value: 'all',
      helpText: 'Show tasks from all projects'
    },
    { 
      label: 'My Tasks', 
      value: 'my',
      helpText: 'Only show tasks assigned to me'
    },
    { 
      label: 'Completed', 
      value: 'completed',
      helpText: 'Show only completed tasks'
    },
  ]}
  selectedValue={filterValue}
  onSelect={setFilterValue}
/>
`})}),`
`,e.jsx(n.h3,{id:"checkbox-lists",children:"Checkbox Lists"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Listbox
  options={permissions.map(perm => ({
    label: perm.name,
    value: perm.id,
    helpText: perm.description,
    prefix: selectedPermissions.includes(perm.id) ? <IconSquareCheck size={16} /> : <IconSquare size={16} />
  }))}
  selectedValue={selectedPermissions}
  multiple={true}
  onMultiSelect={setSelectedPermissions}
/>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component follows WAI-ARIA listbox pattern with proper roles and attributes"}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:'role="listbox"'})," and ",e.jsx(n.code,{children:"aria-multiselectable"})," for multiple selection"]}),`
`,e.jsxs(n.li,{children:["Each option has ",e.jsx(n.code,{children:'role="option"'})," and appropriate ",e.jsx(n.code,{children:"aria-selected"})," state"]}),`
`,e.jsx(n.li,{children:"Supports keyboard navigation (arrow keys, Home/End, Enter)"}),`
`,e.jsx(n.li,{children:"Provides accessible focus management"}),`
`,e.jsx(n.li,{children:"Maintains a logical tab order"}),`
`,e.jsx(n.li,{children:"Uses proper ARIA attributes for selected state"}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The Listbox component uses the following token CSS variables:"}),`
`,e.jsxs(n.p,{children:[`| Variable | Purpose |
|----------|---------|
| `,e.jsx(n.code,{children:"--t-space-*"}),` | Padding and spacing |
| `,e.jsx(n.code,{children:"--t-color-surface-*"}),` | Background colors |
| `,e.jsx(n.code,{children:"--t-color-text-*"}),` | Text colors |
| `,e.jsx(n.code,{children:"--t-color-border-*"}),` | Border colors |
| `,e.jsx(n.code,{children:"--t-font-family-body"}),` | Text font |
| `,e.jsx(n.code,{children:"--t-font-size-body-*"}),` | Font sizes |
| `,e.jsx(n.code,{children:"--t-font-weight-*"}),` | Font weights |
| `,e.jsx(n.code,{children:"--t-border-radius-200"}),` | Border radius |
| `,e.jsx(n.code,{children:"--t-color-border-focus"}),` | Focus outline color |
| `,e.jsx(n.code,{children:"--t-line-height-arabic"}),` | Line height for Arabic text |
| `,e.jsx(n.code,{children:"--t-line-height-english"})," | Line height for English text |"]}),`
`,e.jsx(n.h3,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"The Listbox component consists of two main parts:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Listbox"}),": The container component that manages the list options, selection state, and keyboard navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ListboxOption"}),": The individual option component that renders each selectable item"]}),`
`]}),`
`,e.jsx(n.p,{children:"This architecture provides:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clean separation of concerns"}),`
`,e.jsx(n.li,{children:"Flexible option configuration"}),`
`,e.jsx(n.li,{children:"Proper event handling"}),`
`,e.jsx(n.li,{children:"Accessibility compliance"}),`
`]}),`
`,e.jsx(n.h3,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(n.p,{children:"The Listbox component is compatible with all modern browsers and includes RTL language support."})]})}function E(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
