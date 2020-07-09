import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Dropdown/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
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
  );
