import { iconList } from '@axa-ch/icon/icon-list';

export const args = {
  href: 'https%3A%2F%2Fwww.axa.ch%2Fen%2Finformation%2Fdata-protection.html',
  slot: 'Data protection statement',
  external: false,
  variant: 'default',
  icon: 'none',
};

const variants = {
  default: '',
  icon: 'icon',
  red: 'red',
  white: 'white',
  'icon-red': 'icon-red',
  'icon-white': 'icon-white',
  arrowright: 'arrowright',
  arrowleft: 'arrowleft',
  'arrowright-animated': 'arrowright-animated',
  'arrowleft-animated': 'arrowleft-animated',
  'arrowright-red': 'arrowright-red',
  'arrowleft-red': 'arrowleft-red',
  'arrowright-white': 'arrowright-white',
  'arrowleft-white': 'arrowleft-white',
  'arrowright-animated-red': 'arrowright-animated-red',
  'arrowleft-animated-red': 'arrowleft-animated-red',
  'arrowright-animated-white': 'arrowright-animated-white',
  'arrowleft-animated-white': 'arrowleft-animated-white',
  'hyperlink-white': 'hyperlink-white',
  'hyperlink-white-underline': 'hyperlink-white-underline',
  'hyperlink-red': 'hyperlink-red',
  'hyperlink-red-underline': 'hyperlink-red-underline',
};

export const argTypes = {
  href: { control: 'text' },
  slot: { control: 'text' },
  external: { control: 'boolean' },
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
};
