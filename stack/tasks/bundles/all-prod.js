const polyfill = require('./polyfill');
const app = require('./app');
const components = require('./components');


polyfill();
app();
components.bundleAllFiles();
