/* eslint-disable react/no-danger */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXACookieDisclaimerReact from './AXACookieDisclaimerReact';
import AXALinkReact from './AXALinkReact';
import AXATextReact from './AXATextReact';

export default {
  title: 'Examples/Cookie Disclaimer/React',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
    controls: { disabled: false },
    options: { showPanel: true },
  },
};

export const Story = ({
  buttonname,
  title,
  description,
  dataProtection,
  link,
  variant,
}) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <>
      <AXACookieDisclaimerReact
        onClick={() => {
          document.getElementById(
            'checkbox-output'
          ).innerHTML = `Clicked on: ${Date.now()}`;
        }}
        title={title}
        variant={variant}
        buttonname={buttonname}
      >
        <p>
          {description}
          <AXALinkReact variant="arrowright-animated-white" href={link}>
            {dataProtection}
          </AXALinkReact>
        </p>
      </AXACookieDisclaimerReact>
      <AXATextReact id="checkbox-output">Clicked on:</AXATextReact>
    </>,
    div
  );
  const warning = document.createElement('div');
  warning.innerHTML = `
    <!-- This is code only for the demo -->
    <br/>
    <div style="border: 1px solid red; padding: 10px;">
    <h1>This is not rendered by the component. This story disappears after click (Empty your cache and/or localStorage if this page is only showing this message</h1>
    </div>`;
  div.appendChild(warning);

  return div;
};

Story.args = {
  buttonname: 'Accept',
  title: 'Terms and conditions of data protection',
  variant: '',
  description:
    // eslint-disable-next-line max-len
    'We use cookies and analysis tools to improve the user friendliness of the Internet website and personalise the advertising of AXA and advertising partners. More details:',
  dataProtection: 'Data protection',
  link: 'https://axa.ch/de/informationen/datenschutz.html',
};

Story.argTypes = {
  variant: {
    name: 'variant (Drag your browser smaller to see text behind it)',
    control: { type: 'select', options: ['', 'fixed'] },
  },
  description: { name: 'set a description' },
  dataProtection: { name: 'set a link text' },
  link: { name: 'set a link address' },
};
