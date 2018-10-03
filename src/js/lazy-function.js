function lazyFunction(f) {
  return function (...args) {
    return f.apply(this, args);
  };
}

export default lazyFunction;
