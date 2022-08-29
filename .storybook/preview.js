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

export const parameters = {
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
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'blue', value: '#00f' },
      { name: 'black', value: '#000' },
    ],
  },
};
