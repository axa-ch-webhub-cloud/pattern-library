/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import AXALinkReact from './AXALinkReact';
import Readme from '../README.md';

import customIcon from '../../../../static/svg/logo-axa.svg';
import wrap from '../../../../demo/react/utils/wrap-render-react';

storiesOf('Atoms/Link/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  /* Default */
  .add('Link - default', () => {
    return wrap(<AXALinkReact>Default</AXALinkReact>);
  })

  /* Variants */
  .add('Link - variant: red', () => {
    return wrap(<AXALinkReact variant="red">Red</AXALinkReact>);
  })

  .add('Link - variant: secondary', () => {
    return wrap(<AXALinkReact variant="secondary">Secondary</AXALinkReact>);
  })

  /* Icon */
  .add('Link - icon', () => {
    return wrap(
      <AXALinkReact variant="icon" icon="arrow-right">
        Icon
      </AXALinkReact>
    );
  })

  .add('Link - icon onClick', () => {
    return wrap(
      <AXALinkReact
        onClick={() => {
          // eslint-disable-next-line no-alert, no-undef
          alert('on link click');
        }}
        variant="icon"
        icon="arrow-right"
      >
        Icon
      </AXALinkReact>
    );
  })

  .add('Link - custom icon', () => {
    return wrap(
      <AXALinkReact variant="icon" icon={customIcon}>
        Icon
      </AXALinkReact>
    );
  });
