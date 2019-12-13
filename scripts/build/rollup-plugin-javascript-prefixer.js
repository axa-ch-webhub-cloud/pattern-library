/* eslint-disable import/no-dynamic-require */
const componentPackageJson = require(`${process.cwd()}/package.json`);

const _getComponentInfo = () => {
  const elementMapping = new Map();
  elementMapping.set('10-atoms', 'a-');
  elementMapping.set('20-molecules', 'm-');
  elementMapping.set('30-organisms', 'o-');

  const cwdAsStringArray = process.cwd().split('/');
  const componentDirectoryName = cwdAsStringArray[cwdAsStringArray.length - 2];
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

export default function jsPrefixer() {
  return {
    name: 'js-prefixer',
    transform: code => {
      // Look for all classes and replace all that start with the BEM prefix and add
      // the versioned prefix.
      const afterReplace = code
        .split(`"${componentInfo.standardComponentClassPrefix}`)
        .join(`"${componentInfo.cssPrefix}`)
        .split(`'${componentInfo.standardComponentClassPrefix}`)
        .join(`'${componentInfo.cssPrefix}`)
        .split(` ${componentInfo.standardComponentClassPrefix}`)
        .join(` ${componentInfo.cssPrefix}`);
      return { code: afterReplace };
    },
  };
}
