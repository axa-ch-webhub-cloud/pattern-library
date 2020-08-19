import './additional-polyfills-ie11.js'; // TODO: remove this line and the file on upgrading to 6.X
import '@axa-ch/patterns-library-polyfill';

import { addParameters, configure, addDecorator } from '@storybook/html';
import { addReadme } from 'storybook-readme/html';
import { withHTML } from './addons/codepreview/decorators/html';

// Old demos were removed with the commit 508818e6452ff9201f2107487cded7f605cad841. If not used till Jan 2021 -> delete this comment

addParameters({
  readme: {
    codeTheme: 'github',
  },
});

//addDecorator(addReadme);
addDecorator(withHTML);

// TODO: remove the lines below (and use the documented way to load stories) on upgrading to 6.X:
const landingpage = require.context('../src/other/landingpage', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
// N.B. don't-look-into-node-modules behaviour uses negative lookbehind (?<!) as part of its regular expression
// (https://v8.dev/blog/regexp-lookbehind-assertions), which is supported for node 9 and greater
const components = require.context('../src/components', true, /(?<!node_modules.*)(story|demo)\.(js|jsx)$/);
const pages = require.context('../src/pages', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(() => {
  landingpage.keys().forEach(landingpage);
  components.keys().forEach(components);
  pages.keys().forEach(pages);
}, module);
