import {
  createSharedButtonArgs,
  sharedButtonArgTypes,
} from '../../../utils/button-story-helpers';

export const args = {
  href: '#',
  external: false,
  ...createSharedButtonArgs({ slot: 'Contact us' }),
};

export const argTypes = {
  href: {
    control: 'text',
  },
  external: {
    control: 'boolean',
  },
  ...sharedButtonArgTypes,
};
