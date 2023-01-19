import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/Datepicker',
  parameters: {
    readme,
    usage: {
      propsPureHTML: 'locale="de-CH" year="2020" month="1" day="20"',
      propsReact: 'locale="de-CH" year={2020} month={1} day={1}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Datepicker = ({
  inputfield,
  locale,
  year,
  month,
  day,
  allowedyears,
  disabled,
  autofocus,
  checkMark,
  label,
  monthtitle,
  yeartitle,
  invaliddatetext,
  invalid,
  placeholder,
  marginTop,
  width,
}) => html`
  <div
    style="background-color: lightgrey;margin-top: ${marginTop}px; width: 500px"
  >
    <axa-datepicker
      id="datepicker-react"
      locale="${locale}"
      style="width:${width}"
      ?inputfield="${inputfield}"
      ?autofocus="${autofocus}"
      ?checkMark="${checkMark}"
      ?disabled="${disabled}"
      .allowedyears="${allowedyears}"
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
