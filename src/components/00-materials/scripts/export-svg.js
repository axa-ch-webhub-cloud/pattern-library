/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const outdent = require('outdent');

const camelise = str =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
const componentName = name => name.trim().replace(/\s+/g, '-');
const camelCase = _camelCase =>
  camelise(componentName(_camelCase.replace('.', '-')).replace(/-/g, ' '));
const toClassName = _className =>
  camelCase(_className).replace(/^\w/, c => c.toUpperCase());
const cleanFileName = _fileName => {
  return _fileName
    .replace(/ /g, '-')
    .replace(/&/, '')
    .replace(/\(/, '')
    .replace(/\)/, '')
    .replace(/^([\d-])/, '_$1') // add _ if first character is a digit
    .toLowerCase();
};

const importIconsPath = './icons-raw';
const exportIconsPath = './icons';
const importMaterialIconsPath = './icons-raw/material-design';
const exportMaterialIconsPath = './icons/material-design';

const importImagesPath = './images-raw';
const exportImagesPath = './images';

function readdirAndSaveSvgToJs(importPath, exportPath) {
  fs.readdir(importPath, (err, items) => {
    if (err) {
      throw new Error(`Cannot find files. Error: ${err}`);
    }

    let namedExports = '';
    items.forEach(icon => {
      if (/\.svg/.test(icon)) {
        const iconPath = path.resolve(importPath, icon);
        const contents = fs
          .readFileSync(iconPath, 'utf8')
          .replace(/(\r\n|\n|\r)/gm, '');

        let fileName = path.basename(icon);
        fileName = cleanFileName(fileName);
        const className = toClassName(fileName);

        fs.mkdirSync(path.resolve(exportPath), {
          recursive: true,
        });
        // Generate a js file forEach svg file found
        fs.writeFileSync(
          path.resolve(exportPath, `${fileName}.js`),
          outdent`export default '${contents}';`,
          'utf8'
        );

        namedExports += outdent`export { default as ${className} } from './${fileName}.js';`;
      }
    });

    fs.writeFileSync(`${exportPath}/index.js`, namedExports, { flag: 'a' }); // append data to file
  });
}

// clear output files
if (!fs.existsSync(exportIconsPath)) {
  fs.mkdirSync(exportIconsPath);
}
if (!fs.existsSync(exportMaterialIconsPath)) {
  fs.mkdirSync(exportMaterialIconsPath);
}
if (!fs.existsSync(exportImagesPath)) {
  fs.mkdirSync(exportImagesPath);
}
fs.writeFileSync(`${exportIconsPath}/index.js`, '');
fs.writeFileSync(`${exportMaterialIconsPath}/index.js`, '');
fs.writeFileSync(`${exportImagesPath}/index.js`, '');

// Proceed icons folder
readdirAndSaveSvgToJs(importIconsPath, exportIconsPath);
readdirAndSaveSvgToJs(importMaterialIconsPath, exportMaterialIconsPath);

// Proceed images folder
fs.readdir(importImagesPath, { withFileTypes: true }, (err, dirents) => {
  if (err) {
    throw new Error('Error proceeding images folder');
  }

  // check directories
  dirents.forEach(dirent => {
    if (dirent.isDirectory() && dirent.name !== '.tmp') {
      readdirAndSaveSvgToJs(
        `${importImagesPath}/${dirent.name}`,
        exportImagesPath
      );
    }
  });

  // check files of first level dir
  readdirAndSaveSvgToJs(importImagesPath, exportImagesPath);
});
