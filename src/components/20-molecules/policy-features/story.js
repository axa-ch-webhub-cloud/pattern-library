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
    sidebar: Readme
  },
});

const STYLE_WHITELIST = [
  'default',
  'dark-indigo',
  'axa-blue',
  'wild-sand',
  'white',
];

const ITEM_ICONS = ['email', 'download'];

story.add('Policy features', () => {
  const axaStyles = select('axaStyle', STYLE_WHITELIST, STYLE_WHITELIST[0]);
  const title = text('title', 'A 5 star car insurance with affordable premium services');

  // props of axa-policy-features-item
  const itemTitle = text('axa-policy-features-item: title', 'Get Discount');
  const itemIcon = select('axa-policy-features-item: icon', ITEM_ICONS, ITEM_ICONS[0]);
  const itemDescription = text('axa-policy-features-item: description', 'A 5 star car insurance with affordable premium services');

  return `
  <axa-policy-features 
  title="${title}"
  axaStyle="${axaStyles}"
  >
    <axa-policy-features-item title="${itemTitle}"
                         icon="${itemIcon}"
                         description="${itemDescription}">
    </axa-policy-features-item>
    <axa-policy-features-item title="24/7 assistance"
                         icon="download"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text.">
    </axa-policy-features-item>
    <axa-policy-features-item title="Discount partners"
                         icon="http://localhost:6006/static/media/logo-axa.ce44e802.svg"
                         description="This SVG is loaded externally.">
    </axa-policy-features-item>
    <axa-policy-features-item title="Online & Apps"
                         icon="download"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
  </axa-policy-features>
  `;
});
