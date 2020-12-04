import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Button',
  parameters: {
    readme,
    changelog,
    options: { showPanel: true },
  },
};

const variantOptions = {
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

const sizeOptions = {
  default: '',
  large: 'large',
  small: 'small',
};

const typesOptions = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

export const Button = ({
  buttonText,
  variants,
  sizes,
  icons,
  motionOff,
  disabled,
  types,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variants.includes('inverted')
        ? `background-color: ${invertedBgs[variants]}; padding: 10px;`
        : ''}"
    >
      <axa-button
        type="${types}"
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        >${buttonText}
      </axa-button>
    </div>
  `;
  render(template, wrapper);
  return wrapper;
};

Button.args = {
  buttonText: 'Calculate Premium',
  variants: '',
  sizes: '',
  icons: '',
  motionOff: false,
  disabled: false,
  types: 'button',
};

Button.argTypes = {
  buttonText: {
    name: 'set button content',
  },
  variants: {
    name: 'variant',
    control: { type: 'radio', options: variantOptions },
  },
  sizes: { name: 'size', control: { type: 'radio', options: sizeOptions } },
  icons: { name: 'icon', control: { type: 'select', options: iconList } },
  types: { name: 'type', control: { type: 'select', options: typesOptions } },
};
