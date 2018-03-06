const dir = require('node-dir');
const fs = require('fs');
const { adaptSlashes } = require('../utils/adaptslashes.js');
const constants = require('../constants');
const nsh = require('node-syntaxhighlighter');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');

// const jsLang = nsh.getLanguage('js');
const htmlLang = nsh.getLanguage('html');
const cssLang = nsh.getLanguage('css');
const highlightStyles = nsh.getStyles();

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();


const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;
// const reGetDemosHtml = /\/src\/[^/]+\/demo\.react\.html$/;

const createAmoPage = (indexHtml, imports, styles, html, typeAmo, filePath) => {
  const buttons = `
    <axa-button tag="a" typeAmo="${typeAmo}.html" motion size="sm">Alle</axa-button>
  `;

  const resultAtoms = indexHtml
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, imports)
    .replace(/<!-- {CUT AND INJECT BUTTONS HERE} -->/g, buttons)
    .replace(new RegExp(`<!-- {CUT AND INJECT ACTIVE ${typeAmo.toUpperCase()}} -->`, 'g'), ', "isActive": true')
    .replace(/<!-- {CUT AND INJECT ACTIVE.*} -->/g, ', "isActive": false')
    .replace(/<!-- {CUT AND INJECT PREVIEWS HERE} -->/g, `

      <style>
        ${styles}
      </style>
      ${html}
      `);

  fs.writeFileSync(`${filePath}/${typeAmo}.html`, resultAtoms);
};

dir.files(`${CWD}/src/components`, (err, _allFiles) => {
  let previewHtmls = [];
  let exampleHtmls = [];
  if (err) throw err;

  const allFiles = _allFiles.map(adaptSlashes);

  previewHtmls = allFiles.filter(_file => _file.match(reGetPreviews));
  exampleHtmls = allFiles.filter(_file => _file.match(reGetExamples));

  if (exampleHtmls.length !== previewHtmls.length || !previewHtmls.length || !exampleHtmls.length) {
    throw new Error('Every component must contain a _preview and a _example html');
  }


  let imports = '';
  let html = '';
  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
  const stylesPath = highlightStyles.filter(style => style.name === 'midnight')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');

  const filePath = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}`;

  previewHtmls.forEach((_filePath, index) => {
    const partial = _filePath.replace(adaptSlashes(`${CWD}/src/`), '').replace('_preview.html', 'index.js');
    imports += `<script src="${partial}"></script>\n`;
  });

  createAmoPage(indexHtml, imports, styles, html, 'atoms', filePath);
  createAmoPage(indexHtml, imports, styles, html, 'molecules', filePath);
  createAmoPage(indexHtml, imports, styles, html, 'organisms', filePath);
  createAmoPage(indexHtml, imports, styles, html, 'index', filePath);
});
