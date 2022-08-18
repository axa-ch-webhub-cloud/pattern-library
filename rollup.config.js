const fs = require('fs');

const { lib, libReact } = require('./scripts/build/lib.rollup.js');

const rollupConfig = [lib];

if (fs.existsSync('./index.react.js')) {
  rollupConfig.push(libReact);
}

export default rollupConfig;
