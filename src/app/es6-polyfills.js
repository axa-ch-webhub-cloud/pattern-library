// Reflect is needed to make Custom Element ES6 Classes working and for IE11
import 'core-js/es6/reflect';
// Promise is needed for IE11 and if withReact is used
import 'core-js/es6/promise';
// IE11 does not support Array.from
import 'core-js/fn/array/from';
import 'innersvg-polyfill/innersvg';
// Needed for url-prop-type check
import 'url-polyfill';
