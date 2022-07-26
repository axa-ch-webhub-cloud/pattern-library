import {
  createSharedButtonArgs,
  sharedButtonArgTypes,
} from '../../../utils/button-story-helpers';

export const args = { ...createSharedButtonArgs(), type: 'button' };
export const argTypes = {
  ...sharedButtonArgTypes,
  type: {
    control: 'radio',
    options: ['button', 'submit', 'reset'],
  },
};
