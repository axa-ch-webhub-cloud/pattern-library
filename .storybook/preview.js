import '@axa-ch/patterns-library-polyfill';
import { addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'What is new', 'Guides', 'Brand Elements', 'Components', 'Pages', 'Examples', 'Others']
    }
  }
});

export const decorators = [withHTML];
