/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const outdent = require('outdent');

const camelise = str =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
const componentName = name => name.trim().replace(/\s+/g, '-');
const camelCase = _camelCase =>
  camelise(componentName(_camelCase.replace('.', '-')).replace(/-/g, ' '));
const toClassName = _className =>
  camelCase(_className).replace(/^\w/, c => c.toUpperCase());

const importIconsPath = './icons-raw';
const exportIconsPath = './icons';

const importImagesPath = './images-raw';
const exportImagesPath = './images';

fs.readdir(importIconsPath, (err, items) => {
  if (err) {
    throw new Error('Cannot find icons');
  }

  let namedExports = '';
  items.forEach(icon => {
    if (/\.svg/.test(icon)) {
      const iconPath = path.resolve(importIconsPath, icon);
      const contents = fs.readFileSync(iconPath, 'utf8');
      const fileName = path.basename(icon);
      const className = toClassName(fileName);

      if (!fs.existsSync(exportIconsPath)) {
        fs.mkdirSync(exportIconsPath);
      }

      // Generate a js file forEach svg file found
      fs.writeFileSync(
        `${exportIconsPath}/${fileName}.js`,
        outdent`export default '${contents}';`,
        'utf8'
      );

      namedExports += outdent`
      export { default as ${className} } from './${fileName}.js';
    `;
    }
  });

  // Make index file with named exports forEach svg
  fs.writeFileSync(`${exportIconsPath}/index.js`, namedExports, 'utf8');
});

fs.readdir(importImagesPath, (err, items) => {
  if (err) {
    throw new Error('Cannot find icons');
  }

  let namedExports = '';
  items.forEach(icon => {
    if (/\.svg/.test(icon)) {
      const iconPath = path.resolve(importImagesPath, icon);
      const contents = fs.readFileSync(iconPath, 'utf8');
      const fileName = path.basename(icon);
      const className = toClassName(fileName);

      if (!fs.existsSync(exportImagesPath)) {
        fs.mkdirSync(exportImagesPath);
      }

      // Generate a js file forEach svg file found
      fs.writeFileSync(
        `${exportImagesPath}/${fileName}.js`,
        outdent`export default '${contents}';`,
        'utf8'
      );

      namedExports += outdent`
      export { default as ${className} } from './${fileName}.js';
    `;
    }
  });

  // Make index file with named exports forEach svg
  fs.writeFileSync(`${exportImagesPath}/index.js`, namedExports, 'utf8');
});
