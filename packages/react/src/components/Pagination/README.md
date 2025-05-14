# Pagination Component

The Pagination component allows users to navigate through multiple pages of content. It's designed following the Ant Design style while using the Tagaddod Design System tokens and components.

## Features

- Long and Short pagination types
- RTL support
- Customizable page size options
- Show/hide count text and rows selector
- Fully controlled or uncontrolled usage
- Line height adjustments for LTR and RTL modes
- Integrated with Button component for consistent styling

## Usage

```tsx
import { Pagination } from '@tagaddod/react';

// Basic usage
<Pagination 
  total={100} 
  current={1} 
  onChange={(page) => console.log(`Changed to page ${page}`)} 
/>

// Advanced usage
<Pagination 
  total={100}
  current={currentPage}
  pageSize={pageSize}
  onChange={(page, size) => {
    setCurrentPage(page);
    if (size) setPageSize(size);
  }}
  onPageSizeChange={(size) => setPageSize(size)}
  countType="long"
  showCount={true}
  showRowsInPage={true}
  pageSizeOptions={[10, 20, 50, 100]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | - | Total number of items |
| `current` | `number` | `1` | Current page number (1-based) |
| `pageSize` | `number` | `10` | Number of items per page |
| `onChange` | `(page: number, pageSize?: number) => void` | - | Callback when page is changed |
| `onPageSizeChange` | `(pageSize: number) => void` | - | Callback when page size is changed |
| `showCount` | `boolean` | `true` | Whether to show the count text |
| `showRowsInPage` | `boolean` | `true` | Whether to show the rows per page selector |
| `countType` | `'short' \| 'long'` | `'long'` | 'short': Show all page numbers (up to 8)<br />'long': Show ellipsis for large number of pages |
| `pageSizeOptions` | `number[]` | `[10, 20, 50, 100]` | Available page sizes for the selector |
| `className` | `string` | - | Custom class name |

## Types

### Long Pagination (with ellipsis)
For pages with more than 8 options, the long pagination will show ellipsis to indicate hidden pages.

### Short Pagination
For pages with up to 8 options, the short pagination will show all page numbers without ellipsis.

## RTL Support
The component automatically detects the document's `dir` attribute to adjust layout and text for RTL languages.

## Theming
The component uses the Tagaddod Design System tokens with the `--t-` prefix for styling, ensuring consistency with other components. It integrates with the Button component for navigation controls and page numbers, inheriting all the Button's theming capabilities.
