const adaptSlashes = (file) => { // eslint-disable-line no-param-reassign
  const isExtendedLengthPath = /^\\\\\?\\/.test(file);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(file);
  return (isExtendedLengthPath || hasNonAscii) ? file : file.replace(/\\/g, '/');
};

module.exports = {
  adaptSlashes,
};
