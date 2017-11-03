"use strict"; // eslint-disable-line

const fs = require('fs');
const path = require('path');
const constants = require('../constants');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

// todo: make it async and fix linting
const walkSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d; // eslint-disable-line

mkdirp(`${CWD}/.tmp`, () => {
  const allFiles = walkSync(`${CWD}/src/components`);

  let htmlFiles = [];
  allFiles.forEach((file) => {
    htmlFiles = htmlFiles.concat(file.filter(_file => _file.match(/.*\.(html)/ig)));
  });

  let html = '';

  htmlFiles.forEach((filePath) => {
    const partial = filePath.replace(`${CWD}/src/`, '');
    const name = filePath.replace(`${CWD}/src/components/`, '').replace('/index.html', '');
    html += `<link rel="import" href="${partial}" > \n<core-${name}><core-${name}> \n`;
  });

  const importPath = ENV === constants.ENV.PROD ? `${CWD}/dist/__imports.html` : `${CWD}/.tmp/__imports.html`;
  fs.writeFile(importPath, html, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
