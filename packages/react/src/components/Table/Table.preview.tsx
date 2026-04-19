import type { PreviewModule } from '@tagaddod-design/docs-types';
import type { ColumnDef } from '@tanstack/react-table';
import { Table } from './Table';
import type { TableProps } from './types';

interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'invited' | 'disabled';
}

const people: Person[] = [
  { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Sara Saleh', email: 'sara@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Omar Hassan', email: 'omar@example.com', role: 'Viewer', status: 'invited' },
  { id: 4, name: 'Lina Youssef', email: 'lina@example.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Mahmoud Fathy', email: 'mahmoud@example.com', role: 'Viewer', status: 'disabled' },
  { id: 6, name: 'Nour El-Din', email: 'nour@example.com', role: 'Admin', status: 'active' },
];

const personColumns: ColumnDef<Person>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name' },
  { id: 'email', header: 'Email', accessorKey: 'email' },
  { id: 'role', header: 'Role', accessorKey: 'role' },
  { id: 'status', header: 'Status', accessorKey: 'status' },
];

const GenericTable = Table as unknown as React.ComponentType<TableProps<Person>>;

export const preview: PreviewModule<TableProps<Person>> = {
  name: 'Table',
  slug: 'table',
  description: 'Data grid built on TanStack Table with sorting, search, filters, pagination, and tabs.',
  component: GenericTable,
  defaultProps: {
    title: 'People',
    data: people,
    columns: personColumns,
    striped: false,
    gridCells: false,
    showHeader: true,
    showSearch: true,
    showFilters: true,
    showExport: false,
    showPagination: true,
    showTotalBadge: true,
  },
  controls: {
    title: { type: 'text', description: 'Header title' },
    striped: { type: 'boolean', description: 'Alternate row backgrounds' },
    gridCells: { type: 'boolean', description: 'Show cell grid borders' },
    disableRowHover: { type: 'boolean', description: 'Disable hover highlight on rows' },
    enableColumnResizing: { type: 'boolean', description: 'Let users resize columns' },
    enableColumnOrdering: { type: 'boolean', description: 'Let users drag columns to reorder' },
    showHeader: { type: 'boolean', description: 'Show the header bar' },
    showSearch: { type: 'boolean', description: 'Show the search field' },
    showFilters: { type: 'boolean', description: 'Show the filters button/panel' },
    showExport: { type: 'boolean', description: 'Show the export CSV button' },
    showPagination: { type: 'boolean', description: 'Show the pagination footer' },
    showTotalBadge: { type: 'boolean', description: 'Show the total count badge' },
  },
  examples: [
    {
      name: 'Basic',
      props: { title: 'People', data: people, columns: personColumns },
    },
    {
      name: 'Striped',
      props: { title: 'People (striped)', data: people, columns: personColumns, striped: true },
    },
    {
      name: 'GridCells',
      props: { title: 'People (grid)', data: people, columns: personColumns, gridCells: true },
    },
    {
      name: 'Empty',
      props: {
        title: 'People',
        data: [] as Person[],
        columns: personColumns,
        state: 'empty',
        emptyMessage: 'No team members yet.',
      },
    },
    {
      name: 'WithFilters',
      props: {
        title: 'People',
        data: people,
        columns: personColumns,
        filterOptions: {
          role: {
            label: 'Role',
            type: 'select',
            options: [
              { label: 'Admin', value: 'Admin' },
              { label: 'Editor', value: 'Editor' },
              { label: 'Viewer', value: 'Viewer' },
            ],
          },
          status: {
            label: 'Status',
            type: 'select',
            options: [
              { label: 'Active', value: 'active' },
              { label: 'Invited', value: 'invited' },
              { label: 'Disabled', value: 'disabled' },
            ],
          },
        },
      },
    },
  ],
};
