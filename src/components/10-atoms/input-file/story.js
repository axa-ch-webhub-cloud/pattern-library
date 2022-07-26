import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import { args, argTypes } from './story.args';
import './index';

export default {
  title: 'Components/Input File',
  parameters: {
    readme,
    usage: {
      innerHTML: 'I am a upload',
      propsReact: 'onChange={() => alert("you interacted with me")}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const InputFile = ({
  text,
  variant,
  icon,
  large,
  motionOff,
  disabled,
  accept,
  capture,
  multiple,
}) => html`
  <div
    style="${variant.includes('inverted')
      ? `background-color: #00008f; padding: 10px;`
      : ''}"
  >
    <axa-input-file
      variant="${variant}"
      icon="${icon}"
      ?large="${large}"
      ?motionOff="${motionOff}"
      ?disabled="${disabled}"
      accept="${accept}"
      text="${text}"
      ?capture="${capture}"
      ?multiple="${multiple}"
    ></axa-input-file>
  </div>
`;
