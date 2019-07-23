/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import './index';
import Readme from './README.md';

const story = storiesOf('Molecules/Policy features', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});


story.add('Policy features', () => {

  const buttonText = text('Text', 'Click me');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const large = boolean('large', false); // should probably be a variant.
  const type = radios('Types', { submit: 'submit', reset: 'reset' });

  return `
  <axa-policy-features></axa-policy-features>
  `;
});
