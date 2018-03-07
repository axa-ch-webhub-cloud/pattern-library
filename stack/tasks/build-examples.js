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

const ATOMS = 'atoms';
const MOLECULES = 'molecules';
const ORGANISMS = 'organisms';
const INDEX = 'index';

const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;
// const reGetDemosHtml = /\/src\/[^/]+\/demo\.react\.html$/;

// @TODO: import order seems to be crucial for chrome, whats going on here??
/* eslint-disable */
const sortDown = (a, b) => (a > b) ? -1 : (a < b) ? 1 : 0;
const sortUp = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
/* eslint-enable */

const createAmoPage = (indexHtml, imports, styles, html, typeAmo, filePath, buttonsHtml) => {
  const resultAtoms = indexHtml
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, imports)
    .replace(new RegExp(`<!-- {CUT AND INJECT ACTIVE ${typeAmo.toUpperCase()}} -->`, 'g'), ', "isActive": true')
    .replace(new RegExp('<!-- {CUT AND INJECT ORGANISMS BUTTONS} -->', 'g'), buttonsHtml[ORGANISMS].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT MOLECULES BUTTONS} -->', 'g'), buttonsHtml[MOLECULES].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT ATOMS BUTTONS} -->', 'g'), buttonsHtml[ATOMS].join('\n'))
    .replace(/<!-- {CUT AND INJECT .* BUTTONS} -->/g, '')
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
  const buttonsHtml = {
    [ATOMS]: [],
    [MOLECULES]: [],
    [ORGANISMS]: [],
    [INDEX]: [],
  };

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

  previewHtmls = previewHtmls.sort(sortUp);
  exampleHtmls = exampleHtmls.sort(sortUp);

  previewHtmls.forEach((_filePath) => {
    const partial = _filePath.replace(adaptSlashes(`${CWD}/src/`), '').replace('_preview.html', 'index.js');
    imports += `<script src="${partial}"></script>\n`;

    const name = _filePath.split('/').slice(-2).join('/');
    const previewName = name.replace('/_preview.html', '');

    switch (previewName.substring(0, 2)) {
      case 'a-':
        buttonsHtml[ATOMS].push(`
          ,{
            "links": [
              {"name": "${previewName.substring(2, previewName.length)}", "url": "atoms.html"}
            ]
          }`);
        break;
      case 'm-':
        buttonsHtml[MOLECULES].push(`
          ,{
            "links": [
              {"name": "${previewName.substring(2, previewName.length)}", "url": "molecules.html"}
            ]
          }`);
        break;
      case 'o-':
        buttonsHtml[ORGANISMS].push(`
          ,{
            "links": [
              {"name": "${previewName.substring(2, previewName.length)}", "url": "organisms.html"}
            ]
          }`);
        break;
      default:
        buttonsHtml[ORGANISMS].push(`
        ,{
          "links": [
            {"name": "${previewName.substring(2, previewName.length)}", "url": "organisms.html"}
          ]
        }`);
    }
  });

  createAmoPage(indexHtml, imports, styles, html, ORGANISMS, filePath, buttonsHtml);
  createAmoPage(indexHtml, imports, styles, html, MOLECULES, filePath, buttonsHtml);
  createAmoPage(indexHtml, imports, styles, html, ATOMS, filePath, buttonsHtml);
  createAmoPage(indexHtml, imports, styles, html, INDEX, filePath, buttonsHtml);
});
