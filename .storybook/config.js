import { configure } from '@storybook/html';

import '@webcomponents/webcomponentsjs';

// Reflect is needed to make Custom Element ES6 Classes working and for IE11
import 'core-js/es6/reflect';
// Promise is needed for IE11 and if withReact is used
import 'core-js/es6/promise';
// IE11 does not support Array.from
import 'core-js/fn/array/from';
// IE11 does not support Object.* which is needed for built-in element polyfill
import 'core-js/fn/object/assign';
import 'core-js/fn/object/create';
import 'core-js/fn/object/define-properties';
import 'core-js/fn/object/set-prototype-of';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('..', true, /_story|_demo/));
}

configure(loadStories, module);
