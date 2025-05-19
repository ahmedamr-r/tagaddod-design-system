import React from 'react';
import { useChannel } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

const PanelWrapper = styled.div`
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #1ea7fd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;

  &:hover {
    background: #1596e6;
  }
`;

export const TokenEditorPanel: React.FC = () => {
  const [tokenName, setTokenName] = React.useState('');
  const [tokenValue, setTokenValue] = React.useState('');
  const emit = useChannel({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show in console
    console.log('Token update:', { name: tokenName, value: tokenValue });
    
    // TODO: Implement actual token update logic
    emit('tds/tokens/update', { [tokenName]: tokenValue });
    
    // Clear form
    setTokenName('');
    setTokenValue('');
  };

  return (
    <PanelWrapper>
      <Title>Token Editor</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Token name (e.g., color.primary.500)"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Token value (e.g., #1ea7fd)"
          value={tokenValue}
          onChange={(e) => setTokenValue(e.target.value)}
        />
        <Button type="submit">Update Token</Button>
      </Form>
      
      <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
        Enter a token name and value to update design tokens dynamically.
        Changes will be applied to the current session.
      </p>
    </PanelWrapper>
  );
};
