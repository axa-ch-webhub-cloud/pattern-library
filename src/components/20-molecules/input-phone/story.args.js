export const args = {
  lang: 'de',
  label: 'Phone Number',
  error: 'Invalid phone number',
  countrycode: '+41',
  value: '',
  disabled: false,
  countryflags: false,
};

export const argTypes = {
  lang: {
    control: 'radios',
    options: ['de', 'en', 'it', 'fr'],
  },
  label: {
    control: 'text',
  },
  error: {
    control: 'text',
  },
  countrycode: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  countryflags: {
    control: 'boolean',
  },
};
