import React from 'react';
import { CarSvg, TickSvg, UmbrellaSvg } from '@axa-ch/materials/images';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container';
import AXAPolicyFeaturesItemReact from './AXAPolicyFeaturesItemReact';
import AXAPolicyFeaturesReact from './AXAPolicyFeaturesReact';

export default {
  title: 'Examples/Policy Features/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const PolicyFeatures = ({
  title,
  variant,
  firstItemTitle,
  firstItemDescription,
  firstItemIconUrl,
}) =>
  createReactContainer(
    <AXAPolicyFeaturesReact title={title} variant={variant}>
      <AXAPolicyFeaturesItemReact
        title={firstItemTitle}
        description={firstItemDescription}
        icon={firstItemIconUrl || CarSvg}
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
    </AXAPolicyFeaturesReact>
  );
