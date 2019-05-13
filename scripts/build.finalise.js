const mv = require('mv');
const glob = require('glob');
const cp = require('cp');

const globbing = 'src/components/{05-utils,10-atoms,20-molecules,30-organisms}/*';

const inputsLib = glob.sync(
  `${globbing}/.tmp-lib/**`
);
const inputsDists = glob.sync(
  `${globbing}/.tmp-dist/**`
);

inputsLib.forEach(file => {
  mv(file, file.replace('.tmp-lib', 'lib'), () => {});
});

inputsDists.forEach(file => {
  mv(file, file.replace('.tmp-dist', 'dist'), () => {});
});

const inputs = glob.sync(
  `${globbing}/index*.d.ts`
);

inputs.forEach(
  input => cp.sync(input, input.replace('/index.', '/lib/index.'))
);
