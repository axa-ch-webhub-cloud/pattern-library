import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';
import '../../10-atoms/button';

export default {
  title: 'Examples/Datepicker/Pure HTML',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const InAForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    document.getElementById('form-data').open = true;
    const formData = new window.FormData(event.target);
    let n = 0;
    for (const entries = formData.entries(); !entries.next().done; n++);
    document.getElementById('form-data-date').textContent = `${formData.get(
      'date'
    )} (of ${n} submittable elements)`;
  };

  return html`
    <form id="datepicker-form" @submit="${handleSubmit}">
      <fieldset>
        <legend>Date</legend>
        <axa-datepicker
          data-test-id="datepicker-forms"
          name="date"
          inputfield
          required
          label="Insurance date"
          placeholder="Bitte Datum wählen"
          year="2020"
          month="1"
          day="2"
          allowedyears="[2020]"
        ></axa-datepicker>
        <axa-button type="submit" id="datepicker-forms-submit">OK</axa-button>
        <details
          id="form-data"
          style="display: block; margin-top: 2rem; width: 300px"
        >
          <summary
            style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none"
          >
            form content
          </summary>
          <div
            id="datepicker-forms-content"
            style="display:table; padding: 5px 0"
          >
            date = <span id="form-data-date"></span>
          </div>
        </details>
        <label>
          <input
            type="checkbox"
            @change="${({ target }) => {
              document.querySelector(
                'axa-datepicker[data-test-id="datepicker-forms"]'
              ).disabled = target.checked;
            }}"
          />
          disable datepicker
        </label>
      </fieldset>
    </form>
  `;
};

export const WithOnchangeHandler = () =>
  html`
    <axa-datepicker
      inputfield
      data-test-id="datepicker-onchange"
      name="date"
      required
      label="Choose a date"
      allowedyears='["1971-2020"]'
      year="2020"
      month="1"
      day="29"
      @change="${({ detail: { name, value } }) => {
        document.querySelector(
          '.event-log'
        ).value += `{"name":"${name}","value":"${value}"}\n\n`;
      }}"
    ></axa-datepicker>
    <textarea
      class="event-log"
      placeholder="event log..."
      rows="31"
      cols="30"
    ></textarea>
  `;

export const SetWidthWithInlineStyle = () =>
  html`
    <axa-datepicker
      style="width: 200px"
      inputfield
      data-test-id="datepicker-onchange"
      name="date"
      required
      label="Choose a date"
      allowedyears='["1971-2020"]'
      year="2020"
      month="1"
      day="29"
    ></axa-datepicker>
  `;
