import createRefId from '../../../utils/create-ref-id';

export const args = {
  refId: `checkbox-${createRefId()}`,
  label: 'I agree to conditions of data protection.',
  name: 'my-checkbox',
  variant: 'square',
  checked: true,
  disabled: false,
  required: false,
  styled: false,
};

export const argTypes = {
  refId: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  name: {
    control: 'text',
  },
  variant: {
    control: 'radio',
    options: [
      'square',
      'checkmark',
      'checkmark-inverted',
      // not officially supported yet
      // 'inverted-square': 'inverted-square' ,
    ],
  },
  checked: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  error: {
    control: 'text',
  },
  required: {
    control: 'boolean',
  },
  styled: {
    control: 'boolean',
  },
};
