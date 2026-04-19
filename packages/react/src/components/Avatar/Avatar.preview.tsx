import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Avatar, avatarSizes, avatarTypes, type AvatarProps } from './Avatar';

const sampleImage = 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&q=60';

export const preview: PreviewModule<AvatarProps> = {
  name: 'Avatar',
  slug: 'avatar',
  description: 'User identity visual with image, initial, or icon fallback and five sizes.',
  component: Avatar,
  defaultProps: {
    type: 'icon',
    size: 'medium',
  },
  controls: {
    type: { type: 'select', options: avatarTypes, description: 'Image, initial, or default icon' },
    size: { type: 'select', options: avatarSizes, description: 'Avatar size preset' },
    src: { type: 'text', description: 'Image URL (used when type is image)' },
    alt: { type: 'text', description: 'Accessible alt text for the image' },
    initial: { type: 'text', description: 'Character or name to display when type is initial' },
  },
  examples: [
    { name: 'IconDefault', props: { type: 'icon' } },
    { name: 'Initial', props: { type: 'initial', initial: 'AM' } },
    { name: 'Image', props: { type: 'image', src: sampleImage, alt: 'Portrait photo' } },
    { name: 'XSmall', props: { size: 'xSmall', type: 'initial', initial: 'X' } },
    { name: 'Small', props: { size: 'small', type: 'initial', initial: 'S' } },
    { name: 'Medium', props: { size: 'medium', type: 'initial', initial: 'M' } },
    { name: 'Large', props: { size: 'large', type: 'initial', initial: 'L' } },
    { name: 'XLarge', props: { size: 'xLarge', type: 'initial', initial: 'XL' } },
    {
      name: 'AllSizes',
      description: 'Every size side-by-side.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {avatarSizes.map((size) => (
            <Avatar key={size} size={size} type="initial" initial={size.charAt(0).toUpperCase()} />
          ))}
        </div>
      ),
    },
    {
      name: 'AllTypes',
      description: 'Image, initial, and icon avatars together.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Avatar type="image" src={sampleImage} alt="Portrait" />
          <Avatar type="initial" initial="Ahmed" />
          <Avatar type="icon" />
        </div>
      ),
    },
  ],
};
