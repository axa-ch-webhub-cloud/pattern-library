"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const reGetParentDirAndFileAndComponent = /\/components\/[^/]+\/index\.html$/;

mkdirp(ENV === constants.ENV.PROD ? `${CWD}/dist` : `${CWD}/.tmp`, async () => {
  dir.files(`${CWD}/src/components`, (err, allFiles) => {
    let htmlFiles = [];
    if (err) throw err;

    htmlFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));

    let html = '';

    htmlFiles.forEach((filePath) => {
      const partial = filePath.replace(`${CWD}/src/`, '');
      const name = filePath.replace(`${CWD}/src/components/`, '').replace('/index.html', '');
      html += `<link rel="import" href="${partial}" > \n<core-${name}><core-${name}> \n`;
    });

    const importPath = ENV === constants.ENV.PROD ? `${CWD}/dist/__imports.html` : `${CWD}/.tmp/__imports.html`;
    fs.writeFile(importPath, html, (_err) => {
      if (_err) {
        console.log(_err);
      }
    });
  });
});
