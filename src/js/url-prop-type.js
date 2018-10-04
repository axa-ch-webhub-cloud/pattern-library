import getBaseURI from './get-base-uri';

// eslint-disable-next-line consistent-return
function requiredUrlPropType(props, propName, componentName) {
  try {
    // note older browsers will need the url-polyfill
    window.URL(props[propName], getBaseURI());
  } catch (error) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a valid URL. ${error.message}`);
  }

  return null;
}

function urlPropType(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }

  return requiredUrlPropType(props, propName, componentName);
}

urlPropType.isRequired = requiredUrlPropType;

export default urlPropType;
