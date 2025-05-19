// Example React component consuming the library

import React from 'react';
import { Button, ThemeProvider } from '@tagaddod-design/react';

// Import styles
import '@tagaddod-design/react/styles';

// Import a component directly
import { Avatar } from '@tagaddod-design/react/components/Avatar';

function App() {
  return (
    <ThemeProvider theme="tagaddod">
      <div style={{ padding: '2rem' }}>
        <h1>Tagaddod Design System Test</h1>
        
        <h2>Buttons from main import</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
        </div>
        
        <h2>Avatar from direct import</h2>
        <div>
          <Avatar name="John Doe" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
