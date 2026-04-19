import type { PreviewModule } from '@tagaddod-design/docs-types';
import { AspectRatio, type AspectRatioProps } from './AspectRatio';

const placeholderStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--t-color-fill-secondary, #f3f4f6)',
  border: '1px dashed var(--t-color-border-secondary, #d1d5db)',
  borderRadius: 8,
  color: 'var(--t-color-text-secondary, #6b7280)',
  fontSize: 14,
};

const Placeholder = ({ label }: { label: string }) => (
  <div style={placeholderStyle}>{label}</div>
);

export const preview: PreviewModule<AspectRatioProps> = {
  name: 'AspectRatio',
  slug: 'aspect-ratio',
  description: 'Constrains children to a given width-to-height ratio for images, video, and media.',
  component: AspectRatio,
  defaultProps: {
    ratio: 16 / 9,
    children: <Placeholder label="16 : 9" />,
    style: { width: 320 },
  },
  controls: {
    ratio: {
      type: 'number',
      min: 0.25,
      max: 4,
      step: 0.05,
      description: 'Width divided by height (e.g. 16/9 ≈ 1.78).',
    },
  },
  examples: [
    {
      name: 'Sixteen-by-nine',
      props: { ratio: 16 / 9, children: <Placeholder label="16 : 9" />, style: { width: 320 } },
    },
    {
      name: 'Four-by-three',
      props: { ratio: 4 / 3, children: <Placeholder label="4 : 3" />, style: { width: 320 } },
    },
    {
      name: 'Square',
      props: { ratio: 1, children: <Placeholder label="1 : 1" />, style: { width: 240 } },
    },
    {
      name: 'Portrait',
      props: { ratio: 3 / 4, children: <Placeholder label="3 : 4" />, style: { width: 200 } },
    },
    {
      name: 'WithImage',
      description: 'Wrap an image to lock it to a ratio regardless of source dimensions.',
      props: {},
      render: () => (
        <div style={{ width: 320 }}>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=640&q=60"
              alt="Landscape"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
            />
          </AspectRatio>
        </div>
      ),
    },
  ],
};
