import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.Button,
          styles[variant],
          styles[size],
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
