import { select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const variantOptions = {
  none: '',
  success: 'success',
  attention: 'attention',
  'warning / error': 'warning',
};

const stickyMobileOptions = {
  none: '',
  'sticky bottom mobile': 'true',
};

const overlayDesktopOptions = {
  none: '',
  'overlay on desktop': 'true',
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

  const ctatext = text('ctatext', '');
  const variant = select('variant', variantOptions, '');
  const stickyMobile = select('sticky on mobile', stickyMobileOptions, '');
  const overlayDesktop = select(
    'overlay on desktop',
    overlayDesktopOptions,
    ''
  );
  const icon = select('icon', iconOptions, '');
  const href = text('href', '');
  const textValue = text(
    'Text',
    'Unidentified flying object detected in your region. People are panicking. Stay calm!'
  );
  const link = text('Add axa-link', '');

  setTimeout(() => {
    if (!window.sessionStorage.getItem('top-content-bar-closed')) {
      window.dispatchEvent(new window.Event('axa-top-bar-open'));
    }

    window.addEventListener('axa-top-bar-close', () => {
      window.sessionStorage.setItem('top-content-bar-closed', 'true');
    });
  });

  const template = html`
    <axa-top-content-bar
      variant="${variant}"
      stickymobile="${stickyMobile}"
      overlaydesktop="${overlayDesktop}"
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
  `;

  render(template, wrapper);
  return wrapper;
};
