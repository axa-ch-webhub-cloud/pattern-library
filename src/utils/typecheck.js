const typecheck = (self, mode) => {
  const { properties, tagName } = self.constructor;
  const propertyNames = Object.keys(properties);
  const fixErrors = mode && typeof mode === 'object';
  const typeErrors = {};

  propertyNames.forEach(key => {
    const { type, check } = properties[key];
    if (!check) {
      return;
    }
    const value = self[key];
    const valueType = typeof value;
    const typeSpec = (type || { name: 'Undefined' }).name;
    let typeViolation = false;

    switch (typeSpec) {
      case 'Array':
        typeViolation = !Array.isArray(value);
        break;
      case 'Object':
        typeViolation =
          value === null || valueType !== 'object' || Array.isArray(value);
        break;
      case 'String':
        typeViolation = valueType !== 'string';
        break;
      default:
        /* don't check Boolean for now, because everything can be coerced to this type */
        break;
    }

    if (typeViolation) {
      typeErrors[
        key
      ] = `expected ${typeSpec} value, got value of type '${valueType}'`;

      if (fixErrors) {
        const defaultValue = mode[key];
        self[key] = defaultValue;

        typeErrors[key] += ` (fixed via default value ${JSON.stringify(
          defaultValue
        )})`;
      }
    }
  });

  const errors = Object.keys(typeErrors);
  let errorString = '';

  if (errors.length) {
    const format = keys =>
      keys
        .map(property => `"${property}": ${typeErrors[property]}`)
        .join('\n');

    errorString = `<${tagName}> properties type violations detected - ${format(
      errors
    )}`;

    if (mode === 'throw') {
      throw new Error(errorString);
    }

    if (fixErrors) {
      // eslint-disable-next-line no-console
      console.warn(errorString);
    }
  }

  return errorString;
};

export default typecheck;
