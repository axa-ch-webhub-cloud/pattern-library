import { select, text, withKnobs } from '@storybook/addon-knobs';
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
  decorators: [withNoBorder, withKnobs],
  parameters: {
    readme,
    usage: {
      innerHTML: 'Some Text',
      propsPureHTML: 'ctatext="Click Me"',
      propsReact: 'onClick={handler} ctatext="Click Me"',
    },
    changelog,
  },
};

export const TopContentBar = () => {
  const wrapper = document.createElement('div');

  const ctatext = text('ctatext', '');
  const variant = select('variant', variantOptions, '');
  const href = text('href', '');
  const textValue = text(
    'Text',
    'Unidentified flying object detected in your region. People are panicking. Stay calm!'
  );
  const link = text('Add axa-link', '');

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
