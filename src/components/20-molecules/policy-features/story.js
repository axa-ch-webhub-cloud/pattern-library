// eslint-disable-next-line import/no-extraneous-dependencies
import { CarSvg, TickSvg, UmbrellaSvg } from '@axa-ch/materials/images';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import { STYLE_WHITELIST } from './index';
import readme from './README.md';

export default {
  title: 'Components/Policy Features',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
};

export const PolicyFeatures = ({
  variants,
  title,
  itemTitleRadio,
  itemTitle,
  itemIconUrl,
  itemDescription,
}) => {
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
PolicyFeatures.args = {
  variants: '',
  title: 'A 5 star car insurance with affordable premium services',
  itemTitleRadio: 'y',
  itemTitle: 'Get Discount',
  itemIconUrl: '',
  itemDescription: 'A 5 star car insurance with affordable premium services',
};

PolicyFeatures.argTypes = {
  variants: {
    name: 'variant',
    control: {
      type: 'select',
      options: STYLE_WHITELIST.concat('thisStyleIsNotInWhitelist', ''),
    },
  },
  itemTitleRadio: {
    name: 'Show title?',
    control: {
      type: 'radio',
      options: { yes: 'y', no: 'n' },
    },
  },
  itemTitle: { name: 'title (set title of first item)' },
  itemIconUrl: {
    name: 'icon (load svg icon of first element from this url instead)',
  },
  itemDescription: { name: 'description (set description of first item)' },
};
