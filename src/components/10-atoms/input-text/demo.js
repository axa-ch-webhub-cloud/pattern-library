/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Input text/Demos', module)
  .addDecorator(withMarkdown(Readme))

  .add('Feature - Input Text works in a form', () => {
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
            id="default"
            required
            label="Default Label"
            name="default">
          </axa-input-text>
          <axa-input-text
            id="email"
            required
            type="email"
            name="email"
            label="Email Label">
          </axa-input-text>
          <axa-input-text
            id="password"
            required
            label="Password Label"
            name="password"
            type="password">
          </axa-input-text>
            <div style="margin-top: 1rem">
              <axa-button id="submit" type="submit">submit</axa-button>
            </div>
            <div>
              <details id="form-data-details" style="display: inline-block; margin-top: 1rem;">
                <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">
                  form content
                </summary>
                <div id="form-data" style="display: flex; flex-direction: column; margin-top: 10px"></div>
              </details>
            </div>
          </form>
        </fieldset>
      </form>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
