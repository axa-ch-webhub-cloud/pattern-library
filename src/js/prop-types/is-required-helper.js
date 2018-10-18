function isRequiredHelper(requiredPropType) {
  function propType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }

    return requiredPropType(props, propName, componentName);
  }

  propType.isRequired = requiredPropType;

  return propType;
}

export default isRequiredHelper;
