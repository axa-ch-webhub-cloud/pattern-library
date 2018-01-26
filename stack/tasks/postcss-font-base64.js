const postcss = require('postcss');
const fs = require('fs');
const glob = require('glob');

module.exports = postcss.plugin('postcss-font-base64', (_options) => {
  // handle options here
  const options = _options || {};

  // default options
  options.match = options.match || {
    Scrabble: ['fakefont'],
  };
  options.format = options.format || ['eot', 'woff', 'woff2', 'ttf'];

  // constiables

  return (css) => {
    // Runs through all of the nodes (declarations) in the css
    css.walkAtRules('font-face', (fontFace) => {
      const fileTypeRegex = getRegexStringForFileTypes(options.format);
      fontFace.replaceValues(new RegExp(`url(.*?.${fileTypeRegex})`), (attr) => {
        const fontSource = attr.replace(/(url|"|\(|\)|\?#iefix)/g, '');

        const res64 = base64Encode(fontSource);
        const newUrlStr = 'url(data:'.concat(getMimeType(attr)).concat(';charset=utf-8;base64,').concat(res64).concat(')');

        return (res64 ? newUrlStr : attr);
      });
    });

    function getRegexStringForFileTypes(fileTypes) {
      const regex = fileTypes.map(fileType => (fileType === 'eot') ? fileType.concat('(\\?#iefix)?') : fileType).join('|');
      return ((regex) ? `(${regex})` : '');
    }

    // helper functions
    function getMimeType(attribute) {
      const formats = {
        '.woff': 'application/font-woff',
        '.woff2': 'font/woff2',
        '.ttf': 'application/font-sfnt',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-sfnt',
      };

      let match = '';
      const extension = attribute.match(/\.[a-z]{3,4}/)[0];

      if (extension in formats) {
        match = formats[extension];
      }
      return match;
    }

    function base64Encode(_file) {
      if (fs.existsSync(_file)) {
        return readAndEncodeFile(_file);
      }
      // Fallback to glob
      const file = glob.sync(`**/${_file}`)[0]; // Could be smarter

      if (fs.existsSync(file)) {
        return readAndEncodeFile(file);
      }

      console.warn(file, 'does not exist.');

      return '';
    }

    function readAndEncodeFile(file) {
      const bitmap = fs.readFileSync(file);
      return Buffer.from(bitmap).toString('base64');
    }
  };
});
