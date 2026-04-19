import type { PreviewModule } from '@tagaddod-design/docs-types';
import { ScrollArea, scrollAreaTypes, type ScrollAreaProps } from './ScrollArea';

const longText = Array.from({ length: 40 }, (_, i) => `Line ${i + 1} — scrollable content inside the ScrollArea component.`);

const LongChildren = () => (
  <div style={{ padding: 12 }}>
    {longText.map((line) => (
      <p key={line} style={{ margin: '4px 0' }}>
        {line}
      </p>
    ))}
  </div>
);

const WideChildren = () => (
  <div style={{ padding: 12, whiteSpace: 'nowrap' }}>
    {Array.from({ length: 20 }, (_, i) => (
      <span key={i} style={{ display: 'inline-block', marginInlineEnd: 16 }}>
        Column {i + 1}
      </span>
    ))}
  </div>
);

export const preview: PreviewModule<ScrollAreaProps> = {
  name: 'ScrollArea',
  slug: 'scroll-area',
  description: 'Custom-styled scroll container with hover, scroll, always-visible, or auto scrollbars.',
  component: ScrollArea,
  defaultProps: {
    type: 'hover',
    height: 200,
    width: 320,
    vertical: true,
    horizontal: false,
    scrollHideDelay: 600,
    children: <LongChildren />,
  },
  controls: {
    type: { type: 'select', options: scrollAreaTypes, description: 'Scrollbar visibility behaviour' },
    scrollHideDelay: { type: 'number', description: 'Delay in ms before hiding scrollbars' },
    vertical: { type: 'boolean', description: 'Show the vertical scrollbar' },
    horizontal: { type: 'boolean', description: 'Show the horizontal scrollbar' },
  },
  examples: [
    {
      name: 'VerticalHover',
      props: { type: 'hover', height: 200, width: 320, children: <LongChildren /> },
    },
    {
      name: 'AlwaysVisible',
      props: { type: 'always', height: 200, width: 320, children: <LongChildren /> },
    },
    {
      name: 'Horizontal',
      props: { horizontal: true, vertical: false, height: 80, width: 320, children: <WideChildren /> },
    },
    {
      name: 'Both',
      props: { horizontal: true, vertical: true, height: 160, width: 320, children: (
        <div style={{ padding: 12, whiteSpace: 'nowrap' }}>
          {Array.from({ length: 30 }, (_, i) => (
            <p key={i} style={{ margin: '4px 0' }}>
              Row {i + 1} — ————————— — ————————— — ————————— — —————————
            </p>
          ))}
        </div>
      ) },
    },
  ],
};
