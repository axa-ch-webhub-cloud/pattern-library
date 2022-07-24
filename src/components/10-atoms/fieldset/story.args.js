export const args = {
  horizontal: 'none',
};

const horizontals = {
  none: null,
  stretch: 'stretch',
  horizontal: 'horizontal',
};

export const argTypes = {
  horizontal: {
    control: 'radio',
    mapping: horizontals,
    options: Object.keys(horizontals),
    labels: horizontals,
  },
  error: {
    control: 'text',
  },
};
