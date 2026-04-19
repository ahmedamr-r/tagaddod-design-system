import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Pagination } from './Pagination';
import type { PaginationProps } from './types';

const countTypes = ['short', 'long'] as const;

export const preview: PreviewModule<PaginationProps> = {
  name: 'Pagination',
  slug: 'pagination',
  description: 'Page navigation with configurable siblings, page-size selector, and count text.',
  component: Pagination,
  defaultProps: {
    total: 142,
    current: 1,
    pageSize: 10,
    showCount: true,
    showRowsInPage: true,
    countType: 'long',
    pageSizeOptions: [10, 20, 50, 100],
  },
  controls: {
    total: { type: 'number', description: 'Total number of items' },
    current: { type: 'number', description: 'Current (1-based) page' },
    pageSize: { type: 'number', description: 'Items per page' },
    countType: { type: 'select', options: countTypes, description: 'Short (compact) or long (with ellipsis)' },
    showCount: { type: 'boolean', description: 'Show the count text' },
    showRowsInPage: { type: 'boolean', description: 'Show the rows-per-page selector' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => {
        const Demo = () => {
          const [page, setPage] = useState(1);
          const [pageSize, setPageSize] = useState(10);
          return (
            <Pagination
              total={142}
              current={page}
              pageSize={pageSize}
              onChange={(p, s) => {
                setPage(p);
                if (s) setPageSize(s);
              }}
              onPageSizeChange={setPageSize}
            />
          );
        };
        return <Demo />;
      },
    },
    {
      name: 'ShortCount',
      props: {},
      render: () => {
        const Demo = () => {
          const [page, setPage] = useState(1);
          return <Pagination total={50} current={page} pageSize={10} countType="short" onChange={setPage} />;
        };
        return <Demo />;
      },
    },
    {
      name: 'LotsOfPages',
      description: 'Large dataset uses ellipsis.',
      props: {},
      render: () => {
        const Demo = () => {
          const [page, setPage] = useState(12);
          return <Pagination total={1250} current={page} pageSize={25} onChange={setPage} />;
        };
        return <Demo />;
      },
    },
    {
      name: 'MinimalControls',
      description: 'Just the page buttons — no count or selector.',
      props: {},
      render: () => {
        const Demo = () => {
          const [page, setPage] = useState(1);
          return (
            <Pagination
              total={80}
              current={page}
              pageSize={10}
              showCount={false}
              showRowsInPage={false}
              onChange={setPage}
            />
          );
        };
        return <Demo />;
      },
    },
  ],
};
