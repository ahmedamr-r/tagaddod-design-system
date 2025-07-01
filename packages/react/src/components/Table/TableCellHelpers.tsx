import { ColumnDef } from '@tanstack/react-table';
import { TableCellVariants, TableCellVariantType, CellVariantProps } from './TableCellVariants';

/**
 * Helper function to create columns with predefined cell variants
 */
export function createCellColumn<T extends object>(
  accessorKey: keyof T,
  headerLabel: string,
  variant: TableCellVariantType,
  options?: {
    cellProps?: Omit<CellVariantProps, 'value'>;
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
  }
): ColumnDef<T, any> {
  const CellComponent = TableCellVariants[variant];
  
  return {
    accessorKey: accessorKey as string,
    header: headerLabel,
    cell: ({ getValue, row }) => {
      const value = getValue();
      return (
        <CellComponent
          value={value as any}
          row={row.original as T}
          {...(options?.cellProps as any)}
        />
      );
    },
    meta: {
      headerClassName: options?.headerClassName,
      cellClassName: options?.cellClassName,
      width: options?.width,
    },
  };
}

/**
 * Helper function to create interactive cell columns (checkbox, select, etc.)
 */
export function createInteractiveCellColumn<T extends object>(
  accessorKey: keyof T,
  headerLabel: string,
  variant: TableCellVariantType,
  onChange: (value: any, row: T) => void,
  options?: {
    cellProps?: Omit<CellVariantProps, 'value' | 'onChange'>;
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
  }
): ColumnDef<T, any> {
  const CellComponent = TableCellVariants[variant];
  
  return {
    accessorKey: accessorKey as string,
    header: headerLabel,
    cell: ({ getValue, row }) => {
      const value = getValue();
      return (
        <CellComponent
          value={value as any}
          row={row.original as T}
          onChange={onChange as any}
          {...(options?.cellProps as any)}
        />
      );
    },
    meta: {
      headerClassName: options?.headerClassName,
      cellClassName: options?.cellClassName,
      width: options?.width,
    },
  };
}

/**
 * Helper function to create action cell columns
 */
export function createActionCellColumn<T extends object>(
  headerLabel: string,
  variant: 'actionIcon' | 'actionDropdownIcon',
  onClick: (row: T) => void,
  options?: {
    actions?: Array<{ label: string; onClick: (row: T) => void }>;
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
  }
): ColumnDef<T, any> {
  const CellComponent = TableCellVariants[variant];
  
  return {
    id: 'actions',
    header: headerLabel,
    cell: ({ row }) => {
      if (variant === 'actionDropdownIcon' && options?.actions) {
        return (
          <CellComponent
            value={options.actions}
            row={row.original}
          />
        );
      }
      
      return (
        <CellComponent
          value={[] as any}
          row={row.original as T}
          onClick={onClick as any}
        />
      );
    },
    meta: {
      headerClassName: options?.headerClassName,
      cellClassName: options?.cellClassName,
      width: options?.width,
    },
  };
}

/**
 * Helper function to create custom cell column with your own component
 */
export function createCustomCellColumn<T extends object>(
  accessorKey: keyof T | string,
  headerLabel: string,
  CellComponent: React.ComponentType<CellVariantProps>,
  options?: {
    cellProps?: Omit<CellVariantProps, 'value'>;
    headerClassName?: string;
    cellClassName?: string;
    width?: string;
  }
): ColumnDef<T, any> {
  return {
    accessorKey: typeof accessorKey === 'string' ? accessorKey : String(accessorKey),
    header: headerLabel,
    cell: ({ getValue, row }) => {
      const value = getValue?.() || null;
      return (
        <CellComponent
          value={value}
          row={row.original}
          {...options?.cellProps}
        />
      );
    },
    meta: {
      headerClassName: options?.headerClassName,
      cellClassName: options?.cellClassName,
      width: options?.width,
    },
  };
}

/**
 * Quick column creators for common variants
 */
export const QuickColumns = {
  text: <T extends object>(key: keyof T, header: string) => 
    createCellColumn(key, header, 'textSingleLine'),
    
  multilineText: <T extends object>(key: keyof T, header: string) => 
    createCellColumn(key, header, 'textMultiline'),
    
  badge: <T extends object>(key: keyof T, header: string) => 
    createCellColumn(key, header, 'badge'),
    
  checkbox: <T extends object>(key: keyof T, header: string, onChange: (value: boolean, row: T) => void) => 
    createInteractiveCellColumn(key, header, 'checkbox', onChange),
    
  select: <T extends object>(key: keyof T, header: string, options: Array<{ label: string; value: any }>, onChange: (value: string, row: T) => void) => 
    createInteractiveCellColumn(key, header, 'select', onChange, { cellProps: { options } }),
    
  actions: <T extends object>(header: string, onClick: (row: T) => void) => 
    createActionCellColumn(header, 'actionIcon', onClick),
    
  number: <T extends object>(key: keyof T, header: string) => 
    createCellColumn(key, header, 'updatedNumber'),
};