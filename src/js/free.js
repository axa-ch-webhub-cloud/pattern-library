export function free(object, name) {
  if (name in object) {
    return delete object[name];
  }
}

export function freeByValue(object, value) {
  const keys = Object.keys(object);
  const length = keys.length;

  for(let i=0; i<length; ++i) {
    const key = keys[i];
    if (this[key] === value) {
      return delete this[key];
    }
  }
}

export default {
  free,
  freeByValue,
}
