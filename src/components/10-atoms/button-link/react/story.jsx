/* global document */
import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import Changelog from '../CHANGELOG.md';
import AXAButtonLink from './AXAButtonLink';

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

const storyButton = storiesOf('Examples/Button Link/React', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  changelog: Changelog,
});

storyButton.add('Story', () => {
  const buttonText = text('text', 'Contact us');
  const href = text('href', '#');
  const external = boolean('external', false);
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('Icon', iconList, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);

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
});
