export const args = {
  label: 'Please describe the course of events',
  checkMark: false,
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  counter: 'Still ##counter## characters left',
  counterMax: 'Over character limit!',
};

export const argTypes = {
  label: 'Please describe the course of events',
  name: { control: 'text' },
  refId: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'text' },
  checkMark: { control: 'boolean' },
  disabled: { control: 'boolean' },
  readonly: { control: 'boolean' },
  required: { control: 'boolean' },
  invalid: { control: 'boolean' },
  counter: { control: 'text' },
  counterMax: { control: 'text' },
  maxLength: { control: 'text' },
};
