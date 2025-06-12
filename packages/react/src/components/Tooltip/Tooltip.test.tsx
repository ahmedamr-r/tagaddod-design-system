import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tooltip, TooltipProvider } from './Tooltip';

const TooltipWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipProvider>{children}</TooltipProvider>
);

describe('Tooltip', () => {
  it('renders the trigger element', () => {
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip">
          <button>Trigger</button>
        </Tooltip>
      </TooltipWrapper>
    );

    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup();
    
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip content">
          <button>Hover me</button>
        </Tooltip>
      </TooltipWrapper>
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    
    await user.hover(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });
  });

  it('hides tooltip content when not hovering', async () => {
    const user = userEvent.setup();
    
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip content">
          <button>Hover me</button>
        </Tooltip>
      </TooltipWrapper>
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    
    await user.hover(trigger);
    await waitFor(() => {
      expect(screen.getByText('Test tooltip content')).toBeInTheDocument();
    });

    await user.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument();
    });
  });

  it('does not show tooltip when disabled', async () => {
    const user = userEvent.setup();
    
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip content" disabled>
          <button>Hover me</button>
        </Tooltip>
      </TooltipWrapper>
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    
    await user.hover(trigger);
    
    // Wait a bit to ensure tooltip doesn't appear
    await new Promise(resolve => setTimeout(resolve, 300));
    
    expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument();
  });

  it('applies custom className to tooltip content', async () => {
    const user = userEvent.setup();
    
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip" className="custom-tooltip">
          <button>Hover me</button>
        </Tooltip>
      </TooltipWrapper>
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    
    await user.hover(trigger);
    
    await waitFor(() => {
      const tooltip = screen.getByText('Test tooltip');
      expect(tooltip).toHaveClass('custom-tooltip');
    });
  });

  it('renders children when tooltip is disabled', () => {
    render(
      <TooltipWrapper>
        <Tooltip content="Test tooltip" disabled>
          <button>Always visible</button>
        </Tooltip>
      </TooltipWrapper>
    );

    expect(screen.getByRole('button', { name: 'Always visible' })).toBeInTheDocument();
  });

  it('accepts React node content', async () => {
    const user = userEvent.setup();
    
    const complexContent = (
      <div>
        <strong>Bold text</strong>
        <br />
        <span>Regular text</span>
      </div>
    );
    
    render(
      <TooltipWrapper>
        <Tooltip content={complexContent}>
          <button>Hover me</button>
        </Tooltip>
      </TooltipWrapper>
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });
    
    await user.hover(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Bold text')).toBeInTheDocument();
      expect(screen.getByText('Regular text')).toBeInTheDocument();
    });
  });
});