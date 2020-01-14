import '@axa-ch/patterns-library-polyfill';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';
import logo from '../src/static/svg/logo-axa.svg';

import "../src/components/10-atoms/icon/index";
import "../src/components/10-atoms/text/index";
import "../src/components/30-organisms/container/index";
import "../src/components/10-atoms/button/index";
import "../src/components/10-atoms/button-link/index";
import "../src/components/10-atoms/carousel/index";
import "../src/components/10-atoms/checkbox/index";
import "../src/components/10-atoms/fieldset/index";
import "../src/components/10-atoms/heading/index";
import "../src/components/10-atoms/radio/index";
import "../src/components/10-atoms/input-file/index";
import "../src/components/10-atoms/input-text/index";
import "../src/components/10-atoms/link/index";
import "../src/components/10-atoms/textarea/index";
import "../src/components/20-molecules/cookie-disclaimer/index";
import "../src/components/20-molecules/dropdown/index";
import "../src/components/20-molecules/datepicker/index";
import "../src/components/20-molecules/footer-small/index";
import "../src/components/20-molecules/policy-features/index";
import "../src/components/20-molecules/file-upload/index";
import "../src/components/20-molecules/popup/index";
import "../src/components/20-molecules/top-content-bar/index";
import "../src/components/30-organisms/commercial-hero-banner/index";
import "../src/components/30-organisms/footer/index";
import "../src/components/30-organisms/table/index";
import "../src/components/30-organisms/table-sortable/index";
import "../src/components/30-organisms/testimonials/index";

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
