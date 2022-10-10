export const args = {
  size: '1',
  tagless: false,
  italic: false,
  bold: false,
  slot: `Is your car your pride and joy, or just a means of getting from A to
    B ? Whichever applies to you, it will certainly have the best
    insurance with us. Calculate your premium online – You keep your
    advisor even when you purchase from us online.`,
};

export const argTypes = {
  size: {
    control: 'radio',
    options: ['1', '2', '3', '4'],
  },
  tagless: { control: 'boolean' },
  italic: { control: 'boolean' },
  bold: { control: 'boolean' },
  slot: { control: 'text' },
};
