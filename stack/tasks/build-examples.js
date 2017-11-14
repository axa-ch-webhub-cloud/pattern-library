"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;

dir.files(`${CWD}/src/components`, (err, allFiles) => {
  let previewHtmls = [];
  let exampleHtmls = [];
  if (err) throw err;

  previewHtmls = allFiles.filter(_file => _file.match(reGetPreviews));
  exampleHtmls = allFiles.filter(_file => _file.match(reGetExamples));

  if (exampleHtmls.length !== previewHtmls.length || !previewHtmls.length || !exampleHtmls.length) {
    throw new Error('Every component must contain a _preview and a _example html');
  }

  let html = '';
  let imports = '';

  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');

  previewHtmls.forEach((filePath, index) => {
    const partial = filePath.replace(`${CWD}/src/`, '').replace('_preview.html', 'index.html');
    imports += `<link rel="import" href="${partial}" > \n`;
    const name = filePath.split('/').slice(-2).join('/');
    html +=
    `
      <article class="js--o-sg-section o-sg-section">
        <section class="o-sg-section__section o-sg-section__section--title">
          <h1 class="o-sg-section__title">${name.replace('/_preview.html', '')}</h1>
          <button class="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle-preview>Show PREVIEW</button>
          <button class="js--toggle o-sg-section__button" data-toggle-html>Show HTML</button>
          <button class="js--toggle o-sg-section__button" data-toggle-css>Show CSS</button>
        </section>
        <article class="js--section-source o-sg-section__section o-sg-section__section--source o-sg-section__section--visible">
          ${fs.readFileSync(filePath, 'utf8')}
        </article>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--html">${fs.readFileSync(exampleHtmls[index], 'utf8').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
      </article>
    `;
  });

  const result = indexHtml.replace(/<!-- {CUT AND INJECT HERE} -->/g, imports + html);

  fs.writeFile(`${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/index.html`, result, (_err) => {
    if (_err) {
      console.log(_err); // eslint-disable-line
    } else {
      console.log(`\nMain Index.html written with ${previewHtmls.length} examples\n`); // eslint-disable-line
    }
  });
});
