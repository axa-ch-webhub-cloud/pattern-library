const isObject = value => typeof value === 'object' && !Array.isArray(value) && value !== null;

export default isObject;
