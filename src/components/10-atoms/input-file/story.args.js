import { iconList } from '@axa-ch-webhub-cloud/icon/icon-list';

export const args = {
  text: 'Select a File',
  variant: 'default',
  icon: 'cloud-upload',
  large: false,
  motionOff: false,
  disabled: false,
  accept: 'image/jpg, image/jpeg, application/pdf, image/png',
  capture: false,
  multiple: false,
};

const variants = {
  default: '',
  secondary: 'secondary',
  red: 'red',
  inverted: 'inverted',
};

export const argTypes = {
  text: { control: 'text' },
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  icon: {
    control: 'select',
    options: Object.keys(iconList),
    mapping: iconList,
    labels: iconList,
  },
  large: { control: 'boolean' },
  motionOff: { control: 'boolean' },
  disabled: { control: 'boolean' },
  accept: { control: 'text' },
  capture: { control: 'boolean' },
  multiple: { control: 'boolean' },
};
