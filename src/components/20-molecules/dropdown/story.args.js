export const args = {
  label: '',
  value: '',
  name: '',
  defaultTitle: 'Select amount',
  invalid: false,
  error: 'This selection is required.',
  native: false,
  required: false,
  checkMark: false,
  disabled: false,
  dataTestId: '',
  maxheight: '',
  cropText: false,
  showValue: false,
};

export const argTypes = {
  label: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  defaultTitle: {
    control: 'text',
  },
  name: {
    control: 'text',
  },
  invalid: {
    control: 'boolean',
  },
  error: {
    control: 'text',
  },
  native: {
    control: 'boolean',
  },
  datatestid: {
    control: 'text',
  },
  maxheight: {
    control: 'text',
  },
  cropText: {
    control: 'boolean',
  },
  showValue: {
    control: 'boolean',
  },
};
