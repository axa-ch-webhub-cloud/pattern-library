#!/usr/bin/env node

/*
 *  Fix incorrect component package.json files left over by a broken build.
 *  Example invocation:
 *  patterns-library$ ./scripts/build/fix.js
 */

// imports
const { cwd } = process;
const fs = require('fs');
const path = require('path');

// synchronous directory-walker iterator
function* walkSync(dir, filter = /.*/, acceptable = () => true) {
  const files = fs.readdirSync(dir);

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      yield* walkSync(pathToFile, filter, acceptable);
    } else if (filter.test(pathToFile) && acceptable(dir, file, pathToFile)) {
      yield pathToFile.split(path.sep);
    }
  }
}

// helpers
const requirePackageJSON = dir => fs.existsSync(path.join(dir, 'package.json'));

const currentDirectory = cwd();

// find all importable components ...
// eslint-disable-next-line no-restricted-syntax
for (const file of walkSync(
  `src${path.sep}components`,
  /(?<!node_modules.*)package\.json$/,
  requirePackageJSON
)) {
  // construct full path to component package.json
  const filePath = [currentDirectory, ...file].join(path.sep);
  // load package.json's content
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const packageJSON = require(filePath);
  // remove 'main' key
  delete packageJSON.main;
  // write it back, properly formatted
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(
      packageJSON,
      /* no custom replacer */ null,
      /* number of spaces for formatting */ 2
    )}\n`
  );
  // tell user
  // eslint-disable-next-line no-console
  console.log('FIXED:', filePath);
}
