/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAButtonLink from './AXAButtonLink';
import DemoButtonClick from './DemoButtonLinkClick';

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
  title: 'Examples/Button Link/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
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
  ReactDOM.render(
    <div style={{ backgroundColor: invertedBgs[variants], padding: '10px' }}>
      <AXAButtonLink
        href={href}
        external={external}
        variant={variants}
        size={sizes}
        icon={icons}
        disabled={disabled}
        motionOff={motionOff}
      >
        {buttonText}
      </AXAButtonLink>
    </div>,
    wrapper
  );
  return wrapper;
};

Story.args = {
  buttonText: 'Contact us',
  href: '#',
  external: false,
  variants: '',
  sizes: '',
  icons: '',
  motionOff: false,
  disabled: false,
};

Story.argTypes = {
  buttonText: {
    name: 'set button-link content',
  },
  variants: {
    name: 'variant',
    control: { type: 'radio', options: variantOptions },
  },
  sizes: { name: 'size', control: { type: 'radio', options: sizeOptions } },
  icons: { name: 'icon', control: { type: 'select', options: iconList } },
};

export const Clickable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonClick />, div);
  return div;
};
