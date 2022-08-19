const { preDist, dist, postDist } = require('./scripts/build/dist.rollup.js');

const rollupConfigDist = [
  // Prepare src for dist
  preDist,
  // Bundle and build dist
  dist,
  // Cleanup after
  postDist,
];

export default rollupConfigDist;
