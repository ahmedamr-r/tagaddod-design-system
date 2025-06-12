import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Toast, ToastProvider, ToastViewport } from './Toast';

const ToastWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ToastProvider>
    {children}
    <ToastViewport />
  </ToastProvider>
);

describe('Toast', () => {
  it('renders the toast with title', () => {
    render(
      <ToastWrapper>
        <Toast title="Test title" open={true} duration={0} />
      </ToastWrapper>
    );

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('renders description when provided and showDescription is true', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          description="Test description" 
          showDescription={true}
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('hides description when showDescription is false', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          description="Test description" 
          showDescription={false}
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
  });

  it('shows close button when showClose is true', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          showClose={true}
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    expect(screen.getByLabelText('Close toast')).toBeInTheDocument();
  });

  it('hides close button when showClose is false', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          showClose={false}
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    expect(screen.queryByLabelText('Close toast')).not.toBeInTheDocument();
  });

  it('calls onOpenChange when close button is clicked', async () => {
    const handleOpenChange = jest.fn();
    const user = userEvent.setup();

    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          open={true} 
          duration={0}
          onOpenChange={handleOpenChange}
        />
      </ToastWrapper>
    );

    const closeButton = screen.getByLabelText('Close toast');
    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('applies correct CSS class for toast type', () => {
    const { rerender } = render(
      <ToastWrapper>
        <Toast title="Test" type="success" open={true} duration={0} />
      </ToastWrapper>
    );

    let toast = screen.getByText('Test').closest('[role="status"]');
    expect(toast).toHaveClass('success');

    rerender(
      <ToastWrapper>
        <Toast title="Test" type="error" open={true} duration={0} />
      </ToastWrapper>
    );

    toast = screen.getByText('Test').closest('[role="status"]');
    expect(toast).toHaveClass('error');

    rerender(
      <ToastWrapper>
        <Toast title="Test" type="default" open={true} duration={0} />
      </ToastWrapper>
    );

    toast = screen.getByText('Test').closest('[role="status"]');
    expect(toast).toHaveClass('default');
  });

  it('shows appropriate icon for each toast type', () => {
    const { rerender } = render(
      <ToastWrapper>
        <Toast title="Test" type="success" showIcon={true} open={true} duration={0} />
      </ToastWrapper>
    );

    // Success toast should have check icon
    expect(document.querySelector('svg')).toBeInTheDocument();

    rerender(
      <ToastWrapper>
        <Toast title="Test" type="error" showIcon={true} open={true} duration={0} />
      </ToastWrapper>
    );

    // Error toast should have alert icon
    expect(document.querySelector('svg')).toBeInTheDocument();

    rerender(
      <ToastWrapper>
        <Toast title="Test" type="default" showIcon={true} open={true} duration={0} />
      </ToastWrapper>
    );

    // Default toast should have info icon
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          showIcon={false}
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    expect(document.querySelector('svg')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          className="custom-toast"
          open={true} 
          duration={0} 
        />
      </ToastWrapper>
    );

    const toast = screen.getByText('Test title').closest('[role="status"]');
    expect(toast).toHaveClass('custom-toast');
  });

  it('auto-closes after specified duration', async () => {
    const handleOpenChange = jest.fn();

    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          open={true} 
          duration={100}
          onOpenChange={handleOpenChange}
        />
      </ToastWrapper>
    );

    await waitFor(() => {
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    }, { timeout: 200 });
  });

  it('does not auto-close when duration is 0', async () => {
    const handleOpenChange = jest.fn();

    render(
      <ToastWrapper>
        <Toast 
          title="Test title" 
          open={true} 
          duration={0}
          onOpenChange={handleOpenChange}
        />
      </ToastWrapper>
    );

    // Wait a bit and ensure it doesn't auto-close
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(handleOpenChange).not.toHaveBeenCalled();
  });
});