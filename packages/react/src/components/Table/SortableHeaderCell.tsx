import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Header, flexRender } from '@tanstack/react-table';
import { IconGripVertical } from '@tabler/icons-react';
import { TableHeaderCellContent } from './TableHeaderCell';
import styles from './Table.module.css';

interface SortableHeaderCellProps<T> {
  header: Header<T, unknown>;
  enableColumnOrdering?: boolean;
}

export function SortableHeaderCell<T>({ header, enableColumnOrdering = false }: SortableHeaderCellProps<T>) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: header.id });

  // Get table instance from header context
  const table = header.getContext().table;

  // Handle sorting click
  const handleSort = () => {
    if (header.column.getCanSort()) {
      header.column.toggleSorting();
    }
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: 'relative' as const,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.8 : 1,
    width: `${header.getSize()}px`,
  };

  return (
    <th
      ref={setNodeRef}
      style={style}
      className={`${styles.tableHeaderCell} ${header.column.columnDef.meta?.headerClassName || ''} ${isDragging ? styles.dragging : ''}`}
      colSpan={header.colSpan}
    >
      <div className={styles.headerCellContainer}>
        {/* Header content - clickable for sorting */}
        <TableHeaderCellContent
          isSortable={header.column.getCanSort()}
          sortDirection={header.column.getIsSorted() as any}
          onSort={handleSort}
          className={styles.headerContent}
        >
          {/* Visible drag handle with 9 dots inside header content - only show if column ordering is enabled */}
          {enableColumnOrdering && (
            <div
              ref={setActivatorNodeRef}
              {...attributes}
              {...listeners}
              className={styles.dragHandle}
              aria-label={`Drag to reorder ${header.column.columnDef.header} column`}
            >
              <IconGripVertical size={16} />
            </div>
          )}
          
          {header.isPlaceholder ? null : (
            flexRender(
              header.column.columnDef.header,
              header.getContext()
            )
          )}
        </TableHeaderCellContent>

        {/* Resize handle */}
        {header.column.getCanResize() && (
          <div
            className={`${styles.resizeHandle} ${header.column.getIsResizing() ? styles.resizing : ''}`}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              header.getResizeHandler()(e);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              header.getResizeHandler()(e);
            }}
            onDoubleClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              header.column.resetSize();
            }}
            style={{
              transform: header.column.getIsResizing()
                ? `translateX(${table.getState().columnSizingInfo?.deltaOffset ?? 0}px)`
                : '',
            }}
          />
        )}
      </div>
    </th>
  );
}