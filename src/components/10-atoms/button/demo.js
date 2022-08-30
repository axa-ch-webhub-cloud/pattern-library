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

export const IconVisible = () =>
  '<axa-button icon="arrow-right">Next step</axa-button>';

export const Clickable = () => {
  const btn = document.createElement('axa-button');
  let counter = 0;
  btn.innerHTML = `You clicked me: ${counter}, btw my event name is click`;
  btn.addEventListener('click', () => {
    counter += 1;
    btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
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

export const CssWidth = () =>
  '<axa-button variant="red" style="width: 100%">This red button has "width: 100%"</axa-button>' +
  '<axa-text>You can simply set width by setting css width.</axa-text>';

export const SideBySide = () => html`
  <div style="display: flex">
    <axa-button variant="red" style="width: 20%">
      This button has "width: 20%"
    </axa-button>
    <axa-button style="width: 500px">
      This button has "width: 500px"
    </axa-button>
  </div>
  <axa-text>Place two buttons side by side with flexbox.</axa-text>
`;
