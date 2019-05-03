const glob = require('glob');
const outdent = require('outdent');
const path = require('path');
const fs = require('fs');

const icons = glob.sync('src/components/00-materials/icons/.tmp/*');
const { resolve, basename } = path;

const EXPORT_PATH = resolve('src/components/00-materials/lib');
let namedExports = '';

const camelise = str => str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
  if (+match === 0) return '';
  return index === 0 ? match.toLowerCase() : match.toUpperCase();
});

const componentName = name => name.trim().replace(/\s+/g, '-');
const camelCase = _camelCase => camelise(componentName(_camelCase.replace('.', '-')).replace(/-/g, ' '));
const toClassName = _className => camelCase(_className).replace(/^\w/, c => c.toUpperCase());


// Create folder structure
if (!fs.existsSync(EXPORT_PATH)) {
  fs.mkdirSync(EXPORT_PATH);
}

if (!fs.existsSync(`${EXPORT_PATH}/icon-set`)) {
  fs.mkdirSync(`${EXPORT_PATH}/icon-set`);
}

// Write all JS files containing the optimised SVGs
icons.forEach((icon) => {
  const contents = fs.readFileSync(resolve(icon), 'utf8');

  const fileName = basename(icon);
  const className = toClassName(fileName);

  fs.writeFileSync(
    `${EXPORT_PATH}/icon-set/${fileName}.js`,
    outdent`
    export default '${contents}';
    `,
    'utf8',
  );

  namedExports += outdent`
    export { default as ${className} } from './${fileName}.js';

  `;
});

// Write all named exports indside in a index.js file
fs.writeFileSync(
  `${EXPORT_PATH}/icon-set/index.js`,
  namedExports,
  'utf8',
);
