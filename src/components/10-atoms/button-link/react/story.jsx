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
import AXAButtonLinkReact from './AXAButtonLinkReact';
import Readme from '../README.md';

const storyButton = storiesOf('Atoms/Button Link/React', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const blueBackgroundStyle = 'background-color: #00008f; padding: 10px;';

storyButton.add('Button Link', () => {
  const options = {
    None: '',
    Red: 'red',
    Secondary: 'secondary',
    Inverted: 'inverted',
  };

  // TODO:: Move icon variants into icons and export it from there
  const iconOptions = {
    None: '',
    'Arrow Right': 'arrow-right',
    Collapse: 'collapse',
    Document: 'document',
    Download: 'download',
    Email: 'email',
    Expand: 'expand',
    Mobile: 'mobile',
    Phone: 'phone',
    Search: 'search',
    Upload: 'upload',
  };

  const buttonText = text('Text', 'Click me');
  const variants = radios('Variant', options, '');
  const icons = select('Icon', iconOptions);
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const large = boolean('large', false); // should probably be a variant.

  const div = document.createElement('div');

  if (variants === 'inverted') {
    div.style = blueBackgroundStyle;
  }

  ReactDOM.render(
    <AXAButtonLinkReact
      disabled={disabled}
      large={large}
      variant={variants}
      motionOff={motionOff}
      icon={icons}
    >
      {buttonText}
    </AXAButtonLinkReact>,
    div
  );
  return div;
});
