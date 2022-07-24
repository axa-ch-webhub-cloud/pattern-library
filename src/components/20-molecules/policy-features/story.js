import { html } from 'lit';
import { CarSvg, TickSvg, UmbrellaSvg } from '@axa-ch/materials/images';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Policy Features',
  parameters: {
    readme,
    usage: {
      propsPureHTML: 'title="Your main title" variant="axa-blue"',
      propsReact: 'title="Your main title" variant="axa-blue"',
    },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const PolicyFeatures = ({
  variant,
  title,
  firstItemTitle,
  firstItemIconUrl,
  firstItemDescription,
}) => html`
  <axa-policy-features title="${title}" variant="${variant}">
    <axa-policy-features-item
      title="${firstItemTitle}"
      description="${firstItemDescription}"
      icon="${firstItemIconUrl || CarSvg}"
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
