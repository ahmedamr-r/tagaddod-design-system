import React from 'react';
import { Sonner, showSonner } from './Sonner';
import { Button } from '../Button/Button';

/**
 * Simple test component to debug Sonner functionality
 * This component includes both the Toaster and trigger buttons
 */
export const SonnerTest: React.FC = () => {
  const handleShowToast = () => {
    console.log('Button clicked - triggering Sonner toast');
    
    const toastId = showSonner({
      type: 'success',
      title: 'Test Toast',
      description: 'This is a test toast to verify Sonner is working',
      duration: 5000,
    });
    
    console.log('Toast triggered with ID:', toastId);
  };

  const handleShowError = () => {
    console.log('Error button clicked');
    
    showSonner({
      type: 'error',
      title: 'Error Toast',
      description: 'This is an error toast',
      duration: 0, // Won't auto-close
    });
  };

  const handleShowDefault = () => {
    console.log('Default button clicked');
    
    showSonner({
      title: 'Default Toast',
      description: 'This is a default toast',
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sonner Test Component</h2>
      <p>This component includes the Toaster and test buttons.</p>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <Button onClick={handleShowToast} tone="success">
          Show Success Toast
        </Button>
        <Button onClick={handleShowError} tone="critical">
          Show Error Toast
        </Button>
        <Button onClick={handleShowDefault}>
          Show Default Toast
        </Button>
      </div>
      
      <div style={{ 
        padding: '12px', 
        background: '#f5f5f5', 
        borderRadius: '6px',
        marginBottom: '20px'
      }}>
        <strong>Debug Info:</strong>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Sonner component is rendered at the bottom of this component</li>
          <li>Check browser console for click logs</li>
          <li>Toast should appear in bottom-right corner</li>
          <li>If toast doesn't show, check console for errors</li>
        </ul>
      </div>
      
      {/* Important: Toaster must be rendered for showSonner to work */}
      <Sonner 
        position="bottom-right"
        visibleToasts={5}
        closeButton={true}
        richColors={false}
        expand={true}
        duration={4000}
      />
    </div>
  );
};

export default SonnerTest;