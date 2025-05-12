import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {
      resolve: (id, basedir) => {
        // Resolve @tagaddod/tokens imports
        if (id.startsWith('@tagaddod/tokens')) {
          const requestPath = id.replace('@tagaddod/tokens', '');
          const tokensPath = path.resolve(__dirname, '../../packages/tokens/dist');
          
          if (requestPath === '/css/tokens.css' || requestPath === '/css') {
            return path.join(tokensPath, 'css/tokens.css');
          } else if (requestPath === '/tagaddod') {
            return path.join(tokensPath, 'tagaddod/vars.css');
          } else if (requestPath === '/greenpan') {
            return path.join(tokensPath, 'greenpan/vars.css');
          }
        }
        
        // Default resolution
        return id;
      }
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
