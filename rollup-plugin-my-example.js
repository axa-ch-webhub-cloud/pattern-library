const glob = require('glob');
const fs = require('fs');

// eslint-disable-next-line import/no-dynamic-require
const componentPackageJson = require(`${process.cwd()}/package.json`);

// *** CSS & JS-Prefixing
const types = new Map();
types.set('10-atoms', 'a-');
types.set('20-molecules', 'm-');
types.set('30-organisms', 'o-');

const componentName = componentPackageJson.name.replace('@axa-ch/', '');
const cwdAsStringArray = process.cwd().split('/');
const componentTypePrefix = types.get(
  cwdAsStringArray[cwdAsStringArray.length - 2]
); // atom (a-) / molecule (m-) / organism (o-)
const prefix = `nva${componentPackageJson.version.replace(/\./g, '-')}`;
const standardComponentClassPrefix = componentTypePrefix + componentName; // a-button-link
const cssPrefix = `${prefix}_${componentTypePrefix}${componentName}`; // .nva1-1-1_button-link
// *** /CSS

const indexJsFiles = glob.sync('**/index.js', {
  ignore: ['node_modules/**/*', 'dist/**/*', 'lib/**/*'],
});

export default function myExample() {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    buildStart: () => {
      console.log('the build is starting!!!!!');

      indexJsFiles.forEach(file => {
        console.log('Creating: ', `./${file.split('.').join('-bak.')}`);
        fs.copyFileSync(`./${file}`, `./${file.split('.').join('-bak.')}`);
        const content = fs.readFileSync(`./${file}`, 'utf8');
        const afterReplace = content
          .split(`"${standardComponentClassPrefix}`)
          .join(`"${cssPrefix}`)
          .split(`'${standardComponentClassPrefix}`)
          .join(`'${cssPrefix}`)
          .split(` ${standardComponentClassPrefix}`)
          .join(` ${cssPrefix}`);
        fs.writeFileSync(`./${file}`, afterReplace);
      });
    },
    buildEnd: () => {
      console.log('the build is ending!!!!!');

      indexJsFiles.forEach(file => {
        console.log('Moving everything back to: ', `./${file}`);
        fs.copyFileSync(`./${file.split('.').join('-bak.')}`, `./${file}`);
      });
    },
  };
}
