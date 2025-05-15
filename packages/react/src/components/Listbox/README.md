# Listbox Component

A Listbox is a vertical list of interactive options, with room for icons, descriptions, and other elements. This component is typically placed inside a Popover to create a dropdown menu.

## Usage

```tsx
import { Listbox, Popover, Button } from '@tagaddod/react';
import { useState } from 'react';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Popover
      content={
        <Listbox
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          selectedValue={selectedValue}
          onSelect={(value) => {
            setSelectedValue(value);
            setIsOpen(false);
          }}
        />
      }
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button onClick={() => setIsOpen(true)}>
        {selectedValue ? `Selected: ${selectedValue}` : 'Select an option'}
      </Button>
    </Popover>
  );
};
```

## Properties

### Listbox Props

| Property          | Type                                          | Default | Description                                        |
|-------------------|-----------------------------------------------|---------|----------------------------------------------------|
| options           | Array<ListboxOptionProps>                     | -       | Array of options to display                         |
| selectedValue     | string \| number \| Array<string \| number>   | -       | Currently selected value(s)                         |
| maxVisibleOptions | number                                        | 5       | Maximum number of options to show                   |
| multiple          | boolean                                       | false   | Whether multiple options can be selected            |
| onSelect          | (value: string \| number) => void             | -       | Handler for single selection                        |
| onMultiSelect     | (values: Array<string \| number>) => void     | -       | Handler for multiple selection                      |
| className         | string                                        | -       | Additional CSS class                                |
| id                | string                                        | -       | ID attribute                                        |
| aria-label        | string                                        | -       | Accessible label                                    |
| aria-labelledby   | string                                        | -       | ID of element that labels this component            |
| inPopover         | boolean                                       | true    | Whether this is rendered inside a Popover           |

### ListboxOption Props

| Property      | Type                           | Default | Description                                 |
|---------------|--------------------------------|---------|---------------------------------------------|
| label         | string                         | -       | The text label                              |
| value         | string \| number               | -       | Option value (must be unique)               |
| selected      | boolean                        | false   | Whether the option is selected              |
| disabled      | boolean                        | false   | Whether the option is disabled              |
| divider       | boolean                        | false   | Whether to show a bottom divider            |
| customContent | React.ReactNode                | -       | Custom content to render                    |
| prefix        | React.ReactNode                | -       | Content to display before the label         |
| suffix        | React.ReactNode                | -       | Content to display after the label          |
| helpText      | string                         | -       | Additional text to display below label      |

## Variants and States

The Listbox component supports the following states:
- Default
- Hover
- Selected
- Disabled

## Accessibility

This component implements ARIA listbox patterns:
- Uses `role="listbox"` and `role="option"` for proper semantics
- Supports keyboard navigation (arrow keys, Home/End)
- Handles focus management
- Supports character search to jump to options
- Includes proper ARIA attributes for state

## RTL Support

The component fully supports RTL languages, adjusting alignment and text direction automatically based on the `dir` attribute.

## Examples

See the Storybook documentation for interactive examples of:
- Basic listbox
- With dividers
- With disabled options
- With help text
- Multi-select
- In popover
- With prefix and suffix
- With many options
