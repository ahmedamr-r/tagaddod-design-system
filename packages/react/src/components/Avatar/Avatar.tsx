import { forwardRef } from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { IconUser } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from './Avatar.module.css';

export type AvatarType = 'image' | 'initial' | 'icon';
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /**
   * Avatar type: image (for photos), initial (for text), or icon (default user icon)
   * @default 'icon'
   */
  type?: AvatarType;

  /**
   * Avatar size
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Source URL for the image (required when type is 'image')
   */
  src?: string;

  /**
   * Alt text for the image (used when type is 'image')
   */
  alt?: string;

  /**
   * Initial to display (required when type is 'initial')
   * Will use the first letter if a full name is provided
   */
  initial?: string;

  /**
   * Optional className for additional styling
   */
  className?: string;

  /**
   * Delay in milliseconds before showing the fallback
   * @default 600
   */
  delayMs?: number;
}

export const avatarTypes = ['image', 'initial', 'icon'] as const;
export const avatarSizes = ['sm', 'md', 'lg', 'xl'] as const;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  type = 'icon',
  size = 'md',
  src,
  alt,
  initial,
  className,
  delayMs = 600,
}, ref) => {
  // Detect RTL for line height adjustments
  const isRTL = document.dir === 'rtl' || document.documentElement.dir === 'rtl';
  
  // Create lineHeightStyle object for proper text rendering
  const lineHeightStyle = {
    lineHeight: isRTL ? 'var(--t-line-height-arabic, 1.2)' : 'var(--t-line-height-english, 1.5)'
  };

  // Process initial to get first letter if a full name is given
  const displayInitial = initial ? initial.trim().charAt(0).toUpperCase() : '';

  // Combined class names
  const avatarClasses = clsx(
    styles.avatar,
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    className
  );

  return (
    <RadixAvatar.Root className={avatarClasses} ref={ref}>
      {type === 'image' && src && (
        <RadixAvatar.Image 
          className={styles.image} 
          src={src} 
          alt={alt || 'User avatar'} 
          onLoadingStatusChange={() => {
            // Optional handling of loading status
          }}
        />
      )}
      <RadixAvatar.Fallback 
        className={styles.fallback} 
        delayMs={type === 'image' ? delayMs : 0}
      >
        {type === 'initial' && displayInitial ? (
          <span className={styles.initial} style={lineHeightStyle}>
            {displayInitial}
          </span>
        ) : (
          <IconUser className={styles.icon} />
        )}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';
