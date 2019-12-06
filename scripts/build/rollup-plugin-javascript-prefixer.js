/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const fs = require('fs');

const jsFilesToPrefix = glob
  .sync('**/*.js', {
    ignore: [
      'node_modules/**/*',
      'dist/**/*',
      'lib/**/*',
      'index.react.js',
      '**demo.js',
      '**.bak',
      '**test**',
      '**story**',
    ],
  })
  .map(f => `./${f}`);

const componentPackageJson = require(`${process.cwd()}/package.json`);

const types = new Map();
types.set('10-atoms', 'a-');
types.set('20-molecules', 'm-');
types.set('30-organisms', 'o-');

const componentName = componentPackageJson.name.replace('@axa-ch/', '');
const cwdAsStringArray = process.cwd().split('/');
const componentTypePrefix = types.get(
  cwdAsStringArray[cwdAsStringArray.length - 2]
); // atom (a-) / molecule (m-) / organism (o-)
const newPrefix = `nva${componentPackageJson.version.replace(/\./g, '-')}`;

export const componentInfo = {
  prefix: newPrefix, // newPrefix
  standardComponentClassPrefix: componentTypePrefix + componentName, // a-button-link componentName
  cssPrefix: `${newPrefix}_${componentTypePrefix}${componentName}`, // .nva1-1-1_a-button-link prefixedComponentName
};

const parseFile = file => {
  fs.copyFileSync(file, `${file}.bak`);
  const content = fs.readFileSync(file, 'utf8');
  const afterReplace = content
    .split(`"${componentInfo.standardComponentClassPrefix}`)
    .join(`"${componentInfo.cssPrefix}`)
    .split(`'${componentInfo.standardComponentClassPrefix}`)
    .join(`'${componentInfo.cssPrefix}`)
    .split(` ${componentInfo.standardComponentClassPrefix}`)
    .join(` ${componentInfo.cssPrefix}`);
  fs.writeFileSync(file, afterReplace);
};

let counter = 0;

export default function jsPrefixer() {
  return {
    name: 'js-prefixer',
    buildStart: () => {
      if (counter === 0) {
        jsFilesToPrefix.forEach(f => {
          parseFile(f);
        });
      }
    },
    buildEnd: () => {
      if (counter === 2) {
        jsFilesToPrefix.forEach(file => {
          fs.copyFileSync(`${file}.bak`, file);
          fs.unlinkSync(`${file}.bak`);
        });
      }
      ++counter;
    },
  };
}
