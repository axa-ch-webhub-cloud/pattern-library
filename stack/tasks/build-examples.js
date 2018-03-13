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
const REACT = 'react';
const INDEX = 'index';

const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;
const reGetDemosHtml = /\/src\/[^/]+\/demo\.react\.html$/;

// @TODO: import order seems to be crucial for chrome, whats going on here??
/* eslint-disable */
const sortDown = (a, b) => (a > b) ? -1 : (a < b) ? 1 : 0;
const sortUp = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;

/* eslint-enable */
const buttonsHtml = {
  [ATOMS]: [],
  [MOLECULES]: [],
  [ORGANISMS]: [],
  [REACT]: [],
  [INDEX]: [],
};

const mobileButtonsHtml = {
  [ATOMS]: [],
  [MOLECULES]: [],
  [ORGANISMS]: [],
  [REACT]: [],
  [INDEX]: [],
};

const pageHtml = {
  [ATOMS]: [],
  [MOLECULES]: [],
  [ORGANISMS]: [],
  [REACT]: [],
  [INDEX]: [],
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const createAmoPage = (indexHtml, imports, styles, typeAmo, filePath) => {
  const resultAtoms = indexHtml
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, imports)
    .replace(new RegExp(`<!-- {CUT AND INJECT ACTIVE ${typeAmo.toUpperCase()}} -->`, 'g'), ', "isActive": true')

    .replace(new RegExp('<!-- {CUT AND INJECT ATOMS BUTTONS} -->', 'g'), buttonsHtml[ATOMS].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT ORGANISMS BUTTONS} -->', 'g'), buttonsHtml[ORGANISMS].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT MOLECULES BUTTONS} -->', 'g'), buttonsHtml[MOLECULES].join('\n'))

    .replace(new RegExp('<!-- {CUT AND INJECT ATOMS MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[ATOMS].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT ORGANISMS MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[ORGANISMS].join('\n'))
    .replace(new RegExp('<!-- {CUT AND INJECT MOLECULES MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[MOLECULES].join('\n'))

    .replace(/<!-- {CUT AND INJECT .* BUTTONS} -->/g, '')
    .replace(/<!-- {CUT AND INJECT ACTIVE.*} -->/g, ', "isActive": false')
    .replace(/<!-- {CUT AND INJECT PREVIEWS HERE} -->/g, `
      <style>
        ${styles}
      </style>
      ${pageHtml[typeAmo].join('\n')}
      `);
  fs.writeFileSync(`${filePath}/${typeAmo}.html`, resultAtoms);
};

const createAmoComponents = (amoType, previewName, atomicName, preview, resultCssString, example) => {
  buttonsHtml[amoType].push(`
    ,{
      "links": [
        {"name": "${capitalize(previewName.substring(2, previewName.length))}", "url": "${amoType}.html#${previewName}"}
      ]
    }`);
  mobileButtonsHtml[amoType].push(`
    ,{"name": "${capitalize(previewName.substring(2, previewName.length))}", "url": "${amoType}.html#${previewName}"}`);

  pageHtml[amoType].push(`
      <article class="o-sg-section o-sg-section__atomic-category js--section" id="${previewName}">
        <section class="o-sg-section__section o-sg-section__section--title">
          <h1 class="o-sg-section__section__title">
            <strong class="o-sg-section__section__title--text">${atomicName}</strong>
            <span class="o-sg-section__section__title--text">${previewName.substring(2, previewName.length)}</span>
          </h1>
        </section>
        <article class="js--section-source o-sg-section__section o-sg-section__section--source">
          ${preview}
        </article>
        <section class="o-sg-section__section o-sg-section__section--buttons">
          <axa-button ghost color="red" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="source">Close</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="wc-html">Webcomponent HTML</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="html">Traditional HTML</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="css">CSS</axa-button>
        </section>
        <pre class="js--section-wc-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(preview, htmlLang)}</pre>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(example, htmlLang)}</pre>
        <pre class="js--section-css o-sg-section__section o-sg-section__section--src">${resultCssString ? nsh.highlight(resultCssString.toString(), cssLang) : ''}</pre>
      </article>
    `);
};

dir.files(`${CWD}/src/demos`, (err, allFiles) => {
  allFiles = allFiles.map(adaptSlashes); // eslint-disable-line no-param-reassign
  const demoHtmls = allFiles.filter(_file => _file.match(reGetDemosHtml));
  demoHtmls.forEach((_file) => {
    pageHtml[REACT].push(`<script src="./app/all-demos.js"></script>${fs.readFileSync(_file, 'utf8')}`);
  });
});

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
  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
  const stylesPath = highlightStyles.filter(style => style.name === 'midnight')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');

  const filePath = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}`;

  previewHtmls = previewHtmls.sort(sortUp);
  exampleHtmls = exampleHtmls.sort(sortUp);

  previewHtmls.forEach((_filePath, index) => {
    const partial = _filePath.replace(adaptSlashes(`${CWD}/src/`), '').replace('_preview.html', 'index.js');
    imports += `<script src="${partial}"></script>\n`;

    const name = _filePath.split('/').slice(-2).join('/');
    const previewName = name.replace('/_preview.html', '');

    const example = fs.readFileSync(exampleHtmls[index], 'utf8');
    const preview = fs.readFileSync(_filePath, 'utf8');

    let resultCss;
    let resultCssString;

    try {
      resultCss = sass.renderSync({
        file: _filePath.replace('_preview.html', 'index.scss'),
        outputStyle: 'expanded',
      });
      resultCssString = autoprefixer.process(resultCss.css).css;
    } catch (error) {} // eslint-disable-line

    switch (previewName.substring(0, 2)) {
      case 'a-':
        createAmoComponents(ATOMS, previewName, 'Atom', preview, resultCssString, example);
        break;
      case 'm-':
        createAmoComponents(MOLECULES, previewName, 'Molecule', preview, resultCssString, example);
        break;
      case 'o-':
        createAmoComponents(ORGANISMS, previewName, 'Organism', preview, resultCssString, example);
        break;
      default:
        createAmoComponents(ORGANISMS, previewName, 'Organism', preview, resultCssString, example);
    }
  });

  buttonsHtml[REACT].push(`
    ,{
      "links": [
        {"name": "React", "url": "${REACT}.html"}
      ]
    }`);
  mobileButtonsHtml[REACT].push(`
    ,{"name": "React", "url": "${REACT}.html"}`);

  createAmoPage(indexHtml, imports, styles, ORGANISMS, filePath);
  createAmoPage(indexHtml, imports, styles, MOLECULES, filePath);
  createAmoPage(indexHtml, imports, styles, REACT, filePath);
  createAmoPage(indexHtml, imports, styles, ATOMS, filePath);

  const _indexHtml = indexHtml
    .replace(/<!-- {CUT AND INJECT INDEX HTML HERE} -->/g, `
    <article class="o-sg-section o-sg-section--padded o-sg-section__atomic-category">
      <h1>Welcome to the patterns library!</h1>
      <p>
        This is the core pattern library used for AXA Switzerland. It's based on Web-Components.
        Web-Components are natively supported in modern browsers. This repo contains also polyfills for those less "cool"
        browsers out there. Support is:
      </p>
      <ul>
        <li>ie 11 (Polyfill for template, html import, shadow dom and custom element)</li>
        <li>EDGE (Polyfill for html import, shadow dom and custom element)</li>
        <li>FF (Polyfill for html import, shadow dom and custom element)</li>
        <li>Chrome / Chrome Mobile (100% native)</li>
        <li>Safari / iOS Safari (Polyfill for html import)</li>
      </ul>
      <h2>We embrace the atomic design to split our components!</h2>
    </article>
      `);

  createAmoPage(_indexHtml, imports, styles, INDEX, filePath);
});
