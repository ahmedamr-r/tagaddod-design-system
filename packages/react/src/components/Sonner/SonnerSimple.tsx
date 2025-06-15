import React from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from '../Button/Button';

/**
 * Simple example following official Sonner documentation exactly
 * This demonstrates the minimal setup required for Sonner to work
 */
export const SonnerSimple: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Official Sonner Example</h2>
      <p>This follows the exact pattern from the official Sonner docs:</p>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <Button onClick={() => toast('My first toast')}>
          Give me a toast
        </Button>
        
        <Button onClick={() => toast.success('Success toast')} tone="success">
          Success Toast
        </Button>
        
        <Button onClick={() => toast.error('Error toast')} tone="critical">
          Error Toast
        </Button>
        
        <Button 
          onClick={() => toast('Custom toast', {
            description: 'This has a description',
            action: {
              label: 'Action',
              onClick: () => console.log('Action clicked!'),
            },
          })}
        >
          Custom Toast
        </Button>
      </div>
      
      <div style={{ 
        padding: '12px', 
        background: '#f0f9ff', 
        border: '1px solid #bae6fd',
        borderRadius: '6px',
        marginBottom: '20px'
      }}>
        <strong>Official Sonner Pattern:</strong>
        <pre style={{ margin: '8px 0', fontSize: '14px' }}>{`import { Toaster, toast } from 'sonner';

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  );
}`}</pre>
      </div>
      
      {/* This is the official Toaster component from Sonner */}
      <Toaster 
        position="bottom-right"
        richColors
        closeButton
        expand
      />
    </div>
  );
};

export default SonnerSimple;