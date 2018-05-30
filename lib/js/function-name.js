var reFunctionName = /^\s*function\s+([^(\s]*)\s*/;

function functionName(func) {
  var name = func.name;


  if (!name) {
    // eslint-disable-next-line prefer-template
    var match = ('' + func).match(reFunctionName);
    name = match && match[1];
  }

  return name;
}

export default functionName;