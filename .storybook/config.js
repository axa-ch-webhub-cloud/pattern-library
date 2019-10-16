import '@axa-ch/patterns-library-polyfill';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';
import logo from '../src/static/svg/logo-axa.svg';

addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'AXA Living Styleguide',
      brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
      brandImage: logo,
    }),
  },
});

addDecorator(addReadme);

const components = require.context('../src/components', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const demos = require.context('../src/demo', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(() => {
  components.keys().forEach(components);
  demos.keys().forEach(demos);
}, module);
