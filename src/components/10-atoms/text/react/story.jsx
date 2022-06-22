import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
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
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Story', () => {
    const container = document.createElement('div');
    const variant = select('variant', variantOptions, '');
    const addSpanTag = boolean('Add <span> tag', false);
    const text = `Is your car your pride and joy, or just a means of getting from A to B ? Whichever applies to you, it'll certainly have the best insurance with us. Calculate your premium online – You keep your advisor even when you purchase from us online.`;
    const root = createRoot(container);
    root.render(
      <AXAText variant={variant}>
        {addSpanTag ? <span>{text}</span> : text}
      </AXAText>
    );

    return container;
  });
