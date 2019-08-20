/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import AXAButtonLink from './AXAButtonLink';
import { iconOptions } from '../../icon/story';
import {
  variantOptions,
  sizeOptions,
  invertedBgs,
} from '../story';
import Readme from '../README.md';

const storyButton = storiesOf('Atoms/Button Link/React', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyButton.add('Button Link', () => {
  const buttonText = text('text', 'Click me');
  const href = text('href', '#');
  const external = text('external', '');
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('Icon', iconOptions, '');
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
