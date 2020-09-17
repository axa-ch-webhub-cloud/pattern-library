import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const variantOptions = {
  none: '',
  warning: 'warning',
};

export default {
  title: 'Components/Top Content Bar',
  decorators: [withNoBorder],

  parameters: {
    readme,
    changelog,
  },
};

export const TopContentBar = ({ ctatext, variant, href, textValue, link }) => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-top-content-bar
      variant="${variant}"
      href="${href}"
      ctatext="${ctatext}"
    >
      ${textValue}
      ${link
        ? html`
            <axa-link>${link}</axa-link>
          `
        : ''}
    </axa-top-content-bar>
  `;

  render(template, wrapper);
  return wrapper;
};
TopContentBar.args = {
  ctatext: '',
  variant: '',
  href: '',
  textValue:
    'Unidentified flying object detected in your region. People are panicking. Stay calm!',
  link: '',
};

TopContentBar.argTypes = {
  variant: { control: { type: 'radio', options: variantOptions } },
  textValue: { name: 'set content' },
  link: { name: 'set link text' },
};
