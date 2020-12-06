/* global document */
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Examples/Input text/Pure HTML',
  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};
export const InAForm = () => {
  const handleSubmit = ev => {
    ev.preventDefault();
    document.getElementById('form-data-details').open = true;
    const $inputDemoForm = document.getElementById('input-demo-form');
    /* eslint-disable no-undef */
    const formData = new FormData($inputDemoForm);
    /* eslint-disable no-restricted-syntax */
    for (const pair of formData.entries()) {
      const container = document.createElement('span');
      container.textContent = `${pair[0]}: ${pair[1]}`;
      container.id = `${pair[0]}-id`;
      document.getElementById('form-data').appendChild(container);
    }
  };

  const template = html`
    <form id="input-demo-form" @submit="${handleSubmit}">
      <fieldset>
        <legend>input text types - work in forms</legend>
        <axa-input-text
          refId="default"
          required
          label="Default Label"
          name="default"
        >
        </axa-input-text>
        <axa-input-text
          refId="email"
          required
          type="email"
          name="email"
          label="Email Label"
        >
        </axa-input-text>
        <axa-input-text
          refId="password"
          required
          label="Password Label"
          name="password"
          type="password"
        >
        </axa-input-text>
        <div style="margin-top: 1rem">
          <axa-button id="submit" type="submit">submit</axa-button>
        </div>
        <details
          id="form-data-details"
          style="display: inline-block; margin-top: 1rem;"
        >
          <summary
            style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none"
          >
            form content
          </summary>
          <div
            id="form-data"
            style="display: flex; flex-direction: column; margin-top: 10px"
          ></div>
        </details>
      </fieldset>
    </form>
  `;

  const wrapper = document.createElement('div');
  render(template, wrapper);
  return wrapper;
};

export const NativeOninputEventAttribute = () =>
  `<axa-input-text oninput="console.log('input with')"></axa-input-text>`;

export const InfoPopup = () => {
  const info = `<h4>Zeitspanne bis zur Pensionierung</h4>
  <p>Für die Berechnung Ihres monatlichen Einkommens im Alter ist die Zeitspanne bis zum Zeitpunkt Ihrer Pensionierung entscheidend.</p>`;
  return `<div>
            <axa-input-text invalid error="Error Message is cool" label="Cool" info="${info}"></axa-input-text>
            <axa-input-text label="Cool 2"></axa-input-text>
            <axa-input-text label="Cool 3" info="${info}"></axa-input-text>
          </div>`;
};

// to ui test this case we need a story because its not working with controls
export const NoMaxLengthSet = () =>
  '<axa-input-text counter="chars left"></axa-input-text>';

// to ui test this case we need a story because its not working with controls
export const NoCounterSet = () =>
  '<axa-input-text maxlength="50"></axa-input-text>';
