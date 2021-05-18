import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const localeOptions = {
  'de-CH': 'de-CH',
  'it-CH': 'it-CH',
  'fr-CH': 'fr-CH',
  'en-CH': 'en-CH',
  'en-GB': 'en-GB',
  'it-IT': 'it-IT',
  'invalid/ unsupported': 'ff-XX', // To show the default language fallback scenario
};

export default {
  title: 'Components/Datepicker',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      propsPureHTML: 'locale="de-CH" year="2020" month="1" day="20"',
      propsReact: 'locale="de-CH" year={2020} month={1} day={1}',
    },
    changelog,
  },
};

export const Datepicker = () => {
  const inputfield = boolean('inputfield', false);
  const locale = select('locale', localeOptions, 'de-CH');
  const year = number('year', 2020);
  const month = number('month', 4);
  const day = number('day', 22);
  const allowedYears = object('allowedyears', ['1971-2000', 2012, 2014, '2018-2022']);
  const disabled = boolean('disabled', false);
  const autofocus = boolean('autofocus', false);
  const checkMark = boolean('checkMark', false);
  const label = text('label', '');
  const monthtitle = text('monthtitle', 'Choose Month');
  const yeartitle = text('yeartitle', 'Choose Year');
  const invaliddatetext = text('invaliddatetext', 'Invalid date');
  const invalid = boolean('invalid', false);
  const placeholder = text('placeholder', 'Please select a date');
  const marginTop = number('margin-top', 0);
  const width = text('width (not an attribute)', '');

  const wrapper = document.createElement('div');

  const template = html`
    <div style="background-color: lightgrey;margin-top: ${marginTop}px; width: 500px">
      <axa-datepicker locale="${locale}" style="width:${width}" ?inputfield="${inputfield}" ?autofocus="${autofocus}" ?checkMark="${checkMark}" ?disabled="${disabled}" .allowedyears="${allowedYears}" year="${year}" month="${month}" day="${day}" placeholder="${placeholder}" ?invalid="${invalid}" invaliddatetext="${invaliddatetext}" label="${label}" monthtitle="${monthtitle}" yeartitle="${yeartitle}" data-test-id="datepicker"></axa-datepicker>
      <span>This is a simple text next to datepicker element. You can check datapickers width with me.</span>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
