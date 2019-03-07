let debugging = false;

const smartlog = {};

Object.defineProperty(smartlog, 'log', {
  get: function() {
    return debugging ? console.log.bind(console) : () => {};
  },
});

function enableDebug() {
  debugging = true;
}

export { smartlog, enableDebug };
