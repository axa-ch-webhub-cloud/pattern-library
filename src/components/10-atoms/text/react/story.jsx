/* global document */
import { storiesOf } from '@storybook/html';
import { select, boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';
import AXAText from './AXATextReact';

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  bold: 'bold',
};

storiesOf('Examples/Text/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Story', () => {
    const div = document.createElement('div');
    const variant = select('variant', variantOptions, '');
    const addSpanTag = boolean('Add <span> tag', false);
    const text = `Is your car your pride and joy, or just a means of getting from A to B ? Whichever applies to you, it'll certainly have the best insurance with us. Calculate your premium online – You keep your advisor even when you purchase from us online.`;
    ReactDOM.render(
      <AXAText variant={variant}>
        {addSpanTag ? <span>{text}</span> : text}
      </AXAText>,
      div
    );
    return div;
  });
