export const args = {
  variant: 'default',
  tagless: false,
  italic: false,
  bold: false,
  slot: `Is your car your pride and joy, or just a means of getting from A to
    B ? Whichever applies to you, it will certainly have the best
    insurance with us. Calculate your premium online – You keep your
    advisor even when you purchase from us online.`,
};

const variants = {
  default: '',
  'size-2': 'size-2',
  'size-3': 'size-3',
  'size-4': 'size-4',
};

export const argTypes = {
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  tagless: { control: 'boolean' },
  italic: { control: 'boolean' },
  bold: { control: 'boolean' },
  slot: { control: 'text' },
};
