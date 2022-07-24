export const args = {
  label: '',
  name: '',
  refId: '',
  placeholder: '',
  value: '',
  currency: '',
  error: '',
  info: '',
  checkMark: false,
  disabled: false,
  required: false,
  invalid: false,
  type: 'text',
  maxLength: '50',
  counter: 'Still ##counter## characters left',
  counterMax: 'Over character limit!',
  pattern: '',
  inputmode: '',
  autofocus: false,
};

export const argTypes = {
  label: {
    control: 'text',
  },
  name: {
    control: 'text',
  },
  refId: {
    control: 'text',
  },
  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  currency: {
    control: 'text',
  },
  error: {
    control: 'text',
  },
  info: {
    control: 'text',
  },
  checkMark: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  type: {
    control: 'radio',
    options: ['text', 'email', 'password'],
  },
  maxLength: {
    control: 'text',
  },
  counter: {
    control: 'text',
  },
  counterMax: {
    control: 'text',
  },
  pattern: {
    control: 'text',
  },
  inputmode: {
    control: 'text',
  },
  autofocus: {
    control: 'boolean',
  },
};
