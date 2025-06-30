import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '../Badge';
import { Checkbox } from '../Checkbox';
import { RadioGroup, RadioButtonItem } from '../RadioButton'; 
import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Tooltip, TooltipProvider } from '../Tooltip';
import { IconDotsVertical } from '@tabler/icons-react';
import styles from './Table.module.css';

// Cell variant type definitions
export interface CellVariantProps<T = any> {
  value: T;
  row?: any;
  onChange?: (value: T, row?: any) => void;
  onClick?: (row?: any) => void;
  options?: Array<{ label: string; value: any }>;
  className?: string;
  [key: string]: any;
}

// Text Cell Variants
export const TextSingleLineCell: React.FC<CellVariantProps<string>> = ({ value, className }) => {
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const textStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
    font: 'var(--t-typography-body-sm-default)',
    color: 'var(--t-color-text-primary)'
  };
  
  return (
    <span className={className} style={textStyle}>
      {value || '-'}
    </span>
  );
};

export const TextMultilineCell: React.FC<CellVariantProps<string>> = ({ value, className }) => {
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const baseStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
    font: 'var(--t-typography-body-sm-default)'
  };
  
  const primaryLineStyle = {
    ...baseStyle,
    color: 'var(--t-color-text-primary)'
  };
  
  const secondaryLineStyle = {
    ...baseStyle,
    color: 'var(--t-color-text-secondary)'
  };
  
  const lines = value?.split('\n') || ['-'];
  
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index} style={index === 0 ? primaryLineStyle : secondaryLineStyle}>
          {line || '-'}
        </div>
      ))}
    </div>
  );
};

// Truncated text cell with tooltip - shows ellipsis when text overflows
export const TextTruncatedCell: React.FC<CellVariantProps<string>> = ({ value, className }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  const textStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
    font: 'var(--t-typography-body-sm-default)',
    color: 'var(--t-color-text-primary)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
    width: '100%',
    display: 'block'
  };

  // Check if text is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const isOverflow = textRef.current.scrollWidth > textRef.current.clientWidth;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [value]);

  const textContent = (
    <span 
      ref={textRef} 
      className={className} 
      style={textStyle}
    >
      {value || '-'}
    </span>
  );

  // Only show tooltip if text is overflowing
  if (isOverflowing && value && value !== '-') {
    return (
      <TooltipProvider>
        <Tooltip content={value}>
          {textContent}
        </Tooltip>
      </TooltipProvider>
    );
  }

  return textContent;
};

export const TextSingleLineWithBadgeCell: React.FC<CellVariantProps<{ text: string; badge: string; badgeVariant?: 'success' | 'warning' | 'error' | 'info' }>> = ({ 
  value, 
  className 
}) => {
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const textStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)',
    font: 'var(--t-typography-body-sm-default)',
    color: 'var(--t-color-text-primary)'
  };
  
  return (
    <div className={`${styles.textWithBadgeCell} ${className || ''}`}>
      <span style={textStyle}>{value?.text || '-'}</span>
      {value?.badge && (
        <Badge tone={value.badgeVariant || 'info'} size="medium">
          {value.badge}
        </Badge>
      )}
    </div>
  );
};

// Badge Cell Variants
export const BadgeCell: React.FC<CellVariantProps<{ text: string; tone?: 'default' | 'info' | 'success' | 'warning' | 'critical' | 'magic' }>> = ({ 
  value, 
  className 
}) => {
  if (!value?.text) return <span>-</span>;
  
  return (
    <Badge tone={value.tone || 'info'} size="medium" className={className}>
      {value.text}
    </Badge>
  );
};

export const BadgeMultipleCell: React.FC<CellVariantProps<Array<{ text: string; tone?: 'default' | 'info' | 'success' | 'warning' | 'critical' | 'magic' }>>> = ({ 
  value, 
  className 
}) => {
  if (!value || !Array.isArray(value)) return <span>-</span>;
  
  return (
    <div className={`${styles.badgeMultipleCell} ${className || ''}`}>
      {value.map((badge, index) => (
        <Badge key={index} tone={badge.tone || 'info'} size="medium">
          {badge.text}
        </Badge>
      ))}
    </div>
  );
};

// Interactive Cell Variants
export const CheckboxCell: React.FC<CellVariantProps<boolean>> = ({ 
  value, 
  onChange, 
  row, 
  className 
}) => {
  return (
    <Checkbox
      checked={value || false}
      onCheckedChange={(checked) => onChange?.(checked === true, row)}
      className={className}
    />
  );
};

export const RadioButtonCell: React.FC<CellVariantProps<string>> = ({ 
  value, 
  onChange, 
  row, 
  options = [], 
  className 
}) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={(newValue) => onChange?.(newValue, row)}
      className={`${styles.radioButtonCell} ${className || ''}`}
    >
      {options.map((option) => (
        <RadioButtonItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </RadioButtonItem>
      ))}
    </RadioGroup>
  );
};

export const SelectCell: React.FC<CellVariantProps<string>> = ({ 
  value, 
  onChange, 
  row, 
  options = [], 
  className 
}) => {
  // Filter out any options with empty string values
  const validOptions = options.filter(option => option.value !== '');
  
  return (
    <Select
      value={value}
      onValueChange={(newValue) => onChange?.(newValue, row)}
      options={validOptions}
      className={className}
      size="micro"
    />
  );
};

export const TextFieldCell: React.FC<CellVariantProps<string>> = ({ 
  value, 
  onChange, 
  row, 
  className,
  placeholder = ''
}) => {
  return (
    <TextInput
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value, row)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export const UpdatedNumberCell: React.FC<CellVariantProps<number>> = ({ 
  value, 
  className 
}) => {
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };
  
  return (
    <span className={`${styles.updatedNumberCell} ${className || ''}`} style={lineHeightStyle}>
      {typeof value === 'number' ? value.toLocaleString() : '-'}
    </span>
  );
};

// Action Cell Variants
export const ActionIconCell: React.FC<CellVariantProps<any>> = ({ 
  onClick, 
  row, 
  className 
}) => {
  return (
    <Button
      onClick={() => onClick?.(row)}
      variant="plain"
      size="micro"
      tone="neutral"
      prefixIcon={<IconDotsVertical size={16} />}
      className={className}
    />
  );
};

export const ActionDropdownIconCell: React.FC<CellVariantProps<Array<{ label: string; onClick: (row: any) => void }>>> = ({ 
  value: actions = [], 
  row, 
  className 
}) => {
  const selectOptions = actions.map((action, index) => ({
    label: action.label,
    value: index.toString()
  }));

  return (
    <Select
      onValueChange={(actionIndex) => {
        if (actionIndex && actionIndex !== 'placeholder') {
          const action = actions[parseInt(actionIndex)];
          action?.onClick(row);
        }
      }}
      options={selectOptions}
      placeholder="Actions"
      className={className}
      size="micro"
    />
  );
};

// Registry of all cell variants
export const TableCellVariants = {
  textSingleLine: TextSingleLineCell,
  textMultiline: TextMultilineCell,
  textTruncated: TextTruncatedCell,
  textSingleLineWithBadge: TextSingleLineWithBadgeCell,
  badge: BadgeCell,
  badgeMultiple: BadgeMultipleCell,
  checkbox: CheckboxCell,
  radioButton: RadioButtonCell,
  select: SelectCell,
  textField: TextFieldCell,
  updatedNumber: UpdatedNumberCell,
  actionIcon: ActionIconCell,
  actionDropdownIcon: ActionDropdownIconCell,
} as const;

export type TableCellVariantType = keyof typeof TableCellVariants;