import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Tooltip, TooltipProvider, tooltipAligns, tooltipSides, type TooltipProps } from './Tooltip';
import { Button } from '../Button/Button';

const TooltipPreview = (props: TooltipProps) => (
  <TooltipProvider>
    <Tooltip {...props} />
  </TooltipProvider>
);

TooltipPreview.displayName = 'Tooltip';

export const preview: PreviewModule<TooltipProps> = {
  name: 'Tooltip',
  slug: 'tooltip',
  description: 'Hover/focus overlay with short contextual help. Wraps any trigger element.',
  component: TooltipPreview,
  defaultProps: {
    content: 'Useful context',
    side: 'top',
    align: 'center',
    delayDuration: 200,
    sideOffset: 8,
    alignOffset: 0,
    disabled: false,
    children: <Button>Hover me</Button>,
  },
  controls: {
    content: { type: 'text', description: 'Text shown inside the tooltip' },
    side: { type: 'select', options: tooltipSides, description: 'Preferred side relative to the trigger' },
    align: { type: 'select', options: tooltipAligns, description: 'Alignment along the chosen side' },
    delayDuration: { type: 'number', description: 'Delay before opening in ms' },
    sideOffset: { type: 'number', description: 'Gap from the trigger in px' },
    alignOffset: { type: 'number', description: 'Offset along the side in px' },
    disabled: { type: 'boolean', description: 'Disable the tooltip' },
  },
  examples: [
    {
      name: 'Default',
      props: {},
      render: () => (
        <TooltipProvider>
          <Tooltip content="Save your work">
            <Button>Save</Button>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    {
      name: 'AllSides',
      description: 'One tooltip on each side of the trigger.',
      props: {},
      render: () => (
        <TooltipProvider>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {tooltipSides.map((side) => (
              <Tooltip key={side} side={side} content={`Appears on ${side}`}>
                <Button variant="outlined">{side}</Button>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      ),
    },
    {
      name: 'WithRichContent',
      props: {},
      render: () => (
        <TooltipProvider>
          <Tooltip
            content={
              <div>
                <strong>Keyboard shortcut</strong>
                <div style={{ opacity: 0.8 }}>⌘ + S</div>
              </div>
            }
          >
            <Button variant="tonal">Save</Button>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    {
      name: 'Disabled',
      props: {},
      render: () => (
        <TooltipProvider>
          <Tooltip content="You will not see me" disabled>
            <Button variant="plain">No tooltip</Button>
          </Tooltip>
        </TooltipProvider>
      ),
    },
  ],
};
