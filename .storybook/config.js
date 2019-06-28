import '@axa-ch/patterns-library-polyfill';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';
import logo from '../src/static/svg/logo-axa.svg';

addDecorator(addReadme);
addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: 'light',
      brandTitle: 'AXA Living Styleguide',
      brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
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
