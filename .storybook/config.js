import { addParameters, configure } from '@storybook/html';
import { create } from '@storybook/theming';

import '@webcomponents/webcomponentsjs';
import 'core-js/es6/reflect';
import 'core-js/es6/promise';
import 'core-js/fn/array/from';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/create';
import 'core-js/fn/object/define-properties';
import 'core-js/fn/object/set-prototype-of';

import logo from '../src/static/svg/logo-axa.svg';

// old config
// Option defaults.
// addDecorator(
//   withOptions({
//     name: 'AXA Living Styleguide',
//     url: 'https://github.com/axa-ch/patterns-library/tree/develop-v2',
//     theme: {
//       ...themes.normal,
//       mainTextFace: '"Source Sans Pro", Arial, sans-serif;',
//       menuLink: {
//         color: 'black',
//       },
//       brand: {
//         height: '55px',
//         paddingLeft: '65px',
//         background: `url("/svg/logo-axa.svg") no-repeat`,
//       },
//       brandLink: {
//         border: 'none',
//         textAlign: 'left',
//       },
//     },
//   })
// );

// theme - logo some sort of broken
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'AXA Living Styleguide',
      brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop-v2',
      brandImage: logo,
    }),
  },
});

const materials = require.context('../src/components/materials', true, /\.story\.js$/);
const atoms = require.context('../src/components/atoms', true, /\.story\.js$/);
const molecules = require.context('../src/components/molecules', true, /\.story\.js$/);
const organisms = require.context('../src/components/organisms', true, /\.story\.js$/);

configure(
  () =>
    [].concat(
      materials.keys().forEach(materials),
      atoms.keys().forEach(atoms),
      molecules.keys().forEach(molecules),
      organisms.keys().forEach(organisms)
    ),
  module
);
