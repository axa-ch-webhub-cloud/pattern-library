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

const landingpage = require.context('../src/landingpage', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
// N.B. don't-look-into-node-modules behaviour uses negative lookbehind (?<!) as part of its regular expression
// (https://v8.dev/blog/regexp-lookbehind-assertions), which is supported for node 9 and greater
const components = require.context('../src/components', true, /(?<!node_modules.*)(story|demo)\.(js|jsx)$/);
const demos = require.context('../src/demo', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(() => {
  landingpage.keys().forEach(landingpage);
  components.keys().forEach(components);
  demos.keys().forEach(demos);
}, module);
