export const args = {
  inputfield: false,
  locale: 'de-CH',
  year: 2020,
  month: 4,
  day: 22,
  allowedyears: ['1971-2000', 2012, 2014, '2018-2022', 2023],
  disabled: false,
  autofocus: false,
  checkMark: false,
  label: '',
  monthtitle: 'Choose Month',
  yeartitle: 'Choose Year',
  invaliddatetext: 'Invalid date',
  invalid: false,
  placeholder: 'Please select a date',
  marginTop: 0,
  width: '',
};

const locales = {
  'de-CH': 'de-CH',
  'it-CH': 'it-CH',
  'fr-CH': 'fr-CH',
  'en-CH': 'en-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'invalid/ unsupported': 'ff-XX', // To show the default language fallback scenario
};

export const argTypes = {
  inputfield: {
    control: 'boolean',
  },
  locale: {
    control: 'select',
    options: Object.keys(locales),
    mapping: locales,
    labels: locales,
  },
  year: { control: 'number' },
  month: { control: 'number' },
  day: { control: 'number' },
  allowedyears: { control: 'object' },
  disabled: { control: 'boolean' },
  autofocus: { control: 'boolean' },
  checkMark: { control: 'boolean' },
  label: { control: 'text' },
  monthtitle: { control: 'text' },
  yeartitle: { control: 'text' },
  invaliddatetext: { control: 'text' },
  invalid: { control: 'boolean' },
  placeholder: { control: 'text' },
  marginTop: { control: 'number' },
  width: { control: 'text' },
};
