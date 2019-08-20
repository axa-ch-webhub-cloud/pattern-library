/* global document */
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmailSvg } from '@axa-ch/materials/icons';
import { storiesOf } from '@storybook/html';
import { select, radios, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAPolicyFeaturesReact from './AXAPolicyFeaturesReact';
import AXAPolicyFeaturesItemReact from './AXAPolicyFeaturesItemReact';
import Readme from '../README.md';
import { STYLE_WHITELIST } from '../index';
import withNoBorder from '../../../../../.storybook/addons/no-border';

const story = storiesOf('Molecules/Policy features/React', module);
story.addDecorator(withKnobs);
story.addDecorator(withNoBorder);
story
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Policy features', () => {
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

    const div = document.createElement('div');

    ReactDOM.render(
      <AXAPolicyFeaturesReact title={title} variant={variants}>
        <AXAPolicyFeaturesItemReact
          title={itemTitleRadio === 'y' ? itemTitle : ''}
          description={itemDescription}
          icon={itemIconUrl || EmailSvg}
        />
        <AXAPolicyFeaturesItemReact
          title="24/7 assistance"
          description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
          icon={EmailSvg}
        />
        <AXAPolicyFeaturesItemReact
          title="Discount partners"
          description="We reward safe drivers."
          icon={EmailSvg}
        />
        <AXAPolicyFeaturesItemReact
          title="Online & Apps"
          description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
          icon={EmailSvg}
        />
      </AXAPolicyFeaturesReact>,
      div
    );
    return div;
  });
