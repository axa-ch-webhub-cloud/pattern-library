/* global document */
import { storiesOf } from '@storybook/html';
import { radios, select, text, withKnobs } from '@storybook/addon-knobs';
import { STYLE_WHITELIST } from './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

const story = storiesOf('Molecules/Policy features', module);
story.addDecorator(withKnobs);
story.addDecorator(withNoBorder);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const ITEM_ICONS = ['email', 'download'];

story.add('Policy features', () => {
  const axastyles = select(
    'axastyle',
    STYLE_WHITELIST.concat('thisStyleIsNotInWhitelist', ''),
    STYLE_WHITELIST[0],
    'axa-policy-features'
  );
  const title = text(
    'title',
    'A 5 star car insurance with affordable premium services',
    'axa-policy-features'
  );

  // props of axa-policy-features-item
  const itemTitleRadio = radios(
    'Show title?',
    { yes: 'y', no: 'n' },
    'y',
    'axa-policy-features-item'
  );
  const itemTitle = text(
    'title (of item)',
    'Get Discount',
    'axa-policy-features-item'
  );
  const itemIcon = select(
    'icon',
    ITEM_ICONS,
    ITEM_ICONS[0],
    'axa-policy-features-item'
  );
  const itemIconUrl = text(
    'icon - load svg icon from this url instead:',
    '',
    'axa-policy-features-item'
  );
  const itemDescription = text(
    'description',
    'A 5 star car insurance with affordable premium services',
    'axa-policy-features-item'
  );

  return `
  <axa-policy-features 
  title="${title}"
  axastyle="${axastyles}"
  >
    <axa-policy-features-item title="${itemTitleRadio === 'y' ? itemTitle : ''}"
                         icon="${itemIconUrl || itemIcon}"
                         description="${itemDescription}">
    </axa-policy-features-item>
    <axa-policy-features-item title="24/7 assistance"
                         icon="download"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text.">
    </axa-policy-features-item>
    <axa-policy-features-item title="Discount partners"
                         icon="email"
                         description="This SVG is loaded externally.">
    </axa-policy-features-item>
    <axa-policy-features-item title="Online & Apps"
                         icon="download"
                         description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online">
    </axa-policy-features-item>
  </axa-policy-features>
  `;
});
