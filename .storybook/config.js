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

// theme - logo some sort of broken
addParameters({
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: 'light',
      brandTitle: 'AXA Living Styleguide',
      brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop-v2',
      brandImage: logo,
    }),
  },
});

const materials = require.context('../src/components/00-materials', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const atoms = require.context('../src/components/10-atoms', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const molecules = require.context('../src/components/20-molecules', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const organisms = require.context('../src/components/30-organisms', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

const demo = require.context('../src/demo', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(
  () =>
    [].concat(
      materials.keys().forEach(materials),
      atoms.keys().forEach(atoms),
      molecules.keys().forEach(molecules),
      organisms.keys().forEach(organisms),
      demo.keys().forEach(demo)
    ),
  module
);
