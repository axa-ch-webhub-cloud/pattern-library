import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Changelog from './CHANGELOG.md';
import './index';

storiesOf('Examples/Dropdown/Pure HTML', module)
  .addParameters({
    changelog: Changelog,
  })
  .add(
    'In a form',
    () => `<form id="dropdown-form" onsubmit="event.preventDefault();document.getElementById('form-data').open=true;document.getElementById('form-data-lang').textContent=(new FormData(this)).get('lang')">
    <fieldset>
    <legend>Language</legend>
    <axa-dropdown data-test-id="dropdown-forms" name="lang" defaulttitle="Please select language" onchange="document.getElementById('dropdown-form').title += event.detail.value + ',' + event.detail.index + ' '"
    items='[
    {"name": "Deutsch", "value": "DE" },
    {"name": "Français", "value": "FR" },
    {"name": "Italiano", "value": "IT" }
    ]' style="margin-bottom: 1rem"></axa-dropdown>
    <axa-button type="submit">OK</axa-button>
    <details id="form-data" style="display: inline-block;margin-left: 2rem">
    <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">form content</summary>
    <div style="display:table; padding: 5px 0">lang = <span id="form-data-lang"></span></div>
    </details>
    </fieldset>
    </form>
    `
  )
  .add('Items delayed and numeric values', () => {
    const label = text('label', '');
    const value = text('value', '');
    const name = text('name', '');
    const invalid = boolean('invalid', false);
    const defaultTitle = text('defaulttitle', '');
    const error = text('error', 'Error Message');
    const native = boolean('native', false);
    const required = boolean('required', false);
    const checkMark = boolean('checkmark', false);
    const disabled = boolean('disabled', false);
    const dataTestId = text('data-test-id', '');

    const wrapper = document.createElement('div');
    const template = html`
      <axa-dropdown
        value="${value}"
        label="${label}"
        name="${name}"
        datatestid="${dataTestId}"
        defaulttitle="${defaultTitle}"
        error="${error}"
        ?invalid="${invalid}"
        ?checkmark="${checkMark}"
        ?disabled="${disabled}"
        ?required="${required}"
        ?native="${native}"
      ></axa-dropdown>
    `;

    setTimeout(() => {
      document.querySelector('axa-dropdown').setAttribute(
        'items',
        JSON.stringify([
          { name: 'Item 1', value: '', selected: true },
          { name: 'Item 2', value: 1 },
          { name: 'Item 3', value: 2 },
        ])
      );
    }, 2000);

    render(template, wrapper);
    return wrapper;
  });
