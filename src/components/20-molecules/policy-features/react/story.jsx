/* global document */
// eslint-disable-next-line import/no-extraneous-dependencies
import { CarSvg, UmbrellaSvg, TickSvg } from '@axa-ch/materials/images';
import React from 'react';
import ReactDOM from 'react-dom';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import changelog from '../CHANGELOG.md';
import { STYLE_WHITELIST } from '../index';
import readme from '../README.md';
import AXAPolicyFeaturesItemReact from './AXAPolicyFeaturesItemReact';
import AXAPolicyFeaturesReact from './AXAPolicyFeaturesReact';

export default {
  title: 'Examples/Policy Features/React',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
    controls: { disabled: false },
    options: { showPanel: true },
  },
};

export const Story = ({
  variants,
  title,
  itemTitleRadio,
  itemTitle,
  itemIconUrl,
  itemDescription,
}) => {
  const div = document.createElement('div');

  ReactDOM.render(
    <AXAPolicyFeaturesReact title={title} variant={variants}>
      <AXAPolicyFeaturesItemReact
        title={itemTitleRadio === 'y' ? itemTitle : ''}
        description={itemDescription}
        icon={itemIconUrl || CarSvg}
      />
      <AXAPolicyFeaturesItemReact
        title="24/7 assistance"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
        icon={UmbrellaSvg}
      />
      <AXAPolicyFeaturesItemReact
        title="Discount partners"
        description="We reward safe drivers."
        icon={TickSvg}
      />
      <AXAPolicyFeaturesItemReact
        title="Online & Apps"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
        icon={CarSvg}
      />
    </AXAPolicyFeaturesReact>,
    div
  );
  return div;
};

Story.args = {
  variants: '',
  title: 'A 5 star car insurance with affordable premium services',
  itemTitleRadio: 'y',
  itemTitle: 'Get Discount',
  itemIconUrl: '',
  itemDescription: 'A 5 star car insurance with affordable premium services',
};

Story.argTypes = {
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
