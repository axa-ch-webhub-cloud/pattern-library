// GATHER VERSION INFO FROM COMPONENTS
const path = require('path');
const fs = require('fs');

// synchronous directory-walker iterator
function *walkSync(dir, filter = /.*/, acceptable = () => true) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
      const pathToFile = path.join(dir, file);
      const isDirectory = fs.statSync(pathToFile).isDirectory();
      if (isDirectory) {
          yield *walkSync(pathToFile, filter, acceptable);
      } else if (filter.test(pathToFile) && acceptable(dir, file, pathToFile)) {
          yield pathToFile.split(path.sep);
      }
  }
}

// helpers
const requirePackageJSON = dir => fs.existsSync(path.join(dir, 'package.json'));

const clean = name => name.replace(/^@axa\-ch\//, 'axa-');

const justVersionInfo = info => info.replace(/[^A-Za-z0-9\.]/g, ''); // deliberate consequence: ignore caret

const pick = object => {
  const result = {};
  const components = Object.keys(object).filter( key => key.indexOf('@axa-ch/') === 0 );
  components.forEach( name => {
    result[clean(name)] = justVersionInfo(object[name]);
  });
  return result;
}

const gatherVersions = (currentDirectory, startDirectory = '') => {
    const versionInfo = {};
    // find all importable components ...
    for (const file of walkSync(`${startDirectory ? startDirectory + path.sep : ''}src${path.sep}components`, /(?<!node_modules.*)package\.json$/, requirePackageJSON)) {
        // construct full path to component package.json
        const filePath = [currentDirectory, ...file].join(path.sep);
        // load package.json's content
        const packageJSON = require(filePath);
        // extract relevant key-value pairs
        const {name, version, dependencies = {}} = packageJSON;
        // harvest version info from them
        versionInfo[clean(name)] = {[clean(name)]: version, ...pick(dependencies)};
    }

    return JSON.stringify(versionInfo);
}

module.exports.gatherVersions = gatherVersions;
