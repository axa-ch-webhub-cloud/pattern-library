/* global document */
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

export default {
  title: 'Examples/Top Content Bar/React',
  decorators: [withNoBorder],

  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({ ctatext, variant, href, textValue, link }) => {
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
};

Story.args = {
  ctatext: '',
  variant: '',
  href: '',
  textValue:
    'Unidentified flying object detected in your region. People are panicking. Stay calm!',
  link: '',
};

Story.argTypes = {
  variant: { control: { type: 'radio', options: variantOptions } },
  textValue: { name: 'set content' },
  link: { name: 'set link text' },
};
