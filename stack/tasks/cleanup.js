const del = require('del'); // eslint-disable-line import/no-extraneous-dependencies
const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument.

if (ENV === constants.ENV.PROD) {
  del.sync(['dist/**', 'docs/**']);
} else {
  del.sync(['.tmp/**']);
}
