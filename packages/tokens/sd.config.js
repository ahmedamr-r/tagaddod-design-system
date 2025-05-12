const StyleDictionary = require('style-dictionary');
const brands = ['tagaddod', 'greenpan'];
const locales = ['en', 'ar'];

brands.forEach(brand => {
  locales.forEach(locale => {
    StyleDictionary.extend({
      source: [
        'src/core/**/*.json',
        'src/semantic/**/*.json',
        'src/extras/**/*.json',
        `src/brands/${brand}/overrides/**/*.json`,
        `src/locales/${locale}/**/*.json`
      ],
      platforms: {
        css: {
          transformGroup: 'css',
          prefix: `${brand}-${locale}`,
          buildPath: `dist/${brand}/${locale}/`,
          files: [{
            destination: 'vars.css',
            format: 'css/variables'
          }]
        }
      }
    }).buildAllPlatforms();
  });
});
