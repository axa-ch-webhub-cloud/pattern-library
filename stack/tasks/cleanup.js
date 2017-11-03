const del = require('del');
const constants = require('../constants');
const ENV = process.argv[2]; // second element is the first argument.

if (ENV === constants.ENV.PROD) {
  del.sync(['dist/**']);
} else {
  del.sync(['.tmp/**']);
}
