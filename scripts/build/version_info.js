// GATHER VERSION INFO FROM COMPONENTS
const path = require('path');
const fs = require('fs');

const { cwd } = process;

// helpers
const clean = name => name.replace(/^@axa-ch\//, 'axa-');

const justVersionInfo = info => info.replace(/[^A-Za-z0-9\-.]/g, ''); // deliberate consequence: ignore caret

const pick = (object, ignore = {}) => {
  const result = {};
  const components = Object.keys(object).filter(
    key => key.indexOf('@axa-ch/') === 0 && !ignore[key]
  );
  components.forEach(name => {
    result[clean(name)] = justVersionInfo(object[name]);
  });
  return result;
};

const ignoreNonComponents = (packages, ignores) =>
  packages.filter(aPackage => {
    // ignore components classified under our Atomic-Design scheme as starting with 0
    // (i.e. currently 00-materials, 05-utils)
    const ignore = aPackage.indexOf('src/components/0') > -1;
    if (ignore) {
      // eslint-disable-next-line no-unused-vars
      const [_, lastPathComponent] = aPackage.match(/([a-z]+)$/);
      if (!lastPathComponent) {
        return true;
      }
      const dependencyStylePackage = `@axa-ch/${lastPathComponent}`;
      ignores[dependencyStylePackage] = true;
    }
    return !ignore;
  });

const parseLernaJSON = aDirectory => {
  // read lerna.json in directory passed to get all relevant components
  const directoryPath = `${aDirectory}${path.sep}`;
  const lernaFilePath = `${directoryPath}lerna.json`;
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const lernaJSON = require(lernaFilePath);
  const { packages } = lernaJSON;
  // iterate over all component packages in lerna.json,
  // and partition into components proper and to-be-ignored ones
  const ignore = {};
  const components = ignoreNonComponents(packages, ignore);
  return { ignore, components, directoryPath };
};

// rollup version, is invoked in each component directory
// eslint-disable-next-line default-param-last
const gatherVersions = (aPath = cwd(), versionInfo = {}, passedInIgnore) => {
  // determine to-be-ignored dependencies, if not passed-in already
  let toIgnore = passedInIgnore;
  if (passedInIgnore === undefined) {
    const { ignore } = parseLernaJSON(
      path.resolve(aPath, '..', '..', '..', '..')
    );
    toIgnore = ignore;
  }
  // construct full path to component package.json
  const filePath = `${aPath}${path.sep}package.json`;
  // bail out if package.json missing
  if (!fs.existsSync(filePath)) {
    return JSON.stringify({});
  }
  // load package.json's content
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const packageJSON = require(filePath);
  // extract relevant key-value pairs
  const { name, version, dependencies = {} } = packageJSON;
  // harvest version info from them
  versionInfo[clean(name)] = {
    [clean(name)]: version,
    ...pick(dependencies, toIgnore),
  };
  return JSON.stringify(versionInfo); // stringify: because a string-replacing plugin will use this
};

// webpack/storybook version, is invoked once at top level
const gatherAllVersions = aDirectory => {
  const { ignore, components, directoryPath } = parseLernaJSON(aDirectory);
  // ... harvesting version info for each component
  const versionInfo = {};
  components.forEach(componentPath =>
    gatherVersions(`${directoryPath}${componentPath}`, versionInfo, ignore)
  );
  // return version info in aggregate form
  return JSON.stringify(versionInfo); // stringify: because a string-replacing plugin will use this
};

module.exports.gatherVersions = gatherVersions;
module.exports.gatherAllVersions = gatherAllVersions;
