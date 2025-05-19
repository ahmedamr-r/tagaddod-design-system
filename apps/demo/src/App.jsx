import { useState } from 'react';
// Try to import from our locally copied dist folder
import './lib/tagaddod-react/react.css';

// Try to directly import the Button
try {
  const Button = require('./lib/tagaddod-react/components/Button/Button');
  console.log('Button component loaded:', Button);
} catch (error) {
  console.error('Failed to load Button component:', error);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Simple Test App</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
      <p>Using only React's built-in components for now</p>
      
      <div>
        <h2>Analyzing the imported CSS</h2>
        <p>
          The CSS from the Tagaddod Design System should be applied to this page.
          You can check if any CSS variables with the prefix '--t-' are defined:
        </p>
        <pre id="css-vars"></pre>
      </div>
      
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          // Get all CSS variables with --t- prefix
          const styles = getComputedStyle(document.documentElement);
          const cssVars = Array.from(styles).filter(prop => prop.startsWith('--t-'));
          document.getElementById('css-vars').textContent = cssVars.join('\\n');
        `
      }} />
    </div>
  );
}

export default App;
