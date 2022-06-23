// eslint-disable-next-line import/no-extraneous-dependencies
import { CarSvg, TickSvg, UmbrellaSvg } from '@axa-ch/materials/images';
import { radios, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import changelog from '../CHANGELOG.md';
import { STYLE_WHITELIST } from '../index';
import readme from '../README.md';
import AXAPolicyFeaturesItemReact from './AXAPolicyFeaturesItemReact';
import AXAPolicyFeaturesReact from './AXAPolicyFeaturesReact';

const story = storiesOf('Examples/Policy Features/React', module);
story.addDecorator(withNoBorder);
story.addDecorator(withKnobs);
story
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Story', () => {
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

    const container = document.createElement('div');
    const root = createRoot(container);

    root.render(
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
      </AXAPolicyFeaturesReact>
    );

    return container;
  });
