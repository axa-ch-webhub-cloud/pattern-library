import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Cookie Disclaimer',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
};

export const CookieDisclaimer = ({
  buttonname,
  title,
  description,
  dataProtection,
  link,
  variant,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
    <axa-cookie-disclaimer
      buttonname="${buttonname}"
      title="${title}"
      variant="${variant}"
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
CookieDisclaimer.args = {
  buttonname: 'Accept',
  title: 'Terms and conditions of data protection',
  variant: '',
  description:
    'We use cookies and analysis tools to improve the user friendliness of the Internet website and personalise the advertising of AXA and advertising partners. More details:',
  dataProtection: 'Data protection',
  link: 'https://axa.ch/de/informationen/datenschutz.html',
};
CookieDisclaimer.argTypes = {
  variant: {
    name: 'variant (Drag your browser smaller to see text behind it)',
    control: { type: 'select', options: ['', 'fixed'] },
  },
  description: { name: 'set a description' },
  dataProtection: { name: 'set a link text' },
  link: { name: 'set a link address' },
};
