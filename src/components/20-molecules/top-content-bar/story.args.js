export const args = {
  ctatext: '',
  variant: 'default',
  stickymobile: false,
  closable: false,
  icon: 'default',
  slot: 'Unidentified flying object detected in your region. People are panicking. Stay calm!',
  link: '',
  href: '',
};

const variants = {
  default: '',
  success: 'success',
  attention: 'attention',
  warning: 'warning',
};

const icons = {
  none: '',
  success: 'check',
  informative: 'info-outline',
  attention: 'cloudy',
  error: 'warning-amber',
};

export const argTypes = {
  ctatext: { control: 'text' },
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  stickymobile: { control: 'boolean' },
  closable: { control: 'boolean' },
  icon: {
    control: 'radio',
    options: Object.keys(icons),
    mapping: icons,
    labels: icons,
  },
  slot: { control: 'text' },
  link: { control: 'text' },
  href: { control: 'text' },
};
