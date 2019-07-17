/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAButtonReact from './AXAButtonReact';
import Readme from '../README.md';

const storyButton = storiesOf('Atoms/Button/React', module);
storyButton.addDecorator(withKnobs);
storyButton
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Button - default', () => {
    const variantOptions = {
      None: '',
      Red: 'red',
      Secondary: 'secondary',
      Inverted: 'inverted',
    };

    // TODO:: Move icon variants into icons and export it from there there
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
    const variants = radios('Variant', variantOptions, '');
    const icons = select('Icon', iconOptions);
    const motionOff = boolean('motionOff', false);
    const disabled = boolean('disabled', false);
    const large = boolean('large', false); // should probably be a variant.
    const type = radios('Types', { submit: 'submit', reset: 'reset' });

    const div = document.createElement('div');

    if (variants === 'inverted') {
      div.style = 'background-color: #00008f; padding: 10px';
    }

    ReactDOM.render(
      <AXAButtonReact
        variant={variants}
        motionOff={motionOff}
        disabled={disabled}
        large={large}
        type={type}
        icon={icons}
      >
        {buttonText}
      </AXAButtonReact>,
      div
    );
    return div;
  });
