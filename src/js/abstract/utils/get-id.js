const ids = {};

const getId = nodeName => {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};

export default getId;
