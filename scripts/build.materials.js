const outdent = require('outdent');
const path = require('path');
const fs = require('fs');

const EXPORT_PATH = path.resolve('src/components/00-materials/lib');

fs.writeFileSync(
  `${EXPORT_PATH}/index.js`,
  outdent`
  export * from './icon-set/index.js';
  `,
  'utf8'
);
