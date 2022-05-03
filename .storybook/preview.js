import '../src/components/05-utils/polyfill/index';
import { addParameters } from '@storybook/html';

const customViewports = {
  xs: {
    name: 'Extra Small (xs)',
    styles: {
      width: '576px',
      height: '100%',
    },
  },
  sm: {
    name: 'Small (sm)',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  md: {
    name: 'Medium (md)',
    styles: {
      width: '992px',
      height: '100%',
    },
  },
  xl: {
    name: 'Extra Large (xl)',
    styles: {
      width: '1200px',
      height: '100%',
    },
  },
  xxl: {
    name: 'Extra Extra Large (xxl)',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
};

addParameters({
  options: {
    showPanel: true,
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        'What is new',
        'Guides',
        'Brand Elements',
        'Components',
        'Pages',
        'Examples',
        'Others',
      ],
    },
  },
  viewport: {
    viewports: customViewports,
  },
});
