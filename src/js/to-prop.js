import PropTypes from './prop-types';

const regexJson = /^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;

/**
 * Try to parse a string value by analsing its type and find the best fitting behaviour.
 *
 * @param {String} value - The string to parse.
 * @param {String} [name] - Normally an attribute's name.
 * @param {String} [type] - What tipe is passed. If none is set, behave as HTML SPEC.
 * @returns {*} - Returns the value of the string - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function toTypedProp(value, name, type) {
  let newValue = value;

  // @todo: complex PropTypes like `oneOf`, `oneOfType`, `arrayOf`, etc. are missing
  switch (type) {
    case PropTypes.string:
    case PropTypes.string.isRequired:
      return value;

    case PropTypes.bool:
    case PropTypes.bool.isRequired:
      if (!value || (name === value)) {
        return true;
      }

    // eslint-disable no-fallthrought
    case PropTypes.number:
    case PropTypes.number.isRequired:
    case PropTypes.object:
    case PropTypes.object.isRequired:
    case PropTypes.array:
    case PropTypes.array.isRequired:
    default:
    // eslint-enable no-fallthrought

      if (regexJson.test(value)) {
        try {
          newValue = JSON.parse(value);
        } catch (error) {
          // eslint-disable-next-line
          console.error(`Attribute ${name} has an error:\n${error}\n`, value);
        }
      }
  }

  return newValue;
}

/**
 * Try to parse a string value by `JSON.parse`.
 *
 * @param {String} value - The string to parse.
 * @param {String} [name] - Normally an attribute's name.
 * @param {String} [type] - What tipe is passed. If none is set, behave as HTML SPEC.
 * @returns {*} - Returns the value of the string - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function toProp(value, name, type) {
  let newValue = value;

  if (type) {
    return toTypedProp(value, name, type);
  }

  // If no type, use HTML Spec for attributes
  if (!value || (name === value)) {
    newValue = true;
  } else if (regexJson.test(value)) {
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      // eslint-disable-next-line
      console.error(`Attribute ${name} has an error:\n${error}\n`, value);
    }
  }

  return newValue;
}

export default toProp;
