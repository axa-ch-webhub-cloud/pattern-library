/* global document */
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import wrap from '../../../../other/demo/react/utils/wrap-render-react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATopContentBar from './AXATopContentBarReact';

const variantOptions = {
  none: '',
  warning: 'warning',
};

storiesOf('Examples/Top Content Bar/React', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  /* Default */
  .add('Story', () => {
    const ctatext = text('ctatext', '');
    const variant = select('variant', variantOptions, '');
    const href = text('href', '');
    const textValue = text(
      'Text',
      'Undefined flighting object detected in your region. People are paniking. Stay calm'
    );
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
