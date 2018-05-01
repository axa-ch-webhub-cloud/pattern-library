const reFunctionName = /^\s*function\s+([^(\s]*)\s*/;

function functionName(func) {
  let { name } = func;

  if (!name) {
    // eslint-disable-next-line prefer-template
    const match = ('' + func).match(reFunctionName);
    name = match && match[1];
  }

  return name;
}

export default functionName;
