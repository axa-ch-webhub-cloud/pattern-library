"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');

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
    const name = filePath.split('/').slice(-2).join('/');
    html +=
    `
      <article class="js--o-sg-section o-sg-section">
        <section class="o-sg-section__title-section">
          <h1 class="o-sg-section__title">${name.replace('/_example.html', '')}</h1>
          <button class="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle-preview>Show PREVIEW</button>
          <button class="js--toggle o-sg-section__button" data-toggle-html>Show HTML</button>
          <button class="js--toggle o-sg-section__button" data-toggle-css>Show CSS</button>
        </section>
        <article class="o-sg-section--source">
          ${fs.readFileSync(filePath, 'utf8')}
        </article>
      </article>
    `;
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
