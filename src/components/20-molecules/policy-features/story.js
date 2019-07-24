/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import './policy-features-item/index';
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
  <axa-policy-features 
  title="A 5 star car insurance with affordable premium services"
  axaStyle="wild-sand"
  >
    <axa-policy-features-item title="Get Discount"
                         icon="email"
                         alt="Discount Svg Icon"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
    <axa-policy-features-item title="Get Discount"
                         icon="download"
                         alt="Discount Svg Icon"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
    <axa-policy-features-item title="Get Discount"
                         icon="email"
                         alt="Discount Svg Icon"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
    <axa-policy-features-item title="Get Discount"
                         icon="download"
                         alt="Discount Svg Icon"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
  </axa-policy-features>
  `;
});
