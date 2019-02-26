import { addDecorator, configure } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

import '@webcomponents/webcomponentsjs';
import 'core-js/es6/reflect';
import 'core-js/es6/promise';
import 'core-js/fn/array/from';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/create';
import 'core-js/fn/object/define-properties';
import 'core-js/fn/object/set-prototype-of';

// Option defaults.
addDecorator(
  withOptions({
    name: 'AXA Living Styleguide',
    url: 'https://github.com/axa-ch/patterns-library/tree/develop-v2',
    theme: {
      ...themes.normal,
      mainTextFace: '"Source Sans Pro", Arial, sans-serif;',
      menuLink: {
        color: 'black',
      },
      brand: {
        height: '55px',
        paddingLeft: '65px',
        background: `url("/svg/logo-axa.svg") no-repeat`,
      },
      brandLink: {
        border: 'none',
        textAlign: 'left',
      },
    },
  })
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('..', true, /_story|_demo/));
}

configure(loadStories, module);
