export const variants = {
  default: '',
  'axa-blue': 'axa-blue',
  'wild-sand': 'wild-sand',
  white: 'white',
};

export const args = {
  title: 'A 5 star car insurance with affordable premium services',
  variant: 'default',
  firstItemTitle: 'Get Discount',
  firstItemDescription:
    'A 5 star car insurance with affordable premium services',
  firstItemIconUrl: '',
};

export const argTypes = {
  title: {
    control: 'text',
  },
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  firstItemTitle: {
    control: 'text',
  },
  firstItemDescription: {
    control: 'text',
  },
  firstItemIconUrl: {
    control: 'text',
  },
};
