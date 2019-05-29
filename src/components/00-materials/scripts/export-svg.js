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

const importPath = './icons-raw/.tmp';
const exportPath = './icons';

fs.readdir(importPath, (err, items) => {
  if (err) {
    throw new Error('Cannot find icons');
  }

  let namedExports = '';
  items.forEach(icon => {
    const iconPath = path.resolve(importPath, icon);
    const contents = fs.readFileSync(iconPath, 'utf8');
    const fileName = path.basename(icon);
    const className = toClassName(fileName);

    if (!fs.existsSync(exportPath)) {
      fs.mkdirSync(exportPath);
    }

    // Generate a js file forEach svg file found
    fs.writeFileSync(
      `${exportPath}/${fileName}.js`,
      outdent`export default '${contents}';`,
      'utf8'
    );

    namedExports += outdent`
      export { default as ${className} } from './${fileName}.js';

    `;
  });

  // Make index file with named exports forEach svg
  fs.writeFileSync(`${exportPath}/index.js`, namedExports, 'utf8');
});
