const mv = require('mv');
const glob = require('glob');

const inputsLib = glob.sync(
  'src/components/@(05-utils|10-atoms|20-molecules|30-organisms)/*/.tmp-lib/**'
);
const inputsDists = glob.sync(
  'src/components/@(05-utils|10-atoms|20-molecules|30-organisms)/*/.tmp-dist/**'
);

inputsLib.forEach(file => {
  mv(file, file.replace('.tmp-lib', 'lib'), () => {});
});

inputsDists.forEach(file => {
  mv(file, file.replace('.tmp-dist', 'dist'), () => {});
});
