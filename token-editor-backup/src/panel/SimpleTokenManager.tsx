import React from 'react';

interface SimpleTokenManagerProps {
  active?: boolean;
}

export const SimpleTokenManager: React.FC<SimpleTokenManagerProps> = ({ active }) => {
  if (!active) return null;
  
  return (
    <div style={{ padding: 16 }}>
      <h3>Token Editor</h3>
      <p>Simple token editor panel - testing for errors</p>
    </div>
  );
};
