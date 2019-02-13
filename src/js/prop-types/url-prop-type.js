import isRequiredHelper from "./is-required-helper";
import getBaseURI from "../get-base-uri";

// eslint-disable-next-line consistent-return
function urlPropType(props, propName, componentName) {
  try {
    // note older browsers will need the url-polyfill
    // eslint-disable-next-line no-new
    new window.URL(props[propName], getBaseURI());
  } catch (error) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a valid URL. ${
        error.message
      }`
    );
  }

  return null;
}

export default isRequiredHelper(urlPropType);
