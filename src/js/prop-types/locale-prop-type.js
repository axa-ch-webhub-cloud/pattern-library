import isRequiredHelper from "./is-required-helper";

const reLocale = /^([\w]{2})-([\w]{2})/;

// eslint-disable-next-line consistent-return
function localePropType(props, propName, componentName) {
  if (!reLocale.test(props[propName])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a valid locale.`
    );
  }
}

export default isRequiredHelper(localePropType);
