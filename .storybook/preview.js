import '@axa-ch/patterns-library-polyfill';
import { addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', 'Pages', 'Others', ['Welcome', 'Materials', 'Examples']]
    }
  }
});

export const decorators = [withHTML];
