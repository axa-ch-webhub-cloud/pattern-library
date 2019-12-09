/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const fs = require('fs');

const componentPackageJson = require(`${process.cwd()}/package.json`);

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

const _getComponentInfo = () => {
  const elementMapping = new Map();
  elementMapping.set('10-atoms', 'a-');
  elementMapping.set('20-molecules', 'm-');
  elementMapping.set('30-organisms', 'o-');

  const cwdAsStringArray = process.cwd().split('/');
  const componentDirectoryName = cwdAsStringArray[cwdAsStringArray.length - 2]
  const customElementName = componentPackageJson.name.replace('@axa-ch/', '');
  // atom (a-) / molecule (m-) / organism (o-)
  const customElementTypePrefix = elementMapping.get(componentDirectoryName); 
  const newPrefix = `nva${componentPackageJson.version.replace(/\./g, '-')}`;
  return {
    prefix: newPrefix, // 'nva1-2-3'
    standardComponentClassPrefix: customElementTypePrefix + customElementName, // a-button-link
    cssPrefix: `${newPrefix}_${customElementTypePrefix}${customElementName}`, // .nva1-2-3_a-button-link
  };
};

export const componentInfo = _getComponentInfo();

/**
 * Look for all classes and replace all that start with the BEM prefix and add
 * the versioned prefix.
 *
 * @param {string} file: Filename, e.g. './index.js'
 */
const _prefixJS = file => {
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

/**
 * Every config will make the prefixer run again. We only want to parse the
 * file once, since the result would anyway stay the same.
 *
 * @param {number} iterations: Number of iterations
 */
export default function jsPrefixer(iterations) {
  let counter;
  return {
    name: 'js-prefixer',
    buildStart: () => {
      if (!counter) {
        counter = iterations;
      }
      if (counter === iterations) {
        jsFilesToPrefix.forEach(f => {
          _prefixJS(f);
        });
      }
    },
    buildEnd: () => {
      if (counter === 1) {
        jsFilesToPrefix.forEach(file => {
          fs.copyFileSync(`${file}.bak`, file);
          fs.unlinkSync(`${file}.bak`);
        });
      }
      counter -= 1;
    },
  };
}
