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
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
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
