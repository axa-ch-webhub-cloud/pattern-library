import { storiesOf } from '@storybook/web-components';
import { html, render } from 'lit';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

storiesOf('Examples/Datepicker/Pure HTML', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('In a form', () => {
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

    const template = html`
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

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  })
  .add('With onchange handler', () => {
    const template = html`
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

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  })
  .add('Set width with inline style', () => {
    const template = html`
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

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
