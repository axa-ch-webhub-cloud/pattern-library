import isRequiredHelper from './is-required-helper';

// link https://stackoverflow.com/questions/8758340/regex-to-detect-locales
const reLocale = /^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;

// eslint-disable-next-line consistent-return
function localePropType(props, propName, componentName) {
  if (!reLocale.test(props[propName])) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a valid locale.`);
  }
}

export default isRequiredHelper(localePropType);
