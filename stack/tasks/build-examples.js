"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const reGetParentDirAndFileAndComponent = /\/components\/[^/]+\/_example\.html$/;

dir.files(`${CWD}/src/components`, (err, allFiles) => {
  let htmlFiles = [];
  if (err) throw err;

  htmlFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));

  let html = '';
  let imports = '';

  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');

  htmlFiles.forEach((filePath) => {
    const partial = filePath.replace(`${CWD}/src/`, '').replace('_example.html', 'index.html');
    imports += `<link rel="import" href="${partial}" > \n`;
    html += `${fs.readFileSync(filePath, 'utf8')}\n`;
  });

  const result = indexHtml.replace(/<!-- {CUT AND INJECT HERE} -->/g, imports + html);

  fs.writeFile(`${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/index.html`, result, (_err) => {
    if (_err) {
      console.log(_err); // eslint-disable-line
    } else {
      console.log(`\nMain Index.html written with ${htmlFiles.length} examples\n`); // eslint-disable-line
    }
  });
});
