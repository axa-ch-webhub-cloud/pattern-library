import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import { invertedBgs } from '../../../utils/button-story-helpers';
import { args, argTypes } from './story.args';
import './index';

export default {
  title: 'Components/Button Link',
  parameters: {
    readme,
    usage: {
      innerHTML: 'I am a button-link',
      propsReact:
        'href="#axa" motionOff onClick={() => alert("you clicked me")}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const ButtonLink = ({
  href,
  external,
  variant,
  slot,
  size,
  icon,
  disabled,
  motionOff,
}) =>
  html`
    <div
      style="${variant.includes('inverted')
        ? `background-color: ${invertedBgs[variant]}; padding: 10px;`
        : ''}"
    >
      <axa-button-link
        variant="${variant}"
        size="${size}"
        icon="${icon}"
        href="${href}"
        ?external="${external}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        >${slot}
      </axa-button-link>
    </div>
  `;
