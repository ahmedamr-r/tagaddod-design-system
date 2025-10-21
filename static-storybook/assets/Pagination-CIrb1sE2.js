import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as r,A as o,C as a}from"./index-BCgJJ4rA.js";import{P as l,C as c,L as d,S as g,W as h,a as p,R as u}from"./Pagination.stories-DBbQ36g-.js";import{P as x}from"./Pagination-Dn8wtTIX.js";import"./index-D4H_InIO.js";import"./iframe-BpBrZJOc.js";import"./index-C-Cn8Fdj.js";import"./index-DzKAYa42.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Button-CoP_mZBT.js";import"./createReactComponent-CKk3lApD.js";import"./Popover-B4T-UWsl.js";import"./index-Dcu5jVSv.js";import"./index-DW48STyt.js";import"./index-D7-T4lOe.js";import"./index-CxljV1N8.js";import"./index-DAnQV6hb.js";import"./index-D5cGTUkh.js";import"./Combination-ZMr3b_jV.js";import"./index-N3eucVg6.js";import"./index-BTe66ZhM.js";import"./index-DavpLpmr.js";import"./Drawer-CJqTAku3.js";import"./IconArrowRight-Bc4wwjT_.js";import"./IconArrowLeft-DFM-AXyG.js";import"./IconX-DigCVOFI.js";import"./IconChevronLeft-BDjp6y3L.js";import"./IconChevronRight-D3J9D-fl.js";import"./IconChevronDown-D1vfiZl2.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l}),`
`,n.jsx(e.h1,{id:"-ai-coding-agent---critical-implementation-guide-",children:"🚨 AI CODING AGENT - CRITICAL IMPLEMENTATION GUIDE 🚨"}),`
`,n.jsx(e.h2,{id:"pagination-component-architecture---read-first",children:"PAGINATION COMPONENT ARCHITECTURE - READ FIRST"}),`
`,n.jsxs(e.p,{children:["The Pagination component is a ",n.jsx(e.strong,{children:"CONTROLLED component"})," - you MUST manage state externally!"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`┌─────────────────────────────────────────────────────────────────┐
│ YOUR COMPONENT (Manages State)                                  │
│                                                                  │
│  const [currentPage, setCurrentPage] = useState(1);            │
│  const [pageSize, setPageSize] = useState(10);                 │
│                                                                  │
│  <Pagination                                                    │
│    total={data.length}           ← Total items count           │
│    current={currentPage}         ← Current page (controlled)   │
│    pageSize={pageSize}           ← Items per page              │
│    onChange={(page, size) => {   ← Page change handler         │
│      setCurrentPage(page);                                      │
│      setPageSize(size);                                         │
│    }}                                                           │
│  />                                                             │
└─────────────────────────────────────────────────────────────────┘
`})}),`
`,n.jsx(e.h2,{id:"-critical-mistakes-to-avoid",children:"❌ CRITICAL MISTAKES TO AVOID"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER use Pagination without managing state"})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER forget to provide ",n.jsx(e.code,{children:"onChange"})," callback"]})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER use wrong ",n.jsx(e.code,{children:"total"})," value (must be TOTAL ITEMS, not total pages)"]})}),`
`,n.jsx(e.li,{children:n.jsxs(e.strong,{children:["❌ NEVER forget to slice/filter data based on ",n.jsx(e.code,{children:"current"})," and ",n.jsx(e.code,{children:"pageSize"})]})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"❌ NEVER assume page persists when changing page size (resets to page 1)"})}),`
`]}),`
`,n.jsx(e.h2,{id:"-correct-implementation-pattern",children:"✅ CORRECT IMPLEMENTATION PATTERN"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ✅ CORRECT - Complete pagination with data slicing
import { useState } from 'react';
import { Pagination } from '@tagaddod-design/react';

function UserList() {
  // Sample data (could be from API)
  const allUsers = [...]; // 100 users

  // State management (REQUIRED)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Calculate which data to display
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = allUsers.slice(startIndex, endIndex);

  // Handle page changes
  const handlePageChange = (page: number, newPageSize: number) => {
    setCurrentPage(page);
    setPageSize(newPageSize);

    // Optional: Fetch new data from API
    // fetchUsers(page, newPageSize);
  };

  return (
    <div>
      {/* Display current page data */}
      <table>
        {currentData.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
          </tr>
        ))}
      </table>

      {/* Pagination controls */}
      <Pagination
        total={allUsers.length}      // Total items (NOT pages)
        current={currentPage}         // Controlled state
        pageSize={pageSize}           // Items per page
        onChange={handlePageChange}   // Update state
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-wrong-patterns",children:"❌ WRONG PATTERNS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Missing state management
<Pagination total={100} />  // Won't work - needs current and onChange!

// ❌ WRONG - Using total pages instead of total items
<Pagination total={10} />   // If you have 100 items, use 100, not 10!

// ❌ WRONG - Not slicing data
const allUsers = [...100 users];
<div>
  {allUsers.map(user => <div>{user.name}</div>)}  // Shows all 100!
  <Pagination total={100} current={1} pageSize={10} onChange={...} />
</div>

// ✅ CORRECT - Slice data based on current page
const currentUsers = allUsers.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
);
<div>
  {currentUsers.map(user => <div>{user.name}</div>)}  // Shows 10
  <Pagination total={100} current={currentPage} pageSize={pageSize} onChange={...} />
</div>
`})}),`
`,n.jsx(e.h2,{id:"-ai-implementation-checklist",children:"🎯 AI IMPLEMENTATION CHECKLIST"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Create state: ",n.jsx(e.code,{children:"const [currentPage, setCurrentPage] = useState(1)"})]}),`
`,n.jsxs(e.li,{children:["[ ] Create state: ",n.jsx(e.code,{children:"const [pageSize, setPageSize] = useState(10)"})]}),`
`,n.jsxs(e.li,{children:["[ ] Pass ",n.jsx(e.code,{children:"total"})," as TOTAL ITEMS COUNT (not pages)"]}),`
`,n.jsxs(e.li,{children:["[ ] Pass ",n.jsx(e.code,{children:"current={currentPage}"})," (controlled)"]}),`
`,n.jsxs(e.li,{children:["[ ] Pass ",n.jsx(e.code,{children:"pageSize={pageSize}"})," (controlled)"]}),`
`,n.jsxs(e.li,{children:["[ ] Provide ",n.jsx(e.code,{children:"onChange"})," callback to update state"]}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.strong,{children:"CRITICAL:"})," Slice/filter data based on ",n.jsx(e.code,{children:"currentPage"})," and ",n.jsx(e.code,{children:"pageSize"})]}),`
`,n.jsxs(e.li,{children:["[ ] For API pagination: fetch data in ",n.jsx(e.code,{children:"onChange"})," callback"]}),`
`,n.jsxs(e.li,{children:["[ ] Understand: changing ",n.jsx(e.code,{children:"pageSize"})," resets to page 1 automatically"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"pagination-component",children:"Pagination Component"}),`
`,n.jsxs(e.p,{children:["The Pagination component provides navigation controls for large datasets, allowing users to browse through pages of content. It's a ",n.jsx(e.strong,{children:"controlled component"})," that requires external state management and is commonly used with the Table component."]}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Pagination } from '@tagaddod-design/react';
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h2,{id:"basic-usage-controlled",children:"Basic Usage (Controlled)"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Pagination } from '@tagaddod-design/react';

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Your data (could be from state, props, or API)
  const allItems = [...]; // Array of items

  // Calculate which items to show
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = allItems.slice(startIndex, endIndex);

  return (
    <div>
      {/* Display current page items */}
      <YourContent data={currentItems} />

      {/* Pagination controls */}
      <Pagination
        total={allItems.length}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"-common-ai-agent-mistakes",children:"❌ COMMON AI AGENT MISTAKES"}),`
`,n.jsx(e.h3,{id:"mistake-1-missing-state-management",children:"Mistake 1: Missing State Management"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Component won't work without state
function MyComponent() {
  const data = [...100 items];

  return (
    <div>
      <YourContent data={data} />
      <Pagination total={100} />  {/* Missing current, pageSize, onChange! */}
    </div>
  );
}

// ✅ CORRECT - Properly managed state
function MyComponent() {
  const data = [...100 items];
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const currentData = data.slice((page - 1) * size, page * size);

  return (
    <div>
      <YourContent data={currentData} />
      <Pagination
        total={100}
        current={page}
        pageSize={size}
        onChange={(newPage, newSize) => {
          setPage(newPage);
          setSize(newSize);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"mistake-2-confusing-total-items-with-total-pages",children:"Mistake 2: Confusing Total Items with Total Pages"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - total should be ITEMS, not PAGES
const totalPages = Math.ceil(100 / 10); // 10 pages
<Pagination total={totalPages} />  // ❌ WRONG!

// ✅ CORRECT - total is total ITEMS count
<Pagination total={100} pageSize={10} />  // ✅ Component calculates pages
`})}),`
`,n.jsx(e.h3,{id:"mistake-3-not-slicing-data",children:"Mistake 3: Not Slicing Data"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - Showing all data, not just current page
function UserList() {
  const allUsers = [...100 users];
  const [page, setPage] = useState(1);

  return (
    <div>
      {allUsers.map(user => <UserRow user={user} />)}  {/* Shows all 100! */}
      <Pagination total={100} current={page} onChange={(p) => setPage(p)} />
    </div>
  );
}

// ✅ CORRECT - Only show current page data
function UserList() {
  const allUsers = [...100 users];
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  // Calculate current page data
  const start = (page - 1) * size;
  const currentUsers = allUsers.slice(start, start + size);

  return (
    <div>
      {currentUsers.map(user => <UserRow user={user} />)}  {/* Shows 10 */}
      <Pagination
        total={allUsers.length}
        current={page}
        pageSize={size}
        onChange={(p, s) => {
          setPage(p);
          setSize(s);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"mistake-4-not-handling-page-size-changes",children:"Mistake 4: Not Handling Page Size Changes"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ WRONG - onChange doesn't update pageSize
<Pagination
  total={100}
  current={page}
  pageSize={pageSize}
  onChange={(newPage) => setPage(newPage)}  // Missing size parameter!
/>

// ✅ CORRECT - Handle both page and size changes
<Pagination
  total={100}
  current={page}
  pageSize={pageSize}
  onChange={(newPage, newSize) => {
    setPage(newPage);
    setSize(newSize);
  }}
/>
`})}),`
`,n.jsx(e.h2,{id:"step-by-step-implementation",children:"STEP-BY-STEP IMPLEMENTATION"}),`
`,n.jsx(e.h3,{id:"step-1-static-data-pagination",children:"Step 1: Static Data Pagination"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Simple pagination with static data
function ProductList() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // ... 100 products total
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Calculate which products to show
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={products.length}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"step-2-api-pagination-client-side",children:"Step 2: API Pagination (Client-Side)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Pagination with data from API (all data loaded at once)
function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);

  // Fetch all users once
  useEffect(() => {
    fetchAllUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  // Calculate current page users
  const startIndex = (currentPage - 1) * pageSize;
  const currentUsers = users.slice(startIndex, startIndex + pageSize);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        total={users.length}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"step-3-api-pagination-server-side",children:"Step 3: API Pagination (Server-Side)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Pagination with server-side data fetching
function OrderList() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data whenever page or size changes
  useEffect(() => {
    setLoading(true);
    fetchOrders(currentPage, pageSize).then(response => {
      setOrders(response.data);
      setTotalItems(response.total);
      setLoading(false);
    });
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
    // Data will be fetched in useEffect
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.number}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        total={totalItems}          // Total from server
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"step-4-with-table-component",children:"Step 4: With Table Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Pagination integrated with Table component
import { Table, Pagination } from '@tagaddod-design/react';

function DataTable() {
  const [data, setData] = useState([...]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Calculate current page data
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];

  return (
    <div>
      <Table
        columns={columns}
        data={currentData}
      />

      <Pagination
        total={data.length}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"count-type-variants",children:"Count Type Variants"}),`
`,n.jsx(e.h3,{id:"long-count-type-default",children:"Long Count Type (Default)"}),`
`,n.jsx(a,{of:d}),`
`,n.jsxs(e.p,{children:["Shows page numbers with ellipsis (",n.jsx(e.code,{children:"..."}),") when there are many pages. Displays 1 sibling page on each side of the current page."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={500}
  current={6}
  countType="long"  // Default - shows ellipsis for many pages
  pageSize={10}
  onChange={handleChange}
/>
// Displays: [Prev] 1 ... 5 6 7 ... 50 [Next]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When to use:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"8+ total pages"}),`
`,n.jsx(e.li,{children:"Default for most use cases"}),`
`,n.jsx(e.li,{children:"Table pagination with many items"}),`
`]}),`
`,n.jsx(e.h3,{id:"short-count-type",children:"Short Count Type"}),`
`,n.jsx(a,{of:g}),`
`,n.jsx(e.p,{children:"Shows all page numbers without ellipsis. Only shows the current page without siblings."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={80}
  current={3}
  countType="short"  // No ellipsis, all pages shown
  pageSize={10}
  onChange={handleChange}
/>
// Displays: [Prev] 1 2 3 4 5 6 7 8 [Next]
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When to use:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"8 or fewer total pages"}),`
`,n.jsx(e.li,{children:"Compact layouts"}),`
`,n.jsx(e.li,{children:"When you want all pages visible"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Automatic behavior:"})," If you have more than 8 pages, use ",n.jsx(e.code,{children:'countType="long"'})," to prevent UI overflow."]}),`
`,n.jsx(e.h2,{id:"visual-options",children:"Visual Options"}),`
`,n.jsx(e.h3,{id:"without-count-text",children:"Without Count Text"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={100}
  current={1}
  showCount={false}  // Hide "Showing X to Y of Z entries"
  onChange={handleChange}
/>
`})}),`
`,n.jsx(e.h3,{id:"without-rows-per-page-selector",children:"Without Rows Per Page Selector"}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={100}
  current={1}
  showRowsInPage={false}  // Hide page size dropdown
  onChange={handleChange}
/>
`})}),`
`,n.jsx(e.h3,{id:"minimal-pagination-both-hidden",children:"Minimal Pagination (Both Hidden)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={100}
  current={1}
  showCount={false}
  showRowsInPage={false}
  onChange={handleChange}
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"When to use minimal:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Outside Table component"}),`
`,n.jsx(e.li,{children:"Compact mobile layouts"}),`
`,n.jsx(e.li,{children:"Simple list pagination"}),`
`]}),`
`,n.jsx(e.h2,{id:"page-size-options",children:"Page Size Options"}),`
`,n.jsx(e.p,{children:"Customize available page sizes in the dropdown:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={500}
  current={1}
  pageSize={20}
  pageSizeOptions={[10, 20, 50, 100]}  // Default
  onChange={handleChange}
/>

// Custom options
<Pagination
  total={1000}
  current={1}
  pageSize={25}
  pageSizeOptions={[25, 50, 75, 100, 150, 200]}
  onChange={handleChange}
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," When user changes page size, the component automatically resets to page 1."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// User is on page 5 with 10 items per page
// User changes to 50 items per page
// Component automatically goes to page 1
// This prevents showing empty pages
`})}),`
`,n.jsx(e.h2,{id:"rtl-support",children:"RTL Support"}),`
`,n.jsx(e.p,{children:"The Pagination component automatically supports RTL with complete Arabic text and proper icon direction."}),`
`,n.jsx(e.h3,{id:"automatic-rtl-detection",children:"Automatic RTL Detection"}),`
`,n.jsx(a,{of:u}),`
`,n.jsx(e.p,{children:"The component automatically detects RTL mode and adjusts:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Navigation Icons"}),": Previous/Next buttons swap icons in RTL"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["LTR: ",n.jsx(e.code,{children:"[← Prev] [1] [2] [3] [Next →]"})]}),`
`,n.jsxs(e.li,{children:["RTL: ",n.jsx(e.code,{children:"[→ التالي] [3] [2] [1] [السابق ←]"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Page Numbers"}),": Reversed order in RTL (highest to lowest)"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["LTR: ",n.jsx(e.code,{children:"1 2 3 4 5"})]}),`
`,n.jsxs(e.li,{children:["RTL: ",n.jsx(e.code,{children:"5 4 3 2 1"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Count Text"}),": Arabic format"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'English: "Showing 1 to 10 of 100 entries"'}),`
`,n.jsx(e.li,{children:'Arabic: "عرض 1 إلى 10 من أصل 100"'}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Rows Dropdown"}),": Reversed layout"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'English: "Rows in Page [10] ▼"'}),`
`,n.jsx(e.li,{children:'Arabic: "▼ [10] عدد الصفوف"'}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// RTL mode is automatic - no props needed!
<div dir="rtl">
  <Pagination
    total={100}
    current={5}
    pageSize={10}
    onChange={handleChange}
  />
</div>
`})}),`
`,n.jsx(e.h3,{id:"rtl-implementation-details",children:"RTL Implementation Details"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Icon Direction Logic:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// In RTL mode:
// "Previous" button uses IconChevronRight (→) - points to the right
// "Next" button uses IconChevronLeft (←) - points to the left

// This matches reading direction:
// In RTL, "previous" is to the right, "next" is to the left
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Automatic Detection:"}),`
The component uses `,n.jsx(e.code,{children:"MutationObserver"})," to detect ",n.jsx(e.code,{children:"dir"})," attribute changes in real-time, so changing ",n.jsx(e.code,{children:"document.dir"})," dynamically updates the pagination automatically."]}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsx(e.h3,{id:"table-pagination-most-common",children:"Table Pagination (Most Common)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function UsersTable() {
  const [users, setUsers] = useState([...]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const currentUsers = users.slice((page - 1) * size, page * size);

  return (
    <div>
      <Table data={currentUsers} columns={columns} />
      <Pagination
        total={users.length}
        current={page}
        pageSize={size}
        onChange={(p, s) => {
          setPage(p);
          setSize(s);
        }}
        showCount={true}        // Show count in tables
        showRowsInPage={true}   // Show size selector in tables
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"search-results-pagination",children:"Search Results Pagination"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 20;

  useEffect(() => {
    searchAPI(query, page, pageSize).then(data => {
      setResults(data.results);
      setTotalResults(data.total);
    });
  }, [query, page]);

  return (
    <div>
      <div className="results">
        {results.map(result => (
          <SearchResult key={result.id} data={result} />
        ))}
      </div>

      <Pagination
        total={totalResults}
        current={page}
        pageSize={pageSize}
        onChange={(p) => setPage(p)}
        showCount={true}
        showRowsInPage={false}  // Fixed page size for search
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"blog-posts--content-list",children:"Blog Posts / Content List"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function BlogList() {
  const [posts, setPosts] = useState([...]);
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const currentPosts = posts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <div className="posts-grid">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        total={posts.length}
        current={page}
        pageSize={pageSize}
        onChange={(p) => setPage(p)}
        showCount={false}       // Hide count for content
        showRowsInPage={false}  // Fixed size for blog
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"infinite-scroll-alternative",children:"Infinite Scroll Alternative"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(24);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts(page, size).then(data => {
      setProducts(data.products);
      setTotal(data.total);
    });
  }, [page, size]);

  return (
    <div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={total}
        current={page}
        pageSize={size}
        onChange={(p, s) => {
          setPage(p);
          setSize(s);
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        }}
        pageSizeOptions={[12, 24, 48, 96]}
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Pagination component provides comprehensive accessibility:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard Navigation"}),": All buttons are keyboard accessible"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA Labels"}),": Previous/Next buttons have proper ",n.jsx(e.code,{children:"aria-label"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Current Page"}),": Uses ",n.jsx(e.code,{children:'aria-current="page"'})," for current page button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Screen Readers"}),": Announces page changes and controls"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus Management"}),": Proper tab order through pagination controls"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Semantic HTML"}),": Uses button elements for all interactive controls"]}),`
`]}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"state-management",children:"State Management"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"CRITICAL:"})," Pagination is a controlled component. You MUST manage state:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Required state
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

// Required props
<Pagination
  total={totalItems}
  current={currentPage}      // Controlled
  pageSize={pageSize}        // Controlled
  onChange={(page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  }}
/>
`})}),`
`,n.jsx(e.h3,{id:"page-calculation-logic",children:"Page Calculation Logic"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Total pages
const totalPages = Math.ceil(total / pageSize);

// Current page data indices
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;

// Slice data
const currentData = allData.slice(startIndex, endIndex);
`})}),`
`,n.jsx(e.h3,{id:"ellipsis-algorithm",children:"Ellipsis Algorithm"}),`
`,n.jsxs(e.p,{children:["The component uses ",n.jsx(e.code,{children:"usePagination"})," hook with sibling count logic:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Long mode"})," (",n.jsx(e.code,{children:"siblingCount=1"}),"): Shows 1 page on each side of current"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Example: ",n.jsx(e.code,{children:"1 ... 5 [6] 7 ... 20"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Short mode"})," (",n.jsx(e.code,{children:"siblingCount=0"}),"): Shows only current page"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Example: ",n.jsx(e.code,{children:"1 2 [3] 4 5 6 7 8"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"rtl-detection",children:"RTL Detection"}),`
`,n.jsxs(e.p,{children:["Uses ",n.jsx(e.code,{children:"MutationObserver"})," to watch ",n.jsx(e.code,{children:"dir"})," attribute:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Automatically detects changes
const observer = new MutationObserver((mutations) => {
  const dirChanged = mutations.some(mutation =>
    mutation.type === 'attributes' && mutation.attributeName === 'dir'
  );
  if (dirChanged) {
    updateRTL();
  }
});
`})}),`
`,n.jsx(e.h2,{id:"browser-support",children:"Browser Support"}),`
`,n.jsx(e.p,{children:"Compatible with all modern browsers with full RTL support."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-reference-for-ai-agents",children:"🎯 QUICK REFERENCE FOR AI AGENTS"}),`
`,n.jsx(e.h3,{id:"-do-this-complete-pattern",children:"✅ DO THIS (Complete Pattern):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [page, setPage] = useState(1);
const [size, setSize] = useState(10);
const data = [...]; // Your data

// Calculate current page data
const start = (page - 1) * size;
const currentData = data.slice(start, start + size);

return (
  <div>
    <YourContent data={currentData} />
    <Pagination
      total={data.length}           // Total ITEMS
      current={page}                // Controlled
      pageSize={size}               // Controlled
      onChange={(p, s) => {
        setPage(p);
        setSize(s);
      }}
    />
  </div>
);
`})}),`
`,n.jsx(e.h3,{id:"-api-pagination-pattern",children:"✅ API Pagination Pattern:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [page, setPage] = useState(1);
const [size, setSize] = useState(10);
const [data, setData] = useState([]);
const [total, setTotal] = useState(0);

useEffect(() => {
  fetchData(page, size).then(res => {
    setData(res.data);
    setTotal(res.total);
  });
}, [page, size]);

<Pagination
  total={total}
  current={page}
  pageSize={size}
  onChange={(p, s) => {
    setPage(p);
    setSize(s);
  }}
/>
`})}),`
`,n.jsx(e.h3,{id:"-never-do-this",children:"❌ NEVER DO THIS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// ❌ Missing state
<Pagination total={100} />

// ❌ Wrong total (should be items, not pages)
<Pagination total={10} />  // If 100 items, use 100!

// ❌ Not slicing data
{allData.map(item => <Item />)}  // Shows all!
<Pagination total={100} current={1} />

// ❌ Missing size in onChange
onChange={(page) => setPage(page)}  // Missing size param!
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Remember: Pagination is CONTROLLED - manage state, slice data, use total ITEMS count!"})})]})}function X(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{X as default};
