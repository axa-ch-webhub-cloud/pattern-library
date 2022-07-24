import { iconList } from '../components/10-atoms/icon/icon-list';

const variants = {
  default: '',
  red: 'red',
  secondary: 'secondary',
  inverted: 'inverted',
  'Inverted-blue-ocean': 'inverted-blue-ocean',
  'inverted-red-tosca': 'inverted-red-tosca',
  'inverted-purple-logan': 'inverted-purple-logan',
  'inverted-green-viridian': 'inverted-green-viridian',
  'inverted-blue-teal': 'inverted-blue-teal',
};

const sizes = {
  default: null,
  large: 'large',
  small: 'small',
};

export const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

export const sharedButtonArgTypes = {
  slot: {
    control: 'text',
  },
  variant: {
    control: 'radio',
    options: Object.keys(variants),
    mapping: variants,
    labels: variants,
  },
  size: {
    control: 'radio',
    options: Object.keys(sizes),
    mapping: sizes,
    labels: sizes,
  },
  icon: {
    control: 'select',
    options: Object.keys(iconList),
    mapping: iconList,
    labels: iconList,
  },
  disabled: {
    control: 'boolean',
  },
  motionOff: {
    control: 'boolean',
  },
};

export function createSharedButtonArgs({
  slot = 'Calculate Premium',
  variant = 'default',
  size = 'default',
  icon = 'none',
  disabled = false,
  motionOff = false,
} = {}) {
  return {
    slot,
    variant,
    size,
    icon,
    disabled,
    motionOff,
  };
}
