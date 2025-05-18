import React from 'react';
import { render, screen } from '@testing-library/react';
import { AspectRatio } from './AspectRatio';

// Mock the CSS.supports function since it's not available in Jest
Object.defineProperty(window, 'CSS', {
  value: {
    supports: jest.fn(() => true), // Default to supporting aspect-ratio
  },
});

describe('AspectRatio Component', () => {
  it('renders children correctly', () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <div data-testid="child">Child content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    const child = screen.getByTestId('child');
    
    expect(container).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    expect(child.textContent).toBe('Child content');
  });
  
  it('applies the correct aspect ratio via style', () => {
    render(
      <AspectRatio ratio={16/9} data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    
    // Check if aspect-ratio is set correctly
    expect(container.style.aspectRatio).toBe('1.7777777777777777'); // 16/9 as a decimal
  });
  
  it('merges custom styles with aspect ratio style', () => {
    const customStyle = {
      width: '300px',
      backgroundColor: 'red',
    };
    
    render(
      <AspectRatio ratio={4/3} style={customStyle} data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    
    // Check if all styles are applied
    expect(container.style.aspectRatio).toBe('1.3333333333333333'); // 4/3 as a decimal
    expect(container.style.width).toBe('300px');
    expect(container.style.backgroundColor).toBe('red');
  });
  
  it('applies fallback styles for browsers without aspect-ratio support', () => {
    // Mock CSS.supports to return false for aspect-ratio
    (window.CSS.supports as jest.Mock).mockReturnValueOnce(false);
    
    render(
      <AspectRatio ratio={16/9} data-testid="aspect-ratio">
        <div data-testid="child">Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    
    // The fallback class should be applied
    expect(container).toHaveClass('fallback');
    
    // padding-top would be set by useEffect in real DOM
    // We can't easily test this in JSDOM, but we can ensure
    // the component doesn't crash in fallback mode
  });
  
  it('applies custom className correctly', () => {
    render(
      <AspectRatio className="custom-class" data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveClass('container');
  });
  
  it('passes additional props to the container', () => {
    render(
      <AspectRatio
        data-testid="aspect-ratio"
        aria-label="Image container"
        role="img"
      >
        <div>Content</div>
      </AspectRatio>
    );
    
    const container = screen.getByTestId('aspect-ratio');
    
    expect(container).toHaveAttribute('aria-label', 'Image container');
    expect(container).toHaveAttribute('role', 'img');
  });
});
