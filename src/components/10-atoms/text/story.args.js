export const args = {
  variant: 'default',
  wrapSlotInSpan: false,
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
  semibold: 'semibold',
  bold: 'bold',
};

export const argTypes = {
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  wrapSlotInSpan: { control: 'boolean' },
  slot: { control: 'text' },
};
