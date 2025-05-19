import React, { useState } from 'react';
import {
  ThemeProvider,
  Button, 
  TextInput, 
  Checkbox, 
  Switch,
  Badge,
  Avatar,
  Table,
  Tabs, 
  TabsList, 
  TabsContent, 
  TabsTrigger,
  RadioGroup,
  RadioButtonItem
} from '@tagaddod-design/react';

// Note: We don't need to import any CSS from the design system - it should be injected automatically

const App: React.FC = () => {
  // Theme controls 
  const [theme, setTheme] = useState<'tagaddod' | 'greenpan'>('tagaddod');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(prev => prev === 'tagaddod' ? 'greenpan' : 'tagaddod');
  };

  // Toggle between LTR and RTL
  const toggleDirection = () => {
    setDirection(prev => prev === 'ltr' ? 'rtl' : 'ltr');
  };

  const mockTableData = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
  ];

  const mockColumns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'description', header: 'Description' }
  ];

  return (
    <ThemeProvider defaultTheme={theme} defaultDirection={direction}>
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Design System Test</h1>
        
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: 'var(--t-color-surface-background-secondary)', borderRadius: '8px' }}>
          <h2>Theme Controls</h2>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <span>Theme: {theme}</span>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={toggleTheme}
            >
              Toggle Theme
            </Button>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>Direction: {direction}</span>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={toggleDirection}
            >
              Toggle Direction
            </Button>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <Button variant="primary" size="medium">Primary Button</Button>
            <Button variant="secondary" size="medium">Secondary Button</Button>
            <Button variant="tertiary" size="medium">Tertiary Button</Button>
            <Button variant="plain" size="medium">Plain Button</Button>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary" tone="critical" size="medium">Critical</Button>
            <Button variant="primary" tone="success" size="medium">Success</Button>
            <Button variant="primary" tone="neutral" size="medium">Neutral</Button>
            <Button variant="primary" tone="magic" size="medium">Magic</Button>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Form Elements</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextInput 
              label="Text Input" 
              placeholder="Enter text..."
              helpText="This is a help text"
            />
            
            <Checkbox>Checkbox Example</Checkbox>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Switch:</span>
              <Switch />
            </div>

            <RadioGroup>
              <RadioButtonItem value="option1">Option 1</RadioButtonItem>
              <RadioButtonItem value="option2">Option 2</RadioButtonItem>
            </RadioGroup>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Content Elements</h2>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Badge tone="neutral">Default Badge</Badge>
            <Badge tone="success">Success Badge</Badge>
            <Badge tone="critical">Critical Badge</Badge>
            <Badge tone="warning">Warning Badge</Badge>
            <Badge tone="info">Info Badge</Badge>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Avatar 
              size="medium" 
              src="https://i.pravatar.cc/150?img=1" 
              alt="User avatar" 
            />
            <Avatar 
              size="medium" 
              src="" 
              initials="JD" 
              alt="User initials" 
            />
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Tabs</h2>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Tab 1 content</TabsContent>
            <TabsContent value="tab2">Tab 2 content</TabsContent>
            <TabsContent value="tab3">Tab 3 content</TabsContent>
          </Tabs>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Table</h2>
          <Table 
            data={mockTableData} 
            columns={mockColumns} 
            title="Test Table" 
            striped={true}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App; 