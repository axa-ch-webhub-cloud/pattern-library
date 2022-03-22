import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const variantOptions = {
  none: '',
  success: 'success',
  attention: 'attention',
  warning: 'warning',
};

const iconOptions = {
  None: '',
  Success: 'check',
  Informative: 'info-outline',
  Attention: 'cloudy',
  Error: 'warning-amber',
};

export default {
  title: 'Components/Top Content Bar',
  decorators: [withNoBorder, withKnobs],
  parameters: {
    readme,
    usage: {
      innerHTML: 'Some Text',
      propsPureHTML: 'ctatext="Click Me"',
      propsReact: 'onClick={() => alert("you clicked me")} ctatext="Click Me"',
    },
    changelog,
  },
};

export const TopContentBar = () => {
  const wrapper = document.createElement('div');

  const ctatext = text('Cta text', '');
  const variant = select('Variant', variantOptions, '');
  const stickyMobile = boolean('Sticky on mobile', false);
  const closable = boolean('Closable', false);
  const icon = select('Icon', iconOptions, '');
  const href = text('Href', '');
  const textValue = text(
    'Text',
    'Unidentified flying object detected in your region. People are panicking. Stay calm!'
  );
  const link = text('Add axa-link', '');

  const template = html`
    <h1>HEADER</h1>
    <axa-top-content-bar
      variant="${variant}"
      ?stickymobile="${stickyMobile}"
      ?closable="${closable}"
      icon="${icon}"
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
    <h2>Subheader</h2>
    <h3>Text 1</h3>
    <h3>Text 2</h3>
    <h3>Text 3</h3>
    <h3>Text 4</h3>
  `;

  render(template, wrapper);
  return wrapper;
};
