function Enum(...args) {
  const length = args.length;
  const obj = {};

  for (let i=0; i<length; ++i) {
    const arg = args[i];

    obj[arg.toUpperCase()] = arg;
  }

  return obj;
}

export default Enum;
