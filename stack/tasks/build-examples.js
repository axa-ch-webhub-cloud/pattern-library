const dir = require('node-dir');
const fs = require('fs');
const { adaptSlashes } = require('../utils/adaptslashes.js');
const { capitalize } = require('../utils/capitalize.js');
const constants = require('../constants');
const nsh = require('node-syntaxhighlighter');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const path = require('path');

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

const addMenuStrings = (indexHtml, scriptTags, typeAmo) => indexHtml
  .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, scriptTags.join('\n'))
  .replace(new RegExp(`<!-- {CUT AND INJECT ACTIVE ${typeAmo.toUpperCase()}} -->`, 'g'), ', "isActive": true')

  .replace(new RegExp('<!-- {CUT AND INJECT PREFIX} -->', 'g'), ENV === constants.ENV.PROD ? '/patterns-library' : '')

  .replace(new RegExp('<!-- {CUT AND INJECT ATOMS BUTTONS} -->', 'g'), buttonsHtml[ATOMS].join('\n'))
  .replace(new RegExp('<!-- {CUT AND INJECT ORGANISMS BUTTONS} -->', 'g'), buttonsHtml[ORGANISMS].join('\n'))
  .replace(new RegExp('<!-- {CUT AND INJECT MOLECULES BUTTONS} -->', 'g'), buttonsHtml[MOLECULES].join('\n'))

  .replace(new RegExp('<!-- {CUT AND INJECT ATOMS MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[ATOMS].join('\n'))
  .replace(new RegExp('<!-- {CUT AND INJECT ORGANISMS MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[ORGANISMS].join('\n'))
  .replace(new RegExp('<!-- {CUT AND INJECT MOLECULES MOBILE BUTTONS} -->', 'g'), mobileButtonsHtml[MOLECULES].join('\n'))

  .replace(/<!-- {CUT AND INJECT .* BUTTONS} -->/g, '')
  .replace(/<!-- {CUT AND INJECT ACTIVE.*} -->/g, ', "isActive": false');

const createAmoPage = (indexHtml, scriptTags, styles, typeAmo, _filePath) => {
  const resultAtoms =
    addMenuStrings(indexHtml, scriptTags, typeAmo).replace(/<!-- {CUT AND INJECT PREVIEWS HERE} -->/g, `
      <style>
        ${styles}
      </style>
      ${pageHtml[typeAmo].join('\n')}
      `);
  fs.writeFileSync(`${_filePath}/${typeAmo}.html`, resultAtoms);
};

const createSingleComponentPage = (_filePath, template, component, scriptTags, styles) => {
  let out = template;
  if (ENV === constants.ENV.PROD) {
    const indexHeader = fs.readFileSync('./src/app/partials/header.html', 'utf8');
    out = out.replace(/<!-- {CUT AND INJECT HEADER HTML HERE} -->/g, indexHeader);
    out = addMenuStrings(out, scriptTags, component.type);
  }
  out = out.replace(new RegExp('<!-- {CUT AND INJECT PREFIX} -->', 'g'), ENV === constants.ENV.PROD ? '/patterns-library' : '')
  out += `
  <style>
    ${styles}
  </style>
  `;
  out = out
    .replace(/<!-- {CUT AND INJECT SINGLECOMPONENT HTML HERE} -->/g, component.pageHtml)
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, scriptTags.join('\n'));
  fs.writeFileSync(`${_filePath}`, out);
};

const createAmoComponent = (amoType, previewName, atomicName, preview, resultCssString, example, showStyles = true, showButtons = true) => {
  const component = {
    type: amoType,
    buttonsHtml: '',
    mobileButtonsHtml: '',
    pageHtml: '',
  };
  component.buttonsHtml = `
    ,{
      "links": [
        {"name": "${capitalize(previewName.substring(2, previewName.length))}", "url": "${ENV === constants.ENV.PROD ? '/patterns-library' : ''}/components/${previewName}/index.html"}
      ]
    }`;

  component.mobileButtonsHtml = `
    ,{"name": "${capitalize(previewName.substring(2, previewName.length))}",
    "url": "${ENV === constants.ENV.PROD ? '/patterns-library' : ''}/components/${previewName}/index.html"}`;

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
        ` : ''}
        ${showStyles ? `
        <pre class="js--section-wc-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(preview, htmlLang)}</pre>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(example, htmlLang)}</pre>
        <pre class="js--section-css o-sg-section__section o-sg-section__section--src">${resultCssString ? nsh.highlight(resultCssString.toString(), cssLang) : ''}</pre>
        ` : ''}
      </article>
    `;

  return component;
};

dir.files(`${CWD}/src/demos`, (err, allFiles) => {
  allFiles = allFiles.map(adaptSlashes); // eslint-disable-line no-param-reassign
  const demoHtmls = allFiles.filter(_file => _file.match(reGetDemosHtml));
  demoHtmls.forEach((_file) => {
    pageHtml[REACT].push(`${fs.readFileSync(_file, 'utf8')}<script src="./app/all-demos.js"></script>`);
  });
});

dir.files(`${CWD}/src/components`, (err, allFiles) => {
  if (err) throw err;

  const previewHtmls = [];
  const exampleHtmls = [];
  const filesJavascript = [];

  allFiles.forEach((_file) => {
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

  const indexHtml = fs.readFileSync('./src/app/index.html', 'utf8');
  const indexTitle = fs.readFileSync('./src/app/partials/title.html', 'utf8');
  const singleHtml = fs.readFileSync('./src/app/single-component.html', 'utf8');

  const stylesPath = highlightStyles.filter(style => style.name === 'midnight')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');

  const scriptTags = filesJavascript.map((item) => {
    const distPath = path.relative(path.resolve(process.cwd(), 'src'), item);
    return `<script defer src="${ENV === constants.ENV.PROD ? '/patterns-library' : ''}/${distPath}"></script>`;
  });

  const getPreviewName = (componentPreviewPath) => {
    const name = componentPreviewPath.split('/').slice(-2).join('/');
    return name.replace('/_preview.html', '');
  };

  const getAmoType = (componentPreviewPath) => {
    switch (getPreviewName(componentPreviewPath).substring(0, 2)) {
      case 'a-':
        return ATOMS;
      case 'm-':
        return MOLECULES;
      case 'o-':
        return ORGANISMS;
      default:
        throw new Error('Could not determine component type');
    }
  };

  const createComponent = (componentPreviewPath, componentExamplePath, showStyles, showButtons) => {
    const previewName = getPreviewName(componentPreviewPath);
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
    } catch (error) { } // eslint-disable-line

    // Create a component object that contains the html
    let component = {};
    switch (getAmoType(componentPreviewPath)) {
      case ATOMS:
        component = createAmoComponent(ATOMS, previewName, 'Atom', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      case MOLECULES:
        component = createAmoComponent(MOLECULES, previewName, 'Molecule', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      case ORGANISMS:
        component = createAmoComponent(ORGANISMS, previewName, 'Organism', previewHtml, resultCssString, exampleHtml, showStyles, showButtons);
        break;
      default:
        throw new Error('Could not determine component type');
    }
    return component;
  };

  const registerComponent = (component) => {
    buttonsHtml[component.type].push(component.buttonsHtml);
    mobileButtonsHtml[component.type].push(component.mobileButtonsHtml);
    pageHtml[component.type].push(component.pageHtml);
  };

  const components = [];

  // Register Component Packages / Previews
  previewHtmls.forEach((previewHtmlPath, index) => {
    const exampleHtmlPath = exampleHtmls[index];
    const component = createComponent(previewHtmlPath, exampleHtmlPath, ENV === constants.ENV.PROD, ENV === constants.ENV.PROD);
    registerComponent(component);
    components[index] = component;
  });

  // Generate header for single component pages only for prod and create single pages
  previewHtmls.forEach((previewHtmlPath, index) => {
    const componentPreviewIndexPath = previewHtmlPath.replace(adaptSlashes(`${CWD}/src/`), '')
      .replace('_preview.html', 'index.html');
    const componentIndexDestinationPath = `${filePath}/${componentPreviewIndexPath}`;
    createSingleComponentPage(componentIndexDestinationPath, singleHtml, components[index], scriptTags, styles);
  });

  // Generate Subpages of component types
  createAmoPage(indexHtml, scriptTags, styles, ORGANISMS, filePath);
  createAmoPage(indexHtml, scriptTags, styles, MOLECULES, filePath);
  createAmoPage(indexHtml, scriptTags, styles, ATOMS, filePath);
  createAmoPage(indexHtml, scriptTags, styles, REACT, filePath);

  const _indexHtml = indexHtml
    .replace(/<!-- {CUT AND INJECT INDEX HTML HERE} -->/g, indexTitle);

  createAmoPage(_indexHtml, scriptTags, styles, INDEX, filePath);
});
