const fs = require('fs');

const { lib, libReact } = require('./scripts/build/lib.rollup.js');
const { preDist, dist, postDist } = require('./scripts/build/dist.rollup.js');

// Sometimes there is no react version to build. I.e icons
const rollupConfig = [lib];

// Prepare src for dist
rollupConfig.push(preDist);

if (fs.existsSync('./index.react.js')) {
  rollupConfig.push(libReact);
}

// Bundle and build dist
rollupConfig.push(dist);
// Cleanup after
rollupConfig.push(postDist);

export default rollupConfig;
