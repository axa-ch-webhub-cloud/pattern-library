import './additional-polyfills-ie11.js'; // TODO: remove this line and the file on upgrading to 6.X
import '@axa-ch/patterns-library-polyfill';

import { addParameters } from '@storybook/html';
import { addReadme } from 'storybook-readme/html';
import { withHTML } from './addons/codepreview/decorators/html';

addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: {}// this is just a workaround for addon-readme
  }
});

export const decorators = [addReadme, withHTML];
