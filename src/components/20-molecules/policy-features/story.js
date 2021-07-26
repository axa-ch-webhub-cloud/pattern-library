// eslint-disable-next-line import/no-extraneous-dependencies
import { CarSvg, TickSvg, UmbrellaSvg } from '@axa-ch/materials/images';
import { radios, select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import { STYLE_WHITELIST } from './index';
import readme from './README.md';

export default {
  title: 'Components/Policy Features',
  decorators: [withKnobs, withNoBorder],
  parameters: {
    readme,
    usage: {
      propsPureHTML: 'title="Your main title" variant="axa-blue"',
      propsReact: 'title="Your main title" variant="axa-blue"',
    },
    changelog,
  },
};

export const PolicyFeatures = () => {
  const variants = select(
    'variant',
    STYLE_WHITELIST.concat('thisStyleIsNotInWhitelist', ''),
    '',
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

  const wrapper = document.createElement('div');
  const template = html`
    <axa-policy-features title="${title}" variant="${variants}">
      <axa-policy-features-item
        title="${itemTitleRadio === 'y' ? itemTitle : ''}"
        description="${itemDescription}"
        icon="${itemIconUrl || CarSvg}"
      ></axa-policy-features-item>
      <axa-policy-features-item
        title="24/7 assistance"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
        icon="${UmbrellaSvg}"
      ></axa-policy-features-item>
      <axa-policy-features-item
        title="Discount partners"
        description="This SVG is loaded externally."
        icon="${TickSvg}"
      ></axa-policy-features-item>
      <axa-policy-features-item
        title="Online & Apps"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
        icon="${CarSvg}"
      ></axa-policy-features-item>
    </axa-policy-features>
  `;

  render(template, wrapper);
  return wrapper;
};
