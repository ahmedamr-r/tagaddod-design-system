module.exports = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      prefix: 't',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      prefix: 't',
      files: [{ 
        destination: '_tokens.scss', 
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        { 
          destination: 'index.js', 
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat'
        }
      ]
    }
  }
};
