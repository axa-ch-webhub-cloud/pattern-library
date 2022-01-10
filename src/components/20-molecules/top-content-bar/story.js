import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
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
  Attention: 'cloud-queue',
  Error: 'warning',
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
  const overlayDesktop = boolean('Overlay on desktop', false);
  const closable = boolean('Closable', false);
  const initiallyClosed = boolean('Initially closed', false);
  const icon = select('Icon', iconOptions, '');
  const href = text('Href', '');
  const textValue = text(
    'Text',
    'Unidentified flying object detected in your region. People are panicking. Stay calm!'
  );
  const link = text('Add axa-link', '');

  setTimeout(() => {
    const el = document.querySelector('axa-top-content-bar');
    if (!el) {
      return;
    }
    if (window.sessionStorage.getItem('top-content-bar-closed')) {
      el.dispatchEvent(new window.Event('axa-top-content-bar-close'));
    } else {
      el.dispatchEvent(new window.Event('axa-top-content-bar-open'));
    }

    el.addEventListener('axa-top-content-bar-close', () => {
      window.sessionStorage.setItem('top-content-bar-closed', 'true');
    });
  });

  const template = html`
    <h1>HEADER</h1>
    <axa-top-content-bar
      variant="${variant}"
      ?stickymobile="${stickyMobile}"
      ?overlaydesktop="${overlayDesktop}"
      ?closable="${closable}"
      ?initiallyclosed="${initiallyClosed}"
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
