import React, { forwardRef } from 'react';
import * as Form from '@radix-ui/react-form';
import clsx from 'clsx';
import styles from './TextInput.module.css';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  message?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ 
    label, 
    name, 
    defaultValue, 
    placeholder, 
    message, 
    error, 
    required, 
    disabled, 
    className,
    size = 'md',
    fullWidth = false,
    ...props 
  }, ref) => {
    return (
      <Form.Root 
        className={clsx(
          styles.container, 
          error && styles.error,
          styles[size],
          fullWidth && styles.fullWidth,
          className
        )}
      >
        <Form.Field name={name || 'text-field'}>
          {label && (
            <Form.Label className={styles.label}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </Form.Label>
          )}
          <div className={styles.inputWrapper}>
            <Form.Control asChild>
              <input
                ref={ref}
                className={styles.input}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                aria-invalid={!!error}
                {...props}
              />
            </Form.Control>
          </div>
          
          {error ? (
            <Form.Message className={styles.errorMessage}>
              {error}
            </Form.Message>
          ) : message ? (
            <div className={styles.message}>
              {message}
            </div>
          ) : null}
        </Form.Field>
      </Form.Root>
    );
  }
);

TextInput.displayName = 'TextInput';

// Export size arrays for documentation
export const textInputSizes = ['sm', 'md', 'lg'] as const;
