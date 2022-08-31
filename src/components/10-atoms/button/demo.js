import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';
import '../text';
import '../input-text/index';

export default {
  title: 'Examples/Button',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const Clickable = () => {
  const btn = document.createElement('axa-button');
  let counter = 0;
  btn.innerHTML = `counter: ${counter}`;
  btn.addEventListener('click', () => {
    counter += 1;
    btn.innerHTML = `counter: ${counter}`;
  });

  return btn;
};

export const Form = () => {
  const handleSubmit = ev => {
    ev.preventDefault();
    document.getElementById('form-data-details').open = true;
    const $inputDemoForm = document.getElementById('input-demo-form');
    const formData = new FormData($inputDemoForm);

    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData.entries()) {
      const container = document.createElement('span');
      container.textContent = `${pair[0]}: ${pair[1]}`;
      container.id = `${pair[0]}-id`;
      document.getElementById('form-data').appendChild(container);
    }
  };

  return html`
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
    <form>
      <p>
        I&apos;m type reset Button in a form, if you type something - on click I
        should reset the input
      </p>
      <input type="text" />
      <axa-button type="reset">Reset Input</axa-button>
    </form>
  `;
};
