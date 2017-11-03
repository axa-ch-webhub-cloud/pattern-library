"use strict";

const fs = require('fs');
const path = require('path');
const constants = require('../constants');
const cpx = require("cpx");
const mkdirp = require('mkdirp');
const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

//todo: make it async
const walkSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d;

mkdirp(`${CWD}/.tmp`, (err) => {

  const allFiles = walkSync(`${CWD}/src/components`);

  let htmlFiles = []
  allFiles.forEach((file) => {
    htmlFiles = htmlFiles.concat(file.filter(file => file.match(/.*\.(html)/ig)));
  })

  let html = '';

  htmlFiles.forEach((filePath) => {
    const partial = filePath.replace(`${CWD}/src/`, '');
    html += `<link rel="import" href="${partial}" > \n`
  })

  const importPath = ENV === constants.ENV.PROD ? `${CWD}/dist/__imports.html` : `${CWD}/.tmp/__imports.html`
  fs.writeFile(importPath, html, (err) => {
      if(err) {
        return console.log(err);
      }
  });
});
