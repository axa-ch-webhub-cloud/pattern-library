import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

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

const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

export default {
  title: 'Components/Button Link',
  parameters: {
    readme,
    changelog,
  },
};

export const ButtonLink = ({
  buttonText,
  href,
  external,
  variants,
  sizes,
  icons,
  motionOff,
  disabled,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variants.includes('inverted')
        ? `background-color: ${invertedBgs[variants]}; padding: 10px;`
        : ''}"
    >
      <axa-button-link
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        href="${href}"
        ?external="${external}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        >${buttonText}
      </axa-button-link>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
ButtonLink.args = {
  buttonText: 'Contact us',
  href: '#',
  external: false,
  variants: '',
  sizes: '',
  icons: '',
  motionOff: false,
  disabled: false,
};

ButtonLink.argTypes = {
  variants: { control: { type: 'radio', options: variantOptions } },
  sizes: { control: { type: 'radio', options: sizeOptions } },
  icons: { control: { type: 'select', options: iconList } },
};
