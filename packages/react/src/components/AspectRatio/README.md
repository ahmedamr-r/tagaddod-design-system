# AspectRatio Component

The AspectRatio component is used to maintain a consistent width-to-height ratio for content, helping to prevent layout shifts and create visually harmonious designs.

## Features

- Maintains consistent aspect ratios (e.g., 16:9, 4:3, 1:1) for content
- Works with images, videos, and any other content
- Supports modern browsers with the `aspect-ratio` CSS property
- Provides fallback support for older browsers using the padding hack technique
- Integrates with the Tagaddod Design System tokens
- Fully responsive - maintains the ratio at all screen sizes

## Usage

```tsx
import { AspectRatio } from '@tagaddod/react';

// Basic usage (1:1 square)
<AspectRatio>
  <img src="..." alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</AspectRatio>

// Custom ratio (16:9 widescreen)
<AspectRatio ratio={16/9}>
  <video src="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</AspectRatio>

// With custom styling
<AspectRatio 
  ratio={4/3}
  style={{ 
    width: '300px',
    boxShadow: 'var(--t-shadow-200)' 
  }}
>
  <div style={{ 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'var(--t-color-fill-brand)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
  }}>
    4:3 Content
  </div>
</AspectRatio>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `1` | The ratio of width to height (e.g., 16/9, 4/3, 1) |
| `children` | `ReactNode` | - | Content to be displayed within the aspect ratio container |
| `className` | `string` | `''` | Additional CSS class names |
| `style` | `CSSProperties` | `{}` | Additional inline styles |
| `...props` | `HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

## Examples

### Image Card

```tsx
<div className="card">
  <AspectRatio ratio={16/9}>
    <img 
      src="image.jpg" 
      alt="Card image" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover' 
      }} 
    />
  </AspectRatio>
  <div className="card-content">
    <h3>Card Title</h3>
    <p>Card description text...</p>
  </div>
</div>
```

### Video Player

```tsx
<AspectRatio ratio={16/9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ width: '100%', height: '100%', border: 0 }}
  />
</AspectRatio>
```

### Responsive Chart Container

```tsx
<AspectRatio ratio={4/3} style={{ maxWidth: '600px' }}>
  <div style={{ width: '100%', height: '100%' }}>
    {/* Chart component goes here */}
  </div>
</AspectRatio>
```

## Accessibility

- The AspectRatio component is purely presentational and doesn't add any semantic markup.
- Ensure that child elements have appropriate ARIA attributes and semantic HTML based on their content.
- For images, always include appropriate `alt` text.
- For videos and iframes, include `title` attributes.

## Browser Support

- Modern browsers: Uses the native CSS `aspect-ratio` property.
- Older browsers: Falls back to the "padding hack" technique with JavaScript.

## Design Tokens

This component uses the following design tokens:

- `--t-border-radius-200`: Applied to the container for rounded corners.
- `--t-duration-base` and `--t-easing-in-out`: Used for smooth transitions when themes change.

Additional tokens may be applied through custom styling as needed.
