import { html } from 'lit';
import { args, argTypes, invertedBgs } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Button',
  parameters: {
    readme,
    usage: {
      innerHTML: 'I am a button',
      propsReact: 'motionOff onClick={() => alert("you clicked me")}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Button = ({
  variant,
  type,
  slot,
  size,
  icon,
  disabled,
  motionOff,
  href,
  external,
  block,
}) => html`
  <div
    style="${variant.includes('inverted')
      ? `background-color: ${invertedBgs[variant]}; padding: 10px;`
      : ''}"
  >
    <axa-button
      type="${type}"
      variant="${variant}"
      size="${size}"
      icon="${icon}"
      ?disabled="${disabled}"
      ?motionoff="${motionOff}"
      ?block="${block}"
      href="${href}"
      ?external="${external}"
      >${slot}
    </axa-button>
  </div>
`;
