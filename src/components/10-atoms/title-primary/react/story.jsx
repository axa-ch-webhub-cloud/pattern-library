/* global document */
import { storiesOf } from '@storybook/html';
import { select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXATitlePrimary from './AXATitlePrimaryReact';
import Readme from '../README.md';

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  'size-4': 'size-4',
  'size-5': 'size-5',
  'size-6': 'size-6',
};

storiesOf('Atoms/Title Primary/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Title Primary', () => {
    const variant = select('variant', variantOptions, '')

    const div = document.createElement('div');
    ReactDOM.render(
      <AXATitlePrimary variant={variant}>Title Primary</AXATitlePrimary>
      , div
    );
    return div;
  });
