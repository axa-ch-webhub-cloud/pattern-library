/* global document */
import { storiesOf } from '@storybook/html';

import { text, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import AXATopContentBar from './AXATopContentBarReact';
import Readme from '../README.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';

import wrap from '../../../../demo/react/utils/wrap-render-react';

const variantOptions = {
  none: '',
  warning: 'warning',
}

storiesOf('Molecules/Top content bar/React', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Top content bar', () => {

    const ctatext = text('ctatext', '');
    const variant = select('variant', variantOptions, '')
    const href = text('href', '');
    const textValue = text('Text', 'Undefined flighting object detected in your region. People are paniking. Stay calm');
    const link = text('Add axa-link', '');

    return wrap(
      <AXATopContentBar
        variant={variant}
        href={href}
        ctatext={ctatext}
        onClick={() => {
          // eslint-disable-next-line no-alert, no-undef
          alert('on AXATopContentBar click');
        }}
      >
        {textValue} {link ? <axa-link>{link}</axa-link> : ''}
      </AXATopContentBar>
    );
  });
