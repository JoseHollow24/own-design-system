import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'name/js/pascal',
  type: 'name',
  transform: (token) => {
    return token.path
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
      .replace(/-./g, x => x[1].toUpperCase());
  }
});

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/generated-tokens/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        options: {
          outputReferences: true,
        }
      }]
    },
    js: {
      transforms: ['attribute/cti', 'name/js/pascal', 'color/hex'],
      buildPath: 'src/generated-tokens/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6' 
      }]
    }
  }
});

await sd.buildAllPlatforms();
console.log('\n🚀 Tokens compilados con constantes planas en src/generated-tokens/');