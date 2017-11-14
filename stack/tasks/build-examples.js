"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');
const nsh = require('node-syntaxhighlighter');

// const jsLang = nsh.getLanguage('js');
const htmlLang = nsh.getLanguage('html');
const highlightStyles = nsh.getStyles();

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;

const sorter = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  // a muss gleich b sein
  return 0;
};

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
  const stylesPath = highlightStyles.filter(style => style.name === 'eclipse')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');

  previewHtmls = previewHtmls.sort(sorter);
  exampleHtmls = exampleHtmls.sort(sorter);

  previewHtmls.forEach((filePath, index) => {
    const partial = filePath.replace(`${CWD}/src/`, '').replace('_preview.html', 'index.html');
    imports += `<link rel="import" href="${partial}" > \n`;
    const name = filePath.split('/').slice(-2).join('/');

    let example = fs.readFileSync(exampleHtmls[index], 'utf8');
    const preview = fs.readFileSync(filePath, 'utf8');

    let previewName = name.replace('/_preview.html', '');

    let atomicName = '';
    switch (previewName.substring(0, 2)) {
      case 'a-':
        atomicName = 'Atom';
        break;
      case 'm-':
        atomicName = 'Molecule';
        break;
      case 'o-':
        atomicName = 'Organism';
        break;
      default:
        atomicName = 'Organism';
    }

    previewName = previewName.substring(2, previewName.length);

    if (example.trim(' ') === '<!--take-preview-->') {
      example = preview.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    html +=
    `
      <style>
        ${styles}
      </style>
      <article class="js--section o-sg-section">
        <section class="o-sg-section__section o-sg-section__section--title">
          <h1 class="o-sg-section__title">
            <strong class="o-sg-section__title--strong">${atomicName}</strong>
            <span class="o-sg-section__title--normal">${previewName}</span>
          </h1>
          <button class="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="source">Show PREVIEW</button>
          <button class="js--toggle o-sg-section__button" data-toggle="html">Show HTML</button>
          <button class="js--toggle o-sg-section__button" data-toggle="css">Show CSS</button>
        </section>
        <article class="js--section-source o-sg-section__section o-sg-section__section--source o-sg-section__section--visible">
          ${preview}
        </article>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--html">${nsh.highlight(example, htmlLang)}</pre>
        <pre class="js--section-css o-sg-section__section o-sg-section__section--css"></pre>
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
