/* global document */
import { storiesOf } from '@storybook/html';
import { select, boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';


const variantOptions = {
  none: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  bold: 'bold',
};

storiesOf('Atoms/Text', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Text',
    () => {
      const variant = select('variant', variantOptions, '');
      const addSpanTag = boolean('Add <span> tag', false)
      const wrapper = document.createElement('div');
      const template = addSpanTag ? // setting variables in the axaText tag does not work, therefore text is hardcoded twice
        html`<axa-text variant="${variant}">
        yIs your car your pride and joy, or just a means of getting from A to B ? Whichever applies to you, it'll certainly have the best insurance with us. Calculate your premium online – You keep your advisor even when you purchase from us online.
        </axa-text>`
        :
        html`<axa-text variant="${variant}">
        <span>Is your car your pride and joy, or just a means of getting from A to B ? Whichever applies to you, it'll certainly have the best insurance with us. Calculate your premium online – You keep your advisor even when you purchase from us online.</span>
        </axa-text>`;

      render(template, wrapper);
      return wrapper;
    });
