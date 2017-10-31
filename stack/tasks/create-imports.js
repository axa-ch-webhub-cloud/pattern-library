"use strict";

const fs = require('fs');
const path = require('path');
const CWD = process.cwd();
const mkdirp = require('mkdirp');

const walkSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d;

mkdirp(`${CWD}/.tmp`, (err) => {

  const allFiles = walkSync(`${CWD}/src/components`);

  let htmlFiles = allFiles[0].filter(file => file.match(/.*\.(html)/ig));

  let html = '';

  htmlFiles.forEach((filePath) => {
    const partial = filePath.replace(`${CWD}/src/`, '');
    html += `<link rel="import" href="${partial}" > \n`
  })

  fs.writeFile(`${CWD}/.tmp/__imports.html`, html, (err) => {
      if(err) {
        return console.log(err);
      }
  });
});
