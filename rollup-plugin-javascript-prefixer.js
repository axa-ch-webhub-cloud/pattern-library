/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const fs = require('fs');

const indexJsFiles = glob.sync('**/index.js', {
  ignore: ['node_modules/**/*', 'dist/**/*', 'lib/**/*'],
});

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

export default function jsPrefixer() {
  return {
    name: 'js-prefixer',
    buildStart: () => {
      indexJsFiles.forEach(file => {
        // Copy file from index.js to index-bak.js
        fs.copyFileSync(`./${file}`, `./${file.split('.').join('-bak.')}`);
        const content = fs.readFileSync(`./${file}`, 'utf8');
        const afterReplace = content
          .split(`"${componentInfo.standardComponentClassPrefix}`)
          .join(`"${componentInfo.cssPrefix}`)
          .split(`'${componentInfo.standardComponentClassPrefix}`)
          .join(`'${componentInfo.cssPrefix}`)
          .split(` ${componentInfo.standardComponentClassPrefix}`)
          .join(` ${componentInfo.cssPrefix}`);
        fs.writeFileSync(`./${file}`, afterReplace);
      });
    },
    buildEnd: () => {
      indexJsFiles.forEach(file => {
        fs.copyFileSync(`./${file.split('.').join('-bak.')}`, `./${file}`);
      });
    },
  };
}
