import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Dropdown', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Dropdown',
    () => `<axa-dropdown title="Please Select" data-test-id="dropdown"
    items='[
    {"name": "Please Select", "value": "Please Select", "disabled": true },
    {"name": "Item 1", "value": "Item 1",  "selected": true },
    {"name": "Item 2", "value": "Item 2" },
    {"name": "Item 3", "value": "Item 3" }
    ]'></axa-dropdown>
    `
  )
  .add(
    'Dropdown Forced Native',
    () => `<axa-dropdown native title="Please Select" data-test-id="dropdown-native"
  items='[
  {"name": "Please Select", "value": "Please Select", "selected": true, "disabled": true },
  {"name": "Item 1", "value": "Item 1" },
  {"name": "Item 2", "value": "Item 2" },
  {"name": "Item 3", "value": "Item 3" }
  ]'></axa-dropdown>`
  )
  .add(
    'Dropdown w/ valid checkmark',
    () => `<axa-dropdown title="Please Select" data-test-id="dropdown-valid" valid
    items='[
    {"name": "Please Select", "value": "Please Select", "selected": true, "disabled": true },
    {"name": "Item 1", "value": "Item 1" },
    {"name": "Item 2", "value": "Item 2" },
    {"name": "Item 3", "value": "Item 3" }
    ]'></axa-dropdown>
    `
  )
  .add(
    'Dropdown w/ error message',
    () => `<axa-dropdown title="Please Select" data-test-id="dropdown-error" error="please select an item"
    items='[
    {"name": "Please Select", "value": "Please Select", "selected": true, "disabled": true },
    {"name": "Item 1", "value": "Item 1" },
    {"name": "Item 2", "value": "Item 2" },
    {"name": "Item 3", "value": "Item 3" }
    ]'></axa-dropdown>
    `
  )
  .add(
    'Dropdown embedded, w/o space for valid checkmark or error message',
    () => `<axa-dropdown embedded
    items='[
    {"name": "Please Select", "value": "Please Select", "selected": true, "disabled": true },
    {"name": "Item 1", "value": "Item 1" },
    {"name": "Item 2", "value": "Item 2" },
    {"name": "Item 3", "value": "Item 3" }
    ]'></axa-dropdown>
    `
  )
  .add(
    'Dropdown inside form',
    () => `<form id="dropdown-form" onsubmit="event.preventDefault();document.getElementById('form-data').open=true;document.getElementById('form-data-lang').textContent=(new FormData(this)).get('lang')">
    <fieldset>
    <legend>Language</legend>
    <axa-dropdown data-test-id="dropdown-forms" name="lang"
    items='[
    {"name": "Please select language", "value": "Please Select", "selected": true, "disabled": true },
    {"name": "Deutsch", "value": "DE" },
    {"name": "Français", "value": "FR" },
    {"name": "Italiano", "value": "IT" }
    ]'></axa-dropdown>
    <axa-button type="submit">OK</axa-button>
    <details id="form-data" style="display: inline-block;margin-left: 2rem">
    <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">form content</summary>
    <div style="display:table; padding: 5px 0">lang = <span id="form-data-lang"></span></div>
    </details>
    </fieldset>
    </form>
    `
  );
