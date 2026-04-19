import type { PreviewModule } from '@tagaddod-design/docs-types';
import { RangeSlider, type RangeSliderProps } from './RangeSlider';

const rangeSliderTypes = ['single thumb', 'dual thumb'] as const;
const rangeSliderStates = ['rest', 'focus', 'active', 'disabled', 'error'] as const;

export const preview: PreviewModule<RangeSliderProps> = {
  name: 'RangeSlider',
  slug: 'range-slider',
  description: 'Slider for picking a single value or a numeric range with optional tooltip.',
  component: RangeSlider,
  defaultProps: {
    label: 'Volume',
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    type: 'single thumb',
    disabled: false,
    showTooltip: true,
  },
  controls: {
    label: { type: 'text', description: 'Label above the slider' },
    min: { type: 'number', description: 'Minimum value' },
    max: { type: 'number', description: 'Maximum value' },
    step: { type: 'number', description: 'Step increment' },
    type: { type: 'select', options: rangeSliderTypes, description: 'Single vs dual thumb' },
    state: { type: 'select', options: rangeSliderStates, description: 'Force a visual state' },
    disabled: { type: 'boolean', description: 'Disable interactions' },
    showTooltip: { type: 'boolean', description: 'Show tooltip while dragging' },
    errorMessage: { type: 'text', description: 'Error message shown below the slider' },
  },
  examples: [
    { name: 'Single', props: { label: 'Volume', defaultValue: [40] } },
    { name: 'DualThumb', props: { label: 'Price range', type: 'dual thumb', defaultValue: [20, 80] } },
    { name: 'Disabled', props: { label: 'Locked', defaultValue: [30], disabled: true } },
    { name: 'WithError', props: { label: 'Limit', defaultValue: [110], errorMessage: 'Value exceeds allowed range.' } },
    {
      name: 'SteppedByTen',
      props: { label: 'Score', min: 0, max: 100, step: 10, defaultValue: [60] },
    },
    {
      name: 'Showcase',
      description: 'Common slider configurations side-by-side.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 360 }}>
          <RangeSlider label="Brightness" defaultValue={[70]} />
          <RangeSlider label="Price range (USD)" type="dual thumb" defaultValue={[40, 160]} min={0} max={200} />
          <RangeSlider label="Temperature" defaultValue={[22]} min={16} max={30} step={0.5} />
        </div>
      ),
    },
  ],
};
