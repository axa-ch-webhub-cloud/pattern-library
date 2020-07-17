import '@axa-ch/patterns-library-polyfill';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';
import { withA11y } from '@storybook/addon-a11y';
import logo from '../src/static/svg/logo-axa.svg';
import { withHTML } from './addons/codepreview/decorators/html';

// Old demos were removed with the commit 508818e6452ff9201f2107487cded7f605cad841. If not used till Jan 2021 -> delete this comment

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
    showPanel: true,
  },
});

addDecorator(addReadme);
addDecorator(withHTML);
addDecorator(withA11y);

const landingpage = require.context('../src/other/landingpage', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const gettingStarted = require.context('../src/other/getting-started', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
// N.B. don't-look-into-node-modules behaviour uses negative lookbehind (?<!) as part of its regular expression
// (https://v8.dev/blog/regexp-lookbehind-assertions), which is supported for node 9 and greater
const components = require.context('../src/components', true, /(?<!node_modules.*)(story|demo)\.(js|jsx)$/);
const pages = require.context('../src/pages', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(() => {
  landingpage.keys().forEach(landingpage);
  gettingStarted.keys().forEach(gettingStarted);
  components.keys().forEach(components);
  pages.keys().forEach(pages);
}, module);
