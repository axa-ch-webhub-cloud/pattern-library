const dir = require('node-dir');
const fs = require('fs');
const { adaptSlashes } = require('../utils/adaptslashes.js');
const { capitalize } = require('../utils/capitalize.js');
const constants = require('../constants');
const nsh = require('node-syntaxhighlighter');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const { lstatSync, readdirSync } = require('fs')
const path = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)

// const jsLang = nsh.getLanguage('js');
const htmlLang = nsh.getLanguage('html');
const cssLang = nsh.getLanguage('css');
const highlightStyles = nsh.getStyles();

const ENV = process.env.NODE_ENV; // second element is the first argument.
const CWD = process.cwd();

const ATOMS = 'atoms';
const MOLECULES = 'molecules';
const ORGANISMS = 'organisms';
const REACT = 'react';
const INDEX = 'index';
const SINGLE = 'single-component';

const filePath = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}`;
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

const createAmoPage = (indexHtml, scriptTags, styles, typeAmo, filePath) => {
  const resultAtoms = indexHtml
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, scriptTags.join('\n'))
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

// Basically to test/develop a component on a single page encapsulated from others,to prevent side effects
const createSingleComponentPage = (filePath, template, component, scriptTags) => {
  let out = template;
  out = out
    .replace(new RegExp('<!-- {CUT AND INJECT SINGLECOMPONENT HTML HERE} -->', 'g'), component.pageHtml)
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, scriptTags.join('\n'))
  fs.writeFileSync(`${filePath}`, out);
};

const createAmoComponent = (amoType, previewName, atomicName, preview, resultCssString, example, showStyles = true, showButtons = true) => {
  let component = {
    type: amoType,
    buttonsHtml: '',
    mobileButtonsHtml: '',
    pageHtml: '',
  }
  component.buttonsHtml = `
    ,{
      "links": [
        {"name": "${capitalize(previewName.substring(2, previewName.length))}", "url": "${amoType}.html#${previewName}"}
      ]
    }`;

  component.mobileButtonsHtml = `
    ,{"name": "${capitalize(previewName.substring(2, previewName.length))}",
    "url": "${amoType}.html#${previewName}"}`
    ;

  component.pageHtml = `
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
        ${showButtons ? `
        <section class="o-sg-section__section o-sg-section__section--buttons">
          <axa-button ghost color="red" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="source">Close</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="wc-html">Webcomponent HTML</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="html">Traditional HTML</axa-button>
          <axa-button ghost color="white" motion classes="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="css">CSS</axa-button>
        </section>
        ` : ``}
        ${showStyles ? `
        <pre class="js--section-wc-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(preview, htmlLang)}</pre>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(example, htmlLang)}</pre>
        <pre class="js--section-css o-sg-section__section o-sg-section__section--src">${resultCssString ? nsh.highlight(resultCssString.toString(), cssLang) : ''}</pre>
        ` : ``}
      </article>
    `;

    return component;
};

// Can be improved with the other code
dir.files(`${CWD}/src/demos`, (err, allFiles) => {
  allFiles = allFiles.map(adaptSlashes); // eslint-disable-line no-param-reassign
  const demoHtmls = allFiles.filter(_file => _file.match(reGetDemosHtml));
  demoHtmls.forEach((_file) => {
    pageHtml[REACT].push(`${fs.readFileSync(_file, 'utf8')}<script src="./app/all-demos.js"></script>`);
  });
});

dir.files(`${CWD}/src/components`, (err, allFiles) => {
  if (err) throw err;

  let previewHtmls = [];
  let exampleHtmls = [];
  let filesJavascript = [];

  allFiles.forEach(_file => {
    if (_file.match(/\/components\/[^/]+\/_preview\.html$/)) {
      previewHtmls.push(_file);
    }
    if (_file.match(/\/components\/[^/]+\/_example\.html$/)) {
      exampleHtmls.push(_file);
    }
    if (_file.match(/\/components\/[^/]+\/index\.js$/)) {
      filesJavascript.push(_file);
    }
  });
  
  previewHtmls.sort(sortUp);
  exampleHtmls.sort(sortUp);
  filesJavascript.sort(sortUp);

  if (exampleHtmls.length !== previewHtmls.length || !previewHtmls.length || !exampleHtmls.length) {
    throw new Error('Every component must contain a _preview and a _example html');
  }

  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
  const indexTitle = fs.readFileSync('./src/partials/title.html', 'utf8');
  const singleHtml = fs.readFileSync('./src/single-component.html', 'utf8');

  const stylesPath = highlightStyles.filter(style => style.name === 'midnight')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');
  
  const scriptTags = filesJavascript.map((item) => {
    let distPath = path.relative( path.resolve(process.cwd(), 'src'), item);
    return `<script src="/${distPath}"></script>`;
  });

  // Generate Component Packages / Previews
  previewHtmls.forEach((previewHtmlPath, index) => {
    const exampleHtmlPath = exampleHtmls[index];
    let component = generateComponent(previewHtmlPath, exampleHtmlPath, false, false);
    const componentPreviewIndexPath = previewHtmlPath.replace(adaptSlashes(`${CWD}/src/`), '')
    .replace('_preview.html', 'index.html');
    const componentIndexDestinationPath = `${filePath}/${componentPreviewIndexPath}`;
    registerComponent(component);
    createSingleComponentPage(componentIndexDestinationPath, singleHtml, component, scriptTags);
  });

  //Generate Subpages of component types
  createAmoPage(indexHtml, scriptTags, styles, ORGANISMS, filePath);
  createAmoPage(indexHtml, scriptTags, styles, MOLECULES, filePath);
  createAmoPage(indexHtml, scriptTags, styles, ATOMS, filePath);
  createAmoPage(indexHtml, scriptTags, styles, REACT, filePath);

  const _indexHtml = indexHtml
    .replace(/<!-- {CUT AND INJECT INDEX HTML HERE} -->/g, indexTitle);

  createAmoPage(_indexHtml, scriptTags, styles, INDEX, filePath);
});

const generateComponent = (componentPreviewPath, componentExamplePath, showStyles, showButtons) => {
    const componentDirectory = componentPreviewPath.replace(adaptSlashes(`${CWD}/src/`), '')
      .replace('_preview.html', '');
    const componentDirectoryPath = path.join(componentDirectory); // .tmp/comp
    const scriptTag = `<script src="../../${componentDirectoryPath}index.js"></script>`;
    const name = componentPreviewPath.split('/').slice(-2).join('/');
    const previewName = name.replace('/_preview.html', '');
    const previewHtml = fs.readFileSync(componentPreviewPath, 'utf8');
    const exampleHtml = fs.readFileSync(componentExamplePath, 'utf8');

    let resultCss;
    let resultCssString;

    try {
      resultCss = sass.renderSync({
        file: componentPreviewPath.replace('_preview.html', 'index.scss'),
        outputStyle: 'expanded',
      });
      resultCssString = autoprefixer.process(resultCss.css).css;
    } catch (error) {

    } // eslint-disable-line

    // Create a component object that contains the html
    let component = {}
    switch (previewName.substring(0, 2)) {
      case 'a-':
        component = createAmoComponent(ATOMS, previewName, 'Atom', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      case 'm-':
        component = createAmoComponent(MOLECULES, previewName, 'Molecule', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      case 'o-':
        component = createAmoComponent(ORGANISMS, previewName, 'Organism', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      default:
        throw new Error('Could not determine component type');
    }
  return component;
}

// still not pure... but better.
const registerComponent = (component) => {
  buttonsHtml[component.type].push(component.buttonsHtml);
  mobileButtonsHtml[component.type].push(component.mobileButtonsHtml);
  pageHtml[component.type].push(component.pageHtml);
};