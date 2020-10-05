import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

export default {
  title: 'Components/Cookie Disclaimer',
  decorators: [withNoBorder, withKnobs],

  parameters: {
    changelog: Changelog,
  },
};

export const CookieDisclaimer = () => {
  const buttonname = text('buttonname', 'Accept');
  const title = text('text', 'Terms and conditions of data protection');
  const description = text(
    'Description (not an attribute)',
    // eslint-disable-next-line max-len
    'We use cookies and analysis tools to improve the user friendliness of the Internet website and personalise the advertising of AXA and advertising partners. More details:'
  );
  const dataProtection = text(
    'Link text (not an attribute)',
    'Data protection'
  );
  const link = text(
    'Link address (not an attribute)',
    'https://axa.ch/de/informationen/datenschutz.html'
  );
  const fixed = boolean(
    'fixed position (Drag your browser smaller to see text behind it)',
    false
  );

  const wrapper = document.createElement('div');
  const template = html`
    <axa-cookie-disclaimer
      buttonname="${buttonname}"
      title="${title}"
      variant="${fixed ? 'fixed' : ''}"
    >
      <p>${description}</p>
      <axa-link variant="arrowright-animated-white" href="${link}">
        ${dataProtection}
      </axa-link>
    </axa-cookie-disclaimer>

    <!-- This is code only for the demo -->
    <br />
    <div style="border: 1px solid red; padding: 10px;">
      <h1>
        This is not rendered by the component. This story disappears after click
        (Empty your cache and/or localStorage if this page is only showing this
        message)
      </h1>
    </div>
  `;
  render(template, wrapper);
  return wrapper;
};
