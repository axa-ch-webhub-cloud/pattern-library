import '@axa-ch/patterns-library-polyfill';
import { addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

const customViewports = {
  xs: {
    name: 'xs',
    styles: {
      width: '576px',
      height: '100%',
    },
  },
  sm: {
    name: 'sm',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '992px',
      height: '100%',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1200px',
      height: '100%',
    },
  },
  xxl: {
    name: 'xxl',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
};

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'What is new', 'Guides', 'Brand Elements', 'Components', 'Pages', 'Examples', 'Others']
    },
  },
  viewport: {
    viewports: customViewports,
  },
});

export const decorators = [withHTML];