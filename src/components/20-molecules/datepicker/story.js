import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components',
  parameters: {
    readme,
    changelog,
  },
};

const localeOptions = {
  'de-CH': 'de-CH',
  'it-CH': 'it-CH',
  'fr-CH': 'fr-CH',
  'en-CH': 'en-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'invalid/ unsupported': 'ff-XX', // To show the default language fallback scenario
};

export const Datepicker = ({
  inputfield,
  locale,
  year,
  month,
  day,
  allowedYears,
  disabled,
  autofocus,
  checkMark,
  label,
  monthtitle,
  yeartitle,
  invaliddatetext,
  invalid,
  placeholder,
  width,
  marginTop,
}) => {
  const wrapper = document.createElement('div');

  const template = html`
    <div
      style="background-color: lightgrey;margin-top: ${marginTop}px; width: 500px"
    >
      <axa-datepicker
        locale="${locale}"
        style="width:${width}"
        ?inputfield="${inputfield}"
        ?autofocus="${autofocus}"
        ?checkMark="${checkMark}"
        ?disabled="${disabled}"
        .allowedyears="${allowedYears}"
        year="${year}"
        month="${month}"
        day="${day}"
        placeholder="${placeholder}"
        ?invalid="${invalid}"
        invaliddatetext="${invaliddatetext}"
        label="${label}"
        monthtitle="${monthtitle}"
        yeartitle="${yeartitle}"
        data-test-id="datepicker"
      ></axa-datepicker>
      <span
        >This is a simple text next to datepicker element. You can check
        datapickers width with me.</span
      >
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};

Datepicker.args = {
  inputfield: false,
  locale: 'de-CH',
  year: 2020,
  month: 4,
  day: 20,
  allowedYears: ['1971-2000', 2012, 2014, '2018-2022'],
  disabled: false,
  autofocus: false,
  checkMark: false,
  label: '',
  monthtitle: 'Choose month',
  yeartitle: 'Choose year',
  invaliddatetext: 'Invalid date',
  invalid: false,
  placeholder: 'Please select a date',
  width: '',
  marginTop: 0,
};

Datepicker.argTypes = {
  locale: { control: { type: 'select', options: localeOptions } },
};
