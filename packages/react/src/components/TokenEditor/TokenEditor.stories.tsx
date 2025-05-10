import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Utilities/Token Editor Demo',
  parameters: {
    docs: {
      description: {
        component: `
The Enhanced Token Editor provides powerful features for managing design tokens:

- **Real-time Editing**: Edit tokens and see immediate changes in components
- **Validation**: W3C schema validation and WCAG contrast checking
- **Import/Export**: Import token files and export drafts with timestamps
- **Search & Filter**: Quickly find tokens by name or value
- **Theme-aware**: Automatically handles theme-specific overrides
- **Type Safety**: Validates token types (color, spacing, etc.)
- **Accessibility**: Shows contrast ratios for color pairs
        `,
      },
    },
  },
};

const TokenEditorDemo = () => {
  const [primaryColor, setPrimaryColor] = React.useState('#25b24b');
  const [backgroundColor, setBackgroundColor] = React.useState('#f7f8fa');
  
  React.useEffect(() => {
    // Listen for token updates from the Token Editor panel
    const handleTokenUpdate = (event: CustomEvent) => {
      const tokens = event.detail;
      if (tokens.color?.green?.['500']?.value) {
        setPrimaryColor(tokens.color.green['500'].value);
      }
      if (tokens.color?.neutral?.['50']?.value) {
        setBackgroundColor(tokens.color.neutral['50'].value);
      }
    };
    
    window.addEventListener('tds/tokens/update' as any, handleTokenUpdate);
    return () => window.removeEventListener('tds/tokens/update' as any, handleTokenUpdate);
  }, []);
  
  return (
    <div style={{ padding: 24, backgroundColor }}>
      <h2>Token Editor Demo</h2>
      <p>
        Open the <strong>Token Editor</strong> panel below to edit tokens in real-time.
        Try changing <code>color.green.500</code> to see the button color update.
      </p>
      
      <div style={{ marginTop: 24 }}>
        <Button variant="primary" size="lg">
          Primary Button
        </Button>
        
        <div style={{ marginTop: 16, padding: 16, backgroundColor: '#fff', borderRadius: 8 }}>
          <h3>Current Token Values:</h3>
          <ul>
            <li><code>color.green.500</code>: {primaryColor}</li>
            <li><code>color.neutral.50</code>: {backgroundColor}</li>
          </ul>
        </div>
      </div>
      
      <div style={{ marginTop: 32 }}>
        <h3>Features demonstrated:</h3>
        <ul>
          <li>✅ Real-time token updates</li>
          <li>✅ Type-safe token values</li>
          <li>✅ Import/Export functionality</li>
          <li>✅ WCAG contrast validation</li>
          <li>✅ Search and filtering</li>
          <li>✅ Theme-aware updates</li>
        </ul>
      </div>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => <TokenEditorDemo />,
};

export default meta;
