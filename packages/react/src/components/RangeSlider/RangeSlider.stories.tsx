import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';

const meta = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => import('./RangeSlider.mdx'),
    },
  },
  tags: [],
  argTypes: {
    value: {
      control: false,
      description: 'The controlled value of the slider'
    },
    defaultValue: {
      control: 'object',
      description: 'The default value when initially rendered'
    },
    min: {
      control: 'number',
      description: 'The minimum value of the slider'
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider'
    },
    step: {
      control: 'number',
      description: 'The step increment of the slider'
    },
    type: {
      control: 'select',
      options: ['single thumb', 'dual thumb'],
      description: 'Type of slider - single or dual thumb'
    },
    state: {
      control: 'select',
      options: ['rest', 'focus', 'active', 'disabled', 'error'],
      description: 'Current state of the slider'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled'
    },
    label: {
      control: 'text',
      description: 'Text label displayed above the slider'
    },
    prefix: {
      control: 'text',
      description: 'Content to display before the slider'
    },
    suffix: {
      control: 'text',
      description: 'Content to display after the slider'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the slider'
    },
    formatValue: {
      control: false,
      description: 'Custom formatter for displaying values in tooltip'
    },
    'aria-label': {
      control: 'text',
      description: 'Aria label for the slider'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip on active state'
    }
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    type: 'single thumb',
    state: 'rest',
    disabled: false,
    label: 'Label',
    showTooltip: true,
    'aria-label': 'Range slider'
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single Thumb Stories
export const SingleThumbRest: Story = {
  name: 'Single Thumb - Rest',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const SingleThumbFocus: Story = {
  name: 'Single Thumb - Focus',
  args: {
    type: 'single thumb',
    state: 'focus',
    label: 'Label'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const SingleThumbActive: Story = {
  name: 'Single Thumb - Active (with Tooltip)',
  args: {
    type: 'single thumb',
    state: 'active',
    label: 'Label',
    formatValue: (value: number) => value.toString()
  },
  render: (args) => {
    const [value, setValue] = useState([56]);
    
    return (
      <div style={{ width: '400px', padding: '60px 20px 20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const SingleThumbDisabled: Story = {
  name: 'Single Thumb - Disabled',
  args: {
    type: 'single thumb',
    state: 'disabled',
    disabled: true,
    label: 'Label',
    defaultValue: [70]
  },
  render: (args) => {
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider {...args} />
      </div>
    );
  }
};

export const SingleThumbError: Story = {
  name: 'Single Thumb - Error',
  args: {
    type: 'single thumb',
    state: 'error',
    label: 'Label',
    errorMessage: 'Error message'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

// Dual Thumb Stories
export const DualThumbRest: Story = {
  name: 'Dual Thumb - Rest',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'Label'
  },
  render: (args) => {
    const [value, setValue] = useState([25, 75]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const DualThumbFocus: Story = {
  name: 'Dual Thumb - Focus',
  args: {
    type: 'dual thumb',
    state: 'focus',
    label: 'Label'
  },
  render: (args) => {
    const [value, setValue] = useState([25, 75]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const DualThumbActive: Story = {
  name: 'Dual Thumb - Active (with Tooltip)',
  args: {
    type: 'dual thumb',
    state: 'active',
    label: 'Label',
    formatValue: (value: number) => value.toString()
  },
  render: (args) => {
    const [value, setValue] = useState([25, 56]);
    
    return (
      <div style={{ width: '400px', padding: '60px 20px 20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const DualThumbDisabled: Story = {
  name: 'Dual Thumb - Disabled',
  args: {
    type: 'dual thumb',
    state: 'disabled',
    disabled: true,
    label: 'Label',
    defaultValue: [25, 75]
  },
  render: (args) => {
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider {...args} />
      </div>
    );
  }
};

export const DualThumbError: Story = {
  name: 'Dual Thumb - Error',
  args: {
    type: 'dual thumb',
    state: 'error',
    label: 'Label',
    errorMessage: 'Error message'
  },
  render: (args) => {
    const [value, setValue] = useState([25, 75]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

// Property Examples
export const WithPrefix: Story = {
  name: 'With Prefix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    prefix: '$'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const WithSuffix: Story = {
  name: 'With Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    suffix: '99'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

export const WithPrefixAndSuffix: Story = {
  name: 'With Prefix and Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'Label',
    prefix: '$',
    suffix: '99'
  },
  render: (args) => {
    const [value, setValue] = useState([70]);
    
    return (
      <div style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  }
};

// Interactive Examples
export const InteractiveDemo: Story = {
  name: 'Interactive Demo',
  render: () => {
    const [singleValue, setSingleValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    const [priceValue, setPriceValue] = useState([213, 450]);
    
    return (
      <div style={{ width: '400px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
            Single Thumb Slider
          </h4>
          <RangeSlider
            type="single thumb"
            label="Volume"
            value={singleValue}
            onValueChange={setSingleValue}
            formatValue={(value) => `${value}%`}
            aria-label="Volume control"
          />
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
            Value: {singleValue[0]}%
          </p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
            Dual Thumb Range Slider
          </h4>
          <RangeSlider
            type="dual thumb"
            label="Price Range"
            value={rangeValue}
            onValueChange={setRangeValue}
            formatValue={(value) => `$${value}`}
            aria-label="Price range"
          />
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
            Range: ${rangeValue[0]} - ${rangeValue[1]}
          </p>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
            Money Range Filter (From Figma)
          </h4>
          <RangeSlider
            type="dual thumb"
            label="Money spent is between"
            value={priceValue}
            onValueChange={setPriceValue}
            min={213}
            max={500}
            step={1}
            prefix="$"
            aria-label="Money spent range"
          />
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
            Range: ${priceValue[0]} - ${priceValue[1]}
          </p>
        </div>
      </div>
    );
  }
};

// RTL Example
export const RTLExample: Story = {
  name: 'RTL Support',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'شريط التمرير للنطاق',
    formatValue: (value: number) => `${value}%`
  },
  render: (args) => {
    const [value, setValue] = useState([30, 70]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '600px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            Basic RTL Slider Support
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            This demonstrates the fundamental RTL behavior: proper Arabic text rendering, 
            right-to-left text alignment, and intuitive slider interaction.
          </p>
        </div>
        
        <div dir="rtl" style={{ width: '100%', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <RangeSlider
            {...args}
            value={value}
            onValueChange={setValue}
          />
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#666', textAlign: 'right' }}>
            <p>النطاق المحدد: {args.formatValue!(value[0])} - {args.formatValue!(value[1])}</p>
            <p>اتجاه النص: من اليمين إلى اليسار</p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  }
};

// RTL Positioning Demo - All Combinations
export const RTLPositioningDemo: Story = {
  name: 'RTL - Complete Positioning Demo',
  render: () => {
    const [basicValue, setBasicValue] = useState([40, 80]);
    const [prefixValue, setPrefixValue] = useState([25, 75]);
    const [suffixValue, setSuffixValue] = useState([60]);
    const [bothValue, setBothValue] = useState([30, 85]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '900px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold' }}>
            RTL Positioning Demonstration - All Combinations
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            This comprehensive demo shows how prefix and suffix positioning works in RTL layout.
            Notice how elements maintain logical order while respecting RTL flow.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '30px' }}>
          {/* Basic RTL */}
          <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600', color: '#333' }}>
              1. Basic RTL Slider (No Prefix/Suffix)
            </h4>
            <div dir="rtl" style={{ width: '100%' }}>
              <RangeSlider
                type="dual thumb"
                label="شريط أساسي"
                value={basicValue}
                onValueChange={setBasicValue}
                formatValue={(value) => `${value}%`}
              />
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#666', textAlign: 'right' }}>
                النطاق: {basicValue[0]}% - {basicValue[1]}%
              </p>
            </div>
          </div>

          {/* With Prefix */}
          <div style={{ padding: '20px', border: '1px solid #e8f5e8', borderRadius: '8px', backgroundColor: '#f8fff8' }}>
            <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600', color: '#2e7d32' }}>
              2. RTL with Prefix - "ر.س" appears on the right
            </h4>
            <div dir="rtl" style={{ width: '100%' }}>
              <RangeSlider
                type="dual thumb"
                label="مع بادئة"
                prefix="ر.س"
                value={prefixValue}
                onValueChange={setPrefixValue}
              />
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#666', textAlign: 'right' }}>
                المبلغ: ر.س{prefixValue[0]} - ر.س{prefixValue[1]}
              </p>
            </div>
          </div>

          {/* With Suffix */}
          <div style={{ padding: '20px', border: '1px solid #e3f2fd', borderRadius: '8px', backgroundColor: '#f8faff' }}>
            <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600', color: '#1976d2' }}>
              3. RTL with Suffix - "%" appears on the left
            </h4>
            <div dir="rtl" style={{ width: '100%' }}>
              <RangeSlider
                type="single thumb"
                label="مع لاحقة"
                suffix="%"
                value={suffixValue}
                onValueChange={setSuffixValue}
              />
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#666', textAlign: 'right' }}>
                النسبة: {suffixValue[0]}%
              </p>
            </div>
          </div>

          {/* With Both */}
          <div style={{ padding: '20px', border: '1px solid #fce4ec', borderRadius: '8px', backgroundColor: '#fef7f7' }}>
            <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600', color: '#c2185b' }}>
              4. RTL with Both - Prefix right, Suffix left
            </h4>
            <div dir="rtl" style={{ width: '100%' }}>
              <RangeSlider
                type="dual thumb"
                label="مع البادئة واللاحقة"
                prefix="ر.س"
                suffix="ألف"
                value={bothValue}
                onValueChange={setBothValue}
              />
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#666', textAlign: 'right' }}>
                المدى: ر.س{bothValue[0]} ألف - ر.س{bothValue[1]} ألف
              </p>
            </div>
          </div>
        </div>

        {/* Visual Guide */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600' }}>
            📐 RTL Layout Guide
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '14px' }}>
            <div>
              <strong>Text Flow:</strong>
              <p style={{ color: '#666', margin: '5px 0' }}>Arabic text flows right-to-left</p>
            </div>
            <div>
              <strong>Prefix Position:</strong>
              <p style={{ color: '#666', margin: '5px 0' }}>Appears after slider (right side)</p>
            </div>
            <div>
              <strong>Suffix Position:</strong>
              <p style={{ color: '#666', margin: '5px 0' }}>Appears before slider (left side)</p>
            </div>
            <div>
              <strong>Mouse Interaction:</strong>
              <p style={{ color: '#666', margin: '5px 0' }}>Right = increase, Left = decrease</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  }
};

// RTL with Prefix and Suffix Examples
export const RTLWithSuffix: Story = {
  name: 'RTL - With Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'مع لاحقة',
    suffix: '%'
  },
  render: (args) => {
    const [value, setValue] = useState([75]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '600px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            RTL Slider with Suffix Demo
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            In RTL layout, the suffix (%) should appear on the LEFT side of the slider,
            and the slider should start from the right (100%) and decrease to the left (0%).
            Moving the mouse RIGHT should increase the value.
          </p>
        </div>
        
        <div dir="rtl" style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <RangeSlider
            {...args}
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            step={5}
            aria-label="نسبة مئوية"
          />
          <div style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#666', 
            textAlign: 'right',
            fontFamily: 'Tajawal, system-ui, sans-serif'
          }}>
            القيمة الحالية: {value[0]}%
          </div>
        </div>
        
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
          Expected behavior: Suffix "%" on LEFT, slider flows right-to-left, mouse right = value increase
        </div>
      </div>
    );
  }
};

export const RTLWithPrefix: Story = {
  name: 'RTL - With Prefix',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'نطاق الراتب الشهري',
    prefix: 'ر.س'
  },
  render: (args) => {
    const [value, setValue] = useState([3000, 8000]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '600px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            RTL Slider with Prefix Demo
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            In RTL layout, the prefix (ر.س) should appear on the RIGHT side of the slider.
            The dual thumb range should work intuitively with proper RTL behavior.
          </p>
        </div>
        
        <div dir="rtl" style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <RangeSlider
            {...args}
            value={value}
            onValueChange={setValue}
            min={1000}
            max={15000}
            step={100}
            formatValue={(val) => val.toLocaleString('ar-SA')}
            aria-label="نطاق الراتب"
          />
          <div style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#666', 
            textAlign: 'right',
            fontFamily: 'Tajawal, system-ui, sans-serif'
          }}>
            النطاق المحدد: {value[0].toLocaleString('ar-SA')} ر.س - {value[1].toLocaleString('ar-SA')} ر.س
          </div>
        </div>
        
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
          Expected behavior: Prefix "ر.س" on RIGHT, dual thumb range flows right-to-left
        </div>
      </div>
    );
  }
};

export const RTLWithPrefixAndSuffix: Story = {
  name: 'RTL - With Prefix & Suffix',
  args: {
    type: 'single thumb',
    state: 'rest',
    label: 'مع بادئة ولاحقة',
    prefix: '$',
    suffix: 'USD'
  },
  render: (args) => {
    const [value, setValue] = useState([250]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '600px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
            RTL Slider with Both Prefix & Suffix
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            In RTL layout: prefix ($) on RIGHT, slider in middle, suffix (USD) on LEFT.
            Order should be: USD [slider] $
          </p>
        </div>
        
        <div dir="rtl" style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <RangeSlider
            {...args}
            value={value}
            onValueChange={setValue}
            min={0}
            max={500}
            step={10}
            aria-label="مبلغ بالدولار"
          />
          <div style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#666', 
            textAlign: 'right',
            fontFamily: 'Tajawal, system-ui, sans-serif'
          }}>
            المبلغ: ${value[0]} USD
          </div>
        </div>
        
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
          Expected layout: USD [slider] $
        </div>
      </div>
    );
  }
};

export const RTLActiveState: Story = {
  name: 'RTL - Active State with Tooltip',
  args: {
    type: 'dual thumb',
    state: 'active',
    label: 'شريط التمرير النشط',
    formatValue: (value: number) => `${value}%`
  },
  render: (args) => {
    const [value, setValue] = useState([40, 80]);
    
    return (
      <div dir="rtl" style={{ width: '400px', padding: '60px 20px 20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666', textAlign: 'right' }}>
          يظهر التلميح عند السحب: {args.formatValue!(value[0])} - {args.formatValue!(value[1])}
        </p>
      </div>
    );
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  }
};

export const RTLErrorState: Story = {
  name: 'RTL - Error State',
  args: {
    type: 'single thumb',
    state: 'error',
    label: 'مستوى الصوت',
    errorMessage: 'القيمة خارج النطاق المسموح',
    suffix: '%'
  },
  render: (args) => {
    const [value, setValue] = useState([95]);
    
    return (
      <div dir="rtl" style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666', textAlign: 'right' }}>
          المستوى المحدد: {value[0]}%
        </p>
      </div>
    );
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  }
};

export const RTLMoneyRangeExample: Story = {
  name: 'RTL - Money Range (Real Use Case)',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'المبلغ المنفق يتراوح بين',
    prefix: 'ر.س'
  },
  render: (args) => {
    const [value, setValue] = useState([500, 1500]);
    
    return (
      <div dir="rtl" style={{ width: '400px', padding: '20px' }}>
        <RangeSlider
          {...args}
          value={value}
          onValueChange={setValue}
          min={100}
          max={2000}
          step={50}
          aria-label="نطاق المبلغ المنفق"
        />
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666', textAlign: 'right' }}>
          <p>النطاق المحدد: ر.س{value[0]} - ر.س{value[1]}</p>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
            استخدم هذا النطاق لفلترة النتائج حسب المبلغ المنفق
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    globals: {
      direction: 'rtl',
    },
  }
};

// RTL Comprehensive Demo
export const RTLComprehensiveDemo: Story = {
  name: 'RTL - Native Radix UI Direction',
  args: {
    type: 'dual thumb',
    state: 'rest',
    label: 'مثال شامل للاتجاه الطبيعي من اليمين إلى اليسار',
    prefix: 'ر.س',
    suffix: 'SAR'
  },
  render: (args) => {
    const [value, setValue] = useState([200, 800]);
    
    return (
      <div style={{ padding: '40px', maxWidth: '800px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>
            ✅ RTL RangeSlider - Native Radix UI Implementation
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
            This demonstrates the <strong>correct RTL implementation</strong> using Radix UI's native direction support:
          </p>
          <ul style={{ fontSize: '14px', color: '#666', marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Native dir Prop:</strong> Uses Radix UI's <code>dir="rtl"</code> prop on Slider.Root</li>
            <li><strong>Proper Range Fill:</strong> Range fills from right-to-left correctly</li>
            <li><strong>Intuitive Interaction:</strong> Moving mouse RIGHT increases value naturally</li>
            <li><strong>Correct Layout:</strong> Suffix (SAR) → Slider → Prefix (ر.س)</li>
            <li><strong>No CSS Conflicts:</strong> Removed conflicting direction styles</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold', color: '#dc2626' }}>
            🔧 Fixed: RTL Range Fill Direction
          </h4>
          <div dir="rtl" style={{ 
            width: '100%', 
            padding: '20px', 
            border: '2px solid #fecaca', 
            borderRadius: '8px', 
            backgroundColor: '#fef2f2' 
          }}>
            <RangeSlider
              {...args}
              value={value}
              onValueChange={setValue}
              min={100}
              max={1000}
              step={25}
              aria-label="نطاق الأسعار بالريال السعودي"
            />
            <div style={{ 
              marginTop: '16px', 
              fontSize: '14px', 
              color: '#666', 
              textAlign: 'right',
              fontFamily: 'Tajawal, system-ui, sans-serif'
            }}>
              النطاق المحدد: ر.س{value[0]} - ر.س{value[1]} SAR
            </div>
            <div style={{ 
              marginTop: '8px', 
              fontSize: '12px', 
              color: '#dc2626', 
              textAlign: 'right',
              fontFamily: 'Tajawal, system-ui, sans-serif'
            }}>
              ✅ الآن يملأ الشريط من اليمين إلى اليسار بشكل صحيح
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h4 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold', color: '#059669' }}>
            📊 LTR Layout (For Comparison)
          </h4>
          <div dir="ltr" style={{ 
            width: '100%', 
            padding: '20px', 
            border: '2px solid #bbf7d0', 
            borderRadius: '8px', 
            backgroundColor: '#f0fdf4' 
          }}>
            <RangeSlider
              type="dual thumb"
              state="rest"
              label="Price Range Comparison"
              prefix="$"
              suffix="USD"
              value={[value[0], value[1]]}
              onValueChange={setValue}
              min={100}
              max={1000}
              step={25}
              aria-label="Price range in USD"
            />
            <div style={{ 
              marginTop: '16px', 
              fontSize: '14px', 
              color: '#666', 
              textAlign: 'left',
              fontFamily: 'system-ui, sans-serif'
            }}>
              Selected range: ${value[0]} - ${value[1]} USD
            </div>
            <div style={{ 
              marginTop: '8px', 
              fontSize: '12px', 
              color: '#059669', 
              textAlign: 'left'
            }}>
              ✅ Range fills left-to-right correctly
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #3b82f6' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1d4ed8', margin: '0 0 10px 0' }}>
            🛠️ Technical Implementation Fix
          </h4>
          <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Before:</strong> Used CSS <code>direction: rtl</code> which caused conflicts
            </p>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>After:</strong> Uses Radix UI native <code>dir="rtl"</code> prop on Slider.Root
            </p>
            <p style={{ margin: '0' }}>
              <strong>Result:</strong> Proper range fill direction, intuitive mouse interaction, and optimal performance
            </p>
          </div>
        </div>
      </div>
    );
  }
};

// RTL vs LTR Comparison
export const RTLVsLTRComparison: Story = {
  name: 'RTL vs LTR - Side by Side',
  args: {
    type: 'dual thumb',
    state: 'rest',
    formatValue: (value: number) => `${value}%`
  },
  render: (args) => {
    const [ltrValue, setLtrValue] = useState([30, 70]);
    const [rtlValue, setRtlValue] = useState([30, 70]);
    
    return (
      <div style={{ padding: '40px', display: 'flex', gap: '40px', maxWidth: '1200px' }}>
        {/* LTR Side */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
            Left-to-Right (English)
          </h3>
          <div dir="ltr" style={{ width: '100%', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <RangeSlider
              {...args}
              label="Price Range"
              prefix="$"
              suffix="USD"
              value={ltrValue}
              onValueChange={setLtrValue}
              aria-label="Price range selector"
            />
            <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
              <p>Selected range: ${ltrValue[0]} - ${ltrValue[1]}</p>
              <p>Average: ${Math.round((ltrValue[0] + ltrValue[1]) / 2)}</p>
            </div>
          </div>
        </div>
        
        {/* RTL Side */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
            Right-to-Left (Arabic)
          </h3>
          <div dir="rtl" style={{ width: '100%', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <RangeSlider
              {...args}
              label="نطاق السعر"
              prefix="ر.س"
              suffix="SAR"
              value={rtlValue}
              onValueChange={setRtlValue}
              aria-label="محدد نطاق السعر"
            />
            <div style={{ marginTop: '16px', fontSize: '14px', color: '#666', textAlign: 'right' }}>
              <p>النطاق المحدد: ر.س{rtlValue[0]} - ر.س{rtlValue[1]}</p>
              <p>متوسط: ر.س{Math.round((rtlValue[0] + rtlValue[1]) / 2)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Default export for main demo
export const Default: Story = SingleThumbRest;