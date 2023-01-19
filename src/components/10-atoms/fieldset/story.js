import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import { args, argTypes } from './story.args.js';
import './index.wc.js';
import '../checkbox/index.wc.js';

export default {
  title: 'Components/Fieldset',
  parameters: {
    readme,
    usage: {
      innerHTML: '...children',
      propsPureHTML: 'horizontal',
      propsReact: 'horizontal',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Fieldset = ({ horizontal, error }) => html`
  <axa-text size="3">
    Resize your browser to a tablet or mobile width to see the effect of
    'horizontal="stretch"'</axa-text
  >
  <br />
  <axa-fieldset horizontal="${horizontal}" error="${error}">
    <axa-checkbox
      label="I agree to conditions of data protection."
      error="Please accept our terms and conditions."
    ></axa-checkbox>
    <axa-checkbox label="I accept the conditions"></axa-checkbox>
    <axa-checkbox
      label="I want to sign up for the newsletter"
      checked
      disabled
    ></axa-checkbox
  ></axa-fieldset>
`;
