/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import AXATopContentBar from './AXATopContentBarReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

import wrap from '../../../../demo/react/utils/wrap-render-react';

storiesOf('Molecules/Top content bar/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Top content bar - default', () => {
    return wrap(
      <AXATopContentBar href="http://www.axa.ch" ctatext="Go to axa.ch">
        Default
      </AXATopContentBar>
    );
  })

  .add('Top content bar - variant: secondary', () => {
    return wrap(
      <AXATopContentBar
        href="http://www.axa.ch"
        ctatext="Go to axa.ch"
        variant="warning"
      >
        warning
      </AXATopContentBar>
    );
  })

  .add('Top content bar - icon onClick', () => {
    return wrap(
      <AXATopContentBar
        ctatext="Click me"
        onClick={ev => {
          ev.preventDefault();
          // eslint-disable-next-line no-alert, no-undef
          alert('on AXATopContentBar click');
        }}
      >
        Any text here
      </AXATopContentBar>
    );
  });
