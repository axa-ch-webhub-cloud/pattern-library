const del = require('del');
const constants = require('../constants');
const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  del.sync(['docs/**']);
} else {
  del.sync(['.tmp/**']);
}
